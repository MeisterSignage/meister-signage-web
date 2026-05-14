import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Meister Signage – Digital Signage Luzern & Zentralschweiz",
    template: "%s | Meister Signage",
  },
  description: "Schlüsselfertige Digital-Signage-Lösungen für Gastronomie, Retail und Events in der Zentralschweiz. Persönlich betreut. Kein IT-Aufwand.",
  keywords: ["digital signage luzern","digital signage zentralschweiz","digital signage mieten schweiz"],
  openGraph: { siteName: "Meister Signage", locale: "de_CH", type: "website" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de-CH">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap" rel="stylesheet" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Meister Signage",
          description: "Digital-Signage-Lösungen für Gastronomie, Retail und Events in der Zentralschweiz",
          url: "https://www.meister-signage.ch",
          areaServed: [{ "@type": "City", name: "Luzern" },{ "@type": "State", name: "Zentralschweiz" }],
          serviceType: "Digital Signage",
        })}} />
      </head>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
