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
    const { data } = matter(await readFile(file, "utf8"));
    const realSlug = (data.slug && String(data.slug)) || path.basename(file, ".md");
    const url = `${SITE}/news/${realSlug}/`;
    const image = `${SITE}/social/${realSlug}.jpg`;
    const title = (data.title && String(data.title)) || "";
    const description = (data.description && String(data.description)) || "";
    const category = (data.category && String(data.category)) || "";
    const caption = `${title}\n\n${description}\n\nZum Beitrag: ${url}\n\n#DigitalSignage #Schweiz #DigitaleBeschilderung`;

    const payload = { title, url, description, image, category, caption };

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
