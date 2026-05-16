import type { Metadata } from "next";
import OverviewPage from "@/components/templates/OverviewPage";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema/breadcrumb";

const SITE_URL = "https://www.meister-signage.ch";
const PAGE_URL = `${SITE_URL}/loesungen`;

export const metadata: Metadata = {
  title: "Lösungen | Meister Signage",
  description:
    "Digital-Signage-Lösungen für Kauf und Miete: Displays, LED Walls, Menüboards und Indoor Signage. Schlüsselfertig geplant und persönlich betreut.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    locale: "de_CH",
    url: PAGE_URL,
    siteName: "Meister Signage",
    title: "Lösungen | Meister Signage",
    description:
      "Displays kaufen oder mieten, LED Walls, Menüboards und Indoor Signage – persönlich geplant und betreut.",
    images: [
      {
        url: `${SITE_URL}/og/meister-signage-og.png`,
        width: 1200,
        height: 630,
        alt: "Meister Signage – Lösungen",
      },
    ],
  },
};

export default function LoesungenIndexPage() {
  return (
    <>
      <JsonLd
        schema={
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Lösungen", path: "/loesungen" },
          ]) as Record<string, unknown>
        }
      />

      <OverviewPage
        eyebrow="Lösungen"
        title="Die richtige Lösung für jeden Einsatz."
        intro="Von der schlüsselfertigen Display-Installation über flexible Mietlösungen bis hin zu grossflächigen LED Walls – Meister Signage bietet das passende Setup für jeden Anwendungsfall."
        items={[
          {
            title: "Displays kaufen",
            desc: "Schlüsselfertige Digital-Signage-Displays für Gastronomie, Retail, Hotellerie und Unternehmen.",
            href: "/digital-signage-kaufen",
            imageSrc: "/images/products/Spark5-Design.webp",
            imageAlt: "Digital Signage Display kaufen",
          },
          {
            title: "Displays mieten",
            desc: "Flexible Mietlösungen für Events, Messen, Pop-ups und temporäre Einsätze – inkl. Lizenz.",
            href: "/digital-signage-mieten",
            imageSrc: "/images/products/Spark4-Design.webp",
            imageAlt: "Digital Signage Display mieten",
          },
          {
            title: "LED Walls",
            desc: "Grossflächige LED-Lösungen für Schaufenster, Bühnen und Empfangsbereiche – maximale Wirkung.",
            href: "/loesungen/led-walls",
            imageSrc: "/images/products/Spark5-Design.webp",
            imageAlt: "LED Walls für maximale Sichtbarkeit",
          },
          {
            title: "Menüboards",
            desc: "Digitale Menüboards für Gastronomie und Retail – Inhalte in Sekunden aktualisiert.",
            href: "/loesungen/digitale-menueboards",
            imageSrc: "/images/products/SparkQ-Design.webp",
            imageAlt: "Digitales Menüboard für Gastronomie und Retail",
          },
          {
            title: "Indoor Signage",
            desc: "Displays für Innenräume, Empfangsbereiche und Wartezonen – elegant und funktional.",
            href: "/loesungen/indoor-signage",
            imageSrc: "/images/products/Spark4-Design.webp",
            imageAlt: "Indoor Signage Lösungen",
          },
        ]}
        contactTitle="Welche Lösung passt zu Ihnen?"
        contactSubtitle="Schreiben Sie kurz, was Sie vorhaben und wo die Displays zum Einsatz kommen. Wir empfehlen Ihnen das passende Setup – innert 24 Stunden."
      />
    </>
  );
}
