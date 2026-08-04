import { Button, Column, Heading, Media, Row, Tag, Text } from "@once-ui-system/core";
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
          <Tag variant="success" size="m">{locale === "ko" ? "개인 제품" : "Independent product"}</Tag>
          <Text variant="label-default-s" onBackground="neutral-weak">{localize(project.status, locale)}</Text>
        </Row>
        <Column gap="12">
          <Heading as="h3" variant="display-strong-m" wrap="balance">
            {localize(project.title, locale)}
          </Heading>
          <Text variant="heading-default-l" onBackground="neutral-weak" wrap="balance">
            {localize(project.summary, locale)}
          </Text>
        </Column>
        <Row wrap gap="8">
          {project.technologies.slice(0, 6).map((technology) => (
            <Tag key={technology} size="s">{technology}</Tag>
          ))}
        </Row>
        <Row gap="12" wrap>
          <Button href={localePath(locale, "/work/jango")} variant="primary" suffixIcon="arrowRight">
            {locale === "ko" ? "제품 사례 읽기" : "Read the case study"}
          </Button>
          <Button href={project.repository} variant="secondary" prefixIcon="github" suffixIcon="arrowUpRightFromSquare">
            {labels.viewGithub}
          </Button>
        </Row>
      </Column>
      <Column
        className="featured-visual featured-screenshot-panel"
        flex={5}
        background="neutral-weak"
        radius="xl"
        center
        aria-label={locale === "ko" ? "장고야 부탁해 실제 모바일 앱 화면" : "Jango mobile app screenshot"}
      >
        <Media
          className="featured-app-screen"
          src="/images/projects/jango/01.png"
          alt={locale === "ko" ? "장고야 부탁해 홈 대시보드 앱스토어 스크린샷" : "Jango home dashboard App Store screenshot"}
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
