import { ImageResponse } from "next/og";
import fs from "node:fs";
import path from "node:path";
import type { ReactNode } from "react";
import type { Slide } from "./social-content";

export const SLIDE_SIZE = { width: 1080, height: 1350 };
export const slideContentType = "image/png" as const;

const MAGENTA = "#fe019a";
const WHITE = "#ffffff";
const OFFWHITE = "#f5f5f7";

const LOGO_WHITE = `data:image/svg+xml;base64,${fs
  .readFileSync(path.join(process.cwd(), "public/logo-white.svg"))
  .toString("base64")}`;
const LOGO_H = 60;
const LOGO_W = Math.round((LOGO_H * 1036) / 708);

function imageDataUri(publicPath: string): string | null {
  try {
    const p = path.join(process.cwd(), "public", publicPath.replace(/^\//, ""));
    const buf = fs.readFileSync(p);
    const ext = path.extname(p).toLowerCase();
    const mime = ext === ".png" ? "image/png" : ext === ".webp" ? "image/webp" : "image/jpeg";
    return `data:${mime};base64,${buf.toString("base64")}`;
  } catch {
    return null;
  }
}

function Footer({ index, total }: { index: number; total: number }) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={LOGO_WHITE} width={LOGO_W} height={LOGO_H} alt="Meister Signage" />
      <div style={{ display: "flex", color: "rgba(255,255,255,0.45)", fontSize: 30, fontWeight: 700 }}>
        {`${index}/${total}`}
      </div>
    </div>
  );
}

function Kicker({ children }: { children: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 22, marginBottom: 44 }}>
      <div style={{ display: "flex", width: 70, height: 8, background: MAGENTA, borderRadius: 4 }} />
      <div style={{ color: MAGENTA, fontSize: 32, fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase" }}>
        {children}
      </div>
    </div>
  );
}

const GRADIENT = "linear-gradient(145deg, #111d38 0%, #1a2744 60%, #0d1628 100%)";

export function renderSlide(slide: Slide, index: number, total: number) {
  // ── Pain-point hook over the post image ──────────────────────────────────
  if (slide.type === "hook") {
    const uri = slide.image ? imageDataUri(slide.image) : null;
    return new ImageResponse(
      (
        <div style={{ width: "100%", height: "100%", display: "flex", position: "relative", background: "#0b1424", fontFamily: "system-ui, sans-serif" }}>
          {uri && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={uri} width={SLIDE_SIZE.width} height={SLIDE_SIZE.height} alt="" style={{ position: "absolute", top: 0, left: 0, objectFit: "cover" }} />
          )}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: SLIDE_SIZE.width,
              height: SLIDE_SIZE.height,
              display: "flex",
              background: "linear-gradient(180deg, rgba(7,16,31,0.45) 0%, rgba(7,16,31,0.78) 58%, rgba(7,16,31,0.96) 100%)",
            }}
          />
          <div style={{ position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: 96, width: SLIDE_SIZE.width, height: SLIDE_SIZE.height }}>
            <Kicker>Kennen Sie das?</Kicker>
            <div style={{ fontSize: 80, fontWeight: 800, color: WHITE, lineHeight: 1.1, letterSpacing: "-0.02em" }}>{slide.question}</div>
            {slide.sub && <div style={{ fontSize: 38, color: "rgba(255,255,255,0.82)", lineHeight: 1.4, marginTop: 32 }}>{slide.sub}</div>}
            <div style={{ display: "flex", height: 56 }} />
            <Footer index={index} total={total} />
          </div>
        </div>
      ),
      SLIDE_SIZE
    );
  }

  // ── Standard navy slide ──────────────────────────────────────────────────
  let body: ReactNode;
  if (slide.type === "solution") {
    body = (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Kicker>Die Lösung</Kicker>
        <div style={{ fontSize: 76, fontWeight: 800, color: WHITE, lineHeight: 1.12, letterSpacing: "-0.02em" }}>{slide.title}</div>
        {slide.sub && <div style={{ fontSize: 38, color: "rgba(255,255,255,0.72)", lineHeight: 1.4, marginTop: 36 }}>{slide.sub}</div>}
      </div>
    );
  } else if (slide.type === "bullets") {
    body = (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Kicker>{slide.kicker}</Kicker>
        {slide.bullets.map((b, i) => (
          <div key={i} style={{ display: "flex", gap: 26, alignItems: "flex-start", marginBottom: 40 }}>
            <div style={{ display: "flex", width: 22, height: 22, background: MAGENTA, borderRadius: 5, marginTop: 16 }} />
            <div style={{ fontSize: 42, lineHeight: 1.35, color: OFFWHITE, maxWidth: 820 }}>{b}</div>
          </div>
        ))}
      </div>
    );
  } else {
    body = (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Kicker>{slide.kicker}</Kicker>
        <div style={{ fontSize: 72, fontWeight: 800, color: WHITE, lineHeight: 1.15, maxWidth: 880 }}>{slide.title}</div>
        <div style={{ display: "flex", marginTop: 56, background: MAGENTA, color: WHITE, fontWeight: 800, fontSize: 40, padding: "28px 44px", borderRadius: 16 }}>
          {`${slide.cta} →`}
        </div>
      </div>
    );
  }

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 96, position: "relative", background: GRADIENT, fontFamily: "system-ui, sans-serif" }}>
        <div style={{ position: "absolute", top: -260, right: -260, width: 760, height: 760, display: "flex", background: "radial-gradient(circle, rgba(254,1,154,0.22) 0%, rgba(254,1,154,0.05) 40%, transparent 70%)" }} />
        <div style={{ display: "flex" }}>{body}</div>
        <Footer index={index} total={total} />
      </div>
    ),
    SLIDE_SIZE
  );
}
