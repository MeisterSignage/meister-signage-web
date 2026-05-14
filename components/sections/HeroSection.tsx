import Image from "next/image";

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
    <section className="w-full overflow-hidden bg-offwhite">
      <div className="section-inner">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">

          {/* Text column */}
          <div className="flex flex-col gap-5">
            {eyebrow && <span className="eyebrow">{eyebrow}</span>}
            <h1 className="hero-title text-navy">{title}</h1>
            <p className="max-w-xl text-cgray">{subtitle}</p>
            <ul className="flex flex-col gap-2.5">
              {bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="card-body text-navy">{bullet}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:flex-wrap sm:items-center">
              <a href={primaryCta.href} className="btn-primary">{primaryCta.label}</a>
              {secondaryCta && (
                <a href={secondaryCta.href} className="btn-secondary">{secondaryCta.label}</a>
              )}
            </div>
          </div>

          {/* Image column */}
          <div className="w-full overflow-hidden">
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
              <div className="relative flex h-[420px] w-full flex-col overflow-hidden border border-navy/10 bg-white">
                <div className="h-[3px] w-full bg-magenta" />
                <div className="flex flex-1 items-center justify-center">
                  <span className="card-body">Bild folgt</span>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg
      className="mt-0.5 h-4 w-4 shrink-0 text-gold"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
