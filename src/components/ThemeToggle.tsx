"use client";

import { motion, useReducedMotion } from "motion/react";
import { ToggleButton, useTheme } from "@once-ui-system/core";
import { useEffect, useState } from "react";
import type { Locale } from "@/resources";
import { navTransition } from "./motion/tokens";

export const ThemeToggle = ({
  locale,
  showLabel = false,
}: {
  locale: Locale;
  showLabel?: boolean;
}) => {
  const { setTheme } = useTheme();
  const reduced = useReducedMotion();
  const [currentTheme, setCurrentTheme] = useState("light");

  useEffect(() => {
    setCurrentTheme(document.documentElement.getAttribute("data-theme") || "light");
  }, []);

  const icon = currentTheme === "dark" ? "light" : "dark";
  const nextTheme = currentTheme === "light" ? "dark" : "light";
  const label =
    locale === "ko"
      ? `${nextTheme === "dark" ? "다크" : "라이트"} 모드로 전환`
      : `Switch to ${nextTheme} mode`;

  return (
    <motion.span
      key={icon}
      className="theme-toggle-motion"
      initial={reduced ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={reduced ? { duration: 0 } : navTransition}
    >
      <ToggleButton
        prefixIcon={icon}
        label={showLabel ? label : undefined}
        onClick={() => {
          setTheme(nextTheme);
          setCurrentTheme(nextTheme);
        }}
        aria-label={label}
      />
    </motion.span>
  );
};
