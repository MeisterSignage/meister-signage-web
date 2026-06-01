import type { Metadata } from "next";
import Link from "next/link";
import SectionContainer from "@/components/ui/SectionContainer";

const PAGE_URL = "https://www.meister-signage.ch/versand-und-rueckgabe";

export const metadata: Metadata = {
  title: { absolute: "Versand & Rückgabe – Meister Signage" },
  description:
    "Transparente Informationen zu Versand, Lieferung, Rückgabe und Gewährleistung für Digital-Signage-Hardware von Meister Signage.",
  alternates: { canonical: PAGE_URL },
};

export default function VersandUndRueckgabePage() {
  return (
    <SectionContainer white>
      <div className="legal-page mx-auto max-w-3xl">

        {/* Header */}
        <div className="mb-10 border-b border-navy/10 pb-8">
          <p className="eyebrow mb-2">Rechtliches</p>
          <h1 className="mb-2 text-navy">Versand & Rückgabe</h1>
          <p className="text-sm text-cgray">Stand: Mai 2026</p>
          <p className="mt-4 text-sm text-cgray">
            Diese Seite fasst die Lieferbedingungen, Rückgaberegelung und Gewährleistung für den
            Kauf von Digital-Signage-Hardware bei Meister Signage zusammen.
          </p>
        </div>

        <div className="flex flex-col divide-y divide-navy/10">

          {/* Lieferung & Versand */}
          <section className="py-7">
            <h2 className="mb-3 text-navy">Lieferung & Versand</h2>
            <p className="card-body mb-3">
              Digital-Signage-Displays werden innerhalb der Schweiz ausgeliefert. Je nach Modell,
              Stückzahl und Standort sind folgende Liefervarianten möglich:
            </p>
            <ul className="card-body mb-3 list-disc space-y-2 pl-5">
              <li>
                <strong>Persönliche Lieferung &amp; Installation</strong> durch Meister Signage
                in der Zentralschweiz und Umgebung (Standardpraxis für betreute Projekte).
              </li>
              <li>
                <strong>Spedition</strong> für Lieferungen in die übrige Schweiz oder bei
                grösseren Stückzahlen.
              </li>
            </ul>
            <p className="card-body mb-3">
              Die genauen Versand- und Installationskosten hängen von Modell, Standort und
              Lieferumfang ab und werden im individuellen Angebot vorab transparent ausgewiesen.
              Handlingszeit beträgt in der Regel 1–3 Arbeitstage, Transit innerhalb der Schweiz
              2–7 Arbeitstage.
            </p>
          </section>

          {/* Reklamation bei Transportschäden */}
          <section className="py-7">
            <h2 className="mb-3 text-navy">Reklamation bei Transportschäden</h2>
            <p className="card-body">
              Sichtbare Transportschäden sind innerhalb von <strong>3 Arbeitstagen</strong> nach
              Eintreffen der Ware schriftlich (E-Mail an{" "}
              <a href="mailto:chris@meister-signage.ch" className="text-magenta hover:underline">
                chris@meister-signage.ch
              </a>{" "}
              genügt) zu melden. Bitte fotografieren Sie die Verpackung und das Gerät vor dem
              Auspacken, damit eine Versicherungsabwicklung möglich ist.
            </p>
          </section>

          {/* Rückgabe */}
          <section className="py-7">
            <h2 className="mb-3 text-navy">Rückgabe</h2>
            <p className="card-body mb-3">
              Da Digital-Signage-Lösungen individuell konfiguriert, eingerichtet und installiert
              werden, handelt es sich um <strong>massgeschneiderte B2B-Lieferungen</strong>. Ein
              generelles Widerrufs- oder Rückgaberecht besteht daher nicht – dies entspricht dem
              Schweizer B2B-Standard.
            </p>
            <p className="card-body mb-3">
              Rückgaben oder Umtausch sind nur nach vorheriger schriftlicher Vereinbarung
              möglich. Falls Sie unsicher sind, ob ein Modell zu Ihrem Einsatzzweck passt,
              empfehlen wir vor dem Kauf eine{" "}
              <Link href="/digital-signage-mieten/" className="text-magenta underline underline-offset-2">
                Mietlösung
              </Link>{" "}
              zum Testen oder eine kostenlose{" "}
              <Link href="/kontakt/" className="text-magenta underline underline-offset-2">
                Beratung
              </Link>
              .
            </p>
          </section>

          {/* Gewährleistung & Garantie */}
          <section className="py-7">
            <h2 className="mb-3 text-navy">Gewährleistung & Herstellergarantie</h2>
            <p className="card-body mb-3">
              Auf alle gelieferten Geräte gilt die jeweilige <strong>Herstellergarantie</strong>{" "}
              (in der Regel 24 Monate ab Lieferdatum). Defekte werden im Garantiezeitraum nach
              den Bedingungen des Herstellers behoben.
            </p>
            <p className="card-body">
              Darüber hinaus bietet Meister Signage auf Wunsch erweiterte Servicevereinbarungen
              (z.B. Vor-Ort-Tausch, verlängerter Support). Die Bedingungen werden individuell
              vereinbart und im Angebot ausgewiesen.
            </p>
          </section>

          {/* Service-Standorte */}
          <section className="py-7">
            <h2 className="mb-3 text-navy">Service-Standorte und Lieferregionen</h2>
            <p className="card-body mb-3">
              Meister Signage liefert und installiert schweizweit. Der Hauptsitz und das Lager
              befinden sich in der Zentralschweiz (Baar / Luzern-Region), was kurze Wege zu Kunden
              in Luzern, Zug, Zürich, Aargau und Bern ermöglicht. Bei Lieferungen in die Romandie,
              ins Tessin oder in Randregionen entstehen je nach Volumen leichte Mehrkosten für
              Spedition – diese werden vorab transparent ausgewiesen.
            </p>
            <p className="card-body">
              Für Service-Einsätze und Display-Tausch unter Garantie übernehmen wir die
              vollständige Abwicklung: Abholung beim Kunden, Tausch durch Ersatzgerät innert
              48–72 Stunden, kein Versand-Hin-und-Her durch den Kunden.
            </p>
          </section>

          {/* Kontakt */}
          <section className="py-7">
            <h2 className="mb-3 text-navy">Fragen?</h2>
            <p className="card-body">
              Bei Fragen zur Lieferung, Rückgabe oder Garantie melden Sie sich direkt:{" "}
              <a href="mailto:chris@meister-signage.ch" className="text-magenta hover:underline">
                chris@meister-signage.ch
              </a>{" "}
              oder telefonisch unter{" "}
              <a href="tel:+41764526687" className="text-magenta hover:underline">
                +41 76 452 66 87
              </a>
              . In der Regel antworten wir innerhalb eines Werktages – bei dringenden
              Anliegen wie Transportschäden oder Garantiefällen melden Sie sich gerne auch direkt
              per Telefon oder WhatsApp.
            </p>
          </section>

        </div>

        {/* Footer link */}
        <div className="mt-8 border-t border-navy/10 pt-6">
          <p className="text-sm text-cgray">
            Weitere rechtliche Informationen:{" "}
            <Link href="/impressum/" className="text-magenta hover:underline">
              Impressum
            </Link>{" "}
            ·{" "}
            <Link href="/datenschutz/" className="text-magenta hover:underline">
              Datenschutzerklärung
            </Link>
          </p>
        </div>

      </div>
    </SectionContainer>
  );
}
