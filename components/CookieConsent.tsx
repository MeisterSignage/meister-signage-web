"use client";

import { useState, useEffect, useCallback } from "react";
import Script from "next/script";

const GA_ID = "G-12LJVBM5KQ";
const CLARITY_ID = "p2kae8yjtk";
const STORAGE_KEY = "cookie-consent";

type Consent = "granted" | "denied" | null;

export default function CookieConsent() {
  const [consent, setConsent] = useState<Consent>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Consent;
    if (stored) {
      setConsent(stored);
    } else {
      setVisible(true);
    }
  }, []);

  const accept = useCallback(() => {
    localStorage.setItem(STORAGE_KEY, "granted");
    setConsent("granted");
    setVisible(false);
  }, []);

  const decline = useCallback(() => {
    localStorage.setItem(STORAGE_KEY, "denied");
    setConsent("denied");
    setVisible(false);
  }, []);

  return (
    <>
      {/* GA4 — only after consent */}
      {consent === "granted" && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
          </Script>
        </>
      )}

      {/* Clarity — only after consent */}
      {consent === "granted" && (
        <Script id="clarity-init" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${CLARITY_ID}");`}
        </Script>
      )}

      {/* Banner */}
      {visible && (
        <div
          className="fixed inset-x-0 bottom-0 z-[100] p-4"
          role="dialog"
          aria-label="Cookie-Einstellungen"
        >
          <div
            className="mx-auto flex max-w-content flex-col gap-4 rounded-2xl border border-navy/10 bg-white px-6 py-5 sm:flex-row sm:items-center sm:justify-between"
            style={{ boxShadow: "0 -4px 32px rgba(0,0,0,0.10)" }}
          >
            <p className="text-[14px] leading-relaxed text-navy/70">
              Wir verwenden Cookies für Analyse und Nutzererfahrung.{" "}
              <a href="/datenschutz/" className="underline hover:text-navy">
                Datenschutz
              </a>
            </p>
            <div className="flex shrink-0 gap-3">
              <button
                onClick={decline}
                className="rounded-lg border border-navy/15 px-4 py-2 text-[13px] font-semibold text-navy/80 transition-colors hover:border-navy/30 hover:text-navy"
              >
                Ablehnen
              </button>
              <button
                onClick={accept}
                className="rounded-lg bg-[#db0085] px-4 py-2 text-[13px] font-semibold text-white transition-colors hover:bg-[#b80070]"
              >
                Akzeptieren
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
