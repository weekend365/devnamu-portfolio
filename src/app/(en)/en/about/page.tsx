import { PortfolioAbout } from "@/components/portfolio";
import { person } from "@/resources";
import { buildMetadata } from "@/utils/site-metadata";

export const metadata = buildMetadata({
  locale: "en",
  path: "/about",
  title: "About & Experience",
  description: `${person.name.en}'s experience building public, transportation, and subscription services, with skills centered on React and Next.js.`,
});

export default function EnglishAboutPage() {
  return <PortfolioAbout locale="en" />;
}
