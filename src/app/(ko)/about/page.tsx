import { PortfolioAbout } from "@/components/portfolio";
import { person } from "@/resources";
import { buildMetadata } from "@/utils/site-metadata";

export const metadata = buildMetadata({
  locale: "ko",
  path: "/about",
  title: "소개와 경력",
  description: `${person.name.ko}의 공공·교통·구독 서비스 개발 경력과 React, Next.js 중심의 기술, 학력, 교육 및 자격을 소개합니다.`,
});

export default function AboutPage() {
  return <PortfolioAbout locale="ko" />;
}
