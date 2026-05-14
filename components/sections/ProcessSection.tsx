import type { LucideIcon } from "lucide-react";
import SectionContainer from "@/components/ui/SectionContainer";

type Step = {
  number: number;
  title: string;
  description: string;
  icon?: LucideIcon;
};

type ProcessSectionProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  steps: Step[];
};

export default function ProcessSection({
  eyebrow,
  title,
  subtitle,
  steps,
}: ProcessSectionProps) {
  return (
    <SectionContainer>
      {/* Header */}
      <div className="mb-16 max-w-2xl">
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

      {/* Steps */}
      <div className="relative grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-6">
        {/* Connector line (desktop only) */}
        <div className="absolute left-0 right-0 top-6 hidden border-t border-dashed border-neutral-200 md:block" />

        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div key={step.number} className="relative flex flex-col gap-4">
              {/* Mobile connector */}
              {index < steps.length - 1 && (
                <div className="absolute left-6 top-14 h-full w-px border-l border-dashed border-neutral-200 md:hidden" />
              )}

              {/* Number badge */}
              <div className="relative z-10 flex items-center gap-4 md:flex-col md:items-start">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-sm font-bold text-white">
                  {String(step.number).padStart(2, "0")}
                </div>
                {Icon && (
                  <div className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-100 md:mt-3">
                    <Icon className="h-4 w-4 text-neutral-600" strokeWidth={1.5} />
                  </div>
                )}
              </div>

              {/* Text */}
              <div className="md:mt-5">
                <h3 className="mb-2 text-base font-semibold text-neutral-900">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-neutral-500">
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </SectionContainer>
  );
}
