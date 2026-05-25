import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import ScrollToTop from "@/components/ScrollToTop";
import Footer from "@/components/Footer";
import FloatingSocials from "@/components/ui/FloatingSocials";
import JsonLd from "@/components/JsonLd";
import { organizationSchema } from "@/lib/schema/organization";
import { localBusinessSchema } from "@/lib/schema/localBusiness";
import { websiteSchema } from "@/lib/schema/website";
import { personSchema } from "@/lib/schema/person";
import { SITE_INDEXABLE } from "@/lib/seo-config";

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
  variable: "--font-lato",
});

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
  // Next.js App Router picks up app/favicon.ico, app/icon.svg and app/apple-icon.png
  // automatically. We list the additional PNG sizes here so Android Chrome
  // (192/512) and the PWA manifest can pick them up cleanly.
  icons: {
    icon: [
      { url: "/favicon.ico",        sizes: "any" },
      { url: "/favicon-16x16.png",  type: "image/png", sizes: "16x16" },
      { url: "/favicon-32x32.png",  type: "image/png", sizes: "32x32" },
      { url: "/icon.svg",           type: "image/svg+xml" },
      { url: "/icon-192.png",       type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png",       type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple:    [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.webmanifest",

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

  robots: SITE_INDEXABLE
    ? { index: true, follow: true }
    : {
        index: false,
        follow: false,
        nocache: true,
        googleBot: { index: false, follow: false, noimageindex: true },
      },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)",  color: "#0d1628" },
  ],
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de-CH" className={lato.variable}>
      <head>
        {/* Global structured data — Organization, LocalBusiness, WebSite */}
        <JsonLd schema={organizationSchema as Record<string, unknown>} />
        <JsonLd schema={localBusinessSchema as Record<string, unknown>} />
        <JsonLd schema={websiteSchema as Record<string, unknown>} />
        <JsonLd schema={personSchema as Record<string, unknown>} />
      </head>
      <body>
        <Nav />
        <ScrollToTop />
        <main className="mt-[69px]">{children}</main>
        <Footer />
        <FloatingSocials />
      </body>
    </html>
  );
}
