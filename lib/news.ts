import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const NEWS_DIR = path.join(process.cwd(), "content/news");

export type NewsPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  image?: string;
  status: "published" | "draft";
  /** ISO date string, used for sorting */
  dateISO: string;
};

export type NewsPostWithContent = NewsPost & {
  content: string; // rendered HTML
};

/* ─── Read and parse all posts ─────────────────────────────── */
function readAllPosts(): NewsPost[] {
  if (!fs.existsSync(NEWS_DIR)) return [];

  const files = fs.readdirSync(NEWS_DIR).filter((f) => f.endsWith(".md"));

  return files.map((filename) => {
    const raw = fs.readFileSync(path.join(NEWS_DIR, filename), "utf-8");
    const { data } = matter(raw);

    const slug =
      (data.slug as string) || filename.replace(/\.md$/, "");

    return {
      slug,
      title:       (data.title       as string)  ?? "Kein Titel",
      description: (data.description as string)  ?? "",
      date:        (data.date        as string)  ?? "",
      category:    (data.category    as string)  ?? "",
      image:       (data.image       as string | undefined),
      status:      (data.status      as "published" | "draft") ?? "draft",
      dateISO:     data.date ? new Date(data.date as string).toISOString() : "",
    };
  });
}

/* ─── Public helpers ────────────────────────────────────────── */

/** All published posts, sorted newest-first */
export function getPublishedPosts(): NewsPost[] {
  return readAllPosts()
    .filter((p) => p.status === "published")
    .sort((a, b) => (a.dateISO < b.dateISO ? 1 : -1));
}

/** Latest N published posts */
export function getLatestPosts(n = 3): NewsPost[] {
  return getPublishedPosts().slice(0, n);
}

/** Slugs of all published posts (for generateStaticParams) */
export function getPublishedSlugs(): string[] {
  return getPublishedPosts().map((p) => p.slug);
}

/** Single published post with rendered HTML content */
export function getPostBySlug(slug: string): NewsPostWithContent | null {
  if (!fs.existsSync(NEWS_DIR)) return null;

  const files = fs.readdirSync(NEWS_DIR).filter((f) => f.endsWith(".md"));

  for (const filename of files) {
    const raw = fs.readFileSync(path.join(NEWS_DIR, filename), "utf-8");
    const { data, content } = matter(raw);

    const fileSlug =
      (data.slug as string) || filename.replace(/\.md$/, "");

    if (fileSlug === slug && data.status === "published") {
      return {
        slug:        fileSlug,
        title:       (data.title       as string)  ?? "",
        description: (data.description as string)  ?? "",
        date:        (data.date        as string)  ?? "",
        category:    (data.category    as string)  ?? "",
        image:       (data.image       as string | undefined),
        status:      "published",
        dateISO:     data.date ? new Date(data.date as string).toISOString() : "",
        content:     marked(content) as string,
      };
    }
  }

  return null;
}

/** Human-readable date in German (e.g. "8. Mai 2025") */
export function formatDateDE(iso: string): string {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("de-CH", {
    day:   "numeric",
    month: "long",
    year:  "numeric",
  });
}

/** Month + year in German (e.g. "Mai 2026") — used for "Zuletzt aktualisiert" labels */
export function formatMonthYearDE(iso: string): string {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("de-CH", {
    month: "long",
    year:  "numeric",
  });
}
