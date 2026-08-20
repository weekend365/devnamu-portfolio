"use client";

import { useEffect, useRef, useState, type PointerEvent, type ReactNode } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import { MAGNETIC_MAX, magneticSpring } from "./tokens";

export function Magnetic({
  children,
  arrow = false,
  className,
}: {
  children: ReactNode;
  arrow?: boolean;
  className?: string;
}) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, magneticSpring);
  const springY = useSpring(y, magneticSpring);
  const [finePointer, setFinePointer] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setFinePointer(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const canMagnet = !reduced && finePointer;

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!canMagnet || !ref.current) {
      return;
    }
    const rect = ref.current.getBoundingClientRect();
    const dx = event.clientX - (rect.left + rect.width / 2);
    const dy = event.clientY - (rect.top + rect.height / 2);
    x.set(Math.max(-MAGNETIC_MAX, Math.min(MAGNETIC_MAX, dx * 0.18)));
    y.set(Math.max(-MAGNETIC_MAX, Math.min(MAGNETIC_MAX, dy * 0.18)));
  };

  const classes = ["magnetic-cta", arrow ? "magnetic-cta-arrow" : "", className]
    .filter(Boolean)
    .join(" ");

  return (
    <motion.div
      ref={ref}
      className={classes}
      style={canMagnet ? { x: springX, y: springY } : undefined}
      onPointerMove={canMagnet ? onPointerMove : undefined}
      onPointerLeave={canMagnet ? reset : undefined}
    >
      {children}
    </motion.div>
  );
}
