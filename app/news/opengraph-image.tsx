import { renderOgImage, og } from "@/lib/og-image";

export const dynamic = "force-static";

export const alt = "Digital Signage News & Blog – Meister Signage";
export const size = og.size;
export const contentType = og.contentType;

export default async function Image() {
  return renderOgImage({
    eyebrow: "News & Blog",
    title: "Tipps und Hintergründe zu Digital Signage.",
    subtitle: "Praxis aus Gastronomie, Retail, Events und Unternehmen – aus der Zentralschweiz.",
  });
}
