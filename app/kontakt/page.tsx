import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import ContactFormSection from "@/components/sections/ContactFormSection";
import ContactSection from "@/components/sections/ContactSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";

const SITE_URL = "https://www.meister-signage.ch";
const PAGE_URL = `${SITE_URL}/kontakt`;

export const metadata: Metadata = {
  title: "Kontakt – Digital Signage Beratung Schweiz | Meister Signage",
  description:
    "Kontaktieren Sie Meister Signage für persönliche Beratung rund um Digital Signage, Displays und moderne Kommunikationslösungen.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    locale: "de_CH",
    url: PAGE_URL,
    siteName: "Meister Signage",
    title: "Kontakt – Digital Signage Beratung Schweiz | Meister Signage",
    description: "Persönliche Beratung rund um Digital Signage. Direkt mit Chris Meister sprechen – kein Ticketsystem, kein Callcenter.",
    images: [{ url: `${SITE_URL}/og/meister-signage-og.png`, width: 1200, height: 630, alt: "Meister Signage Kontakt" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kontakt – Digital Signage Beratung Schweiz | Meister Signage",
    description: "Persönliche Beratung rund um Digital Signage. Direkt erreichbar – kein Ticketsystem.",
    images: [`${SITE_URL}/og/meister-signage-og.png`],
  },
};

export default function KontaktPage() {
  return (
    <>
      <HeroSection
        eyebrow="Kontakt"
        title="Lassen Sie uns gemeinsam die passende Lösung planen."
        subtitle="Kein Formular-Dschungel, kein Callcenter. Schreiben Sie kurz, was Sie vorhaben – wir melden uns persönlich und unkompliziert."
        bullets={[
          "Direkter Kontakt zu Chris Meister",
          "Antwort in der Regel innerhalb eines Werktages",
          "Unverbindliche Erstberatung – ohne Verkaufsdruck",
        ]}
        primaryCta={{ label: "Zum Formular", href: "#kontaktformular" }}
        secondaryCta={{ label: "Direkt anrufen", href: "tel:+41764526687" }}
      />

      {/* Anchor for smooth scroll */}
      <div id="kontaktformular">
        <ContactFormSection />
      </div>

      <ContactSection
        eyebrow="Persönlicher Ansprechpartner"
        title="Sie sprechen direkt mit Chris Meister."
        subtitle="Kein Zwischenhändler, kein Ticketsystem. Als Gründer von Meister Signage ist Chris Ihr direkter Ansprechpartner – von der ersten Anfrage bis zur laufenden Betreuung."
        contactName="Chris Meister"
        role="Gründer, Meister Signage"
        phone="+41 76 452 66 87"
        email="chris@meister-signage.ch"
        whatsapp="https://wa.me/41764526687"
        imageSrc="/images/Chris-Meister.png"
      />

      <FAQSection
        eyebrow="Häufige Fragen zum Kontakt"
        title="Was Sie vor der Anfrage wissen sollten."
        subtitle="Kurze Antworten auf die häufigsten Fragen rund um Beratung, Angebote und die Zusammenarbeit."
        faqs={[
          {
            question: "Wie schnell erhalte ich eine Rückmeldung?",
            answer:
              "In der Regel melden wir uns innerhalb eines Werktages. Dringende Anfragen können Sie auch direkt per Telefon oder WhatsApp stellen.",
          },
          {
            question: "Ist die Erstberatung kostenlos?",
            answer:
              "Ja. Das erste Gespräch ist unverbindlich und kostenlos. Wir klären gemeinsam, ob und wie Digital Signage für Ihren Betrieb sinnvoll ist – ohne Verkaufsdruck.",
          },
          {
            question: "Kann ich auch direkt anrufen?",
            answer:
              "Ja, jederzeit. Unter +41 76 452 66 87 erreichen Sie Chris Meister direkt. Alternativ steht auch WhatsApp zur Verfügung.",
          },
          {
            question: "Für welche Projekte können Sie eine Beratung anbieten?",
            answer:
              "Für alle Anwendungen rund um Digital Signage: Gastronomie, Retail, Events, Hotellerie, Unternehmen oder Bildschirmvermietung. Auch bei sehr frühen Projektideen lohnt sich ein kurzes Gespräch.",
          },
          {
            question: "Was sollte ich für das erste Gespräch vorbereiten?",
            answer:
              "Nicht viel. Ein paar kurze Informationen zu Ihrem Betrieb, wo Displays eingesetzt werden sollen und was Sie kommunizieren möchten – das reicht für ein erstes sinnvolles Gespräch.",
          },
        ]}
      />

      <CTASection
        eyebrow="Jetzt starten"
        title="Bereit für Ihr Digital-Signage-Projekt?"
        subtitle="Schreiben Sie uns oder rufen Sie direkt an. Gemeinsam finden wir die passende Lösung für Ihren Betrieb."
        primaryCta={{ label: "Projekt besprechen", href: "#kontaktformular" }}
        secondaryCta={{ label: "Mehr über Meister Signage", href: "/ueber-uns" }}
      />
    </>
  );
}
