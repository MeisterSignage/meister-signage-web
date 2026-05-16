import { renderOgImage, og } from "@/lib/og-image";
import { getBranchenPage, getAllBranchenSlugs } from "@/lib/landingpages";

export const dynamic = "force-static";

export const alt = "Meister Signage – Branche";
export const size = og.size;
export const contentType = og.contentType;

export function generateStaticParams() {
  return getAllBranchenSlugs().map((slug) => ({ slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getBranchenPage(slug);

  if (!page) {
    return renderOgImage({
      eyebrow: "Branche",
      title: "Digital Signage Lösung",
    });
  }

  return renderOgImage({
    eyebrow: page.eyebrow,
    title: page.h1,
  });
}
