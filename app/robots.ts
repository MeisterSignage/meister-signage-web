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
        // /admin/ ist bereits per HTTP 401 geschützt – hier nur, damit die
        // Login-URL nicht im Index landet. /_next/ bewusst NICHT sperren:
        // Crawler brauchen die JS/CSS-Assets zum Rendern (sonst SEO-Schaden).
        disallow: "/admin/",
      },
      // AI-Crawler explizit erlauben (GEO / AI-Sichtbarkeit).
      { userAgent: "GPTBot", allow: "/", disallow: "/admin/" },
      { userAgent: "OAI-SearchBot", allow: "/", disallow: "/admin/" },
      { userAgent: "ChatGPT-User", allow: "/", disallow: "/admin/" },
      { userAgent: "ClaudeBot", allow: "/", disallow: "/admin/" },
      { userAgent: "Claude-Web", allow: "/", disallow: "/admin/" },
      { userAgent: "PerplexityBot", allow: "/", disallow: "/admin/" },
      { userAgent: "Google-Extended", allow: "/", disallow: "/admin/" },
      { userAgent: "CCBot", allow: "/", disallow: "/admin/" },
      { userAgent: "Bytespider", allow: "/", disallow: "/admin/" },
      { userAgent: "cohere-ai", allow: "/", disallow: "/admin/" },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
