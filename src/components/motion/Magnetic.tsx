import type { ReactNode } from "react";

export function Magnetic({
  children,
  arrow = false,
  className,
}: {
  children: ReactNode;
  arrow?: boolean;
  className?: string;
}) {
  const classes = ["magnetic-cta", arrow ? "magnetic-cta-arrow" : "", className]
    .filter(Boolean)
    .join(" ");

  return <span className={classes}>{children}</span>;
}
