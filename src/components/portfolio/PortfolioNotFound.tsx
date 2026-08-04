import { Button, Column, Heading, Text } from "@once-ui-system/core";
import type { Locale } from "@/resources";
import { localePath } from "@/utils/site-metadata";

export function PortfolioNotFound({ locale }: { locale: Locale }) {
  return (
    <Column as="section" fillWidth center gap="16" paddingY="128">
      <Text variant="display-strong-xl" onBackground="brand-weak">404</Text>
      <Heading as="h1" variant="display-strong-s">
        {locale === "ko" ? "페이지를 찾을 수 없습니다" : "Page not found"}
      </Heading>
      <Text onBackground="neutral-weak">
        {locale === "ko" ? "요청한 페이지가 없거나 이동되었습니다." : "The requested page does not exist or has moved."}
      </Text>
      <Button href={localePath(locale)} variant="secondary" prefixIcon="home">
        {locale === "ko" ? "홈으로" : "Back home"}
      </Button>
    </Column>
  );
}

