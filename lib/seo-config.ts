/**
 * SEO indexability switch.
 *
 * Read at build time (Next.js static export). Set
 * `NEXT_PUBLIC_SITE_INDEXABLE=false` for staging / pre-launch builds
 * (e.g. test.meister-signage.ch). Leave unset or set to "true" for the
 * production build (www.meister-signage.ch).
 *
 * When false, the affected outputs are:
 *   - <meta name="robots" content="noindex, nofollow"> on every page
 *     (via app/layout.tsx metadata.robots)
 *   - app/robots.ts emits `User-agent: *\nDisallow: /`
 *   - app/sitemap.ts returns an empty sitemap
 */
export const SITE_INDEXABLE =
  (process.env.NEXT_PUBLIC_SITE_INDEXABLE ?? "true").toLowerCase() !== "false";
