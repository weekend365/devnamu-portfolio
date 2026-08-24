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
  const content = getContent(locale);
  const labels = content.navigation;
  const copy = pageCopy.home;
  const featuredProject = content.projects.find((project) => project.featured);
  const featuredImage = featuredProject?.images[0];
  const proofItems = [
    { value: "3+", label: localize(copy.proofYears, locale) },
    { value: String(content.projects.length), label: localize(copy.proofProjects, locale) },
    { value: "2", label: localize(copy.proofDelivery, locale) },
  ];

  return (
    <Row
      as="section"
      className="home-hero"
      fillWidth
      gap="xl"
      vertical="stretch"
      aria-labelledby="home-heading"
      s={{ direction: "column" }}
    >
      <Column className="hero-copy" flex={7} gap="24" vertical="center">
        <Stagger inView={false} interval={STAGGER_S} contents>
          <StaggerItem y={8}>
            <Text className="eyebrow" variant="label-strong-m" onBackground="brand-weak">
              {person.name[locale]} · {person.role[locale]}
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
            <div
              className="hero-proof-grid"
              aria-label={locale === "ko" ? "핵심 경력 요약" : "Career highlights"}
            >
              {proofItems.map((item) => (
                <Column key={item.label} className="hero-proof-item" gap="4">
                  <Text variant="display-strong-xs" onBackground="brand-weak">
                    {item.value}
                  </Text>
                  <Text variant="label-default-s" onBackground="neutral-weak">
                    {item.label}
                  </Text>
                </Column>
              ))}
            </div>
          </StaggerItem>
          <StaggerItem y={8}>
            <Row className="hero-actions" gap="12" wrap>
              <Magnetic arrow>
                <Button
                  href={localePath(locale, "/work/jango")}
                  variant="primary"
                  prefixIcon="grid"
                  suffixIcon="arrowRight"
                >
                  {locale === "ko" ? "대표 사례 2분 요약" : "View flagship case study"}
                </Button>
              </Magnetic>
              <Row className="hero-secondary-actions" gap="12" wrap>
                <Button href={localePath(locale, "/about")} variant="secondary" prefixIcon="person">
                  {locale === "ko" ? "경력·역량 보기" : "Experience & skills"}
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
      {featuredProject && featuredImage ? (
        <Column
          className="hero-evidence-card"
          flex={5}
          background="surface"
          border="brand-alpha-medium"
          radius="xl"
          padding="l"
          gap="20"
        >
          <Row fillWidth horizontal="between" vertical="start" gap="12">
            <Column gap="4">
              <Text className="eyebrow" variant="label-strong-s" onBackground="brand-weak">
                {locale === "ko" ? "직접 출시한 대표 제품" : "Flagship product shipped"}
              </Text>
              <Heading as="h2" variant="heading-strong-xl">
                {localize(featuredProject.title, locale)}
              </Heading>
            </Column>
            <Tag variant="success" size="s">
              App Store
            </Tag>
          </Row>

          <Row className="hero-evidence-content" fillWidth gap="20" vertical="center">
            <motion.div
              className="hero-product-device"
              initial={reduced ? false : { scale: 0.97, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: reduced ? 0 : STAGGER_S * 2 }}
            >
              <Media
                className="hero-product-screen"
                src={featuredImage.src}
                alt={localize(featuredImage.alt, locale)}
                aspectRatio="1125 / 2433"
                objectFit="cover"
                sizes="(max-width: 768px) 116px, 152px"
                priority
                radius="l"
              />
            </motion.div>
            <Column className="hero-evidence-metrics" fillWidth gap="12">
              {(featuredProject.metrics ?? []).map((metric) => (
                <Column
                  key={metric.value + metric.label.en}
                  className="hero-evidence-metric"
                  gap="2"
                >
                  <Text variant="heading-strong-m" onBackground="brand-weak">
                    {metric.value}
                  </Text>
                  <Text variant="label-default-s" onBackground="neutral-weak">
                    {localize(metric.label, locale)}
                  </Text>
                </Column>
              ))}
            </Column>
          </Row>

          <Row className="hero-person-summary" fillWidth gap="12" vertical="center">
            <Media
              className="hero-profile-thumbnail"
              src={person.avatar}
              alt={
                locale === "ko"
                  ? `${person.name[locale]} 프로필 사진`
                  : `Portrait of ${person.name[locale]}`
              }
              aspectRatio="1 / 1"
              objectFit="cover"
              sizes="48px"
              priority
              radius="full"
            />
            <Column gap="2">
              <Text variant="label-strong-s">{person.name[locale]}</Text>
              <Text variant="label-default-xs" onBackground="neutral-weak">
                {localize(person.location, locale)} · {localize(person.languages, locale)}
              </Text>
            </Column>
          </Row>
        </Column>
      ) : null}
    </Row>
  );
}
