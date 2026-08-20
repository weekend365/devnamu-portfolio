"use client";

import { Button, Column, Heading, Media, Row, Tag, Text } from "@once-ui-system/core";
import { motion, useReducedMotion } from "motion/react";
import { getContent, localize, pageCopy, person, type Locale } from "@/resources";
import { localePath } from "@/utils/site-metadata";
import { Magnetic } from "@/components/motion/Magnetic";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { EASE, STAGGER_S } from "@/components/motion/tokens";

export function HomeHero({ locale }: { locale: Locale }) {
  const reduced = useReducedMotion();
  const labels = getContent(locale).navigation;
  const copy = pageCopy.home;

  return (
    <Row
      as="section"
      className="home-hero"
      fillWidth
      gap="xl"
      vertical="center"
      aria-labelledby="home-heading"
      s={{ direction: "column" }}
    >
      <Column className="hero-copy" flex={8} gap="24">
        <Stagger inView={false} interval={STAGGER_S} contents>
          <StaggerItem y={8}>
            <Text className="eyebrow" variant="label-strong-m" onBackground="brand-weak">
              {person.brand} · {person.name[locale]} / {person.role[locale]}
            </Text>
          </StaggerItem>
          <StaggerItem y={16} fade={false}>
            <Heading
              id="home-heading"
              className="hero-title"
              as="h1"
              variant="display-strong-xl"
              wrap="balance"
            >
              {localize(copy.title, locale)}
            </Heading>
          </StaggerItem>
          <StaggerItem y={10}>
            <Column maxWidth={44} fillWidth>
              <Text variant="heading-default-l" onBackground="neutral-weak" wrap="balance">
                {localize(copy.summary, locale)}
              </Text>
            </Column>
          </StaggerItem>
          <StaggerItem y={8}>
            <Row className="hero-context" gap="8" wrap>
              <Tag size="s">{localize(person.location, locale)}</Tag>
              <Tag size="s">{localize(person.languages, locale)}</Tag>
            </Row>
          </StaggerItem>
          <StaggerItem y={8}>
            <Row className="hero-actions" gap="12" wrap>
              <Magnetic arrow>
                <Button
                  href={localePath(locale, "/work")}
                  variant="primary"
                  prefixIcon="grid"
                  suffixIcon="arrowRight"
                >
                  {locale === "ko" ? "대표 프로젝트 보기" : "View selected work"}
                </Button>
              </Magnetic>
              <Row className="hero-secondary-actions" gap="12" wrap>
                <Button
                  href={person.github}
                  variant="secondary"
                  prefixIcon="github"
                  suffixIcon="arrowUpRightFromSquare"
                >
                  {labels.github}
                </Button>
                <Button
                  className="hero-email-button"
                  href={`mailto:${person.email}`}
                  variant="tertiary"
                  prefixIcon="email"
                  aria-label={labels.contact}
                >
                  {labels.contact}
                </Button>
              </Row>
            </Row>
          </StaggerItem>
        </Stagger>
      </Column>
      <Column className="hero-portrait" flex={3} horizontal="center">
        <motion.div
          initial={reduced ? false : { scale: 1.04 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, ease: EASE, delay: reduced ? 0 : STAGGER_S * 3 }}
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
            sizes="(max-width: 768px) 112px, 160px"
            priority
            radius="full"
          />
        </motion.div>
      </Column>
    </Row>
  );
}
