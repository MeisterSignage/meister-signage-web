import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSolutionSection from "@/components/sections/ProblemSolutionSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import ProcessSection from "@/components/sections/ProcessSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import ContactSection from "@/components/sections/ContactSection";
import { BarChart2, UserCheck, MonitorPlay, BadgeCheck, LayoutDashboard, Building2 } from "lucide-react";
import InternalLinksSection from "@/components/sections/InternalLinksSection";
import JsonLd from "@/components/JsonLd";
import { faqSchema } from "@/lib/schema/faq";
import { breadcrumbSchema } from "@/lib/schema/breadcrumb";
import { serviceSchema } from "@/lib/schema/service";

const PAGE_FAQS = [
  {
    question: "Für welche Unternehmensgrössen eignet sich Digital Signage?",
    answer:
      "Von kleinen Betrieben mit einem Empfangsbildschirm bis zu grösseren Unternehmen mit mehreren Standorten und Dutzenden Displays. Meister Signage plant Lösungen, die zur Unternehmensgrösse passen – nicht umgekehrt.",
  },
  {
    question: "Können verschiedene Bereiche unterschiedliche Inhalte anzeigen?",
    answer:
      "Ja. Empfang, Pausenraum, Produktionshalle und Meetingbereiche können jeweils unterschiedliche Inhalte zeigen – alles zentral aus einem System steuerbar.",
  },
  {
    question: "Wie aufwendig ist die tägliche Inhaltspflege?",
    answer:
      "Die Bedienung ist einfach und für Mitarbeitende ohne technische Vorkenntnisse geeignet. Wiederkehrende Inhalte lassen sich einmal einrichten und automatisch aus Zeitplänen abspielen.",
  },
  {
    question: "Ist eine Anbindung an interne Systeme wie SharePoint, Teams oder ERP möglich?",
    answer:
      "Je nach System sind Integrationen möglich. Wir klären im Beratungsgespräch, was sinnvoll und umsetzbar ist – und was sich auch ohne tiefe Integration effizient lösen lässt.",
  },
  {
    question: "Was kostet eine typische Unternehmenslösung?",
    answer:
      "Die Kosten hängen von Anzahl der Displays, Standortgrösse und gewünschter Funktionalität ab. Nach einem kurzen Gespräch erhalten Sie ein transparentes Angebot – ohne versteckte Kosten.",
  },
  {
    question: "Was passiert, wenn ein Bildschirm ausfällt oder ein technisches Problem auftritt?",
    answer:
      "Meister Signage ist direkt erreichbar – kein Ticketsystem, keine Hotline. Wir reagieren schnell und lösen Probleme unkompliziert, damit Ihr Betrieb nicht stillsteht.",
  },
];

const SITE_URL = "https://www.meister-signage.ch";
const PAGE_URL = `${SITE_URL}/unternehmen`;

export const metadata: Metadata = {
  title: "Digital Signage Unternehmen | Meister Signage",
  description:
    "Digital-Signage-Lösungen für Unternehmen und moderne interne Kommunikation. Persönlich geplant, zentral steuerbar und sauber umgesetzt.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    locale: "de_CH",
    url: PAGE_URL,
    siteName: "Meister Signage",
    title: "Digital Signage Unternehmen | Meister Signage",
    description: "Digital-Signage-Lösungen für Unternehmen und moderne interne Kommunikation. Persönlich geplant, zentral steuerbar und sauber umgesetzt.",
    images: [{ url: `${SITE_URL}/og/meister-signage-og.png`, width: 1200, height: 630, alt: "Digital Signage Unternehmen – Meister Signage" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Signage Unternehmen | Meister Signage",
    description: "Digital-Signage-Lösungen für Unternehmen und moderne interne Kommunikation.",
    images: [`${SITE_URL}/og/meister-signage-og.png`],
  },
};

export default function UnternehmenPage() {
  return (
    <>
      {/* Structured data */}
      <JsonLd schema={faqSchema(PAGE_FAQS) as Record<string, unknown>} />
      <JsonLd schema={breadcrumbSchema([
        { name: "Home",        path: "/" },
        { name: "Unternehmen", path: "/unternehmen" },
      ]) as Record<string, unknown>} />
      <JsonLd schema={serviceSchema({
        name: "Digital Signage für Unternehmen",
        description: "Interne Kommunikation, Empfangsbildschirme und digitale Informationssysteme für Unternehmen in der Schweiz.",
        url: "https://www.meister-signage.ch/unternehmen",
        serviceType: "Interne Kommunikation",
      }) as Record<string, unknown>} />

      <HeroSection
        eyebrow="Digital Signage für Unternehmen"
        title="Digital Signage für Unternehmen und interne Kommunikation."
        subtitle="Digitale Bildschirmlösungen für Empfang, Arbeitsplatz und Meetingräume – zentral gesteuert, einfach aktualisierbar und professionell im Erscheinungsbild."
        bullets={[
          "Mitarbeiter informieren, motivieren und einbinden",
          "Empfangsbereiche und Lobbys professionell gestalten",
          "KPIs, Kennzahlen und Neuigkeiten immer sichtbar",
        ]}
        primaryCta={{ label: "Projekt besprechen", href: "/kontakt" }}
        secondaryCta={{ label: "Lösungen ansehen", href: "/loesungen" }}
      />

      <ProblemSolutionSection
        eyebrow="Verpasste Infos, fehlende Sichtbarkeit"
        title="Interne Kommunikation landet oft im Nirwana."
        subtitle="E-Mails werden übersehen, Aushänge am schwarzen Brett veralten und Kennzahlen aus dem letzten Meeting sind längst überholt. Unternehmen kommunizieren heute noch zu wenig sichtbar."
        problemsLabel="Wie es in vielen Unternehmen läuft"
        solutionsLabel="Was Digital Signage verändert"
        problems={[
          {
            title: "Wichtige Informationen erreichen Mitarbeitende nicht",
            description:
              "Ankündigungen per E-Mail gehen unter. Aushänge am schwarzen Brett werden ignoriert oder sind nach wenigen Tagen veraltet – die Botschaft kommt schlicht nicht an.",
          },
          {
            title: "Empfangsbereiche wirken unprofessionell",
            description:
              "Ein leerer Bildschirm, ein veraltetes Standby-Bild oder ein handgeschriebenes Hinweisschild hinterlässt bei Besucherinnen und Besuchern keinen guten ersten Eindruck.",
          },
          {
            title: "Kennzahlen und KPIs sind unsichtbar",
            description:
              "Verkaufszahlen, Produktionskennwerte oder Projektstatus existieren im System – aber im Alltag sieht sie niemand ausserhalb des monatlichen Meetings.",
          },
        ]}
        solutions={[
          {
            title: "Sichtbare Kommunikation, die wirklich ankommt",
            description:
              "Digitale Bildschirme in Pausenräumen, Korridoren und Arbeitsbereichen bringen Neuigkeiten, Ankündigungen und Ziele dorthin, wo Mitarbeitende täglich vorbeigehen.",
          },
          {
            title: "Empfang und Lobby, die einen starken ersten Eindruck machen",
            description:
              "Ein professionell gestalteter Empfangsbildschirm mit Willkommensbotschaft, Unternehmenspräsentation oder aktuellen Neuigkeiten signalisiert Qualität und Modernität.",
          },
          {
            title: "KPIs und Dashboards immer im Blick",
            description:
              "Relevante Kennzahlen werden live oder regelmässig aktualisiert auf Bildschirmen im Betrieb angezeigt – transparent, motivierend und ohne zusätzlichen Aufwand.",
          },
        ]}
      />

      <BenefitsSection
        eyebrow="Was Digital Signage im Unternehmen bringt"
        title="Interne Kommunikation, die gesehen wird."
        subtitle="Digitale Signage-Lösungen für Unternehmen stärken die interne Kommunikation, verbessern den Auftritt nach aussen und geben relevanten Informationen mehr Sichtbarkeit."
        benefits={[
          {
            icon: MonitorPlay,
            title: "Mitarbeiterinformationen sichtbar machen",
            description:
              "Neuigkeiten aus dem Unternehmen, Geburtstage, Jubiläen, Stellenausschreibungen oder Sicherheitshinweise – digital präsentiert, nicht per E-Mail versendet.",
          },
          {
            icon: Building2,
            title: "Professioneller Empfangsbereich",
            description:
              "Besucherinnen und Besucher werden mit einer personalisierten Willkommensbotschaft empfangen. Die Lobby kommuniziert Stärke, Qualität und Professionalität.",
          },
          {
            icon: BarChart2,
            title: "KPI- und Dashboard-Anzeigen",
            description:
              "Umsatzziele, Projektstatus oder Produktionszahlen erscheinen auf Bildschirmen im Betrieb – sichtbar für alle, motivierend und ohne zusätzliche IT-Komplexität.",
          },
          {
            icon: LayoutDashboard,
            title: "Zentrale Inhaltsverwaltung",
            description:
              "Alle Bildschirme im Unternehmen werden über ein einziges System gesteuert. Inhalte lassen sich standortübergreifend oder gezielt für einzelne Bereiche ausspielen.",
          },
          {
            icon: UserCheck,
            title: "Besucherinformationen und Wegweisung",
            description:
              "Meetingraumbelegungen, Wegweiser zu Abteilungen oder Parkplatzinformationen – digital angezeigt, immer aktuell und ohne Papieraushänge.",
          },
          {
            icon: BadgeCheck,
            title: "Persönliche Betreuung statt IT-Projekt",
            description:
              "Meister Signage plant, richtet ein und bleibt ansprechbar. Keine langen Ausschreibungsverfahren, kein IT-Rollout – einfach starten und loslegen.",
          },
        ]}
      />

      <ProcessSection
        eyebrow="So läuft die Zusammenarbeit"
        title="Vom ersten Gespräch bis zur laufenden Lösung."
        subtitle="Kein IT-Projekt, kein langer Rollout. Wir arbeiten pragmatisch und direkt – von der Planung bis zum laufenden Betrieb."
        steps={[
          {
            number: 1,
            title: "Ziele und Einsatzbereiche klären",
            description:
              "Wir besprechen, wo Bildschirme sinnvoll sind, welche Inhalte gezeigt werden sollen und was die konkrete Zielsetzung ist – intern, am Empfang oder beides.",
          },
          {
            number: 2,
            title: "Konzept und verständliches Angebot",
            description:
              "Sie erhalten ein klares Konzept mit Standortvorschlägen, Inhaltsstruktur und Kostenübersicht. Verständlich erklärt, ohne Fachjargon.",
          },
          {
            number: 3,
            title: "Installation und Inbetriebnahme",
            description:
              "Wir liefern, montieren und konfigurieren alle Displays. Die zuständigen Mitarbeitenden werden in der einfachen Bedienung eingeführt.",
          },
          {
            number: 4,
            title: "Laufende Betreuung und Weiterentwicklung",
            description:
              "Nach dem Start bleiben wir erreichbar – für Anpassungen, neue Inhalte, zusätzliche Standorte oder technische Fragen im Alltag.",
          },
        ]}
      />

      <FAQSection
        eyebrow="Häufige Fragen"
        title="Was Unternehmen vor dem Start fragen."
        subtitle="Die wichtigsten Antworten rund um Digital Signage für Unternehmen und interne Kommunikation."
        faqs={PAGE_FAQS}
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
        eyebrow="Projekt besprechen"
        title="Interne Kommunikation neu denken."
        subtitle="Kurz erklären, wie Ihr Unternehmen aufgestellt ist – wir zeigen Ihnen, wie Digital Signage konkret helfen kann."
        primaryCta={{ label: "Projekt besprechen", href: "/kontakt" }}
        secondaryCta={{ label: "Mehr über Meister Signage", href: "/ueber-uns" }}
      />

      <ContactSection
        eyebrow="Persönlicher Kontakt"
        title="Sie möchten Digital Signage für Ihr Unternehmen einrichten?"
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
