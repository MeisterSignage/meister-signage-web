"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";

type DropdownItem = { label: string; href: string; desc?: string };
type NavItem = { label: string; href: string; dropdown?: DropdownItem[] };

const navItems: NavItem[] = [
  {
    label: "Lösungen",
    href: "/loesungen",
    dropdown: [
      { label: "Displays kaufen",  href: "/digital-signage-kaufen",         desc: "Kauf & Komplettinstallation" },
      { label: "Displays mieten",  href: "/digital-signage-mieten",         desc: "Flexibel für Events & Temporär" },
      { label: "LED Walls",        href: "/loesungen/led-walls",            desc: "Grossfläche mit maximaler Wirkung" },
      { label: "Menüboards",       href: "/loesungen/digitale-menueboards", desc: "Für Gastronomie & Retail" },
      { label: "Indoor Signage",   href: "/loesungen/indoor-signage",       desc: "Displays für Innenräume" },
    ],
  },
  {
    label: "Branchen",
    href: "/branchen",
    dropdown: [
      { label: "Gastronomie",     href: "/branchen/gastronomie",  desc: "Restaurants, Cafés, Bistros" },
      { label: "Retail & Handel", href: "/branchen/retail",       desc: "Shops, Schaufenster, POS" },
      { label: "Events & Messen", href: "/branchen/events",       desc: "Tagungen, Messen, Anlässe" },
      { label: "Hotellerie",      href: "/branchen/hotellerie",   desc: "Hotels, Empfang, Lobby" },
      { label: "Unternehmen",     href: "/branchen/unternehmen",  desc: "KMU, Empfang, Kommunikation" },
    ],
  },
  { label: "Vermietung", href: "/digital-signage-mieten" },
  { label: "Über uns",   href: "/ueber-uns" },
  { label: "Kontakt",    href: "/kontakt" },
];

export default function Nav() {
  const [menuOpen,   setMenuOpen]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState<string | null>(null);
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-50 w-full border-b border-navy/10 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex h-[68px] max-w-content items-center justify-between px-4 md:px-10">

        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src="/logo.svg"
            alt="Meister Signage"
            width={1036}
            height={708}
            className="block h-[52px] w-auto"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) =>
            item.dropdown ? (
              <div key={item.href} className="group relative">
                <button
                  className={`flex items-center gap-1 text-[15px] font-medium tracking-wide transition-colors duration-150 ${
                    isActive(item.href) ? "text-magenta" : "text-navy/70 hover:text-navy"
                  }`}
                >
                  {item.label}
                  <ChevronDown
                    className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180 text-navy/40"
                    strokeWidth={2}
                  />
                </button>

                {/* Dropdown */}
                <div className="invisible absolute left-0 top-[calc(100%+8px)] z-20 w-[260px] opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100"
                  style={{ filter: "drop-shadow(0 8px 32px rgba(26,39,68,0.13))" }}
                >
                  <div className="overflow-hidden rounded-[14px] border border-navy/8 bg-white p-1.5">
                    {item.dropdown.map((d) => (
                      <Link
                        key={d.href}
                        href={d.href}
                        className="group/item flex flex-col rounded-[10px] px-4 py-3 transition-colors duration-100 hover:bg-offwhite"
                      >
                        <span className="text-[14px] font-semibold text-navy group-hover/item:text-magenta transition-colors duration-100">
                          {d.label}
                        </span>
                        {d.desc && (
                          <span className="mt-0.5 text-[12px] leading-snug text-navy/45">
                            {d.desc}
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[15px] font-medium tracking-wide transition-colors duration-150 ${
                  isActive(item.href) ? "text-magenta" : "text-navy/70 hover:text-navy"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-2 lg:flex">
          <Link
            href="/news"
            className={`inline-flex items-center rounded-[7px] border border-magenta/35 px-4 py-2 text-[14px] font-semibold tracking-wide transition-all duration-150 hover:border-magenta hover:bg-magenta/[0.06] ${
              isActive("/news") ? "text-magenta" : "text-magenta/85 hover:text-magenta"
            }`}
          >
            Blog
          </Link>
          <Link href="/kontakt" className="btn-primary">
            Beratung anfragen
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="-mr-2 flex h-11 w-11 items-center justify-center text-navy lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Menü schliessen" : "Menü öffnen"}
          aria-expanded={menuOpen}
        >
          {menuOpen
            ? <X className="h-5 w-5" strokeWidth={1.75} />
            : <Menu className="h-5 w-5" strokeWidth={1.75} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-navy/10 bg-white lg:hidden">
          <div className="mx-auto max-h-[calc(100vh-68px)] max-w-content overflow-y-auto overscroll-contain px-4 pb-6 pt-2">
            <nav className="flex flex-col divide-y divide-navy/8">
              {navItems.map((item) => {
                const itemActive = isActive(item.href);
                return (
                  <div key={item.href}>
                    {item.dropdown ? (
                      <>
                        <button
                          onClick={() =>
                            setMobileOpen(mobileOpen === item.href ? null : item.href)
                          }
                          className={`flex w-full items-center justify-between py-4 text-[16px] font-medium transition-colors ${
                            itemActive ? "text-magenta" : "text-navy/80 active:text-navy"
                          }`}
                          aria-expanded={mobileOpen === item.href}
                        >
                          {item.label}
                          <ChevronDown
                            className={`h-4 w-4 transition-transform duration-200 ${
                              mobileOpen === item.href ? "rotate-180 text-magenta" : "text-navy/40"
                            }`}
                            strokeWidth={2}
                          />
                        </button>
                        {mobileOpen === item.href && (
                          <div className="mb-3 ml-1 flex flex-col gap-0.5 border-l-2 border-magenta/40 pl-4">
                            {item.dropdown.map((d) => {
                              const childActive = pathname === d.href;
                              return (
                                <Link
                                  key={d.href}
                                  href={d.href}
                                  className="flex flex-col py-3"
                                  onClick={() => setMenuOpen(false)}
                                >
                                  <span
                                    className={`text-[15px] font-medium transition-colors ${
                                      childActive
                                        ? "text-magenta"
                                        : "text-navy/80 active:text-magenta"
                                    }`}
                                  >
                                    {d.label}
                                  </span>
                                  {d.desc && (
                                    <span className="mt-0.5 text-[12px] leading-snug text-navy/45">
                                      {d.desc}
                                    </span>
                                  )}
                                </Link>
                              );
                            })}
                          </div>
                        )}
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className={`block py-4 text-[16px] font-medium transition-colors ${
                          itemActive ? "text-magenta" : "text-navy/80 active:text-navy"
                        }`}
                        onClick={() => setMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                );
              })}

              {/* Blog — mobile only (sits in desktop CTA area on lg) */}
              <Link
                href="/news"
                className={`block py-4 text-[16px] font-medium transition-colors ${
                  isActive("/news") ? "text-magenta" : "text-navy/80 active:text-navy"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                Blog
              </Link>
            </nav>

            <div className="mt-5 border-t border-navy/10 pt-5">
              <Link
                href="/kontakt"
                className="btn-primary w-full justify-center"
                onClick={() => setMenuOpen(false)}
              >
                Beratung anfragen
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
