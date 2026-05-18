import type { Metadata } from "next";
import LegacyRedirect from "@/components/LegacyRedirect";

const SITE_URL = "https://www.meister-signage.ch";
const TARGET = "/digital-signage-mieten";

export const metadata: Metadata = {
  title: { absolute: "Digital Signage mieten – Meister Signage" },
  description: "Diese Seite ist umgezogen auf /digital-signage-mieten.",
  alternates: { canonical: `${SITE_URL}${TARGET}` },
  robots: { index: false, follow: true },
};

export default function Page() {
  return <LegacyRedirect target={TARGET} />;
}
