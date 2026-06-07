#!/usr/bin/env node
/**
 * Post-deploy step: tell the Make.com webhook which news posts just went live,
 * so Make shares them to LinkedIn + Instagram.
 *
 * Reads PUBLISH_SLUGS (comma-separated) and POSTs one payload per slug to
 * MAKE_WEBHOOK_URL. MUST run from the Deploy workflow AFTER the FTP upload, so
 * the post URL and its /social/<slug>.jpg JPEG are reachable when LinkedIn and
 * Instagram fetch them.
 *
 * Payload fields match what the Make scenario expects:
 *   title, url, description, image (JPEG!), category, caption
 */

import { readFile, readdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const SITE = "https://www.meister-signage.ch";
const NEWS_DIR = path.join(process.cwd(), "content", "news");
const WEBHOOK = process.env.MAKE_WEBHOOK_URL;
const SLUGS = (process.env.PUBLISH_SLUGS || "")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);

/** Strip inline markdown (links, bold, italics, code) down to plain text. */
function stripInline(s) {
  return s
    .replace(/!\[[^\]]*\]\([^)]*\)/g, "")     // images
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")   // links → label
    .replace(/\*\*(.+?)\*\*/g, "$1")
    .replace(/\*(.+?)\*/g, "$1")
    .replace(/__(.+?)__/g, "$1")
    .replace(/_(.+?)_/g, "$1")
    .replace(/`(.+?)`/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
}

/** First real prose paragraph of the article body (skips headings/tables/lists). */
function firstParagraph(body) {
  for (const block of body.split(/\n\s*\n/)) {
    const t = block.trim();
    if (!t) continue;
    if (/^(#|>|\||!\[)/.test(t)) continue;             // heading / quote / table / image
    if (/^([-*+]\s|\d+\.\s)/.test(t)) continue;         // list
    return stripInline(t);
  }
  return "";
}

/** Punchy bold lead-ins from the first list/section — great as caption bullets. */
function keyPoints(body, max = 3) {
  const pts = [];
  for (const line of body.split(/\n/)) {
    const m =
      line.match(/^\s*\d+\.\s*\*\*(.+?)\*\*/) ||   // "1. **Label.** …"
      line.match(/^\s*\*\*\d+\.\s*(.+?)\*\*/) ||   // "**1. Label.**"
      line.match(/^\s*[-*+]\s*\*\*(.+?)\*\*/);     // "- **Label** …"
    if (!m) continue;
    const label = stripInline(m[1]).replace(/[.:–—-]+\s*$/, "").trim();
    // Keep bullets punchy: skip long, quoted or question-style labels.
    if (!label || label.length > 60 || label.includes("?") || /["“”]/.test(label)) continue;
    if (!pts.includes(label)) pts.push(label);
    if (pts.length >= max) break;
  }
  return pts;
}

const CATEGORY_TAGS = {
  Gastronomie: ["#Gastronomie", "#Menüboard"],
  Retail: ["#Retail", "#PointOfSale"],
  Hotellerie: ["#Hotellerie", "#Hotel"],
  Events: ["#Events", "#Messe"],
  Unternehmen: ["#Unternehmen"],
  Produkte: ["#Display"],
  Hardware: ["#Display"],
  Trends: ["#Trends"],
};

function hashtags(category) {
  return [...new Set(["#DigitalSignage", "#Schweiz", ...(CATEGORY_TAGS[category] || []), "#DigitaleBeschilderung"])]
    .slice(0, 6)
    .join(" ");
}

/** Build a rich, engaging caption from the article itself (not just the meta description). */
function buildCaption({ title, description, category, body, url }) {
  const lede = firstParagraph(body) || description;
  const pts = keyPoints(body);
  const bullets = pts.length ? "\n\n" + pts.map((p) => `• ${p}`).join("\n") : "";
  return `${title}\n\n${lede}${bullets}\n\n👉 Ganzer Beitrag: ${url}\n\n${hashtags(category)}`;
}

async function resolvePost(slug) {
  // Fast path: filename matches the slug.
  const direct = path.join(NEWS_DIR, `${slug}.md`);
  if (existsSync(direct)) return direct;
  // Otherwise scan for a frontmatter slug match.
  const files = (await readdir(NEWS_DIR)).filter((f) => f.endsWith(".md"));
  for (const f of files) {
    const { data } = matter(await readFile(path.join(NEWS_DIR, f), "utf8"));
    if (data.slug === slug) return path.join(NEWS_DIR, f);
  }
  return null;
}

async function main() {
  if (!WEBHOOK) {
    console.error("MAKE_WEBHOOK_URL not set — skipping social notify.");
    return;
  }
  if (!SLUGS.length) {
    console.log("No PUBLISH_SLUGS provided — nothing to share.");
    return;
  }

  let failures = 0;
  for (const slug of SLUGS) {
    const file = await resolvePost(slug);
    if (!file) {
      console.warn(`[skip] no post found for slug "${slug}"`);
      continue;
    }
    const { data, content } = matter(await readFile(file, "utf8"));
    const realSlug = (data.slug && String(data.slug)) || path.basename(file, ".md");
    const url = `${SITE}/news/${realSlug}/`;
    const image = `${SITE}/social/${realSlug}.jpg`;
    const title = (data.title && String(data.title)) || "";
    const description = (data.description && String(data.description)) || "";
    const category = (data.category && String(data.category)) || "";
    const caption = buildCaption({ title, description, category, body: content, url });

    const payload = { title, url, description, image, category, caption };

    if (process.env.DRY_RUN) {
      console.log(`\n──────── ${realSlug} ────────\nimage: ${image}\n\n${caption}\n`);
      continue;
    }

    try {
      const res = await fetch(WEBHOOK, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const body = await res.text();
      console.log(`[social] ${realSlug} → ${res.status} ${res.statusText} ${body}`);
      if (!res.ok) failures++;
    } catch (err) {
      console.error(`[social] ${realSlug} → request failed:`, err.message);
      failures++;
    }
  }

  if (failures > 0) {
    console.error(`${failures} social notification(s) failed.`);
    process.exit(1);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
