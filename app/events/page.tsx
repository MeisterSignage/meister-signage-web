import type { Metadata } from "next";
import LegacyRedirect from "@/components/LegacyRedirect";

const SITE_URL = "https://www.meister-signage.ch";
const TARGET = "/branchen/events";

export const metadata: Metadata = {
  title: { absolute: "Events Digital Signage – Meister Signage" },
  description: "Diese Seite ist umgezogen auf /branchen/events.",
  alternates: { canonical: `${SITE_URL}${TARGET}` },
  robots: { index: false, follow: true },
};

export default function Page() {
  return <LegacyRedirect target={TARGET} />;
}
