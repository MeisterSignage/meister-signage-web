import SectionContainer from "@/components/ui/SectionContainer";

type ProofItem = {
  title: string;
  description: string;
  metric?: string;
};

type ProofSectionProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  proofItems: ProofItem[];
};

export default function ProofSection({
  eyebrow,
  title,
  subtitle,
  proofItems,
}: ProofSectionProps) {
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

      {/* Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {proofItems.map((item) => (
          <div
            key={item.title}
            className="flex flex-col justify-between rounded-xl border border-neutral-200 bg-white px-6 py-7 shadow-sm"
          >
            {item.metric && (
              <p className="mb-4 text-4xl font-bold tracking-tight text-neutral-900">
                {item.metric}
              </p>
            )}
            <div>
              <h3 className="mb-2 text-base font-semibold text-neutral-900">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-neutral-500">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
