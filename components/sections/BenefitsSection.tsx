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
        <h2 className="mb-3 text-navy">{title}</h2>
        {subtitle && <p className="text-cgray">{subtitle}</p>}
      </div>

      <div className="card-grid card-grid-3">
        {benefits.map((benefit) => {
          const Icon = benefit.icon;
          return (
            <div
              key={benefit.title}
              className="card card-hover relative flex h-full flex-col gap-4 overflow-hidden pt-7"
            >
              <div className="absolute inset-x-0 top-0 h-[2px] bg-magenta" />
              <div className="flex h-10 w-10 items-center justify-center bg-offwhite">
                <Icon className="h-5 w-5 text-navy" strokeWidth={1.5} />
              </div>
              <div>
                <p className="card-title">{benefit.title}</p>
                <p className="card-body">{benefit.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </SectionContainer>
  );
}
