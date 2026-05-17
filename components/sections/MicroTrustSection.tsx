import { Clock, MapPin, Zap, User } from "lucide-react";

const items = [
  { icon: Clock,  label: "Antwort innert 24h" },
  { icon: MapPin, label: "Schweizer Support" },
  { icon: Zap,    label: "Einfache Installation" },
  { icon: User,   label: "Persönliche Betreuung" },
];

export default function MicroTrustSection() {
  return (
    <section className="w-full border-y border-navy/8 bg-offwhite">
      <div className="mx-auto max-w-content px-6">
        <div className="grid grid-cols-2 items-center gap-x-6 gap-y-4 py-7 md:flex md:flex-wrap md:justify-between md:gap-x-10">
          {items.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy/6">
                <Icon className="h-3.5 w-3.5 text-navy/50" strokeWidth={1.75} />
              </div>
              <span className="text-[13px] font-semibold text-navy/60">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
