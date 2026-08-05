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
  images: ProjectImage[];
  featured?: boolean;
  repository?: string;
  externalLink?: string;
  demoAccess?: DemoAccess;
};

const t = (ko: string, en: string): LocalizedText => ({ ko, en });

export const person = {
  brand: "DEVNAMU",
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
        "KCSC 디지털 건설기준 시스템의 표준문서·검토·변수 관리 프론트엔드를 개발·고도화했습니다.",
        "Built and advanced the KCSC digital construction standards frontend for documents, reviews, and variables.",
      ),
      t(
        "Mantine UI와 TanStack Query로 트리·테이블·매핑 도구 등 복잡한 업무 UI와 서버 상태를 구현했습니다.",
        "Implemented complex business UIs and server state with Mantine UI and TanStack Query, including trees, tables, and mapping tools.",
      ),
      t(
        "BIMS 관리자 웹에서 버스·노선·운영 데이터 화면을 개발하고 Spring Boot API와 연동했습니다.",
        "Built BIMS admin screens for bus, route, and operations data, integrated with Spring Boot APIs.",
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
        "React·Next.js로 구독 서비스 웹 프론트엔드를 개발하고 App Router 기반 SSR·SEO를 구성했습니다.",
        "Built the subscription service frontend with React and Next.js, including App Router SSR and SEO.",
      ),
      t(
        "NestJS API와 PostgreSQL 모델링에 참여하며 인증·구독·상품 등 핵심 기능을 구현했습니다.",
        "Implemented core auth, subscription, and product flows with NestJS APIs and PostgreSQL modeling.",
      ),
      t(
        "프론트엔드 데이터 흐름과 UI/UX를 개선하고 Docker 기반 배포 환경에서 협업했습니다.",
        "Improved frontend data flows and UX while collaborating in a Docker-based deployment environment.",
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
        "React·Next.js·TypeScript로 GIS 기반 시설물 조회 웹앱을 개발했습니다.",
        "Developed a GIS facility lookup web app with React, Next.js, and TypeScript.",
      ),
      t(
        "지도 마커·팝업·상세 패널 등 위치 데이터 인터랙션과 반응형 UI를 구현했습니다.",
        "Implemented map markers, popups, detail panels, and responsive UI for location data.",
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
      {
        src: "/images/projects/jango/01.png",
        alt: t(
          "오늘 만료되는 재료와 유통기한 현황, AI 추천 요리를 보여주는 장고야 부탁해 홈 화면",
          "Jango home dashboard showing ingredients expiring today, expiry status, and an AI recipe suggestion",
        ),
        caption: t(
          "오늘 확인해야 할 식재료를 한 화면에 모은 홈",
          "A home view focused on ingredients that need attention today",
        ),
        variant: "mobile",
      },
      {
        src: "/images/projects/jango/02.png",
        alt: t(
          "보관 중인 재료를 유통기한 순서로 조회하고 관리하는 장고야 부탁해 보관함 화면",
          "Jango inventory screen for browsing and managing stored ingredients by expiry date",
        ),
        caption: t(
          "유통기한 중심의 식재료 보관함",
          "An ingredient inventory organized around expiry dates",
        ),
        variant: "mobile",
      },
      {
        src: "/images/projects/jango/03.png",
        alt: t(
          "남은 재료를 우선 활용해 오늘의 AI 추천 요리를 보여주는 화면",
          "AI recipe recommendations prioritizing ingredients already in the refrigerator",
        ),
        caption: t(
          "임박 식재료를 우선 활용하는 AI 추천",
          "AI recommendations that prioritize ingredients expiring soon",
        ),
        variant: "mobile",
      },
      {
        src: "/images/projects/jango/04.png",
        alt: t(
          "카메라로 상품 바코드와 유통기한을 인식하는 장고야 부탁해 스캔 화면",
          "Jango camera scanner recognizing a product barcode and its expiry date",
        ),
        caption: t(
          "바코드와 유통기한을 한 흐름에서 인식",
          "Barcode and expiry-date capture in one flow",
        ),
        variant: "mobile",
      },
      {
        src: "/images/projects/jango/05.png",
        alt: t(
          "보관 위치와 유통기한을 확인해 식재료 등록을 완료하는 화면",
          "Guided ingredient registration flow confirming storage location and expiry date",
        ),
        caption: t(
          "필수 정보만 단계적으로 확인하는 등록 과정",
          "A guided registration flow that asks only for essential details",
        ),
        variant: "mobile",
      },
      {
        src: "/images/projects/jango/06.png",
        alt: t(
          "초대 코드로 가족이나 동료와 여러 냉장고를 공유하는 화면",
          "Jango shared refrigerator screen for managing multiple spaces with family or colleagues",
        ),
        caption: t(
          "가족·동료와 함께 관리하는 공유 공간",
          "Shared spaces for households and teams",
        ),
        variant: "mobile",
      },
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
      t(
        "공개된 체험 전용 계정으로 실제 시범운영 시스템에 접속해 표준 라이브러리와 주요 탐색 흐름을 직접 확인할 수 있습니다.",
        "Use the public demo account to explore the standard library and key navigation flows directly in the live pilot system.",
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
    images: [
      {
        src: "/images/projects/kcsc/01.png",
        alt: t(
          "디지털 건설기준 시범운영 홈과 지원 게시판 화면",
          "KCSC pilot home and support-board dashboard",
        ),
        caption: t(
          "시범운영 홈과 공지·자료·Q&A 지원 게시판",
          "Pilot home with notices, resources, Q&A, and support boards",
        ),
        variant: "desktop",
      },
      {
        src: "/images/projects/kcsc/02.png",
        alt: t(
          "시설물·검토항목·검토요소·룰을 연결한 4분할 기준맵 화면",
          "Four-pane standards map connecting facilities, review items, elements, and rules",
        ),
        caption: t(
          "깊은 계층의 기준을 탐색하고 편집하는 다중 패널 화면",
          "A multi-panel view for exploring and editing deep standards hierarchies",
        ),
        variant: "desktop",
      },
      {
        src: "/images/projects/kcsc/03.png",
        alt: t(
          "KDS 설계기준 문서와 목차를 탐색하는 표준 라이브러리 화면",
          "Standards library for browsing KDS documents and table of contents",
        ),
        caption: t(
          "유형·특성·입출력변수와 함께 보는 표준 문서 목록",
          "Standards documents shown with types, properties, and variables",
        ),
        variant: "desktop",
      },
    ],
    externalLink: "https://digital.kcsc.re.kr/home",
    demoAccess: {
      url: "https://digital.kcsc.re.kr/home",
      username: "testest",
      password: "testest",
      note: t(
        "공개된 체험 전용 계정입니다. 체험 데이터는 예고 없이 초기화될 수 있습니다.",
        "This is a public demo account. Demo data may be reset without notice.",
      ),
    },
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
    // Outcome metrics are intentionally omitted until the current operational scope is verified.
    results: [],
    images: [
      {
        src: "/images/projects/bims/01.png",
        alt: t(
          "실시간 버스 위치와 운행 이벤트를 지도에서 확인하는 BIMS 모니터링 화면",
          "BIMS monitoring map showing live bus locations and operation events",
        ),
        caption: t(
          "지도·노선·운행 이벤트를 한 화면에서 확인하는 실시간 관제",
          "Real-time operations view combining the map, routes, and vehicle events",
        ),
        variant: "desktop",
        width: 1920,
        height: 945,
      },
      {
        src: "/images/projects/bims/02.png",
        alt: t(
          "운행 현황과 돌발·위반 데이터를 보여주는 BIMS 운영 대시보드",
          "BIMS operations dashboard showing service status and incidents",
        ),
        caption: t(
          "운행·돌발·위반 지표를 요약한 운영 대시보드",
          "An operations dashboard summarizing service, incident, and violation signals",
        ),
        variant: "desktop",
        width: 1920,
        height: 945,
      },
      {
        src: "/images/projects/bims/03.png",
        alt: t(
          "최근 접속 추이와 로그인 이력을 보여주는 BIMS 관리자 화면",
          "BIMS administrator screen showing login trends and access history",
        ),
        caption: t(
          "관리자 권한과 접속 이력을 확인하는 운영 화면",
          "An administrative view for access trends, permissions, and login history",
        ),
        variant: "desktop",
        width: 1920,
        height: 945,
      },
    ],
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
    // TODO: Add a verified outcome when one is available in the project record.
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
];

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
