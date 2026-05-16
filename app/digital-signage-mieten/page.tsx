import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import RentalPackagesSection from "@/components/sections/RentalPackagesSection";
import ProblemSolutionSection from "@/components/sections/ProblemSolutionSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import ProcessSection from "@/components/sections/ProcessSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import ContactSection from "@/components/sections/ContactSection";
import { Banknote, CalendarRange, Zap, BadgeCheck, MonitorPlay, UserCheck } from "lucide-react";
import InternalLinksSection from "@/components/sections/InternalLinksSection";
import JsonLd from "@/components/JsonLd";
import { faqSchema } from "@/lib/schema/faq";
import { breadcrumbSchema } from "@/lib/schema/breadcrumb";
import { serviceSchema } from "@/lib/schema/service";

const PAGE_FAQS = [
  {
    question: "Was ist im monatlichen Preis enthalten?",
    answer:
      "Die Pakete beinhalten den jeweiligen Digital-Signage-Screen sowie die Lizenzgebühren für die Nutzung. Je nach Projekt können zusätzliche Setup- oder Serviceleistungen anfallen – das klären wir transparent im Voraus.",
  },
  {
    question: "Gibt es eine Setup-Gebühr?",
    answer:
      "Je nach Anwendung kann eine einmalige Setup-Gebühr für Vorbereitung, Einrichtung und individuelle Konfiguration anfallen. Das wird im Angebot ausgewiesen.",
  },
  {
    question: "Für welche Einsätze eignet sich die Miete?",
    answer:
      "Besonders bewährt hat sich die Miete für Events, Messen, Pop-ups, saisonale Aktionen, Gastronomie, Retail und temporäre Informationsflächen – überall dort, wo Flexibilität wichtiger ist als Eigentum.",
  },
  {
    question: "Kann ich später kaufen statt mieten?",
    answer:
      "Das kann individuell besprochen werden. Die Miete eignet sich auch gut, um Digital Signage zuerst im Alltag zu testen, bevor eine langfristige Kaufentscheidung getroffen wird.",
  },
  {
    question: "Unterstützt Meister Signage bei der Einrichtung?",
    answer:
      "Ja. Die Lösung wird so vorbereitet, dass sie verständlich eingesetzt werden kann. Auf Wunsch unterstützen wir persönlich vor Ort oder remote bei der Inbetriebnahme.",
  },
];

const SITE_URL = "https://www.meister-signage.ch";
const PAGE_URL = `${SITE_URL}/digital-signage-mieten`;

export const metadata: Metadata = {
  title: "Digital Signage mieten | Meister Signage",
  description:
    "Digital-Signage-Screens flexibel mieten – inklusive Lizenz, einfacher Handhabung und persönlicher Betreuung. Ideal für Events, Retail, Gastronomie und temporäre Einsätze.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    locale: "de_CH",
    url: PAGE_URL,
    siteName: "Meister Signage",
    title: "Digital Signage mieten | Meister Signage",
    description: "Digital-Signage-Screens flexibel mieten – inklusive Lizenz, einfacher Handhabung und persönlicher Betreuung.",
    images: [{ url: `${SITE_URL}/og/meister-signage-og.png`, width: 1200, height: 630, alt: "Digital Signage mieten – Meister Signage" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Signage mieten | Meister Signage",
    description: "Digital-Signage-Screens flexibel mieten – inklusive Lizenz und persönlicher Betreuung.",
    images: [`${SITE_URL}/og/meister-signage-og.png`],
  },
};

const PACKAGES = [
  {
    name: "Spark 3",
    size: '32" Digital Signage Screen',
    price: 129,
    image: "/images/products/Spark3-Design.webp",
    benefits: [
      "Software-Lizenz inklusive",
      "Plug & Play in 15 Minuten",
      "Persönliche Einrichtungshilfe",
    ],
  },
  {
    name: "Spark 4",
    size: '43" Digital Signage Screen',
    price: 139,
    image: "/images/products/Spark4-Design.webp",
    benefits: [
      "Software-Lizenz inklusive",
      "Plug & Play in 15 Minuten",
      "Persönliche Einrichtungshilfe",
    ],
  },
  {
    name: "Spark 5",
    size: '50" Digital Signage Screen',
    price: 149,
    badge: "Populär",
    featured: true,
    image: "/images/products/Spark5-Design.webp",
    benefits: [
      "Software-Lizenz inklusive",
      "Plug & Play in 15 Minuten",
      "Persönliche Einrichtungshilfe",
    ],
  },
  {
    name: "Spark Q",
    size: '33" Querformat Screen',
    price: 159,
    badge: "Populär",
    featured: true,
    image: "/images/products/SparkQ-Design.webp",
    benefits: [
      "Software-Lizenz inklusive",
      "Plug & Play in 15 Minuten",
      "Persönliche Einrichtungshilfe",
    ],
  },
];

export default function DigitalSignageMietenPage() {
  return (
    <>
      {/* Structured data */}
      <JsonLd schema={faqSchema(PAGE_FAQS) as Record<string, unknown>} />
      <JsonLd schema={breadcrumbSchema([
        { name: "Home",                  path: "/" },
        { name: "Digital Signage mieten", path: "/digital-signage-mieten" },
      ]) as Record<string, unknown>} />
      <JsonLd schema={serviceSchema({
        name: "Digital Signage mieten",
        description: "Flexible Bildschirmmiete für Events, Messen, Pop-ups und temporäre Einsätze – inklusive Einrichtung, Lizenz und persönlicher Betreuung.",
        url: "https://www.meister-signage.ch/digital-signage-mieten",
        serviceType: "Bildschirmvermietung",
      }) as Record<string, unknown>} />

      <HeroSection
        eyebrow="Digital Signage mieten"
        title="Digital Signage mieten – flexibel, einfach und persönlich betreut."
        subtitle="Ob Event, Messe, Pop-up oder temporäre Aktion: Mit gemieteten Digital-Signage-Screens bleiben Sie flexibel und präsentieren Inhalte professionell, ohne direkt in eigene Hardware investieren zu müssen."
        bullets={[
          "Flexible Mietlösungen für temporäre Einsätze",
          "Inklusive Lizenzgebühren und einfacher Bedienung",
          "Persönliche Unterstützung von der Auswahl bis zum Einsatz",
        ]}
        primaryCta={{ label: "Beratung anfragen", href: "/kontakt" }}
        secondaryCta={{ label: "Pakete ansehen", href: "#pakete" }}
      />

      <RentalPackagesSection
        eyebrow="Digital Signage mieten"
        title={"Transparente Preise.\nVolle Leistung."}
        subtitle="Unsere Spark-Pakete bieten professionelle Digital-Signage-Lösungen zum monatlichen Fixpreis – inklusive Software, Support und Service."
        packages={PACKAGES}
        ctaLabel="Anfrage starten"
        ctaHref="/kontakt"
      />

      <ProblemSolutionSection
        eyebrow="Mieten statt kaufen"
        title="Ideal, wenn Sie flexibel bleiben möchten."
        subtitle="Nicht jeder Einsatz rechtfertigt eine langfristige Investition. Gerade bei temporären Projekten ist Mieten oft der pragmatischere Weg."
        problemsLabel="Was beim Kauf oft bremst"
        solutionsLabel="Was Mieten stattdessen bietet"
        problems={[
          {
            title: "Hohe Anfangsinvestition",
            description:
              "Beim Kauf entstehen sofort Kosten für Hardware, Software und Einrichtung – noch bevor klar ist, ob die Lösung im Alltag wirklich passt.",
          },
          {
            title: "Unklare Nutzungsdauer",
            description:
              "Bei Events, Messen oder saisonalen Aktionen ist oft nicht von Anfang an klar, wie lange die Lösung wirklich benötigt wird.",
          },
          {
            title: "Technischer Aufwand",
            description:
              "Auswahl, Einrichtung und laufender Betrieb sollen funktionieren – ohne intern zusätzliche IT-Komplexität zu schaffen.",
          },
        ]}
        solutions={[
          {
            title: "Monatlich planbare Kosten",
            description:
              "Sie mieten den passenden Screen zum fixen Monatspreis und behalten die Investition überschaubar – ohne Kapitalbindung.",
          },
          {
            title: "Flexibel einsetzbar",
            description:
              "Ideal für temporäre Kampagnen, Veranstaltungen, Pop-ups oder als Test vor einer langfristigen Kaufentscheidung.",
          },
          {
            title: "Persönlich unterstützt",
            description:
              "Meister Signage begleitet Sie bei Auswahl, Einrichtung und Anwendung – direkt, ohne Hotline oder Ticketsystem.",
          },
        ]}
      />

      <BenefitsSection
        eyebrow="Vorteile der Miete"
        title="Professionell sichtbar sein, ohne sich langfristig zu binden."
        subtitle="Gemietete Digital-Signage-Screens eignen sich für Unternehmen, die schnell, flexibel und mit überschaubarem Aufwand starten möchten."
        benefits={[
          {
            icon: Banknote,
            title: "Geringere Anfangskosten",
            description:
              "Kein sofortiger Kapitaleinsatz für Hardware. Sie starten mit einem monatlichen Mietbetrag und können später skalieren.",
          },
          {
            icon: CalendarRange,
            title: "Flexibel erweiterbar",
            description:
              "Screens können je nach Einsatz, Fläche oder Projektanforderung angepasst oder ergänzt werden – ohne gebundenes Inventar.",
          },
          {
            icon: Zap,
            title: "Ideal für Events und Kampagnen",
            description:
              "Für Messen, Veranstaltungen, saisonale Promotionen oder Pop-ups: professioneller Auftritt ohne dauerhaften Aufwand.",
          },
          {
            icon: BadgeCheck,
            title: "Inklusive Lizenz",
            description:
              "Die monatlichen Pakete beinhalten die Lizenzgebühren. Keine versteckten Zusatzkosten für Software oder Nutzungsrechte.",
          },
          {
            icon: MonitorPlay,
            title: "Einfache Handhabung",
            description:
              "Die Lösungen sind so vorbereitet, dass sie im Alltag ohne technische Vorkenntnisse verständlich eingesetzt werden können.",
          },
          {
            icon: UserCheck,
            title: "Persönliche Betreuung",
            description:
              "Sie erhalten direkte Unterstützung statt einer anonymen Standardlösung – von der Auswahl bis zum laufenden Betrieb.",
          },
        ]}
      />

      <ProcessSection
        eyebrow="So läuft die Miete ab"
        title="Von der Anfrage bis zum Einsatz klar geführt."
        subtitle="Kein komplizierter Prozess. Wir klären gemeinsam den Bedarf und kümmern uns um den Rest."
        steps={[
          {
            number: 1,
            title: "Bedarf klären",
            description:
              "Wir besprechen Einsatzort, gewünschte Laufzeit, Bildschirmgrösse und welche Inhalte gezeigt werden sollen.",
          },
          {
            number: 2,
            title: "Passendes Paket wählen",
            description:
              "Gemeinsam wählen wir den passenden Screen und stimmen die Lösung auf Ihren Einsatz ab.",
          },
          {
            number: 3,
            title: "Einrichtung vorbereiten",
            description:
              "Die Lösung wird konfiguriert und auf Ihren spezifischen Einsatz vorbereitet – betriebsbereit ab dem ersten Tag.",
          },
          {
            number: 4,
            title: "Einsetzen und betreuen",
            description:
              "Sie nutzen die Lösung flexibel. Bei Fragen oder Anpassungen bleiben wir direkt erreichbar.",
          },
        ]}
      />

      <FAQSection
        eyebrow="Häufige Fragen"
        title="Was Sie zur Miete wissen sollten."
        subtitle="Antworten auf die häufigsten Fragen rund um die Digital-Signage-Mietpakete."
        faqs={PAGE_FAQS}
      />

      <InternalLinksSection
        eyebrow="Weitere Seiten"
        links={[
          { label: "Kosten & Preise",          href: "/was-kostet-digital-signage-schweiz" },
          { label: "Events",                   href: "/events" },
          { label: "Gastronomie",              href: "/gastronomie" },
          { label: "Beratung anfragen",        href: "/kontakt" },
        ]}
      />

      <CTASection
        eyebrow="Mietlösung anfragen"
        title="Sie möchten Digital Signage zuerst flexibel einsetzen?"
        subtitle="Schildern Sie kurz Ihren Einsatz. Wir zeigen Ihnen, welches Mietpaket sinnvoll ist und wie der Start unkompliziert gelingt."
        primaryCta={{ label: "Beratung anfragen", href: "/kontakt" }}
        secondaryCta={{ label: "Kontakt aufnehmen", href: "/kontakt" }}
      />

      <ContactSection
        eyebrow="Persönlicher Kontakt"
        title="Sie möchten Digital Signage mieten?"
        subtitle="Schreiben Sie kurz, was Sie vorhaben und welchen Screen-Typ Sie im Einsatz sehen. Wir melden uns persönlich."
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
