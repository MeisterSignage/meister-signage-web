import Image from "next/image";
import Link from "next/link";

const displays = [
  { name: "Spark 3", detail: "32 Zoll · Full HD", text: "Für Theken, Menüboards und kleine Innenflächen.", image: "Spark3-Design.webp" },
  { name: "Spark 4", detail: "43 Zoll · 4K UHD", text: "Für Gastronomie, Retail und Empfangsbereiche.", image: "Spark4-Design.webp" },
  { name: "Spark 5", detail: "50 Zoll · 4K UHD", text: "Für grössere Innenflächen und Besucherinformation.", image: "Spark5-Design.webp" },
  { name: "Spark Q+", detail: "33 Zoll · quadratisch", text: "Für quadratische Inhalte und besondere Raumkonzepte.", image: "SparkQ-Design.webp" },
];

export default function DisplayPurchaseSection() {
  return (
    <section className="w-full bg-offwhite" aria-labelledby="display-kauf-title">
      <div className="section-inner">
        <span className="eyebrow">Displays kaufen</span>
        <h2 id="display-kauf-title" className="heading-max-2 mb-4 text-navy">Das passende Display für Ihren Betrieb</h2>
        <p className="mb-8 max-w-2xl text-cgray">Wählen Sie Grösse und Format passend zu Einsatzort und Inhalt. Hardware, Einrichtung und Software werden in Ihrer Offerte separat ausgewiesen.</p>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {displays.map((display) => (
            <article key={display.name} className="flex flex-col rounded-xl border border-navy/10 bg-white p-6">
              <Image src={`/images/products/${display.image}`} alt={`${display.name} Digital-Signage-Display`} width={400} height={400} sizes="(max-width: 639px) 90vw, (max-width: 1023px) 45vw, 23vw" className="mb-5 aspect-square w-full object-contain" />
              <h3 className="text-xl font-bold text-navy">{display.name}</h3>
              <p className="mt-1 text-sm font-semibold text-navy">{display.detail}</p>
              <p className="mb-5 mt-3 text-sm text-cgray">{display.text}</p>
              <Link href="/digital-signage-kaufen#sortiment" className="mt-auto font-semibold text-magenta underline underline-offset-4">{display.name} ansehen</Link>
            </article>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="/digital-signage-kaufen" className="btn-primary">Alle Kaufdisplays vergleichen</Link>
          <Link href="/loesungen/displays" className="btn-secondary">Weitere Displaytypen</Link>
        </div>
      </div>
    </section>
  );
}
