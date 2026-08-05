import { PortfolioHome } from "@/components/portfolio";
import { person } from "@/resources";
import { buildMetadata } from "@/utils/site-metadata";

export const metadata = buildMetadata({
  locale: "ko",
  title: "제품형 프론트엔드 개발자",
  description: `React와 Next.js로 공공·교통·구독 서비스를 개발하고, 장고야 부탁해를 모바일부터 운영까지 만드는 ${person.brand}의 포트폴리오입니다.`,
});

export default function HomePage() {
  return <PortfolioHome locale="ko" />;
}
