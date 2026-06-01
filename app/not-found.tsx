import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Seite nicht gefunden | Meister Signage",
  description: "Die gesuchte Seite existiert nicht oder wurde verschoben.",
  robots: { index: false, follow: false },
};

const NOISE =
  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")";

export default function NotFound() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #07101f 0%, #0d1628 50%, #111d38 100%)",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        aria-hidden="true"
        style={{ backgroundImage: NOISE, backgroundSize: "160px 160px" }}
      />
      <div
        className="pointer-events-none absolute -right-40 top-0 h-full w-[700px]"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 80% 40%, rgba(254,1,154,0.10) 0%, transparent 65%)",
        }}
      />
      <div
        className="pointer-events-none absolute -bottom-20 -left-20 h-[500px] w-[500px]"
        aria-hidden="true"
        style={{
          background: "radial-gradient(circle, rgba(26,39,68,0.8) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto flex max-w-[1200px] flex-col items-center justify-center px-6 py-24 text-center md:min-h-[60vh] md:px-10 lg:min-h-[65vh]">
        <span
          className="mb-8 text-[11px] font-bold uppercase tracking-[0.18em]"
          style={{ color: "rgba(254,1,154,0.9)" }}
        >
          Fehler 404
        </span>

        <p
          className="mb-6 font-light leading-none tracking-tight"
          style={{
            fontSize: "clamp(5rem, 14vw, 11rem)",
            letterSpacing: "-0.05em",
            color: "rgba(243,244,246,0.12)",
          }}
        >
          404
        </p>

        <h1
          className="mb-6 font-light leading-[0.95] tracking-tight"
          style={{
            fontSize: "clamp(2rem, 3.8vw, 3.4rem)",
            letterSpacing: "-0.035em",
            color: "#f3f4f6",
            maxWidth: "20ch",
          }}
        >
          Diese Seite existiert nicht.
        </h1>

        <p
          className="mb-10 leading-relaxed"
          style={{
            maxWidth: "440px",
            fontSize: "clamp(1rem, 1.5vw, 1.15rem)",
            color: "rgba(209,213,219,0.9)",
          }}
        >
          Die gesuchte Seite wurde verschoben oder hat nie existiert. Hier finden Sie wieder zurück oder schreiben uns direkt.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/" className="btn-primary gap-2.5">
            <ArrowLeft className="h-4 w-4 shrink-0" strokeWidth={2} />
            Zur Startseite
          </Link>
          <Link
            href="/kontakt/"
            className="inline-flex items-center gap-2.5 rounded-[7px] px-6 py-3.5 text-[15px] font-semibold transition-all duration-200"
            style={{
              border: "1px solid rgba(255,255,255,0.14)",
              color: "#e5e7eb",
              minHeight: "3.5rem",
            }}
          >
            Kontakt aufnehmen
            <ArrowRight className="h-4 w-4 shrink-0" strokeWidth={2} />
          </Link>
        </div>
      </div>
    </section>
  );
}
