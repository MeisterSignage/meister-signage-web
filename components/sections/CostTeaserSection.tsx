import Link from "next/link";
import SectionContainer from "@/components/ui/SectionContainer";

type CostTeaserSectionProps = {
  eyebrow?: string;
  title: string;
  text: string;
  ctaLabel: string;
  ctaHref: string;
};

export default function CostTeaserSection({
  eyebrow,
  title,
  text,
  ctaLabel,
  ctaHref,
}: CostTeaserSectionProps) {
  return (
    <SectionContainer white>
      <div className="mx-auto max-w-3xl">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h2 className="heading-max-2 mb-5 text-navy">{title}</h2>
        <p className="mb-8 text-cgray leading-relaxed">{text}</p>
        <Link href={ctaHref} className="btn-secondary">
          {ctaLabel}
        </Link>
      </div>
    </SectionContainer>
  );
}
