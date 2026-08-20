import { Button, Column, Grid, Heading, Row, Text } from "@once-ui-system/core";
import { Magnetic } from "@/components/motion/Magnetic";
import { Reveal } from "@/components/motion/Reveal";
import { STAGGER_CARD } from "@/components/motion/tokens";
import { baseURL, getContent, localize, pageCopy, person, type Locale } from "@/resources";
import { localePath } from "@/utils/site-metadata";
import { FeaturedJango } from "./FeaturedJango";
import { HomeHero } from "./HomeHero";
import { HomeProof } from "./HomeProof";
import { HomeTimeline } from "./HomeTimeline";
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

      <HomeHero locale={locale} />

      <HomeProof locale={locale} projectCount={content.projects.length} />

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
                priority={index === 0}
                headingLevel="h3"
                variant="compact"
              />
            </Reveal>
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
        <HomeTimeline locale={locale} experiences={content.experiences} />
      </Column>

      <Reveal inView y={0} scale={0.98} amount={0.3} className="contact-reveal">
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
            <Magnetic>
              <Button href={`mailto:${person.email}`} variant="primary" prefixIcon="email">
                {person.email}
              </Button>
            </Magnetic>
            <Button href={person.github} variant="secondary" prefixIcon="github">
              GitHub
            </Button>
          </Row>
        </Column>
      </Reveal>
    </Column>
  );
}
