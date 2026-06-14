import type { Metadata } from "next";
import OverviewPage from "@/components/templates/OverviewPage";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema/breadcrumb";
import { itemListSchema } from "@/lib/schema/itemList";
import { branchenPages } from "@/lib/landingpages";

const SITE_URL = "https://www.meister-signage.ch";
const PAGE_URL = `${SITE_URL}/branchen`;

export const metadata: Metadata = {
  title: { absolute: "Digital Signage Branchen Schweiz | Meister Signage" },
  description:
    "Digital-Signage-Lösungen für Gastronomie, Retail, Hotellerie, Unternehmen und Events. Branchenspezifisch geplant und persönlich betreut.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    locale: "de_CH",
    url: PAGE_URL,
    siteName: "Meister Signage",
    title: "Digital Signage für Branchen – Gastro, Retail, Hotel & mehr | Meister Signage",
    description:
      "Digital-Signage-Lösungen für jede Branche – schlüsselfertig geplant und persönlich betreut.",
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
      <JsonLd
        schema={
          itemListSchema(
            "Digital Signage nach Branche",
            Object.values(branchenPages).map((p) => ({
              name: p.h1,
              path: `/branchen/${p.slug}/`,
            }))
          ) as Record<string, unknown>
        }
      />

      <OverviewPage
        eyebrow="Branchen"
        title="Digital Signage für jede Branche."
        intro={[
          "Ob Gastronomie, Retail, Hotellerie, Unternehmen oder Events – Meister Signage plant und realisiert Digital-Signage-Lösungen, die zu Ihrem Alltag, Ihrer Marke und Ihrer Branche passen.",
          "Jede Branche hat andere Anforderungen: in der Gastro zählen Schnelligkeit bei Menüänderungen und Tagesangeboten, im Retail Schaufenster-Helligkeit und POS-Aufmerksamkeit, in Hotels und Unternehmen die Besucher-Orientierung.",
          "Wir kennen die typischen Setups, die Anschaffungs- und Mietpreisstrukturen für KMU, und welche Display-Grössen, Halterungen und Software-Funktionen sich in der Praxis bewähren. Persönliche Beratung statt Standard-Lösung – ab der ersten Skizze bis zur funktionierenden Installation.",
        ]}
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
        outro={{
          heading: "Branchenwissen, das in die Planung einfliesst",
          paragraphs: [
            "In der Gastronomie zählt Tempo: Tagesmenüs, Aktionen und Preise ändern sich täglich, oft mehrmals. Wir richten Menüboards so ein, dass Personal Inhalte in Sekunden anpasst – ohne Drucken, ohne Agentur, ohne IT.",
            "Im Retail entscheidet Aufmerksamkeit. Schaufenster-Displays müssen gegen Tageslicht bestehen, Inhalte am Point of Sale Kampagnen und Aktionen sichtbar machen. Helligkeit, Platzierung und Wechselrhythmus stimmen wir auf Ihre Fläche ab.",
            "In der Hotellerie geht es um Orientierung, ohne die Atmosphäre zu stören: Wegweisung, Veranstaltungsanzeigen und Empfangs-Displays, die sich ins Interieur einfügen statt aufzudrängen.",
            "Für Unternehmen verbinden wir Empfang, interne Kommunikation und Besucherführung – repräsentativ nach aussen, klar nach innen. Bei Events und Messen zählt Flexibilität: Agenda, Wegführung und Sponsoren-Inhalte lassen sich kurzfristig und vor Ort anpassen.",
            "Über alle Branchen hinweg gilt: persönliche Beratung statt Standard-Paket, transparente Kauf- und Mietpreise für KMU, und Hardware, die im 24/7-Dauerbetrieb zuverlässig läuft. Von der ersten Skizze bis zur fertigen Installation begleiten wir Sie aus einer Hand.",
            "Der Ablauf ist immer derselbe: Wir klären Ziel, Standort und Budget, empfehlen passende Display-Grössen und Halterungen, übernehmen Lieferung und Montage in der ganzen Schweiz und richten die Cloud-Software ein. Auch nach der Installation bleiben wir Ansprechpartner – für Inhalts-Updates, die Erweiterung um weitere Standorte oder Fragen im laufenden Betrieb. So entsteht aus einer ersten Idee eine Lösung, die im Alltag jeder Branche zuverlässig funktioniert.",
          ],
        }}
      />
    </>
  );
}
