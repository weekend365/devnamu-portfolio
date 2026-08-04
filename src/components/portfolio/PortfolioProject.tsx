import { Button, Column, Grid, Heading, Row, Tag, Text } from "@once-ui-system/core";
import { baseURL, getProjects, localize, person, type Locale, type Project, ui } from "@/resources";
import { localePath } from "@/utils/site-metadata";
import { getProjectStatusVariant, ProjectCard } from "./ProjectCard";
import { ProjectDemoAccess } from "./ProjectDemoAccess";
import { ProjectScreenshotCarousel } from "./ProjectScreenshotCarousel";
import { ProjectVisual } from "./ProjectVisual";
import { SectionHeading } from "./SectionHeading";
import { StructuredData } from "./StructuredData";

function DetailList({ items, locale }: { items: Project["contributions"]; locale: Locale }) {
  return (
    <Column as="ul" gap="16" paddingLeft="24">
      {items.map((item) => (
        <Text as="li" key={item.en} variant="body-default-m" onBackground="neutral-medium">
          {localize(item, locale)}
        </Text>
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
    <Column className="project-story-card" background="surface" border="neutral-alpha-medium" radius="l" padding="l" gap="8">
      <Text variant="label-strong-s" onBackground="brand-weak">{label}</Text>
      {value && <Text variant="heading-strong-m" wrap="balance">{value}</Text>}
      {children}
    </Column>
  );
}

export function PortfolioProject({ project, locale }: { project: Project; locale: Locale }) {
  const labels = ui[locale];
  const related = getProjects(locale).filter((item) => item.slug !== project.slug).slice(0, 2);
  const projectUrl = `${baseURL}${localePath(locale, `/work/${project.slug}`)}`;
  const projectTitle = localize(project.title, locale);
  const currentEvidence =
    project.results[0] &&
    localize(project.results[0], locale);
  const evidenceFallback =
    locale === "ko"
      ? "출시·납품 상태와 다음 검증 단계를 투명하게 공개합니다."
      : "The current delivery state and next validation step are shown transparently.";

  return (
    <Column className="page-stack project-page" maxWidth="m" fillWidth gap="104">
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
          sameAs: project.repository ?? project.externalLink,
        }}
      />
      <Column as="header" className="project-hero" gap="24">
        <Button href={localePath(locale, "/work")} variant="tertiary" prefixIcon="chevronLeft" size="s">
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
            {locale === "ko" ? "저장소 이름" : "Repository namespace"} · {project.technicalName}
          </Text>
        )}
        <Column maxWidth="s" gap="12">
          <Text variant="heading-default-l" onBackground="neutral-weak" wrap="balance">
            {localize(project.summary, locale)}
          </Text>
          <Text variant="body-default-s" onBackground="neutral-weak">
            {localize(project.company, locale)} · {localize(project.period, locale)}
          </Text>
        </Column>
        <Row gap="12" wrap>
          {project.repository && <Button href={project.repository} prefixIcon="github" suffixIcon="arrowUpRightFromSquare">{labels.viewGithub}</Button>}
          {project.externalLink && !project.demoAccess && (
            <Button
              href={project.externalLink}
              variant="secondary"
              suffixIcon="arrowUpRightFromSquare"
            >
              {labels.viewProject}
            </Button>
          )}
        </Row>
      </Column>

      <Grid className="project-story-grid" columns="3" s={{ columns: 1 }} gap="12">
        <StorySignal label={labels.problem} value={localize(project.summary, locale)} />
        <StorySignal label={labels.constraints}>
          <Text variant="body-default-m" onBackground="neutral-medium">
            {project.challenges[0]
              ? localize(project.challenges[0], locale)
              : locale === "ko"
                ? "핵심 흐름을 유지하면서 제품 범위를 단계적으로 확장했습니다."
                : "Expanded the product in stages while protecting the core workflow."}
          </Text>
        </StorySignal>
        <StorySignal label={labels.evidence}>
          <Text variant="body-default-m" onBackground="neutral-medium">
            {currentEvidence ?? evidenceFallback}
          </Text>
        </StorySignal>
      </Grid>

      {project.demoAccess ? (
        <ProjectDemoAccess demoAccess={project.demoAccess} locale={locale} />
      ) : project.images.length > 1 ? (
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
        <Column background="surface" border="neutral-alpha-medium" radius="l" padding="l" gap="8">
          <Text variant="label-strong-s" onBackground="neutral-weak">{labels.role}</Text>
          <Text variant="heading-strong-m">{localize(project.role, locale)}</Text>
        </Column>
        <Column background="surface" border="neutral-alpha-medium" radius="l" padding="l" gap="8">
          <Text variant="label-strong-s" onBackground="neutral-weak">{locale === "ko" ? "기간" : "Period"}</Text>
          <Text variant="heading-strong-m">{localize(project.period, locale)}</Text>
        </Column>
        <Column background="surface" border="neutral-alpha-medium" radius="l" padding="l" gap="8">
          <Text variant="label-strong-s" onBackground="neutral-weak">{labels.status}</Text>
          <Text variant="heading-strong-m">{localize(project.status, locale)}</Text>
        </Column>
      </Grid>

      <Row
        as="nav"
        className="case-study-index"
        gap="8"
        wrap
        aria-label={locale === "ko" ? "사례 목차" : "Case study sections"}
      >
        <Button href="#project-overview" size="s" variant="tertiary">{labels.overview}</Button>
        <Button href="#project-contributions" size="s" variant="tertiary">{labels.contributions}</Button>
        {project.challenges.length > 0 && (
          <Button href="#project-challenges" size="s" variant="tertiary">{labels.challenges}</Button>
        )}
        {project.results.length > 0 && (
          <Button href="#project-results" size="s" variant="tertiary">{labels.results}</Button>
        )}
      </Row>

      <Column as="article" className="article-copy case-study-content" gap="64">
        <Column as="section" id="project-overview" className="case-study-section" gap="24">
          <SectionHeading eyebrow={labels.overview} title={locale === "ko" ? "무엇을 만들었는가" : "What I built"} />
          <Column gap="16" maxWidth="s">
            {project.description.map((paragraph) => (
              <Text key={paragraph.en} variant="body-default-l" onBackground="neutral-medium">
                {localize(paragraph, locale)}
              </Text>
            ))}
          </Column>
          <Column gap="16">
            <Text variant="label-strong-s" onBackground="neutral-weak">{labels.technologies}</Text>
            <Row wrap gap="8">{project.technologies.map((technology) => <Tag key={technology}>{technology}</Tag>)}</Row>
          </Column>
        </Column>
        <Column as="section" id="project-contributions" className="case-study-section" gap="24">
          <SectionHeading eyebrow={labels.scope} title={labels.contributions} />
          <DetailList items={project.contributions} locale={locale} />
        </Column>
        {project.challenges.length > 0 && (
          <Column as="section" id="project-challenges" className="case-study-section" gap="24">
            <SectionHeading eyebrow={labels.constraints} title={labels.challenges} />
            <DetailList items={project.challenges} locale={locale} />
          </Column>
        )}
        {project.results.length > 0 && (
          <Column as="section" id="project-results" className="case-study-section" gap="24">
            <SectionHeading eyebrow={labels.evidence} title={labels.results} />
            <Grid className="result-list" columns="2" s={{ columns: 1 }} gap="12">
              {project.results.map((result, index) => (
                <Column key={result.en} className="result-item" background="surface" border="neutral-alpha-medium" radius="l" padding="l" gap="8">
                  <Text variant="label-strong-s" onBackground="brand-weak">0{index + 1}</Text>
                  <Text variant="body-default-l" onBackground="neutral-medium">{localize(result, locale)}</Text>
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
            <ProjectCard key={item.slug} project={item} locale={locale} headingLevel="h3" />
          ))}
        </Grid>
      </Column>
    </Column>
  );
}
