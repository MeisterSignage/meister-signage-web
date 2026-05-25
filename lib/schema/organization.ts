const BASE = "https://www.meister-signage.ch";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${BASE}/#organization`,
  name: "Meister Signage",
  legalName: "Meister Signage",
  url: BASE,
  logo: {
    "@type": "ImageObject",
    url: `${BASE}/logo.svg`,
    width: 1036,
    height: 708,
  },
  image: `${BASE}/og/meister-signage-og.png`,
  description:
    "Digital-Signage-Lösungen für Gastronomie, Retail, Hotellerie, Unternehmen und Events in der Schweiz. Schlüsselfertig geplant und persönlich betreut aus der Zentralschweiz.",
  telephone: "+41764526687",
  email: "chris@meister-signage.ch",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Chriesimatt 20",
    addressLocality: "Baar",
    addressRegion: "ZG",
    postalCode: "6340",
    addressCountry: "CH",
  },
  areaServed: [
    { "@type": "Country", name: "Schweiz" },
    { "@type": "AdministrativeArea", name: "Zentralschweiz" },
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: "+41764526687",
      email: "chris@meister-signage.ch",
      areaServed: "CH",
      availableLanguage: ["de", "en"],
    },
    {
      "@type": "ContactPoint",
      contactType: "sales",
      telephone: "+41764526687",
      email: "chris@meister-signage.ch",
      areaServed: "CH",
      availableLanguage: ["de", "en"],
    },
  ],
  knowsAbout: [
    "Digital Signage",
    "Digital-Signage-Displays",
    "LED Walls",
    "Digitale Menüboards",
    "Indoor Signage",
    "Bildschirmwerbung",
    "Empfangsdisplays",
    "Event-Displays",
  ],
  foundingDate: "2024",
  founder: {
    "@type": "Person",
    name: "Chris Meister",
  },
  sameAs: [
    "https://www.google.com/search?kgmid=/g/11z2v5lqzr",
    "https://www.linkedin.com/company/meister-signage/",
    "https://www.instagram.com/meistersignage/",
  ],
};
