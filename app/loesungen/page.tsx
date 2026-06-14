import type { Metadata } from "next";
import OverviewPage from "@/components/templates/OverviewPage";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema/breadcrumb";
import { itemListSchema } from "@/lib/schema/itemList";
import { loesungenPages } from "@/lib/landingpages";

const SITE_URL = "https://www.meister-signage.ch";
const PAGE_URL = `${SITE_URL}/loesungen`;

export const metadata: Metadata = {
  title: { absolute: "Digital-Signage-Lösungen Schweiz | Meister Signage" },
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
      <JsonLd
        schema={
          itemListSchema(
            "Digital-Signage-Lösungen",
            Object.values(loesungenPages).map((p) => ({
              name: p.h1,
              path: `/loesungen/${p.slug}/`,
            }))
          ) as Record<string, unknown>
        }
      />

      <OverviewPage
        eyebrow="Lösungen"
        title="Die richtige Lösung für jeden Einsatz."
        intro="Unsere Digital-Signage-Lösungen reichen von der schlüsselfertigen Display-Installation über flexible Mietlösungen bis hin zu grossflächigen LED Walls – für jeden Anwendungsfall die richtige Lösung und das passende Setup. Werbung im Schaufenster, Menüboards in der Gastronomie, Wegweisung im Hotel, Raumbeschilderung im Büro, Eventdisplays auf Messen: jede Lösung ist auf Einsatz, Standort und Budget abgestimmt. Persönliche Beratung, Schweizer Service und Hardware, die im 24/7-Betrieb hält – aus einer Hand geplant und betreut."
        heroImage="/images/products/Loesungen-Meister-Signage.webp"
        groups={[
          {
            title: "Werbung & Verkaufsförderung",
            description:
              "Aufmerksamkeit am Point of Sale, im Schaufenster oder am Eingang – wo Kaufentscheidungen entstehen.",
            items: [
              {
                title: "Digitales Werbedisplay",
                desc: "Werbebildschirme für Retail, POS und Markenkampagnen – am Point of Decision.",
                href: "/loesungen/digitales-werbedisplay",
                imageSrc: "/images/products/Schuhladen-Meister-Signage.webp",
                imageAlt: "Digitales Werbedisplay im Retail-Einsatz",
              },
              {
                title: "Digitale Schaufensterwerbung",
                desc: "Aufmerksamkeit im Schaufenster – auch nach Ladenschluss. Hohe Helligkeit, 24/7 Betrieb.",
                href: "/loesungen/digitale-schaufensterwerbung",
                imageSrc: "/images/products/Schuhladen-Meister-Signage.webp",
                imageAlt: "Digitale Schaufensterwerbung für Retail",
              },
              {
                title: "Digitale Kundenstopper",
                desc: "Freistehende Displays für Eingang, Schaufenster oder Eventstand – Indoor und Outdoor.",
                href: "/loesungen/digitale-kundenstopper",
                imageSrc: "/images/products/Mobile-Display-Outdoor.webp",
                imageAlt: "Digitaler Kundenstopper Indoor und Outdoor",
              },
              {
                title: "LED Walls & Videowall",
                desc: "Grossflächige LED-Lösungen für Schaufenster, Bühnen und Empfangsbereiche – maximale Wirkung.",
                href: "/loesungen/led-walls",
                imageSrc: "/images/products/Spark5-Design.webp",
                imageAlt: "LED Walls und Videowall für maximale Sichtbarkeit",
              },
              {
                title: "High-Brightness-Display",
                desc: "3'500 nits für Schaufenster mit direkter Sonneneinstrahlung. 43 bis 75 Zoll, mit automatischer Helligkeitsregelung.",
                href: "/loesungen/high-brightness-display",
                imageSrc: "/images/products/Schuhladen-Meister-Signage.webp",
                imageAlt: "High-Brightness-Display für Schaufenster in der Sonne",
              },
              {
                title: "Digitale Menüboards",
                desc: "Digitale Menüboards für Gastronomie und Retail – Inhalte in Sekunden aktualisiert.",
                href: "/loesungen/digitale-menueboards",
                imageSrc: "/images/products/SparkQ-Design.webp",
                imageAlt: "Digitales Menüboard für Gastronomie und Retail",
              },
            ],
          },
          {
            title: "Empfang & Orientierung",
            description:
              "Information, Begrüssung und Wegfindung – für Besucher, Mitarbeitende und Gäste.",
            items: [
              {
                title: "Digitaler Empfang",
                desc: "Besucher begrüssen, informieren und professionell führen – ab dem ersten Eindruck.",
                href: "/loesungen/digitaler-empfang",
                imageSrc: "/images/products/Hotelempfang-Meister-Signage.webp",
                imageAlt: "Digitaler Empfang für Unternehmen und Hotels",
              },
              {
                title: "Empfangsdisplays",
                desc: "Hochwertige Displays für Lobbies, Rezeptionen und Wartebereiche.",
                href: "/loesungen/empfangsdisplays",
                imageSrc: "/images/products/Unternehmen-Empfang.webp",
                imageAlt: "Empfangsdisplays für Unternehmen und Hotels",
              },
              {
                title: "Digitale Infostele",
                desc: "Freistehende Infosäule für Empfang, Lobby und Wartebereich – Information auf Augenhöhe.",
                href: "/loesungen/digitale-infostele",
                imageSrc: "/images/products/Hotelempfang-Meister-Signage.webp",
                imageAlt: "Digitale Infostele für Empfangsbereich",
              },
              {
                title: "Digitale Leitsysteme",
                desc: "Besucherführung und Wegweisung – flexibel, immer aktuell, zentral gesteuert.",
                href: "/loesungen/digitale-leitsysteme",
                imageSrc: "/images/products/Unternehmen-Empfang.webp",
                imageAlt: "Digitale Leitsysteme für Besucherführung",
              },
              {
                title: "Digitale Raumbeschilderung",
                desc: "Belegung und Reservation von Meetingräumen direkt neben der Tür – immer aktuell.",
                href: "/loesungen/digitale-raumbeschilderung",
                imageSrc: "/images/products/SparkQ-Design.webp",
                imageAlt: "Digitale Raumbeschilderung für Meetingräume",
              },
            ],
          },
          {
            title: "Spezialformate & Mobil",
            description:
              "Flexible, doppelseitige oder transportable Lösungen für besondere Einsätze.",
            items: [
              {
                title: "Mobile Displays",
                desc: "Transportable Displays für Roadshows, Messereihen und multi-standortige Einsätze.",
                href: "/loesungen/mobile-displays",
                imageSrc: "/images/products/Mobile-Display-Outdoor.webp",
                imageAlt: "Mobiles transportables Digital-Signage-Display",
              },
              {
                title: "Doppelseitige Displays",
                desc: "Sichtbarkeit aus zwei Richtungen – zwei Inhalte auf einem Display.",
                href: "/loesungen/doppelseitige-displays",
                imageSrc: "/images/products/Doppelseitiges-Display-Retail.webp",
                imageAlt: "Doppelseitige Digital-Signage-Displays im Retail-Einsatz",
              },
              {
                title: "Event-Displays",
                desc: "Mietdisplays für Messen, Tagungen und temporäre Veranstaltungen.",
                href: "/loesungen/event-displays",
                imageSrc: "/images/products/Spark3-Design.webp",
                imageAlt: "Event-Displays für Messen und Tagungen",
              },
              {
                title: "Indoor Signage",
                desc: "Displays für Innenräume, Empfangsbereiche und Wartezonen – elegant und funktional.",
                href: "/loesungen/indoor-signage",
                imageSrc: "/images/products/Spark4-Design.webp",
                imageAlt: "Indoor Signage Lösungen",
              },
            ],
          },
          {
            title: "Plattform & Service",
            description:
              "Software, Kauf, Miete – die Grundlage für jede Digital-Signage-Lösung.",
            items: [
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
                title: "Software",
                desc: "Mit der Meister Signage Software Inhalte zentral verwalten und alle Displays steuern.",
                href: "/loesungen/software",
                imageSrc: "/images/products/meister-signage-parallax-bg.webp",
                imageAlt: "Meister Signage Software zur zentralen Inhaltssteuerung",
              },
            ],
          },
        ]}
        contactTitle="Welche Lösung passt zu Ihnen?"
        contactSubtitle="Schreiben Sie kurz, was Sie vorhaben und wo die Displays zum Einsatz kommen. Wir empfehlen Ihnen das passende Setup – innert 24 Stunden."
      />
    </>
  );
}
