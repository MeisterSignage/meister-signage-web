"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

type ImagePosition = "left" | "right";

type Props = {
  eyebrow?: string;
  title: string;
  text: string;
  image: string;
  imageAlt?: string;
  ctaLabel?: string;
  ctaHref?: string;
  /** Side the focal image lives on. Text takes the opposite side.
   *  Default: "right" — text on left third, image on right two-thirds. */
  imagePosition?: ImagePosition;
  /** Slightly stronger overlay for image-heavy scenes (e.g. Retail) where
   *  the photo dominates and the text needs more contrast. */
  intensifyOverlay?: boolean;
};

export default function ParallaxShowcaseSection({
  eyebrow,
  title,
  text,
  image,
  imageAlt = "",
  ctaLabel,
  ctaHref,
  imagePosition = "right",
  intensifyOverlay = false,
}: Props) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  /* Visible cinematic parallax: background image translates ±70px (140px
     total range) over the full scroll-through. Text stays static — only
     the photo shifts, creating depth. Image container is 120% tall and
     starts at top=-10%, so the 70px movement never exposes section edges. */
  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    reduced ? ["0px", "0px"] : ["70px", "-70px"],
  );

  /* Overlay direction follows the text side. Slightly heavier when
     intensifyOverlay is on (image-dominant scenes). */
  const left  = intensifyOverlay ? 0.95 : 0.92;
  const mid1  = intensifyOverlay ? 0.85 : 0.78;
  const mid2  = intensifyOverlay ? 0.40 : 0.30;
  const right = intensifyOverlay ? 0.15 : 0.10;
  const overlayDir = imagePosition === "right" ? "to right" : "to left";
  const overlay = `linear-gradient(${overlayDir}, rgba(7,16,31,${left}) 0%, rgba(7,16,31,${mid1}) 32%, rgba(7,16,31,${mid2}) 68%, rgba(7,16,31,${right}) 100%)`;

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: "#07101f", minHeight: "560px" }}
      aria-label={title}
    >
      {/* Parallax background image — oversized so the translate stays
          within bounds. Mobile keeps it static (no will-change to avoid
          GPU layers on phones). */}
      <motion.div
        className="absolute inset-x-0 top-[-10%] h-[120%] lg:will-change-transform"
        style={reduced ? undefined : { y: imageY }}
        aria-hidden="true"
      >
        <Image
          src={image}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          quality={78}
        />
      </motion.div>

      {/* Dark side-gradient overlay for readability on desktop */}
      <div
        className="pointer-events-none absolute inset-0 hidden lg:block"
        aria-hidden="true"
        style={{ background: overlay }}
      />
      {/* Mobile/tablet: blanket overlay so the small text column reads
          cleanly without depending on the side-gradient direction */}
      <div
        className="pointer-events-none absolute inset-0 bg-[rgba(7,16,31,0.65)] lg:hidden"
        aria-hidden="true"
      />

      {/* Soft magenta corner glow — same vocabulary as the other dark sections */}
      <div
        className="pointer-events-none absolute -right-32 top-0 h-full w-[600px]"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 80% 50%, rgba(254,1,154,0.10) 0%, transparent 65%)",
        }}
      />

      {/* 12-col grid lets us give the text room to breathe (5/12 ≈ 41%)
          so big headlines stay at most 2 lines without feeling cramped. */}
      <div className="relative mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 px-6 py-24 md:px-10 lg:grid-cols-12 lg:py-32">
        <motion.div
          className={`relative z-10 max-w-2xl ${
            imagePosition === "left" ? "lg:col-span-5 lg:col-start-8" : "lg:col-span-5"
          }`}
          initial={reduced ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0, 0, 0.2, 1] }}
        >
          {eyebrow && (
            <span
              className="mb-5 inline-block text-[11px] font-bold uppercase tracking-[0.18em]"
              style={{ color: "rgba(254,1,154,0.95)" }}
            >
              {eyebrow}
            </span>
          )}

          <h2
            className="mb-5 font-light leading-[1.02] tracking-tight"
            style={{
              fontSize: "clamp(1.9rem, 3vw, 2.9rem)",
              letterSpacing: "-0.035em",
              color: "#f3f4f6",
              textWrap: "balance",
            }}
          >
            {title}
          </h2>

          <p
            className="mb-8 leading-relaxed"
            style={{
              maxWidth: "480px",
              fontSize: "clamp(0.95rem, 1.3vw, 1.05rem)",
              color: "rgba(209,213,219,0.92)",
            }}
          >
            {text}
          </p>

          {ctaLabel && ctaHref && (
            <Link
              href={ctaHref}
              className="inline-flex items-center gap-2.5 rounded-[7px] px-6 py-3 text-[14px] font-semibold transition-all duration-200 hover:border-white/30 hover:text-white"
              style={{
                border: "1px solid rgba(255,255,255,0.18)",
                color: "#e5e7eb",
              }}
            >
              {ctaLabel}
              <ArrowRight className="h-3.5 w-3.5 shrink-0" strokeWidth={2} />
            </Link>
          )}
        </motion.div>
      </div>
    </section>
  );
}
