"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import {
  Button,
  Column,
  DropdownWrapper,
  Line,
  Row,
  SmartLink,
  Text,
  ToggleButton,
} from "@once-ui-system/core";
import type { Locale } from "@/resources";
import { getContent, person } from "@/resources";
import { ThemeToggle } from "./ThemeToggle";

function localizedPath(locale: Locale, path: string): string {
  return locale === "en" ? `/en${path === "/" ? "" : path}` : path;
}

export function Header({ locale }: { locale: Locale }) {
  const [moreOpen, setMoreOpen] = useState(false);
  const pathname = usePathname() ?? localizedPath(locale, "/");
  const labels = getContent(locale).navigation;
  const homePath = localizedPath(locale, "/");
  const aboutPath = localizedPath(locale, "/about");
  const workPath = localizedPath(locale, "/work");
  const languagePath =
    locale === "en"
      ? pathname.replace(/^\/en(?=\/|$)/, "") || "/"
      : `/en${pathname === "/" ? "" : pathname}`;

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
        <SmartLink
          className="portfolio-brand"
          href={homePath}
          aria-label={`${person.brand} · ${person.name[locale]} · ${labels.home}`}
        >
          <Row gap="8" vertical="center">
            <Text className="portfolio-wordmark" variant="label-strong-m">
              {person.brand}
            </Text>
            <Text className="portfolio-owner" variant="label-default-s" onBackground="neutral-weak">
              / {person.name[locale]}
            </Text>
          </Row>
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
            label={labels.home}
            selected={pathname === homePath}
            aria-label={labels.home}
          />
          <Line className="nav-divider" background="neutral-alpha-medium" vert maxHeight="24" />
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
          <Line className="nav-divider" background="neutral-alpha-medium" vert maxHeight="24" />
          <Button
            className="language-toggle"
            href={languagePath}
            size="s"
            variant="tertiary"
            aria-label={labels.languageLabel}
            data-locale={locale}
          >
            <span className="language-toggle-full">{labels.languageSwitch}</span>
            <span className="language-toggle-short">{locale === "ko" ? "EN" : "KO"}</span>
          </Button>
          <span className="desktop-theme-toggle">
            <ThemeToggle locale={locale} />
          </span>
          <DropdownWrapper
            className="mobile-more"
            placement="top-end"
            isOpen={moreOpen}
            onOpenChange={setMoreOpen}
            trigger={
              <ToggleButton
                prefixIcon="more"
                label={locale === "ko" ? "더보기" : "More"}
                selected={moreOpen}
                aria-label={locale === "ko" ? "추가 설정" : "More options"}
              />
            }
            dropdown={
              <Column
                className="mobile-more-menu"
                background="surface"
                border="neutral-alpha-medium"
                radius="m"
                padding="4"
                gap="4"
                minWidth={10}
              >
                <Button
                  href={languagePath}
                  variant="tertiary"
                  prefixIcon="globe"
                  onClick={() => setMoreOpen(false)}
                >
                  {labels.languageSwitch}
                </Button>
                <ThemeToggle locale={locale} />
              </Column>
            }
          />
        </Row>
      </Row>
    </Row>
  );
}
