import type { Metadata } from "next";
import LegacyRedirect from "@/components/LegacyRedirect";

const SITE_URL = "https://www.meister-signage.ch";
const TARGET = "/branchen/hotellerie";

export const metadata: Metadata = {
  title: { absolute: "Hotellerie Digital Signage – Meister Signage" },
  description: "Diese Seite ist umgezogen auf /branchen/hotellerie.",
  alternates: { canonical: `${SITE_URL}${TARGET}` },
  robots: { index: false, follow: true },
};

export default function Page() {
  return <LegacyRedirect target={TARGET} />;
}
