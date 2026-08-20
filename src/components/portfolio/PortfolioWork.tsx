import { Column, Grid, Heading, Row, Text } from "@once-ui-system/core";
import { Reveal } from "@/components/motion/Reveal";
import { STAGGER_CARD, STAGGER_M } from "@/components/motion/tokens";
import { getContent, localize, pageCopy, type Locale } from "@/resources";
import { ProjectCard } from "./ProjectCard";
import { WorkIntro } from "./WorkIntro";

export function PortfolioWork({ locale }: { locale: Locale }) {
  const content = getContent(locale);
  const copy = pageCopy.work;
  const featuredProject = content.projects.find((project) => project.featured);
  const otherProjects = content.projects.filter((project) => !project.featured);

  return (
    <Column className="page-stack work-page" maxWidth="l" fillWidth gap="64">
      <WorkIntro locale={locale} />
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
              <Reveal inView delay={0} y={10}>
                <Text className="eyebrow" variant="label-strong-s" onBackground="brand-weak">
                  {content.navigation.featured}
                </Text>
              </Reveal>
              <Reveal inView delay={STAGGER_M} y={10}>
                <Heading as="h2" variant="display-strong-s" wrap="balance">
                  {localize(copy.featuredTitle, locale)}
                </Heading>
              </Reveal>
            </Column>
            <Reveal inView delay={STAGGER_M * 2} y={8}>
              <Text variant="body-default-s" onBackground="neutral-weak">
                01 / {content.projects.length}
              </Text>
            </Reveal>
          </Row>
          <Reveal inView y={12} className="featured-project-reveal">
            <ProjectCard
              project={featuredProject}
              locale={locale}
              priority
              headingLevel="h2"
              variant="featured"
            />
          </Reveal>
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
            <Reveal inView delay={0} y={10}>
              <Text className="eyebrow" variant="label-strong-s" onBackground="brand-weak">
                {content.navigation.selectedWork}
              </Text>
            </Reveal>
            <Reveal inView delay={STAGGER_M} y={10}>
              <Heading as="h2" variant="display-strong-s" wrap="balance">
                {localize(copy.selectedTitle, locale)}
              </Heading>
            </Reveal>
          </Column>
          <Reveal inView delay={STAGGER_M * 2} y={8}>
            <Text variant="body-default-s" onBackground="neutral-weak">
              02–{String(content.projects.length).padStart(2, "0")}
            </Text>
          </Reveal>
        </Row>
        <Grid columns="2" s={{ columns: 1 }} gap="24">
          {otherProjects.map((project, index) => (
            <Reveal
              key={project.slug}
              className="project-card-reveal"
              inView
              delay={index * STAGGER_CARD}
              y={12}
            >
              <ProjectCard
                project={project}
                locale={locale}
                priority={index < 2}
                headingLevel="h3"
              />
            </Reveal>
          ))}
        </Grid>
      </Column>
    </Column>
  );
}
