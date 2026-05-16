import type { Metadata } from "next";
import HomeHeroSection from "@/components/sections/HomeHeroSection";
import LatestNewsSection from "@/components/sections/LatestNewsSection";
import { getLatestPosts } from "@/lib/news";
import PremiumBenefitGrid from "@/components/sections/PremiumBenefitGrid";
import MiniCaseStudies from "@/components/sections/MiniCaseStudies";
import ModernProcessSection from "@/components/sections/ModernProcessSection";
import ModernFAQSection from "@/components/sections/ModernFAQSection";
import MicroTrustSection from "@/components/sections/MicroTrustSection";
import CTASection from "@/components/sections/CTASection";
import ContactSection from "@/components/sections/ContactSection";
import InternalLinksSection from "@/components/sections/InternalLinksSection";
import AnimateIn from "@/components/ui/AnimateIn";

const SITE_URL = "https://www.meister-signage.ch";
const PAGE_URL = SITE_URL;

export const metadata: Metadata = {
  title: "Meister Signage – Digital Signage Luzern & Zentralschweiz",
  description: "Schlüsselfertige Digital-Signage-Lösungen für Gastronomie, Retail und Events. Persönlicher Service aus der Zentralschweiz. Kein IT-Aufwand.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    locale: "de_CH",
    url: PAGE_URL,
    siteName: "Meister Signage",
    title: "Meister Signage – Digital Signage Luzern & Zentralschweiz",
    description: "Schlüsselfertige Digital-Signage-Lösungen für Gastronomie, Retail und Events. Persönlicher Service aus der Zentralschweiz. Kein IT-Aufwand.",
    images: [{ url: `${SITE_URL}/og/meister-signage-og.png`, width: 1200, height: 630, alt: "Meister Signage – Digital Signage Zentralschweiz" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Meister Signage – Digital Signage Luzern & Zentralschweiz",
    description: "Schlüsselfertige Digital-Signage-Lösungen für Gastronomie, Retail und Events. Persönlicher Service aus der Zentralschweiz.",
    images: [`${SITE_URL}/og/meister-signage-og.png`],
  },
};

export default function Home() {
  const latestPosts = getLatestPosts(3);

  return (
    <>
      {/* 1 — Hero with trust bar */}
      <HomeHeroSection
        eyebrow="Digital Signage aus der Zentralschweiz"
        primaryCta={{ label: "Beratung anfragen", href: "/kontakt" }}
        secondaryCta={{ label: "Lösungen entdecken", href: "/digital-signage-schweiz" }}
      />

      {/* 2 — Micro trust strip */}
      <AnimateIn distance={10} delay={0.1}>
        <MicroTrustSection />
      </AnimateIn>

      {/* 3 — Premium benefit grid */}
      <PremiumBenefitGrid />

      {/* 4 — Mini case studies */}
      <MiniCaseStudies />

      {/* 5 — Modern 3-step process */}
      <ModernProcessSection />

      {/* 6 — FAQ */}
      <ModernFAQSection
        eyebrow="Häufige Fragen"
        title="Was Sie vor dem Start wissen sollten."
        subtitle="Die wichtigsten Antworten für Betriebe, die Digital Signage einfach und sinnvoll einsetzen möchten."
        faqs={[
          {
            question: "Was kostet eine Digital-Signage-Lösung?",
            answer: "Das hängt von Anzahl Bildschirmen, Einsatzort, Inhaltspflege und gewünschter Betreuung ab. Für kleine Lösungen ist ein schlanker Einstieg mit einem Display möglich. Wir erstellen Ihnen eine kostenlose, unverbindliche Einschätzung.",
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
        ]}
      />

      {/* 7 — Latest news */}
      <AnimateIn>
      <LatestNewsSection
        posts={latestPosts}
        eyebrow="Aktuelles"
        title="News & Insights"
        subtitle="Tipps, Neuigkeiten und Hintergründe rund um Digital Signage."
      />
      </AnimateIn>

      {/* 8 — Internal links */}
      <InternalLinksSection
        eyebrow="Weitere Seiten"
        links={[
          { label: "Digital Signage Schweiz",  href: "/digital-signage-schweiz" },
          { label: "Kosten & Preise",          href: "/was-kostet-digital-signage-schweiz" },
          { label: "Digital Signage mieten",   href: "/digital-signage-mieten" },
          { label: "Gastronomie",              href: "/gastronomie" },
          { label: "Hotellerie",               href: "/hotellerie" },
          { label: "Retail",                   href: "/retail" },
          { label: "Unternehmen",              href: "/unternehmen" },
          { label: "Events",                   href: "/events" },
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
