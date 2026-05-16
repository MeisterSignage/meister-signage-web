import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Cta = { label: string; href: string };

type HomeHeroSectionProps = {
  eyebrow?: string;
  title: string;
  subtitle: string;
  primaryCta: Cta;
  secondaryCta?: Cta;
};

export default function HomeHeroSection({
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
}: HomeHeroSectionProps) {
  return (
    <section className="relative w-full overflow-hidden bg-white">

      {/* Ambient glow — bottom-right bleed */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 75% 110%, rgba(254,1,154,0.045) 0%, transparent 65%)",
        }}
      />

      <div className="section-inner relative">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_1.25fr] lg:gap-6 xl:gap-10">

          {/* ── Left: Text ── */}
          <div className="flex flex-col gap-7 lg:max-w-[490px]">

            {eyebrow && (
              <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-magenta">
                {eyebrow}
              </span>
            )}

            <h1 className="hero-title text-navy">{title}</h1>

            <p className="max-w-[420px] text-[17px] leading-relaxed text-cgray">
              {subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Link href={primaryCta.href} className="btn-primary gap-2.5">
                {primaryCta.label}
                <ArrowRight className="h-4 w-4 shrink-0" strokeWidth={2} />
              </Link>
              {secondaryCta && (
                <Link href={secondaryCta.href} className="btn-secondary">
                  {secondaryCta.label}
                </Link>
              )}
            </div>

            {/* Micro trust badges */}
            <div className="flex flex-wrap items-center gap-5 pt-1">
              {[
                "Persönlich betreut",
                "Plug & Play",
                "Cloud-basiert",
              ].map((b) => (
                <span
                  key={b}
                  className="flex items-center gap-1.5 text-[12px] text-navy/45"
                >
                  <span className="h-1 w-1 rounded-full bg-magenta/50" />
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* ── Right: Visual ── */}
          <HeroVisual />

        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HERO VISUAL — main display + floating cards
   ═══════════════════════════════════════════════════════════════ */

function HeroVisual() {
  return (
    <>
      {/* Mobile: display only, full width, no cards */}
      <div className="relative mx-auto w-full max-w-[480px] lg:hidden">
        <Image
          src="/images/products/Spark5-Design.png"
          alt="Digital Signage Display Spark 5"
          width={900}
          height={600}
          className="h-auto w-full"
          style={{ filter: "drop-shadow(0 20px 48px rgba(26,39,68,0.16))" }}
          priority
        />
      </div>

      {/* Desktop: full floating composition */}
      <div
        className="relative hidden w-full lg:block"
        style={{ minHeight: "580px" }}
      >

        {/* ── Main display — centered, drop-shadowed ── */}
        <div
          className="animate-float absolute"
          style={{
            left: "10%",
            right: "5%",
            top: "50%",
            transform: "translateY(-50%)",
            filter: "drop-shadow(0 32px 72px rgba(26,39,68,0.20))",
          }}
        >
          <Image
            src="/images/products/Spark5-Design.png"
            alt="Digital Signage Display Spark 5"
            width={900}
            height={600}
            className="h-auto w-full"
            priority
          />
        </div>

        {/* ── Dashboard card — top right ── */}
        <div className="animate-float-slow absolute right-0 top-2 z-10 w-[196px]">
          <DashboardCard />
        </div>

        {/* ── Cloud card — top left ── */}
        <div className="animate-float-delay absolute left-0 top-10 z-10 w-[165px]">
          <CloudCard />
        </div>

        {/* ── Menu card — left center ── */}
        <div className="animate-float-rev absolute left-0 z-10 w-[158px]" style={{ top: "42%" }}>
          <MenuCard />
        </div>

        {/* ── Event card — bottom left ── */}
        <div className="animate-float absolute bottom-0 left-10 z-10 w-[146px]">
          <EventCard />
        </div>

        {/* ── Feature pills — bottom right ── */}
        <div className="animate-float-slow absolute bottom-6 right-0 z-10 flex flex-col gap-2">
          <FeaturePill
            icon="plug"
            label="Plug & Play"
            sub="Einfach installieren."
          />
          <FeaturePill
            icon="box"
            label="Alles aus einer Hand"
            sub="Hardware, Software & Content."
          />
          <FeaturePill
            icon="chat"
            label="Persönlicher Support"
            sub="Wir sind für Sie da."
          />
        </div>

      </div>
    </>
  );
}

/* ─── Dashboard card (dark) ────────────────────────────────────── */
function DashboardCard() {
  return (
    <div
      className="overflow-hidden rounded-2xl p-4 shadow-2xl"
      style={{
        background: "linear-gradient(160deg, #111827 0%, #0f1629 100%)",
        boxShadow: "0 24px 56px rgba(0,0,0,0.32), inset 0 1px 0 rgba(255,255,255,0.06)",
      }}
    >
      {/* Header row */}
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-magenta/20">
            <svg viewBox="0 0 16 16" fill="none" className="h-3.5 w-3.5 text-magenta">
              <rect x="1" y="5" width="5" height="7" rx="1" stroke="currentColor" strokeWidth="1.4" />
              <rect x="8" y="2" width="7" height="10" rx="1" stroke="currentColor" strokeWidth="1.4" />
            </svg>
          </div>
          <div>
            <p className="text-[8.5px] font-semibold uppercase tracking-widest text-white/35">
              ÜBERSICHT
            </p>
            <p className="text-[11px] font-semibold leading-tight text-white">
              System Dashboard
            </p>
          </div>
        </div>
        <div className="flex gap-0.5">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-1 w-1 rounded-full bg-white/20" />
          ))}
        </div>
      </div>

      {/* Metric */}
      <div className="mb-1 flex items-center justify-between">
        <p className="text-[8.5px] uppercase tracking-wider text-white/35">
          Geräte online
        </p>
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
      </div>
      <p className="text-[30px] font-bold leading-none text-white">124</p>
      <div className="mt-1 flex items-center gap-2">
        <p className="text-[9.5px] text-white/40">von 135 Geräten</p>
        <span className="rounded-full bg-emerald-400/15 px-1.5 py-0.5 text-[8px] font-bold text-emerald-400">
          92%
        </span>
      </div>

      {/* Sparkline */}
      <div className="mt-3">
        <p className="mb-1 text-[8px] uppercase tracking-wider text-white/25">
          Aktivität (7 Tage)
        </p>
        <svg
          viewBox="0 0 88 30"
          className="w-full"
          height="28"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="hcf" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fe019a" stopOpacity="0.28" />
              <stop offset="100%" stopColor="#fe019a" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0,26 L11,21 L22,24 L33,15 L44,17 L55,9 L66,5 L77,3 L88,0 L88,30 L0,30Z"
            fill="url(#hcf)"
          />
          <polyline
            points="0,26 11,21 22,24 33,15 44,17 55,9 66,5 77,3 88,0"
            fill="none"
            stroke="#fe019a"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="88" cy="0" r="2.5" fill="#fe019a" />
        </svg>
      </div>
    </div>
  );
}

/* ─── Cloud card (light) ─────────────────────────────────────────── */
function CloudCard() {
  return (
    <div
      className="rounded-2xl bg-white p-4"
      style={{
        boxShadow: "0 16px 48px rgba(26,39,68,0.12), 0 2px 8px rgba(26,39,68,0.06)",
      }}
    >
      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-magenta/8">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5 text-magenta"
        >
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
        </svg>
      </div>
      <p className="text-[13px] font-semibold leading-snug text-navy">Cloud-basiert</p>
      <p className="mt-1 text-[11px] leading-relaxed text-navy/50">
        Inhalte zentral verwalten und ausspielen.
      </p>
    </div>
  );
}

/* ─── Menu card (light) ──────────────────────────────────────────── */
function MenuCard() {
  const items = [
    { name: "Caesar Salad",    price: "12.50" },
    { name: "Poké Bowl",       price: "16.50" },
    { name: "Burger Classic",  price: "18.50" },
    { name: "Fresh Lemonade",  price: "6.50" },
    { name: "Coffee Latte",    price: "4.90" },
  ];
  return (
    <div
      className="rounded-2xl bg-white p-3.5"
      style={{
        boxShadow: "0 16px 48px rgba(26,39,68,0.12), 0 2px 8px rgba(26,39,68,0.06)",
      }}
    >
      <div className="mb-2.5 flex items-center gap-1.5 border-b border-navy/6 pb-2.5">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-3.5 w-3.5 text-magenta"
        >
          <path d="M3 11l19-9-9 19-2-8-8-2z" />
        </svg>
        <p className="text-[10px] font-bold uppercase tracking-widest text-navy">
          Menü
        </p>
      </div>
      <div className="flex flex-col gap-1.5">
        {items.map((item) => (
          <div key={item.name} className="flex items-center justify-between">
            <span className="text-[10px] text-navy/65">{item.name}</span>
            <span className="text-[10px] font-semibold tabular-nums text-navy">
              {item.price}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Event card (dark gradient) ─────────────────────────────────── */
function EventCard() {
  return (
    <div
      className="overflow-hidden rounded-2xl p-3.5"
      style={{
        background: "linear-gradient(150deg, #1c0a35 0%, #350a50 45%, #6b0a50 100%)",
        boxShadow: "0 20px 52px rgba(0,0,0,0.28)",
      }}
    >
      <p className="mb-1.5 text-[8.5px] font-semibold uppercase tracking-widest text-white/40">
        Event
      </p>
      <p
        className="font-black leading-[1.1] tracking-tight text-white"
        style={{ fontSize: "clamp(13px, 1.8vw, 16px)" }}
      >
        BUSINESS
        <br />
        SUMMIT
        <br />
        <span className="text-magenta">ZÜRICH</span>
      </p>
      <div className="my-2.5 h-px bg-white/10" />
      <p className="text-[9px] text-white/45">18. Juni 2025</p>
      <p className="text-[9px] text-white/45">The Circle</p>
      <div
        className="mt-3 flex items-center justify-between rounded-lg px-2.5 py-1.5"
        style={{ background: "rgba(254,1,154,0.75)" }}
      >
        <span className="text-[9px] font-bold uppercase tracking-wide text-white">
          Anmelden
        </span>
        <span className="text-[9px] text-white/80">→</span>
      </div>
    </div>
  );
}

/* ─── Feature pill (compact light card) ──────────────────────────── */
function FeaturePill({
  icon,
  label,
  sub,
}: {
  icon: "plug" | "box" | "chat";
  label: string;
  sub: string;
}) {
  return (
    <div
      className="flex items-center gap-2.5 rounded-xl bg-white px-3 py-2.5"
      style={{
        boxShadow: "0 8px 24px rgba(26,39,68,0.10), 0 1px 4px rgba(26,39,68,0.06)",
      }}
    >
      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-magenta/8">
        {icon === "plug" && (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5 text-magenta">
            <path d="M12 22V12M5 12H19M8 12V7m8 5V7m-6-3h4" />
          </svg>
        )}
        {icon === "box" && (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5 text-magenta">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
            <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
            <line x1="12" y1="22.08" x2="12" y2="12" />
          </svg>
        )}
        {icon === "chat" && (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5 text-magenta">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )}
      </div>
      <div>
        <p className="text-[11px] font-semibold leading-none text-navy">{label}</p>
        <p className="mt-0.5 text-[9.5px] leading-snug text-navy/45">{sub}</p>
      </div>
    </div>
  );
}
