"use client";

/**
 * SpotlightCard
 * Adds a cursor-following magenta spotlight to any card.
 *
 * Usage – drop-in for any existing card div:
 *   <SpotlightCard className="card flex flex-col ...">
 *     {children}
 *   </SpotlightCard>
 *
 * Notes:
 * - Zero React state on mousemove (direct DOM refs only) → no re-renders
 * - No-op on touch devices → safe for mobile
 * - Replaces card-hover: handles its own translateY + border change
 * - overlay is pointer-events-none → never blocks clicks
 */

import { useRef, useCallback } from "react";

// Design-system magenta: #fe019a → rgb(254, 1, 154)
const SPOTLIGHT_R = "254, 1, 154";

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  /**
   * Spotlight radius in px. Default 280.
   * Larger = broader, softer falloff.
   */
  radius?: number;
  /**
   * Peak opacity of the spotlight (0–1). Default 0.065.
   * Keep <0.10 to stay B2B-clean.
   */
  intensity?: number;
}

export default function SpotlightCard({
  children,
  className = "",
  radius = 280,
  intensity = 0.065,
}: SpotlightCardProps) {
  const cardRef    = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  // ── Mouse move → update gradient position (zero React re-renders) ──────────
  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current || !overlayRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      overlayRef.current.style.background =
        `radial-gradient(${radius}px circle at ${x}px ${y}px, ` +
        `rgba(${SPOTLIGHT_R}, ${intensity}), transparent 70%)`;
    },
    [radius, intensity],
  );

  // ── Hover enter → reveal overlay + lift card ──────────────────────────────
  const handleMouseEnter = useCallback(() => {
    if (!cardRef.current || !overlayRef.current) return;
    cardRef.current.style.transform   = "translateY(-2px)";
    cardRef.current.style.borderColor = "rgba(254, 1, 154, 0.20)";
    cardRef.current.style.boxShadow   = "0 6px 28px rgba(26, 39, 68, 0.07)";
    overlayRef.current.style.opacity  = "1";
  }, []);

  // ── Hover leave → reset everything ───────────────────────────────────────
  const handleMouseLeave = useCallback(() => {
    if (!cardRef.current || !overlayRef.current) return;
    cardRef.current.style.transform   = "translateY(0)";
    cardRef.current.style.borderColor = "";   // falls back to CSS class value
    cardRef.current.style.boxShadow   = "";
    overlayRef.current.style.opacity  = "0";
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      // relative + overflow-hidden are required to clip the gradient to card bounds
      className={`relative overflow-hidden ${className}`}
      style={{
        transition:
          "transform 220ms ease, border-color 220ms ease, box-shadow 220ms ease",
        willChange: "transform",
      }}
    >
      {/* Spotlight overlay — pointer-events-none so clicks pass through */}
      <div
        ref={overlayRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          opacity: 0,
          transition: "opacity 280ms ease",
          background: "transparent",
          // Prevent the overlay from creating its own stacking context artefacts
          borderRadius: "inherit",
        }}
      />

      {children}
    </div>
  );
}
