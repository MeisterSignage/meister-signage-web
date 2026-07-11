/** Shared TypeScript types for the SEO landing page system. */

export type LPBenefit = {
  title: string;
  description: string;
};

export type LPFAQ = {
  question: string;
  answer: string;
};

export type LPLink = {
  label: string;
  href: string;
};

export type LPUseCase = {
  title: string;
  description: string;
};

export type LPUseCases = {
  eyebrow: string;
  title: string;
  intro?: string;
  items: LPUseCase[];
};

export type LPCapability = {
  /** Inner SVG markup for a 24×24 stroke icon (viewBox "0 0 24 24"). */
  icon: string;
  title: string;
  text: string;
};

export type LPCapabilities = {
  eyebrow?: string;
  title?: string;
  intro?: string;
  outro?: string;
  items: LPCapability[];
};

export type LPCta = {
  eyebrow: string;
  title: string;
  subtitle: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export type LandingPage = {
  slug: string;
  type: "branchen" | "staedte" | "loesungen";
  seoTitle: string;
  seoDescription: string;
  eyebrow: string;
  h1: string;
  intro: string;
  heroImage?: string;
  gallery?: { src: string; alt: string }[];
  benefits: LPBenefit[];
  capabilities?: LPCapabilities;
  useCases?: LPUseCases;
  faq: LPFAQ[];
  internalLinks: LPLink[];
  cta: LPCta;
  related?: {
    branchen?: LPLink[];
    staedte?: LPLink[];
    loesungen?: LPLink[];
  };
};
