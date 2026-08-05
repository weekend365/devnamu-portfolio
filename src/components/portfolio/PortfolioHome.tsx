import { Button, Column, Grid, Heading, Media, Row, Tag, Text } from "@once-ui-system/core";
import { baseURL, getContent, localize, pageCopy, person, type Locale } from "@/resources";
import { localePath } from "@/utils/site-metadata";
import { FeaturedJango } from "./FeaturedJango";
import { ProjectCard } from "./ProjectCard";
import { SectionHeading } from "./SectionHeading";
import { StructuredData } from "./StructuredData";

export function PortfolioHome({ locale }: { locale: Locale }) {
  const content = getContent(locale);
  const labels = content.navigation;
  const copy = pageCopy.home;
  const secondaryProjects = content.projects.filter((project) => !project.featured).slice(0, 3);
  return (
    <Column className="page-stack home-page" maxWidth="l" fillWidth gap="32">
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          url: `${baseURL}${localePath(locale)}`,
          inLanguage: locale === "ko" ? "ko-KR" : "en",
          mainEntity: {
            "@type": "Person",
            name: person.name[locale],
            alternateName: person.brand,
            jobTitle: person.role[locale],
            email: `mailto:${person.email}`,
            image: `${baseURL}${person.avatar}`,
            address: {
              "@type": "PostalAddress",
              addressLocality: person.location[locale],
            },
            knowsAbout: content.skillCategories.flatMap((category) => category.skills),
            sameAs: [person.github, person.portfolio],
          },
        }}
      />

      <Row
        as="section"
        className="home-hero"
        fillWidth
        gap="xl"
        vertical="center"
        aria-labelledby="home-heading"
        s={{ direction: "column" }}
      >
        <Column className="hero-copy" flex={8} gap="24">
          <Text className="eyebrow" variant="label-strong-m" onBackground="brand-weak">
            {person.brand} · {person.name[locale]} / {person.role[locale]}
          </Text>
          <Heading
            id="home-heading"
            className="hero-title"
            as="h1"
            variant="display-strong-xl"
            wrap="balance"
          >
            {localize(copy.title, locale)}
          </Heading>
          <Column maxWidth={44} fillWidth>
            <Text variant="heading-default-l" onBackground="neutral-weak" wrap="balance">
              {localize(copy.summary, locale)}
            </Text>
          </Column>
          <Row className="hero-context" gap="8" wrap>
            <Tag size="s">{localize(person.location, locale)}</Tag>
            <Tag size="s">{localize(person.languages, locale)}</Tag>
          </Row>
          <Row className="hero-actions" gap="12" wrap>
            <Button
              href={localePath(locale, "/work")}
              variant="primary"
              prefixIcon="grid"
              suffixIcon="arrowRight"
            >
              {locale === "ko" ? "대표 프로젝트 보기" : "View selected work"}
            </Button>
            <Row className="hero-secondary-actions" gap="12" wrap>
              <Button
                href={person.github}
                variant="secondary"
                prefixIcon="github"
                suffixIcon="arrowUpRightFromSquare"
              >
                {labels.github}
              </Button>
              <Button
                className="hero-email-button"
                href={`mailto:${person.email}`}
                variant="tertiary"
                prefixIcon="email"
                aria-label={labels.contact}
              >
                {labels.contact}
              </Button>
            </Row>
          </Row>
        </Column>
        <Column className="hero-portrait" flex={3} horizontal="center">
          <Media
            className="profile-image"
            src={person.avatar}
            alt={
              locale === "ko"
                ? `${person.brand} ${person.name[locale]} 프로필 사진`
                : `Portrait of ${person.name[locale]}`
            }
            aspectRatio="1 / 1"
            objectFit="cover"
            sizes="(max-width: 768px) 112px, 160px"
            priority
            radius="full"
          />
        </Column>
      </Row>

      <Row className="proof-strip home-proof-strip" fillWidth gap="8" s={{ direction: "row" }}>
        <Column className="proof-item" gap="4">
          <Text variant="display-strong-s" onBackground="brand-weak">
            3+
          </Text>
          <Text variant="label-default-s" onBackground="neutral-weak">
            {localize(copy.proofYears, locale)}
          </Text>
        </Column>
        <Column className="proof-item" gap="4">
          <Text variant="display-strong-s">{content.projects.length}</Text>
          <Text variant="label-default-s" onBackground="neutral-weak">
            {localize(copy.proofProjects, locale)}
          </Text>
        </Column>
        <Column className="proof-item" gap="4">
          <Text variant="display-strong-s">2</Text>
          <Text variant="label-default-s" onBackground="neutral-weak">
            {localize(copy.proofDelivery, locale)}
          </Text>
        </Column>
      </Row>

      <Column
        as="section"
        className="home-featured-section"
        gap="40"
        aria-labelledby="featured-heading"
      >
        <SectionHeading
          id="featured-heading"
          eyebrow={labels.featured}
          title={localize(copy.featuredTitle, locale)}
          description={localize(copy.featuredDescription, locale)}
        />
        <FeaturedJango locale={locale} />
      </Column>

      <Column as="section" className="home-experience" gap="40">
        <Row
          fillWidth
          horizontal="between"
          vertical="end"
          gap="24"
          s={{ direction: "column", vertical: "start" }}
        >
          <SectionHeading
            eyebrow={labels.featuredProjects}
            title={localize(copy.selectedTitle, locale)}
          />
          <Button href={localePath(locale, "/work")} variant="tertiary" suffixIcon="arrowRight">
            {labels.allProjects}
          </Button>
        </Row>
        <Grid
          className="home-project-grid"
          columns="2"
          m={{ columns: 2 }}
          s={{ columns: 1 }}
          gap="24"
          fillWidth
        >
          {secondaryProjects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              locale={locale}
              priority={index === 0}
              headingLevel="h3"
              variant="compact"
            />
          ))}
        </Grid>
      </Column>

      <Column as="section" className="home-career" gap="40">
        <Row
          fillWidth
          horizontal="between"
          vertical="end"
          gap="24"
          s={{ direction: "column", vertical: "start" }}
        >
          <SectionHeading
            eyebrow={labels.experience}
            title={localize(copy.experienceTitle, locale)}
          />
          <Button href={localePath(locale, "/about")} variant="tertiary" suffixIcon="arrowRight">
            {localize(copy.experienceAction, locale)}
          </Button>
        </Row>
        <Column gap="32">
          {content.experiences.map((experience) => (
            <Row key={experience.company.en} className="timeline-item" gap="24" fillWidth>
              <span className="timeline-dot" aria-hidden="true" />
              <Column fillWidth gap="12" paddingBottom="24">
                <Row fillWidth horizontal="between" gap="16" s={{ direction: "column" }}>
                  <Column gap="4">
                    <Heading as="h3" variant="heading-strong-l">
                      {localize(experience.company, locale)}
                    </Heading>
                    <Text variant="body-default-m" onBackground="brand-weak">
                      {localize(experience.role, locale)}
                    </Text>
                  </Column>
                  <Text variant="label-default-s" onBackground="neutral-weak">
                    {localize(experience.period, locale)}
                  </Text>
                </Row>
                <Row gap="8" wrap>
                  {experience.projects.map((project) => (
                    <Tag key={project.en} size="s">
                      {localize(project, locale)}
                    </Tag>
                  ))}
                </Row>
              </Column>
            </Row>
          ))}
        </Column>
      </Column>

      <Column
        as="section"
        id="contact"
        className="contact-section"
        background="surface"
        border="neutral-alpha-medium"
        radius="xl"
        paddingX="xl"
        paddingY="xl"
        gap="24"
        horizontal="center"
        align="center"
      >
        <Text className="eyebrow" variant="label-strong-s" onBackground="brand-weak">
          {labels.contact}
        </Text>
        <Heading as="h2" variant="display-strong-s" wrap="balance">
          {localize(copy.contactTitle, locale)}
        </Heading>
        <Text variant="body-default-l" onBackground="neutral-weak" wrap="balance">
          {localize(copy.contactBody, locale)}
        </Text>
        <Row gap="12" wrap horizontal="center">
          <Button href={`mailto:${person.email}`} variant="primary" prefixIcon="email">
            {person.email}
          </Button>
          <Button href={person.github} variant="secondary" prefixIcon="github">
            GitHub
          </Button>
        </Row>
      </Column>
    </Column>
  );
}
