import { PortfolioHome } from "@/components/portfolio";
import { person } from "@/resources";
import { buildMetadata } from "@/utils/site-metadata";

export const metadata = buildMetadata({
  locale: "en",
  title: "Frontend-focused Full-stack Developer",
  description: `${person.brand} builds KCSC digital construction standards, BIMS bus information, subscription, and GIS systems with React and Next.js.`,
});

export default function EnglishHomePage() {
  return <PortfolioHome locale="en" />;
}
