import type { LandingPage } from "@/lib/lp-types";

const page: LandingPage = {
  slug: "digitale-menueboards",
  type: "loesungen",
  seoTitle: "Digitale Menüboards Schweiz – Meister Signage",
  seoDescription: "Digitale Menüboards für Restaurants, Cafés und Bistros in der Schweiz. Preise und Angebote einfach aktualisieren – schlüsselfertig, persönlich betreut.",
  eyebrow: "Lösung · Digitale Menüboards",
  h1: "Digitale Menüboards für Restaurants und Gastronomie",
  intro: "Ein digitales Menüboard ersetzt gedruckte Karten und Tafelschriften durch einen aktuellen, professionellen Bildschirm. Inhalte lassen sich kurzfristig anpassen – Preise, Tagesangebote, ausverkaufte Gerichte – ohne Neudruck, ohne Laminiergerät, ohne Aufwand.",
  benefits: [
    {
      title: "Preise und Angebote sofort anpassen",
      description: "Änderungen am Menü oder Preisen sind in wenigen Minuten live – ohne Druckauftrag oder Wartezeit.",
    },
    {
      title: "Tagesmenü automatisch ein- und ausblenden",
      description: "Mittagsmenüs lassen sich zeitgesteuert anzeigen und nach der Mittagszeit automatisch ausblenden.",
    },
    {
      title: "Professionelles Erscheinungsbild",
      description: "Ein gepflegtes digitales Menü wirkt moderner und hochwertiger als handgeschriebene Tafeln oder ausgedruckte Blätter.",
    },
    {
      title: "Mehrsprachig bedienbar",
      description: "Inhalte lassen sich in mehreren Sprachen anzeigen – relevant für touristische Betriebe und internationale Gäste.",
    },
    {
      title: "Einfache Bedienung",
      description: "Die Lösung wird so eingerichtet, dass das Restaurantpersonal Inhalte eigenständig aktualisieren kann – ohne IT-Kenntnisse.",
    },
    {
      title: "Skalierbar für mehrere Standorte",
      description: "Restaurants mit mehreren Filialen oder Standorten können zentral verwalten und lokal anpassen.",
    },
  ],
  faq: [
    {
      question: "Was brauche ich für ein digitales Menüboard?",
      answer: "Ein professioneller Display, ein Media-Player und die entsprechende Software. Wir liefern und installieren alles aus einer Hand – inklusive Inhaltsvorbereitung.",
    },
    {
      question: "Welche Displaygrösse ist sinnvoll?",
      answer: "Das hängt vom Abstand der Gäste und der verfügbaren Wandfläche ab. Im Kassenbereich sind 43–55 Zoll üblich. Wir beraten Sie vor Ort oder anhand von Fotos.",
    },
    {
      question: "Kann ich selbst Gerichte hinzufügen oder entfernen?",
      answer: "Ja. Sie erhalten eine einfache Oberfläche, über die Sie Inhalte selbst bearbeiten können. Auf Wunsch übernehmen wir die Pflege.",
    },
    {
      question: "Wie lange dauert die Einrichtung?",
      answer: "Die Hardware ist in der Regel an einem Tag installiert und eingerichtet. Die Inhaltsvorbereitung stimmen wir vorab mit Ihnen ab.",
    },
    {
      question: "Was kostet ein digitales Menüboard?",
      answer: "Die Kosten umfassen Hardware, Software und optional Betreuung. Wir erstellen Ihnen gerne eine kostenlose Einschätzung basierend auf Ihren Anforderungen.",
    },
  ],
  internalLinks: [
    { label: "Gastronomie",              href: "/branchen/gastronomie" },
    { label: "Retail & Handel",          href: "/branchen/retail" },
    { label: "Digital Signage kaufen",   href: "/digital-signage-kaufen" },
    { label: "Digital Signage mieten",   href: "/digital-signage-mieten" },
    { label: "Kosten & Preise",          href: "/was-kostet-digital-signage-schweiz" },
    { label: "Software",                 href: "/loesungen/software" },
    { label: "Kontakt",                  href: "/kontakt" },
  ],
  cta: {
    eyebrow: "Projekt besprechen",
    title: "Digitales Menüboard für Ihr Restaurant?",
    subtitle: "Sagen Sie kurz, was Sie brauchen. Wir zeigen Ihnen, welche Lösung zu Ihrem Betrieb passt.",
    primaryLabel: "Beratung anfragen",
    primaryHref: "/kontakt",
    secondaryLabel: "Gastronomie-Lösungen",
    secondaryHref: "/branchen/gastronomie",
  },
  related: {
    loesungen: [
      { label: "Empfangsdisplays", href: "/loesungen/empfangsdisplays" },
      { label: "Event-Displays",   href: "/loesungen/event-displays" },
    ],
    branchen: [
      { label: "Gastronomie", href: "/branchen/gastronomie" },
      { label: "Hotellerie",  href: "/branchen/hotellerie" },
    ],
    staedte: [
      { label: "Digital Signage Luzern", href: "/staedte/luzern" },
      { label: "Digital Signage Zürich", href: "/staedte/zuerich" },
    ],
  },
};

export default page;
