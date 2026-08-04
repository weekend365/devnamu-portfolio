import { Button, Column, Heading, Row, Tag, Text } from "@once-ui-system/core";
import type { Locale, Project } from "@/resources";
import { localize, ui } from "@/resources";
import { localePath } from "@/utils/site-metadata";
import { ProjectVisual } from "./ProjectVisual";

export function ProjectCard({
  project,
  locale,
  priority = false,
  headingLevel = "h2",
}: {
  project: Project;
  locale: Locale;
  priority?: boolean;
  headingLevel?: "h2" | "h3";
}) {
  const labels = ui[locale];
  const hasVisual = Boolean(project.images[0]);

  return (
    <Column
      as="article"
      className={`project-card${hasVisual ? " project-card-with-visual" : " project-card-editorial"}`}
      fillWidth
      background="surface"
      border="neutral-alpha-medium"
      radius="l"
      padding="8"
      gap="4"
    >
      {hasVisual && <ProjectVisual project={project} locale={locale} priority={priority} />}
      <Column padding={hasVisual ? "m" : "l"} gap="16">
        <Row fillWidth horizontal="between" vertical="start" gap="16" s={{ direction: "column" }}>
          <Column gap="4">
            <Text variant="label-strong-s" onBackground="brand-weak">
              {localize(project.company, locale)} · {localize(project.period, locale)}
            </Text>
            <Heading as={headingLevel} variant="heading-strong-xl" wrap="balance">
              {localize(project.title, locale)}
            </Heading>
          </Column>
          <Tag size="s" variant="success">{localize(project.status, locale)}</Tag>
        </Row>
        <Text variant="body-default-m" onBackground="neutral-weak" wrap="balance">
          {localize(project.summary, locale)}
        </Text>
        <Row wrap gap="8">
          {project.technologies.slice(0, 4).map((technology) => (
            <Tag key={technology} size="s">{technology}</Tag>
          ))}
        </Row>
        <Row gap="12" wrap>
          <Button href={localePath(locale, `/work/${project.slug}`)} size="s" variant="secondary" suffixIcon="arrowRight">
            {labels.caseStudy}
          </Button>
          {project.repository && (
            <Button href={project.repository} size="s" variant="tertiary" prefixIcon="github" suffixIcon="arrowUpRightFromSquare">
              GitHub
            </Button>
          )}
        </Row>
      </Column>
    </Column>
  );
}
