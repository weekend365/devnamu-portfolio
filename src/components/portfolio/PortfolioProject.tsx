import { Button, Column, Grid, Heading, Row, Tag, Text } from "@once-ui-system/core";
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
import { getProjectStatusVariant, ProjectCard } from "./ProjectCard";
import { ProjectDemoAccess } from "./ProjectDemoAccess";
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

function StorySignal({
  label,
  value,
  children,
}: {
  label: string;
  value?: string;
  children?: React.ReactNode;
}) {
  return (
    <Column
      className="project-story-card"
      background="surface"
      border="neutral-alpha-medium"
      radius="l"
      padding="l"
      gap="8"
    >
      <Text variant="label-strong-s" onBackground="brand-weak">
        {label}
      </Text>
      {value && (
        <Text variant="heading-strong-m" wrap="balance">
          {value}
        </Text>
      )}
      {children}
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
  const hasArchitecture = project.slug === "bims";
  const architectureCopy = bimsArchitectureCopy[locale];

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
          sameAs: project.repository ?? project.externalLink?.href,
        }}
      />
      <Column as="header" className="project-hero" gap="24">
        <Button
          href={localePath(locale, "/work")}
          variant="tertiary"
          prefixIcon="chevronLeft"
          size="s"
        >
          {labels.backToWork}
        </Button>
        <Row gap="8" wrap>
          {project.featured && <Tag variant="brand">{labels.featured}</Tag>}
          <Tag variant={getProjectStatusVariant(localize(project.status, locale))}>
            {localize(project.status, locale)}
          </Tag>
        </Row>
        <Heading as="h1" className="hero-name" variant="display-strong-l" wrap="balance">
          {projectTitle}
        </Heading>
        {project.technicalName && (
          <Text variant="label-default-m" onBackground="neutral-weak">
            {localize(copy.namespace, locale)} · {project.technicalName}
          </Text>
        )}
        <Column className="project-summary" maxWidth="s" gap="12">
          <Text variant="heading-default-l" onBackground="neutral-weak" wrap="balance">
            {localize(project.summary, locale)}
          </Text>
          <Text variant="body-default-s" onBackground="neutral-weak">
            {localize(project.company, locale)} · {localize(project.period, locale)}
          </Text>
        </Column>
        <Row gap="12" wrap>
          {project.repository && (
            <Button
              href={project.repository}
              prefixIcon="github"
              suffixIcon="arrowUpRightFromSquare"
            >
              {labels.viewGithub}
            </Button>
          )}
          {project.externalLink && !project.demoAccess && (
            <Button
              href={project.externalLink.href}
              variant="secondary"
              suffixIcon="arrowUpRightFromSquare"
            >
              {localize(project.externalLink.label, locale)}
            </Button>
          )}
        </Row>
      </Column>

      <Grid
        className="project-story-grid"
        columns="3"
        s={{ columns: 1 }}
        gap="12"
        aria-label={locale === "ko" ? "프로젝트 요약" : "Project summary"}
      >
        <StorySignal label={labels.problem} value={localize(project.problem, locale)} />
        <StorySignal label={labels.constraints}>
          <Text variant="body-default-m" onBackground="neutral-medium">
            {project.challenges[0]
              ? localize(project.challenges[0], locale)
              : localize(copy.fallbackConstraint, locale)}
          </Text>
        </StorySignal>
        <StorySignal label={labels.evidence}>
          <Text variant="body-default-m" onBackground="neutral-medium">
            {localize(project.outcome, locale)}
          </Text>
        </StorySignal>
      </Grid>

      {project.demoAccess && <ProjectDemoAccess demoAccess={project.demoAccess} locale={locale} />}
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

      <Grid className="project-meta-grid" columns="3" s={{ columns: 1 }} gap="12">
        <Column className="project-meta-card" background="surface" border="neutral-alpha-medium" radius="l" padding="l" gap="8">
          <Text variant="label-strong-s" onBackground="neutral-weak">
            {labels.role}
          </Text>
          <Text variant="heading-strong-m">{localize(project.role, locale)}</Text>
        </Column>
        <Column className="project-meta-card" background="surface" border="neutral-alpha-medium" radius="l" padding="l" gap="8">
          <Text variant="label-strong-s" onBackground="neutral-weak">
            {localize(copy.period, locale)}
          </Text>
          <Text variant="heading-strong-m">{localize(project.period, locale)}</Text>
        </Column>
        <Column className="project-meta-card" background="surface" border="neutral-alpha-medium" radius="l" padding="l" gap="8">
          <Text variant="label-strong-s" onBackground="neutral-weak">
            {labels.status}
          </Text>
          <Text variant="heading-strong-m">{localize(project.status, locale)}</Text>
        </Column>
      </Grid>

      {project.metrics && project.metrics.length > 0 && (
        <Grid
          className="project-metrics"
          columns="3"
          s={{ columns: 1 }}
          gap="12"
          aria-label={locale === "ko" ? "프로젝트 핵심 지표" : "Project metrics"}
        >
          {project.metrics.map((metric) => (
            <Column
              key={metric.value + metric.label.en}
              className="project-metric"
              background="brand-alpha-weak"
              border="brand-alpha-medium"
              radius="l"
              padding="l"
              gap="4"
            >
              <Text variant="display-strong-s" onBackground="brand-weak">
                {metric.value}
              </Text>
              <Text variant="label-strong-s">{localize(metric.label, locale)}</Text>
              {metric.note && (
                <Text variant="body-default-s" onBackground="neutral-weak">
                  {localize(metric.note, locale)}
                </Text>
              )}
            </Column>
          ))}
        </Grid>
      )}

      <Row
        as="nav"
        className="case-study-index"
        gap="8"
        wrap
        aria-label={locale === "ko" ? "사례 목차" : "Case study sections"}
      >
        <Button href="#project-overview" size="s" variant="tertiary">
          {labels.overview}
        </Button>
        {hasArchitecture && (
          <Button href="#project-architecture" size="s" variant="tertiary">
            {architectureCopy.navLabel}
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
        {hasArchitecture && (
          <Column
            as="section"
            id="project-architecture"
            className="case-study-section bims-architecture-section"
            fillWidth
            gap="24"
            aria-labelledby="project-architecture-title"
          >
            <SectionHeading
              id="project-architecture-title"
              eyebrow={architectureCopy.eyebrow}
              title={architectureCopy.title}
              description={architectureCopy.description}
            />
            <BimsArchitectureDiagram locale={locale} />
          </Column>
        )}
        <Column
          as="section"
          id="project-contributions"
          className="case-study-content case-study-section"
          fillWidth
          gap="24"
        >
          <SectionHeading eyebrow={labels.scope} title={labels.contributions} />
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
            <SectionHeading eyebrow={labels.constraints} title={labels.challenges} />
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
            <SectionHeading eyebrow={labels.evidence} title={labels.results} />
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
        <Grid columns="2" s={{ columns: 1 }} gap="24">
          {related.map((item) => (
            <ProjectCard
              key={item.slug}
              project={item}
              locale={locale}
              headingLevel="h3"
              variant="compact"
            />
          ))}
        </Grid>
      </Column>
    </Column>
  );
}
