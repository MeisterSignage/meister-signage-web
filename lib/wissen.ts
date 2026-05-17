/**
 * Wissen / Knowledge Hub Registry
 * Importiert alle Wissen-Inhaltsdateien und stellt typsichere Getter bereit.
 */
export type { WissenPage, WissenCategory, WissenFAQ, WissenLink } from "@/lib/wissen-types";

import wasIstDigitalSignage    from "@/content/wissen/was-ist-digital-signage";
import mietenOderKaufen        from "@/content/wissen/digital-signage-mieten-oder-kaufen";
import software                from "@/content/wissen/digital-signage-software";
import outdoorDisplays         from "@/content/wissen/outdoor-displays";
import digitaleKundenstopper   from "@/content/wissen/digitale-kundenstopper";
import digitaleMenueboards     from "@/content/wissen/digitale-menueboards";
import digitaleLeitsysteme     from "@/content/wissen/digitale-leitsysteme";

import type { WissenPage } from "@/lib/wissen-types";

export const wissenPages: Record<string, WissenPage> = {
  "was-ist-digital-signage":            wasIstDigitalSignage,
  "digital-signage-mieten-oder-kaufen": mietenOderKaufen,
  "digital-signage-software":           software,
  "outdoor-displays":                   outdoorDisplays,
  "digitale-kundenstopper":             digitaleKundenstopper,
  "digitale-menueboards":               digitaleMenueboards,
  "digitale-leitsysteme":               digitaleLeitsysteme,
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
