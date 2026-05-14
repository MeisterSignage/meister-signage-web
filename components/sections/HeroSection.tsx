import Image from "next/image";
import SectionContainer from "@/components/ui/SectionContainer";

type Cta = {
  label: string;
  href: string;
};

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
    <SectionContainer className="bg-slate-50">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Text */}
        <div className="flex flex-col gap-6">
          {eyebrow && (
            <span className="text-sm font-semibold uppercase tracking-widest text-blue-700">
              {eyebrow}
            </span>
          )}

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-neutral-900 md:text-5xl">
            {title}
          </h1>

          <p className="text-lg leading-relaxed text-neutral-600">{subtitle}</p>

          <ul className="flex flex-col gap-3">
            {bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3">
                <CheckIcon />
                <span className="text-neutral-700">{bullet}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href={primaryCta.href}
              className="inline-block rounded-md bg-blue-700 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-800"
            >
              {primaryCta.label}
            </a>
            {secondaryCta && (
              <a
                href={secondaryCta.href}
                className="inline-block rounded-md border border-neutral-300 px-6 py-3 text-sm font-semibold text-neutral-700 hover:border-neutral-400 hover:bg-neutral-100"
              >
                {secondaryCta.label}
              </a>
            )}
          </div>
        </div>

        {/* Image or placeholder */}
        <div className="relative w-full overflow-hidden rounded-xl">
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={720}
              height={480}
              className="h-auto w-full object-cover shadow-lg"
              priority
            />
          ) : (
            <div className="flex aspect-[3/2] w-full items-center justify-center rounded-xl bg-neutral-200">
              <span className="text-sm text-neutral-400">Bild folgt</span>
            </div>
          )}
        </div>
      </div>
    </SectionContainer>
  );
}

function CheckIcon() {
  return (
    <svg
      className="mt-0.5 h-5 w-5 shrink-0 text-blue-700"
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
