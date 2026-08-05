"use client";

import { useEffect, useState } from "react";
import { ToggleButton, useTheme } from "@once-ui-system/core";
import type { Locale } from "@/resources";

export const ThemeToggle = ({ locale }: { locale: Locale }) => {
  const { setTheme } = useTheme();
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
    <ToggleButton
      prefixIcon={icon}
      onClick={() => {
        setTheme(nextTheme);
        setCurrentTheme(nextTheme);
      }}
      aria-label={label}
    />
  );
};
