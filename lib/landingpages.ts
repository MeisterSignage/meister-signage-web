/**
 * SEO Landingpage Registry
 * Importiert alle Content-Dateien und stellt typsichere Getter bereit.
 * Neue Seiten: Content-Datei erstellen + hier registrieren.
 */
export type { LandingPage, LPBenefit, LPFAQ, LPLink, LPCta } from "@/lib/lp-types";

import gastronomie    from "@/content/landingpages/branchen/gastronomie";
import hotellerie     from "@/content/landingpages/branchen/hotellerie";
import retail         from "@/content/landingpages/branchen/retail";
import events         from "@/content/landingpages/branchen/events";
import unternehmen    from "@/content/landingpages/branchen/unternehmen";

import zuerich        from "@/content/landingpages/staedte/zuerich";
import luzern         from "@/content/landingpages/staedte/luzern";
import zug            from "@/content/landingpages/staedte/zug";

import digitaleMenueboards from "@/content/landingpages/loesungen/digitale-menueboards";
import empfangsdisplays    from "@/content/landingpages/loesungen/empfangsdisplays";
import eventDisplays       from "@/content/landingpages/loesungen/event-displays";
import ledWalls            from "@/content/landingpages/loesungen/led-walls";
import indoorSignage       from "@/content/landingpages/loesungen/indoor-signage";
import software            from "@/content/landingpages/loesungen/software";
import mobileDisplays      from "@/content/landingpages/loesungen/mobile-displays";
import doppelseitige       from "@/content/landingpages/loesungen/doppelseitige-displays";
import digitalerEmpfang    from "@/content/landingpages/loesungen/digitaler-empfang";
import digitaleLeitsysteme from "@/content/landingpages/loesungen/digitale-leitsysteme";

import type { LandingPage } from "@/lib/lp-types";

/* ── Registries ──────────────────────────────────────────────── */

export const branchenPages: Record<string, LandingPage> = {
  gastronomie,
  hotellerie,
  retail,
  events,
  unternehmen,
};

export const staedtePages: Record<string, LandingPage> = {
  zuerich,
  luzern,
  zug,
};

export const loesungenPages: Record<string, LandingPage> = {
  "software":                software,
  "mobile-displays":         mobileDisplays,
  "doppelseitige-displays":  doppelseitige,
  "digitaler-empfang":       digitalerEmpfang,
  "digitale-leitsysteme":    digitaleLeitsysteme,
  "digitale-menueboards":    digitaleMenueboards,
  "empfangsdisplays":        empfangsdisplays,
  "event-displays":          eventDisplays,
  "led-walls":               ledWalls,
  "indoor-signage":          indoorSignage,
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
