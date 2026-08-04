import { Button, Column, Grid, Heading, Media, Row, Tag, Text } from "@once-ui-system/core";
import {
  getContent,
  localize,
  person,
  type Locale,
} from "@/resources";
import { SectionHeading } from "./SectionHeading";

export function PortfolioAbout({ locale }: { locale: Locale }) {
  const content = getContent(locale);
  const labels = content.navigation;
  const resumeHref = locale === "ko" ? "/resume/nam-woo-hyun-ko.pdf" : "/resume/nam-woo-hyun-en.pdf";

  return (
    <Column className="page-stack" maxWidth="m" fillWidth gap="104">
      <Row as="header" fillWidth gap="xl" vertical="center" s={{ direction: "column-reverse", vertical: "start" }}>
        <Column flex={8} gap="20">
          <Text className="eyebrow" variant="label-strong-m" onBackground="brand-weak">{person.name[locale]} · {labels.about}</Text>
          <Heading as="h1" className="hero-title" variant="display-strong-l" wrap="balance">
            {locale === "ko" ? "문제를 이해하고, 운영 가능한 제품으로 바꿉니다." : "I turn understood problems into operable products."}
          </Heading>
          <Text variant="heading-default-l" onBackground="neutral-weak">{person.role[locale]}</Text>
          <Row gap="12" wrap>
            <Button href={resumeHref} download prefixIcon="document">{labels.resume}</Button>
            <Button href={`mailto:${person.email}`} variant="secondary" prefixIcon="email">{labels.contact}</Button>
          </Row>
        </Column>
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
      </Row>

      <Column as="section" gap="32">
        <SectionHeading title={labels.professionalSummary} />
        <Column gap="16" maxWidth="s">
          {content.person.summary.map((paragraph) => (
            <Text key={paragraph.en} variant="body-default-l" onBackground="neutral-medium">{localize(paragraph, locale)}</Text>
          ))}
        </Column>
      </Column>

      <Column as="section" gap="40">
        <SectionHeading title={labels.careerTimeline} />
        <Column gap="48">
          {content.experiences.map((experience) => (
            <Row key={experience.company.en} className="timeline-item" gap="24" fillWidth>
              <span className="timeline-dot" aria-hidden="true" />
              <Column fillWidth gap="20" paddingBottom="24">
                <Row fillWidth horizontal="between" gap="16" s={{ direction: "column" }}>
                  <Column gap="4">
                    <Heading as="h3" variant="heading-strong-xl">{localize(experience.company, locale)}</Heading>
                    <Text onBackground="brand-weak">{localize(experience.role, locale)}</Text>
                  </Column>
                  <Column className="timeline-meta" gap="4" align="right">
                    <Text variant="label-strong-s">{localize(experience.period, locale)}</Text>
                    <Text variant="label-default-s" onBackground="neutral-weak">{localize(experience.location, locale)}</Text>
                  </Column>
                </Row>
                <Row wrap gap="8">
                  {experience.projects.map((project) => <Tag key={project.en}>{localize(project, locale)}</Tag>)}
                </Row>
                <Column as="ul" gap="12" paddingLeft="24">
                  {experience.achievements.map((achievement) => (
                    <Text as="li" key={achievement.en} variant="body-default-m" onBackground="neutral-medium">
                      {localize(achievement, locale)}
                    </Text>
                  ))}
                </Column>
              </Column>
            </Row>
          ))}
        </Column>
      </Column>

      <Column as="section" gap="40">
        <SectionHeading title={labels.technicalSkills} />
        <Grid columns="2" s={{ columns: 1 }} gap="16">
          {content.skillCategories.map((category) => (
            <Column key={category.title.en} className="skill-card" background="surface" border="neutral-alpha-medium" radius="l" padding="l" gap="16">
              <Heading as="h3" variant="heading-strong-m">{localize(category.title, locale)}</Heading>
              <Row wrap gap="8">{category.skills.map((skill) => <Tag key={skill}>{skill}</Tag>)}</Row>
            </Column>
          ))}
        </Grid>
      </Column>

      <Grid columns="2" s={{ columns: 1 }} gap="xl">
        <Column as="section" gap="32">
          <SectionHeading title={labels.education} />
          <Column gap="24">
            {content.education.map((item) => (
              <Column key={item.institution.en} gap="4">
                <Heading as="h3" variant="heading-strong-m">{localize(item.institution, locale)}</Heading>
                <Text onBackground="neutral-weak">{localize(item.program, locale)}</Text>
                <Text variant="label-default-s" onBackground="brand-weak">{item.period}</Text>
              </Column>
            ))}
          </Column>
        </Column>
        <Column as="section" gap="32">
          <SectionHeading title={labels.training} />
          {content.training.map((item) => (
            <Column key={item.institution.en} gap="4">
              <Heading as="h3" variant="heading-strong-m">{localize(item.institution, locale)}</Heading>
              <Text onBackground="neutral-weak">{localize(item.program, locale)}</Text>
              <Text variant="label-default-s" onBackground="brand-weak">{item.period}</Text>
            </Column>
          ))}
        </Column>
      </Grid>

      <Column as="section" gap="40">
        <SectionHeading title={labels.certifications} />
        <Grid columns="2" s={{ columns: 1 }} gap="16">
          {content.certifications.map((certification) => (
            <Column key={certification.name.en} background="surface" border="neutral-alpha-medium" radius="m" padding="m" gap="4">
              <Heading as="h3" variant="heading-strong-m">{localize(certification.name, locale)}</Heading>
              <Text variant="body-default-s" onBackground="neutral-weak">{localize(certification.detail, locale)}</Text>
            </Column>
          ))}
        </Grid>
      </Column>

      <Column as="section" gap="32">
        <SectionHeading title={labels.interests} />
        <Column as="ul" gap="16" paddingLeft="24">
          {content.interests.map((interest) => <Text as="li" key={interest.en} variant="body-default-l">{localize(interest, locale)}</Text>)}
        </Column>
      </Column>
    </Column>
  );
}
