import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionContainer from "@/components/ui/SectionContainer";

type InternalLink = {
  label: string;
  href: string;
};

type InternalLinksSectionProps = {
  eyebrow?: string;
  links: InternalLink[];
};

export default function InternalLinksSection({
  eyebrow = "Weitere Themen",
  links,
}: InternalLinksSectionProps) {
  return (
    <SectionContainer compact>
      {eyebrow && (
        <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-navy/65">
          {eyebrow}
        </p>
      )}
      <div className="flex flex-wrap gap-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="inline-flex items-center gap-1.5 rounded-full border border-navy/15 bg-white px-4 py-2 text-sm text-navy/70 transition-colors duration-150 hover:border-magenta hover:text-magenta"
          >
            <ArrowRight className="h-3.5 w-3.5 shrink-0" strokeWidth={2} />
            {link.label}
          </Link>
        ))}
      </div>
    </SectionContainer>
  );
}
