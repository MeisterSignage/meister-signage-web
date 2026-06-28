/* Per-post carousel slide deck (auto-filled from the article).
   Stage 1: data-driven design at preview scale. Used to review content;
   the build-time exporter will render the same components at 1080×1350. */

import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { getPublishedSlugs } from "@/lib/news";
import { slideDataFromCopy, type Slide, type CarouselCopy } from "@/lib/social-content";

const NAVY = "#1a2744";
const MAGENTA = "#fe019a";
const OFFWHITE = "#f5f5f7";

const W = 384;
const H = 480; // 4:5

export function generateStaticParams() {
  return getPublishedSlugs().map((slug) => ({ slug }));
}

function readPost(slug: string) {
  const dir = path.join(process.cwd(), "content/news");
  for (const file of fs.readdirSync(dir).filter((f) => f.endsWith(".md"))) {
    const raw = fs.readFileSync(path.join(dir, file), "utf8");
    const { data, content } = matter(raw);
    const fileSlug = (data.slug as string) || file.replace(/\.md$/, "");
    if (fileSlug === slug) return { data, content };
  }
  return null;
}

function Wordmark() {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src="/logo-white.svg" alt="Meister Signage" style={{ height: 34, width: "auto" }} />;
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

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 16 }}>
      <span style={{ width: 9, height: 9, background: MAGENTA, borderRadius: 2, marginTop: 7, flexShrink: 0 }} />
      <span style={{ color: OFFWHITE, fontSize: 16, lineHeight: 1.4 }}>{children}</span>
    </div>
  );
}

function SlideShell({ children, index, total }: { children: React.ReactNode; index: number; total: number }) {
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
      <div style={{ marginTop: "auto", display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 18 }}>
        <Wordmark />
        <span style={{ color: "rgba(255,255,255,0.45)", fontSize: 12, fontWeight: 700 }}>
          {index}/{total}
        </span>
      </div>
    </div>
  );
}

function SlideBody({ slide }: { slide: Slide }) {
  if (slide.type === "hook") {
    return (
      <>
        <Kicker>Frage</Kicker>
        <div style={{ fontWeight: 800, fontSize: 30, lineHeight: 1.15, color: "#fff", marginTop: 8 }}>{slide.question}</div>
        {slide.sub && (
          <div style={{ marginTop: 16, color: "rgba(255,255,255,0.7)", fontSize: 15, lineHeight: 1.45 }}>{slide.sub}</div>
        )}
        <div style={{ marginTop: 18, color: MAGENTA, fontSize: 15, fontWeight: 800 }}>Swipe →</div>
      </>
    );
  }
  if (slide.type === "solution") {
    return (
      <>
        <Kicker>Lösung</Kicker>
        <div style={{ fontWeight: 800, fontSize: 28, lineHeight: 1.2, color: "#fff", marginTop: 8 }}>{slide.title}</div>
        {slide.sub && (
          <div style={{ marginTop: 16, color: "rgba(255,255,255,0.7)", fontSize: 15, lineHeight: 1.45 }}>{slide.sub}</div>
        )}
      </>
    );
  }
  if (slide.type === "bullets") {
    return (
      <>
        <Kicker>{slide.kicker}</Kicker>
        {slide.bullets.map((b, i) => (
          <Bullet key={i}>{b}</Bullet>
        ))}
      </>
    );
  }
  return (
    <>
      <Kicker>{slide.kicker}</Kicker>
      <div style={{ fontWeight: 800, fontSize: 28, lineHeight: 1.2, color: "#fff", marginTop: 8 }}>{slide.title}</div>
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
        {slide.cta} →
      </div>
    </>
  );
}

export default async function SocialSlidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = readPost(slug);
  if (!post) notFound();

  const copy = post.data.carousel as CarouselCopy | undefined;
  if (!copy) notFound();
  const slides = slideDataFromCopy(copy, post.data.image as string | undefined);

  return (
    <div style={{ background: "#e5e7eb", minHeight: "100vh", padding: 40 }}>
      <h1 style={{ fontFamily: "Lato, sans-serif", color: NAVY, marginBottom: 24 }}>
        Carousel — {slug} ({slides.length} Slides)
      </h1>
      <div style={{ display: "grid", gridTemplateColumns: `repeat(2, ${W}px)`, gap: 28 }}>
        {slides.map((slide, i) => (
          <SlideShell key={i} index={i + 1} total={slides.length}>
            <SlideBody slide={slide} />
          </SlideShell>
        ))}
      </div>
    </div>
  );
}
