# DEVNAMU — Portfolio

DEVNAMU(남우현)의 한·영 개발자 포트폴리오입니다. 한국어가 기본 경로이며 영어 콘텐츠는 `/en`에서 정적 생성됩니다. 대표 프로젝트는 **장고야 부탁해(Jango)**이고, GitHub 저장소의 기술 namespace인 `ExpiryMate`는 사례 페이지에서만 병기합니다.

## Local development

```bash
npm install
npm run dev
```

`NEXT_PUBLIC_SITE_URL`을 배포 URL로 설정하면 canonical, Open Graph, sitemap, robots, JSON-LD에 동일하게 반영됩니다. 기본값은 현재 Vercel URL입니다.

## Quality checks

```bash
npm run lint
npm run typecheck
npm run build
```

## Stack

Next.js 16, React 19, TypeScript, Once UI, Pretendard

## Project thumbnail image specs

프로젝트 이미지는 원본 해상도를 유지한 채 `ProjectImage.variant`로 모바일과 웹을 구분합니다.

| 유형 | 권장 원본 크기 | 비율 | 썸네일 표시 기준 | 코드 규칙 |
| --- | ---: | ---: | --- | --- |
| 모바일 앱 화면 | **1125 × 2436 px** | 9:19.5 | 최대 약 208 × 450 CSS px, 모바일 카드에서도 세로 화면 전체 비율 유지 | `variant: "mobile"`, 브라우저 프레임 없음 |
| 웹 화면 | **2120 × 1200 px** | 약 16:9 | 2열 카드에서 약 588 × 333 CSS px, 상세 캐러셀에서 최대 약 832 × 471 CSS px | `variant: "desktop"`, 브라우저 프레임 적용 |
| 이미지 없음 | 해당 없음 | 해당 없음 | 익명화 워크플로 비주얼 사용 | `images: []` |

모바일 기준은 375 × 812 CSS px 화면의 3배(3x), 웹 기준은 1060 × 600 CSS px 작업 영역의 2배(2x)입니다. 새 이미지는 PNG 또는 고품질 WebP로 준비하고, 화면 비율을 맞추기 위해 임의로 자르거나 늘리지 않습니다. 현재 Jango 에셋은 1125 × 2433~2436 px로 이 기준을 충족합니다. KCSC와 BIMS는 스크린샷 대신 다이어그램과 사례 글로 구성합니다.

웹 프로젝트 스크린샷은 원본 해상도를 유지하되 카드와 상세 캐러셀에서 **16:9 프레임**으로 표시합니다. 16:9가 아닌 원본도 잘라내지 않고 contain 방식으로 전체 화면을 보존합니다.

## Attribution

This portfolio retains the required [Once UI / Magic Portfolio](https://once-ui.com/products/magic-portfolio-systems) attribution. Pretendard is included under the SIL Open Font License; its license is stored with the local font files.
