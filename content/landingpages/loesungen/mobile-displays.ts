import type { LandingPage } from "@/lib/lp-types";

const page: LandingPage = {
  slug: "mobile-displays",
  type: "loesungen",
  seoTitle: "Mobile Displays & digitale Kundenstopper | Meister Signage",
  seoDescription:
    "Mobile Digital-Signage-Displays für Retail, Gastronomie und Events. Flexibel platzieren, ohne feste Verkabelung.",
  eyebrow: "Lösung · Mobile Displays",
  h1: "Digitale Aufmerksamkeit genau dort, wo Menschen vorbeigehen.",
  intro:
    "Mobile Displays und digitale Kundenstopper bringen Inhalte überall hin, wo sie wirken sollen – vor den Eingang, in den Verkaufsraum, an den Messestand. Flexibel platziert, ohne feste Installation, in Sekunden umgestellt.",
  benefits: [
    {
      title: "Flexibel platzierbar",
      description:
        "Aufstellen, anstecken oder per Akku betreiben – Standort heute hier, morgen dort.",
    },
    {
      title: "Kein fester Stromanschluss nötig",
      description:
        "Akku-Lösungen erlauben Einsätze, wo keine Steckdose verfügbar ist – Aussenbereich, Pop-up, temporäre Promotion.",
    },
    {
      title: "Hohe Sichtbarkeit",
      description:
        "Helle Displays mit blickfangstarker Bildwirkung – auch bei Tageslicht und in stark frequentierten Bereichen.",
    },
    {
      title: "Wetterfeste Lösungen möglich",
      description:
        "Für den Aussenbereich gibt es robuste Geräte mit Schutzklasse – ideal für Eingänge, Promotionen und Events.",
    },
    {
      title: "Schnell einsatzbereit",
      description:
        "Aufgebaut, eingeschaltet, los. Inhalte vorab vorbereiten, Display vor Ort einfach in Betrieb nehmen.",
    },
    {
      title: "Zentral gesteuert",
      description:
        "Mit der Meister Signage Software können Inhalte auch auf mobilen Displays zentral verwaltet und aktualisiert werden.",
    },
  ],
  faq: [
    {
      question: "Können mobile Displays ohne festen Stromanschluss eingesetzt werden?",
      answer:
        "Ja. Es gibt Geräte mit integriertem Akku, die mehrere Stunden netzunabhängig laufen – ideal für Promotionen, Pop-ups und Aussenbereiche.",
    },
    {
      question: "Eignen sich mobile Displays für Events und Promotions?",
      answer:
        "Ja. Mobile Displays sind genau für solche Einsätze gemacht – schnell aufgestellt, flexibel umgestellt, klare Wirkung.",
    },
    {
      question: "Sind Outdoor-Lösungen möglich?",
      answer:
        "Ja. Für den Aussenbereich gibt es wetterfeste Modelle mit entsprechender Helligkeit und Schutzklasse. Wir empfehlen das passende Gerät je nach Standort.",
    },
    {
      question: "Wie werden Inhalte aktualisiert?",
      answer:
        "Über die Meister Signage Software – egal wo das Display steht. Vorgeplante Zeitpläne und kurzfristige Änderungen funktionieren gleich gut.",
    },
    {
      question: "Kann ich mobile Displays auch mieten?",
      answer:
        "Ja. Gerade für temporäre Einsätze, Events und Pop-up-Promotionen ist die Miete eine flexible Option.",
    },
  ],
  internalLinks: [
    { label: "Displays mieten",     href: "/digital-signage-mieten" },
    { label: "Events & Messen",     href: "/branchen/events" },
    { label: "Gastronomie",         href: "/branchen/gastronomie" },
    { label: "Retail & Handel",     href: "/branchen/retail" },
  ],
  cta: {
    eyebrow: "Mobile Lösung anfragen",
    title: "Digitale Wirkung – genau dort, wo Sie sie brauchen.",
    subtitle:
      "Schildern Sie kurz Ihren Einsatz – wir empfehlen die passende Lösung.",
    primaryLabel: "Beratung anfragen",
    primaryHref: "/kontakt",
    secondaryLabel: "Displays mieten",
    secondaryHref: "/digital-signage-mieten",
  },
  related: {
    branchen: [
      { label: "Events & Messen",  href: "/branchen/events" },
      { label: "Gastronomie",      href: "/branchen/gastronomie" },
      { label: "Retail & Handel",  href: "/branchen/retail" },
    ],
    loesungen: [
      { label: "Software",                href: "/loesungen/software" },
      { label: "Doppelseitige Displays",  href: "/loesungen/doppelseitige-displays" },
    ],
  },
};

export default page;
