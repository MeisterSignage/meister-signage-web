import SectionContainer from "@/components/ui/SectionContainer";

type Item = {
  title: string;
  description: string;
};

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
    <SectionContainer>
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

      {/* Columns */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Problems */}
        <div className="flex flex-col gap-4">
          <div className="mb-2 flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-neutral-300" />
            <span className="text-sm font-semibold uppercase tracking-wider text-neutral-400">
              {problemsLabel}
            </span>
          </div>
          {problems.map((item) => (
            <div
              key={item.title}
              className="rounded-lg border border-neutral-200 bg-neutral-50 px-5 py-4"
            >
              <div className="mb-1 flex items-start gap-3">
                <XIcon />
                <p className="font-semibold text-neutral-600">{item.title}</p>
              </div>
              <p className="pl-8 text-sm leading-relaxed text-neutral-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Solutions */}
        <div className="flex flex-col gap-4">
          <div className="mb-2 flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-yellow-500" />
            <span className="text-sm font-semibold uppercase tracking-wider text-yellow-700">
              {solutionsLabel}
            </span>
          </div>
          {solutions.map((item) => (
            <div
              key={item.title}
              className="rounded-lg border border-yellow-200 bg-yellow-50 px-5 py-4"
            >
              <div className="mb-1 flex items-start gap-3">
                <CheckIcon />
                <p className="font-semibold text-neutral-800">{item.title}</p>
              </div>
              <p className="pl-8 text-sm leading-relaxed text-neutral-500">
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
    <svg
      className="mt-0.5 h-5 w-5 shrink-0 text-neutral-400"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      className="mt-0.5 h-5 w-5 shrink-0 text-yellow-600"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
