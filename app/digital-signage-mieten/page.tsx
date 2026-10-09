import type { Metadata } from "next";
import DigitalSignageMietenContent from "@/components/pages/DigitalSignageMietenContent";
import ContactSection from "@/components/sections/ContactSection";
import InternalLinksSection from "@/components/sections/InternalLinksSection";
import JsonLd from "@/components/JsonLd";
import { faqSchema } from "@/lib/schema/faq";
import { breadcrumbSchema } from "@/lib/schema/breadcrumb";
import { serviceSchema } from "@/lib/schema/service";
import { rentalOfferSchema } from "@/lib/schema/product";
import { RENTAL_PACKAGES, RENTAL_FAQS, RENTAL_TERMS, MEISTER_RENTAL_DISPLAYS, MEISTER_DISPLAY_DETAILS, MEISTER_RENTAL_CONDITIONS } from "@/lib/rental-pricing";

const SITE_URL = "https://www.meister-signage.ch";
const PAGE_URL = `${SITE_URL}/digital-signage-mieten`;

export const metadata: Metadata = {
  title: { absolute: "Display mieten Schweiz – ab CHF 119/Mt. | Meister Signage" },
  description:
    "Digital Signage mieten ab CHF 119 pro Display und Monat bei 12 Monaten Laufzeit. Einrichtung, Lizenz und Wandhalterung inklusive. Weitere Laufzeiten auf der Seite.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    locale: "de_CH",
    url: PAGE_URL,
    siteName: "Meister Signage",
    title: "Digital Signage mieten Schweiz – Displays, Events & Pop-ups | Meister Signage",
    description:
      "Displays ab CHF 119 pro Monat bei 12 Monaten Laufzeit mieten. Einrichtung, Lizenz und Wandhalterung inklusive; auch Laufzeiten von 1, 3 und 6 Monaten.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Signage mieten Schweiz – Displays, Events & Pop-ups | Meister Signage",
    description:
      "Digital Signage ab CHF 119 pro Monat bei 12 Monaten Laufzeit. Einrichtung, Lizenz und Wandhalterung inklusive. Kürzere Laufzeiten ebenfalls verfügbar.",
  },
};

// Miet-Angebote als Product/Offer mit priceSpecification (monatlich) — für
// Rich Results & KI-Zitierbarkeit. Preise = zentrale Miet-Preise des Spark-Sortiments.
const RENTAL_OFFERS = RENTAL_PACKAGES.map((pkg) => ({
  name: `Meister Signage ${pkg.model} – ${pkg.size} Display mieten`,
  description: `${pkg.desc} Monatsmiete bei 12 Monaten Laufzeit, inklusive Standardeinrichtung, Softwarelizenz, Wandhalterung und persönlicher Betreuung.`,
  monthlyPrice: pkg.monthlyPrices[12],
  rentalDurationMonths: 12,
  image: pkg.imageSrc,
  screenSize: pkg.size,
  resolution: pkg.spec,
}));

const MEISTER_RENTAL_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Meister Signage Mietgeräte",
  itemListElement: [
    ...MEISTER_RENTAL_DISPLAYS.map((display, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: display.model,
        description: `${MEISTER_DISPLAY_DETAILS} ${MEISTER_RENTAL_CONDITIONS}`,
        brand: { "@type": "Brand", name: "Meister Signage" },
        offers: RENTAL_TERMS.map((months) => ({
          "@type": "Offer",
          name: `${months} Monate Laufzeit`,
          url: PAGE_URL,
          businessFunction: "http://purl.org/goodrelations/v1#LeaseOut",
          price: display.monthlyPrices[months],
          priceCurrency: "CHF",
          eligibleDuration: { "@type": "QuantitativeValue", value: months, unitCode: "MON" },
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: display.monthlyPrices[months],
            priceCurrency: "CHF",
            valueAddedTaxIncluded: false,
            referenceQuantity: { "@type": "QuantitativeValue", value: 1, unitCode: "MON" },
          },
        })),
      },
    })),
    {
      "@type": "ListItem", position: 3,
      item: { "@type": "Service", name: "Meister Stele 55″ mieten", url: PAGE_URL,
        description: "55-Zoll-Touch-Stele im Hochformat. Mietpreis auf Anfrage. Transporter erforderlich; Lieferung, Aufstellung und Rückholung separat nach Absprache." },
    },
    {
      "@type": "ListItem", position: 4,
      item: { "@type": "Service", name: "Meister Board 43″ mieten", url: PAGE_URL,
        description: "Digitaler Kundenstopper mit Akku, 43 Zoll und bis zu 3’000 Nits Spitzenhelligkeit. Mietpreis und Mietdauer auf Anfrage." },
    },
  ],
};

export default function DigitalSignageMietenPage() {
  return (
    <>
      <JsonLd schema={faqSchema(RENTAL_FAQS) as Record<string, unknown>} />
      <JsonLd
        schema={
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Digital Signage mieten", path: "/digital-signage-mieten" },
          ]) as Record<string, unknown>
        }
      />
      <JsonLd
        schema={
          serviceSchema({
            name: "Digital Signage mieten",
            description:
              "Flexible Bildschirmmiete für Events, Messen, Pop-ups und temporäre Einsätze – inklusive Einrichtung, Lizenz und persönlicher Betreuung.",
            url: PAGE_URL,
            serviceType: "Bildschirmvermietung",
          }) as Record<string, unknown>
        }
      />

      {rentalOfferSchema(RENTAL_OFFERS, PAGE_URL).map((schema, i) => (
        <JsonLd key={`rental-${i}`} schema={schema as Record<string, unknown>} />
      ))}

      <JsonLd schema={MEISTER_RENTAL_SCHEMA} />
      <DigitalSignageMietenContent />

      <InternalLinksSection
        eyebrow="Weitere Seiten"
        links={[
          { label: "Digital Signage kaufen",    href: "/digital-signage-kaufen" },
          { label: "Digital Signage Anbieter",  href: "/digital-signage-anbieter-vergleich" },
          { label: "Kosten & Preise",           href: "/was-kostet-digital-signage-schweiz" },
          { label: "Mobile Displays",           href: "/loesungen/mobile-displays" },
          { label: "Doppelseitige Displays",    href: "/loesungen/doppelseitige-displays" },
          { label: "Digitale Leitsysteme",      href: "/loesungen/digitale-leitsysteme" },
          { label: "Events & Messen",           href: "/branchen/events" },
          { label: "Gastronomie",               href: "/branchen/gastronomie" },
          { label: "Retail & Handel",           href: "/branchen/retail" },
        ]}
      />

      <ContactSection
        eyebrow="Persönlicher Kontakt"
        title="Sie möchten Digital Signage mieten?"
        subtitle="Schreiben Sie kurz, was Sie vorhaben und welchen Screen-Typ Sie im Einsatz sehen. Wir melden uns persönlich."
        imageSrc="/images/Chris-Meister.webp"
      />
    </>
  );
}
