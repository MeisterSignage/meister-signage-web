import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Check, Minus, ArrowRight } from "lucide-react";
import SectionContainer from "@/components/ui/SectionContainer";
import ContactSection from "@/components/sections/ContactSection";
import InternalLinksSection from "@/components/sections/InternalLinksSection";
import ModernFAQSection from "@/components/sections/ModernFAQSection";
import JsonLd from "@/components/JsonLd";
import { faqSchema } from "@/lib/schema/faq";
import { breadcrumbSchema } from "@/lib/schema/breadcrumb";

const SITE_URL = "https://www.meister-signage.ch";
const PAGE_URL = `${SITE_URL}/digital-signage-anbieter-vergleich`;
const COMPARISON_DATE = "Mai 2026";

export const metadata: Metadata = {
  title: { absolute: "Digital Signage Anbieter Schweiz im Vergleich | Meister Signage" },
  description:
    "Digital-Signage-Anbieter in der Schweiz im sachlichen Vergleich: Meister Signage, Screencom, e-display, Kilchenmann, Inputech. Preise, Modell, Sitz – Stand Mai 2026.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    locale: "de_CH",
    url: PAGE_URL,
    siteName: "Meister Signage",
    title: "Digital Signage Anbieter Schweiz im Vergleich",
    description:
      "Sachlicher Vergleich der wichtigsten Digital-Signage-Anbieter in der Schweiz. Stand Mai 2026.",
    images: [{
      url: `${SITE_URL}/images/products/Anbietervergleich-Meister-Signage.webp`,
      width: 1600,
      height: 900,
      alt: "Digital Signage Anbieter Schweiz im Vergleich",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Signage Anbieter Schweiz im Vergleich",
    description:
      "Sachlicher Vergleich der wichtigsten Digital-Signage-Anbieter in der Schweiz.",
    images: [`${SITE_URL}/images/products/Anbietervergleich-Meister-Signage.webp`],
  },
};

/* ─── Comparison data ─────────────────────────────────────────────────────── */

type Cell =
  | { type: "yes"; note?: string }
  | { type: "no"; note?: string }
  | { type: "info"; text: string };

type Provider = {
  name: string;
  url: string;
  location: string;
};

const PROVIDERS: Provider[] = [
  { name: "Meister Signage", url: SITE_URL,                 location: "Baar (ZG)" },
  { name: "Screencom",       url: "https://screencom.ch",    location: "Alpnach (OW)" },
  { name: "e-display.ch",    url: "https://www.e-display.ch",location: "Rothenburg (LU)" },
  { name: "Kilchenmann",     url: "https://www.kilchenmann.ch", location: "Kehrsatz (BE)" },
  { name: "Inputech",        url: "https://www.inputech.ch", location: "Eglisau (ZH)" },
];

type Row = {
  criterion: string;
  cells: Cell[]; // length === PROVIDERS.length
};

/* Reihenfolge: Meister, Screencom, e-display, Kilchenmann, Inputech.
   "no" bedeutet hier: auf der öffentlichen Anbieter-Website nicht auffindbar.
   Quellen: jeweilige Anbieter-Websites, Stand Mai 2026. */
const ROWS: Row[] = [
  {
    criterion: "Sitz in der Schweiz",
    cells: [
      { type: "info", text: "Baar (ZG)" },
      { type: "info", text: "Alpnach (OW)" },
      { type: "info", text: "Rothenburg (LU)" },
      { type: "info", text: "Kehrsatz (BE)" },
      { type: "info", text: "Eglisau (ZH)" },
    ],
  },
  {
    criterion: "Transparente Preise auf der Website",
    cells: [
      { type: "yes", note: "ab CHF 129 (Miete) oder CHF 1.299 (Kauf)" },
      { type: "no" },
      { type: "no" },
      { type: "no", note: "Beratungsmodell" },
      { type: "no", note: "Beratungsmodell" },
    ],
  },
  {
    criterion: "Sowohl Kauf als Miete im Standard­angebot",
    cells: [
      { type: "yes" },
      { type: "info", text: "Mietfokus" },
      { type: "yes" },
      { type: "info", text: "auf Anfrage" },
      { type: "info", text: "primär Kauf" },
    ],
  },
  {
    criterion: "Schlüsselfertige Komplettlösung (Display + Software + Installation, ein Preis)",
    cells: [
      { type: "yes" },
      { type: "no", note: "Lizenz separat" },
      { type: "info", text: "modular" },
      { type: "info", text: "projektbasiert" },
      { type: "info", text: "projektbasiert" },
    ],
  },
  {
    criterion: "Kuratiertes Modellsortiment mit Festpreis",
    cells: [
      { type: "yes", note: "Spark-Reihe (4 Modelle) + weitere auf Anfrage" },
      { type: "info", text: "Multi-Brand (Samsung, LG, Epson, Barco)" },
      { type: "info", text: "Multi-Brand-Auswahl" },
      { type: "info", text: "projektspezifisch kuratiert" },
      { type: "info", text: "breites Distributoren-Sortiment" },
    ],
  },
  {
    criterion: "Display-Bautiefe (Slim-Design)",
    cells: [
      { type: "yes", note: "15.5 mm – Bezel nur 13.5 mm" },
      { type: "info", text: "nicht öffentlich angegeben" },
      { type: "info", text: "nicht öffentlich angegeben" },
      { type: "info", text: "nicht öffentlich angegeben" },
      { type: "info", text: "nicht öffentlich angegeben" },
    ],
  },
  {
    criterion: "Stromzuführung am Display",
    cells: [
      { type: "yes", note: "24 V DC über externes Netzteil (120 W, GS-zertifiziert) – keine 230 V-Dose am Display nötig" },
      { type: "info", text: "nicht öffentlich angegeben" },
      { type: "info", text: "nicht öffentlich angegeben" },
      { type: "info", text: "nicht öffentlich angegeben" },
      { type: "info", text: "nicht öffentlich angegeben" },
    ],
  },
  {
    criterion: "Software-Lizenz bei Miete inklusive",
    cells: [
      { type: "yes" },
      { type: "no", note: "nicht öffentlich angegeben" },
      { type: "no", note: "nicht öffentlich angegeben" },
      { type: "info", text: "kein Standard-Mietmodell" },
      { type: "info", text: "kein Standard-Mietmodell" },
    ],
  },
  {
    criterion: "Software-Lizenz beim Kauf",
    cells: [
      { type: "info", text: "ab CHF 180/Jahr (transparent ausgewiesen)" },
      { type: "info", text: "nicht öffentlich angegeben" },
      { type: "info", text: "nicht öffentlich angegeben" },
      { type: "info", text: "individuell" },
      { type: "info", text: "individuell" },
    ],
  },
  {
    criterion: "Direkter Inhaber-Kontakt",
    cells: [
      { type: "yes", note: "Chris Meister persönlich" },
      { type: "info", text: "Vertriebsteam" },
      { type: "info", text: "Vertriebsteam" },
      { type: "info", text: "Vertriebsteam" },
      { type: "info", text: "Vertriebsteam" },
    ],
  },
  {
    criterion: "KMU-Fokus (statt nur Grossprojekte)",
    cells: [
      { type: "yes" },
      { type: "yes" },
      { type: "yes" },
      { type: "info", text: "auch Grossprojekte" },
      { type: "info", text: "B2B-Distribution" },
    ],
  },
];

/* ─── FAQ ─────────────────────────────────────────────────────────────────── */

const PAGE_FAQS = [
  {
    question: "Wie wurde dieser Vergleich erstellt?",
    answer:
      "Die Angaben stammen ausschliesslich aus den öffentlich zugänglichen Inhalten der jeweiligen Anbieter-Websites, Stand Mai 2026. Wir bemühen uns um Korrektheit und ergänzen oder korrigieren auf Hinweis. Wertungen wurden bewusst weggelassen – die Tabelle zeigt nur Fakten.",
  },
  {
    question: "Bietet Meister Signage auch andere Displays als die Spark-Reihe?",
    answer:
      "Ja. Die Spark-Reihe ist unser Standardangebot mit Festpreis und schneller Einsatzbereitschaft – für die meisten KMU-Anwendungen ideal. Für Sonderwünsche – grössere Formate, Outdoor-Einsatz, spezielle Einbausituationen oder Touch-Lösungen – beraten wir gerne und beschaffen das passende Modell. Einfach kurz anfragen.",
  },
  {
    question: "Welcher Anbieter passt für mein KMU?",
    answer:
      "Das hängt vom Einsatzzweck ab. Für reine Kurzzeit-Miete (Events, Messen) sind spezialisierte Vermieter wie Screencom oder e-display gut aufgestellt. Für komplexe Projekte mit mehreren Standorten und individueller Integration bieten sich Systemintegratoren wie Kilchenmann an. Für KMU, die eine schlüsselfertige Komplettlösung mit transparenten Preisen und persönlicher Betreuung wünschen, ist Meister Signage konzipiert.",
  },
  {
    question: "Warum stehen bei einigen Anbietern keine Preise auf der Website?",
    answer:
      "Klassische Systemintegratoren und B2B-Distributoren arbeiten projektbasiert. Preise hängen stark von Skalierung, Integration und Service-Umfang ab und werden im Beratungsgespräch ermittelt. Das ist branchenüblich und nicht negativ – setzt aber voraus, dass Interessierte erst ein Gespräch führen, bevor sie eine Preisorientierung erhalten.",
  },
  {
    question: "Können die Angaben in der Tabelle veraltet sein?",
    answer:
      "Ja. Anbieter ändern Angebote, Preise und Modelle laufend. Stand der Recherche ist Mai 2026. Falls Sie eine Korrektur sehen, melden Sie sich bitte – wir aktualisieren die Tabelle gerne.",
  },
];

/* ─── Cell renderer ───────────────────────────────────────────────────────── */

function CellContent({ cell, isMeister }: { cell: Cell; isMeister: boolean }) {
  if (cell.type === "yes") {
    return (
      <div className="flex flex-col items-start gap-1">
        <span
          className={`inline-flex h-6 w-6 items-center justify-center rounded-full ${
            isMeister ? "bg-magenta text-white" : "bg-emerald-100 text-emerald-700"
          }`}
          aria-label="Ja"
        >
          <Check className="h-3.5 w-3.5" strokeWidth={3} />
        </span>
        {cell.note && <span className="text-[12px] leading-snug text-cgray">{cell.note}</span>}
      </div>
    );
  }
  if (cell.type === "no") {
    return (
      <div className="flex flex-col items-start gap-1">
        <span
          className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-navy/8 text-navy/50"
          aria-label="Nein oder nicht öffentlich angegeben"
        >
          <Minus className="h-3.5 w-3.5" strokeWidth={3} />
        </span>
        {cell.note && <span className="text-[12px] leading-snug text-cgray">{cell.note}</span>}
      </div>
    );
  }
  return (
    <span className="text-[13px] leading-snug text-navy">{cell.text}</span>
  );
}

/* ─── JSON-LD: ItemList of providers ─────────────────────────────────────── */

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Digital Signage Anbieter Schweiz im Vergleich",
  url: PAGE_URL,
  numberOfItems: PROVIDERS.length,
  itemListElement: PROVIDERS.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: p.name,
    url: p.url,
  })),
};

/* ─── Page ────────────────────────────────────────────────────────────────── */

export default function AnbieterVergleichPage() {
  return (
    <>
      <JsonLd schema={faqSchema(PAGE_FAQS) as Record<string, unknown>} />
      <JsonLd
        schema={
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Anbieter-Vergleich", path: "/digital-signage-anbieter-vergleich" },
          ]) as Record<string, unknown>
        }
      />
      <JsonLd schema={itemListSchema as Record<string, unknown>} />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section
        className="relative w-full overflow-hidden"
        style={{ background: "linear-gradient(160deg, #07101f 0%, #0d1628 50%, #111d38 100%)" }}
      >
        {/* Hero image — centered, full section height, natural width from
            aspect ratio. Two gradient overlays fade only the image edges. */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
          <div className="relative h-full">
            <Image
              src="/images/products/Anbietervergleich-Meister-Signage.webp"
              alt="Digital Signage Anbieter Schweiz im Vergleich – Übersicht der wichtigsten Anbieter"
              width={1600}
              height={900}
              priority
              className="h-full w-auto max-w-none"
            />
            <div
              className="pointer-events-none absolute left-0 top-0 bottom-0 w-[28%]"
              aria-hidden="true"
              style={{
                background:
                  "linear-gradient(to right, #07101f 0%, rgba(7,16,31,0.85) 35%, rgba(7,16,31,0) 100%)",
              }}
            />
            <div
              className="pointer-events-none absolute right-0 top-0 bottom-0 w-[28%]"
              aria-hidden="true"
              style={{
                background:
                  "linear-gradient(to left, #07101f 0%, rgba(7,16,31,0.85) 35%, rgba(7,16,31,0) 100%)",
              }}
            />
          </div>
        </div>
        <div className="relative mx-auto max-w-[1200px] px-6 py-24 md:px-10 md:py-28">
          <div className="z-10 max-w-2xl">
            <span
              className="mb-6 inline-block text-[11px] font-bold uppercase tracking-[0.18em]"
              style={{ color: "rgba(254,1,154,0.9)" }}
            >
              Anbieter-Vergleich · Stand {COMPARISON_DATE}
            </span>
            <h1
              className="mb-6 font-light leading-[0.95] tracking-tight text-white"
              style={{ fontSize: "clamp(2.2rem, 3.8vw, 3.4rem)", letterSpacing: "-0.035em" }}
            >
              Digital Signage Anbieter in der Schweiz im Vergleich.
            </h1>
            <p className="mb-8 text-[16px] leading-relaxed text-white/85 md:text-[17px]">
              Sachlicher Überblick über die wichtigsten Schweizer Digital-Signage-Anbieter – mit
              Standort, Preismodell und Angebot. Nur öffentlich zugängliche Fakten, keine
              Wertungen.
            </p>
            <a
              href="#vergleich"
              className="inline-flex items-center gap-2.5 rounded-[7px] bg-white/10 px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-white/20"
            >
              Direkt zur Vergleichstabelle
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </a>
          </div>
        </div>
      </section>

      {/* ── Comparison table ─────────────────────────────────────────────── */}
      <section id="vergleich" className="w-full bg-white">
        <div className="section-inner">
          <div className="section-header">
            <span className="eyebrow">Vergleichstabelle</span>
            <h2 className="heading-max-2 mb-3 text-navy">
              11 Kriterien, 5 Anbieter, ein Blick.
            </h2>
            <p className="text-cgray">
              Auf grösseren Bildschirmen sehen Sie die vollständige Vergleichstabelle, auf dem
              Smartphone einen kompakten Anbieter-für-Anbieter-Überblick. Alle Angaben stammen aus
              den öffentlich zugänglichen Inhalten der jeweiligen Anbieter-Website, Stand{" "}
              {COMPARISON_DATE}.
            </p>
          </div>

          {/* Mobile: card per provider */}
          <div className="space-y-5 md:hidden">
            {PROVIDERS.map((p, pi) => (
              <div
                key={p.name}
                className={`rounded-[12px] border p-5 ${
                  pi === 0
                    ? "border-magenta/30 bg-magenta/5"
                    : "border-navy/10 bg-white"
                }`}
              >
                <div className="mb-4 flex items-baseline justify-between gap-3">
                  <div>
                    <h3 className="text-[16px] font-bold text-navy">
                      {pi === 0 ? (
                        p.name
                      ) : (
                        <a
                          href={p.url}
                          target="_blank"
                          rel="noopener noreferrer nofollow"
                          className="hover:text-magenta"
                        >
                          {p.name}
                        </a>
                      )}
                    </h3>
                    <p className="text-[12px] text-cgray">{p.location}</p>
                  </div>
                  {pi === 0 && (
                    <span className="rounded-full bg-magenta px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                      Wir
                    </span>
                  )}
                </div>
                <dl className="divide-y divide-navy/8">
                  {ROWS.map((row) => (
                    <div
                      key={row.criterion}
                      className="flex items-start gap-3 py-2.5"
                    >
                      <dt className="flex-1 text-[12px] font-semibold leading-snug text-navy/70">
                        {row.criterion}
                      </dt>
                      <dd className="max-w-[58%] text-right text-[13px] text-navy">
                        <div className="flex justify-end">
                          <CellContent cell={row.cells[pi]} isMeister={pi === 0} />
                        </div>
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>

          {/* Desktop: full table */}
          <div className="hidden overflow-x-auto rounded-[7px] border border-navy/10 md:block">
            <table className="w-full min-w-[860px] border-collapse text-sm">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="sticky left-0 z-10 min-w-[240px] bg-navy px-5 py-4 text-left text-xs font-semibold uppercase tracking-widest text-white/70">
                    Kriterium
                  </th>
                  {PROVIDERS.map((p, i) => (
                    <th
                      key={p.name}
                      className={`min-w-[150px] px-5 py-4 text-left text-xs font-semibold uppercase tracking-widest ${
                        i === 0 ? "bg-magenta/95 text-white" : "text-white/70"
                      }`}
                    >
                      {i === 0 ? (
                        <span className="block text-white">{p.name}</span>
                      ) : (
                        <a
                          href={p.url}
                          target="_blank"
                          rel="noopener noreferrer nofollow"
                          className="block text-white/90 hover:text-white"
                        >
                          {p.name}
                        </a>
                      )}
                      <span className="mt-1 block text-[11px] font-normal normal-case tracking-normal text-white/50">
                        {p.location}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row, ri) => (
                  <tr
                    key={row.criterion}
                    className={`border-t border-navy/8 ${
                      ri % 2 === 0 ? "bg-white" : "bg-offwhite/60"
                    }`}
                  >
                    <th
                      scope="row"
                      className={`sticky left-0 z-10 px-5 py-5 text-left font-semibold text-navy ${
                        ri % 2 === 0 ? "bg-white" : "bg-offwhite/60"
                      }`}
                    >
                      {row.criterion}
                    </th>
                    {row.cells.map((cell, ci) => (
                      <td key={ci} className="px-5 py-5 align-top">
                        <CellContent cell={cell} isMeister={ci === 0} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-[12px] text-cgray">
            <span className="inline-flex items-center gap-2">
              <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                <Check className="h-2.5 w-2.5" strokeWidth={3} />
              </span>
              vorhanden
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-navy/8 text-navy/50">
                <Minus className="h-2.5 w-2.5" strokeWidth={3} />
              </span>
              auf der Website nicht öffentlich angegeben
            </span>
            <span>Stand: {COMPARISON_DATE}</span>
          </div>
        </div>
      </section>

      {/* ── Was unterscheidet Meister Signage ─────────────────────────────── */}
      <SectionContainer bg="offwhite">
        <div className="section-header">
          <span className="eyebrow">Was unterscheidet Meister Signage</span>
          <h2 className="heading-max-2 mb-3 text-navy">
            Schlüsselfertig, transparent, persönlich – für KMU gebaut.
          </h2>
          <p className="max-w-2xl text-cgray">
            Wir positionieren uns bewusst nicht als Systemintegrator für Grossprojekte oder als
            reiner Distributor, sondern als kompakter Komplettanbieter für KMU, die eine
            klare Lösung mit klarem Preis möchten.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Preise sichtbar – sofort einschätzbar",
              body: "Sie wissen vor dem ersten Gespräch, ob das Budget reicht. Ab CHF 1.299 zum Kauf (Lizenz ab CHF 180/Jahr) oder ab CHF 129 zur Miete inkl. Lizenz.",
            },
            {
              title: "Klares Spark-Sortiment + Flexibilität",
              body: "Vier Spark-Standardmodelle (32\" bis 50\", Full HD bis 4K), spezifiziert für 24/7-Dauerbetrieb. Decken die meisten KMU-Einsätze ohne lange Modellauswahl ab. Für Sonderwünsche – grössere Formate, Outdoor, spezielle Einbausituationen – sind weitere Modelle verfügbar.",
            },
            {
              title: "Nur 15.5 mm Bautiefe",
              body: "Die Spark-Displays sind 15.5 mm flach mit einem Bezel von nur 13.5 mm – ungewöhnlich dünn für diese Klasse (Branchen-Standard 40–80 mm). Sie wirken im Raum wie ein Bild an der Wand statt wie ein technisches Gerät. Wichtig für Gastronomie, Hotellerie und Retail, wo Ästhetik zählt.",
            },
            {
              title: "Datenübertragung 100 % wireless",
              body: "Keine HDMI-, USB- oder Ethernet-Anschlüsse am Display. Inhalte werden über WiFi6 und einen integrierten Media Player abgespielt – weniger sichtbare Technik, weniger Komponenten, weniger Störquellen.",
            },
            {
              title: "24 V DC am Display",
              body: "Externes 120-W-Netzteil (HOIOTO, GS- und TÜV-zertifiziert, Effizienz-Klasse VI) wandelt 230 V auf 24 V DC. Zum Display führt nur eine dünne 24-V-Leitung – keine 230 V-Steckdose direkt am Display nötig. Vereinfacht Installationen in Schaufenstern, Empfangsbereichen und Sonderaufbauten, oft ohne Elektriker.",
            },
            {
              title: "Schlüsselfertig & transparent",
              body: "Bei der Miete sind Display, Software-Lizenz, Einrichtung und Lieferung in einem Monatspreis enthalten. Beim Kauf ist die Lizenz separat ausgewiesen (ab CHF 180/Jahr) – keine versteckten Posten.",
            },
            {
              title: "Direkter Kontakt zum Inhaber",
              body: "Sie sprechen mit Chris Meister persönlich – nicht mit einem Vertriebsteam. Entscheidungen sind kurz, Verantwortung ist klar.",
            },
            {
              title: "Miete als risikofreier Einstieg",
              body: "Wer unsicher ist, startet mit Miete und prüft die Lösung im Alltag. Späterer Wechsel auf Kauf ist möglich.",
            },
            {
              title: "Sitz in Baar – lokal in der Zentralschweiz",
              body: "Vor-Ort-Beratung und Installation in Luzern, Zug, Zürich und Umgebung. Kurze Wege bedeuten kurze Reaktionszeiten.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-[14px] border border-navy/8 bg-white p-6"
            >
              <h3 className="mb-2 text-[16px] font-semibold text-navy">{item.title}</h3>
              <p className="text-[14px] leading-relaxed text-cgray">{item.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/digital-signage-kaufen" className="btn-primary gap-2.5">
            Displays kaufen ansehen
            <ArrowRight className="h-4 w-4" strokeWidth={2} />
          </Link>
          <Link
            href="/digital-signage-mieten"
            className="inline-flex items-center gap-2.5 rounded-[7px] border border-navy/15 px-6 py-3.5 text-[15px] font-semibold text-navy hover:border-navy/30"
          >
            Mietangebot ansehen
          </Link>
        </div>
      </SectionContainer>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <ModernFAQSection
        eyebrow="Häufige Fragen"
        title="Was Sie zum Vergleich wissen sollten."
        subtitle="Methodik, Tonalität und Aktualität der Vergleichstabelle."
        faqs={PAGE_FAQS}
      />

      {/* ── Internal links ───────────────────────────────────────────────── */}
      <InternalLinksSection
        eyebrow="Weitere Seiten"
        links={[
          { label: "Digital Signage kaufen",       href: "/digital-signage-kaufen" },
          { label: "Digital Signage mieten",       href: "/digital-signage-mieten" },
          { label: "Kosten & Preise",              href: "/was-kostet-digital-signage-schweiz" },
          { label: "Digital Signage Luzern",       href: "/staedte/luzern" },
          { label: "Digital Signage Zürich",       href: "/staedte/zuerich" },
          { label: "Über Meister Signage",         href: "/ueber-uns" },
        ]}
      />

      {/* ── Contact ──────────────────────────────────────────────────────── */}
      <ContactSection
        eyebrow="Persönlicher Kontakt"
        title="Welche Lösung passt zu Ihrem Betrieb?"
        subtitle="Schildern Sie kurz Ihre Situation – wir sagen ehrlich, ob Meister Signage passt oder ob ein anderer Anbieter für Ihr Vorhaben sinnvoller wäre."
        imageSrc="/images/Chris-Meister.webp"
      />
    </>
  );
}
