import { renderOgImage, og } from "@/lib/og-image";

export const dynamic = "force-static";

export const alt = "Digital Signage für Branchen – Meister Signage";
export const size = og.size;
export const contentType = og.contentType;

export default async function Image() {
  return renderOgImage({
    eyebrow: "Branchen",
    title: "Digital Signage für jede Branche.",
    subtitle: "Gastronomie, Retail, Hotellerie, Unternehmen und Events – branchenspezifisch geplant.",
  });
}
