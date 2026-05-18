import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import ContactSection from "@/components/sections/ContactSection";

export type OverviewItem = {
  title: string;
  desc: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
};

type Props = {
  eyebrow: string;
  title: string;
  intro: string;
  items: OverviewItem[];
  contactTitle: string;
  contactSubtitle: string;
};

const NOISE =
  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")";

export default function OverviewPage({
  eyebrow,
  title,
  intro,
  items,
  contactTitle,
  contactSubtitle,
}: Props) {
  return (
    <>
      {/* ── Hero (text-only) ─────────────────────────────────────────────── */}
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
          <div className="z-10 max-w-3xl">
            <span
              className="mb-6 inline-block text-[11px] font-bold uppercase tracking-[0.18em]"
              style={{ color: "rgba(254,1,154,0.9)" }}
            >
              {eyebrow}
            </span>
            <h1
              className="mb-7 font-light leading-[0.95] tracking-tight"
              style={{
                fontSize: "clamp(2.2rem, 3.8vw, 3.6rem)",
                letterSpacing: "-0.035em",
                color: "#f3f4f6",
              }}
            >
              {title}
            </h1>
            <p
              className="mb-10 leading-relaxed"
              style={{
                maxWidth: "560px",
                fontSize: "clamp(1rem, 1.5vw, 1.15rem)",
                color: "rgba(209,213,219,0.9)",
              }}
            >
              {intro}
            </p>
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

      {/* ── Cards grid (floating card) ───────────────────────────────────── */}
      <section
        className="relative w-full bg-white"
        style={{
          marginTop: "-44px",
          borderRadius: "28px 28px 0 0",
          zIndex: 10,
          boxShadow: "0 -12px 48px rgba(7,16,31,0.10)",
        }}
      >
        <div className="section-inner">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex flex-col overflow-hidden rounded-[20px] bg-white transition-all duration-300"
                style={{
                  boxShadow: "0 2px 20px rgba(26,39,68,0.07), 0 0 0 1px rgba(26,39,68,0.055)",
                }}
              >
                <div
                  className="relative aspect-[4/3] overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(145deg, #0d1628 0%, #1a2744 60%, #0a1020 100%)",
                  }}
                >
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    fill
                    className="object-cover transition-transform duration-500 ease-out will-change-transform group-hover:scale-[1.05]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, transparent 50%, rgba(7,16,31,0.4) 100%)",
                    }}
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h2 className="mb-3 text-[20px] font-bold tracking-tight text-navy transition-colors duration-150 group-hover:text-magenta">
                    {item.title}
                  </h2>
                  <p className="mb-5 text-[14px] leading-relaxed text-cgray">{item.desc}</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 text-[12px] font-bold uppercase tracking-[0.1em] text-magenta">
                    Mehr erfahren
                    <ArrowRight
                      className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-1"
                      strokeWidth={2.5}
                    />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactSection
        eyebrow="Persönlicher Kontakt"
        title={contactTitle}
        subtitle={contactSubtitle}
        imageSrc="/images/Chris-Meister.webp"
      />
    </>
  );
}
