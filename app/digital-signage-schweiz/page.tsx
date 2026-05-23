"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ParallaxShowcaseSection from "@/components/sections/ParallaxShowcaseSection";
import ProblemSolutionSection from "@/components/sections/ProblemSolutionSection";
import SoftwareTeaserSection from "@/components/sections/SoftwareTeaserSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import ContactSection from "@/components/sections/ContactSection";
import JsonLd from "@/components/JsonLd";
import { faqSchema } from "@/lib/schema/faq";
import { breadcrumbSchema } from "@/lib/schema/breadcrumb";
import { serviceSchema } from "@/lib/schema/service";
import {
  LayoutDashboard,
  Zap,
  BadgeCheck,
  Receipt,
  MessageSquare,
  Users,
} from "lucide-react";

const SITE_URL = "https://www.meister-signage.ch";
const PAGE_URL = `${SITE_URL}/digital-signage-schweiz`;

const PAGE_FAQS = [
  {
    question: "Was ist Digital Signage?",
    answer:
      "Digital Signage beschreibt den Einsatz digitaler Bildschirme zur Anzeige von Informationen, Werbung, Angeboten oder interner Kommunikation. Inhalte werden zentral verwaltet und können flexibel angepasst werden.",
  },
  {
    question: "Für welche Branchen eignet sich Digital Signage?",
    answer:
      "Für Gastronomie, Hotellerie, Retail, Unternehmen und Events — also für alle Betriebe, die Informationen sichtbar und aktuell halten möchten. Besonders sinnvoll ist Digital Signage, wenn Inhalte regelmässig wechseln.",
  },
  {
    question: "Können Inhalte zentral verwaltet werden?",
    answer:
      "Ja. Über ein cloudbasiertes System werden Inhalte zentral gepflegt und gezielt auf einzelne Displays oder Gruppen ausgespielt — jederzeit und von überall.",
  },
  {
    question: "Eignet sich Digital Signage für Restaurants und Hotels?",
    answer:
      "Absolut. Digitale Menüboards, Empfangsdisplays und Gästeinformationen gehören zu den häufigsten Einsatzbereichen. Inhalte lassen sich in Sekunden aktualisieren.",
  },
  {
    question: "Können Displays gemietet werden?",
    answer:
      "Ja. Meister Signage bietet flexible Mietpakete ab CHF 129 pro Monat — inklusive Lizenz, Cloud-Steuerung und Support. Ideal für Events oder als Einstieg.",
  },
  {
    question: "Unterstützt Meister Signage bei Installation und Betreuung?",
    answer:
      "Ja. Von der Planung über die Installation bis zur laufenden Betreuung — alles aus einer Hand. Ein persönlicher Ansprechpartner begleitet Sie durch das gesamte Projekt.",
  },
];

const BRANCHEN = [
  {
    title: "Gastronomie",
    desc: "Digitale Menüboards und Tagesangebote — schnell aktualisiert, professionell präsentiert.",
    href: "/branchen/gastronomie",
    image: "/images/products/Restaurant-Meister-Signage.webp",
  },
  {
    title: "Hotellerie",
    desc: "Gäste begrüssen, informieren und begleiten — vom Empfang bis zum Event.",
    href: "/branchen/hotellerie",
    image: "/images/products/Hotelempfang-Meister-Signage.webp",
  },
  {
    title: "Retail",
    desc: "Aktionen, Preise und Markenbotschaften direkt am Point of Sale.",
    href: "/branchen/retail",
    image: "/images/products/Schuhladen-Meister-Signage.webp",
  },
  {
    title: "Unternehmen",
    desc: "Empfangsdisplays, Raumbuchungen und interne Kommunikation — zentral gesteuert.",
    href: "/branchen/unternehmen",
    image: "/images/products/Unternehmen-Empfang.webp",
  },
  {
    title: "Events",
    desc: "Zeitpläne, Wegweisung und Sponsoring — professionell und flexibel.",
    href: "/branchen/events",
    image: "/images/products/Events-Meister-Signage.webp",
  },
];

export default function DigitalSignageSchweizPage() {
  const heroRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  return (
    <>
      <JsonLd schema={faqSchema(PAGE_FAQS) as Record<string, unknown>} />
      <JsonLd
        schema={
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Digital Signage Schweiz", path: "/digital-signage-schweiz" },
          ]) as Record<string, unknown>
        }
      />
      <JsonLd
        schema={
          serviceSchema({
            name: "Digital Signage",
            description:
              "Planung und Umsetzung von Digital-Signage-Lösungen für Gastronomie, Retail, Unternehmen, Hotellerie und Events in der Schweiz.",
            url: PAGE_URL,
          }) as Record<string, unknown>
        }
      />

      {/* ── 1. Cinematic Hero ───────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative w-full overflow-hidden"
        style={{ minHeight: "clamp(520px, 63vh, 740px)" }}
      >
        <motion.div
          className="absolute inset-0"
          style={{ y: reduced ? 0 : bgY }}
        >
          <Image
            src="/images/products/Ratgeber-Wissen.webp"
            alt=""
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
            aria-hidden="true"
          />
        </motion.div>

        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(90deg, rgba(4,8,20,0.92) 0%, rgba(4,8,20,0.78) 45%, rgba(4,8,20,0.35) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 120% 100% at 50% 50%, transparent 50%, rgba(4,8,20,0.5) 100%)",
          }}
        />
        <div
          className="pointer-events-none absolute -right-40 top-0 h-full w-[700px]"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 60% 80% at 80% 40%, rgba(254,1,154,0.08) 0%, transparent 65%)",
          }}
        />
        <div
          className="pointer-events-none absolute bottom-0 left-0 right-0 h-48"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, rgba(4,8,20,0.6) 60%, rgba(4,8,20,0.85) 100%)",
          }}
        />

        <div
          className="relative mx-auto flex max-w-[1200px] flex-col justify-center px-6 py-24 md:px-10"
          style={{ minHeight: "clamp(520px, 63vh, 740px)" }}
        >
          <motion.div
            className="z-10 max-w-2xl"
            initial={reduced ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span
              className="mb-6 inline-block text-[11px] font-bold uppercase tracking-[0.18em]"
              style={{ color: "rgba(254,1,154,0.9)" }}
            >
              Digital Signage Schweiz
            </span>
            <h1
              className="mb-7 font-light leading-[0.95] tracking-tight"
              style={{
                fontSize: "clamp(2.2rem, 3.8vw, 3.6rem)",
                letterSpacing: "-0.035em",
                color: "#f3f4f6",
              }}
            >
              Digital Signage Lösungen für moderne Räume.
            </h1>
            <p
              className="mb-8 max-w-[520px] leading-relaxed"
              style={{
                fontSize: "clamp(1rem, 1.5vw, 1.15rem)",
                color: "rgba(209,213,219,0.9)",
              }}
            >
              Meister Signage plant, installiert und betreut digitale Displays
              für Restaurants, Hotels, Shops, Unternehmen und Events in der
              Schweiz.
            </p>

            <ul className="mb-10 flex flex-col gap-2.5">
              {[
                "Persönliche Beratung",
                "Installation & Betreuung aus einer Hand",
                "Inhalte zentral verwalten",
              ].map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span
                    className="mt-[3px] h-[5px] w-[5px] shrink-0 rounded-full"
                    style={{ backgroundColor: "rgba(254,1,154,0.9)" }}
                    aria-hidden="true"
                  />
                  <span
                    className="text-[14px] tracking-wide"
                    style={{ color: "rgba(209,213,219,0.9)" }}
                  >
                    {b}
                  </span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <Link href="/kontakt" className="btn-primary gap-2.5">
                Beratung anfragen
                <ArrowRight className="h-4 w-4 shrink-0" strokeWidth={2} />
              </Link>
              <Link
                href="/loesungen"
                className="inline-flex items-center gap-2.5 rounded-[7px] px-6 py-3.5 text-[15px] font-semibold transition-all duration-200 hover:border-white/30 hover:text-white"
                style={{
                  border: "1px solid rgba(255,255,255,0.14)",
                  color: "#e5e7eb",
                  minHeight: "3.5rem",
                }}
              >
                Lösungen entdecken
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 2. Problem / Solution ───────────────────────────────── */}
      <section
        className="relative w-full bg-white"
        style={{
          marginTop: "-44px",
          borderRadius: "28px 28px 0 0",
          zIndex: 10,
          boxShadow: "0 -12px 48px rgba(7,16,31,0.10)",
        }}
      >
        <ProblemSolutionSection
          eyebrow="Die Herausforderung"
          title="Viele Betriebe möchten digital kommunizieren — aber ohne komplizierte Systeme."
          subtitle="Die häufigsten Hürden sind nicht technischer Natur, sondern organisatorischer: zu viele Tools, unklare Zuständigkeiten und fehlende persönliche Beratung."
          problemsLabel="Was Betriebe bremst"
          solutionsLabel="Was Digital Signage löst"
          problems={[
            {
              title: "Inhalte müssen schnell aktualisiert werden",
              description:
                "Gedruckte Aushänge und statische Displays kommen mit der Realität nicht mit — jede Änderung erfordert neuen Aufwand.",
            },
            {
              title: "Informationen sind nicht zentral verwaltbar",
              description:
                "Mehrere Standorte oder Räume brauchen aktuelle Inhalte — aber niemand hat ein System, das das einfach koordiniert.",
            },
            {
              title: "Druckkosten entstehen laufend neu",
              description:
                "Wöchentliche Menüs, saisonale Aktionen, neue Hinweise: Drucken kostet Zeit und Geld — und ist nach wenigen Tagen veraltet.",
            },
            {
              title: "Bestehende Lösungen wirken kompliziert",
              description:
                "Viele Anbieter setzen auf Plattformen mit langen Einarbeitungszeiten und anonymem Support.",
            },
          ]}
          solutions={[
            {
              title: "Zentrale Cloud-Verwaltung",
              description:
                "Inhalte werden einmal gepflegt und erscheinen sofort auf allen zugewiesenen Displays.",
            },
            {
              title: "Inhalte flexibel und schnell steuerbar",
              description:
                "Änderungen dauern Minuten. Keine Drucksachen, kein Koordinationsaufwand.",
            },
            {
              title: "Professionelle Darstellung ohne Mehraufwand",
              description:
                "Einmal eingerichtet läuft das System selbstständig. Inhalte werden nach Zeitplan ausgespielt.",
            },
            {
              title: "Persönliche Betreuung von Anfang an",
              description:
                "Meister Signage plant mit Ihnen — nicht für Sie. Die Lösung wird so aufgesetzt, dass Sie sie im Alltag selbst bedienen können.",
            },
          ]}
        />
      </section>

      {/* ── 3. Branchen Showcase (Parallax) ─────────────────────── */}
      {BRANCHEN.map((b, i) => (
        <ParallaxShowcaseSection
          key={b.title}
          eyebrow={b.title}
          title={b.desc.split("—")[0].trim() + "."}
          text={b.desc}
          image={b.image}
          imageAlt={`Digital Signage für ${b.title}`}
          ctaLabel={`${b.title} entdecken`}
          ctaHref={b.href}
          imagePosition={i % 2 === 0 ? "right" : "left"}
          intensifyOverlay={i === 2}
        />
      ))}

      {/* ── 4. Software ─────────────────────────────────────────── */}
      <SoftwareTeaserSection />

      {/* ── 5. Vorteile ─────────────────────────────────────────── */}
      <BenefitsSection
        eyebrow="Vorteile"
        title="Warum Betriebe auf Digital Signage setzen."
        subtitle="Messbare Vorteile — in der täglichen Bedienung, im professionellen Auftritt und in der langfristigen Kostenentwicklung."
        benefits={[
          {
            icon: LayoutDashboard,
            title: "Inhalte zentral verwalten",
            description:
              "Ein System, alle Displays. Inhalte werden zentral gepflegt und gezielt ausgespielt.",
          },
          {
            icon: Zap,
            title: "Informationen sofort aktualisieren",
            description:
              "Tagesangebote, Öffnungszeiten, Hinweise — Änderungen erscheinen sofort auf allen Displays.",
          },
          {
            icon: BadgeCheck,
            title: "Professionelle Wirkung",
            description:
              "Hochwertige Displays und sauber gestaltete Inhalte hinterlassen einen modernen Eindruck.",
          },
          {
            icon: Receipt,
            title: "Weniger Druckkosten",
            description:
              "Digitale Inhalte ersetzen gedruckte Aushänge — spart langfristig Geld und Aufwand.",
          },
          {
            icon: MessageSquare,
            title: "Flexible Kommunikation",
            description:
              "Inhalte nach Uhrzeit, Wochentag oder Saison automatisch planen und ausspielen.",
          },
          {
            icon: Users,
            title: "Moderne Information",
            description:
              "Nicht nur extern: Auch intern lassen sich Kennzahlen, News und Hinweise sichtbar machen.",
          },
        ]}
      />

      {/* ── 6. FAQ ──────────────────────────────────────────────── */}
      <FAQSection
        eyebrow="Häufige Fragen"
        title="Häufige Fragen zu Digital Signage."
        subtitle="Die wichtigsten Antworten für Betriebe, die Digital Signage sinnvoll einsetzen möchten."
        faqs={PAGE_FAQS}
      />

      {/* ── 7. CTA ──────────────────────────────────────────────── */}
      <CTASection
        eyebrow="Projekt besprechen"
        title="Bereit für Digital Signage in Ihrem Betrieb?"
        subtitle="Gemeinsam finden wir die passende Lösung — persönlich geplant und sauber umgesetzt."
        primaryCta={{ label: "Beratung anfragen", href: "/kontakt" }}
        secondaryCta={{ label: "Lösungen ansehen", href: "/loesungen" }}
      />

      {/* ── 8. Contact ──────────────────────────────────────────── */}
      <ContactSection
        eyebrow="Persönlicher Kontakt"
        title="Digital Signage für Ihren Betrieb?"
        subtitle="Schreiben Sie kurz, was Sie vorhaben. Wir melden uns persönlich — innert 24 Stunden."
        imageSrc="/images/Chris-Meister.webp"
      />
    </>
  );
}
