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
      <div className="section-inner">
        <div className="mb-6 h-px w-10 bg-gold" />
        <div>
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h2 className="heading-max-2 mb-3 text-white">{title}</h2>
          {subtitle && <p className="mb-8 text-white/60">{subtitle}</p>}
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href={primaryCta.href} className="btn-primary">{primaryCta.label}</a>
            {secondaryCta && (
              <a href={secondaryCta.href} className="btn-secondary">{secondaryCta.label}</a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
