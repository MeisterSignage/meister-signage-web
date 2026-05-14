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
            <span className="mb-4 block text-xs font-semibold uppercase tracking-widest text-gold">
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
              className="inline-flex h-12 items-center rounded-btn bg-magenta px-7 text-[1rem] font-bold text-white hover:opacity-90"
            >
              {primaryCta.label}
            </a>
            {secondaryCta && (
              <a
                href={secondaryCta.href}
                className="inline-flex h-12 items-center rounded-btn border border-white/40 bg-transparent px-7 text-[1rem] font-bold text-white hover:border-white hover:bg-white/10"
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
