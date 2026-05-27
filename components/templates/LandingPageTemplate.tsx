import JsonLd from "@/components/JsonLd";
import LandingPageContent from "@/components/templates/LandingPageContent";
import { breadcrumbSchema } from "@/lib/schema/breadcrumb";
import { faqSchema } from "@/lib/schema/faq";
import { serviceSchema } from "@/lib/schema/service";
import type { LandingPage, LPLink } from "@/lib/lp-types";

const SITE_URL = "https://www.meister-signage.ch";

const TYPE_LABELS: Record<LandingPage["type"], string> = {
  branchen:  "Branchen",
  staedte:   "Standorte",
  loesungen: "Lösungen",
};

const TYPE_PATHS: Record<LandingPage["type"], string> = {
  branchen:  "/branchen",
  staedte:   "/staedte",
  loesungen: "/loesungen",
};

export default function LandingPageTemplate({ page }: { page: LandingPage }) {
  const breadcrumb = [
    { name: "Home",                   path: "/" },
    { name: TYPE_LABELS[page.type],   path: TYPE_PATHS[page.type] },
    { name: page.h1,                  path: `/${page.type}/${page.slug}` },
  ];

  /* Combine + deduplicate related links */
  const relatedLinks: LPLink[] = [
    ...(page.related?.branchen  ?? []),
    ...(page.related?.loesungen ?? []),
    ...(page.related?.staedte   ?? []),
    ...page.internalLinks,
  ];
  const seenHrefs = new Set<string>();
  const dedupedLinks = relatedLinks.filter(({ href }) => {
    if (seenHrefs.has(href)) return false;
    seenHrefs.add(href);
    return true;
  });

  const STAEDTE_DISPLAY_NAMES: Record<string, string> = {
    luzern:  "Luzern",
    zuerich: "Zürich",
    zug:     "Zug",
    bern:    "Bern",
    basel:   "Basel",
  };

  const pageUrl = `${SITE_URL}/${page.type}/${page.slug}`;
  const serviceType =
    page.type === "loesungen" ? "Digital Signage"
    : page.type === "branchen" ? "Digital Signage Lösung"
    : "Digital Signage Standortbetreuung";
  const areaServedCity = page.type === "staedte" ? STAEDTE_DISPLAY_NAMES[page.slug] : undefined;

  return (
    <>
      <JsonLd schema={breadcrumbSchema(breadcrumb) as Record<string, unknown>} />
      {page.faq.length > 0 && (
        <JsonLd schema={faqSchema(page.faq) as Record<string, unknown>} />
      )}
      <JsonLd
        schema={
          serviceSchema({
            name: page.h1,
            description: page.intro,
            url: pageUrl,
            serviceType,
            areaServedCity,
          }) as Record<string, unknown>
        }
      />
      <LandingPageContent page={page} dedupedLinks={dedupedLinks} />
    </>
  );
}
