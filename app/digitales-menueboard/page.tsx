import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSolutionSection from "@/components/sections/ProblemSolutionSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import CostTeaserSection from "@/components/sections/CostTeaserSection";
import FAQSection from "@/components/sections/FAQSection";
import InternalLinksSection from "@/components/sections/InternalLinksSection";
import CTASection from "@/components/sections/CTASection";
import ContactSection from "@/components/sections/ContactSection";
import { Zap, Receipt, Clock, BadgeCheck, MapPin, LayoutDashboard } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import { faqSchema } from "@/lib/schema/faq";
import { breadcrumbSchema } from "@/lib/schema/breadcrumb";
import { serviceSchema } from "@/lib/schema/service";

const SITE_URL = "https://www.meister-signage.ch";
const PAGE_URL = `${SITE_URL}/digitales-menueboard`;

export const metadata: Metadata = {
  title: "Digitales Menüboard für Restaurants | Meister Signage",
  description:
    "Digitale Menüboards für Restaurants, Cafés und Gastronomie. Inhalte flexibel ändern, Druckkosten reduzieren und professionell auftreten.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    locale: "de_CH",
    url: PAGE_URL,
    siteName: "Meister Signage",
    title: "Digitales Menüboard für Restaurants | Meister Signage",
    description:
      "Digitale Menüboards für Restaurants, Cafés und Gastronomie. Inhalte flexibel ändern, Druckkosten reduzieren und professionell auftreten.",
    images: [
      {
        url: `${SITE_URL}/og/meister-signage-og.png`,
        width: 1200,
        height: 630,
        alt: "Digitales Menüboard – Meister Signage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digitales Menüboard für Restaurants | Meister Signage",
    description:
      "Digitale Menüboards für Restaurants, Cafés und Gastronomie. Inhalte flexibel ändern, Druckkosten reduzieren.",
    images: [`${SITE_URL}/og/meister-signage-og.png`],
  },
};

// ── FAQ data — shared between FAQSection display and JSON-LD ──────────────────

const PAGE_FAQS = [
  {
    question: "Wie schnell kann ich mein Menü anpassen?",
    answer:
      "Änderungen sind innerhalb von Sekunden möglich. Ob ein neues Tagesgericht, ein angepasster Preis oder ein ausverkauftes Angebot – sobald die Änderung gespeichert ist, erscheint sie sofort auf dem Display.",
  },
  {
    question: "Welche Bildschirmgrösse eignet sich für ein digitales Menüboard?",
    answer:
      "Für Wandmontage hinter dem Tresen werden typischerweise Bildschirme zwischen 43 und 65 Zoll eingesetzt. Die passende Grösse hängt vom Abstand zur Kundschaft und dem verfügbaren Wandplatz ab. Wir empfehlen die Grösse immer vor Ort zu besprechen.",
  },
  {
    question: "Können Frühstück, Mittagsmenü und Abendkarte automatisch wechseln?",
    answer:
      "Ja. Inhalte lassen sich nach Uhrzeit oder Wochentag planen. Das Frühstücksangebot läuft bis 10:30 Uhr, danach schaltet das System automatisch auf das Mittagsmenü – ohne manuellen Eingriff.",
  },
  {
    question: "Muss ich technische Vorkenntnisse haben, um Inhalte zu pflegen?",
    answer:
      "Nein. Die Bedienung ist einfach und für Personal ohne IT-Kenntnisse geeignet. Nach einer kurzen Einführung können Sie Gerichte, Preise und Bilder selbst aktualisieren.",
  },
  {
    question: "Was passiert, wenn das Display ausfällt oder nicht funktioniert?",
    answer:
      "Sie erreichen uns direkt – keine anonyme Hotline, kein Ticketsystem. Als lokaler Anbieter aus der Zentralschweiz sind wir schnell erreichbar und reagieren unkompliziert.",
  },
  {
    question: "Kann ich mit einem einzelnen Display starten?",
    answer:
      "Ja. Viele Gastronomiebetriebe starten mit einem Menüboard und erweitern später. Die Lösung ist von Anfang an auf mehrere Bildschirme und Standorte ausgelegt.",
  },
];

// ── Page ───────────────────────────────────────────────────────────────────────

export default function DigitalesMenueboardPage() {
  return (
    <>
      {/* Structured data */}
      <JsonLd schema={faqSchema(PAGE_FAQS) as Record<string, unknown>} />
      <JsonLd schema={breadcrumbSchema([
        { name: "Home",                path: "/" },
        { name: "Gastronomie",         path: "/gastronomie" },
        { name: "Digitales Menüboard", path: "/digitales-menueboard" },
      ]) as Record<string, unknown>} />
      <JsonLd schema={serviceSchema({
        name: "Digitales Menüboard",
        description:
          "Digitale Menüboards für Restaurants, Cafés, Take-away und Bäckereien – Inhalte zentral verwalten, Preise sofort anpassen, professionell präsentieren.",
        url: PAGE_URL,
        serviceType: "Digitales Menüboard",
      }) as Record<string, unknown>} />

      {/* 1 — Hero */}
      <HeroSection
        eyebrow="Digitales Menüboard"
        title="Digitale Menüboards für moderne Gastronomie."
        subtitle="Gedruckte Speisekarten sind teuer, starr und schnell veraltet. Ein digitales Menüboard lässt sich in Sekunden aktualisieren – Tagesangebote, Preise, Saisonales – ohne Druckkosten und ohne Aufwand."
        bullets={[
          "Menüs, Preise und Tagesgerichte sofort anpassen",
          "Keine Druckkosten, kein Papieraustausch mehr",
          "Frühstück, Mittagstisch und Abendkarte automatisch wechseln",
        ]}
        primaryCta={{ label: "Beratung anfragen",      href: "/kontakt" }}
        secondaryCta={{ label: "Gastronomie-Lösungen", href: "/gastronomie" }}
      />

      {/* 2 — Problem / Solution */}
      <ProblemSolutionSection
        eyebrow="Vom Aufwand zur einfachen Lösung"
        title="Gedruckte Speisekarten kosten Zeit, Geld und Nerven."
        subtitle="Wer regelmässig Preise anpasst, Tagesangebote wechselt oder saisonale Gerichte aufnimmt, weiss: Mit Papier ist das ein Dauerbrenner."
        problems={[
          {
            title: "Neue Gerichte bedeuten neuen Druck",
            description:
              "Jede Preisanpassung, jedes neue Saisongericht und jedes ausverkaufte Angebot erfordert neue Ausdrucke, Aushänge oder Laminierungen.",
          },
          {
            title: "Verschiedene Tageszeiten, ein starres Angebot",
            description:
              "Frühstück, Mittagsmenü und Abendkarte gleichzeitig sichtbar machen – mit Papier ist das kaum möglich, ohne mehrere Schilder aufzuhängen.",
          },
          {
            title: "Veraltete Informationen wirken unprofessionell",
            description:
              "Ein durchgestrichener Preis mit Handkorrrektur oder ein ausverkauftes Gericht auf der Karte hinterlässt keinen guten Eindruck.",
          },
        ]}
        solutions={[
          {
            title: "Änderungen in Sekunden",
            description:
              "Preise, Gerichte und Tagesangebote lassen sich sofort anpassen – direkt über das Verwaltungssystem, auch vom Smartphone aus.",
          },
          {
            title: "Zeitgesteuerte Inhalte",
            description:
              "Das Frühstücksangebot läuft bis 10:30 Uhr, das Mittagsmenü danach – automatisch, ohne manuellen Eingriff im laufenden Betrieb.",
          },
          {
            title: "Immer aktuell, immer gepflegt",
            description:
              "Was nicht mehr gilt, verschwindet sofort. Was neu dazukommt, ist in Sekunden sichtbar – sauber gestaltet, ohne handschriftliche Korrekturen.",
          },
        ]}
      />

      {/* 3 — Benefits */}
      <BenefitsSection
        eyebrow="Was Sie gewinnen"
        title="Weniger Aufwand, mehr Flexibilität im Alltag."
        subtitle="Ein digitales Menüboard spart Zeit, reduziert Kosten und gibt dem Betrieb ein professionelleres Erscheinungsbild."
        benefits={[
          {
            icon: Zap,
            title: "Sofort-Aktualisierung",
            description:
              "Preisänderungen, neue Tagesgerichte oder ausverkaufte Angebote erscheinen in Sekunden auf dem Display.",
          },
          {
            icon: Receipt,
            title: "Keine Druckkosten mehr",
            description:
              "Was bisher regelmässig neu gedruckt, laminiert und ausgehängt wurde, entfällt vollständig.",
          },
          {
            icon: Clock,
            title: "Automatische Zeitpläne",
            description:
              "Frühstück, Mittagstisch und Abendkarte laufen automatisch zur richtigen Zeit – ohne manuelles Umschalten.",
          },
          {
            icon: BadgeCheck,
            title: "Professionelle Wirkung",
            description:
              "Hochwertige Darstellung am Point of Sale, die Gäste direkt beim Eintreten einen guten Eindruck vermittelt.",
          },
          {
            icon: LayoutDashboard,
            title: "Zentrale Verwaltung",
            description:
              "Mehrere Bildschirme oder Bereiche lassen sich aus einer Oberfläche steuern – auch bei mehreren Standorten.",
          },
          {
            icon: MapPin,
            title: "Persönlich betreut",
            description:
              "Direkter Ansprechpartner aus der Zentralschweiz – erreichbar ohne Ticketsystem, reaktionsschnell.",
          },
        ]}
      />

      {/* 4 — Einsatzbereiche */}
      <ServicesSection
        eyebrow="Einsatzbereiche"
        title="Digitale Menüboards für jeden Gastronomiebetrieb."
        subtitle="Ob klassisches Restaurant, Café oder Take-away – das System passt sich dem Betrieb an, nicht umgekehrt."
        services={[
          {
            title: "Restaurant",
            description:
              "Speisekarte, Tagesangebote, Weinempfehlungen und saisonale Gerichte digital und immer aktuell – kein Papieraustausch, kein Druckaufwand.",
          },
          {
            title: "Café",
            description:
              "Kaffeespezialitäten, Kuchen, Mittagsangebote und Tageskarte schnell wechseln – passend zur Tageszeit und zur aktuellen Verfügbarkeit.",
          },
          {
            title: "Take-away & Imbiss",
            description:
              "Wechselnde Angebote am Tresen in Sekunden anpassen. Was ausverkauft ist, verschwindet sofort aus der Anzeige.",
          },
          {
            title: "Bäckerei",
            description:
              "Tagesangebot, Saisongebäck und Preise immer aktuell – ohne neue Schilder schreiben oder Plakate austauschen.",
          },
          {
            title: "Hotel-Restaurant",
            description:
              "Frühstück, Lunch und Abendessen auf einem System. Zeitgesteuerte Inhalte wechseln automatisch – der Gast sieht immer das passende Angebot.",
          },
          {
            title: "Betriebsgastronomie",
            description:
              "Wochenmenü, Tagesgerichte und Allergeninformationen übersichtlich dargestellt – zentral verwaltet und täglich aktuell.",
          },
        ]}
      />

      {/* 5 — Kostenübersicht kurz */}
      <CostTeaserSection
        eyebrow="Kosten & Investition"
        title="Was kostet ein digitales Menüboard?"
        text="Die Kosten hängen von Anzahl Bildschirmen, Grösse und gewünschtem Funktionsumfang ab. Im Mietmodell ist der Einstieg ab CHF 129 pro Monat möglich – inklusive Display, Lizenz und Einrichtung. Wer langfristig plant, kann auch kaufen: Nach einer Mietphase werden 30 % der bezahlten Mieten auf den Kaufpreis angerechnet. Versteckte Kosten gibt es keine – Angebote werden transparent ausgewiesen."
        ctaLabel="Vollständige Kostenübersicht"
        ctaHref="/was-kostet-digital-signage-schweiz"
      />

      {/* 6 — FAQ */}
      <FAQSection
        eyebrow="Häufige Fragen"
        title="Was Sie zum digitalen Menüboard wissen sollten."
        subtitle="Die wichtigsten Antworten für Gastronomiebetriebe, die auf digitale Beschilderung umstellen möchten."
        faqs={PAGE_FAQS}
      />

      {/* 7 — Internal links */}
      <InternalLinksSection
        eyebrow="Weitere Seiten"
        links={[
          { label: "Gastronomie-Lösungen",      href: "/gastronomie" },
          { label: "Digital Signage Schweiz",   href: "/digital-signage-schweiz" },
          { label: "Kosten & Preise",           href: "/was-kostet-digital-signage-schweiz" },
          { label: "Beratung anfragen",         href: "/kontakt" },
        ]}
      />

      {/* 8 — CTA */}
      <CTASection
        eyebrow="Jetzt starten"
        title="Bereit für das erste digitale Menüboard?"
        subtitle="Schildern Sie kurz Ihren Betrieb und wie viele Bildschirme Sie sich vorstellen. Wir zeigen Ihnen, welche Lösung sinnvoll ist und was sie kostet."
        primaryCta={{ label: "Beratung anfragen",        href: "/kontakt" }}
        secondaryCta={{ label: "Alle Gastronomie-Lösungen", href: "/gastronomie" }}
      />

      {/* 9 — Contact */}
      <ContactSection
        eyebrow="Persönlicher Kontakt"
        title="Sie möchten wissen, welches Menüboard zu Ihrem Betrieb passt?"
        subtitle="Schreiben Sie kurz, was Sie vorhaben. Wir melden uns persönlich und unkompliziert."
        contactName="Chris Meister"
        role="Meister Signage"
        phone="+41 76 452 66 87"
        email="info@meister-signage.ch"
        whatsapp="https://wa.me/41764526687"
        imageSrc="/images/Chris-Meister.png"
      />
    </>
  );
}
