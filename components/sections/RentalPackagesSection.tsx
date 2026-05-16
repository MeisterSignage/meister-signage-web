import Image from "next/image";
import Link from "next/link";
import { Check, MonitorPlay, BadgeCheck, Zap, Banknote, UserCheck, RefreshCw } from "lucide-react";

type Package = {
  name: string;
  size: string;
  price: number;
  badge?: string;
  featured?: boolean;
  benefits: string[];
  image?: string;
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
    <section id="pakete" className="relative w-full overflow-hidden bg-white">

      {/* Subtle top border */}
      <div className="absolute inset-x-0 top-0 h-px bg-navy/6" aria-hidden="true" />

      <div className="section-inner relative">

        {/* Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h2 className="mb-4 whitespace-pre-line text-[clamp(2rem,3.2vw,2.8rem)] font-light leading-[1.06] tracking-tight text-navy">
            {title}
          </h2>
          {subtitle && (
            <p className="mx-auto max-w-lg text-[16px] leading-relaxed text-cgray">
              {subtitle}
            </p>
          )}
        </div>

        {/* Card grid — 4 equal columns on lg+ */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {packages.map((pkg) => (
            <PricingCard key={pkg.name} pkg={pkg} ctaLabel={ctaLabel} ctaHref={ctaHref} />
          ))}
        </div>

        {/* Note */}
        {note && (
          <p className="mt-6 text-center text-[12px] text-cgray/60">
            {note}
          </p>
        )}
        {!note && (
          <p className="mt-6 text-center text-[12px] text-cgray/60">
            Alle Preise exkl. MwSt. · Mindestmietdauer auf Anfrage · Einmalige Setup-Gebühr möglich.
          </p>
        )}

        {/* Mini benefits strip */}
        <div className="mt-14 border-t border-navy/8 pt-12">
          <div className="grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-3 md:grid-cols-6">
            {MINI_BENEFITS.map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-2.5 text-center">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-navy/8 bg-offwhite">
                  <Icon className="h-4 w-4 text-navy/50" strokeWidth={1.5} />
                </div>
                <span className="text-[12px] font-medium leading-snug text-navy/55">{label}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

/* ─── Pricing card ─────────────────────────────────────────────────────── */
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

  return (
    <div
      className={[
        "group flex flex-col overflow-hidden rounded-2xl bg-white",
        featured
          ? "border-2 border-magenta/40 shadow-[0_8px_40px_rgba(254,1,154,0.10)]"
          : "border border-navy/10 shadow-sm",
      ].join(" ")}
      style={{
        transition: "transform 220ms ease, box-shadow 220ms ease",
        willChange: "transform",
      }}
    >
      {/* ── 1. Header: model name + optional badge ── */}
      <div className="flex items-center justify-between px-5 pt-5 pb-3">
        <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-navy/40">
          {pkg.name}
        </span>
        {pkg.badge ? (
          <span className="rounded-full bg-magenta px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-white">
            {pkg.badge}
          </span>
        ) : (
          <span className="h-5" /> /* spacer for alignment */
        )}
      </div>

      {/* ── 2. Display size ── */}
      <div className="px-5 pb-1">
        <p className="text-[13px] text-navy/50">{pkg.size}</p>
      </div>

      {/* ── 3. Price ── */}
      <div className="px-5 pb-4">
        <div className="flex items-baseline gap-1">
          <span className="text-[13px] font-semibold text-navy/40">CHF</span>
          <span
            className="font-bold leading-none tracking-tight text-navy"
            style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)" }}
          >
            {pkg.price}
          </span>
          <span className="text-[13px] text-navy/40">/ Mt.</span>
        </div>
      </div>

      {/* ── 4. Product image — central visual element ── */}
      <div className="relative w-full overflow-hidden bg-[#f3f4f6]" style={{ height: "260px" }}>
        {pkg.image ? (
          <Image
            src={pkg.image}
            alt={`${pkg.name} Digital Signage Display`}
            fill
            className="object-contain p-3"
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 25vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <DisplayMockupFallback model={pkg.name} featured={featured} />
          </div>
        )}
        {/* Subtle bottom fade to card */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-8"
          style={{ background: "linear-gradient(to bottom, transparent, rgba(243,244,246,0.6))" }}
          aria-hidden="true"
        />
      </div>

      {/* ── 5 + 6. Features + CTA ── */}
      <div className="flex flex-1 flex-col px-5 pt-5 pb-5">

        {/* Feature list */}
        <ul className="flex flex-col gap-2.5 mb-5">
          {pkg.benefits.map((b) => (
            <li key={b} className="flex items-start gap-2.5">
              <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-magenta/10">
                <Check className="h-2.5 w-2.5 text-magenta" strokeWidth={3} />
              </span>
              <span className="text-[13px] leading-snug text-navy/65">{b}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href={ctaHref}
          className={`${
            featured ? "btn-primary" : "btn-secondary"
          } mt-auto w-full justify-center text-[14px]`}
        >
          {ctaLabel}
        </Link>
      </div>
    </div>
  );
}

/* ─── SVG fallback when no product photo is available ───────────────────── */
function DisplayMockupFallback({ model, featured }: { model: string; featured: boolean }) {
  const uid = model.toLowerCase().replace(/[^a-z0-9]/g, "");
  const MG = "#fe019a";
  const GD = "#C9A84C";

  return (
    <svg viewBox="0 0 160 110" width="160" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id={`fb-bz-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2e3d62" />
          <stop offset="100%" stopColor="#1a2744" />
        </linearGradient>
        <linearGradient id={`fb-sc-${uid}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0c1627" />
          <stop offset="100%" stopColor="#0f1e38" />
        </linearGradient>
        <filter id={`fb-sh-${uid}`} x="-20%" y="-20%" width="140%" height="150%">
          <feDropShadow dx="0" dy="4" stdDeviation="6"
            floodColor={featured ? "#1a0812" : "#080f1e"}
            floodOpacity={featured ? 0.35 : 0.22} />
        </filter>
      </defs>
      <g filter={`url(#fb-sh-${uid})`}>
        <rect x="4" y="2" width="152" height="90" rx="3" fill={`url(#fb-bz-${uid})`} />
        <rect x="8" y="5" width="144" height="83" rx="2" fill={`url(#fb-sc-${uid})`} />
        {/* Simple placeholder lines */}
        <rect x="18" y="16" width="32" height="1.5" rx="0.75" fill={featured ? MG : GD} fillOpacity={0.7} />
        <rect x="18" y="23" width="110" height="7" rx="2" fill="white" fillOpacity={0.85} />
        <rect x="18" y="35" width="85" height="5" rx="1.5" fill="white" fillOpacity={0.50} />
        <rect x="18" y="47" width="72" height="3.5" rx="1" fill="white" fillOpacity={0.30} />
        <rect x="18" y="58" width="60" height="3" rx="1" fill="white" fillOpacity={0.20} />
        <rect x="18" y="71" width="46" height="9" rx="2.5" fill={featured ? MG : "rgba(255,255,255,0.08)"}
          fillOpacity={featured ? 0.75 : 1} stroke={featured ? "none" : "rgba(255,255,255,0.15)"} strokeWidth="0.5" />
      </g>
      <rect x="72" y="92" width="16" height="10" rx="1" fill="#1c2b46" />
      <rect x="52" y="102" width="56" height="5" rx="2.5" fill="#1c2b46" />
    </svg>
  );
}
