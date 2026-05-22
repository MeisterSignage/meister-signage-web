"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import ContactFormSection from "@/components/sections/ContactFormSection";
import ContactSection from "@/components/sections/ContactSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import JsonLd from "@/components/JsonLd";
import { contactPageSchema } from "@/lib/schema/contactPage";
import { breadcrumbSchema } from "@/lib/schema/breadcrumb";
import data from "@/content/site/kontakt-page.json";

export default function KontaktPage() {
  const heroRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  return (
    <>
      <JsonLd schema={contactPageSchema as Record<string, unknown>} />
      <JsonLd
        schema={
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Kontakt", path: "/kontakt" },
          ]) as Record<string, unknown>
        }
      />

      {/* ── Cinematic Hero ──────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative w-full overflow-hidden"
        style={{ minHeight: "clamp(500px, 62vh, 720px)" }}
      >
        {/* Background image with subtle parallax */}
        <motion.div
          className="absolute inset-0"
          style={{ y: reduced ? 0 : bgY }}
        >
          <Image
            src="/images/products/Hotelempfang-Meister-Signage.webp"
            alt=""
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
            aria-hidden="true"
          />
        </motion.div>

        {/* Cinematic overlay — dark left fade for text readability */}
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(90deg, rgba(4,8,20,0.92) 0%, rgba(4,8,20,0.78) 45%, rgba(4,8,20,0.35) 100%)",
          }}
        />

        {/* Vignette */}
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 120% 100% at 50% 50%, transparent 50%, rgba(4,8,20,0.5) 100%)",
          }}
        />

        {/* Magenta glow — right side accent */}
        <div
          className="pointer-events-none absolute -right-40 top-0 h-full w-[700px]"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 60% 80% at 80% 40%, rgba(254,1,154,0.08) 0%, transparent 65%)",
          }}
        />

        {/* Bottom fade to white card */}
        <div
          className="pointer-events-none absolute bottom-0 left-0 right-0 h-48"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, rgba(4,8,20,0.6) 60%, rgba(4,8,20,0.85) 100%)",
          }}
        />

        {/* Content */}
        <div className="relative mx-auto flex max-w-[1200px] flex-col justify-center px-6 py-24 md:px-10" style={{ minHeight: "clamp(500px, 62vh, 720px)" }}>
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
              {data.hero.eyebrow}
            </span>
            <h1
              className="mb-7 font-light leading-[0.95] tracking-tight"
              style={{
                fontSize: "clamp(2.2rem, 3.8vw, 3.6rem)",
                letterSpacing: "-0.035em",
                color: "#f3f4f6",
              }}
            >
              {data.hero.title}
            </h1>
            <p
              className="mb-8 max-w-[560px] leading-relaxed"
              style={{
                fontSize: "clamp(1rem, 1.5vw, 1.15rem)",
                color: "rgba(209,213,219,0.9)",
              }}
            >
              {data.hero.subtitle}
            </p>

            <ul className="mb-10 flex flex-col gap-2.5">
              {data.hero.bullets.map((b: string) => (
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
              <Link href="#kontaktformular" className="btn-primary gap-2.5">
                Zum Formular
                <ArrowRight className="h-4 w-4 shrink-0" strokeWidth={2} />
              </Link>
              <Link
                href="tel:+41764526687"
                className="inline-flex items-center gap-2.5 rounded-[7px] px-6 py-3.5 text-[15px] font-semibold transition-all duration-200 hover:border-white/30 hover:text-white"
                style={{
                  border: "1px solid rgba(255,255,255,0.14)",
                  color: "#e5e7eb",
                  minHeight: "3.5rem",
                }}
              >
                <Phone className="h-4 w-4 shrink-0" strokeWidth={2} />
                Direkt anrufen
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Form card — pulls up over hero */}
      <div
        id="kontaktformular"
        className="relative w-full bg-white"
        style={{
          marginTop: "-44px",
          borderRadius: "28px 28px 0 0",
          zIndex: 10,
          boxShadow: "0 -12px 48px rgba(7,16,31,0.10)",
        }}
      >
        <ContactFormSection />
      </div>

      <ContactSection
        eyebrow={data.contact.eyebrow}
        title={data.contact.title}
        subtitle={data.contact.subtitle}
        email="chris@meister-signage.ch"
        imageSrc="/images/Chris-Meister.webp"
      />

      <FAQSection
        eyebrow={data.faq.eyebrow}
        title={data.faq.title}
        subtitle={data.faq.subtitle}
        faqs={data.faq.items}
      />

      <CTASection
        eyebrow={data.cta.eyebrow}
        title={data.cta.title}
        subtitle={data.cta.subtitle}
        primaryCta={{ label: data.cta.primaryLabel, href: data.cta.primaryHref }}
        secondaryCta={{ label: data.cta.secondaryLabel, href: data.cta.secondaryHref }}
      />
    </>
  );
}
