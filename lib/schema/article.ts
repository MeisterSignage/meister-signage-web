type ArticleSchemaInput = {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  imageUrl?: string;
  authorName?: string;
};

export function articleSchema({
  title,
  description,
  url,
  datePublished,
  dateModified,
  imageUrl,
  authorName = "Meister Signage",
}: ArticleSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    datePublished,
    dateModified: dateModified ?? datePublished,
    image: imageUrl
      ? { "@type": "ImageObject", url: imageUrl }
      : undefined,
    author: {
      "@type": "Organization",
      name: authorName,
      url: "https://www.meister-signage.ch",
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
  };
}
