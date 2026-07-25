import type { Metadata } from "next";

const SITE_URL = "https://www.meister-signage.ch";
const PAGE_URL = `${SITE_URL}/digital-signage-schweiz`;

export const metadata: Metadata = {
  title: { absolute: "Digital Signage schweizweit – Lösungen für jede Branche | Meister Signage" },
  description:
    "Digital Signage schweizweit geliefert, installiert und betreut – Lösungen für Gastronomie, Hotellerie, Retail, Unternehmen und Events. Persönlicher Service, transparente Preise.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    locale: "de_CH",
    url: PAGE_URL,
    siteName: "Meister Signage",
    title: "Digital Signage schweizweit – Lösungen für jede Branche | Meister Signage",
    description:
      "Digital Signage schweizweit geliefert, installiert und betreut – Lösungen für Gastronomie, Hotellerie, Retail, Unternehmen und Events. Persönlicher Service, transparente Preise.",
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
    title: "Digital Signage schweizweit – Lösungen für jede Branche | Meister Signage",
    description:
      "Digital Signage schweizweit geliefert, installiert und betreut – Lösungen für Gastronomie, Hotellerie, Retail, Unternehmen und Events. Persönlicher Service, transparente Preise.",
  },
};

export default function DigitalSignageSchweizLayout({ children }: { children: React.ReactNode }) {
  return children;
}
