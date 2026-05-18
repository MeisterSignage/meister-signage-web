import type { Metadata } from "next";
import LegacyRedirect from "@/components/LegacyRedirect";

const SITE_URL = "https://www.meister-signage.ch";
const TARGET = "/branchen/gastronomie";

export const metadata: Metadata = {
  title: { absolute: "Gastronomie Digital Signage – Meister Signage" },
  description: "Diese Seite ist umgezogen auf /branchen/gastronomie.",
  alternates: { canonical: `${SITE_URL}${TARGET}` },
  robots: { index: false, follow: true },
};

export default function Page() {
  return <LegacyRedirect target={TARGET} />;
}
