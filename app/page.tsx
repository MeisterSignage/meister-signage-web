import type { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/sections/HeroSection";

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
