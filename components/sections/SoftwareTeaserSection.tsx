import Link from "next/link";
import { ArrowRight, CalendarClock, MonitorSmartphone, Zap } from "lucide-react";

const cards = [
  {
    icon: CalendarClock,
    title: "Inhalte planen",
    desc: "Tagesmenü, Aktion oder Eventhinweis automatisch zur passenden Zeit ausspielen.",
  },
  {
    icon: MonitorSmartphone,
    title: "Displays steuern",
    desc: "Alle Bildschirme an einem Ort verwalten — ein Standort oder ein ganzes Filialnetz.",
  },
  {
    icon: Zap,
    title: "Sofort veröffentlichen",
    desc: "Änderung gespeichert, Display zeigt sie an. Ohne Wartezeit, ohne Druckerei.",
  },
];

export default function SoftwareTeaserSection() {
  return (
    <section className="w-full bg-white">
      <div className="section-inner">

        <div className="mx-auto mb-12 max-w-xl text-center">
          <span className="eyebrow">Meister Signage Software</span>
          <h2
            className="mt-2 font-light text-navy"
            style={{
              fontSize: "clamp(1.75rem, 2.8vw, 2.6rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.025em",
            }}
          >
            Alles zentral gesteuert.
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-cgray">
            Mit der Meister Signage Software verwalten Sie Inhalte, Zeitpläne und Displays
            einfach an einem Ort — flexibel, übersichtlich und ohne komplizierte IT.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {cards.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="flex flex-col gap-4 rounded-[18px] border border-navy/8 bg-offwhite p-7 transition-all duration-300 hover:border-navy/16 hover:shadow-[0_8px_32px_rgba(26,39,68,0.06)]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-magenta/10">
                <Icon className="h-5 w-5 text-magenta" strokeWidth={1.75} />
              </div>
              <h3 className="text-[17px] font-bold text-navy">{title}</h3>
              <p className="text-[14px] leading-relaxed text-cgray">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/loesungen/software/"
            className="inline-flex items-center gap-2 rounded-[7px] border border-navy/15 bg-white px-6 py-3 text-[14px] font-semibold text-navy transition-all duration-150 hover:border-magenta/40 hover:text-magenta"
          >
            Software entdecken
            <ArrowRight className="h-3.5 w-3.5 shrink-0" strokeWidth={2} />
          </Link>
        </div>

      </div>
    </section>
  );
}
