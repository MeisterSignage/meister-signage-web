import SectionContainer from "@/components/ui/SectionContainer";

type Faq = { question: string; answer: string };

type FAQSectionProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  faqs: Faq[];
};

export default function FAQSection({ eyebrow, title, subtitle, faqs }: FAQSectionProps) {
  return (
    <SectionContainer>
      <div className="mx-auto max-w-3xl">
        <div className="mb-10">
          {eyebrow && (
            <span className="mb-3 block text-xs font-semibold uppercase tracking-widest text-gold">
              {eyebrow}
            </span>
          )}
          <h2 className="mb-3 text-navy">{title}</h2>
          {subtitle && <p className="text-cgray">{subtitle}</p>}
        </div>

        <dl className="divide-y divide-navy/10 border-t border-navy/10">
          {faqs.map((faq) => (
            <details key={faq.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6">
                <dt className="text-sm font-bold text-navy">{faq.question}</dt>
                <span className="mt-0.5 shrink-0 text-gold transition-transform duration-150 group-open:rotate-45">
                  <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
                  </svg>
                </span>
              </summary>
              <dd className="mt-3 text-sm leading-relaxed text-cgray">{faq.answer}</dd>
            </details>
          ))}
        </dl>
      </div>
    </SectionContainer>
  );
}
