import type { MetadataRoute } from "next";
import { SITE_INDEXABLE } from "@/lib/seo-config";

export const dynamic = "force-static";

const SITE_URL = "https://www.meister-signage.ch";

export default function robots(): MetadataRoute.Robots {
  if (!SITE_INDEXABLE) {
    return {
      rules: [{ userAgent: "*", disallow: "/" }],
    };
  }

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/mieten/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
