import { Button, Column, Grid, Heading, Media, Row, Tag, Text } from "@once-ui-system/core";
import { baseURL, getContent, localize, person, type Locale } from "@/resources";
import { localePath } from "@/utils/site-metadata";
import { FeaturedJango } from "./FeaturedJango";
import { ProjectCard } from "./ProjectCard";
import { SectionHeading } from "./SectionHeading";
import { StructuredData } from "./StructuredData";

export function PortfolioHome({ locale }: { locale: Locale }) {
  const content = getContent(locale);
  const labels = content.navigation;
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
        s={{ direction: "column-reverse" }}
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
            {locale === "ko"
              ? "화면부터 운영까지, 제품의 흐름을 만듭니다."
              : "I build the product, not just the interface."}
          </Heading>
          <Column maxWidth={44} fillWidth>
            <Text variant="heading-default-l" onBackground="neutral-weak" wrap="balance">
              {locale === "ko"
                ? "React와 Next.js로 공공·교통·구독 서비스를 개발해 왔습니다. 복잡한 도메인을 사용 가능한 화면으로 구조화하고 API·관리자·배포까지 연결합니다."
                : "I build public, transportation, and subscription services with React and Next.js, turning complex domains into usable interfaces and connecting them to APIs, admin tools, and delivery."}
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
            style={{ width: "10rem", height: "10rem" }}
          />
        </Column>
      </Row>

      <Row className="proof-strip home-proof-strip" fillWidth gap="8" s={{ direction: "row" }}>
        <Column className="proof-item" gap="4">
          <Text variant="display-strong-s" onBackground="brand-weak">
            3+
          </Text>
          <Text variant="label-default-s" onBackground="neutral-weak">
            {locale === "ko" ? "제품을 만든 경력" : "years building products"}
          </Text>
        </Column>
        <Column className="proof-item" gap="4">
          <Text variant="display-strong-s">{content.projects.length}</Text>
          <Text variant="label-default-s" onBackground="neutral-weak">
            {locale === "ko" ? "프로젝트 사례" : "project case studies"}
          </Text>
        </Column>
        <Column className="proof-item" gap="4">
          <Text variant="display-strong-s">2</Text>
          <Text variant="label-default-s" onBackground="neutral-weak">
            {locale === "ko" ? "운영·납품 사례" : "live or delivered cases"}
          </Text>
        </Column>
      </Row>

      <Column as="section" gap="40" aria-labelledby="featured-heading">
        <SectionHeading
          id="featured-heading"
          eyebrow={labels.featured}
          title={
            locale === "ko"
              ? "장고야 부탁해 — 운영까지 연결한 모바일 제품"
              : "Jango — a mobile product connected to operations"
          }
          description={
            locale === "ko"
              ? "유통기한 관리 문제를 모바일, API, 관리자와 운영 도구가 연결된 제품으로 확장하고 있습니다."
              : "A response to expiry tracking that now connects mobile, APIs, admin tooling, and operations in one product."
          }
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
            title={
              locale === "ko"
                ? "업무의 복잡도를 화면으로 정리한 작업"
                : "Turning operational complexity into usable software"
            }
          />
          <Button href={localePath(locale, "/work")} variant="tertiary" suffixIcon="arrowRight">
            {labels.allProjects}
          </Button>
        </Row>
        <Grid columns="2" m={{ columns: 2 }} s={{ columns: 1 }} gap="24" fillWidth>
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

      <Column as="section" gap="40">
        <SectionHeading
          eyebrow={labels.experience}
          title={
            locale === "ko"
              ? "공공 시스템에서 개인 제품까지"
              : "From public systems to an independent product"
          }
        />
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
        paddingY="xl"
        gap="24"
        horizontal="center"
        align="center"
      >
        <Text className="eyebrow" variant="label-strong-s" onBackground="brand-weak">
          {labels.contact}
        </Text>
        <Heading as="h2" variant="display-strong-s" wrap="balance">
          {locale === "ko"
            ? "제품과 팀에 대한 이야기를 나누고 싶습니다"
            : "Let’s talk about the product and the team"}
        </Heading>
        <Text variant="body-default-l" onBackground="neutral-weak" wrap="balance">
          {locale === "ko"
            ? "프로젝트나 채용에 관해 공유할 내용이 있다면 이메일로 연락해 주세요."
            : "If you have a project or role worth discussing, send me an email."}
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
