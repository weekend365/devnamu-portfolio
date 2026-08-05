import { PortfolioWork } from "@/components/portfolio";
import { buildMetadata } from "@/utils/site-metadata";

export const metadata = buildMetadata({
  locale: "ko",
  path: "/work",
  title: "프로젝트",
  description: "KCSC 디지털 건설기준, BIMS 버스 정보, 구독 플랫폼과 GIS 시스템의 문제·기여·결과를 소개합니다.",
});

export default function WorkPage() {
  return <PortfolioWork locale="ko" />;
}
