import { Column, Heading, Row, Text } from "@once-ui-system/core";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { STAGGER_CARD, STAGGER_M } from "@/components/motion/tokens";
import { getContent, localize, pageCopy, type Locale } from "@/resources";
import { ProjectCard } from "./ProjectCard";
import { WorkIntro } from "./WorkIntro";

export function PortfolioWork({ locale }: { locale: Locale }) {
  const content = getContent(locale);
  const copy = pageCopy.work;
  const primarySlugs = new Set(["jango", "kcsc", "bims"]);
  const primaryProjects = content.projects.filter((project) => primarySlugs.has(project.slug));
  const additionalProjects = content.projects.filter((project) => !primarySlugs.has(project.slug));

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
            {String(primaryProjects.length).padStart(2, "0")}
          </Text>
        </Row>
        <Stagger className="work-project-grid work-primary-grid" interval={STAGGER_CARD}>
          {primaryProjects.map((project, index) => (
            <StaggerItem key={project.slug} className="project-card-reveal" y={12}>
              <ProjectCard
                project={project}
                locale={locale}
                priority={index < 2}
                headingLevel="h3"
                variant={index === 0 ? "featured" : "compact"}
              />
            </StaggerItem>
          ))}
        </Stagger>
      </Column>

      <Column as="section" className="work-additional" gap="24">
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
              {locale === "ko" ? "추가 프로젝트" : "Additional work"}
            </Text>
            <Heading as="h2" variant="display-strong-xs" wrap="balance">
              {locale === "ko"
                ? "경험의 범위를 보여주는 실무 사례"
                : "Professional cases that broaden the range"}
            </Heading>
          </Column>
          <Text variant="body-default-s" onBackground="neutral-weak">
            {String(additionalProjects.length).padStart(2, "0")}
          </Text>
        </Row>
        <Stagger className="work-project-grid work-additional-grid" interval={STAGGER_CARD}>
          {additionalProjects.map((project) => (
            <StaggerItem key={project.slug} className="project-card-reveal" y={12}>
              <ProjectCard project={project} locale={locale} headingLevel="h3" variant="compact" />
            </StaggerItem>
          ))}
        </Stagger>
      </Column>
    </Column>
  );
}
