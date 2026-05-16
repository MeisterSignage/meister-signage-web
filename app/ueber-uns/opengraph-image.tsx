import { renderOgImage, og } from "@/lib/og-image";

export const dynamic = "force-static";

export const alt = "Über Meister Signage";
export const size = og.size;
export const contentType = og.contentType;

export default async function Image() {
  return renderOgImage({
    eyebrow: "Über Meister Signage",
    title: "Persönlich geplant. Sauber umgesetzt.",
    subtitle: "Direkter Ansprechpartner aus der Zentralschweiz – kein Ticketsystem, keine Hotline.",
  });
}
