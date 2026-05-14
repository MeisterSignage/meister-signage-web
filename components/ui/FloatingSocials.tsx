import { MessageCircle } from "lucide-react";

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/meister-signage/posts/?feedView=all&viewAsMember=true",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7" aria-hidden="true">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/meistersignage/",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/41764526687",
    icon: <MessageCircle className="h-7 w-7" strokeWidth={1.8} aria-hidden="true" />,
  },
];

export default function FloatingSocials() {
  return (
    <div className="fixed right-6 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-4 xl:flex">
      {socials.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={s.label}
          className="flex h-14 w-14 items-center justify-center rounded-xl border border-magenta/50 bg-white text-magenta transition-all duration-300 ease-out hover:scale-105 hover:border-magenta hover:bg-magenta hover:text-white"
        >
          {s.icon}
        </a>
      ))}
    </div>
  );
}
