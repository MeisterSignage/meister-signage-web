"use client";

import { useEffect } from "react";

/**
 * Nicht-invasives Conversion-Tracking: ein einziger globaler Click-Listener
 * erfasst Klicks auf Kontakt-Links (Telefon, E-Mail, WhatsApp) und meldet sie
 * als GA4-Event `contact_click` mit `method`. Respektiert die Consent-Logik
 * automatisch — ohne Einwilligung ist `window.gtag` nicht geladen, der Aufruf
 * ist dann ein No-op. In GA4 als Conversions markieren (Dashboard-seitig).
 */
export default function ConversionTracking() {
  useEffect(() => {
    function handler(e: MouseEvent) {
      const target = e.target as HTMLElement | null;
      const a = target?.closest?.("a") as HTMLAnchorElement | null;
      if (!a) return;
      const href = a.getAttribute("href") || "";
      let method: string | null = null;
      if (href.startsWith("tel:")) method = "phone";
      else if (href.startsWith("mailto:")) method = "email";
      else if (/wa\.me|api\.whatsapp\.com|whatsapp/i.test(href)) method = "whatsapp";
      if (!method) return;
      const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
      if (typeof gtag === "function") {
        gtag("event", "contact_click", { method, link_url: href });
      }
    }
    document.addEventListener("click", handler, { capture: true });
    return () => document.removeEventListener("click", handler, { capture: true });
  }, []);

  return null;
}
