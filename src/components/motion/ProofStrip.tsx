"use client";

import { Column, Text } from "@once-ui-system/core";
import { CountUp } from "@/components/motion/CountUp";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

export type ProofItem = {
  value: number;
  suffix?: string;
  label: string;
  brand?: boolean;
};

export function ProofStrip({
  items,
  className,
}: {
  items: ProofItem[];
  className?: string;
}) {
  return (
    <Stagger className={["proof-strip", className].filter(Boolean).join(" ")}>
      {items.map((item) => (
        <StaggerItem key={item.label} className="proof-item-reveal">
          <Column className="proof-item" gap="4">
            <Text
              variant="display-strong-s"
              onBackground={item.brand ? "brand-weak" : undefined}
            >
              <CountUp className="proof-count" value={item.value} suffix={item.suffix ?? ""} />
            </Text>
            <Text variant="label-default-s" onBackground="neutral-weak">
              {item.label}
            </Text>
          </Column>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
