import type { Transition, Variants } from "motion/react";

export const EASE = [0.22, 1, 0.36, 1] as const;

export const STAGGER_S = 0.06;
export const STAGGER_M = 0.04;
export const STAGGER_CARD = 0.05;
export const MAGNETIC_MAX = 6;

export const fadeTransition: Transition = {
  duration: 0.5,
  ease: EASE,
};

export const titleTransition: Transition = {
  duration: 0.6,
  ease: EASE,
};

export const wordmarkTransition: Transition = {
  duration: 0.7,
  ease: EASE,
};

export const countTransition: Transition = {
  duration: 0.8,
  ease: EASE,
};

export const navTransition: Transition = {
  duration: 0.18,
  ease: EASE,
};

export const magneticSpring = {
  stiffness: 340,
  damping: 22,
  mass: 0.55,
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: fadeTransition },
};

export const fadeUpTitle: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: titleTransition },
};

export const stagger: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: STAGGER_S,
      delayChildren: 0.04,
    },
  },
};
