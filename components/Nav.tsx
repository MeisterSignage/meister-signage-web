"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/gastronomie",  label: "Gastronomie" },
  { href: "/retail",       label: "Retail" },
  { href: "/events",       label: "Events" },
  { href: "/mieten",       label: "Mieten" },
  { href: "/blog",         label: "Use Cases" },
  { href: "/ueber-uns",    label: "Über uns" },
];

export default function Nav() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-content mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.svg"
            alt="Meister Signage"
            width={160}
            height={44}
            priority
            className={scrolled ? "" : "brightness-0 invert"}
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm font-bold tracking-wide transition-colors duration-200 ${
                scrolled
                  ? "text-navy hover:text-magenta"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/kontakt"
            className="btn-primary text-sm"
            style={{
              backgroundColor: "var(--magenta)",
              color: "white",
              padding: "10px 22px",
              borderRadius: "7px",
              fontWeight: 700,
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
            }}
          >
            Gespräch buchen
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className={`md:hidden flex flex-col gap-1.5 p-2 ${
            scrolled ? "text-navy" : "text-white"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span className={`block w-6 h-0.5 bg-current transition-transform duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-current transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-current transition-transform duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-6 flex flex-col gap-4 shadow-lg">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-navy font-bold text-base hover:text-magenta transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/kontakt"
            onClick={() => setMenuOpen(false)}
            style={{
              backgroundColor: "var(--magenta)",
              color: "white",
              padding: "12px 24px",
              borderRadius: "7px",
              fontWeight: 700,
              textDecoration: "none",
              textAlign: "center",
              marginTop: "8px",
            }}
          >
            Gespräch buchen
          </Link>
        </div>
      )}
    </header>
  );
}
