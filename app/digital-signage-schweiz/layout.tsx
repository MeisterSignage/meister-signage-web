import type { Metadata } from "next";

const SITE_URL = "https://www.meister-signage.ch";
const PAGE_URL = `${SITE_URL}/digital-signage-schweiz`;

export const metadata: Metadata = {
  title: { absolute: "Digital Signage Schweiz | Meister Signage" },
  description:
    "Digitale Displays und moderne Digital-Signage-Lösungen für Restaurants, Hotels, Unternehmen, Retail und Events in der Schweiz.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    locale: "de_CH",
    url: PAGE_URL,
    siteName: "Meister Signage",
    title: "Digital Signage Schweiz | Meister Signage",
    description:
      "Digitale Displays und moderne Digital-Signage-Lösungen für Restaurants, Hotels, Unternehmen, Retail und Events in der Schweiz.",
    images: [
      {
        url: `${SITE_URL}/og/meister-signage-og.png`,
        width: 1200,
        height: 630,
        alt: "Digital Signage Schweiz – Meister Signage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Signage Schweiz | Meister Signage",
    description:
      "Digitale Displays und moderne Digital-Signage-Lösungen für Restaurants, Hotels, Unternehmen, Retail und Events in der Schweiz.",
  },
};

export default function DigitalSignageSchweizLayout({ children }: { children: React.ReactNode }) {
  return children;
}
