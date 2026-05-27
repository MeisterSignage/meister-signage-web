/** Shared TypeScript types for the Wissen / knowledge-hub system. */

export type WissenCategory =
  | "Grundlagen"
  | "Software"
  | "Kosten"
  | "Branchen"
  | "Outdoor & Mobile"
  | "Events";

export type WissenFAQ = { question: string; answer: string };
export type WissenLink = { label: string; href: string };

export type WissenPage = {
  slug: string;
  category: WissenCategory;
  seoTitle: string;
  seoDescription: string;
  eyebrow: string;
  h1: string;
  intro: string;
  /** One-line, scannable definition (used in TL;DR block) */
  definition: string;
  /** 2–4 paragraphs of plain explanation */
  explanation: string[];
  /** Concrete examples / use cases */
  examples: { title: string; description: string }[];
  /** Short benefits / value points */
  benefits: string[];
  faq: WissenFAQ[];
  internalLinks: WissenLink[];
  /** ISO date for Article schema */
  datePublished: string;
  dateModified?: string;
  /** Optional hero image (absolute path under /public, prefer .webp) */
  heroImage?: string;
  /** Optional alt text for hero image */
  heroImageAlt?: string;
};
