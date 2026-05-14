import SectionContainer from "@/components/ui/SectionContainer";

type Item = { title: string; description: string };

type ProblemSolutionSectionProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  problemsLabel?: string;
  solutionsLabel?: string;
  problems: Item[];
  solutions: Item[];
};

export default function ProblemSolutionSection({
  eyebrow,
  title,
  subtitle,
  problemsLabel = "Heute oft mühsam",
  solutionsLabel = "Mit Meister Signage einfacher",
  problems,
  solutions,
}: ProblemSolutionSectionProps) {
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

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Problems */}
        <div className="flex flex-col gap-3">
          <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-cgray">
            {problemsLabel}
          </p>
          {problems.map((item) => (
            <div
              key={item.title}
              className="border-l-2 border-navy/20 bg-offwhite px-4 py-4"
            >
              <div className="mb-1 flex items-start gap-2.5">
                <XIcon />
                <p className="text-sm font-bold text-navy">{item.title}</p>
              </div>
              <p className="pl-6 text-sm leading-relaxed text-cgray">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Solutions */}
        <div className="flex flex-col gap-3">
          <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-gold">
            {solutionsLabel}
          </p>
          {solutions.map((item) => (
            <div
              key={item.title}
              className="border-l-2 border-gold bg-offwhite px-4 py-4"
            >
              <div className="mb-1 flex items-start gap-2.5">
                <CheckIcon />
                <p className="text-sm font-bold text-navy">{item.title}</p>
              </div>
              <p className="pl-6 text-sm leading-relaxed text-cgray">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}

function XIcon() {
  return (
    <svg className="mt-0.5 h-4 w-4 shrink-0 text-cgray" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="mt-0.5 h-4 w-4 shrink-0 text-gold" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
    </svg>
  );
}
