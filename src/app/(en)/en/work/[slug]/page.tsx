import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PortfolioProject } from "@/components/portfolio";
import { getProject, getProjects, localize } from "@/resources";
import { buildMetadata } from "@/utils/site-metadata";

export function generateStaticParams() {
  return getProjects("en").map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug, "en");
  if (!project) return {};
  return buildMetadata({
    locale: "en",
    path: `/work/${project.slug}`,
    title: localize(project.title, "en"),
    description: localize(project.summary, "en"),
  });
}

export default async function EnglishProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug, "en");
  if (!project) notFound();
  return <PortfolioProject project={project} locale="en" />;
}
