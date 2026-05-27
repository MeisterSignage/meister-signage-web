import { renderOgImage, og } from "@/lib/og-image";

export const dynamic = "force-static";

export const alt = "Digital Signage mieten – Meister Signage";
export const size = og.size;
export const contentType = og.contentType;

export default async function Image() {
  return renderOgImage({
    eyebrow: "Displays mieten",
    title: "Flexibel einsetzen. Ohne Bindung.",
    subtitle: "Digital-Signage-Screens ab CHF 129 – inklusive Lizenz, persönlich aus der Schweiz betreut.",
  });
}
