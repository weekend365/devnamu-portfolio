import { PortfolioAbout } from "@/components/portfolio";
import { person } from "@/resources";
import { buildMetadata } from "@/utils/site-metadata";

export const metadata = buildMetadata({
  locale: "ko",
  path: "/about",
  title: "소개와 경력",
  description: `${person.brand}의 React·Next.js 중심 프론트엔드 개발 경력과 NestJS·PostgreSQL, Spring Boot API 연동 경험을 소개합니다.`,
});

export default function AboutPage() {
  return <PortfolioAbout locale="ko" />;
}
