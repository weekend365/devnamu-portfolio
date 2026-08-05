import { Column, Grid, Heading, Row, Text } from "@once-ui-system/core";
import { getContent, type Locale } from "@/resources";
import { ProjectCard } from "./ProjectCard";

export function PortfolioWork({ locale }: { locale: Locale }) {
  const content = getContent(locale);
  const featuredProject = content.projects.find((project) => project.featured);
  const otherProjects = content.projects.filter((project) => !project.featured);

  return (
    <Column className="page-stack work-page" maxWidth="l" fillWidth gap="64">
      <Column as="header" maxWidth="s" gap="16">
        <Text className="eyebrow" variant="label-strong-m" onBackground="brand-weak">{content.navigation.work}</Text>
        <Heading as="h1" className="hero-name" variant="display-strong-l" wrap="balance">
          {locale === "ko" ? "제품을 만들고, 업무를 움직인 기록" : "Products built. Operations improved."}
        </Heading>
        <Text variant="heading-default-l" onBackground="neutral-weak">
          {locale === "ko" ? "개인 제품부터 공공·교통·구독 서비스까지, 제가 맡은 역할과 구현한 내용을 사실에 근거해 정리했습니다." : "A factual record of what I owned and shipped across an independent product, public systems, transportation, and subscriptions."}
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
                {locale === "ko" ? "현재 가장 깊이 관여하고 있는 제품" : "The product I currently own most deeply"}
              </Heading>
            </Column>
            <Text variant="body-default-s" onBackground="neutral-weak">
              01 / {content.projects.length}
            </Text>
          </Row>
          <ProjectCard project={featuredProject} locale={locale} priority headingLevel="h2" />
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
              {locale === "ko" ? "복잡한 업무를 사용 가능한 화면으로 바꾼 작업" : "Turning complex operations into usable software"}
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
