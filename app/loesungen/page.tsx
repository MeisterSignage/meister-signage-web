import type { Metadata } from "next";
import OverviewPage from "@/components/templates/OverviewPage";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema/breadcrumb";

const SITE_URL = "https://www.meister-signage.ch";
const PAGE_URL = `${SITE_URL}/loesungen`;

export const metadata: Metadata = {
  title: { absolute: "Digital-Signage-Lösungen – Kauf, Miete & LED Walls | Meister Signage" },
  description:
    "Digital-Signage-Lösungen für Kauf und Miete: Displays, LED Walls, Menüboards und Indoor Signage. Schlüsselfertig geplant und persönlich betreut.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    locale: "de_CH",
    url: PAGE_URL,
    siteName: "Meister Signage",
    title: "Digital-Signage-Lösungen Schweiz – Kauf, Miete & LED Walls | Meister Signage",
    description:
      "Displays kaufen oder mieten, LED Walls, Menüboards und Indoor Signage – persönlich geplant und betreut.",
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
          {
            title: "Software",
            desc: "Mit der Meister Signage Software Inhalte zentral verwalten und alle Displays steuern.",
            href: "/loesungen/software",
            imageSrc: "/images/products/meister-signage-parallax-bg.webp",
            imageAlt: "Meister Signage Software zur zentralen Inhaltssteuerung",
          },
          {
            title: "Mobile Displays",
            desc: "Mobile Digital-Signage-Displays und digitale Kundenstopper – flexibel platzierbar.",
            href: "/loesungen/mobile-displays",
            imageSrc: "/images/products/Mobile-Display-Outdoor.webp",
            imageAlt: "Mobiles Digital-Signage-Display im Outdoor-Einsatz",
          },
          {
            title: "Doppelseitige Displays",
            desc: "Sichtbarkeit aus zwei Richtungen – zwei Inhalte auf einem Display.",
            href: "/loesungen/doppelseitige-displays",
            imageSrc: "/images/products/Doppelseitiges-Display-Retail.webp",
            imageAlt: "Doppelseitige Digital-Signage-Displays im Retail-Einsatz",
          },
          {
            title: "Digitaler Empfang",
            desc: "Besucher begrüssen, informieren und professionell führen – ab dem ersten Eindruck.",
            href: "/loesungen/digitaler-empfang",
            imageSrc: "/images/products/Hotelempfang-Meister-Signage.webp",
            imageAlt: "Digitaler Empfang für Unternehmen und Hotels",
          },
          {
            title: "Digitale Leitsysteme",
            desc: "Besucherführung und Wegweisung – flexibel, immer aktuell, zentral gesteuert.",
            href: "/loesungen/digitale-leitsysteme",
            imageSrc: "/images/products/Unternehmen-Empfang.webp",
            imageAlt: "Digitale Leitsysteme für Besucherführung",
          },
        ]}
        contactTitle="Welche Lösung passt zu Ihnen?"
        contactSubtitle="Schreiben Sie kurz, was Sie vorhaben und wo die Displays zum Einsatz kommen. Wir empfehlen Ihnen das passende Setup – innert 24 Stunden."
      />
    </>
  );
}
