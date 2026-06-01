import type { Metadata } from "next";
import Link from "next/link";
import SectionContainer from "@/components/ui/SectionContainer";

export const metadata: Metadata = {
  title: { absolute: "Datenschutzerklärung – Meister Signage" },
  description: "Datenschutzerklärung von Meister Signage. Informationen zur Verarbeitung personenbezogener Daten gemäss DSG und DSGVO.",
  alternates: { canonical: "https://www.meister-signage.ch/datenschutz" },
  robots: { index: false, follow: false },
};

// ─── Hinweise für zukünftige Dienste (noch nicht aktiv) ──────────
// TODO: YouTube-Abschnitt ergänzen, sobald Videos eingebettet werden
// ─────────────────────────────────────────────────────────────────

export default function DatenschutzPage() {
  return (
    <SectionContainer white>
      <div className="legal-page mx-auto max-w-3xl">

        {/* Header */}
        <div className="mb-10 border-b border-navy/10 pb-8">
          <p className="eyebrow mb-2">Rechtliches</p>
          <h1 className="mb-2 text-navy">Datenschutzerklärung</h1>
          <p className="text-sm text-cgray">Stand: Mai 2026</p>
          <p className="mt-4 text-sm text-cgray">
            Weitere rechtliche Informationen finden Sie im{" "}
            <Link href="/impressum/" className="text-magenta underline underline-offset-2">
              Impressum
            </Link>
            .
          </p>
        </div>

        <div className="flex flex-col divide-y divide-navy/10">

          {/* 1 */}
          <section className="py-7">
            <h2 className="mb-3 text-navy">1. Allgemeine Hinweise</h2>
            <p className="card-body">
              Der Schutz Ihrer personenbezogenen Daten ist uns wichtig. Wir behandeln Ihre
              personenbezogenen Daten vertraulich und entsprechend den gesetzlichen
              Datenschutzvorschriften der Schweiz (DSG) sowie – soweit anwendbar – der
              Datenschutz-Grundverordnung der Europäischen Union (DSGVO).
            </p>
          </section>

          {/* 2 */}
          <section className="py-7">
            <h2 className="mb-3 text-navy">2. Verantwortliche Stelle</h2>
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
            </address>
          </section>

          {/* 3 */}
          <section className="py-7">
            <h2 className="mb-3 text-navy">3. Hosting und Server-Logfiles</h2>
            <p className="card-body">
              Diese Website wird bei Novatrend in der Schweiz gehostet. Beim Aufruf der Website
              werden automatisch Verbindungsdaten (IP-Adresse, Datum und Uhrzeit des Zugriffs,
              aufgerufene Seite, Browser-Typ) in Server-Logfiles gespeichert. Diese Daten dienen
              ausschliesslich der technischen Sicherheit und werden nicht mit anderen Datenquellen
              zusammengeführt.
            </p>
          </section>

          {/* 4 */}
          <section className="py-7">
            <h2 className="mb-3 text-navy">4. SSL-/TLS-Verschlüsselung</h2>
            <p className="card-body">
              Diese Website nutzt aus Sicherheitsgründen und zum Schutz der Übertragung
              vertraulicher Inhalte eine SSL-/TLS-Verschlüsselung. Eine verschlüsselte Verbindung
              erkennen Sie an der Adresszeile Ihres Browsers sowie am Schloss-Symbol.
            </p>
          </section>

          {/* 5 */}
          <section className="py-7">
            <h2 className="mb-3 text-navy">5. Cookies und Einwilligung</h2>
            <p className="card-body mb-3">
              Diese Website verwendet technisch notwendige Cookies, die für den Betrieb der Website
              erforderlich sind. Diese Cookies speichern keine personenbezogenen Daten und können
              nicht deaktiviert werden.
            </p>
            <p className="card-body mb-3">
              Zusätzlich setzen wir Analyse-Cookies ein (Google Analytics 4 und Microsoft Clarity).
              Diese werden erst nach Ihrer ausdrücklichen Einwilligung über den Cookie-Banner aktiviert.
              Ihre Einwilligung können Sie jederzeit widerrufen, indem Sie die gespeicherten
              Browserdaten löschen und die Website erneut aufrufen.
            </p>
            <p className="card-body">
              Wenn Sie im Cookie-Banner auf «Ablehnen» klicken, werden keine Analyse-Cookies gesetzt
              und keine Daten an Google oder Microsoft übermittelt.
            </p>
          </section>

          {/* 6 */}
          <section className="py-7">
            <h2 className="mb-3 text-navy">6. Google Analytics 4</h2>
            <p className="card-body mb-3">
              Diese Website nutzt Google Analytics 4, einen Webanalysedienst der Google Ireland
              Limited, Gordon House, Barrow Street, Dublin 4, Irland. Google Analytics verwendet
              Cookies, die eine Analyse der Nutzung der Website ermöglichen. Die Mess-ID lautet
              G-12LJVBM5KQ.
            </p>
            <p className="card-body mb-3">
              Google Analytics wird ausschliesslich nach Ihrer Einwilligung über den Cookie-Banner
              aktiviert. Die erhobenen Daten (z.&nbsp;B. aufgerufene Seiten, Verweildauer, Gerätetyp,
              ungefährer Standort) werden an Google-Server übertragen und können in die USA
              übermittelt werden.
            </p>
            <p className="card-body">
              Die IP-Anonymisierung ist standardmässig aktiviert. Weitere Informationen:{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-magenta hover:underline"
              >
                policies.google.com/privacy
              </a>
              . Sie können die Erfassung durch Google Analytics verhindern, indem Sie im Cookie-Banner
              auf «Ablehnen» klicken oder das{" "}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
                className="text-magenta hover:underline"
              >
                Browser-Add-on zur Deaktivierung
              </a>{" "}
              installieren.
            </p>
          </section>

          {/* 7 */}
          <section className="py-7">
            <h2 className="mb-3 text-navy">7. Microsoft Clarity</h2>
            <p className="card-body mb-3">
              Diese Website nutzt Microsoft Clarity, einen Analysedienst der Microsoft Corporation,
              One Microsoft Way, Redmond, WA 98052, USA. Clarity zeichnet anonymisierte
              Nutzungsdaten auf, darunter Mausbewegungen, Klicks und Scrollverhalten (Heatmaps und
              Session-Recordings).
            </p>
            <p className="card-body mb-3">
              Microsoft Clarity wird ausschliesslich nach Ihrer Einwilligung über den Cookie-Banner
              aktiviert. Die erhobenen Daten werden auf Servern von Microsoft verarbeitet und
              können in die USA übermittelt werden.
            </p>
            <p className="card-body">
              Weitere Informationen:{" "}
              <a
                href="https://privacy.microsoft.com/privacystatement"
                target="_blank"
                rel="noopener noreferrer"
                className="text-magenta hover:underline"
              >
                privacy.microsoft.com
              </a>
              . Sie können die Erfassung durch Clarity verhindern, indem Sie im Cookie-Banner
              auf «Ablehnen» klicken.
            </p>
          </section>

          {/* 8 */}
          <section className="py-7">
            <h2 className="mb-3 text-navy">8. Kontaktaufnahme</h2>
            <p className="card-body mb-3">
              Wenn Sie uns per E-Mail, Telefon oder Kontaktformular kontaktieren, werden die von
              Ihnen übermittelten Daten zur Bearbeitung Ihrer Anfrage gespeichert und verarbeitet.
              Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
            <h2 className="mb-2 text-navy mt-5">WhatsApp</h2>
            <p className="card-body">
              Auf dieser Website besteht die Möglichkeit, über WhatsApp Kontakt aufzunehmen.
              WhatsApp wird von Meta Platforms Ireland Limited, 4 Grand Canal Square, Dublin 2,
              Irland betrieben. Bei der Nutzung von WhatsApp können Daten an Server von Meta
              übertragen werden, auch ausserhalb der Schweiz und der EU. Bitte beachten Sie die
              Datenschutzhinweise von WhatsApp:{" "}
              <a
                href="https://www.whatsapp.com/legal/privacy-policy-eea"
                target="_blank"
                rel="noopener noreferrer"
                className="text-magenta hover:underline"
              >
                whatsapp.com/legal/privacy-policy-eea
              </a>
              .
            </p>
          </section>

          {/* 7 */}
          <section className="py-7">
            <h2 className="mb-3 text-navy">9. Kontaktformular (Formspree)</h2>
            <p className="card-body mb-3">
              Das Kontaktformular auf dieser Website wird über den Dienst Formspree (Formspree Inc.,
              USA) bereitgestellt. Bei Absenden des Formulars werden Ihre Angaben (Name, E-Mail-Adresse,
              Nachricht) an Formspree übermittelt und per E-Mail an uns weitergeleitet.
            </p>
            <p className="card-body">
              Formspree speichert die übermittelten Daten vorübergehend auf Servern in den USA.
              Die Verarbeitung erfolgt auf Grundlage Ihrer Einwilligung (Absenden des Formulars) und
              zur Bearbeitung Ihrer Anfrage. Weitere Informationen:{" "}
              <a
                href="https://formspree.io/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-magenta hover:underline"
              >
                formspree.io/legal/privacy-policy
              </a>
              .
            </p>
          </section>

          {/* 8 */}
          <section className="py-7">
            <h2 className="mb-3 text-navy">10. Google Search Console</h2>
            <p className="card-body">
              Wir nutzen die Google Search Console zur technischen Überwachung und Optimierung der
              Sichtbarkeit dieser Website in der Google-Suche. Dabei werden aggregierte Daten über
              Suchanfragen und technische Fehler ausgewertet. Es werden keine personenbezogenen
              Daten einzelner Besucher verarbeitet. Weitere Informationen:{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-magenta hover:underline"
              >
                policies.google.com/privacy
              </a>
              .
            </p>
          </section>

          {/* 8 */}
          <section className="py-7">
            <h2 className="mb-3 text-navy">11. Social Media</h2>
            <p className="card-body">
              Diese Website enthält Links zu LinkedIn, Instagram, WhatsApp und YouTube. Beim
              blossen Besuch dieser Website werden über diese einfachen Links grundsätzlich keine
              Daten an die jeweiligen Plattformen übertragen. Erst wenn Sie einen Link anklicken und
              die externe Plattform besuchen, gelten deren Datenschutzbestimmungen.
            </p>
          </section>

          {/* 9 */}
          <section className="py-7">
            <h2 className="mb-3 text-navy">12. Speicherung und Aufbewahrung</h2>
            <p className="card-body">
              Personenbezogene Daten werden nur so lange gespeichert, wie dies für den jeweiligen
              Zweck erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen.
            </p>
          </section>

          {/* 10 */}
          <section className="py-7">
            <h2 className="mb-3 text-navy">13. Datenübermittlung ins Ausland</h2>
            <p className="card-body">
              Einzelne Dienste (z.&nbsp;B. Google Analytics 4, Microsoft Clarity, Google Search Console,
              Formspree, WhatsApp) können Daten ausserhalb der
              Schweiz bzw. der EU verarbeiten. Wir stellen sicher, dass dabei ein angemessenes
              Datenschutzniveau gewährleistet ist.
            </p>
          </section>

          {/* 11 */}
          <section className="py-7">
            <h2 className="mb-4 text-navy">14. Rechte betroffener Personen</h2>
            <p className="card-body mb-4">
              Sie haben gegenüber uns folgende Rechte bezüglich Ihrer personenbezogenen Daten:
            </p>
            <ul className="mb-4 ml-4 flex flex-col gap-1">
              {[
                "Recht auf Auskunft",
                "Recht auf Berichtigung unrichtiger Daten",
                "Recht auf Löschung",
                "Recht auf Einschränkung der Verarbeitung",
                "Recht auf Widerruf erteilter Einwilligungen",
              ].map((r) => (
                <li key={r} className="card-body list-disc">{r}</li>
              ))}
            </ul>
            <p className="card-body mb-3">
              Zur Ausübung Ihrer Rechte wenden Sie sich an:{" "}
              <a href="mailto:chris@meister-signage.ch" className="text-magenta hover:underline">
                chris@meister-signage.ch
              </a>
            </p>
            <p className="card-body">
              Sie haben zudem das Recht, sich beim Eidgenössischen Datenschutz- und
              Öffentlichkeitsbeauftragten (EDÖB) zu beschweren:{" "}
              <a
                href="https://www.edoeb.admin.ch"
                target="_blank"
                rel="noopener noreferrer"
                className="text-magenta hover:underline"
              >
                edoeb.admin.ch
              </a>
              .
            </p>
          </section>

          {/* 12 */}
          <section className="py-7">
            <h2 className="mb-3 text-navy">15. Änderungen dieser Datenschutzerklärung</h2>
            <p className="card-body">
              Wir behalten uns vor, diese Datenschutzerklärung jederzeit anzupassen, insbesondere
              wenn neue Dienste eingesetzt werden. Die jeweils aktuelle Version ist auf dieser Seite
              abrufbar.
            </p>
          </section>

        </div>

        {/* Footer link */}
        <div className="mt-8 border-t border-navy/10 pt-6">
          <p className="text-sm text-cgray">
            Weitere rechtliche Informationen:{" "}
            <Link href="/impressum/" className="text-magenta hover:underline">
              Impressum
            </Link>
          </p>
        </div>

      </div>
    </SectionContainer>
  );
}
