import { PortfolioWork } from "@/components/portfolio";
import { buildMetadata } from "@/utils/site-metadata";

export const metadata = buildMetadata({
  locale: "en",
  path: "/work",
  title: "Projects",
  description: "Case studies covering Jango, construction standards, bus information, subscription services, and GIS—from role to implementation details.",
});

export default function EnglishWorkPage() {
  return <PortfolioWork locale="en" />;
}
