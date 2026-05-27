import type { Metadata } from "next";
import DigitalSignageKaufenContent from "@/components/pages/DigitalSignageKaufenContent";
import ContactSection from "@/components/sections/ContactSection";
import InternalLinksSection from "@/components/sections/InternalLinksSection";
import JsonLd from "@/components/JsonLd";
import { faqSchema } from "@/lib/schema/faq";
import { breadcrumbSchema } from "@/lib/schema/breadcrumb";
import { serviceSchema } from "@/lib/schema/service";
import { productSchema } from "@/lib/schema/product";

/* ─── SEO ────────────────────────────────────────────────────────────────── */
const SITE_URL = "https://www.meister-signage.ch";
const PAGE_URL = `${SITE_URL}/digital-signage-kaufen`;

export const metadata: Metadata = {
  title: { absolute: "Digital Signage kaufen Schweiz | Meister Signage" },
  description:
    "Digital-Signage-Displays kaufen für Gastronomie, Retail und Hotellerie. Schlüsselfertig geplant, installiert und persönlich betreut – aus der Schweiz.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    locale: "de_CH",
    url: PAGE_URL,
    siteName: "Meister Signage",
    title: "Digital Signage kaufen Schweiz – Displays schlüsselfertig | Meister Signage",
    description:
      "Digital-Signage-Displays kaufen für Gastronomie, Retail und Hotellerie. Schlüsselfertig geplant, installiert und persönlich betreut – aus der Schweiz.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Signage kaufen Schweiz – Displays schlüsselfertig | Meister Signage",
    description:
      "Digital-Signage-Displays kaufen für Gastronomie, Retail, Unternehmen und Empfangsbereiche.",
  },
};

/* ─── FAQ data (schema source) ───────────────────────────────────────────── */
const PAGE_FAQS = [
  {
    question: "Was ist im Kaufpreis enthalten?",
    answer:
      "Im Kaufpreis ist die Hardware enthalten. Software-Lizenz, Einrichtung, Versand und laufender Support werden separat ausgewiesen und im Angebot transparent aufgeführt.",
  },
  {
    question: "Wie lange dauert die Einrichtung und Inbetriebnahme?",
    answer:
      "In vielen Fällen ist eine einfache Lösung innerhalb weniger Stunden betriebsbereit. Bei komplexeren Projekten mit mehreren Standorten planen wir gemeinsam den Ablauf – transparent und ohne Überraschungen.",
  },
  {
    question: "Gibt es Garantie auf die Hardware?",
    answer:
      "Ja. Die Geräte kommen mit Herstellergarantie. Für darüber hinausgehende Servicevereinbarungen sprechen wir die Bedingungen individuell ab.",
  },
  {
    question: "Kann ich die Inhalte selbst anpassen?",
    answer:
      "Ja. Die Lösung wird so eingerichtet, dass Inhalte einfach und zentral aktualisiert werden können – ohne IT-Kenntnisse. Auf Wunsch übernehmen wir auch die laufende Inhaltspflege.",
  },
  {
    question: "Ist späteres Erweitern auf mehrere Screens möglich?",
    answer:
      "Ja. Viele Betriebe starten mit einem Screen und erweitern Schritt für Schritt. Die Plattform ist darauf ausgelegt, mehrere Standorte und Anzeigeflächen zentral zu steuern.",
  },
  {
    question: "Was ist der Unterschied zwischen kaufen und mieten?",
    answer:
      "Beim Kauf investieren Sie einmalig in eigene Hardware – langfristig günstiger und mit mehr Kontrolle. Die Miete eignet sich für temporäre Einsätze oder wenn zunächst kein Kapital gebunden werden soll.",
  },
];

/* ─── Page ───────────────────────────────────────────────────────────────── */
export default function DigitalSignageKaufenPage() {
  return (
    <>
      {/* Structured data */}
      <JsonLd schema={faqSchema(PAGE_FAQS) as Record<string, unknown>} />
      <JsonLd
        schema={
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Digital Signage kaufen", path: "/digital-signage-kaufen" },
          ]) as Record<string, unknown>
        }
      />
      <JsonLd
        schema={
          serviceSchema({
            name: "Digital Signage kaufen",
            description:
              "Professionelle Digital-Signage-Displays kaufen – schlüsselfertig geplant, einfach bedienbar und persönlich betreut.",
            url: PAGE_URL,
            serviceType: "Digital Signage Hardware",
          }) as Record<string, unknown>
        }
      />
      {productSchema(
        [
          { name: 'Meister Spark 3 – 32" Digital Signage Display', description: '32" Full HD Display für Menüboards und Empfang, schlüsselfertig installiert.',         sku: "SPARK3",     price: 1299, screenSize: "32 Zoll", resolution: "1920 × 1080 (Full HD)", powerTyp: "36 W", weightKg: 5.5 },
          { name: 'Meister Spark 4 – 43" Digital Signage Display', description: '43" 4K UHD Display für Gastronomie und Retail, schlüsselfertig installiert.',          sku: "SPARK4",     price: 1499, screenSize: "43 Zoll", resolution: "3840 × 2160 (4K UHD)",  powerTyp: "63 W", weightKg: 9.5 },
          { name: 'Meister Spark 5 – 50" Digital Signage Display', description: '50" 4K UHD Display für Schaufenster und grössere Flächen, schlüsselfertig installiert.', sku: "SPARK5",    price: 1599, screenSize: "50 Zoll", resolution: "3840 × 2160 (4K UHD)",  powerTyp: "81 W", weightKg: 13  },
          { name: 'Meister Spark Q+ – 33" quadratisches Display',  description: '33" quadratisches Display für Spezialinstallationen.',                                  sku: "SPARKQPLUS", price: 1699, screenSize: "33 Zoll", resolution: "1920 × 1920 (quadratisch)", powerTyp: "53 W", weightKg: 7  },
        ],
        PAGE_URL,
      ).map((schema, i) => (
        <JsonLd key={`product-${i}`} schema={schema as Record<string, unknown>} />
      ))}

      {/* Page content */}
      <DigitalSignageKaufenContent />

      {/* Internal links */}
      <InternalLinksSection
        eyebrow="Weitere Seiten"
        links={[
          { label: "Digital Signage Schweiz",       href: "/digital-signage-schweiz" },
          { label: "Digital Signage mieten",        href: "/digital-signage-mieten" },
          { label: "Anbieter im Vergleich",         href: "/digital-signage-anbieter-vergleich" },
          { label: "Kosten & Preise",               href: "/was-kostet-digital-signage-schweiz" },
          { label: "Gastronomie",                   href: "/branchen/gastronomie" },
          { label: "Retail & Handel",               href: "/branchen/retail" },
          { label: "Hotellerie",                    href: "/branchen/hotellerie" },
        ]}
      />

      {/* Contact */}
      <ContactSection
        eyebrow="Persönlicher Kontakt"
        title="Sie möchten ein Display kaufen?"
        subtitle="Schreiben Sie kurz, was Sie vorhaben und welche Grösse Sie im Kopf haben. Wir melden uns persönlich mit einer klaren Empfehlung."
        imageSrc="/images/Chris-Meister.webp"
      />
    </>
  );
}
