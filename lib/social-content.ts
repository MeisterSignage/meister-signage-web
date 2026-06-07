/**
 * Shared extraction logic for social slides/carousels.
 *
 * Turns a news article's raw markdown body into structured slide content
 * (cover + bullet slides + CTA). Used by the carousel slide page
 * (app/social-slide/[slug]) and the build-time exporter.
 */

export type Slide =
  | { type: "hook"; question: string; sub?: string; image?: string }
  | { type: "solution"; title: string; sub?: string }
  | { type: "bullets"; kicker: string; bullets: string[] }
  | { type: "cta"; kicker: string; title: string; cta: string };

/** Authored, sales-psychology carousel copy stored per post (frontmatter `carousel`). */
export type CarouselCopy = {
  hook: string;
  hookSub?: string;
  solution: string;
  solutionSub?: string;
  benefits: string[];
  cta?: string;
};

/** Constant trust/proof slide — same for every post (brand consistency). */
export const PROOF_BULLETS = [
  "Schweizer Displays für den 24/7-Dauerbetrieb",
  "Kauf oder Miete – planbar für KMU",
  "Persönliche Beratung – von der Skizze bis zur Montage",
];

/**
 * Build the sales-psychology carousel (always 4–6 slides):
 * Pain-Hook → Lösung → Nutzen → (ggf. mehr Nutzen) → Warum wir → CTA.
 */
export function slideDataFromCopy(copy: CarouselCopy, image?: string): Slide[] {
  const benefits = (copy.benefits || []).slice(0, 6);
  const slides: Slide[] = [];

  slides.push({ type: "hook", question: copy.hook, sub: copy.hookSub, image });
  slides.push({ type: "solution", title: copy.solution, sub: copy.solutionSub });

  if (benefits.length <= 3) {
    slides.push({ type: "bullets", kicker: "Was es bringt", bullets: benefits });
  } else {
    slides.push({ type: "bullets", kicker: "Was es bringt", bullets: benefits.slice(0, 3) });
    slides.push({ type: "bullets", kicker: "Und ausserdem", bullets: benefits.slice(3) });
  }

  slides.push({ type: "bullets", kicker: "Warum Meister Signage", bullets: PROOF_BULLETS });
  slides.push({
    type: "cta",
    kicker: "Mehr erfahren",
    title: copy.cta || "Displays für Ihren Betrieb?",
    cta: "meister-signage.ch",
  });

  return slides; // 5 slides (3 benefits) or 6 (4–6 benefits)
}

export function stripInline(s: string): string {
  return s
    .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/\*\*(.+?)\*\*/g, "$1")
    .replace(/\*(.+?)\*/g, "$1")
    .replace(/__(.+?)__/g, "$1")
    .replace(/_(.+?)_/g, "$1")
    .replace(/`(.+?)`/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
}

export function proseParagraphs(body: string, max: number): string[] {
  const out: string[] = [];
  for (const block of body.split(/\n\s*\n/)) {
    const t = block.trim();
    if (!t) continue;
    if (/^(#|>|\||!\[)/.test(t)) continue;
    if (/^([-*+]\s|\d+\.\s)/.test(t)) continue;
    out.push(stripInline(t));
    if (out.length >= max) break;
  }
  return out;
}

export function firstParagraph(body: string): string {
  return proseParagraphs(body, 1)[0] || "";
}

export function firstSentence(text: string, maxLen = 140): string {
  const m = text.match(/^(.+?[.!?])(\s|$)/);
  let s = m ? m[1] : text;
  if (s.length > maxLen) s = s.slice(0, maxLen - 1).trim() + "…";
  return s;
}

export function keyPoints(body: string, max = 6): string[] {
  const pts: string[] = [];
  for (const line of body.split(/\n/)) {
    const m =
      line.match(/^\s*\d+\.\s*\*\*(.+?)\*\*/) ||
      line.match(/^\s*\*\*\d+\.\s*(.+?)\*\*/) ||
      line.match(/^\s*[-*+]\s*\*\*(.+?)\*\*/);
    if (!m) continue;
    const label = stripInline(m[1]).replace(/[.:–—-]+\s*$/, "").trim();
    if (!label || label.length > 64 || label.includes("?") || /["“”]/.test(label)) continue;
    if (!pts.includes(label)) pts.push(label);
    if (pts.length >= max) break;
  }
  return pts;
}

// (Legacy auto-extraction slideData removed — carousels now use authored
// `carousel` copy via slideDataFromCopy. The helpers above are kept for reuse.)
