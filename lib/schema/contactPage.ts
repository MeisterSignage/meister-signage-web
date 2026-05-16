const BASE = "https://www.meister-signage.ch";

export const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${BASE}/kontakt#contactpage`,
  url: `${BASE}/kontakt`,
  name: "Kontakt – Meister Signage",
  description:
    "Persönliche Beratung rund um Digital Signage. Direkter Kontakt zu Chris Meister – kein Ticketsystem, kein Callcenter.",
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
    "@type": "Organization",
    "@id": `${BASE}/#organization`,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: "+41764526687",
        email: "chris@meister-signage.ch",
        areaServed: "CH",
        availableLanguage: ["de", "en"],
      },
    ],
  },
};
