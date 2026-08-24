import { PortfolioHome } from "@/components/portfolio";
import { buildMetadata } from "@/utils/site-metadata";

export const metadata = buildMetadata({
  locale: "ko",
  title: "남우현 포트폴리오 | 프론트엔드 중심 풀스택 개발자",
  description:
    "React·Next.js로 공공기관 업무 시스템과 App Store 출시 제품을 만든 3년+ 개발자의 포트폴리오입니다.",
  appendIdentity: false,
});

export default function HomePage() {
  return <PortfolioHome locale="ko" />;
}
