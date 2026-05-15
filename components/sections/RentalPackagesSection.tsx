import Link from "next/link";
import { Check } from "lucide-react";

type Package = {
  name: string;
  size: string;
  price: number;
  badge?: string;
  benefits: string[];
};

type RentalPackagesSectionProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  packages: Package[];
  ctaLabel?: string;
  ctaHref?: string;
  note?: string;
};

export default function RentalPackagesSection({
  eyebrow,
  title,
  subtitle,
  packages,
  ctaLabel = "Anfrage starten",
  ctaHref = "/kontakt",
  note,
}: RentalPackagesSectionProps) {
  return (
    <section id="pakete" className="w-full bg-offwhite">
      <div className="section-inner">

        {/* Header */}
        <div className="section-header">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h2 className="heading-max-2 mb-3 text-navy">{title}</h2>
          {subtitle && <p className="text-cgray">{subtitle}</p>}
        </div>

        {/* Package grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className="relative flex flex-col overflow-hidden rounded-[7px] border border-navy/10 bg-white"
            >
              {/* Magenta accent line top */}
              <div className="h-[3px] w-full bg-magenta" />

              <div className="flex flex-1 flex-col gap-5 p-6">

                {/* Badge + name */}
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-navy/40">
                      {pkg.name}
                    </p>
                    <p className="mt-1 text-[15px] font-medium text-navy">
                      {pkg.size}
                    </p>
                  </div>
                  {pkg.badge && (
                    <span className="shrink-0 rounded-full bg-magenta/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-magenta">
                      {pkg.badge}
                    </span>
                  )}
                </div>

                {/* Price */}
                <div className="border-t border-navy/8 pt-4">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-[28px] font-light tracking-tight text-navy">
                      CHF {pkg.price}
                    </span>
                    <span className="text-sm text-cgray">/ Monat</span>
                  </div>
                </div>

                {/* Benefits */}
                <ul className="flex flex-col gap-2">
                  {pkg.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2.5">
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-magenta"
                        strokeWidth={2}
                      />
                      <span className="text-sm text-cgray">{benefit}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA — pushed to bottom */}
                <div className="mt-auto pt-2">
                  <Link href={ctaHref} className="btn-secondary w-full justify-center">
                    {ctaLabel}
                  </Link>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p className="mt-8 text-center text-xs text-cgray">
          {note ?? "Alle Preise exkl. MwSt. · Mindestmietdauer auf Anfrage · Einmalige Setup-Gebühr möglich."}
        </p>

      </div>
    </section>
  );
}
