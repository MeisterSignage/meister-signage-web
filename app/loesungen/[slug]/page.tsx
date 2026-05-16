import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LandingPageTemplate from "@/components/templates/LandingPageTemplate";
import { getLoesungenPage, getAllLoesungenSlugs } from "@/lib/landingpages";

const SITE_URL = "https://www.meister-signage.ch";

/* ── Static Params ───────────────────────────────────────────── */
export function generateStaticParams() {
  return getAllLoesungenSlugs().map((slug) => ({ slug }));
}

/* ── Metadata ────────────────────────────────────────────────── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getLoesungenPage(slug);
  if (!page) return {};

  const url = `${SITE_URL}/loesungen/${slug}`;

  return {
    title: page.seoTitle,
    description: page.seoDescription,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "de_CH",
      url,
      siteName: "Meister Signage",
      title: page.seoTitle,
      description: page.seoDescription,
    },
    twitter: {
      card: "summary_large_image",
      title: page.seoTitle,
      description: page.seoDescription,
    },
  };
}

/* ── Page ────────────────────────────────────────────────────── */
export default async function LoesungenPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getLoesungenPage(slug);
  if (!page) notFound();

  return <LandingPageTemplate page={page} />;
}
