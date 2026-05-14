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
    <section className="w-full bg-navy">
      <div className="mx-auto max-w-content px-4 py-16 md:px-10 md:py-24">
        <div className="mb-8 h-px w-10 bg-gold" />
        <div className="max-w-prose">
          {eyebrow && (
            <span className="mb-4 block text-xs font-semibold uppercase tracking-widest text-magenta">
              {eyebrow}
            </span>
          )}
          <h2 className="mb-4 text-white">{title}</h2>
          {subtitle && (
            <p className="mb-8 text-white/60">{subtitle}</p>
          )}
          <div className="flex flex-wrap gap-4">
            <a
              href={primaryCta.href}
              className="inline-block rounded-btn bg-magenta px-6 py-3 text-sm font-bold text-white hover:opacity-90"
            >
              {primaryCta.label}
            </a>
            {secondaryCta && (
              <a
                href={secondaryCta.href}
                className="inline-block rounded-btn border border-white/25 px-6 py-3 text-sm font-bold text-white/80 hover:border-white/50 hover:text-white"
              >
                {secondaryCta.label}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
