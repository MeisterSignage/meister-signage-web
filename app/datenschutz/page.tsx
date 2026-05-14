import type { Metadata } from "next";
import SectionContainer from "@/components/ui/SectionContainer";

export const metadata: Metadata = {
  title: "Datenschutzerklärung – Meister Signage",
  description: "Datenschutzerklärung von Meister Signage. Informationen zur Verarbeitung personenbezogener Daten gemäss DSG und DSGVO.",
};

const sections = [
  {
    number: "1",
    title: "Allgemeine Hinweise",
    content: "Der Schutz Ihrer personenbezogenen Daten ist uns wichtig. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften der Schweiz (DSG) sowie – soweit anwendbar – der Datenschutz-Grundverordnung der Europäischen Union (DSGVO).",
  },
  {
    number: "2",
    title: "Verantwortliche Stelle",
    content: null,
    address: [
      "Christopher Meister",
      "Meister Signage Einzelunternehmen",
      "Chriesimatt 20",
      "6340 Baar",
      "Schweiz",
      "",
      "Telefon: +41 76 452 66 87",
      "E-Mail: chris@meister-signage.ch",
    ],
  },
  {
    number: "3",
    title: "Hosting und Server-Logfiles",
    content: "Diese Website wird bei Novatrend in der Schweiz gehostet.",
  },
  {
    number: "4",
    title: "SSL-/TLS-Verschlüsselung",
    content: "Diese Website nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL-/TLS-Verschlüsselung.",
  },
  {
    number: "5",
    title: "Kontaktformular und Kontaktaufnahme",
    content: "Wenn Sie uns per Kontaktformular, E-Mail, Telefon oder WhatsApp kontaktieren, werden die von Ihnen übermittelten Daten zur Bearbeitung Ihrer Anfrage gespeichert und verarbeitet.",
  },
  {
    number: "6",
    title: "Cookies",
    content: "Diese Website verwendet Cookies. Zur Verwaltung der Einwilligungen wird CookieYes verwendet.",
  },
  {
    number: "7",
    title: "Google Analytics",
    content: "Diese Website verwendet Google Analytics 4 (GA4).",
  },
  {
    number: "8",
    title: "Microsoft Clarity",
    content: "Diese Website verwendet Microsoft Clarity zur Analyse und Verbesserung der Benutzerfreundlichkeit.",
  },
  {
    number: "9",
    title: "Google Search Console",
    content: "Zur technischen Optimierung und Überwachung der Auffindbarkeit der Website wird Google Search Console verwendet.",
  },
  {
    number: "10",
    title: "YouTube",
    content: "Auf dieser Website können künftig Videos der Plattform YouTube eingebunden werden.",
  },
  {
    number: "11",
    title: "Social Media",
    content: "Diese Website enthält Links zu LinkedIn, Instagram, WhatsApp und YouTube.",
  },
  {
    number: "12",
    title: "AI-gestützte Inhalte",
    content: "Zur Erstellung und Optimierung von Inhalten können künftig AI-/KI-gestützte Systeme eingesetzt werden.",
  },
  {
    number: "13",
    title: "Speicherung und Aufbewahrung",
    content: "Personenbezogene Daten werden nur so lange gespeichert, wie dies für den jeweiligen Zweck erforderlich ist.",
  },
  {
    number: "14",
    title: "Datensicherheit",
    content: "Wir treffen angemessene technische und organisatorische Sicherheitsmassnahmen zum Schutz personenbezogener Daten.",
  },
  {
    number: "15",
    title: "Rechte betroffener Personen",
    content: null,
    list: ["Auskunft", "Berichtigung", "Löschung", "Widerruf"],
    listIntro: "Sie haben insbesondere folgende Rechte:",
  },
  {
    number: "16",
    title: "Datenübermittlung ins Ausland",
    content: "Einzelne Dienste können Daten ausserhalb der Schweiz bzw. EU verarbeiten.",
  },
  {
    number: "17",
    title: "Änderungen",
    content: "Wir behalten uns vor, diese Datenschutzerklärung jederzeit anzupassen.",
  },
];

export default function DatenschutzPage() {
  return (
    <SectionContainer white>
      <div className="mx-auto max-w-3xl">

        {/* Header */}
        <div className="mb-12">
          <span className="eyebrow">Rechtliches</span>
          <h1 className="mb-3 text-navy">Datenschutzerklärung</h1>
          <p className="text-cgray">Stand: Mai 2026</p>
        </div>

        {/* Sections */}
        <dl className="divide-y divide-navy/10 border-t border-navy/10">
          {sections.map((s) => (
            <div key={s.number} className="py-8">
              <dt className="mb-3 flex items-baseline gap-3">
                <span className="shrink-0 text-sm font-semibold text-gold">{s.number}.</span>
                <h2 className="text-[18px] font-semibold leading-snug text-navy md:text-[20px]">
                  {s.title}
                </h2>
              </dt>
              <dd className="pl-6">
                {s.content && (
                  <p className="card-body">{s.content}</p>
                )}
                {s.address && (
                  <address className="card-body not-italic">
                    {s.address.map((line, i) =>
                      line === "" ? (
                        <br key={i} />
                      ) : (
                        <span key={i} className="block">{line}</span>
                      )
                    )}
                  </address>
                )}
                {s.listIntro && (
                  <p className="card-body mb-2">{s.listIntro}</p>
                )}
                {s.list && (
                  <ul className="ml-4 flex flex-col gap-1">
                    {s.list.map((item) => (
                      <li key={item} className="card-body list-disc">{item}</li>
                    ))}
                  </ul>
                )}
              </dd>
            </div>
          ))}
        </dl>

      </div>
    </SectionContainer>
  );
}
