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

/* ─── Mini-benefits shown below the cards ───────────────────────────── */
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

      {/* ── Background layers ──────────────────────────────────────────── */}
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

        {/* ── Header ─────────────────────────────────────────────────────── */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h2
            className="heading-max-2 mb-4 whitespace-pre-line text-[clamp(2rem,3.2vw,2.8rem)] font-light leading-[1.06] tracking-tight text-navy"
          >
            {title}
          </h2>
          {subtitle && (
            <p className="mx-auto max-w-lg text-[16px] leading-relaxed text-cgray">
              {subtitle}
            </p>
          )}
        </div>

        {/* ── Card grid: 1 → 2 → 3 → 5 ──────────────────────────────────── */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
          {packages.map((pkg) => (
            <PricingCard
              key={pkg.name}
              pkg={pkg}
              ctaLabel={ctaLabel}
              ctaHref={ctaHref}
            />
          ))}
        </div>

        {/* ── Note ───────────────────────────────────────────────────────── */}
        <p className="mt-6 text-center text-[12px] text-cgray/70">
          {note ?? "Alle Preise exkl. MwSt. · Mindestmietdauer auf Anfrage · Einmalige Setup-Gebühr möglich."}
        </p>

        {/* ── Mini benefits ──────────────────────────────────────────────── */}
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

/* ─── Single pricing card ─────────────────────────────────────────────── */
function PricingCard({
  pkg,
  ctaLabel,
  ctaHref,
}: {
  pkg: Package;
  ctaLabel: string;
  ctaHref: string;
}) {
  const featured = pkg.featured ?? false;
  const sizeInches = parseInt(pkg.size); // extract number for mockup

  return (
    <div
      className={[
        "group flex flex-col overflow-hidden rounded-[10px] bg-white",
        featured
          ? "border border-magenta/35 hover:border-magenta/55 hover:-translate-y-1 hover:shadow-[0_10px_36px_rgba(254,1,154,0.09)]"
          : "border border-navy/10 hover:border-navy/[0.18] hover:-translate-y-0.5 hover:shadow-[0_6px_24px_rgba(26,39,68,0.07)]",
      ].join(" ")}
      style={{
        transition: "transform 220ms ease, border-color 220ms ease, box-shadow 220ms ease",
        willChange: "transform",
      }}
    >
      {/* ── Top badge row ─────────────────────────────────────────── */}
      <div className="flex h-8 items-center px-5">
        {pkg.badge && (
          <span className="rounded-full bg-gold/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-gold">
            {pkg.badge}
          </span>
        )}
      </div>

      {/* ── Card body ─────────────────────────────────────────────── */}
      <div className="flex flex-1 flex-col px-5 pb-6">

        {/* Model + size */}
        <p className="text-[11px] font-semibold uppercase tracking-widest text-navy/35">
          {pkg.name}
        </p>
        <p className="mt-1 text-[12px] font-medium text-navy/55">
          {pkg.size}
        </p>

        {/* Monitor SVG illustration */}
        <div className="my-5 flex justify-center">
          <MonitorSvg sizeInches={sizeInches} featured={featured} />
        </div>

        {/* Divider */}
        <div className="mb-4 h-px bg-navy/6" />

        {/* Price */}
        <div className="mb-4 flex items-baseline gap-1">
          <span className="text-[10px] font-semibold uppercase tracking-wide text-cgray">CHF</span>
          <span className="text-[38px] font-light leading-none tracking-tight text-magenta">
            {pkg.price}
          </span>
          <span className="text-[11px] text-cgray">/ Mt.</span>
        </div>

        {/* Divider */}
        <div className="mb-4 h-px bg-navy/6" />

        {/* Benefits */}
        <ul className="flex flex-1 flex-col gap-2">
          {pkg.benefits.map((benefit) => (
            <li key={benefit} className="flex items-start gap-2">
              <Check
                className="mt-0.5 h-3.5 w-3.5 shrink-0 text-magenta"
                strokeWidth={2.5}
              />
              <span className="text-[12px] leading-snug text-cgray">{benefit}</span>
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

/* ─── Inline monitor SVG illustration ────────────────────────────────── */
function MonitorSvg({
  sizeInches,
  featured,
}: {
  sizeInches: number;
  featured: boolean;
}) {
  const accent = featured
    ? "rgba(254,1,154,0.14)"
    : "rgba(26,39,68,0.05)";
  const accentLine = featured
    ? "rgba(254,1,154,0.25)"
    : "rgba(201,168,76,0.30)";
  const border = featured
    ? "rgba(254,1,154,0.20)"
    : "rgba(26,39,68,0.09)";
  const skeleton = "rgba(26,39,68,0.09)";
  const stand = "rgba(26,39,68,0.08)";

  // Scale the screen width slightly with the actual size
  const clampedSize = Math.min(Math.max(sizeInches, 18), 55);
  const screenW = 90 + Math.round(((clampedSize - 18) / 37) * 30); // 90–120 px

  return (
    <svg
      width={screenW + 20}
      height={Math.round((screenW / 16) * 9) + 22}
      viewBox={`0 0 ${screenW + 20} ${Math.round((screenW / 16) * 9) + 22}`}
      fill="none"
      aria-hidden="true"
    >
      {/* Screen body */}
      <rect
        x="2" y="2"
        width={screenW + 16} height={Math.round((screenW / 16) * 9) + 2}
        rx="2"
        fill={accent}
        stroke={border}
        strokeWidth="1.2"
      />
      {/* Content: eyebrow accent */}
      <rect x="10" y="12" width="22" height="2.5" rx="1.25" fill={accentLine} />
      {/* Content: text skeletons */}
      <rect x="10" y="20" width={screenW - 10} height="2.5" rx="1.25" fill={skeleton} opacity="0.7" />
      <rect x="10" y="27" width={screenW - 25} height="2" rx="1" fill={skeleton} opacity="0.45" />
      <rect x="10" y="33" width={screenW - 35} height="2" rx="1" fill={skeleton} opacity="0.3" />
      {/* Content: mini card row */}
      <rect x="10" y="41" width={Math.round((screenW - 20) * 0.30)} height="14" rx="1.5" fill={skeleton} opacity="0.4" />
      <rect x={10 + Math.round((screenW - 20) * 0.35)} y="41" width={Math.round((screenW - 20) * 0.30)} height="14" rx="1.5" fill={skeleton} opacity="0.28" />
      <rect x={10 + Math.round((screenW - 20) * 0.70)} y="41" width={Math.round((screenW - 20) * 0.28)} height="14" rx="1.5" fill={skeleton} opacity="0.16" />
      {/* Stand neck */}
      <rect
        x={Math.round((screenW + 18) / 2) - 5}
        y={Math.round((screenW / 16) * 9) + 4}
        width="10" height="7"
        rx="0"
        fill={stand}
      />
      {/* Stand base */}
      <rect
        x={Math.round((screenW + 18) / 2) - 18}
        y={Math.round((screenW / 16) * 9) + 11}
        width="36" height="4"
        rx="2"
        fill={stand}
      />
    </svg>
  );
}
