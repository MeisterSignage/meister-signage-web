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

/**
 * Fallback-Datum für das sichtbare „Zuletzt aktualisiert"-Freshness-Signal
 * auf den SEO-Landingpages (Branchen / Städte / Lösungen), wenn die einzelne
 * JSON-Seite kein eigenes `dateModified` gesetzt hat. Entspricht dem
 * Content-Stand, den auch app/sitemap.ts für Detailseiten ausweist.
 * Beim Aktualisieren einer Seite entweder `dateModified` im JSON pflegen
 * oder diesen Baseline-Wert anheben.
 */
export const LANDINGPAGE_CONTENT_DATE = "2026-05-15";
