"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Plus, Minus } from "lucide-react";
import { viewport, easeOut, staggerContainer, staggerItem } from "@/lib/motion";
import ContactSection from "@/components/sections/ContactSection";
import InternalLinksSection from "@/components/sections/InternalLinksSection";
import ParallaxShowcaseSection from "@/components/sections/ParallaxShowcaseSection";
import type { LandingPage, LPLink } from "@/lib/lp-types";

/* ─── Image mapping ──────────────────────────────────────────────────────── */

const BRANCHEN_IMAGES: Record<string, string> = {
  gastronomie: "/images/products/Restaurant-Meister-Signage.webp",
  retail:      "/images/products/Schuhladen-Meister-Signage.webp",
  hotellerie:  "/images/products/Hotelempfang-Meister-Signage.webp",
  unternehmen: "/images/products/Unternehmen-Empfang.webp",
  events:      "/images/products/Events-Meister-Signage.webp",
};

const BRANCHEN_PARALLAX: Record<string, { image: string; eyebrow: string; title: string; text: string }> = {
  gastronomie: {
    image: "/images/products/Sektion-BG-parallax-Gastro.png",
    eyebrow: "Gastronomie",
    title: "Genuss perfekt in Szene gesetzt.",
    text: "Digitale Menüboards und Displays präsentieren Angebote, Tagesmenüs und Aktionen flexibel und hochwertig.",
  },
  retail: {
    image: "/images/products/Sektion-BG-parallax-Retail.png",
    eyebrow: "Retail & Handel",
    title: "Mehr Aufmerksamkeit. Mehr Wirkung.",
    text: "Digitale Displays inszenieren Produkte, Kampagnen und Markenbotschaften direkt am Point of Sale.",
  },
  hotellerie: {
    image: "/images/products/Sektion-BG-parallax-Hotel.png",
    eyebrow: "Hotellerie",
    title: "Willkommen. Der erste Eindruck zählt.",
    text: "Digitale Displays verbinden Orientierung, Serviceinformationen und Atmosphäre zu einem stimmigen Gästeerlebnis.",
  },
  events: {
    image: "/images/products/Sektion-BG-parallax-Events.png",
    eyebrow: "Events & Messen",
    title: "Grosse Momente. Grosse Wirkung.",
    text: "LED-Walls, Agenda-Displays und digitale Besucherführung machen Veranstaltungen sichtbar, flexibel und eindrucksvoll.",
  },
};

const LOESUNGEN_IMAGES: Record<string, { src: string; product: boolean }> = {
  "led-walls":            { src: "/images/products/Spark5-Design.webp",  product: true },
  "digitale-menueboards": { src: "/images/products/SparkQ-Design.webp",  product: true },
  "indoor-signage":       { src: "/images/products/Spark4-Design.webp",  product: true },
  "empfangsdisplays":     { src: "/images/products/Spark4-Design.webp",  product: true },
  "event-displays":       { src: "/images/products/Spark3-Design.webp",  product: true },
};

function resolveHeroImage(page: LandingPage): { src: string; product: boolean } | null {
  if (page.heroImage) return { src: page.heroImage, product: false };
  if (page.type === "branchen") {
    const src = BRANCHEN_IMAGES[page.slug];
    return src ? { src, product: false } : null;
  }
  if (page.type === "loesungen") {
    return LOESUNGEN_IMAGES[page.slug] ?? null;
  }
  return null;
}

const NOISE =
  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")";

/* ─── FAQ Accordion ──────────────────────────────────────────────────────── */

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

/* ─── Main Component ─────────────────────────────────────────────────────── */

export default function LandingPageContent({
  page,
  dedupedLinks,
}: {
  page: LandingPage;
  dedupedLinks: LPLink[];
}) {
  const reduced = useReducedMotion();
  const heroImg = resolveHeroImage(page);
  const hasImage = !!heroImg;

  return (
    <>

      {/* ── 1. HERO ───────────────────────────────────────────────────────── */}
      <section
        className="relative w-full overflow-hidden"
        style={{
          background: "linear-gradient(160deg, #07101f 0%, #0d1628 50%, #111d38 100%)",
        }}
      >
        {/* Noise */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          aria-hidden="true"
          style={{ backgroundImage: NOISE, backgroundSize: "160px 160px" }}
        />
        {/* Ambient glow — right side */}
        <div
          className="pointer-events-none absolute -right-40 top-0 h-full w-[700px]"
          aria-hidden="true"
          style={{
            background: "radial-gradient(ellipse 60% 80% at 80% 40%, rgba(254,1,154,0.10) 0%, transparent 65%)",
          }}
        />
        {/* Ambient glow — bottom left */}
        <div
          className="pointer-events-none absolute -bottom-20 -left-20 h-[500px] w-[500px]"
          aria-hidden="true"
          style={{
            background: "radial-gradient(circle, rgba(26,39,68,0.8) 0%, transparent 70%)",
          }}
        />

        <div
          className={`relative mx-auto max-w-[1200px] px-6 md:px-10 ${
            hasImage
              ? "grid grid-cols-1 items-center gap-12 py-24 md:min-h-[60vh] lg:grid-cols-2 lg:gap-0 lg:py-0 lg:min-h-[65vh]"
              : "flex flex-col justify-center py-20 md:min-h-[55vh] lg:min-h-[60vh]"
          }`}
        >
          {/* Text */}
          <motion.div
            className={`z-10 ${hasImage ? "max-w-xl" : "max-w-3xl"}`}
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
                maxWidth: "440px",
                fontSize: "clamp(1rem, 1.5vw, 1.15rem)",
                color: "rgba(209,213,219,0.9)",
              }}
            >
              {page.intro}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href={page.cta.primaryHref} className="btn-primary gap-2.5">
                {page.cta.primaryLabel}
                <ArrowRight className="h-4 w-4 shrink-0" strokeWidth={2} />
              </Link>
              {page.cta.secondaryHref && (
                <Link
                  href={page.cta.secondaryHref}
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
                  {page.cta.secondaryLabel}
                </Link>
              )}
            </div>

            {/* Trust micro */}
            <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3">
              {["Persönliche Beratung", "Schweizer Support", "Schlüsselfertig"].map((t) => (
                <span
                  key={t}
                  className="flex items-center gap-2 text-[12px] font-medium tracking-wide"
                  style={{ color: "rgba(156,163,175,0.9)" }}
                >
                  <span
                    className="h-[5px] w-[5px] rounded-full"
                    style={{ backgroundColor: "rgba(254,1,154,0.7)" }}
                  />
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Hero image */}
          {heroImg && (
            <motion.div
              className="relative flex items-center justify-center lg:justify-end"
              initial={reduced ? false : { opacity: 0, scale: 0.97, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.9, ease: easeOut, delay: 0.15 }}
            >
              {heroImg.product ? (
                /* Product image — transparent bg, glow outline */
                <div className="relative w-full max-w-[560px]">
                  <div
                    className="pointer-events-none absolute inset-0"
                    aria-hidden="true"
                    style={{
                      background:
                        "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(254,1,154,0.15) 0%, transparent 65%)",
                    }}
                  />
                  <Image
                    src={heroImg.src}
                    alt={page.h1}
                    width={1400}
                    height={900}
                    className="w-full"
                    priority
                    style={{
                      filter:
                        "drop-shadow(0 0 2px rgba(254,1,154,0.9)) drop-shadow(0 0 6px rgba(254,1,154,0.35))",
                    }}
                  />
                </div>
              ) : (
                /* Environment photo — rounded, magenta-edge accent, soft glow */
                <div
                  className="relative w-full max-w-[560px] overflow-hidden rounded-[24px]"
                  style={{
                    aspectRatio: "4/3",
                    boxShadow:
                      "0 24px 80px rgba(7,16,31,0.5), 0 4px 20px rgba(7,16,31,0.3), 0 0 0 1px rgba(254,1,154,0.20), 0 0 50px rgba(254,1,154,0.10)",
                  }}
                >
                  <Image
                    src={heroImg.src}
                    alt={page.h1}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1024px) 90vw, 50vw"
                  />
                  <div
                    className="absolute inset-0 rounded-[24px]"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(26,39,68,0.08) 0%, transparent 60%)",
                    }}
                  />
                </div>
              )}
            </motion.div>
          )}
        </div>

        {/* Bottom fade — cinematic transition to next section */}
        <div
          className="pointer-events-none absolute bottom-0 left-0 right-0 h-40"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.04) 60%, rgba(255,255,255,0.10) 100%)",
          }}
        />
      </section>

      {/* ── 2. BENEFITS BENTO ────────────────────────────────────────────── */}
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

          <motion.div
            className="mb-14"
            initial={reduced ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.55, ease: easeOut }}
          >
            <span className="eyebrow">Ihre Vorteile</span>
            <h2
              className="mt-2 font-light text-navy"
              style={{
                fontSize: "clamp(1.75rem, 2.8vw, 2.6rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.025em",
              }}
            >
              Was Sie damit erreichen.
            </h2>
            <p className="mt-3 max-w-lg text-[16px] leading-relaxed text-cgray">
              Die wichtigsten Gründe, warum sich eine digitale Bildschirmlösung in Ihrem Alltag bewährt.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
            variants={staggerContainer}
            initial={reduced ? false : "hidden"}
            whileInView="visible"
            viewport={viewport}
          >
            {page.benefits.map((b, i) => {
              const isFirst = i === 0;
              const isLast  = i === page.benefits.length - 1;
              const num     = String(i + 1).padStart(2, "0");
              return (
                <motion.div
                  key={b.title}
                  variants={staggerItem}
                  className={`flex flex-col rounded-[18px] p-7 ${
                    isFirst || isLast ? "sm:col-span-2 lg:col-span-2" : ""
                  }`}
                  style={{
                    background: isFirst
                      ? "linear-gradient(135deg, #0d1628 0%, #1a2744 100%)"
                      : isLast
                      ? "linear-gradient(135deg, #fdf2f8 0%, #fce7f3 100%)"
                      : "#f5f5f7",
                    border: isFirst
                      ? "1px solid rgba(255,255,255,0.08)"
                      : isLast
                      ? "1px solid rgba(254,1,154,0.15)"
                      : "1px solid rgba(26,39,68,0.07)",
                  }}
                >
                  <span
                    className="mb-5 text-[11px] font-black tracking-[0.15em]"
                    style={{ color: isFirst || isLast ? "rgba(254,1,154,0.8)" : "rgba(201,168,76,0.85)" }}
                  >
                    {num}
                  </span>
                  <h3
                    className="mb-3 text-[18px] font-bold"
                    style={{ color: isFirst ? "#f3f4f6" : "#1a2744" }}
                  >
                    {b.title}
                  </h3>
                  <p
                    className="text-[14px] leading-relaxed"
                    style={{ color: isFirst ? "rgba(209,213,219,0.85)" : "#6B7280" }}
                  >
                    {b.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </section>

      {/* ── 2.5 Atmospheric parallax — branchen-specific or general loesungen ── */}
      {page.type === "branchen" && BRANCHEN_PARALLAX[page.slug] && (
        <ParallaxShowcaseSection
          eyebrow={BRANCHEN_PARALLAX[page.slug].eyebrow}
          title={BRANCHEN_PARALLAX[page.slug].title}
          text={BRANCHEN_PARALLAX[page.slug].text}
          image={BRANCHEN_PARALLAX[page.slug].image}
          imageAlt={`Digital Signage — ${BRANCHEN_PARALLAX[page.slug].eyebrow}`}
          ctaLabel="Beratung anfragen"
          ctaHref="/kontakt"
        />
      )}
      {page.type === "loesungen" && (
        <ParallaxShowcaseSection
          eyebrow="Premium Digital Signage"
          title="Digitale Kommunikation mit Tiefenwirkung."
          text="Subtile Bewegung, starke Bilder und klare Inhalte schaffen ein digitales Erlebnis, das Räume hochwertig ergänzt."
          image="/images/products/meister-signage-parallax-bg.png"
          imageAlt="Meister Signage — Premium Digital Signage Stimmungsbild"
          ctaLabel="Beratung anfragen"
          ctaHref="/kontakt"
        />
      )}

      {/* ── 3. FAQ ───────────────────────────────────────────────────────── */}
      {page.faq.length > 0 && (
        <section className="w-full bg-offwhite">
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
                <p className="mt-3 text-[15px] leading-relaxed text-cgray">
                  Antworten auf die häufigsten Fragen rund um Digital Signage für Ihren Einsatz.
                </p>
              </motion.div>

              <FAQAccordion faqs={page.faq} />

            </div>
          </div>
        </section>
      )}

      {/* ── 4. INTERNAL LINKS ────────────────────────────────────────────── */}
      {dedupedLinks.length > 0 && (
        <InternalLinksSection
          eyebrow="Verwandte Themen"
          links={dedupedLinks}
        />
      )}

      {/* ── 5. DARK CTA ──────────────────────────────────────────────────── */}
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
            {page.cta.eyebrow && (
              <span
                className="text-[11px] font-bold uppercase tracking-[0.18em]"
                style={{ color: "rgba(254,1,154,0.85)" }}
              >
                {page.cta.eyebrow}
              </span>
            )}
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
              {page.cta.title}
            </h2>
            {page.cta.subtitle && (
              <p
                className="max-w-md text-[16px] leading-relaxed"
                style={{ color: "rgba(156,163,175,0.9)" }}
              >
                {page.cta.subtitle}
              </p>
            )}
            <div className="mt-2 flex flex-wrap justify-center gap-4">
              <Link href={page.cta.primaryHref} className="btn-primary gap-2.5">
                {page.cta.primaryLabel}
                <ArrowRight className="h-4 w-4 shrink-0" strokeWidth={2} />
              </Link>
              {page.cta.secondaryHref && (
                <Link
                  href={page.cta.secondaryHref}
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
                  {page.cta.secondaryLabel}
                </Link>
              )}
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

      {/* ── 6. CONTACT ───────────────────────────────────────────────────── */}
      <ContactSection
        eyebrow="Persönlicher Kontakt"
        title="Lassen Sie uns Ihr Projekt besprechen."
        subtitle="Schildern Sie kurz, was Sie vorhaben. Wir melden uns persönlich mit einer klaren Empfehlung – innert 24 Stunden."
        contactName="Chris Meister"
        role="Gründer, Meister Signage"
        phone="+41 76 452 66 87"
        email="info@meister-signage.ch"
        whatsapp="https://wa.me/41764526687"
        imageSrc="/images/Chris-Meister.png"
      />

    </>
  );
}
