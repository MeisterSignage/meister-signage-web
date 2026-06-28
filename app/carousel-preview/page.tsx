/* TEMPORARY design preview for LinkedIn/Instagram carousel slides.
   Not linked anywhere; used to review the Meister Signage slide design.
   Safe to delete after sign-off. */

const NAVY = "#1a2744";
const MAGENTA = "#fe019a";
const OFFWHITE = "#f5f5f7";

// 4:5 slide, shown at 384×480 (production renders 1080×1350).
const W = 384;
const H = 480;

function Wordmark({ small = false }: { small?: boolean }) {
  // White full logo (cloud + wordmark) — legible on the dark navy slide.
  // eslint-disable-next-line @next/next/no-img-element
  return <img src="/logo-white.svg" alt="Meister Signage" style={{ height: small ? 34 : 44, width: "auto" }} />;
}

function SlideShell({
  children,
  index,
}: {
  children: React.ReactNode;
  index: number;
}) {
  return (
    <div
      style={{
        width: W,
        height: H,
        backgroundColor: NAVY,
        backgroundImage: [
          "radial-gradient(circle at 80% 12%, rgba(254,1,154,0.20) 0%, transparent 55%)",
          "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)",
          "linear-gradient(145deg, #111d38 0%, #1a2744 60%, #0d1628 100%)",
        ].join(","),
        backgroundSize: "auto, 22px 22px, auto",
        borderRadius: 14,
        padding: 34,
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden",
        boxShadow: "0 10px 40px rgba(7,16,31,0.35)",
        fontFamily: "Lato, sans-serif",
      }}
    >
      {children}
      <div
        style={{
          marginTop: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingTop: 18,
        }}
      >
        <Wordmark small />
        <span style={{ color: "rgba(255,255,255,0.45)", fontSize: 12, fontWeight: 700 }}>
          {index}/4
        </span>
      </div>
    </div>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 16 }}>
      <span
        style={{
          width: 9,
          height: 9,
          background: MAGENTA,
          borderRadius: 2,
          marginTop: 7,
          flexShrink: 0,
        }}
      />
      <span style={{ color: OFFWHITE, fontSize: 16, lineHeight: 1.4, fontWeight: 400 }}>
        {children}
      </span>
    </div>
  );
}

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 22 }}>
      <span style={{ width: 26, height: 3, background: MAGENTA, borderRadius: 2 }} />
      <span
        style={{
          color: MAGENTA,
          fontSize: 12,
          fontWeight: 800,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
        }}
      >
        {children}
      </span>
    </div>
  );
}

export default function CarouselPreview() {
  return (
    <div style={{ background: "#e5e7eb", minHeight: "100vh", padding: 40 }}>
      <h1 style={{ fontFamily: "Lato, sans-serif", color: NAVY, marginBottom: 24 }}>
        Carousel-Prototyp — Spark 5
      </h1>
      <div style={{ display: "grid", gridTemplateColumns: `repeat(2, ${W}px)`, gap: 28 }}>
        {/* Slide 1 — Cover */}
        <SlideShell index={1}>
          <Kicker>News · Produkte</Kicker>
          <div
            style={{
              fontWeight: 800,
              fontSize: 34,
              lineHeight: 1.15,
              color: "#fff",
              marginTop: 8,
            }}
          >
            Spark 5 – das 50-Zoll-Display für Schaufenster &amp; Empfang
          </div>
          <div style={{ marginTop: 18, color: "rgba(255,255,255,0.7)", fontSize: 16, lineHeight: 1.4 }}>
            Wirkung über Distanz – für Lobby, Schaufenster und Konferenzhalle.
          </div>
          <div style={{ marginTop: 20, color: MAGENTA, fontSize: 15, fontWeight: 800 }}>
            Swipe →
          </div>
        </SlideShell>

        {/* Slide 2 */}
        <SlideShell index={2}>
          <Kicker>Was es kann</Kicker>
          <Bullet>24/7-Dauerbetrieb spezifiziert – gebaut für den Dauereinsatz</Bullet>
          <Bullet>450 nits Helligkeit – auch im hellen Schaufenster lesbar</Bullet>
          <Bullet>Integrierter Media Player – kein Stick, kein HDMI-Kabel</Bullet>
        </SlideShell>

        {/* Slide 3 */}
        <SlideShell index={3}>
          <Kicker>Auf einen Blick</Kicker>
          <Bullet>50 Zoll, 4K UHD – gestochen scharf auch aus der Nähe</Bullet>
          <Bullet>15.5 mm Bautiefe – wirkt wie ein gerahmtes Bild an der Wand</Bullet>
          <Bullet>Cloud-Steuerung – Inhalte von überall verwalten</Bullet>
        </SlideShell>

        {/* Slide 4 — CTA */}
        <SlideShell index={4}>
          <Kicker>Mehr erfahren</Kicker>
          <div style={{ fontWeight: 800, fontSize: 30, lineHeight: 1.2, color: "#fff", marginTop: 8 }}>
            Den ganzen Beitrag im Blog lesen
          </div>
          <div
            style={{
              marginTop: 26,
              display: "inline-flex",
              alignSelf: "flex-start",
              alignItems: "center",
              gap: 8,
              background: MAGENTA,
              color: "#fff",
              fontWeight: 800,
              fontSize: 15,
              padding: "12px 20px",
              borderRadius: 7,
            }}
          >
            meister-signage.ch →
          </div>
        </SlideShell>
      </div>
    </div>
  );
}
