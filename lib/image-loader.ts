/**
 * Custom Next.js image loader for static export.
 *
 * Maps requested widths to pre-generated responsive variants under
 * public/images/. Variants are produced by scripts/generate-image-variants.mjs.
 *
 * - width <= 500 and the -400w variant exists → use -400w.webp
 * - width <= 900 and the -800w variant exists → use -800w.webp
 * - otherwise → use the original
 *
 * For non-/images/ paths (e.g. /logo.svg), the original src is always returned.
 */

type LoaderArgs = { src: string; width: number; quality?: number };

const VARIANT_PATTERN = /\.(webp|jpg|jpeg|png)$/i;

/**
 * Variants are generated for everything under /images/ that is .webp at build
 * time. We only rewrite URLs that pass this prefix check so unrelated assets
 * (favicons, OG images, SVG logos) keep their original src.
 */
function isEligible(src: string): boolean {
  return src.startsWith("/images/") && /\.webp$/i.test(src);
}

function rewriteSuffix(src: string, suffix: string): string {
  return src.replace(VARIANT_PATTERN, `${suffix}.webp`);
}

export default function imageLoader({ src, width }: LoaderArgs): string {
  if (!isEligible(src)) return src;

  if (width <= 500) return rewriteSuffix(src, "-400w");
  if (width <= 900) return rewriteSuffix(src, "-800w");
  return src;
}
