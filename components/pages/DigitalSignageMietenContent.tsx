"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { m as motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight, Plus, Minus, Check,
  MapPin, User, Layers, RefreshCw, Zap,
  CalendarRange, Banknote, BadgeCheck, MonitorPlay,
} from "lucide-react";
import { viewport, easeOut, staggerContainer, staggerItem } from "@/lib/motion";

/* ─── Data ───────────────────────────────────────────────────────────────── */

const packages = [
  {
    model: "Spark 3",
    size: '32"',
    spec: "Full HD",
    price: 129,
    desc: "Kompakt und präzise — ideal für Theken, Point-of-Sale und kleine Flächen.",
    imageSrc: "/images/products/Spark3-Design.webp",
  },
  {
    model: "Spark 4",
    size: '43"',
    spec: "4K UHD",
    price: 139,
    desc: "Vielseitig und präsent — für Retail, Hotellerie und Gastronomie.",
    imageSrc: "/images/products/Spark4-Design.webp",
  },
  {
    model: "Spark 5",
    size: '50"',
    spec: "4K UHD",
    price: 149,
    badge: "Populär",
    desc: "Grossflächig und dominant — perfekt für Events, Messen und grosse Räume.",
    imageSrc: "/images/products/Spark5-Design.webp",
  },
  {
    model: "Spark Q+",
    size: '33"',
    spec: "Full HD quadr.",
    price: 159,
    desc: "Das quadratische Format für kreative Konzepte und besondere Inszenierungen.",
    imageSrc: "/images/products/SparkQ-Design.webp",
  },
];

const benefits = [
  {
    icon: Banknote,
    title: "Keine Kapitalbindung",
    desc: "Kein grosser Vorabkauf — Sie starten mit einem flexiblen Mietbetrag und bleiben finanziell beweglich.",
  },
  {
    icon: CalendarRange,
    title: "Flexibel skalierbar",
    desc: "Screens nach Bedarf anpassen, erweitern oder zurückgeben — ohne gebundenes Inventar.",
  },
  {
    icon: Zap,
    title: "Ideal für Events & Kampagnen",
    desc: "Für Messen, Veranstaltungen, saisonale Promotionen oder Pop-ups: professioneller Auftritt ohne dauerhaften Aufwand.",
  },
  {
    icon: BadgeCheck,
    title: "Lizenz inklusive",
    desc: "Die Software-Lizenz ist in jedem Paket enthalten. Keine versteckten Zusatzkosten.",
  },
  {
    icon: MonitorPlay,
    title: "Einfache Bedienung",
    desc: "Inhalte ohne IT-Kenntnisse aktualisieren — so eingerichtet, dass es im Alltag wirklich funktioniert.",
  },
  {
    icon: User,
    title: "Persönliche Betreuung",
    desc: "Direkte Unterstützung von der Auswahl über die Einrichtung bis zum laufenden Betrieb.",
  },
];

const useCases = [
  {
    category: "Events & Messen",
    headline: "Professionell kommunizieren — ohne Equipment kaufen.",
    body: "Agenda, Wegführung, Sponsoren und Live-Updates kurzfristig anpassbar. Nach der Veranstaltung geben Sie den Screen einfach zurück.",
    bullets: ["Agenda und Raumhinweise digital", "Sponsoren sichtbar platzieren", "Kurzfristige Inhaltsänderung"],
    imageSrc: "/images/products/Events-Meister-Signage.webp",
    imageAlt: "Digital Signage Events — Displays für Messen und Tagungen",
    href: "/branchen/events",
    cta: "Events entdecken",
  },
  {
    category: "Gastronomie",
    headline: "Tagesmenüs und Aktionen immer aktuell.",
    body: "Kein Drucken, kein Austauschen. Mit einem gemieteten Menüboard sind Angebote und Preise in Sekunden aktualisiert.",
    bullets: ["Tagesmenüs schnell anpassen", "Aktionen spontan einblenden", "Professioneller Auftritt ohne Aufwand"],
    imageSrc: "/images/products/Restaurant-Meister-Signage.webp",
    imageAlt: "Digital Signage Gastronomie — gemietetes Menüboard im Restaurant",
    href: "/branchen/gastronomie",
    cta: "Gastronomie entdecken",
  },
  {
    category: "Retail & Pop-up",
    headline: "Temporär präsent — ohne Kompromisse.",
    body: "Für saisonale Aktionen, Pop-up-Stores und Schaufenster-Kampagnen: hochwertiger Auftritt für den genauen Zeitraum, den Sie brauchen.",
    bullets: ["Kampagnen zeitlich begrenzt zeigen", "Kein dauerhaftes Inventar", "Schnell einsatzbereit"],
    imageSrc: "/images/products/Schuhladen-Meister-Signage.webp",
    imageAlt: "Digital Signage Retail — gemieteter Screen im Schuhgeschäft",
    href: "/branchen/retail",
    cta: "Retail entdecken",
  },
  {
    category: "Mobile Lösungen",
    headline: "Aufmerksamkeit dort, wo Menschen vorbeigehen.",
    body: "Mobile Displays, digitale Kundenstopper, doppelseitige Lösungen und temporäre Besucherführung — perfekt für wechselnde Standorte, Events und Promotions.",
    bullets: ["Flexible Standorte", "Doppelseitige Sichtbarkeit möglich", "Temporäre Besucherführung"],
    imageSrc: "/images/products/Unternehmen-Empfang.webp",
    imageAlt: "Mobile Digital-Signage-Displays und Kundenstopper",
    href: "/loesungen/mobile-displays",
    cta: "Mobile Lösungen entdecken",
  },
];

const trustItems = [
  { icon: MapPin,    label: "Schweizer Betreuung",     desc: "Lokaler Ansprechpartner aus der Zentralschweiz" },
  { icon: User,      label: "Persönliche Einrichtung",  desc: "Einrichtung vor Ort oder remote — betriebsbereit ab Tag 1" },
  { icon: Layers,    label: "Alles inklusive",          desc: "Hardware, Lizenz und Support aus einer Hand" },
  { icon: RefreshCw, label: "Flexible Laufzeit",        desc: "Keine langfristige Bindung — jederzeit anpassbar" },
  { icon: Zap,       label: "Kein IT-Aufwand",          desc: "Plug & Play — wir kümmern uns um die Technik" },
];

const rentalCategories = [
  {
    title: "Mobile Displays",
    desc: "Flexibel platzierbar, ideal für Eingänge, Promotionen und Events ohne feste Installation.",
    href: "/loesungen/mobile-displays",
  },
  {
    title: "Doppelseitige Displays",
    desc: "Sichtbarkeit aus zwei Richtungen – Orientierung auf einer Seite, Branding auf der anderen.",
    href: "/loesungen/doppelseitige-displays",
  },
  {
    title: "Eventdisplays",
    desc: "Für Messen, Tagungen und Anlässe – inkl. Aufbau, Inhaltsvorbereitung und Rückgabe.",
    href: "/branchen/events",
  },
  {
    title: "Menüboards",
    desc: "Digitale Menüboards für Gastronomie und Retail – Tagesangebote in Sekunden aktualisiert.",
    href: "/loesungen/digitale-menueboards",
  },
  {
    title: "Empfangsdisplays",
    desc: "Begrüssen, informieren, orientieren – auch temporär an Standorten ohne feste Installation.",
    href: "/loesungen/digitaler-empfang",
  },
  {
    title: "Leitsysteme",
    desc: "Wegeleitung und Besucherführung für Events, Tagungen und temporäre Bereiche.",
    href: "/loesungen/digitale-leitsysteme",
  },
];

const faqs = [
  {
    question: "Welche Displays können gemietet werden?",
    answer: "Gemietet werden können mobile Displays, doppelseitige Displays, Eventdisplays, Menüboards, Empfangsdisplays und digitale Leitsysteme. Für jede Anwendung wählen wir gemeinsam das passende Format.",
  },
  {
    question: "Eignen sich Mietdisplays für Events?",
    answer: "Ja. Mietdisplays sind besonders für Messen, Tagungen, Anlässe und Pop-ups gemacht. Wir bereiten Inhalte, Layout und Aufbau auf den Einsatz vor und nehmen das Equipment nach dem Event wieder zurück.",
  },
  {
    question: "Können Inhalte vorbereitet werden?",
    answer: "Ja. Auf Wunsch übernehmen wir die Vorbereitung der Inhalte – Templates, Texte, Bilder und Zeitpläne sind bei Lieferung bereits eingerichtet. So ist das Display ab Tag 1 betriebsbereit.",
  },
  {
    question: "Gibt es Unterstützung beim Aufbau?",
    answer: "Ja. Wir liefern vorkonfiguriert. Auf Wunsch unterstützen wir persönlich vor Ort beim Aufbau und der Inbetriebnahme – gerade bei Events und mehreren Displays bewährt sich das.",
  },
  {
    question: "Wie kurzfristig sind Mietlösungen möglich?",
    answer: "Je nach Verfügbarkeit auch sehr kurzfristig. Für Events empfehlen wir, frühzeitig anzufragen, damit Inhalte, Layout und Lieferung in Ruhe vorbereitet werden können.",
  },
  {
    question: "Wie lange muss ich mindestens mieten?",
    answer: "Die Mietdauer richtet sich nach Ihrem Bedarf – vom dreitägigen Event bis zum mehrjährigen Dauereinsatz. Wir kalkulieren transparent auf Basis der gewünschten Einsatzdauer. Häufige Konstellationen: Eventmiete (3–14 Tage), Pop-up/Saison (1–6 Monate), Dauer- oder Übergangsmiete (ab 1 Monat aufwärts).",
  },
  {
    question: "Was ist im Mietpreis enthalten?",
    answer: "Die Pakete beinhalten den jeweiligen Display sowie die Lizenzgebühren für die Nutzung. Je nach Projekt können zusätzliche Setup-Leistungen anfallen — das klären wir transparent im Voraus.",
  },
  {
    question: "Gibt es eine Setup-Gebühr?",
    answer: "Je nach Anwendung kann eine einmalige Setup-Gebühr für Vorbereitung, Einrichtung und individuelle Konfiguration anfallen. Das wird im Angebot ausgewiesen.",
  },
  {
    question: "Kann ich später kaufen statt mieten?",
    answer: "Das kann individuell besprochen werden. Die Miete eignet sich auch gut, um Digital Signage zuerst im Alltag zu testen, bevor eine langfristige Kaufentscheidung getroffen wird.",
  },
];

const NOISE =
  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")";

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

export default function DigitalSignageMietenContent() {
  const reduced = useReducedMotion();

  return (
    <>

      {/* ── 1. HERO ───────────────────────────────────────────────────────── */}
      <section
        className="relative w-full overflow-hidden"
        style={{
          background: "linear-gradient(160deg, #07101f 0%, #0d1628 50%, #111d38 100%)",
        }}
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
        {/* Ambient glow — bottom left */}
        <div
          className="pointer-events-none absolute -bottom-20 -left-20 h-[500px] w-[500px]"
          aria-hidden="true"
          style={{
            background: "radial-gradient(circle, rgba(26,39,68,0.8) 0%, transparent 70%)",
          }}
        />

        <div className="relative mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 px-6 py-20 md:min-h-[60vh] md:px-10 lg:grid-cols-2 lg:gap-0 lg:pt-10 lg:pb-6 lg:min-h-[65vh]">

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
              Digital Signage mieten
            </span>

            <h1
              className="mb-7 font-light leading-[0.95] tracking-tight"
              style={{
                fontSize: "clamp(2.2rem, 3.8vw, 3.6rem)",
                letterSpacing: "-0.035em",
                color: "#f3f4f6",
              }}
            >
              Mieten, wenn{" "}
              <span style={{ color: "#ffffff" }}>Flexibilität zählt.</span>
            </h1>

            <p
              className="mb-10 max-w-[440px] leading-relaxed"
              style={{ fontSize: "clamp(1rem, 1.5vw, 1.15rem)", color: "rgba(209,213,219,0.9)" }}
            >
              Mietlösungen eignen sich besonders für temporäre Einsätze, Events, Pop-ups, Promotions oder Unternehmen, die Digital Signage zuerst testen möchten. Persönlich betreut, sofort einsatzbereit.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/kontakt" className="btn-primary gap-2.5" id="pakete">
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
                Pakete ansehen
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3">
              {["vorkonfiguriert", "flexibel einsetzbar", "persönliche Beratung", "optional vor Ort"].map((t) => (
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
          <motion.div
            className="relative flex items-center justify-center lg:justify-end"
            initial={reduced ? false : { opacity: 0, scale: 0.96, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, ease: easeOut, delay: 0.15 }}
          >
            <div
              className="pointer-events-none absolute inset-0"
              aria-hidden="true"
              style={{
                background:
                  "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(254,1,154,0.14) 0%, transparent 65%)",
              }}
            />
            <div className="relative w-full max-w-[560px]">
              <Image
                src="/images/products/Spark5-Design.webp"
                alt="Meister Signage Spark 5 — 50 Zoll Display mieten"
                width={1400}
                height={900}
                className="w-full"
          fetchPriority="high"
                style={{
                  filter:
                    "drop-shadow(0 0 2px rgba(254,1,154,0.9)) drop-shadow(0 0 6px rgba(254,1,154,0.35))",
                }}
              />
            </div>
          </motion.div>

        </div>

        {/* Bottom fade — cinematic transition to next section */}
        <div
          className="pointer-events-none absolute bottom-0 left-0 right-0 h-40"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, rgba(245,245,247,0.04) 60%, rgba(245,245,247,0.10) 100%)",
          }}
        />
      </section>

      {/* ── 2. PACKAGES ──────────────────────────────────────────────────── */}
      <section
        id="sortiment"
        className="relative w-full bg-offwhite"
        style={{
          marginTop: "-44px",
          borderRadius: "28px 28px 0 0",
          zIndex: 10,
          boxShadow: "0 -12px 48px rgba(7,16,31,0.10)",
        }}
      >
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
              style={{
                fontSize: "clamp(1.75rem, 2.8vw, 2.6rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.025em",
              }}
            >
              Transparente Pakete. Sofort einsetzbar.
            </h2>
            <p className="mt-3 max-w-lg text-[16px] leading-relaxed text-cgray">
              Vier Modelle — vom kompakten Thekendisplay bis zum grossen Event-Screen. Alle inkl. Lizenz und persönlicher Betreuung.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
            variants={staggerContainer}
            initial={reduced ? false : "hidden"}
            whileInView="visible"
            viewport={viewport}
          >
            {packages.map((pkg) => (
              <motion.div
                key={pkg.model}
                variants={staggerItem}
                className="group flex flex-col overflow-hidden rounded-[20px] bg-white"
                style={{
                  boxShadow: "0 2px 20px rgba(26,39,68,0.07), 0 0 0 1px rgba(26,39,68,0.055)",
                  transition: "box-shadow 280ms ease, transform 280ms cubic-bezier(0.34,1.2,0.64,1)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 12px 40px rgba(26,39,68,0.13), 0 0 0 1px rgba(26,39,68,0.08)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 2px 20px rgba(26,39,68,0.07), 0 0 0 1px rgba(26,39,68,0.055)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                {/* Image area */}
                <div
                  className="relative flex aspect-[4/3] items-center justify-center overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(145deg, #0d1628 0%, #1a2744 60%, #0a1020 100%)",
                  }}
                >
                  <Image
                    src={pkg.imageSrc}
                    alt={`${pkg.model} – Digital Signage Display mieten`}
                    fill
                    className="object-contain p-6 transition-transform duration-500 ease-out will-change-transform group-hover:scale-[1.05]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  {pkg.badge && (
                    <div className="absolute left-4 top-4">
                      <span
                        className="rounded-full px-3 py-1 text-[9px] font-black uppercase tracking-[0.14em] text-white backdrop-blur-sm"
                        style={{ background: "rgba(254,1,154,0.75)" }}
                      >
                        {pkg.badge}
                      </span>
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-1 flex items-baseline gap-2">
                    <span className="text-[22px] font-black tracking-tight text-navy">
                      {pkg.model}
                    </span>
                    <span className="text-[13px] font-semibold text-cgray">
                      {pkg.size} · {pkg.spec}
                    </span>
                  </div>
                  <div className="mb-4">
                    <span className="text-[13px] font-semibold text-cgray">ab </span>
                    <span className="text-[28px] font-black tracking-tight text-navy">
                      CHF {pkg.price}
                    </span>
                  </div>
                  <p className="mb-5 text-[13px] leading-relaxed text-cgray">{pkg.desc}</p>
                  <ul className="mb-5 space-y-2">
                    {["Software-Lizenz inklusive", "Persönliche Einrichtungshilfe", "Plug & Play"].map(
                      (f) => (
                        <li key={f} className="flex items-center gap-2">
                          <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-gold/12">
                            <Check className="h-[9px] w-[9px] text-gold" strokeWidth={3} />
                          </span>
                          <span className="text-[12px] text-navy/65">{f}</span>
                        </li>
                      )
                    )}
                  </ul>
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

          <motion.p
            className="mt-8 text-center text-[12px] text-cgray/60"
            initial={reduced ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewport}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Alle Preise aufgrund der Unternehmensform ohne MWST. Einmalige Setup-Gebühr von CHF 149. Individuelle Angebote auf Anfrage.
          </motion.p>

        </div>
      </section>

      {/* ── 2.2 HARDWARE-HIGHLIGHTS ────────────────────────────────────── */}
      <section className="w-full bg-white" id="hardware-highlights">
        <div className="section-inner">

          <motion.div
            className="mb-12"
            initial={reduced ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.55, ease: easeOut }}
          >
            <span className="eyebrow">Hardware-Highlights</span>
            <h2
              className="mt-2 font-light text-navy"
              style={{ fontSize: "clamp(1.75rem, 2.8vw, 2.6rem)", lineHeight: 1.1, letterSpacing: "-0.025em" }}
            >
              Wirkt wie ein Bild. Funktioniert wie ein Profi-Display.
            </h2>
            <p className="mt-3 max-w-xl text-[16px] leading-relaxed text-cgray">
              Auch zur Miete bekommen Sie die gleichen Spark-Displays wie beim Kauf. Vier Eigenschaften machen den Unterschied zwischen einem Standard-Bildschirm und einer Mietlösung, die sich nahtlos in Event, Pop-up oder Dauereinsatz einfügt.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
            variants={staggerContainer}
            initial={reduced ? false : "hidden"}
            whileInView="visible"
            viewport={viewport}
          >
            {[
              {
                title: "Nur 15.5 mm Bautiefe",
                body: "Flach an der Wand mit nur 13.5 mm Rahmen. Wirkt wie ein gerahmtes Bild – nicht wie ein Bildschirm. Branchen-Standard liegt bei 40–80 mm.",
              },
              {
                title: "Datenübertragung 100 % wireless",
                body: "Keine HDMI-, USB- oder Ethernet-Anschlüsse. Inhalte kommen über WiFi6 auf den integrierten Media Player. Weniger Komponenten, weniger Störquellen – besonders praktisch im Event-Aufbau.",
              },
              {
                title: "Niederspannung am Display",
                body: "Externes Netzteil – nur eine dünne Stromleitung zum Display. Keine 230 V-Steckdose direkt am Display nötig. Vereinfacht temporäre Installationen, oft ohne Elektriker.",
              },
              {
                title: "24/7 Dauerbetrieb",
                body: "Spezifiziert für Dauereinsatz, 450 nits Helligkeit auch in hellen Räumen, nur 0.8 W im Standby. Vom 3-Tage-Event bis zum mehrmonatigen Einsatz zuverlässig.",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={staggerItem}
                className="rounded-[18px] border border-navy/8 bg-offwhite p-6"
              >
                <h3 className="mb-2 text-[16px] font-bold text-navy">{item.title}</h3>
                <p className="text-[13px] leading-relaxed text-cgray">{item.body}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ── 2.4 MIETDAUER / EVENTMIETE ─────────────────────────────────── */}
      <section className="w-full bg-offwhite" id="mietdauer">
        <div className="section-inner">

          <motion.div
            className="mb-12"
            initial={reduced ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.55, ease: easeOut }}
          >
            <span className="eyebrow">Mietdauer & Eventmiete</span>
            <h2
              className="mt-2 font-light text-navy"
              style={{ fontSize: "clamp(1.75rem, 2.8vw, 2.6rem)", lineHeight: 1.1, letterSpacing: "-0.025em" }}
            >
              Vom Eventtag bis zum Dauereinsatz – flexibel mietbar.
            </h2>
            <p className="mt-3 max-w-2xl text-[16px] leading-relaxed text-cgray">
              Sie mieten so lange, wie Sie das Display brauchen. Ob für eine dreitägige Messe, eine
              Pop-up-Saison oder einen mehrmonatigen Übergang – Lieferung, Aufbau und Rückholung
              stimmen wir auf Ihren Zeitplan ab.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 gap-5 sm:grid-cols-3"
            variants={staggerContainer}
            initial={reduced ? false : "hidden"}
            whileInView="visible"
            viewport={viewport}
          >
            {[
              {
                eyebrow: "Kurzzeit",
                title: "Event, Messe, Tagung",
                duration: "wenige Tage bis 2 Wochen",
                body: "Für einmalige Anlässe: Display, Inhalte und Aufbau passend zum Event vorbereitet. Lieferung und Abholung abgestimmt auf Veranstaltungsbeginn und -ende.",
                useCases: "Messeauftritte · Konferenzen · Eröffnungen · Sponsorenanzeigen",
              },
              {
                eyebrow: "Saisonal",
                title: "Pop-up & Aktion",
                duration: "1 bis 6 Monate",
                body: "Für temporäre Stores, saisonale Promotionen oder Markt-Tests. Inhalte lassen sich laufend aktualisieren – kein Druck, keine Nachproduktion nötig.",
                useCases: "Pop-up-Stores · Weihnachts­geschäft · Schaufenster-Kampagne · Sommer-Promo",
              },
              {
                eyebrow: "Dauer­einsatz",
                title: "Test- oder Übergangs­miete",
                duration: "ab einem Monat aufwärts",
                body: "Wenn Sie Digital Signage erst im Alltag prüfen wollen, bevor Sie kaufen – oder eine Übergangslösung benötigen. Späterer Wechsel auf Kauf jederzeit möglich.",
                useCases: "Filialtest · Konzept­validierung · Übergang vor Umbau · Kauf-Vorlauf",
              },
            ].map((scen) => (
              <motion.div
                key={scen.title}
                variants={staggerItem}
                className="flex flex-col rounded-[18px] border border-navy/8 bg-white p-7"
              >
                <span
                  className="mb-3 text-[11px] font-bold uppercase tracking-[0.15em]"
                  style={{ color: "rgba(254,1,154,0.85)" }}
                >
                  {scen.eyebrow}
                </span>
                <h3 className="mb-2 text-[18px] font-bold text-navy">{scen.title}</h3>
                <span className="mb-4 text-[13px] font-semibold text-cgray">
                  Typische Mietdauer: {scen.duration}
                </span>
                <p className="mb-4 text-[14px] leading-relaxed text-cgray">{scen.body}</p>
                <p className="mt-auto text-[12px] leading-relaxed text-cgray/80">{scen.useCases}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mt-10 rounded-[14px] border border-magenta/15 bg-white p-6 sm:flex sm:items-center sm:justify-between sm:gap-6"
            initial={reduced ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.55, ease: easeOut, delay: 0.2 }}
          >
            <div>
              <p className="text-[15px] font-semibold text-navy">
                Preise ab CHF 129 – Mietdauer passend zu Ihrem Bedarf.
              </p>
              <p className="mt-1 text-[13px] leading-relaxed text-cgray">
                Wir kalkulieren transparent auf Basis der gewünschten Einsatzdauer. Kurz anfragen, klar zurückbekommen.
              </p>
            </div>
            <Link
              href="/kontakt"
              className="btn-primary mt-4 inline-flex shrink-0 items-center gap-2 sm:mt-0"
            >
              Mietanfrage senden
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </Link>
          </motion.div>

        </div>
      </section>

      {/* ── 2.5 MIETKATEGORIEN ──────────────────────────────────────────── */}
      <section className="w-full bg-white">
        <div className="section-inner">
          <motion.div
            className="mb-12"
            initial={reduced ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.55, ease: easeOut }}
          >
            <span className="eyebrow">Mietkategorien</span>
            <h2
              className="mt-2 font-light text-navy"
              style={{
                fontSize: "clamp(1.75rem, 2.8vw, 2.6rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.025em",
              }}
            >
              Welche Lösung möchten Sie mieten?
            </h2>
            <p className="mt-3 max-w-xl text-[16px] leading-relaxed text-cgray">
              Vom mobilen Kundenstopper über doppelseitige Stelen bis zu Eventdisplays und digitalen Leitsystemen – jede Lösung lässt sich auch temporär einsetzen.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
            variants={staggerContainer}
            initial={reduced ? false : "hidden"}
            whileInView="visible"
            viewport={viewport}
          >
            {rentalCategories.map((cat) => (
              <motion.div key={cat.title} variants={staggerItem}>
                <Link
                  href={cat.href}
                  className="group flex h-full flex-col rounded-[18px] bg-offwhite p-7 transition-all duration-200"
                  style={{ border: "1px solid rgba(26,39,68,0.07)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(254,1,154,0.25)";
                    (e.currentTarget as HTMLElement).style.background = "#ffffff";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 28px rgba(26,39,68,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(26,39,68,0.07)";
                    (e.currentTarget as HTMLElement).style.background = "#f5f5f7";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  <h3 className="mb-3 text-[18px] font-bold text-navy group-hover:text-magenta transition-colors duration-150">
                    {cat.title}
                  </h3>
                  <p className="flex-1 text-[14px] leading-relaxed text-cgray">{cat.desc}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-[12px] font-bold uppercase tracking-[0.1em] text-magenta">
                    {cat.title} ansehen
                    <ArrowRight className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-1" strokeWidth={2.5} />
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 3. BENEFITS BENTO ────────────────────────────────────────────── */}
      <section className="w-full bg-offwhite" id="warum-mieten">
        <div className="section-inner">

          <motion.div
            className="mb-16"
            initial={reduced ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.55, ease: easeOut }}
          >
            <span className="eyebrow">Warum mieten?</span>
            <h2
              className="mt-2 font-light text-navy"
              style={{
                fontSize: "clamp(1.75rem, 2.8vw, 2.6rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.025em",
              }}
            >
              Professionell präsent — ohne langfristige Bindung.
            </h2>
            <p className="mt-3 max-w-lg text-[16px] leading-relaxed text-cgray">
              Für temporäre Einsätze, Tests und flexible Einsatzorte ist die Miete oft die pragmatischere Wahl.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
            variants={staggerContainer}
            initial={reduced ? false : "hidden"}
            whileInView="visible"
            viewport={viewport}
          >
            {benefits.map((b, i) => {
              const Icon    = b.icon;
              const isFirst = i === 0;
              const isLast  = i === benefits.length - 1;
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
                      style={{ color: isFirst || isLast ? "#fe019a" : "#1a2744" }}
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

      {/* ── 4. USE CASES ─────────────────────────────────────────────────── */}
      <section className="w-full bg-white">
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
              style={{
                fontSize: "clamp(1.75rem, 2.8vw, 2.6rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.025em",
              }}
            >
              Für welche Einsätze eignet sich die Miete?
            </h2>
          </motion.div>

          <div>
            {useCases.map((uc, i) => {
              const isRtl = i % 2 !== 0;
              return (
                <article
                  key={uc.category}
                  className="border-t py-16 sm:py-20 lg:py-24"
                  style={{ borderColor: "rgba(26,39,68,0.07)" }}
                >
                  <div
                    className={`grid grid-cols-1 gap-10 lg:items-center lg:gap-16 ${
                      isRtl
                        ? "lg:grid-cols-[44fr_56fr]"
                        : "lg:grid-cols-[56fr_44fr]"
                    }`}
                  >
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
                          boxShadow:
                            "0 20px 60px rgba(26,39,68,0.12), 0 4px 16px rgba(26,39,68,0.06)",
                        }}
                      >
                        <Image
                          src={uc.imageSrc}
                          alt={uc.imageAlt}
                          fill
                          className="object-cover transition-transform duration-700 ease-out will-change-transform group-hover:scale-[1.04]"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 56vw"
                        />
                        <div
                          className="absolute inset-0 rounded-[24px]"
                          style={{
                            background:
                              "linear-gradient(135deg, rgba(26,39,68,0.06) 0%, transparent 60%)",
                          }}
                        />
                      </div>
                    </motion.div>

                    <motion.div
                      className={`relative ${isRtl ? "lg:order-1" : ""}`}
                      initial={reduced ? false : { opacity: 0, x: isRtl ? -28 : 28 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={viewport}
                      transition={{ duration: 0.65, ease: easeOut, delay: 0.1 }}
                    >
                      <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.16em] text-gold">
                        {uc.category}
                      </p>
                      <h3
                        className="mb-5 font-light text-navy"
                        style={{
                          fontSize: "clamp(1.6rem, 2.6vw, 2.4rem)",
                          lineHeight: 1.1,
                          letterSpacing: "-0.025em",
                        }}
                      >
                        {uc.headline}
                      </h3>
                      <p className="mb-7 text-[16px] leading-relaxed text-cgray">{uc.body}</p>
                      <ul className="mb-9 space-y-2.5">
                        {uc.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-3">
                            <span className="mt-[3px] flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-gold/12">
                              <Check className="h-[10px] w-[10px] text-gold" strokeWidth={3} />
                            </span>
                            <span className="text-[15px] leading-snug text-navy/75">{b}</span>
                          </li>
                        ))}
                      </ul>
                      <Link
                        href={uc.href}
                        className="group/cta inline-flex items-center gap-2 text-[14px] font-semibold text-navy transition-colors duration-150 hover:text-magenta"
                      >
                        {uc.cta}
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

      {/* ── 5. TRUST SECTION ─────────────────────────────────────────────── */}
      <section
        className="relative w-full overflow-hidden"
        style={{ backgroundColor: "#0d1628" }}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          aria-hidden="true"
          style={{ backgroundImage: NOISE, backgroundSize: "160px 160px" }}
        />
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
              Nicht nur ein Screen — eine vollständige Lösung.
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed" style={{ color: "rgba(156,163,175,0.9)" }}>
              Von der Auswahl über die Einrichtung bis zur laufenden Betreuung — persönlich aus der Zentralschweiz.
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
                  <p className="mb-1.5 text-[14px] font-bold" style={{ color: "#f3f4f6" }}>
                    {label}
                  </p>
                  <p className="text-[12px] leading-relaxed" style={{ color: "rgba(156,163,175,0.8)" }}>
                    {desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Process */}
          <motion.div
            className="mt-16 border-t pt-14"
            style={{ borderColor: "rgba(255,255,255,0.07)" }}
            initial={reduced ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.55, ease: easeOut }}
          >
            <p
              className="mb-10 text-[11px] font-bold uppercase tracking-[0.18em]"
              style={{ color: "rgba(156,163,175,0.6)" }}
            >
              So läuft eine Miete ab
            </p>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { n: "01", title: "Bedarf klären",     body: "Wir besprechen Einsatzort, Laufzeit und Grösse persönlich." },
                { n: "02", title: "Paket wählen",      body: "Gemeinsam wählen wir den passenden Screen für Ihren Einsatz." },
                { n: "03", title: "Einrichtung",       body: "Lieferung und Konfiguration — betriebsbereit ab dem ersten Tag." },
                { n: "04", title: "Flexibel nutzen",   body: "Sie verwenden den Screen — und geben ihn bei Bedarf wieder zurück." },
              ].map((step) => (
                <div key={step.n} className="flex flex-col gap-4">
                  <span className="text-[13px] font-black tracking-tight" style={{ color: "#fe019a" }}>
                    {step.n}
                  </span>
                  <p className="text-[16px] font-bold" style={{ color: "#e5e7eb" }}>{step.title}</p>
                  <p className="text-[13px] leading-relaxed" style={{ color: "rgba(156,163,175,0.8)" }}>
                    {step.body}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* ── 6. FAQ ───────────────────────────────────────────────────────── */}
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
                Was Sie vor der Miete wissen sollten.
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-cgray">
                Antworten auf die häufigsten Fragen rund um unsere Mietpakete.
              </p>
            </motion.div>

            <FAQAccordion />

          </div>
        </div>
      </section>

      {/* ── 7. FINAL CTA ─────────────────────────────────────────────────── */}
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
              Bereit für Ihren ersten Mieteinsatz?
            </h2>
            <p
              className="max-w-md text-[16px] leading-relaxed"
              style={{ color: "rgba(156,163,175,0.9)" }}
            >
              Schildern Sie kurz Ihren Einsatz. Wir zeigen Ihnen das passende Paket und was es kostet — persönlich, innert 24h.
            </p>
            <div className="mt-2 flex flex-wrap justify-center gap-4">
              <Link href="/kontakt" className="btn-primary gap-2.5">
                Beratung anfragen
                <ArrowRight className="h-4 w-4 shrink-0" strokeWidth={2} />
              </Link>
              <Link
                href="/digital-signage-kaufen"
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
                Lieber kaufen?
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
