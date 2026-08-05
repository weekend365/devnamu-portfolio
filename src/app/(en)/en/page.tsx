import { PortfolioHome } from "@/components/portfolio";
import { person } from "@/resources";
import { buildMetadata } from "@/utils/site-metadata";

export const metadata = buildMetadata({
  locale: "en",
  title: "Product-minded Frontend Developer",
  description: `${person.brand} builds public, transportation, and subscription services with React and Next.js—and takes Jango from mobile UI through operations.`,
});

export default function EnglishHomePage() {
  return <PortfolioHome locale="en" />;
}
