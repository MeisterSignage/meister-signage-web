import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import SectionContainer from "@/components/ui/SectionContainer";
import SpotlightCard from "@/components/ui/SpotlightCard";

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
      <div className="section-header">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h2 className="heading-max-2 mb-3 text-navy">{title}</h2>
        {subtitle && <p className="text-cgray">{subtitle}</p>}
      </div>

      <div className="card-grid card-grid-3">
        {industries.map((industry) => {
          const Icon = industry.icon;
          return (
            <SpotlightCard
              key={industry.href}
              className="card group flex h-full cursor-pointer flex-col justify-between"
            >
              {/* Full-card accessible link — invisible, covers the whole card */}
              <Link
                href={industry.href}
                className="absolute inset-0 z-[1]"
                aria-label={`${industry.title} – mehr erfahren`}
                tabIndex={0}
              />

              {/* Magenta left accent */}
              <div className="absolute inset-y-0 left-0 w-[3px] bg-magenta" />

              {/* Card content — sits above the link overlay */}
              <div className="relative">
                <div className="mb-4 flex h-10 w-10 items-center justify-center bg-offwhite">
                  <Icon className="h-5 w-5 text-navy" strokeWidth={1.5} />
                </div>
                <p className="card-title">{industry.title}</p>
                <p className="card-body">{industry.description}</p>
              </div>

              <div className="relative mt-5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-navy/60 transition-colors duration-150 group-hover:text-magenta">
                Mehr erfahren
                <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
              </div>
            </SpotlightCard>
          );
        })}
      </div>
    </SectionContainer>
  );
}
