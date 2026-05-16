import { renderOgImage, og } from "@/lib/og-image";

export const dynamic = "force-static";

export const alt = "Digital Signage Kosten Schweiz – Meister Signage";
export const size = og.size;
export const contentType = og.contentType;

export default async function Image() {
  return renderOgImage({
    eyebrow: "Kosten & Preise",
    title: "Was kostet Digital Signage in der Schweiz?",
    subtitle: "Transparente Übersicht zu Miete, Kauf, Lizenz und Einrichtung – ohne versteckte Posten.",
  });
}
