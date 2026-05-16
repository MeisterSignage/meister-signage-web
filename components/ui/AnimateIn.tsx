"use client";

/**
 * AnimateIn — reusable scroll-entrance wrapper.
 * Uses Framer Motion whileInView with reduced-motion support.
 *
 * Usage:
 *   <AnimateIn>
 *     <YourComponent />
 *   </AnimateIn>
 *
 *   <AnimateIn delay={0.15} className="col-span-2">
 *     ...
 *   </AnimateIn>
 */

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { easeOut, viewport } from "@/lib/motion";

type AnimateInProps = {
  children: ReactNode;
  delay?: number;
  /** y-offset to animate from (default 18) */
  distance?: number;
  className?: string;
  /** Override viewport margin */
  margin?: string;
};

export default function AnimateIn({
  children,
  delay = 0,
  distance = 18,
  className,
  margin,
}: AnimateInProps) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: distance }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={margin ? { once: true, margin } : viewport}
      transition={{ duration: 0.52, delay, ease: easeOut }}
    >
      {children}
    </motion.div>
  );
}
