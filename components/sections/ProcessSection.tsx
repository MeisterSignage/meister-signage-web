import type { LucideIcon } from "lucide-react";
import SectionContainer from "@/components/ui/SectionContainer";

type Step = { number: number; title: string; description: string; icon?: LucideIcon };

type ProcessSectionProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  steps: Step[];
};

export default function ProcessSection({ eyebrow, title, subtitle, steps }: ProcessSectionProps) {
  return (
    <SectionContainer white>
      <div className="mb-12 max-w-prose">
        {eyebrow && (
          <span className="mb-3 block text-xs font-semibold uppercase tracking-widest text-cgray">
            {eyebrow}
          </span>
        )}
        <h2 className="mb-3 text-navy">{title}</h2>
        {subtitle && <p className="text-cgray">{subtitle}</p>}
      </div>

      <div className="relative grid grid-cols-1 gap-8 md:grid-cols-4 md:gap-6">
        {/* Desktop connector */}
        <div className="absolute left-0 right-0 top-5 hidden border-t border-dashed border-navy/15 md:block" />

        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div key={step.number} className="relative flex flex-col gap-4">
              {/* Mobile connector */}
              {index < steps.length - 1 && (
                <div className="absolute left-5 top-12 h-full w-px border-l border-dashed border-navy/15 md:hidden" />
              )}

              <div className="relative z-10 flex items-center gap-4 md:flex-col md:items-start">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy text-xs font-bold text-white">
                  {String(step.number).padStart(2, "0")}
                </div>
                {Icon && (
                  <div className="flex h-7 w-7 items-center justify-center bg-offwhite md:mt-3">
                    <Icon className="h-3.5 w-3.5 text-cgray" strokeWidth={1.5} />
                  </div>
                )}
              </div>

              <div className="md:mt-4">
                <h3 className="mb-1.5 text-sm font-bold text-navy">{step.title}</h3>
                <p className="text-sm leading-relaxed text-cgray">{step.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </SectionContainer>
  );
}
