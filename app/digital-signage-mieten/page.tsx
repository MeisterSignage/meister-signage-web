import type { Metadata } from "next";
import DigitalSignageMietenContent from "@/components/pages/DigitalSignageMietenContent";
import ContactSection from "@/components/sections/ContactSection";
import InternalLinksSection from "@/components/sections/InternalLinksSection";
import JsonLd from "@/components/JsonLd";
import { faqSchema } from "@/lib/schema/faq";
import { breadcrumbSchema } from "@/lib/schema/breadcrumb";
import { serviceSchema } from "@/lib/schema/service";

const SITE_URL = "https://www.meister-signage.ch";
const PAGE_URL = `${SITE_URL}/digital-signage-mieten`;

export const metadata: Metadata = {
  title: "Digital Signage mieten Schweiz – flexibel ab CHF 129/Monat | Meister Signage",
  description:
    "Digital-Signage-Screens flexibel mieten – inklusive Lizenz, Plug & Play und persönlicher Betreuung. Ideal für Events, Pop-ups und saisonale Einsätze.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    locale: "de_CH",
    url: PAGE_URL,
    siteName: "Meister Signage",
    title: "Digital Signage mieten Schweiz – flexibel ab CHF 129/Monat | Meister Signage",
    description:
      "Digital-Signage-Screens flexibel mieten – inklusive Lizenz, einfacher Handhabung und persönlicher Betreuung.",
    images: [
      {
        url: `${SITE_URL}/og/meister-signage-og.png`,
        width: 1200,
        height: 630,
        alt: "Digital Signage mieten – Meister Signage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Signage mieten Schweiz – flexibel ab CHF 129/Monat | Meister Signage",
    description:
      "Digital-Signage-Screens flexibel mieten – inklusive Lizenz und persönlicher Betreuung.",
    images: [`${SITE_URL}/og/meister-signage-og.png`],
  },
};

const PAGE_FAQS = [
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
    question: "Für welche Einsätze eignet sich die Miete?",
    answer:
      "Besonders bewährt hat sich die Miete für Events, Messen, Pop-ups, saisonale Aktionen und temporäre Informationsflächen — überall dort, wo Flexibilität wichtiger ist als Eigentum.",
  },
  {
    question: "Kann ich später kaufen statt mieten?",
    answer:
      "Das kann individuell besprochen werden. Die Miete eignet sich auch gut, um Digital Signage zuerst im Alltag zu testen, bevor eine langfristige Kaufentscheidung getroffen wird.",
  },
  {
    question: "Unterstützt Meister Signage bei der Einrichtung?",
    answer:
      "Ja. Die Lösung wird so vorbereitet, dass sie verständlich eingesetzt werden kann. Auf Wunsch unterstützen wir persönlich vor Ort oder remote bei der Inbetriebnahme.",
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

      <DigitalSignageMietenContent />

      <InternalLinksSection
        eyebrow="Weitere Seiten"
        links={[
          { label: "Digital Signage kaufen",    href: "/digital-signage-kaufen" },
          { label: "Kosten & Preise",           href: "/was-kostet-digital-signage-schweiz" },
          { label: "Events",                    href: "/branchen/events" },
          { label: "Gastronomie",               href: "/branchen/gastronomie" },
          { label: "Retail & Handel",           href: "/branchen/retail" },
        ]}
      />

      <ContactSection
        eyebrow="Persönlicher Kontakt"
        title="Sie möchten Digital Signage mieten?"
        subtitle="Schreiben Sie kurz, was Sie vorhaben und welchen Screen-Typ Sie im Einsatz sehen. Wir melden uns persönlich."
        contactName="Chris Meister"
        role="Gründer, Meister Signage"
        phone="+41 76 452 66 87"
        email="info@meister-signage.ch"
        whatsapp="https://wa.me/41764526687"
        imageSrc="/images/Chris-Meister.png"
      />
    </>
  );
}
