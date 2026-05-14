import type { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSolutionSection from "@/components/sections/ProblemSolutionSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import ProcessSection from "@/components/sections/ProcessSection";
import IndustrySection from "@/components/sections/IndustrySection";
import ProofSection from "@/components/sections/ProofSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import { UtensilsCrossed, Store, CalendarRange, Building2, Hotel, MonitorPlay } from "lucide-react";
import { Clock, PencilRuler, BadgeCheck, MapPin, Wrench, RefreshCw } from "lucide-react";

export const metadata: Metadata = {
  title: "Meister Signage – Digital Signage Luzern & Zentralschweiz",
  description: "Schlüsselfertige Digital-Signage-Lösungen für Gastronomie, Retail und Events. Persönlicher Service aus der Zentralschweiz. Kein IT-Aufwand.",
};

const sectors = [
  { href: "/gastronomie", label: "Gastronomie & Hotellerie", desc: "Digitale Menüboards, Tagesangebote und Willkommensbildschirme.", icon: "🍽" },
  { href: "/retail",      label: "Retail & Handel",           desc: "Aktionsanzeigen, Preisboards und Produktpräsentationen.",   icon: "🏪" },
  { href: "/events",      label: "Events & Veranstaltungen",  desc: "Wegeleitung, Programmübersichten und Live-Infos.",         icon: "🎤" },
  { href: "/mieten",      label: "Digital Signage mieten",    desc: "Flexibel mieten statt kaufen — ideal für Kurzprojekte.",   icon: "📺" },
];

const painPoints = [
  { problem: "Veraltete Infos", detail: "Gedruckte Aushänge, die nach zwei Tagen schon falsch sind." },
  { problem: "Druckkosten",     detail: "Jede Preisänderung kostet Zeit, Geld und Nerven." },
  { problem: "Kein Überblick",  detail: "Mehrere Standorte, jedes Mal manuell aktualisieren." },
  { problem: "Komplizierte IT", detail: "\"Das müssen wir erst mit der IT absprechen.\" Kennen Sie das?" },
];

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <HeroSection
        eyebrow="Digital Signage aus der Zentralschweiz"
        title="Digitale Beschilderung, die im Alltag wirklich funktioniert."
        subtitle="Meister Signage plant und realisiert Digital-Signage-Lösungen für Gastronomie, Retail und Events – persönlich, verständlich und schlüsselfertig."
        bullets={[
          "Inhalte einfach und zentral aktualisieren",
          "Weniger Druckaufwand und weniger manuelle Arbeit",
          "Persönliche Betreuung statt anonymem Ticketsystem",
        ]}
        primaryCta={{ label: "Beratung anfragen", href: "/kontakt" }}
        secondaryCta={{ label: "Lösungen ansehen", href: "/loesungen" }}
      />

      {/* ── PROBLEM / SOLUTION ── */}
      <ProblemSolutionSection
        eyebrow="Vom Aufwand zur einfachen Lösung"
        title="Digitale Kommunikation soll entlasten – nicht zusätzliche Arbeit machen."
        subtitle="Viele Betriebe wissen, dass digitale Bildschirme sinnvoll wären. Oft scheitert es aber an Zeit, Technik oder der Frage, wer sich später darum kümmert."
        problems={[
          {
            title: "Inhalte sind schnell veraltet",
            description: "Aushänge, Menükarten oder Eventinformationen müssen immer wieder neu erstellt, gedruckt und ausgetauscht werden.",
          },
          {
            title: "Technik wirkt kompliziert",
            description: "Displays, Player, Inhalte und Steuerung sollen funktionieren, ohne dass intern jemand zum IT-Spezialisten werden muss.",
          },
          {
            title: "Zuständigkeiten sind unklar",
            description: "Wenn niemand weiss, wer Inhalte pflegt oder Probleme löst, bleibt Digital Signage schnell ungenutzt.",
          },
        ]}
        solutions={[
          {
            title: "Inhalte zentral aktualisieren",
            description: "Informationen lassen sich einfach anpassen und auf Wunsch für verschiedene Standorte oder Anwendungen vorbereiten.",
          },
          {
            title: "Schlüsselfertig umgesetzt",
            description: "Wir kümmern uns um Planung, passende Komponenten, Einrichtung und Übergabe – verständlich und praxisnah.",
          },
          {
            title: "Persönliche Betreuung",
            description: "Sie haben einen direkten Ansprechpartner und keine anonyme Plattform, bei der Sie zuerst ein Ticket eröffnen müssen.",
          },
        ]}
      />

      {/* ── BENEFITS ── */}
      <BenefitsSection
        eyebrow="Was Sie gewinnen"
        title="Mehr Wirkung im Alltag – mit weniger Aufwand."
        subtitle="Digital Signage soll nicht komplizierter machen, sondern Kommunikation einfacher, aktueller und sichtbarer machen."
        benefits={[
          { icon: Clock,       title: "Inhalte schneller aktualisieren", description: "Angebote, Öffnungszeiten, Menüs oder Hinweise lassen sich kurzfristig anpassen, ohne jedes Mal neu zu drucken." },
          { icon: PencilRuler, title: "Passend zu Ihrem Auftritt",       description: "Inhalte und Darstellung werden so umgesetzt, dass sie zu Ihrem Betrieb, Ihrer Zielgruppe und Ihrem visuellen Stil passen." },
          { icon: BadgeCheck,  title: "Professioneller Eindruck",        description: "Digitale Beschilderung wirkt gepflegt, aktuell und wertig – besonders dort, wo Kunden sofort einen Eindruck gewinnen." },
          { icon: MapPin,      title: "Lokal und persönlich",            description: "Als Anbieter aus der Zentralschweiz sind wir greifbar, direkt erreichbar und bei Bedarf auch vor Ort." },
          { icon: Wrench,      title: "Schlüsselfertig umgesetzt",       description: "Von der Planung bis zur Inbetriebnahme erhalten Sie eine Lösung, die im Alltag funktioniert." },
          { icon: RefreshCw,   title: "Flexibel erweiterbar",            description: "Ob ein einzelner Bildschirm oder mehrere Standorte: Die Lösung kann Schritt für Schritt mitwachsen." },
        ]}
      />

      {/* ── PROZESS ── */}
      <ProcessSection
        eyebrow="So läuft die Zusammenarbeit"
        title="Von der Idee bis zur laufenden Lösung – klar und unkompliziert."
        subtitle="Sie müssen nicht wissen, welches Display, welcher Player oder welche Software passt. Wir führen Sie Schritt für Schritt zur passenden Lösung."
        steps={[
          { number: 1, title: "Bedarf verstehen",       description: "Wir klären, wo Digital Signage eingesetzt werden soll, welche Inhalte sichtbar sein müssen und was im Alltag wirklich gebraucht wird." },
          { number: 2, title: "Lösung planen",          description: "Daraus entsteht ein schlankes Konzept mit passenden Bildschirmen, Inhalten, Steuerung und klarer Umsetzung." },
          { number: 3, title: "Einrichten und starten", description: "Wir kümmern uns um Einrichtung, Übergabe und einen sauberen Start – ohne unnötigen technischen Ballast." },
          { number: 4, title: "Betreuen und erweitern", description: "Nach dem Start bleiben wir erreichbar, unterstützen bei Anpassungen und erweitern die Lösung bei Bedarf." },
        ]}
      />

      {/* ── BRANCHEN ── */}
      <IndustrySection
        eyebrow="Lösungen nach Anwendung"
        title="Digital Signage dort einsetzen, wo Informationen sichtbar sein müssen."
        subtitle="Ob Menü, Angebot, Wegweisung oder Eventinformation – entscheidend ist, dass die Lösung zum Alltag passt."
        industries={[
          { icon: UtensilsCrossed, title: "Gastronomie",       description: "Digitale Menüboards, Tagesangebote und Hinweise schnell aktualisieren – ohne neue Drucksachen.",                         href: "/gastronomie" },
          { icon: Store,           title: "Retail und Handel", description: "Aktionen, Produktinformationen und Markenbotschaften sichtbar und flexibel präsentieren.",                               href: "/retail" },
          { icon: CalendarRange,   title: "Events",            description: "Zeitpläne, Sponsoren, Wegweisung und Live-Informationen professionell anzeigen.",                                        href: "/events" },
          { icon: Hotel,           title: "Hotellerie",        description: "Gäste informieren, Angebote hervorheben und Empfangsbereiche moderner gestalten.",                                      href: "/hotellerie" },
          { icon: Building2,       title: "Unternehmen",       description: "Empfang, interne Kommunikation oder Besucherinformationen klar und zentral steuern.",                                   href: "/unternehmen" },
          { icon: MonitorPlay,     title: "Bildschirm mieten", description: "Für Events, Pop-ups oder temporäre Einsätze passende Displays flexibel einsetzen.",                                    href: "/mieten" },
        ]}
      />

      {/* ── PROOF ── */}
      <ProofSection
        eyebrow="Vertrauen entsteht im Alltag"
        title="Persönlich, nahbar und lösungsorientiert."
        subtitle="Meister Signage steht nicht für anonyme Standardpakete, sondern für Lösungen, die zu Betrieb, Anwendung und Alltag passen."
        proofItems={[
          { metric: "Persönlich", title: "Direkter Ansprechpartner",    description: "Sie sprechen nicht mit einem Ticketsystem, sondern mit einer Person, die Ihr Projekt kennt." },
          { metric: "Praxisnah", title: "Lösungen statt Produktverkauf", description: "Im Zentrum steht nicht der Bildschirm, sondern die Frage, was Ihre Kommunikation im Alltag leisten soll." },
          { metric: "Lokal",     title: "Aus der Zentralschweiz",        description: "Kurze Wege, regionale Nähe und bei Bedarf Unterstützung vor Ort." },
          { metric: "Skalierbar", title: "Schrittweise erweiterbar",     description: "Starten Sie klein und erweitern Sie die Lösung, wenn neue Standorte, Inhalte oder Anwendungen dazukommen." },
        ]}
      />

      {/* ── FAQ ── */}
      <FAQSection
        eyebrow="Häufige Fragen"
        title="Was Sie vor dem Start wissen sollten."
        subtitle="Die wichtigsten Antworten für Betriebe, die Digital Signage einfach und sinnvoll einsetzen möchten."
        faqs={[
          { question: "Was kostet eine Digital-Signage-Lösung?",      answer: "Das hängt von Anzahl Bildschirmen, Einsatzort, Inhaltspflege und gewünschter Betreuung ab. Für kleine Lösungen ist ein schlanker Einstieg möglich." },
          { question: "Kann ich Inhalte selbst ändern?",              answer: "Ja. Inhalte können so vorbereitet werden, dass sie einfach aktualisiert werden können. Auf Wunsch übernehmen wir auch die laufende Pflege." },
          { question: "Brauche ich dafür eine eigene IT-Abteilung?",  answer: "Nein. Die Lösung wird so geplant, dass sie im Alltag verständlich funktioniert und keine unnötige technische Komplexität entsteht." },
          { question: "Kann ich mit einem Bildschirm starten?",       answer: "Ja. Viele Projekte starten bewusst klein und werden später erweitert." },
          { question: "Für welche Branchen eignet sich Digital Signage?", answer: "Besonders sinnvoll ist es für Gastronomie, Hotellerie, Retail, Events, Empfangsbereiche und überall dort, wo Informationen regelmässig sichtbar aktualisiert werden müssen." },
        ]}
      />

      {/* ── CTA ── */}
      <CTASection
        eyebrow="Projekt besprechen"
        title="Lassen Sie uns gemeinsam die passende Digital-Signage-Lösung planen."
        subtitle="Kurz erklären, was Sie vorhaben – wir zeigen Ihnen, welche Lösung sinnvoll ist und wie der Einstieg einfach gelingt."
        primaryCta={{ label: "Beratung anfragen", href: "/kontakt" }}
        secondaryCta={{ label: "Mehr über Meister Signage", href: "/ueber-uns" }}
      />

      {/* ── SCHMERZPUNKTE ── */}
      <section style={{ backgroundColor: "var(--offwhite)", padding: "80px 24px" }}>
        <div className="max-w-content mx-auto">
          <div style={{ marginBottom: 16 }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--magenta)" }}>
              Kommt Ihnen das bekannt vor?
            </span>
          </div>
          <h2 style={{ marginBottom: 48, maxWidth: 500 }}>
            Was viele Betriebe täglich kostet — ohne es zu merken
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24 }}>
            {painPoints.map((p) => (
              <div key={p.problem} style={{
                backgroundColor: "white", borderRadius: 10, padding: 28,
                borderLeft: "3px solid var(--magenta)",
              }}>
                <h3 style={{ marginBottom: 8, fontSize: 16 }}>{p.problem}</h3>
                <p style={{ color: "var(--gray)", fontSize: 14, lineHeight: 1.6, maxWidth: "none" }}>{p.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LÖSUNG ── */}
      <section style={{ backgroundColor: "white", padding: "80px 24px" }}>
        <div className="max-w-content mx-auto">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
            <div>
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--magenta)", display: "block", marginBottom: 16 }}>
                Die Lösung
              </span>
              <h2 style={{ marginBottom: 24 }}>
                Wir liefern Lösungen.<br />Keine Produkte.
              </h2>
              <p style={{ color: "var(--gray)", marginBottom: 20 }}>
                Bei Meister Signage kaufen Sie keinen Bildschirm — Sie bekommen ein funktionierendes System,
                das vom ersten Tag an läuft. Wir richten alles ein, schulen Ihr Team und sind persönlich
                erreichbar, wenn etwas ist.
              </p>
              <p style={{ color: "var(--gray)", marginBottom: 32 }}>
                Nicht über ein Ticket-System. Nicht in drei Wochen. Direkt.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                {["Schlüsselfertig", "Persönlicher Support", "Kein IT-Aufwand", "Lokal in der Zentralschweiz"].map((f) => (
                  <span key={f} style={{
                    backgroundColor: "rgba(254,1,154,0.08)", color: "var(--magenta)",
                    padding: "4px 14px", borderRadius: 20, fontSize: 12, fontWeight: 700,
                  }}>
                    {f}
                  </span>
                ))}
              </div>
            </div>
            <div style={{
              backgroundColor: "var(--navy)", borderRadius: 10, padding: 40, color: "white",
            }}>
              <div style={{ width: 48, height: 2, backgroundColor: "var(--gold)", marginBottom: 24 }} />
              <blockquote style={{ fontSize: 18, fontWeight: 300, lineHeight: 1.6, fontStyle: "italic", color: "rgba(255,255,255,0.85)", marginBottom: 24 }}>
                "Wir versprechen keine Revolution. Wir sorgen dafür, dass Ihre Botschaft sichtbar ist —
                zur richtigen Zeit, am richtigen Ort. Das ist genug."
              </blockquote>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)" }}>Meister Signage · Zentralschweiz</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ROI / NUTZEN ── */}
      <section style={{ backgroundColor: "var(--offwhite)", padding: "80px 24px" }}>
        <div className="max-w-content mx-auto">
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--magenta)", display: "block", marginBottom: 16 }}>
            Messbarer Nutzen
          </span>
          <h2 style={{ marginBottom: 48, maxWidth: 500 }}>Was Digital Signage konkret bringt</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 24 }}>
            {[
              { stat: "Ø 30 %",   desc: "weniger Druckkosten im ersten Jahr" },
              { stat: "< 2 Min.", desc: "für eine Inhaltsänderung auf allen Screens" },
              { stat: "1 Tag",    desc: "bis Ihr System läuft — schlüsselfertig" },
              { stat: "0",        desc: "IT-Kenntnisse notwendig für den Betrieb" },
            ].map((item) => (
              <div key={item.stat} style={{ backgroundColor: "white", borderRadius: 10, padding: 28, borderTop: "3px solid var(--magenta)" }}>
                <p style={{ fontSize: 32, fontWeight: 700, color: "var(--navy)", marginBottom: 8 }}>{item.stat}</p>
                <p style={{ fontSize: 14, color: "var(--gray)", maxWidth: "none" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SEKTOREN ── */}
      <section style={{ backgroundColor: "white", padding: "80px 24px" }}>
        <div className="max-w-content mx-auto">
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--magenta)", display: "block", marginBottom: 16 }}>
            Lösungen nach Branche
          </span>
          <h2 style={{ marginBottom: 48 }}>Für wen wir arbeiten</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
            {sectors.map((s) => (
              <Link key={s.href} href={s.href} style={{ textDecoration: "none" }}>
                <div style={{
                  backgroundColor: "var(--offwhite)", borderRadius: 10, padding: 28,
                  borderLeft: "3px solid var(--magenta)", transition: "transform 0.2s, box-shadow 0.2s",
                  cursor: "pointer",
                }}
                  className="hover:-translate-y-1 hover:shadow-md transition-all">
                  <span style={{ fontSize: 28, marginBottom: 12, display: "block" }}>{s.icon}</span>
                  <h3 style={{ marginBottom: 8, fontSize: 16 }}>{s.label}</h3>
                  <p style={{ color: "var(--gray)", fontSize: 14, lineHeight: 1.6, maxWidth: "none" }}>{s.desc}</p>
                  <span style={{ color: "var(--magenta)", fontSize: 13, fontWeight: 700, marginTop: 16, display: "inline-block" }}>
                    Mehr erfahren →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── ÜBER CHRIS / TRUST ── */}
      <section style={{ backgroundColor: "var(--navy)", padding: "80px 24px", color: "white" }}>
        <div className="max-w-content mx-auto">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>
            <div>
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--magenta)", display: "block", marginBottom: 16 }}>
                Wer wir sind
              </span>
              <h2 style={{ color: "white", marginBottom: 24 }}>
                Nah am Kunden.<br />In der Zentralschweiz.
              </h2>
              <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: 20, maxWidth: 480 }}>
                Ich bin Chris — und ich kenne das Problem aus eigener Erfahrung: Betriebe verlieren täglich
                Zeit mit veralteten Aushängen, gedruckten Menüs und statischen Schildern.
                Meister Signage macht Schluss damit. Persönlich. Unkompliziert. Aus der Zentralschweiz.
              </p>
              <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: 32, maxWidth: 480 }}>
                Als lokaler Anbieter sind wir nicht in drei Tagen wieder weg. Wir kennen Ihre Region,
                Ihre Branche und sind auf Wunsch auch vor Ort.
              </p>
              <Link href="/ueber-uns" style={{
                color: "white", fontWeight: 700, fontSize: 14, textDecoration: "none",
                borderBottom: "1px solid rgba(255,255,255,0.3)", paddingBottom: 2,
              }}>
                Mehr über uns →
              </Link>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { icon: "📍", title: "Lokal",       desc: "Zentralschweiz — wir kennen Ihre Region." },
                { icon: "🤝", title: "Persönlich",  desc: "Direkte Ansprechperson, kein Ticket-System." },
                { icon: "⚡", title: "Schnell",     desc: "Einrichtung in einem Tag, Betrieb ab sofort." },
                { icon: "🔧", title: "Schlüsselfertig", desc: "Alles aus einer Hand — Hardware, Software, Support." },
              ].map((item) => (
                <div key={item.title} style={{
                  backgroundColor: "rgba(255,255,255,0.06)", borderRadius: 10, padding: 20,
                  display: "flex", gap: 16, alignItems: "flex-start",
                }}>
                  <span style={{ fontSize: 20 }}>{item.icon}</span>
                  <div>
                    <p style={{ fontWeight: 700, marginBottom: 4, color: "white" }}>{item.title}</p>
                    <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 13, maxWidth: "none" }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section style={{ backgroundColor: "var(--offwhite)", padding: "80px 24px", textAlign: "center" }}>
        <div className="max-w-content mx-auto">
          <div style={{ width: 48, height: 2, backgroundColor: "var(--gold)", margin: "0 auto 24px" }} />
          <h2 style={{ marginBottom: 16, maxWidth: 520, margin: "0 auto 16px" }}>
            Bereit für Ihre erste digitale Botschaft?
          </h2>
          <p style={{ color: "var(--gray)", marginBottom: 40, maxWidth: 480, margin: "0 auto 40px" }}>
            15 Minuten reichen — kein Verkaufsgespräch, sondern ein ehrlicher Austausch darüber,
            ob Digital Signage für Sie Sinn macht.
          </p>
          <Link href="/kontakt" style={{
            backgroundColor: "var(--magenta)", color: "white",
            padding: "16px 36px", borderRadius: 7, fontWeight: 700,
            textDecoration: "none", fontSize: 15, display: "inline-flex", alignItems: "center", gap: 8,
          }}>
            Kostenloses Gespräch buchen →
          </Link>
          <p style={{ color: "var(--gray)", fontSize: 12, marginTop: 16 }}>
            Online-Videocall · Unverbindlich · Auf Wunsch auf Schweizerdeutsch
          </p>
        </div>
      </section>
    </>
  );
}
