import { Column, Row, Text } from "@once-ui-system/core";
import type { Locale } from "@/resources";
import { localePath } from "@/utils/site-metadata";

const credibilityItems = {
  ko: [
    {
      href: "/work/kcsc",
      label: "시범운영",
      value: "KCSC",
      detail: "디지털 건설기준 계층을 다루는 업무 UI",
    },
    {
      href: "/work/gis-facility-system",
      label: "납품",
      value: "한국수자원공사",
      detail: "GIS 시설물 조회 시스템 · KMIS",
    },
    {
      href: "/work/jango",
      label: "출시",
      value: "iOS · Android",
      detail: "장고야 부탁해 · 양대 스토어 정식 출시",
    },
  ],
  en: [
    {
      href: "/work/kcsc",
      label: "Pilot",
      value: "KCSC",
      detail: "Operational UI for digital construction standards",
    },
    {
      href: "/work/gis-facility-system",
      label: "Delivered",
      value: "K-water",
      detail: "GIS facility lookup system · KMIS",
    },
    {
      href: "/work/jango",
      label: "Launched",
      value: "iOS · Android",
      detail: "Jango · live on both major app stores",
    },
  ],
} as const;

export function HomeCredibility({ locale }: { locale: Locale }) {
  return (
    <div
      className="home-credibility"
      aria-label={locale === "ko" ? "확인 가능한 결과" : "Verified outcomes"}
    >
      <div className="home-credibility-grid">
        {credibilityItems[locale].map((item, index) => (
          <a
            key={item.label}
            href={localePath(locale, item.href)}
            className="home-credibility-item"
          >
            <Column gap="4" fillWidth>
              <Row gap="8" vertical="center">
                <Text className="home-credibility-index" variant="label-strong-xs">
                  {String(index + 1).padStart(2, "0")}
                </Text>
                <Text variant="label-strong-xs" onBackground="neutral-weak">
                  {item.label}
                </Text>
              </Row>
              <Text className="home-credibility-value" variant="heading-strong-m" wrap="balance">
                {item.value}
              </Text>
              <Text variant="body-default-s" onBackground="neutral-weak" wrap="balance">
                {item.detail}
              </Text>
            </Column>
          </a>
        ))}
      </div>
    </div>
  );
}
