/**
 * SEO Landingpage Registry — JSON-backed.
 *
 * Content lives as one JSON file per page under content/landingpages/.
 * Decap CMS edits these directly; build time imports them with type
 * assertion so we keep static analysis on the entries.
 */
export type { LandingPage, LPBenefit, LPFAQ, LPLink, LPCta } from "@/lib/lp-types";

import type { LandingPage } from "@/lib/lp-types";

import gastronomie    from "@/content/landingpages/branchen/gastronomie.json";
import hotellerie     from "@/content/landingpages/branchen/hotellerie.json";
import retail         from "@/content/landingpages/branchen/retail.json";
import events         from "@/content/landingpages/branchen/events.json";
import unternehmen    from "@/content/landingpages/branchen/unternehmen.json";
import gesundheit     from "@/content/landingpages/branchen/gesundheit.json";

import zuerich        from "@/content/landingpages/staedte/zuerich.json";
import luzern         from "@/content/landingpages/staedte/luzern.json";
import zug            from "@/content/landingpages/staedte/zug.json";
import bern           from "@/content/landingpages/staedte/bern.json";
import basel          from "@/content/landingpages/staedte/basel.json";

import digitaleMenueboards    from "@/content/landingpages/loesungen/digitale-menueboards.json";
import empfangsdisplays       from "@/content/landingpages/loesungen/empfangsdisplays.json";
import eventDisplays          from "@/content/landingpages/loesungen/event-displays.json";
import ledWalls               from "@/content/landingpages/loesungen/led-walls.json";
import indoorSignage          from "@/content/landingpages/loesungen/indoor-signage.json";
import software               from "@/content/landingpages/loesungen/software.json";
import mobileDisplays         from "@/content/landingpages/loesungen/mobile-displays.json";
import doppelseitige          from "@/content/landingpages/loesungen/doppelseitige-displays.json";
import digitalerEmpfang       from "@/content/landingpages/loesungen/digitaler-empfang.json";
import digitaleLeitsysteme    from "@/content/landingpages/loesungen/digitale-leitsysteme.json";
import digitaleKundenstopper  from "@/content/landingpages/loesungen/digitale-kundenstopper.json";
import digitalesWerbedisplay  from "@/content/landingpages/loesungen/digitales-werbedisplay.json";
import digitaleSchaufenster   from "@/content/landingpages/loesungen/digitale-schaufensterwerbung.json";
import digitaleInfostele      from "@/content/landingpages/loesungen/digitale-infostele.json";
import digitaleRaumbeschilderung from "@/content/landingpages/loesungen/digitale-raumbeschilderung.json";
import highBrightnessDisplay   from "@/content/landingpages/loesungen/high-brightness-display.json";
import stretchedDisplay        from "@/content/landingpages/loesungen/stretched-display.json";
import transparentesDisplay    from "@/content/landingpages/loesungen/transparentes-display.json";

export const branchenPages: Record<string, LandingPage> = {
  gastronomie:  gastronomie  as LandingPage,
  hotellerie:   hotellerie   as LandingPage,
  retail:       retail       as LandingPage,
  events:       events       as LandingPage,
  unternehmen:  unternehmen  as LandingPage,
  gesundheit:   gesundheit   as LandingPage,
};

export const staedtePages: Record<string, LandingPage> = {
  zuerich: zuerich as LandingPage,
  luzern:  luzern  as LandingPage,
  zug:     zug     as LandingPage,
  bern:    bern    as LandingPage,
  basel:   basel   as LandingPage,
};

export const loesungenPages: Record<string, LandingPage> = {
  "software":                       software                     as LandingPage,
  "mobile-displays":                mobileDisplays               as LandingPage,
  "doppelseitige-displays":         doppelseitige                as LandingPage,
  "digitaler-empfang":              digitalerEmpfang             as LandingPage,
  "digitale-leitsysteme":           digitaleLeitsysteme          as LandingPage,
  "digitale-menueboards":           digitaleMenueboards          as LandingPage,
  "empfangsdisplays":               empfangsdisplays             as LandingPage,
  "event-displays":                 eventDisplays                as LandingPage,
  "led-walls":                      ledWalls                     as LandingPage,
  "indoor-signage":                 indoorSignage                as LandingPage,
  "digitale-kundenstopper":         digitaleKundenstopper        as LandingPage,
  "digitales-werbedisplay":         digitalesWerbedisplay        as LandingPage,
  "digitale-schaufensterwerbung":   digitaleSchaufenster         as LandingPage,
  "digitale-infostele":             digitaleInfostele            as LandingPage,
  "digitale-raumbeschilderung":     digitaleRaumbeschilderung    as LandingPage,
  "high-brightness-display":        highBrightnessDisplay        as LandingPage,
  "stretched-display":              stretchedDisplay             as LandingPage,
  "transparentes-display":          transparentesDisplay         as LandingPage,
};

export function getBranchenPage(slug: string): LandingPage | null {
  return branchenPages[slug] ?? null;
}
export function getStaedtePage(slug: string): LandingPage | null {
  return staedtePages[slug] ?? null;
}
export function getLoesungenPage(slug: string): LandingPage | null {
  return loesungenPages[slug] ?? null;
}
export function getAllBranchenSlugs(): string[]  { return Object.keys(branchenPages);  }
export function getAllStaedteSlugs(): string[]   { return Object.keys(staedtePages);   }
export function getAllLoesungenSlugs(): string[] { return Object.keys(loesungenPages); }
