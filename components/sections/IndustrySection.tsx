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
  // Bento layout activated when there are 5+ industries
  const isBento = industries.length >= 5;

  return (
    <SectionContainer white>
      <div className="section-header">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h2 className="heading-max-2 mb-3 text-navy">{title}</h2>
        {subtitle && <p className="text-cgray">{subtitle}</p>}
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {industries.map((industry, i) => {
          const Icon = industry.icon;
          // Bento roles — only active at lg+
          const isFeatured  = isBento && i === 0;
          const isLastWide  = isBento && i === industries.length - 1;

          return (
            <SpotlightCard
              key={industry.href}
              className={[
                "card group relative flex cursor-pointer flex-col",
                isFeatured ? "lg:row-span-2" : "",
                isLastWide ? "sm:col-span-2 lg:col-span-3" : "",
              ].join(" ")}
            >
              {/* Full-card accessible link */}
              <Link
                href={industry.href}
                className="absolute inset-0 z-[1]"
                aria-label={`${industry.title} – mehr erfahren`}
                tabIndex={0}
              />

              {isLastWide ? (
                /* ── Full-width wide card — horizontal layout ── */
                <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-start gap-5">
                    <IconBox icon={Icon} size="lg" />
                    <div>
                      <p className="card-title mb-1">{industry.title}</p>
                      <p className="card-body max-w-xl">{industry.description}</p>
                    </div>
                  </div>
                  <ArrowChip />
                </div>

              ) : isFeatured ? (
                /* ── Featured tall card — fills 2 rows ── */
                <div className="relative flex flex-1 flex-col justify-between gap-6">
                  <div>
                    <IconBox icon={Icon} size="lg" className="mb-6" />
                    <p className="mb-2 text-[1.1875rem] font-semibold leading-snug text-navy md:text-[1.25rem]">
                      {industry.title}
                    </p>
                    <p className="card-body">{industry.description}</p>
                  </div>
                  <ArrowChip />
                </div>

              ) : (
                /* ── Standard card ── */
                <div className="relative flex h-full flex-col justify-between gap-5">
                  <div>
                    <IconBox icon={Icon} size="sm" className="mb-4" />
                    <p className="card-title">{industry.title}</p>
                    <p className="card-body">{industry.description}</p>
                  </div>
                  <ArrowChip />
                </div>
              )}
            </SpotlightCard>
          );
        })}
      </div>
    </SectionContainer>
  );
}

/* ── Shared sub-components ── */

function IconBox({
  icon: Icon,
  size,
  className = "",
}: {
  icon: LucideIcon;
  size: "sm" | "lg";
  className?: string;
}) {
  const dim = size === "lg" ? "h-12 w-12" : "h-10 w-10";
  const ico = size === "lg" ? "h-5 w-5" : "h-4 w-4";
  return (
    <div
      className={`flex ${dim} shrink-0 items-center justify-center border border-navy/8 bg-offwhite transition-colors duration-200 group-hover:border-magenta/20 group-hover:bg-magenta/[0.04] ${className}`}
    >
      <Icon
        className={`${ico} text-navy transition-colors duration-200 group-hover:text-magenta`}
        strokeWidth={1.5}
      />
    </div>
  );
}

function ArrowChip() {
  return (
    <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-navy/50 transition-colors duration-150 group-hover:text-magenta">
      Mehr erfahren
      <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
    </div>
  );
}
