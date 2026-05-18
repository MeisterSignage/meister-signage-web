import type { LandingPage } from "@/lib/lp-types";

const page: LandingPage = {
  slug: "event-displays",
  type: "loesungen",
  seoTitle: "Event-Displays mieten Schweiz – Meister Signage",
  seoDescription: "Displays für Events, Messen und Veranstaltungen in der Schweiz mieten. Zeitpläne, Wegweisung, Sponsoren – professionell und flexibel eingesetzt.",
  eyebrow: "Lösung · Event-Displays",
  h1: "Displays für Events und Veranstaltungen",
  intro: "Für Events, Messen, Tagungen und temporäre Anlässe bieten digitale Displays eine professionelle und flexible Lösung. Zeitpläne, Wegweisung, Sponsorenlogos und Live-Informationen lassen sich auf Bildschirmen anzeigen – ohne gedruckte Schilder und ohne Druckkosten bei Änderungen.",
  benefits: [
    {
      title: "Zeitpläne und Programme live anzeigen",
      description: "Agenden, Referentenlisten oder Ablaufpläne lassen sich auf Displays zeigen und kurzfristig anpassen – auch während des Events.",
    },
    {
      title: "Wegweisung und Orientierung",
      description: "Besucher finden sich besser zurecht, wenn Raumbezeichnungen, Wegweiser und Standortpläne auf Bildschirmen angezeigt werden.",
    },
    {
      title: "Sponsoren professionell präsentieren",
      description: "Sponsorenlogos und Partnernamen lassen sich auf Displays einbinden – flexibel, aktualisierbar und ohne Druckaufwand.",
    },
    {
      title: "Kein Papierchaos",
      description: "Änderungen am Programm, ausgefallene Referenten oder geänderte Raumzuteilungen lassen sich digital sofort anpassen.",
    },
    {
      title: "Mieten statt kaufen",
      description: "Für Einmalanlässe ist Mieten oft die wirtschaftlichere Lösung. Wir liefern, installieren und holen nach dem Event wieder ab.",
    },
    {
      title: "Kompetente Vorbereitung inklusive",
      description: "Wir bereiten Inhalte und Displays vor dem Event vor, sodass am Veranstaltungstag alles läuft – ohne Last-Minute-Stress.",
    },
  ],
  faq: [
    {
      question: "Wie weit im Voraus muss ich Displays für ein Event reservieren?",
      answer: "Möglichst früh, idealerweise 2–4 Wochen vor dem Anlass. In dringenden Fällen versuchen wir kurzfristig zu helfen – nehmen Sie einfach Kontakt auf.",
    },
    {
      question: "Was ist im Mietpaket inbegriffen?",
      answer: "Lieferung, Installation, Inhaltsvorbereitung und Abholung. Wir besprechen vorab, welche Inhalte gezeigt werden sollen, und richten alles entsprechend ein.",
    },
    {
      question: "Welche Displaygrössen stehen zur Verfügung?",
      answer: "Wir arbeiten je nach Verfügbarkeit und Anforderung mit verschiedenen Grössen. Kontaktieren Sie uns mit Ihren Angaben – wir finden die passende Lösung.",
    },
    {
      question: "Können Inhalte während des Events geändert werden?",
      answer: "Ja. Mit entsprechender Vorbereitung lassen sich Inhalte auch während des Events kurzfristig anpassen – zum Beispiel bei Zeitplanänderungen.",
    },
    {
      question: "Was kostet die Miete für Event-Displays?",
      answer: "Die Kosten hängen von Anzahl Displays, Grösse, Dauer und gewünschten Leistungen ab. Wir erstellen Ihnen gerne ein individuelles Angebot.",
    },
  ],
  internalLinks: [
    { label: "Events",                   href: "/branchen/events" },
    { label: "Digital Signage mieten",   href: "/digital-signage-mieten" },
    { label: "Digital Signage kaufen",   href: "/digital-signage-kaufen" },
    { label: "Kosten & Preise",          href: "/was-kostet-digital-signage-schweiz" },
    { label: "Gastronomie",              href: "/branchen/gastronomie" },
    { label: "Digital Signage Zürich",   href: "/staedte/zuerich" },
    { label: "Kontakt",                  href: "/kontakt" },
  ],
  cta: {
    eyebrow: "Projekt besprechen",
    title: "Displays für Ihren nächsten Event?",
    subtitle: "Sagen Sie kurz, was Sie planen – Datum, Ort, ungefähre Anzahl Displays. Wir melden uns mit einem Angebot.",
    primaryLabel: "Anfrage stellen",
    primaryHref: "/kontakt",
    secondaryLabel: "Event-Lösungen ansehen",
    secondaryHref: "/branchen/events",
  },
  related: {
    loesungen: [
      { label: "Digitale Menüboards", href: "/loesungen/digitale-menueboards" },
      { label: "Empfangsdisplays",    href: "/loesungen/empfangsdisplays" },
    ],
    branchen: [
      { label: "Gastronomie", href: "/branchen/gastronomie" },
      { label: "Hotellerie",  href: "/branchen/hotellerie" },
    ],
    staedte: [
      { label: "Digital Signage Zürich", href: "/staedte/zuerich" },
      { label: "Digital Signage Luzern", href: "/staedte/luzern" },
    ],
  },
};

export default page;
