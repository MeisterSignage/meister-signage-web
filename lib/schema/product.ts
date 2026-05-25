const BASE = "https://www.meister-signage.ch";

export interface ProductOffer {
  name: string;
  description: string;
  sku: string;
  price: number;
  priceCurrency?: string;
}

export function productSchema(offers: ProductOffer[], pageUrl: string) {
  return offers.map((offer) => ({
    "@context": "https://schema.org",
    "@type": "Product",
    name: offer.name,
    description: offer.description,
    sku: offer.sku,
    brand: {
      "@type": "Organization",
      "@id": `${BASE}/#organization`,
      name: "Meister Signage",
    },
    offers: {
      "@type": "Offer",
      url: pageUrl,
      priceCurrency: offer.priceCurrency ?? "CHF",
      price: offer.price,
      priceValidUntil: new Date(Date.now() + 90 * 86400000).toISOString().slice(0, 10),
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        "@id": `${BASE}/#organization`,
        name: "Meister Signage",
      },
    },
  }));
}

export function rentalOfferSchema(
  offers: { name: string; description: string; monthlyPrice: number }[],
  pageUrl: string,
) {
  return offers.map((offer) => ({
    "@context": "https://schema.org",
    "@type": "Product",
    name: offer.name,
    description: offer.description,
    brand: {
      "@type": "Organization",
      "@id": `${BASE}/#organization`,
      name: "Meister Signage",
    },
    offers: {
      "@type": "Offer",
      url: pageUrl,
      priceCurrency: "CHF",
      price: offer.monthlyPrice,
      priceValidUntil: new Date(Date.now() + 90 * 86400000).toISOString().slice(0, 10),
      availability: "https://schema.org/InStock",
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
