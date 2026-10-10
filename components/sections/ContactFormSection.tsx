"use client";

import { useState, useId, useRef } from "react";
import { Phone, Mail, MessageCircle, MapPin, Clock } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { CONTACT } from "@/lib/contact";

type FormState = "idle" | "submitting" | "success" | "error";

interface FieldErrors {
  name?: string;
  email?: string;
  nachricht?: string;
  datenschutz?: string;
  mietende?: string;
  mietanzahl?: string;
}

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xlgzyjvk";

function validateForm(data: FormData, datenschutz: boolean): FieldErrors {
  const errors: FieldErrors = {};

  const name = (data.get("name") as string | null)?.trim() ?? "";
  const email = (data.get("email") as string | null)?.trim() ?? "";
  const nachricht = (data.get("nachricht") as string | null)?.trim() ?? "";

  if (!name) errors.name = "Bitte geben Sie Ihren Namen ein.";

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

export default function ContactFormSection({ rental = false }: { rental?: boolean }) {
  const id = useId();
  const started = useRef(false);
  const sending = useRef(false);
  function trackForm(event: string, details: Record<string, string | number> = {}) {
    trackEvent(event, { form_name: "kontaktformular", inquiry_type: isRental ? "rental" : "general", ...details });
  }
  function trackStart() {
    if (!started.current) {
      trackForm("lead_form_start");
      started.current = true;
    }
  }
  const [isRental, setIsRental] = useState(rental);
  const [device, setDevice] = useState("");
  const [state, setState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [datenschutz, setDatenschutz] = useState(false);

  function clearError(field: keyof FieldErrors) {
    if (errors[field as keyof FieldErrors]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (sending.current) return;
    const form = e.currentTarget;
    const data = new FormData(form);

    const validationErrors = validateForm(data, datenschutz);
    const start = String(data.get("mietbeginn") ?? "");
    const end = String(data.get("mietende") ?? "");
    if (isRental && start && end && end < start) {
      validationErrors.mietende = "Das Mietende darf nicht vor dem Mietbeginn liegen.";
    }
    const quantity = String(data.get("mietanzahl") ?? "");
    if (isRental && quantity && (!Number.isInteger(Number(quantity)) || Number(quantity) < 1)) {
      validationErrors.mietanzahl = "Bitte geben Sie eine ganze Anzahl ab 1 ein.";
    }
    data.set("anfrageart", isRental ? "Mietanfrage" : "Allgemeine Anfrage");
    if (Object.keys(validationErrors).length > 0) {
      trackForm("lead_form_validation_error", { error_count: Object.keys(validationErrors).length });
      setErrors(validationErrors);
      const firstKey = Object.keys(validationErrors)[0] as keyof FieldErrors;
      const el = form.elements.namedItem(firstKey);
      if (el instanceof HTMLElement) el.focus();
      return;
    }

    setErrors({});
    setState("submitting");
    sending.current = true;
    trackForm("lead_form_submit_attempt");
    data.set("anfrageseite", window.location.pathname);

    /* Enrich submission with Formspree control fields */
    const senderName = (data.get("name") as string)?.trim() ?? "Kontaktformular";
    data.set("_subject", `${isRental ? "Mietanfrage" : "Neue Anfrage"} von ${senderName} — Meister Signage`);
    data.set("_replyto", (data.get("email") as string)?.trim() ?? "");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setState("success");
        trackForm("generate_lead");
        started.current = false;
        form.reset();
        setDatenschutz(false);
        setDevice("");
      } else {
        trackForm("lead_form_error", { error_type: "server" });
        setState("error");
      }
    } catch {
      trackForm("lead_form_error", { error_type: "network" });
      setState("error");
    } finally {
      sending.current = false;
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
              <a href={`tel:${CONTACT.phone}`} className="btn-secondary gap-3">
                <Phone className="h-4 w-4 shrink-0" strokeWidth={1.5} />
                {CONTACT.phoneDisplay}
              </a>
              <a href={`mailto:${CONTACT.email}`} className="btn-secondary gap-3">
                <Mail className="h-4 w-4 shrink-0" strokeWidth={1.5} />
                {CONTACT.email}
              </a>
              <a
                href={CONTACT.whatsapp}
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
              <form data-clarity-mask="true"
                onSubmit={handleSubmit}
                onChange={trackStart}
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

                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor={`${id}-name`} className="text-sm font-semibold text-navy">
                    Name <span className="text-magenta" aria-hidden="true">*</span>
                  </label>
                  <input
                    id={`${id}-name`}
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Vor- und Nachname"
                    aria-required="true"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? `${id}-name-err` : undefined}
                    className={errors.name ? inputInvalid : inputNormal}
                    onChange={() => clearError("name")}
                  />
                  {errors.name && (
                    <p id={`${id}-name-err`} role="alert" className="text-xs text-red-600">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Firma (optional) */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor={`${id}-firma`} className="text-sm font-semibold text-navy">
                    Firma{" "}
                    <span className="font-normal text-cgray">(optional)</span>
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

                <label className="flex items-center gap-3 text-sm font-semibold text-navy">
                  <input type="checkbox" checked={isRental} onChange={(e) => { setIsRental(e.target.checked); clearError("mietende"); }} className="h-4 w-4 accent-magenta" />
                  Ich möchte Displays mieten
                </label>
                {isRental && (
                  <fieldset className="flex min-w-0 flex-col gap-4 rounded-xl border border-navy/15 bg-offwhite p-4">
                    <legend className="px-2 font-semibold text-navy">Ihre Mietanfrage</legend>
                    <p className="text-sm text-cgray">Tragen Sie ein, was schon feststeht. Die Angaben sind optional; mehrere Geräte können Sie in der Nachricht nennen. Ihre Anfrage ist unverbindlich.</p>
                    <div>
                      <label htmlFor={`${id}-anlass`} className="mb-1 block text-sm font-semibold text-navy">Anlass / Einsatzzweck</label>
                      <select id={`${id}-anlass`} name="mietanlass" className={inputNormal}>
                        <option value="">Noch offen</option><option>Messe oder Ausstellung</option><option>Konferenz oder Firmenevent</option><option>Hotel oder Gastronomie</option><option>Verkaufslokal oder Schaufenster</option><option>Gemeinde oder öffentliche Information</option><option>Anderer Einsatzzweck</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor={`${id}-geraet`} className="mb-1 block text-sm font-semibold text-navy">Gewünschtes Gerät</label>
                      <select id={`${id}-geraet`} name="mietgeraet" value={device} onChange={(e) => setDevice(e.target.value)} className={inputNormal}>
                        <option value="">Noch offen / Beratung gewünscht</option>
                        {["Spark 3 (32 Zoll)", "Spark 4 (43 Zoll)", "Spark 5 (50 Zoll)", "Spark Q+ (33 Zoll)", "Meister Signage 43 Zoll", "Meister Signage 55 Zoll", "Meister Stele 55 Zoll (Touch)", "Meister Board 43 Zoll (Akku)", "Mehrere Modelle"].map((model) => <option key={model}>{model}</option>)}
                      </select>
                    </div>
                    <div>
                      <label htmlFor={`${id}-anzahl`} className="mb-1 block text-sm font-semibold text-navy">Anzahl Geräte</label>
                      <input id={`${id}-anzahl`} name="mietanzahl" type="number" min="1" step="1" placeholder="z. B. 2" onChange={() => clearError("mietanzahl")} aria-invalid={!!errors.mietanzahl} aria-describedby={errors.mietanzahl ? `${id}-anzahl-err` : undefined} className={errors.mietanzahl ? inputInvalid : inputNormal} />
                      {errors.mietanzahl && <p id={`${id}-anzahl-err`} role="alert" className="text-sm text-red-600">{errors.mietanzahl}</p>}
                    </div>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor={`${id}-beginn`} className="mb-1 block text-sm font-semibold text-navy">Mietbeginn</label>
                        <input id={`${id}-beginn`} name="mietbeginn" type="date" onChange={() => clearError("mietende")} className={inputNormal} />
                      </div>
                      <div>
                        <label htmlFor={`${id}-ende`} className="mb-1 block text-sm font-semibold text-navy">Mietende</label>
                        <input id={`${id}-ende`} name="mietende" type="date" onChange={() => clearError("mietende")} aria-invalid={!!errors.mietende} aria-describedby={errors.mietende ? `${id}-ende-err` : undefined} className={errors.mietende ? inputInvalid : inputNormal} />
                      </div>
                    </div>
                    {errors.mietende && <p id={`${id}-ende-err`} role="alert" className="text-sm text-red-600">{errors.mietende}</p>}
                    <div>
                      <label htmlFor={`${id}-ort`} className="mb-1 block text-sm font-semibold text-navy">Einsatzort / PLZ</label>
                      <input id={`${id}-ort`} name="einsatzort" type="text" placeholder="Veranstaltungsort, Ort oder PLZ" className={inputNormal} />
                    </div>
                    <div>
                      <label htmlFor={`${id}-transport`} className="mb-1 block text-sm font-semibold text-navy">Transport</label>
                      <select id={`${id}-transport`} name="transport" className={inputNormal}>
                        <option>Noch offen</option><option>Selbst abholen und zurückbringen</option><option>Lieferung und Rückholung gewünscht</option><option>Lieferung, Aufbau und Rückholung gewünscht</option>
                      </select>
                    </div>
                    {(device.includes("Stele") || device === "Mehrere Modelle") && <p className="text-sm text-navy">Die Meister Stele benötigt einen geeigneten Transporter. Bitte beschreiben Sie Zufahrt, Treppen und Lift im folgenden Feld.</p>}
                    <div>
                      <label htmlFor={`${id}-zugang`} className="mb-1 block text-sm font-semibold text-navy">Zufahrt, Treppen, Lift und Aufbau</label>
                      <textarea id={`${id}-zugang`} name="zugang_aufbau" rows={2} placeholder="z. B. ebenerdig, 1. Stock mit Warenlift, Aufbau ab 8 Uhr" className={inputNormal} />
                    </div>
                    <p className="text-sm text-cgray">Bereitstellung inklusive. Lieferung, Aufbau vor Ort und Rückholung offerieren wir separat. Stele und Battery Board: Mietpreis auf Anfrage. Mit dieser Anfrage buchen Sie noch nichts. Die <a href="/agb/" target="_blank" rel="noopener noreferrer" className="text-magenta underline">AGB</a> bestätigen Sie erst bei Annahme der Offerte.</p>
                  </fieldset>
                )}

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

                <div className="flex flex-col gap-1.5">
                  <label htmlFor={`${id}-quelle`} className="text-sm font-semibold text-navy">Wie sind Sie auf uns aufmerksam geworden? (optional)</label>
                  <select id={`${id}-quelle`} name="aufmerksam_geworden" className={inputNormal} defaultValue="">
                    <option value="">Bitte auswählen</option>
                    <option>Google oder andere Suchmaschine</option>
                    <option>ChatGPT oder andere KI</option>
                    <option>LinkedIn</option>
                    <option>Instagram</option>
                    <option>Persönliche Empfehlung</option>
                    <option>Event oder Display vor Ort</option>
                    <option>Bereits Kunde</option>
                    <option>Andere Quelle</option>
                  </select>
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
                        href="/datenschutz/"
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
                      href={`mailto:${CONTACT.email}`}
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
                    href={CONTACT.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary gap-2"
                  >
                    <MessageCircle className="h-4 w-4 shrink-0" strokeWidth={1.5} />
                    WhatsApp
                  </a>
                </div>

                <div className="flex flex-col gap-1 pt-1">
                  <p className="flex items-center gap-1.5 text-xs text-cgray/70">
                    <Clock className="h-3 w-3 shrink-0" strokeWidth={1.75} />
                    Antwort innert 24h · Kostenlos & unverbindlich
                  </p>
                  <p className="text-xs text-cgray">
                    <span className="text-magenta" aria-hidden="true">*</span>{" "}
                    Pflichtfelder
                  </p>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
