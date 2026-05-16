import { renderOgImage, og } from "@/lib/og-image";

export const dynamic = "force-static";

export const alt = "Digital-Signage-Lösungen – Meister Signage";
export const size = og.size;
export const contentType = og.contentType;

export default async function Image() {
  return renderOgImage({
    eyebrow: "Lösungen",
    title: "Die richtige Lösung für jeden Einsatz.",
    subtitle: "Displays kaufen oder mieten, LED Walls, Menüboards und Indoor Signage.",
  });
}
