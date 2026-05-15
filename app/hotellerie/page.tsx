import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSolutionSection from "@/components/sections/ProblemSolutionSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import ProcessSection from "@/components/sections/ProcessSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import ContactSection from "@/components/sections/ContactSection";
import { BellRing, MapPin, CalendarDays, BadgeCheck, LayoutDashboard, Users } from "lucide-react";
import InternalLinksSection from "@/components/sections/InternalLinksSection";

export const metadata: Metadata = {
  title: "Digital Signage Hotellerie | Meister Signage",
  description:
    "Digitale Informations- und Signage-Lösungen für Hotels und Hotellerie. Professionell geplant, einfach bedienbar und persönlich betreut.",
};

export default function HotelleriePage() {
  return (
    <>
      <HeroSection
        eyebrow="Digital Signage für Hotellerie"
        title="Digital Signage für moderne Hotellerie."
        subtitle="Digitale Gästeinformationen, Wegweisung und Raumbeschilderung für Hotels – zentral verwaltet, einfach aktualisierbar und professionell im Erscheinungsbild."
        bullets={[
          "Gästeinformationen und Angebote jederzeit aktuell halten",
          "Empfangsbereiche und Lobbys professionell gestalten",
          "Inhalte zentral verwalten – ohne IT-Aufwand",
        ]}
        primaryCta={{ label: "Beratung anfragen", href: "/kontakt" }}
        secondaryCta={{ label: "Alle Lösungen ansehen", href: "/loesungen" }}
      />

      <ProblemSolutionSection
        eyebrow="Veraltete Aushänge, fehlende Orientierung"
        title="Hotels kommunizieren heute oft noch analog."
        subtitle="Gedruckte Aushänge, handgeschriebene Hinweisschilder und veraltete Informationstafeln hinterlassen einen unprofessionellen Eindruck – und kosten täglich Zeit."
        problemsLabel="Wie es in vielen Hotels läuft"
        solutionsLabel="Wie Digital Signage das ändert"
        problems={[
          {
            title: "Gedruckte Aushänge veralten schnell",
            description:
              "Speisekarten, Veranstaltungshinweise und Zimmerlisten müssen laufend neu gedruckt, ausgewechselt und verteilt werden – ein erheblicher Zeit- und Kostenaufwand.",
          },
          {
            title: "Gäste finden sich schlecht zurecht",
            description:
              "Unklare oder fehlende Beschilderung bei Tagungsräumen, Spa, Restaurant oder Ausgang führt zu Nachfragen am Empfang und unnötigem Aufwand für das Personal.",
          },
          {
            title: "Veranstaltungsinfos kommen nicht an",
            description:
              "Aktuelle Programmpunkte, Öffnungszeiten oder Sonderangebote erreichen Gäste zu spät oder gar nicht – weil es keine zentrale, sichtbare Informationsfläche gibt.",
          },
        ]}
        solutions={[
          {
            title: "Inhalte in Minuten aktualisieren – von überall",
            description:
              "Speisekarten, Tagesangebote oder Raumzuweisungen lassen sich über ein einfaches System zentral bearbeiten und erscheinen sofort auf allen Bildschirmen im Haus.",
          },
          {
            title: "Klare Wegweisung für ein entspanntes Gästeerlebnis",
            description:
              "Digitale Wegweiser und Raumschilder führen Gäste selbstständig zu Tagungsräumen, Restaurant, Spa oder Ausgang – weniger Fragen, mehr Servicequalität.",
          },
          {
            title: "Alle Informationen immer sichtbar und aktuell",
            description:
              "Von Veranstaltungsprogrammen über Wetterdaten bis zu Willkommensbotschaften – ein zentrales System versorgt alle Bildschirme im Hotel mit aktuellen Inhalten.",
          },
        ]}
      />

      <BenefitsSection
        eyebrow="Was Digital Signage im Hotel bringt"
        title="Professionelle Kommunikation, die den Alltag erleichtert."
        subtitle="Digitale Signage-Lösungen für Hotels verbessern das Gästeerlebnis, entlasten das Personal und stärken den professionellen Auftritt des Hauses."
        benefits={[
          {
            icon: BellRing,
            title: "Gästeinformationen immer aktuell",
            description:
              "Frühstückszeiten, Check-out, Wellnessangebote, Events – alles wird zentral gepflegt und erscheint zur richtigen Zeit am richtigen Ort.",
          },
          {
            icon: MapPin,
            title: "Digitale Wegweisung und Raumbeschilderung",
            description:
              "Tagungsräume, Restaurant, Spa und Ausgang werden klar beschildert. Gäste orientieren sich selbstständig, ohne das Personal zu belasten.",
          },
          {
            icon: CalendarDays,
            title: "Event- und Tagungsinformationen auf einen Blick",
            description:
              "Belegungspläne, Veranstaltungstitel und Raumzuweisungen werden digital angezeigt – aktuell, übersichtlich und ohne Papieraushänge.",
          },
          {
            icon: LayoutDashboard,
            title: "Zentrale Inhaltsverwaltung",
            description:
              "Alle Bildschirme im Hotel werden über ein einziges System gesteuert. Änderungen wirken sofort – auch für mehrere Displays gleichzeitig.",
          },
          {
            icon: BadgeCheck,
            title: "Professioneller Auftritt in Lobby und Empfang",
            description:
              "Digitale Displays an der Rezeption und im Eingangsbereich vermitteln sofort einen modernen, gepflegten Eindruck und stärken das Markenimage des Hotels.",
          },
          {
            icon: Users,
            title: "Persönliche Betreuung statt komplizierter IT",
            description:
              "Meister Signage plant und richtet alles ein. Das Hotelpersonal bekommt eine einfache Bedienoberfläche – ohne Schulungsaufwand und IT-Abhängigkeit.",
          },
        ]}
      />

      <ProcessSection
        eyebrow="So läuft die Zusammenarbeit"
        title="Vom ersten Gespräch bis zur laufenden Betreuung."
        subtitle="Kein komplizierter Rollout, keine IT-Projekte. Wir kümmern uns um alles – vom Plan bis zum laufenden Betrieb."
        steps={[
          {
            number: 1,
            title: "Bedarfsanalyse und Standortcheck",
            description:
              "Wir besprechen, welche Bereiche bespielt werden sollen: Lobby, Rezeption, Tagungsräume, Gänge oder Restaurant. Auf Wunsch besichtigen wir den Standort direkt.",
          },
          {
            number: 2,
            title: "Konzept und Angebot",
            description:
              "Sie erhalten ein klares Konzept mit Displaystandorten, Inhaltsstruktur und Kostenübersicht – verständlich und ohne Fachchinesisch.",
          },
          {
            number: 3,
            title: "Installation und Einrichtung",
            description:
              "Wir liefern, montieren und konfigurieren alle Displays. Inhalte werden eingerichtet und das Personal in der einfachen Bedienung eingeführt.",
          },
          {
            number: 4,
            title: "Laufende Betreuung",
            description:
              "Nach dem Start sind wir weiterhin erreichbar – für Anpassungen, neue Inhalte oder Erweiterungen. Keine Hotline, kein Ticketsystem.",
          },
        ]}
      />

      <FAQSection
        eyebrow="Häufige Fragen"
        title="Was Hotels vor dem Start wissen wollen."
        subtitle="Die wichtigsten Antworten rund um Digital Signage in der Hotellerie."
        faqs={[
          {
            question: "Für welche Hotelbereiche eignet sich Digital Signage?",
            answer:
              "Besonders bewährt hat sich der Einsatz in Lobbys und Empfangsbereichen, bei Tagungsraumbeschilderungen, im Restaurant (digitale Speisekarten), in Korridoren zur Wegweisung sowie im Spa- und Wellnessbereich. Auch digitale Willkommensbildschirme für Gruppen oder Tagungsgäste sind beliebt.",
          },
          {
            question: "Wie aufwendig ist die tägliche Pflege der Inhalte?",
            answer:
              "Die Bedienung ist einfach und für Hotelmitarbeitende ohne technische Vorkenntnisse geeignet. Typische Anpassungen wie das Aktualisieren von Öffnungszeiten, Veranstaltungstiteln oder Tagesmenüs dauern wenige Minuten.",
          },
          {
            question: "Können verschiedene Bereiche unterschiedliche Inhalte zeigen?",
            answer:
              "Ja. Jeder Bildschirm oder jede Gruppe von Bildschirmen kann individuell bespielt werden. Das Restaurant zeigt andere Inhalte als die Tagungsraumbeschilderung – alles aus einem zentralen System steuerbar.",
          },
          {
            question: "Was passiert, wenn sich die Tagungsraumbelegung kurzfristig ändert?",
            answer:
              "Raumzuweisungen lassen sich in wenigen Sekunden anpassen. Die aktualisierten Informationen erscheinen sofort auf den entsprechenden Displays – ohne Ausdrucken, Aushängen oder manuelle Eingriffe vor Ort.",
          },
          {
            question: "Wie hoch ist der Installationsaufwand im laufenden Hotelbetrieb?",
            answer:
              "Wir planen die Installation so, dass der Gästebetrieb möglichst wenig beeinträchtigt wird. Montage und Einrichtung finden in der Regel ausserhalb der Stosszeiten statt. Die meisten Installationen sind innerhalb eines Tages abgeschlossen.",
          },
          {
            question: "Ist eine Anbindung an das Hotel-PMS oder Reservierungssystem möglich?",
            answer:
              "Je nach eingesetztem System sind Integrationen möglich. Wir klären im Beratungsgespräch, welche Anbindungen sinnvoll und machbar sind – und was sich auch ohne Integration effizient lösen lässt.",
          },
        ]}
      />

      <InternalLinksSection
        eyebrow="Weitere Seiten"
        links={[
          { label: "Digital Signage Schweiz",  href: "/digital-signage-schweiz" },
          { label: "Kosten & Preise",          href: "/was-kostet-digital-signage-schweiz" },
          { label: "Digital Signage mieten",   href: "/digital-signage-mieten" },
          { label: "Beratung anfragen",        href: "/kontakt" },
        ]}
      />

      <CTASection
        eyebrow="Jetzt starten"
        title="Ihr Hotel verdient einen modernen Auftritt."
        subtitle="Schreiben Sie uns kurz, wie Ihr Hotel aufgestellt ist – wir besprechen gemeinsam, welche Lösung am besten passt."
        primaryCta={{ label: "Beratung anfragen", href: "/kontakt" }}
        secondaryCta={{ label: "Mehr über Meister Signage", href: "/ueber-uns" }}
      />

      <ContactSection
        eyebrow="Persönlicher Kontakt"
        title="Sie möchten Digital Signage für Ihr Hotel einrichten?"
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
