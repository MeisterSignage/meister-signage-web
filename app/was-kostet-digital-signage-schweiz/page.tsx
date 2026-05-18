import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PricingQuickAnswerSection from "@/components/sections/PricingQuickAnswerSection";
import RentalPackagesSection from "@/components/sections/RentalPackagesSection";
import BuyVsRentSection from "@/components/sections/BuyVsRentSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import RecommendationSection from "@/components/sections/RecommendationSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import ContactSection from "@/components/sections/ContactSection";
import { Wrench, BadgeCheck, Truck, Palette, MapPin, Zap } from "lucide-react";
import InternalLinksSection from "@/components/sections/InternalLinksSection";
import JsonLd from "@/components/JsonLd";
import { faqSchema } from "@/lib/schema/faq";
import { breadcrumbSchema } from "@/lib/schema/breadcrumb";
import { serviceSchema } from "@/lib/schema/service";
import kostenFaq from "@/content/site/kosten-faq.json";

const NOISE =
  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")";

const BUY_PRICES = [
  {
    model: "Spark 3",
    size: '32" Full HD',
    price: "CHF 1'299",
    suitedFor: "Menüboards und Empfang",
  },
  {
    model: "Spark 4",
    size: '43" 4K UHD',
    price: "CHF 1'499",
    suitedFor: "Gastronomie und Retail",
  },
  {
    model: "Spark 5",
    size: '50" 4K UHD',
    price: "CHF 1'599",
    badge: "Empfehlung",
    suitedFor: "Schaufenster und grössere Flächen",
  },
  {
    model: "Spark Q+",
    size: '33" quadratisch Full HD',
    price: "CHF 1'699",
    suitedFor: "Spezialinstallationen",
  },
];

const PAGE_FAQS = kostenFaq.items;

const EXAMPLE_CALCULATIONS = [
  {
    title: "Kleines Restaurant",
    setup: "1 × Spark 4 (43\") als digitales Menüboard",
    monthly: "ab CHF 139/Monat",
    once: "+ CHF 149 Einrichtung",
    note: "inkl. Lizenz, Cloud-Steuerung und Support – Tagesmenüs jederzeit aktualisieren.",
  },
  {
    title: "Empfangsbereich",
    setup: "1 × Spark 5 (50\") als digitales Empfangsdisplay",
    monthly: "ab CHF 149/Monat",
    once: "+ CHF 149 Einrichtung",
    note: "Begrüssung, Termine und Branding zentral steuerbar.",
  },
  {
    title: "Eventeinsatz",
    setup: "2 × Spark 5 (50\") für Agenda und Wegleitung",
    monthly: "ab CHF 298/Monat",
    once: "individuelle Vorbereitung",
    note: "kurzfristige Miete inkl. Inhaltsvorbereitung und Rückgabe nach Event.",
  },
  {
    title: "Retailfläche",
    setup: "1 × Spark Q (33\" quadr.) + 1 × Spark 4 (43\")",
    monthly: "ab CHF 298/Monat",
    once: "+ CHF 149 Einrichtung",
    note: "Schaufenster und Verkaufsfläche bespielen – Kampagnen zentral gesteuert.",
  },
];

const SITE_URL = "https://www.meister-signage.ch";
const PAGE_URL = `${SITE_URL}/was-kostet-digital-signage-schweiz`;

export const metadata: Metadata = {
  title: { absolute: "Was kostet Digital Signage in der Schweiz? | Meister Signage" },
  description:
    "Digital Signage Kosten in der Schweiz: Mietpreise, Kaufpreise, Lizenzkosten und Kostenfaktoren verständlich erklärt. Mit Preisübersicht für KMU.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    locale: "de_CH",
    url: PAGE_URL,
    siteName: "Meister Signage",
    title: "Was kostet Digital Signage in der Schweiz? | Meister Signage",
    description: "Digital Signage Kosten in der Schweiz: Mietpreise, Kaufpreise, Lizenzkosten und Kostenfaktoren verständlich erklärt.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Was kostet Digital Signage in der Schweiz? | Meister Signage",
    description: "Mietpreise, Kaufpreise, Lizenzkosten und Kostenfaktoren für Digital Signage in der Schweiz.",
  },
};

const RENTAL_PACKAGES = [
  {
    name: "Spark 3",
    size: '32" Digital Signage Screen',
    price: 129,
    image: "/images/products/Spark3-Design.webp",
    benefits: ["inkl. Lizenz, Cloud-Steuerung und Support"],
  },
  {
    name: "Spark 4",
    size: '43" Digital Signage Screen',
    price: 139,
    image: "/images/products/Spark4-Design.webp",
    benefits: ["inkl. Lizenz, Cloud-Steuerung und Support"],
  },
  {
    name: "Spark 5",
    size: '50" Digital Signage Screen',
    price: 149,
    badge: "Populär",
    featured: true,
    image: "/images/products/Spark5-Design.webp",
    benefits: ["inkl. Lizenz, Cloud-Steuerung und Support"],
  },
  {
    name: "Spark Q",
    size: '33" Digital Signage Screen (quadratisch)',
    price: 159,
    badge: "Populär",
    featured: true,
    image: "/images/products/SparkQ-Design.webp",
    benefits: ["inkl. Lizenz, Cloud-Steuerung und Support"],
  },
];

export default function WasKostetDigitalSignagePage() {
  return (
    <>
      {/* Structured data */}
      <JsonLd schema={faqSchema(PAGE_FAQS) as Record<string, unknown>} />
      <JsonLd schema={breadcrumbSchema([
        { name: "Home",         path: "/" },
        { name: "Kostenübersicht", path: "/was-kostet-digital-signage-schweiz" },
      ]) as Record<string, unknown>} />
      <JsonLd schema={serviceSchema({
        name: "Digital Signage Kosten Schweiz",
        description: "Transparente Kostenübersicht für Digital-Signage-Lösungen in der Schweiz – Kauf, Miete, Lizenz und Einrichtung.",
        url: "https://www.meister-signage.ch/was-kostet-digital-signage-schweiz",
        serviceType: "Digital Signage Beratung",
      }) as Record<string, unknown>} />

      {/* 1 — Premium dark hero (matches /loesungen/* and /wissen/* treatment) */}
      <section
        className="relative w-full overflow-hidden"
        style={{ background: "linear-gradient(160deg, #07101f 0%, #0d1628 50%, #111d38 100%)" }}
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

        <div className="relative mx-auto flex max-w-[1200px] flex-col justify-center px-6 py-20 md:min-h-[60vh] md:px-10 lg:min-h-[62vh]">
          <div className="z-10 max-w-3xl">
            <span
              className="mb-6 inline-block text-[11px] font-bold uppercase tracking-[0.18em]"
              style={{ color: "rgba(254,1,154,0.9)" }}
            >
              Digital Signage Kosten Schweiz
            </span>
            <h1
              className="mb-7 font-light leading-[0.95] tracking-tight"
              style={{
                fontSize: "clamp(2.2rem, 3.8vw, 3.6rem)",
                letterSpacing: "-0.035em",
                color: "#f3f4f6",
              }}
            >
              Was kostet Digital Signage in der Schweiz?
            </h1>
            <p
              className="mb-10 leading-relaxed"
              style={{
                maxWidth: "560px",
                fontSize: "clamp(1rem, 1.5vw, 1.15rem)",
                color: "rgba(209,213,219,0.9)",
              }}
            >
              Eine klare Übersicht zu Mietpreisen, Kaufpreisen, Lizenzkosten und möglichen Zusatzkosten – damit Sie die passende Lösung für Ihren Betrieb fundiert planen können.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/kontakt" className="btn-primary gap-2.5">
                Beratung anfragen
                <ArrowRight className="h-4 w-4 shrink-0" strokeWidth={2} />
              </Link>
              <Link
                href="#pakete"
                className="inline-flex items-center gap-2.5 rounded-[7px] px-6 py-3.5 text-[15px] font-semibold transition-all duration-200 hover:border-white/30 hover:text-white"
                style={{
                  border: "1px solid rgba(255,255,255,0.14)",
                  color: "#e5e7eb",
                  minHeight: "3.5rem",
                }}
              >
                Mietpreise ansehen
              </Link>
            </div>

            {/* Trust micro */}
            <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3">
              {[
                "ab CHF 129/Mo. mieten",
                "ab CHF 1'299 kaufen",
                "transparent kalkuliert",
              ].map((t) => (
                <span
                  key={t}
                  className="flex items-center gap-2 text-[12px] font-medium tracking-wide"
                  style={{ color: "rgba(156,163,175,0.9)" }}
                >
                  <span
                    className="h-[5px] w-[5px] rounded-full"
                    style={{ backgroundColor: "rgba(254,1,154,0.7)" }}
                  />
                  {t}
                </span>
              ))}
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

      {/* 2 — Kurzantwort */}
      <PricingQuickAnswerSection
        title="Digital Signage Kosten – die Kurzantwort"
        text="Digital Signage kostet in der Schweiz je nach Modell ab CHF 129 pro Monat im Mietmodell oder ab CHF 1'299 beim Kauf eines professionellen Displays. Hinzu kommen je nach Modell Einrichtung, Versand, Softwarelizenz, Content-Erstellung oder Installation."
        facts={[
          {
            metric: "ab CHF 129/Mo.",
            label: "Miete",
            description: "inklusive Lizenz, Cloud-Steuerung und Support",
          },
          {
            metric: "ab CHF 1'299",
            label: "Kauf",
            description: "für professionelle Digital-Signage-Displays",
          },
          {
            metric: "ab CHF 149",
            label: "Einrichtung",
            description: "einmalig für Vorkonfiguration und Inbetriebnahme",
          },
        ]}
      />

      {/* 3 — Kaufpreise (premium card grid statt klassischer Preistabelle) */}
      <section className="w-full bg-offwhite">
        <div className="section-inner">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="eyebrow">Kaufen</span>
            <h2 className="mb-4 mt-2 text-[clamp(2rem,3.2vw,2.8rem)] font-light leading-[1.06] tracking-tight text-navy">
              Digital Signage kaufen – Preisübersicht
            </h2>
            <p className="mx-auto max-w-lg text-[16px] leading-relaxed text-cgray">
              Beim Kauf gehört das Display Ihnen. Das lohnt sich vor allem bei langfristigem Einsatz, mehreren Standorten oder wenn Sie volle Eigentümerschaft bevorzugen.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {BUY_PRICES.map((p) => (
              <div
                key={p.model}
                className="relative flex flex-col overflow-hidden rounded-[20px] bg-white p-7 transition-all duration-200"
                style={{
                  boxShadow: "0 2px 20px rgba(26,39,68,0.07), 0 0 0 1px rgba(26,39,68,0.055)",
                }}
              >
                {p.badge && (
                  <span
                    className="absolute right-5 top-5 rounded-full px-3 py-1 text-[9px] font-black uppercase tracking-[0.14em] text-white"
                    style={{ background: "rgba(254,1,154,0.85)" }}
                  >
                    {p.badge}
                  </span>
                )}

                <div className="h-px w-8 bg-gold/60" />

                <p className="mt-5 text-[22px] font-black tracking-tight text-navy">{p.model}</p>
                <p className="mt-1 text-[13px] text-cgray">{p.size}</p>

                <div className="mt-5">
                  <span className="text-[26px] font-light tracking-tight text-navy">{p.price}</span>
                  <span className="ml-2 text-[12px] text-cgray">einmalig</span>
                </div>

                <p className="mt-5 flex-1 text-[13px] leading-relaxed text-cgray">{p.suitedFor}</p>

                <Link
                  href="/kontakt"
                  className="mt-6 inline-flex items-center gap-1.5 text-[12px] font-bold uppercase tracking-[0.1em] text-magenta hover:text-navy transition-colors duration-150"
                >
                  Anfragen
                  <ArrowRight className="h-3 w-3" strokeWidth={2.5} />
                </Link>
              </div>
            ))}
          </div>

          <p className="mt-6 text-center text-[12px] text-cgray/60">
            Alle Preise als Richtwerte exkl. MwSt. · Versand ca. CHF 60 pro Display · 30 % der Monatsmieten exkl. Einrichtung können bei späterem Kauf angerechnet werden.
          </p>
        </div>
      </section>

      {/* 4 — Mietpreise */}
      <RentalPackagesSection
        eyebrow="Mieten"
        title="Digital Signage mieten – Preisübersicht"
        subtitle="Das Mietmodell eignet sich besonders für KMU, Events, Gastronomie, Retail und temporäre Einsätze. Die Kosten bleiben planbar und die Einstiegshürde tief."
        packages={RENTAL_PACKAGES}
        ctaLabel="Anfrage starten"
        ctaHref="/kontakt"
        note="Alle Preise exkl. MwSt. · Einmalige Einrichtungsgebühr: CHF 149 für Vorkonfiguration und Inbetriebnahme."
      />

      {/* 5 — Kaufen oder Mieten */}
      <BuyVsRentSection
        eyebrow="Kaufen oder mieten"
        title="Welche Variante lohnt sich für Ihren Betrieb?"
        subtitle="Die richtige Entscheidung hängt vor allem von Nutzungsdauer, Anzahl Screens, Budget und gewünschter Flexibilität ab."
        buyLabel="Kaufen lohnt sich, wenn:"
        rentLabel="Mieten lohnt sich, wenn:"
        buyReasons={[
          "Sie die Displays länger als drei Jahre einsetzen möchten",
          "mehrere Standorte ausgestattet werden sollen",
          "Sie Eigentum bevorzugen",
          "die Lösung langfristig fest eingeplant ist",
        ]}
        rentReasons={[
          "Sie flexibel bleiben möchten",
          "Sie Digital Signage zuerst testen wollen",
          "Sie geringe Anfangskosten bevorzugen",
          "die Kosten monatlich planbar bleiben sollen",
        ]}
      />

      {/* 6 — Kostenfaktoren */}
      <BenefitsSection
        eyebrow="Kostenfaktoren"
        title="Welche Zusatzkosten sollten Sie einplanen?"
        subtitle="Neben dem Displaypreis können je nach Projekt weitere Kosten entstehen. Wichtig ist, diese von Anfang an transparent zu betrachten."
        benefits={[
          {
            icon: Wrench,
            title: "Einrichtung",
            description:
              "Vorkonfiguration, Inbetriebnahme und Anpassung an den geplanten Einsatz. Ab CHF 149 einmalig.",
          },
          {
            icon: BadgeCheck,
            title: "Softwarelizenz",
            description:
              "Beim Kauf können Lizenzkosten ab CHF 180 pro Jahr oder ab CHF 15 pro Monat anfallen. Im Mietmodell ist die Lizenz enthalten.",
          },
          {
            icon: Truck,
            title: "Versand",
            description:
              "Pro Display können Versandkosten von ca. CHF 60 entstehen, abhängig von Standort und Bestellgrösse.",
          },
          {
            icon: Palette,
            title: "Content-Erstellung",
            description:
              "Falls keine eigenen Vorlagen vorhanden sind, können Inhalte oder Designvorlagen erstellt werden.",
          },
          {
            icon: MapPin,
            title: "Installation",
            description:
              "Je nach Einsatzort kann eine einfache Selbstmontage reichen oder eine Unterstützung vor Ort sinnvoll sein.",
          },
          {
            icon: Zap,
            title: "Betriebskosten",
            description:
              "Stromverbrauch und laufende Anpassungen sollten bei langfristiger Nutzung berücksichtigt werden.",
          },
        ]}
      />

      {/* 6.5 — Beispielrechnungen */}
      <section className="w-full bg-white">
        <div className="section-inner">
          <div className="section-header">
            <span className="eyebrow">Beispielrechnungen</span>
            <h2 className="heading-max-2 mb-3 text-navy">So setzen sich typische Setups zusammen.</h2>
            <p className="text-cgray">
              Vier realistische Szenarien aus Praxis-Anfragen – als Orientierung für Ihr eigenes Projekt.
            </p>
          </div>

          <div className="card-grid card-grid-2">
            {EXAMPLE_CALCULATIONS.map((ex) => (
              <div
                key={ex.title}
                className="flex flex-col gap-4 border border-navy/8 bg-offwhite p-6 transition-all duration-200 hover:border-navy/[0.14] hover:shadow-[0_4px_20px_rgba(26,39,68,0.06)]"
              >
                <div className="h-px w-8 bg-gold/50" />
                <p className="card-title">{ex.title}</p>
                <p className="text-[14px] leading-relaxed text-navy/75">{ex.setup}</p>
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="text-[20px] font-black tracking-tight text-navy">{ex.monthly}</span>
                  <span className="text-[12px] text-cgray">{ex.once}</span>
                </div>
                <p className="card-body">{ex.note}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-center text-[12px] text-cgray/60">
            Alle Preise als Richtwerte exkl. MwSt. – individuelle Setups auf Anfrage.
          </p>
        </div>
      </section>

      {/* 7 — Empfehlung */}
      <RecommendationSection
        title="Unsere Empfehlung für KMU"
        text="Für viele kleinere und mittlere Betriebe ist ein Mietmodell der einfachste Einstieg. Es reduziert die Anfangsinvestition, beinhaltet die wichtigsten Leistungen und erlaubt es, Digital Signage im Alltag zu testen. Wenn sich die Lösung bewährt, kann später erweitert oder ein Kauf geprüft werden."
        ctaLabel="Unverbindlich beraten lassen"
        ctaHref="/kontakt"
      />

      {/* 8 — FAQ */}
      <FAQSection
        eyebrow="Häufige Fragen"
        title="Häufige Fragen zu Digital Signage Kosten."
        subtitle="Klare Antworten zu Preisen, Modellen und Entscheidungshilfen."
        faqs={PAGE_FAQS}
      />

      <InternalLinksSection
        eyebrow="Weitere Seiten"
        links={[
          { label: "Digital Signage mieten",   href: "/digital-signage-mieten" },
          { label: "Digital Signage kaufen",   href: "/digital-signage-kaufen" },
          { label: "Software",                 href: "/loesungen/software" },
          { label: "Mieten oder Kaufen?",      href: "/wissen/digital-signage-mieten-oder-kaufen" },
          { label: "Digital Signage Schweiz",  href: "/digital-signage-schweiz" },
          { label: "Beratung anfragen",        href: "/kontakt" },
        ]}
      />

      {/* 9 — CTA */}
      <CTASection
        eyebrow="Kosten einschätzen"
        title="Sie möchten wissen, was Digital Signage für Ihren Betrieb kostet?"
        subtitle="Schildern Sie kurz Ihren Einsatz. Wir zeigen Ihnen, welche Variante sinnvoll ist und welche Kosten realistisch einzuplanen sind."
        primaryCta={{ label: "Beratung anfragen", href: "/kontakt" }}
        secondaryCta={{ label: "Mietpreise ansehen", href: "/digital-signage-mieten#pakete" }}
      />

      {/* 10 — Contact */}
      <ContactSection
        eyebrow="Persönlicher Kontakt"
        title="Sie möchten die Kosten für Ihre konkrete Situation besprechen?"
        subtitle="Schreiben Sie kurz, was Sie vorhaben. Wir rechnen Ihnen transparent durch, was sinnvoll und was realistisch ist."
        imageSrc="/images/Chris-Meister.webp"
      />
    </>
  );
}
