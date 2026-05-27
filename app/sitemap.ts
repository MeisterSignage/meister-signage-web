import { MetadataRoute } from "next";
import { SITE_INDEXABLE } from "@/lib/seo-config";
import { getAllBranchenSlugs, getAllLoesungenSlugs, getAllStaedteSlugs } from "@/lib/landingpages";
import { getAllWissenSlugs } from "@/lib/wissen";
import { getPublishedPosts } from "@/lib/news";

export const dynamic = "force-static";

type Freq = "weekly" | "monthly" | "yearly";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!SITE_INDEXABLE) return [];

  const base = "https://www.meister-signage.ch";

  type Entry = { url: string; priority: number; cf: Freq; date: string };

  const fixed: Entry[] = [
    /* Core */
    { url: "/",                                   priority: 1.0, cf: "weekly",  date: "2026-05-18" },
    { url: "/digital-signage-schweiz",            priority: 1.0, cf: "weekly",  date: "2026-05-18" },

    /* Money pages */
    { url: "/digital-signage-kaufen",             priority: 0.9, cf: "monthly", date: "2026-05-18" },
    { url: "/digital-signage-mieten",             priority: 0.9, cf: "monthly", date: "2026-05-18" },
    { url: "/was-kostet-digital-signage-schweiz", priority: 0.8, cf: "monthly", date: "2026-05-18" },
    { url: "/digital-signage-anbieter-vergleich", priority: 0.8, cf: "monthly", date: "2026-05-27" },

    /* Overviews */
    { url: "/branchen",                           priority: 0.8, cf: "monthly", date: "2026-05-18" },
    { url: "/loesungen",                          priority: 0.8, cf: "monthly", date: "2026-05-18" },
    { url: "/wissen",                             priority: 0.7, cf: "monthly", date: "2026-05-18" },

    /* Editorial / company */
    { url: "/news",                               priority: 0.7, cf: "weekly",  date: "2026-05-18" },
    { url: "/ueber-uns",                          priority: 0.6, cf: "yearly",  date: "2026-05-18" },
    { url: "/kontakt",                            priority: 0.8, cf: "yearly",  date: "2026-05-18" },

    /* Legal */
    { url: "/datenschutz",                        priority: 0.3, cf: "yearly",  date: "2026-05-01" },
    { url: "/impressum",                          priority: 0.3, cf: "yearly",  date: "2026-05-01" },
    { url: "/versand-und-rueckgabe",              priority: 0.4, cf: "yearly",  date: "2026-05-27" },
  ];

  /* Detail-Seiten dynamisch aus dem CMS-Inhalt — neue Einträge im JSON
     landen automatisch in der Sitemap, ohne dass diese Datei geändert
     werden muss. */
  const dynamic: Entry[] = [
    ...getAllBranchenSlugs().map((slug): Entry => ({
      url: `/branchen/${slug}`,
      priority: 0.9,
      cf: "monthly" as const,
      date: "2026-05-15",
    })),
    ...getAllLoesungenSlugs().map((slug): Entry => ({
      url: `/loesungen/${slug}`,
      priority: 0.9,
      cf: "monthly" as const,
      date: "2026-05-15",
    })),
    ...getAllStaedteSlugs().map((slug): Entry => ({
      url: `/staedte/${slug}`,
      priority: 0.9,
      cf: "monthly" as const,
      date: "2026-05-15",
    })),
    ...getAllWissenSlugs().map((slug): Entry => ({
      url: `/wissen/${slug}`,
      priority: 0.7,
      cf: "monthly" as const,
      date: "2026-05-15",
    })),
    ...getPublishedPosts().map((post): Entry => ({
      url: `/news/${post.slug}`,
      priority: 0.6,
      cf: "monthly" as const,
      date: post.date,
    })),
  ];

  return [...fixed, ...dynamic].map((p) => ({
    url: `${base}${p.url}`,
    lastModified: new Date(p.date),
    changeFrequency: p.cf,
    priority: p.priority,
  }));
}
