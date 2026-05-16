import type { Metadata } from "next";
import OverviewPage from "@/components/templates/OverviewPage";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema/breadcrumb";

const SITE_URL = "https://www.meister-signage.ch";
const PAGE_URL = `${SITE_URL}/branchen`;

export const metadata: Metadata = {
  title: "Branchen | Meister Signage",
  description:
    "Digital-Signage-Lösungen für Gastronomie, Retail, Hotellerie, Unternehmen und Events. Branchenspezifisch geplant und persönlich betreut.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    locale: "de_CH",
    url: PAGE_URL,
    siteName: "Meister Signage",
    title: "Branchen | Meister Signage",
    description:
      "Digital-Signage-Lösungen für jede Branche – schlüsselfertig geplant und persönlich betreut.",
    images: [
      {
        url: `${SITE_URL}/og/meister-signage-og.png`,
        width: 1200,
        height: 630,
        alt: "Meister Signage – Branchen",
      },
    ],
  },
};

export default function BranchenIndexPage() {
  return (
    <>
      <JsonLd
        schema={
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Branchen", path: "/branchen" },
          ]) as Record<string, unknown>
        }
      />

      <OverviewPage
        eyebrow="Branchen"
        title="Digital Signage für jede Branche."
        intro="Ob Gastronomie, Retail, Hotellerie, Unternehmen oder Events – Meister Signage plant und realisiert Digital-Signage-Lösungen, die zu Ihrem Alltag, Ihrer Marke und Ihrer Branche passen."
        items={[
          {
            title: "Gastronomie",
            desc: "Tagesmenüs, Aktionen und Preise digital – immer aktuell, ohne Drucken und Austauschen.",
            href: "/branchen/gastronomie",
            imageSrc: "/images/products/Restaurant-Meister-Signage.webp",
            imageAlt: "Digital Signage Gastronomie – Menüboard im Restaurant",
          },
          {
            title: "Retail & Handel",
            desc: "Kampagnen am Point of Sale inszenieren – Kollektionen, Aktionen und Promos sichtbar machen.",
            href: "/branchen/retail",
            imageSrc: "/images/products/Schuhladen-Meister-Signage.webp",
            imageAlt: "Digital Signage Retail – Displays im Schuhgeschäft",
          },
          {
            title: "Hotellerie",
            desc: "Gäste orientieren, Veranstaltungen anzeigen und Services präsentieren – ohne Atmosphäre zu stören.",
            href: "/branchen/hotellerie",
            imageSrc: "/images/products/Hotelempfang-Meister-Signage.webp",
            imageAlt: "Digital Signage Hotel – Empfangsdisplay in der Lobby",
          },
          {
            title: "Unternehmen",
            desc: "Empfang, interne Kommunikation und Besucherführung – digital, klar und repräsentativ.",
            href: "/branchen/unternehmen",
            imageSrc: "/images/products/Unternehmen-Empfang.webp",
            imageAlt: "Digital Signage Unternehmen – Display im Büroempfang",
          },
          {
            title: "Events & Messen",
            desc: "Agenda, Wegführung, Sponsoren und Live-Updates kurzfristig anpassbar.",
            href: "/branchen/events",
            imageSrc: "/images/products/Events-Meister-Signage.webp",
            imageAlt: "Digital Signage Events – Displays für Messen und Tagungen",
          },
        ]}
        contactTitle="Welche Branche, welches Setup?"
        contactSubtitle="Schreiben Sie kurz, in welcher Branche Sie tätig sind und was Sie kommunizieren möchten. Wir melden uns mit einer klaren Empfehlung – innert 24 Stunden."
      />
    </>
  );
}
