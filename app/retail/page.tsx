import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSolutionSection from "@/components/sections/ProblemSolutionSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import ProcessSection from "@/components/sections/ProcessSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import ContactSection from "@/components/sections/ContactSection";
import { Tag, TrendingUp, BadgeCheck, MapPin, Zap, LayoutTemplate } from "lucide-react";
import InternalLinksSection from "@/components/sections/InternalLinksSection";
import JsonLd from "@/components/JsonLd";
import { faqSchema } from "@/lib/schema/faq";
import { breadcrumbSchema } from "@/lib/schema/breadcrumb";
import { serviceSchema } from "@/lib/schema/service";

const PAGE_FAQS = [
  {
    question: "Kann ich Aktionen selbst schnell anpassen?",
    answer:
      "Ja. Die Lösung wird so eingerichtet, dass Sie oder Ihr Team Inhalte jederzeit selbst ändern können – auch kurzfristig, auch ohne IT-Kenntnisse.",
  },
  {
    question: "Was kostet eine Digital-Signage-Lösung für ein Geschäft?",
    answer:
      "Das hängt von Anzahl Displays, Standorten und gewünschtem Funktionsumfang ab. Ein schlanker Einstieg mit einem oder zwei Bildschirmen ist bereits mit überschaubarem Budget möglich. Wir erstellen gerne ein konkretes Angebot.",
  },
  {
    question: "Kann ich verschiedene Inhalte für verschiedene Bereiche zeigen?",
    answer:
      "Ja. Verschiedene Displays können unterschiedliche Inhalte anzeigen – zum Beispiel Eingangsbereich, Kassenzone und Schaufenster je separat bespielt werden.",
  },
  {
    question: "Brauche ich dafür besondere Technik oder IT?",
    answer:
      "Nein. In den meisten Fällen genügt ein normaler WLAN-Anschluss. Wir planen die Lösung so, dass sie ohne IT-Abteilung funktioniert.",
  },
  {
    question: "Was passiert, wenn etwas nicht funktioniert?",
    answer:
      "Sie erreichen uns direkt – kein Ticketsystem, keine anonyme Hotline. Als lokaler Anbieter aus der Zentralschweiz reagieren wir schnell und unkompliziert.",
  },
];

export const metadata: Metadata = {
  title: "Digital Signage Retail | Meister Signage",
  description:
    "Digital-Signage-Lösungen für Retail und Handel. Aktionen, Produkte und Informationen flexibel sichtbar machen – persönlich geplant und schlüsselfertig umgesetzt.",
};

export default function RetailPage() {
  return (
    <>
      {/* Structured data */}
      <JsonLd schema={faqSchema(PAGE_FAQS) as Record<string, unknown>} />
      <JsonLd schema={breadcrumbSchema([
        { name: "Home",            path: "/" },
        { name: "Retail & Handel", path: "/retail" },
      ]) as Record<string, unknown>} />
      <JsonLd schema={serviceSchema({
        name: "Digital Signage für Retail und Handel",
        description: "Digitale Beschilderung für Aktionen, Produktinformationen und Markenkommunikation am Point of Sale in der Schweiz.",
        url: "https://www.meister-signage.ch/retail",
        serviceType: "Digital Signage Retail",
      }) as Record<string, unknown>} />

      <HeroSection
        eyebrow="Digital Signage für Retail und Handel"
        title="Digital Signage für Retail und Handel."
        subtitle="Aktionen, Produkte und Markenbotschaften flexibel am Point of Sale sichtbar machen – ohne aufwändigen Druckprozess und ohne komplizierte IT."
        bullets={[
          "Aktionen und Angebote sofort anpassen und sichtbar machen",
          "Einheitlicher Markenauftritt im gesamten Geschäft",
          "Kein Nachdrucken – Inhalte jederzeit aktualisierbar",
        ]}
        primaryCta={{ label: "Beratung anfragen", href: "/kontakt" }}
        secondaryCta={{ label: "Alle Lösungen ansehen", href: "/loesungen" }}
      />

      <ProblemSolutionSection
        eyebrow="Vom Druckprozess zur flexiblen Lösung"
        title="POS-Materialien kosten Zeit, Geld und wirken schnell veraltet."
        subtitle="Im Handel müssen Inhalte schnell reagieren – auf Aktionen, Saisonwechsel oder neue Produkte. Gedruckte Materialien kommen da oft nicht mit."
        problemsLabel="Was heute oft passiert"
        solutionsLabel="Mit Digital Signage einfacher"
        problems={[
          {
            title: "Aktionen kommen zu spät ans Verkaufspunkt",
            description:
              "Bis Plakate, Preisschilder und Aufsteller gedruckt und verteilt sind, ist die Aktion oft schon halbvorbei.",
          },
          {
            title: "Gedruckte Materialien stapeln sich",
            description:
              "Falsch bestellte Mengen, veraltete Aufsteller und übrig gebliebene Displays kosten Lager, Geld und Nerven.",
          },
          {
            title: "Kein einheitlicher Auftritt im Geschäft",
            description:
              "Verschiedene Formate, unterschiedliche Schriften und gemischte Farben hinterlassen einen unruhigen Eindruck.",
          },
        ]}
        solutions={[
          {
            title: "Inhalte sofort am gesamten POS aktualisieren",
            description:
              "Neue Aktion, neuer Preis, neues Produkt – Änderungen sind in Minuten sichtbar, ohne Druckerei und ohne Wartezeit.",
          },
          {
            title: "Kein Druck, kein Lager, kein Ausschuss",
            description:
              "Digitale Inhalte sind flexibel und kosten kein Material. Was nicht mehr gebraucht wird, wird einfach gelöscht.",
          },
          {
            title: "Konsistenter Markenauftritt überall",
            description:
              "Alle Bildschirme zeigen denselben Stil, dieselben Farben und dieselbe Sprache – automatisch und ohne Aufwand.",
          },
        ]}
      />

      <BenefitsSection
        eyebrow="Was Sie gewinnen"
        title="Flexibler Auftritt am POS – mit weniger Aufwand."
        subtitle="Digital Signage im Retail gibt Ihnen die Kontrolle über Ihre Inhalte zurück – schnell, einheitlich und kosteneffizient."
        benefits={[
          {
            icon: Tag,
            title: "Aktionen schnell sichtbar machen",
            description:
              "Neue Angebote, Rabattaktionen oder saisonale Highlights lassen sich in Minuten auf allen Displays aktualisieren.",
          },
          {
            icon: LayoutTemplate,
            title: "Einheitliches Markenbild",
            description:
              "Alle Bildschirme im Geschäft kommunizieren konsistent – gleiche Schriften, gleiche Farben, gleicher Stil.",
          },
          {
            icon: TrendingUp,
            title: "Produkte gezielt in Szene setzen",
            description:
              "Neuheiten, Bestseller oder Randsortiment können bewusst hervorgehoben werden – am richtigen Ort, zur richtigen Zeit.",
          },
          {
            icon: BadgeCheck,
            title: "Professioneller Eindruck beim Kunden",
            description:
              "Gepflegte, aktuelle Displays stärken das Markenvertrauen und hinterlassen einen hochwertigen Eindruck.",
          },
          {
            icon: Zap,
            title: "Einfache Bedienung im Alltag",
            description:
              "Inhalte werden so vorbereitet, dass Ihr Team sie selbst ändern kann – ohne IT-Kenntnisse, ohne Schulungsaufwand.",
          },
          {
            icon: MapPin,
            title: "Lokale Betreuung aus der Zentralschweiz",
            description:
              "Persönlicher Ansprechpartner, kurze Wege und Unterstützung direkt vor Ort – wann immer Sie ihn brauchen.",
          },
        ]}
      />

      <ProcessSection
        eyebrow="So läuft die Zusammenarbeit"
        title="Von der ersten Idee bis zum laufenden Display – klar und unkompliziert."
        subtitle="Sie müssen keine Technikspezialisten sein. Wir begleiten Sie von der Bedarfsanalyse bis zum laufenden Betrieb."
        steps={[
          {
            number: 1,
            title: "Standort und Bedarf verstehen",
            description:
              "Wir klären gemeinsam, welche Bereiche im Geschäft Digital Signage brauchen, welche Inhalte gezeigt werden sollen und was im Alltag wirklich funktionieren muss.",
          },
          {
            number: 2,
            title: "Displays und Inhalte planen",
            description:
              "Passende Bildschirmgrössen, Positionen und Inhaltsstrukturen werden so geplant, dass sie zu Ihrem Laden und Ihrer Marke passen.",
          },
          {
            number: 3,
            title: "Installieren, einrichten und übergeben",
            description:
              "Wir kümmern uns um Montage, Einrichtung und Übergabe an Ihr Team – sauber, pünktlich und ohne Überraschungen.",
          },
          {
            number: 4,
            title: "Betreuung und Weiterentwicklung",
            description:
              "Neue Aktionen, Saisonwechsel oder zusätzliche Displays – wir sind erreichbar und passen die Lösung bei Bedarf an.",
          },
        ]}
      />

      <FAQSection
        eyebrow="Häufige Fragen"
        title="Was Retail-Betriebe vor dem Start wissen wollen."
        subtitle="Die wichtigsten Antworten für Geschäfte und Handelsbetriebe, die Digital Signage einsetzen möchten."
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
        title="Digital Signage für Ihren Retail-Betrieb planen?"
        subtitle="Kurz erklären, was Sie vorhaben – wir zeigen Ihnen, wie eine passende Lösung für Ihr Geschäft aussehen kann."
        primaryCta={{ label: "Beratung anfragen", href: "/kontakt" }}
        secondaryCta={{ label: "Mehr über Meister Signage", href: "/ueber-uns" }}
      />

      <ContactSection
        eyebrow="Persönlicher Kontakt"
        title="Sie möchten wissen, ob Digital Signage zu Ihrem Geschäft passt?"
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
