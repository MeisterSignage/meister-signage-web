#!/usr/bin/env node
/**
 * Pre-build step: generate social-share JPEGs for news posts.
 *
 * Instagram's Content Publishing API requires JPEG (not .webp), an aspect ratio
 * within 4:5–1.91:1 and max 1440px wide; LinkedIn image handling also rejects
 * .webp. For every news post we render a 1080×1080 JPEG from the post's `image`
 * into public/social/<slug>.jpg — served at
 * https://www.meister-signage.ch/social/<slug>.jpg.
 *
 * Consumed by the Tuesday auto-publish → Make webhook → LinkedIn/Instagram flow
 * (see scripts/notify-social.mjs). Output is git-ignored and regenerated on
 * every build, so it always matches the current post images.
 */

import { readdir, readFile, mkdir, stat } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import sharp from "sharp";

const ROOT = process.cwd();
const NEWS_DIR = path.join(ROOT, "content", "news");
const PUBLIC_DIR = path.join(ROOT, "public");
const OUT_DIR = path.join(PUBLIC_DIR, "social");
const SIZE = 1080; // 1:1 — safely within Instagram's 4:5–1.91:1 range

async function main() {
  if (!existsSync(NEWS_DIR)) {
    console.log(`(skip) ${NEWS_DIR} does not exist`);
    return;
  }
  await mkdir(OUT_DIR, { recursive: true });

  const files = (await readdir(NEWS_DIR)).filter((f) => f.endsWith(".md"));
  let generated = 0;
  let skipped = 0;
  let missing = 0;

  for (const file of files) {
    const raw = await readFile(path.join(NEWS_DIR, file), "utf8");
    const { data } = matter(raw);
    const slug = (data.slug && String(data.slug)) || file.replace(/\.md$/, "");
    const image = data.image && String(data.image);
    if (!image) {
      console.warn(`[skip] ${file}: no image field`);
      continue;
    }

    const src = path.join(PUBLIC_DIR, image.replace(/^\//, ""));
    if (!existsSync(src)) {
      console.warn(`[miss] ${file}: source image not found (${image})`);
      missing++;
      continue;
    }

    const out = path.join(OUT_DIR, `${slug}.jpg`);
    if (existsSync(out)) {
      const [srcStat, outStat] = await Promise.all([stat(src), stat(out)]);
      if (outStat.mtimeMs >= srcStat.mtimeMs) {
        skipped++;
        continue;
      }
    }

    await sharp(src)
      .resize(SIZE, SIZE, { fit: "cover", position: "centre" })
      .flatten({ background: "#07101f" })
      .jpeg({ quality: 85, progressive: true })
      .toFile(out);

    console.log(`  + public/social/${slug}.jpg`);
    generated++;
  }

  console.log(
    `\nsocial-images: ${generated} generated, ${skipped} unchanged, ${missing} missing source.`
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
