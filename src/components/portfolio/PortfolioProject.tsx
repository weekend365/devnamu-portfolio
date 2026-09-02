import { Button, Column, Grid, Heading, Row, Tag, Text } from "@once-ui-system/core";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { STAGGER_CARD } from "@/components/motion/tokens";
import {
  baseURL,
  getProjects,
  localize,
  pageCopy,
  person,
  type Locale,
  type Project,
  ui,
} from "@/resources";
import { localePath } from "@/utils/site-metadata";
import { BimsArchitectureDiagram, bimsArchitectureCopy } from "./BimsArchitectureDiagram";
import { KcscArchitectureDiagram, kcscArchitectureCopy } from "./KcscArchitectureDiagram";
import { ProjectCard } from "./ProjectCard";
import { ProjectDemoAccess } from "./ProjectDemoAccess";
import { ProjectHero } from "./ProjectHero";
import { ProjectHiringSnapshot } from "./ProjectHiringSnapshot";
import { ProjectScreenshotCarousel } from "./ProjectScreenshotCarousel";
import { ProjectVisual } from "./ProjectVisual";
import { SectionHeading } from "./SectionHeading";
import { StructuredData } from "./StructuredData";

function DetailList({ items, locale }: { items: Project["contributions"]; locale: Locale }) {
  return (
    <Column as="ol" className="detail-list" gap="12" paddingLeft="0">
      {items.map((item, index) => (
        <Column
          as="li"
          className="detail-list-item"
          key={item.en}
          background="surface"
          border="neutral-alpha-medium"
          radius="l"
          padding="m"
          gap="8"
        >
          <Text variant="label-strong-s" onBackground="brand-weak">
            0{index + 1}
          </Text>
          <Text variant="body-default-m" onBackground="neutral-medium">
            {localize(item, locale)}
          </Text>
        </Column>
      ))}
    </Column>
  );
}

export function PortfolioProject({ project, locale }: { project: Project; locale: Locale }) {
  const labels = ui[locale];
  const copy = pageCopy.project;
  const related = getProjects(locale)
    .filter((item) => item.slug !== project.slug)
    .slice(0, 2);
  const projectUrl = `${baseURL}${localePath(locale, `/work/${project.slug}`)}`;
  const projectTitle = localize(project.title, locale);
  const architecture =
    project.slug === "bims"
      ? { copy: bimsArchitectureCopy[locale], Diagram: BimsArchitectureDiagram }
      : project.slug === "kcsc"
        ? { copy: kcscArchitectureCopy[locale], Diagram: KcscArchitectureDiagram }
        : null;

  return (
    <Column className="page-stack project-page" maxWidth="m" fillWidth gap="64">
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: projectTitle,
          alternateName: project.technicalName,
          description: localize(project.summary, locale),
          url: projectUrl,
          inLanguage: locale === "ko" ? "ko-KR" : "en",
          dateCreated: project.startedAt,
          creator: { "@type": "Person", name: person.name[locale], alternateName: person.brand },
          keywords: project.technologies.join(", "),
          image: project.images[0] ? `${baseURL}${project.images[0].src}` : undefined,
          sameAs: [project.repository, ...(project.externalLinks ?? []).map((link) => link.href)].filter(
            (link): link is string => Boolean(link),
          ),
        }}
      />
      <ProjectHero project={project} locale={locale} />
      <ProjectHiringSnapshot project={project} locale={locale} />

      <Row
        as="nav"
        className="case-study-index"
        gap="8"
        wrap
        aria-label={locale === "ko" ? "사례 목차" : "Case study sections"}
      >
        <Button href="#project-evidence" size="s" variant="tertiary">
          {locale === "ko" ? "공개 증거" : "Evidence"}
        </Button>
        <Button href="#project-overview" size="s" variant="tertiary">
          {labels.overview}
        </Button>
        {architecture && (
          <Button href="#project-architecture" size="s" variant="tertiary">
            {architecture.copy.navLabel}
          </Button>
        )}
        <Button href="#project-contributions" size="s" variant="tertiary">
          {labels.contributions}
        </Button>
        {project.challenges.length > 0 && (
          <Button href="#project-challenges" size="s" variant="tertiary">
            {labels.challenges}
          </Button>
        )}
        {project.results.length > 0 && (
          <Button href="#project-results" size="s" variant="tertiary">
            {labels.results}
          </Button>
        )}
      </Row>

      <Column
        as="section"
        id="project-evidence"
        className="project-evidence-section case-study-section"
        fillWidth
        gap="24"
      >
        <SectionHeading
          eyebrow={locale === "ko" ? "확인 가능한 작업물" : "Work you can inspect"}
          title={
            project.images.length > 0
              ? locale === "ko"
                ? "설명보다 먼저, 실제 제품 화면"
                : "Real product screens before explanations"
              : locale === "ko"
                ? "보안 범위 안에서 공개한 업무 구조"
                : "The workflow documented within confidentiality limits"
          }
          description={
            project.images.length > 0
              ? locale === "ko"
                ? "각 화면의 캡션에서 어떤 사용자 문제를 해결했는지 확인할 수 있습니다."
                : "Each caption explains the user problem addressed by the screen."
              : locale === "ko"
                ? "실제 운영 데이터와 화면 대신 공개 가능한 구조와 흐름만 익명화했습니다."
                : "Sensitive production data and screens are replaced with an anonymized structural view."
          }
          reveal={false}
        />
        {project.images.length > 1 ? (
          <ProjectScreenshotCarousel
            id={project.slug}
            images={project.images}
            locale={locale}
            projectTitle={projectTitle}
          />
        ) : (
          <ProjectVisual project={project} locale={locale} priority />
        )}
      </Column>

      {project.demoAccess ? (
        <ProjectDemoAccess demoAccess={project.demoAccess} locale={locale} />
      ) : null}

      <Column as="article" className="article-copy" fillWidth gap="48">
        <Column
          as="section"
          id="project-overview"
          className="case-study-content case-study-section"
          fillWidth
          gap="24"
        >
          <SectionHeading
            eyebrow={labels.overview}
            title={localize(copy.overviewTitle, locale)}
            reveal={false}
          />
          <Column gap="16" maxWidth="s">
            {project.description.map((paragraph) => (
              <Text key={paragraph.en} variant="body-default-l" onBackground="neutral-medium">
                {localize(paragraph, locale)}
              </Text>
            ))}
          </Column>
          <Column gap="16">
            <Text variant="label-strong-s" onBackground="neutral-weak">
              {labels.technologies}
            </Text>
            <Row wrap gap="8">
              {project.technologies.map((technology) => (
                <Tag key={technology}>{technology}</Tag>
              ))}
            </Row>
          </Column>
        </Column>
        {architecture && (
          <Column
            as="section"
            id="project-architecture"
            className="case-study-section project-architecture-section"
            fillWidth
            gap="24"
            aria-labelledby="project-architecture-title"
          >
            <SectionHeading
              id="project-architecture-title"
              eyebrow={architecture.copy.eyebrow}
              title={architecture.copy.title}
              description={architecture.copy.description}
              reveal={false}
            />
            <architecture.Diagram locale={locale} />
          </Column>
        )}
        <Column
          as="section"
          id="project-contributions"
          className="case-study-content case-study-section"
          fillWidth
          gap="24"
        >
          <SectionHeading eyebrow={labels.scope} title={labels.contributions} reveal={false} />
          <DetailList items={project.contributions} locale={locale} />
        </Column>
        {project.challenges.length > 0 && (
          <Column
            as="section"
            id="project-challenges"
            className="case-study-content case-study-section"
            fillWidth
            gap="24"
          >
            <SectionHeading eyebrow={labels.constraints} title={labels.challenges} reveal={false} />
            <DetailList items={project.challenges} locale={locale} />
          </Column>
        )}
        {project.results.length > 0 && (
          <Column
            as="section"
            id="project-results"
            className="case-study-content case-study-section"
            fillWidth
            gap="24"
          >
            <SectionHeading eyebrow={labels.evidence} title={labels.results} reveal={false} />
            <Grid className="result-list" columns="2" s={{ columns: 1 }} gap="12">
              {project.results.map((result, index) => (
                <Column
                  key={result.en}
                  className="result-item"
                  background="surface"
                  border="neutral-alpha-medium"
                  radius="l"
                  padding="l"
                  gap="8"
                >
                  <Text variant="label-strong-s" onBackground="brand-weak">
                    0{index + 1}
                  </Text>
                  <Text variant="body-default-l" onBackground="neutral-medium">
                    {localize(result, locale)}
                  </Text>
                </Column>
              ))}
            </Grid>
          </Column>
        )}
      </Column>

      <Column as="section" gap="40">
        <SectionHeading title={labels.related} />
        <Stagger className="related-project-grid" interval={STAGGER_CARD}>
          {related.map((item) => (
            <StaggerItem key={item.slug} className="project-card-reveal" y={12}>
              <ProjectCard project={item} locale={locale} headingLevel="h3" variant="compact" />
            </StaggerItem>
          ))}
        </Stagger>
      </Column>
    </Column>
  );
}
