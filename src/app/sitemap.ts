import type { MetadataRoute } from "next";
import { baseURL, getProjects } from "@/resources";
import { localePath } from "@/utils/site-metadata";

const LAST_UPDATED = "2026-08-04";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["/", "/about", "/work"];
  const locales = ["ko", "en"] as const;

  const pageEntries = locales.flatMap((locale) =>
    pages.map((path) => ({
      url: `${baseURL}${localePath(locale, path)}`,
      lastModified: LAST_UPDATED,
      changeFrequency: path === "/" ? ("monthly" as const) : ("yearly" as const),
      priority: path === "/" ? 1 : 0.8,
      alternates: {
        languages: {
          "ko-KR": `${baseURL}${localePath("ko", path)}`,
          en: `${baseURL}${localePath("en", path)}`,
          "x-default": `${baseURL}${localePath("ko", path)}`,
        },
      },
    })),
  );

  const projectEntries = getProjects().flatMap((project) =>
    locales.map((locale) => ({
      url: `${baseURL}${localePath(locale, `/work/${project.slug}`)}`,
      lastModified: LAST_UPDATED,
      changeFrequency: "yearly" as const,
      priority: project.featured ? 0.95 : 0.7,
      alternates: {
        languages: {
          "ko-KR": `${baseURL}${localePath("ko", `/work/${project.slug}`)}`,
          en: `${baseURL}${localePath("en", `/work/${project.slug}`)}`,
          "x-default": `${baseURL}${localePath("ko", `/work/${project.slug}`)}`,
        },
      },
    })),
  );

  return [...pageEntries, ...projectEntries];
}
