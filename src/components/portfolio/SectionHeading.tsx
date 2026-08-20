"use client";

import { Column, Heading, Text } from "@once-ui-system/core";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { STAGGER_M } from "@/components/motion/tokens";

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  reveal = true,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  reveal?: boolean;
}) {
  if (!reveal) {
    return (
      <Column className="section-heading" gap="8" maxWidth="s" fillWidth>
        {eyebrow && (
          <Text className="eyebrow" variant="label-strong-s" onBackground="brand-weak">
            {eyebrow}
          </Text>
        )}
        <Heading id={id} as="h2" variant="display-strong-s" wrap="balance">
          {title}
        </Heading>
        {description && (
          <Text variant="body-default-l" onBackground="neutral-weak" wrap="balance">
            {description}
          </Text>
        )}
      </Column>
    );
  }

  return (
    <Stagger className="section-heading" interval={STAGGER_M} amount={0.4}>
      {eyebrow ? (
        <StaggerItem y={8}>
          <Text className="eyebrow" variant="label-strong-s" onBackground="brand-weak">
            {eyebrow}
          </Text>
        </StaggerItem>
      ) : null}
      <StaggerItem y={8}>
        <Heading id={id} as="h2" variant="display-strong-s" wrap="balance">
          {title}
        </Heading>
      </StaggerItem>
      {description ? (
        <StaggerItem y={8}>
          <Text variant="body-default-l" onBackground="neutral-weak" wrap="balance">
            {description}
          </Text>
        </StaggerItem>
      ) : null}
    </Stagger>
  );
}
