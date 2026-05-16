import type { LandingPage } from "@/lib/lp-types";

const page: LandingPage = {
  slug: "events",
  type: "branchen",
  seoTitle: "Digital Signage für Events & Messen Schweiz – Meister Signage",
  seoDescription: "Digitale Displays für Events, Messen und Tagungen in der Schweiz. Zeitpläne, Wegweisung und Sponsorenpräsenz – professionell und flexibel.",
  eyebrow: "Branche · Events & Messen",
  h1: "Digital Signage für Events und Messen",
  intro: "Events, Tagungen und Messen brauchen klare Kommunikation – in Echtzeit. Digitale Displays zeigen Zeitpläne, Raumbelegungen, Wegweisung und Sponsorenauftritte sofort und überzeugend. Meister Signage plant und realisiert schlüsselfertige Event-Signage-Lösungen für Anlässe jeder Grösse.",
  benefits: [
    {
      title: "Zeitpläne in Echtzeit",
      description: "Agenden, Referentenlisten und Ablaufpläne lassen sich auch kurzfristig anpassen – sofort auf allen Displays sichtbar.",
    },
    {
      title: "Professionelle Wegweisung",
      description: "Besucher finden sich besser zurecht mit digitaler Raum- und Standortnavigation – kein Papierchaos, keine veralteten Schilder.",
    },
    {
      title: "Sponsoren wirkungsvoll präsentieren",
      description: "Logos, Partner und Sponsoren lassen sich prominent einbinden – flexibel und ohne Druckkosten bei Änderungen.",
    },
    {
      title: "Kein Neudruck bei Änderungen",
      description: "Ausgefallene Referenten, Raumwechsel oder Zeitverschiebungen – Anpassungen erscheinen sofort auf allen Screens.",
    },
    {
      title: "Mieten oder kaufen",
      description: "Für Einmalanlässe ist die Miete ideal. Für regelmässige Events lohnt sich der Kauf. Wir beraten Sie, was sinnvoll ist.",
    },
    {
      title: "Vollservice inklusive",
      description: "Lieferung, Aufbau, Inhaltsvorbereitung und Abbau – wir kümmern uns um alles, damit der Event reibungslos läuft.",
    },
  ],
  faq: [
    {
      question: "Wie früh muss ich Event-Displays reservieren?",
      answer: "Idealerweise 2–4 Wochen im Voraus. In dringenden Fällen versuchen wir kurzfristig zu helfen – nehmen Sie einfach Kontakt auf.",
    },
    {
      question: "Können Inhalte während des Events geändert werden?",
      answer: "Ja. Mit entsprechender Vorbereitung lassen sich Inhalte auch live anpassen – zum Beispiel bei Zeitplanverschiebungen.",
    },
    {
      question: "Welche Displaygrössen sind verfügbar?",
      answer: "Wir arbeiten je nach Anforderung mit verschiedenen Grössen. Kontaktieren Sie uns mit Ihren Angaben – wir finden die passende Lösung.",
    },
    {
      question: "Was kostet Event-Signage?",
      answer: "Die Kosten hängen von Anzahl Displays, Grösse, Dauer und Leistungsumfang ab. Wir erstellen gerne ein individuelles Angebot.",
    },
    {
      question: "Kann ich Displays auch für kleinere Anlässe mieten?",
      answer: "Ja. Ob Firmenanlass, Vereinsveranstaltung oder Tagung – wir passen die Lösung an Ihren Bedarf und Ihr Budget an.",
    },
  ],
  internalLinks: [
    { label: "Displays mieten",             href: "/digital-signage-mieten" },
    { label: "Event-Displays",              href: "/loesungen/event-displays" },
    { label: "Digital Signage Schweiz",     href: "/digital-signage-schweiz" },
    { label: "Kosten & Preise",             href: "/was-kostet-digital-signage-schweiz" },
  ],
  cta: {
    eyebrow: "Event-Signage anfragen",
    title: "Ihr nächster Event – professionell kommuniziert.",
    subtitle: "Schildern Sie uns kurz Ihren Anlass und Ihre Anforderungen. Wir antworten innert 24h mit einer konkreten Einschätzung.",
    primaryLabel: "Beratung anfragen",
    primaryHref: "/kontakt",
    secondaryLabel: "Displays mieten",
    secondaryHref: "/digital-signage-mieten",
  },
  related: {
    loesungen: [
      { label: "Event-Displays",       href: "/loesungen/event-displays" },
      { label: "Indoor Signage",       href: "/loesungen/indoor-signage" },
    ],
    branchen: [
      { label: "Hotellerie",           href: "/branchen/hotellerie" },
      { label: "Unternehmen",          href: "/branchen/unternehmen" },
    ],
    staedte: [
      { label: "Digital Signage Zürich", href: "/staedte/zuerich" },
      { label: "Digital Signage Luzern", href: "/staedte/luzern" },
    ],
  },
};

export default page;
