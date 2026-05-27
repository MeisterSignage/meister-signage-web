const BASE = "https://www.meister-signage.ch";

const merchantReturnPolicy = {
  "@type": "MerchantReturnPolicy",
  applicableCountry: "CH",
  returnPolicyCategory: "https://schema.org/MerchantReturnNotPermitted",
};

const shippingDetails = {
  "@type": "OfferShippingDetails",
  shippingRate: {
    "@type": "MonetaryAmount",
    minValue: 0,
    maxValue: 150,
    currency: "CHF",
  },
  shippingDestination: {
    "@type": "DefinedRegion",
    addressCountry: "CH",
  },
  deliveryTime: {
    "@type": "ShippingDeliveryTime",
    handlingTime: {
      "@type": "QuantitativeValue",
      minValue: 1,
      maxValue: 3,
      unitCode: "DAY",
    },
    transitTime: {
      "@type": "QuantitativeValue",
      minValue: 2,
      maxValue: 7,
      unitCode: "DAY",
    },
  },
};

const COMMON_PROPERTIES: { name: string; value: string }[] = [
  { name: "Bautiefe", value: "15.5 mm" },
  { name: "Rahmen (Bezel)", value: "13.5 mm" },
  { name: "Helligkeit", value: "450 nits" },
  { name: "Standby-Verbrauch", value: "0.8 W" },
  { name: "Konnektivität", value: "WiFi6 + Bluetooth 5.2" },
  { name: "Datenkabel", value: "keine – vollständig wireless" },
  { name: "Stromzuführung", value: "24 V DC über externes Netzteil (HOIOTO, 120 W, GS-zertifiziert)" },
  { name: "Dauerbetrieb", value: "24/7 spezifiziert" },
  { name: "Zertifizierung", value: "UL, CSA, CE" },
];

function buildAdditionalProperty(offer: ProductOffer) {
  const perModel: { name: string; value: string }[] = [];
  if (offer.screenSize)      perModel.push({ name: "Bildschirmgrösse", value: offer.screenSize });
  if (offer.resolution)      perModel.push({ name: "Auflösung", value: offer.resolution });
  if (offer.powerTyp)        perModel.push({ name: "Stromverbrauch (typ.)", value: offer.powerTyp });
  if (offer.weightKg)        perModel.push({ name: "Gewicht", value: `${offer.weightKg} kg` });
  return [...perModel, ...COMMON_PROPERTIES].map((p) => ({
    "@type": "PropertyValue",
    name: p.name,
    value: p.value,
  }));
}

export interface ProductOffer {
  name: string;
  description: string;
  sku: string;
  price: number;
  priceCurrency?: string;
  /** Optional model-specific specs for additionalProperty enrichment. */
  screenSize?: string;
  resolution?: string;
  powerTyp?: string;
  weightKg?: number;
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
    additionalProperty: buildAdditionalProperty(offer),
    offers: {
      "@type": "Offer",
      url: pageUrl,
      priceCurrency: offer.priceCurrency ?? "CHF",
      price: offer.price,
      priceValidUntil: new Date(Date.now() + 90 * 86400000).toISOString().slice(0, 10),
      availability: "https://schema.org/InStock",
      hasMerchantReturnPolicy: merchantReturnPolicy,
      shippingDetails,
      seller: {
        "@type": "Organization",
        "@id": `${BASE}/#organization`,
        name: "Meister Signage",
      },
    },
  }));
}

export interface RentalOffer {
  name: string;
  description: string;
  monthlyPrice: number;
  /** Optional model-specific specs for additionalProperty enrichment. */
  screenSize?: string;
  resolution?: string;
  powerTyp?: string;
  weightKg?: number;
}

export function rentalOfferSchema(offers: RentalOffer[], pageUrl: string) {
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
    additionalProperty: buildAdditionalProperty({
      name: offer.name,
      description: offer.description,
      sku: "",
      price: offer.monthlyPrice,
      screenSize: offer.screenSize,
      resolution: offer.resolution,
      powerTyp: offer.powerTyp,
      weightKg: offer.weightKg,
    }),
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
