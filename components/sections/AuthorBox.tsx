import Image from "next/image";
import Link from "next/link";

/** Format an ISO date as German month + year, e.g. "Mai 2026". */
function formatMonthYearDE(iso?: string): string {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("de-CH", {
    month: "long",
    year: "numeric",
  });
}

/**
 * Sichtbare Autorenbox (E-E-A-T / GEO-Signal).
 *
 * Ergänzt das bereits vorhandene Person-/Article-Schema um ein für Leser
 * UND KI-Systeme sichtbares Autorensignal (Name, Rolle, Verweis auf Profil).
 * Bewusst ohne Client-Hooks, damit die Komponente sowohl in Server-
 * (News) als auch in Client-Templates (Wissen) funktioniert.
 */
export default function AuthorBox({ updatedISO }: { updatedISO?: string }) {
  const updated = formatMonthYearDE(updatedISO);

  return (
    <section className="w-full bg-white">
      <div className="section-inner">
        <div className="mx-auto flex max-w-2xl items-center gap-5 rounded-2xl border border-navy/10 bg-offwhite p-6">
          <Image
            src="/images/Chris-Meister.webp"
            alt="Chris Meister, Gründer von Meister Signage"
            width={76}
            height={91}
            className="shrink-0 rounded-xl object-cover"
          />
          <div className="min-w-0">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-magenta">
              Verfasst von
            </p>
            <p className="mt-1 text-[17px] font-semibold text-navy">Chris Meister</p>
            <p className="mt-0.5 text-[14px] leading-snug text-cgray">
              Gründer &amp; Inhaber von Meister Signage – Digital-Signage-Spezialist
              für KMU in der Zentralschweiz.
            </p>
            <div className="mt-2.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-[13px]">
              <Link
                href="https://www.linkedin.com/in/christopher-meister-signage/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-semibold text-navy/70 transition-colors hover:text-magenta"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                LinkedIn
              </Link>
              {updated && (
                <span className="text-cgray/60">Aktualisiert: {updated}</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
