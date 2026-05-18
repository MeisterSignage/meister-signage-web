import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Meister Signage",
    short_name: "Meister Signage",
    description:
      "Digital Signage aus der Zentralschweiz – Displays kaufen, mieten und zentral steuern.",
    start_url: "/",
    display: "standalone",
    background_color: "#0d1628",
    theme_color: "#0d1628",
    icons: [
      { src: "/icon-192.png",        sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png",        sizes: "512x512", type: "image/png" },
      { src: "/icon-192.png",        sizes: "192x192", type: "image/png", purpose: "maskable" },
      { src: "/icon-512.png",        sizes: "512x512", type: "image/png", purpose: "maskable" },
      { src: "/icon.svg",            sizes: "any",     type: "image/svg+xml" },
      { src: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
