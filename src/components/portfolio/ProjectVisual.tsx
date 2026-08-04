import { Column, Icon, Media, Text } from "@once-ui-system/core";
import type { Locale, Project } from "@/resources";
import { localize, ui } from "@/resources";

export function ProjectVisual({ project, locale, priority = false }: { project: Project; locale: Locale; priority?: boolean }) {
  if (project.slug === "jango" && project.images[0]) {
    return (
      <Column className="jango-card-visual" fillWidth center radius="l">
        <Media
          className="jango-card-screen"
          src={project.images[0]}
          alt={locale === "ko" ? "장고야 부탁해 홈 대시보드 앱 화면" : "Jango home dashboard app screen"}
          aspectRatio="1125 / 2433"
          objectFit="cover"
          sizes="(max-width: 768px) 72vw, 260px"
          priority={priority}
          radius="l"
        />
      </Column>
    );
  }

  if (project.images[0]) {
    return (
      <Media
        src={project.images[0]}
        alt={`${localize(project.title, locale)} ${locale === "ko" ? "프로젝트 비주얼" : "project visual"}`}
        aspectRatio="16 / 9"
        objectFit="cover"
        sizes="(max-width: 768px) 100vw, 960px"
        priority={priority}
        radius="l"
      />
    );
  }

  return (
    <Column
      className="project-placeholder"
      fillWidth
      center
      border="neutral-alpha-medium"
      radius="l"
      gap="12"
      padding="l"
      aria-label={ui[locale].screenshotsTodo}
    >
      <Icon name="image" size="l" onBackground="brand-weak" />
      <Text variant="heading-strong-m" align="center">
        {localize(project.title, locale)}
      </Text>
      <Text variant="label-default-s" onBackground="neutral-weak" align="center">
        {ui[locale].screenshotsTodo}
      </Text>
    </Column>
  );
}
