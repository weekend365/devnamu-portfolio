"use client";

import { Column, Heading, Text } from "@once-ui-system/core";
import { Reveal } from "@/components/motion/Reveal";
import { STAGGER_M } from "@/components/motion/tokens";

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <Column className="section-heading" gap="8" maxWidth="s" fillWidth>
      {eyebrow && (
        <Reveal inView delay={0} y={10}>
          <Text className="eyebrow" variant="label-strong-s" onBackground="brand-weak">
            {eyebrow}
          </Text>
        </Reveal>
      )}
      <Reveal inView delay={STAGGER_M} y={10}>
        <Heading id={id} as="h2" variant="display-strong-s" wrap="balance">
          {title}
        </Heading>
      </Reveal>
      {description && (
        <Reveal inView delay={STAGGER_M * 2} y={10}>
          <Text variant="body-default-l" onBackground="neutral-weak" wrap="balance">
            {description}
          </Text>
        </Reveal>
      )}
    </Column>
  );
}
