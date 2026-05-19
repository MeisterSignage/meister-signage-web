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
    "https://www.google.com/search?kgmid=/g/11z2v5lqzr",
    "https://www.linkedin.com/company/meister-signage/",
    "https://www.instagram.com/meistersignage/",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital-Signage-Displays",
    itemListElement: [
      {
        "@type": "Product",
        name: "Spark 3",
        description: "Kompaktes 32-Zoll Full-HD Digital-Signage-Display mit eingebautem Media Player.",
        image: `${BASE}/images/products/Spark3-Design.webp`,
        brand: { "@type": "Brand", name: "Meister Signage" },
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "CHF",
          lowPrice: "1299",
          offerCount: 2,
          offers: [
            { "@type": "Offer", name: "Kauf", price: "1299", priceCurrency: "CHF" },
            { "@type": "Offer", name: "Miete", price: "129", priceCurrency: "CHF", unitCode: "MON" },
          ],
        },
      },
      {
        "@type": "Product",
        name: "Spark 4",
        description: "Vielseitiges 43-Zoll 4K-UHD Digital-Signage-Display — der Bestseller für Gastronomie, Retail und Hotellerie.",
        image: `${BASE}/images/products/Spark4-Design.webp`,
        brand: { "@type": "Brand", name: "Meister Signage" },
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "CHF",
          lowPrice: "1499",
          offerCount: 2,
          offers: [
            { "@type": "Offer", name: "Kauf", price: "1499", priceCurrency: "CHF" },
            { "@type": "Offer", name: "Miete", price: "139", priceCurrency: "CHF", unitCode: "MON" },
          ],
        },
      },
      {
        "@type": "Product",
        name: "Spark 5",
        description: "Grossflächiges 50-Zoll 4K-UHD Digital-Signage-Display für maximale Wirkung in Schaufenstern und Empfangsbereichen.",
        image: `${BASE}/images/products/Spark5-Design.webp`,
        brand: { "@type": "Brand", name: "Meister Signage" },
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "CHF",
          lowPrice: "1599",
          offerCount: 2,
          offers: [
            { "@type": "Offer", name: "Kauf", price: "1599", priceCurrency: "CHF" },
            { "@type": "Offer", name: "Miete", price: "149", priceCurrency: "CHF", unitCode: "MON" },
          ],
        },
      },
      {
        "@type": "Product",
        name: "Spark Q+",
        description: "Quadratisches 33-Zoll Digital-Signage-Display für kreative Installationen und besondere Raumkonzepte.",
        image: `${BASE}/images/products/SparkQ-Design.webp`,
        brand: { "@type": "Brand", name: "Meister Signage" },
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "CHF",
          lowPrice: "1699",
          offerCount: 2,
          offers: [
            { "@type": "Offer", name: "Kauf", price: "1699", priceCurrency: "CHF" },
            { "@type": "Offer", name: "Miete", price: "159", priceCurrency: "CHF", unitCode: "MON" },
          ],
        },
      },
    ],
  },
};
