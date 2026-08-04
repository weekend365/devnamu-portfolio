import { Button, Column, Grid, Heading, Row, Tag, Text } from "@once-ui-system/core";
import { baseURL, getProjects, localize, type Locale, type Project, ui } from "@/resources";
import { localePath } from "@/utils/site-metadata";
import { ProjectCard } from "./ProjectCard";
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

export function PortfolioProject({ project, locale }: { project: Project; locale: Locale }) {
  const labels = ui[locale];
  const related = getProjects(locale).filter((item) => item.slug !== project.slug).slice(0, 2);
  const projectUrl = `${baseURL}${localePath(locale, `/work/${project.slug}`)}`;
  const projectTitle = localize(project.title, locale);

  return (
    <Column className="page-stack" maxWidth="m" fillWidth gap="104">
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
          creator: { "@type": "Person", name: locale === "ko" ? "남우현" : "Nam Woo-hyun" },
          keywords: project.technologies.join(", "),
          image: project.images[0] ? `${baseURL}${project.images[0].src}` : undefined,
          sameAs: project.repository ?? project.externalLink,
        }}
      />
      <Column as="header" gap="32" horizontal="center" align="center">
        <Button href={localePath(locale, "/work")} variant="tertiary" prefixIcon="chevronLeft" size="s">
          {labels.backToWork}
        </Button>
        <Row gap="8" wrap horizontal="center">
          {project.featured && <Tag variant="success">{labels.featured}</Tag>}
          <Tag>{localize(project.status, locale)}</Tag>
        </Row>
        <Heading as="h1" className="hero-name" variant="display-strong-l" wrap="balance">
          {projectTitle}
        </Heading>
        {project.technicalName && (
          <Text variant="label-default-m" onBackground="neutral-weak">
            {locale === "ko" ? "저장소 이름" : "Repository namespace"} · {project.technicalName}
          </Text>
        )}
        <Column maxWidth="s">
          <Text variant="heading-default-l" onBackground="neutral-weak" wrap="balance">
            {localize(project.summary, locale)}
          </Text>
        </Column>
        <Row gap="12" wrap horizontal="center">
          {project.repository && <Button href={project.repository} prefixIcon="github" suffixIcon="arrowUpRightFromSquare">{labels.viewGithub}</Button>}
          {project.externalLink && <Button href={project.externalLink} variant="secondary" suffixIcon="arrowUpRightFromSquare">{labels.viewProject}</Button>}
        </Row>
      </Column>

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

      <Grid columns="3" s={{ columns: 1 }} gap="16">
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

      <Column as="article" className="article-copy" gap="80">
        <Column gap="24">
          {project.description.map((paragraph) => <Text key={paragraph.en} variant="body-default-l" onBackground="neutral-medium">{localize(paragraph, locale)}</Text>)}
        </Column>
        <Column as="section" gap="24">
          <SectionHeading title={labels.technologies} />
          <Row wrap gap="8">{project.technologies.map((technology) => <Tag key={technology}>{technology}</Tag>)}</Row>
        </Column>
        <Column as="section" gap="24">
          <SectionHeading title={labels.contributions} />
          <DetailList items={project.contributions} locale={locale} />
        </Column>
        {project.challenges.length > 0 && (
          <Column as="section" gap="24">
            <SectionHeading title={labels.challenges} />
            <DetailList items={project.challenges} locale={locale} />
          </Column>
        )}
        {project.results.length > 0 && (
          <Column as="section" gap="24">
            <SectionHeading title={labels.results} />
            <DetailList items={project.results} locale={locale} />
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
