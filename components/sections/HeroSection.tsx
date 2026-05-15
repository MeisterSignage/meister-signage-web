import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Cta = { label: string; href: string };

type HeroSectionProps = {
  eyebrow?: string;
  title: string;
  subtitle: string;
  bullets: [string, string, string];
  primaryCta: Cta;
  secondaryCta?: Cta;
  imageSrc?: string;
  imageAlt?: string;
};

export default function HeroSection({
  eyebrow,
  title,
  subtitle,
  bullets,
  primaryCta,
  secondaryCta,
  imageSrc,
  imageAlt = "",
}: HeroSectionProps) {
  return (
    <section className="relative w-full overflow-hidden bg-offwhite">

      {/* Subtle grid backdrop */}
      <div className="pointer-events-none absolute inset-0 bg-grid" aria-hidden="true" />

      {/* Magenta glow — top-left, very low opacity */}
      <div
        className="pointer-events-none absolute -left-48 -top-48 h-[640px] w-[640px]"
        style={{ background: "radial-gradient(circle, rgba(254,1,154,0.07) 0%, transparent 65%)" }}
        aria-hidden="true"
      />

      <div className="section-inner relative">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* Text column */}
          <div className="flex max-w-[540px] flex-col gap-6">
            {eyebrow && <span className="eyebrow">{eyebrow}</span>}
            <h1 className="hero-title text-navy">{title}</h1>
            <p className="max-w-[440px] text-[17px] leading-relaxed text-cgray">{subtitle}</p>

            <ul className="flex flex-col gap-3">
              {bullets.map((bullet) => (
                <li key={bullet} className="flex items-center gap-3">
                  <span
                    className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-magenta/8"
                    aria-hidden="true"
                  >
                    <svg className="h-3 w-3 text-magenta" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M2 6l3 3 5-5"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="text-[15px] text-navy/80">{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center gap-3 pt-1">
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
          </div>

          {/* Visual column */}
          <div className="relative w-full overflow-hidden">
            {imageSrc ? (
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={720}
                height={480}
                className="h-auto w-full object-cover"
                priority
              />
            ) : (
              <ScreenMockup />
            )}
          </div>

        </div>
      </div>
    </section>
  );
}

/** Premium screen mockup — replaces the old "Bild folgt" placeholder */
function ScreenMockup() {
  return (
    <div className="overflow-hidden border border-navy/10 bg-white">

      {/* Browser / app chrome bar */}
      <div className="flex items-center gap-1.5 border-b border-navy/8 bg-offwhite/80 px-4 py-3">
        <div className="h-2.5 w-2.5 rounded-full bg-magenta/25" />
        <div className="h-2.5 w-2.5 rounded-full bg-gold/35" />
        <div className="h-2.5 w-2.5 rounded-full bg-navy/12" />
        <div className="ml-4 h-2 w-36 rounded-full bg-navy/8" />
      </div>

      {/* Content mockup */}
      <div className="p-7">

        {/* Eyebrow skeleton */}
        <div className="mb-3 h-2 w-20 rounded-full bg-gold/25" />

        {/* Title skeletons */}
        <div className="mb-2 h-4 w-4/5 rounded-full bg-navy/10" />
        <div className="mb-7 h-4 w-3/5 rounded-full bg-navy/7" />

        {/* Metric / stat row */}
        <div className="mb-6 flex gap-4">
          {[80, 55, 65].map((w, i) => (
            <div key={i} className="flex flex-col gap-1.5">
              <div className="h-5 rounded" style={{ width: `${w}px`, background: "rgba(254,1,154,0.10)" }} />
              <div className="h-2 w-12 rounded-full bg-navy/8" />
            </div>
          ))}
        </div>

        {/* Card grid */}
        <div className="grid grid-cols-3 gap-2.5">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="flex flex-col gap-2 border border-navy/6 p-3"
              style={{ opacity: Math.max(0.35, 1 - i * 0.12) }}
            >
              <div className="h-5 w-5 rounded-sm bg-magenta/10" />
              <div className="h-2 w-3/4 rounded-full bg-navy/10" />
              <div className="h-2 w-1/2 rounded-full bg-navy/6" />
            </div>
          ))}
        </div>

        {/* Bottom action bar */}
        <div className="mt-5 flex items-center justify-between">
          <div className="h-2 w-24 rounded-full bg-navy/6" />
          <div className="flex h-7 w-24 items-center justify-center rounded border border-magenta/25 bg-magenta/5">
            <div className="h-2 w-14 rounded-full bg-magenta/20" />
          </div>
        </div>

      </div>
    </div>
  );
}
