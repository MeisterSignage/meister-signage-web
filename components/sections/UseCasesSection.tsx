"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { viewport, easeOut } from "@/lib/motion";

type UseCase = {
  number: string;
  category: string;
  headline: string;
  body: string;
  cta: { label: string; href: string };
  imageSrc: string;
  imageAlt: string;
};

const useCases: UseCase[] = [
  {
    number: "01",
    category: "Retail & Fashion",
    headline: "Erlebnisse,\ndie Verkauf auslösen.",
    body: "Digitale Displays inszenieren Kollektionen und Kampagnen direkt am Point of Sale. Inhalte wechseln saisonal, ohne Druckkosten – schnell, flexibel und wirkungsvoll.",
    cta: { label: "Retail entdecken", href: "/retail" },
    imageSrc: "/images/products/Schuhladen-Meister-Signage.png",
    imageAlt: "Retail Digital Signage – Schuhgeschäft mit digitalen Displays",
  },
  {
    number: "02",
    category: "Gastronomie",
    headline: "Menüs, die\nappetitanregend wirken.",
    body: "Digitale Menüboards ersetzen Kreidetafeln und Laminiertes. Tagesangebote, Saisonales und Preise lassen sich in Minuten aktualisieren – ohne Umweg, ohne Druck.",
    cta: { label: "Gastronomie entdecken", href: "/gastronomie" },
    imageSrc: "/images/products/Restaurant-Meister-Signage.png",
    imageAlt: "Gastronomie Digital Signage – Restaurant Menüboard",
  },
  {
    number: "03",
    category: "Hotels & Empfang",
    headline: "Information,\ndie Atmosphäre schafft.",
    body: "Moderne Lobby-Displays begrüssen Gäste, informieren über Services und entlasten das Empfangspersonal – elegant in die Hotelarchitektur integriert.",
    cta: { label: "Hotellerie entdecken", href: "/hotellerie" },
    imageSrc: "/images/products/Hotelempfang-Meister-Signage.png",
    imageAlt: "Hotel Digital Signage – Empfangsdisplay Lobby",
  },
  {
    number: "04",
    category: "Unternehmen & Empfang",
    headline: "Empfang,\nder überzeugt.",
    body: "Ein professionell gestaltetes Empfangsdisplay hinterlässt Eindruck. Besucher werden begrüsst, Wege erklärt, Marke erlebbar gemacht – ohne Aufwand für das Team.",
    cta: { label: "Unternehmen entdecken", href: "/unternehmen" },
    imageSrc: "/images/products/Unternehmen-Empfang.png",
    imageAlt: "Unternehmens-Empfang mit Digital Signage Display",
  },
  {
    number: "05",
    category: "Events & Messen",
    headline: "Programme,\ndie synchron laufen.",
    body: "Zeitpläne, Raumnavigation und Sponsorenauftritte – auf Displays in Echtzeit. Änderungen erscheinen sofort: kein Neudruck, keine Verwirrung, kein Aufwand.",
    cta: { label: "Events entdecken", href: "/events" },
    imageSrc: "/images/products/Events-Meister-Signage.png",
    imageAlt: "Event Digital Signage – Tagung und Messe Besucherführung",
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
                className="border-t border-navy/[0.07] py-16 sm:py-20 lg:py-24"
              >
                <div
                  className={`grid grid-cols-1 gap-10 lg:items-center lg:gap-20 ${
                    isRtl
                      ? "lg:grid-cols-[42fr_58fr]"
                      : "lg:grid-cols-[58fr_42fr]"
                  }`}
                >
                  {/* Image */}
                  <motion.div
                    className={isRtl ? "lg:order-2" : ""}
                    initial={reduced ? false : { opacity: 0, x: isRtl ? 24 : -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={viewport}
                    transition={{ duration: 0.6, ease: easeOut }}
                  >
                    <div className="group relative h-[280px] overflow-hidden rounded-[28px] sm:h-[360px] lg:h-[520px]"
                      style={{
                        boxShadow: "0 16px 64px rgba(26,39,68,0.10), 0 4px 16px rgba(26,39,68,0.06)",
                      }}
                    >
                      <Image
                        src={uc.imageSrc}
                        alt={uc.imageAlt}
                        fill
                        className="object-cover transition-transform duration-700 ease-out will-change-transform group-hover:scale-[1.04]"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 58vw"
                      />
                    </div>
                  </motion.div>

                  {/* Text */}
                  <motion.div
                    className={`relative ${isRtl ? "lg:order-1" : ""}`}
                    initial={reduced ? false : { opacity: 0, x: isRtl ? -24 : 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={viewport}
                    transition={{ duration: 0.6, ease: easeOut, delay: 0.08 }}
                  >
                    {/* Ghost number */}
                    <span
                      className="pointer-events-none absolute -top-6 right-0 select-none font-black leading-none text-navy/[0.05] lg:-top-10"
                      style={{ fontSize: "clamp(80px, 12vw, 140px)" }}
                      aria-hidden="true"
                    >
                      {uc.number}
                    </span>

                    <div className="relative max-w-md">
                      <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-gold">
                        {uc.category}
                      </p>
                      <h3
                        className="mb-6 font-light leading-[1.08] text-navy"
                        style={{
                          fontSize: "clamp(1.9rem, 3vw, 2.8rem)",
                          letterSpacing: "-0.025em",
                          whiteSpace: "pre-line",
                        }}
                      >
                        {uc.headline}
                      </h3>
                      <p className="mb-8 text-[16px] leading-relaxed text-cgray">
                        {uc.body}
                      </p>
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

      </div>
    </section>
  );
}
