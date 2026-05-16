"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { viewport, easeOut, staggerContainer, staggerItem } from "@/lib/motion";
import type { NewsPost } from "@/lib/news";

function formatDateDE(iso: string): string {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("de-CH", {
    day: "numeric", month: "long", year: "numeric",
  });
}

/* ─── Card ──────────────────────────────────────────────────── */

function EditorialCard({
  post,
  featured = false,
}: {
  post: NewsPost;
  featured?: boolean;
}) {
  return (
    <Link
      href={`/news/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-[22px] bg-white"
      style={{
        boxShadow:
          "0 2px 20px rgba(26,39,68,0.07), 0 0 0 1px rgba(26,39,68,0.055)",
        transition: "box-shadow 320ms cubic-bezier(0.25,0.1,0.25,1), transform 300ms cubic-bezier(0.34,1.3,0.64,1)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 12px 48px rgba(26,39,68,0.13), 0 0 0 1px rgba(26,39,68,0.08)";
        (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 2px 20px rgba(26,39,68,0.07), 0 0 0 1px rgba(26,39,68,0.055)";
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
      }}
    >
      {/* Image */}
      <div
        className={`relative w-full shrink-0 overflow-hidden ${
          featured ? "h-[300px] sm:h-[340px]" : "h-[200px] sm:h-[220px]"
        }`}
        style={{
          background: "linear-gradient(145deg, #111d38 0%, #1a2744 60%, #0d1628 100%)",
        }}
      >
        {post.image ? (
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-contain p-6 transition-transform duration-500 ease-out will-change-transform group-hover:scale-[1.04]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 58vw"
          />
        ) : (
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 40% 50%, rgba(254,1,154,0.18) 0%, transparent 60%)",
            }}
          />
        )}

        {/* Category badge — over image */}
        {post.category && (
          <div className="absolute left-4 top-4">
            <span className="rounded-full bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-sm">
              {post.category}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className={`flex flex-1 flex-col ${featured ? "p-7" : "p-5"}`}>
        {/* Date */}
        {post.date && (
          <p className="mb-3 text-[11px] font-medium tracking-wide text-navy/35">
            {formatDateDE(post.date)}
          </p>
        )}

        {/* Title */}
        <h3
          className={`mb-3 font-semibold leading-snug text-navy transition-colors duration-150 group-hover:text-magenta ${
            featured
              ? "text-[19px] sm:text-[21px]"
              : "text-[16px] sm:text-[17px]"
          }`}
          style={{ WebkitLineClamp: 3, display: "-webkit-box", WebkitBoxOrient: "vertical", overflow: "hidden" }}
        >
          {post.title}
        </h3>

        {/* Description */}
        <p
          className={`leading-relaxed text-cgray ${featured ? "text-[14px]" : "text-[13px]"}`}
          style={{ WebkitLineClamp: 2, display: "-webkit-box", WebkitBoxOrient: "vertical", overflow: "hidden" }}
        >
          {post.description}
        </p>

        {/* Read link */}
        <div className="mt-auto flex items-center gap-1.5 pt-5 text-[12px] font-bold uppercase tracking-[0.1em] text-magenta">
          Weiterlesen
          <ArrowRight
            className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-1"
            strokeWidth={2.5}
          />
        </div>
      </div>
    </Link>
  );
}

/* ─── Section ───────────────────────────────────────────────── */

type Props = {
  posts: NewsPost[];
};

export default function EditorialNewsSection({ posts }: Props) {
  const reduced = useReducedMotion();
  if (posts.length === 0) return null;

  const [featured, ...rest] = posts;

  return (
    <section className="w-full bg-white">
      <div className="section-inner">

        {/* Header */}
        <motion.div
          className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
          initial={reduced ? false : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.5, ease: easeOut }}
        >
          <div>
            <span className="eyebrow">Aktuelles</span>
            <h2
              className="mt-2 font-light text-navy"
              style={{
                fontSize: "clamp(1.75rem, 2.8vw, 2.6rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.025em",
              }}
            >
              News & Insights
            </h2>
            <p className="mt-3 max-w-md text-[15px] leading-relaxed text-cgray">
              Trends, Projekte und Ideen rund um moderne digitale Kommunikation.
            </p>
          </div>

          <Link
            href="/news"
            className="group/link inline-flex shrink-0 items-center gap-2 text-[14px] font-semibold text-navy transition-colors duration-150 hover:text-magenta"
          >
            Alle Beiträge ansehen
            <ArrowRight
              className="h-3.5 w-3.5 transition-transform duration-200 group-hover/link:translate-x-1"
              strokeWidth={2.5}
            />
          </Link>
        </motion.div>

        {/* Cards — asymmetric editorial grid */}
        {posts.length === 1 ? (
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.55, ease: easeOut }}
            className="max-w-2xl"
          >
            <EditorialCard post={featured} featured />
          </motion.div>
        ) : posts.length === 2 ? (
          <motion.div
            className="grid grid-cols-1 gap-6 sm:grid-cols-2"
            variants={staggerContainer}
            initial={reduced ? false : "hidden"}
            whileInView="visible"
            viewport={viewport}
          >
            <motion.div variants={staggerItem}>
              <EditorialCard post={posts[0]} featured />
            </motion.div>
            <motion.div variants={staggerItem}>
              <EditorialCard post={posts[1]} featured />
            </motion.div>
          </motion.div>
        ) : (
          /* 3 posts — asymmetric: featured left (7), two stacked right (5) */
          <motion.div
            className="grid grid-cols-1 gap-6 lg:grid-cols-12"
            variants={staggerContainer}
            initial={reduced ? false : "hidden"}
            whileInView="visible"
            viewport={viewport}
          >
            {/* Featured — left */}
            <motion.div
              variants={staggerItem}
              className="lg:col-span-7"
            >
              <EditorialCard post={featured} featured />
            </motion.div>

            {/* Right column — 2 stacked */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
              {rest.map((post) => (
                <motion.div key={post.slug} variants={staggerItem}>
                  <EditorialCard post={post} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Bottom micro-CTA */}
        <motion.div
          className="mt-14 flex flex-col items-center gap-4 border-t border-navy/[0.07] pt-12 text-center"
          initial={reduced ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.45, ease: easeOut }}
        >
          <p className="text-[15px] font-light text-navy/60">
            Mehr über moderne Digital-Signage-Lösungen erfahren?
          </p>
          <Link
            href="/news"
            className="inline-flex items-center gap-2 rounded-[8px] border border-navy/15 bg-offwhite px-5 py-3 text-[14px] font-semibold text-navy transition-all duration-200 hover:border-magenta/40 hover:bg-magenta/[0.04] hover:text-magenta"
          >
            Insights ansehen
            <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
