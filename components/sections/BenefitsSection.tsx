import type { LucideIcon } from "lucide-react";
import SectionContainer from "@/components/ui/SectionContainer";

type Benefit = {
  icon: LucideIcon;
  title: string;
  description: string;
};

type BenefitsSectionProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  benefits: Benefit[];
};

export default function BenefitsSection({
  eyebrow,
  title,
  subtitle,
  benefits,
}: BenefitsSectionProps) {
  return (
    <SectionContainer className="bg-slate-50">
      {/* Header */}
      <div className="mb-12 max-w-2xl">
        {eyebrow && (
          <span className="mb-3 block text-sm font-semibold uppercase tracking-widest text-neutral-400">
            {eyebrow}
          </span>
        )}
        <h2 className="mb-4 text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">
          {title}
        </h2>
        {subtitle && (
          <p className="text-lg leading-relaxed text-neutral-500">{subtitle}</p>
        )}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map((benefit) => {
          const Icon = benefit.icon;
          return (
            <div
              key={benefit.title}
              className="flex flex-col gap-4 rounded-xl border border-neutral-200 bg-white px-6 py-7 shadow-sm"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100">
                <Icon className="h-5 w-5 text-neutral-700" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="mb-2 text-base font-semibold text-neutral-900">
                  {benefit.title}
                </h3>
                <p className="text-sm leading-relaxed text-neutral-500">
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
