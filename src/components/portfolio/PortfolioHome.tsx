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
  const homeSkillCategories = content.skillCategories.filter((_, index) =>
    [0, 2, 3].includes(index),
  );
  const resumeHref =
    locale === "ko" ? "/resume/nam-woo-hyun-ko.pdf" : "/resume/nam-woo-hyun-en.pdf";
  const proofPoints =
    locale === "ko"
      ? [
          { value: "3년+", label: "실무 제품 개발" },
          { value: "공공 · 교통 · 구독", label: "운영·납품 도메인" },
          { value: "Mobile · API · Admin", label: "엔드투엔드 제품 범위" },
        ]
      : [
          { value: "3+ years", label: "Production development" },
          { value: "Public · Transit · Subscription", label: "Operational domains" },
          { value: "Mobile · API · Admin", label: "End-to-end product scope" },
        ];

  return (
    <Column className="page-stack" maxWidth="l" fillWidth gap="104">
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          url: `${baseURL}${localePath(locale)}`,
          inLanguage: locale === "ko" ? "ko-KR" : "en",
          mainEntity: {
            "@type": "Person",
            name: person.name[locale],
            jobTitle: person.role[locale],
            email: `mailto:${person.email}`,
            image: `${baseURL}${person.avatar}`,
            address: { "@type": "PostalAddress", addressLocality: person.location[locale] },
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
            DEVNAMU · {person.name[locale]} / {person.role[locale]}
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
                ? "React와 Next.js로 공공·교통·구독 서비스를 개발해 왔습니다. 장고야 부탁해에서는 모바일, API, 관리자와 배포까지 하나의 제품으로 연결하고 있습니다."
                : "I build public, transportation, and subscription services with React and Next.js. For Jango, I connect mobile, API, admin, and deployment into one product."}
            </Text>
          </Column>
          <Row gap="12" wrap>
            <Button
              href={localePath(locale, "/work")}
              variant="primary"
              prefixIcon="grid"
              suffixIcon="arrowRight"
            >
              {locale === "ko" ? "대표 프로젝트 보기" : "View selected work"}
            </Button>
            <Button href={resumeHref} download variant="secondary" prefixIcon="document">
              {labels.resume}
            </Button>
            <Button href={`mailto:${person.email}`} variant="tertiary" prefixIcon="email">
              {labels.contact}
            </Button>
          </Row>
        </Column>
        <Column className="hero-portrait" flex={3} horizontal="center">
          <Media
            className="profile-image"
            src={person.avatar}
            alt={locale === "ko" ? "남우현 프로필 사진" : "Portrait of Nam Woo-hyun"}
            aspectRatio="1 / 1"
            objectFit="cover"
            sizes="120px"
            priority
            radius="full"
            style={{ width: "7.5rem", height: "7.5rem" }}
          />
        </Column>
      </Row>

      <Grid
        as="section"
        className="home-proof"
        columns="3"
        s={{ columns: 1 }}
        gap="-1"
        radius="l"
        overflow="hidden"
        aria-label={locale === "ko" ? "핵심 경력 요약" : "Career proof points"}
      >
        {proofPoints.map((point) => (
          <Column
            key={point.label}
            className="home-proof-item"
            background="surface"
            border="neutral-alpha-medium"
            padding="l"
            gap="4"
          >
            <Text variant="heading-strong-m" onBackground="brand-strong">
              {point.value}
            </Text>
            <Text variant="label-default-s" onBackground="neutral-weak">
              {point.label}
            </Text>
          </Column>
        ))}
      </Grid>

      <Column as="section" gap="40" aria-labelledby="featured-heading">
        <SectionHeading
          id="featured-heading"
          eyebrow={labels.featured}
          title={
            locale === "ko"
              ? "장고야 부탁해 — 혼자 설계하고 운영하는 모바일 제품"
              : "Jango — a mobile product designed and operated end to end"
          }
          description={
            locale === "ko"
              ? "냉장고 재고 관리에서 시작해 AI 추천, 공유 공간과 운영 도구까지 확장하고 있습니다."
              : "It began with refrigerator inventory and now spans AI recommendations, shared spaces, and operations tooling."
          }
        />
        <FeaturedJango locale={locale} />
      </Column>

      <Column as="section" gap="40">
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
        <Grid columns="3" m={{ columns: 2 }} s={{ columns: 1 }} gap="24" fillWidth>
          {secondaryProjects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              locale={locale}
              priority={index === 0}
              headingLevel="h3"
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

      <Column as="section" gap="40">
        <Row
          fillWidth
          horizontal="between"
          vertical="end"
          gap="24"
          s={{ direction: "column", vertical: "start" }}
        >
          <SectionHeading
            eyebrow={labels.techStack}
            title={
              locale === "ko" ? "제품을 연결하는 핵심 기술" : "Core tools that connect the product"
            }
            description={
              locale === "ko"
                ? "홈에서는 프론트엔드·백엔드·모바일의 핵심만 요약했습니다."
                : "A concise view of the frontend, backend, and mobile stack."
            }
          />
          <Button href={localePath(locale, "/about")} variant="tertiary" suffixIcon="arrowRight">
            {locale === "ko" ? "전체 기술과 경력" : "Full profile"}
          </Button>
        </Row>
        <Grid columns="3" m={{ columns: 2 }} s={{ columns: 1 }} gap="16">
          {homeSkillCategories.map((category) => (
            <Column
              key={category.title.en}
              className="skill-card"
              background="surface"
              border="neutral-alpha-medium"
              radius="l"
              padding="l"
              gap="16"
            >
              <Heading as="h3" variant="heading-strong-m">
                {localize(category.title, locale)}
              </Heading>
              <Row wrap gap="8">
                {category.skills.map((skill) => (
                  <Tag key={skill} size="s">
                    {skill}
                  </Tag>
                ))}
              </Row>
            </Column>
          ))}
        </Grid>
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
