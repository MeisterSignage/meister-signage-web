import type { Metadata } from "next";

const SITE_URL = "https://www.meister-signage.ch";
const PAGE_URL = `${SITE_URL}/kontakt`;

export const metadata: Metadata = {
  title: { absolute: "Kontakt – Digital Signage Beratung Schweiz | Meister Signage" },
  description:
    "Kontaktieren Sie Meister Signage für persönliche Beratung rund um Digital Signage, Displays und moderne Kommunikationslösungen.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    locale: "de_CH",
    url: PAGE_URL,
    siteName: "Meister Signage",
    title: "Kontakt – Digital Signage Beratung Schweiz | Meister Signage",
    description: "Persönliche Beratung rund um Digital Signage. Direkt mit Chris Meister sprechen – kein Ticketsystem, kein Callcenter.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kontakt – Digital Signage Beratung Schweiz | Meister Signage",
    description: "Persönliche Beratung rund um Digital Signage. Direkt erreichbar – kein Ticketsystem.",
  },
};

export default function KontaktLayout({ children }: { children: React.ReactNode }) {
  return children;
}
