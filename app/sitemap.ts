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
  const now = new Date();

  const fixed: { url: string; priority: number; cf: Freq }[] = [
    /* Core */
    { url: "/",                                   priority: 1.0, cf: "weekly"  },
    { url: "/digital-signage-schweiz",            priority: 1.0, cf: "weekly"  },

    /* Money pages */
    { url: "/digital-signage-kaufen",             priority: 0.9, cf: "monthly" },
    { url: "/digital-signage-mieten",             priority: 0.9, cf: "monthly" },
    { url: "/was-kostet-digital-signage-schweiz", priority: 0.8, cf: "monthly" },

    /* Overviews */
    { url: "/branchen",                           priority: 0.8, cf: "monthly" },
    { url: "/loesungen",                          priority: 0.8, cf: "monthly" },
    { url: "/wissen",                             priority: 0.7, cf: "monthly" },

    /* Editorial / company */
    { url: "/news",                               priority: 0.7, cf: "weekly"  },
    { url: "/ueber-uns",                          priority: 0.6, cf: "yearly"  },
    { url: "/kontakt",                            priority: 0.8, cf: "yearly"  },

    /* Legal */
    { url: "/datenschutz",                        priority: 0.3, cf: "yearly"  },
    { url: "/impressum",                          priority: 0.3, cf: "yearly"  },
  ];

  /* Detail-Seiten dynamisch aus dem CMS-Inhalt — neue Einträge im JSON
     landen automatisch in der Sitemap, ohne dass diese Datei geändert
     werden muss. */
  const dynamic: { url: string; priority: number; cf: Freq }[] = [
    ...getAllBranchenSlugs().map((slug) => ({
      url: `/branchen/${slug}`,
      priority: 0.9,
      cf: "monthly" as const,
    })),
    ...getAllLoesungenSlugs().map((slug) => ({
      url: `/loesungen/${slug}`,
      priority: 0.9,
      cf: "monthly" as const,
    })),
    ...getAllStaedteSlugs().map((slug) => ({
      url: `/staedte/${slug}`,
      priority: 0.9,
      cf: "monthly" as const,
    })),
    ...getAllWissenSlugs().map((slug) => ({
      url: `/wissen/${slug}`,
      priority: 0.7,
      cf: "monthly" as const,
    })),
    ...getPublishedPosts().map((post) => ({
      url: `/news/${post.slug}`,
      priority: 0.6,
      cf: "monthly" as const,
    })),
  ];

  return [...fixed, ...dynamic].map((p) => ({
    url: `${base}${p.url}`,
    lastModified: now,
    changeFrequency: p.cf,
    priority: p.priority,
  }));
}
