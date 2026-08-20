import { Column, Heading, Row, Text } from "@once-ui-system/core";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
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
            <Stagger className="work-section-heading-copy" interval={STAGGER_M} amount={0.4}>
              <StaggerItem y={8}>
                <Text className="eyebrow" variant="label-strong-s" onBackground="brand-weak">
                  {content.navigation.featured}
                </Text>
              </StaggerItem>
              <StaggerItem y={8}>
                <Heading as="h2" variant="display-strong-s" wrap="balance">
                  {localize(copy.featuredTitle, locale)}
                </Heading>
              </StaggerItem>
            </Stagger>
            <Text variant="body-default-s" onBackground="neutral-weak">
              01 / {content.projects.length}
            </Text>
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
          <Stagger className="work-section-heading-copy" interval={STAGGER_M} amount={0.4}>
            <StaggerItem y={8}>
              <Text className="eyebrow" variant="label-strong-s" onBackground="brand-weak">
                {content.navigation.selectedWork}
              </Text>
            </StaggerItem>
            <StaggerItem y={8}>
              <Heading as="h2" variant="display-strong-s" wrap="balance">
                {localize(copy.selectedTitle, locale)}
              </Heading>
            </StaggerItem>
          </Stagger>
          <Text variant="body-default-s" onBackground="neutral-weak">
            02–{String(content.projects.length).padStart(2, "0")}
          </Text>
        </Row>
        <Stagger className="work-project-grid" interval={STAGGER_CARD}>
          {otherProjects.map((project, index) => (
            <StaggerItem key={project.slug} className="project-card-reveal" y={12}>
              <ProjectCard
                project={project}
                locale={locale}
                priority={index < 2}
                headingLevel="h3"
              />
            </StaggerItem>
          ))}
        </Stagger>
      </Column>
    </Column>
  );
}
