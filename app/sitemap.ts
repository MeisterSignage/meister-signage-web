import { MetadataRoute } from "next";
import { SITE_INDEXABLE } from "@/lib/seo-config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!SITE_INDEXABLE) return [];

  const base = "https://www.meister-signage.ch";
  const pages = [
    /* Core */
    { url: "/",                            priority: 1.0, cf: "weekly"  as const },
    { url: "/digital-signage-schweiz",     priority: 1.0, cf: "weekly"  as const },

    /* Money pages */
    { url: "/digital-signage-kaufen",             priority: 0.9, cf: "monthly" as const },
    { url: "/digital-signage-mieten",             priority: 0.9, cf: "monthly" as const },
    { url: "/was-kostet-digital-signage-schweiz", priority: 0.8, cf: "monthly" as const },

    /* Branchen — overview + detail */
    { url: "/branchen",             priority: 0.8, cf: "monthly" as const },
    { url: "/branchen/gastronomie", priority: 0.9, cf: "monthly" as const },
    { url: "/branchen/retail",      priority: 0.9, cf: "monthly" as const },
    { url: "/branchen/hotellerie",  priority: 0.9, cf: "monthly" as const },
    { url: "/branchen/unternehmen", priority: 0.9, cf: "monthly" as const },
    { url: "/branchen/events",      priority: 0.8, cf: "monthly" as const },

    /* Lösungen — overview + detail */
    { url: "/loesungen",                          priority: 0.8, cf: "monthly" as const },
    { url: "/loesungen/software",                 priority: 0.9, cf: "monthly" as const },
    { url: "/loesungen/mobile-displays",          priority: 0.9, cf: "monthly" as const },
    { url: "/loesungen/doppelseitige-displays",   priority: 0.9, cf: "monthly" as const },
    { url: "/loesungen/digitaler-empfang",        priority: 0.9, cf: "monthly" as const },
    { url: "/loesungen/digitale-leitsysteme",     priority: 0.9, cf: "monthly" as const },
    { url: "/loesungen/led-walls",                priority: 0.9, cf: "monthly" as const },
    { url: "/loesungen/digitale-menueboards",     priority: 0.9, cf: "monthly" as const },
    { url: "/loesungen/indoor-signage",           priority: 0.8, cf: "monthly" as const },
    { url: "/loesungen/empfangsdisplays",         priority: 0.8, cf: "monthly" as const },
    { url: "/loesungen/event-displays",           priority: 0.8, cf: "monthly" as const },

    /* Legacy short URLs (/gastronomie, /retail, /hotellerie, /unternehmen,
       /events, /digitales-menueboard, /mieten) wurden auf die /branchen/*
       bzw. kanonischen Routen umgeleitet und sind hier bewusst nicht mehr
       gelistet. Die Redirect-Seiten sind via metadata.robots auf
       noindex,follow gesetzt. */

    /* Städte */
    { url: "/staedte/zuerich",  priority: 0.9, cf: "monthly" as const },
    { url: "/staedte/luzern",   priority: 0.9, cf: "monthly" as const },
    { url: "/staedte/zug",      priority: 0.9, cf: "monthly" as const },

    /* Wissen / Ratgeber */
    { url: "/wissen",                                       priority: 0.7, cf: "monthly" as const },
    { url: "/wissen/was-ist-digital-signage",               priority: 0.7, cf: "monthly" as const },
    { url: "/wissen/digital-signage-mieten-oder-kaufen",    priority: 0.7, cf: "monthly" as const },
    { url: "/wissen/digital-signage-software",              priority: 0.7, cf: "monthly" as const },
    { url: "/wissen/outdoor-displays",                      priority: 0.7, cf: "monthly" as const },
    { url: "/wissen/digitale-kundenstopper",                priority: 0.7, cf: "monthly" as const },
    { url: "/wissen/digitale-menueboards",                  priority: 0.7, cf: "monthly" as const },
    { url: "/wissen/digitale-leitsysteme",                  priority: 0.7, cf: "monthly" as const },

    /* Editorial / company */
    { url: "/news",       priority: 0.7, cf: "weekly" as const },
    { url: "/ueber-uns",  priority: 0.6, cf: "yearly" as const },
    { url: "/kontakt",    priority: 0.8, cf: "yearly" as const },

    /* Legal */
    { url: "/datenschutz", priority: 0.3, cf: "yearly" as const },
    { url: "/impressum",   priority: 0.3, cf: "yearly" as const },
  ];
  return pages.map((p) => ({
    url: `${base}${p.url}`,
    lastModified: new Date(),
    changeFrequency: p.cf,
    priority: p.priority,
  }));
}
