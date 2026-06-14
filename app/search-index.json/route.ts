import { loesungenPages, branchenPages, staedtePages } from "@/lib/landingpages";
import type { LandingPage } from "@/lib/lp-types";
import { getAllWissenPages } from "@/lib/wissen";
import { getPublishedPosts } from "@/lib/news";

export const dynamic = "force-static";

type Item = { t: string; u: string; d: string; g: string; k?: string };

export function GET() {
  const items: Item[] = [
    { t: "Startseite", u: "/", d: "Digital Signage aus der Schweiz – Kauf, Miete und Service.", g: "Seite" },
    { t: "Lösungen", u: "/loesungen/", d: "Alle Digital-Signage-Lösungen im Überblick.", g: "Seite" },
    { t: "Alle Displays", u: "/loesungen/displays/", d: "Alle Display-Typen im Überblick.", g: "Seite" },
    { t: "Displays kaufen", u: "/digital-signage-kaufen/", d: "Schlüsselfertige Displays kaufen.", g: "Seite" },
    { t: "Displays mieten", u: "/digital-signage-mieten/", d: "Displays flexibel mieten.", g: "Seite" },
    { t: "Anbietervergleich", u: "/digital-signage-anbieter-vergleich/", d: "Digital-Signage-Anbieter im Vergleich.", g: "Seite" },
    { t: "Was kostet Digital Signage?", u: "/was-kostet-digital-signage-schweiz/", d: "Kosten und Preise in der Schweiz.", g: "Wissen" },
    { t: "Wissen", u: "/wissen/", d: "Ratgeber rund um Digital Signage.", g: "Seite" },
    { t: "News", u: "/news/", d: "Neuigkeiten und Insights.", g: "Seite" },
    { t: "Kontakt", u: "/kontakt/", d: "Ihr Projekt besprechen.", g: "Seite" },
  ];

  const addLp = (rec: Record<string, LandingPage>, base: string, g: string) => {
    for (const slug of Object.keys(rec)) {
      const p = rec[slug];
      items.push({ t: p.h1, u: `${base}/${slug}/`, d: p.seoDescription, g, k: `${p.seoTitle} ${p.eyebrow}` });
    }
  };
  addLp(loesungenPages, "/loesungen", "Lösung");
  addLp(branchenPages, "/branchen", "Branche");
  addLp(staedtePages, "/staedte", "Standort");

  for (const w of getAllWissenPages()) {
    items.push({ t: w.h1, u: `/wissen/${w.slug}/`, d: w.seoDescription, g: "Wissen", k: w.seoTitle });
  }
  for (const n of getPublishedPosts()) {
    items.push({ t: n.title, u: `/news/${n.slug}/`, d: n.description, g: "News" });
  }

  return Response.json(items);
}
