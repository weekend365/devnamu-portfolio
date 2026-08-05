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
import { getContent, localize, pageCopy, person } from "@/resources";
import { ThemeToggle } from "./ThemeToggle";

function localizedPath(locale: Locale, path: string): string {
  return locale === "en" ? `/en${path === "/" ? "" : path}` : path;
}

export function Header({ locale }: { locale: Locale }) {
  const [moreOpen, setMoreOpen] = useState(false);
  const pathname = usePathname() ?? localizedPath(locale, "/");
  const labels = getContent(locale).navigation;
  const copy = pageCopy.header;
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
          className="portfolio-nav desktop-navigation"
          background="surface"
          border="neutral-alpha-medium"
          radius="m"
          padding="4"
          gap="4"
          vertical="center"
          aria-label={localize(copy.primaryNavigation, locale)}
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
        </Row>
        <DropdownWrapper
          className="mobile-navigation"
          placement="bottom-end"
          isOpen={moreOpen}
          onOpenChange={setMoreOpen}
          trigger={
            <ToggleButton
              prefixIcon="menu"
              label={localize(copy.menu, locale)}
              selected={moreOpen}
              aria-label={localize(copy.openMenu, locale)}
            />
          }
          dropdown={
            <Column
              as="nav"
              className="mobile-navigation-menu"
              background="surface"
              border="neutral-alpha-medium"
              radius="l"
              padding="8"
              gap="4"
              minWidth={15}
              aria-label={localize(copy.primaryNavigation, locale)}
            >
              <Text
                className="mobile-navigation-label"
                variant="label-strong-xs"
                onBackground="neutral-weak"
              >
                {person.brand} · {person.name[locale]}
              </Text>
              <ToggleButton
                prefixIcon="home"
                href={homePath}
                label={labels.home}
                selected={pathname === homePath}
                onClick={() => setMoreOpen(false)}
              />
              <ToggleButton
                prefixIcon="person"
                href={aboutPath}
                label={labels.about}
                selected={pathname === aboutPath}
                onClick={() => setMoreOpen(false)}
              />
              <ToggleButton
                prefixIcon="grid"
                href={workPath}
                label={labels.work}
                selected={pathname.startsWith(workPath)}
                onClick={() => setMoreOpen(false)}
              />
              <Line background="neutral-alpha-medium" />
              <Button
                href={languagePath}
                variant="tertiary"
                prefixIcon="globe"
                onClick={() => setMoreOpen(false)}
              >
                {labels.languageSwitch}
              </Button>
              <ThemeToggle locale={locale} showLabel />
            </Column>
          }
        />
      </Row>
    </Row>
  );
}
