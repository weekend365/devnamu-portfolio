import { Column, Row, Text } from "@once-ui-system/core";
import type { Locale } from "@/resources";

const credibilityItems = {
  ko: [
    {
      label: "실무 조직",
      value: "씨엔넷 · 겟앤쇼 · KMIS",
      detail: "3개 조직에서 제품 개발",
    },
    {
      label: "도메인",
      value: "공공 · 교통 · 구독",
      detail: "복잡한 업무 흐름을 화면으로 구조화",
    },
    {
      label: "출시",
      value: "App Store 정식 출시",
      detail: "개인 제품의 설계부터 운영까지",
    },
    {
      label: "납품·운영",
      value: "공공기관 납품 · 시범운영",
      detail: "실제 업무 환경 적용 경험",
    },
  ],
  en: [
    {
      label: "Teams",
      value: "C&Net · Get&Show · KMIS",
      detail: "Product work across three organizations",
    },
    {
      label: "Domains",
      value: "Public · Transit · Subscription",
      detail: "Complex workflows shaped into clear interfaces",
    },
    {
      label: "Launch",
      value: "Live on the App Store",
      detail: "Independent product from design to operations",
    },
    {
      label: "Delivery",
      value: "Public delivery · Pilot operations",
      detail: "Experience in real operational environments",
    },
  ],
} as const;

export function HomeCredibility({ locale }: { locale: Locale }) {
  return (
    <Column
      as="section"
      className="home-credibility"
      gap="16"
      aria-labelledby="home-credibility-title"
    >
      <Row
        fillWidth
        horizontal="between"
        vertical="end"
        gap="16"
        wrap
        s={{ direction: "column", vertical: "start" }}
      >
        <Column gap="4">
          <Text className="eyebrow" variant="label-strong-s" onBackground="brand-weak">
            {locale === "ko" ? "채용자가 빠르게 보는 근거" : "Recruiter-ready evidence"}
          </Text>
          <Text id="home-credibility-title" variant="heading-strong-l" wrap="balance">
            {locale === "ko" ? "어디에서 무엇을 끝까지 만들었는지" : "Where I worked and what I delivered"}
          </Text>
        </Column>
        <Text variant="label-default-s" onBackground="neutral-weak">
          {locale === "ko" ? "이력서의 핵심만 먼저 요약했습니다." : "A quick summary of the evidence behind the résumé."}
        </Text>
      </Row>
      <div className="home-credibility-grid">
        {credibilityItems[locale].map((item, index) => (
          <Column key={item.label} className="home-credibility-item" gap="4">
            <Row gap="8" vertical="center">
              <Text className="home-credibility-index" variant="label-strong-xs">
                {String(index + 1).padStart(2, "0")}
              </Text>
              <Text variant="label-strong-xs" onBackground="neutral-weak">
                {item.label}
              </Text>
            </Row>
            <Text variant="heading-strong-m" wrap="balance">
              {item.value}
            </Text>
            <Text variant="body-default-s" onBackground="neutral-weak" wrap="balance">
              {item.detail}
            </Text>
          </Column>
        ))}
      </div>
    </Column>
  );
}
