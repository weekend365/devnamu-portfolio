import type { IconType } from "react-icons";
import { HiOutlineServerStack, HiOutlineTruck, HiOutlineUser } from "react-icons/hi2";
import {
  SiApachekafka,
  SiDocker,
  SiGithub,
  SiHarbor,
  SiJenkins,
  SiMqtt,
  SiNextdotjs,
  SiPostgresql,
  SiRedis,
  SiSonarqubeserver,
  SiSpringboot,
} from "react-icons/si";
import type { Locale } from "@/resources";

type ArchitectureCopy = {
  navLabel: string;
  eyebrow: string;
  title: string;
  description: string;
  figureLabel: string;
  deployment: {
    title: string;
    description: string;
    handoff: string;
  };
  control: {
    title: string;
    description: string;
    internalNetwork: string;
    commandPath: string;
    resultPath: string;
  };
  support: {
    title: string;
    description: string;
    retryTitle: string;
    retryDescription: string;
  };
  legend: {
    direct: string;
    adjacent: string;
    command: string;
    result: string;
    retry: string;
  };
};

export const bimsArchitectureCopy: Record<Locale, ArchitectureCopy> = {
  ko: {
    navLabel: "시스템 구성",
    eyebrow: "DEVELOPMENT ENVIRONMENT",
    title: "배포와 비동기 제어 흐름",
    description:
      "코드가 컨테이너로 배포되고 차량 명령과 처리 결과가 서로 다른 메시지로 오가는 전체 흐름을 포트폴리오 관점에서 요약했습니다.",
    figureLabel: "BIMS 배포 파이프라인과 비동기 차량 제어 시스템 구성도",
    deployment: {
      title: "배포 파이프라인",
      description: "커밋부터 품질 검사와 이미지 저장소까지 이어지는 자동 배포 흐름",
      handoff: "이미지 pull · 내부 서비스 배포",
    },
    control: {
      title: "비동기 명령 처리",
      description: "브라우저 요청을 차량 명령으로 전달하고 결과 상태를 별도 메시지로 회수",
      internalNetwork: "내부망 · 서비스별 개발 서버",
      commandPath: "명령 전달",
      resultPath: "결과·상태 반환 · 비동기 응답 경로",
    },
    support: {
      title: "상태 저장과 수집",
      description: "명령 상태, 캐시와 수집 메시지를 분리해 처리",
      retryTitle: "만료 → 재전송",
      retryDescription: "지연·중복 응답이 완료 상태를 덮지 않도록 실패를 하나의 만료 상태로 수렴",
    },
    legend: {
      direct: "직접 설계·구현",
      adjacent: "연동·타 담당 구간",
      command: "명령 하향",
      result: "결과·상태 상향",
      retry: "만료·재전송",
    },
  },
  en: {
    navLabel: "Architecture",
    eyebrow: "DEVELOPMENT ENVIRONMENT",
    title: "Deployment and asynchronous control flow",
    description:
      "A portfolio-level view of how code becomes a deployed container while vehicle commands and processing results travel on separate message paths.",
    figureLabel: "BIMS deployment pipeline and asynchronous vehicle-control architecture",
    deployment: {
      title: "Deployment pipeline",
      description: "An automated path from commit through quality checks to the image registry",
      handoff: "Image pull · deploy internal services",
    },
    control: {
      title: "Asynchronous command handling",
      description:
        "Turn browser requests into vehicle commands and collect result state separately",
      internalNetwork: "Internal network · service development servers",
      commandPath: "Command delivery",
      resultPath: "Result and status return · asynchronous response path",
    },
    support: {
      title: "State and collection",
      description: "Keep command state, cache, and collected messages in distinct processing paths",
      retryTitle: "Expiry → retry",
      retryDescription:
        "Converge failures on one expired state so delayed or duplicate responses cannot overwrite completion",
    },
    legend: {
      direct: "Designed and implemented",
      adjacent: "Integrated or adjacent scope",
      command: "Command downstream",
      result: "Result and status upstream",
      retry: "Expiry and retry",
    },
  },
};

type DiagramNode = {
  name: string;
  detail: Record<Locale, string>;
  icon: IconType;
  ownership: "direct" | "adjacent";
};

const deploymentNodes: DiagramNode[] = [
  {
    name: "Developer",
    detail: { ko: "Git push", en: "Git push" },
    icon: SiGithub,
    ownership: "direct",
  },
  {
    name: "Jenkins",
    detail: { ko: "빌드 · 배포", en: "Build · deploy" },
    icon: SiJenkins,
    ownership: "direct",
  },
  {
    name: "SonarQube",
    detail: { ko: "정적 분석", en: "Static analysis" },
    icon: SiSonarqubeserver,
    ownership: "direct",
  },
  {
    name: "Harbor",
    detail: { ko: "이미지 저장소", en: "Image registry" },
    icon: SiHarbor,
    ownership: "direct",
  },
];

const internalNodes: DiagramNode[] = [
  {
    name: "bims-control",
    detail: { ko: "Next.js 15 관리자 웹", en: "Next.js 15 admin web" },
    icon: SiNextdotjs,
    ownership: "adjacent",
  },
  {
    name: "bims-control-api",
    detail: { ko: "Spring Boot · 명령 상태", en: "Spring Boot · command state" },
    icon: SiSpringboot,
    ownership: "direct",
  },
  {
    name: "Kafka",
    detail: { ko: "명령 큐 · 수집", en: "Command queue · collection" },
    icon: SiApachekafka,
    ownership: "direct",
  },
  {
    name: "mqtt-interface",
    detail: { ko: "Kafka ↔ MQTT", en: "Kafka ↔ MQTT" },
    icon: SiSpringboot,
    ownership: "adjacent",
  },
  {
    name: "MQTT Broker",
    detail: { ko: "TLS 메시지 브로커", en: "TLS message broker" },
    icon: SiMqtt,
    ownership: "adjacent",
  },
];

const supportNodes: DiagramNode[] = [
  {
    name: "Redis",
    detail: { ko: "캐시 · 게시", en: "Cache · publish" },
    icon: SiRedis,
    ownership: "direct",
  },
  {
    name: "PostgreSQL",
    detail: { ko: "공용 명령 상태", en: "Shared command state" },
    icon: SiPostgresql,
    ownership: "direct",
  },
  {
    name: "processing-interface",
    detail: { ko: "Kafka 수집 · 저장", en: "Kafka collection · storage" },
    icon: SiSpringboot,
    ownership: "adjacent",
  },
];

function FlowNode({ node, locale }: { node: DiagramNode; locale: Locale }) {
  const Icon = node.icon;

  return (
    <article className={`bims-diagram-node bims-diagram-node-${node.ownership}`}>
      <Icon aria-hidden="true" focusable="false" />
      <div>
        <strong>{node.name}</strong>
        <span>{node.detail[locale]}</span>
      </div>
    </article>
  );
}

function FlowConnector({ label }: { label?: string }) {
  return (
    <span className="bims-flow-connector" aria-hidden="true">
      {label && <span>{label}</span>}
    </span>
  );
}

function Flow({ nodes, locale }: { nodes: DiagramNode[]; locale: Locale }) {
  return (
    <div className="bims-diagram-flow">
      {nodes.map((node, index) => (
        <div className="bims-flow-step" key={node.name}>
          <FlowNode node={node} locale={locale} />
          {index < nodes.length - 1 && <FlowConnector />}
        </div>
      ))}
    </div>
  );
}

function LaneHeading({
  index,
  title,
  description,
}: { index: string; title: string; description: string }) {
  return (
    <header className="bims-lane-heading">
      <span>{index}</span>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </header>
  );
}

export function BimsArchitectureDiagram({ locale }: { locale: Locale }) {
  const copy = bimsArchitectureCopy[locale];
  const clientNode: DiagramNode = {
    name: "Client",
    detail: { ko: "관리자 브라우저", en: "Admin browser" },
    icon: HiOutlineUser,
    ownership: "adjacent",
  };
  const vehicleNode: DiagramNode = {
    name: "OBE",
    detail: { ko: "차량 단말 · 외부", en: "Vehicle terminal · external" },
    icon: HiOutlineTruck,
    ownership: "direct",
  };

  return (
    <figure className="bims-architecture" aria-label={copy.figureLabel}>
      <section className="bims-diagram-lane bims-deployment-lane">
        <LaneHeading
          index="01"
          title={copy.deployment.title}
          description={copy.deployment.description}
        />
        <Flow nodes={deploymentNodes} locale={locale} />
        <div className="bims-deployment-handoff">
          <SiDocker aria-hidden="true" focusable="false" />
          <span>{copy.deployment.handoff}</span>
        </div>
      </section>

      <section className="bims-diagram-lane bims-control-lane">
        <LaneHeading index="02" title={copy.control.title} description={copy.control.description} />
        <div className="bims-command-label" aria-hidden="true">
          {copy.control.commandPath}
        </div>
        <div className="bims-command-flow">
          <div className="bims-command-endpoint">
            <FlowNode node={clientNode} locale={locale} />
          </div>
          <FlowConnector />
          <div className="bims-internal-network">
            <div className="bims-network-label">
              <HiOutlineServerStack aria-hidden="true" focusable="false" />
              <span>{copy.control.internalNetwork}</span>
            </div>
            <Flow nodes={internalNodes} locale={locale} />
          </div>
          <FlowConnector />
          <div className="bims-command-endpoint">
            <FlowNode node={vehicleNode} locale={locale} />
          </div>
        </div>
        <div className="bims-result-lane">
          <span aria-hidden="true" />
          <p>{copy.control.resultPath}</p>
        </div>
      </section>

      <section className="bims-diagram-lane bims-support-lane">
        <LaneHeading index="03" title={copy.support.title} description={copy.support.description} />
        <div className="bims-support-grid">
          {supportNodes.map((node) => (
            <FlowNode key={node.name} node={node} locale={locale} />
          ))}
        </div>
        <aside className="bims-retry-note">
          <span className="bims-retry-line" aria-hidden="true" />
          <div>
            <strong>{copy.support.retryTitle}</strong>
            <p>{copy.support.retryDescription}</p>
          </div>
        </aside>
      </section>

      <figcaption className="bims-diagram-legend">
        <span className="bims-legend-item">
          <span
            className="bims-legend-mark bims-legend-node bims-legend-direct"
            aria-hidden="true"
          />
          {copy.legend.direct}
        </span>
        <span className="bims-legend-item">
          <span className="bims-legend-mark bims-legend-node" aria-hidden="true" />
          {copy.legend.adjacent}
        </span>
        <span className="bims-legend-item">
          <span className="bims-legend-mark bims-legend-line" aria-hidden="true" />
          {copy.legend.command}
        </span>
        <span className="bims-legend-item">
          <span
            className="bims-legend-mark bims-legend-line bims-legend-result"
            aria-hidden="true"
          />
          {copy.legend.result}
        </span>
        <span className="bims-legend-item">
          <span
            className="bims-legend-mark bims-legend-line bims-legend-retry"
            aria-hidden="true"
          />
          {copy.legend.retry}
        </span>
      </figcaption>
    </figure>
  );
}
