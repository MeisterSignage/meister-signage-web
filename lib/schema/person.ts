const BASE = "https://www.meister-signage.ch";

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${BASE}/#person-chris-meister`,
  name: "Christopher Meister",
  alternateName: "Chris Meister",
  givenName: "Christopher",
  familyName: "Meister",
  jobTitle: "Gründer & Inhaber",
  url: `${BASE}/ueber-uns/`,
  image: {
    "@type": "ImageObject",
    url: `${BASE}/images/Chris-Meister.webp`,
    width: 600,
    height: 720,
  },
  description:
    "Christopher Meister ist Gründer und Inhaber von Meister Signage. Er plant und realisiert schlüsselfertige Digital-Signage-Lösungen für KMU in der Schweiz.",
  worksFor: {
    "@type": "Organization",
    "@id": `${BASE}/#organization`,
  },
  sameAs: [
    "https://www.linkedin.com/in/christopher-meister-signage/",
  ],
  knowsAbout: [
    "Digital Signage",
    "Digital-Signage-Displays",
    "Digitale Menüboards",
    "LED Walls",
    "Content-Management-Systeme für Displays",
    "Digitale Besucherinformation",
  ],
  telephone: "+41764526687",
  email: "chris@meister-signage.ch",
};
