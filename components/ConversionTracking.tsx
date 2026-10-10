"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

export default function ConversionTracking() {
  useEffect(() => {
    function handler(e: MouseEvent) {
      const a = (e.target as Element | null)?.closest?.("a");
      if (!a) return;
      const href = a.getAttribute("href") || "";
      const method = href.startsWith("tel:") ? "phone"
        : href.startsWith("mailto:") ? "email"
        : /^https:\/\/(wa\.me|api\.whatsapp\.com)\//i.test(href) ? "whatsapp" : null;
      if (method) trackEvent("contact_click", { method });
      const cta = a.getAttribute("data-cta");
      if (cta) trackEvent("cta_click", { cta_name: cta });
    }
    document.addEventListener("click", handler, { capture: true });
    return () => document.removeEventListener("click", handler, { capture: true });
  }, []);
  return null;
}
