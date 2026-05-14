type Cta = {
  label: string;
  href: string;
};

type CTASectionProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  primaryCta: Cta;
  secondaryCta?: Cta;
};

export default function CTASection({
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
}: CTASectionProps) {
  return (
    <section className="w-full bg-navy">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-12 md:py-28">
        {/* Gold accent line */}
        <div className="mb-8 h-px w-12 bg-gold" />

        <div className="max-w-2xl">
          {eyebrow && (
            <span className="mb-4 block text-sm font-semibold uppercase tracking-widest text-magenta">
              {eyebrow}
            </span>
          )}
          <h2 className="mb-5 text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mb-10 text-lg leading-relaxed text-white/60">
              {subtitle}
            </p>
          )}

          <div className="flex flex-wrap gap-4">
            <a
              href={primaryCta.href}
              className="inline-block rounded-btn bg-magenta px-7 py-3.5 text-sm font-semibold text-white hover:opacity-90"
            >
              {primaryCta.label}
            </a>
            {secondaryCta && (
              <a
                href={secondaryCta.href}
                className="inline-block rounded-btn border border-white/25 px-7 py-3.5 text-sm font-semibold text-white/80 hover:border-white/50 hover:text-white"
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
