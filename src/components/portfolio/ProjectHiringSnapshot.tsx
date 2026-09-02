import { Column, Grid, Row, Tag, Text } from "@once-ui-system/core";
import { localize, type Locale, type Project } from "@/resources";

const copy = {
  ko: {
    eyebrow: "채용 담당자를 위한 요약",
    title: "30초 안에 보는 역할·판단·결과",
    ownership: "담당 범위",
    period: "기간",
    organization: "조직",
    problem: "문제",
    decision: "핵심 판단",
    outcome: "검증 결과",
    evidence: "확인 가능한 증거",
    screenshots: (count: number) => `실제 화면 ${count}개`,
    publicDemo: "공개 데모",
    repository: "공개 저장소",
    external: "출시 페이지",
    documented: "익명화한 업무 흐름",
  },
  en: {
    eyebrow: "Recruiter snapshot",
    title: "Role, decision, and outcome in 30 seconds",
    ownership: "Ownership",
    period: "Period",
    organization: "Organization",
    problem: "Problem",
    decision: "Key decision",
    outcome: "Verified outcome",
    evidence: "Evidence available",
    screenshots: (count: number) => `${count} product screens`,
    publicDemo: "Live demo",
    repository: "Public repository",
    external: "Launch page",
    documented: "Anonymized workflow",
  },
} as const;

function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <Column className="hiring-snapshot-meta-item" gap="4">
      <Text variant="label-strong-xs" onBackground="neutral-weak">
        {label}
      </Text>
      <Text variant="heading-strong-s" wrap="balance">
        {value}
      </Text>
    </Column>
  );
}

function StoryItem({
  className = "",
  index,
  label,
  value,
}: {
  className?: string;
  index: string;
  label: string;
  value: string;
}) {
  return (
    <Column className={`hiring-snapshot-story ${className}`.trim()} gap="12">
      <Row gap="8" vertical="center">
        <Text className="hiring-snapshot-index" variant="label-strong-xs">
          {index}
        </Text>
        <Text variant="label-strong-s" onBackground="brand-weak">
          {label}
        </Text>
      </Row>
      <Text variant="body-default-m" onBackground="neutral-medium">
        {value}
      </Text>
    </Column>
  );
}

export function ProjectHiringSnapshot({ project, locale }: { project: Project; locale: Locale }) {
  const labels = copy[locale];
  const evidence = [
    project.images.length > 0 ? labels.screenshots(project.images.length) : null,
    project.demoAccess ? labels.publicDemo : null,
    project.repository ? labels.repository : null,
    project.externalLinks?.length ? labels.external : null,
    project.images.length === 0 ? labels.documented : null,
  ].filter((item): item is string => Boolean(item));

  return (
    <Column
      as="section"
      className={`project-hiring-snapshot project-hiring-snapshot-${project.slug}`}
      fillWidth
      background="surface"
      border="brand-alpha-medium"
      radius="xl"
      overflow="hidden"
      aria-labelledby="project-hiring-snapshot-title"
    >
      <Row
        className="hiring-snapshot-heading"
        fillWidth
        horizontal="between"
        vertical="end"
        gap="24"
        padding="l"
        s={{ direction: "column", vertical: "start" }}
      >
        <Column gap="4">
          <Text className="eyebrow" variant="label-strong-s" onBackground="brand-weak">
            {labels.eyebrow}
          </Text>
          <Text id="project-hiring-snapshot-title" variant="heading-strong-xl" wrap="balance">
            {labels.title}
          </Text>
        </Column>
        <Row gap="8" wrap>
          {evidence.map((item) => (
            <Tag key={item} size="s" variant="success">
              {item}
            </Tag>
          ))}
        </Row>
      </Row>

      <Grid className="hiring-snapshot-meta" columns="3" gap="0">
        <MetaItem label={labels.ownership} value={localize(project.role, locale)} />
        <MetaItem label={labels.period} value={localize(project.period, locale)} />
        <MetaItem label={labels.organization} value={localize(project.company, locale)} />
      </Grid>

      <Grid className="hiring-snapshot-story-grid" columns="3" s={{ columns: 1 }} gap="0">
        <StoryItem index="01" label={labels.problem} value={localize(project.problem, locale)} />
        <StoryItem
          className="is-decision"
          index="02"
          label={labels.decision}
          value={localize(project.decision, locale)}
        />
        <StoryItem
          className="is-outcome"
          index="03"
          label={labels.outcome}
          value={localize(project.outcome, locale)}
        />
      </Grid>

      {project.metrics && project.metrics.length > 0 ? (
        <Grid className="hiring-snapshot-metrics" columns="3" gap="0">
          {project.metrics.map((metric) => (
            <Column key={metric.value + metric.label.en} className="hiring-snapshot-metric" gap="4">
              <Text variant="display-strong-xs" onBackground="brand-weak">
                {metric.value}
              </Text>
              <Text variant="label-strong-s">{localize(metric.label, locale)}</Text>
              {metric.note ? (
                <Text variant="label-default-xs" onBackground="neutral-weak">
                  {localize(metric.note, locale)}
                </Text>
              ) : null}
            </Column>
          ))}
        </Grid>
      ) : null}
    </Column>
  );
}
