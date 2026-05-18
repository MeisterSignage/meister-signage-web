import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import ProofSection from "@/components/sections/ProofSection";
import ProblemSolutionSection from "@/components/sections/ProblemSolutionSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import ProcessSection from "@/components/sections/ProcessSection";
import CTASection from "@/components/sections/CTASection";
import ContactSection from "@/components/sections/ContactSection";
import { MessageSquare, UserCheck, Lightbulb, MapPin, Shield, BadgeCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import { aboutPageSchema } from "@/lib/schema/aboutPage";
import { breadcrumbSchema } from "@/lib/schema/breadcrumb";
import data from "@/content/site/ueber-uns.json";

const SITE_URL = "https://www.meister-signage.ch";
const PAGE_URL = `${SITE_URL}/ueber-uns`;

export const metadata: Metadata = {
  title: "Über Meister Signage – Digital Signage aus der Zentralschweiz",
  description:
    "Meister Signage plant und realisiert moderne Digital-Signage-Lösungen mit persönlicher Betreuung, pragmatischen Lösungen und direktem Ansprechpartner.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    locale: "de_CH",
    url: PAGE_URL,
    siteName: "Meister Signage",
    title: "Über Meister Signage – Digital Signage aus der Zentralschweiz",
    description: "Meister Signage plant und realisiert Digital-Signage-Lösungen mit persönlicher Betreuung und direktem Ansprechpartner aus der Zentralschweiz.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Über Meister Signage – Digital Signage aus der Zentralschweiz",
    description: "Digital-Signage-Lösungen mit persönlicher Betreuung. Direkter Ansprechpartner aus der Zentralschweiz.",
  },
};

/* Icon-Name → Lucide-Komponente. Erweitern wenn der CMS-Editor weitere Symbole nutzen möchte. */
const ICONS: Record<string, LucideIcon> = {
  "user-check":     UserCheck,
  "lightbulb":      Lightbulb,
  "badge-check":    BadgeCheck,
  "map-pin":        MapPin,
  "message-square": MessageSquare,
  "shield":         Shield,
};

export default function UeberUnsPage() {
  const versprechenItems = data.versprechen.items.map((b) => ({
    icon: ICONS[b.icon] ?? UserCheck,
    title: b.title,
    description: b.description,
  }));

  return (
    <>
      <JsonLd schema={aboutPageSchema as Record<string, unknown>} />
      <JsonLd
        schema={
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Über uns", path: "/ueber-uns" },
          ]) as Record<string, unknown>
        }
      />

      <HeroSection
        eyebrow={data.hero.eyebrow}
        title={data.hero.title}
        subtitle={data.hero.subtitle}
        bullets={data.hero.bullets as [string, string, string]}
        primaryCta={data.hero.primaryCta}
        secondaryCta={data.hero.secondaryCta}
        imageSrc="/images/Chris-Meister.webp"
        imageAlt="Christopher Meister – Gründer Meister Signage"
        imageCompact
      />

      <ProofSection
        eyebrow={data.story.eyebrow}
        title={data.story.title}
        subtitle={data.story.subtitle}
        proofItems={data.story.proofItems}
      />

      <ProblemSolutionSection
        eyebrow={data.arbeitsweise.eyebrow}
        title={data.arbeitsweise.title}
        subtitle={data.arbeitsweise.subtitle}
        problemsLabel={data.arbeitsweise.problemsLabel}
        solutionsLabel={data.arbeitsweise.solutionsLabel}
        problems={data.arbeitsweise.problems}
        solutions={data.arbeitsweise.solutions}
      />

      <BenefitsSection
        eyebrow={data.versprechen.eyebrow}
        title={data.versprechen.title}
        subtitle={data.versprechen.subtitle}
        benefits={versprechenItems}
      />

      <ProcessSection
        eyebrow={data.prozess.eyebrow}
        title={data.prozess.title}
        subtitle={data.prozess.subtitle}
        steps={data.prozess.steps}
      />

      <CTASection
        eyebrow={data.finalCta.eyebrow}
        title={data.finalCta.title}
        subtitle={data.finalCta.subtitle}
        primaryCta={data.finalCta.primaryCta}
        secondaryCta={data.finalCta.secondaryCta}
      />

      <ContactSection
        eyebrow={data.kontakt.eyebrow}
        title={data.kontakt.title}
        subtitle={data.kontakt.subtitle}
        imageSrc="/images/Chris-Meister.webp"
      />
    </>
  );
}
