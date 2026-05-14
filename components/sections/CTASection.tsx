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
      <div className="mx-auto max-w-content px-4 py-14 md:px-10 md:py-20">
        <div className="mb-6 h-px w-10 bg-gold" />
        <div className="max-w-3xl">
          {eyebrow && (
            <span className="mb-2 block text-xs font-semibold uppercase tracking-widest text-gold">
              {eyebrow}
            </span>
          )}
          <h2 className="mb-3 text-white">{title}</h2>
          {subtitle && (
            <p className="mb-8 text-white/60">{subtitle}</p>
          )}
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={primaryCta.href}
              className="inline-flex h-12 items-center justify-center rounded-btn bg-magenta px-7 text-[15px] font-semibold text-white transition-all duration-200 hover:-translate-y-px hover:bg-[#d60080] active:scale-[0.98]"
            >
              {primaryCta.label}
            </a>
            {secondaryCta && (
              <a
                href={secondaryCta.href}
                className="inline-flex h-12 items-center justify-center rounded-btn border border-white/40 bg-transparent px-7 text-[15px] font-semibold text-white transition-all duration-200 hover:border-white hover:bg-white/10 active:scale-[0.98]"
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
