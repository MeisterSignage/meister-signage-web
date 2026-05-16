import { renderOgImage, og } from "@/lib/og-image";

export const dynamic = "force-static";

export const alt = "Kontakt – Meister Signage";
export const size = og.size;
export const contentType = og.contentType;

export default async function Image() {
  return renderOgImage({
    eyebrow: "Kontakt",
    title: "Lassen Sie uns Ihr Projekt besprechen.",
    subtitle: "Direkter Kontakt zu Chris Meister – Antwort innert 24 Stunden.",
  });
}
