"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { viewport, easeOut } from "@/lib/motion";

type UseCase = {
  number: string;
  category: string;
  headline: string;
  body: string;
  bullets: string[];
  cta: { label: string; href: string };
  imageSrc: string;
  imageAlt: string;
};

const useCases: UseCase[] = [
  {
    number: "01",
    category: "Retail & Handel",
    headline: "Marken am Point of Sale inszenieren.",
    body: "Digitale Inhalte machen Kollektionen, Aktionen und Kampagnen sichtbar – direkt dort, wo Kaufentscheidungen entstehen.",
    bullets: [
      "Kampagnen zentral steuern",
      "Produkte emotional präsentieren",
      "Aufmerksamkeit im Verkaufsraum erhöhen",
    ],
    cta: { label: "Retail entdecken", href: "/branchen/retail" },
    imageSrc: "/images/products/Schuhladen-Meister-Signage.webp",
    imageAlt: "Digital Signage Retail – Schuhgeschäft mit digitalen Displays",
  },
  {
    number: "02",
    category: "Gastronomie",
    headline: "Menüs und Angebote flexibel aktualisieren.",
    body: "Digitale Menüboards zeigen Tagesangebote, Preise und Aktionen klar, modern und jederzeit aktuell.",
    bullets: [
      "Tagesmenüs schnell ändern",
      "Aktionen sichtbar platzieren",
      "Weniger Aufwand mit gedruckten Tafeln",
    ],
    cta: { label: "Gastronomie entdecken", href: "/branchen/gastronomie" },
    imageSrc: "/images/products/Restaurant-Meister-Signage.webp",
    imageAlt: "Digital Signage Gastronomie – Digitales Menüboard im Restaurant",
  },
  {
    number: "03",
    category: "Hotellerie",
    headline: "Gäste informieren, ohne Atmosphäre zu verlieren.",
    body: "Digitale Displays verbinden Orientierung, Serviceinformationen und Markenauftritt elegant im Raum.",
    bullets: [
      "Willkommen & Orientierung",
      "Events und Services anzeigen",
      "Hochwertiger erster Eindruck",
    ],
    cta: { label: "Hotellerie entdecken", href: "/branchen/hotellerie" },
    imageSrc: "/images/products/Hotelempfang-Meister-Signage.webp",
    imageAlt: "Digital Signage Hotel – Empfangsdisplay in der Lobby",
  },
  {
    number: "04",
    category: "Unternehmen & Empfang",
    headline: "Ein Empfang, der professionell informiert.",
    body: "Begrüssung, interne Informationen, Termine und Besucherführung werden digital, klar und repräsentativ dargestellt.",
    bullets: [
      "Besucher willkommen heissen",
      "Termine und Informationen anzeigen",
      "Räume modern wirken lassen",
    ],
    cta: { label: "Unternehmen entdecken", href: "/branchen/unternehmen" },
    imageSrc: "/images/products/Unternehmen-Empfang.webp",
    imageAlt: "Digital Signage Unternehmen – Empfangsdisplay im Büro",
  },
  {
    number: "05",
    category: "Events & Messen",
    headline: "Informationen dort zeigen, wo Menschen sie brauchen.",
    body: "Agenda, Raumhinweise, Sponsoren und Live-Informationen lassen sich flexibel ausspielen und laufend anpassen.",
    bullets: [
      "Agenda und Wegführung",
      "Sponsoren sichtbar machen",
      "Inhalte kurzfristig ändern",
    ],
    cta: { label: "Events entdecken", href: "/branchen/events" },
    imageSrc: "/images/products/Events-Meister-Signage.webp",
    imageAlt: "Digital Signage Events – Displays für Messen und Tagungen",
  },
];

/* ─────────────────────────────────────────────────────────────────────────── */

export default function UseCasesSection() {
  const reduced = useReducedMotion();

  return (
    <section className="w-full bg-white">
      <div className="section-inner">

        {/* Section header */}
        <motion.div
          className="mb-4 max-w-xl"
          initial={reduced ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.52, ease: easeOut }}
        >
          <span className="eyebrow">Anwendungen</span>
          <h2 className="heading-max-2 mt-2 text-navy">
            Für jeden Raum die richtige Lösung.
          </h2>
        </motion.div>

        {/* Use case blocks */}
        <div>
          {useCases.map((uc, i) => {
            const isRtl = i % 2 !== 0;
            return (
              <article
                key={uc.number}
                className="border-t border-navy/[0.07] py-16 sm:py-20 lg:py-28"
              >
                <div
                  className={`grid grid-cols-1 gap-10 lg:items-center lg:gap-16 ${
                    isRtl
                      ? "lg:grid-cols-[44fr_56fr]"
                      : "lg:grid-cols-[56fr_44fr]"
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
                      className="group relative overflow-hidden rounded-[28px]"
                      style={{
                        aspectRatio: "4/3",
                        boxShadow:
                          "0 20px 64px rgba(26,39,68,0.12), 0 4px 16px rgba(26,39,68,0.07)",
                      }}
                    >
                      <Image
                        src={uc.imageSrc}
                        alt={uc.imageAlt}
                        fill
                        className="object-cover transition-transform duration-700 ease-out will-change-transform group-hover:scale-[1.04]"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 56vw"
                      />
                      {/* Subtle vignette */}
                      <div
                        className="absolute inset-0 rounded-[28px]"
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(26,39,68,0.08) 0%, transparent 60%)",
                        }}
                      />
                    </div>
                  </motion.div>

                  {/* Text */}
                  <motion.div
                    className={`relative ${isRtl ? "lg:order-1" : ""}`}
                    initial={reduced ? false : { opacity: 0, x: isRtl ? -32 : 32 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={viewport}
                    transition={{ duration: 0.65, ease: easeOut, delay: 0.1 }}
                  >
                    {/* Ghost number */}
                    <span
                      className="pointer-events-none absolute -top-4 right-0 select-none font-black leading-none text-navy/[0.045] lg:-top-8"
                      style={{ fontSize: "clamp(72px, 11vw, 130px)" }}
                      aria-hidden="true"
                    >
                      {uc.number}
                    </span>

                    <div className="relative">
                      {/* Category */}
                      <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.16em] text-gold">
                        {uc.category}
                      </p>

                      {/* Headline */}
                      <h3
                        className="mb-5 font-light text-navy"
                        style={{
                          fontSize: "clamp(1.75rem, 2.8vw, 2.6rem)",
                          lineHeight: 1.1,
                          letterSpacing: "-0.025em",
                        }}
                      >
                        {uc.headline}
                      </h3>

                      {/* Body */}
                      <p className="mb-7 text-[16px] leading-relaxed text-cgray">
                        {uc.body}
                      </p>

                      {/* Bullets */}
                      <ul className="mb-9 space-y-2.5">
                        {uc.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-3">
                            <span className="mt-[3px] flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-gold/12">
                              <Check
                                className="h-[10px] w-[10px] text-gold"
                                strokeWidth={3}
                              />
                            </span>
                            <span className="text-[15px] leading-snug text-navy/75">
                              {b}
                            </span>
                          </li>
                        ))}
                      </ul>

                      {/* CTA */}
                      <Link
                        href={uc.cta.href}
                        className="group/cta inline-flex items-center gap-2 text-[14px] font-semibold text-navy transition-colors duration-150 hover:text-magenta"
                      >
                        {uc.cta.label}
                        <ArrowRight
                          className="h-3.5 w-3.5 transition-transform duration-200 group-hover/cta:translate-x-1"
                          strokeWidth={2.5}
                        />
                      </Link>
                    </div>
                  </motion.div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-4 flex flex-col items-center gap-5 border-t border-navy/[0.07] pt-16 text-center sm:pt-20"
          initial={reduced ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.52, ease: easeOut }}
        >
          <p className="text-[18px] font-light text-navy/60">
            Welche Lösung passt zu Ihrem Betrieb?
          </p>
          <Link href="/kontakt" className="btn-primary gap-2">
            Beratung anfragen
            <ArrowRight className="h-4 w-4" strokeWidth={2} />
          </Link>
          <p className="text-[12px] tracking-wide text-navy/35">
            Unverbindlich · Antwort innert 24h · Persönliche Beratung
          </p>
        </motion.div>

      </div>
    </section>
  );
}
