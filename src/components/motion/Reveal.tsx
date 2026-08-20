"use client";

import type { CSSProperties, ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { fadeTransition, titleTransition } from "./tokens";

export function Reveal({
  children,
  delay = 0,
  title = false,
  className,
  inView = false,
  y,
  scale,
  amount = 0.25,
  style,
}: {
  children: ReactNode;
  delay?: number;
  title?: boolean;
  className?: string;
  inView?: boolean;
  y?: number;
  scale?: number;
  amount?: number;
  style?: CSSProperties;
}) {
  const reduced = useReducedMotion();
  const offsetY = y ?? (title ? 16 : 10);
  const transition = title ? titleTransition : fadeTransition;
  const hidden = {
    opacity: 0,
    y: offsetY,
    ...(scale !== undefined ? { scale } : {}),
  };
  const shown = {
    opacity: 1,
    y: 0,
    ...(scale !== undefined ? { scale: 1 } : {}),
  };

  return (
    <motion.div
      className={className}
      style={style}
      initial={reduced ? false : hidden}
      {...(inView
        ? {
            whileInView: shown,
            viewport: { once: true, amount, margin: "0px 0px -8% 0px" },
          }
        : { animate: shown })}
      transition={{ ...transition, delay: reduced ? 0 : delay }}
    >
      {children}
    </motion.div>
  );
}
