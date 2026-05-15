import SectionContainer from "@/components/ui/SectionContainer";

type QuickFact = {
  metric: string;
  label: string;
  description: string;
};

type PricingQuickAnswerSectionProps = {
  title: string;
  text: string;
  facts: QuickFact[];
};

export default function PricingQuickAnswerSection({
  title,
  text,
  facts,
}: PricingQuickAnswerSectionProps) {
  return (
    <SectionContainer white>
      <div className="section-header">
        <h2 className="heading-max-2 mb-3 text-navy">{title}</h2>
        <p className="text-cgray">{text}</p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {facts.map((fact) => (
          <div
            key={fact.label}
            className="card relative flex flex-col gap-3 overflow-hidden pt-7"
          >
            {/* Gold accent line */}
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gold" />

            <p className="text-[28px] font-light tracking-tight text-navy">
              {fact.metric}
            </p>
            <div>
              <p className="text-sm font-semibold text-navy">{fact.label}</p>
              <p className="card-body mt-0.5">{fact.description}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
