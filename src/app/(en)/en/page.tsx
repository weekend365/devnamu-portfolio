import { PortfolioHome } from "@/components/portfolio";
import { buildMetadata } from "@/utils/site-metadata";

export const metadata = buildMetadata({
  locale: "en",
  title: "Nam Woo-hyun Portfolio | Frontend-focused Full-stack Developer",
  description:
    "A 3+ year developer portfolio spanning public-sector systems and a product launched on the App Store with React and Next.js.",
  appendIdentity: false,
});

export default function EnglishHomePage() {
  return <PortfolioHome locale="en" />;
}
