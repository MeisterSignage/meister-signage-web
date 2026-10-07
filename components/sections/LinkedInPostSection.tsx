"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const POST_URL = "https://www.linkedin.com/feed/update/urn:li:ugcPost:7511690816638148608/";
const EMBED_URL = "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7511690816638148608?collapsed=1";

export default function LinkedInPostSection() {
  const [showPost, setShowPost] = useState(false);

  return (
    <section id="linkedin" aria-labelledby="linkedin-heading" className="bg-offwhite">
      <div className="section-inner grid gap-10 lg:grid-cols-2 lg:items-start">
        <div>
          <span className="eyebrow">Einblick aus der Praxis · LinkedIn</span>
          <h2 id="linkedin-heading" className="mt-3 text-3xl font-light leading-tight tracking-tight text-navy sm:text-4xl">
            Besucherinformation im Gemeindehaus.
          </h2>
          <p className="mt-4 text-sm text-cgray"><time dateTime="2026-10-02">2. Oktober 2026</time> · Meister Signage</p>
          <p className="mt-6 leading-relaxed text-cgray">
            Eine Gemeinde hat unsere Bildschirmlösung über die Sommerferien im Alltag getestet und sich anschliessend für den Kauf entschieden. Heute zeigt ein 50-Zoll-Display, auf welchen Stockwerken sich die Abteilungen befinden. Mitarbeitende können die Informationen einfach aktualisieren.
          </p>
          <p className="mt-4 leading-relaxed text-cgray">
            Im Beitrag berichten wir über die Testphase, die persönliche Beratung und das offene Kundenfeedback – einschliesslich des Wunsches nach schnelleren Rückmeldungen bei Supportfragen.
          </p>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-4">
            <a href={POST_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-semibold text-magenta underline underline-offset-4">
              Beitrag auf LinkedIn lesen <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
            </a>
            <Link href="/news/gemeindehaus-besucherinformation/" className="font-semibold text-navy underline underline-offset-4">Projektbericht lesen</Link>
          </div>
        </div>
        <div className="min-w-0 overflow-hidden rounded-2xl border border-navy/10 bg-white">
          {showPost ? (
            <>
              <iframe src={EMBED_URL} title="LinkedIn-Beitrag: Besucherinformation im Gemeindehaus" height={628} className="block w-full border-0" allowFullScreen />
              <div className="border-t border-navy/10 p-4 text-sm text-cgray">
                <p>Wird der Beitrag nicht angezeigt? <a href={POST_URL} target="_blank" rel="noopener noreferrer" className="text-magenta underline">Direkt auf LinkedIn öffnen</a></p>
                <button type="button" onClick={() => setShowPost(false)} className="mt-3 underline underline-offset-4">Einbettung schliessen</button>
              </div>
            </>
          ) : (
            <div className="flex min-h-80 flex-col items-center justify-center p-7 text-center sm:p-10">
              <span aria-hidden="true" className="mb-5 rounded bg-[#0a66c2] px-2 py-1 text-2xl font-bold text-white">in</span>
              <h3 className="text-xl font-semibold text-navy">Den Originalbeitrag mit Bildern ansehen</h3>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-cgray">
                Beim Laden wird eine Verbindung zu LinkedIn hergestellt. Dabei werden unter anderem Ihre IP-Adresse und Browserdaten an LinkedIn übertragen.
              </p>
              <button type="button" onClick={() => setShowPost(true)} className="btn-primary mt-6">LinkedIn-Beitrag laden</button>
              <Link href="/datenschutz/" className="mt-4 text-sm text-cgray underline underline-offset-4">Datenschutzhinweise</Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
