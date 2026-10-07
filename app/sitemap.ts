import { MetadataRoute } from "next";
import { SITE_INDEXABLE } from "@/lib/seo-config";
import { getAllBranchenSlugs, getAllLoesungenSlugs, getAllStaedteSlugs, getStaedtePage, getBranchenPage, getLoesungenPage } from "@/lib/landingpages";
import { getAllWissenSlugs, getWissenPage } from "@/lib/wissen";
import { getPublishedPosts } from "@/lib/news";

export const dynamic = "force-static";

type Freq = "weekly" | "monthly" | "yearly";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!SITE_INDEXABLE) return [];

  const base = "https://www.meister-signage.ch";

  type Entry = { url: string; priority: number; cf: Freq; date?: string };

  const fixed: Entry[] = [
    /* Core */
    { date: "2026-10-07", url: "/",                                   priority: 1.0, cf: "weekly" },
    { url: "/digital-signage-schweiz",            priority: 1.0, cf: "weekly" },

    /* Money pages */
    { date: "2026-10-07", url: "/digital-signage-kaufen",             priority: 0.9, cf: "monthly" },
    { url: "/digital-signage-mieten",             priority: 0.9, cf: "monthly" },
    { date: "2026-10-07", url: "/was-kostet-digital-signage-schweiz", priority: 0.8, cf: "monthly" },
    { url: "/digital-signage-wie-red-bull",       priority: 0.7, cf: "monthly" },
    { url: "/digital-signage-anbieter-vergleich", priority: 0.8, cf: "monthly" },
    /* /preise: noch nicht öffentlich — zum Go-live hier eintragen. */

    /* Overviews */
    { url: "/branchen",                           priority: 0.8, cf: "monthly" },
    { url: "/loesungen",                          priority: 0.8, cf: "monthly" },
    { url: "/loesungen/displays",                 priority: 0.8, cf: "monthly" },
    { url: "/wissen",                             priority: 0.7, cf: "monthly" },

    /* Editorial / company */
    { url: "/news",                               priority: 0.7, cf: "weekly" },
    { url: "/ueber-uns",                          priority: 0.6, cf: "yearly" },
    { url: "/kontakt",                            priority: 0.8, cf: "yearly" },
    { url: "/redaktionelle-richtlinien",          priority: 0.3, cf: "yearly" },

  ];

  /* Detail-Seiten dynamisch aus dem CMS-Inhalt — neue Einträge im JSON
     landen automatisch in der Sitemap, ohne dass diese Datei geändert
     werden muss. */
  const dynamic: Entry[] = [
    ...getAllBranchenSlugs().map((slug): Entry => ({
      url: `/branchen/${slug}`,
      date: getBranchenPage(slug)?.updatedAt,
      priority: 0.9,
      cf: "monthly" as const,
    })),
    ...getAllLoesungenSlugs().map((slug): Entry => ({
      url: `/loesungen/${slug}`,
      date: getLoesungenPage(slug)?.updatedAt,
      priority: 0.9,
      cf: "monthly" as const,
    })),
    // noindex-Städte (schwache Template-Seiten) NICHT in die Sitemap aufnehmen
    ...getAllStaedteSlugs()
      .filter((slug) => (getStaedtePage(slug) as { noindex?: boolean } | null)?.noindex !== true)
      .map((slug): Entry => ({
        url: `/staedte/${slug}`,
        date: getStaedtePage(slug)?.updatedAt,
        priority: 0.9,
        cf: "monthly" as const,
      })),
    ...getAllWissenSlugs().map((slug): Entry => ({
      url: `/wissen/${slug}`,
      date: getWissenPage(slug)?.dateModified,
      priority: 0.7,
      cf: "monthly" as const,
    })),
    ...getPublishedPosts().map((post): Entry => ({
      url: `/news/${post.slug}`,
      date: post.dateModified ?? post.date,
      priority: 0.6,
      cf: "monthly" as const,

    })),
  ];

  return [...fixed, ...dynamic].map((p) => {
    // Ensure trailing slash so URLs match Next.js trailingSlash:true output.
    // Without this, Google requests /path, gets 301 → /path/ and may classify
    // as "Page with redirect" instead of indexing the canonical URL.
    const path = p.url === "/" ? "/" : p.url.endsWith("/") ? p.url : `${p.url}/`;
    return {
      url: `${base}${path}`,
      ...(p.date ? { lastModified: new Date(p.date) } : {}),
      changeFrequency: p.cf,
      priority: p.priority,
    };
  });
}
