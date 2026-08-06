import Image from "next/image";
import Link from "next/link";

export default function ArticleAuthor() {
  return (
    <aside className="mx-auto max-w-3xl px-6 py-10 md:px-10" aria-label="Autor und redaktionelle Verantwortung">
      <div className="flex flex-col gap-5 rounded-[10px] border border-navy/10 bg-offwhite p-6 sm:flex-row sm:items-center">
        <Image
          src="/images/Chris-Meister.webp"
          alt="Christopher Meister, Gründer und Inhaber von Meister Signage"
          width={96}
          height={112}
          className="h-24 w-20 shrink-0 rounded-[8px] object-cover"
        />
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-gold">
            Autor und fachlich verantwortlich
          </p>
          <p className="mt-1 text-lg font-bold text-navy">Christopher Meister</p>
          <p className="mt-1 text-[14px] leading-relaxed text-cgray">
            Gründer und Inhaber von Meister Signage. Fokus: Planung, Auswahl und Umsetzung
            schlüsselfertiger Digital-Signage-Lösungen für Schweizer KMU.
          </p>
          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-[13px] font-semibold">
            <Link href="/ueber-uns/" className="text-magenta hover:underline">
              Über Christopher Meister
            </Link>
            <Link href="/redaktionelle-richtlinien/" className="text-navy/70 hover:text-magenta">
              Redaktionelle Richtlinien
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
}
