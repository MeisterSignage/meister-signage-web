import type { LandingPage } from "@/lib/lp-types";

const page: LandingPage = {
  slug: "digitale-leitsysteme",
  type: "loesungen",
  seoTitle: "Digitale Leitsysteme | Meister Signage",
  seoDescription:
    "Digitale Leitsysteme für Besucherführung, Events, Hotels und Unternehmen. Informationen flexibel anzeigen und Wege klar kommunizieren.",
  eyebrow: "Lösung · Digitale Leitsysteme",
  h1: "Menschen einfach und digital zum Ziel führen.",
  intro:
    "Digitale Leitsysteme ersetzen gedruckte Beschilderung durch flexible, immer aktuelle Informationen. Räume, Veranstaltungen und Wege werden klar kommuniziert – an einem Standort oder über mehrere Bereiche verteilt.",
  benefits: [
    {
      title: "Besucherführung verbessern",
      description:
        "Klare Hinweise direkt am richtigen Ort – Besucher orientieren sich schneller, ohne nachfragen zu müssen.",
    },
    {
      title: "Raum- und Eventinformationen anzeigen",
      description:
        "Tagungen, Schulungen, Ausstellungen oder Termine werden tagesaktuell und automatisch auf den passenden Displays angezeigt.",
    },
    {
      title: "Flexibel aktualisieren",
      description:
        "Änderungen werden zentral eingepflegt und sofort auf allen verknüpften Displays sichtbar – ohne Aushänge zu ersetzen.",
    },
    {
      title: "Mehrere Bereiche steuern",
      description:
        "Eingang, Etagen, Konferenzbereich – jedes Display zeigt genau das, was an seinem Standort relevant ist.",
    },
    {
      title: "Weniger gedruckte Beschilderung",
      description:
        "Schluss mit veralteten Schildern, ausgedruckten Etagenplänen und manueller Pflege. Digital ist immer aktuell.",
    },
    {
      title: "Professionelle Orientierung",
      description:
        "Klares Layout, lesbare Typografie und konsistentes Branding sorgen für eine durchdachte Besucherführung.",
    },
  ],
  faq: [
    {
      question: "Kann ein Leitsystem mehrere Räume oder Etagen abdecken?",
      answer:
        "Ja. Jedes Display zeigt die für seinen Standort relevanten Informationen – Eingang, Etagenanzeige oder Raumbeschriftung – zentral aus einem System gesteuert.",
    },
    {
      question: "Können Eventinformationen automatisch angezeigt werden?",
      answer:
        "Ja. Tagungs- und Veranstaltungsdaten lassen sich aus Ihrem Belegungsplan oder Kalender übernehmen und automatisch zur passenden Zeit darstellen.",
    },
    {
      question: "Wie schnell sind Änderungen sichtbar?",
      answer:
        "Sofort. Inhalte werden zentral aktualisiert und in Sekunden auf allen verbundenen Displays angezeigt.",
    },
    {
      question: "Eignen sich digitale Leitsysteme auch für temporäre Einsätze?",
      answer:
        "Ja. Für Messen, Tagungen und Events bieten wir flexible Mietlösungen an – inkl. Aufbau, Inhaltsvorbereitung und Abbau.",
    },
    {
      question: "Wer pflegt die Inhalte?",
      answer:
        "Das definieren Sie. Pflege intern – wir schulen Ihr Team. Oder Pflege durch uns – wir übernehmen Aktualisierungen auf Wunsch.",
    },
  ],
  internalLinks: [
    { label: "Events & Messen",         href: "/branchen/events" },
    { label: "Hotellerie",              href: "/branchen/hotellerie" },
    { label: "Unternehmen",             href: "/branchen/unternehmen" },
    { label: "Digitaler Empfang",       href: "/loesungen/digitaler-empfang" },
    { label: "Software",                href: "/loesungen/software" },
  ],
  cta: {
    eyebrow: "Leitsystem anfragen",
    title: "Klare Wege. Klare Informationen.",
    subtitle:
      "Beschreiben Sie kurz Ihren Standort und Ihre Bereiche – wir empfehlen das passende Leitsystem.",
    primaryLabel: "Beratung anfragen",
    primaryHref: "/kontakt",
    secondaryLabel: "Lösungen ansehen",
    secondaryHref: "/loesungen",
  },
  related: {
    branchen: [
      { label: "Events & Messen",  href: "/branchen/events" },
      { label: "Hotellerie",       href: "/branchen/hotellerie" },
      { label: "Unternehmen",      href: "/branchen/unternehmen" },
    ],
    loesungen: [
      { label: "Digitaler Empfang",       href: "/loesungen/digitaler-empfang" },
      { label: "Doppelseitige Displays",  href: "/loesungen/doppelseitige-displays" },
      { label: "Software",                href: "/loesungen/software" },
    ],
  },
};

export default page;
