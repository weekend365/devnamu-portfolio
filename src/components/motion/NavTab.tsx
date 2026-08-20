"use client";

import type { ReactNode } from "react";
import { LayoutGroup, motion, useReducedMotion } from "motion/react";
import { navTransition } from "./tokens";

export function NavTab({
  selected,
  layoutId,
  children,
}: {
  selected: boolean;
  layoutId: string;
  children: ReactNode;
}) {
  const reduced = useReducedMotion();

  return (
    <span className={selected ? "nav-tab is-active" : "nav-tab"}>
      {selected ? (
        <motion.span
          className="nav-tab-pill"
          layoutId={layoutId}
          transition={reduced ? { duration: 0 } : navTransition}
        />
      ) : null}
      {children}
    </span>
  );
}

export function NavTabs({ id, children }: { id: string; children: ReactNode }) {
  return <LayoutGroup id={id}>{children}</LayoutGroup>;
}
