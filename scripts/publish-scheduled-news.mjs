#!/usr/bin/env node
/**
 * Publish-Scheduled News Posts
 *
 * Iterates over content/news/*.md and changes any post where:
 *   - status: scheduled
 *   - date is in the past (≤ now)
 * to:
 *   - status: published
 *
 * Used by .github/workflows/publish-scheduled.yml on a weekly cron.
 *
 * Exits with 0 in all cases. The workflow checks `git status` afterwards
 * to decide whether to commit and push.
 */

import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const NEWS_DIR = path.resolve(process.cwd(), "content", "news");

async function main() {
  const now = Date.now();
  const files = (await readdir(NEWS_DIR)).filter((f) => f.endsWith(".md"));

  let flipped = 0;
  for (const file of files) {
    const full = path.join(NEWS_DIR, file);
    const raw = await readFile(full, "utf8");

    // Frontmatter sits between the first two --- lines.
    const fmMatch = raw.match(/^---\n([\s\S]*?)\n---/);
    if (!fmMatch) continue;
    const frontmatter = fmMatch[1];

    const statusMatch = frontmatter.match(/^status:\s*(\S+)\s*$/m);
    const dateMatch   = frontmatter.match(/^date:\s*"([^"]+)"\s*$/m);
    if (!statusMatch || !dateMatch) continue;

    const status = statusMatch[1].toLowerCase();
    const dateRaw = dateMatch[1];
    const dateMs = Date.parse(dateRaw);

    if (status !== "scheduled") continue;
    if (Number.isNaN(dateMs)) {
      console.warn(`[skip] ${file}: invalid date "${dateRaw}"`);
      continue;
    }
    if (dateMs > now) continue; // not due yet

    const updated = raw.replace(/^status:\s*scheduled\s*$/m, "status: published");
    if (updated !== raw) {
      await writeFile(full, updated, "utf8");
      flipped++;
      console.log(`[publish] ${file} (scheduled date ${dateRaw})`);
    }
  }

  console.log(`\nDone. ${flipped} post(s) flipped from scheduled → published.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
