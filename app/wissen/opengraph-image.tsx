import { renderOgImage, og } from "@/lib/og-image";

export const dynamic = "force-static";

export const alt = "Wissen & Ratgeber – Meister Signage";
export const size = og.size;
export const contentType = og.contentType;

export default async function Image() {
  return renderOgImage({
    eyebrow: "Wissen",
    title: "Digital Signage verstehen.",
    subtitle: "Ratgeber, Entscheidungshilfen und Fachwissen — verständlich erklärt für Einsteiger und Profis.",
  });
}
