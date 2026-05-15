import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSolutionSection from "@/components/sections/ProblemSolutionSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import ProcessSection from "@/components/sections/ProcessSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import ContactSection from "@/components/sections/ContactSection";
import { Clock, BadgeCheck, MapPin, Zap, Receipt, Users } from "lucide-react";
import InternalLinksSection from "@/components/sections/InternalLinksSection";
import JsonLd from "@/components/JsonLd";
import { faqSchema } from "@/lib/schema/faq";
import { breadcrumbSchema } from "@/lib/schema/breadcrumb";
import { serviceSchema } from "@/lib/schema/service";

const PAGE_FAQS = [
  {
    question: "Kann ich das Menü selbst täglich aktualisieren?",
    answer:
      "Ja. Die Lösung wird so eingerichtet, dass Sie oder Ihr Team Inhalte einfach und schnell anpassen können – ohne IT-Kenntnisse und ohne fremde Hilfe.",
  },
  {
    question: "Was kostet ein digitales Menüboard?",
    answer:
      "Das hängt von Anzahl Displays, Grösse, Montage und gewünschtem Funktionsumfang ab. Ein schlanker Einstieg mit einem Bildschirm ist bereits ab einem überschaubaren Betrag möglich. Wir erstellen gerne ein konkretes Angebot.",
  },
  {
    question: "Brauche ich dafür schnelles Internet oder besondere IT?",
    answer:
      "In den meisten Fällen reicht ein normaler WLAN-Anschluss. Die Lösung wird so geplant, dass keine technisch aufwändige Infrastruktur nötig ist.",
  },
  {
    question: "Kann ich mit einem einzelnen Bildschirm starten?",
    answer:
      "Ja. Viele Gastronomiebetriebe starten mit einem Menüboard und erweitern später. Die Lösung ist von Anfang an auf Erweiterbarkeit ausgelegt.",
  },
  {
    question: "Was passiert, wenn ein Display ausfällt oder etwas nicht funktioniert?",
    answer:
      "Sie erreichen uns direkt – keine anonyme Hotline, kein Ticketsystem. Als lokaler Anbieter aus der Zentralschweiz sind wir schnell erreichbar und reagieren unkompliziert.",
  },
];

const SITE_URL = "https://www.meister-signage.ch";
const PAGE_URL = `${SITE_URL}/gastronomie`;

export const metadata: Metadata = {
  title: "Digital Signage Gastronomie | Meister Signage",
  description:
    "Digitale Menüboards und Digital-Signage-Lösungen für Gastronomie und Hotellerie. Persönlich geplant, schlüsselfertig umgesetzt und lokal betreut.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    locale: "de_CH",
    url: PAGE_URL,
    siteName: "Meister Signage",
    title: "Digital Signage Gastronomie | Meister Signage",
    description: "Digitale Menüboards und Digital-Signage-Lösungen für Gastronomie und Hotellerie. Persönlich geplant, schlüsselfertig umgesetzt und lokal betreut.",
    images: [{ url: `${SITE_URL}/og/meister-signage-og.png`, width: 1200, height: 630, alt: "Digital Signage Gastronomie – Meister Signage" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Signage Gastronomie | Meister Signage",
    description: "Digitale Menüboards und Digital-Signage-Lösungen für Gastronomie und Hotellerie.",
    images: [`${SITE_URL}/og/meister-signage-og.png`],
  },
};

export default function GastronomiePage() {
  return (
    <>
      {/* Structured data */}
      <JsonLd schema={faqSchema(PAGE_FAQS) as Record<string, unknown>} />
      <JsonLd schema={breadcrumbSchema([
        { name: "Home",         path: "/" },
        { name: "Gastronomie",  path: "/gastronomie" },
      ]) as Record<string, unknown>} />
      <JsonLd schema={serviceSchema({
        name: "Digital Signage für Gastronomie",
        description: "Digitale Menüboards und Bildschirmlösungen für Restaurants, Cafés und Gastronomiebetriebe in der Schweiz.",
        url: "https://www.meister-signage.ch/gastronomie",
        serviceType: "Menüboard",
      }) as Record<string, unknown>} />

      <HeroSection
        eyebrow="Digital Signage für Gastronomie"
        title="Digital Signage für Gastronomie, die im Alltag funktioniert."
        subtitle="Digitale Menüboards und Bildschirmlösungen für Restaurants, Cafés und Betriebe – einfach aktualisierbar, professionell umgesetzt, persönlich betreut."
        bullets={[
          "Tagesangebote und Menüs in Minuten aktualisieren",
          "Weniger Druckkosten – kein Nachdrucken mehr",
          "Persönliche Betreuung statt komplizierter IT",
        ]}
        primaryCta={{ label: "Beratung anfragen", href: "/kontakt" }}
        secondaryCta={{ label: "Alle Lösungen ansehen", href: "/loesungen" }}
      />

      <ProblemSolutionSection
        eyebrow="Vom Papier zur digitalen Lösung"
        title="Menükarten drucken kostet Zeit und Geld – Digital Signage löst das."
        subtitle="Viele Gastronomiebetriebe stehen vor denselben Herausforderungen: Inhalte ändern sich täglich, aber die Kommunikation hinkt hinterher."
        problemsLabel="Was heute oft passiert"
        solutionsLabel="Mit Digital Signage einfacher"
        problems={[
          {
            title: "Menükarten werden täglich zur Baustelle",
            description:
              "Tagesangebote, Preisänderungen oder saisonale Gerichte erfordern neues Drucken – mit Verzögerung und Kosten.",
          },
          {
            title: "Aushänge wirken schnell veraltet",
            description:
              "Handgeschriebene Schilder oder laminierte Blätter hinterlassen keinen professionellen Eindruck beim Gast.",
          },
          {
            title: "Niemand weiss, wer sich um die Screens kümmert",
            description:
              "Ohne klaren Ansprechpartner bleibt Digital Signage ungenutzt oder zeigt wochenlang denselben Inhalt.",
          },
        ]}
        solutions={[
          {
            title: "Inhalte sofort und zentral ändern",
            description:
              "Tagesmenü, Sonderangebote oder Hinweise lassen sich kurzfristig anpassen – ohne Druckerei und ohne Wartezeit.",
          },
          {
            title: "Professioneller Auftritt am Point of Sale",
            description:
              "Moderne Bildschirmlösungen wirken gepflegt, aktuell und stärken das Vertrauen Ihrer Gäste.",
          },
          {
            title: "Direkter Ansprechpartner nach dem Start",
            description:
              "Meister Signage bleibt erreichbar – für Anpassungen, Erweiterungen und Unterstützung im Alltag.",
          },
        ]}
      />

      <BenefitsSection
        eyebrow="Was Sie gewinnen"
        title="Mehr Professionalität – weniger Aufwand im Alltag."
        subtitle="Digital Signage in der Gastronomie soll den Betrieb entlasten, nicht belasten."
        benefits={[
          {
            icon: Clock,
            title: "Angebote in Minuten aktualisieren",
            description:
              "Tagesmenü, Happy Hour oder Saisonspecial – Inhalte lassen sich jederzeit schnell anpassen, ohne IT-Kenntnisse.",
          },
          {
            icon: Receipt,
            title: "Druckkosten dauerhaft senken",
            description:
              "Kein laufendes Nachdrucken mehr. Einmal eingerichtet, amortisiert sich die Lösung rasch.",
          },
          {
            icon: BadgeCheck,
            title: "Professioneller Eindruck beim Gast",
            description:
              "Aktuelle, gestaltete Inhalte auf modernen Displays hinterlassen einen gepflegten und hochwertigen Eindruck.",
          },
          {
            icon: Zap,
            title: "Einfache Bedienung ohne IT-Aufwand",
            description:
              "Die Lösung wird so eingerichtet, dass Ihr Team Inhalte selbst ändern kann – intuitiv und ohne Schulungsaufwand.",
          },
          {
            icon: Users,
            title: "Gäste gezielt informieren",
            description:
              "Menüs, Hinweise, Öffnungszeiten oder Events sichtbar machen – genau dort, wo Ihre Gäste hinschauen.",
          },
          {
            icon: MapPin,
            title: "Lokale Betreuung aus der Zentralschweiz",
            description:
              "Kurze Wege, persönlicher Kontakt und bei Bedarf Unterstützung direkt vor Ort in Ihrem Betrieb.",
          },
        ]}
      />

      <ProcessSection
        eyebrow="So läuft die Zusammenarbeit"
        title="Von der Idee zum laufenden Menüboard – klar und unkompliziert."
        subtitle="Sie müssen sich nicht mit Technik beschäftigen. Wir begleiten Sie von der ersten Frage bis zum laufenden Betrieb."
        steps={[
          {
            number: 1,
            title: "Gespräch und Bedarf klären",
            description:
              "Wir schauen gemeinsam, wo und wie Digital Signage in Ihrem Betrieb sinnvoll ist – ohne Fachjargon.",
          },
          {
            number: 2,
            title: "Lösung und Inhalte planen",
            description:
              "Passende Displays, Halterungen und Inhaltsstruktur werden so vorbereitet, dass alles zu Ihrem Betrieb passt.",
          },
          {
            number: 3,
            title: "Einrichten und übergeben",
            description:
              "Installation, Einrichtung und Einführung Ihres Teams – wir stellen sicher, dass alles sofort funktioniert.",
          },
          {
            number: 4,
            title: "Betreuung und Anpassungen",
            description:
              "Auch nach dem Start bleiben wir erreichbar. Änderungen, Erweiterungen oder neue Inhalte – wir helfen.",
          },
        ]}
      />

      <FAQSection
        eyebrow="Häufige Fragen"
        title="Was Gastronomiebetriebe vor dem Start wissen wollen."
        subtitle="Die wichtigsten Antworten für Restaurants, Cafés und Betriebe, die Digital Signage einsetzen möchten."
        faqs={PAGE_FAQS}
      />

      <InternalLinksSection
        eyebrow="Weitere Seiten"
        links={[
          { label: "Digitales Menüboard",      href: "/digitales-menueboard" },
          { label: "Digital Signage Schweiz",  href: "/digital-signage-schweiz" },
          { label: "Kosten & Preise",          href: "/was-kostet-digital-signage-schweiz" },
          { label: "Digital Signage mieten",   href: "/digital-signage-mieten" },
          { label: "Beratung anfragen",        href: "/kontakt" },
        ]}
      />

      <CTASection
        eyebrow="Projekt besprechen"
        title="Bereit für ein digitales Menüboard in Ihrem Betrieb?"
        subtitle="Kurz erklären, was Sie vorhaben – wir zeigen Ihnen, wie eine passende Lösung für Ihre Gastronomie aussehen kann."
        primaryCta={{ label: "Beratung anfragen", href: "/kontakt" }}
        secondaryCta={{ label: "Mehr über Meister Signage", href: "/ueber-uns" }}
      />

      <ContactSection
        eyebrow="Persönlicher Kontakt"
        title="Sie möchten wissen, ob Digital Signage zu Ihrem Gastronomiebetrieb passt?"
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
