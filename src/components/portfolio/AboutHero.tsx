"use client";

import { Button, Column, Heading, Media, Row, Text } from "@once-ui-system/core";
import { motion, useReducedMotion } from "motion/react";
import { Magnetic } from "@/components/motion/Magnetic";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { EASE, STAGGER_S } from "@/components/motion/tokens";
import { getContent, localize, pageCopy, person, type Locale } from "@/resources";

export function AboutHero({ locale }: { locale: Locale }) {
  const reduced = useReducedMotion();
  const labels = getContent(locale).navigation;
  const copy = pageCopy.about;

  return (
    <Row
      as="header"
      fillWidth
      gap="xl"
      vertical="center"
      s={{ direction: "column-reverse", vertical: "start" }}
    >
      <Column flex={8} gap="20">
        <Stagger inView={false} interval={STAGGER_S} contents>
          <StaggerItem y={8}>
            <Text className="eyebrow" variant="label-strong-m" onBackground="brand-weak">
              {person.brand} · {labels.about}
            </Text>
          </StaggerItem>
          <StaggerItem y={13} fade={false}>
            <Heading as="h1" className="hero-title" variant="display-strong-l" wrap="balance">
              {localize(copy.title, locale)}
            </Heading>
          </StaggerItem>
          <StaggerItem y={8}>
            <Text variant="heading-default-l" onBackground="neutral-weak" wrap="balance">
              {localize(copy.summary, locale)}
            </Text>
          </StaggerItem>
          <StaggerItem y={8}>
            <Text variant="label-strong-m" onBackground="brand-weak">
              {person.role[locale]}
            </Text>
          </StaggerItem>
          <StaggerItem y={8}>
            <Row gap="12" wrap>
              <Magnetic>
                <Button href={`mailto:${person.email}`} variant="primary" prefixIcon="email">
                  {labels.contact}
                </Button>
              </Magnetic>
            </Row>
          </StaggerItem>
        </Stagger>
      </Column>
      <Column className="about-hero-meta" gap="12" horizontal="center">
        <motion.div
          initial={reduced ? false : { scale: 1.03 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.55, ease: EASE, delay: reduced ? 0 : STAGGER_S * 2 }}
        >
          <Media
            className="profile-image"
            src={person.avatar}
            alt={
              locale === "ko"
                ? `${person.brand} ${person.name[locale]} 프로필 사진`
                : `Portrait of ${person.name[locale]}`
            }
            aspectRatio="1 / 1"
            objectFit="cover"
            sizes="(max-width: 768px) 112px, 176px"
            priority
            radius="full"
          />
        </motion.div>
      </Column>
    </Row>
  );
}
