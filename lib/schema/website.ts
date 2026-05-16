const BASE = "https://www.meister-signage.ch";

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE}/#website`,
  name: "Meister Signage",
  alternateName: "Meister Signage Schweiz",
  url: BASE,
  description:
    "Digital-Signage-Lösungen für Gastronomie, Retail, Hotellerie, Unternehmen und Events in der Schweiz.",
  inLanguage: "de-CH",
  publisher: {
    "@type": "Organization",
    "@id": `${BASE}/#organization`,
  },
};
