import type { Metadata } from "next";
import { baseURL, person, type Locale } from "@/resources";

const keywords = [
  "남우현",
  "Nam Woo-hyun",
  "프론트엔드 개발자",
  "풀스택 개발자",
  "React",
  "Next.js",
  "TypeScript",
  "React Native",
  "NestJS",
  "Spring Boot",
  "PostgreSQL",
  "장고야 부탁해",
  "Jango",
  "ExpiryMate",
  "KCSC",
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
}): Metadata {
  const localized = localePath(locale, path);
  const koPath = localePath("ko", path);
  const enPath = localePath("en", path);
  const fullTitle = `${title} | ${person.name[locale]}`;
  const socialImage =
    image ??
    {
      url: `/images/og/portfolio-${locale}.png`,
      width: 1200,
      height: 630,
      alt: `${person.name[locale]} · ${title}`,
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
      siteName: `${person.name[locale]} Portfolio`,
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
