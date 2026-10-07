import Link from "next/link";
import type { LPComparison } from "@/lib/lp-types";

/** A readable HTML comparison, with row/column headers and keyboard scrolling. */
export default function ComparisonSection({ comparison }: { comparison: LPComparison }) {
  return (
    <section className="w-full bg-offwhite">
      <div className="section-inner">
        <div className="mb-8 max-w-3xl">
          <span className="eyebrow">Entscheidungshilfe</span>
          <h2 className="mt-2 text-[clamp(1.75rem,2.8vw,2.6rem)] font-light leading-tight tracking-tight text-navy">
            {comparison.title}
          </h2>
          {comparison.intro && <p className="mt-4 leading-relaxed text-cgray">{comparison.intro}</p>}
        </div>
        <p className="mb-3 text-sm text-cgray md:hidden">Die Tabelle lässt sich seitlich verschieben.</p>
        <div role="region" aria-label={comparison.title} tabIndex={0}
          className="overflow-x-auto rounded-xl border border-navy/10 bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-magenta">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <caption className="sr-only">{comparison.title}</caption>
            <thead className="bg-navy text-white">
              <tr>
                <th scope="col" className="w-1/5 px-5 py-4 font-semibold">Kriterium</th>
                {comparison.columns.map((column) => <th key={column} scope="col" className="px-5 py-4 font-semibold">{column}</th>)}
              </tr>
            </thead>
            <tbody>
              {comparison.rows.map((row) => (
                <tr key={row.label} className="border-t border-navy/10 even:bg-offwhite/60">
                  <th scope="row" className="px-5 py-4 align-top font-semibold text-navy">{row.label}</th>
                  {row.values.map((value, i) => <td key={i} className="px-5 py-4 align-top leading-relaxed text-cgray">{value}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {comparison.note && <p className="mt-4 text-sm leading-relaxed text-cgray">{comparison.note}</p>}
        {comparison.links && <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
          {comparison.links.map((link) => <Link key={link.href} href={link.href} className="font-semibold text-magenta underline underline-offset-4">{link.label}</Link>)}
        </div>}
      </div>
    </section>
  );
}
