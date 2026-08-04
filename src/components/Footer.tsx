import { IconButton, Row, SmartLink, Text } from "@once-ui-system/core";
import type { Locale } from "@/resources";
import { person } from "@/resources";

export function Footer({ locale }: { locale: Locale }) {
  return (
    <Row as="footer" fillWidth horizontal="center" paddingX="l" paddingY="24">
      <Row
        maxWidth="m"
        fillWidth
        horizontal="between"
        vertical="center"
        gap="16"
        s={{ direction: "column", horizontal: "center" }}
      >
        <Text variant="body-default-s" onBackground="neutral-weak">
          © {new Date().getFullYear()} {person.brand}
        </Text>
        <Row gap="8" vertical="center">
          <IconButton
            href={person.github}
            icon="github"
            variant="tertiary"
            tooltip="GitHub"
            aria-label="GitHub"
          />
          <IconButton
            href={`mailto:${person.email}`}
            icon="email"
            variant="tertiary"
            tooltip="Email"
            aria-label="Email"
          />
        </Row>
      </Row>
    </Row>
  );
}
