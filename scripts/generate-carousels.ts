/**
 * Build-time generator: render each news post's carousel slides to PNG +
 * assemble a multi-page PDF, into public/social/carousels/.
 *
 *   public/social/carousels/<slug>-1.png … <slug>-N.png   (Instagram carousel)
 *   public/social/carousels/<slug>.pdf                    (LinkedIn document post)
 *
 * Self-hosted, no external API. Run via: npx tsx scripts/generate-carousels.ts
 */

import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { PDFDocument } from "pdf-lib";
import { slideDataFromCopy, type CarouselCopy } from "../lib/social-content";
import { renderSlide, SLIDE_SIZE } from "../lib/carousel-image";

const NEWS_DIR = path.join(process.cwd(), "content/news");
const OUT_DIR = path.join(process.cwd(), "public/carousels");

async function pngFor(slide: Parameters<typeof renderSlide>[0], i: number, total: number): Promise<Uint8Array> {
  const res = renderSlide(slide, i, total);
  return new Uint8Array(await res.arrayBuffer());
}

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const files = fs.readdirSync(NEWS_DIR).filter((f) => f.endsWith(".md"));

  let posts = 0;
  for (const file of files) {
    const raw = fs.readFileSync(path.join(NEWS_DIR, file), "utf8");
    const { data } = matter(raw);
    if (data.status === "draft") continue;
    const slug = (data.slug as string) || file.replace(/\.md$/, "");

    const copy = data.carousel as CarouselCopy | undefined;
    if (!copy || !copy.hook) {
      console.log(`  – ${slug} (kein carousel-Text, übersprungen)`);
      continue;
    }

    // Use the post's social JPEG as the hook background (Satori-friendly).
    const hookImage = fs.existsSync(path.join(process.cwd(), "public/social", `${slug}.jpg`))
      ? `/social/${slug}.jpg`
      : undefined;

    const slides = slideDataFromCopy(copy, hookImage);

    const pdf = await PDFDocument.create();
    for (let i = 0; i < slides.length; i++) {
      const png = await pngFor(slides[i], i + 1, slides.length);
      fs.writeFileSync(path.join(OUT_DIR, `${slug}-${i + 1}.png`), png);
      const img = await pdf.embedPng(png);
      const page = pdf.addPage([SLIDE_SIZE.width, SLIDE_SIZE.height]);
      page.drawImage(img, { x: 0, y: 0, width: SLIDE_SIZE.width, height: SLIDE_SIZE.height });
    }
    fs.writeFileSync(path.join(OUT_DIR, `${slug}.pdf`), await pdf.save());
    console.log(`  + ${slug} (${slides.length} slides + pdf)`);
    posts++;
  }
  console.log(`\ncarousels: ${posts} post(s) generated.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
