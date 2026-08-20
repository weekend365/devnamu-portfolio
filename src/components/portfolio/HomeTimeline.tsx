"use client";

import { Column, Heading, Row, Tag, Text } from "@once-ui-system/core";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { STAGGER_CARD } from "@/components/motion/tokens";
import { localize, type Experience, type Locale } from "@/resources";

export function HomeTimeline({
  locale,
  experiences,
  detailed = false,
}: {
  locale: Locale;
  experiences: Experience[];
  detailed?: boolean;
}) {
  return (
    <Stagger
      className={detailed ? "timeline-stagger timeline-stagger-detailed" : "timeline-stagger"}
      interval={STAGGER_CARD}
    >
      {experiences.map((experience) => (
        <StaggerItem key={experience.company.en} y={10}>
          <Row className="timeline-item" gap="24" fillWidth>
            <span className="timeline-line" aria-hidden="true" />
            <span className="timeline-dot" aria-hidden="true" />
            <Column fillWidth gap={detailed ? "20" : "12"} paddingBottom="24">
              <Row fillWidth horizontal="between" gap="16" s={{ direction: "column" }}>
                <Column gap="4">
                  <Heading as="h3" variant={detailed ? "heading-strong-xl" : "heading-strong-l"}>
                    {localize(experience.company, locale)}
                  </Heading>
                  <Text
                    variant={detailed ? undefined : "body-default-m"}
                    onBackground="brand-weak"
                  >
                    {localize(experience.role, locale)}
                  </Text>
                </Column>
                {detailed ? (
                  <Column className="timeline-meta" gap="4" align="right">
                    <Text variant="label-strong-s">{localize(experience.period, locale)}</Text>
                    <Text variant="label-default-s" onBackground="neutral-weak">
                      {localize(experience.location, locale)}
                    </Text>
                  </Column>
                ) : (
                  <Text variant="label-default-s" onBackground="neutral-weak">
                    {localize(experience.period, locale)}
                  </Text>
                )}
              </Row>
              <Row gap="8" wrap>
                {experience.projects.map((project) => (
                  <Tag key={project.en} size={detailed ? undefined : "s"}>
                    {localize(project, locale)}
                  </Tag>
                ))}
              </Row>
              {detailed ? (
                <Column as="ul" gap="12" paddingLeft="24">
                  {experience.achievements.map((achievement) => (
                    <Text
                      as="li"
                      key={achievement.en}
                      variant="body-default-m"
                      onBackground="neutral-medium"
                    >
                      {localize(achievement, locale)}
                    </Text>
                  ))}
                </Column>
              ) : null}
            </Column>
          </Row>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
