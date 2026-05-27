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
 * Variants are generated only for hero/product images under /images/products/
 * (sources are 1024–1600 px wide). Smaller assets like /images/icons/*.webp
 * (96 px) or /images/Chris-Meister.webp don't need variants and would 404 if
 * rewritten, so we leave their src untouched.
 */
function isEligible(src: string): boolean {
  return src.startsWith("/images/products/") && /\.webp$/i.test(src);
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
