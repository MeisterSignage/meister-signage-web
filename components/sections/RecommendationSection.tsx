import Link from "next/link";
import SectionContainer from "@/components/ui/SectionContainer";

type RecommendationSectionProps = {
  title: string;
  text: string;
  ctaLabel: string;
  ctaHref: string;
};

export default function RecommendationSection({
  title,
  text,
  ctaLabel,
  ctaHref,
}: RecommendationSectionProps) {
  return (
    <SectionContainer white>
      <div className="mx-auto max-w-3xl">
        <div className="mb-4 h-px w-8 bg-gold" />
        <h2 className="heading-max-2 mb-5 text-navy">{title}</h2>
        <p className="mb-8 text-cgray leading-relaxed">{text}</p>
        <Link href={ctaHref} className="btn-primary">
          {ctaLabel}
        </Link>
      </div>
    </SectionContainer>
  );
}
