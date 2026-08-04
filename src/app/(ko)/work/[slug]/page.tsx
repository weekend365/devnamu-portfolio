import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PortfolioProject } from "@/components/portfolio";
import { getProject, getProjects, localize } from "@/resources";
import { buildMetadata } from "@/utils/site-metadata";

export function generateStaticParams() {
  return getProjects("ko").map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug, "ko");
  if (!project) return {};
  const image = project.images[0];

  return buildMetadata({
    locale: "ko",
    path: `/work/${project.slug}`,
    title: localize(project.title, "ko"),
    description: localize(project.summary, "ko"),
    image: image
      ? {
          url: image.src,
          width: image.width ?? (image.variant === "mobile" ? 1125 : 1060),
          height: image.height ?? (image.variant === "mobile" ? 2436 : 600),
          alt: localize(image.alt, "ko"),
        }
      : undefined,
  });
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug, "ko");
  if (!project) notFound();
  return <PortfolioProject project={project} locale="ko" />;
}
