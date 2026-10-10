"use client";

export default function CookieSettingsButton() {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event("open-cookie-settings"))}
      className="text-[12px] transition-colors duration-150 hover:!text-white"
      style={{ color: "#d1d5db" }}
      aria-haspopup="dialog"
    >
      Cookie-Einstellungen
    </button>
  );
}
