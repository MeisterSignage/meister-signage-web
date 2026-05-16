import { ImageResponse } from "next/og";

export const og = {
  size: { width: 1200, height: 630 },
  contentType: "image/png" as const,
};

type Props = {
  eyebrow: string;
  title: string;
  subtitle?: string;
};

const COLORS = {
  bg1: "#07101f",
  bg2: "#0d1628",
  bg3: "#111d38",
  magenta: "#fe019a",
  textPrimary: "#f3f4f6",
  textMuted: "rgba(209,213,219,0.85)",
  textFooter: "rgba(156,163,175,0.9)",
};

export function renderOgImage({ eyebrow, title, subtitle }: Props) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: `linear-gradient(160deg, ${COLORS.bg1} 0%, ${COLORS.bg2} 50%, ${COLORS.bg3} 100%)`,
          padding: "72px 88px",
          fontFamily: "system-ui, -apple-system, sans-serif",
          position: "relative",
          color: COLORS.textPrimary,
        }}
      >
        {/* Right magenta glow */}
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -240,
            width: 820,
            height: 820,
            background:
              "radial-gradient(ellipse, rgba(254,1,154,0.20) 0%, rgba(254,1,154,0.05) 40%, transparent 70%)",
            display: "flex",
          }}
        />
        {/* Bottom-left navy radial */}
        <div
          style={{
            position: "absolute",
            bottom: -120,
            left: -120,
            width: 600,
            height: 600,
            background:
              "radial-gradient(circle, rgba(26,39,68,0.85) 0%, transparent 70%)",
            display: "flex",
          }}
        />

        {/* Header: brand */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            zIndex: 1,
          }}
        >
          <div
            style={{
              display: "flex",
              width: 38,
              height: 38,
              borderRadius: 9,
              background:
                "linear-gradient(135deg, #fe019a 0%, #c70177 100%)",
            }}
          />
          <div
            style={{
              fontSize: 26,
              fontWeight: 800,
              letterSpacing: "-0.02em",
              color: COLORS.textPrimary,
            }}
          >
            Meister Signage
          </div>
        </div>

        {/* Vertical spacer that pushes content down */}
        <div style={{ flex: 1, display: "flex" }} />

        {/* Body */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: 980,
            zIndex: 1,
          }}
        >
          <div
            style={{
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: "0.2em",
              color: "rgba(254,1,154,0.95)",
              textTransform: "uppercase",
              marginBottom: 32,
            }}
          >
            {eyebrow}
          </div>

          <div
            style={{
              fontSize: 84,
              fontWeight: 400,
              letterSpacing: "-0.035em",
              lineHeight: 0.96,
              color: COLORS.textPrimary,
            }}
          >
            {title}
          </div>

          {subtitle && (
            <div
              style={{
                fontSize: 30,
                marginTop: 28,
                color: COLORS.textMuted,
                lineHeight: 1.3,
                maxWidth: 920,
              }}
            >
              {subtitle}
            </div>
          )}
        </div>

        {/* Vertical spacer */}
        <div style={{ flex: 1, display: "flex" }} />

        {/* Footer: accent line + URL */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            zIndex: 1,
          }}
        >
          <div
            style={{
              display: "flex",
              width: 48,
              height: 2,
              background: COLORS.magenta,
            }}
          />
          <div
            style={{
              color: COLORS.textFooter,
              fontSize: 20,
              letterSpacing: "0.04em",
              fontWeight: 500,
            }}
          >
            meister-signage.ch
          </div>
        </div>
      </div>
    ),
    og.size,
  );
}
