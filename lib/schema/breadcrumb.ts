const BASE = "https://www.meister-signage.ch";

export interface BreadcrumbItem {
  name: string;
  path: string; // e.g. "/" or "/gastronomie"
}

/**
 * Generates a BreadcrumbList schema.
 * Always prepends Home as the first item.
 */
export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: `${BASE}${crumb.path}`,
    })),
  };
}
