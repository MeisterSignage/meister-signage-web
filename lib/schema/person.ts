const BASE = "https://www.meister-signage.ch";

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${BASE}/#person-chris-meister`,
  name: "Chris Meister",
  givenName: "Chris",
  familyName: "Meister",
  jobTitle: "Gründer & Inhaber",
  url: `${BASE}/ueber-uns`,
  image: {
    "@type": "ImageObject",
    url: `${BASE}/images/Chris-Meister.webp`,
    width: 600,
    height: 720,
  },
  description:
    "Chris Meister ist Gründer von Meister Signage und spezialisiert auf schlüsselfertige Digital-Signage-Lösungen für KMU in der Zentralschweiz.",
  worksFor: {
    "@type": "Organization",
    "@id": `${BASE}/#organization`,
  },
  sameAs: [
    "https://www.linkedin.com/in/christopher-meister-signage/",
  ],
  telephone: "+41764526687",
  email: "chris@meister-signage.ch",
};
