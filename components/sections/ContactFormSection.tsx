"use client";

import { useState, useId } from "react";
import { Phone, Mail, MessageCircle, MapPin } from "lucide-react";

type FormState = "idle" | "submitting" | "success" | "error";

interface FieldErrors {
  vorname?: string;
  nachname?: string;
  email?: string;
  nachricht?: string;
  datenschutz?: string;
}

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xlgzyjvk";

function validateForm(data: FormData, datenschutz: boolean): FieldErrors {
  const errors: FieldErrors = {};

  const vorname = (data.get("vorname") as string | null)?.trim() ?? "";
  const nachname = (data.get("nachname") as string | null)?.trim() ?? "";
  const email = (data.get("email") as string | null)?.trim() ?? "";
  const nachricht = (data.get("nachricht") as string | null)?.trim() ?? "";

  if (!vorname) errors.vorname = "Bitte geben Sie Ihren Vornamen ein.";
  if (!nachname) errors.nachname = "Bitte geben Sie Ihren Nachnamen ein.";

  if (!email) {
    errors.email = "Bitte geben Sie Ihre E-Mail-Adresse ein.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Bitte geben Sie eine gültige E-Mail-Adresse ein.";
  }

  if (!nachricht) errors.nachricht = "Bitte geben Sie eine Nachricht ein.";

  if (!datenschutz) {
    errors.datenschutz =
      "Bitte bestätigen Sie die Datenschutzerklärung, um fortzufahren.";
  }

  return errors;
}

const inputBase =
  "w-full rounded-[7px] border bg-white px-4 py-3 text-[15px] text-navy placeholder:text-cgray/50 focus:outline-none focus:ring-1 transition-colors duration-150";
const inputNormal = inputBase + " border-navy/20 focus:border-magenta focus:ring-magenta";
const inputInvalid = inputBase + " border-red-400 focus:border-red-500 focus:ring-red-400";

export default function ContactFormSection() {
  const id = useId();
  const [state, setState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [datenschutz, setDatenschutz] = useState(false);

  function clearError(field: keyof FieldErrors) {
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const validationErrors = validateForm(data, datenschutz);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      const firstKey = Object.keys(validationErrors)[0] as keyof FieldErrors;
      const el = form.elements.namedItem(firstKey);
      if (el instanceof HTMLElement) el.focus();
      return;
    }

    setErrors({});
    setState("submitting");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setState("success");
        form.reset();
        setDatenschutz(false);
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
                Kein Ticketsystem, keine Warteschleife. Sie erreichen Chris
                Meister direkt – per Telefon, E-Mail oder WhatsApp.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <a href="tel:+41764526687" className="btn-secondary gap-3">
                <Phone className="h-4 w-4 shrink-0" strokeWidth={1.5} />
                +41 76 452 66 87
              </a>
              <a href="mailto:info@meister-signage.ch" className="btn-secondary gap-3">
                <Mail className="h-4 w-4 shrink-0" strokeWidth={1.5} />
                info@meister-signage.ch
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
                <p className="card-title text-navy">Vielen Dank.</p>
                <p className="card-body">
                  Ihre Nachricht wurde gesendet. Ich melde mich persönlich bei Ihnen.
                </p>
                <button
                  onClick={() => setState("idle")}
                  className="btn-secondary mt-2"
                >
                  Weitere Nachricht senden
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-5"
                noValidate
                aria-label="Kontaktformular"
              >
                {/* Honeypot — Spam-Schutz, für echte User unsichtbar */}
                <input
                  type="text"
                  name="_gotcha"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  style={{ display: "none" }}
                />

                {/* Firma (optional) */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor={`${id}-firma`} className="text-sm font-semibold text-navy">
                    Firma{" "}
                    <span className="text-cgray font-normal">(optional)</span>
                  </label>
                  <input
                    id={`${id}-firma`}
                    name="firma"
                    type="text"
                    autoComplete="organization"
                    placeholder="Name Ihres Unternehmens"
                    className={inputNormal}
                  />
                </div>

                {/* Vorname / Nachname — nebeneinander auf ≥ sm */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor={`${id}-vorname`} className="text-sm font-semibold text-navy">
                      Vorname <span className="text-magenta" aria-hidden="true">*</span>
                    </label>
                    <input
                      id={`${id}-vorname`}
                      name="vorname"
                      type="text"
                      required
                      autoComplete="given-name"
                      placeholder="Vorname"
                      aria-required="true"
                      aria-invalid={!!errors.vorname}
                      aria-describedby={errors.vorname ? `${id}-vorname-err` : undefined}
                      className={errors.vorname ? inputInvalid : inputNormal}
                      onChange={() => clearError("vorname")}
                    />
                    {errors.vorname && (
                      <p id={`${id}-vorname-err`} role="alert" className="text-xs text-red-600">
                        {errors.vorname}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor={`${id}-nachname`} className="text-sm font-semibold text-navy">
                      Nachname <span className="text-magenta" aria-hidden="true">*</span>
                    </label>
                    <input
                      id={`${id}-nachname`}
                      name="nachname"
                      type="text"
                      required
                      autoComplete="family-name"
                      placeholder="Nachname"
                      aria-required="true"
                      aria-invalid={!!errors.nachname}
                      aria-describedby={errors.nachname ? `${id}-nachname-err` : undefined}
                      className={errors.nachname ? inputInvalid : inputNormal}
                      onChange={() => clearError("nachname")}
                    />
                    {errors.nachname && (
                      <p id={`${id}-nachname-err`} role="alert" className="text-xs text-red-600">
                        {errors.nachname}
                      </p>
                    )}
                  </div>
                </div>

                {/* E-Mail */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor={`${id}-email`} className="text-sm font-semibold text-navy">
                    E-Mail <span className="text-magenta" aria-hidden="true">*</span>
                  </label>
                  <input
                    id={`${id}-email`}
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="ihre@email.ch"
                    aria-required="true"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? `${id}-email-err` : undefined}
                    className={errors.email ? inputInvalid : inputNormal}
                    onChange={() => clearError("email")}
                  />
                  {errors.email && (
                    <p id={`${id}-email-err`} role="alert" className="text-xs text-red-600">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Nachricht */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor={`${id}-nachricht`} className="text-sm font-semibold text-navy">
                    Nachricht <span className="text-magenta" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id={`${id}-nachricht`}
                    name="nachricht"
                    required
                    rows={5}
                    placeholder="Was planen Sie? Wie können wir helfen?"
                    aria-required="true"
                    aria-invalid={!!errors.nachricht}
                    aria-describedby={errors.nachricht ? `${id}-nachricht-err` : undefined}
                    className={(errors.nachricht ? inputInvalid : inputNormal) + " resize-none"}
                    onChange={() => clearError("nachricht")}
                  />
                  {errors.nachricht && (
                    <p id={`${id}-nachricht-err`} role="alert" className="text-xs text-red-600">
                      {errors.nachricht}
                    </p>
                  )}
                </div>

                {/* DSGVO-Checkbox */}
                <div className="flex flex-col gap-1.5">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="_datenschutz"
                      checked={datenschutz}
                      onChange={(e) => {
                        setDatenschutz(e.target.checked);
                        clearError("datenschutz");
                      }}
                      aria-required="true"
                      aria-invalid={!!errors.datenschutz}
                      aria-describedby={errors.datenschutz ? `${id}-ds-err` : undefined}
                      className="mt-0.5 h-4 w-4 shrink-0 accent-magenta cursor-pointer"
                    />
                    <span className="text-sm text-cgray leading-snug">
                      Ich habe die{" "}
                      <a
                        href="/datenschutz"
                        target="_blank"
                        rel="noopener"
                        className="underline underline-offset-2 text-navy hover:text-magenta transition-colors duration-150"
                      >
                        Datenschutzerklärung
                      </a>{" "}
                      gelesen und bin mit der Verarbeitung meiner Angaben zur
                      Kontaktaufnahme einverstanden.{" "}
                      <span className="text-magenta" aria-hidden="true">*</span>
                    </span>
                  </label>
                  {errors.datenschutz && (
                    <p id={`${id}-ds-err`} role="alert" className="text-xs text-red-600 pl-7">
                      {errors.datenschutz}
                    </p>
                  )}
                </div>

                {/* Server-Fehler */}
                {state === "error" && (
                  <p role="alert" className="rounded-[7px] border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                    Die Nachricht konnte nicht gesendet werden. Bitte versuchen
                    Sie es erneut oder kontaktieren Sie mich direkt per{" "}
                    <a
                      href="mailto:info@meister-signage.ch"
                      className="underline underline-offset-2"
                    >
                      E-Mail
                    </a>
                    .
                  </p>
                )}

                {/* Actions */}
                <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center">
                  <button
                    type="submit"
                    disabled={state === "submitting"}
                    className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {state === "submitting" ? "Wird gesendet …" : "Nachricht senden"}
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
                  <span className="text-magenta" aria-hidden="true">*</span>{" "}
                  Pflichtfelder
                </p>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
