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
