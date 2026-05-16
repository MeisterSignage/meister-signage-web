const BASE = "https://www.meister-signage.ch";

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${BASE}/#localbusiness`,
  name: "Meister Signage",
  url: BASE,
  logo: {
    "@type": "ImageObject",
    url: `${BASE}/logo.svg`,
    width: 1036,
    height: 708,
  },
  image: `${BASE}/og/meister-signage-og.png`,
  description:
    "Planung und Umsetzung von Digital-Signage-Lösungen für Gastronomie, Retail, Hotellerie, Unternehmen und Events in der Schweiz – persönlich betreut aus der Zentralschweiz.",
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
  geo: {
    "@type": "GeoCoordinates",
    latitude: 47.1928,
    longitude: 8.5295,
  },
  areaServed: [
    { "@type": "Country", name: "Schweiz" },
    { "@type": "AdministrativeArea", name: "Zentralschweiz" },
    { "@type": "City", name: "Luzern" },
    { "@type": "City", name: "Zug" },
    { "@type": "City", name: "Zürich" },
  ],
  priceRange: "$$",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    telephone: "+41764526687",
    email: "chris@meister-signage.ch",
    areaServed: "CH",
    availableLanguage: ["de", "en"],
  },
  sameAs: [
    "https://www.linkedin.com/company/meister-signage/",
    "https://www.instagram.com/meistersignage/",
  ],
};
