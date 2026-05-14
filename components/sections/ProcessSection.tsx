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
      <div className="mb-10 max-w-3xl">
        {eyebrow && (
          <span className="mb-2 block text-xs font-semibold uppercase tracking-widest text-gold">
            {eyebrow}
          </span>
        )}
        <h2 className="mb-3 text-navy">{title}</h2>
        {subtitle && <p className="text-cgray">{subtitle}</p>}
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
        {steps.map((step) => (
          <div
            key={step.number}
            className="flex flex-col gap-4 border border-navy/10 bg-white p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-navy/25 hover:shadow-sm"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-gold text-sm font-bold text-gold">
              {String(step.number).padStart(2, "0")}
            </div>
            <div>
              <p className="mb-2 text-[17px] font-semibold leading-snug text-navy md:text-[19px]">
                {step.title}
              </p>
              <p className="text-[14px] leading-relaxed text-cgray md:text-[15px]">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
