import type { Metadata } from "next";
import { baseURL, person, type Locale } from "@/resources";

const keywords = [
  person.brand,
  "데브나무",
  "남우현",
  "Nam Woo-hyun",
  "프론트엔드 개발자",
  "프론트엔드 중심 풀스택 개발자",
  "업무 UI",
  "React",
  "Next.js",
  "TypeScript",
  "React Native",
  "NestJS",
  "Spring Boot",
  "PostgreSQL",
  "제품 엔지니어링",
  "Jango",
  "ExpiryMate",
  "KCSC",
  "BIMS",
  "GIS",
  "TanStack Query",
  "Zustand",
  "디지털 건설기준",
  "Digital Construction Standards",
];

export function localePath(locale: Locale, path = "/"): string {
  if (locale === "ko") return path;
  return `/en${path === "/" ? "" : path}`;
}

export function buildMetadata({
  locale,
  title,
  description,
  path = "/",
  image,
  appendIdentity = true,
}: {
  locale: Locale;
  title: string;
  description: string;
  path?: string;
  image?: {
    url: string;
    width: number;
    height: number;
    alt: string;
  };
  appendIdentity?: boolean;
}): Metadata {
  const localized = localePath(locale, path);
  const koPath = localePath("ko", path);
  const enPath = localePath("en", path);
  const fullTitle = appendIdentity ? `${title} | ${person.brand} · ${person.name[locale]}` : title;
  const socialImage =
    image ?? {
      url: `/images/og/portfolio-${locale}.png?v=2`,
      width: 1200,
      height: 630,
      alt: `${person.brand} · ${person.name[locale]} · ${title}`,
    };

  return {
    metadataBase: new URL(baseURL),
    title: fullTitle,
    description,
    keywords,
    authors: [{ name: person.name[locale], url: baseURL }],
    creator: person.name[locale],
    alternates: {
      canonical: localized,
      languages: {
        "ko-KR": koPath,
        en: enPath,
        "x-default": koPath,
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "ko" ? "ko_KR" : "en_US",
      alternateLocale: locale === "ko" ? ["en_US"] : ["ko_KR"],
      url: localized,
      title: fullTitle,
      description,
      siteName: `${person.brand} · ${person.name[locale]} Portfolio`,
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [socialImage.url],
    },
    icons: {
      icon: "/icon.svg",
      shortcut: "/icon.svg",
    },
  };
}
