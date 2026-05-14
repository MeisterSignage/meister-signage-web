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
  const whatsappHref = whatsapp.startsWith("http") ? whatsapp : `https://wa.me/${whatsapp.replace(/[^0-9]/g, "")}`;

  return (
    <SectionContainer white>
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">

        {/* Left — text */}
        <div>
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h2 className="mb-3 max-w-2xl text-navy">{title}</h2>
          {subtitle && <p className="mb-8 text-cgray">{subtitle}</p>}

          <div className="mb-2 h-px w-8 bg-gold" />
          <div className="mb-7 pt-4">
            <p className="card-title">{contactName}</p>
            <p className="card-body">{role}</p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={phoneHref}
              className="inline-flex items-center gap-3 rounded-btn border border-navy/15 px-5 py-3 text-[15px] text-navy transition-all duration-200 hover:-translate-y-px hover:border-magenta hover:text-magenta"
            >
              <Phone className="h-4 w-4 shrink-0" strokeWidth={1.5} />
              {phone}
            </a>
            <a
              href={emailHref}
              className="inline-flex items-center gap-3 rounded-btn border border-navy/15 px-5 py-3 text-[15px] text-navy transition-all duration-200 hover:-translate-y-px hover:border-magenta hover:text-magenta"
            >
              <Mail className="h-4 w-4 shrink-0" strokeWidth={1.5} />
              {email}
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-btn border border-navy/15 px-5 py-3 text-[15px] text-navy transition-all duration-200 hover:-translate-y-px hover:border-magenta hover:text-magenta"
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
            <div className="flex min-h-[380px] items-center justify-center border border-navy/10 bg-offwhite">
              <div className="text-center">
                <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center bg-navy/8 text-2xl font-light text-navy">
                  {contactName.charAt(0)}
                </div>
                <p className="card-title">{contactName}</p>
                <p className="card-body">{role}</p>
                <div className="mx-auto mt-4 h-px w-8 bg-gold" />
                <p className="card-body mt-3">Foto folgt</p>
              </div>
            </div>
          )}
        </div>

      </div>
    </SectionContainer>
  );
}
