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
    <SectionContainer white>
      <div className="mb-10 max-w-prose">
        {eyebrow && (
          <span className="mb-3 block text-xs font-semibold uppercase tracking-widest text-gold">
            {eyebrow}
          </span>
        )}
        <h2 className="mb-3 text-navy">{title}</h2>
        {subtitle && <p className="text-cgray">{subtitle}</p>}
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {proofItems.map((item) => (
          <div key={item.title} className="border border-navy/10 bg-offwhite px-5 py-6">
            {item.metric && (
              <>
                <div className="mb-3 h-px w-6 bg-gold" />
                <p className="mb-3 text-2xl font-light tracking-tight text-gold">{item.metric}</p>
              </>
            )}
            <p className="mb-1.5 text-sm font-bold text-navy">{item.title}</p>
            <p className="text-sm leading-relaxed text-cgray">{item.description}</p>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
