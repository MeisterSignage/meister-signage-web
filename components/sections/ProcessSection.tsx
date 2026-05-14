import SectionContainer from "@/components/ui/SectionContainer";

type Step = { number: number; title: string; description: string };

type ProcessSectionProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  steps: Step[];
};

export default function ProcessSection({ eyebrow, title, subtitle, steps }: ProcessSectionProps) {
  return (
    <SectionContainer white>
      <div className="section-header">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h2 className="heading-max-2 mb-3 text-navy">{title}</h2>
        {subtitle && <p className="text-cgray">{subtitle}</p>}
      </div>

      <div className="card-grid card-grid-4">
        {steps.map((step) => (
          <div key={step.number} className="card card-hover flex flex-col gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-gold text-sm font-bold text-gold">
              {String(step.number).padStart(2, "0")}
            </div>
            <div>
              <p className="card-title">{step.title}</p>
              <p className="card-body">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
