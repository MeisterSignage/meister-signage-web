import type { LucideIcon } from "lucide-react";
import SectionContainer from "@/components/ui/SectionContainer";

type Benefit = { icon: LucideIcon; title: string; description: string };

type BenefitsSectionProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  benefits: Benefit[];
};

export default function BenefitsSection({ eyebrow, title, subtitle, benefits }: BenefitsSectionProps) {
  return (
    <SectionContainer>
      <div className="section-header">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h2 className="heading-max-2 mb-3 text-navy">{title}</h2>
        {subtitle && <p className="text-cgray">{subtitle}</p>}
      </div>

      <div className="card-grid card-grid-3">
        {benefits.map((benefit) => {
          const Icon = benefit.icon;
          return (
            <div
              key={benefit.title}
              className="group flex h-full flex-col gap-5 border border-navy/8 bg-white p-6 transition-all duration-200 hover:border-navy/[0.14] hover:shadow-[0_4px_20px_rgba(26,39,68,0.06)]"
            >
              {/* Icon container — transitions to magenta-tint on hover */}
              <div className="flex h-11 w-11 items-center justify-center border border-navy/8 bg-offwhite transition-colors duration-200 group-hover:border-magenta/20 group-hover:bg-magenta/[0.04]">
                <Icon
                  className="h-5 w-5 text-navy transition-colors duration-200 group-hover:text-magenta"
                  strokeWidth={1.5}
                />
              </div>

              {/* Gold accent — extends slightly on hover */}
              <div className="h-px w-8 bg-gold/50 transition-all duration-300 group-hover:w-12 group-hover:bg-gold" />

              {/* Text */}
              <div>
                <p className="card-title mb-2">{benefit.title}</p>
                <p className="card-body">{benefit.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </SectionContainer>
  );
}
