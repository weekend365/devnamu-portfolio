"use client";

import { usePathname } from "next/navigation";
import { Button, Line, Row, SmartLink, Text, ToggleButton } from "@once-ui-system/core";
import type { Locale } from "@/resources";
import { getContent, person } from "@/resources";
import { ThemeToggle } from "./ThemeToggle";

function localizedPath(locale: Locale, path: string): string {
  return locale === "en" ? `/en${path === "/" ? "" : path}` : path;
}

export function Header({ locale }: { locale: Locale }) {
  const pathname = usePathname() ?? localizedPath(locale, "/");
  const labels = getContent(locale).navigation;
  const homePath = localizedPath(locale, "/");
  const aboutPath = localizedPath(locale, "/about");
  const workPath = localizedPath(locale, "/work");
  const languagePath = locale === "en" ? pathname.replace(/^\/en(?=\/|$)/, "") || "/" : `/en${pathname === "/" ? "" : pathname}`;

  return (
    <Row
      as="header"
      className="portfolio-header"
      fillWidth
      horizontal="center"
      padding="8"
      zIndex={9}
    >
      <Row
        className="portfolio-header-inner"
        maxWidth="l"
        fillWidth
        horizontal="between"
        vertical="center"
      >
        <SmartLink className="portfolio-brand" href={homePath} aria-label={`${person.brand} · ${labels.home}`}>
          <Text variant="label-strong-m">{person.brand}</Text>
        </SmartLink>
        <Row
          as="nav"
          className="portfolio-nav"
          background="surface"
          border="neutral-alpha-medium"
          radius="m"
          padding="4"
          gap="4"
          vertical="center"
          aria-label={locale === "ko" ? "주요 탐색" : "Primary navigation"}
        >
          <ToggleButton
            prefixIcon="home"
            href={homePath}
            selected={pathname === homePath}
            aria-label={labels.home}
          />
          <Line background="neutral-alpha-medium" vert maxHeight="24" />
          <ToggleButton
            prefixIcon="person"
            href={aboutPath}
            label={labels.about}
            selected={pathname === aboutPath}
          />
          <ToggleButton
            prefixIcon="grid"
            href={workPath}
            label={labels.work}
            selected={pathname.startsWith(workPath)}
          />
          <Line background="neutral-alpha-medium" vert maxHeight="24" />
          <Button
            href={languagePath}
            size="s"
            variant="tertiary"
            aria-label={labels.languageLabel}
          >
            {labels.languageSwitch}
          </Button>
          <ThemeToggle locale={locale} />
        </Row>
      </Row>
    </Row>
  );
}
