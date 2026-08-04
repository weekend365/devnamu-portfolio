import { Column, Media, Row, Text } from "@once-ui-system/core";
import type { Locale, Project } from "@/resources";
import { localize } from "@/resources";

export function ProjectVisual({
  project,
  locale,
  priority = false,
}: { project: Project; locale: Locale; priority?: boolean }) {
  const image = project.images[0];
  const evidence = project.results[0] ?? project.contributions[0];
  const aspectRatio =
    image?.width && image.height
      ? `${image.width} / ${image.height}`
      : image?.variant === "mobile"
        ? "1125 / 2436"
        : "1060 / 600";

  if (project.slug === "jango" && image) {
    return (
      <Column className="jango-card-visual" fillWidth center radius="l">
        <Media
          className="jango-card-screen"
          src={image.src}
          alt={localize(image.alt, locale)}
          aspectRatio={aspectRatio}
          objectFit="cover"
          sizes="(max-width: 768px) 72vw, 260px"
          priority={priority}
          radius="l"
        />
      </Column>
    );
  }

  if (image) {
    return (
      <Media
        src={image.src}
        alt={localize(image.alt, locale)}
        aspectRatio={aspectRatio}
        objectFit={image.variant === "mobile" ? "cover" : "contain"}
        sizes="(max-width: 768px) 100vw, 960px"
        priority={priority}
        radius="l"
      />
    );
  }

  return (
    <Column
      className="project-evidence-visual"
      fillWidth
      border="neutral-alpha-medium"
      radius="l"
      gap="20"
      padding="m"
      aria-label={
        locale === "ko"
          ? `${localize(project.title, locale)} 프로젝트 증거 요약`
          : `${localize(project.title, locale)} project evidence summary`
      }
    >
      <Row fillWidth horizontal="between" vertical="center" gap="12">
        <Text className="eyebrow" variant="label-strong-xs" onBackground="brand-weak">
          {locale === "ko" ? "검증된 프로젝트" : "Verified work"}
        </Text>
        <Text variant="label-default-xs" onBackground="neutral-weak">
          {localize(project.status, locale)}
        </Text>
      </Row>
      <Column
        className="project-evidence-window"
        background="surface"
        border="neutral-alpha-medium"
        radius="m"
        overflow="hidden"
      >
        <Row
          className="project-evidence-toolbar"
          gap="4"
          paddingX="12"
          paddingY="8"
          borderBottom="neutral-alpha-medium"
          aria-hidden="true"
        >
          <span className="project-evidence-dot" />
          <span className="project-evidence-dot" />
          <span className="project-evidence-dot" />
        </Row>
        <Column padding="m" gap="16">
          <Column gap="4">
            <Text variant="label-default-xs" onBackground="neutral-weak">
              {locale === "ko" ? "담당 범위" : "Ownership"}
            </Text>
            <Text variant="heading-strong-m">{localize(project.role, locale)}</Text>
          </Column>
          {evidence && (
            <Column className="project-evidence-result" gap="4" paddingLeft="12">
              <Text variant="label-strong-xs" onBackground="brand-weak">
                {project.results.length > 0
                  ? locale === "ko"
                    ? "결과"
                    : "Outcome"
                  : locale === "ko"
                    ? "구현"
                    : "Delivered"}
              </Text>
              <Text
                className="project-evidence-copy"
                variant="body-default-s"
                onBackground="neutral-medium"
              >
                {localize(evidence, locale)}
              </Text>
            </Column>
          )}
        </Column>
      </Column>
    </Column>
  );
}
