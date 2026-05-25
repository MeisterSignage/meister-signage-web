type ArticleSchemaInput = {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  imageUrl?: string;
  authorName?: string;
  category?: string;
};

export function articleSchema({
  title,
  description,
  url,
  datePublished,
  dateModified,
  imageUrl,
  authorName = "Chris Meister",
  category,
}: ArticleSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    datePublished,
    dateModified: dateModified ?? datePublished,
    image: imageUrl
      ? { "@type": "ImageObject", url: imageUrl }
      : undefined,
    author: {
      "@type": "Person",
      "@id": "https://www.meister-signage.ch/#person-chris-meister",
      name: authorName,
    },
    publisher: {
      "@type": "Organization",
      name: "Meister Signage",
      url: "https://www.meister-signage.ch",
      logo: {
        "@type": "ImageObject",
        url: "https://www.meister-signage.ch/logo.svg",
      },
    },
    articleSection: category || undefined,
    keywords: category
      ? `Digital Signage, ${category}, Schweiz`
      : "Digital Signage, Schweiz",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", ".prose-article p:first-of-type"],
    },
  };
}
