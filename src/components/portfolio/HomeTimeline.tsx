"use client";

import { Column, Heading, Row, Tag, Text } from "@once-ui-system/core";
import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "@/components/motion/Reveal";
import { EASE } from "@/components/motion/tokens";
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
  const reduced = useReducedMotion();

  return (
    <Column gap={detailed ? "48" : "32"}>
      {experiences.map((experience, index) => (
        <Row
          key={experience.company.en}
          className="timeline-item"
          gap="24"
          fillWidth
        >
          <motion.span
            className="timeline-line"
            aria-hidden="true"
            initial={reduced ? false : { scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.2, delay: reduced ? 0 : 0.08, ease: EASE }}
            style={{ originY: 0 }}
          />
          <motion.span
            className="timeline-dot"
            aria-hidden="true"
            initial={reduced ? false : { scale: 0.55, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.35, delay: reduced ? 0 : index * 0.04, ease: EASE }}
          />
          <Reveal inView delay={0.1} y={10} style={{ flex: 1, minWidth: 0 }}>
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
          </Reveal>
        </Row>
      ))}
    </Column>
  );
}
