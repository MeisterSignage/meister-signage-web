/**
 * Build Publer-ready bulk-CSV import files for the carousel posts.
 *
 *   docs/publer-instagram.csv  → IG carousel (5 image URLs, comma-separated)
 *   docs/publer-linkedin.csv   → LinkedIn document post (the carousel PDF) + Title
 *
 * Publer CSV: Date (YYYY/MM/DD), Time (HH:MM), Message, "Media URLs"
 * (comma-separated = carousel), Title (used for PDF documents).
 * One CSV per platform because the media differs (PNGs vs PDF).
 */
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const SITE = "https://www.meister-signage.ch";
const NEWS = path.join(process.cwd(), "content/news");
const CAROUSELS = path.join(process.cwd(), "public/carousels");
const DOCS = path.join(process.cwd(), "docs");

const CAT_TAGS = {
  Gastronomie: ["#Gastronomie", "#Menüboard"], Retail: ["#Retail", "#PointOfSale"],
  Hotellerie: ["#Hotellerie"], Events: ["#Events"], Unternehmen: ["#Unternehmen"],
  Produkte: ["#Display"], Praxis: ["#KMU"], Tipps: ["#KMU"], Trends: ["#Trends"],
};
const tags = (c) => [...new Set(["#DigitalSignage", "#Schweiz", ...(CAT_TAGS[c] || [])])].slice(0, 5).join(" ");
const csv = (s) => `"${String(s).replace(/"/g, '""')}"`;
const fmtDate = (d) => `${d.getFullYear()}/${String(d.getMonth() + 1).padStart(2, "0")}/${String(d.getDate()).padStart(2, "0")}`;

function mediaUrls(slug) {
  return fs.readdirSync(CAROUSELS)
    .filter((f) => new RegExp(`^${slug}-\\d+\\.png$`).test(f))
    .sort((a, b) => +a.match(/-(\d+)\.png/)[1] - +b.match(/-(\d+)\.png/)[1])
    .map((f) => `${SITE}/carousels/${f}`);
}

// Upcoming Saturdays for backfilling already-published posts (past blog dates).
const today = new Date();
today.setHours(0, 0, 0, 0);
function nextSaturdays(n) {
  const d = new Date(today);
  d.setDate(d.getDate() + ((6 - d.getDay() + 7) % 7 || 7));
  const out = [];
  for (let i = 0; i < n; i++) { out.push(new Date(d)); d.setDate(d.getDate() + 7); }
  return out;
}

const posts = [];
for (const file of fs.readdirSync(NEWS).filter((f) => f.endsWith(".md"))) {
  const { data } = matter(fs.readFileSync(path.join(NEWS, file), "utf8"));
  const c = data.carousel;
  if (!c || !c.hook) continue;
  const slug = data.slug || file.replace(/\.md$/, "");
  const blogDate = new Date(String(data.date).slice(0, 10) + "T00:00:00");
  posts.push({ slug, title: data.title || "", category: data.category, copy: c, blogDate });
}

// Future blog dates keep their date; past (already-published) → upcoming Saturdays.
const past = posts.filter((p) => p.blogDate < today).sort((a, b) => a.blogDate - b.blogDate);
const future = posts.filter((p) => p.blogDate >= today);
const sats = nextSaturdays(past.length);
past.forEach((p, i) => (p.date = sats[i]));
future.forEach((p) => (p.date = p.blogDate));
const all = [...past, ...future].sort((a, b) => a.date - b.date);

const igRows = [["Date", "Time", "Message", "Media URLs"]];
const liRows = [["Date", "Time", "Message", "Media URLs", "Title"]];

for (const p of all) {
  const url = `${SITE}/news/${p.slug}/`;
  const caption = `${p.copy.hook}\n\n${p.copy.solution}${p.copy.solutionSub ? " " + p.copy.solutionSub : ""}\n\n👉 Ganzer Beitrag: ${url}\n\n${tags(p.category)}`;
  const date = fmtDate(p.date);
  igRows.push([date, "08:00", caption, mediaUrls(p.slug).join(",")]);
  liRows.push([date, "08:00", caption, `${SITE}/carousels/${p.slug}.pdf`, p.title]);
}

const write = (name, rows) => {
  fs.writeFileSync(path.join(DOCS, name), rows.map((r) => r.map(csv).join(",")).join("\n"), "utf8");
  console.log(`  + docs/${name} (${rows.length - 1} Posts)`);
};
fs.mkdirSync(DOCS, { recursive: true });
write("publer-instagram.csv", igRows);
write("publer-linkedin.csv", liRows);
