import type { Metadata } from "next";
import HomeHeroSection from "@/components/sections/HomeHeroSection";
import EditorialNewsSection from "@/components/sections/EditorialNewsSection";
import { getLatestPosts } from "@/lib/news";
import PremiumBenefitGrid from "@/components/sections/PremiumBenefitGrid";
import IndustriesSection from "@/components/sections/IndustriesSection";
import UseCasesSection from "@/components/sections/UseCasesSection";
import TrustProcessSection from "@/components/sections/TrustProcessSection";
import ModernFAQSection from "@/components/sections/ModernFAQSection";
import CTASection from "@/components/sections/CTASection";
import ContactSection from "@/components/sections/ContactSection";
import InternalLinksSection from "@/components/sections/InternalLinksSection";
import ParallaxShowcaseSection from "@/components/sections/ParallaxShowcaseSection";
import SoftwareTeaserSection from "@/components/sections/SoftwareTeaserSection";
import JsonLd from "@/components/JsonLd";
import { faqSchema } from "@/lib/schema/faq";

const SITE_URL = "https://www.meister-signage.ch";
const PAGE_URL = SITE_URL;

export const metadata: Metadata = {
  title: { absolute: "Meister Signage | Digitale Displays Zentralschweiz" },
  description: "Schlüsselfertige Digital-Signage-Lösungen für Gastronomie, Retail und Events. Persönlicher Service aus der Zentralschweiz. Kein IT-Aufwand.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    locale: "de_CH",
    url: PAGE_URL,
    siteName: "Meister Signage",
    title: "Meister Signage – Digital Signage Luzern & Zentralschweiz",
    description: "Schlüsselfertige Digital-Signage-Lösungen für Gastronomie, Retail und Events. Persönlicher Service aus der Zentralschweiz. Kein IT-Aufwand.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meister Signage – Digital Signage Luzern & Zentralschweiz",
    description: "Schlüsselfertige Digital-Signage-Lösungen für Gastronomie, Retail und Events. Persönlicher Service aus der Zentralschweiz.",
  },
};

const HOME_FAQS = [
  {
    question: "Was kostet eine Digital-Signage-Lösung?",
    answer: "Das hängt von Anzahl Bildschirmen, Einsatzort, Installation, Inhaltspflege und gewünschter Betreuung ab. Für kleine Lösungen ist ein schlanker Einstieg mit einem Display möglich. Viele Kunden starten mit einem einzelnen System und erweitern es später nach Bedarf. Wir erstellen Ihnen eine kostenlose, unverbindliche Einschätzung.",
  },
  {
    question: "Kann ich Inhalte selbst ändern?",
    answer: "Ja. Inhalte können so vorbereitet werden, dass Sie Menüs, Preise, Angebote oder Hinweise selbst und einfach aktualisieren können. Auf Wunsch übernehmen wir auch die laufende Inhaltspflege.",
  },
  {
    question: "Brauche ich dafür eine eigene IT-Abteilung?",
    answer: "Nein. Die Lösung wird so geplant und eingerichtet, dass sie im Alltag verständlich funktioniert und keine unnötige technische Komplexität entsteht. Wir schulen bei der Übergabe und bleiben erreichbar.",
  },
  {
    question: "Kann ich mit einem Bildschirm starten?",
    answer: "Ja. Viele Projekte starten bewusst klein – ein Display, ein Standort – und werden später nach Bedarf erweitert. Der Einstieg ist so konzipiert, dass er wächst, wenn Sie bereit sind.",
  },
  {
    question: "Für welche Branchen eignet sich Digital Signage?",
    answer: "Besonders sinnvoll ist es für Gastronomie, Hotellerie, Retail, Events, Empfangsbereiche und überall dort, wo Informationen regelmässig sichtbar aktualisiert werden müssen.",
  },
  {
    question: "Was passiert, wenn ein Display einen Fehler hat?",
    answer: "Wir sind direkter Ansprechpartner. In vielen Fällen lässt sich ein Problem per Fernzugriff lösen. Bei Bedarf kommen wir auch vor Ort – als lokaler Anbieter aus der Zentralschweiz schnell erreichbar.",
  },
];

export default function Home() {
  const latestPosts = getLatestPosts(3);

  return (
    <>
      {/* 1 — Hero with trust bar */}
      {/* Inhalte gepflegt im CMS: Globale Daten → Homepage-Hero
          (content/site/homepage.json). Hier keine Props mehr nötig. */}
      <HomeHeroSection />


      {/* 3 — Premium benefit grid */}
      <PremiumBenefitGrid />

      {/* 3.5 — Atmospheric brand parallax */}
      <ParallaxShowcaseSection
        eyebrow="Premium Digital Signage"
        title="Digitale Kommunikation mit Tiefenwirkung."
        text="Subtile Bewegung, starke Bilder und klare Inhalte schaffen ein digitales Erlebnis, das Räume hochwertig ergänzt."
        image="/images/products/meister-signage-parallax-bg.webp"
        imageAlt="Meister Signage – Premium Digital Signage Stimmungsbild"
        ctaLabel="Lösungen ansehen"
        ctaHref="/loesungen"
      />

      {/* 3.6 — Software teaser */}
      <SoftwareTeaserSection />

      {/* 4 — Industries bento */}
      <IndustriesSection />

      {/* 5 — Use cases editorial */}
      <UseCasesSection />


      {/* 6 — Trust & process */}
      <TrustProcessSection />

      {/* 7 — FAQ */}
      <JsonLd schema={faqSchema(HOME_FAQS) as Record<string, unknown>} />
      <ModernFAQSection
        eyebrow="Häufige Fragen"
        title="Was Sie vor dem Start wissen sollten."
        subtitle="Die wichtigsten Antworten für Betriebe, die Digital Signage einfach und sinnvoll einsetzen möchten."
        faqs={HOME_FAQS}
      />

      {/* 7 — Editorial news */}
      <EditorialNewsSection posts={latestPosts} />

      {/* 8 — Internal links */}
      <InternalLinksSection
        eyebrow="Weitere Seiten"
        links={[
          { label: "Digital Signage Schweiz",  href: "/digital-signage-schweiz" },
          { label: "Kosten & Preise",          href: "/was-kostet-digital-signage-schweiz" },
          { label: "Digital Signage mieten",   href: "/digital-signage-mieten" },
          { label: "Digital Signage kaufen",  href: "/digital-signage-kaufen" },
          { label: "Gastronomie",              href: "/branchen/gastronomie" },
          { label: "Hotellerie",               href: "/branchen/hotellerie" },
          { label: "Retail",                   href: "/branchen/retail" },
          { label: "Unternehmen",              href: "/branchen/unternehmen" },
          { label: "Events",                   href: "/branchen/events" },
        ]}
      />

      {/* 9 — CTA */}
      <CTASection
        eyebrow="Projekt besprechen"
        title="Bereit für den ersten Schritt? Wir machen es einfach."
        subtitle="Beschreiben Sie kurz Ihren Betrieb und Ihr Ziel – wir antworten persönlich innert 24h mit einer konkreten Einschätzung."
        primaryCta={{ label: "Beratung anfragen", href: "/kontakt" }}
        secondaryCta={{ label: "Kosten & Preise ansehen", href: "/was-kostet-digital-signage-schweiz" }}
      />

      {/* 10 — Contact */}
      <ContactSection
        eyebrow="Persönlicher Kontakt"
        title="Lieber direkt? Kein Problem."
        subtitle="Rufen Sie an, schreiben Sie eine E-Mail oder nutzen Sie WhatsApp. Chris Meister antwortet persönlich – ohne Warteschleife."
        role="Meister Signage"
        imageSrc="/images/Chris-Meister.webp"
      />
    </>
  );
}
