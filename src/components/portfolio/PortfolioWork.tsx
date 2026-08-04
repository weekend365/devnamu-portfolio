import { Column, Grid, Heading, Text } from "@once-ui-system/core";
import { getContent, type Locale } from "@/resources";
import { ProjectCard } from "./ProjectCard";

export function PortfolioWork({ locale }: { locale: Locale }) {
  const content = getContent(locale);

  return (
    <Column className="page-stack" maxWidth="l" fillWidth gap="64">
      <Column as="header" maxWidth="s" gap="16">
        <Text className="eyebrow" variant="label-strong-m" onBackground="brand-weak">{content.navigation.work}</Text>
        <Heading as="h1" className="hero-name" variant="display-strong-l" wrap="balance">
          {locale === "ko" ? "제품을 만들고, 업무를 움직인 기록" : "Products built. Operations improved."}
        </Heading>
        <Text variant="heading-default-l" onBackground="neutral-weak">
          {locale === "ko" ? "개인 제품부터 공공·교통·구독 서비스까지, 제가 맡은 역할과 구현한 내용을 사실에 근거해 정리했습니다." : "A factual record of what I owned and shipped across an independent product, public systems, transportation, and subscriptions."}
        </Text>
      </Column>
      <Grid columns="2" s={{ columns: 1 }} gap="24">
        {content.projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} locale={locale} priority={index < 2} />
        ))}
      </Grid>
    </Column>
  );
}
