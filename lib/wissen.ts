/**
 * Wissen / Knowledge Hub Registry — JSON-backed.
 *
 * Content lives as one JSON file per article under content/wissen/.
 * Decap CMS edits these directly; build time imports them with type
 * assertion so we keep static analysis on the entries.
 */
export type { WissenPage, WissenCategory, WissenFAQ, WissenLink } from "@/lib/wissen-types";

import type { WissenPage } from "@/lib/wissen-types";

import wasIstDigitalSignage    from "@/content/wissen/was-ist-digital-signage.json";
import mietenOderKaufen        from "@/content/wissen/digital-signage-mieten-oder-kaufen.json";
import software                from "@/content/wissen/digital-signage-software.json";
import outdoorDisplays         from "@/content/wissen/outdoor-displays.json";
import digitaleKundenstopper   from "@/content/wissen/digitale-kundenstopper.json";
import digitaleMenueboards     from "@/content/wissen/digitale-menueboards.json";
import digitaleLeitsysteme     from "@/content/wissen/digitale-leitsysteme.json";
import groesseWaehlen          from "@/content/wissen/digital-signage-groesse-waehlen.json";
import vorteileNachteile       from "@/content/wissen/digital-signage-vorteile-nachteile.json";
import nachhaltigkeit          from "@/content/wissen/digital-signage-nachhaltigkeit.json";

export const wissenPages: Record<string, WissenPage> = {
  "was-ist-digital-signage":             wasIstDigitalSignage  as WissenPage,
  "digital-signage-mieten-oder-kaufen":  mietenOderKaufen      as WissenPage,
  "digital-signage-vorteile-nachteile":  vorteileNachteile     as WissenPage,
  "digital-signage-groesse-waehlen":     groesseWaehlen        as WissenPage,
  "digital-signage-nachhaltigkeit":      nachhaltigkeit        as WissenPage,
  "digital-signage-software":            software              as WissenPage,
  "outdoor-displays":                    outdoorDisplays       as WissenPage,
  "digitale-kundenstopper":              digitaleKundenstopper as WissenPage,
  "digitale-menueboards":                digitaleMenueboards   as WissenPage,
  "digitale-leitsysteme":                digitaleLeitsysteme   as WissenPage,
};

export function getWissenPage(slug: string): WissenPage | null {
  return wissenPages[slug] ?? null;
}
export function getAllWissenSlugs(): string[] {
  return Object.keys(wissenPages);
}
export function getAllWissenPages(): WissenPage[] {
  return Object.values(wissenPages);
}
