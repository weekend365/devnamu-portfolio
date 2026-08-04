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
  description: LocalizedText[];
  technologies: string[];
  contributions: LocalizedText[];
  challenges: LocalizedText[];
  results: LocalizedText[];
  images: string[];
  featured?: boolean;
  repository?: string;
  externalLink?: string;
};

const t = (ko: string, en: string): LocalizedText => ({ ko, en });

export const person = {
  name: t("남우현", "Nam Woo-hyun"),
  role: t("프론트엔드 · 풀스택 개발자", "Frontend · Full-stack Developer"),
  email: "skadngus14@naver.com",
  github: "https://github.com/weekend365",
  portfolio: "https://portfolio-kohl-one-78.vercel.app",
  location: t("인천, 대한민국", "Incheon, South Korea"),
  timeZone: "Asia/Seoul",
  avatar: "/images/profile.png",
  languages: t("한국어 · 영어", "Korean · English"),
  summary: [
    t(
      "React와 Next.js를 중심으로 웹 서비스와 관리 시스템을 개발해 온 3년 경력의 프론트엔드·풀스택 개발자입니다.",
      "I am a frontend and full-stack developer with three years of experience building web services and management systems, primarily with React and Next.js.",
    ),
    t(
      "GIS 기반 시설물 조회 시스템, 구독 서비스 플랫폼, BIMS(Bus Information Management System) 등 실제 운영·납품 목적의 웹 애플리케이션 개발 경험을 보유하고 있습니다.",
      "My experience includes production and delivery-focused applications such as a GIS facility lookup system, a subscription service platform, and a Bus Information Management System (BIMS).",
    ),
    t(
      "서비스 구조와 데이터 흐름을 이해한 상태에서 프론트엔드와 백엔드의 연결 구조, 유지보수성, 사용자 경험을 함께 고려하는 개발자를 지향합니다.",
      "I aim to understand service architecture and data flow while considering frontend–backend integration, maintainability, and user experience together.",
    ),
  ],
} as const;

export const experiences: Experience[] = [
  {
    company: t("씨엔넷", "C&Net"),
    role: t(
      "개발부 · 주임 · 풀스택 개발자",
      "Associate · Full-stack Developer",
    ),
    period: t("2025.12 – 재직중", "Dec 2025 – Present"),
    location: t("서울", "Seoul"),
    projects: [
      t(
        "디지털 건설기준 관리시스템(KCSC) 프론트엔드 개발·고도화",
        "KCSC digital construction standards management system",
      ),
      t(
        "BIMS(Bus Information Management System) 웹·앱 개발",
        "BIMS web and application development",
      ),
    ],
    achievements: [
      t(
        "KDS/KCS 표준문서, 검토항목, 객체분류, 변수 정보를 관리하는 프론트엔드 화면을 개발했습니다.",
        "Built frontend screens for KDS/KCS standard documents, review items, object classifications, and variables.",
      ),
      t(
        "Mantine UI와 TypeScript로 테이블, 트리, 모달, 탭, 리사이즈 패널 기반의 복잡한 업무 UI를 구현했습니다.",
        "Implemented complex business interfaces with TypeScript, Mantine UI, tables, trees, modals, tabs, and resizable panels.",
      ),
      t(
        "TanStack Query로 CRUD 서버 상태를 관리하고 저장·삭제·검증 이후 화면 데이터를 동기화했습니다.",
        "Managed CRUD server state with TanStack Query and synchronized screen data after save, delete, and validation operations.",
      ),
      t(
        "입력·출력·관리 변수와 상위 변수 연결, 선택값 관리 기능을 갖춘 변수 관리 테이블과 모달을 구현했습니다.",
        "Built variable tables and dialogs for input, output, and managed variables, parent links, and selectable values.",
      ),
      t(
        "객체분류, 검토항목, 검토요소, 상세 편집기를 연결한 4분할 변수 매핑 도구를 구현했습니다.",
        "Implemented a four-pane variable mapping tool connecting classifications, review items, review elements, and a detail editor.",
      ),
      t(
        "기본정보, 본문, 관리변수, 룰, 입출력변수를 탭 단위로 편집하는 검토요소 상세 기능을 개발했습니다.",
        "Developed tab-based detail editing for base information, content, managed variables, rules, and I/O variables.",
      ),
      t(
        "트리 기반 탐색, 검색, 선택 상태, 하위 노드 생성·수정·삭제 흐름을 설계하고 구현했습니다.",
        "Designed and implemented tree navigation, search, selection state, and child-node create, update, and delete flows.",
      ),
      t(
        "Jest와 React Testing Library로 변수 테이블, 모달, 매핑 도구, 리사이즈 패널의 주요 동작 테스트를 작성했습니다.",
        "Wrote Jest and React Testing Library tests for variable tables, dialogs, mapping tools, and resizable panels.",
      ),
      t(
        "Docker standalone 빌드와 Jenkins 배포 환경을 고려해 Next.js 프론트엔드 구조를 유지보수했습니다.",
        "Maintained the Next.js frontend for Docker standalone builds and Jenkins deployment.",
      ),
      t(
        "BIMS 관리자 웹에서 버스·노선·운영 데이터를 조회하고 관리하는 화면을 개발했습니다.",
        "Built BIMS administration screens for bus, route, and operational data.",
      ),
      t(
        "Spring Boot API 명세를 분석해 요청·응답 데이터 구조를 화면 처리 흐름에 연결했습니다.",
        "Mapped Spring Boot API request and response contracts into frontend data flows.",
      ),
    ],
  },
  {
    company: t("겟앤쇼", "Get&Show"),
    role: t(
      "개발부 · 주임 · 풀스택 개발자",
      "Associate · Full-stack Developer",
    ),
    period: t("2025.05 – 2025.12 · 8개월", "May 2025 – Dec 2025 · 8 months"),
    location: t("서울", "Seoul"),
    projects: [
      t(
        "자사 구독 서비스 웹·앱 플랫폼",
        "In-house subscription web and app platform",
      ),
    ],
    achievements: [
      t(
        "React와 Next.js 기반 구독 서비스 웹 프론트엔드를 개발했습니다.",
        "Developed the React and Next.js frontend for a subscription service.",
      ),
      t(
        "Next.js App Router로 페이지를 구성하고 SSR과 SEO를 개선했습니다.",
        "Structured pages with the Next.js App Router and improved SSR and SEO.",
      ),
      t(
        "사용자 인증, 구독 정보, 상품·서비스 정보 등 주요 화면을 개발했습니다.",
        "Built core screens for authentication, subscription information, products, and services.",
      ),
      t(
        "NestJS 기반 백엔드 API와 비즈니스 로직을 구현했습니다.",
        "Implemented NestJS backend APIs and business logic.",
      ),
      t(
        "PostgreSQL 데이터 모델링과 서비스 테이블 설계에 참여했습니다.",
        "Contributed to PostgreSQL data modeling and service table design.",
      ),
      t(
        "API 연동 구조와 프론트엔드 데이터 처리 흐름을 개선했습니다.",
        "Improved API integration and frontend data-processing flows.",
      ),
      t(
        "Tailwind CSS로 UI를 구현하고 사용자 경험을 개선했습니다.",
        "Implemented the UI with Tailwind CSS and improved the user experience.",
      ),
      t(
        "Docker와 Git을 활용한 개발 환경과 협업 프로세스를 경험했습니다.",
        "Worked with Docker and Git-based development and collaboration workflows.",
      ),
    ],
  },
  {
    company: t("케이엠아이에스㈜", "KMIS Co., Ltd."),
    role: t(
      "개발부 · 주임 · 프론트엔드 개발자",
      "Associate · Frontend Developer",
    ),
    period: t(
      "2023.05 – 2025.01 · 1년 9개월",
      "May 2023 – Jan 2025 · 1 year 9 months",
    ),
    location: t("인천", "Incheon"),
    projects: [
      t(
        "GIS 기반 시설물 조회 시스템 웹앱",
        "GIS-based facility lookup web application",
      ),
    ],
    achievements: [
      t(
        "React, Next.js, TypeScript 기반 GIS 웹 애플리케이션을 개발했습니다.",
        "Developed a GIS web application with React, Next.js, and TypeScript.",
      ),
      t(
        "지도 기반 시설물 조회 화면과 상세 정보 UI를 개발했습니다.",
        "Built map-based facility lookup and detail interfaces.",
      ),
      t(
        "위치 데이터 조회, 마커, 팝업, 상세 패널 등 지도 인터랙션을 구현했습니다.",
        "Implemented location queries, map markers, popups, and detail-panel interactions.",
      ),
      t(
        "Tailwind CSS 기반 반응형 UI와 관리 화면을 구성했습니다.",
        "Created responsive and administrative interfaces with Tailwind CSS.",
      ),
      t(
        "API 응답 데이터를 화면 구조에 맞게 가공하고 렌더링했습니다.",
        "Transformed and rendered API response data for the interface structure.",
      ),
      t(
        "Git 기반 협업과 기능 단위 개발을 수행했습니다.",
        "Worked through Git-based collaboration and feature-oriented development.",
      ),
      t(
        "한국수자원공사에 납품된 실제 운영 시스템 개발에 참여했습니다.",
        "Contributed to a production system delivered to Korea Water Resources Corporation.",
      ),
    ],
  },
];

export const education = [
  {
    institution: t("한국방송통신대학교", "Korea National Open University"),
    program: t(
      "컴퓨터과학과 · 편입/졸업",
      "Computer Science · Transfer/Graduated",
    ),
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
    institution: t("서일대학교", "Seoil University"),
    program: t(
      "정보통신과 · 자퇴",
      "Information and Communications · Withdrew",
    ),
    period: "2015.01 – 2019.03",
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
    detail: t(
      "2025.09 · 최종합격 · 한국산업인력공단",
      "Sep 2025 · Passed · HRD Korea",
    ),
  },
  {
    name: t("SQL개발자(SQLD)", "SQL Developer (SQLD)"),
    detail: t(
      "2024.09 · 최종합격 · 한국데이터산업진흥원",
      "Sep 2024 · Passed · Korea Data Agency",
    ),
  },
  {
    name: t("네트워크관리사 2급", "Network Administrator Level 2"),
    detail: t(
      "2021.12 · 최종합격 · 한국정보통신자격협회",
      "Dec 2021 · Passed · ICQA",
    ),
  },
  { name: t("TOEIC", "TOEIC"), detail: t("2025.10 · 835점", "Oct 2025 · 835") },
  {
    name: t("TOEIC Speaking Test", "TOEIC Speaking Test"),
    detail: t(
      "2025.09 · 120점 · Intermediate Mid 2",
      "Sep 2025 · 120 · Intermediate Mid 2",
    ),
  },
  {
    name: t("1종 보통 운전면허", "Class 1 Driver’s License"),
    detail: t(
      "2018.04 · 최종합격 · 경찰청",
      "Apr 2018 · Passed · Korean National Police Agency",
    ),
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
      "2026 · 스토어 제출 준비",
      "2026 · Preparing for store submission",
    ),
    status: t(
      "Phase 2 · 스토어 제출 준비",
      "Phase 2 · Store submission preparation",
    ),
    summary: t(
      "냉장고 식재료와 생활용품의 유통기한을 관리하고, 임박 식재료를 우선 활용하는 AI 레시피를 추천하는 서비스입니다.",
      "An ingredient and household inventory service that tracks expiry dates and recommends AI-generated recipes prioritizing items that expire soon.",
    ),
    description: [
      t(
        "장고야 부탁해는 Expo 기반 모바일 앱, NestJS REST API, Next.js 운영 관리자, 공유 계약 패키지를 하나의 pnpm 모노레포로 구성한 한국어 우선 MVP입니다.",
        "Jango is a Korean-first MVP organized as a pnpm monorepo containing an Expo mobile app, NestJS REST API, Next.js operations admin, and shared contracts package.",
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
        "Expo Router, Zustand, TanStack Query, React Hook Form, Zod로 모바일 앱의 인증·재고·추천·설정 흐름을 구성했습니다.",
        "Built authentication, inventory, recommendation, and settings flows with Expo Router, Zustand, TanStack Query, React Hook Form, and Zod.",
      ),
      t(
        "ML Kit 바코드 스캔과 유통기한 OCR을 ProductMaster 조회 및 등록 prefill 흐름과 연결했습니다.",
        "Connected ML Kit barcode scanning and expiry OCR to ProductMaster lookup and registration prefill flows.",
      ),
      t(
        "NestJS, Prisma, PostgreSQL로 제품, 재고, 대시보드, 추천, 알림, 인증, 개인정보 API를 구현했습니다.",
        "Implemented product, inventory, dashboard, recommendation, notification, authentication, and privacy APIs with NestJS, Prisma, and PostgreSQL.",
      ),
      t(
        "재고 snapshot과 추천 조건을 서버에서 OpenAI Responses API로 전달하는 AI 레시피 추천과 동의·철회·기록 삭제 정책을 구현했습니다.",
        "Implemented AI recipe recommendations through the server-side OpenAI Responses API together with consent, withdrawal, and history-deletion policies.",
      ),
      t(
        "개인·가족·매장 공간, owner/manager/member 권한, 이메일·일회용 코드 초대 구조를 구현했습니다.",
        "Implemented personal, household, and store spaces with owner/manager/member roles and email or one-time-code invitations.",
      ),
      t(
        "Kakao, Naver, Google, Apple, Email 인증과 Expo 알림, 구독 entitlement 검증을 구성했습니다.",
        "Configured Kakao, Naver, Google, Apple, and email authentication, Expo notifications, and subscription entitlement verification.",
      ),
      t(
        "Next.js 관리자에서 제품·재고·문의·seed 상태를 관리하고 Railway, Docker, EAS, Sentry, Resend 기반 운영 환경을 구성했습니다.",
        "Built Next.js administration for products, inventory, support inquiries, and seed status, and configured Railway, Docker, EAS, Sentry, and Resend operations.",
      ),
    ],
    challenges: [
      t(
        "Expo Go에서 동작하지 않는 native 바코드·OCR 기능을 dev/EAS 빌드와 iOS 실기기에서 검증해야 했습니다.",
        "Native barcode and OCR features unavailable in Expo Go required dev/EAS builds and iOS device validation.",
      ),
      t(
        "모바일, API, 관리자 사이의 계약을 공유하면서도 클라이언트에 안전한 타입과 schema만 노출해야 했습니다.",
        "Shared contracts across mobile, API, and admin had to expose only client-safe types and schemas.",
      ),
      t(
        "AI 추천, 소셜 로그인, 공유 공간 초대에 필요한 개인정보 동의·보관·삭제 흐름을 제품 기능과 일치시켜야 했습니다.",
        "Privacy consent, retention, and deletion behavior for AI recommendations, social login, and space invitations had to match product behavior.",
      ),
    ],
    results: [
      t(
        "2026-07-24 기준 모바일 핵심 UX 약 97%, API/Admin Railway 운영, iOS TestFlight 빌드 업로드 상태입니다.",
        "As of Jul 24, 2026, core mobile UX was approximately 97% complete, API/Admin were live on Railway, and an iOS TestFlight build had been uploaded.",
      ),
      t(
        "ESLint, 전체 typecheck, 환경 정합성 검사와 269개 자동 검사를 통과했습니다.",
        "The project passed ESLint, full type checking, environment parity validation, and 269 automated checks.",
      ),
      t(
        "공유 기능 운영 migration, 2계정 실기기 E2E, 최종 스토어 제출은 진행 중이며 출시 완료로 표시하지 않습니다.",
        "Production migration for shared spaces, two-account device E2E, and final store submission remain in progress; the product is not presented as launched.",
      ),
    ],
    // TODO: Add final App Store / Play Store URLs when available.
    images: [
      "/images/projects/jango/01.png",
      "/images/projects/jango/02.png",
      "/images/projects/jango/03.png",
      "/images/projects/jango/04.png",
      "/images/projects/jango/05.png",
      "/images/projects/jango/06.png",
    ],
    featured: true,
    repository: "https://github.com/weekend365/ExpiryMate",
  },
  {
    slug: "kcsc",
    startedAt: "2025-12",
    endedAt: null,
    locale: ["ko", "en"],
    title: t(
      "디지털 건설기준 관리시스템 KCSC",
      "KCSC Digital Construction Standards System",
    ),
    company: t("씨엔넷", "C&Net"),
    role: t("프론트엔드 개발·고도화", "Frontend Development & Enhancement"),
    period: t("2025.12 – 재직중", "Dec 2025 – Present"),
    status: t("운영·고도화", "Production & Enhancement"),
    summary: t(
      "공공·건설 기준의 표준문서, 검토항목, 객체분류와 변수를 탐색하고 편집하는 업무 시스템입니다.",
      "A business system for navigating and editing public construction standards, review items, object classifications, and variables.",
    ),
    description: [
      t(
        "Next.js App Router 기반 사용자·관리자 화면과 복잡한 문서·변수 관리 도구를 개발했습니다.",
        "Developed user and administration screens and complex document and variable-management tools with the Next.js App Router.",
      ),
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Mantine",
      "TanStack Query",
      "Jest",
      "React Testing Library",
      "Docker",
      "Jenkins",
    ],
    contributions: experiences[0].achievements.slice(0, 9),
    challenges: [
      t(
        "트리, 테이블, 모달과 4분할 패널 사이의 탐색·선택·편집 상태를 일관되게 관리해야 했습니다.",
        "Navigation, selection, and editing state had to remain consistent across trees, tables, dialogs, and a four-pane editor.",
      ),
    ],
    results: [
      t(
        "서버 상태와 편집 상태를 분리한 CRUD 흐름과 주요 사용자 동작 테스트를 구성해 변경 시 회귀 위험을 줄였습니다.",
        "Separated server and editing state and added tests for key interactions to reduce regression risk during changes.",
      ),
    ],
    // TODO: Add verified KCSC screenshots when public sharing is permitted.
    images: [],
  },
  {
    slug: "bims",
    startedAt: "2025-12",
    endedAt: null,
    locale: ["ko", "en"],
    title: t(
      "BIMS 버스 정보 관리 시스템",
      "BIMS Bus Information Management System",
    ),
    company: t("씨엔넷", "C&Net"),
    role: t("풀스택 개발", "Full-stack Development"),
    period: t("2025.12 – 재직중", "Dec 2025 – Present"),
    status: t("개발중", "In Development"),
    summary: t(
      "관리자가 버스, 노선과 운영 데이터를 정확하게 조회·수정·관리할 수 있는 웹 애플리케이션입니다.",
      "A web application for administrators to reliably view, update, and manage bus, route, and operational data.",
    ),
    description: [
      t(
        "Next.js 관리자 웹과 Spring Boot API를 연결하고 교통 관리 업무 흐름을 화면에 반영했습니다.",
        "Connected a Next.js administration frontend to Spring Boot APIs and translated transportation workflows into the interface.",
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
    contributions: experiences[0].achievements.slice(9),
    challenges: [
      t(
        "교통·관리 도메인의 다양한 데이터를 사용자의 업무 흐름에 맞게 정확히 조회하고 관리해야 했습니다.",
        "Complex transportation data had to be presented and managed accurately around the administrator’s workflow.",
      ),
    ],
    // TODO: Add a verified outcome when one is available in the source resume.
    results: [],
    // TODO: Add verified BIMS screenshots when public sharing is permitted.
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
    description: [
      t(
        "프론트엔드 화면부터 NestJS API와 PostgreSQL 데이터 설계까지 서비스 전반을 개발했습니다.",
        "Worked across the service from frontend screens to NestJS APIs and PostgreSQL data design.",
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
    contributions: experiences[1].achievements,
    challenges: [
      t(
        "프론트엔드 중심 업무에서 API와 데이터베이스까지 범위를 확장하며 서비스 전체 데이터 흐름을 연결했습니다.",
        "Expanded from frontend work into APIs and databases while connecting the service’s end-to-end data flow.",
      ),
    ],
    // TODO: Add a verified outcome when one is available in the source resume.
    results: [],
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
    description: [
      t(
        "React, Next.js, TypeScript로 지도 기반 조회와 상세 정보 UI를 담당했습니다.",
        "Built map-based lookup and detail interfaces with React, Next.js, and TypeScript.",
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
    contributions: experiences[2].achievements,
    challenges: [
      t(
        "위치 데이터, 마커, 팝업과 상세 패널이 연결되는 일반 웹보다 복잡한 지도 인터랙션을 구현했습니다.",
        "Implemented map interactions connecting location data, markers, popups, and detail panels.",
      ),
    ],
    results: [
      t(
        "한국수자원공사에 납품되어 실제 업무 환경에서 사용되는 시스템 개발에 참여했습니다.",
        "Contributed to a system delivered to Korea Water Resources Corporation for real operational use.",
      ),
    ],
    // TODO: Add verified GIS project screenshots when public sharing is permitted.
    images: [],
  },
  {
    slug: "nextjs-portfolio",
    startedAt: "2023-02-20",
    endedAt: "2023-02-22",
    locale: ["ko", "en"],
    title: t("Next.js 개인 포트폴리오", "Next.js Personal Portfolio"),
    company: t("개인 프로젝트", "Personal Project"),
    role: t("1인 개발", "Solo Development"),
    period: t("2023.02.20 – 2023.02.22", "Feb 20 – Feb 22, 2023"),
    status: t("배포", "Deployed"),
    summary: t(
      "Next.js로 제작하고 Vercel에 배포한 개인 포트폴리오입니다.",
      "A personal portfolio built with Next.js and deployed on Vercel.",
    ),
    description: [
      t(
        "이력서에 기록된 첫 개인 포트폴리오 프로젝트입니다.",
        "The first personal portfolio project documented in the résumé.",
      ),
    ],
    technologies: ["Next.js"],
    contributions: [
      t(
        "기획과 구현을 포함한 전체 작업을 1인으로 수행했습니다.",
        "Completed the planning and implementation independently.",
      ),
    ],
    // TODO: Add verified challenges and outcomes if additional project documentation becomes available.
    challenges: [],
    results: [],
    // TODO: Add archived screenshots of the 2023 portfolio when available.
    images: [],
    externalLink: person.portfolio,
  },
];

export const ui = {
  ko: {
    home: "홈",
    about: "소개",
    work: "프로젝트",
    resume: "이력서 PDF",
    github: "GitHub",
    contact: "이메일",
    featured: "대표 프로젝트",
    featuredProjects: "주요 프로젝트",
    allProjects: "전체 프로젝트",
    experience: "경력",
    techStack: "기술 스택",
    professionalSummary: "소개",
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
    resume: "Résumé PDF",
    github: "GitHub",
    contact: "Email",
    featured: "Featured Project",
    featuredProjects: "Selected Projects",
    allProjects: "All Projects",
    experience: "Experience",
    techStack: "Tech Stack",
    professionalSummary: "Professional Summary",
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
