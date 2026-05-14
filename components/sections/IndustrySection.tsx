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
    <SectionContainer white>
      <div className="mb-10 max-w-3xl">
        {eyebrow && (
          <span className="mb-2 block text-xs font-semibold uppercase tracking-widest text-gold">
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
              className="group relative flex h-full flex-col justify-between overflow-hidden border border-navy/10 bg-white px-5 py-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-navy/25 hover:shadow-sm"
            >
              <div className="absolute inset-y-0 left-0 w-[3px] bg-magenta" />
              <div>
                <div className="mb-4 flex h-10 w-10 items-center justify-center bg-offwhite">
                  <Icon className="h-5 w-5 text-navy" strokeWidth={1.5} />
                </div>
                <h3 className="mb-2 text-[19px] font-semibold leading-snug text-navy md:text-[22px]">
                  {industry.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-cgray md:text-[16px]">
                  {industry.description}
                </p>
              </div>
              <div className="mt-5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-navy/60 transition-colors duration-150 group-hover:text-magenta">
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
