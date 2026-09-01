import type { Metadata } from "next";
import Link from "next/link";

const TARGET_URL =
  "https://www.meister-signage.ch/wissen/was-ist-digital-signage/";

export const metadata: Metadata = {
  title: "Was ist Digital Signage? | Meister Signage",
  description:
    "Der aktualisierte Ratgeber erklärt Definition, Funktionsweise, Kosten und Einsatzgebiete von Digital Signage.",
  alternates: { canonical: TARGET_URL },
  robots: { index: false, follow: true },
  other: { refresh: `0; url=${TARGET_URL}` },
};

export default function WasIstDigitalSignageLegacyPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-24 text-center">
      <p className="eyebrow">Ratgeber verschoben</p>
      <h1 className="mt-4 text-4xl font-light text-[var(--navy)]">
        Was ist Digital Signage?
      </h1>
      <p className="mt-6 text-base leading-7 text-[var(--cgray)]">
        Der aktualisierte und erweiterte Ratgeber befindet sich jetzt im
        Wissensbereich.
      </p>
      <Link className="btn-primary mt-8 inline-flex" href="/wissen/was-ist-digital-signage/">
        Zum aktuellen Ratgeber
      </Link>
    </main>
  );
}
