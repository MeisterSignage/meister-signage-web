import Image from "next/image";
import { Phone, Mail, MessageCircle } from "lucide-react";
import SectionContainer from "@/components/ui/SectionContainer";
import { CONTACT } from "@/lib/contact";

type ContactSectionProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  /** Optional overrides — default values come from content/site/contact.json
   *  (editable via the CMS). Pass an override only if a specific section
   *  intentionally wants different contact details. */
  contactName?: string;
  role?: string;
  phone?: string;
  email?: string;
  whatsapp?: string;
  imageSrc?: string;
};

export default function ContactSection({
  eyebrow, title, subtitle,
  contactName = CONTACT.name,
  role        = CONTACT.role,
  phone       = CONTACT.phoneDisplay,
  email       = CONTACT.email,
  whatsapp    = CONTACT.whatsapp,
  imageSrc,
}: ContactSectionProps) {
  const phoneHref    = `tel:${phone.replace(/\s/g, "")}`;
  const emailHref    = `mailto:${email}`;
  const whatsappHref = whatsapp.startsWith("http") ? whatsapp : `https://wa.me/${whatsapp.replace(/[^0-9]/g, "")}`;

  return (
    <SectionContainer white>
      <div className="flex flex-col items-start gap-10 lg:flex-row lg:items-center lg:gap-16">

        {/* Left — text */}
        <div className="flex-1">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h2 className="heading-max-2 mb-3 text-navy">{title}</h2>
          {subtitle && <p className="mb-8 text-cgray">{subtitle}</p>}

          <div className="mb-2 h-px w-8 bg-gold" />
          <div className="mb-7 pt-4">
            <p className="card-title">{contactName}</p>
            <p className="card-body">{role}</p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href={phoneHref} className="btn-secondary gap-3">
              <Phone className="h-4 w-4 shrink-0" strokeWidth={1.5} />
              {phone}
            </a>
            <a href={emailHref} className="btn-secondary gap-3">
              <Mail className="h-4 w-4 shrink-0" strokeWidth={1.5} />
              {email}
            </a>
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-secondary gap-3">
              <MessageCircle className="h-4 w-4 shrink-0" strokeWidth={1.5} />
              WhatsApp
            </a>
          </div>
        </div>

        {/* Right — photo */}
        <div className="relative w-full shrink-0 overflow-hidden lg:w-[200px]">
          {imageSrc ? (
            <>
              <Image
                src={imageSrc}
                alt={`${contactName} – ${role}`}
                width={600}
                height={720}
                className="h-auto w-full object-cover object-top"
              />
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5"
                aria-hidden="true"
                style={{ background: "linear-gradient(to top, #ffffff 0%, transparent 100%)" }}
              />
            </>
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
