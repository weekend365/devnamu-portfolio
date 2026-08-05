import type { DataStyleConfig, EffectsConfig, StyleConfig } from "@/types";
import { person } from "./portfolio-data";

export const baseURL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://devnamu.com";

export const style: StyleConfig = {
  theme: "system",
  neutral: "gray",
  brand: "green",
  accent: "yellow",
  solid: "color",
  solidStyle: "flat",
  border: "playful",
  surface: "translucent",
  transition: "all",
  scaling: "100",
};

export const dataStyle: DataStyleConfig = {
  variant: "gradient",
  mode: "categorical",
  height: 24,
  axis: { stroke: "var(--neutral-alpha-weak)" },
  tick: {
    fill: "var(--neutral-on-background-weak)",
    fontSize: 11,
    line: false,
  },
};

export const effects: EffectsConfig = {
  mask: { cursor: false, x: 50, y: 0, radius: 100 },
  gradient: {
    display: true,
    opacity: 5,
    x: 76,
    y: 2,
    width: 42,
    height: 28,
    tilt: -4,
    colorStart: "brand-background-strong",
    colorEnd: "page-background",
  },
  dots: {
    display: false,
    opacity: 0,
    size: "2",
    color: "brand-background-strong",
  },
  grid: {
    display: false,
    opacity: 0,
    color: "neutral-alpha-weak",
    width: "1rem",
    height: "1rem",
  },
  lines: {
    display: false,
    opacity: 0,
    color: "neutral-alpha-weak",
    size: "16",
    thickness: 1,
    angle: 45,
  },
};

export const display = {
  location: true,
  time: true,
  themeSwitcher: true,
};

export const schema = {
  logo: "/icon.svg",
  type: "Person",
  name: person.brand,
  description: person.summary[0].en,
  email: person.email,
};

export const sameAs = {
  github: person.github,
  portfolio: person.portfolio,
};
