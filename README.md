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

## Attribution

This portfolio retains the required [Once UI / Magic Portfolio](https://once-ui.com/products/magic-portfolio-systems) attribution. Pretendard is included under the SIL Open Font License; its license is stored with the local font files.
