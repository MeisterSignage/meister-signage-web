import { Check } from "lucide-react";
import SectionContainer from "@/components/ui/SectionContainer";

type BuyVsRentSectionProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  buyLabel: string;
  rentLabel: string;
  buyReasons: string[];
  rentReasons: string[];
};

export default function BuyVsRentSection({
  eyebrow,
  title,
  subtitle,
  buyLabel,
  rentLabel,
  buyReasons,
  rentReasons,
}: BuyVsRentSectionProps) {
  return (
    <SectionContainer white>
      <div className="section-header">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h2 className="heading-max-2 mb-3 text-navy">{title}</h2>
        {subtitle && <p className="text-cgray">{subtitle}</p>}
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {/* Kaufen */}
        <div className="card relative flex flex-col gap-5 overflow-hidden pt-7">
          <div className="absolute inset-x-0 top-0 h-[2px] bg-navy/30" />
          <p className="text-sm font-semibold uppercase tracking-widest text-navy/50">
            {buyLabel}
          </p>
          <ul className="flex flex-col gap-3">
            {buyReasons.map((reason) => (
              <li key={reason} className="flex items-start gap-3">
                <Check
                  className="mt-0.5 h-4 w-4 shrink-0 text-navy/50"
                  strokeWidth={2}
                />
                <span className="text-sm text-cgray">{reason}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Mieten */}
        <div className="card relative flex flex-col gap-5 overflow-hidden pt-7">
          <div className="absolute inset-x-0 top-0 h-[2px] bg-magenta" />
          <p className="text-sm font-semibold uppercase tracking-widest text-magenta/70">
            {rentLabel}
          </p>
          <ul className="flex flex-col gap-3">
            {rentReasons.map((reason) => (
              <li key={reason} className="flex items-start gap-3">
                <Check
                  className="mt-0.5 h-4 w-4 shrink-0 text-magenta"
                  strokeWidth={2}
                />
                <span className="text-sm text-cgray">{reason}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionContainer>
  );
}
