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

function CardActions({ project, locale }: { project: Project; locale: Locale }) {
  const labels = ui[locale];
  if (!project.repository && !project.externalLink) {
    return null;
  }

  return (
    <Row className="project-card-actions" gap="8" wrap>
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
  );
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
  const title = localize(project.title, locale);
  const caseStudyHref = localePath(locale, `/work/${project.slug}`);
  const compact = variant === "compact";

  return (
    <Column
      as="article"
      className={`project-card project-card-${variant}${hasVisual ? "" : " project-card-evidence"}${
        compact ? "" : " project-card-with-visual"
      }`}
      fillWidth
      background="surface"
      border="neutral-alpha-medium"
      radius="l"
      padding="8"
      gap="4"
    >
      <a className="project-card-hit" href={caseStudyHref}>
        <span className="sr-only">
          {locale === "ko" ? `${title} 사례 읽기` : `Read ${title} case study`}
        </span>
      </a>
      <ProjectVisual project={project} locale={locale} priority={priority} />
      <Column className="project-card-body" padding="m" gap={compact ? "12" : "16"}>
        <Row
          fillWidth
          horizontal="between"
          vertical="start"
          gap={compact ? "12" : "16"}
          s={compact ? undefined : { direction: "column" }}
        >
          <Column gap="4">
            <Text variant="label-strong-s" onBackground="brand-weak">
              {compact
                ? localize(project.company, locale)
                : `${localize(project.company, locale)} · ${localize(project.period, locale)}`}
            </Text>
            <Heading as={headingLevel} variant={compact ? "heading-strong-l" : "heading-strong-xl"} wrap="balance">
              {title}
            </Heading>
          </Column>
          <Tag size="s" variant={getProjectStatusVariant(localize(project.status, locale))}>
            {localize(project.status, locale)}
          </Tag>
        </Row>
        <Text className="project-card-role" variant="label-default-s" onBackground="neutral-weak" wrap="balance">
          {labels.role} · {localize(project.role, locale)}
        </Text>
        {compact ? null : (
          <>
            <Text variant="label-strong-xs" onBackground="brand-weak">
              {locale === "ko" ? "문제" : "Problem"}
            </Text>
            <Text variant="body-default-m" onBackground="neutral-weak" wrap="balance">
              {localize(project.problem, locale)}
            </Text>
          </>
        )}
        {evidence && (
          <Column
            className={compact ? "project-card-compact-outcome" : "project-card-outcome"}
            gap="4"
            padding={compact ? undefined : "12"}
            paddingTop={compact ? "8" : undefined}
            radius={compact ? undefined : "m"}
          >
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
        {compact ? null : (
          <Row wrap gap="8">
            {project.technologies.slice(0, 4).map((technology) => (
              <Tag key={technology} size="s">
                {technology}
              </Tag>
            ))}
          </Row>
        )}
        <CardActions project={project} locale={locale} />
      </Column>
    </Column>
  );
}
