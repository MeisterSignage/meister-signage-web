"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { Search, X } from "lucide-react";

type Item = { t: string; u: string; d: string; g: string; k?: string };

export default function SearchBox() {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const [items, setItems] = useState<Item[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  // Index einmalig laden, sobald geöffnet
  useEffect(() => {
    if (open && items.length === 0) {
      fetch("/search-index.json")
        .then((r) => r.json())
        .then((d: Item[]) => setItems(d))
        .catch(() => {});
    }
    if (open) {
      const t = setTimeout(() => inputRef.current?.focus(), 40);
      return () => clearTimeout(t);
    }
  }, [open, items.length]);

  // Tastatur: Esc schliesst, Cmd/Ctrl+K öffnet
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen(true);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const results = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (query.length < 2) return [];
    const terms = query.split(/\s+/);
    return items
      .map((it) => {
        const hay = (it.t + " " + it.d + " " + (it.k || "")).toLowerCase();
        const score = terms.every((tm) => hay.includes(tm))
          ? (it.t.toLowerCase().includes(query) ? 0 : 1)
          : 99;
        return { it, score };
      })
      .filter((r) => r.score < 99)
      .sort((a, b) => a.score - b.score)
      .slice(0, 12)
      .map((r) => r.it);
  }, [q, items]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Suche öffnen"
        className="flex h-9 w-9 items-center justify-center rounded-full text-navy transition-colors hover:bg-navy/5 hover:text-magenta"
      >
        <Search className="h-5 w-5" strokeWidth={2} />
      </button>

      {open && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center px-4 pt-[12vh]">
          <div
            className="absolute inset-0 bg-navy/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <div className="relative w-full max-w-[640px] overflow-hidden rounded-2xl bg-white shadow-2xl">
            <div className="flex items-center gap-3 border-b border-navy/10 px-4">
              <Search className="h-5 w-5 shrink-0 text-cgray" strokeWidth={2} />
              <input
                ref={inputRef}
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Suchen … (z. B. Menüboard, Praxis, mieten)"
                className="h-14 w-full bg-transparent text-[16px] text-navy outline-none placeholder:text-cgray/70"
              />
              <button
                onClick={() => setOpen(false)}
                aria-label="Suche schliessen"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-cgray hover:bg-navy/5"
              >
                <X className="h-5 w-5" strokeWidth={2} />
              </button>
            </div>

            <div className="max-h-[55vh] overflow-y-auto">
              {results.length > 0 ? (
                <ul className="divide-y divide-navy/5">
                  {results.map((r) => (
                    <li key={r.u}>
                      <Link
                        href={r.u}
                        onClick={() => setOpen(false)}
                        className="flex items-baseline gap-3 px-4 py-3 transition-colors hover:bg-offwhite"
                      >
                        <span className="font-semibold text-navy">{r.t}</span>
                        <span className="rounded-full bg-navy/5 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-cgray">
                          {r.g}
                        </span>
                        <span className="ml-auto line-clamp-1 hidden max-w-[55%] text-[13px] text-cgray sm:block">
                          {r.d}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : q.trim().length >= 2 ? (
                <p className="px-4 py-8 text-center text-[15px] text-cgray">
                  Keine Treffer für „{q}". Versuchen Sie z. B. „Display", „mieten" oder „Gastronomie".
                </p>
              ) : (
                <p className="px-4 py-8 text-center text-[15px] text-cgray">
                  Tippen Sie, um Seiten, Lösungen, Branchen und Ratgeber zu durchsuchen.
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
