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
      <div className="mb-10 max-w-3xl">
        {eyebrow && (
          <span className="mb-2 block text-xs font-semibold uppercase tracking-widest text-gold">
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
            <div
              key={benefit.title}
              className="relative flex h-full flex-col gap-4 overflow-hidden border border-navy/10 bg-white px-5 pb-6 pt-7 transition-all duration-200 hover:-translate-y-0.5 hover:border-navy/25 hover:shadow-sm"
            >
              <div className="absolute inset-x-0 top-0 h-[2px] bg-magenta" />
              <div className="flex h-10 w-10 items-center justify-center bg-offwhite">
                <Icon className="h-5 w-5 text-navy" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="mb-2 text-[19px] font-semibold leading-snug text-navy md:text-[22px]">
                  {benefit.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-cgray md:text-[16px]">
                  {benefit.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </SectionContainer>
  );
}
