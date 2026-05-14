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
      <div className="mb-10 max-w-3xl">
        {eyebrow && (
          <span className="mb-2 block text-xs font-semibold uppercase tracking-widest text-gold">
            {eyebrow}
          </span>
        )}
        <h2 className="mb-3 text-navy">{title}</h2>
        {subtitle && <p className="text-cgray">{subtitle}</p>}
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {proofItems.map((item) => (
          <div
            key={item.title}
            className="flex h-full flex-col border border-navy/10 bg-white px-5 py-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-navy/25 hover:shadow-sm"
          >
            {item.metric && (
              <>
                <div className="mb-3 h-px w-6 bg-gold" />
                <p className="mb-3 text-[22px] font-light tracking-tight text-gold md:text-[26px]">
                  {item.metric}
                </p>
              </>
            )}
            <p className="mb-2 text-[17px] font-semibold text-navy md:text-[19px]">{item.title}</p>
            <p className="text-[15px] leading-relaxed text-cgray md:text-[16px]">{item.description}</p>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
