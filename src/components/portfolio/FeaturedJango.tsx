import { Button, Column, Grid, Heading, Media, Row, Tag, Text } from "@once-ui-system/core";
import type { Locale } from "@/resources";
import { getProject, localize, ui } from "@/resources";
import { localePath } from "@/utils/site-metadata";

export function FeaturedJango({ locale }: { locale: Locale }) {
  const project = getProject("jango", locale);
  if (!project) return null;
  const labels = ui[locale];

  return (
    <Row
      as="article"
      className="featured-project"
      fillWidth
      background="surface"
      border="brand-alpha-medium"
      radius="xl"
      s={{ direction: "column" }}
    >
      <Column flex={6} padding="xl" gap="24" vertical="center" s={{ padding: "l" }}>
        <Row gap="8" wrap vertical="center">
          <Tag variant="success" size="m">
            {locale === "ko" ? "개인 제품" : "Independent product"}
          </Tag>
          <Text variant="label-default-s" onBackground="neutral-weak">
            {localize(project.status, locale)}
          </Text>
        </Row>
        <Column gap="12">
          <Heading as="h3" variant="display-strong-m" wrap="balance">
            {localize(project.title, locale)}
          </Heading>
          <Text variant="heading-default-l" onBackground="neutral-weak" wrap="balance">
            {localize(project.problem, locale)}
          </Text>
        </Column>
        <Column className="featured-ownership" gap="4" paddingLeft="16">
          <Text variant="label-strong-xs" onBackground="brand-weak">
            {labels.role}
          </Text>
          <Text variant="body-default-m" onBackground="neutral-medium" wrap="balance">
            {localize(project.role, locale)}
          </Text>
        </Column>
        <Grid className="featured-facts" columns="3" s={{ columns: 1 }} gap="8" fillWidth>
          {(project.metrics ?? []).map((metric) => (
            <Column key={metric.value + metric.label.en} className="featured-fact" gap="4">
              <Text className="featured-fact-value" variant="display-strong-xs" onBackground="brand-weak">
                {metric.value}
              </Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                {localize(metric.label, locale)}
              </Text>
              {metric.note && (
                <Text variant="label-default-xs" onBackground="neutral-weak" wrap="balance">
                  {localize(metric.note, locale)}
                </Text>
              )}
            </Column>
          ))}
        </Grid>
        <Row wrap gap="8">
          {project.technologies.slice(0, 6).map((technology) => (
            <Tag key={technology} size="s">
              {technology}
            </Tag>
          ))}
        </Row>
        <Row gap="12" wrap>
          <Button
            href={localePath(locale, "/work/jango")}
            variant="primary"
            suffixIcon="arrowRight"
          >
            {locale === "ko" ? "제품 사례 읽기" : "Read the case study"}
          </Button>
          <Button
            href={project.repository}
            variant="secondary"
            prefixIcon="github"
            suffixIcon="arrowUpRightFromSquare"
          >
            {labels.viewGithub}
          </Button>
          {project.externalLink && (
            <Button
              href={project.externalLink.href}
              variant="secondary"
              suffixIcon="arrowUpRightFromSquare"
            >
              {localize(project.externalLink.label, locale)}
            </Button>
          )}
        </Row>
      </Column>
      <Column
        className="featured-visual featured-screenshot-panel"
        flex={5}
        background="neutral-weak"
        radius="xl"
        center
        aria-label={
          locale === "ko" ? "장고야 부탁해 실제 모바일 앱 화면" : "Jango mobile app screenshot"
        }
      >
        <Media
          className="featured-app-screen"
          src="/images/projects/jango/01.webp"
          alt={
            locale === "ko"
              ? "장고야 부탁해 홈 대시보드 앱스토어 스크린샷"
              : "Jango home dashboard App Store screenshot"
          }
          aspectRatio="1125 / 2433"
          objectFit="cover"
          sizes="(max-width: 768px) 72vw, 288px"
          priority
          radius="xl"
        />
      </Column>
    </Row>
  );
}
