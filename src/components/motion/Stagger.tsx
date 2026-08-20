"use client";

import type { CSSProperties, ReactNode } from "react";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { fadeTransition, STAGGER_CARD } from "./tokens";

const viewport = { once: true, amount: 0.2, margin: "0px 0px -8% 0px" } as const;

export function Stagger({
  children,
  className,
  style,
  interval = STAGGER_CARD,
  inView = true,
  amount = 0.2,
  contents = false,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  interval?: number;
  inView?: boolean;
  amount?: number;
  contents?: boolean;
}) {
  const reduced = useReducedMotion();
  const variants: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: interval,
        delayChildren: 0.04,
      },
    },
  };

  return (
    <motion.div
      className={[className, contents ? "stagger-contents" : ""].filter(Boolean).join(" ")}
      style={style}
      variants={variants}
      initial={reduced ? false : "hidden"}
      {...(inView && !contents
        ? { whileInView: "show", viewport: { ...viewport, amount } }
        : { animate: "show" })}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  style,
  y = 10,
  fade = true,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  y?: number;
  fade?: boolean;
}) {
  const reduced = useReducedMotion();
  const variants: Variants = {
    hidden: { y, ...(fade ? { opacity: 0 } : {}) },
    show: {
      y: 0,
      ...(fade ? { opacity: 1 } : {}),
      transition: fadeTransition,
    },
  };

  return (
    <motion.div
      className={className}
      style={style}
      variants={reduced ? undefined : variants}
    >
      {children}
    </motion.div>
  );
}
