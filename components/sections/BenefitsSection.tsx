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
      <div className="mb-10 max-w-prose">
        {eyebrow && (
          <span className="mb-3 block text-xs font-semibold uppercase tracking-widest text-cgray">
            {eyebrow}
          </span>
        )}
        <h2 className="mb-3 text-navy">{title}</h2>
        {subtitle && <p className="text-cgray">{subtitle}</p>}
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map((benefit) => {
          const Icon = benefit.icon;
          return (
            <div key={benefit.title} className="flex flex-col gap-3 border border-navy/10 bg-white px-5 py-6">
              <div className="flex h-9 w-9 items-center justify-center bg-offwhite">
                <Icon className="h-4 w-4 text-navy" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="mb-1 text-sm font-bold text-navy">{benefit.title}</h3>
                <p className="text-sm leading-relaxed text-cgray">{benefit.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </SectionContainer>
  );
}
