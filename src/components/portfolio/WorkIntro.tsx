"use client";

import { Column, Heading, Text } from "@once-ui-system/core";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { STAGGER_M } from "@/components/motion/tokens";
import { getContent, localize, pageCopy, type Locale } from "@/resources";

export function WorkIntro({ locale }: { locale: Locale }) {
  const content = getContent(locale);
  const copy = pageCopy.work;

  return (
    <Column as="header" maxWidth="s" gap="16">
      <Stagger inView={false} interval={STAGGER_M} contents>
        <StaggerItem y={8}>
          <Text className="eyebrow" variant="label-strong-m" onBackground="brand-weak">
            {content.navigation.work}
          </Text>
        </StaggerItem>
        <StaggerItem y={12} fade={false}>
          <Heading as="h1" className="hero-name" variant="display-strong-l" wrap="balance">
            {localize(copy.title, locale)}
          </Heading>
        </StaggerItem>
        <StaggerItem y={8}>
          <Text variant="heading-default-l" onBackground="neutral-weak">
            {localize(copy.summary, locale)}
          </Text>
        </StaggerItem>
      </Stagger>
    </Column>
  );
}
