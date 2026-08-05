import {
  Button,
  Column,
  Grid,
  Heading,
  Media,
  Row,
  Tag,
  Text,
} from "@once-ui-system/core";
import { getContent, localize, person, type Locale } from "@/resources";
import { SectionHeading } from "./SectionHeading";

export function PortfolioAbout({ locale }: { locale: Locale }) {
  const content = getContent(locale);
  const labels = content.navigation;

  return (
    <Column className="page-stack about-page" maxWidth="m" fillWidth gap="80">
      <Row
        as="header"
        fillWidth
        gap="xl"
        vertical="center"
        s={{ direction: "column-reverse", vertical: "start" }}
      >
        <Column flex={8} gap="20">
          <Text
            className="eyebrow"
            variant="label-strong-m"
            onBackground="brand-weak"
          >
            {person.brand} · {labels.about}
          </Text>
          <Heading
            as="h1"
            className="hero-title"
            variant="display-strong-l"
            wrap="balance"
          >
            {locale === "ko"
              ? "문제를 이해하고, 운영 가능한 제품으로 바꿉니다."
              : "I turn understood problems into operable products."}
          </Heading>
          <Text variant="heading-default-l" onBackground="neutral-weak">
            {person.role[locale]}
          </Text>
          <Row gap="12" wrap>
            <Button
              href={`mailto:${person.email}`}
              variant="primary"
              prefixIcon="email"
            >
              {labels.contact}
            </Button>
          </Row>
        </Column>
        <Column className="about-hero-meta" gap="12" horizontal="center">
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
            sizes="(max-width: 768px) 112px, 176px"
            priority
            radius="full"
            style={{ width: "11rem", height: "11rem" }}
          />
        </Column>
      </Row>

      <Row
        className="proof-strip about-proof-strip"
        fillWidth
        gap="8"
        s={{ direction: "column" }}
      >
        <Column className="proof-item" gap="4">
          <Text variant="display-strong-s" onBackground="brand-weak">
            3+
          </Text>
          <Text variant="label-default-s" onBackground="neutral-weak">
            {locale === "ko"
              ? "제품 개발 경력"
              : "years in product development"}
          </Text>
        </Column>
        <Column className="proof-item" gap="4">
          <Text variant="display-strong-s">4</Text>
          <Text variant="label-default-s" onBackground="neutral-weak">
            {locale === "ko"
              ? "도메인과 제품 맥락"
              : "domains and product contexts"}
          </Text>
        </Column>
        <Column className="proof-item" gap="4">
          <Text variant="display-strong-s">2</Text>
          <Text variant="label-default-s" onBackground="neutral-weak">
            {locale === "ko" ? "사용 언어" : "working languages"}
          </Text>
        </Column>
      </Row>

      <Column as="section" gap="40">
        <SectionHeading title={labels.careerTimeline} />
        <Column gap="48">
          {content.experiences.map((experience) => (
            <Row
              key={experience.company.en}
              className="timeline-item"
              gap="24"
              fillWidth
            >
              <span className="timeline-dot" aria-hidden="true" />
              <Column fillWidth gap="20" paddingBottom="24">
                <Row
                  fillWidth
                  horizontal="between"
                  gap="16"
                  s={{ direction: "column" }}
                >
                  <Column gap="4">
                    <Heading as="h3" variant="heading-strong-xl">
                      {localize(experience.company, locale)}
                    </Heading>
                    <Text onBackground="brand-weak">
                      {localize(experience.role, locale)}
                    </Text>
                  </Column>
                  <Column className="timeline-meta" gap="4" align="right">
                    <Text variant="label-strong-s">
                      {localize(experience.period, locale)}
                    </Text>
                    <Text variant="label-default-s" onBackground="neutral-weak">
                      {localize(experience.location, locale)}
                    </Text>
                  </Column>
                </Row>
                <Row wrap gap="8">
                  {experience.projects.map((project) => (
                    <Tag key={project.en}>{localize(project, locale)}</Tag>
                  ))}
                </Row>
                <Column as="ul" gap="12" paddingLeft="24">
                  {experience.achievements.map((achievement) => (
                    <Text
                      as="li"
                      key={achievement.en}
                      variant="body-default-m"
                      onBackground="neutral-medium"
                    >
                      {localize(achievement, locale)}
                    </Text>
                  ))}
                </Column>
              </Column>
            </Row>
          ))}
        </Column>
      </Column>

      <Column as="section" gap="32">
        <SectionHeading
          eyebrow={labels.workingPrinciples}
          title={labels.professionalSummary}
        />
        <Grid
          className="principles-grid"
          columns="3"
          s={{ columns: 1 }}
          gap="16"
        >
          {[
            locale === "ko"
              ? "01 · 문제를 구조화합니다"
              : "01 · Frame the problem",
            locale === "ko"
              ? "02 · 흐름을 연결합니다"
              : "02 · Connect the system",
            locale === "ko"
              ? "03 · 운영을 고려합니다"
              : "03 · Design for operations",
          ].map((title, index) => (
            <Column
              key={title}
              className="principle-card"
              background="surface"
              border="neutral-alpha-medium"
              radius="l"
              padding="l"
              gap="12"
            >
              <Text variant="label-strong-s" onBackground="brand-weak">
                {title}
              </Text>
              <Text variant="body-default-l" onBackground="neutral-medium">
                {localize(content.person.summary[index], locale)}
              </Text>
            </Column>
          ))}
        </Grid>
      </Column>

      <Column as="section" gap="40">
        <SectionHeading title={labels.technicalSkills} />
        <Grid columns="2" s={{ columns: 1 }} gap="16">
          {content.skillCategories.map((category, index) => (
            <Column
              key={category.title.en}
              className={`skill-card${index < 2 ? " skill-card-core" : ""}`}
              background="surface"
              border="neutral-alpha-medium"
              radius="l"
              padding="l"
              gap="16"
            >
              <Row fillWidth horizontal="between" vertical="center" gap="12">
                <Heading as="h3" variant="heading-strong-m">
                  {localize(category.title, locale)}
                </Heading>
                <Text variant="label-default-xs" onBackground="neutral-weak">
                  {index < 2
                    ? locale === "ko"
                      ? "핵심"
                      : "Core"
                    : locale === "ko"
                      ? "확장"
                      : "Supporting"}
                </Text>
              </Row>
              <Row wrap gap="8">
                {category.skills.map((skill) => (
                  <Tag key={skill}>{skill}</Tag>
                ))}
              </Row>
            </Column>
          ))}
        </Grid>
      </Column>

      <Column as="section" gap="32">
        <SectionHeading title={labels.interests} />
        <Column className="interest-list" as="ul" gap="0">
          {content.interests.map((interest, index) => (
            <Row
              as="li"
              className="interest-row"
              key={interest.en}
              gap="16"
              vertical="center"
            >
              <Text variant="label-strong-s" onBackground="brand-weak">
                0{index + 1}
              </Text>
              <Text variant="body-default-l">{localize(interest, locale)}</Text>
            </Row>
          ))}
        </Column>
      </Column>
    </Column>
  );
}
