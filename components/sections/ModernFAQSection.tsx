"use client";

import { useState, useEffect } from "react";
import { Plus, Minus } from "lucide-react";

type FAQ = { question: string; answer: string };

type ModernFAQSectionProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  faqs: FAQ[];
};

export default function ModernFAQSection({
  eyebrow,
  title,
  subtitle,
  faqs,
}: ModernFAQSectionProps) {
  const [open, setOpen] = useState<number | null>(0);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  return (
    <section className="w-full bg-white">
      <div className="section-inner">
        <div className="mx-auto max-w-[860px]">

          {/* Header */}
          <div className="mb-12">
            {eyebrow && <span className="eyebrow">{eyebrow}</span>}
            <h2 className="heading-max-2 mt-2 text-navy">{title}</h2>
            {subtitle && (
              <p className="mt-3 text-[16px] leading-relaxed text-cgray">{subtitle}</p>
            )}
          </div>

          {/* Accordion – all answers are always in the DOM for AI crawlers */}
          <div className="divide-y divide-navy/8">
            {faqs.map((faq, i) => {
              const isOpen = open === i;
              return (
                <div key={i} className="faq-item">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-start justify-between gap-6 py-6 text-left"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${i}`}
                  >
                    <span
                      className="text-[16px] font-semibold leading-snug text-navy transition-colors duration-150"
                      style={{ color: isOpen ? "var(--navy)" : undefined }}
                    >
                      {faq.question}
                    </span>
                    <span
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all duration-200"
                      style={{
                        background: isOpen ? "var(--magenta)" : "rgba(26,39,68,0.07)",
                      }}
                    >
                      {isOpen
                        ? <Minus className="h-3.5 w-3.5 text-white" strokeWidth={2.5} />
                        : <Plus className="h-3.5 w-3.5 text-navy/60" strokeWidth={2.5} />
                      }
                    </span>
                  </button>

                  {/*
                    Answer – ALWAYS rendered in the DOM so AI crawlers see the text
                    in the initial SSR HTML. CSS handles the visual collapse/expand.
                    Before hydration, the grid-rows trick shows open items without JS.
                  */}
                  <div
                    id={`faq-answer-${i}`}
                    role="region"
                    aria-hidden={!isOpen}
                    className="faq-answer"
                    style={hydrated ? {
                      display: "grid",
                      gridTemplateRows: isOpen ? "1fr" : "0fr",
                      opacity: isOpen ? 1 : 0,
                      transition: "grid-template-rows 280ms cubic-bezier(0.4,0,0.2,1), opacity 220ms cubic-bezier(0.25,0.1,0.25,1)",
                    } : undefined}
                    data-open={isOpen ? "" : undefined}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-7 pr-14 text-[15px] leading-relaxed text-cgray">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/*
            SSR fallback styles – before JS hydrates, use CSS to handle visibility.
            All answer content is in the HTML; these styles just control what's visually shown.
            AI crawlers that don't run JS will still see all answer text in the DOM.
          */}
          <style dangerouslySetInnerHTML={{ __html: `
            .faq-answer:not([style]) {
              display: grid;
              grid-template-rows: 0fr;
              opacity: 0;
              transition: grid-template-rows 280ms cubic-bezier(0.4,0,0.2,1), opacity 220ms cubic-bezier(0.25,0.1,0.25,1);
            }
            .faq-answer:not([style])[data-open] {
              grid-template-rows: 1fr;
              opacity: 1;
            }
          `}} />

        </div>
      </div>
    </section>
  );
}
