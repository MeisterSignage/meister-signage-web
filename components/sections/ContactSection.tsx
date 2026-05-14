import Image from "next/image";
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
  imageSrc?: string;
};

export default function ContactSection({
  eyebrow, title, subtitle,
  contactName, role, phone, email, whatsapp, imageSrc,
}: ContactSectionProps) {
  const phoneHref    = `tel:${phone.replace(/\s/g, "")}`;
  const emailHref    = `mailto:${email}`;
  const whatsappHref = `https://wa.me/${whatsapp.replace(/[^0-9]/g, "")}`;

  return (
    <SectionContainer white>
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">

        {/* Left — text */}
        <div>
          {eyebrow && (
            <span className="mb-4 block text-xs font-semibold uppercase tracking-widest text-gold">
              {eyebrow}
            </span>
          )}
          <h2 className="mb-4 text-navy">{title}</h2>
          {subtitle && <p className="mb-10 text-cgray">{subtitle}</p>}

          <div className="mb-2 h-px w-8 bg-gold" />
          <div className="mb-8 pt-5">
            <p className="text-lg font-bold text-navy">{contactName}</p>
            <p className="text-cgray">{role}</p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={phoneHref}
              className="inline-flex items-center gap-3 border border-navy/15 px-5 py-3 text-navy transition-colors duration-150 hover:border-magenta hover:text-magenta"
            >
              <Phone className="h-4 w-4 shrink-0" strokeWidth={1.5} />
              {phone}
            </a>
            <a
              href={emailHref}
              className="inline-flex items-center gap-3 border border-navy/15 px-5 py-3 text-navy transition-colors duration-150 hover:border-magenta hover:text-magenta"
            >
              <Mail className="h-4 w-4 shrink-0" strokeWidth={1.5} />
              {email}
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border border-navy/15 px-5 py-3 text-navy transition-colors duration-150 hover:border-magenta hover:text-magenta"
            >
              <MessageCircle className="h-4 w-4 shrink-0" strokeWidth={1.5} />
              WhatsApp
            </a>
          </div>
        </div>

        {/* Right — photo */}
        <div className="relative overflow-hidden">
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={contactName}
              width={600}
              height={720}
              className="h-auto w-full object-cover object-top"
            />
          ) : (
            <div className="flex min-h-[420px] items-center justify-center border border-navy/10 bg-offwhite">
              <div className="text-center">
                <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center bg-navy/8 text-2xl font-light text-navy">
                  {contactName.charAt(0)}
                </div>
                <p className="font-bold text-navy">{contactName}</p>
                <p className="mt-1 text-xs text-cgray">{role}</p>
                <div className="mx-auto mt-4 h-px w-8 bg-gold" />
                <p className="mt-3 text-xs text-cgray">Foto folgt</p>
              </div>
            </div>
          )}
        </div>

      </div>
    </SectionContainer>
  );
}
