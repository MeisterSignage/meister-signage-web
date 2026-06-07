/* Generate brand Link-in-Bio icons (512×512 PNG) for Publer. */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const OUT = path.join(process.cwd(), "public/icons");
fs.mkdirSync(OUT, { recursive: true });

// Lucide glyph paths (24×24 viewBox), white stroke on navy.
const ICONS = {
  "beratung": [
    // phone
    "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
  ],
  "kaufen": [
    // shopping bag
    "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",
    "M3 6h18",
    "M16 10a4 4 0 0 1-8 0",
  ],
  "mieten": [
    // calendar
    "M8 2v4",
    "M16 2v4",
    "M3 10h18",
    "M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z",
  ],
};

function svg(paths) {
  const glyph = paths.map((d) => `<path d="${d}"/>`).join("");
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#1e2f52"/><stop offset="0.6" stop-color="#1a2744"/><stop offset="1" stop-color="#0d1628"/>
  </linearGradient></defs>
  <rect width="512" height="512" rx="112" fill="url(#g)"/>
  <circle cx="426" cy="86" r="17" fill="#fe019a"/>
  <g transform="translate(146 146) scale(9.166)" fill="none" stroke="#ffffff" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
    ${glyph}
  </g>
</svg>`;
}

for (const [name, paths] of Object.entries(ICONS)) {
  await sharp(Buffer.from(svg(paths))).png().toFile(path.join(OUT, `link-${name}.png`));
  console.log(`  + public/icons/link-${name}.png`);
}
console.log("done.");
