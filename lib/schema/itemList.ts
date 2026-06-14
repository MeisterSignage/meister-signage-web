const BASE = "https://www.meister-signage.ch";

export interface ItemListEntry {
  name: string;
  path: string; // e.g. "/loesungen/software/"
}

/**
 * Generates an ItemList schema for hub / overview pages so search engines and
 * AI systems can read the listed items as a structured collection.
 */
export function itemListSchema(name: string, items: ItemListEntry[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    numberOfItems: items.length,
    itemListElement: items.map((it, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: it.name,
      url: it.path.startsWith("http") ? it.path : `${BASE}${it.path}`,
    })),
  };
}
