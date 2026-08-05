import { Column, Grid, Heading, Row, Text } from "@once-ui-system/core";
import { getContent, localize, pageCopy, type Locale } from "@/resources";
import { ProjectCard } from "./ProjectCard";

export function PortfolioWork({ locale }: { locale: Locale }) {
  const content = getContent(locale);
  const copy = pageCopy.work;
  const featuredProject = content.projects.find((project) => project.featured);
  const otherProjects = content.projects.filter((project) => !project.featured);

  return (
    <Column className="page-stack work-page" maxWidth="l" fillWidth gap="64">
      <Column as="header" maxWidth="s" gap="16">
        <Text className="eyebrow" variant="label-strong-m" onBackground="brand-weak">{content.navigation.work}</Text>
        <Heading as="h1" className="hero-name" variant="display-strong-l" wrap="balance">
          {localize(copy.title, locale)}
        </Heading>
        <Text variant="heading-default-l" onBackground="neutral-weak">
          {localize(copy.summary, locale)}
        </Text>
      </Column>
      {featuredProject && (
        <Column as="section" className="work-featured" gap="24">
          <Row
            className="work-section-heading"
            fillWidth
            horizontal="between"
            vertical="end"
            gap="16"
            s={{ direction: "column", vertical: "start" }}
          >
            <Column gap="8">
              <Text className="eyebrow" variant="label-strong-s" onBackground="brand-weak">
                {content.navigation.featured}
              </Text>
              <Heading as="h2" variant="display-strong-s" wrap="balance">
                {localize(copy.featuredTitle, locale)}
              </Heading>
            </Column>
            <Text variant="body-default-s" onBackground="neutral-weak">
              01 / {content.projects.length}
            </Text>
          </Row>
          <ProjectCard
            project={featuredProject}
            locale={locale}
            priority
            headingLevel="h2"
            variant="featured"
          />
        </Column>
      )}
      <Column as="section" className="work-selected" gap="24">
        <Row
          className="work-section-heading"
          fillWidth
          horizontal="between"
          vertical="end"
          gap="16"
          s={{ direction: "column", vertical: "start" }}
        >
          <Column gap="8">
            <Text className="eyebrow" variant="label-strong-s" onBackground="brand-weak">
              {content.navigation.selectedWork}
            </Text>
            <Heading as="h2" variant="display-strong-s" wrap="balance">
              {localize(copy.selectedTitle, locale)}
            </Heading>
          </Column>
          <Text variant="body-default-s" onBackground="neutral-weak">
            02–{String(content.projects.length).padStart(2, "0")}
          </Text>
        </Row>
        <Grid columns="2" s={{ columns: 1 }} gap="24">
          {otherProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} locale={locale} priority={index < 2} headingLevel="h3" />
          ))}
        </Grid>
      </Column>
    </Column>
  );
}
