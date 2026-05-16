const BASE = "https://www.meister-signage.ch";

export const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${BASE}/ueber-uns#aboutpage`,
  url: `${BASE}/ueber-uns`,
  name: "Über Meister Signage",
  description:
    "Meister Signage plant und realisiert Digital-Signage-Lösungen mit persönlicher Betreuung – direkter Ansprechpartner aus der Zentralschweiz.",
  inLanguage: "de-CH",
  isPartOf: {
    "@type": "WebSite",
    "@id": `${BASE}/#website`,
  },
  about: {
    "@type": "Organization",
    "@id": `${BASE}/#organization`,
  },
  mainEntity: {
    "@type": "Person",
    name: "Chris Meister",
    jobTitle: "Gründer",
    worksFor: {
      "@type": "Organization",
      "@id": `${BASE}/#organization`,
    },
  },
};
