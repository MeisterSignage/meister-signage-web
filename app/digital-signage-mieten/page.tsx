import type { Metadata } from "next";
import DigitalSignageMietenContent from "@/components/pages/DigitalSignageMietenContent";
import ContactSection from "@/components/sections/ContactSection";
import InternalLinksSection from "@/components/sections/InternalLinksSection";
import JsonLd from "@/components/JsonLd";
import { faqSchema } from "@/lib/schema/faq";
import { breadcrumbSchema } from "@/lib/schema/breadcrumb";
import { serviceSchema } from "@/lib/schema/service";
import { rentalOfferSchema } from "@/lib/schema/product";

const SITE_URL = "https://www.meister-signage.ch";
const PAGE_URL = `${SITE_URL}/digital-signage-mieten`;

export const metadata: Metadata = {
  title: { absolute: "Display mieten Schweiz – ab CHF 149/Mt. | Meister Signage" },
  description:
    "Display mieten Schweiz ab CHF 149/Mt.: Digital-Signage-Screens, Eventdisplays und Menüboards flexibel mieten – inkl. Lizenz und persönlicher Betreuung.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    locale: "de_CH",
    url: PAGE_URL,
    siteName: "Meister Signage",
    title: "Digital Signage mieten Schweiz – Displays, Events & Pop-ups | Meister Signage",
    description:
      "Display mieten Schweiz: Digital-Signage-Screens für Events, Messen, Gastronomie und Retail – inkl. Lizenz und persönlicher Betreuung.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Signage mieten Schweiz – Displays, Events & Pop-ups | Meister Signage",
    description:
      "Display mieten Schweiz: Digital-Signage-Screens, Eventdisplays und mobile Displays flexibel mieten.",
  },
};

// Miet-Angebote als Product/Offer mit priceSpecification (monatlich) — für
// Rich Results & KI-Zitierbarkeit. Preise = zentrale Miet-Preise des Spark-Sortiments.
const RENTAL_OFFERS = [
  { name: 'Meister Signage Spark 3 – 32" Display mieten', description: "Kompaktes 32-Zoll Full-HD-Display zur Miete – ideal für Theken, Point-of-Sale und kleine Flächen. Inkl. Lizenz und persönlicher Betreuung.", monthlyPrice: 149, image: "/images/products/Spark3-Design.webp", screenSize: '32"', resolution: "Full HD" },
  { name: 'Meister Signage Spark 4 – 43" Display mieten', description: "Vielseitiges 43-Zoll 4K-Display zur Miete – für Retail, Hotellerie und Gastronomie. Inkl. Lizenz und persönlicher Betreuung.", monthlyPrice: 159, image: "/images/products/Spark4-Design.webp", screenSize: '43"', resolution: "4K UHD" },
  { name: 'Meister Signage Spark 5 – 50" Display mieten', description: "Grossflächiges 50-Zoll 4K-Display zur Miete – perfekt für Events, Messen und grosse Räume. Inkl. Lizenz und persönlicher Betreuung.", monthlyPrice: 169, image: "/images/products/Spark5-Design.webp", screenSize: '50"', resolution: "4K UHD" },
  { name: 'Meister Signage Spark Q+ – quadratisches Display mieten', description: "Quadratisches 33-Zoll Full-HD-Display zur Miete – für kreative Konzepte und besondere Inszenierungen. Inkl. Lizenz und persönlicher Betreuung.", monthlyPrice: 179, image: "/images/products/SparkQ-Design.webp", screenSize: '33" (quadratisch)', resolution: "Full HD" },
];

const PAGE_FAQS = [
  {
    question: "Was kostet die Display-Miete?",
    answer:
      "Die Display-Miete kalkulieren wir individuell nach Grösse, Auflösung und Einsatzdauer. Sie umfasst Hardware, Software-Lizenz und Support; Konditionen, Einrichtung und Lieferung weisen wir im Angebot transparent aus – eine kurze Anfrage genügt.",
  },
  {
    question: "Welche Displays können gemietet werden?",
    answer:
      "Gemietet werden können mobile Displays, doppelseitige Displays, Eventdisplays, Menüboards, Empfangsdisplays und digitale Leitsysteme. Für jede Anwendung wählen wir gemeinsam das passende Format.",
  },
  {
    question: "Eignen sich Mietdisplays für Events?",
    answer:
      "Ja. Mietdisplays sind besonders für Messen, Tagungen, Anlässe und Pop-ups gemacht. Wir bereiten Inhalte, Layout und Aufbau auf den Einsatz vor und nehmen das Equipment nach dem Event wieder zurück.",
  },
  {
    question: "Können Inhalte vorbereitet werden?",
    answer:
      "Ja. Auf Wunsch übernehmen wir die Vorbereitung der Inhalte – Templates, Texte, Bilder und Zeitpläne sind bei Lieferung bereits eingerichtet. So ist das Display ab Tag 1 betriebsbereit.",
  },
  {
    question: "Gibt es Unterstützung beim Aufbau?",
    answer:
      "Ja. Wir liefern vorkonfiguriert. Auf Wunsch unterstützen wir persönlich vor Ort beim Aufbau und der Inbetriebnahme – gerade bei Events und mehreren Displays bewährt sich das.",
  },
  {
    question: "Wie kurzfristig sind Mietlösungen möglich?",
    answer:
      "Je nach Verfügbarkeit auch sehr kurzfristig. Für Events empfehlen wir, frühzeitig anzufragen, damit Inhalte, Layout und Lieferung in Ruhe vorbereitet werden können.",
  },
  {
    question: "Wie lange muss ich mindestens mieten?",
    answer:
      "Die Mietdauer richtet sich nach Ihrem Bedarf – vom dreitägigen Event bis zum mehrjährigen Dauereinsatz. Wir kalkulieren transparent auf Basis der gewünschten Einsatzdauer. Häufige Konstellationen: Eventmiete (3–14 Tage), Pop-up/Saison (1–6 Monate), Dauer- oder Übergangsmiete (ab 1 Monat aufwärts).",
  },
  {
    question: "Was ist im Mietpreis enthalten?",
    answer:
      "Die Pakete beinhalten den jeweiligen Display sowie die Lizenzgebühren für die Nutzung. Je nach Projekt können zusätzliche Setup-Leistungen anfallen — das klären wir transparent im Voraus.",
  },
  {
    question: "Gibt es eine Einrichtungspauschale?",
    answer:
      "Ja. Für Vorbereitung, Einrichtung und individuelle Konfiguration fällt eine einmalige Einrichtungspauschale von CHF 149 pro Display an. Aufwendigere Projekte weisen wir im Angebot transparent aus.",
  },
  {
    question: "Kann ich später kaufen statt mieten?",
    answer:
      "Das kann individuell besprochen werden. Die Miete eignet sich auch gut, um Digital Signage zuerst im Alltag zu testen, bevor eine langfristige Kaufentscheidung getroffen wird.",
  },
];

export default function DigitalSignageMietenPage() {
  return (
    <>
      <JsonLd schema={faqSchema(PAGE_FAQS) as Record<string, unknown>} />
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
