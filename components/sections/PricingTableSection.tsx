import SectionContainer from "@/components/ui/SectionContainer";

type PricingRow = {
  model: string;
  size: string;
  price: string;
  suitedFor: string;
};

type PricingTableSectionProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  rows: PricingRow[];
  note?: string;
};

export default function PricingTableSection({
  eyebrow,
  title,
  subtitle,
  rows,
  note,
}: PricingTableSectionProps) {
  return (
    <SectionContainer>
      <div className="section-header">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h2 className="heading-max-2 mb-3 text-navy">{title}</h2>
        {subtitle && <p className="text-cgray">{subtitle}</p>}
      </div>

      {/* ── Desktop table (md+) ─────────────────────────────────────────── */}
      <div className="hidden overflow-hidden rounded-[7px] border border-navy/10 md:block">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-navy text-white">
              <th className="px-5 py-3.5 text-left text-xs font-semibold uppercase tracking-widest text-white/70">
                Modell
              </th>
              <th className="px-5 py-3.5 text-left text-xs font-semibold uppercase tracking-widest text-white/70">
                Grösse
              </th>
              <th className="px-5 py-3.5 text-left text-xs font-semibold uppercase tracking-widest text-white/70">
                Kaufpreis
              </th>
              <th className="px-5 py-3.5 text-left text-xs font-semibold uppercase tracking-widest text-white/70">
                Geeignet für
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={row.model}
                className={`border-t border-navy/8 ${
                  i % 2 === 0 ? "bg-white" : "bg-offwhite/60"
                }`}
              >
                <td className="px-5 py-4 font-semibold text-navy">{row.model}</td>
                <td className="px-5 py-4 text-cgray">{row.size}</td>
                <td className="px-5 py-4">
                  <span className="font-semibold text-navy">{row.price}</span>
                </td>
                <td className="px-5 py-4 text-cgray">{row.suitedFor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ── Mobile cards (< md) ─────────────────────────────────────────── */}
      <div className="flex flex-col gap-4 md:hidden">
        {rows.map((row) => (
          <div
            key={row.model}
            className="relative overflow-hidden rounded-[7px] border border-navy/10 bg-white p-5"
          >
            <div className="absolute inset-y-0 left-0 w-[3px] bg-magenta" />
            <div className="flex items-start justify-between gap-3">
              <p className="font-semibold text-navy">{row.model}</p>
              <p className="shrink-0 font-semibold text-navy">{row.price}</p>
            </div>
            <p className="mt-1 text-sm text-cgray">{row.size}</p>
            <p className="mt-2 text-sm text-cgray">{row.suitedFor}</p>
          </div>
        ))}
      </div>

      {note && (
        <p className="mt-6 text-xs text-cgray">{note}</p>
      )}
    </SectionContainer>
  );
}
