import Link from "next/link";
import {
  Check,
  MonitorPlay,
  BadgeCheck,
  Zap,
  Banknote,
  UserCheck,
  RefreshCw,
} from "lucide-react";

type Package = {
  name: string;
  size: string;
  price: number;
  badge?: string;
  featured?: boolean;
  benefits: string[];
};

type RentalPackagesSectionProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  packages: Package[];
  ctaLabel?: string;
  ctaHref?: string;
  note?: string;
};

const MINI_BENEFITS = [
  { icon: MonitorPlay, label: "Moderne Technik" },
  { icon: BadgeCheck,  label: "Alles inklusive" },
  { icon: Zap,         label: "Schnelle Installation" },
  { icon: Banknote,    label: "Planbare Kosten" },
  { icon: UserCheck,   label: "Persönlicher Support" },
  { icon: RefreshCw,   label: "Flexibel bleiben" },
];

export default function RentalPackagesSection({
  eyebrow,
  title,
  subtitle,
  packages,
  ctaLabel = "Anfrage starten",
  ctaHref = "/kontakt",
  note,
}: RentalPackagesSectionProps) {
  return (
    <section id="pakete" className="relative w-full overflow-hidden bg-offwhite">

      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-60" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -left-32 top-0 h-[500px] w-[500px]"
        style={{ background: "radial-gradient(circle, rgba(254,1,154,0.05) 0%, transparent 65%)" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-32 bottom-0 h-[400px] w-[400px]"
        style={{ background: "radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 65%)" }}
        aria-hidden="true"
      />

      <div className="section-inner relative">

        {/* Header */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h2 className="heading-max-2 mb-4 whitespace-pre-line text-[clamp(2rem,3.2vw,2.8rem)] font-light leading-[1.06] tracking-tight text-navy">
            {title}
          </h2>
          {subtitle && (
            <p className="mx-auto max-w-lg text-[16px] leading-relaxed text-cgray">
              {subtitle}
            </p>
          )}
        </div>

        {/* Card grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
          {packages.map((pkg) => (
            <PricingCard key={pkg.name} pkg={pkg} ctaLabel={ctaLabel} ctaHref={ctaHref} />
          ))}
        </div>

        {/* Note */}
        <p className="mt-6 text-center text-[12px] text-cgray/70">
          {note ?? "Alle Preise exkl. MwSt. · Mindestmietdauer auf Anfrage · Einmalige Setup-Gebühr möglich."}
        </p>

        {/* Mini benefits */}
        <div className="mt-14 border-t border-navy/8 pt-12">
          <div className="grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-3 md:grid-cols-6">
            {MINI_BENEFITS.map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-2.5 text-center">
                <div className="flex h-9 w-9 items-center justify-center border border-navy/8 bg-white">
                  <Icon className="h-4 w-4 text-navy/60" strokeWidth={1.5} />
                </div>
                <span className="text-[12px] font-medium leading-snug text-navy/60">{label}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

/* ─── Pricing card ─────────────────────────────────────────────────────── */
function PricingCard({ pkg, ctaLabel, ctaHref }: { pkg: Package; ctaLabel: string; ctaHref: string }) {
  const featured = pkg.featured ?? false;

  return (
    <div
      className={[
        "group flex flex-col overflow-hidden rounded-[10px] bg-white",
        featured
          ? "border border-magenta/35 hover:border-magenta/55 hover:-translate-y-1 hover:shadow-[0_10px_36px_rgba(254,1,154,0.09)]"
          : "border border-navy/10 hover:border-navy/[0.18] hover:-translate-y-0.5 hover:shadow-[0_6px_24px_rgba(26,39,68,0.07)]",
      ].join(" ")}
      style={{ transition: "transform 220ms ease, border-color 220ms ease, box-shadow 220ms ease", willChange: "transform" }}
    >
      {/* Badge row */}
      <div className="flex h-8 items-center px-5">
        {pkg.badge && (
          <span className="rounded-full bg-gold/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-gold">
            {pkg.badge}
          </span>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col px-5 pb-6">
        <p className="text-[11px] font-semibold uppercase tracking-widest text-navy/35">{pkg.name}</p>
        <p className="mt-1 text-[12px] font-medium text-navy/55">{pkg.size}</p>

        {/* Display mockup */}
        <div className="my-5">
          <DisplayMockup model={pkg.name} featured={featured} />
        </div>

        <div className="mb-4 h-px bg-navy/6" />

        {/* Price */}
        <div className="mb-4 flex items-baseline gap-1">
          <span className="text-[10px] font-semibold uppercase tracking-wide text-cgray">CHF</span>
          <span className="text-[38px] font-light leading-none tracking-tight text-magenta">{pkg.price}</span>
          <span className="text-[11px] text-cgray">/ Mt.</span>
        </div>

        <div className="mb-4 h-px bg-navy/6" />

        {/* Benefits */}
        <ul className="flex flex-1 flex-col gap-2">
          {pkg.benefits.map((b) => (
            <li key={b} className="flex items-start gap-2">
              <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-magenta" strokeWidth={2.5} />
              <span className="text-[12px] leading-snug text-cgray">{b}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="mt-5">
          <Link
            href={ctaHref}
            className={`${featured ? "btn-primary" : "btn-secondary"} w-full justify-center text-[14px]`}
          >
            {ctaLabel}
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   PREMIUM DISPLAY MOCKUPS
   ═══════════════════════════════════════════════════════════════════════════ */

/**
 * DisplayMockup — premium SVG monitor for each Spark model.
 *
 * Architecture:
 *   outer bezel (dark gunmetal gradient)
 *   └── screen area (deep dark navy gradient)
 *       └── ScreenContent (model-specific signage UI)
 *   glare overlay (top-left diagonal white fade)
 *   stand (neck + base)
 *
 * Each gradient/filter uses a namespaced id derived from the model name so
 * multiple instances on the same page never collide.
 */
function DisplayMockup({ model, featured }: { model: string; featured: boolean }) {
  // Safe ID prefix: "spark2", "spark5", "sparkq" etc.
  const uid = model.toLowerCase().replace(/[^a-z0-9]/g, "");

  return (
    <svg
      viewBox="0 0 200 140"
      width="100%"
      fill="none"
      aria-hidden="true"
      className="overflow-visible"
    >
      <defs>
        {/* Bezel: dark gunmetal, subtle depth gradient */}
        <linearGradient id={`bz-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#2e3d62" />
          <stop offset="100%" stopColor="#1a2744" />
        </linearGradient>

        {/* Screen: deep dark navy, slight diagonal sheen */}
        <linearGradient id={`sc-${uid}`} x1="0.05" y1="0" x2="0.95" y2="1">
          <stop offset="0%"   stopColor="#0c1627" />
          <stop offset="100%" stopColor="#0f1e38" />
        </linearGradient>

        {/* Glare: top-left white diagonal fade → glass feel */}
        <linearGradient id={`gl-${uid}`} x1="0" y1="0" x2="0.65" y2="0.65">
          <stop offset="0%"  stopColor="rgba(255,255,255,0.08)" />
          <stop offset="55%" stopColor="rgba(255,255,255,0)" />
        </linearGradient>

        {/* Drop shadow — stronger + slight magenta cast for featured */}
        <filter id={`sh-${uid}`} x="-18%" y="-18%" width="136%" height="148%">
          <feDropShadow
            dx={0}
            dy={featured ? 6 : 3}
            stdDeviation={featured ? 9 : 5}
            floodColor={featured ? "#1a0812" : "#080f1e"}
            floodOpacity={featured ? 0.42 : 0.28}
          />
        </filter>

        {/* Bezel edge highlight: thin bright line on top edge */}
        <linearGradient id={`hl-${uid}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="rgba(255,255,255,0)" />
          <stop offset="30%"  stopColor="rgba(255,255,255,0.12)" />
          <stop offset="70%"  stopColor="rgba(255,255,255,0.12)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
      </defs>

      {/* ── Display body ─────────────────────────────────────────────────── */}
      <g filter={`url(#sh-${uid})`}>
        {/* Outer bezel */}
        <rect x="6" y="2" width="188" height="116" rx="4" fill={`url(#bz-${uid})`} />
        {/* Bezel top-edge highlight (adds material realism) */}
        <rect x="6" y="2" width="188" height="2" rx="1" fill={`url(#hl-${uid})`} />
        {/* Screen panel — 3px inset on all sides, 2px more at bottom for chin */}
        <rect x="10" y="6"  width="180" height="106" rx="2" fill={`url(#sc-${uid})`} />

        {/* Model-specific UI content */}
        <ScreenContent model={model} featured={featured} />

        {/* Screen glare — glass feel */}
        <rect x="10" y="6" width="180" height="106" rx="2" fill={`url(#gl-${uid})`} />
        {/* Pixel-row highlight at very top of screen */}
        <rect x="10" y="6" width="180" height="2" rx="1" fillOpacity={0.06} fill="white" />
      </g>

      {/* ── Stand ────────────────────────────────────────────────────────── */}
      {/* Neck: centered, narrow */}
      <rect x="90" y="118" width="20" height="11" rx="1" fill="#1c2b46" />
      {/* Base: wider, pill shape */}
      <rect x="66" y="129" width="68" height="6" rx="3" fill="#1c2b46" />
      {/* Base top highlight */}
      <rect x="66" y="129" width="68" height="2" rx="1" fillOpacity={0.06} fill="white" />
    </svg>
  );
}

/* ─── Screen content router ─────────────────────────────────────────────── */
function ScreenContent({ model, featured }: { model: string; featured: boolean }) {
  switch (model) {
    case "Spark 2": return <Spark2Screen />;
    case "Spark 3": return <Spark3Screen />;
    case "Spark 4": return <Spark4Screen />;
    case "Spark 5": return <Spark5Screen />;
    case "Spark Q": return <SparkQScreen />;
    default:        return null;
  }
}

/* ─── Design tokens (SVG colours) ───────────────────────────────────────── */
const MG = "#fe019a";          // magenta
const GD = "#C9A84C";          // gold
const W  = "white";            // white text/elements
const wo = (o: number) => `rgba(255,255,255,${o})`;  // white with opacity
const mo = (o: number) => `rgba(254,1,154,${o})`;    // magenta with opacity
const go = (o: number) => `rgba(201,168,76,${o})`;   // gold with opacity

/*
 * Screen coordinate space: viewBox 200×140
 *   Screen rect: x=10, y=6, w=180, h=106  (ends at x=190, y=112)
 *   Safe inner padding: 10px left/right, 8px top/bottom
 *   Content area: x=20..180, y=14..104  (w=160, h=90)
 */

/* ─── Spark 2 — Reception / Counter display (18.5") ──────────────────── */
function Spark2Screen() {
  return (
    <g>
      {/* Gold eyebrow bar */}
      <rect x="20" y="16" width="26" height="2" rx="1" fill={GD} fillOpacity={0.75} />

      {/* WILLKOMMEN headline (2 weight-simulated bars) */}
      <rect x="20" y="23" width="110" height="7" rx="2"  fill={W} fillOpacity={0.88} />
      <rect x="20" y="34" width="80"  height="4.5" rx="1.5" fill={W} fillOpacity={0.40} />

      {/* Gold divider */}
      <rect x="20" y="44" width="140" height="0.75" fill={GD} fillOpacity={0.30} />

      {/* Info rows with magenta bullet dots */}
      {([52, 62, 72, 82, 92] as const).map((y, i) => (
        <g key={y}>
          <circle cx={25} cy={y + 3} r={2.5} fill={MG} fillOpacity={0.55 - i * 0.06} />
          <rect x={32} y={y + 1} width={90 - i * 10} height="3.5" rx="1.5"
            fill={W} fillOpacity={0.45 - i * 0.06} />
          <rect x={32} y={y + 7} width={60 - i * 6} height="2.5" rx="1"
            fill={W} fillOpacity={0.22 - i * 0.03} />
        </g>
      ))}

      {/* Bottom timestamp area */}
      <rect x="130" y="97" width="50" height="9" rx="2"
        fill={mo(0.12)} stroke={mo(0.20)} strokeWidth="0.5" />
      <rect x="136" y="100" width="30" height="3" rx="1.5" fill={MG} fillOpacity={0.5} />
    </g>
  );
}

/* ─── Spark 3 — Menu board (32") ─────────────────────────────────────── */
function Spark3Screen() {
  const cols = [20, 73, 126]; // 3 column x-starts, width ~47px each

  return (
    <g>
      {/* Header band */}
      <rect x="10" y="6" width="180" height="22" fill={go(0.08)} />
      <rect x="10" y="28" width="180" height="0.75" fill={W} fillOpacity={0.08} />

      {/* Category labels in header */}
      {(["Speisen", "Getränke", "Desserts"] as const).map((_, ci) => (
        <g key={ci}>
          <rect x={cols[ci]} y="12" width="42" height="4" rx="1.5"
            fill={ci === 0 ? GD : W}
            fillOpacity={ci === 0 ? 0.70 : 0.38} />
          <rect x={cols[ci]} y="19" width="28" height="2.5" rx="1"
            fill={W} fillOpacity={0.22} />
        </g>
      ))}

      {/* Menu item cards — 3 cols × 3 rows */}
      {cols.map((cx, ci) => (
        <g key={ci}>
          {[0, 1, 2].map((row) => {
            const ry = 34 + row * 24;
            return (
              <g key={row}>
                {/* Item name */}
                <rect x={cx} y={ry} width={42 - row * 2} height="3.5" rx="1.5"
                  fill={ci === 0 && row === 0 ? MG : W}
                  fillOpacity={ci === 0 && row === 0 ? 0.65 : 0.42 - row * 0.06} />
                {/* Item description */}
                <rect x={cx} y={ry + 6} width={38 - row * 3} height="2.5" rx="1"
                  fill={W} fillOpacity={0.22} />
                {/* Price tag */}
                <rect x={cx + 26} y={ry + 13} width="18" height="6" rx="1.5"
                  fill={ci === 0 && row === 0 ? mo(0.25) : go(0.10)}
                  stroke={ci === 0 && row === 0 ? mo(0.35) : go(0.20)}
                  strokeWidth="0.4" />
                <rect x={cx + 29} y={ry + 15.5} width="12" height="2.5" rx="1"
                  fill={ci === 0 && row === 0 ? MG : GD}
                  fillOpacity={0.70} />
              </g>
            );
          })}
        </g>
      ))}

      {/* Footer strip */}
      <rect x="10" y="106" width="180" height="6" fill="rgba(0,0,0,0.25)" />
      <rect x="20"  y="108" width="40" height="2.5" rx="1" fill={W} fillOpacity={0.25} />
      <rect x="152" y="107" width="28" height="4" rx="1.5" fill={MG} fillOpacity={0.45} />
    </g>
  );
}

/* ─── Spark 4 — Large promo display (43") ────────────────────────────── */
function Spark4Screen() {
  return (
    <g>
      {/* Hero area — subtle magenta wash */}
      <rect x="10" y="6" width="180" height="66" fill={mo(0.04)} />

      {/* Decorative circle — right side graphic element */}
      <circle cx="168" cy="38" r="26" fill={mo(0.07)} />
      <circle cx="168" cy="38" r="16" fill={mo(0.10)} />
      <circle cx="168" cy="38" r="7"  fill={mo(0.18)} />

      {/* Headline zone */}
      <rect x="20" y="16" width="18" height="1.5" rx="0.75" fill={MG} fillOpacity={0.80} />
      <rect x="20" y="22" width="120" height="8" rx="2.5" fill={W} fillOpacity={0.90} />
      <rect x="20" y="34" width="95"  height="8" rx="2.5" fill={W} fillOpacity={0.68} />
      <rect x="20" y="47" width="82"  height="3" rx="1.5" fill={W} fillOpacity={0.36} />
      <rect x="20" y="54" width="65"  height="3" rx="1.5" fill={W} fillOpacity={0.24} />

      {/* Divider between hero and stat grid */}
      <rect x="10" y="72" width="180" height="0.75" fill={W} fillOpacity={0.07} />

      {/* 4 stat cards */}
      {([0, 1, 2, 3] as const).map((i) => {
        const sx = 20 + i * 41;
        return (
          <g key={i}>
            <rect x={sx} y="77" width="35" height="24" rx="2"
              fill={i === 0 ? mo(0.14) : wo(0.04)}
              stroke={i === 0 ? mo(0.22) : wo(0.07)}
              strokeWidth="0.5" />
            <rect x={sx + 5} y="83" width={i === 0 ? 18 : 14} height="3.5" rx="1.5"
              fill={i === 0 ? MG : W}
              fillOpacity={i === 0 ? 0.75 : 0.42} />
            <rect x={sx + 5} y="90" width={24 - i * 2} height="2.5" rx="1"
              fill={W} fillOpacity={0.22} />
            <rect x={sx + 5} y="95" width={18 - i * 2} height="2"   rx="1"
              fill={W} fillOpacity={0.14} />
          </g>
        );
      })}
    </g>
  );
}

/* ─── Spark 5 — Premium hero display (50", featured) ─────────────────── */
function Spark5Screen() {
  return (
    <g>
      {/* Magenta gradient wash on upper portion */}
      <rect x="10" y="6" width="180" height="50" fill={mo(0.06)} />

      {/* Strong magenta eyebrow accent */}
      <rect x="20" y="16" width="42" height="2"  rx="1"  fill={MG} fillOpacity={0.85} />

      {/* Massive hero headlines */}
      <rect x="20" y="23" width="150" height="9.5" rx="2.5" fill={W} fillOpacity={0.93} />
      <rect x="20" y="37" width="118" height="9.5" rx="2.5" fill={W} fillOpacity={0.72} />

      {/* Subtitle text */}
      <rect x="20" y="52" width="96"  height="3" rx="1.5" fill={W} fillOpacity={0.40} />
      <rect x="20" y="59" width="74"  height="3" rx="1.5" fill={W} fillOpacity={0.26} />

      {/* 3 metric cards */}
      {([0, 1, 2] as const).map((i) => {
        const mx = 20 + i * 56;
        return (
          <g key={i}>
            <rect x={mx} y="67" width="50" height="28" rx="2.5"
              fill={i === 0 ? mo(0.16) : wo(0.05)}
              stroke={i === 0 ? mo(0.28) : wo(0.09)}
              strokeWidth="0.6" />
            {/* Metric value */}
            <rect x={mx + 6} y="74" width={i === 0 ? 24 : 18} height="5" rx="1.5"
              fill={i === 0 ? MG : W}
              fillOpacity={i === 0 ? 0.80 : 0.46} />
            {/* Metric label */}
            <rect x={mx + 6} y="83" width={30 - i * 2} height="2.5" rx="1"
              fill={W} fillOpacity={0.26} />
            <rect x={mx + 6} y="88" width={22 - i * 2} height="2"   rx="1"
              fill={W} fillOpacity={0.16} />
          </g>
        );
      })}

      {/* CTA button */}
      <rect x="20" y="100" width="56" height="9" rx="2.5"
        fill={MG} fillOpacity={0.80} />
      {/* Secondary button (outlined) */}
      <rect x="82" y="100" width="44" height="9" rx="2.5"
        fill={wo(0.07)} stroke={wo(0.18)} strokeWidth="0.6" />
      <rect x="88" y="103" width="28" height="3" rx="1.5" fill={W} fillOpacity={0.35} />
    </g>
  );
}

/* ─── Spark Q — Wide-format editorial display (33", featured) ─────────── */
function SparkQScreen() {
  return (
    <g>
      {/* Left panel background (60% width) */}
      <rect x="10" y="6" width="107" height="106" fill={go(0.05)} />

      {/* Vertical divider */}
      <rect x="117" y="6" width="0.75" height="106" fill={W} fillOpacity={0.09} />

      {/* Right panel (40% width) */}
      <rect x="117" y="6" width="73" height="106" fill={mo(0.05)} />

      {/* ── Left panel content ── */}
      {/* Gold eyebrow */}
      <rect x="20" y="17" width="30" height="1.75" rx="0.875" fill={GD} fillOpacity={0.80} />
      {/* 2-line headline */}
      <rect x="20" y="24" width="90"  height="7.5" rx="2" fill={W} fillOpacity={0.90} />
      <rect x="20" y="36" width="72"  height="7.5" rx="2" fill={W} fillOpacity={0.68} />
      {/* Subtitle */}
      <rect x="20" y="49" width="80" height="3" rx="1.5" fill={W} fillOpacity={0.38} />
      <rect x="20" y="56" width="62" height="3" rx="1.5" fill={W} fillOpacity={0.24} />

      {/* 2 metric cards (left panel, bottom) */}
      {([0, 1] as const).map((i) => {
        const cx = 20 + i * 52;
        return (
          <g key={i}>
            <rect x={cx} y="66" width="46" height="30" rx="2"
              fill={i === 0 ? mo(0.12) : wo(0.05)}
              stroke={i === 0 ? mo(0.22) : wo(0.08)}
              strokeWidth="0.5" />
            <rect x={cx + 5} y="73" width={i === 0 ? 20 : 16} height="4" rx="1.5"
              fill={i === 0 ? MG : GD}
              fillOpacity={i === 0 ? 0.78 : 0.62} />
            <rect x={cx + 5} y="81" width={28} height="2.5" rx="1" fill={W} fillOpacity={0.26} />
            <rect x={cx + 5} y="87" width={22} height="2"  rx="1" fill={W} fillOpacity={0.16} />
          </g>
        );
      })}

      {/* ── Right panel content ── */}
      {/* Magenta eyebrow */}
      <rect x="126" y="17" width="20" height="1.75" rx="0.875" fill={MG} fillOpacity={0.75} />
      {/* Sidebar heading */}
      <rect x="126" y="24" width="54" height="4" rx="1.5" fill={W} fillOpacity={0.55} />

      {/* Info list rows */}
      {([34, 44, 54, 64, 74, 84] as const).map((y, i) => (
        <g key={y}>
          <rect x={126} y={y} width="3.5" height="3.5" rx="0.5"
            fill={i % 2 === 0 ? MG : GD} fillOpacity={0.55 - i * 0.04} />
          <rect x={133} y={y + 0.5} width={46 - i * 4} height="2.5" rx="1"
            fill={W} fillOpacity={0.40 - i * 0.04} />
        </g>
      ))}

      {/* Right panel CTA */}
      <rect x="126" y="96" width="58" height="9" rx="2"
        fill={MG} fillOpacity={0.72} />
    </g>
  );
}
