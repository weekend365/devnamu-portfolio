import { PortfolioWork } from "@/components/portfolio";
import { buildMetadata } from "@/utils/site-metadata";

export const metadata = buildMetadata({
  locale: "ko",
  path: "/work",
  title: "프로젝트",
  description: "장고야 부탁해를 중심으로 공공 건설기준, 버스 정보, 구독 플랫폼과 GIS 시스템을 만든 과정과 기여를 소개합니다.",
});

export default function WorkPage() {
  return <PortfolioWork locale="ko" />;
}
