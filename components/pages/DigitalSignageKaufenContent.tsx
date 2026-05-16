"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight, Check, Plus, Minus,
  MapPin, User, Layers, RefreshCw, Zap,
  TrendingUp, Banknote, Settings2, BadgeCheck, UserCheck,
} from "lucide-react";
import { viewport, easeOut, staggerContainer, staggerItem } from "@/lib/motion";

/* ─── Data ───────────────────────────────────────────────────────────────── */

const products = [
  {
    model: "Spark 3",
    size: '32"',
    spec: "Full HD",
    tag: "Einstieg",
    desc: "Kompakt und präzise — ideal für Menüboards, Theken und Point-of-Sale.",
    imageSrc: "/images/products/Spark3-Design.webp",
  },
  {
    model: "Spark 4",
    size: '43"',
    spec: "4K UHD",
    tag: "Bestseller",
    desc: "Vielseitig und präsent — für Retail, Hotellerie und Unternehmen.",
    imageSrc: "/images/products/Spark4-Design.webp",
  },
  {
    model: "Spark 5",
    size: '50"',
    spec: "4K UHD",
    tag: "Premium",
    desc: "Grossflächig und dominant — für Flagship-Auftritte und grosse Räume.",
    imageSrc: "/images/products/Spark5-Design.webp",
  },
  {
    model: "Spark Q+",
    size: '33"',
    spec: "4K quadr.",
    tag: "Unique",
    desc: "Das quadratische Format für kreative Konzepte und besondere Räume.",
    imageSrc: "/images/products/SparkQ-Design.webp",
  },
];

const benefits = [
  {
    icon: TrendingUp,
    title: "Langfristige Investition",
    desc: "Nach der Amortisation arbeitet Ihr Display ohne laufende Hardwarekosten für Sie — über viele Jahre.",
  },
  {
    icon: Banknote,
    title: "Keine Mietkosten",
    desc: "Einmal kaufen, dauerhaft nutzen. Monatliche Kosten nur für die Software-Lizenz.",
  },
  {
    icon: Settings2,
    title: "Volle Kontrolle",
    desc: "Inhalte, Layout und Konfiguration jederzeit anpassbar — ohne Einschränkungen durch den Anbieter.",
  },
  {
    icon: BadgeCheck,
    title: "Professionelle Wirkung",
    desc: "Hochwertige Displays aus dem Spark-Sortiment für einen modernen Auftritt in jeder Branche.",
  },
  {
    icon: Zap,
    title: "Einfache Bedienung",
    desc: "Inhalte aktualisieren ohne IT-Kenntnisse — so eingerichtet, dass es im Alltag wirklich funktioniert.",
  },
  {
    icon: UserCheck,
    title: "Persönliche Betreuung",
    desc: "Ein direkter Ansprechpartner — von der Auswahl über die Einrichtung bis zum laufenden Betrieb.",
  },
];

const environments = [
  {
    category: "Retail & Handel",
    headline: "Marken am Point of Sale inszenieren.",
    body: "Digitale Inhalte machen Kollektionen, Aktionen und Kampagnen sichtbar — direkt dort, wo Kaufentscheidungen entstehen. Mit eigenem Display volle Kontrolle über jeden Frame.",
    bullets: ["Kampagnen zentral steuern", "Produkte emotional präsentieren", "Aufmerksamkeit im Verkaufsraum erhöhen"],
    href: "/branchen/retail",
    cta: "Retail entdecken",
    imageSrc: "/images/products/Schuhladen-Meister-Signage.webp",
    imageAlt: "Digital Signage Retail — Displays im Schuhgeschäft",
  },
  {
    category: "Gastronomie",
    headline: "Menüs digital. Immer aktuell.",
    body: "Tagesangebote, Preise und Aktionen klar und modern kommuniziert. Kein Drucken, kein Austauschen — Inhalte in Sekunden aktualisiert.",
    bullets: ["Tagesmenüs schnell ändern", "Aktionen sichtbar platzieren", "Professioneller Auftritt ohne Aufwand"],
    href: "/branchen/gastronomie",
    cta: "Gastronomie entdecken",
    imageSrc: "/images/products/Restaurant-Meister-Signage.webp",
    imageAlt: "Digital Signage Gastronomie — Menüboard im Restaurant",
  },
  {
    category: "Hotellerie",
    headline: "Gäste orientieren. Atmosphäre bewahren.",
    body: "Willkommen, Services und Veranstaltungen elegant präsentiert — ohne den Charakter des Raums zu stören. Ein Display, das zur Marke passt.",
    bullets: ["Willkommen & Orientierung", "Events und Services anzeigen", "Hochwertiger erster Eindruck"],
    href: "/branchen/hotellerie",
    cta: "Hotellerie entdecken",
    imageSrc: "/images/products/Hotelempfang-Meister-Signage.webp",
    imageAlt: "Digital Signage Hotel — Empfangsdisplay in der Lobby",
  },
  {
    category: "Unternehmen",
    headline: "Ein Empfang, der professionell kommuniziert.",
    body: "Begrüssung, interne Informationen, Termine und Besucherführung — digital, klar und repräsentativ. Der erste Eindruck zählt.",
    bullets: ["Besucher professionell begrüssen", "Termine und Räume anzeigen", "Moderne Büroatmosphäre schaffen"],
    href: "/branchen/unternehmen",
    cta: "Unternehmen entdecken",
    imageSrc: "/images/products/Unternehmen-Empfang.webp",
    imageAlt: "Digital Signage Unternehmen — Display im Büroempfang",
  },
  {
    category: "Events & Messen",
    headline: "Informationen — genau dann, genau dort.",
    body: "Agenda, Raumhinweise, Sponsoren und Live-Updates kurzfristig anpassbar. Ihr eigenes Display ist auch nach der Veranstaltung im Einsatz.",
    bullets: ["Agenda und Wegführung", "Sponsoren sichtbar machen", "Inhalte kurzfristig ändern"],
    href: "/branchen/events",
    cta: "Events entdecken",
    imageSrc: "/images/products/Events-Meister-Signage.webp",
    imageAlt: "Digital Signage Events — Displays für Messen und Tagungen",
  },
];

const trustItems = [
  { icon: MapPin,    label: "Schweizer Betreuung",     desc: "Lokaler Ansprechpartner aus der Zentralschweiz" },
  { icon: User,      label: "Persönliche Installation", desc: "Einrichtung vor Ort — betriebsbereit ab Tag 1" },
  { icon: Layers,    label: "Hardware + Software",      desc: "Alles aus einer Hand, ohne Schnittstellenprobleme" },
  { icon: RefreshCw, label: "Einfache Inhaltspflege",   desc: "Inhalte selbst aktualisieren — ohne IT-Wissen" },
  { icon: Zap,       label: "Kein IT-Aufwand",          desc: "Plug & Play — wir kümmern uns um die Technik" },
];

const faqs = [
  {
    question: "Was ist im Kaufpreis enthalten?",
    answer: "Im Kaufpreis ist die Hardware enthalten. Software-Lizenz, Einrichtung, Versand und laufender Support werden separat ausgewiesen und im Angebot transparent aufgeführt.",
  },
  {
    question: "Wie lange dauert die Einrichtung und Inbetriebnahme?",
    answer: "In vielen Fällen ist eine einfache Lösung innerhalb weniger Stunden betriebsbereit. Bei komplexeren Projekten mit mehreren Standorten planen wir gemeinsam den Ablauf – transparent und ohne Überraschungen.",
  },
  {
    question: "Gibt es Garantie auf die Hardware?",
    answer: "Ja. Die Geräte kommen mit Herstellergarantie. Für darüber hinausgehende Servicevereinbarungen sprechen wir die Bedingungen individuell ab.",
  },
  {
    question: "Kann ich die Inhalte selbst anpassen?",
    answer: "Ja. Die Lösung wird so eingerichtet, dass Inhalte einfach und zentral aktualisiert werden können – ohne IT-Kenntnisse. Auf Wunsch übernehmen wir auch die laufende Inhaltspflege.",
  },
  {
    question: "Ist späteres Erweitern auf mehrere Screens möglich?",
    answer: "Ja. Viele Betriebe starten mit einem Screen und erweitern Schritt für Schritt. Die Plattform ist darauf ausgelegt, mehrere Standorte und Anzeigeflächen zentral zu steuern.",
  },
  {
    question: "Was ist der Unterschied zwischen kaufen und mieten?",
    answer: "Beim Kauf investieren Sie einmalig in eigene Hardware – langfristig günstiger und mit mehr Kontrolle. Die Miete eignet sich für temporäre Einsätze oder wenn zunächst kein Kapital gebunden werden soll.",
  },
];

/* ─── FAQ Accordion ──────────────────────────────────────────────────────── */

function FAQAccordion() {
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
                style={{
                  background: isOpen ? "var(--magenta)" : "rgba(26,39,68,0.08)",
                }}
              >
                {isOpen
                  ? <Minus className="h-3.5 w-3.5 text-white" strokeWidth={2.5} />
                  : <Plus className="h-3.5 w-3.5 text-navy/60" strokeWidth={2.5} />}
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

export default function DigitalSignageKaufenContent() {
  const reduced = useReducedMotion();

  return (
    <>

      {/* ── 1. HERO ───────────────────────────────────────────────────────── */}
      <section
        className="relative w-full overflow-hidden"
        style={{
          background: "linear-gradient(160deg, #07101f 0%, #0d1628 50%, #111d38 100%)",
          minHeight: "92vh",
        }}
      >
        {/* Noise texture */}
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
            backgroundSize: "160px 160px",
            opacity: 0.025,
          }}
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

        <div className="relative mx-auto grid min-h-[92vh] max-w-[1200px] grid-cols-1 items-center gap-12 px-6 py-28 md:px-10 lg:grid-cols-2 lg:gap-0 lg:py-0">

          {/* Text */}
          <motion.div
            className="z-10 max-w-xl"
            initial={reduced ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeOut }}
          >
            <span
              className="mb-6 inline-block text-[11px] font-bold uppercase tracking-[0.18em]"
              style={{ color: "rgba(254,1,154,0.9)" }}
            >
              Digital Signage kaufen
            </span>

            <h1
              className="mb-7 font-light leading-[0.95] tracking-tight"
              style={{
                fontSize: "clamp(2.2rem, 3.8vw, 3.6rem)",
                letterSpacing: "-0.035em",
                color: "#f3f4f6",
              }}
            >
              Investieren Sie <span style={{ color: "#ffffff" }}>einmal.</span>
              <br />
              Kommunizieren Sie <span style={{ color: "#ffffff" }}>dauerhaft.</span>
            </h1>

            <p
              className="mb-10 max-w-[440px] leading-relaxed"
              style={{ fontSize: "clamp(1rem, 1.5vw, 1.15rem)", color: "rgba(209,213,219,0.9)" }}
            >
              Schlüsselfertige Digital-Signage-Displays für Gastronomie, Retail, Hotellerie und Unternehmen. Persönlich geplant, eingerichtet und betreut.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/kontakt" className="btn-primary gap-2.5">
                Beratung anfragen
                <ArrowRight className="h-4 w-4 shrink-0" strokeWidth={2} />
              </Link>
              <Link
                href="#sortiment"
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
                Sortiment ansehen
              </Link>
            </div>

            {/* Trust micro */}
            <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3">
              {["Herstellergarantie", "Schweizer Support", "Persönliche Beratung"].map((t) => (
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

          {/* Hero Image */}
          <motion.div
            className="relative flex items-center justify-center lg:justify-end"
            initial={reduced ? false : { opacity: 0, scale: 0.96, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, ease: easeOut, delay: 0.15 }}
          >
            {/* Glow behind image */}
            <div
              className="pointer-events-none absolute inset-0"
              aria-hidden="true"
              style={{
                background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(254,1,154,0.15) 0%, transparent 65%)",
              }}
            />
            <div className="relative w-full max-w-[560px]">
              <Image
                src="/images/products/Spark5-Design.webp"
                alt="Meister Signage Spark 5 — 50 Zoll Display"
                width={1400}
                height={900}
                className="w-full"
                priority
                style={{
                  filter: "drop-shadow(0 0 2px rgba(254,1,154,0.9)) drop-shadow(0 0 6px rgba(254,1,154,0.35))",
                }}
              />
            </div>
          </motion.div>

        </div>

        {/* Bottom fade to white */}
        <div
          className="pointer-events-none absolute bottom-0 left-0 right-0 h-24"
          aria-hidden="true"
          style={{
            background: "linear-gradient(to bottom, transparent, rgba(7,16,31,0.0))",
          }}
        />
      </section>

      {/* ── 2. VALUE STRIP ───────────────────────────────────────────────── */}
      <section className="w-full bg-white">
        <div className="section-inner-compact">
          <motion.div
            className="grid grid-cols-1 gap-px sm:grid-cols-3"
            style={{ backgroundColor: "rgba(26,39,68,0.07)" }}
            variants={staggerContainer}
            initial={reduced ? false : "hidden"}
            whileInView="visible"
            viewport={viewport}
          >
            {[
              {
                number: "01",
                title: "Einmalige Investition",
                desc: "Keine laufenden Mietkosten für die Hardware — langfristig die wirtschaftlichere Wahl.",
              },
              {
                number: "02",
                title: "Schlüsselfertig",
                desc: "Wir planen, liefern, installieren und richten ein. Betriebsbereit ab dem ersten Tag.",
              },
              {
                number: "03",
                title: "Persönlich betreut",
                desc: "Ein direkter Ansprechpartner aus der Schweiz — von der Auswahl bis zum Betrieb.",
              },
            ].map((item) => (
              <motion.div
                key={item.number}
                variants={staggerItem}
                className="flex flex-col gap-4 bg-white px-8 py-10"
              >
                <span
                  className="text-[11px] font-black tracking-[0.15em]"
                  style={{ color: "rgba(254,1,154,0.7)" }}
                >
                  {item.number}
                </span>
                <h3 className="text-[18px] font-bold text-navy">{item.title}</h3>
                <p className="text-[14px] leading-relaxed text-cgray">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 3. PRODUCT SHOWCASE ──────────────────────────────────────────── */}
      <section className="w-full bg-offwhite" id="sortiment">
        <div className="section-inner">

          <motion.div
            className="mb-16"
            initial={reduced ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.55, ease: easeOut }}
          >
            <span className="eyebrow">Das Spark-Sortiment</span>
            <h2
              className="mt-2 font-light text-navy"
              style={{ fontSize: "clamp(1.75rem, 2.8vw, 2.6rem)", lineHeight: 1.1, letterSpacing: "-0.025em" }}
            >
              Vier Modelle. Ein Standard.
            </h2>
            <p className="mt-3 max-w-lg text-[16px] leading-relaxed text-cgray">
              Von der kompakten Thekenanzeige bis zum grossen Promo-Display — jedes Modell ist für professionellen Dauerbetrieb gebaut.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
            variants={staggerContainer}
            initial={reduced ? false : "hidden"}
            whileInView="visible"
            viewport={viewport}
          >
            {products.map((product) => (
              <motion.div
                key={product.model}
                variants={staggerItem}
                className="group flex flex-col overflow-hidden rounded-[20px] bg-white"
                style={{
                  boxShadow: "0 2px 20px rgba(26,39,68,0.07), 0 0 0 1px rgba(26,39,68,0.055)",
                  transition: "box-shadow 280ms ease, transform 280ms cubic-bezier(0.34,1.2,0.64,1)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(26,39,68,0.13), 0 0 0 1px rgba(26,39,68,0.08)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 20px rgba(26,39,68,0.07), 0 0 0 1px rgba(26,39,68,0.055)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                {/* Image area */}
                <div
                  className="relative flex aspect-[4/3] items-center justify-center overflow-hidden"
                  style={{
                    background: "linear-gradient(145deg, #0d1628 0%, #1a2744 60%, #0a1020 100%)",
                  }}
                >
                  <Image
                    src={product.imageSrc}
                    alt={`${product.model} – Digital Signage Display`}
                    fill
                    className="object-contain p-6 transition-transform duration-500 ease-out will-change-transform group-hover:scale-[1.05]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  {/* Tag */}
                  <div className="absolute left-4 top-4">
                    <span
                      className="rounded-full px-3 py-1 text-[9px] font-black uppercase tracking-[0.14em] text-white backdrop-blur-sm"
                      style={{ background: "rgba(254,1,154,0.75)" }}
                    >
                      {product.tag}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3 flex items-baseline gap-2">
                    <span className="text-[22px] font-black tracking-tight text-navy">{product.model}</span>
                    <span className="text-[13px] font-semibold text-cgray">{product.size} · {product.spec}</span>
                  </div>
                  <p className="mb-5 text-[13px] leading-relaxed text-cgray">{product.desc}</p>
                  <Link
                    href="/kontakt"
                    className="mt-auto inline-flex items-center gap-1.5 text-[12px] font-bold uppercase tracking-[0.1em] text-magenta transition-colors duration-150 hover:text-navy"
                  >
                    Anfragen
                    <ArrowRight className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-1" strokeWidth={2.5} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Note */}
          <motion.p
            className="mt-8 text-center text-[12px] text-cgray/60"
            initial={reduced ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewport}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Preise exkl. MwSt. · Einrichtung, Versand und Software separat ausgewiesen · Individuelle Angebote auf Anfrage
          </motion.p>

        </div>
      </section>

      {/* ── 4. BENEFITS BENTO ────────────────────────────────────────────── */}
      <section className="w-full bg-white">
        <div className="section-inner">

          <motion.div
            className="mb-16"
            initial={reduced ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.55, ease: easeOut }}
          >
            <span className="eyebrow">Warum kaufen?</span>
            <h2
              className="mt-2 font-light text-navy"
              style={{ fontSize: "clamp(1.75rem, 2.8vw, 2.6rem)", lineHeight: 1.1, letterSpacing: "-0.025em" }}
            >
              Investieren Sie einmal. Profitieren Sie langfristig.
            </h2>
            <p className="mt-3 max-w-lg text-[16px] leading-relaxed text-cgray">
              Wer dauerhaft mit Digital Signage arbeitet, ist mit eigener Hardware meist besser aufgestellt als mit einem dauerhaften Mietmodell.
            </p>
          </motion.div>

          {/* Bento grid */}
          <motion.div
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
            variants={staggerContainer}
            initial={reduced ? false : "hidden"}
            whileInView="visible"
            viewport={viewport}
          >
            {benefits.map((b, i) => {
              const Icon = b.icon;
              const isFirst = i === 0;
              const isLast = i === benefits.length - 1;
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
                  <div
                    className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl"
                    style={{
                      background: isFirst
                        ? "rgba(254,1,154,0.15)"
                        : isLast
                        ? "rgba(254,1,154,0.12)"
                        : "rgba(26,39,68,0.07)",
                    }}
                  >
                    <Icon
                      className="h-5 w-5"
                      style={{
                        color: isFirst || isLast ? "#fe019a" : "#1a2744",
                      }}
                      strokeWidth={1.75}
                    />
                  </div>
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
                    {b.desc}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </section>

      {/* ── 5. ENVIRONMENTS / USE CASES ──────────────────────────────────── */}
      <section className="w-full bg-offwhite">
        <div className="section-inner">

          <motion.div
            className="mb-4"
            initial={reduced ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.52, ease: easeOut }}
          >
            <span className="eyebrow">Anwendungen</span>
            <h2
              className="mt-2 font-light text-navy"
              style={{ fontSize: "clamp(1.75rem, 2.8vw, 2.6rem)", lineHeight: 1.1, letterSpacing: "-0.025em" }}
            >
              Für jeden Raum die richtige Lösung.
            </h2>
          </motion.div>

          <div>
            {environments.map((env, i) => {
              const isRtl = i % 2 !== 0;
              return (
                <article
                  key={env.category}
                  className="border-t py-16 sm:py-20 lg:py-24"
                  style={{ borderColor: "rgba(26,39,68,0.07)" }}
                >
                  <div
                    className={`grid grid-cols-1 gap-10 lg:items-center lg:gap-16 ${
                      isRtl ? "lg:grid-cols-[44fr_56fr]" : "lg:grid-cols-[56fr_44fr]"
                    }`}
                  >
                    {/* Image */}
                    <motion.div
                      className={isRtl ? "lg:order-2" : ""}
                      initial={reduced ? false : { opacity: 0, x: isRtl ? 32 : -32 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={viewport}
                      transition={{ duration: 0.65, ease: easeOut }}
                    >
                      <div
                        className="group relative overflow-hidden rounded-[24px]"
                        style={{
                          aspectRatio: "4/3",
                          boxShadow: "0 20px 60px rgba(26,39,68,0.12), 0 4px 16px rgba(26,39,68,0.06)",
                        }}
                      >
                        <Image
                          src={env.imageSrc}
                          alt={env.imageAlt}
                          fill
                          className="object-cover transition-transform duration-700 ease-out will-change-transform group-hover:scale-[1.04]"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 56vw"
                        />
                        <div
                          className="absolute inset-0 rounded-[24px]"
                          style={{
                            background: "linear-gradient(135deg, rgba(26,39,68,0.06) 0%, transparent 60%)",
                          }}
                        />
                      </div>
                    </motion.div>

                    {/* Text */}
                    <motion.div
                      className={`relative ${isRtl ? "lg:order-1" : ""}`}
                      initial={reduced ? false : { opacity: 0, x: isRtl ? -28 : 28 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={viewport}
                      transition={{ duration: 0.65, ease: easeOut, delay: 0.1 }}
                    >
                      <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.16em] text-gold">
                        {env.category}
                      </p>
                      <h3
                        className="mb-5 font-light text-navy"
                        style={{
                          fontSize: "clamp(1.6rem, 2.6vw, 2.4rem)",
                          lineHeight: 1.1,
                          letterSpacing: "-0.025em",
                        }}
                      >
                        {env.headline}
                      </h3>
                      <p className="mb-7 text-[16px] leading-relaxed text-cgray">{env.body}</p>
                      <ul className="mb-9 space-y-2.5">
                        {env.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-3">
                            <span className="mt-[3px] flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-gold/12">
                              <Check className="h-[10px] w-[10px] text-gold" strokeWidth={3} />
                            </span>
                            <span className="text-[15px] leading-snug text-navy/75">{b}</span>
                          </li>
                        ))}
                      </ul>
                      <Link
                        href={env.href}
                        className="group/cta inline-flex items-center gap-2 text-[14px] font-semibold text-navy transition-colors duration-150 hover:text-magenta"
                      >
                        {env.cta}
                        <ArrowRight
                          className="h-3.5 w-3.5 transition-transform duration-200 group-hover/cta:translate-x-1"
                          strokeWidth={2.5}
                        />
                      </Link>
                    </motion.div>
                  </div>
                </article>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── 6. TRUST SECTION ─────────────────────────────────────────────── */}
      <section
        className="relative w-full overflow-hidden"
        style={{ backgroundColor: "#0d1628" }}
      >
        {/* Noise */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          aria-hidden="true"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
            backgroundSize: "160px 160px",
          }}
        />
        {/* Glow */}
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2"
          aria-hidden="true"
          style={{
            background: "radial-gradient(ellipse, rgba(254,1,154,0.10) 0%, transparent 70%)",
          }}
        />

        <div className="relative section-inner">

          <motion.div
            className="mb-14 max-w-xl"
            initial={reduced ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.55, ease: easeOut }}
          >
            <span
              className="mb-4 block text-[11px] font-bold uppercase tracking-[0.18em]"
              style={{ color: "rgba(254,1,154,0.85)" }}
            >
              Warum Meister Signage
            </span>
            <h2
              className="font-light"
              style={{
                fontSize: "clamp(1.75rem, 2.8vw, 2.6rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.025em",
                color: "#f3f4f6",
              }}
            >
              Nicht nur ein Display — eine vollständige Lösung.
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed" style={{ color: "rgba(156,163,175,0.9)" }}>
              Von der Auswahl über die Installation bis zum laufenden Support — alles aus einer Hand.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5"
            variants={staggerContainer}
            initial={reduced ? false : "hidden"}
            whileInView="visible"
            viewport={viewport}
          >
            {trustItems.map(({ icon: Icon, label, desc }) => (
              <motion.div
                key={label}
                variants={staggerItem}
                className="flex flex-col gap-4 rounded-[16px] p-6"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{ background: "rgba(254,1,154,0.14)" }}
                >
                  <Icon className="h-5 w-5" style={{ color: "#fe019a" }} strokeWidth={1.75} />
                </div>
                <div>
                  <p className="mb-1.5 text-[14px] font-bold" style={{ color: "#f3f4f6" }}>{label}</p>
                  <p className="text-[12px] leading-relaxed" style={{ color: "rgba(156,163,175,0.8)" }}>{desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Process steps */}
          <motion.div
            className="mt-16 border-t pt-14"
            style={{ borderColor: "rgba(255,255,255,0.07)" }}
            initial={reduced ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.55, ease: easeOut }}
          >
            <p className="mb-10 text-[11px] font-bold uppercase tracking-[0.18em]" style={{ color: "rgba(156,163,175,0.6)" }}>
              So läuft ein Kauf ab
            </p>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { n: "01", title: "Beratung",   body: "Wir klären Einsatzort, Grösse und Anforderungen persönlich." },
                { n: "02", title: "Angebot",    body: "Klares, transparentes Angebot — keine versteckten Kosten." },
                { n: "03", title: "Einrichtung",body: "Lieferung, Montage und Inhaltsvorbereitung durch uns." },
                { n: "04", title: "Betrieb",    body: "Sie verwalten Inhalte selbst — mit Support bei Bedarf." },
              ].map((step) => (
                <div key={step.n} className="flex flex-col gap-4">
                  <span
                    className="text-[13px] font-black tracking-tight"
                    style={{ color: "#fe019a" }}
                  >
                    {step.n}
                  </span>
                  <p className="text-[16px] font-bold" style={{ color: "#e5e7eb" }}>{step.title}</p>
                  <p className="text-[13px] leading-relaxed" style={{ color: "rgba(156,163,175,0.8)" }}>{step.body}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* ── 7. FAQ ───────────────────────────────────────────────────────── */}
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
                style={{ fontSize: "clamp(1.75rem, 2.8vw, 2.4rem)", lineHeight: 1.1, letterSpacing: "-0.025em" }}
              >
                Was Sie vor dem Kauf wissen sollten.
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-cgray">
                Antworten auf die häufigsten Fragen rund um den Kauf von Digital-Signage-Displays.
              </p>
            </motion.div>

            <FAQAccordion />

          </div>
        </div>
      </section>

      {/* ── 8. FINAL CTA ─────────────────────────────────────────────────── */}
      <section
        className="relative w-full overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0d1628 0%, #1a2744 100%)" }}
      >
        {/* Noise */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          aria-hidden="true"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
            backgroundSize: "160px 160px",
          }}
        />
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(254,1,154,0.09) 0%, transparent 60%)",
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
              Jetzt anfragen
            </span>
            <h2
              className="font-light"
              style={{
                fontSize: "clamp(2rem, 3.5vw, 3.6rem)",
                lineHeight: 1.0,
                letterSpacing: "-0.03em",
                color: "#f3f4f6",
                maxWidth: "22ch",
              }}
            >
              Bereit für Ihr erstes Display?
            </h2>
            <p
              className="max-w-md text-[16px] leading-relaxed"
              style={{ color: "rgba(156,163,175,0.9)" }}
            >
              Schildern Sie kurz Ihren Einsatz. Wir zeigen Ihnen, welches Modell passt und was die Lösung insgesamt kostet — persönlich, innert 24h.
            </p>
            <div className="mt-2 flex flex-wrap justify-center gap-4">
              <Link href="/kontakt" className="btn-primary gap-2.5">
                Beratung anfragen
                <ArrowRight className="h-4 w-4 shrink-0" strokeWidth={2} />
              </Link>
              <Link
                href="/was-kostet-digital-signage-schweiz"
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
                Kosten & Preise
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

    </>
  );
}
