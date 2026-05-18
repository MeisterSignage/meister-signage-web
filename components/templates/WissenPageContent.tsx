"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Plus, Minus, Check } from "lucide-react";
import { viewport, easeOut, staggerContainer, staggerItem } from "@/lib/motion";
import ContactSection from "@/components/sections/ContactSection";
import InternalLinksSection from "@/components/sections/InternalLinksSection";
import type { WissenPage } from "@/lib/wissen-types";

const NOISE =
  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")";

function FAQAccordion({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y" style={{ borderColor: "rgba(26,39,68,0.09)" }}>
      {faqs.map((faq, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-start justify-between gap-6 py-6 text-left"
              aria-expanded={isOpen}
            >
              <span className="text-[16px] font-semibold leading-snug text-navy">
                {faq.question}
              </span>
              <span
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all duration-200"
                style={{ background: isOpen ? "var(--color-magenta)" : "rgba(26,39,68,0.08)" }}
              >
                {isOpen
                  ? <Minus className="h-3.5 w-3.5 text-white" strokeWidth={2.5} />
                  : <Plus  className="h-3.5 w-3.5 text-navy/60" strokeWidth={2.5} />}
              </span>
            </button>
            <div
              style={{
                maxHeight: isOpen ? "500px" : "0px",
                opacity: isOpen ? 1 : 0,
                overflow: "hidden",
                transition: "max-height 280ms cubic-bezier(0.4,0,0.2,1), opacity 220ms ease",
              }}
            >
              <p className="pb-7 pr-14 text-[15px] leading-relaxed text-cgray">
                {faq.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function WissenPageContent({ page }: { page: WissenPage }) {
  const reduced = useReducedMotion();

  return (
    <>
      {/* ── 1. HERO ───────────────────────────────────────────────────────── */}
      <section
        className="relative w-full overflow-hidden"
        style={{ background: "linear-gradient(160deg, #07101f 0%, #0d1628 50%, #111d38 100%)" }}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          aria-hidden="true"
          style={{ backgroundImage: NOISE, backgroundSize: "160px 160px" }}
        />
        <div
          className="pointer-events-none absolute -right-40 top-0 h-full w-[700px]"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 60% 80% at 80% 40%, rgba(254,1,154,0.10) 0%, transparent 65%)",
          }}
        />
        <div
          className="pointer-events-none absolute -bottom-20 -left-20 h-[500px] w-[500px]"
          aria-hidden="true"
          style={{
            background: "radial-gradient(circle, rgba(26,39,68,0.8) 0%, transparent 70%)",
          }}
        />

        <div className="relative mx-auto flex max-w-[1200px] flex-col justify-center px-6 py-20 md:min-h-[55vh] md:px-10 lg:min-h-[60vh]">
          <motion.div
            className="z-10 max-w-3xl"
            initial={reduced ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeOut }}
          >
            <span
              className="mb-6 inline-block text-[11px] font-bold uppercase tracking-[0.18em]"
              style={{ color: "rgba(254,1,154,0.9)" }}
            >
              {page.eyebrow}
            </span>
            <h1
              className="mb-7 font-light leading-[0.95] tracking-tight"
              style={{
                fontSize: "clamp(2.2rem, 3.8vw, 3.6rem)",
                letterSpacing: "-0.035em",
                color: "#f3f4f6",
              }}
            >
              {page.h1}
            </h1>
            <p
              className="mb-10 leading-relaxed"
              style={{
                maxWidth: "560px",
                fontSize: "clamp(1rem, 1.5vw, 1.15rem)",
                color: "rgba(209,213,219,0.9)",
              }}
            >
              {page.intro}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/kontakt" className="btn-primary gap-2.5">
                Beratung anfragen
                <ArrowRight className="h-4 w-4 shrink-0" strokeWidth={2} />
              </Link>
              <Link
                href="/wissen"
                className="inline-flex items-center gap-2.5 rounded-[7px] px-6 py-3.5 text-[15px] font-semibold transition-all duration-200"
                style={{
                  border: "1px solid rgba(255,255,255,0.14)",
                  color: "#e5e7eb",
                  minHeight: "3.5rem",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.30)";
                  (e.currentTarget as HTMLElement).style.color = "#ffffff";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.14)";
                  (e.currentTarget as HTMLElement).style.color = "#e5e7eb";
                }}
              >
                Alle Wissensartikel
              </Link>
            </div>
          </motion.div>
        </div>

        <div
          className="pointer-events-none absolute bottom-0 left-0 right-0 h-40"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.04) 60%, rgba(255,255,255,0.10) 100%)",
          }}
        />
      </section>

      {/* ── 2. DEFINITION (TL;DR) ────────────────────────────────────────── */}
      <section
        className="relative w-full bg-white"
        style={{
          marginTop: "-44px",
          borderRadius: "28px 28px 0 0",
          zIndex: 10,
          boxShadow: "0 -12px 48px rgba(7,16,31,0.10)",
        }}
      >
        <div className="section-inner">
          <div className="mx-auto max-w-3xl">
            <span className="eyebrow">In Kürze</span>
            <div
              className="relative mt-3 overflow-hidden rounded-[7px] border border-navy/10 bg-offwhite px-7 py-6"
            >
              <div className="absolute inset-y-0 left-0 w-[3px] bg-magenta" />
              <p className="text-[17px] leading-relaxed font-semibold text-navy">{page.definition}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. EXPLANATION ──────────────────────────────────────────────── */}
      {page.explanation.length > 0 && (
        <section className="w-full bg-offwhite">
          <div className="section-inner">
            <div className="mx-auto max-w-3xl">
              <span className="eyebrow">Erklärt</span>
              <h2 className="heading-max-2 mb-6 mt-2 text-navy">
                So funktioniert es im Alltag.
              </h2>
              <div className="space-y-5">
                {page.explanation.map((paragraph, i) => (
                  <p key={i} className="text-[16px] leading-relaxed text-cgray">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── 4. EXAMPLES ─────────────────────────────────────────────────── */}
      {page.examples.length > 0 && (
        <section className="w-full bg-white">
          <div className="section-inner">
            <div className="section-header">
              <span className="eyebrow">Beispiele</span>
              <h2 className="heading-max-2 mb-3 text-navy">Wo es konkret zum Einsatz kommt.</h2>
            </div>

            <motion.div
              className="grid grid-cols-1 gap-4 sm:grid-cols-2"
              variants={staggerContainer}
              initial={reduced ? false : "hidden"}
              whileInView="visible"
              viewport={viewport}
            >
              {page.examples.map((ex) => (
                <motion.div
                  key={ex.title}
                  variants={staggerItem}
                  className="flex h-full flex-col gap-4 border border-navy/8 bg-offwhite p-6 transition-all duration-200 hover:border-navy/[0.14] hover:shadow-[0_4px_20px_rgba(26,39,68,0.06)]"
                >
                  <div className="h-px w-8 bg-gold/50" />
                  <p className="card-title">{ex.title}</p>
                  <p className="card-body">{ex.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* ── 5. BENEFITS ─────────────────────────────────────────────────── */}
      {page.benefits.length > 0 && (
        <section className="w-full bg-offwhite">
          <div className="section-inner">
            <div className="section-header">
              <span className="eyebrow">Vorteile</span>
              <h2 className="heading-max-2 mb-3 text-navy">Was Sie damit erreichen.</h2>
            </div>

            <ul className="mx-auto grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-2">
              {page.benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 border-l-2 border-gold bg-white px-4 py-3.5">
                  <span className="mt-[3px] flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-gold/12">
                    <Check className="h-[10px] w-[10px] text-gold" strokeWidth={3} />
                  </span>
                  <span className="text-[15px] leading-snug text-navy/80">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ── 6. FAQ ──────────────────────────────────────────────────────── */}
      {page.faq.length > 0 && (
        <section className="w-full bg-white">
          <div className="section-inner">
            <div className="mx-auto max-w-[860px]">
              <motion.div
                className="mb-12"
                initial={reduced ? false : { opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.52, ease: easeOut }}
              >
                <span className="eyebrow">Häufige Fragen</span>
                <h2
                  className="mt-2 font-light text-navy"
                  style={{
                    fontSize: "clamp(1.75rem, 2.8vw, 2.4rem)",
                    lineHeight: 1.1,
                    letterSpacing: "-0.025em",
                  }}
                >
                  Was Sie wissen sollten.
                </h2>
              </motion.div>

              <FAQAccordion faqs={page.faq} />
            </div>
          </div>
        </section>
      )}

      {/* ── 7. INTERNAL LINKS ───────────────────────────────────────────── */}
      {page.internalLinks.length > 0 && (
        <InternalLinksSection eyebrow="Verwandte Themen" links={page.internalLinks} />
      )}

      {/* ── 8. DARK CTA ─────────────────────────────────────────────────── */}
      <section
        className="relative w-full overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0d1628 0%, #1a2744 100%)" }}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          aria-hidden="true"
          style={{ backgroundImage: NOISE, backgroundSize: "160px 160px" }}
        />
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(254,1,154,0.09) 0%, transparent 60%)",
          }}
        />
        <div className="relative section-inner">
          <motion.div
            className="flex flex-col items-center gap-6 text-center"
            initial={reduced ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.6, ease: easeOut }}
          >
            <span
              className="text-[11px] font-bold uppercase tracking-[0.18em]"
              style={{ color: "rgba(254,1,154,0.85)" }}
            >
              Jetzt besprechen
            </span>
            <h2
              className="font-light"
              style={{
                fontSize: "clamp(2rem, 3.5vw, 3.4rem)",
                lineHeight: 1.0,
                letterSpacing: "-0.03em",
                color: "#f3f4f6",
                maxWidth: "24ch",
              }}
            >
              Welche Lösung passt zu Ihrem Projekt?
            </h2>
            <p
              className="max-w-md text-[16px] leading-relaxed"
              style={{ color: "rgba(156,163,175,0.9)" }}
            >
              Schildern Sie kurz Ihren Einsatz – wir empfehlen die passende Lösung und beantworten alle offenen Fragen.
            </p>
            <div className="mt-2 flex flex-wrap justify-center gap-4">
              <Link href="/kontakt" className="btn-primary gap-2.5">
                Beratung anfragen
                <ArrowRight className="h-4 w-4 shrink-0" strokeWidth={2} />
              </Link>
              <Link
                href="/wissen"
                className="inline-flex items-center gap-2 rounded-[7px] px-6 text-[15px] font-semibold transition-all duration-200"
                style={{
                  border: "1px solid rgba(255,255,255,0.14)",
                  color: "#e5e7eb",
                  minHeight: "3.5rem",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.30)";
                  (e.currentTarget as HTMLElement).style.color = "#ffffff";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.14)";
                  (e.currentTarget as HTMLElement).style.color = "#e5e7eb";
                }}
              >
                Weitere Artikel
              </Link>
            </div>
            <p
              className="mt-2 text-[12px] tracking-wide"
              style={{ color: "rgba(156,163,175,0.5)" }}
            >
              Unverbindlich · Antwort innert 24h · Persönliche Beratung
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── 9. CONTACT ──────────────────────────────────────────────────── */}
      <ContactSection
        eyebrow="Persönlicher Kontakt"
        title="Fragen zu diesem Thema?"
        subtitle="Schildern Sie kurz, was Sie vorhaben. Wir melden uns persönlich mit einer klaren Empfehlung – innert 24 Stunden."
        imageSrc="/images/Chris-Meister.png"
      />
    </>
  );
}
