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
  eyebrow,
  title,
  subtitle,
  contactName,
  role,
  phone,
  email,
  whatsapp,
}: ContactSectionProps) {
  const phoneHref     = `tel:${phone.replace(/\s/g, "")}`;
  const emailHref     = `mailto:${email}`;
  const whatsappHref  = `https://wa.me/${whatsapp.replace(/[^0-9]/g, "")}`;

  return (
    <SectionContainer>
      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Left: text + contact buttons */}
        <div>
          {eyebrow && (
            <span className="mb-3 block text-sm font-semibold uppercase tracking-widest text-neutral-400">
              {eyebrow}
            </span>
          )}
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mb-10 text-lg leading-relaxed text-neutral-500">
              {subtitle}
            </p>
          )}

          {/* Contact person */}
          <div className="mb-8 flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-lg font-bold text-neutral-600">
              {contactName.charAt(0)}
            </div>
            <div>
              <p className="font-semibold text-neutral-900">{contactName}</p>
              <p className="text-sm text-neutral-500">{role}</p>
            </div>
          </div>

          {/* Contact buttons */}
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={phoneHref}
              className="flex items-center gap-2.5 rounded-btn border border-neutral-200 bg-white px-5 py-3 text-sm font-semibold text-neutral-700 shadow-sm hover:border-neutral-300 hover:bg-neutral-50"
            >
              <Phone className="h-4 w-4 text-neutral-500" strokeWidth={1.5} />
              {phone}
            </a>
            <a
              href={emailHref}
              className="flex items-center gap-2.5 rounded-btn border border-neutral-200 bg-white px-5 py-3 text-sm font-semibold text-neutral-700 shadow-sm hover:border-neutral-300 hover:bg-neutral-50"
            >
              <Mail className="h-4 w-4 text-neutral-500" strokeWidth={1.5} />
              {email}
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 rounded-btn border border-neutral-200 bg-white px-5 py-3 text-sm font-semibold text-neutral-700 shadow-sm hover:border-neutral-300 hover:bg-neutral-50"
            >
              <MessageCircle className="h-4 w-4 text-neutral-500" strokeWidth={1.5} />
              WhatsApp
            </a>
          </div>
        </div>

        {/* Right: contact card placeholder */}
        <div className="flex h-full min-h-[240px] items-center justify-center rounded-xl border border-neutral-200 bg-neutral-50 p-10">
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-neutral-200 text-2xl font-bold text-neutral-500">
              {contactName.charAt(0)}
            </div>
            <p className="font-semibold text-neutral-800">{contactName}</p>
            <p className="mt-1 text-sm text-neutral-500">{role}</p>
            <div className="mx-auto mt-4 h-px w-10 bg-neutral-300" />
            <p className="mt-4 text-sm text-neutral-400">Foto folgt</p>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
