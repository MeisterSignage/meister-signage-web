import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import ContactSection from "@/components/sections/ContactSection";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema/breadcrumb";
import { getAllWissenPages } from "@/lib/wissen";
import type { WissenCategory } from "@/lib/wissen-types";

const SITE_URL = "https://www.meister-signage.ch";
const PAGE_URL = `${SITE_URL}/wissen`;

export const metadata: Metadata = {
  title: { absolute: "Digital Signage Wissen & Ratgeber | Meister Signage" },
  description:
    "Digital Signage Wissen: Antworten auf häufige Fragen rund um digitale Displays, Software, Kosten, Miete und Anwendungen – verständlich und praxisnah.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    locale: "de_CH",
    url: PAGE_URL,
    siteName: "Meister Signage",
    title: "Digital Signage Wissen & Ratgeber | Meister Signage",
    description:
      "Antworten auf häufige Fragen rund um digitale Displays, Software, Kosten, Miete und Anwendungen.",
  },
};

const CATEGORY_ORDER: WissenCategory[] = [
  "Grundlagen",
  "Software",
  "Kosten",
  "Branchen",
  "Outdoor & Mobile",
  "Events",
];

const CATEGORY_INTRO: Record<WissenCategory, string> = {
  "Grundlagen":       "Was Digital Signage ist und wie es im Alltag funktioniert.",
  "Software":         "Wie Inhalte zentral verwaltet und gesteuert werden.",
  "Kosten":           "Was Digital Signage wirklich kostet – und wann sich was lohnt.",
  "Branchen":         "Wie Digital Signage in einzelnen Branchen eingesetzt wird.",
  "Outdoor & Mobile": "Wetterfest, mobil und flexibel platzierbar.",
  "Events":           "Wegeleitung, Programm und Besucherführung an Anlässen.",
};

const NOISE =
  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")";

export default function WissenIndexPage() {
  const pages = getAllWissenPages();

  return (
    <>
      <JsonLd
        schema={
          breadcrumbSchema([
            { name: "Home",   path: "/" },
            { name: "Wissen", path: "/wissen" },
          ]) as Record<string, unknown>
        }
      />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section
        className="relative w-full overflow-hidden"
        style={{ background: "#07101f" }}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          aria-hidden="true"
          style={{ backgroundImage: NOISE, backgroundSize: "160px 160px" }}
        />
        {/* Hero image — centered, full section height, width = height × 16/9 */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
          <div className="relative h-full" style={{ aspectRatio: "16 / 9" }}>
            <Image
              src="/images/products/Wissen-Meister-Signage.webp"
              alt="Digital Signage Wissen & Ratgeber von Meister Signage – Hintergrundwissen, Tipps und Vergleiche"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 80vw"
              className="object-cover"
            />
          </div>
        </div>
        {/* Edge fade overlays at SECTION level — solid #07101f covers image
            edge completely, then fades to transparent toward center */}
        <div
          className="pointer-events-none absolute left-0 top-0 bottom-0 w-[40%] z-[2]"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(to right, #07101f 0%, #07101f 55%, rgba(7,16,31,0) 100%)",
          }}
        />
        <div
          className="pointer-events-none absolute right-0 top-0 bottom-0 w-[40%] z-[2]"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(to left, #07101f 0%, #07101f 55%, rgba(7,16,31,0) 100%)",
          }}
        />

        <div className="relative mx-auto flex max-w-[1200px] flex-col justify-center px-6 py-24 md:min-h-[55vh] md:px-10 lg:min-h-[60vh]">
          <div className="z-10 max-w-2xl">
            <span
              className="mb-6 inline-block text-[11px] font-bold uppercase tracking-[0.18em]"
              style={{ color: "rgba(254,1,154,0.9)" }}
            >
              Wissen · Ratgeber
            </span>
            <h1
              className="mb-7 font-light leading-[0.95] tracking-tight"
              style={{
                fontSize: "clamp(2.2rem, 3.8vw, 3.6rem)",
                letterSpacing: "-0.035em",
                color: "#f3f4f6",
              }}
            >
              Digital Signage Wissen.
            </h1>
            <p
              className="mb-10 leading-relaxed"
              style={{
                maxWidth: "520px",
                fontSize: "clamp(1rem, 1.5vw, 1.15rem)",
                color: "rgba(229,231,235,0.95)",
              }}
            >
              Antworten auf häufige Fragen rund um digitale Displays, Software, Kosten, Miete und Anwendungen – verständlich und praxisnah.
            </p>
          </div>
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

      {/* ── CATEGORIES & ARTICLES ────────────────────────────────────────── */}
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
          {CATEGORY_ORDER.map((cat) => {
            const items = pages.filter((p) => p.category === cat);
            if (items.length === 0) return null;
            return (
              <div key={cat} className="mb-14 last:mb-0">
                <div className="mb-7 max-w-2xl">
                  <span className="eyebrow">{cat}</span>
                  <p className="mt-2 text-[16px] leading-relaxed text-cgray">
                    {CATEGORY_INTRO[cat]}
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/wissen/${p.slug}`}
                      className="group flex h-full flex-col gap-4 border border-navy/8 bg-offwhite p-6 transition-all duration-200 hover:border-magenta/25 hover:bg-white hover:shadow-[0_8px_28px_rgba(26,39,68,0.08)]"
                    >
                      <div className="h-px w-8 bg-gold/50 transition-all duration-300 group-hover:w-12 group-hover:bg-gold" />
                      <h2 className="text-[18px] font-bold tracking-tight text-navy group-hover:text-magenta transition-colors duration-150">
                        {p.h1}
                      </h2>
                      <p className="flex-1 text-[14px] leading-relaxed text-cgray">
                        {p.definition}
                      </p>
                      <span className="mt-2 inline-flex items-center gap-1.5 text-[12px] font-bold uppercase tracking-[0.1em] text-magenta">
                        Weiterlesen
                        <ArrowRight
                          className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-1"
                          strokeWidth={2.5}
                        />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <ContactSection
        eyebrow="Persönlicher Kontakt"
        title="Sie haben eine konkrete Frage?"
        subtitle="Schildern Sie kurz Ihren Einsatz. Wir empfehlen die passende Lösung – innert 24 Stunden."
        imageSrc="/images/Chris-Meister.webp"
      />
    </>
  );
}
