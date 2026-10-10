/** Send only fixed labels and public page paths, never form values. */
export function trackEvent(name: string, params: Record<string, string | number> = {}) {
  try {
    if (localStorage.getItem("cookie-consent") !== "granted") return;
    const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
    gtag?.("event", name, { page_path: window.location.pathname, ...params });
  } catch {
    // Analytics must never prevent navigation or a contact request.
  }
}
