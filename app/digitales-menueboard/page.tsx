import type { Metadata } from "next";
import LegacyRedirect from "@/components/LegacyRedirect";

const SITE_URL = "https://www.meister-signage.ch";
const TARGET = "/loesungen/digitale-menueboards";

export const metadata: Metadata = {
  title: { absolute: "Digitale Menüboards – Meister Signage" },
  description: "Diese Seite ist umgezogen auf /loesungen/digitale-menueboards.",
  alternates: { canonical: `${SITE_URL}${TARGET}` },
  robots: { index: false, follow: true },
};

export default function Page() {
  return <LegacyRedirect target={TARGET} />;
}
