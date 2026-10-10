import type { Metadata } from "next";
import Link from "next/link";
import SectionContainer from "@/components/ui/SectionContainer";
import agb from "@/content/legal/agb-2026-10-10.1.json";
export const metadata: Metadata = {
  title: { absolute: "AGB – Meister Signage" },
  description: "Bedingungen für Vermietung, Verkauf und Dienstleistungen von Meister Signage.",
  alternates: { canonical: "https://www.meister-signage.ch/agb/" },
  robots: { index: false, follow: true },
};
export default function AGBPage() {
  return <SectionContainer white><article className="legal-page mx-auto max-w-3xl">
    <header className="mb-10 border-b border-navy/10 pb-8"><p className="eyebrow mb-2">Rechtliches</p>
      <h1 className="mb-3 text-navy">Allgemeine Geschäftsbedingungen</h1><p>{agb.subtitle}</p>
      <p className="mt-3 text-sm text-cgray">Version {agb.version} · Stand: {agb.date}</p>
      <a href="/rechtliches/Meister-Signage-AGB-2026-10-10.1.pdf" className="btn-secondary mt-5" download>AGB als PDF herunterladen</a>
      <p className="mt-5 text-sm text-cgray">Bei einer Angebotsannahme gilt die dort bereitgestellte Fassung. Individuelle Vereinbarungen in Ihrer Offerte gehen vor.</p>
    </header>
    {agb.sections.map((section,index)=><section key={section.title} id={`ziffer-${index+1}`} className="border-b border-navy/10 py-6"><h2 className="mb-4 text-navy">{section.title}</h2>{section.paragraphs.map((paragraph,i)=><p key={i} className="card-body mb-4">{paragraph}</p>)}</section>)}
    <p className="mt-8 text-sm"><Link href="/datenschutz/" className="text-magenta underline">Datenschutzerklärung</Link> · <Link href="/impressum/" className="text-magenta underline">Impressum</Link></p>
  </article></SectionContainer>;
}
