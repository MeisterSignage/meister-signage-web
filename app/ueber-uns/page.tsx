import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import ProofSection from "@/components/sections/ProofSection";
import ProblemSolutionSection from "@/components/sections/ProblemSolutionSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import ProcessSection from "@/components/sections/ProcessSection";
import CTASection from "@/components/sections/CTASection";
import ContactSection from "@/components/sections/ContactSection";
import { MessageSquare, UserCheck, Lightbulb, MapPin, Shield, BadgeCheck } from "lucide-react";

const SITE_URL = "https://www.meister-signage.ch";
const PAGE_URL = `${SITE_URL}/ueber-uns`;

export const metadata: Metadata = {
  title: "Über uns | Meister Signage",
  description:
    "Meister Signage plant und realisiert moderne Digital-Signage-Lösungen mit persönlicher Betreuung, pragmatischen Lösungen und direktem Ansprechpartner.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    locale: "de_CH",
    url: PAGE_URL,
    siteName: "Meister Signage",
    title: "Über uns | Meister Signage",
    description: "Meister Signage plant und realisiert Digital-Signage-Lösungen mit persönlicher Betreuung und direktem Ansprechpartner aus der Zentralschweiz.",
    images: [{ url: `${SITE_URL}/og/meister-signage-og.png`, width: 1200, height: 630, alt: "Meister Signage – Über uns" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Über uns | Meister Signage",
    description: "Digital-Signage-Lösungen mit persönlicher Betreuung. Direkter Ansprechpartner aus der Zentralschweiz.",
    images: [`${SITE_URL}/og/meister-signage-og.png`],
  },
};

export default function UeberUnsPage() {
  return (
    <>
      <HeroSection
        eyebrow="Über Meister Signage"
        title="Persönlich geplant. Sauber umgesetzt."
        subtitle="Meister Signage steht für Digital-Signage-Lösungen, die im Alltag wirklich funktionieren – geplant mit Verstand, umgesetzt ohne unnötige Komplexität und betreut von einem direkten Ansprechpartner."
        bullets={[
          "Direkter Kontakt zu Chris Meister – kein Ticketsystem",
          "Lösungen, die zum Betrieb passen – nicht umgekehrt",
          "Lokal verwurzelt in der Zentralschweiz",
        ]}
        primaryCta={{ label: "Projekt besprechen", href: "/kontakt" }}
        secondaryCta={{ label: "Lösungen ansehen", href: "/loesungen" }}
        imageSrc="/images/Chris-Meister.png"
        imageAlt="Christopher Meister – Gründer Meister Signage"
        imageCompact
      />

      {/* Story / About */}
      <ProofSection
        eyebrow="Die Idee hinter Meister Signage"
        title="Digital Signage soll einfach sein – nicht kompliziert."
        subtitle="Meister Signage entstand aus der Beobachtung, dass viele Betriebe das Potenzial digitaler Bildschirme kennen, aber an der Umsetzung scheitern. Zu viel Technik, zu wenig persönliche Betreuung, zu wenig pragmatische Lösungen."
        proofItems={[
          {
            metric: "Persönlich",
            title: "Direkt mit Chris sprechen",
            description:
              "Kein Callcenter, kein Support-Ticket, keine anonyme Plattform. Sie sprechen direkt mit der Person, die Ihr Projekt plant und umsetzt.",
          },
          {
            metric: "Lokal",
            title: "Verwurzelt in der Zentralschweiz",
            description:
              "Meister Signage ist in der Zentralschweiz zu Hause. Kurze Wege, regionaler Bezug und bei Bedarf Unterstützung direkt vor Ort.",
          },
          {
            metric: "Pragmatisch",
            title: "Lösungen statt Technik-Show",
            description:
              "Der Fokus liegt auf dem, was im Alltag wirklich funktioniert – nicht auf beeindruckenden Präsentationen mit unnötiger Komplexität.",
          },
          {
            metric: "Langfristig",
            title: "Betreuung über den Start hinaus",
            description:
              "Meister Signage begleitet nicht nur die Einrichtung, sondern bleibt erreichbar – für Anpassungen, Erweiterungen und Fragen im laufenden Betrieb.",
          },
        ]}
      />

      {/* Werte / Arbeitsweise */}
      <ProblemSolutionSection
        eyebrow="Unsere Arbeitsweise"
        title="Was Meister Signage von anonymen Anbietern unterscheidet."
        subtitle="Digital Signage gibt es viele. Was selten ist: ein Anbieter, der zuhört, verständlich erklärt und eine Lösung liefert, die wirklich zum Betrieb passt."
        problemsLabel="Wie es oft läuft"
        solutionsLabel="Wie Meister Signage arbeitet"
        problems={[
          {
            title: "Standardlösungen ohne Rücksicht auf den Alltag",
            description:
              "Viele Anbieter liefern fertige Pakete – unabhängig davon, ob sie zum Betrieb, zur Branche oder zum Team passen.",
          },
          {
            title: "Beratung endet nach der Unterschrift",
            description:
              "Nach dem Kauf gibt es ein Handbuch und eine Hotline. Persönliche Unterstützung und echtes Interesse am laufenden Betrieb fehlen.",
          },
          {
            title: "Technische Komplexität wird nicht erklärt",
            description:
              "Fachchinesisch, unverständliche Angebote und fehlende Transparenz machen die Zusammenarbeit unnötig schwierig.",
          },
        ]}
        solutions={[
          {
            title: "Lösung nach Mass – nicht nach Katalog",
            description:
              "Jedes Projekt wird individuell geplant. Was passt zu Ihrem Betrieb, Ihrer Branche und Ihrem Alltag – nicht was im Lager liegt.",
          },
          {
            title: "Persönliche Betreuung vom ersten Gespräch bis zum laufenden Betrieb",
            description:
              "Meister Signage bleibt erreichbar – nicht nur bis zur Übergabe, sondern auch danach für alles, was im Alltag auftaucht.",
          },
          {
            title: "Klar, verständlich, transparent",
            description:
              "Angebote, Planungsschritte und Entscheidungen werden so erklärt, dass Sie immer wissen, was warum gemacht wird.",
          },
        ]}
      />

      {/* Benefits */}
      <BenefitsSection
        eyebrow="Was Sie von uns erwarten dürfen"
        title="Sechs Versprechen, die wir täglich einhalten."
        subtitle="Meister Signage steht für eine klare Haltung: Qualität vor Quantität, Verständlichkeit vor Imponiergehabe, Verlässlichkeit vor Tempo."
        benefits={[
          {
            icon: UserCheck,
            title: "Direkter Ansprechpartner",
            description:
              "Sie erreichen immer dieselbe Person – Chris Meister. Kein Weiterleiten, kein Ticketsystem, keine Wartezeiten.",
          },
          {
            icon: Lightbulb,
            title: "Verständliche Beratung",
            description:
              "Kein Fachjargon, keine unnötigen Fachbegriffe. Wir erklären, was wirklich wichtig ist – und warum.",
          },
          {
            icon: BadgeCheck,
            title: "Saubere Umsetzung",
            description:
              "Von der Planung bis zur Übergabe wird alles sorgfältig vorbereitet, getestet und sauber abgeschlossen.",
          },
          {
            icon: MapPin,
            title: "Lokale Nähe",
            description:
              "Als Anbieter aus der Zentralschweiz sind wir greifbar, kennen die Region und sind bei Bedarf schnell vor Ort.",
          },
          {
            icon: MessageSquare,
            title: "Offene Kommunikation",
            description:
              "Wir sagen, was machbar ist – und auch, was nicht. Ehrliche Einschätzungen statt Versprechen, die nicht gehalten werden können.",
          },
          {
            icon: Shield,
            title: "Verlässlichkeit im Alltag",
            description:
              "Was vereinbart wurde, wird eingehalten. Termine, Inhalte, Qualität – keine Überraschungen nach der Übergabe.",
          },
        ]}
      />

      {/* Process */}
      <ProcessSection
        eyebrow="So arbeiten wir zusammen"
        title="Vom ersten Gespräch bis zur laufenden Betreuung."
        subtitle="Keine komplizierten Abläufe, keine unnötigen Schleifen. Ein direkter Weg von der ersten Anfrage zur laufenden Lösung."
        steps={[
          {
            number: 1,
            title: "Erstes Gespräch – unverbindlich",
            description:
              "Wir hören zu, was Sie vorhaben, stellen die richtigen Fragen und klären gemeinsam, ob und wie Digital Signage sinnvoll ist.",
          },
          {
            number: 2,
            title: "Angebot und Planung",
            description:
              "Sie erhalten ein klares, verständliches Angebot – mit allem was dazugehört, ohne versteckte Kosten und ohne Druck.",
          },
          {
            number: 3,
            title: "Umsetzung und Übergabe",
            description:
              "Wir kümmern uns um alles – von der Bestellung über die Einrichtung bis zur Übergabe und Einführung Ihres Teams.",
          },
          {
            number: 4,
            title: "Laufende Betreuung",
            description:
              "Nach dem Start bleiben wir erreichbar – für Anpassungen, neue Inhalte, Erweiterungen oder einfach eine kurze Frage.",
          },
        ]}
      />

      <CTASection
        eyebrow="Projekt besprechen"
        title="Lernen Sie Meister Signage persönlich kennen."
        subtitle="Ein kurzes Gespräch reicht oft aus, um zu klären, ob und wie Digital Signage für Ihren Betrieb sinnvoll ist."
        primaryCta={{ label: "Projekt besprechen", href: "/kontakt" }}
        secondaryCta={{ label: "Lösungen entdecken", href: "/loesungen" }}
      />

      <ContactSection
        eyebrow="Direkter Kontakt"
        title="Sie möchten mehr über Meister Signage erfahren?"
        subtitle="Schreiben Sie kurz, was Sie vorhaben – oder rufen Sie einfach an. Kein Formular, kein Umweg."
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
