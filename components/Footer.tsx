import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

/* ── Color tokens ──────────────────────────────────────────── */
// BG:        #111111
// Heading:   #f3f4f6
// Body:      #d1d5db
// Secondary: #9ca3af
// Borders:   rgba(255,255,255,0.08)
// Magenta:   #fe019a

/* ── Nav data ──────────────────────────────────────────────── */

const colLoesungen = [
  { label: "Displays kaufen", href: "/digital-signage-kaufen" },
  { label: "Displays mieten", href: "/digital-signage-mieten" },
  { label: "LED Walls",       href: "/loesungen/led-walls" },
  { label: "Menüboards",      href: "/loesungen/digitale-menueboards" },
];

const colBranchen = [
  { label: "Gastronomie",     href: "/branchen/gastronomie" },
  { label: "Retail & Handel", href: "/branchen/retail" },
  { label: "Events",          href: "/branchen/events" },
  { label: "Hotellerie",      href: "/branchen/hotellerie" },
  { label: "Unternehmen",     href: "/branchen/unternehmen" },
];

const colUnternehmen = [
  { label: "Über uns", href: "/ueber-uns" },
  { label: "News",     href: "/news" },
  { label: "Kontakt",  href: "/kontakt" },
];

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/meister-signage/posts/?feedView=all&viewAsMember=true",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-[17px] w-[17px]" aria-hidden="true">
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
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-[17px] w-[17px]" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/41764526687",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-[17px] w-[17px]" aria-hidden="true">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
  },
];

/* ── Nav column ────────────────────────────────────────────── */

function NavColumn({
  heading,
  links,
}: {
  heading: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div className="flex flex-col gap-5">
      <p
        className="text-[10px] font-bold uppercase tracking-[0.18em]"
        style={{ color: "#9ca3af" }}
      >
        {heading}
      </p>
      <nav className="flex flex-col gap-3">
        {links.map(({ label, href }) => (
          <Link
            key={href}
            href={href}
            className="group/link relative w-fit text-[14px] transition-colors duration-200"
            style={{ color: "#d1d5db" }}
          >
            <span className="transition-colors duration-200 group-hover/link:text-[#f3f4f6]">
              {label}
            </span>
            {/* Magenta underline slide-in */}
            <span
              className="absolute -bottom-px left-0 h-px w-0 transition-all duration-300 group-hover/link:w-full"
              style={{ backgroundColor: "#fe019a" }}
              aria-hidden="true"
            />
          </Link>
        ))}
      </nav>
    </div>
  );
}

/* ── Footer ────────────────────────────────────────────────── */

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: "#111111" }}
    >
      {/* Noise texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
          backgroundSize: "160px 160px",
        }}
      />

      {/* Ambient magenta glow */}
      <div
        className="pointer-events-none absolute -left-32 -top-32 h-[400px] w-[400px]"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(circle, rgba(254,1,154,0.06) 0%, transparent 65%)",
        }}
      />

      <div className="relative mx-auto max-w-content px-6 pb-0 pt-20 md:px-10 lg:pt-24">

        {/* Top grid */}
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-12">

          {/* Brand column */}
          <div className="flex flex-col gap-8 lg:col-span-4">

            <Link href="/" className="inline-block w-fit">
              <Image
                src="/logo.svg"
                alt="Meister Signage"
                width={1036}
                height={708}
                className="h-[46px] w-auto brightness-0 invert"
                style={{ opacity: 0.92 }}
              />
            </Link>

            {/* Tagline */}
            <p
              className="font-light leading-[1.2]"
              style={{
                color: "#f3f4f6",
                fontSize: "clamp(1.3rem, 2vw, 1.7rem)",
                letterSpacing: "-0.02em",
              }}
            >
              Digitale Kommunikation
              <br />
              für Räume mit Wirkung.
            </p>

            {/* Short text */}
            <p
              className="max-w-[280px] text-[13px] leading-relaxed"
              style={{ color: "#9ca3af" }}
            >
              Modern digital signage solutions for hospitality, retail, corporate and event spaces.
            </p>

            {/* CTA button */}
            <Link
              href="/kontakt"
              className="group/cta inline-flex w-fit items-center gap-2.5 rounded-[8px] border border-white/[0.08] px-5 py-3 text-[13px] font-semibold text-[#d1d5db] transition-all duration-200 hover:border-white/20 hover:text-[#f3f4f6]"
            >
              Beratung anfragen
              <ArrowRight
                className="h-3.5 w-3.5 transition-transform duration-200 group-hover/cta:translate-x-1"
                strokeWidth={2}
              />
            </Link>

            {/* Social icons */}
            <div className="flex items-center gap-1">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03] text-[#d1d5db] transition-all duration-150 hover:border-white/20 hover:bg-white/[0.08] hover:text-[#f3f4f6]"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden lg:col-span-1 lg:block" aria-hidden="true" />

          {/* Nav columns */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-7 lg:gap-8">
            <NavColumn heading="Lösungen"    links={colLoesungen} />
            <NavColumn heading="Branchen"    links={colBranchen} />
            <NavColumn heading="Unternehmen" links={colUnternehmen} />
          </div>

        </div>

        {/* Divider */}
        <div
          className="mt-20 h-px w-full"
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(255,255,255,0.08) 20%, rgba(255,255,255,0.08) 80%, transparent)",
          }}
        />

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 py-7 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-6">
            <span className="text-[12px]" style={{ color: "#9ca3af" }}>
              © {year} Meister Signage
            </span>
            <Link
              href="/datenschutz"
              className="text-[12px] text-[#9ca3af] transition-colors duration-150 hover:text-[#d1d5db]"
            >
              Datenschutz
            </Link>
            <Link
              href="/impressum"
              className="text-[12px] text-[#9ca3af] transition-colors duration-150 hover:text-[#d1d5db]"
            >
              Impressum
            </Link>
          </div>
          <span className="text-[11px] tracking-wide" style={{ color: "#9ca3af", opacity: 0.5 }}>
            Made with care in Switzerland.
          </span>
        </div>

      </div>
    </footer>
  );
}
