import type { Metadata } from "next";
import SectionContainer from "@/components/ui/SectionContainer";

export const metadata: Metadata = {
  title: "Impressum – Meister Signage",
  description: "Impressum und rechtliche Angaben von Meister Signage, Einzelunternehmen, Baar (Zug), Schweiz.",
};

export default function ImpressumPage() {
  return (
    <SectionContainer white>
      <div className="mx-auto max-w-3xl">

        {/* Header */}
        <div className="mb-12">
          <span className="eyebrow">Rechtliches</span>
          <h1 className="mb-3 text-navy">Impressum</h1>
          <p className="text-cgray">Stand: Mai 2026</p>
        </div>

        <dl className="divide-y divide-navy/10 border-t border-navy/10">

          {/* Verantwortliche Person */}
          <div className="py-8">
            <dt className="mb-3">
              <h2 className="text-[18px] font-semibold text-navy md:text-[20px]">Verantwortliche Person</h2>
            </dt>
            <dd className="card-body">
              <address className="not-italic">
                <span className="block font-semibold text-navy">Christopher Meister</span>
                <span className="block">Meister Signage Einzelunternehmen</span>
                <br />
                <span className="block">Chriesimatt 20</span>
                <span className="block">6340 Baar</span>
                <span className="block">Schweiz</span>
                <br />
                <span className="block">Telefon: <a href="tel:+41764526687" className="text-magenta hover:underline">+41 76 452 66 87</a></span>
                <span className="block">E-Mail: <a href="mailto:chris@meister-signage.ch" className="text-magenta hover:underline">chris@meister-signage.ch</a></span>
                <br />
                <span className="block">UID: CHE-133.515.346</span>
                <span className="block">Handelsregisteramt des Kantons Zug</span>
              </address>
            </dd>
          </div>

          {/* Verantwortlich für Inhalte */}
          <div className="py-8">
            <dt className="mb-3">
              <h2 className="text-[18px] font-semibold text-navy md:text-[20px]">Verantwortlich für Inhalte</h2>
            </dt>
            <dd className="card-body">Christopher Meister</dd>
          </div>

          {/* Kontaktmöglichkeiten */}
          <div className="py-8">
            <dt className="mb-3">
              <h2 className="text-[18px] font-semibold text-navy md:text-[20px]">Kontaktmöglichkeiten</h2>
            </dt>
            <dd>
              <p className="card-body mb-3">Neben der Kontaktaufnahme per E-Mail steht auch eine Kontaktaufnahme per Telefon, WhatsApp sowie über das Kontaktformular auf der Website zur Verfügung.</p>
              <p className="card-body">WhatsApp: <a href="https://wa.me/41764526687" target="_blank" rel="noopener noreferrer" className="text-magenta hover:underline">+41 76 452 66 87</a></p>
            </dd>
          </div>

          {/* Haftungsausschluss */}
          <div className="py-8">
            <dt className="mb-3">
              <h2 className="text-[18px] font-semibold text-navy md:text-[20px]">Haftungsausschluss</h2>
            </dt>
            <dd className="flex flex-col gap-3">
              <p className="card-body">Der Autor übernimmt keine Gewähr hinsichtlich der inhaltlichen Richtigkeit, Genauigkeit, Aktualität, Zuverlässigkeit und Vollständigkeit der Informationen.</p>
              <p className="card-body">Haftungsansprüche gegen den Autor wegen Schäden materieller oder immaterieller Art, welche aus dem Zugriff oder der Nutzung bzw. Nichtnutzung der veröffentlichten Informationen, durch Missbrauch der Verbindung oder durch technische Störungen entstanden sind, werden ausgeschlossen.</p>
            </dd>
          </div>

          {/* Haftung für Links */}
          <div className="py-8">
            <dt className="mb-3">
              <h2 className="text-[18px] font-semibold text-navy md:text-[20px]">Haftung für Links</h2>
            </dt>
            <dd className="card-body">Verweise und Links auf Webseiten Dritter liegen ausserhalb unseres Verantwortungsbereichs. Für Inhalte externer Webseiten wird jegliche Verantwortung abgelehnt.</dd>
          </div>

          {/* Urheberrechte */}
          <div className="py-8">
            <dt className="mb-3">
              <h2 className="text-[18px] font-semibold text-navy md:text-[20px]">Urheberrechte</h2>
            </dt>
            <dd className="card-body">Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos, Texten, Videos oder anderen Dateien auf dieser Website gehören ausschliesslich Meister Signage bzw. den speziell genannten Rechteinhabern.</dd>
          </div>

        </dl>
      </div>
    </SectionContainer>
  );
}
