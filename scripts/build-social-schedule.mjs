/**
 * Build the social scheduling plan (CSV) for the carousel posts.
 * Output: docs/social-schedule.csv  — import into Publer/Metricool (or use manually).
 *
 * Columns: date, time, slug, platforms, caption, media (IG carousel PNGs), pdf (LinkedIn doc)
 */
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const SITE = "https://www.meister-signage.ch";
const NEWS = path.join(process.cwd(), "content/news");
const CAROUSELS = path.join(process.cwd(), "public/carousels");
const OUT = path.join(process.cwd(), "docs/social-schedule.csv");

const CAT_TAGS = {
  Gastronomie: ["#Gastronomie", "#Menüboard"],
  Retail: ["#Retail", "#PointOfSale"],
  Hotellerie: ["#Hotellerie"],
  Events: ["#Events"],
  Unternehmen: ["#Unternehmen"],
  Produkte: ["#Display"],
  Praxis: ["#KMU"],
  Tipps: ["#KMU"],
  Trends: ["#Trends"],
};
const tags = (c) => [...new Set(["#DigitalSignage", "#Schweiz", ...(CAT_TAGS[c] || [])])].slice(0, 5).join(" ");

const csvField = (s) => `"${String(s).replace(/"/g, '""')}"`;

function mediaUrls(slug) {
  return fs
    .readdirSync(CAROUSELS)
    .filter((f) => new RegExp(`^${slug}-\\d+\\.png$`).test(f))
    .sort((a, b) => parseInt(a.match(/-(\d+)\.png/)[1]) - parseInt(b.match(/-(\d+)\.png/)[1]))
    .map((f) => `${SITE}/carousels/${f}`);
}

const rows = [["date", "time", "slug", "platforms", "caption", "media_instagram", "pdf_linkedin"]];

for (const file of fs.readdirSync(NEWS).filter((f) => f.endsWith(".md"))) {
  const { data } = matter(fs.readFileSync(path.join(NEWS, file), "utf8"));
  const c = data.carousel;
  if (!c || !c.hook) continue;
  const slug = data.slug || file.replace(/\.md$/, "");
  const url = `${SITE}/news/${slug}/`;
  const date = String(data.date || "").slice(0, 10);
  const time = "08:00";
  const caption = `${c.hook}\n\n${c.solution}${c.solutionSub ? " " + c.solutionSub : ""}\n\n👉 Ganzer Beitrag: ${url}\n\n${tags(data.category)}`;
  const media = mediaUrls(slug);
  rows.push([
    date,
    time,
    slug,
    "LinkedIn, Instagram",
    caption,
    media.join(" , "),
    `${SITE}/carousels/${slug}.pdf`,
  ]);
}

rows.sort((a, b) => (a[0] < b[0] ? -1 : 1));
const csv = rows.map((r) => r.map(csvField).join(",")).join("\n");
fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, csv, "utf8");
console.log(`Wrote ${rows.length - 1} rows → docs/social-schedule.csv`);
