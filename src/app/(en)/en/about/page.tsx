import { PortfolioAbout } from "@/components/portfolio";
import { person } from "@/resources";
import { buildMetadata } from "@/utils/site-metadata";

export const metadata = buildMetadata({
  locale: "en",
  path: "/about",
  title: "About & Experience",
  description: `${person.brand}'s frontend-focused experience with React and Next.js, plus NestJS, PostgreSQL, and Spring Boot API integrations.`,
});

export default function EnglishAboutPage() {
  return <PortfolioAbout locale="en" />;
}
