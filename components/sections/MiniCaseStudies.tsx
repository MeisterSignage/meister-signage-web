"use client";

import { UtensilsCrossed, Hotel, Building2, CalendarRange } from "lucide-react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { staggerContainer, staggerItem, cardHover, viewport, easeOut } from "@/lib/motion";

type CaseStudy = {
  icon: React.ElementType;
  category: string;
  title: string;
  description: string;
  result: string;
  href: string;
  gradient: string;
  iconBg: string;
};

const cases: CaseStudy[] = [
  {
    icon: UtensilsCrossed,
    category: "Gastronomie",
    title: "Menüboard statt Kreidetafel",
    description: "Ein Restaurant wechselt das Tagesmenü täglich. Mit einem digitalen Menüboard ist die Änderung in zwei Minuten erledigt – ohne Ausdrucken, ohne Laminieren.",
    result: "Weniger Druckkosten. Mehr Flexibilität.",
    href: "/gastronomie",
    gradient: "linear-gradient(135deg, #fdf2e3 0%, #fce4c0 100%)",
    iconBg: "rgba(201,168,76,0.15)",
  },
  {
    icon: Hotel,
    category: "Hotellerie",
    title: "Empfang ohne Papierchaos",
    description: "Ein Hotel informiert Gäste über Frühstückszeiten, Ausflugstipps und Events – auf einem Display in der Lobby. Das Empfangspersonal wird entlastet.",
    result: "Weniger Nachfragen. Besseres Gasterlebnis.",
    href: "/hotellerie",
    gradient: "linear-gradient(135deg, #eef2ff 0%, #dde5ff 100%)",
    iconBg: "rgba(99,102,241,0.12)",
  },
  {
    icon: Building2,
    category: "Unternehmen",
    title: "Empfangsdisplay als Visitenkarte",
    description: "Ein Unternehmensempfang empfängt Besucher mit Namen und Wegweisung auf einem Display. Der erste Eindruck sitzt – ohne Aufwand für das Empfangspersonal.",
    result: "Professioneller Auftritt. Sofort.",
    href: "/unternehmen",
    gradient: "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)",
    iconBg: "rgba(34,197,94,0.12)",
  },
  {
    icon: CalendarRange,
    category: "Events",
    title: "Eventprogramm in Echtzeit",
    description: "Eine Tagung zeigt Zeitplan, Raumbelegung und Sponsoren auf Displays. Änderungen am Programm erscheinen sofort – kein Neudruck, keine Verwirrung.",
    result: "Reibungsloser Ablauf. Professionelles Bild.",
    href: "/events",
    gradient: "linear-gradient(135deg, #fdf2f8 0%, #fce7f3 100%)",
    iconBg: "rgba(254,1,154,0.10)",
  },
];

export default function MiniCaseStudies() {
  const reduced = useReducedMotion();

  return (
    <section className="w-full bg-offwhite">
      <div className="section-inner">

        {/* Header */}
        <motion.div
          className="section-header"
          initial={reduced ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.52, ease: easeOut }}
        >
          <span className="eyebrow">Anwendungen</span>
          <h2 className="heading-max-2 text-navy">
            Digital Signage in der Praxis
          </h2>
          <p className="mt-3 max-w-xl text-cgray">
            Typische Einsatzszenarien – wie Betriebe aus verschiedenen Branchen digitale Displays in ihrem Alltag nutzen.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2"
          variants={staggerContainer}
          initial={reduced ? false : "hidden"}
          whileInView="visible"
          viewport={viewport}
        >
          {cases.map((c) => (
            <motion.div key={c.category} variants={staggerItem}>
              <Link href={c.href} className="group block h-full">
                <motion.div
                  className="h-full overflow-hidden rounded-[16px] bg-white"
                  whileHover={reduced ? undefined : cardHover}
                  style={{
                    boxShadow: "0 2px 16px rgba(26,39,68,0.06), 0 0 0 1px rgba(26,39,68,0.07)",
                  }}
                >
                  {/* Coloured header */}
                  <div
                    className="flex h-[100px] items-center justify-start px-7"
                    style={{ background: c.gradient }}
                  >
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-2xl"
                      style={{ background: c.iconBg }}
                    >
                      <c.icon className="h-6 w-6 text-navy/70" strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-7">
                    <span className="mb-2 inline-block text-[11px] font-bold uppercase tracking-widest text-cgray">
                      {c.category}
                    </span>
                    <p className="mb-3 text-[18px] font-bold leading-snug text-navy">
                      {c.title}
                    </p>
                    <p className="mb-5 text-[14px] leading-relaxed text-cgray">
                      {c.description}
                    </p>
                    {/* Result pill */}
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-navy/5 px-3.5 py-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                      <span className="text-[12px] font-semibold text-navy/70">
                        {c.result}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
