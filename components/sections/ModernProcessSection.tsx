type Step = {
  number: number;
  title: string;
  description: string;
  detail: string;
};

const steps: Step[] = [
  {
    number: 1,
    title: "Beratung",
    description: "Wir klären, was Sie brauchen",
    detail: "Kurzes Gespräch – persönlich, per Telefon oder Video. Wir verstehen Ihren Betrieb, Ihre Ziele und empfehlen die passende Lösung. Ohne Techniksprache.",
  },
  {
    number: 2,
    title: "Einrichtung",
    description: "Wir kümmern uns um alles",
    detail: "Hardware, Software, Inhalte, Installation. Sie müssen nichts koordinieren – wir liefern und übergeben eine fertig laufende Lösung.",
  },
  {
    number: 3,
    title: "Inhalte verwalten",
    description: "Sie behalten die Kontrolle",
    detail: "Nach der Übergabe aktualisieren Sie Inhalte selbst – einfach und schnell. Oder wir übernehmen die Pflege. Wir bleiben erreichbar.",
  },
];

export default function ModernProcessSection() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ background: "linear-gradient(160deg, #111d38 0%, #1a2744 60%, #0d1628 100%)" }}
    >
      {/* Ambient top glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2"
        aria-hidden="true"
        style={{
          background: "radial-gradient(ellipse, rgba(254,1,154,0.10) 0%, transparent 70%)",
        }}
      />

      <div className="section-inner relative">

        {/* Header */}
        <div className="mb-16 max-w-xl">
          <span className="eyebrow" style={{ color: "rgba(201,168,76,0.9)" }}>
            So läuft es ab
          </span>
          <h2 className="heading-max-2 mt-2 text-white">
            Von der Idee zur laufenden Lösung.
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-white/45">
            Drei Schritte – klar, unkompliziert und ohne IT-Aufwand auf Ihrer Seite.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">

              {/* Connector line (desktop) */}
              {i < steps.length - 1 && (
                <div
                  className="absolute left-full top-[52px] z-10 hidden h-px w-6 lg:block"
                  style={{ background: "rgba(254,1,154,0.25)" }}
                  aria-hidden="true"
                />
              )}

              {/* Card */}
              <div
                className="relative h-full overflow-hidden rounded-[16px] p-7"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                }}
              >
                {/* Ghost number */}
                <span
                  className="absolute right-5 top-3 select-none font-black leading-none text-white/[0.04]"
                  aria-hidden="true"
                  style={{ fontSize: "88px" }}
                >
                  {step.number}
                </span>

                {/* Step number pill */}
                <div
                  className="mb-6 flex h-11 w-11 items-center justify-center rounded-full text-[15px] font-black text-white"
                  style={{
                    background: "linear-gradient(135deg, #fe019a 0%, #c4006e 100%)",
                    boxShadow: "0 0 20px rgba(254,1,154,0.35)",
                  }}
                >
                  {step.number}
                </div>

                <p className="mb-1 text-[11px] font-semibold uppercase tracking-widest text-white/35">
                  {step.description}
                </p>
                <p className="mb-4 text-[22px] font-bold text-white">
                  {step.title}
                </p>
                <p className="text-[14px] leading-relaxed text-white/50">
                  {step.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
