"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

/**
 * Client-side redirect for legacy URLs in a Next.js static export.
 *
 * - Renders a minimal, on-brand loading state.
 * - Provides a manual fallback link for users with JavaScript disabled
 *   (and for crawlers, so the redirect target is still link-followable).
 * - The page that uses this must set metadata.robots = { index: false }
 *   so search engines don't index the legacy URL alongside its canonical.
 */
export default function LegacyRedirect({
  target,
  label,
}: {
  target: string;
  label?: string;
}) {
  const router = useRouter();

  useEffect(() => {
    router.replace(target);
  }, [router, target]);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-3 px-6 text-center">
      <p className="text-[14px] uppercase tracking-[0.18em] text-magenta/80">
        Weiterleitung
      </p>
      <p className="text-cgray">
        Diese Seite ist umgezogen.
      </p>
      <Link href={target} className="btn-primary">
        {label ?? "Zur neuen Seite"}
      </Link>
    </div>
  );
}
