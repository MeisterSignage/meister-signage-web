import type { Metadata } from "next";
import { notFound } from "next/navigation";
import WissenPageContent from "@/components/templates/WissenPageContent";
import JsonLd from "@/components/JsonLd";
import { getWissenPage, getAllWissenSlugs } from "@/lib/wissen";
import { breadcrumbSchema } from "@/lib/schema/breadcrumb";
import { faqSchema } from "@/lib/schema/faq";
import { articleSchema } from "@/lib/schema/article";

const SITE_URL = "https://www.meister-signage.ch";

export function generateStaticParams() {
  return getAllWissenSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getWissenPage(slug);
  if (!page) return {};

  const url = `${SITE_URL}/wissen/${slug}`;
  return {
    title: { absolute: page.seoTitle },
    description: page.seoDescription,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      locale: "de_CH",
      url,
      siteName: "Meister Signage",
      title: page.seoTitle,
      description: page.seoDescription,
      ...(page.heroImage
        ? { images: [{ url: `${SITE_URL}${page.heroImage}`, width: 1600, height: 900, alt: page.heroImageAlt ?? page.h1 }] }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: page.seoTitle,
      description: page.seoDescription,
      ...(page.heroImage ? { images: [`${SITE_URL}${page.heroImage}`] } : {}),
    },
  };
}

export default async function WissenDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getWissenPage(slug);
  if (!page) notFound();

  const url = `${SITE_URL}/wissen/${slug}`;

  return (
    <>
      <JsonLd
        schema={
          breadcrumbSchema([
            { name: "Home",   path: "/" },
            { name: "Wissen", path: "/wissen" },
            { name: page.h1,  path: `/wissen/${slug}` },
          ]) as Record<string, unknown>
        }
      />
      {page.faq.length > 0 && (
        <JsonLd schema={faqSchema(page.faq) as Record<string, unknown>} />
      )}
      <JsonLd
        schema={
          articleSchema({
            title: page.seoTitle,
            description: page.seoDescription,
            url,
            datePublished: page.datePublished,
            dateModified: page.dateModified,
            imageUrl: page.heroImage ? `${SITE_URL}${page.heroImage}` : undefined,
          }) as Record<string, unknown>
        }
      />

      <WissenPageContent page={page} />
    </>
  );
}
