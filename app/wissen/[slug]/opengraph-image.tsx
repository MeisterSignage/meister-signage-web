import { renderOgImage, og } from "@/lib/og-image";
import { getWissenPage, getAllWissenSlugs } from "@/lib/wissen";

export const dynamic = "force-static";

export const alt = "Meister Signage – Wissen";
export const size = og.size;
export const contentType = og.contentType;

export function generateStaticParams() {
  return getAllWissenSlugs().map((slug) => ({ slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getWissenPage(slug);

  if (!page) {
    return renderOgImage({
      eyebrow: "Wissen",
      title: "Digital Signage Ratgeber",
    });
  }

  return renderOgImage({
    eyebrow: page.eyebrow,
    title: page.h1,
  });
}
