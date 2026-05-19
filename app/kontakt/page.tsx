import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import ContactFormSection from "@/components/sections/ContactFormSection";
import ContactSection from "@/components/sections/ContactSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import JsonLd from "@/components/JsonLd";
import { contactPageSchema } from "@/lib/schema/contactPage";
import { breadcrumbSchema } from "@/lib/schema/breadcrumb";
import data from "@/content/site/kontakt-page.json";

const SITE_URL = "https://www.meister-signage.ch";
const PAGE_URL = `${SITE_URL}/kontakt`;

export const metadata: Metadata = {
  title: { absolute: "Kontakt – Digital Signage Beratung Schweiz | Meister Signage" },
  description:
    "Kontaktieren Sie Meister Signage für persönliche Beratung rund um Digital Signage, Displays und moderne Kommunikationslösungen.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    locale: "de_CH",
    url: PAGE_URL,
    siteName: "Meister Signage",
    title: "Kontakt – Digital Signage Beratung Schweiz | Meister Signage",
    description: "Persönliche Beratung rund um Digital Signage. Direkt mit Chris Meister sprechen – kein Ticketsystem, kein Callcenter.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kontakt – Digital Signage Beratung Schweiz | Meister Signage",
    description: "Persönliche Beratung rund um Digital Signage. Direkt erreichbar – kein Ticketsystem.",
  },
};

const NOISE =
  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")";

export default function KontaktPage() {
  return (
    <>
      <JsonLd schema={contactPageSchema as Record<string, unknown>} />
      <JsonLd
        schema={
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Kontakt", path: "/kontakt" },
          ]) as Record<string, unknown>
        }
      />

      {/* ── Premium dark hero ─────────────────────────────────────── */}
      <section
        className="relative w-full overflow-hidden"
        style={{
          background: "linear-gradient(160deg, #07101f 0%, #0d1628 50%, #111d38 100%)",
        }}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          aria-hidden="true"
          style={{ backgroundImage: NOISE, backgroundSize: "160px 160px" }}
        />
        <div
          className="pointer-events-none absolute -right-40 top-0 h-full w-[700px]"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 60% 80% at 80% 40%, rgba(254,1,154,0.10) 0%, transparent 65%)",
          }}
        />
        <div
          className="pointer-events-none absolute -bottom-20 -left-20 h-[500px] w-[500px]"
          aria-hidden="true"
          style={{
            background: "radial-gradient(circle, rgba(26,39,68,0.8) 0%, transparent 70%)",
          }}
        />

        <div className="relative mx-auto flex max-w-[1200px] flex-col justify-center px-6 py-20 md:min-h-[55vh] md:px-10 lg:min-h-[60vh]">
          <div className="z-10 max-w-2xl">
            <span
              className="mb-6 inline-block text-[11px] font-bold uppercase tracking-[0.18em]"
              style={{ color: "rgba(254,1,154,0.9)" }}
            >
              {data.hero.eyebrow}
            </span>
            <h1
              className="mb-7 font-light leading-[0.95] tracking-tight"
              style={{
                fontSize: "clamp(2.2rem, 3.8vw, 3.6rem)",
                letterSpacing: "-0.035em",
                color: "#f3f4f6",
              }}
            >
              {data.hero.title}
            </h1>
            <p
              className="mb-8 max-w-[560px] leading-relaxed"
              style={{
                fontSize: "clamp(1rem, 1.5vw, 1.15rem)",
                color: "rgba(209,213,219,0.9)",
              }}
            >
              {data.hero.subtitle}
            </p>

            <ul className="mb-10 flex flex-col gap-2.5">
              {data.hero.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span
                    className="mt-[3px] h-[5px] w-[5px] shrink-0 rounded-full"
                    style={{ backgroundColor: "rgba(254,1,154,0.9)" }}
                    aria-hidden="true"
                  />
                  <span
                    className="text-[14px] tracking-wide"
                    style={{ color: "rgba(209,213,219,0.9)" }}
                  >
                    {b}
                  </span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <Link href="#kontaktformular" className="btn-primary gap-2.5">
                Zum Formular
                <ArrowRight className="h-4 w-4 shrink-0" strokeWidth={2} />
              </Link>
              <Link
                href="tel:+41764526687"
                className="inline-flex items-center gap-2.5 rounded-[7px] px-6 py-3.5 text-[15px] font-semibold transition-all duration-200 hover:border-white/30 hover:text-white"
                style={{
                  border: "1px solid rgba(255,255,255,0.14)",
                  color: "#e5e7eb",
                  minHeight: "3.5rem",
                }}
              >
                <Phone className="h-4 w-4 shrink-0" strokeWidth={2} />
                Direkt anrufen
              </Link>
            </div>
          </div>
        </div>

        <div
          className="pointer-events-none absolute bottom-0 left-0 right-0 h-40"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.04) 60%, rgba(255,255,255,0.10) 100%)",
          }}
        />
      </section>

      <div
        id="kontaktformular"
        className="relative w-full bg-white"
        style={{
          marginTop: "-44px",
          borderRadius: "28px 28px 0 0",
          zIndex: 10,
          boxShadow: "0 -12px 48px rgba(7,16,31,0.10)",
        }}
      >
        <ContactFormSection />
      </div>

      <ContactSection
        eyebrow={data.contact.eyebrow}
        title={data.contact.title}
        subtitle={data.contact.subtitle}
        email="chris@meister-signage.ch"
        imageSrc="/images/Chris-Meister.webp"
      />

      <FAQSection
        eyebrow={data.faq.eyebrow}
        title={data.faq.title}
        subtitle={data.faq.subtitle}
        faqs={data.faq.items}
      />

      <CTASection
        eyebrow={data.cta.eyebrow}
        title={data.cta.title}
        subtitle={data.cta.subtitle}
        primaryCta={{ label: data.cta.primaryLabel, href: data.cta.primaryHref }}
        secondaryCta={{ label: data.cta.secondaryLabel, href: data.cta.secondaryHref }}
      />
    </>
  );
}
