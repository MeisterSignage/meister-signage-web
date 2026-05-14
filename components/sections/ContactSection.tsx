import { Phone, Mail, MessageCircle } from "lucide-react";
import SectionContainer from "@/components/ui/SectionContainer";

type ContactSectionProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  contactName: string;
  role: string;
  phone: string;
  email: string;
  whatsapp: string;
};

export default function ContactSection({
  eyebrow, title, subtitle,
  contactName, role, phone, email, whatsapp,
}: ContactSectionProps) {
  const phoneHref    = `tel:${phone.replace(/\s/g, "")}`;
  const emailHref    = `mailto:${email}`;
  const whatsappHref = `https://wa.me/${whatsapp.replace(/[^0-9]/g, "")}`;

  return (
    <SectionContainer white>
      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-20">

        {/* Left */}
        <div>
          {eyebrow && (
            <span className="mb-3 block text-xs font-semibold uppercase tracking-widest text-cgray">
              {eyebrow}
            </span>
          )}
          <h2 className="mb-3 text-navy">{title}</h2>
          {subtitle && <p className="mb-8 text-cgray">{subtitle}</p>}

          <div className="mb-7 flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-offwhite text-sm font-bold text-navy">
              {contactName.charAt(0)}
            </div>
            <div>
              <p className="text-sm font-bold text-navy">{contactName}</p>
              <p className="text-xs text-cgray">{role}</p>
            </div>
          </div>

          <div className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
            <a href={phoneHref} className="flex items-center gap-2 border border-navy/15 px-4 py-2.5 text-sm text-navy hover:border-navy/30">
              <Phone className="h-3.5 w-3.5 text-cgray" strokeWidth={1.5} />
              {phone}
            </a>
            <a href={emailHref} className="flex items-center gap-2 border border-navy/15 px-4 py-2.5 text-sm text-navy hover:border-navy/30">
              <Mail className="h-3.5 w-3.5 text-cgray" strokeWidth={1.5} />
              {email}
            </a>
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border border-navy/15 px-4 py-2.5 text-sm text-navy hover:border-navy/30">
              <MessageCircle className="h-3.5 w-3.5 text-cgray" strokeWidth={1.5} />
              WhatsApp
            </a>
          </div>
        </div>

        {/* Right: placeholder */}
        <div className="flex min-h-[240px] items-center justify-center border border-navy/10 bg-offwhite p-10">
          <div className="text-center">
            <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center bg-navy/8 text-xl font-light text-navy">
              {contactName.charAt(0)}
            </div>
            <p className="text-sm font-bold text-navy">{contactName}</p>
            <p className="mt-0.5 text-xs text-cgray">{role}</p>
            <div className="mx-auto mt-4 h-px w-8 bg-gold" />
            <p className="mt-3 text-xs text-cgray">Foto folgt</p>
          </div>
        </div>

      </div>
    </SectionContainer>
  );
}
