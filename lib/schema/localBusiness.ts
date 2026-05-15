const BASE = "https://www.meister-signage.ch";

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Meister Signage",
  url: BASE,
  logo: {
    "@type": "ImageObject",
    url: `${BASE}/logo.png`,
  },
  image: `${BASE}/og/meister-signage-og.png`,
  description:
    "Planung und Umsetzung von Digital-Signage-Lösungen für Gastronomie, Retail, Unternehmen, Hotellerie und Events in der Schweiz.",
  telephone: "+41764526687",
  email: "chris@meister-signage.ch",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Chriesimatt 20",
    addressLocality: "Baar",
    postalCode: "6340",
    addressCountry: "CH",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 47.1928,
    longitude: 8.5295,
  },
  areaServed: {
    "@type": "Country",
    name: "Schweiz",
  },
  priceRange: "$$",
  openingHours: "Mo-Fr 08:00-18:00",
  sameAs: [
    "https://www.linkedin.com/company/meister-signage/",
    "https://www.instagram.com/meistersignage/",
  ],
};
