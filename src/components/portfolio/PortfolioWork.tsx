import { Column, Heading, Row, Text } from "@once-ui-system/core";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { STAGGER_CARD, STAGGER_M } from "@/components/motion/tokens";
import { getContent, localize, pageCopy, type Locale } from "@/resources";
import { ProjectCard } from "./ProjectCard";
import { WorkIntro } from "./WorkIntro";

export function PortfolioWork({ locale }: { locale: Locale }) {
  const content = getContent(locale);
  const copy = pageCopy.work;

  return (
    <Column className="page-stack work-page" maxWidth="l" fillWidth gap="48">
      <WorkIntro locale={locale} />
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
            {String(content.projects.length).padStart(2, "0")}
          </Text>
        </Row>
        <Stagger className="work-project-grid" interval={STAGGER_CARD}>
          {content.projects.map((project, index) => (
            <StaggerItem key={project.slug} className="project-card-reveal" y={12}>
              <ProjectCard
                project={project}
                locale={locale}
                priority={index < 2}
                headingLevel="h3"
                variant="compact"
              />
            </StaggerItem>
          ))}
        </Stagger>
      </Column>
    </Column>
  );
}
