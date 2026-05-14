import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSolutionSection from "@/components/sections/ProblemSolutionSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import ProcessSection from "@/components/sections/ProcessSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import ContactSection from "@/components/sections/ContactSection";
import { CalendarRange, Navigation, Users, Zap, BadgeCheck, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Digital Signage Events | Meister Signage",
  description:
    "Digitale Beschilderung und Bildschirmlösungen für Events, Messen und Veranstaltungen. Flexibel, professionell und einfach betreut.",
};

export default function EventsPage() {
  return (
    <>
      <HeroSection
        eyebrow="Digital Signage für Events"
        title="Digital Signage für Events und Veranstaltungen."
        subtitle="Zeitpläne, Wegweisung, Sponsoren und Eventinformationen professionell auf Bildschirm – flexibel aufgebaut, schnell aktualisiert und persönlich betreut."
        bullets={[
          "Zeitpläne und Inhalte zentral und kurzfristig ändern",
          "Sponsoren und Partner professionell sichtbar platzieren",
          "Schnelle Einrichtung vor Ort – auch als temporäre Miete",
        ]}
        primaryCta={{ label: "Beratung anfragen", href: "/kontakt" }}
        secondaryCta={{ label: "Bildschirme mieten", href: "/mieten" }}
      />

      <ProblemSolutionSection
        eyebrow="Vom Papierchaos zur digitalen Übersicht"
        title="Eventinformationen ändern sich kurzfristig – Aushänge kommen nicht mit."
        subtitle="Bei Events und Veranstaltungen müssen Informationen oft spontan angepasst werden. Gedruckte Schilder und Aushänge sind dann schnell überholt."
        problemsLabel="Was heute oft passiert"
        solutionsLabel="Mit Digital Signage einfacher"
        problems={[
          {
            title: "Zeitplanänderungen führen zu Verwirrung",
            description:
              "Verschobene Auftritte, neue Locations oder geänderte Startzeiten lassen sich auf gedruckten Programmen nicht mehr korrigieren.",
          },
          {
            title: "Wegweisung funktioniert nicht zuverlässig",
            description:
              "Handgeschriebene Pfeile, falsch platzierte Schilder oder fehlende Hinweise führen zu Staus und frustrierten Besuchern.",
          },
          {
            title: "Sponsoren werden nicht professionell sichtbar",
            description:
              "Gedruckte Banner und Rollups sind aufwändig in der Produktion und wirken schnell statisch oder veraltet.",
          },
        ]}
        solutions={[
          {
            title: "Änderungen sofort auf allen Screens sichtbar",
            description:
              "Zeitplanupdate, Raumwechsel oder neue Hinweise – alle Displays zeigen die aktuellen Informationen in Echtzeit.",
          },
          {
            title: "Klare Wegweisung für alle Besucherbereiche",
            description:
              "Digitale Leitsysteme führen Gäste zuverlässig durch das Gelände – auch bei kurzfristigen Änderungen.",
          },
          {
            title: "Sponsoren professionell und flexibel präsentieren",
            description:
              "Logos, Botschaften und Inhalte von Sponsoren werden auf Displays integriert – anpassbar, skalierbar, werthaltig.",
          },
        ]}
      />

      <BenefitsSection
        eyebrow="Was Sie gewinnen"
        title="Professionelle Eventkommunikation – flexibel und ohne Mehraufwand."
        subtitle="Digital Signage macht Ihre Veranstaltung übersichtlicher, professioneller und für Besucher sowie Sponsoren attraktiver."
        benefits={[
          {
            icon: CalendarRange,
            title: "Zeitpläne zentral aktualisieren",
            description:
              "Programmänderungen, neue Speaker oder verschobene Sessions – Anpassungen sind in Minuten auf allen Screens sichtbar.",
          },
          {
            icon: Navigation,
            title: "Zuverlässige Wegweisung",
            description:
              "Besucher finden sich sicher zurecht: Eingänge, Bühnen, Toiletten, Exits – klar beschriftet und jederzeit anpassbar.",
          },
          {
            icon: Users,
            title: "Sponsoren professionell platzieren",
            description:
              "Logos und Botschaften von Partnern und Sponsoren werden integriert, sichtbar und werthaltig präsentiert.",
          },
          {
            icon: BadgeCheck,
            title: "Professioneller Gesamteindruck",
            description:
              "Einheitliche Bildschirmlösungen heben das Niveau der Veranstaltung und hinterlassen einen bleibenden Eindruck.",
          },
          {
            icon: Zap,
            title: "Schnelle Einrichtung vor Ort",
            description:
              "Aufbau, Einrichtung und Übergabe erfolgen zuverlässig vor dem Event – ohne Überraschungen am Tag selbst.",
          },
          {
            icon: MapPin,
            title: "Persönliche Betreuung vor und nach dem Event",
            description:
              "Direkter Ansprechpartner, lokale Nähe und Unterstützung auch kurzfristig – als lokaler Anbieter aus der Zentralschweiz.",
          },
        ]}
      />

      <ProcessSection
        eyebrow="So läuft die Zusammenarbeit"
        title="Von der Eventplanung bis zur Abgabe – zuverlässig und klar."
        subtitle="Wir begleiten Sie von der ersten Anfrage bis zum Abbau nach dem Event – damit Sie sich auf die Veranstaltung konzentrieren können."
        steps={[
          {
            number: 1,
            title: "Anforderungen und Locations klären",
            description:
              "Wir besprechen gemeinsam, welche Bereiche bespielt werden sollen, welche Inhalte laufen und wie viele Displays gebraucht werden.",
          },
          {
            number: 2,
            title: "Lösung und Inhalte vorbereiten",
            description:
              "Displays, Halterungen, Inhaltsstruktur und Zeitpläne werden vorab eingerichtet, damit am Eventtag alles sofort läuft.",
          },
          {
            number: 3,
            title: "Aufbau und Einrichtung vor Ort",
            description:
              "Wir installieren und testen alle Displays vor dem Event – mit genügend Vorlauf und ohne Hektik am Veranstaltungstag.",
          },
          {
            number: 4,
            title: "Support während und nach dem Event",
            description:
              "Kurzfristige Anpassungen, technischer Support oder Abbau nach dem Event – wir sind erreichbar und reagieren schnell.",
          },
        ]}
      />

      <FAQSection
        eyebrow="Häufige Fragen"
        title="Was Veranstalter vor dem Start wissen wollen."
        subtitle="Die wichtigsten Antworten für Events, Messen und Veranstaltungen, die Digital Signage einsetzen möchten."
        faqs={[
          {
            question: "Kann ich Bildschirme auch mieten statt kaufen?",
            answer:
              "Ja. Für temporäre Events bieten wir Bildschirme zur Miete an – inklusive Einrichtung und Betreuung. Kaufen lohnt sich bei wiederkehrenden Veranstaltungen.",
          },
          {
            question: "Wie kurzfristig können Inhalte während des Events geändert werden?",
            answer:
              "Inhalte können in Echtzeit angepasst werden – Zeitplanänderungen, Hinweise oder Notfallinformationen sind innerhalb von Sekunden auf allen Displays sichtbar.",
          },
          {
            question: "Brauche ich am Veranstaltungsort Internet?",
            answer:
              "Eine WLAN-Verbindung erleichtert kurzfristige Anpassungen. Für einfachere Setups ohne Liveupdates sind auch offline Lösungen möglich – wir planen das gemeinsam.",
          },
          {
            question: "Wie früh muss ich anfragen?",
            answer:
              "Je früher, desto besser – damit genügend Zeit für Planung, Inhaltsvorbereitung und Einrichtung bleibt. Bei kleineren Setups sind auch kurzfristigere Anfragen möglich.",
          },
          {
            question: "Können verschiedene Zonen unterschiedliche Inhalte anzeigen?",
            answer:
              "Ja. Eingangsbereich, Bühnennahe Displays, Sponsorenwände und Wegweisung können je separat und unabhängig voneinander bespielt werden.",
          },
        ]}
      />

      <CTASection
        eyebrow="Projekt besprechen"
        title="Digital Signage für Ihr nächstes Event planen?"
        subtitle="Kurz erklären, was Sie vorhaben – wir zeigen Ihnen, wie die passende Lösung für Ihre Veranstaltung aussehen kann."
        primaryCta={{ label: "Beratung anfragen", href: "/kontakt" }}
        secondaryCta={{ label: "Bildschirme mieten", href: "/mieten" }}
      />

      <ContactSection
        eyebrow="Persönlicher Kontakt"
        title="Sie planen eine Veranstaltung und möchten Digital Signage einsetzen?"
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
