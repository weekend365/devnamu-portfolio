import { Column, Media, Row, Tag, Text } from "@once-ui-system/core";
import { Fragment, type ReactNode } from "react";
import type { Locale, Project } from "@/resources";
import { localize } from "@/resources";

type WorkflowCopy = {
  eyebrow: string;
  badge: string;
  nodes: string[];
  signals: string[];
  caption: string;
};

const workflowCopy: Record<string, Record<Locale, WorkflowCopy>> = {
  kcsc: {
    ko: {
      eyebrow: "ANONYMIZED WORKFLOW · 업무 구조 시각화",
      badge: "계층형 편집",
      nodes: ["기준 탐색", "검토 항목", "변수 편집", "API 활용"],
      signals: ["Tree", "Editor", "Query", "Role"],
      caption: "깊은 계층에서도 선택·편집·실행 맥락을 유지하는 기준맵 흐름",
    },
    en: {
      eyebrow: "ANONYMIZED WORKFLOW · OPERATIONAL MAP",
      badge: "Hierarchical editor",
      nodes: ["Standards", "Review items", "Variables", "API Center"],
      signals: ["Tree", "Editor", "Query", "Role"],
      caption: "A standards-map flow that keeps selection, editing, and execution context together",
    },
  },
  bims: {
    ko: {
      eyebrow: "ANONYMIZED WORKFLOW · 운영 데이터",
      badge: "관리자 화면",
      nodes: ["버스", "노선", "운영 데이터", "저장·검증"],
      signals: ["Table", "Filter", "CRUD", "Spring API"],
      caption: "교통 운영 데이터를 업무 순서에 맞게 조회하고 관리하는 관리자 흐름",
    },
    en: {
      eyebrow: "ANONYMIZED WORKFLOW · OPERATIONS DATA",
      badge: "Admin interface",
      nodes: ["Buses", "Routes", "Operations", "Save & validate"],
      signals: ["Table", "Filter", "CRUD", "Spring API"],
      caption: "An admin flow for querying and managing transportation data around real work",
    },
  },
  "subscription-platform": {
    ko: {
      eyebrow: "ANONYMIZED WORKFLOW · 서비스 데이터",
      badge: "웹·API 연결",
      nodes: ["인증", "상품 정보", "구독 상태", "계정 화면"],
      signals: ["SSR", "NestJS", "PostgreSQL", "Docker"],
      caption: "사용자 화면과 API·데이터 모델을 하나의 구독 흐름으로 연결",
    },
    en: {
      eyebrow: "ANONYMIZED WORKFLOW · SERVICE DATA",
      badge: "Web + API",
      nodes: ["Auth", "Products", "Subscription", "Account"],
      signals: ["SSR", "NestJS", "PostgreSQL", "Docker"],
      caption: "Connecting the user experience, APIs, and data model into one subscription flow",
    },
  },
  "gis-facility-system": {
    ko: {
      eyebrow: "ANONYMIZED WORKFLOW · 위치 데이터",
      badge: "공공 납품 시스템",
      nodes: ["지도 검색", "시설물 마커", "상세 패널", "업무 확인"],
      signals: ["Map", "Marker", "Panel", "Responsive"],
      caption: "위치 데이터와 상세 정보를 한 화면의 탐색 흐름으로 묶은 GIS 웹앱",
    },
    en: {
      eyebrow: "ANONYMIZED WORKFLOW · LOCATION DATA",
      badge: "Delivered system",
      nodes: ["Map search", "Facility marker", "Detail panel", "Action"],
      signals: ["Map", "Marker", "Panel", "Responsive"],
      caption: "A GIS workflow that brings location data and details into one navigable interface",
    },
  },
};

function ImageBrowserFrame({
  project,
  locale,
  children,
  className = "",
}: {
  project: Project;
  locale: Locale;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Column
      className={`project-browser-frame ${className}`.trim()}
      fillWidth
      border="neutral-alpha-medium"
      radius="l"
      overflow="hidden"
      aria-label={
        locale === "ko"
          ? `${localize(project.title, locale)} 프로젝트 화면 미리보기`
          : `${localize(project.title, locale)} project screen preview`
      }
    >
      <Row
        className="project-evidence-toolbar"
        fillWidth
        gap="8"
        paddingX="12"
        paddingY="8"
        borderBottom="neutral-alpha-medium"
        vertical="center"
        aria-hidden="true"
      >
        <Row gap="4">
          <span className="project-evidence-dot" />
          <span className="project-evidence-dot" />
          <span className="project-evidence-dot" />
        </Row>
        <Text className="project-evidence-url" variant="label-default-xs" onBackground="neutral-weak">
          devnamu.dev / work / {project.slug}
        </Text>
      </Row>
      <Column className="project-evidence-content">{children}</Column>
    </Column>
  );
}

function WorkflowVisual({ project, locale }: { project: Project; locale: Locale }) {
  const copy = workflowCopy[project.slug]?.[locale];
  if (!copy) return null;

  return (
    <Column
      className={`project-placeholder project-workflow project-workflow-${project.slug}`}
      fillWidth
      border="neutral-alpha-medium"
      radius="l"
      padding="l"
      gap="20"
      aria-label={copy.caption}
    >
      <Row fillWidth horizontal="between" vertical="center" gap="12" s={{ direction: "column", horizontal: "start" }}>
        <Column gap="4">
          <Text className="workflow-kicker" variant="label-strong-s" onBackground="brand-weak">
            {copy.eyebrow}
          </Text>
          <Text variant="heading-strong-m">{localize(project.title, locale)}</Text>
        </Column>
        <Tag size="s" variant="info">{copy.badge}</Tag>
      </Row>
      <Row className="workflow-flow" fillWidth gap="8" vertical="center" s={{ direction: "column" }}>
        {copy.nodes.map((node, index) => (
          <Fragment key={node}>
            <Column className="workflow-node" background="surface" border="neutral-alpha-medium" radius="m" padding="m" gap="8">
              <Text variant="label-strong-s" onBackground="brand-weak">0{index + 1}</Text>
              <Text variant="heading-strong-s" wrap="balance">{node}</Text>
            </Column>
            {index < copy.nodes.length - 1 && <Text className="workflow-arrow" onBackground="neutral-weak">→</Text>}
          </Fragment>
        ))}
      </Row>
      <Row gap="8" wrap>
        {copy.signals.map((signal) => <Tag key={signal} size="s">{signal}</Tag>)}
      </Row>
      <Text variant="label-default-s" onBackground="neutral-weak" wrap="balance">{copy.caption}</Text>
    </Column>
  );
}

export function ProjectVisual({ project, locale, priority = false }: { project: Project; locale: Locale; priority?: boolean }) {
  const image = project.images[0];
  const evidence = project.results[0] ?? project.contributions[0];
  const aspectRatio =
    image?.width && image.height
      ? `${image.width} / ${image.height}`
      : image?.variant === "mobile"
        ? "1125 / 2436"
        : "1060 / 600";

  if (image?.variant === "mobile") {
    return (
      <Column
        className={project.slug === "jango" ? "jango-card-visual" : "mobile-card-visual"}
        fillWidth
        center
        radius="l"
      >
        <Column fillWidth center>
          <Media
            className={project.slug === "jango" ? "jango-card-screen" : "mobile-card-screen"}
            src={image.src}
            alt={localize(image.alt, locale)}
            aspectRatio={aspectRatio}
            objectFit="cover"
            sizes="(max-width: 768px) 72vw, 260px"
            priority={priority}
            radius="l"
          />
        </Column>
      </Column>
    );
  }

  if (image?.variant === "desktop") {
    return (
      <ImageBrowserFrame project={project} locale={locale}>
        <Media
          src={image.src}
          alt={localize(image.alt, locale)}
          aspectRatio={aspectRatio}
          objectFit="contain"
          sizes="(max-width: 768px) 100vw, 960px"
          priority={priority}
          radius="none"
        />
      </ImageBrowserFrame>
    );
  }

  if (workflowCopy[project.slug]) {
    return <WorkflowVisual project={project} locale={locale} />;
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
      <Column className="project-evidence-window" background="surface" border="neutral-alpha-medium" radius="m" overflow="hidden">
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
              <Text className="project-evidence-copy" variant="body-default-s" onBackground="neutral-medium">
                {localize(evidence, locale)}
              </Text>
            </Column>
          )}
        </Column>
      </Column>
    </Column>
  );
}
