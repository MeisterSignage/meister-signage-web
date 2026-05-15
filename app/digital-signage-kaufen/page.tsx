import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSolutionSection from "@/components/sections/ProblemSolutionSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import PricingTableSection from "@/components/sections/PricingTableSection";
import BuyVsRentSection from "@/components/sections/BuyVsRentSection";
import ProcessSection from "@/components/sections/ProcessSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import ContactSection from "@/components/sections/ContactSection";
import InternalLinksSection from "@/components/sections/InternalLinksSection";
import JsonLd from "@/components/JsonLd";
import { faqSchema } from "@/lib/schema/faq";
import { breadcrumbSchema } from "@/lib/schema/breadcrumb";
import { serviceSchema } from "@/lib/schema/service";
import {
  BadgeCheck,
  TrendingUp,
  Banknote,
  Settings2,
  Zap,
  UserCheck,
} from "lucide-react";

/* ─── SEO ─────────────────────────────────────────────────────────────── */
const SITE_URL = "https://www.meister-signage.ch";
const PAGE_URL = `${SITE_URL}/digital-signage-kaufen`;

export const metadata: Metadata = {
  title: "Digital Signage kaufen | Meister Signage",
  description:
    "Digital-Signage-Displays kaufen für Gastronomie, Retail, Unternehmen und Empfangsbereiche. Professionell geplant, einfach bedienbar und persönlich betreut.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    locale: "de_CH",
    url: PAGE_URL,
    siteName: "Meister Signage",
    title: "Digital Signage kaufen | Meister Signage",
    description:
      "Digital-Signage-Displays kaufen für Gastronomie, Retail, Unternehmen und Empfangsbereiche. Professionell geplant, einfach bedienbar und persönlich betreut.",
    images: [
      {
        url: `${SITE_URL}/og/meister-signage-og.png`,
        width: 1200,
        height: 630,
        alt: "Digital Signage kaufen – Meister Signage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Signage kaufen | Meister Signage",
    description:
      "Digital-Signage-Displays kaufen für Gastronomie, Retail, Unternehmen und Empfangsbereiche.",
    images: [`${SITE_URL}/og/meister-signage-og.png`],
  },
};

/* ─── FAQ data (single source of truth for display + schema) ─────────── */
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
      "Ja. Viele Betriebe starten mit einem Screen und erweitern die Lösung Schritt für Schritt. Die Plattform ist darauf ausgelegt, mehrere Standorte oder Anzeigeflächen zentral zu steuern.",
  },
  {
    question: "Was ist der Unterschied zwischen kaufen und mieten?",
    answer:
      "Beim Kauf investieren Sie einmalig in eigene Hardware – langfristig günstiger und mit mehr Kontrolle. Die Miete eignet sich für temporäre Einsätze oder wenn zunächst kein Kapital gebunden werden soll.",
  },
];

/* ─── Product table ──────────────────────────────────────────────────── */
const PRODUCTS = [
  {
    model: "Spark 2 LTE",
    size: '18.5" Full HD',
    price: "CHF 1'299",
    suitedFor: "Empfang, kleine Theken, Gastronomie",
  },
  {
    model: "Spark 3",
    size: '32" Full HD',
    price: "CHF 1'299",
    suitedFor: "Gastronomie, Menüboards, Retail",
  },
  {
    model: "Spark 4",
    size: '43" 4K UHD',
    price: "CHF 1'499",
    suitedFor: "Retail, Hotellerie, Events, Unternehmen",
  },
  {
    model: "Spark 5",
    size: '50" 4K UHD',
    price: "CHF 1'599",
    suitedFor: "Flagship-Flächen, grosser Retail, Unternehmen",
  },
  {
    model: "Spark Q+",
    size: '33" quadr. 4K UHD',
    price: "CHF 1'699",
    suitedFor: "Kreative Konzepte, Messeauftritte, besondere Räume",
  },
];

/* ─── Page ───────────────────────────────────────────────────────────── */
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

      {/* 1 — Hero */}
      <HeroSection
        eyebrow="Digital Signage kaufen"
        title="Digital Signage kaufen – professionell, flexibel und langfristig nutzbar."
        subtitle="Mit eigenen Digital-Signage-Displays investieren Sie einmalig in eine Lösung, die dauerhaft für Sie arbeitet – ohne laufende Mietkosten und mit voller Kontrolle über Inhalte und Einsatz."
        bullets={[
          "Einmalige Investition statt monatlicher Mietbetrag",
          "Zentral steuerbare Inhalte – ohne IT-Aufwand",
          "Persönliche Betreuung von der Auswahl bis zum Betrieb",
        ]}
        primaryCta={{ label: "Beratung anfragen", href: "/kontakt" }}
        secondaryCta={{ label: "Modelle ansehen", href: "#modelle" }}
      />

      {/* 2 — Problem / Solution */}
      <ProblemSolutionSection
        eyebrow="Warum eigene Displays?"
        title="Eigene Hardware bedeutet mehr Kontrolle, weniger laufende Kosten."
        subtitle="Für Betriebe, die Digital Signage dauerhaft und zentral einsetzen möchten, ist der Kauf oft die wirtschaftlichere Entscheidung."
        problemsLabel="Was beim Mieten auf Dauer bremst"
        solutionsLabel="Was eigene Displays stattdessen bieten"
        problems={[
          {
            title: "Laufende Mietkosten",
            description:
              "Monatliche Beträge summieren sich über mehrere Jahre zu einer Investition, ohne dass am Ende eigene Hardware vorhanden ist.",
          },
          {
            title: "Abhängigkeit vom Anbieter",
            description:
              "Änderungen am Produkt, an Konditionen oder beim Support liegen ausserhalb Ihres Einflussbereichs – das kann langfristig Probleme bereiten.",
          },
          {
            title: "Eingeschränkte Individualisierung",
            description:
              "Gemietete Lösungen sind oft standardisiert. Eigene Hardware lässt sich genau auf Ihre Anforderungen abstimmen und anpassen.",
          },
        ]}
        solutions={[
          {
            title: "Einmalige Investition",
            description:
              "Sie zahlen einmal und nutzen Ihre Lösung langfristig – ohne wiederkehrende Kosten für die Hardware selbst.",
          },
          {
            title: "Volle Kontrolle",
            description:
              "Eigene Displays bedeuten, dass Sie Inhalte, Einsatzort und Konfiguration jederzeit selbst bestimmen können.",
          },
          {
            title: "Individuelle Einrichtung",
            description:
              "Meister Signage richtet die Lösung genau auf Ihren Betrieb, Ihre Inhalte und Ihr Team ein – nicht nach Schema F.",
          },
        ]}
      />

      {/* 3 — Benefits */}
      <BenefitsSection
        eyebrow="Vorteile beim Kauf"
        title="Investieren Sie einmal – und profitieren Sie langfristig."
        subtitle="Wer langfristig mit Digital Signage arbeiten möchte, ist mit eigener Hardware meist besser aufgestellt als mit einem dauerhaften Mietmodell."
        benefits={[
          {
            icon: TrendingUp,
            title: "Langfristige Investition",
            description:
              "Nach der Amortisation arbeitet Ihr Display ohne laufende Hardwarekosten für Sie – über viele Jahre.",
          },
          {
            icon: Banknote,
            title: "Keine monatlichen Mietbeträge",
            description:
              "Einmal kaufen und langfristig nutzen. Die monatlichen Kosten beschränken sich auf die Software-Lizenz.",
          },
          {
            icon: Settings2,
            title: "Volle Flexibilität",
            description:
              "Inhalte, Layouts und Konfiguration können jederzeit angepasst werden – ohne Einschränkungen durch den Anbieter.",
          },
          {
            icon: BadgeCheck,
            title: "Professionelle Wirkung",
            description:
              "Hochwertige Displays aus dem Spark-Sortiment sorgen für einen gepflegten, modernen Auftritt – in jeder Branche.",
          },
          {
            icon: Zap,
            title: "Einfache Bedienung",
            description:
              "Inhalte lassen sich ohne IT-Kenntnisse aktualisieren. Die Lösung wird so eingerichtet, dass sie im Alltag wirklich funktioniert.",
          },
          {
            icon: UserCheck,
            title: "Persönliche Betreuung",
            description:
              "Sie haben einen direkten Ansprechpartner – von der Auswahl über die Einrichtung bis zum laufenden Betrieb.",
          },
        ]}
      />

      {/* 4 — Produktübersicht */}
      <div id="modelle">
        <PricingTableSection
          eyebrow="Spark-Sortiment"
          title="Hochwertige Displays für jeden Einsatz."
          subtitle="Von der kompakten Thekenanzeige bis zum grossen Promo-Display – das Spark-Sortiment bietet für jede Anforderung das passende Modell."
          rows={PRODUCTS}
          note="Alle Preise verstehen sich als Richtwerte exkl. MwSt. Je nach Projekt können Einrichtung, Versand, Software-Lizenz oder zusätzliche Serviceleistungen hinzukommen. Wir erstellen Ihnen gerne ein individuelles Angebot."
        />
      </div>

      {/* 5 — Kaufen vs. Mieten */}
      <BuyVsRentSection
        eyebrow="Kaufen oder mieten?"
        title="Der Vergleich für Ihre Entscheidung."
        subtitle="Beide Modelle haben ihre Berechtigung – je nach Einsatz, Budget und Planungshorizont."
        buyLabel="Digital Signage kaufen"
        rentLabel="Digital Signage mieten"
        buyReasons={[
          "Langfristig günstigere Gesamtkosten",
          "Eigentum am Gerät",
          "Keine Mindestmietdauer oder Laufzeitbindung",
          "Vollständige Anpassbarkeit an Ihren Betrieb",
          "Amortisation über mehrere Jahre",
        ]}
        rentReasons={[
          "Niedrige Einstiegskosten",
          "Kein Kapitaleinsatz für Hardware",
          "Flexibel – auch kurzfristig buchbar",
          "Ideal für Events, Messen und temporäre Aktionen",
          "Schneller Start ohne Planung",
        ]}
      />

      {/* 6 — Prozess */}
      <ProcessSection
        eyebrow="So läuft ein Kauf ab"
        title="Von der Beratung bis zum laufenden Display – klar geführt."
        subtitle="Wir begleiten Sie durch den gesamten Prozess – von der ersten Frage bis zur fertig eingerichteten Lösung."
        steps={[
          {
            number: 1,
            title: "Bedarf klären",
            description:
              "Wir besprechen Einsatzort, Bildschirmgrösse, Inhaltsanforderungen und Budget – persönlich und ohne Verkaufsdruck.",
          },
          {
            number: 2,
            title: "Modell auswählen",
            description:
              "Basierend auf Ihrem Bedarf empfehlen wir das passende Modell aus dem Spark-Sortiment und erstellen ein klares Angebot.",
          },
          {
            number: 3,
            title: "Lieferung und Einrichtung",
            description:
              "Das Display wird geliefert, konfiguriert und auf Ihre Inhalte und Nutzungsweise vorbereitet – betriebsbereit ab Tag eins.",
          },
          {
            number: 4,
            title: "Betrieb und Erweiterung",
            description:
              "Nach der Inbetriebnahme bleiben wir erreichbar. Bei Fragen, Anpassungen oder Erweiterungen helfen wir direkt.",
          },
        ]}
      />

      {/* 7 — FAQ */}
      <FAQSection
        eyebrow="Häufige Fragen"
        title="Was Sie vor dem Kauf wissen sollten."
        subtitle="Antworten auf die häufigsten Fragen rund um den Kauf von Digital-Signage-Displays."
        faqs={PAGE_FAQS}
      />

      {/* 8 — Interne Links */}
      <InternalLinksSection
        eyebrow="Weitere Seiten"
        links={[
          { label: "Digital Signage Schweiz",  href: "/digital-signage-schweiz" },
          { label: "Digital Signage mieten",   href: "/digital-signage-mieten" },
          { label: "Kosten & Preise",          href: "/was-kostet-digital-signage-schweiz" },
          { label: "Beratung anfragen",        href: "/kontakt" },
        ]}
      />

      {/* 9 — CTA */}
      <CTASection
        eyebrow="Jetzt anfragen"
        title="Sie möchten Digital Signage kaufen und langfristig einsetzen?"
        subtitle="Schildern Sie kurz Ihren Einsatz. Wir zeigen Ihnen, welches Modell passt und was die Lösung insgesamt kostet."
        primaryCta={{ label: "Beratung anfragen", href: "/kontakt" }}
        secondaryCta={{ label: "Kosten & Preise", href: "/was-kostet-digital-signage-schweiz" }}
      />

      {/* 10 — Contact */}
      <ContactSection
        eyebrow="Persönlicher Kontakt"
        title="Sie möchten ein Display kaufen?"
        subtitle="Schreiben Sie kurz, was Sie vorhaben und welche Grösse Sie im Kopf haben. Wir melden uns persönlich mit einer klaren Empfehlung."
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
