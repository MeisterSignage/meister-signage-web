import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--navy)", color: "white" }}>
      <div className="max-w-content mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <Image src="/logo.svg" alt="Meister Signage" width={140} height={38}
              className="brightness-0 invert mb-4" />
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Digital Signage. Schlüsselfertig. Lokal betreut.
            </p>
            <p className="text-white/40 text-xs mt-4">
              Zentralschweiz · Service aus der Schweiz
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">Lösungen</p>
            <nav className="flex flex-col gap-2">
              {[
                ["/gastronomie", "Gastronomie & Hotellerie"],
                ["/retail",      "Retail & Handel"],
                ["/events",      "Events"],
                ["/mieten",      "Digital Signage mieten"],
                ["/luzern",      "Digital Signage Luzern"],
              ].map(([href, label]) => (
                <Link key={href} href={href}
                  className="text-white/60 hover:text-white text-sm transition-colors">
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">Kontakt</p>
            <nav className="flex flex-col gap-2">
              {[
                ["/ueber-uns", "Über uns"],
                ["/blog",      "Use Cases"],
                ["/kontakt",   "Gespräch buchen"],
              ].map(([href, label]) => (
                <Link key={href} href={href}
                  className="text-white/60 hover:text-white text-sm transition-colors">
                  {label}
                </Link>
              ))}
            </nav>
            <div className="mt-6">
              <Link href="https://linkedin.com/company/105151407" target="_blank"
                className="text-white/40 hover:text-white text-xs transition-colors">
                LinkedIn →
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between gap-3 items-start md:items-center">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Meister Signage · Zentralschweiz
          </p>
          <div className="flex gap-4">
            <Link href="/datenschutz" className="text-white/50 hover:text-white text-xs transition-colors">
              Datenschutz
            </Link>
            <Link href="/impressum" className="text-white/50 hover:text-white text-xs transition-colors">
              Impressum
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
