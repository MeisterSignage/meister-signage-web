"use client";

import Link from "next/link";
import {
  ArrowRight,
  Sliders, LayoutGrid, ShieldOff, Star, Repeat2, Users,
  BadgeCheck, Zap, Lightbulb, MessageSquare, UserCheck, MapPin, Shield,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import {
  staggerContainer,
  staggerItem,
  cardHover,
  cardHoverSubtle,
  viewport,
  easeOut,
} from "@/lib/motion";
import data from "@/content/site/homepage-benefits.json";

/* Lucide-Icons mapped by name string — die JSON pflegt nur den Namen,
   hier wird das Icon aufgelöst. Erweitern wenn ein Editor weitere
   Symbole nutzen möchte. */
const ICONS: Record<string, LucideIcon> = {
  "sliders":     Sliders,
  "layout-grid": LayoutGrid,
  "shield-off":  ShieldOff,
  "star":        Star,
  "repeat-2":    Repeat2,
  "users":       Users,
  "badge-check": BadgeCheck,
  "zap":         Zap,
  "lightbulb":   Lightbulb,
  "message-square": MessageSquare,
  "user-check":  UserCheck,
  "map-pin":     MapPin,
  "shield":      Shield,
};

const resolveIcon = (name: string): LucideIcon => ICONS[name] ?? Star;

export default function PremiumBenefitGrid() {
  const reduced = useReducedMotion();
  const FeaturedIcon = resolveIcon(data.featured.icon);
  const DarkIcon     = resolveIcon(data.darkCta.icon);

  return (
    <section className="w-full bg-white">
      <div className="section-inner">

        <motion.div
          className="section-header"
          initial={reduced ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.52, ease: easeOut }}
        >
          <span className="eyebrow">{data.eyebrow}</span>
          <h2 className="heading-max-2 text-navy">{data.title}</h2>
          <p className="mt-3 max-w-xl text-cgray">{data.subtitle}</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial={reduced ? false : "hidden"}
          whileInView="visible"
          viewport={viewport}
        >

          {/* Featured card (col-span-2) */}
          <motion.div
            variants={staggerItem}
            whileHover={reduced ? undefined : cardHover}
            className="group relative overflow-hidden rounded-[14px] p-7 sm:col-span-2 lg:col-span-2"
            style={{
              background: "linear-gradient(135deg, rgba(254,1,154,0.05) 0%, rgba(254,1,154,0.02) 60%, #fff 100%)",
              border: "1px solid rgba(254,1,154,0.14)",
              boxShadow: "0 0 0 1px rgba(254,1,154,0.06), 0 4px 24px rgba(254,1,154,0.07)",
            }}
          >
            <div
              className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full opacity-40"
              aria-hidden="true"
              style={{ background: "radial-gradient(circle, rgba(254,1,154,0.15) 0%, transparent 70%)" }}
            />
            <div className="relative">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-magenta/10">
                <FeaturedIcon className="h-5 w-5 text-magenta" strokeWidth={1.75} />
              </div>
              <p className="mb-2 text-[20px] font-bold leading-snug text-navy">{data.featured.title}</p>
              <p className="max-w-md text-[15px] leading-relaxed text-cgray">{data.featured.description}</p>
              {data.featured.linkLabel && data.featured.linkHref && (
                <Link
                  href={data.featured.linkHref}
                  className="mt-5 inline-flex items-center gap-2 text-[13px] font-semibold text-magenta"
                >
                  <span>{data.featured.linkLabel}</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-1" strokeWidth={2.5} />
                </Link>
              )}
            </div>
          </motion.div>

          {/* Cards */}
          {data.cards.map((card) => (
            <BenefitCard
              key={card.title}
              icon={resolveIcon(card.icon)}
              title={card.title}
              description={card.description}
              reduced={!!reduced}
            />
          ))}

          {/* Dark CTA card (col-span-3) */}
          <motion.div
            variants={staggerItem}
            whileHover={reduced ? undefined : cardHoverSubtle}
            className="flex flex-col gap-5 rounded-[14px] p-7 sm:col-span-2 lg:col-span-3 sm:flex-row sm:items-center sm:justify-between"
            style={{
              background: "linear-gradient(135deg, #1a2744 0%, #0f1a36 100%)",
              boxShadow: "0 4px 24px rgba(26,39,68,0.18)",
            }}
          >
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
                <DarkIcon className="h-5 w-5 text-white" strokeWidth={1.75} />
              </div>
              <div>
                <p className="text-[18px] font-bold text-white">{data.darkCta.title}</p>
                <p className="mt-1 max-w-lg text-[14px] leading-relaxed text-white/55">
                  {data.darkCta.description}
                </p>
              </div>
            </div>
            <Link
              href={data.darkCta.ctaHref}
              className="inline-flex shrink-0 items-center gap-2 rounded-[7px] bg-white px-5 py-3 text-[14px] font-semibold text-navy transition-all duration-200 hover:bg-offwhite hover:-translate-y-px"
            >
              {data.darkCta.ctaLabel}
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} />
            </Link>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}

function BenefitCard({
  icon: Icon,
  title,
  description,
  reduced,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  reduced: boolean;
}) {
  return (
    <motion.div
      variants={staggerItem}
      whileHover={reduced ? undefined : cardHover}
      className="rounded-[14px] border border-navy/[0.09] bg-white p-6 shadow-[0_2px_12px_rgba(26,39,68,0.04)] transition-shadow duration-200 hover:border-navy/[0.16] hover:shadow-[0_8px_32px_rgba(26,39,68,0.10)]"
    >
      <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-xl bg-navy/5">
        <Icon className="text-navy/60" strokeWidth={1.75} style={{ width: "18px", height: "18px" }} />
      </div>
      <p className="mb-2 text-[15px] font-bold text-navy">{title}</p>
      <p className="text-[13.5px] leading-relaxed text-cgray">{description}</p>
    </motion.div>
  );
}
