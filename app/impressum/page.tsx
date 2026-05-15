import type { Metadata } from "next";
import Link from "next/link";
import SectionContainer from "@/components/ui/SectionContainer";

export const metadata: Metadata = {
  title: "Impressum – Meister Signage",
  description: "Impressum und rechtliche Angaben von Meister Signage, Einzelunternehmen, Baar (Zug), Schweiz.",
  alternates: { canonical: "https://www.meister-signage.ch/impressum" },
  robots: { index: false, follow: false },
};

export default function ImpressumPage() {
  return (
    <SectionContainer white>
      <div className="legal-page mx-auto max-w-3xl">

        {/* Header */}
        <div className="mb-10 border-b border-navy/10 pb-8">
          <p className="eyebrow mb-2">Rechtliches</p>
          <h1 className="mb-2 text-navy">Impressum</h1>
          <p className="text-sm text-cgray">Stand: Mai 2026</p>
          <p className="mt-4 text-sm text-cgray">
            Informationen zur Datenverarbeitung finden Sie in der{" "}
            <Link href="/datenschutz" className="text-magenta underline underline-offset-2">
              Datenschutzerklärung
            </Link>
            .
          </p>
        </div>

        <div className="flex flex-col divide-y divide-navy/10">

          {/* Verantwortliche Person */}
          <section className="py-7">
            <h2 className="mb-3 text-navy">Verantwortliche Person</h2>
            <address className="card-body not-italic">
              <span className="block font-semibold text-navy">Christopher Meister</span>
              <span className="block">Meister Signage Einzelunternehmen</span>
              <span className="block mt-2">Chriesimatt 20</span>
              <span className="block">6340 Baar</span>
              <span className="block">Schweiz</span>
              <span className="block mt-2">
                Telefon:{" "}
                <a href="tel:+41764526687" className="text-magenta hover:underline">
                  +41 76 452 66 87
                </a>
              </span>
              <span className="block">
                E-Mail:{" "}
                <a href="mailto:chris@meister-signage.ch" className="text-magenta hover:underline">
                  chris@meister-signage.ch
                </a>
              </span>
              <span className="block mt-2">UID: CHE-133.515.346</span>
              <span className="block">Handelsregisteramt des Kantons Zug</span>
            </address>
          </section>

          {/* Verantwortlich für Inhalte */}
          <section className="py-7">
            <h2 className="mb-3 text-navy">Verantwortlich für Inhalte</h2>
            <p className="card-body">Christopher Meister</p>
          </section>

          {/* Kontakt */}
          <section className="py-7">
            <h2 className="mb-3 text-navy">Kontaktmöglichkeiten</h2>
            <p className="card-body mb-3">
              Neben der Kontaktaufnahme per E-Mail steht auch eine Kontaktaufnahme per Telefon,
              WhatsApp sowie über das Kontaktformular auf der Website zur Verfügung.
            </p>
            <p className="card-body">
              WhatsApp:{" "}
              <a
                href="https://wa.me/41764526687"
                target="_blank"
                rel="noopener noreferrer"
                className="text-magenta hover:underline"
              >
                +41 76 452 66 87
              </a>
            </p>
          </section>

          {/* Haftungsausschluss */}
          <section className="py-7">
            <h2 className="mb-3 text-navy">Haftungsausschluss</h2>
            <p className="card-body mb-3">
              Der Autor übernimmt keine Gewähr hinsichtlich der inhaltlichen Richtigkeit,
              Genauigkeit, Aktualität, Zuverlässigkeit und Vollständigkeit der Informationen.
            </p>
            <p className="card-body">
              Haftungsansprüche gegen den Autor wegen Schäden materieller oder immaterieller Art,
              welche aus dem Zugriff oder der Nutzung bzw. Nichtnutzung der veröffentlichten
              Informationen, durch Missbrauch der Verbindung oder durch technische Störungen
              entstanden sind, werden ausgeschlossen.
            </p>
          </section>

          {/* Haftung für Links */}
          <section className="py-7">
            <h2 className="mb-3 text-navy">Haftung für Links</h2>
            <p className="card-body">
              Verweise und Links auf Webseiten Dritter liegen ausserhalb unseres
              Verantwortungsbereichs. Für Inhalte externer Webseiten wird jegliche Verantwortung
              abgelehnt.
            </p>
          </section>

          {/* Urheberrechte */}
          <section className="py-7">
            <h2 className="mb-3 text-navy">Urheberrechte</h2>
            <p className="card-body">
              Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos, Texten, Videos oder
              anderen Dateien auf dieser Website gehören ausschliesslich Meister Signage bzw. den
              speziell genannten Rechteinhabern. Ohne ausdrückliche schriftliche Genehmigung des
              Urhebers darf kein Inhalt vervielfältigt oder verwendet werden.
            </p>
          </section>

        </div>

        {/* Footer link */}
        <div className="mt-8 border-t border-navy/10 pt-6">
          <p className="text-sm text-cgray">
            Weitere rechtliche Informationen:{" "}
            <Link href="/datenschutz" className="text-magenta hover:underline">
              Datenschutzerklärung
            </Link>
          </p>
        </div>

      </div>
    </SectionContainer>
  );
}
