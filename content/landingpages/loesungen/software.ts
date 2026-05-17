import type { LandingPage } from "@/lib/lp-types";

const page: LandingPage = {
  slug: "software",
  type: "loesungen",
  seoTitle: "Digital Signage Software | Meister Signage",
  seoDescription:
    "Mit der Meister Signage Software Inhalte zentral verwalten, Displays steuern und digitale Kommunikation einfach aktualisieren.",
  eyebrow: "Lösung · Software",
  h1: "Inhalte zentral verwalten. Einfach und flexibel.",
  intro:
    "Die Meister Signage Software bringt alle Displays an einen Ort. Inhalte zentral steuern, Zeitpläne hinterlegen und in Sekunden aktualisieren – ohne IT-Abteilung, ohne komplizierte Bedienung.",
  benefits: [
    {
      title: "Inhalte zentral verwalten",
      description:
        "Alle Bildschirme an einem Ort steuern – egal ob ein Display am Empfang oder ein ganzes Filialnetz.",
    },
    {
      title: "Zeitgesteuerte Inhalte",
      description:
        "Tagesmenü, Aktion oder Eventhinweis genau dann ausspielen, wann es passt – automatisch und planbar.",
    },
    {
      title: "Einfache Bedienung",
      description:
        "Klare Oberfläche, vordefinierte Templates und Drag-and-Drop. Keine IT-Kenntnisse nötig.",
    },
    {
      title: "Templates und Layouts",
      description:
        "Auf Wunsch erhalten Sie fertige Layouts, die zu Ihrer Marke passen – inkl. Schriften, Farben und Tonalität.",
    },
    {
      title: "Benutzer und Rechte",
      description:
        "Mehrere Personen können Inhalte verwalten – mit klaren Rollen, Rechten und Freigabewegen.",
    },
    {
      title: "Sofort aktualisieren",
      description:
        "Änderung gespeichert, Display zeigt sie an. Ohne Wartezeit, ohne Druckerei, ohne Aufwand.",
    },
  ],
  faq: [
    {
      question: "Können mehrere Displays zentral gesteuert werden?",
      answer:
        "Ja. Ob ein Display am Empfang oder mehrere Bildschirme an verschiedenen Standorten – alles wird in einer Oberfläche verwaltet.",
    },
    {
      question: "Können Inhalte zeitgesteuert veröffentlicht werden?",
      answer:
        "Ja. Inhalte können stunden-, tages- oder wochenbasiert geplant werden – Mittagsmenü von 11–14 Uhr, Aktion am Wochenende, Veranstaltungshinweis nur in einer Woche.",
    },
    {
      question: "Braucht es IT-Kenntnisse?",
      answer:
        "Nein. Die Software ist so aufgebaut, dass jede Person im Betrieb damit umgehen kann. Bei der Einrichtung zeigen wir alles, was Sie wissen müssen.",
    },
    {
      question: "Funktioniert die Software auf bestehenden Bildschirmen?",
      answer:
        "Die Meister Signage Software ist auf unsere Display-Lösungen abgestimmt. Im Beratungsgespräch klären wir, wie sich Ihre bestehende Hardware integrieren lässt.",
    },
    {
      question: "Wie viele Personen können gleichzeitig arbeiten?",
      answer:
        "Mehrere Benutzerinnen und Benutzer können parallel Inhalte erstellen und freigeben – mit individuellen Rechten je nach Rolle.",
    },
  ],
  internalLinks: [
    { label: "Displays kaufen",        href: "/digital-signage-kaufen" },
    { label: "Displays mieten",        href: "/digital-signage-mieten" },
    { label: "Digitale Menüboards",    href: "/loesungen/digitale-menueboards" },
    { label: "Digitaler Empfang",      href: "/loesungen/digitaler-empfang" },
    { label: "Digitale Leitsysteme",   href: "/loesungen/digitale-leitsysteme" },
  ],
  cta: {
    eyebrow: "Software entdecken",
    title: "Alles zentral. Eine Plattform für alle Displays.",
    subtitle:
      "Schildern Sie kurz Ihren Einsatz – wir zeigen Ihnen, wie die Meister Signage Software in Ihrem Betrieb funktioniert.",
    primaryLabel: "Beratung anfragen",
    primaryHref: "/kontakt",
    secondaryLabel: "Lösungen ansehen",
    secondaryHref: "/loesungen",
  },
  related: {
    loesungen: [
      { label: "Digitale Menüboards",  href: "/loesungen/digitale-menueboards" },
      { label: "Digitaler Empfang",    href: "/loesungen/digitaler-empfang" },
      { label: "Digitale Leitsysteme", href: "/loesungen/digitale-leitsysteme" },
    ],
  },
};

export default page;
