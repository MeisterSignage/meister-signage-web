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
}: Props) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  /* GPU-friendly Y-translate. Max 60px total travel (30 each direction).
     Disabled when reduced-motion is on. */
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    reduced ? ["0px", "0px"] : ["30px", "-30px"],
  );

  /* Overlay gradient direction depends on which side the text sits on.
     Text needs the darker side. */
  const overlay =
    imagePosition === "right"
      ? "linear-gradient(to right, rgba(7,16,31,0.92) 0%, rgba(7,16,31,0.78) 30%, rgba(7,16,31,0.30) 65%, rgba(7,16,31,0.10) 100%)"
      : "linear-gradient(to left, rgba(7,16,31,0.92) 0%, rgba(7,16,31,0.78) 30%, rgba(7,16,31,0.30) 65%, rgba(7,16,31,0.10) 100%)";

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: "#07101f", minHeight: "520px" }}
      aria-label={title}
    >
      {/* Parallax background — disabled on mobile via CSS (transform on
          motion-div is a no-op for mobile because the wrapper class hides
          the motion via media query) */}
      <motion.div
        className="absolute inset-0 will-change-transform motion-safe:lg:[transform:translate3d(0,0,0)]"
        style={{ y }}
        aria-hidden="true"
      >
        <Image
          src={image}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          quality={75}
        />
      </motion.div>

      {/* Dark gradient overlay for readability */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{ background: overlay }}
      />
      {/* Mobile: stronger blanket overlay so the small text column stays legible */}
      <div
        className="pointer-events-none absolute inset-0 bg-[rgba(7,16,31,0.55)] lg:hidden"
        aria-hidden="true"
      />

      {/* Soft magenta corner glow — same vocabulary as the other dark sections */}
      <div
        className="pointer-events-none absolute -right-32 top-0 h-full w-[600px]"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 80% 50%, rgba(254,1,154,0.08) 0%, transparent 65%)",
        }}
      />

      <div className="relative mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 px-6 py-24 md:px-10 lg:grid-cols-3 lg:py-32">
        {/* Text block — column 1 of 3 when image-right (default) */}
        <motion.div
          className={`relative z-10 max-w-xl ${
            imagePosition === "left" ? "lg:col-start-3" : "lg:col-span-1"
          }`}
          initial={reduced ? false : { opacity: 0, y: 24 }}
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
            className="mb-5 font-light leading-[0.98] tracking-tight"
            style={{
              fontSize: "clamp(1.9rem, 3vw, 2.9rem)",
              letterSpacing: "-0.035em",
              color: "#f3f4f6",
            }}
          >
            {title}
          </h2>

          <p
            className="mb-8 leading-relaxed"
            style={{
              maxWidth: "440px",
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
