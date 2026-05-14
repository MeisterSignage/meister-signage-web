import SectionContainer from "@/components/ui/SectionContainer";

type Faq = {
  question: string;
  answer: string;
};

type FAQSectionProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  faqs: Faq[];
};

export default function FAQSection({
  eyebrow,
  title,
  subtitle,
  faqs,
}: FAQSectionProps) {
  return (
    <SectionContainer>
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="mb-12">
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

        {/* FAQ list */}
        <dl className="divide-y divide-neutral-200 border-t border-neutral-200">
          {faqs.map((faq) => (
            <details key={faq.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6">
                <dt className="text-base font-semibold text-neutral-900">
                  {faq.question}
                </dt>
                <span className="mt-0.5 shrink-0 text-neutral-400 group-open:rotate-45">
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
                  </svg>
                </span>
              </summary>
              <dd className="mt-4 text-sm leading-relaxed text-neutral-500">
                {faq.answer}
              </dd>
            </details>
          ))}
        </dl>
      </div>
    </SectionContainer>
  );
}
