import { Button, Column, Heading, Row, Tag, Text } from "@once-ui-system/core";
import type { Locale, Project } from "@/resources";
import { localize, ui } from "@/resources";
import { localePath } from "@/utils/site-metadata";
import { hasWorkflowVisual, ProjectVisual } from "./ProjectVisual";

export function getProjectStatusVariant(status: string): "neutral" | "info" | "success" {
  if (/(개발|시범|phase|preparing|pilot|development)/i.test(status)) return "info";
  if (/(출시|완료|납품|launched|completed|delivered|live|운영)/i.test(status)) return "success";
  return "neutral";
}

export function ProjectCard({
  project,
  locale,
  priority = false,
  headingLevel = "h2",
  variant = "default",
}: {
  project: Project;
  locale: Locale;
  priority?: boolean;
  headingLevel?: "h2" | "h3";
  variant?: "featured" | "default" | "compact";
}) {
  const labels = ui[locale];
  const hasVisual = Boolean(project.images[0]) || hasWorkflowVisual(project.slug);
  const evidence = project.results[0] ?? project.outcome;
  const evidenceLabel = project.results.length > 0
    ? locale === "ko"
      ? "검증된 결과"
      : "Verified outcome"
    : locale === "ko"
      ? "핵심 납품"
      : "Key delivery";

  if (variant === "compact") {
    return (
      <Column
        as="article"
        className={`project-card project-card-compact${hasVisual ? "" : " project-card-evidence"}`}
        fillWidth
        background="surface"
        border="neutral-alpha-medium"
        radius="l"
        padding="8"
        gap="4"
      >
        <ProjectVisual project={project} locale={locale} priority={priority} />
        <Column className="project-card-body" padding="m" gap="12">
          <Row fillWidth horizontal="between" vertical="start" gap="12">
            <Column gap="4">
              <Text variant="label-strong-s" onBackground="brand-weak">
                {localize(project.company, locale)}
              </Text>
              <Heading as={headingLevel} variant="heading-strong-l" wrap="balance">
                {localize(project.title, locale)}
              </Heading>
            </Column>
            <Tag size="s" variant={getProjectStatusVariant(localize(project.status, locale))}>
              {localize(project.status, locale)}
            </Tag>
          </Row>
          <Text className="project-card-role" variant="label-default-s" onBackground="neutral-weak" wrap="balance">
            {labels.role} · {localize(project.role, locale)}
          </Text>
          {evidence && (
            <Column className="project-card-compact-outcome" gap="4" paddingTop="8">
              <Text variant="label-strong-xs" onBackground="brand-weak">
                {evidenceLabel}
              </Text>
              <Text
                className="project-card-outcome-copy"
                variant="body-default-s"
                onBackground="neutral-medium"
              >
                {localize(evidence, locale)}
              </Text>
            </Column>
          )}
          <Row gap="8" wrap>
            <Button
              href={localePath(locale, `/work/${project.slug}`)}
              size="s"
              variant="tertiary"
              suffixIcon="arrowRight"
            >
              {labels.caseStudy}
            </Button>
            {project.externalLink && (
              <Button
                href={project.externalLink.href}
                size="s"
                variant="tertiary"
                suffixIcon="arrowUpRightFromSquare"
              >
                {localize(project.externalLink.label, locale)}
              </Button>
            )}
          </Row>
        </Column>
      </Column>
    );
  }

  return (
    <Column
      as="article"
      className={`project-card project-card-${variant} project-card-with-visual${hasVisual ? "" : " project-card-evidence"}`}
      fillWidth
      background="surface"
      border="neutral-alpha-medium"
      radius="l"
      padding="8"
      gap="4"
    >
      <ProjectVisual project={project} locale={locale} priority={priority} />
      <Column className="project-card-body" padding="m" gap="16">
        <Row fillWidth horizontal="between" vertical="start" gap="16" s={{ direction: "column" }}>
          <Column gap="4">
            <Text variant="label-strong-s" onBackground="brand-weak">
              {localize(project.company, locale)} · {localize(project.period, locale)}
            </Text>
            <Heading as={headingLevel} variant="heading-strong-xl" wrap="balance">
              {localize(project.title, locale)}
            </Heading>
          </Column>
          <Tag size="s" variant={getProjectStatusVariant(localize(project.status, locale))}>
            {localize(project.status, locale)}
          </Tag>
        </Row>
        <Text
          className="project-card-role"
          variant="label-default-s"
          onBackground="neutral-weak"
          wrap="balance"
        >
          {labels.role} · {localize(project.role, locale)}
        </Text>
        <Text variant="label-strong-xs" onBackground="brand-weak">
          {locale === "ko" ? "문제" : "Problem"}
        </Text>
        <Text variant="body-default-m" onBackground="neutral-weak" wrap="balance">
          {localize(project.problem, locale)}
        </Text>
        {evidence && (
          <Column className="project-card-outcome" gap="4" padding="12" radius="m">
            <Text variant="label-strong-xs" onBackground="brand-weak">
              {evidenceLabel}
            </Text>
            <Text
              className="project-card-outcome-copy"
              variant="body-default-s"
              onBackground="neutral-medium"
            >
              {localize(evidence, locale)}
            </Text>
          </Column>
        )}
        <Row wrap gap="8">
          {project.technologies.slice(0, 4).map((technology) => (
            <Tag key={technology} size="s">
              {technology}
            </Tag>
          ))}
        </Row>
        <Row gap="12" wrap>
          <Button
            href={localePath(locale, `/work/${project.slug}`)}
            size="s"
            variant="secondary"
            suffixIcon="arrowRight"
          >
            {labels.caseStudy}
          </Button>
          {project.repository && (
            <Button
              href={project.repository}
              size="s"
              variant="tertiary"
              prefixIcon="github"
              suffixIcon="arrowUpRightFromSquare"
            >
              GitHub
            </Button>
          )}
          {project.externalLink && (
            <Button
              href={project.externalLink.href}
              size="s"
              variant="tertiary"
              suffixIcon="arrowUpRightFromSquare"
            >
              {localize(project.externalLink.label, locale)}
            </Button>
          )}
        </Row>
      </Column>
    </Column>
  );
}
