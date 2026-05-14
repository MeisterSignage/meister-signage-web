import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSolutionSection from "@/components/sections/ProblemSolutionSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import ProcessSection from "@/components/sections/ProcessSection";
import IndustrySection from "@/components/sections/IndustrySection";
import ProofSection from "@/components/sections/ProofSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import ContactSection from "@/components/sections/ContactSection";
import { Clock, PencilRuler, BadgeCheck, MapPin, Wrench, RefreshCw } from "lucide-react";
import { UtensilsCrossed, Store, CalendarRange, Building2, Hotel, MonitorPlay } from "lucide-react";

export const metadata: Metadata = {
  title: "Meister Signage – Digital Signage Luzern & Zentralschweiz",
  description: "Schlüsselfertige Digital-Signage-Lösungen für Gastronomie, Retail und Events. Persönlicher Service aus der Zentralschweiz. Kein IT-Aufwand.",
};

export default function Home() {
  return (
    <>
      <HeroSection
        eyebrow="Digital Signage aus der Zentralschweiz"
        title="Digitale Beschilderung, die im Alltag wirklich funktioniert."
        subtitle="Meister Signage plant und realisiert Digital-Signage-Lösungen für Gastronomie, Retail und Events – persönlich, verständlich und schlüsselfertig."
        bullets={[
          "Inhalte einfach und zentral aktualisieren",
          "Weniger Druckaufwand und weniger manuelle Arbeit",
          "Persönliche Betreuung statt anonymem Ticketsystem",
        ]}
        primaryCta={{ label: "Beratung anfragen", href: "/kontakt" }}
        secondaryCta={{ label: "Lösungen ansehen", href: "/loesungen" }}
      />

      <ProblemSolutionSection
        eyebrow="Vom Aufwand zur einfachen Lösung"
        title="Digitale Kommunikation soll entlasten – nicht zusätzliche Arbeit machen."
        subtitle="Viele Betriebe wissen, dass digitale Bildschirme sinnvoll wären. Oft scheitert es aber an Zeit, Technik oder der Frage, wer sich später darum kümmert."
        problems={[
          { title: "Inhalte sind schnell veraltet",  description: "Aushänge, Menükarten oder Eventinformationen müssen immer wieder neu erstellt, gedruckt und ausgetauscht werden." },
          { title: "Technik wirkt kompliziert",       description: "Displays, Player, Inhalte und Steuerung sollen funktionieren, ohne dass intern jemand zum IT-Spezialisten werden muss." },
          { title: "Zuständigkeiten sind unklar",     description: "Wenn niemand weiss, wer Inhalte pflegt oder Probleme löst, bleibt Digital Signage schnell ungenutzt." },
        ]}
        solutions={[
          { title: "Inhalte zentral aktualisieren",  description: "Informationen lassen sich einfach anpassen und auf Wunsch für verschiedene Standorte oder Anwendungen vorbereiten." },
          { title: "Schlüsselfertig umgesetzt",       description: "Wir kümmern uns um Planung, passende Komponenten, Einrichtung und Übergabe – verständlich und praxisnah." },
          { title: "Persönliche Betreuung",           description: "Sie haben einen direkten Ansprechpartner und keine anonyme Plattform, bei der Sie zuerst ein Ticket eröffnen müssen." },
        ]}
      />

      <BenefitsSection
        eyebrow="Was Sie gewinnen"
        title="Mehr Wirkung im Alltag – mit weniger Aufwand."
        subtitle="Digital Signage soll nicht komplizierter machen, sondern Kommunikation einfacher, aktueller und sichtbarer machen."
        benefits={[
          { icon: Clock,       title: "Inhalte schneller aktualisieren", description: "Angebote, Öffnungszeiten, Menüs oder Hinweise lassen sich kurzfristig anpassen, ohne jedes Mal neu zu drucken." },
          { icon: PencilRuler, title: "Passend zu Ihrem Auftritt",       description: "Inhalte und Darstellung werden so umgesetzt, dass sie zu Ihrem Betrieb, Ihrer Zielgruppe und Ihrem visuellen Stil passen." },
          { icon: BadgeCheck,  title: "Professioneller Eindruck",        description: "Digitale Beschilderung wirkt gepflegt, aktuell und wertig – besonders dort, wo Kunden sofort einen Eindruck gewinnen." },
          { icon: MapPin,      title: "Lokal und persönlich",            description: "Als Anbieter aus der Zentralschweiz sind wir greifbar, direkt erreichbar und bei Bedarf auch vor Ort." },
          { icon: Wrench,      title: "Schlüsselfertig umgesetzt",       description: "Von der Planung bis zur Inbetriebnahme erhalten Sie eine Lösung, die im Alltag funktioniert." },
          { icon: RefreshCw,   title: "Flexibel erweiterbar",            description: "Ob ein einzelner Bildschirm oder mehrere Standorte: Die Lösung kann Schritt für Schritt mitwachsen." },
        ]}
      />

      <ProcessSection
        eyebrow="So läuft die Zusammenarbeit"
        title="Von der Idee bis zur laufenden Lösung – klar und unkompliziert."
        subtitle="Sie müssen nicht wissen, welches Display, welcher Player oder welche Software passt. Wir führen Sie Schritt für Schritt zur passenden Lösung."
        steps={[
          { number: 1, title: "Bedarf verstehen",       description: "Wir klären, wo Digital Signage eingesetzt werden soll, welche Inhalte sichtbar sein müssen und was im Alltag wirklich gebraucht wird." },
          { number: 2, title: "Lösung planen",          description: "Daraus entsteht ein schlankes Konzept mit passenden Bildschirmen, Inhalten, Steuerung und klarer Umsetzung." },
          { number: 3, title: "Einrichten und starten", description: "Wir kümmern uns um Einrichtung, Übergabe und einen sauberen Start – ohne unnötigen technischen Ballast." },
          { number: 4, title: "Betreuen und erweitern", description: "Nach dem Start bleiben wir erreichbar, unterstützen bei Anpassungen und erweitern die Lösung bei Bedarf." },
        ]}
      />

      <IndustrySection
        eyebrow="Lösungen nach Anwendung"
        title="Digital Signage dort einsetzen, wo Informationen sichtbar sein müssen."
        subtitle="Ob Menü, Angebot, Wegweisung oder Eventinformation – entscheidend ist, dass die Lösung zum Alltag passt."
        industries={[
          { icon: UtensilsCrossed, title: "Gastronomie",       description: "Digitale Menüboards, Tagesangebote und Hinweise schnell aktualisieren – ohne neue Drucksachen.",        href: "/gastronomie" },
          { icon: Store,           title: "Retail und Handel", description: "Aktionen, Produktinformationen und Markenbotschaften sichtbar und flexibel präsentieren.",              href: "/retail" },
          { icon: CalendarRange,   title: "Events",            description: "Zeitpläne, Sponsoren, Wegweisung und Live-Informationen professionell anzeigen.",                       href: "/events" },
          { icon: Hotel,           title: "Hotellerie",        description: "Gäste informieren, Angebote hervorheben und Empfangsbereiche moderner gestalten.",                     href: "/hotellerie" },
          { icon: Building2,       title: "Unternehmen",       description: "Empfang, interne Kommunikation oder Besucherinformationen klar und zentral steuern.",                  href: "/unternehmen" },
          { icon: MonitorPlay,     title: "Bildschirm mieten", description: "Für Events, Pop-ups oder temporäre Einsätze passende Displays flexibel einsetzen.",                   href: "/mieten" },
        ]}
      />

      <ProofSection
        eyebrow="Vertrauen entsteht im Alltag"
        title="Persönlich, nahbar und lösungsorientiert."
        subtitle="Meister Signage steht nicht für anonyme Standardpakete, sondern für Lösungen, die zu Betrieb, Anwendung und Alltag passen."
        proofItems={[
          { metric: "Persönlich",  title: "Direkter Ansprechpartner",     description: "Sie sprechen nicht mit einem Ticketsystem, sondern mit einer Person, die Ihr Projekt kennt." },
          { metric: "Praxisnah",  title: "Lösungen statt Produktverkauf", description: "Im Zentrum steht nicht der Bildschirm, sondern die Frage, was Ihre Kommunikation im Alltag leisten soll." },
          { metric: "Lokal",      title: "Aus der Zentralschweiz",        description: "Kurze Wege, regionale Nähe und bei Bedarf Unterstützung vor Ort." },
          { metric: "Skalierbar", title: "Schrittweise erweiterbar",      description: "Starten Sie klein und erweitern Sie die Lösung, wenn neue Standorte, Inhalte oder Anwendungen dazukommen." },
        ]}
      />

      <FAQSection
        eyebrow="Häufige Fragen"
        title="Was Sie vor dem Start wissen sollten."
        subtitle="Die wichtigsten Antworten für Betriebe, die Digital Signage einfach und sinnvoll einsetzen möchten."
        faqs={[
          { question: "Was kostet eine Digital-Signage-Lösung?",          answer: "Das hängt von Anzahl Bildschirmen, Einsatzort, Inhaltspflege und gewünschter Betreuung ab. Für kleine Lösungen ist ein schlanker Einstieg möglich." },
          { question: "Kann ich Inhalte selbst ändern?",                  answer: "Ja. Inhalte können so vorbereitet werden, dass sie einfach aktualisiert werden können. Auf Wunsch übernehmen wir auch die laufende Pflege." },
          { question: "Brauche ich dafür eine eigene IT-Abteilung?",      answer: "Nein. Die Lösung wird so geplant, dass sie im Alltag verständlich funktioniert und keine unnötige technische Komplexität entsteht." },
          { question: "Kann ich mit einem Bildschirm starten?",           answer: "Ja. Viele Projekte starten bewusst klein und werden später erweitert." },
          { question: "Für welche Branchen eignet sich Digital Signage?", answer: "Besonders sinnvoll ist es für Gastronomie, Hotellerie, Retail, Events, Empfangsbereiche und überall dort, wo Informationen regelmässig sichtbar aktualisiert werden müssen." },
        ]}
      />

      <CTASection
        eyebrow="Projekt besprechen"
        title="Lassen Sie uns gemeinsam die passende Digital-Signage-Lösung planen."
        subtitle="Kurz erklären, was Sie vorhaben – wir zeigen Ihnen, welche Lösung sinnvoll ist und wie der Einstieg einfach gelingt."
        primaryCta={{ label: "Beratung anfragen", href: "/kontakt" }}
        secondaryCta={{ label: "Mehr über Meister Signage", href: "/ueber-uns" }}
      />

      <ContactSection
        eyebrow="Persönlicher Kontakt"
        title="Sie möchten wissen, ob Digital Signage zu Ihrem Betrieb passt?"
        subtitle="Schreiben Sie kurz, was Sie vorhaben. Wir melden uns persönlich und unkompliziert."
        contactName="Chris Meister"
        role="Meister Signage"
        phone="+41 76 452 66 87"
        email="info@meister-signage.ch"
        whatsapp="https://wa.me/41764526687"
        imageSrc="/images/chris-meister.png"
      />
    </>
  );
}
