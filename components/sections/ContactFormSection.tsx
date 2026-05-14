"use client";

import { useState } from "react";
import { Phone, Mail, MessageCircle, MapPin } from "lucide-react";

type FormState = "idle" | "submitting" | "success" | "error";

// Replace XXXXXXXX with your Formspree form ID (formspree.io)
const FORMSPREE_ENDPOINT = "https://formspree.io/f/XXXXXXXX";

export default function ContactFormSection() {
  const [state, setState] = useState<FormState>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setState("success");
        form.reset();
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  }

  return (
    <section className="w-full bg-white">
      <div className="section-inner">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">

          {/* Left — Kontaktinformationen */}
          <div className="flex flex-col gap-8">
            <div>
              <span className="eyebrow">Direkter Kontakt</span>
              <h2 className="heading-max-2 mb-3 text-navy">
                Schnell, persönlich und unkompliziert.
              </h2>
              <p className="text-cgray">
                Kein Ticketsystem, keine Warteschleife. Sie erreichen Chris Meister direkt –
                per Telefon, E-Mail oder WhatsApp.
              </p>
            </div>

            {/* Contact links */}
            <div className="flex flex-col gap-3">
              <a
                href="tel:+41764526687"
                className="btn-secondary gap-3"
              >
                <Phone className="h-4 w-4 shrink-0" strokeWidth={1.5} />
                +41 76 452 66 87
              </a>
              <a
                href="mailto:chris@meister-signage.ch"
                className="btn-secondary gap-3"
              >
                <Mail className="h-4 w-4 shrink-0" strokeWidth={1.5} />
                chris@meister-signage.ch
              </a>
              <a
                href="https://wa.me/41764526687"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary gap-3"
              >
                <MessageCircle className="h-4 w-4 shrink-0" strokeWidth={1.5} />
                WhatsApp
              </a>
            </div>

            {/* Address */}
            <div className="flex items-start gap-3 border-t border-navy/10 pt-6">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.5} />
              <address className="not-italic">
                <p className="card-body font-semibold text-navy">Christopher Meister</p>
                <p className="card-body">Meister Signage</p>
                <p className="card-body">Chriesimatt 20</p>
                <p className="card-body">6340 Baar, Schweiz</p>
              </address>
            </div>
          </div>

          {/* Right — Formular */}
          <div>
            {state === "success" ? (
              <div className="card flex flex-col items-start gap-4 border-gold/40 py-10">
                <div className="h-px w-8 bg-gold" />
                <p className="card-title text-navy">Vielen Dank für Ihre Nachricht.</p>
                <p className="card-body">
                  Wir melden uns persönlich bei Ihnen – in der Regel innerhalb eines Werktages.
                </p>
                <button
                  onClick={() => setState("idle")}
                  className="btn-secondary mt-2"
                >
                  Weitere Nachricht senden
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>

                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-sm font-semibold text-navy">
                    Name <span className="text-magenta">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Vor- und Nachname"
                    className="rounded-[7px] border border-navy/20 bg-white px-4 py-3 text-[15px] text-navy placeholder:text-cgray/50 focus:border-magenta focus:outline-none focus:ring-1 focus:ring-magenta transition-colors duration-150"
                  />
                </div>

                {/* Firma */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="firma" className="text-sm font-semibold text-navy">
                    Firma <span className="text-cgray font-normal">(optional)</span>
                  </label>
                  <input
                    id="firma"
                    name="firma"
                    type="text"
                    autoComplete="organization"
                    placeholder="Name Ihres Unternehmens"
                    className="rounded-[7px] border border-navy/20 bg-white px-4 py-3 text-[15px] text-navy placeholder:text-cgray/50 focus:border-magenta focus:outline-none focus:ring-1 focus:ring-magenta transition-colors duration-150"
                  />
                </div>

                {/* E-Mail */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-sm font-semibold text-navy">
                    E-Mail <span className="text-magenta">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="ihre@email.ch"
                    className="rounded-[7px] border border-navy/20 bg-white px-4 py-3 text-[15px] text-navy placeholder:text-cgray/50 focus:border-magenta focus:outline-none focus:ring-1 focus:ring-magenta transition-colors duration-150"
                  />
                </div>

                {/* Telefon */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="telefon" className="text-sm font-semibold text-navy">
                    Telefon <span className="text-cgray font-normal">(optional)</span>
                  </label>
                  <input
                    id="telefon"
                    name="telefon"
                    type="tel"
                    autoComplete="tel"
                    placeholder="+41 ..."
                    className="rounded-[7px] border border-navy/20 bg-white px-4 py-3 text-[15px] text-navy placeholder:text-cgray/50 focus:border-magenta focus:outline-none focus:ring-1 focus:ring-magenta transition-colors duration-150"
                  />
                </div>

                {/* Nachricht */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="nachricht" className="text-sm font-semibold text-navy">
                    Nachricht <span className="text-magenta">*</span>
                  </label>
                  <textarea
                    id="nachricht"
                    name="nachricht"
                    required
                    rows={5}
                    placeholder="Was planen Sie? Wie können wir helfen?"
                    className="rounded-[7px] border border-navy/20 bg-white px-4 py-3 text-[15px] text-navy placeholder:text-cgray/50 focus:border-magenta focus:outline-none focus:ring-1 focus:ring-magenta transition-colors duration-150 resize-none"
                  />
                </div>

                {/* Error state */}
                {state === "error" && (
                  <p className="rounded-[7px] border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                    Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut oder schreiben Sie uns direkt per E-Mail.
                  </p>
                )}

                {/* Actions */}
                <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center">
                  <button
                    type="submit"
                    disabled={state === "submitting"}
                    className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {state === "submitting" ? "Wird gesendet…" : "Nachricht senden"}
                  </button>
                  <a
                    href="https://wa.me/41764526687"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary gap-2"
                  >
                    <MessageCircle className="h-4 w-4 shrink-0" strokeWidth={1.5} />
                    WhatsApp
                  </a>
                </div>

                <p className="text-xs text-cgray">
                  Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Daten gemäss unserer{" "}
                  <a href="/datenschutz" className="underline underline-offset-2 hover:text-navy transition-colors">
                    Datenschutzerklärung
                  </a>{" "}
                  zu.
                </p>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
