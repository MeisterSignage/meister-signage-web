/**
 * SEO Landingpage Registry
 * Importiert alle Content-Dateien und stellt typsichere Getter bereit.
 * Neue Seiten: Content-Datei erstellen + hier registrieren.
 */
export type { LandingPage, LPBenefit, LPFAQ, LPLink, LPCta } from "@/lib/lp-types";

import gastronomie    from "@/content/landingpages/branchen/gastronomie";
import hotellerie     from "@/content/landingpages/branchen/hotellerie";
import retail         from "@/content/landingpages/branchen/retail";

import zuerich        from "@/content/landingpages/staedte/zuerich";
import luzern         from "@/content/landingpages/staedte/luzern";
import zug            from "@/content/landingpages/staedte/zug";

import digitaleMenueboards from "@/content/landingpages/loesungen/digitale-menueboards";
import empfangsdisplays    from "@/content/landingpages/loesungen/empfangsdisplays";
import eventDisplays       from "@/content/landingpages/loesungen/event-displays";

import type { LandingPage } from "@/lib/lp-types";

/* ── Registries ──────────────────────────────────────────────── */

export const branchenPages: Record<string, LandingPage> = {
  gastronomie,
  hotellerie,
  retail,
};

export const staedtePages: Record<string, LandingPage> = {
  zuerich,
  luzern,
  zug,
};

export const loesungenPages: Record<string, LandingPage> = {
  "digitale-menueboards": digitaleMenueboards,
  "empfangsdisplays":     empfangsdisplays,
  "event-displays":       eventDisplays,
};

/* ── Getter ──────────────────────────────────────────────────── */

export function getBranchenPage(slug: string): LandingPage | null {
  return branchenPages[slug] ?? null;
}

export function getStaedtePage(slug: string): LandingPage | null {
  return staedtePages[slug] ?? null;
}

export function getLoesungenPage(slug: string): LandingPage | null {
  return loesungenPages[slug] ?? null;
}

export function getAllBranchenSlugs(): string[] {
  return Object.keys(branchenPages);
}

export function getAllStaedteSlugs(): string[] {
  return Object.keys(staedtePages);
}

export function getAllLoesungenSlugs(): string[] {
  return Object.keys(loesungenPages);
}
