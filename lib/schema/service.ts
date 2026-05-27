const BASE = "https://www.meister-signage.ch";

export interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string; // full URL of the page
  serviceType?: string;
  /** Optional city to prepend to the default areaServed list (used for /staedte pages). */
  areaServedCity?: string;
}

/** Generates a Service schema for a specific Digital Signage offering. */
export function serviceSchema({
  name,
  description,
  url,
  serviceType = "Digital Signage",
  areaServedCity,
}: ServiceSchemaProps) {
  const areaServed: Record<string, string>[] = [];
  if (areaServedCity) {
    areaServed.push({ "@type": "City", name: areaServedCity });
  }
  areaServed.push(
    { "@type": "Country", name: "Schweiz" },
    { "@type": "AdministrativeArea", name: "Zentralschweiz" },
  );

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
    areaServed,
    audience: {
      "@type": "BusinessAudience",
      audienceType: "KMU, Gastronomie, Retail, Hotellerie, Unternehmen",
    },
  };
}
