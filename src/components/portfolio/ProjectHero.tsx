"use client";

import { Button, Column, Heading, Row, Tag, Text } from "@once-ui-system/core";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
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
      <Stagger inView={false} interval={STAGGER_M} contents>
        <StaggerItem y={8}>
          <Button
            href={localePath(locale, "/work")}
            variant="tertiary"
            prefixIcon="chevronLeft"
            size="s"
          >
            {labels.backToWork}
          </Button>
        </StaggerItem>
        <StaggerItem y={8}>
          <Row gap="8" wrap>
            {project.featured && <Tag variant="brand">{labels.featured}</Tag>}
            <Tag variant={getProjectStatusVariant(localize(project.status, locale))}>
              {localize(project.status, locale)}
            </Tag>
          </Row>
        </StaggerItem>
        <StaggerItem y={12} fade={false}>
          <Heading as="h1" className="hero-name" variant="display-strong-l" wrap="balance">
            {projectTitle}
          </Heading>
        </StaggerItem>
        {project.technicalName ? (
          <StaggerItem y={8}>
            <Text variant="label-default-m" onBackground="neutral-weak">
              {localize(copy.namespace, locale)} · {project.technicalName}
            </Text>
          </StaggerItem>
        ) : null}
        <StaggerItem y={8}>
          <Column className="project-summary" maxWidth="s" gap="12">
            <Text variant="heading-default-l" onBackground="neutral-weak" wrap="balance">
              {localize(project.summary, locale)}
            </Text>
            <Text variant="body-default-s" onBackground="neutral-weak">
              {localize(project.company, locale)} · {localize(project.period, locale)}
            </Text>
          </Column>
        </StaggerItem>
        <StaggerItem y={8}>
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
        </StaggerItem>
      </Stagger>
    </Column>
  );
}
