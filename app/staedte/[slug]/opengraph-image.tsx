import { renderOgImage, og } from "@/lib/og-image";
import { getStaedtePage, getAllStaedteSlugs } from "@/lib/landingpages";

export const dynamic = "force-static";

export const alt = "Meister Signage – Stadt";
export const size = og.size;
export const contentType = og.contentType;

export function generateStaticParams() {
  return getAllStaedteSlugs().map((slug) => ({ slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getStaedtePage(slug);

  if (!page) {
    return renderOgImage({
      eyebrow: "Standort",
      title: "Digital Signage in Ihrer Stadt",
    });
  }

  return renderOgImage({
    eyebrow: page.eyebrow,
    title: page.h1,
  });
}
