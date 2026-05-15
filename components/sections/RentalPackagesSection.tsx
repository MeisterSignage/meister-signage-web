import Link from "next/link";
import { Check } from "lucide-react";

type Package = {
  name: string;
  size: string;
  price: number;
  badge?: string;
  featured?: boolean;
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

        {/* Header — centred for pricing-page feel */}
        <div className="mx-auto mb-10 max-w-2xl text-center">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h2 className="heading-max-2 mb-3 text-navy">{title}</h2>
          {subtitle && <p className="text-cgray">{subtitle}</p>}
        </div>

        {/* Card grid: 1 → 2 → 3 → 5 columns */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`flex flex-col rounded-[7px] bg-white transition-shadow duration-200 hover:shadow-[0_4px_20px_rgba(26,39,68,0.06)] ${
                pkg.featured
                  ? "border border-magenta"
                  : "border border-navy/10"
              }`}
            >
              <div className="flex h-full flex-col p-6">

                {/* Badge row — fixed height so all cards align */}
                <div className="mb-4 flex h-5 items-center">
                  {pkg.badge && (
                    <span className="rounded-full bg-gold/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-gold">
                      {pkg.badge}
                    </span>
                  )}
                </div>

                {/* Package name + screen size */}
                <p className="text-[11px] font-semibold uppercase tracking-widest text-navy/35">
                  {pkg.name}
                </p>
                <p className="mt-1.5 text-[13px] font-medium leading-snug text-navy/60">
                  {pkg.size}
                </p>

                {/* Price */}
                <div className="mt-5 border-t border-navy/8 pt-4">
                  <div className="flex items-baseline gap-1">
                    <span className="text-[11px] font-medium text-cgray">CHF</span>
                    <span className="text-[32px] font-light leading-none tracking-tight text-magenta">
                      {pkg.price}
                    </span>
                    <span className="text-[11px] text-cgray">/ Mt.</span>
                  </div>
                </div>

                {/* Benefits */}
                <ul className="mt-5 flex flex-1 flex-col gap-2.5">
                  {pkg.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2">
                      <Check
                        className="mt-0.5 h-3.5 w-3.5 shrink-0 text-magenta"
                        strokeWidth={2.5}
                      />
                      <span className="text-[13px] leading-snug text-cgray">{benefit}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA — always pinned to bottom */}
                <div className="mt-6">
                  <Link
                    href={ctaHref}
                    className={`${pkg.featured ? "btn-primary" : "btn-secondary"} w-full justify-center`}
                  >
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
