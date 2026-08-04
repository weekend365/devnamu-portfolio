"use client";

import { Button, Column, Grid, Heading, Row, Text, useToast } from "@once-ui-system/core";
import { localize, type DemoAccess, type Locale } from "@/resources";

const copy = {
  ko: {
    eyebrow: "라이브 데모",
    title: "KCSC를 직접 체험해 보세요",
    description: "아래 체험 전용 계정으로 로그인하면 실제 시범운영 서비스를 둘러볼 수 있습니다.",
    username: "테스트 ID",
    password: "테스트 PW",
    copy: "복사",
    open: "KCSC 직접 체험하기",
    copied: (label: string) => `${label}를 복사했습니다.`,
    copyFailed: "복사하지 못했습니다. 값을 직접 선택해 주세요.",
  },
  en: {
    eyebrow: "Live demo",
    title: "Try KCSC yourself",
    description: "Sign in with the demo account below to explore the live pilot service.",
    username: "Test ID",
    password: "Test password",
    copy: "Copy",
    open: "Try KCSC live",
    copied: (label: string) => `${label} copied.`,
    copyFailed: "Could not copy. Please select the value manually.",
  },
} as const;

function Credential({
  label,
  value,
  locale,
}: {
  label: string;
  value: string;
  locale: Locale;
}) {
  const labels = copy[locale];
  const { addToast } = useToast();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      addToast({ variant: "success", message: labels.copied(label) });
    } catch {
      addToast({ variant: "danger", message: labels.copyFailed });
    }
  };

  return (
    <Row
      fillWidth
      horizontal="between"
      vertical="center"
      gap="16"
      padding="16"
      background="neutral-weak"
      border="neutral-alpha-medium"
      radius="m"
      s={{ direction: "column", vertical: "start" }}
    >
      <Column gap="4">
        <Text variant="label-strong-s" onBackground="neutral-weak">
          {label}
        </Text>
        <Text as="code" variant="body-strong-l">
          {value}
        </Text>
      </Column>
      <Button
        type="button"
        size="s"
        variant="tertiary"
        onClick={handleCopy}
        aria-label={`${label} ${labels.copy}`}
      >
        {labels.copy}
      </Button>
    </Row>
  );
}

export function ProjectDemoAccess({
  demoAccess,
  locale,
}: { demoAccess: DemoAccess; locale: Locale }) {
  const labels = copy[locale];

  return (
    <Column
      as="section"
      aria-labelledby="project-demo-title"
      className="project-demo-access"
      fillWidth
      background="surface"
      border="brand-alpha-medium"
      radius="l"
      padding="xl"
      gap="32"
    >
      <Column gap="12">
        <Text variant="label-strong-s" onBackground="brand-weak">
          {labels.eyebrow}
        </Text>
        <Heading id="project-demo-title" as="h2" variant="display-strong-xs" wrap="balance">
          {labels.title}
        </Heading>
        <Text variant="body-default-l" onBackground="neutral-medium" wrap="balance">
          {labels.description}
        </Text>
      </Column>

      <Grid columns="2" s={{ columns: 1 }} gap="16">
        <Credential label={labels.username} value={demoAccess.username} locale={locale} />
        <Credential label={labels.password} value={demoAccess.password} locale={locale} />
      </Grid>

      <Row fillWidth horizontal="between" vertical="center" gap="24" wrap>
        <Text variant="body-default-s" onBackground="neutral-weak">
          {localize(demoAccess.note, locale)}
        </Text>
        <Button href={demoAccess.url} suffixIcon="arrowUpRightFromSquare">
          {labels.open}
        </Button>
      </Row>
    </Column>
  );
}
