import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Layers, Cpu, MapPinHouse, Hand } from "lucide-react";
import homepage from "@/content/site/homepage.json";

type Cta = { label: string; href: string };

type HomeHeroSectionProps = {
  /** Optional overrides — defaults come from content/site/homepage.json
   *  and are editable via the CMS (Globale Daten → Homepage-Hero). */
  eyebrow?: string;
  primaryCta?: Cta;
  secondaryCta?: Cta;
};

const HERO_BG_IMAGE = "/images/products/Hero-Startseite-Meister-Signage.webp";

const TRUST_ITEMS = [
  { icon: Layers, label: "Für jede Branche" },
  { icon: Cpu, label: "Zuverlässige Hardware" },
  { icon: MapPinHouse, label: "Lokal & persönlich" },
  { icon: Hand, label: "Einfache Handhabung" },
];

export default function HomeHeroSection({
  eyebrow = homepage.eyebrow,
  primaryCta = { label: homepage.primaryLabel, href: homepage.primaryHref },
  secondaryCta = homepage.secondaryLabel && homepage.secondaryHref
    ? { label: homepage.secondaryLabel, href: homepage.secondaryHref }
    : undefined,
}: HomeHeroSectionProps) {
  return (
    <>
    <section
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: "#07101f" }}
    >
      {/* Background image — centered, full height. Two gradient overlays fade
          the image to the section background on left & right edges. */}
      <Image
        src={HERO_BG_IMAGE}
        alt="Digital Signage Display in einem modernen Geschäft"
        width={1536}
        height={1024}
        priority
        className="pointer-events-none absolute left-1/2 top-1/2 h-auto max-h-full w-auto max-w-full -translate-x-1/2 -translate-y-1/2"
        aria-hidden="true"
      />
      {/* Left fade — solid navy → transparent over leftmost 30% */}
      <div
        className="pointer-events-none absolute left-0 top-0 bottom-0 w-[30%] z-[1]"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(to right, #07101f 0%, rgba(7,16,31,0.85) 40%, rgba(7,16,31,0) 100%)",
        }}
      />
      {/* Right fade — transparent → solid navy over rightmost 30% */}
      <div
        className="pointer-events-none absolute right-0 top-0 bottom-0 w-[30%] z-[1]"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(to left, #07101f 0%, rgba(7,16,31,0.85) 40%, rgba(7,16,31,0) 100%)",
        }}
      />


      <div className="section-inner relative z-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_1.35fr] lg:gap-6">

          {/* ── Layer 3: Hero Content ── */}
          <div className="flex flex-col gap-6 lg:max-w-[480px]">

            {/* Eyebrow pill */}
            {eyebrow && (
              <span
                className="inline-flex w-fit items-center rounded-full px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em]"
                style={{
                  background: "rgba(254,1,154,0.16)",
                  color: "rgba(254,1,154,0.95)",
                  border: "1px solid rgba(254,1,154,0.20)",
                }}
              >
                {eyebrow}
              </span>
            )}

            {/* Headline */}
            <h1
              style={{
                fontSize: "clamp(2.5rem, 4.8vw, 4.4rem)",
                fontWeight: 900,
                lineHeight: 1.04,
                letterSpacing: "-0.03em",
                color: "#f3f4f6",
              }}
            >
              {homepage.titleLine1}
              <br />
              <span className="text-magenta">{homepage.titleLine2}</span>
            </h1>

            {/* Subtitle */}
            <p
              className="max-w-[440px] text-[16px] leading-relaxed"
              style={{ color: "rgba(209,213,219,0.92)" }}
            >
              {homepage.subtitle}
            </p>

            {/* Layer 4: CTAs */}
            <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:flex-wrap sm:items-center">
              <Link href={primaryCta.href} className="btn-primary gap-2.5">
                {primaryCta.label}
                <ArrowRight className="h-4 w-4 shrink-0" strokeWidth={2.5} />
              </Link>
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="inline-flex items-center gap-2 rounded-[7px] px-5 py-3.5 text-[16px] font-semibold transition-all duration-200 hover:border-white/30 hover:text-white"
                  style={{
                    border: "1px solid rgba(255,255,255,0.18)",
                    color: "#e5e7eb",
                  }}
                >
                  {secondaryCta.label}
                  <ArrowUpRight className="h-4 w-4 shrink-0" strokeWidth={2} />
                </Link>
              )}
            </div>


          </div>

          {/* ── Layer 4: Display Visual ── */}
          <HeroVisual />

        </div>
      </div>
    </section>

    {/* Dark trust bar — visual separator */}
    <div
      className="w-full"
      style={{ backgroundColor: "#0a1525" }}
    >
      <div className="mx-auto flex max-w-content flex-wrap items-center justify-center gap-x-10 gap-y-4 px-4 py-5 md:px-10 lg:justify-between">
        {TRUST_ITEMS.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-2.5">
            <Icon className="h-[18px] w-[18px] shrink-0 text-magenta" strokeWidth={1.75} />
            <span className="text-[13px] font-semibold tracking-wide text-white/85">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HERO VISUAL
   ═══════════════════════════════════════════════════════════════ */

function HeroVisual() {
  const cardClass = "flex items-center gap-2.5 rounded-xl bg-white px-3.5 py-3";
  const cardShadow = { boxShadow: "0 8px 24px rgba(26,39,68,0.10), 0 1px 4px rgba(26,39,68,0.06)" };

  return (
    <div className="relative hidden w-full lg:block" style={{ minHeight: "420px" }}>
      <div className="animate-float absolute left-[5%] bottom-[38%] z-10">
        <div className={cardClass} style={cardShadow}>
          <Image src="/images/icons/hero-rocket.webp" alt="Schnelle Einrichtung" width={96} height={96} className="h-8 w-8 rounded-lg object-cover" />
          <div>
            <p className="text-[11.5px] font-bold leading-none text-navy">Bereit in wenigen Minuten</p>
            <p className="mt-0.5 text-[9.5px] leading-snug text-navy/45">Keine komplizierte Einrichtung.</p>
          </div>
        </div>
      </div>
      <div className="animate-float-delay absolute right-[8%] bottom-[22%] z-10">
        <div className={cardClass} style={cardShadow}>
          <Image src="/images/icons/hero-cloud.webp" alt="Cloud-Steuerung" width={96} height={96} className="h-8 w-8 rounded-lg object-cover" />
          <div>
            <p className="text-[11.5px] font-bold leading-none text-navy">Cloud-basiert</p>
            <p className="mt-0.5 text-[9.5px] leading-snug text-navy/45">Inhalte überall verwalten.</p>
          </div>
        </div>
      </div>
      <div className="animate-float-slow absolute left-[20%] bottom-[4%] z-10">
        <div className={cardClass} style={cardShadow}>
          <Image src="/images/icons/hero-headset.webp" alt="Persönlicher Support" width={96} height={96} className="h-8 w-8 rounded-lg object-cover" />
          <div>
            <p className="text-[11.5px] font-bold leading-none text-navy">Alles aus einer Hand</p>
            <p className="mt-0.5 text-[9.5px] leading-snug text-navy/45">Hardware, Software und Content.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

