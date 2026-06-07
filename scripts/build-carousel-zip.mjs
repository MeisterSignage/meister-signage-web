/* Stage carousel assets into one folder per post (ordered images + caption + PDF). */
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const SITE = "https://www.meister-signage.ch";
const NEWS = path.join(process.cwd(), "content/news");
const CAROUSELS = path.join(process.cwd(), "public/carousels");
const STAGE = path.join(process.cwd(), ".carousel-pack");

const CAT_TAGS = {
  Gastronomie: ["#Gastronomie", "#Menüboard"], Retail: ["#Retail", "#PointOfSale"],
  Hotellerie: ["#Hotellerie"], Events: ["#Events"], Unternehmen: ["#Unternehmen"],
  Produkte: ["#Display"], Praxis: ["#KMU"], Tipps: ["#KMU"], Trends: ["#Trends"],
};
const tags = (c) => [...new Set(["#DigitalSignage", "#Schweiz", ...(CAT_TAGS[c] || [])])].slice(0, 5).join(" ");
const iso = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;

const today = new Date(); today.setHours(0, 0, 0, 0);
function nextSaturdays(n) {
  const d = new Date(today); d.setDate(d.getDate() + ((6 - d.getDay() + 7) % 7 || 7));
  const o = []; for (let i = 0; i < n; i++) { o.push(new Date(d)); d.setDate(d.getDate() + 7); } return o;
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

fs.rmSync(STAGE, { recursive: true, force: true });
fs.mkdirSync(STAGE, { recursive: true });

all.forEach((p, idx) => {
  const n = String(idx + 1).padStart(2, "0");
  const dir = path.join(STAGE, `${n}_${iso(p.date)}_${p.slug}`);
  fs.mkdirSync(dir, { recursive: true });
  const imgs = fs.readdirSync(CAROUSELS)
    .filter((f) => new RegExp(`^${p.slug}-\\d+\\.png$`).test(f))
    .sort((a, b) => +a.match(/-(\d+)\.png/)[1] - +b.match(/-(\d+)\.png/)[1]);
  imgs.forEach((f, i) => fs.copyFileSync(path.join(CAROUSELS, f), path.join(dir, `${i + 1}.png`)));
  if (fs.existsSync(path.join(CAROUSELS, `${p.slug}.pdf`)))
    fs.copyFileSync(path.join(CAROUSELS, `${p.slug}.pdf`), path.join(dir, `linkedin-carousel.pdf`));
  const url = `${SITE}/news/${p.slug}/`;
  const caption = `${p.copy.hook}\n\n${p.copy.solution}${p.copy.solutionSub ? " " + p.copy.solutionSub : ""}\n\n👉 Ganzer Beitrag: ${url}\n\n${tags(p.category)}`;
  fs.writeFileSync(path.join(dir, "caption.txt"), caption, "utf8");
});

fs.writeFileSync(path.join(STAGE, "README.txt"),
  "Meister Signage — Carousel-Pack\n\n" +
  "Ein Ordner pro Post (chronologisch nummeriert).\n" +
  "  1.png … 5.png       → Instagram-Carousel, in dieser Reihenfolge hochladen\n" +
  "  caption.txt         → Text für den Beitrag\n" +
  "  linkedin-carousel.pdf → für LinkedIn als Dokument-Post\n\n" +
  "Reihenfolge je Post: 1 Pain-Hook · 2 Lösung · 3 Nutzen · 4 Warum wir · 5 CTA\n", "utf8");

console.log(`Staged ${all.length} Posts → ${STAGE}`);
