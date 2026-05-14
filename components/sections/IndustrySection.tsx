import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import SectionContainer from "@/components/ui/SectionContainer";

type Industry = {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
};

type IndustrySectionProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  industries: Industry[];
};

export default function IndustrySection({
  eyebrow,
  title,
  subtitle,
  industries,
}: IndustrySectionProps) {
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

      {/* Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {industries.map((industry) => {
          const Icon = industry.icon;
          return (
            <Link
              key={industry.href}
              href={industry.href}
              className="group flex flex-col justify-between rounded-xl border border-neutral-200 bg-white px-6 py-7 shadow-sm hover:border-neutral-300 hover:shadow-md"
            >
              <div>
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-neutral-100 group-hover:bg-neutral-200">
                  <Icon className="h-5 w-5 text-neutral-700" strokeWidth={1.5} />
                </div>
                <h3 className="mb-2 text-base font-semibold text-neutral-900">
                  {industry.title}
                </h3>
                <p className="text-sm leading-relaxed text-neutral-500">
                  {industry.description}
                </p>
              </div>
              <div className="mt-6 flex items-center gap-1.5 text-sm font-semibold text-neutral-700 group-hover:text-neutral-900">
                Mehr erfahren
                <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </div>
            </Link>
          );
        })}
      </div>
    </SectionContainer>
  );
}
