import { renderOgImage, og } from "@/lib/og-image";

export const dynamic = "force-static";

export const alt = "Digital Signage kaufen – Meister Signage";
export const size = og.size;
export const contentType = og.contentType;

export default async function Image() {
  return renderOgImage({
    eyebrow: "Displays kaufen",
    title: "Einmal investieren. Dauerhaft kommunizieren.",
    subtitle: "Schlüsselfertige Digital-Signage-Displays für Gastronomie, Retail, Hotellerie und Empfang.",
  });
}
