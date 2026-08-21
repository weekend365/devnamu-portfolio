"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import { TILT_MAX, TILT_PERSPECTIVE, tiltSpring } from "./tokens";

export function Tilt({
  children,
  className,
  max = TILT_MAX,
  track = "self",
}: {
  children: ReactNode;
  className?: string;
  max?: number;
  track?: "self" | "root";
}) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, tiltSpring);
  const springY = useSpring(rotateY, tiltSpring);
  const [finePointer, setFinePointer] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setFinePointer(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const canTilt = !reduced && finePointer;

  useEffect(() => {
    if (!canTilt) {
      rotateX.set(0);
      rotateY.set(0);
      return;
    }

    const node = ref.current;
    if (!node) {
      return;
    }
    const root =
      (node.closest("[data-tilt-root], .project-card, .featured-visual") as HTMLElement | null) ??
      node;

    const reset = () => {
      rotateX.set(0);
      rotateY.set(0);
    };

    const onPointerMove = (event: PointerEvent) => {
      const bounds = (track === "root" ? root : node).getBoundingClientRect();
      const px = (event.clientX - bounds.left) / Math.max(bounds.width, 1);
      const py = (event.clientY - bounds.top) / Math.max(bounds.height, 1);

      if (track === "self" && (px < 0 || px > 1 || py < 0 || py > 1)) {
        reset();
        return;
      }

      const cx = Math.min(1, Math.max(0, px));
      const cy = Math.min(1, Math.max(0, py));
      rotateY.set((cx - 0.5) * 2 * max);
      rotateX.set((0.5 - cy) * 2 * max);
    };

    root.addEventListener("pointermove", onPointerMove);
    root.addEventListener("pointerleave", reset);
    return () => {
      root.removeEventListener("pointermove", onPointerMove);
      root.removeEventListener("pointerleave", reset);
    };
  }, [canTilt, max, rotateX, rotateY, track]);

  return (
    <motion.div
      ref={ref}
      className={["preview-tilt", className].filter(Boolean).join(" ")}
      style={
        canTilt
          ? {
              rotateX: springX,
              rotateY: springY,
              transformPerspective: TILT_PERSPECTIVE,
            }
          : undefined
      }
    >
      {children}
    </motion.div>
  );
}
