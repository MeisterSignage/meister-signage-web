"use client";

import Link from "next/link";
import { ArrowRight, MapPin, User, Layers, RefreshCw, Zap } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { viewport, easeOut, staggerContainer, staggerItem } from "@/lib/motion";

const steps = [
  {
    n: "01",
    title: "Beratung",
    text: "Wir klären Einsatzort, Zielgruppe und gewünschte Inhalte.",
  },
  {
    n: "02",
    title: "Konzept",
    text: "Wir empfehlen passende Displaygrössen, Montagearten und Inhalte.",
  },
  {
    n: "03",
    title: "Einrichtung",
    text: "Hardware, Software und erste Inhalte werden vorbereitet.",
  },
  {
    n: "04",
    title: "Betrieb & Support",
    text: "Sie verwalten Inhalte einfach selbst – mit persönlichem Support bei Bedarf.",
  },
];

const trustItems = [
  { icon: MapPin,    label: "Schweizer Betreuung" },
  { icon: User,      label: "Persönlicher Ansprechpartner" },
  { icon: Layers,    label: "Hardware + Software aus einer Hand" },
  { icon: RefreshCw, label: "Flexible Miet- und Kaufmodelle" },
  { icon: Zap,       label: "Einfache Bedienung ohne IT-Kenntnisse" },
];

/* ─────────────────────────────────────────────────────────────────────────── */

export default function TrustProcessSection() {
  const reduced = useReducedMotion();

  return (
    <section className="w-full bg-offwhite">
      <div className="section-inner">

        {/* Header */}
        <motion.div
          className="mb-16 max-w-2xl"
          initial={reduced ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.52, ease: easeOut }}
        >
          <span className="eyebrow">So funktioniert es</span>
          <h2 className="heading-max-2 mt-2 text-navy">
            Von der Idee bis zum laufenden Betrieb.
          </h2>
          <p className="mt-4 max-w-xl text-[16px] leading-relaxed text-cgray">
            Wir begleiten Sie von der Auswahl der passenden Displays über die Einrichtung bis zum laufenden Support – persönlich, pragmatisch und zuverlässig.
          </p>
        </motion.div>

        {/* Process steps */}
        <div className="relative mb-20">
          {/* Connecting line — desktop only */}
          <div
            className="absolute left-[calc(44px/2)] right-[calc(44px/2)] top-[21px] hidden h-px lg:block"
            aria-hidden="true"
            style={{
              background:
                "linear-gradient(to right, rgba(254,1,154,0.18), rgba(254,1,154,0.35) 50%, rgba(254,1,154,0.18))",
            }}
          />

          <motion.div
            className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4"
            variants={staggerContainer}
            initial={reduced ? false : "hidden"}
            whileInView="visible"
            viewport={viewport}
          >
            {steps.map((step, i) => (
              <motion.div
                key={step.n}
                variants={staggerItem}
                className="relative flex flex-col"
              >
                {/* Mobile vertical connector */}
                {i < steps.length - 1 && (
                  <div
                    className="absolute left-[21px] top-[44px] hidden h-[calc(100%+40px)] w-px sm:hidden"
                    style={{ background: "rgba(254,1,154,0.15)" }}
                    aria-hidden="true"
                  />
                )}

                {/* Step circle */}
                <div className="mb-6 flex items-center gap-4 lg:flex-col lg:items-start lg:gap-0">
                  <div
                    className="relative z-10 flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-full bg-white lg:mb-8"
                    style={{
                      border: "2px solid rgba(254,1,154,0.35)",
                      boxShadow: "0 0 0 5px rgba(254,1,154,0.06), 0 2px 8px rgba(26,39,68,0.08)",
                    }}
                  >
                    <span className="text-[13px] font-black tracking-tight text-magenta">
                      {step.n}
                    </span>
                  </div>

                  {/* Mobile: title inline with circle */}
                  <p className="text-[18px] font-bold text-navy lg:hidden">{step.title}</p>
                </div>

                {/* Desktop: title below circle */}
                <p className="mb-2 hidden text-[18px] font-bold text-navy lg:block">
                  {step.title}
                </p>

                <p className="text-[14px] leading-relaxed text-cgray">{step.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Trust strip */}
        <motion.div
          className="mb-16 rounded-[16px] border border-navy/[0.07] bg-white px-6 py-7 sm:px-8"
          initial={reduced ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.5, ease: easeOut }}
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {trustItems.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-magenta/[0.07]">
                  <Icon className="h-[15px] w-[15px] text-magenta" strokeWidth={1.75} />
                </div>
                <span className="text-[13px] font-medium leading-snug text-navy/75">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="flex flex-col items-center gap-4 text-center"
          initial={reduced ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.45, ease: easeOut }}
        >
          <p
            className="font-light text-navy"
            style={{ fontSize: "clamp(1.25rem, 2vw, 1.6rem)", letterSpacing: "-0.02em" }}
          >
            Bereit für moderne digitale Kommunikation?
          </p>
          <Link href="/kontakt" className="btn-primary gap-2.5">
            Beratung anfragen
            <ArrowRight className="h-4 w-4 shrink-0" strokeWidth={2} />
          </Link>
          <p className="text-[12px] tracking-wide text-navy/35">
            Unverbindlich · Antwort innert 24h · Persönliche Beratung
          </p>
        </motion.div>

      </div>
    </section>
  );
}
