import {
  Button,
  Column,
  Heading,
  Row,
  Tag,
  Text,
} from "@once-ui-system/core";
import { Magnetic } from "@/components/motion/Magnetic";
import { ProofStrip } from "@/components/motion/ProofStrip";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { STAGGER_CARD } from "@/components/motion/tokens";
import { getContent, localize, pageCopy, person, type Locale } from "@/resources";
import { AboutHero } from "./AboutHero";
import { HomeTimeline } from "./HomeTimeline";
import { SectionHeading } from "./SectionHeading";

export function PortfolioAbout({ locale }: { locale: Locale }) {
  const content = getContent(locale);
  const labels = content.navigation;
  const copy = pageCopy.about;
  const skillsFor = (...titles: string[]) =>
    Array.from(
      new Set(
        content.skillCategories
          .filter((category) => titles.includes(category.title.en))
          .flatMap((category) => category.skills),
      ),
    );
  const capabilityGroups = [
    { title: "Frontend", skills: skillsFor("Frontend") },
    {
      title: locale === "ko" ? "상태·데이터" : "State & Data",
      skills: skillsFor("State & Data", "Database"),
    },
    { title: "Backend", skills: skillsFor("Backend") },
    { title: "Mobile", skills: skillsFor("Mobile") },
    {
      title: locale === "ko" ? "검증·배포" : "Quality & Delivery",
      skills: skillsFor("Testing", "DevOps & Tools"),
    },
  ];

  return (
    <Column className="page-stack about-page" maxWidth="m" fillWidth gap="80">
      <AboutHero locale={locale} />

      <ProofStrip
        className="about-proof-strip"
        items={[
          { value: 3, suffix: "+", label: localize(copy.proofYears, locale), brand: true },
          { value: 4, label: localize(copy.proofDomains, locale) },
          { value: 2, label: localize(copy.proofLanguages, locale) },
        ]}
      />

      <Column as="section" gap="32">
        <SectionHeading
          eyebrow={localize(copy.aiIntroductionEyebrow, locale)}
          title={localize(copy.aiIntroductionTitle, locale)}
        />
        <Column maxWidth="s" fillWidth gap="16">
          {copy.aiIntroduction.map((paragraph) => (
            <Text
              key={paragraph.en}
              variant="body-default-l"
              onBackground="neutral-medium"
            >
              {localize(paragraph, locale)}
            </Text>
          ))}
        </Column>
      </Column>

      <Column as="section" gap="40">
        <SectionHeading title={labels.careerTimeline} />
        <HomeTimeline locale={locale} experiences={content.experiences} detailed />
      </Column>

      <Column as="section" gap="32">
        <SectionHeading
          eyebrow={labels.workingPrinciples}
          title={labels.professionalSummary}
        />
        <Stagger className="principles-grid" interval={STAGGER_CARD}>
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
            <StaggerItem key={title} className="card-reveal" y={12}>
              <Column
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
            </StaggerItem>
          ))}
        </Stagger>
      </Column>

      <Column as="section" gap="40">
        <SectionHeading
          eyebrow={labels.technicalSkills}
          title={localize(copy.capabilitiesTitle, locale)}
        />
        <Stagger className="capability-grid" interval={STAGGER_CARD}>
          {capabilityGroups.map((category, index) => (
            <StaggerItem key={category.title} className="card-reveal" y={12}>
              <Column
                className={`skill-card${index < 2 ? " skill-card-core" : ""}`}
                background="surface"
                border="neutral-alpha-medium"
                radius="l"
                padding="l"
                gap="16"
              >
                <Row fillWidth horizontal="between" vertical="center" gap="12">
                  <Heading as="h3" variant="heading-strong-m">
                    {category.title}
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
            </StaggerItem>
          ))}
        </Stagger>
      </Column>

      <Column as="section" gap="32">
        <SectionHeading
          eyebrow={labels.education}
          title={localize(copy.credentialsTitle, locale)}
        />
        <Stagger className="credentials-grid" interval={STAGGER_CARD}>
          {[
            {
              title: labels.education,
              body: (
                <Column as="ul" className="credential-list" gap="0" paddingLeft="0">
                  {content.education.map((item) => (
                    <Column as="li" className="credential-item" key={item.institution.en} gap="4">
                      <Text variant="label-strong-s">{localize(item.institution, locale)}</Text>
                      <Text variant="body-default-s" onBackground="neutral-medium">
                        {localize(item.program, locale)}
                      </Text>
                      <Text variant="label-default-xs" onBackground="neutral-weak">
                        {item.period}
                      </Text>
                    </Column>
                  ))}
                </Column>
              ),
            },
            {
              title: labels.training,
              body: (
                <Column as="ul" className="credential-list" gap="0" paddingLeft="0">
                  {content.training.map((item) => (
                    <Column as="li" className="credential-item" key={item.institution.en} gap="4">
                      <Text variant="label-strong-s">{localize(item.institution, locale)}</Text>
                      <Text variant="body-default-s" onBackground="neutral-medium">
                        {localize(item.program, locale)}
                      </Text>
                      <Text variant="label-default-xs" onBackground="neutral-weak">
                        {item.period}
                      </Text>
                    </Column>
                  ))}
                </Column>
              ),
            },
            {
              title: labels.certifications,
              body: (
                <Column as="ul" className="credential-list" gap="0" paddingLeft="0">
                  {content.certifications.map((item) => (
                    <Column as="li" className="credential-item" key={item.name.en} gap="4">
                      <Text variant="label-strong-s">{localize(item.name, locale)}</Text>
                      <Text variant="label-default-xs" onBackground="neutral-weak">
                        {localize(item.detail, locale)}
                      </Text>
                    </Column>
                  ))}
                </Column>
              ),
            },
          ].map((card) => (
            <StaggerItem key={card.title} className="card-reveal" y={12}>
              <Column
                className="credential-card"
                background="surface"
                border="neutral-alpha-medium"
                radius="l"
                padding="l"
                gap="16"
              >
                <Heading as="h3" variant="heading-strong-m">
                  {card.title}
                </Heading>
                {card.body}
              </Column>
            </StaggerItem>
          ))}
        </Stagger>
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

      <Reveal inView y={0} scale={0.98} amount={0.3} className="contact-reveal">
        <Column
          as="section"
          className="contact-section"
          background="surface"
          border="neutral-alpha-medium"
          radius="xl"
          padding="xl"
          gap="20"
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
          <Magnetic>
            <Button href={`mailto:${person.email}`} variant="primary" prefixIcon="email">
              {person.email}
            </Button>
          </Magnetic>
        </Column>
      </Reveal>
    </Column>
  );
}
