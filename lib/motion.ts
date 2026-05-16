/**
 * Meister Signage — Motion System
 * Centralized animation variants and easing curves.
 * Premium SaaS/B2B feel: subtile, snappy, no gimmicks.
 *
 * Usage:
 *   import { fadeUp, staggerContainer, cardItem } from "@/lib/motion";
 */

/* ── Easing curves ────────────────────────────────────────────── */

/** Standard smooth ease — matches CSS ease-in-out quality */
export const ease = [0.25, 0.1, 0.25, 1] as const;

/** Slightly more expressive — good for entrances */
export const easeOut = [0.0, 0.0, 0.2, 1] as const;

/** Subtle spring feel — for lift/hover */
export const easeSpring = [0.34, 1.2, 0.64, 1] as const;

/* ── Single-element variants ──────────────────────────────────── */

export const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.52, ease: easeOut },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.45, ease: ease },
  },
};

export const fadeUpSlow = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.70, ease: easeOut },
  },
};

/* ── Stagger containers ───────────────────────────────────────── */

/** Container that staggers its children */
export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.05,
    },
  },
};

export const staggerContainerFast = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

/** Item used inside staggerContainer */
export const staggerItem = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: easeOut },
  },
};

/* ── Card hover ───────────────────────────────────────────────── */

/** Subtle lift — use as whileHover on motion.div */
export const cardHover = {
  y: -4,
  transition: { duration: 0.22, ease: easeSpring },
};

/** For dark/featured cards */
export const cardHoverSubtle = {
  y: -2,
  transition: { duration: 0.22, ease: easeSpring },
};

/* ── Viewport config ──────────────────────────────────────────── */

/** Standard scroll trigger: fire once, generous margin */
export const viewport = { once: true, margin: "-64px" } as const;

/** Tighter margin for hero / above-fold elements */
export const viewportTop = { once: true, margin: "-20px" } as const;
