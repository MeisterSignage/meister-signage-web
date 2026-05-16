import { renderOgImage, og } from "@/lib/og-image";

export const dynamic = "force-static";

export const alt = "Meister Signage – Digital Signage Schweiz";
export const size = og.size;
export const contentType = og.contentType;

export default async function Image() {
  return renderOgImage({
    eyebrow: "Digital Signage Schweiz",
    title: "Schlüsselfertige Display-Lösungen.",
    subtitle: "Persönlich geplant in der Zentralschweiz – für Gastronomie, Retail, Hotellerie und Unternehmen.",
  });
}
