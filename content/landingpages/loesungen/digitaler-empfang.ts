import type { LandingPage } from "@/lib/lp-types";

const page: LandingPage = {
  slug: "digitaler-empfang",
  type: "loesungen",
  seoTitle: "Digitaler Empfang | Meister Signage",
  seoDescription:
    "Digitale Empfangslösungen für Unternehmen, Hotels und Lobbys. Besucher begrüssen, informieren und professionell führen.",
  eyebrow: "Lösung · Digitaler Empfang",
  h1: "Der erste Eindruck beginnt am Empfang.",
  intro:
    "Ein digitaler Empfang begrüsst Besucher, zeigt Termine an und stärkt den Markenauftritt – im Unternehmen, im Hotel oder im Showroom. Klar, modern, professionell – und zentral aktualisiert.",
  benefits: [
    {
      title: "Besucher professionell begrüssen",
      description:
        "Persönliche Begrüssungstexte, Logos und Willkommensbotschaften sorgen für einen hochwertigen ersten Eindruck.",
    },
    {
      title: "Termine und Räume anzeigen",
      description:
        "Aktuelle Meetings, Räume und Ansprechpersonen werden direkt im Empfangsbereich kommuniziert.",
    },
    {
      title: "Mitarbeitende entlasten",
      description:
        "Besucher orientieren sich selbst. Empfangspersonal wird entlastet und kann sich auf das Wesentliche konzentrieren.",
    },
    {
      title: "Corporate Branding stärken",
      description:
        "Schriften, Farben und Tonalität bleiben konsistent – jedes Display ist Teil Ihres Markenauftritts.",
    },
    {
      title: "Zentral aktualisiert",
      description:
        "Inhalte zentral pflegen und sofort veröffentlichen – ohne Druckerei, ohne Wartezeit.",
    },
    {
      title: "Moderne Wirkung",
      description:
        "Ein digitaler Empfang signalisiert Sorgfalt, Modernität und Kundenorientierung – noch bevor das erste Gespräch beginnt.",
    },
  ],
  faq: [
    {
      question: "Können Termine und Räume automatisch angezeigt werden?",
      answer:
        "Ja. Die Meister Signage Software kann Termininformationen aus Ihrem System übernehmen und auf dem Empfangsdisplay darstellen.",
    },
    {
      question: "Lässt sich der digitale Empfang an unser Branding anpassen?",
      answer:
        "Ja. Layouts, Farben, Schriften und Logos werden auf Ihren Markenauftritt abgestimmt – das Display wirkt wie ein natürlicher Teil Ihrer Marke.",
    },
    {
      question: "Eignet sich das auch für kleine Empfangsbereiche?",
      answer:
        "Ja. Auch kleinere Räume profitieren vom digitalen Empfang. Wir empfehlen das passende Display-Format je nach Platzangebot.",
    },
    {
      question: "Kann ein doppelseitiges Display verwendet werden?",
      answer:
        "Ja. Gerade in offenen Lobbys oder Räumen mit zwei Eingängen sind doppelseitige Displays eine elegante Lösung.",
    },
    {
      question: "Wie aufwändig ist die Einrichtung?",
      answer:
        "Wir übernehmen Planung, Lieferung, Montage und Schulung. Sie erhalten eine schlüsselfertige Lösung – inkl. erstem Content-Setup.",
    },
  ],
  internalLinks: [
    { label: "Unternehmen",             href: "/branchen/unternehmen" },
    { label: "Hotellerie",              href: "/branchen/hotellerie" },
    { label: "Doppelseitige Displays",  href: "/loesungen/doppelseitige-displays" },
    { label: "Digitale Leitsysteme",    href: "/loesungen/digitale-leitsysteme" },
    { label: "Software",                href: "/loesungen/software" },
  ],
  cta: {
    eyebrow: "Empfangslösung anfragen",
    title: "Ein Empfang, der professionell kommuniziert.",
    subtitle:
      "Beschreiben Sie kurz Ihren Empfangsbereich – wir empfehlen die passende Lösung.",
    primaryLabel: "Beratung anfragen",
    primaryHref: "/kontakt",
    secondaryLabel: "Lösungen ansehen",
    secondaryHref: "/loesungen",
  },
  related: {
    branchen: [
      { label: "Unternehmen",  href: "/branchen/unternehmen" },
      { label: "Hotellerie",   href: "/branchen/hotellerie" },
    ],
    loesungen: [
      { label: "Doppelseitige Displays",  href: "/loesungen/doppelseitige-displays" },
      { label: "Digitale Leitsysteme",    href: "/loesungen/digitale-leitsysteme" },
      { label: "Software",                href: "/loesungen/software" },
    ],
  },
};

export default page;
