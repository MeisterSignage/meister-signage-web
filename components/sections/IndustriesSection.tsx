"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { viewport, easeOut } from "@/lib/motion";

type Industry = {
  title: string;
  description: string;
  href: string;
  imageSrc?: string;
};

/* Branchen-Kacheln aus content/site/homepage-industries.json — via CMS editierbar. */
import industriesData from "@/content/site/homepage-industries.json";
const industries: Industry[] = industriesData.items;

const INTERVAL_MS = 2200;

/* ─────────────────────────────────────────────────────────────────────────── */

function IndustryCard({
  title,
  description,
  href,
  imageSrc,
  className = "",
  large = false,
  isLit = false,
  onMouseEnter,
  onMouseLeave,
}: Industry & {
  className?: string;
  large?: boolean;
  isLit?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: 0.52, ease: easeOut }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Link href={href} className="group block h-full">
        <div
          className={`
            relative overflow-hidden rounded-[32px] h-full
            transition-transform duration-500 ease-out
            hover:-translate-y-2
            ${isLit ? "industry-card-lit" : ""}
          `}
          style={{
            boxShadow: "0 4px 32px rgba(0,0,0,0.28)",
          }}
        >
          {/* Background — photo or premium dark gradient */}
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={title}
              fill
              className="object-cover transition-transform duration-700 ease-out will-change-transform group-hover:scale-[1.06]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
            />
          ) : (
            <div className="absolute inset-0">
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(145deg, #1e2f52 0%, #111d38 50%, #0d1628 100%)",
                }}
              />
              <div
                className="absolute inset-0 opacity-25"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)",
                  backgroundSize: "28px 28px",
                }}
              />
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-64 w-64"
                style={{
                  background:
                    "radial-gradient(circle, rgba(254,1,154,0.14) 0%, transparent 65%)",
                }}
              />
            </div>
          )}

          {/* Cinematic gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.40) 35%, rgba(0,0,0,0.10) 60%, transparent 100%)",
            }}
          />

          {/* Content */}
          <div className={`absolute inset-x-0 bottom-0 ${large ? "p-8" : "p-6"}`}>
            <p
              className={`
                mb-2 font-semibold uppercase tracking-[0.13em] text-white/45
                ${large ? "text-[11px]" : "text-[10px]"}
              `}
            >
              Meister Signage
            </p>
            <p
              className={`
                font-bold leading-tight text-white
                ${large ? "text-[22px] sm:text-[26px]" : "text-[18px] sm:text-[20px]"}
              `}
            >
              {title}
            </p>
            <p
              className={`
                mt-2 leading-relaxed text-white/65
                ${large ? "text-[14px]" : "text-[13px]"}
              `}
            >
              {description}
            </p>

            {/* Hover arrow */}
            <div className="mt-4 inline-flex items-center gap-1.5 opacity-0 transition-all duration-300 group-hover:opacity-100">
              <span className="text-[12px] font-semibold text-white/80">
                {title} entdecken
              </span>
              <ArrowUpRight
                className="h-3.5 w-3.5 text-white/70 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                strokeWidth={2.5}
              />
            </div>
          </div>

          {/* Hover inset ring */}
          <div
            className="absolute inset-0 rounded-[32px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.08)" }}
          />
        </div>
      </Link>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────── */

export default function IndustriesSection() {
  const reduced = useReducedMotion();
  const [litIndex, setLitIndex] = useState(0);
  const hoveredIndex = useRef<number | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startInterval = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (hoveredIndex.current === null) {
        setLitIndex((prev) => (prev + 1) % industries.length);
      }
    }, INTERVAL_MS);
  }, []);

  useEffect(() => {
    if (reduced) return;
    startInterval();
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [reduced, startInterval]);

  const handleMouseEnter = useCallback((i: number) => {
    hoveredIndex.current = i;
    setLitIndex(i);
  }, []);

  const handleMouseLeave = useCallback(() => {
    hoveredIndex.current = null;
    // restart interval from current card so it doesn't jump immediately
    startInterval();
  }, [startInterval]);

  const cardProps = (i: number) => ({
    isLit: !reduced && litIndex === i,
    onMouseEnter: () => handleMouseEnter(i),
    onMouseLeave: handleMouseLeave,
  });

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ background: "linear-gradient(180deg, #111d38 0%, #0d1628 100%)" }}
    >
      {/* Subtle top glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[320px] w-[700px] -translate-x-1/2"
        aria-hidden="true"
        style={{
          background: "radial-gradient(ellipse, rgba(254,1,154,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="section-inner relative">

        {/* Section header */}
        <motion.div
          className="mb-12 max-w-2xl"
          initial={reduced ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.52, ease: easeOut }}
        >
          <span className="eyebrow">Branchen</span>
          <h2 className="heading-max-2 mt-2 text-white">
            Digital Signage für Räume mit Charakter.
          </h2>
          <p className="mt-4 max-w-xl text-[16px] leading-relaxed text-white/45">
            Von Gastronomie über Retail bis zu Unternehmen und Events –
            individuell abgestimmt auf Ihre Umgebung und Ihre Marke.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12">

          {/* Row 1 — 2 large */}
          <IndustryCard
            {...industries[0]}
            large
            className="h-[280px] sm:h-[360px] lg:col-span-7 lg:h-[480px]"
            {...cardProps(0)}
          />
          <IndustryCard
            {...industries[1]}
            large
            className="h-[280px] sm:h-[360px] lg:col-span-5 lg:h-[480px]"
            {...cardProps(1)}
          />

          {/* Row 2 — 3 smaller */}
          <IndustryCard
            {...industries[2]}
            className="h-[260px] sm:h-[300px] lg:col-span-4 lg:h-[360px]"
            {...cardProps(2)}
          />
          <IndustryCard
            {...industries[3]}
            className="h-[260px] sm:h-[300px] lg:col-span-4 lg:h-[360px]"
            {...cardProps(3)}
          />
          <IndustryCard
            {...industries[4]}
            className="h-[260px] sm:col-span-2 sm:h-[300px] lg:col-span-4 lg:h-[360px]"
            {...cardProps(4)}
          />

        </div>

      </div>
    </section>
  );
}
