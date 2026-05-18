import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CalendarDays, Tag } from "lucide-react";
import {
  getPublishedSlugs,
  getPostBySlug,
  formatDateDE,
} from "@/lib/news";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema/breadcrumb";
import { articleSchema } from "@/lib/schema/article";
import CTASection from "@/components/sections/CTASection";

const SITE_URL = "https://www.meister-signage.ch";

/* ─── Static params ─────────────────────────────────────────── */
export async function generateStaticParams() {
  return getPublishedSlugs().map((slug) => ({ slug }));
}

/* ─── Metadata ──────────────────────────────────────────────── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const url = `${SITE_URL}/news/${post.slug}`;
  const ogImage = post.image
    ? `${SITE_URL}${post.image}`
    : `${SITE_URL}/og/meister-signage-og.png`;

  return {
    title: `${post.title} | Meister Signage`,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      locale: "de_CH",
      url,
      siteName: "Meister Signage",
      title: post.title,
      description: post.description,
      publishedTime: post.dateISO,
      images: [{ url: ogImage, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [ogImage],
    },
  };
}

/* ─── Page ──────────────────────────────────────────────────── */
export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const pageUrl = `${SITE_URL}/news/${post.slug}`;
  const ogImage = post.image
    ? `${SITE_URL}${post.image}`
    : `${SITE_URL}/og/meister-signage-og.png`;

  return (
    <>
      {/* Structured data */}
      <JsonLd
        schema={
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "News", path: "/news" },
            { name: post.title, path: `/news/${post.slug}` },
          ]) as Record<string, unknown>
        }
      />
      <JsonLd
        schema={
          articleSchema({
            title: post.title,
            description: post.description,
            url: pageUrl,
            datePublished: post.dateISO,
            imageUrl: ogImage,
          }) as Record<string, unknown>
        }
      />

      {/* Article header */}
      <section className="relative w-full bg-offwhite">
        <div className="section-inner">
          {/* Back link */}
          <Link
            href="/news"
            className="mb-8 inline-flex items-center gap-1.5 text-[13px] font-semibold text-navy/50 transition-colors hover:text-magenta"
          >
            <ArrowLeft className="h-3.5 w-3.5" strokeWidth={2.5} />
            Alle Beiträge
          </Link>

          {/* Category + date */}
          <div className="mb-4 flex flex-wrap items-center gap-3">
            {post.category && (
              <span className="flex items-center gap-1 rounded-full bg-magenta/8 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-magenta">
                <Tag className="h-2.5 w-2.5" strokeWidth={2.5} />
                {post.category}
              </span>
            )}
            {post.date && (
              <span className="flex items-center gap-1.5 text-[12px] text-navy/40">
                <CalendarDays className="h-3 w-3" strokeWidth={2} />
                {formatDateDE(post.date)}
              </span>
            )}
          </div>

          {/* Title */}
          <h1 className="hero-title max-w-3xl text-navy">{post.title}</h1>

          {/* Description */}
          <p className="mt-4 max-w-2xl text-[17px] leading-relaxed text-cgray">
            {post.description}
          </p>
        </div>
      </section>

      {/* Featured image */}
      {post.image && (
        <div className="w-full bg-white">
          <div className="mx-auto max-w-content px-6 py-8 md:px-10">
            <div className="relative h-[260px] w-full overflow-hidden rounded-2xl bg-offwhite sm:h-[340px] md:h-[420px]">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-contain p-6"
          fetchPriority="high"
              />
            </div>
          </div>
        </div>
      )}

      {/* Article body */}
      <article className="w-full bg-white">
        <div className="mx-auto max-w-content px-6 pb-16 md:px-10">
          <div
            className="prose-article mx-auto max-w-2xl"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>

      {/* CTA */}
      <CTASection
        eyebrow="Projekt besprechen"
        title="Interesse an Digital Signage für Ihren Betrieb?"
        subtitle="Kurz erklären, was Sie vorhaben – wir zeigen Ihnen, welche Lösung sinnvoll ist."
        primaryCta={{ label: "Beratung anfragen", href: "/kontakt" }}
        secondaryCta={{ label: "Lösungen ansehen", href: "/digital-signage-schweiz" }}
      />
    </>
  );
}
