"use client";

import { Column, Text } from "@once-ui-system/core";
import { CountUp } from "@/components/motion/CountUp";
import { Reveal } from "@/components/motion/Reveal";
import { STAGGER_CARD } from "@/components/motion/tokens";

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
    <div className={["proof-strip", className].filter(Boolean).join(" ")}>
      {items.map((item, index) => (
        <Reveal
          key={item.label}
          className="proof-item-reveal"
          inView
          delay={index * STAGGER_CARD}
          y={10}
        >
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
        </Reveal>
      ))}
    </div>
  );
}
