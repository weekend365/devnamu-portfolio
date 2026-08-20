"use client";

import { Column, Heading, Text } from "@once-ui-system/core";
import { Reveal } from "@/components/motion/Reveal";
import { STAGGER_M } from "@/components/motion/tokens";
import { getContent, localize, pageCopy, type Locale } from "@/resources";

export function WorkIntro({ locale }: { locale: Locale }) {
  const content = getContent(locale);
  const copy = pageCopy.work;

  return (
    <Column as="header" maxWidth="s" gap="16">
      <Reveal delay={0} y={8}>
        <Text className="eyebrow" variant="label-strong-m" onBackground="brand-weak">
          {content.navigation.work}
        </Text>
      </Reveal>
      <Reveal delay={STAGGER_M} y={12}>
        <Heading as="h1" className="hero-name" variant="display-strong-l" wrap="balance">
          {localize(copy.title, locale)}
        </Heading>
      </Reveal>
      <Reveal delay={STAGGER_M * 2} y={8}>
        <Text variant="heading-default-l" onBackground="neutral-weak">
          {localize(copy.summary, locale)}
        </Text>
      </Reveal>
    </Column>
  );
}
