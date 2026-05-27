"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { m as motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
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

  /* Viewport detection — desktop gets the full cinematic parallax,
     mobile gets a softened version for performance + readability. */
  const [isDesktop, setIsDesktop] = useState(true);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(min-width: 1024px)");
    setIsDesktop(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  /* Layer 1 — background image: ±90px on desktop (180px total range),
     ±40px on mobile. Container is 124% tall and starts at top:-12%, so
     even the strongest translation never exposes the section edges. */
  const bgRange = reduced ? 0 : isDesktop ? 90 : 40;
  const bgY = useTransform(scrollYProgress, [0, 1], [`${bgRange}px`, `-${bgRange}px`]);

  /* Layer 3 — decorative magenta glow with counter-parallax. Creates
     a perceptible depth difference against the background. Disabled
     on mobile (the side glow is hidden by the blanket overlay anyway). */
  const glowRange = reduced ? 0 : isDesktop ? 50 : 0;
  const glowY = useTransform(
    scrollYProgress,
    [0, 1],
    [`-${glowRange}px`, `${glowRange}px`],
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
      style={{ backgroundColor: "#07101f", minHeight: "440px" }}
      aria-label={title}
    >
      {/* ── Layer 1: Parallax background — oversize so the translate stays
              in bounds. lg-only will-change to avoid GPU layers on phones. */}
      <motion.div
        className="absolute inset-x-0 top-[-12%] h-[124%] lg:will-change-transform"
        style={reduced ? undefined : { y: bgY }}
        aria-hidden="true"
      >
        <Image
          src={image}
          alt="Digital Signage Display in professionellem Einsatz"
          fill
          className="object-cover"
          sizes="100vw"
          quality={78}
        />
      </motion.div>

      {/* ── Layer 2a: Dark side-gradient overlay (desktop) */}
      <div
        className="pointer-events-none absolute inset-0 hidden lg:block"
        aria-hidden="true"
        style={{ background: overlay }}
      />

      {/* ── Layer 2b: Cinematic vignette — pushes attention to the centre
              and adds perceived depth without darkening the focal subject. */}
      <div
        className="pointer-events-none absolute inset-0 hidden lg:block"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 95% 80% at 50% 50%, transparent 38%, rgba(7,16,31,0.50) 100%)",
        }}
      />

      {/* ── Layer 2c (mobile): blanket overlay so the small text column
              reads cleanly without depending on the side-gradient. */}
      <div
        className="pointer-events-none absolute inset-0 bg-[rgba(7,16,31,0.70)] lg:hidden"
        aria-hidden="true"
      />

      {/* ── Layer 3: Counter-parallax magenta glow. Moves opposite to the
              background; the differential creates the depth illusion. */}
      <motion.div
        className="pointer-events-none absolute -right-24 top-[-10%] h-[120%] w-[640px] lg:will-change-transform"
        aria-hidden="true"
        style={reduced ? undefined : { y: glowY }}
      >
        <div
          className="h-full w-full"
          style={{
            background:
              "radial-gradient(ellipse 55% 75% at 70% 50%, rgba(254,1,154,0.18) 0%, rgba(254,1,154,0.05) 35%, transparent 72%)",
          }}
        />
      </motion.div>

      {/* ── Layer 4: Text content. Padding reduced ~30 % vs. the previous
              py-24/py-32 banner-feel — now a focused, premium block.
              12-col grid: text uses 5 cols so big headlines stay 2 lines. */}
      <div className="relative mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-10 px-6 py-16 md:px-10 lg:grid-cols-12 lg:py-20">
        <motion.div
          className={`relative z-10 max-w-2xl ${
            imagePosition === "left" ? "lg:col-span-5 lg:col-start-8" : "lg:col-span-5"
          }`}
          initial={reduced ? false : { opacity: 0, y: 18 }}
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
              fontSize: "clamp(1.85rem, 2.9vw, 2.7rem)",
              letterSpacing: "-0.035em",
              color: "#f3f4f6",
              textWrap: "balance",
            }}
          >
            {title}
          </h2>

          <p
            className="mb-7 leading-relaxed"
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
