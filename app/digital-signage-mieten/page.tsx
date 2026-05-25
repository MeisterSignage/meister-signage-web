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
  title: { absolute: "Digital Signage mieten Schweiz | Meister Signage" },
  description:
    "Displays mieten in der Schweiz: Digital-Signage-Screens, Eventdisplays und Menüboards flexibel mieten – inkl. Lizenz und persönlicher Beratung.",
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

const PAGE_FAQS = [
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
    question: "Was ist im monatlichen Preis enthalten?",
    answer:
      "Die Pakete beinhalten den jeweiligen Display sowie die Lizenzgebühren für die Nutzung. Je nach Projekt können zusätzliche Setup-Leistungen anfallen — das klären wir transparent im Voraus.",
  },
  {
    question: "Gibt es eine Setup-Gebühr?",
    answer:
      "Je nach Anwendung kann eine einmalige Setup-Gebühr für Vorbereitung, Einrichtung und individuelle Konfiguration anfallen. Das wird im Angebot ausgewiesen.",
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
      {rentalOfferSchema(
        [
          { name: "Meister Spark 3 Miete – 32\" Display", description: "32\" Full HD Display zur monatlichen Miete inkl. Lizenz.", monthlyPrice: 129 },
          { name: "Meister Spark 4 Miete – 43\" Display", description: "43\" 4K UHD Display zur monatlichen Miete inkl. Lizenz.", monthlyPrice: 139 },
          { name: "Meister Spark 5 Miete – 50\" Display", description: "50\" 4K UHD Display zur monatlichen Miete inkl. Lizenz.", monthlyPrice: 149 },
        ],
        PAGE_URL,
      ).map((schema, i) => (
        <JsonLd key={`rental-${i}`} schema={schema as Record<string, unknown>} />
      ))}

      <DigitalSignageMietenContent />

      <InternalLinksSection
        eyebrow="Weitere Seiten"
        links={[
          { label: "Digital Signage kaufen",    href: "/digital-signage-kaufen" },
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
