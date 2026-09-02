export type Locale = "ko" | "en";

export type LocalizedText = Record<Locale, string>;

export type Experience = {
  company: LocalizedText;
  role: LocalizedText;
  period: LocalizedText;
  location: LocalizedText;
  projects: LocalizedText[];
  achievements: LocalizedText[];
};

export type ProjectImage = {
  src: string;
  alt: LocalizedText;
  caption: LocalizedText;
  variant: "mobile" | "desktop";
  width?: number;
  height?: number;
};

export type DemoAccess = {
  url: string;
  username: string;
  password: string;
  note: LocalizedText;
};

export type ProjectExternalLink = {
  href: string;
  label: LocalizedText;
  kind: "app-store" | "google-play" | "website";
};

export type Project = {
  slug: string;
  startedAt: string;
  endedAt: string | null;
  locale: Locale[];
  title: LocalizedText;
  technicalName?: string;
  company: LocalizedText;
  role: LocalizedText;
  period: LocalizedText;
  status: LocalizedText;
  summary: LocalizedText;
  problem: LocalizedText;
  decision: LocalizedText;
  outcome: LocalizedText;
  metrics?: {
    value: string;
    label: LocalizedText;
    note?: LocalizedText;
  }[];
  description: LocalizedText[];
  technologies: string[];
  contributions: LocalizedText[];
  challenges: LocalizedText[];
  results: LocalizedText[];
  images: ProjectImage[];
  featured?: boolean;
  repository?: string;
  externalLinks?: ProjectExternalLink[];
  demoAccess?: DemoAccess;
};

const t = (ko: string, en: string): LocalizedText => ({ ko, en });

export const person = {
  brand: "DEVNAMU",
  name: t("남우현", "Nam Woo-hyun"),
  role: t("프론트엔드 중심 풀스택 개발자", "Frontend-focused full-stack developer"),
  email: "skadngus14@naver.com",
  github: "https://github.com/weekend365",
  portfolio: "https://devnamu.com/",
  location: t("인천, 대한민국", "Incheon, South Korea"),
  timeZone: "Asia/Seoul",
  avatar: "/images/profile.webp",
  languages: t("한국어 · 영어", "Korean · English"),
  summary: [
    t(
      "React와 Next.js로 복잡한 도메인을 트리·테이블·다중 패널·지도 기반 업무 UI로 구조화하고 API·관리자·배포까지 연결해 온 3년 이상의 프론트엔드 중심 풀스택 개발자입니다.",
      "I am a frontend-focused full-stack developer with over three years of experience turning complex domains into tree, table, multi-panel, and map-based business UIs while connecting them to APIs, admin tools, and delivery with React and Next.js.",
    ),
    t(
      "TanStack Query와 Zustand로 서버 상태와 화면 상태를 분리하고, NestJS·PostgreSQL 개발 및 Spring Boot·Java API 연동을 통해 화면 뒤의 데이터 흐름까지 함께 설계했습니다.",
      "I separate server and UI state with TanStack Query and Zustand, and have designed data flows across the interface, NestJS and PostgreSQL development, and Spring Boot and Java API integrations.",
    ),
    t(
      "공공기관 납품 GIS 시스템과 디지털 건설기준 시범운영 시스템을 개발하며 권한·인증 예외·파일 처리·테스트·배포 환경까지 운영 조건을 함께 고려해 왔습니다.",
      "Through a public-sector GIS delivery and a digital construction standards pilot, I have considered operational requirements including permissions, authentication edge cases, file handling, testing, and delivery environments.",
    ),
  ],
} as const;

export const experiences: Experience[] = [
  {
    company: t("씨엔넷", "C&Net"),
    role: t(
      "개발부 · 주임 · 풀스택 개발자(프론트엔드 주력)",
      "Associate · Full-stack Developer (Frontend-focused)",
    ),
    period: t("2025.12 – 재직중", "Dec 2025 – Present"),
    location: t("서울", "Seoul"),
    projects: [
      t(
        "KCSC 디지털 건설기준 사용자 지원 시스템 프론트엔드 개발·고도화",
        "KCSC digital construction standards pilot support system",
      ),
      t(
        "BIMS(Bus Information Management System) 웹·앱 개발",
        "BIMS web and application development",
      ),
    ],
    achievements: [
      t(
        "KCSC 디지털 건설기준 사용자 지원 시스템에서 표준문서·검토·변수 관리 프론트엔드를 개발·고도화했습니다.",
        "Built and advanced the KCSC digital construction standards frontend for documents, reviews, and variables.",
      ),
      t(
        "시설물–검토항목–검토요소–변수의 계층을 트리·테이블·다중 패널과 유형별 편집 흐름으로 구조화했습니다.",
        "Structured the facility–review item–review element–variable hierarchy with trees, tables, multi-panel layouts, and type-aware editing flows.",
      ),
      t(
        "TanStack Query와 Zustand를 활용해 Java API 서버 상태와 로컬 편집·화면 상태를 분리하고 저장·삭제·검증 이후 화면을 동기화했습니다.",
        "Separated Java API server state from local editing and UI state with TanStack Query and Zustand, synchronizing screens after save, delete, and validation operations.",
      ),
      t(
        "BIMS 관리자 웹에서 버스·노선·운영 데이터 화면을 개발하고 Spring Boot API와 연동했습니다.",
        "Built BIMS admin screens for bus, route, and operations data, integrated with Spring Boot APIs.",
      ),
      t(
        "Jest와 React Testing Library, Docker·Jenkins 기반 배포 구조를 적용해 주요 업무 화면의 회귀 검증과 운영 배포 흐름을 지원했습니다.",
        "Supported regression checks for key business screens and the delivery flow with Jest, React Testing Library, and Docker and Jenkins-based deployment.",
      ),
    ],
  },
  {
    company: t("겟앤쇼", "Get&Show"),
    role: t("개발부 · 주임 · 풀스택 개발자", "Associate · Full-stack Developer"),
    period: t("2025.05 – 2025.12 · 8개월", "May 2025 – Dec 2025 · 8 months"),
    location: t("서울", "Seoul"),
    projects: [t("자사 구독 서비스 웹·앱 플랫폼", "In-house subscription web and app platform")],
    achievements: [
      t(
        "Next.js App Router와 TypeScript로 사용자 인증, 상품·서비스 정보와 구독 상태를 연결하는 사용자 화면을 개발했습니다.",
        "Built user screens connecting authentication, product and service information, and subscription state with Next.js App Router and TypeScript.",
      ),
      t(
        "서버 렌더링과 메타데이터 구성을 적용해 SSR·SEO 기반 페이지 구조를 구현했습니다.",
        "Implemented an SSR and SEO-oriented page structure with server rendering and metadata configuration.",
      ),
      t(
        "NestJS로 인증·상품·구독 API와 비즈니스 로직을 개발하고 PostgreSQL 데이터 모델링과 테이블 설계에 참여했습니다.",
        "Developed authentication, product, and subscription APIs and business logic with NestJS, and participated in PostgreSQL modeling and table design.",
      ),
      t(
        "프론트엔드 화면, API와 데이터베이스 사이의 처리 흐름을 정리하고 공통 연동 구조를 개선했습니다.",
        "Clarified the processing flow between frontend screens, APIs, and the database and improved the shared integration structure.",
      ),
      t(
        "Tailwind CSS 기반 반응형 UI와 Docker 개발 환경을 구성했습니다.",
        "Built responsive UI with Tailwind CSS and a Docker-based development environment.",
      ),
    ],
  },
  {
    company: t("케이엠아이에스㈜", "KMIS Co., Ltd."),
    role: t("개발부 · 주임 · 프론트엔드 개발자", "Associate · Frontend Developer"),
    period: t("2023.05 – 2025.01 · 1년 9개월", "May 2023 – Jan 2025 · 1 year 9 months"),
    location: t("인천", "Incheon"),
    projects: [t("GIS 기반 시설물 조회 시스템 웹앱", "GIS-based facility lookup web application")],
    achievements: [
      t(
        "React·Next.js·TypeScript 기반 GIS 웹 애플리케이션의 시설물 조회와 상세 정보 화면을 담당했습니다.",
        "Owned facility lookup and detail screens for a GIS web application built with React, Next.js, and TypeScript.",
      ),
      t(
        "위치 데이터와 지도 마커·팝업·목록·상세 패널을 연결해 지도에서 시설물을 탐색하는 흐름을 구현했습니다.",
        "Connected location data with map markers, popups, lists, and detail panels to implement a facility exploration flow.",
      ),
      t(
        "API 응답 데이터를 지도와 화면 구조에 맞게 변환하고 시설물 선택 상태가 각 화면에 일관되게 반영되도록 구성했습니다.",
        "Transformed API responses for the map and screen models and kept facility selection state consistent across views.",
      ),
      t(
        "Tailwind CSS 기반 반응형 UI와 관리 화면을 개발하고 기능 단위 이슈 대응에 참여했습니다.",
        "Built responsive UI and management screens with Tailwind CSS and participated in feature-level issue resolution.",
      ),
      t(
        "한국수자원공사에 납품되어 실제 업무 환경에서 사용되는 시스템의 개발과 운영 환경 적용에 참여했습니다.",
        "Contributed to the development and operational rollout of a system delivered to Korea Water Resources Corporation.",
      ),
    ],
  },
];

export const education = [
  {
    institution: t("한국방송통신대학교", "Korea National Open University"),
    program: t("컴퓨터과학과 · 편입/졸업", "Computer Science · Transfer/Graduated"),
    period: "2023.01 – 2025.08",
  },
  {
    institution: t("학점은행제", "Academic Credit Bank System"),
    program: t(
      "컴퓨터네트워크 · 수료 · 2·3년제 인정학력",
      "Computer Networks · Completed · Associate-degree-equivalent credit",
    ),
    period: "2021.04 – 2023.01",
  },
  {
    institution: t("인천효성고등학교", "Incheon Hyosung High School"),
    program: t("이과계열 · 졸업", "Natural Sciences · Graduated"),
    period: "2012.03 – 2015.01",
  },
];

export const training = [
  {
    institution: t("이젠아카데미컴퓨터학원", "Ezen Academy Computer Institute"),
    program: t(
      "자바(JAVA) 웹개발 프로그래밍 · 800시간",
      "Java Web Development Programming · 800 hours",
    ),
    period: "2022.09.03 – 2023.01.26",
  },
];

export const certifications = [
  {
    name: t("정보처리기사", "Engineer Information Processing"),
    detail: t("2025.09 · 최종합격 · 한국산업인력공단", "Sep 2025 · Passed · HRD Korea"),
  },
  {
    name: t("SQL개발자(SQLD)", "SQL Developer (SQLD)"),
    detail: t("2024.09 · 최종합격 · 한국데이터산업진흥원", "Sep 2024 · Passed · Korea Data Agency"),
  },
  {
    name: t("네트워크관리사 2급", "Network Administrator Level 2"),
    detail: t("2021.12 · 최종합격 · 한국정보통신자격협회", "Dec 2021 · Passed · ICQA"),
  },
  { name: t("TOEIC", "TOEIC"), detail: t("2025.10 · 835점", "Oct 2025 · 835") },
  {
    name: t("TOEIC Speaking Test", "TOEIC Speaking Test"),
    detail: t("2025.09 · 120점 · Intermediate Mid 2", "Sep 2025 · 120 · Intermediate Mid 2"),
  },
];

export const skillCategories = [
  {
    title: t("Frontend", "Frontend"),
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Mantine",
    ],
  },
  {
    title: t("상태·데이터", "State & Data"),
    skills: ["TanStack Query", "Redux", "Zustand", "React Hook Form", "Zod"],
  },
  {
    title: t("Backend", "Backend"),
    skills: ["NestJS", "Node.js", "Spring Boot", "Java", "REST API"],
  },
  {
    title: t("Mobile", "Mobile"),
    skills: ["React Native", "Expo", "Expo Router", "ML Kit"],
  },
  {
    title: t("Database", "Database"),
    skills: ["PostgreSQL", "MySQL", "Prisma"],
  },
  {
    title: t("Testing", "Testing"),
    skills: ["Jest", "React Testing Library", "Vitest"],
  },
  {
    title: t("DevOps · Tools", "DevOps & Tools"),
    skills: ["Docker", "Jenkins", "Railway", "EAS", "Sentry", "Git"],
  },
];

export const interests = [
  t(
    "서비스 구조와 데이터 흐름을 이해한 프론트엔드·백엔드 연결",
    "Connecting frontend and backend through a clear understanding of service architecture and data flow",
  ),
  t(
    "사용자 경험, 서비스 안정성, 유지보수성을 함께 고려하는 개발",
    "Development that balances user experience, service reliability, and maintainability",
  ),
  t(
    "AI 개발 도구를 활용한 코드 분석, 리팩터링, 문서화와 생산성 향상",
    "Using AI development tools for code analysis, refactoring, documentation, and productivity",
  ),
];

export const projects: Project[] = [
  {
    slug: "jango",
    startedAt: "2026",
    endedAt: null,
    locale: ["ko", "en"],
    title: t("장고야 부탁해", "Jango"),
    technicalName: "ExpiryMate",
    company: t("개인 프로젝트", "Personal Project"),
    role: t(
      "제품 설계 · 모바일 · 백엔드 · 관리자 · 인프라",
      "Product · Mobile · Backend · Admin · Infrastructure",
    ),
    period: t(
      "2026 · App Store·Google Play 출시 · v1.4.0",
      "2026 · App Store and Google Play launch · v1.4.0",
    ),
    status: t("양대 스토어 정식 출시 · v1.4.0", "Live on both stores · v1.4.0"),
    summary: t(
      "냉장고 식재료와 생활용품의 유통기한을 관리하고, 임박 식재료를 우선 활용하는 AI 레시피를 추천하는 서비스입니다.",
      "An ingredient and household inventory service that tracks expiry dates and recommends AI-generated recipes prioritizing items that expire soon.",
    ),
    problem: t(
      "유통기한이 임박한 식재료를 놓치고, 기록·추천·공유가 서로 끊겨 있었습니다.",
      "People missed expiring ingredients because tracking, recommendations, and shared spaces lived in separate flows.",
    ),
    decision: t(
      "네이티브 스캔·결제·광고 기능은 EAS와 양 플랫폼 release build로 검증하고, 모바일·API·관리자의 계약과 비용·권한 정책은 공유 스키마와 서버 검증으로 일치시켰습니다.",
      "Validated native scanning, billing, and advertising in EAS release builds on both platforms, while aligning mobile, API, and admin contracts, cost limits, and authorization through shared schemas and server-side verification.",
    ),
    outcome: t(
      "1.4.0을 App Store와 Google Play에 정식 출시했습니다. 공유 냉장고, 사진 일괄 등록, 개인 플러스와 구매 복원까지 Railway 운영 환경에 연결했고 147개 파일의 885개 자동 테스트를 통과했습니다.",
      "Released version 1.4.0 on both the App Store and Google Play. Shared refrigerators, bulk photo intake, Jango Plus, and purchase restoration run against live Railway services, with 885 automated tests across 147 files passing.",
    ),
    metrics: [
      {
        value: "2 Stores",
        label: t("iOS·Android 정식 출시", "iOS and Android launched"),
        note: t("App Store · Google Play", "App Store · Google Play"),
      },
      {
        value: "885",
        label: t("자동 테스트 통과", "Automated tests passed"),
        note: t(
          "Shared·Mobile·API 147개 테스트 파일",
          "147 test files across Shared, Mobile, and API",
        ),
      },
      {
        value: "Live",
        label: t("API/Admin Railway 운영", "API/Admin live on Railway"),
      },
    ],
    description: [
      t(
        "장고야 부탁해는 Expo 모바일 앱, NestJS REST API, Next.js 운영 관리자, 공유 계약 패키지를 하나의 pnpm 모노레포로 구성해 양대 스토어에 출시한 한국어 우선 제품입니다.",
        "Jango is a Korean-first product released on both major stores, organized as a pnpm monorepo containing an Expo mobile app, NestJS REST API, Next.js operations admin, and shared contracts package.",
      ),
      t(
        "기술 패키지와 번들 ID에는 기존 ExpiryMate namespace가 남아 있으며, 사용자에게 보이는 브랜드는 장고야 부탁해입니다.",
        "The technical packages and bundle IDs retain the legacy ExpiryMate namespace, while the user-facing brand is Jango.",
      ),
    ],
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "NestJS",
      "Next.js",
      "PostgreSQL",
      "Prisma",
      "OpenAI",
      "Zod",
      "TanStack Query",
      "Zustand",
      "Docker",
      "Railway",
      "EAS",
      "Sentry",
    ],
    contributions: [
      t(
        "Expo Router, TanStack Query, Zustand, React Hook Form, Zod로 인증·재고·추천·공유 공간·설정 흐름을 구성했습니다.",
        "Built authentication, inventory, recommendation, shared-space, and settings flows with Expo Router, TanStack Query, Zustand, React Hook Form, and Zod.",
      ),
      t(
        "ML Kit 바코드·유통기한 OCR과 OpenAI Vision 기반 영수증·냉장고 사진 일괄 등록을 신뢰도별 빠른 저장·수정 흐름으로 연결했습니다.",
        "Connected ML Kit barcode and expiry OCR plus OpenAI Vision receipt and refrigerator-photo intake to confidence-aware quick-save and correction flows.",
      ),
      t(
        "NestJS, Prisma, PostgreSQL로 제품·재고·공간·추천·알림·인증·개인정보·수익화 API와 소유자·역할 기반 권한을 구현했습니다.",
        "Implemented product, inventory, space, recommendation, notification, authentication, privacy, and monetization APIs with owner- and role-based authorization using NestJS, Prisma, and PostgreSQL.",
      ),
      t(
        "OpenAI Responses API 추천에 임박 재료 우선 전략, 식단·알레르기 검증, semantic repair, 모델 롤아웃과 호출별 비용·지연 관측을 적용했습니다.",
        "Added expiring-first strategies, dietary and allergy validation, semantic repair, model rollout controls, and per-call cost and latency observability to recommendations built on the OpenAI Responses API.",
      ),
      t(
        "개인·가족·매장 공간, owner/manager/member 권한, 이메일·일회용 코드 초대 구조를 구현했습니다.",
        "Implemented personal, household, and store spaces with owner/manager/member roles and email or one-time-code invitations.",
      ),
      t(
        "개인 플러스 월간·연간 구독, App Store·Google Play 구매 검증과 복원, 서버 알림, 비맞춤형 보상 광고의 SSV 보상을 구현했습니다.",
        "Implemented monthly and annual Jango Plus subscriptions, App Store and Google Play purchase verification and restoration, server notifications, and SSV-backed rewards for non-personalized ads.",
      ),
      t(
        "요리 완료 후 재고 차감·되돌리기, 조리 단계 타이머, 부족하거나 소진한 재료를 잇는 장보기·제휴 흐름을 구현했습니다.",
        "Implemented post-cooking inventory deduction and undo, step timers, and shopping and affiliate flows for missing or depleted ingredients.",
      ),
      t(
        "Next.js 관리자에서 제품·재고·문의와 AI 비용·수익 지표를 관리하고 Railway, Docker, EAS, Sentry, Resend 기반 운영 환경을 구성했습니다.",
        "Built Next.js administration for products, inventory, support, and AI cost and revenue metrics, and configured Railway, Docker, EAS, Sentry, and Resend operations.",
      ),
    ],
    challenges: [
      t(
        "Expo Go에서 동작하지 않는 스캔·결제·광고 기능을 iOS와 Android의 dev·EAS release build와 실기기에서 검증해야 했습니다.",
        "Native scanning, billing, and advertising unavailable in Expo Go required dev and EAS release builds plus real-device validation on iOS and Android.",
      ),
      t(
        "모바일, API, 관리자 사이의 계약을 공유하면서도 클라이언트에 안전한 타입과 schema만 노출해야 했습니다.",
        "Shared contracts across mobile, API, and admin had to expose only client-safe types and schemas.",
      ),
      t(
        "AI 추천·사진 처리·스토어 결제·광고·공유 초대의 개인정보, 비용 한도, 구매 상태를 실제 제품 동작과 스토어 선언에 일치시켜야 했습니다.",
        "Privacy, cost limits, and purchase state for AI recommendations, photo processing, store billing, ads, and invitations had to remain consistent with product behavior and store declarations.",
      ),
    ],
    results: [
      t(
        "1.4.0 앱을 App Store와 Google Play에 정식 출시해 iOS와 Android에서 운영하고 있습니다.",
        "Version 1.4.0 is live on both the App Store and Google Play for iOS and Android.",
      ),
      t(
        "Shared·Mobile·API 147개 테스트 파일의 885개 테스트를 통과했고 lint·typecheck·환경 정합성 검사를 운영 기준으로 유지합니다.",
        "The project passes 885 tests across 147 Shared, Mobile, and API test files, with linting, type checking, and environment parity checks maintained as release gates.",
      ),
      t(
        "Railway의 API/Admin 운영 환경에 공유 공간, 사진 AI, 개인 플러스 결제·복원, 폐기 예방 지표와 수익 관측을 연결했습니다.",
        "Live API and admin services on Railway support shared spaces, photo AI, Jango Plus billing and restoration, waste-prevention insights, and revenue observability.",
      ),
    ],
    images: [
      {
        src: "/images/projects/jango/01.png",
        alt: t(
          "주간 장고 브리핑, 오늘의 요리 추천과 유통기한 현황을 한눈에 보여주는 장고야 부탁해 홈 화면",
          "Jango home screen showing the weekly briefing, today's recipe recommendation, and expiry overview at a glance",
        ),
        caption: t(
          "유통기한부터 오늘 메뉴까지 한눈에 보는 홈",
          "A home overview spanning expiry dates and today's menu",
        ),
        variant: "mobile",
        width: 1242,
        height: 2688,
      },
      {
        src: "/images/projects/jango/02.png",
        alt: t(
          "임박 재료 우선 조건으로 고른 세 가지 AI 요리와 즐겨찾기를 보여주는 장고야 부탁해 추천 화면",
          "Jango recommendation screen showing three AI-selected dishes prioritized by expiring ingredients and recipe favorites",
        ),
        caption: t(
          "남은 재료를 우선 활용하는 오늘의 AI 메뉴 추천",
          "AI menu recommendations that prioritize ingredients already on hand",
        ),
        variant: "mobile",
        width: 1242,
        height: 2688,
      },
      {
        src: "/images/projects/jango/03.png",
        alt: t(
          "조리 순서, 완료 상태와 백그라운드 타이머를 함께 보여주는 장고야 부탁해 요리 화면",
          "Jango cooking screen showing step progress, completion state, and a timer that continues in the background",
        ),
        caption: t(
          "순서와 타이머로 차근차근 이어가는 요리",
          "Step-by-step cooking supported by a persistent timer",
        ),
        variant: "mobile",
        width: 1242,
        height: 2688,
      },
      {
        src: "/images/projects/jango/04.png",
        alt: t(
          "사진 일괄 등록, 바코드와 직접 입력 중 재료 등록 방식을 고르는 장고야 부탁해 화면",
          "Jango ingredient-entry screen for choosing bulk photo intake, barcode scanning, or manual input",
        ),
        caption: t(
          "사진 한 장으로 여러 재료를 한 번에 등록",
          "Adding multiple ingredients at once from a single photo",
        ),
        variant: "mobile",
        width: 1242,
        height: 2688,
      },
      {
        src: "/images/projects/jango/05.png",
        alt: t(
          "만료·임박·여유 상태와 보관 위치로 재료를 검색하고 관리하는 장고야 부탁해 보관함 화면",
          "Jango inventory screen for searching and managing ingredients by expired, expiring, safe, and storage-location filters",
        ),
        caption: t(
          "임박한 재료를 놓치기 전에 정리하는 보관함",
          "An inventory organized to catch expiring ingredients before they are missed",
        ),
        variant: "mobile",
        width: 1242,
        height: 2688,
      },
      {
        src: "/images/projects/jango/06.png",
        alt: t(
          "공유 냉장고 구성원, 공간별 유통기한 알림과 초대 기능을 관리하는 장고야 부탁해 화면",
          "Jango shared-refrigerator screen for managing members, per-space expiry alerts, and invitations",
        ),
        caption: t(
          "구성원 초대부터 공유 공간 알림까지 한곳에서 관리",
          "Managing invitations and shared-space alerts in one place",
        ),
        variant: "mobile",
        width: 1242,
        height: 2688,
      },
    ],
    featured: true,
    repository: "https://github.com/weekend365/ExpiryMate",
    externalLinks: [
      {
        href: "https://apps.apple.com/kr/app/%EC%9E%A5%EA%B3%A0%EC%95%BC-%EB%B6%80%ED%83%81%ED%95%B4/id6793375883",
        label: t("App Store에서 보기", "View on the App Store"),
        kind: "app-store",
      },
      {
        href: "https://play.google.com/store/apps/details?id=com.expirymate.mobile",
        label: t("Google Play에서 보기", "View on Google Play"),
        kind: "google-play",
      },
    ],
  },
  {
    slug: "kcsc",
    startedAt: "2025-12",
    endedAt: null,
    locale: ["ko", "en"],
    title: t(
      "KCSC 디지털 건설기준 사용자 지원 시스템",
      "KCSC Digital Construction Standards Pilot Support System",
    ),
    company: t("씨엔넷", "C&Net"),
    role: t("프론트엔드 개발·UX 고도화", "Frontend Development & UX Enhancement"),
    period: t("2025.12 – 재직중", "Dec 2025 – Present"),
    status: t("시범운영 · 2026.08 기준", "Pilot operation · Aug 2026"),
    summary: t(
      "KDS·KCS 디지털 건설기준을 시설물–검토항목–검토요소–변수의 계층으로 탐색하고, 사용자 기준을 편집해 API로 활용하도록 지원하는 시범운영 플랫폼입니다.",
      "A pilot platform for navigating KDS and KCS digital construction standards through facility, review-item, review-element, and variable hierarchies, then adapting and consuming them through APIs.",
    ),
    problem: t(
      "시설물부터 변수까지 이어지는 깊은 기준 데이터를 다루면서 현재 선택과 편집 맥락을 잃기 쉬웠습니다.",
      "Deep standards data from facilities to variables made it easy to lose the current selection and editing context.",
    ),
    decision: t(
      "다중 패널 기준맵으로 계층 맥락을 유지하고, TanStack Query의 서버 상태와 Zustand의 로컬 편집 상태를 분리했습니다.",
      "Preserved hierarchical context through a multi-panel standards map and separated TanStack Query server state from Zustand local editing state.",
    ),
    outcome: t(
      "표준·사용자 라이브러리, API Center, 지원 게시판이 실제 시범운영 사이트에서 함께 동작하도록 고도화했습니다.",
      "Advanced the live pilot so standard and user libraries, the API Center, and support boards work as one operational system.",
    ),
    description: [
      t(
        "디지털 건설기준 활용기술의 사용성을 높이기 위해 별도로 운영되는 사용자 지원 시스템입니다. 2026년 8월 현재 관계전문가 피드백을 위한 시범운영 단계이며, 자동검토 항목과 배포 자료를 지속적으로 확장하고 있습니다.",
        "This independently operated support system makes digital construction standards easier to use. As of August 2026, it is in pilot operation for expert feedback while its automated review coverage and distributed resources continue to expand.",
      ),
      t(
        "표준 라이브러리와 사용자 라이브러리, 사용자 건설기준 작성, API 탐색·실행, 활용 SW·매뉴얼 다운로드, 공지·자료·Q&A·건의 게시판을 하나의 흐름으로 연결합니다.",
        "It connects the standard library, user libraries, user-authored standards, API exploration and execution, software and manual downloads, and support boards in one workflow.",
      ),
      t(
        "프런트엔드에서는 복잡한 건설기준 데이터를 잃지 않고 탐색할 수 있도록 다중 패널 편집 도구, 계층 검색과 빠른 이동, 유형별 상세 편집, 권한별 동작과 외부 연동을 구현했습니다.",
        "On the frontend, I implemented multi-panel editing, hierarchical search and direct navigation, type-aware detail editing, role-based behavior, and external integrations so users can work with dense standards data without losing context.",
      ),
    ],
    technologies: [
      "Next.js 14",
      "React 18",
      "TypeScript",
      "Mantine",
      "TanStack Query",
      "Zustand",
      "next-intl",
      "TipTap",
      "Jest",
      "React Testing Library",
      "Docker",
      "Jenkins",
    ],
    contributions: [
      t(
        "객체분류, 검토항목, 검토요소와 상세 편집기를 연결하는 다중 패널 가변형 기준맵 도구와 포인터 기반 리사이저를 구현했습니다.",
        "Implemented a resizable multi-panel standards-map tool connecting object classifications, review items, review elements, and a detail editor.",
      ),
      t(
        "트리 검색, 선택 상태, 하위 노드 CRUD, ID 빠른 이동과 공간정보 조회를 연결해 깊은 계층에서도 현재 작업 위치를 유지하도록 구성했습니다.",
        "Connected tree search, selection state, child-node CRUD, direct ID navigation, and spatial information so users retain context in deep hierarchies.",
      ),
      t(
        "건설기준 유형에 따라 본문, Python 룰, 입출력변수와 판정변수 탭을 전환하고 선택값·상위변수·관리변수 편집 흐름을 구현했습니다.",
        "Built type-aware tabs for content, Python rules, input/output variables, and decision variables, including selectable values and parent or management-variable editing.",
      ),
      t(
        "원본 기준과 사용자 정의 기준을 구분해 사용자 코드, 변경 본문과 초기값을 조회·편집하고 외부 화면에서도 같은 데이터 규칙을 유지했습니다.",
        "Separated source and user-defined standards, enabling user codes, edited content, and initial values to be viewed and maintained consistently in embedded experiences.",
      ),
      t(
        "API Center에 카테고리 탐색, 절대 요청 URL, 요청 본문 사전 입력, 파일 파라미터, 실행 결과와 복사 기능을 구성하고 관리자 권한별 동작을 분리했습니다.",
        "Enhanced the API Center with category navigation, absolute request URLs, request-body prefilling, file parameters, executable responses, copy actions, and admin-only controls.",
      ),
      t(
        "TanStack Query와 기능별 query key, 커스텀 fetch 계층을 사용해 Java 백엔드 CRUD 상태와 저장·삭제·검증 이후 화면 동기화를 관리했습니다.",
        "Used TanStack Query, feature-scoped query keys, and custom fetch utilities to synchronize Java backend CRUD state after save, delete, and validation operations.",
      ),
      t(
        "Jest와 React Testing Library로 사용자 기준 매핑, 관리변수 가시성, 권한, 트리와 편집 도구의 핵심 회귀 경로를 검증했습니다.",
        "Added Jest and React Testing Library coverage for user-standard mapping, management-variable visibility, permissions, trees, and critical editor regressions.",
      ),
    ],
    challenges: [
      t(
        "시설물부터 변수까지 이어지는 깊은 계층을 한 화면에 보여주면서도 현재 선택과 편집 맥락을 잃지 않도록 정보 밀도와 패널 크기를 조율해야 했습니다.",
        "The interface had to expose a deep facility-to-variable hierarchy without losing the current selection or editing context, requiring careful control of information density and panel sizing.",
      ),
      t(
        "정성·정량·판정 유형마다 노출되는 탭과 입력 규칙이 달라, 유형 전환 중에도 기준 코드와 사용자 입력을 안전하게 보존해야 했습니다.",
        "Qualitative, quantitative, and decision standards expose different tabs and rules, so type changes had to preserve the correct standard code and user input.",
      ),
      t(
        "역할별 권한, 쿠키 기반 인증, 외부 WebView·iframe 소비자와 Java API 응답 규약을 하나의 예측 가능한 화면 흐름으로 통합해야 했습니다.",
        "Role permissions, cookie-based authentication, embedded WebView and iframe consumers, and Java API contracts had to behave as one predictable interface.",
      ),
    ],
    results: [
      t(
        "2026년 8월 기준 실제 사이트에서 표준·사용자 라이브러리, API Center, 활용 SW·매뉴얼과 지원 게시판이 시범운영되고 있습니다.",
        "As of August 2026, the live pilot provides standard and user libraries, the API Center, software and manuals, and support boards.",
      ),
      t(
        "기능별 서버 상태와 로컬 편집 상태를 분리하고 핵심 변환·권한 로직에 자동화 테스트를 더해 고도화 과정의 회귀 경로를 관리했습니다.",
        "Separated feature-scoped server state from local editing state and added automated coverage for critical transforms and permissions to manage regressions during iteration.",
      ),
      t(
        "Next.js standalone 빌드, Docker 이미지와 Jenkins 파이프라인에 맞는 운영 구조를 유지해 개발·운영 환경의 배포 흐름을 지원했습니다.",
        "Maintained an operational structure compatible with Next.js standalone builds, Docker images, and the Jenkins deployment pipeline.",
      ),
    ],
    images: [],
  },
  {
    slug: "bims",
    startedAt: "2025-12",
    endedAt: null,
    locale: ["ko", "en"],
    title: t("BIMS 버스 정보 관리 시스템", "BIMS Bus Information Management System"),
    company: t("씨엔넷", "C&Net"),
    role: t("풀스택 개발", "Full-stack Development"),
    period: t("2025.12 – 재직중", "Dec 2025 – Present"),
    status: t("개발중", "In Development"),
    summary: t(
      "관리자가 버스, 노선과 운영 데이터를 정확하게 조회·수정·관리할 수 있는 웹 애플리케이션입니다.",
      "A web application for administrators to reliably view, update, and manage bus, route, and operational data.",
    ),
    problem: t(
      "버스·노선·운영 이벤트가 흩어져 있어 관리자가 업무 순서대로 데이터를 확인하기 어려웠습니다.",
      "Bus, route, and operational events were spread across views, making it difficult for administrators to work in sequence.",
    ),
    decision: t(
      "API 응답을 화면 모델로 변환해 지도·테이블·상세 화면의 조회와 수정 상태를 하나의 관리 업무 흐름으로 통일했습니다.",
      "Translated API responses into screen models so map, table, and detail views share one consistent administration workflow for viewing and editing.",
    ),
    outcome: t(
      "Next.js 관리자 화면과 Spring Boot API를 연결해 버스·노선·운영 데이터의 조회·수정 흐름을 구현하고, 지도 관제·운영 대시보드·접속 이력 화면으로 업무 범위를 확장했습니다.",
      "Connected the Next.js admin interface to Spring Boot APIs for bus, route, and operations workflows, extending the scope to map monitoring, operations dashboards, and access history.",
    ),
    description: [
      t(
        "Next.js 관리자 웹과 Spring Boot API를 연결하고 교통 관리 업무 흐름을 화면에 반영했습니다.",
        "Connected a Next.js administration frontend to Spring Boot APIs and translated transportation workflows into the interface.",
      ),
      t(
        "운영 화면과 실데이터는 공개하지 않고, 배포 파이프라인과 비동기 차량 제어 구조를 다이어그램과 사례로 정리했습니다.",
        "Instead of public operations screens, the case study documents the deployment pipeline and asynchronous vehicle-control architecture.",
      ),
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Spring Boot",
      "PostgreSQL",
      "Tailwind CSS",
      "Mantine",
      "Git",
    ],
    contributions: [
      t(
        "버스·노선·운영 데이터를 조회하고 관리하는 Next.js 기반 관리자 화면을 개발하고 Spring Boot API와 연동했습니다.",
        "Built Next.js admin screens for viewing and managing bus, route, and operations data and integrated them with Spring Boot APIs.",
      ),
      t(
        "버스 위치와 운행 이벤트를 지도에서 확인하는 모니터링 화면과 운행·돌발·위반 현황 대시보드를 구현했습니다.",
        "Implemented a monitoring screen for bus locations and operation events on a map, along with dashboards for operations, incidents, and violations.",
      ),
      t(
        "API 요청·응답 데이터를 화면 모델로 변환하고 교통 관리 업무 흐름을 테이블·지도·상세 화면에 반영했습니다.",
        "Transformed API request and response data into screen models and reflected transportation workflows in table, map, and detail views.",
      ),
      t(
        "접속 추이, 로그인 이력과 관리자 권한을 확인하는 운영 화면을 구현했습니다.",
        "Implemented operations screens for access trends, login history, and administrator permissions.",
      ),
      t(
        "Mantine과 Tailwind CSS 기반 공통 UI를 적용하고 Git 기반 코드 리뷰와 이슈 대응에 참여했습니다.",
        "Applied shared UI built with Mantine and Tailwind CSS and participated in Git-based code reviews and issue resolution.",
      ),
    ],
    challenges: [
      t(
        "버스·노선·운영 이벤트가 서로 다른 화면과 API에 흩어져 있어 관리자가 업무 순서대로 확인할 수 있는 화면 흐름으로 묶어야 했습니다.",
        "Bus, route, and operational events were spread across different views and APIs, so they had to be connected into a workflow administrators could follow.",
      ),
      t(
        "지도·테이블·상세 화면마다 API 데이터 구조가 달라 화면 모델로 변환하면서 조회·수정 상태를 일관되게 유지해야 했습니다.",
        "Map, table, and detail views required different API data shapes, so screen models had to preserve consistent view and edit state.",
      ),
    ],
    results: [
      t(
        "버스·노선·운영 데이터의 조회·수정 흐름과 지도 관제, 운영 대시보드, 접속 이력 화면을 개발 중인 관리자 시스템에 반영했습니다.",
        "Added bus, route, and operations workflows, map monitoring, operations dashboards, and access history screens to the admin system under development.",
      ),
      t(
        "민감한 운영 화면은 공개하지 않고, 배포 파이프라인과 비동기 차량 제어 흐름을 다이어그램으로 정리했습니다.",
        "Kept sensitive operations screens private and documented the deployment pipeline and asynchronous vehicle-control flow as a diagram.",
      ),
    ],
    images: [],
  },
  {
    slug: "subscription-platform",
    startedAt: "2025-05",
    endedAt: "2025-12",
    locale: ["ko", "en"],
    title: t("구독 서비스 웹·앱 플랫폼", "Subscription Web & App Platform"),
    company: t("겟앤쇼", "Get&Show"),
    role: t("풀스택 개발", "Full-stack Development"),
    period: t("2025.05 – 2025.12", "May 2025 – Dec 2025"),
    status: t("개발 완료", "Development Completed"),
    summary: t(
      "사용자 인증, 구독, 상품·서비스 정보를 다루는 자사 구독 서비스 플랫폼입니다.",
      "An in-house subscription platform covering authentication, subscriptions, products, and service information.",
    ),
    problem: t(
      "인증·상품·구독 상태가 연결된 하나의 사용자 여정을 만들어야 했습니다.",
      "Authentication, products, and subscription state needed to behave as one coherent user journey.",
    ),
    decision: t(
      "Next.js 화면, NestJS API와 PostgreSQL 모델의 책임을 나누고 인증·상품·구독 상태를 하나의 데이터 흐름으로 연결했습니다.",
      "Separated responsibilities across Next.js screens, NestJS APIs, and PostgreSQL models while connecting authentication, products, and subscriptions into one data flow.",
    ),
    outcome: t(
      "React·Next.js 화면과 NestJS API, PostgreSQL 모델을 연결해 구독 서비스의 핵심 흐름을 구현했습니다.",
      "Connected React and Next.js screens with NestJS APIs and PostgreSQL models to implement the core subscription flow.",
    ),
    description: [
      t(
        "자사 구독 서비스의 사용자 화면과 관리 기능을 개발하며 프론트엔드 화면부터 NestJS API와 PostgreSQL 데이터 설계까지 서비스 전반에 참여했습니다.",
        "Worked across the in-house subscription service, from user screens and administration to NestJS APIs and PostgreSQL data design.",
      ),
      t(
        "인증·상품·구독 상태가 하나의 사용자 여정으로 이어지도록 화면과 API의 데이터 흐름을 정리했습니다.",
        "Clarified the data flow between screens and APIs so authentication, product information, and subscription state form one user journey.",
      ),
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "NestJS",
      "Node.js",
      "PostgreSQL",
      "Tailwind CSS",
      "Docker",
      "Git",
    ],
    contributions: [
      t(
        "Next.js App Router와 TypeScript로 사용자 인증, 상품·서비스 정보와 구독 상태를 연결하는 사용자 화면을 개발했습니다.",
        "Built user screens connecting authentication, product and service information, and subscription state with Next.js App Router and TypeScript.",
      ),
      t(
        "서버 렌더링과 메타데이터 구성을 적용해 SSR·SEO 기반 페이지 구조를 구현했습니다.",
        "Implemented an SSR and SEO-oriented page structure with server rendering and metadata configuration.",
      ),
      t(
        "NestJS로 인증·상품·구독 API와 비즈니스 로직을 개발하고 PostgreSQL 데이터 모델링과 테이블 설계에 참여했습니다.",
        "Developed authentication, product, and subscription APIs and business logic with NestJS, and participated in PostgreSQL modeling and table design.",
      ),
      t(
        "프론트엔드 화면, API와 데이터베이스 사이의 처리 흐름을 정리하고 공통 연동 구조를 개선했습니다.",
        "Clarified the processing flow between frontend screens, APIs, and the database and improved the shared integration structure.",
      ),
      t(
        "Tailwind CSS 기반 반응형 UI와 Docker 개발 환경을 구성했습니다.",
        "Built responsive UI with Tailwind CSS and a Docker-based development environment.",
      ),
    ],
    challenges: [
      t(
        "인증·상품·구독 상태가 서로 다른 화면과 API에 흩어지지 않도록 하나의 사용자 여정과 데이터 흐름으로 연결해야 했습니다.",
        "Authentication, product information, and subscription state had to behave as one user journey and data flow across screens and APIs.",
      ),
      t(
        "프론트엔드 중심 업무에서 API와 데이터베이스까지 범위를 확장하면서 각 계층의 책임과 연동 지점을 정리해야 했습니다.",
        "Expanding from frontend work into APIs and databases required clear responsibilities and integration points across each layer.",
      ),
    ],
    results: [
      t(
        "인증·상품·구독의 핵심 흐름을 React·Next.js 화면, NestJS API와 PostgreSQL 모델이 연결된 구조로 구현했습니다.",
        "Implemented the core authentication, product, and subscription flows through connected React and Next.js screens, NestJS APIs, and PostgreSQL models.",
      ),
      t(
        "프론트엔드 중심 업무에서 API와 데이터베이스까지 범위를 확장하며 서비스 전체 데이터 흐름을 경험했습니다.",
        "Expanded from frontend-focused work into APIs and databases while working across the service’s end-to-end data flow.",
      ),
    ],
    // TODO: Add verified subscription-platform screenshots when available.
    images: [],
  },
  {
    slug: "gis-facility-system",
    startedAt: "2023-05",
    endedAt: "2025-01",
    locale: ["ko", "en"],
    title: t("GIS 기반 시설물 조회 시스템", "GIS Facility Lookup System"),
    company: t("케이엠아이에스㈜", "KMIS Co., Ltd."),
    role: t("프론트엔드 개발", "Frontend Development"),
    period: t("2023.05 – 2025.01", "May 2023 – Jan 2025"),
    status: t("납품 완료", "Delivered"),
    summary: t(
      "지도에서 시설물과 위치 데이터를 조회하고 상세 정보를 확인하는 공공기관 납품 웹앱입니다.",
      "A delivered public-sector web application for exploring facilities and location data on a map.",
    ),
    problem: t(
      "시설물 위치와 상세 정보를 지도·목록·패널 사이를 오가며 확인해야 했습니다.",
      "Users had to move between the map, list, and detail panel to understand facility locations and information.",
    ),
    decision: t(
      "시설물 선택 상태를 공통 기준으로 두고 지도 마커·목록·팝업·상세 패널이 같은 탐색 맥락을 공유하도록 구성했습니다.",
      "Used facility selection as shared state so map markers, lists, popups, and detail panels preserve the same exploration context.",
    ),
    outcome: t(
      "지도 마커·팝업·상세 패널을 연결한 시스템이 한국수자원공사에 납품되어 실제 업무 환경에서 사용되었습니다.",
      "The map, marker, popup, and detail-panel workflow was delivered to Korea Water Resources Corporation for real operational use.",
    ),
    description: [
      t(
        "한국수자원공사에 납품된 GIS 기반 시설물 조회 시스템으로, 지도 기반 시설물 탐색과 상세 정보 확인을 위한 프론트엔드 화면을 담당했습니다.",
        "A GIS facility lookup system delivered to Korea Water Resources Corporation, where I owned frontend screens for map-based exploration and detail viewing.",
      ),
      t(
        "위치 데이터, 마커, 목록과 상세 패널이 연결되는 탐색 흐름을 구성해 지도와 시설물 정보를 한 화면에서 확인할 수 있도록 했습니다.",
        "Connected location data, markers, lists, and detail panels so users could understand facilities and their locations in one exploration flow.",
      ),
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "HTML5",
      "CSS3",
      "Git",
    ],
    contributions: [
      t(
        "React·Next.js·TypeScript 기반 GIS 웹 애플리케이션의 시설물 조회와 상세 정보 화면을 담당했습니다.",
        "Owned facility lookup and detail screens for a GIS web application built with React, Next.js, and TypeScript.",
      ),
      t(
        "위치 데이터와 지도 마커·팝업·목록·상세 패널을 연결해 지도에서 시설물을 탐색하는 흐름을 구현했습니다.",
        "Connected location data with map markers, popups, lists, and detail panels to implement a facility exploration flow.",
      ),
      t(
        "API 응답 데이터를 지도와 화면 구조에 맞게 변환하고 시설물 선택 상태가 각 화면에 일관되게 반영되도록 구성했습니다.",
        "Transformed API responses for the map and screen models and kept facility selection state consistent across views.",
      ),
      t(
        "Tailwind CSS 기반 반응형 UI와 관리 화면을 개발하고 기능 단위 이슈 대응에 참여했습니다.",
        "Built responsive UI and management screens with Tailwind CSS and participated in feature-level issue resolution.",
      ),
      t(
        "한국수자원공사에 납품되어 실제 업무 환경에서 사용되는 시스템의 개발과 운영 환경 적용에 참여했습니다.",
        "Contributed to the development and operational rollout of a system delivered to Korea Water Resources Corporation.",
      ),
    ],
    challenges: [
      t(
        "시설물 위치와 상세 정보를 지도·목록·상세 패널 사이에서 확인할 때 선택 상태와 현재 맥락이 끊기지 않도록 해야 했습니다.",
        "Selection state and context had to remain intact as users moved between the map, list, and detail panel to inspect facility locations and information.",
      ),
      t(
        "위치 데이터와 시설물 상세 API 응답을 지도와 화면 구조에 맞게 변환하면서 다양한 화면의 표시 상태를 일관되게 유지해야 했습니다.",
        "Location data and facility detail responses had to be transformed for the map and screen structures while keeping display state consistent across views.",
      ),
    ],
    results: [
      t(
        "지도 마커·팝업·목록·상세 패널을 연결한 GIS 업무 UI를 구현했습니다.",
        "Implemented a GIS business UI connecting map markers, popups, lists, and detail panels.",
      ),
      t(
        "한국수자원공사에 납품되어 실제 업무 환경에서 사용되는 시스템의 개발과 운영 환경 적용에 참여했습니다.",
        "Contributed to the development and operational rollout of a system delivered to Korea Water Resources Corporation for real operational use.",
      ),
    ],
    // TODO: Add verified GIS project screenshots when public sharing is permitted.
    images: [],
  },
];

export const pageCopy = {
  home: {
    title: t(
      "React·Next.js로 업무 시스템과 출시 제품을 만듭니다.",
      "I build operational systems and shipped products with React and Next.js.",
    ),
    summary: t(
      "3년 이상 공공·교통·구독 도메인의 화면과 API를 연결했습니다. iOS·Android 양대 스토어 출시부터 공공기관 납품·시범 운영까지, 프론트엔드 중심으로 제품을 끝까지 구현합니다.",
      "For over three years, I’ve connected interfaces and APIs across public-sector, transportation, and subscription products—from an iOS and Android launch to public-sector delivery and pilot operations.",
    ),
    proofYears: t("실무 제품 개발", "professional product work"),
    proofProjects: t("프로젝트 사례", "case studies"),
    proofDelivery: t("출시·납품·운영", "launched or delivered"),
    viewCases: t("선별 사례 보기", "View selected work"),
    featuredEyebrow: t("업무 UI · 출시 제품", "Operational UI · Shipped product"),
    featuredTitle: t(
      "지금 다루는 업무 UI, 그리고 출시한 제품",
      "The operational UI I work on now, and the product I shipped",
    ),
    featuredDescription: t(
      "건설기준 계층을 다루는 시범운영 시스템과 App Store·Google Play에 출시한 개인 제품을 같은 비중으로 보여줍니다.",
      "A live construction-standards pilot and an independent product released on both the App Store and Google Play, shown with equal weight.",
    ),
    selectedTitle: t(
      "복잡한 업무를 명확한 흐름으로 바꾼 작업",
      "Work that turns operational complexity into clear flows",
    ),
    experienceTitle: t(
      "제품의 앞단과 운영의 뒷단을 함께 경험했습니다",
      "Experience across the product surface and its operations",
    ),
    experienceAction: t("경력 자세히 보기", "View full experience"),
    contactTitle: t(
      "제품과 팀에 기여할 다음 기회를 찾고 있습니다",
      "I’m looking for the next product and team I can contribute to",
    ),
    contactBody: t(
      "프론트엔드 채용이나 제품 개발에 관해 이야기하고 싶다면 이메일로 연락해 주세요.",
      "If you would like to discuss a frontend role or product work, send me an email.",
    ),
  },
  work: {
    title: t("제품을 만들고, 업무를 움직인 기록", "Products built. Operations improved."),
    summary: t(
      "개인 제품부터 공공·교통·구독 서비스까지, 복잡한 업무 흐름을 화면·API·데이터 구조로 구현한 과정과 결과를 정리했습니다.",
      "A record of how I turned complex workflows into interfaces, APIs, and data structures across an independent product, public systems, transportation, and subscriptions.",
    ),
    featuredTitle: t(
      "현재 가장 깊이 관여하고 있는 제품",
      "The product I currently own most deeply",
    ),
    selectedTitle: t(
      "출시·복잡한 업무·운영 데이터 역량을 보여주는 대표 사례",
      "Flagship cases across shipping, complex workflows, and operational data",
    ),
  },
  about: {
    title: t(
      "문제를 이해하고, 운영 가능한 제품으로 바꿉니다.",
      "I turn understood problems into operable products.",
    ),
    summary: t(
      "사용자가 보는 화면과 그 뒤의 데이터·API·운영 환경을 함께 이해하고 연결하는 프론트엔드 중심 풀스택 개발자입니다.",
      "I’m a frontend-focused full-stack developer who connects the interface people use with the data, APIs, and operations behind it.",
    ),
    proofYears: t("제품 개발 경력", "years in product"),
    proofDomains: t("도메인 경험", "product domains"),
    proofLanguages: t("업무 언어", "working languages"),
    aiIntroductionEyebrow: t("AI 활용", "Working with AI"),
    aiIntroductionTitle: t(
      "AI를 활용해 더 빠르게 이해하고, 끝까지 검증합니다",
      "I use AI to understand faster and verify the result end to end",
    ),
    aiIntroduction: [
      t(
        "저는 AI를 단순한 코드 생성기가 아니라 문제를 빠르게 이해하고 구현의 불확실성을 줄이는 개발 도구로 활용합니다. 코드베이스 분석, 변경 영향 범위 파악, 리팩터링 대안 검토와 테스트 시나리오 정리에 AI를 사용하되, 생성된 결과는 타입·테스트·실행 환경을 통해 직접 확인하고 최종 판단은 개발자가 책임져야 한다고 생각합니다.",
        "I use AI not simply as a code generator, but as an engineering tool for understanding problems faster and reducing implementation uncertainty. I apply it to codebase analysis, change-impact discovery, refactoring alternatives, and test-scenario planning, then verify the result through types, tests, and the actual runtime environment while retaining responsibility for the final decision.",
      ),
      t(
        "씨엔넷의 KCSC 디지털 건설기준 시스템에서는 시설물·검토항목·검토요소·변수로 이어지는 복잡한 계층과 Java API 연동 구조를 다뤘습니다. AI 개발 도구로 관련 코드와 변경 지점을 탐색하고 리팩터링 방향과 예외 시나리오를 검토했으며, 실제 구현에서는 TanStack Query와 Zustand로 서버 상태와 편집 상태를 분리했습니다. 권한·계층 편집·데이터 변환 흐름은 Jest와 React Testing Library로 검증하고 Docker·Jenkins 배포 환경까지 연결했습니다.",
        "On C&Net's KCSC digital construction standards system, I worked with a complex hierarchy spanning facilities, review items, review elements, and variables, together with Java API integrations. I used AI development tools to explore related code and change points and to review refactoring directions and edge cases. In the implementation, I separated server and editing state with TanStack Query and Zustand, verified permissions, hierarchical editing, and data transformation with Jest and React Testing Library, and supported delivery through Docker and Jenkins.",
      ),
      t(
        "개인 프로젝트 ‘장고야 부탁해’에서는 AI를 사용자 가치와 운영 조건까지 포함한 제품 기능으로 구현했습니다. 재고 snapshot과 유통기한을 OpenAI Responses API에 연결해 임박 재료를 우선 활용하는 레시피를 추천하고, 동의·철회·기록 삭제와 모델별 비용 관측을 함께 설계했습니다. ML Kit OCR과 사진 일괄 등록, 공유 냉장고, 개인 플러스 결제·복원, NestJS API, Next.js 관리자를 하나의 모노레포로 연결했으며, 147개 파일의 885개 자동 테스트를 통과한 1.4.0을 App Store와 Google Play에 정식 출시했습니다.",
        "In my personal project Jango, I turned AI into a product capability that accounts for both user value and operational requirements. Inventory snapshots and expiry dates feed the OpenAI Responses API to recommend recipes that prioritize expiring ingredients, with consent, withdrawal, history deletion, and per-model cost observability built into the flow. I connected ML Kit OCR and bulk photo intake, shared refrigerators, Jango Plus billing and restoration, NestJS APIs, and a Next.js admin in one monorepo, then released version 1.4.0 on both the App Store and Google Play after 885 automated tests across 147 files passed.",
      ),
    ],
    capabilitiesTitle: t(
      "제품을 끝까지 연결하는 역량",
      "Capabilities across the product lifecycle",
    ),
    credentialsTitle: t("학력·교육·자격", "Education, training, and credentials"),
    contactTitle: t(
      "함께 만들 제품에 대해 이야기해 주세요",
      "Tell me about the product you’re building",
    ),
    contactBody: t(
      "채용이나 협업에 관해 공유할 내용이 있다면 이메일로 연락해 주세요.",
      "If you have a role or collaboration in mind, I’d be glad to hear from you.",
    ),
  },
  project: {
    namespace: t("저장소 이름", "Repository namespace"),
    period: t("기간", "Period"),
    overviewTitle: t("무엇을 만들었는가", "What I built"),
  },
  header: {
    primaryNavigation: t("주요 탐색", "Primary navigation"),
    menu: t("메뉴", "Menu"),
    openMenu: t("탐색 메뉴 열기", "Open navigation menu"),
  },
} as const;

export const ui = {
  ko: {
    home: "홈",
    about: "소개",
    work: "프로젝트",
    github: "GitHub",
    contact: "이메일",
    featured: "대표 프로젝트",
    featuredProjects: "주요 프로젝트",
    allProjects: "전체 프로젝트",
    selectedWork: "선별한 작업",
    experience: "경력",
    techStack: "기술 스택",
    professionalSummary: "소개",
    workingPrinciples: "일하는 방식",
    careerTimeline: "경력",
    technicalSkills: "기술",
    education: "학력",
    training: "교육",
    certifications: "자격 · 어학",
    interests: "관심 분야",
    caseStudy: "사례 읽기",
    viewGithub: "GitHub 저장소",
    viewProject: "프로젝트 열기",
    technologies: "기술",
    role: "담당 역할",
    overview: "제품 개요",
    problem: "문제",
    constraints: "제약과 판단",
    evidence: "검증 가능한 결과",
    scope: "작업 범위",
    contributions: "주요 기여",
    challenges: "과제",
    results: "결과",
    related: "다른 프로젝트",
    screenshotsTodo: "TODO · 실제 프로젝트 스크린샷 추가",
    status: "현재 상태",
    languageSwitch: "English",
    languageLabel: "영어로 보기",
    backToWork: "프로젝트 목록",
  },
  en: {
    home: "Home",
    about: "About",
    work: "Work",
    github: "GitHub",
    contact: "Email",
    featured: "Featured Project",
    featuredProjects: "Selected Projects",
    allProjects: "All Projects",
    selectedWork: "Selected Work",
    experience: "Experience",
    techStack: "Tech Stack",
    professionalSummary: "Professional Summary",
    workingPrinciples: "How I Work",
    careerTimeline: "Career Timeline",
    technicalSkills: "Technical Skills",
    education: "Education",
    training: "Training",
    certifications: "Certifications · Language Tests",
    interests: "Interests",
    caseStudy: "Read case study",
    viewGithub: "GitHub Repository",
    viewProject: "Open Project",
    technologies: "Technologies",
    role: "My Role",
    overview: "Project Overview",
    problem: "Problem",
    constraints: "Constraints & Decisions",
    evidence: "Verified Evidence",
    scope: "Scope",
    contributions: "Key Contributions",
    challenges: "Challenges",
    results: "Results",
    related: "Related Projects",
    screenshotsTodo: "TODO · Add verified project screenshots",
    status: "Current Status",
    languageSwitch: "한국어",
    languageLabel: "한국어로 보기",
    backToWork: "All Projects",
  },
} as const;

export function localize(value: LocalizedText, locale: Locale): string {
  return value[locale];
}

export function getProjects(locale?: Locale): Project[] {
  return projects
    .filter((project) => !locale || project.locale.includes(locale))
    .sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)));
}

export function getProject(slug: string, locale?: Locale): Project | undefined {
  return getProjects(locale).find((project) => project.slug === slug);
}

export function getContent(locale: Locale) {
  return {
    locale,
    person,
    experiences,
    education,
    training,
    certifications,
    skillCategories,
    interests,
    navigation: ui[locale],
    projects: getProjects(locale),
  } as const;
}
