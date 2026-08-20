"use client";

import { Button, Column, Heading, Row, Tag, Text } from "@once-ui-system/core";
import { Reveal } from "@/components/motion/Reveal";
import { STAGGER_M } from "@/components/motion/tokens";
import { localize, pageCopy, ui, type Locale, type Project } from "@/resources";
import { localePath } from "@/utils/site-metadata";
import { getProjectStatusVariant } from "./ProjectCard";

export function ProjectHero({ project, locale }: { project: Project; locale: Locale }) {
  const labels = ui[locale];
  const copy = pageCopy.project;
  const projectTitle = localize(project.title, locale);

  return (
    <Column as="header" className="project-hero" gap="24">
      <Reveal delay={0} y={8}>
        <Button
          href={localePath(locale, "/work")}
          variant="tertiary"
          prefixIcon="chevronLeft"
          size="s"
        >
          {labels.backToWork}
        </Button>
      </Reveal>
      <Reveal delay={STAGGER_M} y={8}>
        <Row gap="8" wrap>
          {project.featured && <Tag variant="brand">{labels.featured}</Tag>}
          <Tag variant={getProjectStatusVariant(localize(project.status, locale))}>
            {localize(project.status, locale)}
          </Tag>
        </Row>
      </Reveal>
      <Reveal delay={STAGGER_M * 2} y={12}>
        <Heading as="h1" className="hero-name" variant="display-strong-l" wrap="balance">
          {projectTitle}
        </Heading>
      </Reveal>
      {project.technicalName ? (
        <Reveal delay={STAGGER_M * 3} y={8}>
          <Text variant="label-default-m" onBackground="neutral-weak">
            {localize(copy.namespace, locale)} · {project.technicalName}
          </Text>
        </Reveal>
      ) : null}
      <Reveal delay={STAGGER_M * 4} y={8}>
        <Column className="project-summary" maxWidth="s" gap="12">
          <Text variant="heading-default-l" onBackground="neutral-weak" wrap="balance">
            {localize(project.summary, locale)}
          </Text>
          <Text variant="body-default-s" onBackground="neutral-weak">
            {localize(project.company, locale)} · {localize(project.period, locale)}
          </Text>
        </Column>
      </Reveal>
      <Reveal delay={STAGGER_M * 5} y={8}>
        <Row gap="12" wrap>
          {project.repository && (
            <Button
              href={project.repository}
              prefixIcon="github"
              suffixIcon="arrowUpRightFromSquare"
            >
              {labels.viewGithub}
            </Button>
          )}
          {project.externalLink && !project.demoAccess && (
            <Button
              href={project.externalLink.href}
              variant="secondary"
              suffixIcon="arrowUpRightFromSquare"
            >
              {localize(project.externalLink.label, locale)}
            </Button>
          )}
        </Row>
      </Reveal>
    </Column>
  );
}
