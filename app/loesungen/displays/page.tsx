import type { Metadata } from "next";
import OverviewPage from "@/components/templates/OverviewPage";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema/breadcrumb";
import { itemListSchema } from "@/lib/schema/itemList";

const SITE_URL = "https://www.meister-signage.ch";
const PAGE_URL = `${SITE_URL}/loesungen/displays`;

export const metadata: Metadata = {
  title: { absolute: "Digital Signage Displays – alle Typen | Meister Signage" },
  description:
    "Alle Display-Typen auf einen Blick: Indoor, LED Wall, Stretched Bar, transparent, doppelseitig, High-Brightness, mobil und Infostele – Kauf oder Miete.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    locale: "de_CH",
    url: PAGE_URL,
    siteName: "Meister Signage",
    title: "Digital Signage Displays – alle Typen | Meister Signage",
    description:
      "Indoor, LED Wall, Stretched Bar, transparent, doppelseitig, High-Brightness, mobil, Infostele – das passende Display für jeden Einsatz.",
    images: [`${SITE_URL}/images/products/Loesungen-Meister-Signage.webp`],
  },
};

export default function DisplaysOverviewPage() {
  return (
    <>
      <JsonLd
        schema={
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Lösungen", path: "/loesungen" },
            { name: "Displays", path: "/loesungen/displays" },
          ]) as Record<string, unknown>
        }
      />
      <JsonLd
        schema={
          itemListSchema("Digital Signage Display-Typen", [
            { name: "Indoor-Displays (Spark-Serie)", path: "/digital-signage-kaufen/" },
            { name: "LED Walls & Videowall", path: "/loesungen/led-walls/" },
            { name: "Digitale Menüboards", path: "/loesungen/digitale-menueboards/" },
            { name: "Stretched Bar Display", path: "/loesungen/stretched-display/" },
            { name: "Transparentes Display", path: "/loesungen/transparentes-display/" },
            { name: "Doppelseitige Displays", path: "/loesungen/doppelseitige-displays/" },
            { name: "High-Brightness-Display", path: "/loesungen/high-brightness-display/" },
            { name: "Mobile Displays", path: "/loesungen/mobile-displays/" },
            { name: "Digitale Infostele", path: "/loesungen/digitale-infostele/" },
          ]) as Record<string, unknown>
        }
      />

      <OverviewPage
        eyebrow="Displays"
        title="Digital Signage Displays – das passende für jeden Einsatz."
        intro="Welcher Display-Typ passt zu Ihrem Vorhaben? Hier finden Sie alle Digital-Signage-Displays im Überblick – vom klassischen Indoor-Bildschirm über grossflächige LED Walls und ultrabreite Stretched Bars bis zu transparenten, doppelseitigen, hellen und mobilen Lösungen. Jeder Typ ist auf Einsatzort, Sichtbarkeit und Budget abgestimmt. Persönliche Beratung, Schweizer Service und Hardware für den 24/7-Betrieb – als Kauf oder, bei den Spark-Displays, auch zur Miete."
        heroImage="/images/products/Loesungen-Meister-Signage.webp"
        groups={[
          {
            title: "Standard & Grossformat",
            description:
              "Die meistgewählten Displays für Innenräume – vom kompakten Bildschirm bis zur grossflächigen LED Wall.",
            items: [
              {
                title: "Indoor-Displays (Spark-Serie)",
                desc: "Schlüsselfertige Indoor-Displays von 32 bis 50 Zoll in 4K – für Gastronomie, Retail, Hotel und Empfang.",
                href: "/digital-signage-kaufen",
                imageSrc: "/images/products/Spark4-Design.webp",
                imageAlt: "Indoor Digital Signage Display der Spark-Serie",
              },
              {
                title: "LED Walls & Videowall",
                desc: "Grossflächige, modulare LED-Lösungen für Schaufenster, Bühnen und Empfangsbereiche – maximale Wirkung.",
                href: "/loesungen/led-walls",
                imageSrc: "/images/products/Spark5-Design.webp",
                imageAlt: "LED Wall und Videowall für maximale Sichtbarkeit",
              },
              {
                title: "Digitale Menüboards",
                desc: "Displays für Speisekarten und Angebote in Gastronomie und Retail – Inhalte in Sekunden aktualisiert.",
                href: "/loesungen/digitale-menueboards",
                imageSrc: "/images/products/SparkQ-Design.webp",
                imageAlt: "Digitales Menüboard für Gastronomie und Retail",
              },
            ],
          },
          {
            title: "Spezialformate",
            description:
              "Besondere Bauformen für Stellen, an denen ein normales Display nicht passt oder mehr Wirkung gefragt ist.",
            items: [
              {
                title: "Stretched Bar Display",
                desc: "Ultrabreites Langformat für Regalkanten, Schaufenster-Bänder und Theken.",
                href: "/loesungen/stretched-display",
                imageSrc: "/images/products/Stretched-Display-Retail.webp",
                imageAlt: "Stretched Bar Display im schmalen Langformat",
              },
              {
                title: "Transparentes Display",
                desc: "Durchsichtige Display-Technik für Schaufenster und Vitrinen – einblenden, ohne zu verdecken.",
                href: "/loesungen/transparentes-display",
                imageSrc: "/images/products/Transparentes-Display-Schaufenster.webp",
                imageAlt: "Transparentes Display im Schaufenster",
              },
              {
                title: "Doppelseitige Displays",
                desc: "Sichtbarkeit aus zwei Richtungen – zwei Inhalte auf einem freistehenden Display.",
                href: "/loesungen/doppelseitige-displays",
                imageSrc: "/images/products/Doppelseitiges-Display-Retail.webp",
                imageAlt: "Doppelseitiges Digital-Signage-Display im Retail-Einsatz",
              },
            ],
          },
          {
            title: "Outdoor, Mobil & Stele",
            description:
              "Helle, transportable und freistehende Displays für Schaufenster, unterwegs und im Empfang.",
            items: [
              {
                title: "High-Brightness-Display",
                desc: "Bis 3'500 nits für Schaufenster mit direkter Sonneneinstrahlung – auch bei Tageslicht klar lesbar.",
                href: "/loesungen/high-brightness-display",
                imageSrc: "/images/products/Schuhladen-Meister-Signage.webp",
                imageAlt: "High-Brightness-Display für Schaufenster in der Sonne",
              },
              {
                title: "Mobile Displays",
                desc: "Transportable und batteriebetriebene Displays für Roadshows, Events und wechselnde Standorte.",
                href: "/loesungen/mobile-displays",
                imageSrc: "/images/products/Mobile-Display-Outdoor.webp",
                imageAlt: "Mobiles, transportables Digital-Signage-Display",
              },
              {
                title: "Digitale Infostele",
                desc: "Freistehende Infosäule für Empfang, Lobby, Events und Arenen – Information auf Augenhöhe.",
                href: "/loesungen/digitale-infostele",
                imageSrc: "/images/products/Infostele-Empfang-Lobby.webp",
                imageAlt: "Digitale Infostele für Empfang und Events",
              },
            ],
          },
        ]}
        contactTitle="Welches Display passt zu Ihnen?"
        contactSubtitle="Schreiben Sie kurz, wo das Display zum Einsatz kommt und was es zeigen soll – wir empfehlen Ihnen den passenden Typ, innert 24 Stunden."
      />
    </>
  );
}
