import SectionContainer from "@/components/ui/SectionContainer";

type ProofItem = { title: string; description: string; metric?: string };

type ProofSectionProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  proofItems: ProofItem[];
};

export default function ProofSection({ eyebrow, title, subtitle, proofItems }: ProofSectionProps) {
  return (
    <SectionContainer>
      <div className="section-header">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h2 className="heading-max-2 mb-3 text-navy">{title}</h2>
        {subtitle && <p className="text-cgray">{subtitle}</p>}
      </div>

      <div className="card-grid card-grid-4">
        {proofItems.map((item) => (
          <div key={item.title} className="card card-hover flex h-full flex-col">
            {item.metric && (
              <>
                <div className="mb-3 h-px w-6 bg-gold" />
                <p className="mb-3 text-[22px] font-light tracking-tight text-gold md:text-[26px]">
                  {item.metric}
                </p>
              </>
            )}
            <p className="card-title">{item.title}</p>
            <p className="card-body">{item.description}</p>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
