"use client";

import { LazyMotion, domAnimation } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Loads only the DOM-animation feature set of framer-motion (smaller bundle).
 * Components must use `m` (not `motion`) — we alias `m as motion` in imports
 * so existing JSX `<motion.div>` calls keep working.
 *
 * For features like drag, layout, or pan, switch to `domMax`.
 */
export default function MotionProvider({ children }: { children: ReactNode }) {
  return <LazyMotion features={domAnimation} strict>{children}</LazyMotion>;
}
