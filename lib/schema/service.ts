const BASE = "https://www.meister-signage.ch";

export interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string; // full URL of the page
  serviceType?: string;
}

/** Generates a Service schema for a specific Digital Signage offering. */
export function serviceSchema({
  name,
  description,
  url,
  serviceType = "Digital Signage",
}: ServiceSchemaProps) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    serviceType,
    provider: {
      "@type": "Organization",
      "@id": `${BASE}/#organization`,
      name: "Meister Signage",
      url: BASE,
    },
    areaServed: [
      { "@type": "Country", name: "Schweiz" },
      { "@type": "AdministrativeArea", name: "Zentralschweiz" },
    ],
    audience: {
      "@type": "BusinessAudience",
      audienceType: "KMU, Gastronomie, Retail, Hotellerie, Unternehmen",
    },
  };
}
