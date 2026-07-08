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
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "Claude-Web", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "CCBot", allow: "/" },
      { userAgent: "Bytespider", allow: "/" },
      { userAgent: "cohere-ai", allow: "/" },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
