import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionContainer from "@/components/ui/SectionContainer";

type PageLink = {
  label: string;
  description: string;
  href: string;
};

type PageLinksSectionProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  links: PageLink[];
};

export default function PageLinksSection({
  eyebrow,
  title,
  subtitle,
  links,
}: PageLinksSectionProps) {
  return (
    <SectionContainer>
      <div className="section-header">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h2 className="heading-max-2 mb-3 text-navy">{title}</h2>
        {subtitle && <p className="text-cgray">{subtitle}</p>}
      </div>

      <div className="card-grid card-grid-3">
        {links.map((link) => (
          <article
            key={link.href}
            className="card card-hover group relative flex h-full flex-col justify-between overflow-hidden"
          >
            <div className="absolute inset-y-0 left-0 w-[3px] bg-magenta" />
            <div>
              <p className="card-title">
                <Link
                  href={link.href}
                  className="after:absolute after:inset-0 after:z-10"
                >
                  {link.label}
                </Link>
              </p>
              <p className="card-body">{link.description}</p>
            </div>
            <div className="mt-5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-navy/60 transition-colors duration-150 group-hover:text-magenta">
              Mehr erfahren
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
            </div>
          </article>
        ))}
      </div>
    </SectionContainer>
  );
}
