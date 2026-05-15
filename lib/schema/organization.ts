const BASE = "https://www.meister-signage.ch";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Meister Signage",
  url: BASE,
  logo: {
    "@type": "ImageObject",
    url: `${BASE}/logo.png`,
  },
  description:
    "Digital-Signage-Lösungen für Gastronomie, Retail, Unternehmen, Hotellerie und Events in der Schweiz.",
  telephone: "+41764526687",
  email: "chris@meister-signage.ch",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Chriesimatt 20",
    addressLocality: "Baar",
    postalCode: "6340",
    addressCountry: "CH",
  },
  sameAs: [
    "https://www.linkedin.com/company/meister-signage/",
    "https://www.instagram.com/meistersignage/",
  ],
};
