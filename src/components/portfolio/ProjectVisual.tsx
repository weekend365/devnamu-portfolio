import { Column, Icon, Media, Text } from "@once-ui-system/core";
import type { Locale, Project } from "@/resources";
import { localize, ui } from "@/resources";

export function ProjectVisual({ project, locale, priority = false }: { project: Project; locale: Locale; priority?: boolean }) {
  const image = project.images[0];
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
