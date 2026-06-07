import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { getPublishedPosts, formatDateDE } from "@/lib/news";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema/breadcrumb";

const SITE_URL = "https://www.meister-signage.ch";
const PAGE_URL = `${SITE_URL}/news`;

export const metadata: Metadata = {
  title: { absolute: "Digital Signage News & Blog – Tipps Schweiz | Meister Signage" },
  description:
    "Tipps, Neuigkeiten und Hintergründe rund um Digital Signage – für Gastronomie, Retail, Events und Unternehmen aus der Zentralschweiz.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    locale: "de_CH",
    url: PAGE_URL,
    siteName: "Meister Signage",
    title: "Digital Signage News & Blog – Tipps aus der Schweiz | Meister Signage",
    description:
      "Tipps, Neuigkeiten und Hintergründe rund um Digital Signage.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Signage News & Blog – Tipps aus der Schweiz | Meister Signage",
    description: "Tipps und Hintergründe rund um Digital Signage.",
  },
};

export default function NewsPage() {
  const posts = getPublishedPosts();

  return (
    <>
      <JsonLd
        schema={
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "News", path: "/news" },
          ]) as Record<string, unknown>
        }
      />

      {/* Hero */}
      <section className="relative w-full bg-offwhite">
        <div className="section-inner">
          <span className="eyebrow">Blog & News</span>
          <h1 className="hero-title mt-2 max-w-2xl text-navy">
            Digital Signage News & Insights
          </h1>
          <p className="mt-4 max-w-2xl text-[17px] leading-relaxed text-cgray">
            Tipps, Neuigkeiten und Hintergründe rund um Digital Signage –
            für Gastronomie, Retail, Hotellerie, Unternehmen und Events. Hier teilen wir
            Praxiserfahrungen aus unseren Schweizer Kundenprojekten, neue Hardware-Tests,
            Software-Updates und Trends, die sich tatsächlich im Alltag bewähren.
          </p>
          <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-cgray/90">
            Jeden Dienstag um 06:00 Uhr erscheint ein neuer Beitrag, automatisch publiziert
            über unsere Content-Pipeline. Die Schwerpunkte: Branchenleitfäden (Gastronomie,
            Retail, Hotellerie), Hardware-Vorstellungen aus der Spark-Reihe, Kosten- und
            Mietmodell-Vergleiche, sowie technische Hintergründe zu Stromverbrauch, 4G-LTE-Anbindung,
            Outdoor-Tauglichkeit und Software-Bedienung. Wir vermeiden Marketing-Floskeln und
            schreiben so, wie wir auch mit Kunden am Telefon sprechen würden – konkret,
            ehrlich, mit Zahlen statt Versprechen.
          </p>
        </div>
      </section>

      {/* Post grid */}
      <section className="w-full bg-white">
        <div className="absolute inset-x-0 h-px bg-navy/6" aria-hidden="true" />
        <div className="section-inner">
          {posts.length === 0 ? (
            <p className="text-center text-cgray">
              Noch keine Beiträge vorhanden.
            </p>
          ) : (
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/news/${post.slug}`}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-navy/8 bg-white transition-all duration-200 hover:-translate-y-0.5 hover:border-navy/16 hover:shadow-[0_8px_32px_rgba(26,39,68,0.08)]"
                >
                  {/* Thumbnail */}
                  <div className="relative h-[200px] w-full overflow-hidden bg-offwhite">
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

                  {/* Meta */}
                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <div className="flex items-center gap-3">
                      {post.category && (
                        <span className="rounded-full bg-magenta/8 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-magenta">
                          {post.category}
                        </span>
                      )}
                      <span className="text-[11px] text-navy/65">
                        {formatDateDE(post.date)}
                      </span>
                    </div>

                    <h2 className="text-[16px] font-semibold leading-snug text-navy transition-colors group-hover:text-magenta">
                      {post.title}
                    </h2>

                    <p className="line-clamp-3 text-[13px] leading-relaxed text-cgray">
                      {post.description}
                    </p>

                    <div className="mt-auto flex items-center gap-1.5 pt-2 text-[12px] font-semibold text-magenta">
                      Weiterlesen
                      <ArrowRight
                        className="h-3 w-3 transition-transform group-hover:translate-x-0.5"
                        strokeWidth={2.5}
                      />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
