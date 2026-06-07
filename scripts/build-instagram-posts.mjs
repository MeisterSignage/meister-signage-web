/**
 * Per-post Instagram breakdown: caption + ordered carousel image URLs.
 * Output: docs/instagram-posts.md  (read-and-do, one post at a time)
 */
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const SITE = "https://www.meister-signage.ch";
const NEWS = path.join(process.cwd(), "content/news");
const CAROUSELS = path.join(process.cwd(), "public/carousels");
const OUT = path.join(process.cwd(), "docs/instagram-posts.md");

const CAT_TAGS = {
  Gastronomie: ["#Gastronomie", "#Menüboard"], Retail: ["#Retail", "#PointOfSale"],
  Hotellerie: ["#Hotellerie"], Events: ["#Events"], Unternehmen: ["#Unternehmen"],
  Produkte: ["#Display"], Praxis: ["#KMU"], Tipps: ["#KMU"], Trends: ["#Trends"],
};
const tags = (c) => [...new Set(["#DigitalSignage", "#Schweiz", ...(CAT_TAGS[c] || [])])].slice(0, 5).join(" ");
const WD = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"];
const fmt = (d) => `${WD[d.getDay()]} ${String(d.getDate()).padStart(2, "0")}.${String(d.getMonth() + 1).padStart(2, "0")}.${d.getFullYear()}`;

function media(slug) {
  return fs.readdirSync(CAROUSELS)
    .filter((f) => new RegExp(`^${slug}-\\d+\\.png$`).test(f))
    .sort((a, b) => +a.match(/-(\d+)\.png/)[1] - +b.match(/-(\d+)\.png/)[1]);
}

const today = new Date(); today.setHours(0, 0, 0, 0);
function nextSaturdays(n) {
  const d = new Date(today); d.setDate(d.getDate() + ((6 - d.getDay() + 7) % 7 || 7));
  const out = []; for (let i = 0; i < n; i++) { out.push(new Date(d)); d.setDate(d.getDate() + 7); } return out;
}

const posts = [];
for (const file of fs.readdirSync(NEWS).filter((f) => f.endsWith(".md"))) {
  const { data } = matter(fs.readFileSync(path.join(NEWS, file), "utf8"));
  if (!data.carousel || !data.carousel.hook) continue;
  const slug = data.slug || file.replace(/\.md$/, "");
  posts.push({ slug, title: data.title, category: data.category, copy: data.carousel, blogDate: new Date(String(data.date).slice(0, 10) + "T00:00:00") });
}
const past = posts.filter((p) => p.blogDate < today).sort((a, b) => a.blogDate - b.blogDate);
const future = posts.filter((p) => p.blogDate >= today);
const sats = nextSaturdays(past.length);
past.forEach((p, i) => (p.date = sats[i]));
future.forEach((p) => (p.date = p.blogDate));
const all = [...past, ...future].sort((a, b) => a.date - b.date);

let md = `# Instagram-Posts (Carousel) — ein Post nach dem anderen\n\n> ${all.length} Posts. Pro Post: Caption + Carousel-Bilder in Reihenfolge.\n> Bilder online öffnen (URL) oder lokal aus \`public/carousels/\` hochladen.\n\n---\n\n`;
all.forEach((p, i) => {
  const url = `${SITE}/news/${p.slug}/`;
  const caption = `${p.copy.hook}\n\n${p.copy.solution}${p.copy.solutionSub ? " " + p.copy.solutionSub : ""}\n\n👉 Ganzer Beitrag: ${url}\n\n${tags(p.category)}`;
  const imgs = media(p.slug);
  md += `## Post ${i + 1} — ${fmt(p.date)} — ${p.title}\n\n`;
  md += `**Caption:**\n\n\`\`\`\n${caption}\n\`\`\`\n\n`;
  md += `**Carousel-Bilder (in dieser Reihenfolge):**\n\n`;
  imgs.forEach((f, n) => { md += `${n + 1}. ${SITE}/carousels/${f}\n`; });
  md += `\n_Lokal: \`public/carousels/${p.slug}-1.png\` … \`-${imgs.length}.png\`_\n\n---\n\n`;
});

fs.writeFileSync(OUT, md, "utf8");
console.log(`Wrote ${all.length} posts → docs/instagram-posts.md`);
