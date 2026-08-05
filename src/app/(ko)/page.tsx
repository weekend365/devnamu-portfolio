import { PortfolioHome } from "@/components/portfolio";
import { person } from "@/resources";
import { buildMetadata } from "@/utils/site-metadata";

export const metadata = buildMetadata({
  locale: "ko",
  title: "프론트엔드 중심 풀스택 개발자",
  description: `React·Next.js 기반으로 KCSC 디지털 건설기준, BIMS 버스 정보, 구독 서비스와 GIS 시스템을 개발한 ${person.brand}의 포트폴리오입니다.`,
});

export default function HomePage() {
  return <PortfolioHome locale="ko" />;
}
