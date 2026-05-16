import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FloatingSocials from "@/components/ui/FloatingSocials";
import JsonLd from "@/components/JsonLd";
import { organizationSchema } from "@/lib/schema/organization";
import { localBusinessSchema } from "@/lib/schema/localBusiness";
import { websiteSchema } from "@/lib/schema/website";

const siteUrl = "https://www.meister-signage.ch";
const ogImage = `${siteUrl}/og/meister-signage-og.png`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Meister Signage | Digital Signage aus der Zentralschweiz",
    template: "%s | Meister Signage",
  },
  description:
    "Digital-Signage-Lösungen für Gastronomie, Retail und Events. Persönlich geplant, schlüsselfertig umgesetzt und lokal betreut.",
  keywords: [
    "digital signage",
    "digital signage luzern",
    "digital signage zentralschweiz",
    "digital signage mieten schweiz",
  ],

  // ── Favicons ────────────────────────────────────────────────────────────────
  // Next.js App Router picks up app/favicon.ico and app/apple-icon.png
  // automatically. We list them here for completeness and to add the PNG sizes.
  icons: {
    icon: [
      { url: "/favicon.ico",        sizes: "any" },
      { url: "/favicon-16x16.png",  type: "image/png", sizes: "16x16" },
      { url: "/favicon-32x32.png",  type: "image/png", sizes: "32x32" },
    ],
    shortcut: "/favicon.ico",
    apple:    [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },

  // ── Open Graph ──────────────────────────────────────────────────────────────
  openGraph: {
    type:        "website",
    locale:      "de_CH",
    url:         siteUrl,
    siteName:    "Meister Signage",
    title:       "Meister Signage | Digital Signage aus der Zentralschweiz",
    description: "Digital-Signage-Lösungen für Gastronomie, Retail und Events. Persönlich geplant, schlüsselfertig umgesetzt und lokal betreut.",
    images: [
      {
        url:    ogImage,
        width:  1200,
        height: 630,
        alt:    "Meister Signage – Digital Signage aus der Zentralschweiz",
      },
    ],
  },

  // ── Twitter / X Card ────────────────────────────────────────────────────────
  twitter: {
    card:        "summary_large_image",
    title:       "Meister Signage | Digital Signage aus der Zentralschweiz",
    description: "Digital-Signage-Lösungen für Gastronomie, Retail und Events. Persönlich geplant, schlüsselfertig umgesetzt und lokal betreut.",
    images:      [ogImage],
  },

  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de-CH">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap" rel="stylesheet" />
        {/* Global structured data — Organization, LocalBusiness, WebSite */}
        <JsonLd schema={organizationSchema as Record<string, unknown>} />
        <JsonLd schema={localBusinessSchema as Record<string, unknown>} />
        <JsonLd schema={websiteSchema as Record<string, unknown>} />
      </head>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
        <FloatingSocials />
      </body>
    </html>
  );
}
