import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.meister-signage.ch";
  const pages = [
    { url: "/",                            priority: 1.0, cf: "weekly"  as const },
    { url: "/digital-signage-schweiz",     priority: 1.0, cf: "weekly"  as const },
    { url: "/gastronomie", priority: 0.9, cf: "monthly" as const },
    { url: "/retail",      priority: 0.9, cf: "monthly" as const },
    { url: "/events",      priority: 0.8, cf: "monthly" as const },
    { url: "/hotellerie",  priority: 0.9, cf: "monthly" as const },
    { url: "/unternehmen", priority: 0.9, cf: "monthly" as const },
    { url: "/digital-signage-mieten",          priority: 0.9, cf: "monthly" as const },
    { url: "/was-kostet-digital-signage-schweiz", priority: 0.8, cf: "monthly" as const },
    { url: "/luzern",      priority: 0.9, cf: "monthly" as const },
    { url: "/blog",        priority: 0.7, cf: "weekly"  as const },
    { url: "/ueber-uns",   priority: 0.6, cf: "yearly"  as const },
    { url: "/kontakt",     priority: 0.8, cf: "yearly"  as const },
  ];
  return pages.map((p) => ({
    url: `${base}${p.url}`,
    lastModified: new Date(),
    changeFrequency: p.cf,
    priority: p.priority,
  }));
}
