import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { type NewsPost, formatDateDE } from "@/lib/news";

type LatestNewsSectionProps = {
  posts: NewsPost[];
  eyebrow?: string;
  title?: string;
  subtitle?: string;
};

export default function LatestNewsSection({
  posts,
  eyebrow = "Aktuelles",
  title = "News & Insights",
  subtitle = "Tipps, Neuigkeiten und Hintergründe rund um Digital Signage.",
}: LatestNewsSectionProps) {
  if (posts.length === 0) return null;

  return (
    <section className="relative w-full bg-white">
      <div className="absolute inset-x-0 top-0 h-px bg-navy/6" aria-hidden="true" />

      <div className="section-inner">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="eyebrow">{eyebrow}</span>
            <h2 className="heading-max-2 mt-1 text-[clamp(1.6rem,2.4vw,2.2rem)] font-light tracking-tight text-navy">
              {title}
            </h2>
            <p className="mt-2 max-w-md text-[15px] text-cgray">{subtitle}</p>
          </div>
          <Link
            href="/news"
            className="inline-flex shrink-0 items-center gap-1.5 text-[14px] font-semibold text-magenta transition-colors hover:text-magenta/70"
          >
            Alle Beiträge
            <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} />
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <NewsCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}

function NewsCard({ post }: { post: NewsPost }) {
  return (
    <Link
      href={`/news/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-navy/8 bg-white transition-all duration-200 hover:-translate-y-0.5 hover:border-navy/16 hover:shadow-[0_8px_32px_rgba(26,39,68,0.08)]"
    >
      {/* Image */}
      <div className="relative h-[190px] w-full overflow-hidden bg-offwhite">
        {post.image ? (
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-contain p-4 transition-transform duration-300 group-hover:scale-[1.03]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <div className="h-12 w-12 rounded-full bg-magenta/10" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        {/* Category + date */}
        <div className="flex items-center gap-3">
          {post.category && (
            <span className="rounded-full bg-magenta/8 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-magenta">
              {post.category}
            </span>
          )}
          {post.date && (
            <span className="text-[11px] text-navy/35">
              {formatDateDE(post.date)}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-[15px] font-semibold leading-snug text-navy transition-colors duration-150 group-hover:text-magenta">
          {post.title}
        </h3>

        {/* Description */}
        <p className="line-clamp-2 text-[13px] leading-relaxed text-cgray">
          {post.description}
        </p>

        {/* Read more */}
        <div className="mt-auto flex items-center gap-1.5 pt-1 text-[12px] font-semibold text-magenta">
          Weiterlesen
          <ArrowRight className="h-3 w-3 transition-transform duration-150 group-hover:translate-x-0.5" strokeWidth={2.5} />
        </div>
      </div>
    </Link>
  );
}
