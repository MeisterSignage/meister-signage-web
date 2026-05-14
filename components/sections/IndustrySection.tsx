import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import SectionContainer from "@/components/ui/SectionContainer";

type Industry = { icon: LucideIcon; title: string; description: string; href: string };

type IndustrySectionProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  industries: Industry[];
};

export default function IndustrySection({ eyebrow, title, subtitle, industries }: IndustrySectionProps) {
  return (
    <SectionContainer>
      <div className="mb-10 max-w-prose">
        {eyebrow && (
          <span className="mb-3 block text-xs font-semibold uppercase tracking-widest text-cgray">
            {eyebrow}
          </span>
        )}
        <h2 className="mb-3 text-navy">{title}</h2>
        {subtitle && <p className="text-cgray">{subtitle}</p>}
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {industries.map((industry) => {
          const Icon = industry.icon;
          return (
            <Link
              key={industry.href}
              href={industry.href}
              className="group flex flex-col justify-between border border-navy/10 bg-white px-5 py-6 hover:border-navy/25"
            >
              <div>
                <div className="mb-4 flex h-9 w-9 items-center justify-center bg-offwhite">
                  <Icon className="h-4 w-4 text-navy" strokeWidth={1.5} />
                </div>
                <h3 className="mb-1.5 text-sm font-bold text-navy">{industry.title}</h3>
                <p className="text-sm leading-relaxed text-cgray">{industry.description}</p>
              </div>
              <div className="mt-5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-navy group-hover:text-magenta">
                Mehr erfahren
                <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
              </div>
            </Link>
          );
        })}
      </div>
    </SectionContainer>
  );
}
