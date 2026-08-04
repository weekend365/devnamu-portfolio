import { Column, Heading, Text } from "@once-ui-system/core";

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <Column className="section-heading" gap="8" maxWidth="s" fillWidth>
      {eyebrow && (
        <Text className="eyebrow" variant="label-strong-s" onBackground="brand-weak">
          {eyebrow}
        </Text>
      )}
      <Heading id={id} as="h2" variant="display-strong-s" wrap="balance">
        {title}
      </Heading>
      {description && (
        <Text variant="body-default-l" onBackground="neutral-weak" wrap="balance">
          {description}
        </Text>
      )}
    </Column>
  );
}
