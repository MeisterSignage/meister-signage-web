import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import IntroSection from "@/components/sections/IntroSection";
import IndustrySection from "@/components/sections/IndustrySection";
import ProblemSolutionSection from "@/components/sections/ProblemSolutionSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import CostTeaserSection from "@/components/sections/CostTeaserSection";
import FAQSection from "@/components/sections/FAQSection";
import PageLinksSection from "@/components/sections/PageLinksSection";
import CTASection from "@/components/sections/CTASection";
import ContactSection from "@/components/sections/ContactSection";
import {
  UtensilsCrossed,
  Hotel,
  Store,
  Building2,
  CalendarRange,
  LayoutDashboard,
  Zap,
  BadgeCheck,
  Receipt,
  MessageSquare,
  Users,
} from "lucide-react";
import JsonLd from "@/components/JsonLd";
import { faqSchema } from "@/lib/schema/faq";
import { breadcrumbSchema } from "@/lib/schema/breadcrumb";
import { serviceSchema } from "@/lib/schema/service";

const SITE_URL = "https://www.meister-signage.ch";
const PAGE_URL = `${SITE_URL}/digital-signage-schweiz`;

export const metadata: Metadata = {
  title: "Digital Signage Schweiz | Meister Signage",
  description:
    "Digital-Signage-Lösungen für Gastronomie, Retail, Unternehmen, Events und Hotellerie. Persönlich geplant, zentral steuerbar und sauber umgesetzt.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    locale: "de_CH",
    url: PAGE_URL,
    siteName: "Meister Signage",
    title: "Digital Signage Schweiz | Meister Signage",
    description:
      "Digital-Signage-Lösungen für Gastronomie, Retail, Unternehmen, Events und Hotellerie. Persönlich geplant, zentral steuerbar und sauber umgesetzt.",
    images: [
      {
        url: `${SITE_URL}/og/meister-signage-og.png`,
        width: 1200,
        height: 630,
        alt: "Digital Signage Schweiz – Meister Signage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Signage Schweiz | Meister Signage",
    description:
      "Digital-Signage-Lösungen für Gastronomie, Retail, Unternehmen, Events und Hotellerie.",
    images: [`${SITE_URL}/og/meister-signage-og.png`],
  },
};

// ── Page-specific FAQ data (shared between FAQSection and JSON-LD) ─────────────

const PAGE_FAQS = [
  {
    question: "Was ist Digital Signage?",
    answer:
      "Digital Signage beschreibt den Einsatz digitaler Bildschirme zur Anzeige von Informationen, Werbung, Angeboten oder interner Kommunikation. Inhalte werden zentral verwaltet und können flexibel angepasst werden.",
  },
  {
    question: "Für welche Unternehmen eignet sich Digital Signage?",
    answer:
      "Für Gastronomie, Hotellerie, Retail, Unternehmen, Events und alle Betriebe, die Informationen sichtbar und aktuell halten möchten. Besonders sinnvoll ist Digital Signage, wenn Inhalte regelmässig wechseln oder mehrere Standorte versorgt werden sollen.",
  },
  {
    question: "Was kostet Digital Signage in der Schweiz?",
    answer:
      "Mietlösungen starten ab CHF 129 pro Monat inklusive Lizenz. Beim Kauf beginnen professionelle Displays bei CHF 1'299. Zusätzliche Kosten können für Einrichtung (ab CHF 149), Versand (ca. CHF 60 pro Display) und optionale Installation entstehen.",
  },
  {
    question: "Kann man Digital Signage mieten?",
    answer:
      "Ja. Meister Signage bietet flexible Mietpakete ab CHF 129 pro Monat an — inklusive Lizenz, Cloud-Steuerung und Support. Ideal für Events, temporäre Einsätze oder als Einstieg ohne grosse Anfangsinvestition.",
  },
  {
    question: "Wie werden Inhalte verwaltet?",
    answer:
      "Inhalte werden über ein cloudbasiertes System zentral verwaltet. Änderungen sind jederzeit möglich und erscheinen sofort auf den entsprechenden Displays — von überall steuerbar.",
  },
  {
    question: "Unterstützt Meister Signage bei der Einrichtung?",
    answer:
      "Ja. Meister Signage übernimmt Planung, Einrichtung und Inbetriebnahme. Das Personal wird in der Bedienung eingeführt und der direkte Ansprechpartner bleibt auch nach dem Start erreichbar.",
  },
];

// ── Page ───────────────────────────────────────────────────────────────────────

export default function DigitalSignageSchweiPage() {
  return (
    <>
      {/* Structured data */}
      <JsonLd schema={faqSchema(PAGE_FAQS) as Record<string, unknown>} />
      <JsonLd schema={breadcrumbSchema([
        { name: "Home",                   path: "/" },
        { name: "Digital Signage Schweiz", path: "/digital-signage-schweiz" },
      ]) as Record<string, unknown>} />
      <JsonLd schema={serviceSchema({
        name: "Digital Signage",
        description: "Planung und Umsetzung von Digital-Signage-Lösungen für Gastronomie, Retail, Unternehmen, Hotellerie und Events in der Schweiz.",
        url: PAGE_URL,
      }) as Record<string, unknown>} />

      {/* 1 — Hero */}
      <HeroSection
        eyebrow="Digital Signage Schweiz"
        title="Digital Signage Lösungen für Unternehmen in der Schweiz."
        subtitle="Digitale Kommunikation soll Informationen sichtbar machen — nicht zusätzliche Komplexität schaffen. Meister Signage plant und realisiert Digital-Signage-Lösungen für Gastronomie, Retail, Unternehmen, Hotellerie und Events."
        bullets={[
          "Zentrale Inhaltsverwaltung",
          "Moderne Displays und Infoscreens",
          "Persönliche Betreuung statt anonymer Plattformen",
        ]}
        primaryCta={{ label: "Beratung anfragen", href: "/kontakt" }}
        secondaryCta={{ label: "Lösungen ansehen", href: "#loesungen" }}
      />

      {/* 2 — Was ist Digital Signage? */}
      <IntroSection
        title="Was ist Digital Signage?"
        text="Digital Signage beschreibt den Einsatz digitaler Bildschirme zur Anzeige von Informationen, Werbung, Angeboten oder interner Kommunikation. Inhalte können zentral verwaltet und flexibel angepasst werden — beispielsweise in Restaurants, Hotels, Unternehmen, Shops oder an Events. Im Gegensatz zu gedruckten Aushängen lassen sich digitale Inhalte jederzeit aktualisieren, ohne neue Drucksachen zu produzieren."
        definition="Digital Signage = digitale Beschilderung mit zentral gesteuerten Inhalten."
      />

      {/* 3 — Branchen */}
      <div id="loesungen">
        <IndustrySection
          eyebrow="Branchen"
          title="Digital Signage für Ihre Branche."
          subtitle="Meister Signage plant Lösungen für unterschiedliche Einsatzbereiche — von der Gastronomie bis zum Unternehmensempfang."
          industries={[
            {
              icon: UtensilsCrossed,
              title: "Gastronomie",
              description:
                "Digitale Menüboards und Tagesangebote schnell aktualisieren — ohne neue Drucksachen.",
              href: "/gastronomie",
            },
            {
              icon: Hotel,
              title: "Hotellerie",
              description:
                "Gäste informieren, Empfangsbereiche gestalten und Veranstaltungen digital kommunizieren.",
              href: "/hotellerie",
            },
            {
              icon: Store,
              title: "Retail",
              description:
                "Aktionen, Preise und Markenbotschaften sichtbar und flexibel im Verkaufsraum platzieren.",
              href: "/retail",
            },
            {
              icon: Building2,
              title: "Unternehmen",
              description:
                "Interne Kommunikation, Empfang und KPI-Dashboards zentral steuern.",
              href: "/unternehmen",
            },
            {
              icon: CalendarRange,
              title: "Events",
              description:
                "Zeitpläne, Wegweisung und Sponsoren professionell auf Bildschirmen präsentieren.",
              href: "/events",
            },
          ]}
        />
      </div>

      {/* 4 — Problem / Solution */}
      <ProblemSolutionSection
        eyebrow="Typische Herausforderungen"
        title="Viele Unternehmen möchten digital kommunizieren — aber ohne komplizierte Systeme."
        subtitle="Die häufigsten Hürden sind nicht technischer Natur, sondern organisatorischer: zu viele Tools, unklare Zuständigkeiten und fehlende persönliche Beratung."
        problemsLabel="Was Betriebe bremst"
        solutionsLabel="Was Digital Signage löst"
        problems={[
          {
            title: "Inhalte müssen schnell aktualisiert werden",
            description:
              "Gedruckte Aushänge, handgeschriebene Tafeln und statische Displays kommen mit der Realität nicht mit — jede Änderung erfordert neuen Aufwand.",
          },
          {
            title: "Informationen sind nicht zentral verwaltbar",
            description:
              "Mehrere Standorte, Abteilungen oder Räume brauchen aktuelle Inhalte — aber niemand hat ein System, das das einfach koordiniert.",
          },
          {
            title: "Druckkosten entstehen laufend neu",
            description:
              "Wöchentliche Menüs, saisonale Aktionen, neue Hinweisschilder: Drucken kostet Zeit, Geld und Nerven — und ist nach wenigen Tagen veraltet.",
          },
          {
            title: "Bestehende Lösungen wirken technisch kompliziert",
            description:
              "Viele Anbieter setzen auf Software-Plattformen mit langen Einarbeitungszeiten und anonymem Support — was den Alltag nicht erleichtert, sondern erschwert.",
          },
        ]}
        solutions={[
          {
            title: "Zentrale Cloud-Verwaltung",
            description:
              "Inhalte werden einmal gepflegt und erscheinen sofort auf allen zugewiesenen Displays — egal ob ein Screen oder zwanzig.",
          },
          {
            title: "Inhalte flexibel und schnell steuerbar",
            description:
              "Änderungen dauern Minuten, nicht Stunden. Keine Drucksachen, kein Koordinationsaufwand, kein Warten auf externe Dienstleister.",
          },
          {
            title: "Professionelle Darstellung ohne Mehraufwand",
            description:
              "Einmal eingerichtet läuft das System selbstständig weiter. Inhalte werden angezeigt, aktualisiert und nach Zeitplan ausgespielt.",
          },
          {
            title: "Persönliche Betreuung von Anfang an",
            description:
              "Meister Signage plant mit Ihnen — nicht für Sie. Die Lösung wird so aufgesetzt, dass Sie sie im Alltag selbst bedienen können.",
          },
        ]}
      />

      {/* 5 — Benefits */}
      <BenefitsSection
        eyebrow="Vorteile"
        title="Warum Unternehmen auf Digital Signage setzen."
        subtitle="Digitale Beschilderung bietet messbare Vorteile — in der täglichen Bedienung, im professionellen Auftritt und in der langfristigen Kostenentwicklung."
        benefits={[
          {
            icon: LayoutDashboard,
            title: "Inhalte zentral verwalten",
            description:
              "Ein System, alle Displays. Inhalte werden zentral gepflegt und gezielt auf einzelne Screens oder Gruppen ausgespielt.",
          },
          {
            icon: Zap,
            title: "Informationen schnell aktualisieren",
            description:
              "Tagesangebote, Öffnungszeiten, Veranstaltungshinweise: Änderungen erscheinen sofort — ohne Druck, ohne Aufwand.",
          },
          {
            icon: BadgeCheck,
            title: "Professionelle Wirkung",
            description:
              "Hochwertige Displays und sauber gestaltete Inhalte hinterlassen bei Kunden, Gästen und Besuchern einen modernen Eindruck.",
          },
          {
            icon: Receipt,
            title: "Weniger Druckkosten",
            description:
              "Wer digitale Inhalte nutzt, spart langfristig an Drucksachen, Aushängmaterial und den Kosten für deren Produktion.",
          },
          {
            icon: MessageSquare,
            title: "Flexible Kommunikation",
            description:
              "Inhalte lassen sich nach Uhrzeit, Wochentag oder Saison automatisch planen und ausspielen — ohne manuellen Eingriff.",
          },
          {
            icon: Users,
            title: "Moderne Kunden- und Mitarbeiterinformation",
            description:
              "Digital Signage dient nicht nur der externen Kommunikation — auch intern lassen sich Kennzahlen, News und Hinweise gezielt sichtbar machen.",
          },
        ]}
      />

      {/* 6 — Leistungen */}
      <ServicesSection
        eyebrow="Leistungen"
        title="Welche Digital-Signage-Lösungen bietet Meister Signage?"
        subtitle="Von der Hardware-Beratung bis zur laufenden Betreuung — alles aus einer Hand."
        services={[
          {
            title: "Displays & Hardware",
            description:
              "Professionelle Displays in verschiedenen Grössen und Formaten — für Theken, Wände, Schaufenster und Empfangsbereiche.",
          },
          {
            title: "Cloudbasierte Verwaltung",
            description:
              "Inhalte zentral über ein einfaches System steuern — von überall, auf jedem Gerät.",
          },
          {
            title: "Menüboards",
            description:
              "Digitale Speisekarten und Tagesangebote für Gastronomie und Hotellerie — schnell aktualisierbar, professionell gestaltet.",
          },
          {
            title: "Infoscreens",
            description:
              "Informationsdisplays für Empfangsbereiche, Lobbys, Korridore und öffentliche Flächen.",
          },
          {
            title: "Empfangsdisplays",
            description:
              "Willkommensbildschirme und Besucherinformationen für Hotels, Unternehmen und Dienstleister.",
          },
          {
            title: "Mietlösungen",
            description:
              "Flexible Mietpakete für Events, Messen, Pop-ups und temporäre Kampagnen — ab CHF 129 pro Monat.",
          },
          {
            title: "Installation & Einrichtung",
            description:
              "Meister Signage liefert, montiert und richtet ein — inklusive Einführung für das Personal.",
          },
          {
            title: "Persönliche Betreuung",
            description:
              "Direkter Ansprechpartner von der Planung bis zum laufenden Betrieb. Kein Ticketsystem, keine Hotline.",
          },
        ]}
      />

      {/* 7 — Kosten */}
      <CostTeaserSection
        eyebrow="Kosten"
        title="Was kostet Digital Signage?"
        text="Die Kosten hängen von Displaygrösse, Anzahl Standorten, Software und gewünschter Betreuung ab. Mietlösungen starten bereits ab CHF 129 pro Monat inklusive Lizenz und Support. Beim Kauf beginnen professionelle Displays bei CHF 1'299. Einrichtung und Versand können zusätzlich anfallen."
        ctaLabel="Kostenübersicht ansehen"
        ctaHref="/was-kostet-digital-signage-schweiz"
      />

      {/* 8 — FAQ */}
      <FAQSection
        eyebrow="Häufige Fragen"
        title="Häufige Fragen zu Digital Signage."
        subtitle="Die wichtigsten Antworten für Betriebe, die Digital Signage sinnvoll und verständlich einsetzen möchten."
        faqs={PAGE_FAQS}
      />

      {/* 9 — Interne Links */}
      <PageLinksSection
        eyebrow="Weitere Seiten"
        title="Passende Seiten für Ihren Bedarf."
        links={[
          {
            label: "Gastronomie",
            description:
              "Digital Signage für Restaurants, Cafés und Betriebe mit wechselnden Menüs.",
            href: "/gastronomie",
          },
          {
            label: "Hotellerie",
            description:
              "Gästekommunikation, Wegweisung und Event-Infos für Hotels.",
            href: "/hotellerie",
          },
          {
            label: "Retail",
            description:
              "Aktionen und Markenbotschaften sichtbar im Verkaufsraum platzieren.",
            href: "/retail",
          },
          {
            label: "Unternehmen",
            description:
              "Interne Kommunikation, Empfang und Infoscreens für Betriebe.",
            href: "/unternehmen",
          },
          {
            label: "Events",
            description:
              "Zeitpläne, Wegweisung und Sponsoren an Veranstaltungen.",
            href: "/events",
          },
          {
            label: "Digital Signage mieten",
            description:
              "Flexible Mietpakete ab CHF 129/Monat für temporäre Einsätze.",
            href: "/digital-signage-mieten",
          },
          {
            label: "Kostenübersicht",
            description:
              "Mietpreise, Kaufpreise und Kostenfaktoren transparent erklärt.",
            href: "/was-kostet-digital-signage-schweiz",
          },
          {
            label: "Über Meister Signage",
            description:
              "Persönlich geplant und sauber umgesetzt — aus der Zentralschweiz.",
            href: "/ueber-uns",
          },
        ]}
      />

      {/* 10 — CTA */}
      <CTASection
        eyebrow="Projekt besprechen"
        title="Sie möchten prüfen, welche Digital-Signage-Lösung zu Ihrem Betrieb passt?"
        subtitle="Gemeinsam finden wir eine Lösung, die technisch verständlich bleibt und im Alltag funktioniert."
        primaryCta={{ label: "Beratung anfragen", href: "/kontakt" }}
        secondaryCta={{ label: "Kontakt aufnehmen", href: "/kontakt" }}
      />

      {/* 11 — Contact */}
      <ContactSection
        eyebrow="Persönlicher Kontakt"
        title="Sie möchten Digital Signage in der Schweiz einsetzen?"
        subtitle="Schreiben Sie kurz, was Sie vorhaben. Wir melden uns persönlich und unkompliziert."
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
