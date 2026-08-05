# 남우현

## 복잡한 도메인 데이터를 운영 가능한 업무 제품으로 구조화하는 프론트엔드 엔지니어

React·Next.js·TypeScript 중심 경력 3년 2개월  
인천 · 이메일 `<기입>` · 연락처 `<기입>`  
[Portfolio](https://devnamu.com/) · [GitHub](https://github.com/weekend365)

## Profile

공공 건설기준, 버스 정보, GIS 시설물, 구독 서비스처럼 데이터 관계와 업무 규칙이 복잡한 제품을 개발해 왔습니다. 요구사항을 단순한 화면 목록으로 옮기기보다 사용자의 업무 흐름과 데이터 구조를 먼저 파악하고, 이를 트리·테이블·다중 패널·지도 인터랙션으로 설계합니다.

- Next.js App Router와 TypeScript를 기반으로 사용자·관리자 웹을 설계하고 구현합니다.
- TanStack Query와 Zustand를 활용해 서버 상태와 화면 상태의 책임을 분리하고, 기능별 캐시 동기화 흐름을 구성합니다.
- 권한, 인증 예외, 파일 처리, 다국어, 테스트, 배포 환경까지 운영에 필요한 프론트엔드 품질을 함께 고려합니다.
- NestJS·PostgreSQL 개발 및 Spring Boot·Java API 협업 경험을 바탕으로 화면 뒤의 데이터 흐름까지 이해하고 소통합니다.

## Selected Impact

- KCSC 디지털 건설기준 사용자 지원 시스템의 시설물–검토 항목–검토 요소–변수 계층을 리사이즈 가능한 다중 패널과 트리 기반 업무 UI로 구현했습니다. 현재 표준·사용자 라이브러리, API Center, 자료 및 지원 게시판이 연결된 공개 시범운영 시스템으로 제공되고 있습니다.
- 한국수자원공사에 납품된 GIS 시설물 조회 시스템에서 지도·목록·마커·팝업·상세 패널을 하나의 탐색 흐름으로 연결해 실제 업무 환경 적용에 참여했습니다.
- 구독 서비스에서는 Next.js 프론트엔드부터 NestJS API와 PostgreSQL 모델링까지 범위를 확장해 인증·구독·상품의 핵심 흐름을 엔드투엔드로 구현했습니다.
- Jest와 React Testing Library로 권한, 트리, 데이터 변환, 편집 도구의 주요 회귀 경로를 검증하고 ESLint·Stylelint·Prettier·Husky로 협업 품질 기준을 운영했습니다.

## Experience

### 씨엔넷 — 주임, 프론트엔드 중심 풀스택 개발자

2025.12–현재 · 서울

#### KCSC 디지털 건설기준 사용자 지원 시스템

Next.js 14 · React 18 · TypeScript · TanStack Query · Zustand · Mantine · CSS Modules · next-intl · TipTap · Jest · React Testing Library · Docker · Jenkins

- 건설기준 문서, 시설물 라이브러리, 객체 분류, 검토 항목, 검토 요소, 입출력·판정 변수가 연결된 도메인을 분석해 트리와 리사이즈 가능한 다중 패널 관리 화면으로 구현했습니다.
- 트리 검색, 선택 상태, 하위 노드 CRUD, ID 직접 이동, 공간정보 조회를 연결해 깊은 계층에서도 현재 작업 맥락을 유지하도록 구성했습니다.
- 정성·정량·판정 기준 유형에 따라 본문, Python 규칙, 입출력 변수, 판정 변수 편집 흐름을 분기하고 유형 전환 시 필요한 데이터를 보존했습니다.
- TanStack Query의 기능별 Query Key와 공통 Fetch 계층으로 저장·삭제·검증 이후 Java 백엔드 CRUD 상태와 화면 캐시를 동기화했습니다.
- 서버 상태는 TanStack Query, 로컬 편집·화면 상태는 Zustand로 분리해 상태 관리 책임과 변경 범위를 명확히 했습니다.
- 쿠키 기반 인증, 사용자 역할별 접근 제어, 토큰 갱신, 공통 오류 처리, 파일 업로드·다운로드, WebView·iframe 연동을 구현했습니다.
- Jest와 React Testing Library로 사용자 기준 매핑, 권한, 트리, 관리 변수 노출 및 편집 도구의 핵심 회귀 경로를 테스트했습니다.
- Next.js standalone 빌드, Docker 이미지, Jenkins 배포 파이프라인에 맞는 운영 구조를 유지했습니다.

#### BIMS(Bus Information Management System) 관리자 웹

Next.js · React · TypeScript · Spring Boot · PostgreSQL · Mantine · Tailwind CSS · Git

- 버스·노선·운영 데이터를 조회하고 관리하는 관리자 화면을 개발하고 Spring Boot API와 연동했습니다.
- 실시간 버스 위치와 운행 이벤트를 지도에서 확인하는 모니터링 화면, 운행·돌발·위반 현황 대시보드, 접속 추이와 로그인 이력 화면을 구현했습니다.
- API 명세의 요청·응답 데이터를 화면 모델에 맞게 가공하고, 교통 관리 업무 흐름을 테이블·상세·지도 UI에 반영했습니다.
- 공통 UI 컴포넌트를 적용하고 Git 기반 코드 리뷰와 이슈 대응에 참여했습니다.

### 겟앤쇼 — 주임, 풀스택 개발자

2025.05–2025.12 · 8개월 · 서울

#### 구독 서비스 웹 플랫폼

React · Next.js · TypeScript · NestJS · Node.js · PostgreSQL · Tailwind CSS · Docker · Git

- Next.js App Router와 TypeScript로 사용자 인증, 구독 정보, 상품 및 서비스 정보 화면을 개발했습니다.
- 서버 렌더링을 적용하고 검색 노출을 고려한 SSR·SEO 구성을 개선했습니다.
- NestJS 기반 인증·구독·상품 API와 비즈니스 로직을 개발하고 PostgreSQL 데이터 모델링과 서비스 테이블 설계에 참여했습니다.
- 프론트엔드와 API 사이의 데이터 흐름을 정리하고 공통 연동 구조를 개선했습니다.
- Tailwind CSS로 반응형 UI를 구현하고 Docker 기반 개발 환경과 Git 협업 흐름을 구성했습니다.

### 케이엠아이에스㈜ — 주임, 프론트엔드 개발자

2023.05–2025.01 · 1년 9개월 · 인천

#### GIS 기반 시설물 조회 시스템

React · Next.js · TypeScript · Tailwind CSS · PostgreSQL API · HTML5 · CSS3 · Git

- React·Next.js·TypeScript 기반 GIS 웹 애플리케이션의 시설물 조회 및 상세 정보 화면을 개발했습니다.
- 위치 데이터와 지도 마커, 팝업, 상세 패널을 연결해 지도–목록–상세로 이어지는 탐색 인터랙션을 구현했습니다.
- API 응답 데이터를 지도와 화면 구조에 맞게 가공하고 렌더링했습니다.
- Tailwind CSS 기반 반응형 UI와 관리 화면을 구성하고 기능 단위 개발, Git 협업 및 이슈 대응에 참여했습니다.
- 한국수자원공사에 납품되어 실제 업무 환경에서 사용되는 시스템 개발과 운영 환경 적용에 참여했습니다.

## Technical Skills

- Frontend: TypeScript, JavaScript, React, Next.js, HTML5, CSS3
- Server state & client state: TanStack Query, Zustand, Redux
- UI: Mantine, Tailwind CSS, CSS Modules, React Table, TipTap, Storybook
- Quality: Jest, React Testing Library, ESLint, Stylelint, Prettier, Husky
- Backend & database: NestJS, Node.js, PostgreSQL, Java·Spring Boot API 협업
- Delivery & collaboration: Git, Docker, Jenkins

## Education

한국방송통신대학교 컴퓨터과학과 학사 · 편입/졸업  
2023.01–2025.08

이젠아카데미컴퓨터학원 자바 웹개발 프로그래밍 · 800시간  
2022.09–2023.01

## Certifications & Language

- 정보처리기사 · 2025.09
- SQL 개발자(SQLD) · 2024.09
- TOEIC 835 · 2025.10
- TOEIC Speaking IM2 · 2025.09
- 네트워크관리사 2급 · 2021.12

---

## 제출 전 확인하면 정량화할 수 있는 성과

아래 항목은 사실 확인 전에는 이력서 본문에 넣지 않습니다. 저장소, 이슈 트래커, 배포 기록 또는 동료 확인으로 증명할 수 있는 값만 채운 뒤 해당 경력의 첫 번째나 두 번째 문장에 반영하세요.

- KCSC: 직접 구현하거나 고도화한 주요 화면·기능 수, 연동 API 수, 작성한 테스트 수, 담당한 사용자 역할 수
- KCSC: 장애·회귀 결함 감소, 배포 리드타임 또는 반복 개발 시간 단축을 비교할 수 있는 전후 기록
- BIMS: 구현한 관리자 메뉴 수, 지도·대시보드에서 다룬 데이터 유형 수, 연동한 API 수
- 구독 서비스: 직접 설계한 테이블 수, 구현한 API 수, 인증·구독·상품 핵심 플로우 수
- GIS 시스템: 제공한 지도 레이어·시설물 유형 수, 담당 화면 수, 실제 운영 사용자 또는 기관 범위
- 공통: 코드 리뷰 수, 배포 횟수, 자동화 테스트 수, 공통 컴포넌트 수처럼 본인의 기여 범위를 보여주는 지표

정량 문장 예시: `핵심 업무 화면 [N]개와 API [N]개를 담당하고, [기준 기간] 동안 [측정 가능한 결과]를 [전/후 수치]로 개선했습니다.`
