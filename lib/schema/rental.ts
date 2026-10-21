const BASE = "https://www.meister-signage.ch";

function absoluteImage(path: string) {
  return path.startsWith("http") ? path : `${BASE}${path}`;
}

// The rental overview describes services, not individual retail purchases.
// Keep monthly prices and contract durations explicit without Product markup.
export interface RentalOffer {
  name: string;
  description: string;
  monthlyPrice: number;
  rentalDurationMonths?: number;
  image: string;
}

export function rentalServiceSchema(offers: RentalOffer[], pageUrl: string) {
  return offers.map((offer) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    url: pageUrl,
    serviceType: "Bildschirmvermietung",
    provider: { "@id": `${BASE}/#organization` },
    areaServed: { "@type": "Country", name: "Schweiz" },
    name: offer.name,
    description: offer.description,
    image: absoluteImage(offer.image),
    brand: {
      "@type": "Brand",
      name: "Meister Signage",
    },
    offers: {
      "@type": "Offer",
      url: pageUrl,
      priceCurrency: "CHF",
      price: offer.monthlyPrice,
      businessFunction: "http://purl.org/goodrelations/v1#LeaseOut",
      ...(offer.rentalDurationMonths ? {
        eligibleDuration: {
          "@type": "QuantitativeValue",
          value: offer.rentalDurationMonths,
          unitCode: "MON",
        },
      } : {}),
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: offer.monthlyPrice,
        priceCurrency: "CHF",
        referenceQuantity: {
          "@type": "QuantitativeValue",
          value: 1,
          unitCode: "MON",
        },
      },
      seller: {
        "@type": "Organization",
        "@id": `${BASE}/#organization`,
        name: "Meister Signage",
      },
    },
  }));
}
