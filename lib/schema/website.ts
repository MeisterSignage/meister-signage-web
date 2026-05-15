const BASE = "https://www.meister-signage.ch";

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Meister Signage",
  url: BASE,
  description:
    "Digital-Signage-Lösungen für Gastronomie, Retail, Unternehmen, Hotellerie und Events in der Schweiz.",
  inLanguage: "de-CH",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${BASE}/suche?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};
