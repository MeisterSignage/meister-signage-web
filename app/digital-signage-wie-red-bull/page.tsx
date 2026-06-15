import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import IntroSection from "@/components/sections/IntroSection";
import ProofSection from "@/components/sections/ProofSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import InternalLinksSection from "@/components/sections/InternalLinksSection";
import JsonLd from "@/components/JsonLd";
import { articleSchema } from "@/lib/schema/article";
import { faqSchema } from "@/lib/schema/faq";
import { breadcrumbSchema } from "@/lib/schema/breadcrumb";

const SITE_URL = "https://www.meister-signage.ch";
const PAGE_URL = `${SITE_URL}/digital-signage-wie-red-bull`;
const HERO_IMAGE = "/images/products/Events-Meister-Signage.webp";

export const metadata: Metadata = {
  title: { absolute: "Digital Signage wie Red Bull – die Wirkung | Meister Signage" },
  description:
    "Was Digital Signage wirklich bewirkt: Eine weltbekannte Getränkemarke steigerte den Umsatz am Verkaufspunkt um über 20 % in 90 Tagen. Was das für Sie bedeutet.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "article",
    locale: "de_CH",
    url: PAGE_URL,
    siteName: "Meister Signage",
    title: "Digital Signage wie Red Bull – was bewegte Bildschirme bewirken",
    description:
      "Von gedruckten Plakaten zu Digital Signage: über 20 % mehr Umsatz in 90 Tagen, 30 % im Schnitt, heute in über 80 Ländern. Eine Erfolgsgeschichte.",
    images: [`${SITE_URL}${HERO_IMAGE}`],
  },
};

const PROOF_ITEMS = [
  {
    metric: "+20 %",
    title: "Mehr Umsatz in 90 Tagen",
    description:
      "An Standorten mit digitalen Bildschirmen statt gedruckten Plakaten stieg der Umsatz der Marke innerhalb von rund drei Monaten um über 20 %.",
  },
  {
    metric: "30 %",
    title: "Durchschnittliches Umsatzplus",
    description:
      "Nach dem Roll-out rechnet die Marke im Schnitt mit rund 30 % mehr Umsatz pro Standort mit Digital Signage.",
  },
  {
    metric: "80+",
    title: "Länder weltweit",
    description:
      "Aus einem Pilot in 10 Ländern wurde ein globaler Roll-out mit Zehntausenden Bildschirmen in über 80 Ländern – über alle Vertriebskanäle.",
  },
  {
    metric: "1 Kabel",
    title: "Installation ohne Technikteam",
    description:
      "Ein Kabel, integrierter Player, kein A/V-Spezialist nötig. Die Inhalte werden zentral aus der Cloud gesteuert – aus einer einzigen Zentrale.",
  },
];

const PAGE_FAQS = [
  {
    question: "Was bewirkt Digital Signage am Verkaufspunkt?",
    answer:
      "Digital Signage zieht am Point of Sale deutlich mehr Aufmerksamkeit als gedruckte Plakate und macht Aktionen sofort sichtbar. Im beschriebenen Beispiel stieg der Umsatz an Standorten mit Bildschirmen innerhalb von rund 90 Tagen um über 20 %, im Schnitt um rund 30 %.",
  },
  {
    question: "Warum ersetzen Marken gedruckte Plakate durch digitale Bildschirme?",
    answer:
      "Weil sich Inhalte in Sekunden zentral aktualisieren lassen, bewegte Bilder stärker wahrgenommen werden und ein hochwertiges Display die Marke premium inszeniert. Kein Druck, kein Versand, keine veralteten Plakate – und überall dieselbe, gepflegte Markenbotschaft.",
  },
  {
    question: "Funktioniert das auch für kleinere Betriebe in der Schweiz?",
    answer:
      "Ja. Dieselbe Wirkung – schneller kommunizieren, Marke inszenieren, mehr verkaufen – erreichen Sie schon mit einem einzelnen Display. Meister Signage liefert schlüsselfertig: vom Café und der Bar bis zur Filialkette, mit Beratung, Installation und Support aus der Schweiz.",
  },
  {
    question: "Wo lässt sich Digital Signage überall einsetzen?",
    answer:
      "In Bars, Clubs, Verkaufsflächen und Schaufenstern, auf den Türen von Markenkühlschränken, an Messen und Events – bis hin zu grossflächigen Video-Walls und mehrere Meter hohen Display-Türmen, auf denen ein Video synchron über viele Bildschirme läuft.",
  },
];

const INTERNAL_LINKS = [
  { label: "Retail & Handel", href: "/branchen/retail/" },
  { label: "Digitale Schaufensterwerbung", href: "/loesungen/digitale-schaufensterwerbung/" },
  { label: "Digital Signage Software", href: "/loesungen/software/" },
  { label: "Events & Messen", href: "/branchen/events/" },
  { label: "Was kostet Digital Signage?", href: "/was-kostet-digital-signage-schweiz/" },
  { label: "Was ist Digital Signage?", href: "/wissen/was-ist-digital-signage/" },
];

export default function DigitalSignageWieRedBullPage() {
  return (
    <>
      <JsonLd
        schema={
          articleSchema({
            title: "Digital Signage wie Red Bull – was bewegte Bildschirme bewirken",
            description:
              "Eine weltbekannte Getränkemarke steigerte den Umsatz am Verkaufspunkt um über 20 % in 90 Tagen, nachdem sie von gedruckten Plakaten auf Digital Signage umstellte.",
            url: PAGE_URL,
            datePublished: "2026-06-15",
            dateModified: "2026-06-15",
            imageUrl: `${SITE_URL}${HERO_IMAGE}`,
            category: "Erfolgsgeschichte",
          }) as Record<string, unknown>
        }
      />
      <JsonLd schema={faqSchema(PAGE_FAQS) as Record<string, unknown>} />
      <JsonLd
        schema={
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Digital Signage wie Red Bull", path: "/digital-signage-wie-red-bull" },
          ]) as Record<string, unknown>
        }
      />

      <HeroSection
        eyebrow="Erfolgsgeschichte"
        title="Digital Signage wie Red Bull: Was bewegte Bildschirme wirklich bewirken."
        subtitle="Grosse Marken wie Red Bull machen es vor: Statt gedruckter Plakate setzen sie am Verkaufspunkt auf digitale Bildschirme – und steigern damit messbar Aufmerksamkeit und Umsatz. Diese Geschichte zeigt, was Digital Signage leisten kann."
        bullets={[
          "Über 20 % mehr Umsatz in 90 Tagen",
          "Zentrale Steuerung aus einer Cloud",
          "Vom einzelnen Display bis zum Filialnetz",
        ]}
        primaryCta={{ label: "Beratung anfragen", href: "/kontakt/" }}
        secondaryCta={{ label: "Lösungen ansehen", href: "/loesungen/" }}
        imageSrc={HERO_IMAGE}
        imageAlt="Digitale Displays als Markenbühne an Events und am Verkaufspunkt"
      />

      <IntroSection
        title="Von gedruckten Plakaten zur digitalen Markenbühne"
        text="Eine weltweit bekannte Getränkemarke – jährlich millionenfach verkauft und mit starker Präsenz im Handel – kommunizierte ihre Aktionen am Verkaufspunkt lange über gedruckte Plakate und Aufsteller. Gesucht war ein hochwertigerer, einheitlicherer Auftritt, der die Marke besser repräsentiert und Aufmerksamkeit wie Umsatz an den vielen Promotion-Standorten steigert. Die Antwort: digitale Bildschirme statt Papier."
        definition="Gestartet wurde mit einem Pilot in 10 europäischen Ländern – je ein kompaktes, quadratisches Display in Bars. Schon die Installation überzeugte: ein Kabel, integrierter Player, kein Technikteam nötig. Über eine cloudbasierte Plattform liessen sich alle Bildschirme zentral aus der Europazentrale bespielen. Das Ergebnis nach 90 Tagen: über 20 % mehr Umsatz an den ausgestatteten Standorten."
      />

      <ProofSection
        eyebrow="Die Wirkung in Zahlen"
        title="Was Digital Signage messbar verändert"
        subtitle="Die Kennzahlen aus dem Roll-out einer international führenden Getränkemarke."
        proofItems={PROOF_ITEMS}
      />

      <IntroSection
        title="Vom Pilot zum globalen Roll-out – und was das für Sie heisst"
        text="Nach dem Erfolg im Pilot wurde das Programm so schnell wie möglich ausgeweitet. Heute rechnet die Marke im Schnitt mit rund 30 % Umsatzplus pro Standort und betreibt Zehntausende Bildschirme in über 80 Ländern – an Verkaufsflächen, auf den Türen von Markenkühlschränken, an Sport- und Musik-Events sogar als grossflächige Video-Walls und mehrere Meter hohe Display-Türme, auf denen ein Video synchron über viele Screens läuft."
        definition="Genau diese Wirkung – schneller kommunizieren, die Marke premium inszenieren und am Verkaufspunkt mehr verkaufen – ermöglicht Meister Signage auch für Schweizer Betriebe. Schlüsselfertig, zentral steuerbar und vom einzelnen Café oder der Bar bis zur Filialkette skalierbar."
      />

      <FAQSection
        eyebrow="Häufige Fragen"
        title="Digital Signage und seine Wirkung"
        faqs={PAGE_FAQS}
      />

      <CTASection
        eyebrow="Auch so sichtbar werden?"
        title="Lassen Sie Ihre Marke digital wirken."
        subtitle="Sagen Sie uns kurz, wo Sie sichtbarer werden möchten – wir empfehlen die passende Lösung und begleiten Sie von der Planung bis zum Support."
        primaryCta={{ label: "Beratung anfragen", href: "/kontakt/" }}
        secondaryCta={{ label: "Was kostet Digital Signage?", href: "/was-kostet-digital-signage-schweiz/" }}
      />

      <InternalLinksSection eyebrow="Weiterlesen" links={INTERNAL_LINKS} />
    </>
  );
}
