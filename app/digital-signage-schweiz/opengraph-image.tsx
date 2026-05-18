import { renderOgImage, og } from "@/lib/og-image";

export const dynamic = "force-static";

export const alt = "Digital Signage Schweiz – Meister Signage";
export const size = og.size;
export const contentType = og.contentType;

export default async function Image() {
  return renderOgImage({
    eyebrow: "Digital Signage Schweiz",
    title: "Professionelle Displaylösungen für Ihren Betrieb.",
    subtitle: "Beratung, Hardware und Software aus einer Hand — persönlich betreut aus der Zentralschweiz.",
  });
}
