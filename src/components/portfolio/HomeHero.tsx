"use client";

import { Button, Column, Heading, Row, Text } from "@once-ui-system/core";
import { localize, pageCopy, person, type Locale } from "@/resources";
import { localePath } from "@/utils/site-metadata";
import { Magnetic } from "@/components/motion/Magnetic";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { STAGGER_S } from "@/components/motion/tokens";
import { HomeCredibility } from "./HomeCredibility";

export function HomeHero({ locale }: { locale: Locale }) {
  const copy = pageCopy.home;

  return (
    <Column
      as="section"
      className="home-hero"
      fillWidth
      gap="32"
      aria-labelledby="home-heading"
    >
      <Column className="hero-copy" fillWidth gap="24">
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
        </Stagger>
      </Column>

      <HomeCredibility locale={locale} />

      <Stagger inView={false} interval={STAGGER_S} contents>
        <StaggerItem y={8}>
          <Row className="hero-actions" gap="12" wrap>
            <Magnetic arrow>
              <Button href="#home-flagship" variant="primary" suffixIcon="arrowRight">
                {localize(copy.viewCases, locale)}
              </Button>
            </Magnetic>
            <Button href={localePath(locale, "/about")} variant="secondary" prefixIcon="person">
              {locale === "ko" ? "경력·역량 보기" : "Experience & skills"}
            </Button>
          </Row>
        </StaggerItem>
      </Stagger>
    </Column>
  );
}
