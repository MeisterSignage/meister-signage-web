"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";

type DropdownItem = { label: string; href: string };
type NavItem = { label: string; href: string; dropdown?: DropdownItem[] };

const navItems: NavItem[] = [
  {
    label: "Lösungen",
    href: "/loesungen",
    dropdown: [
      { label: "Digital Signage kaufen", href: "/loesungen" },
      { label: "Digital Signage mieten", href: "/mieten" },
    ],
  },
  {
    label: "Branchen",
    href: "/branchen",
    dropdown: [
      { label: "Gastronomie",    href: "/gastronomie" },
      { label: "Retail & Handel", href: "/retail" },
      { label: "Events",         href: "/events" },
      { label: "Hotellerie",     href: "/hotellerie" },
      { label: "Unternehmen",    href: "/unternehmen" },
    ],
  },
  { label: "Mieten",    href: "/mieten" },
  { label: "Über uns",  href: "/ueber-uns" },
  { label: "Kontakt",   href: "/kontakt" },
];

export default function Nav() {
  const [menuOpen,   setMenuOpen]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState<string | null>(null);
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-50 w-full border-b border-navy/10 bg-white">
      <div className="mx-auto flex h-20 max-w-content items-center justify-between px-4 md:px-10">

        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/logo.svg"
            alt="Meister Signage"
            width={152}
            height={40}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) =>
            item.dropdown ? (
              <div key={item.href} className="group relative">
                <button
                  className={`flex items-center gap-1 text-sm tracking-wide transition-colors ${
                    isActive(item.href)
                      ? "font-bold text-navy"
                      : "font-semibold text-navy/60 hover:text-navy"
                  }`}
                >
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5 text-cgray" strokeWidth={2} />
                </button>

                {/* Dropdown panel */}
                <div className="invisible absolute left-0 top-full z-10 min-w-[210px] border border-navy/10 bg-white opacity-0 transition-opacity duration-100 group-hover:visible group-hover:opacity-100">
                  {item.dropdown.map((d) => (
                    <Link
                      key={d.href}
                      href={d.href}
                      className="block px-5 py-3 text-sm text-navy/60 hover:bg-offwhite hover:text-navy"
                    >
                      {d.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm tracking-wide transition-colors ${
                  isActive(item.href)
                    ? "font-bold text-navy"
                    : "font-semibold text-navy/60 hover:text-navy"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/kontakt"
          className="hidden rounded-btn bg-magenta px-5 py-2.5 text-sm font-bold text-white hover:opacity-90 md:inline-block"
        >
          Beratung anfragen
        </Link>

        {/* Mobile toggle */}
        <button
          className="flex h-10 w-10 items-center justify-center text-navy md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menü öffnen"
        >
          {menuOpen
            ? <X className="h-5 w-5" strokeWidth={1.5} />
            : <Menu className="h-5 w-5" strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-navy/10 bg-white md:hidden">
          <div className="mx-auto max-w-content px-4 py-6">
            <nav className="flex flex-col">
              {navItems.map((item) => (
                <div key={item.href}>
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() =>
                          setMobileOpen(mobileOpen === item.href ? null : item.href)
                        }
                        className="flex w-full items-center justify-between py-3.5 text-sm font-semibold text-navy/70"
                      >
                        {item.label}
                        <ChevronDown
                          className={`h-3.5 w-3.5 text-cgray transition-transform duration-150 ${
                            mobileOpen === item.href ? "rotate-180" : ""
                          }`}
                          strokeWidth={2}
                        />
                      </button>
                      {mobileOpen === item.href && (
                        <div className="mb-2 ml-2 flex flex-col border-l border-navy/10 pl-4">
                          {item.dropdown.map((d) => (
                            <Link
                              key={d.href}
                              href={d.href}
                              className="py-2.5 text-sm text-navy/60 hover:text-navy"
                              onClick={() => setMenuOpen(false)}
                            >
                              {d.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className={`block py-3.5 text-sm font-semibold ${
                        isActive(item.href) ? "text-navy" : "text-navy/70 hover:text-navy"
                      }`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            <div className="mt-4 border-t border-navy/10 pt-5">
              <Link
                href="/kontakt"
                className="block rounded-btn bg-magenta px-5 py-3 text-center text-sm font-bold text-white hover:opacity-90"
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
