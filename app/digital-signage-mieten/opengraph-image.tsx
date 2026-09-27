import { renderOgImage, og } from "@/lib/og-image";

export const dynamic = "force-static";

export const alt = "Digital Signage mieten – Meister Signage";
export const size = og.size;
export const contentType = og.contentType;

export default async function Image() {
  return renderOgImage({
    eyebrow: "Displays mieten",
    title: "Mieten. Passend zu Ihrem Einsatz.",
    subtitle: "Ab CHF 119 pro Display und Monat bei 12 Monaten Laufzeit. Einrichtung, Lizenz und Wandhalterung inklusive.",
  });
}
