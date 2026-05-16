import { renderOgImage, og } from "@/lib/og-image";
import { getLoesungenPage, getAllLoesungenSlugs } from "@/lib/landingpages";

export const dynamic = "force-static";

export const alt = "Meister Signage – Lösung";
export const size = og.size;
export const contentType = og.contentType;

export function generateStaticParams() {
  return getAllLoesungenSlugs().map((slug) => ({ slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getLoesungenPage(slug);

  if (!page) {
    return renderOgImage({
      eyebrow: "Lösung",
      title: "Digital Signage Lösung",
    });
  }

  return renderOgImage({
    eyebrow: page.eyebrow,
    title: page.h1,
  });
}
