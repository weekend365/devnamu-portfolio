import type { IconType } from "react-icons";
import {
  HiOutlineBookOpen,
  HiOutlineBuildingOffice2,
  HiOutlineClipboardDocumentList,
  HiOutlineCodeBracketSquare,
  HiOutlineCpuChip,
  HiOutlinePencilSquare,
  HiOutlineQueueList,
  HiOutlineServerStack,
  HiOutlineSquares2X2,
  HiOutlineUser,
} from "react-icons/hi2";
import { SiDocker, SiNextdotjs, SiReactquery } from "react-icons/si";
import type { Locale } from "@/resources";

type ArchitectureCopy = {
  navLabel: string;
  eyebrow: string;
  title: string;
  description: string;
  figureLabel: string;
  hierarchy: {
    title: string;
    description: string;
    handoff: string;
  };
  editing: {
    title: string;
    description: string;
    editorPath: string;
    syncPath: string;
  };
  delivery: {
    title: string;
    description: string;
    noteTitle: string;
    noteDescription: string;
  };
  legend: {
    direct: string;
    adjacent: string;
    hierarchy: string;
    sync: string;
    ops: string;
  };
};

export const kcscArchitectureCopy: Record<Locale, ArchitectureCopy> = {
  ko: {
    navLabel: "시스템 구성",
    eyebrow: "USER SUPPORT SYSTEM",
    title: "계층 탐색과 편집 상태 흐름",
    description:
      "시설물부터 변수까지 이어지는 기준 계층을 다중 패널에서 다루고, 서버 상태와 로컬 편집을 분리해 API로 활용하는 흐름을 정리했습니다.",
    figureLabel: "KCSC 디지털 건설기준 계층 탐색과 편집 상태 구성도",
    hierarchy: {
      title: "기준 계층 탐색",
      description: "시설물부터 변수까지 이어지는 깊은 계층을 한 화면에서 탐색",
      handoff: "다중 패널 기준맵 · 선택 맥락 유지",
    },
    editing: {
      title: "편집과 상태 분리",
      description: "로컬 편집 상태와 서버 상태를 나눠 저장·검증 이후 화면을 동기화",
      editorPath: "유형별 탭 · 본문 · Python 룰 · 변수",
      syncPath: "저장·삭제·검증 후 화면 동기화",
    },
    delivery: {
      title: "활용과 운영",
      description: "표준·사용자 라이브러리와 API Center를 시범운영 배포 흐름에 연결",
      noteTitle: "권한 · 테스트 · 배포",
      noteDescription:
        "역할별 동작과 핵심 회귀 경로를 검증하고 standalone 빌드·Docker·Jenkins로 운영",
    },
    legend: {
      direct: "직접 설계·구현",
      adjacent: "연동·타 담당 구간",
      hierarchy: "계층 하향",
      sync: "상태 동기화",
      ops: "권한·배포",
    },
  },
  en: {
    navLabel: "Architecture",
    eyebrow: "USER SUPPORT SYSTEM",
    title: "Hierarchy exploration and editing-state flow",
    description:
      "A portfolio-level view of navigating a facility-to-variable standards hierarchy in multi-panel editors, then consuming it through APIs while keeping server and local editing state apart.",
    figureLabel: "KCSC digital construction standards hierarchy and editing-state architecture",
    hierarchy: {
      title: "Standards hierarchy",
      description: "Explore a deep facility-to-variable hierarchy in one interface",
      handoff: "Resizable multi-panel map · keep selection context",
    },
    editing: {
      title: "Editing and state separation",
      description: "Split local editing state from server state, then resync after save and validation",
      editorPath: "Type-aware tabs · content · Python rules · variables",
      syncPath: "Resync the interface after save, delete, and validation",
    },
    delivery: {
      title: "Use and operations",
      description: "Connect standard and user libraries plus the API Center to the pilot deployment path",
      noteTitle: "Permissions · tests · deploy",
      noteDescription:
        "Verify role-based behavior and critical regressions, then operate through standalone builds, Docker, and Jenkins",
    },
    legend: {
      direct: "Designed and implemented",
      adjacent: "Integrated or adjacent scope",
      hierarchy: "Hierarchy downstream",
      sync: "State synchronization",
      ops: "Permissions and deployment",
    },
  },
};

type DiagramNode = {
  name: string;
  detail: Record<Locale, string>;
  icon: IconType;
  ownership: "direct" | "adjacent";
};

const hierarchyNodes: DiagramNode[] = [
  {
    name: "Object class",
    detail: { ko: "시설물 · 객체분류", en: "Facility · object class" },
    icon: HiOutlineBuildingOffice2,
    ownership: "direct",
  },
  {
    name: "Review item",
    detail: { ko: "검토항목", en: "Review item" },
    icon: HiOutlineClipboardDocumentList,
    ownership: "direct",
  },
  {
    name: "Review element",
    detail: { ko: "검토요소", en: "Review element" },
    icon: HiOutlineQueueList,
    ownership: "direct",
  },
  {
    name: "Variable",
    detail: { ko: "입출력 · 판정 변수", en: "I/O and decision variables" },
    icon: HiOutlineCpuChip,
    ownership: "direct",
  },
];

const editingNodes: DiagramNode[] = [
  {
    name: "Zustand",
    detail: { ko: "로컬 편집 상태", en: "Local editing state" },
    icon: HiOutlinePencilSquare,
    ownership: "direct",
  },
  {
    name: "TanStack Query",
    detail: { ko: "서버 상태 · query key", en: "Server state · query keys" },
    icon: SiReactquery,
    ownership: "direct",
  },
  {
    name: "Java API",
    detail: { ko: "기준 CRUD", en: "Standards CRUD" },
    icon: HiOutlineServerStack,
    ownership: "adjacent",
  },
];

const deliveryNodes: DiagramNode[] = [
  {
    name: "Standard library",
    detail: { ko: "표준 문서 탐색", en: "Browse source standards" },
    icon: HiOutlineBookOpen,
    ownership: "direct",
  },
  {
    name: "User library",
    detail: { ko: "사용자 기준 편집", en: "Edit user-defined standards" },
    icon: HiOutlineUser,
    ownership: "direct",
  },
  {
    name: "API Center",
    detail: { ko: "요청 실행 · 결과 복사", en: "Run requests · copy results" },
    icon: HiOutlineCodeBracketSquare,
    ownership: "direct",
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

export function KcscArchitectureDiagram({ locale }: { locale: Locale }) {
  const copy = kcscArchitectureCopy[locale];
  const mapNode: DiagramNode = {
    name: "standards-map",
    detail: { ko: "Next.js · Mantine 패널", en: "Next.js · Mantine panels" },
    icon: SiNextdotjs,
    ownership: "direct",
  };
  const opsNode: DiagramNode = {
    name: "Pilot ops",
    detail: { ko: "Docker · Jenkins", en: "Docker · Jenkins" },
    icon: SiDocker,
    ownership: "direct",
  };

  return (
    <figure className="bims-architecture" aria-label={copy.figureLabel}>
      <section className="bims-diagram-lane bims-deployment-lane">
        <LaneHeading
          index="01"
          title={copy.hierarchy.title}
          description={copy.hierarchy.description}
        />
        <Flow nodes={hierarchyNodes} locale={locale} />
        <div className="bims-deployment-handoff">
          <HiOutlineSquares2X2 aria-hidden="true" focusable="false" />
          <span>{copy.hierarchy.handoff}</span>
        </div>
      </section>

      <section className="bims-diagram-lane bims-control-lane">
        <LaneHeading index="02" title={copy.editing.title} description={copy.editing.description} />
        <div className="bims-command-label" aria-hidden="true">
          {copy.editing.editorPath}
        </div>
        <div className="bims-command-flow">
          <div className="bims-command-endpoint">
            <FlowNode node={mapNode} locale={locale} />
          </div>
          <FlowConnector />
          <div className="bims-internal-network">
            <div className="bims-network-label">
              <HiOutlinePencilSquare aria-hidden="true" focusable="false" />
              <span>{copy.editing.title}</span>
            </div>
            <Flow nodes={editingNodes} locale={locale} />
          </div>
          <FlowConnector />
          <div className="bims-command-endpoint">
            <FlowNode node={opsNode} locale={locale} />
          </div>
        </div>
        <div className="bims-result-lane">
          <span aria-hidden="true" />
          <p>{copy.editing.syncPath}</p>
        </div>
      </section>

      <section className="bims-diagram-lane bims-support-lane">
        <LaneHeading index="03" title={copy.delivery.title} description={copy.delivery.description} />
        <div className="bims-support-grid">
          {deliveryNodes.map((node) => (
            <FlowNode key={node.name} node={node} locale={locale} />
          ))}
        </div>
        <aside className="bims-retry-note">
          <span className="bims-retry-line" aria-hidden="true" />
          <div>
            <strong>{copy.delivery.noteTitle}</strong>
            <p>{copy.delivery.noteDescription}</p>
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
          {copy.legend.hierarchy}
        </span>
        <span className="bims-legend-item">
          <span
            className="bims-legend-mark bims-legend-line bims-legend-result"
            aria-hidden="true"
          />
          {copy.legend.sync}
        </span>
        <span className="bims-legend-item">
          <span
            className="bims-legend-mark bims-legend-line bims-legend-retry"
            aria-hidden="true"
          />
          {copy.legend.ops}
        </span>
      </figcaption>
    </figure>
  );
}
