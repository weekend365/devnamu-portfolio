import { PortfolioWork } from "@/components/portfolio";
import { buildMetadata } from "@/utils/site-metadata";

export const metadata = buildMetadata({
  locale: "en",
  path: "/work",
  title: "Projects",
  description: "Case studies covering KCSC digital construction standards, BIMS bus information, subscription services, and GIS—from problem to implementation and outcome.",
});

export default function EnglishWorkPage() {
  return <PortfolioWork locale="en" />;
}
