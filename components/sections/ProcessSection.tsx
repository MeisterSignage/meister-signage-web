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
          <span className="mb-3 block text-xs font-semibold uppercase tracking-widest text-gold">
            {eyebrow}
          </span>
        )}
        <h2 className="mb-3 text-navy">{title}</h2>
        {subtitle && <p className="text-cgray">{subtitle}</p>}
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
        {steps.map((step) => (
          <div
            key={step.number}
            className="flex flex-col gap-5 border border-navy/10 bg-white p-7 transition-colors duration-150 hover:border-navy/20"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-gold text-sm font-bold text-gold">
              {String(step.number).padStart(2, "0")}
            </div>
            <div>
              <h3 className="mb-2 text-navy">{step.title}</h3>
              <p className="leading-relaxed text-cgray">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
