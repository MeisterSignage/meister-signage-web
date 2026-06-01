#!/usr/bin/env node
/**
 * Pre-build step: generate responsive image variants.
 *
 * For every .webp under public/images/ whose source width is > 900px,
 * generate a -800w.webp variant (and -400w.webp for hero-class images > 1400px wide).
 *
 * Variants are skipped if they already exist and are newer than the source.
 *
 * Used together with lib/image-loader.ts and next.config.ts (loader: "custom")
 * so that Next.js <Image> picks the smaller variant on mobile viewports.
 */

import { readdir, stat } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve(process.cwd(), "public", "images");
const VARIANTS = [
  // -400w must match loader logic: it's requested for any source > 500px wide.
  // Otherwise small responsive sizes return 404 (caught by Seobility).
  { suffix: "-400w", width: 400, minSourceWidth: 500 },
  { suffix: "-800w", width: 800, minSourceWidth: 900 },
];

/** Recursively walk a directory and yield .webp file paths. */
async function* walkWebp(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      yield* walkWebp(full);
    } else if (
      e.isFile() &&
      e.name.toLowerCase().endsWith(".webp") &&
      !/-(?:\d+w)\.webp$/.test(e.name) // skip files that are themselves variants
    ) {
      yield full;
    }
  }
}

async function maybeGenerate(srcPath, variant) {
  const meta = await sharp(srcPath).metadata();
  if (!meta.width || meta.width < variant.minSourceWidth) return null;

  const outPath = srcPath.replace(/\.webp$/i, `${variant.suffix}.webp`);
  if (existsSync(outPath)) {
    const [srcStat, outStat] = await Promise.all([stat(srcPath), stat(outPath)]);
    if (outStat.mtimeMs >= srcStat.mtimeMs) return null;
  }

  await sharp(srcPath)
    .resize({ width: variant.width, withoutEnlargement: true })
    .webp({ quality: 82, effort: 6 })
    .toFile(outPath);

  return outPath;
}

async function main() {
  if (!existsSync(ROOT)) {
    console.log(`(skip) ${ROOT} does not exist`);
    return;
  }

  let generated = 0;
  let skipped = 0;
  for await (const src of walkWebp(ROOT)) {
    for (const v of VARIANTS) {
      const out = await maybeGenerate(src, v);
      if (out) {
        console.log(`  + ${path.relative(process.cwd(), out)}`);
        generated++;
      } else {
        skipped++;
      }
    }
  }
  console.log(`\nresponsive-images: ${generated} generated, ${skipped} skipped/unchanged.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
