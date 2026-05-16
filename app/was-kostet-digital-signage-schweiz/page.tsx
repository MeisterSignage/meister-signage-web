import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import PricingQuickAnswerSection from "@/components/sections/PricingQuickAnswerSection";
import PricingTableSection from "@/components/sections/PricingTableSection";
import RentalPackagesSection from "@/components/sections/RentalPackagesSection";
import BuyVsRentSection from "@/components/sections/BuyVsRentSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import RecommendationSection from "@/components/sections/RecommendationSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import ContactSection from "@/components/sections/ContactSection";
import { Wrench, BadgeCheck, Truck, Palette, MapPin, Zap } from "lucide-react";
import InternalLinksSection from "@/components/sections/InternalLinksSection";
import JsonLd from "@/components/JsonLd";
import { faqSchema } from "@/lib/schema/faq";
import { breadcrumbSchema } from "@/lib/schema/breadcrumb";
import { serviceSchema } from "@/lib/schema/service";

const PAGE_FAQS = [
  {
    question: "Was kostet ein Digital-Signage-Display in der Schweiz?",
    answer:
      "Professionelle Displays beginnen je nach Modell bei rund CHF 1'299. Im Mietmodell ist der Einstieg ab CHF 129 pro Monat möglich.",
  },
  {
    question: "Was kostet Digital Signage monatlich?",
    answer:
      "Die Mietpreise starten bei CHF 129 pro Monat. Je nach Displaygrösse liegen die monatlichen Kosten zwischen CHF 129 und CHF 159. Die Lizenz ist im Mietmodell enthalten.",
  },
  {
    question: "Gibt es versteckte Kosten?",
    answer:
      "Wichtig sind Einrichtung, Versand, Softwarelizenz beim Kauf, Content-Erstellung und je nach Einsatz eine mögliche Installation. Diese Punkte sollten im Angebot transparent ausgewiesen werden.",
  },
  {
    question: "Ist Mieten oder Kaufen günstiger?",
    answer:
      "Für kurze oder flexible Einsätze ist Mieten meist sinnvoller. Bei langfristiger Nutzung über mehrere Jahre kann sich ein Kauf lohnen. Nach einer Mietphase können 30 % der bezahlten Mieten auf den Kaufpreis angerechnet werden.",
  },
  {
    question: "Lohnt sich Digital Signage für kleine Betriebe?",
    answer:
      "Ja, besonders wenn Inhalte regelmässig aktualisiert werden, Druckkosten reduziert werden sollen oder Angebote sichtbarer präsentiert werden sollen. Das Mietmodell macht den Einstieg auch für kleinere Budgets möglich.",
  },
];

const SITE_URL = "https://www.meister-signage.ch";
const PAGE_URL = `${SITE_URL}/was-kostet-digital-signage-schweiz`;

export const metadata: Metadata = {
  title: "Was kostet Digital Signage in der Schweiz? | Meister Signage",
  description:
    "Digital Signage Kosten in der Schweiz: Mietpreise, Kaufpreise, Lizenzkosten und Kostenfaktoren verständlich erklärt. Mit Preisübersicht für KMU.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    locale: "de_CH",
    url: PAGE_URL,
    siteName: "Meister Signage",
    title: "Was kostet Digital Signage in der Schweiz? | Meister Signage",
    description: "Digital Signage Kosten in der Schweiz: Mietpreise, Kaufpreise, Lizenzkosten und Kostenfaktoren verständlich erklärt.",
    images: [{ url: `${SITE_URL}/og/meister-signage-og.png`, width: 1200, height: 630, alt: "Digital Signage Kosten Schweiz – Meister Signage" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Was kostet Digital Signage in der Schweiz? | Meister Signage",
    description: "Mietpreise, Kaufpreise, Lizenzkosten und Kostenfaktoren für Digital Signage in der Schweiz.",
    images: [`${SITE_URL}/og/meister-signage-og.png`],
  },
};

const RENTAL_PACKAGES = [
  {
    name: "Spark 3",
    size: '32" Digital Signage Screen',
    price: 129,
    image: "/images/products/Spark3-Design.webp",
    benefits: ["inkl. Lizenz, Cloud-Steuerung und Support"],
  },
  {
    name: "Spark 4",
    size: '43" Digital Signage Screen',
    price: 139,
    image: "/images/products/Spark4-Design.webp",
    benefits: ["inkl. Lizenz, Cloud-Steuerung und Support"],
  },
  {
    name: "Spark 5",
    size: '50" Digital Signage Screen',
    price: 149,
    badge: "Populär",
    featured: true,
    image: "/images/products/Spark5-Design.webp",
    benefits: ["inkl. Lizenz, Cloud-Steuerung und Support"],
  },
  {
    name: "Spark Q",
    size: '33" Digital Signage Screen (quadratisch)',
    price: 159,
    badge: "Populär",
    featured: true,
    image: "/images/products/SparkQ-Design.webp",
    benefits: ["inkl. Lizenz, Cloud-Steuerung und Support"],
  },
];

export default function WasKostetDigitalSignagePage() {
  return (
    <>
      {/* Structured data */}
      <JsonLd schema={faqSchema(PAGE_FAQS) as Record<string, unknown>} />
      <JsonLd schema={breadcrumbSchema([
        { name: "Home",         path: "/" },
        { name: "Kostenübersicht", path: "/was-kostet-digital-signage-schweiz" },
      ]) as Record<string, unknown>} />
      <JsonLd schema={serviceSchema({
        name: "Digital Signage Kosten Schweiz",
        description: "Transparente Kostenübersicht für Digital-Signage-Lösungen in der Schweiz – Kauf, Miete, Lizenz und Einrichtung.",
        url: "https://www.meister-signage.ch/was-kostet-digital-signage-schweiz",
        serviceType: "Digital Signage Beratung",
      }) as Record<string, unknown>} />

      <HeroSection
        eyebrow="Digital Signage Kosten Schweiz"
        title="Was kostet Digital Signage in der Schweiz?"
        subtitle="Eine klare Übersicht zu Mietpreisen, Kaufpreisen, Lizenzkosten und möglichen Zusatzkosten – damit Sie die passende Lösung für Ihren Betrieb fundiert planen können."
        bullets={[
          "Mietmodelle ab CHF 129 pro Monat",
          "Kaufpreise ab CHF 1'299 pro Display",
          "Lizenz-, Setup- und Betriebskosten transparent erklärt",
        ]}
        primaryCta={{ label: "Beratung anfragen", href: "/kontakt" }}
        secondaryCta={{ label: "Mietpreise ansehen", href: "#pakete" }}
      />

      {/* 2 — Kurzantwort */}
      <PricingQuickAnswerSection
        title="Digital Signage Kosten – die Kurzantwort"
        text="Digital Signage kostet in der Schweiz je nach Modell ab CHF 129 pro Monat im Mietmodell oder ab CHF 1'299 beim Kauf eines professionellen Displays. Hinzu kommen je nach Modell Einrichtung, Versand, Softwarelizenz, Content-Erstellung oder Installation."
        facts={[
          {
            metric: "ab CHF 129/Mo.",
            label: "Miete",
            description: "inklusive Lizenz, Cloud-Steuerung und Support",
          },
          {
            metric: "ab CHF 1'299",
            label: "Kauf",
            description: "für professionelle Digital-Signage-Displays",
          },
          {
            metric: "ab CHF 149",
            label: "Einrichtung",
            description: "einmalig für Vorkonfiguration und Inbetriebnahme",
          },
        ]}
      />

      {/* 3 — Kaufpreise */}
      <PricingTableSection
        eyebrow="Kaufen"
        title="Digital Signage kaufen – Preisübersicht"
        subtitle="Beim Kauf gehört das Display Ihnen. Das lohnt sich vor allem bei langfristigem Einsatz, mehreren Standorten oder wenn Sie volle Eigentümerschaft bevorzugen."
        rows={[
          {
            model: "Spark 3",
            size: "32\" Full HD",
            price: "CHF 1'299",
            suitedFor: "Menüboards und Empfang",
          },
          {
            model: "Spark 4",
            size: "43\" 4K UHD",
            price: "CHF 1'499",
            suitedFor: "Gastronomie und Retail",
          },
          {
            model: "Spark 5",
            size: "50\" 4K UHD",
            price: "CHF 1'599",
            suitedFor: "Schaufenster und grössere Flächen",
          },
          {
            model: "Spark Q+",
            size: "33\" quadratisch 4K UHD",
            price: "CHF 1'699",
            suitedFor: "Spezialinstallationen",
          },
        ]}
        note="Alle Preise verstehen sich als Richtwerte exkl. MwSt. Versandkosten von ca. CHF 60 pro Display können zusätzlich anfallen. Beim Kauf nach einer Mietphase können 30 % der bezahlten Monatsmieten exkl. Einrichtungsgebühr auf den Kaufpreis angerechnet werden."
      />

      {/* 4 — Mietpreise */}
      <RentalPackagesSection
        eyebrow="Mieten"
        title="Digital Signage mieten – Preisübersicht"
        subtitle="Das Mietmodell eignet sich besonders für KMU, Events, Gastronomie, Retail und temporäre Einsätze. Die Kosten bleiben planbar und die Einstiegshürde tief."
        packages={RENTAL_PACKAGES}
        ctaLabel="Anfrage starten"
        ctaHref="/kontakt"
        note="Alle Preise exkl. MwSt. · Einmalige Einrichtungsgebühr: CHF 149 für Vorkonfiguration und Inbetriebnahme."
      />

      {/* 5 — Kaufen oder Mieten */}
      <BuyVsRentSection
        eyebrow="Kaufen oder mieten"
        title="Welche Variante lohnt sich für Ihren Betrieb?"
        subtitle="Die richtige Entscheidung hängt vor allem von Nutzungsdauer, Anzahl Screens, Budget und gewünschter Flexibilität ab."
        buyLabel="Kaufen lohnt sich, wenn:"
        rentLabel="Mieten lohnt sich, wenn:"
        buyReasons={[
          "Sie die Displays länger als drei Jahre einsetzen möchten",
          "mehrere Standorte ausgestattet werden sollen",
          "Sie Eigentum bevorzugen",
          "die Lösung langfristig fest eingeplant ist",
        ]}
        rentReasons={[
          "Sie flexibel bleiben möchten",
          "Sie Digital Signage zuerst testen wollen",
          "Sie geringe Anfangskosten bevorzugen",
          "die Kosten monatlich planbar bleiben sollen",
        ]}
      />

      {/* 6 — Kostenfaktoren */}
      <BenefitsSection
        eyebrow="Kostenfaktoren"
        title="Welche Zusatzkosten sollten Sie einplanen?"
        subtitle="Neben dem Displaypreis können je nach Projekt weitere Kosten entstehen. Wichtig ist, diese von Anfang an transparent zu betrachten."
        benefits={[
          {
            icon: Wrench,
            title: "Einrichtung",
            description:
              "Vorkonfiguration, Inbetriebnahme und Anpassung an den geplanten Einsatz. Ab CHF 149 einmalig.",
          },
          {
            icon: BadgeCheck,
            title: "Softwarelizenz",
            description:
              "Beim Kauf können Lizenzkosten ab CHF 180 pro Jahr oder ab CHF 15 pro Monat anfallen. Im Mietmodell ist die Lizenz enthalten.",
          },
          {
            icon: Truck,
            title: "Versand",
            description:
              "Pro Display können Versandkosten von ca. CHF 60 entstehen, abhängig von Standort und Bestellgrösse.",
          },
          {
            icon: Palette,
            title: "Content-Erstellung",
            description:
              "Falls keine eigenen Vorlagen vorhanden sind, können Inhalte oder Designvorlagen erstellt werden.",
          },
          {
            icon: MapPin,
            title: "Installation",
            description:
              "Je nach Einsatzort kann eine einfache Selbstmontage reichen oder eine Unterstützung vor Ort sinnvoll sein.",
          },
          {
            icon: Zap,
            title: "Betriebskosten",
            description:
              "Stromverbrauch und laufende Anpassungen sollten bei langfristiger Nutzung berücksichtigt werden.",
          },
        ]}
      />

      {/* 7 — Empfehlung */}
      <RecommendationSection
        title="Unsere Empfehlung für KMU"
        text="Für viele kleinere und mittlere Betriebe ist ein Mietmodell der einfachste Einstieg. Es reduziert die Anfangsinvestition, beinhaltet die wichtigsten Leistungen und erlaubt es, Digital Signage im Alltag zu testen. Wenn sich die Lösung bewährt, kann später erweitert oder ein Kauf geprüft werden."
        ctaLabel="Unverbindlich beraten lassen"
        ctaHref="/kontakt"
      />

      {/* 8 — FAQ */}
      <FAQSection
        eyebrow="Häufige Fragen"
        title="Häufige Fragen zu Digital Signage Kosten."
        subtitle="Klare Antworten zu Preisen, Modellen und Entscheidungshilfen."
        faqs={PAGE_FAQS}
      />

      <InternalLinksSection
        eyebrow="Weitere Seiten"
        links={[
          { label: "Digital Signage mieten",   href: "/digital-signage-mieten" },
          { label: "Digital Signage Schweiz",  href: "/digital-signage-schweiz" },
          { label: "Beratung anfragen",        href: "/kontakt" },
        ]}
      />

      {/* 9 — CTA */}
      <CTASection
        eyebrow="Kosten einschätzen"
        title="Sie möchten wissen, was Digital Signage für Ihren Betrieb kostet?"
        subtitle="Schildern Sie kurz Ihren Einsatz. Wir zeigen Ihnen, welche Variante sinnvoll ist und welche Kosten realistisch einzuplanen sind."
        primaryCta={{ label: "Beratung anfragen", href: "/kontakt" }}
        secondaryCta={{ label: "Mietpreise ansehen", href: "/digital-signage-mieten#pakete" }}
      />

      {/* 10 — Contact */}
      <ContactSection
        eyebrow="Persönlicher Kontakt"
        title="Sie möchten die Kosten für Ihre konkrete Situation besprechen?"
        subtitle="Schreiben Sie kurz, was Sie vorhaben. Wir rechnen Ihnen transparent durch, was sinnvoll und was realistisch ist."
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
