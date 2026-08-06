import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema/breadcrumb";

const SITE_URL = "https://www.meister-signage.ch";
const PAGE_URL = `${SITE_URL}/redaktionelle-richtlinien/`;

export const metadata: Metadata = {
  title: { absolute: "Redaktionelle Richtlinien | Meister Signage" },
  description:
    "Wie Meister Signage Fachinhalte erstellt, Quellen prüft, Aktualisierungen kennzeichnet und Korrekturen transparent umsetzt.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    locale: "de_CH",
    url: PAGE_URL,
    siteName: "Meister Signage",
    title: "Redaktionelle Richtlinien | Meister Signage",
    description: "Autorenschaft, Quellen, Aktualisierungen und Korrekturen bei Meister Signage.",
  },
};

const editorialPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${PAGE_URL}#webpage`,
  url: PAGE_URL,
  name: "Redaktionelle Richtlinien",
  description:
    "Regeln für Autorenschaft, Quellen, Aktualisierungen, Korrekturen und kommerzielle Transparenz bei Meister Signage.",
  inLanguage: "de-CH",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  publisher: { "@id": `${SITE_URL}/#organization` },
  dateModified: "2026-08-06",
};

const sections = [
  {
    title: "Verantwortung und Autorenschaft",
    text: "Fachartikel und Ratgeber werden Christopher Meister zugeordnet. Er ist Gründer und Inhaber von Meister Signage und trägt die redaktionelle Verantwortung für Inhalte zu Planung, Auswahl und Betrieb von Digital-Signage-Lösungen.",
  },
  {
    title: "Quellen und technische Angaben",
    text: "Technische Daten, Normen, gesetzliche Aussagen und Marktkennzahlen sollen auf Herstellerunterlagen, Behördeninformationen oder andere nachvollziehbare Primärquellen zurückgeführt werden. Wo eine Aussage auf eigener Praxiserfahrung beruht, wird dies als solche kenntlich gemacht.",
  },
  {
    title: "Aktualisierungen",
    text: "Datierte Inhalte werden bei relevanten Produkt-, Preis- oder Rechtsänderungen überprüft. Das sichtbare Aktualisierungsdatum und dateModified im strukturierten Datensatz werden nur angepasst, wenn der Inhalt tatsächlich fachlich überarbeitet wurde.",
  },
  {
    title: "Korrekturen",
    text: "Hinweise auf sachliche Fehler werden geprüft und zeitnah korrigiert. Wesentliche Korrekturen sollen im betroffenen Inhalt transparent nachvollziehbar sein. Hinweise können an info@meister-signage.ch gesendet werden.",
  },
  {
    title: "Kommerzielle Transparenz",
    text: "Meister Signage verkauft und vermietet die beschriebenen Digital-Signage-Lösungen. Ratgeber können daher auf eigene Leistungen und Produkte verweisen. Vergleiche und Empfehlungen sollen trotzdem nachvollziehbare Kriterien, Grenzen und Alternativen benennen.",
  },
  {
    title: "AI-Unterstützung und menschliche Prüfung",
    text: "Digitale Werkzeuge können bei Recherche, Strukturierung und sprachlicher Überarbeitung unterstützen. Veröffentlichte Fachinhalte bleiben redaktionell verantwortet und werden vor der Veröffentlichung auf Verständlichkeit, sachliche Plausibilität und Markenkonsistenz geprüft.",
  },
];

export default function RedaktionelleRichtlinienPage() {
  return (
    <>
      <JsonLd schema={editorialPageSchema as Record<string, unknown>} />
      <JsonLd
        schema={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Redaktionelle Richtlinien", path: "/redaktionelle-richtlinien" },
        ]) as Record<string, unknown>}
      />

      <section className="w-full bg-navy text-white">
        <div className="section-inner">
          <p className="eyebrow text-gold">Transparenz</p>
          <h1 className="hero-title mt-3 max-w-3xl">Redaktionelle Richtlinien.</h1>
          <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-white/75">
            Diese Seite erklärt, wie Fachinhalte bei Meister Signage entstehen, geprüft,
            aktualisiert und bei Bedarf korrigiert werden.
          </p>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="section-inner">
          <div className="mx-auto max-w-3xl space-y-10">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-2xl font-light text-navy">{section.title}</h2>
                <p className="mt-3 text-[16px] leading-relaxed text-cgray">{section.text}</p>
              </section>
            ))}

            <div className="rounded-[10px] border border-navy/10 bg-offwhite p-6">
              <h2 className="text-xl font-bold text-navy">Fragen oder Korrekturhinweise?</h2>
              <p className="mt-2 text-[15px] leading-relaxed text-cgray">
                Schreiben Sie an info@meister-signage.ch oder nutzen Sie die Kontaktseite.
              </p>
              <Link href="/kontakt/" className="btn-primary mt-5 inline-flex">
                Kontakt aufnehmen
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
