import Link from "next/link";
import { Check } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import CTASection from "@/components/sections/CTASection";
import FAQSection from "@/components/sections/FAQSection";
import InternalLinksSection from "@/components/sections/InternalLinksSection";
import { breadcrumbSchema } from "@/lib/schema/breadcrumb";
import { faqSchema } from "@/lib/schema/faq";
import type { LandingPage, LPLink } from "@/lib/lp-types";

const TYPE_LABELS: Record<LandingPage["type"], string> = {
  branchen:  "Branchen",
  staedte:   "Standorte",
  loesungen: "Lösungen",
};

const TYPE_PATHS: Record<LandingPage["type"], string> = {
  branchen:  "/branchen",
  staedte:   "/staedte",
  loesungen: "/loesungen",
};

export default function LandingPageTemplate({ page }: { page: LandingPage }) {
  const breadcrumb = [
    { name: "Home",                   path: "/" },
    { name: TYPE_LABELS[page.type],   path: TYPE_PATHS[page.type] },
    { name: page.h1,                  path: `/${page.type}/${page.slug}` },
  ];

  /* Combine all related links for the internal links section */
  const relatedLinks: LPLink[] = [
    ...(page.related?.branchen  ?? []),
    ...(page.related?.loesungen ?? []),
    ...(page.related?.staedte   ?? []),
    ...page.internalLinks,
  ];

  /* Deduplicate by href */
  const seenHrefs = new Set<string>();
  const dedupedLinks = relatedLinks.filter(({ href }) => {
    if (seenHrefs.has(href)) return false;
    seenHrefs.add(href);
    return true;
  });

  return (
    <>
      {/* ── Structured Data ──────────────────────────────────── */}
      <JsonLd schema={breadcrumbSchema(breadcrumb) as Record<string, unknown>} />
      {page.faq.length > 0 && (
        <JsonLd schema={faqSchema(page.faq) as Record<string, unknown>} />
      )}

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="w-full bg-offwhite">
        <div className="section-inner">
          <span className="eyebrow">{page.eyebrow}</span>
          <h1 className="heading-max-2 mt-2 max-w-3xl text-navy">
            {page.h1}
          </h1>
          <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-cgray">
            {page.intro}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={page.cta.primaryHref} className="btn-primary">
              {page.cta.primaryLabel}
            </Link>
            {page.cta.secondaryHref && (
              <Link href={page.cta.secondaryHref} className="btn-secondary">
                {page.cta.secondaryLabel}
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* ── Benefits ─────────────────────────────────────────── */}
      <section className="w-full bg-white">
        <div className="section-inner">
          <div className="section-header">
            <span className="eyebrow">Ihre Vorteile</span>
            <h2 className="heading-max-2 text-navy">Was Sie damit erreichen</h2>
            <p className="mt-3 text-cgray">
              Die wichtigsten Gründe, warum sich eine digitale Bildschirmlösung in Ihrem Alltag bewährt.
            </p>
          </div>
          <div className="card-grid card-grid-3">
            {page.benefits.map((benefit, i) => (
              <div key={i} className="card card-hover rounded-[10px]">
                <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-magenta/10">
                  <Check className="h-4 w-4 text-magenta" strokeWidth={2.5} />
                </div>
                <p className="card-title">{benefit.title}</p>
                <p className="card-body">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      {page.faq.length > 0 && (
        <FAQSection
          eyebrow="Häufige Fragen"
          title="Was Sie wissen sollten"
          subtitle="Antworten auf die häufigsten Fragen zum Thema Digital Signage für Ihren Betrieb."
          faqs={page.faq}
        />
      )}

      {/* ── Internal Links ───────────────────────────────────── */}
      {dedupedLinks.length > 0 && (
        <InternalLinksSection
          eyebrow="Verwandte Themen"
          links={dedupedLinks}
        />
      )}

      {/* ── CTA ──────────────────────────────────────────────── */}
      <CTASection
        eyebrow={page.cta.eyebrow}
        title={page.cta.title}
        subtitle={page.cta.subtitle}
        primaryCta={{ label: page.cta.primaryLabel, href: page.cta.primaryHref }}
        secondaryCta={
          page.cta.secondaryHref
            ? { label: page.cta.secondaryLabel!, href: page.cta.secondaryHref }
            : undefined
        }
      />
    </>
  );
}
