import { Button, Column, Heading, Row, Text } from "@once-ui-system/core";
import { Magnetic } from "@/components/motion/Magnetic";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { STAGGER_CARD } from "@/components/motion/tokens";
import { baseURL, getContent, localize, pageCopy, person, type Locale } from "@/resources";
import { localePath } from "@/utils/site-metadata";
import { FeaturedJango } from "./FeaturedJango";
import { HomeCredibility } from "./HomeCredibility";
import { HomeHero } from "./HomeHero";
import { HomeTimeline } from "./HomeTimeline";
import { ProjectCard } from "./ProjectCard";
import { SectionHeading } from "./SectionHeading";
import { StructuredData } from "./StructuredData";

export function PortfolioHome({ locale }: { locale: Locale }) {
  const content = getContent(locale);
  const labels = content.navigation;
  const copy = pageCopy.home;
  const homeProjectSlugs = new Set(["kcsc", "bims"]);
  const secondaryProjects = content.projects.filter((project) => homeProjectSlugs.has(project.slug));
  const capabilityGroups =
    locale === "ko"
      ? [
          {
            index: "01",
            title: "복잡한 업무를 명확한 UI로",
            body: "트리·테이블·다중 패널·지도 화면을 사용자의 작업 순서에 맞게 구조화합니다.",
            skills: ["React", "Next.js", "TypeScript", "TanStack Query", "Zustand"],
          },
          {
            index: "02",
            title: "화면 뒤 데이터까지 연결",
            body: "API와 데이터 모델을 이해하고 프론트엔드부터 백엔드·관리자까지 하나의 흐름으로 만듭니다.",
            skills: ["NestJS", "Spring Boot", "PostgreSQL", "REST API"],
          },
          {
            index: "03",
            title: "검증하고 운영까지 전달",
            body: "테스트·배포·모니터링을 제품 개발의 일부로 다뤄 실제 환경에서 동작하는 결과를 전달합니다.",
            skills: ["Jest", "RTL", "Docker", "Jenkins", "Sentry"],
          },
        ]
      : [
          {
            index: "01",
            title: "Clear UI for complex work",
            body: "I structure trees, tables, multi-panel layouts, and maps around the user's working sequence.",
            skills: ["React", "Next.js", "TypeScript", "TanStack Query", "Zustand"],
          },
          {
            index: "02",
            title: "Connected through the data layer",
            body: "I understand APIs and data models, connecting frontend, backend, and admin tools into one flow.",
            skills: ["NestJS", "Spring Boot", "PostgreSQL", "REST API"],
          },
          {
            index: "03",
            title: "Verified and delivered",
            body: "I treat testing, deployment, and monitoring as product work and deliver for real environments.",
            skills: ["Jest", "RTL", "Docker", "Jenkins", "Sentry"],
          },
        ];

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

      <HomeCredibility locale={locale} />

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
        <Stagger className="home-project-grid" interval={STAGGER_CARD}>
          {secondaryProjects.map((project, index) => (
            <StaggerItem key={project.slug} className="project-card-reveal" y={12}>
              <ProjectCard
                project={project}
                locale={locale}
                priority={index === 0}
                headingLevel="h3"
                variant="compact"
              />
            </StaggerItem>
          ))}
        </Stagger>
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

      <Column as="section" className="home-capabilities" gap="32">
        <Row
          fillWidth
          horizontal="between"
          vertical="end"
          gap="24"
          s={{ direction: "column", vertical: "start" }}
        >
          <SectionHeading
            eyebrow={locale === "ko" ? "핵심 역량" : "Core capabilities"}
            title={
              locale === "ko"
                ? "채용 후 바로 기여할 수 있는 세 가지 방식"
                : "Three ways I can contribute from day one"
            }
          />
          <Button href={localePath(locale, "/about")} variant="tertiary" suffixIcon="arrowRight">
            {locale === "ko" ? "전체 기술과 경력 보기" : "View all skills and experience"}
          </Button>
        </Row>
        <Stagger className="home-capability-grid" interval={STAGGER_CARD}>
          {capabilityGroups.map((capability) => (
            <StaggerItem key={capability.index} className="card-reveal" y={12}>
              <Column
                className="home-capability-card"
                background="surface"
                border="neutral-alpha-medium"
                radius="l"
                padding="l"
                gap="16"
              >
                <Text className="home-capability-index" variant="label-strong-s">
                  {capability.index}
                </Text>
                <Column gap="8">
                  <Heading as="h3" variant="heading-strong-l" wrap="balance">
                    {capability.title}
                  </Heading>
                  <Text variant="body-default-m" onBackground="neutral-weak" wrap="balance">
                    {capability.body}
                  </Text>
                </Column>
                <Row className="home-capability-skills" gap="8" wrap>
                  {capability.skills.map((skill) => (
                    <Text key={skill} variant="label-default-xs" onBackground="neutral-medium">
                      {skill}
                    </Text>
                  ))}
                </Row>
              </Column>
            </StaggerItem>
          ))}
        </Stagger>
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
