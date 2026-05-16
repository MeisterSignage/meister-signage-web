import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

type Cta = { label: string; href: string };

type HomeHeroSectionProps = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  primaryCta: Cta;
  secondaryCta?: Cta;
};

export default function HomeHeroSection({
  eyebrow,
  primaryCta,
  secondaryCta,
}: HomeHeroSectionProps) {
  return (
    <section className="relative w-full bg-white">

      {/* Ambient pink glow — bottom sweep */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-[280px]"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(to top, rgba(254,1,154,0.06) 0%, transparent 100%)",
        }}
      />
      {/* Secondary glow right-bottom */}
      <div
        className="pointer-events-none absolute -bottom-20 -right-20 h-[400px] w-[400px]"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(circle, rgba(254,1,154,0.07) 0%, transparent 65%)",
        }}
      />

      <div className="section-inner relative">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_1.35fr] lg:gap-6">

          {/* ── Left: Text ── */}
          <div className="flex flex-col gap-6 lg:max-w-[480px]">

            {/* Eyebrow pill */}
            {eyebrow && (
              <span className="inline-flex w-fit items-center rounded-full bg-magenta/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-magenta">
                {eyebrow}
              </span>
            )}

            {/* Headline */}
            <h1
              style={{
                fontSize: "clamp(2.5rem, 4.8vw, 4.4rem)",
                fontWeight: 900,
                lineHeight: 1.04,
                letterSpacing: "-0.03em",
              }}
              className="text-navy"
            >
              Digital Signage
              <br />
              für Ihren Betrieb –{" "}
              <span className="text-magenta">schlüsselfertig.</span>
            </h1>

            {/* Subtitle */}
            <p className="max-w-[420px] text-[16px] leading-relaxed text-cgray">
              Meister Signage plant, installiert und betreut digitale Displays für
              Restaurants, Hotels, Shops und Unternehmen in der Zentralschweiz.
              Ohne IT-Aufwand, ohne Lernkurve.
            </p>

            {/* CTAs */}
            <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:flex-wrap sm:items-center">
              <Link href={primaryCta.href} className="btn-primary gap-2.5">
                {primaryCta.label}
                <ArrowRight className="h-4 w-4 shrink-0" strokeWidth={2.5} />
              </Link>
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="inline-flex items-center gap-2 rounded-[7px] border border-navy/15 bg-white px-5 py-3.5 text-[16px] font-semibold text-navy transition-all duration-200 hover:border-navy/25 hover:bg-navy/[0.03]"
                >
                  {secondaryCta.label}
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-navy/50" strokeWidth={2} />
                </Link>
              )}
            </div>

            {/* Microcopy */}
            <p className="text-[12px] font-medium text-navy/40">
              Unverbindlich · Antwort innert 24h · Persönliche Beratung
            </p>


          </div>

          {/* ── Right: Visual ── */}
          <HeroVisual />

        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HERO VISUAL
   ═══════════════════════════════════════════════════════════════ */

function HeroVisual() {
  return (
    <>
      {/* Mobile — display only */}
      <div className="relative mx-auto w-full max-w-[480px] lg:hidden">
        <Image
          src="/images/products/Spark5-Design.webp"
          alt="Digital Signage Display Spark 5"
          width={900}
          height={600}
          className="h-auto w-full"
          style={{ filter: "drop-shadow(0 20px 48px rgba(26,39,68,0.16))" }}
          priority
        />
      </div>

      {/* Desktop — full floating composition */}
      <div
        className="relative hidden w-full lg:block"
        style={{ minHeight: "600px" }}
      >
        {/* ── Main monitor display ── */}
        <div
          className="animate-float absolute"
          style={{
            left: "4%",
            right: "10%",
            top: "12%",
            filter: "drop-shadow(0 36px 80px rgba(26,39,68,0.22))",
          }}
        >
          <Image
            src="/images/products/Spark5-Design.webp"
            alt="Digital Signage Display"
            width={900}
            height={600}
            className="h-auto w-full"
            priority
          />
        </div>

        {/* ── Menu card — top center-left ── */}
        <div
          className="animate-float-delay absolute z-10"
          style={{ left: "18%", top: "-2%" }}
        >
          <MenuCard />
        </div>

        {/* ── Cloud card — top right ── */}
        <div
          className="animate-float-slow absolute right-0 z-10"
          style={{ top: "4%" }}
        >
          <CloudCard />
        </div>

        {/* ── Dashboard card — left center ── */}
        <div
          className="animate-float-rev absolute z-10"
          style={{ left: "0%", top: "38%" }}
        >
          <DashboardCard />
        </div>

        {/* ── Event card — right middle ── */}
        <div
          className="animate-float-slow absolute right-0 z-10"
          style={{ top: "28%" }}
        >
          <EventCard />
        </div>

        {/* ── Feature cards — bottom ── */}
        <div
          className="animate-float absolute z-10"
          style={{ left: "30%", bottom: "0%" }}
        >
          <FeatureCard
            icon="box"
            label="Alles aus einer Hand"
            sub="Hardware, Software und Content."
          />
        </div>
        <div
          className="animate-float-delay absolute z-10"
          style={{ left: "55%", bottom: "4%" }}
        >
          <FeatureCard
            icon="check"
            label="Bereit in wenigen Minuten"
            sub="Keine komplizierte Einrichtung."
          />
        </div>

      </div>
    </>
  );
}

/* ─── Dashboard card (dark) ─────────────────────────────────────── */
function DashboardCard() {
  return (
    <div
      className="w-[178px] overflow-hidden rounded-2xl p-4"
      style={{
        background: "linear-gradient(160deg, #111827 0%, #0f1629 100%)",
        boxShadow:
          "0 24px 56px rgba(0,0,0,0.30), inset 0 1px 0 rgba(255,255,255,0.06)",
      }}
    >
      <div className="mb-1 flex items-center gap-1.5">
        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-magenta/20">
          <svg viewBox="0 0 16 16" fill="none" className="h-3 w-3 text-magenta">
            <rect x="1" y="5" width="5" height="7" rx="1" stroke="currentColor" strokeWidth="1.4" />
            <rect x="8" y="2" width="7" height="10" rx="1" stroke="currentColor" strokeWidth="1.4" />
          </svg>
        </div>
        <p className="text-[9px] font-semibold uppercase tracking-widest text-white/40">
          Übersicht
        </p>
      </div>

      {/* Sparkline */}
      <svg viewBox="0 0 160 48" className="mb-2 w-full" height="40" preserveAspectRatio="none">
        <defs>
          <linearGradient id="hcf2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fe019a" stopOpacity="0.30" />
            <stop offset="100%" stopColor="#fe019a" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M0,44 L20,38 L40,42 L60,28 L80,30 L100,16 L120,10 L140,5 L160,0 L160,48 L0,48Z" fill="url(#hcf2)" />
        <polyline points="0,44 20,38 40,42 60,28 80,30 100,16 120,10 140,5 160,0" fill="none" stroke="#fe019a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="160" cy="0" r="3" fill="#fe019a" />
      </svg>

      <p className="text-[28px] font-bold leading-none text-white">124</p>
      <p className="mt-0.5 text-[9.5px] text-white/40">Geräte online</p>
      <div className="mt-2 h-px bg-white/8" />
      <p className="mt-2 text-[9px] leading-snug text-white/30">
        Alle Systeme funktionieren einwandfrei.
      </p>
      <div className="mt-1.5 flex items-center gap-1">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
        <span className="text-[8.5px] text-emerald-400/80">Live</span>
      </div>
    </div>
  );
}

/* ─── Cloud card ─────────────────────────────────────────────────── */
function CloudCard() {
  return (
    <div
      className="w-[170px] rounded-2xl bg-white p-4"
      style={{
        boxShadow: "0 16px 48px rgba(26,39,68,0.12), 0 2px 8px rgba(26,39,68,0.06)",
      }}
    >
      <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-magenta/8">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-4.5 w-4.5 text-magenta" style={{ width: "18px", height: "18px" }}>
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
        </svg>
      </div>
      <p className="text-[13px] font-bold text-navy">Cloud-basiert</p>
      <p className="mt-1 text-[11px] leading-relaxed text-navy/50">
        Inhalte überall verwalten und ausspielen.
      </p>
    </div>
  );
}

/* ─── Menu card ──────────────────────────────────────────────────── */
function MenuCard() {
  const items = [
    { name: "Caesar Salad",   price: "12.50" },
    { name: "Poké Bowl",      price: "16.50" },
    { name: "Burger Classic", price: "18.50" },
    { name: "Fresh Lemonade", price: "6.50" },
  ];
  return (
    <div
      className="w-[195px] rounded-2xl bg-white p-3.5"
      style={{
        boxShadow: "0 16px 48px rgba(26,39,68,0.12), 0 2px 8px rgba(26,39,68,0.06)",
      }}
    >
      <div className="mb-2 flex items-center gap-1.5">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5 text-magenta">
          <path d="M3 11l19-9-9 19-2-8-8-2z" />
        </svg>
        <p className="text-[10px] font-bold uppercase tracking-widest text-navy">Menü</p>
      </div>
      <div className="flex flex-col gap-1.5">
        {items.map((item) => (
          <div key={item.name} className="flex items-center justify-between">
            <span className="text-[10.5px] text-navy/65">{item.name}</span>
            <span className="text-[10.5px] font-semibold tabular-nums text-navy">{item.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Event card (portrait, dark gradient) ───────────────────────── */
function EventCard() {
  return (
    <div
      className="w-[142px] overflow-hidden rounded-2xl p-3.5"
      style={{
        background: "linear-gradient(170deg, #1c0a35 0%, #3d1060 45%, #8b1a6b 80%, #fe019a 130%)",
        boxShadow: "0 20px 52px rgba(0,0,0,0.28)",
      }}
    >
      <p className="mb-1 text-[8.5px] font-semibold uppercase tracking-widest text-white/50">
        Event
      </p>
      <p className="font-black leading-[1.1] tracking-tight text-white" style={{ fontSize: "17px" }}>
        BUSINESS<br />SUMMIT<br />
        <span style={{ color: "#fe019a", textShadow: "0 0 20px rgba(254,1,154,0.5)" }}>ZÜRICH</span>
      </p>
      <div className="my-2.5 h-px bg-white/10" />
      <p className="text-[9px] text-white/50">18. Juni 2025</p>
      <p className="text-[9px] text-white/50">The Circle</p>
      <div
        className="mt-3 flex h-7 w-7 items-center justify-center rounded-full"
        style={{ background: "rgba(255,255,255,0.15)" }}
      >
        <svg viewBox="0 0 16 16" fill="none" className="h-3.5 w-3.5 text-white">
          <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
}

/* ─── Small feature card ─────────────────────────────────────────── */
function FeatureCard({ icon, label, sub }: { icon: "box" | "check" | "plug"; label: string; sub: string }) {
  return (
    <div
      className="flex items-center gap-2.5 rounded-xl bg-white px-3.5 py-3"
      style={{
        boxShadow: "0 8px 24px rgba(26,39,68,0.10), 0 1px 4px rgba(26,39,68,0.06)",
      }}
    >
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-magenta/8">
        {icon === "box" && (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-magenta">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
            <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          </svg>
        )}
        {icon === "check" && (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-magenta">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        )}
        {icon === "plug" && (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-magenta">
            <path d="M12 22V12M5 12H19M8 12V7m8 5V7m-5-3h4" />
          </svg>
        )}
      </div>
      <div>
        <p className="text-[11.5px] font-bold leading-none text-navy">{label}</p>
        <p className="mt-0.5 text-[9.5px] leading-snug text-navy/45">{sub}</p>
      </div>
    </div>
  );
}
