import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Cta = { label: string; href: string };

type CTASectionProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  primaryCta: Cta;
  secondaryCta?: Cta;
};

export default function CTASection({ eyebrow, title, subtitle, primaryCta, secondaryCta }: CTASectionProps) {
  return (
    <section className="relative w-full overflow-hidden bg-navy">

      {/* Grid backdrop — dimmed for dark bg */}
      <div
        className="pointer-events-none absolute inset-0 bg-grid"
        style={{ opacity: 0.25 }}
        aria-hidden="true"
      />

      {/* Magenta glow — upper-right */}
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-[480px] w-[480px]"
        style={{ background: "radial-gradient(circle, rgba(254,1,154,0.13) 0%, transparent 65%)" }}
        aria-hidden="true"
      />

      <div className="section-inner relative">
        <div className="mb-6 h-px w-10 bg-gold" />
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h2 className="heading-max-2 mb-4 max-w-2xl text-white">{title}</h2>
        {subtitle && <p className="mb-8 max-w-lg text-white/55">{subtitle}</p>}
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
      </div>
    </section>
  );
}
