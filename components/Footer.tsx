import Link from "next/link";
import Image from "next/image";

const nav = [
  { label: "Home",       href: "/" },
  { label: "Über uns",   href: "/ueber-uns" },
  { label: "Vermietung", href: "/mieten" },
  { label: "Kontakt",    href: "/kontakt" },
];

const loesungen = [
  { label: "Gastronomie", href: "/gastronomie" },
  { label: "Retail",      href: "/retail" },
  { label: "Events",      href: "/events" },
  { label: "Hotellerie",  href: "/hotellerie" },
  { label: "Unternehmen", href: "/unternehmen" },
];

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/meister-signage/posts/?feedView=all&viewAsMember=true",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
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
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
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
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--navy)", color: "white" }}>
      <div className="mx-auto max-w-content px-6 pt-16 pb-10">

        {/* Main grid */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">

          {/* Col 1 — Logo + Tagline */}
          <div className="flex flex-col gap-5 sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.svg"
                alt="Meister Signage"
                width={140}
                height={38}
                className="brightness-0 invert"
              />
            </Link>
            <p className="text-sm leading-relaxed text-white/60 max-w-xs">
              Digitale Kommunikation soll entlasten — nicht zusätzliche Arbeit machen.
            </p>
            <p className="text-xs text-white/35">
              Persönlich geplant und sauber umgesetzt.
            </p>
          </div>

          {/* Col 2 — Navigation */}
          <div className="flex flex-col gap-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-white/35">
              Navigation
            </p>
            <nav className="flex flex-col gap-2.5">
              {nav.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm text-white/60 transition-colors duration-150 hover:text-magenta"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Col 3 — Lösungen */}
          <div className="flex flex-col gap-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-white/35">
              Lösungen
            </p>
            <nav className="flex flex-col gap-2.5">
              {loesungen.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm text-white/60 transition-colors duration-150 hover:text-magenta"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Col 4 — Kontakt + Socials */}
          <div className="flex flex-col gap-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-white/35">
              Kontakt
            </p>

            <address className="not-italic flex flex-col gap-1">
              <span className="text-sm font-semibold text-white">Christopher Meister</span>
              <span className="text-sm text-white/50">Meister Signage</span>
              <span className="text-sm text-white/50">6340 Baar</span>
            </address>

            <div className="flex flex-col gap-2">
              <a
                href="tel:+41764526687"
                className="text-sm text-white/60 transition-colors duration-150 hover:text-magenta"
              >
                +41 76 452 66 87
              </a>
              <a
                href="mailto:chris@meister-signage.ch"
                className="text-sm text-white/60 transition-colors duration-150 hover:text-magenta"
              >
                chris@meister-signage.ch
              </a>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-3 pt-1">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-8 w-8 items-center justify-center text-white/50 transition-colors duration-150 hover:text-magenta"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-white/8" />

        {/* Bottom bar */}
        <div className="flex flex-col gap-3 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-5">
            <p className="text-xs text-white/30">
              © {new Date().getFullYear()} Meister Signage
            </p>
            <Link href="/impressum" className="text-xs text-white/40 transition-colors duration-150 hover:text-white">
              Impressum
            </Link>
            <Link href="/datenschutz" className="text-xs text-white/40 transition-colors duration-150 hover:text-white">
              Datenschutz
            </Link>
          </div>
          <p className="text-xs text-white/25">
            Made with care in Switzerland.
          </p>
        </div>

      </div>
    </footer>
  );
}
