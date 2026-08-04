import {
  Background,
  Column,
  Flex,
  type SpacingToken,
  type opacity,
} from "@once-ui-system/core";
import type { Locale } from "@/resources";
import { dataStyle, effects, style } from "@/resources";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Providers } from "./Providers";

export function PortfolioShell({ children, locale }: { children: React.ReactNode; locale: Locale }) {
  return (
    <Providers>
      <Column background="page" fillWidth margin="0" horizontal="center" style={{ minHeight: "100vh" }}>
        <Flex fill position="fixed" aria-hidden="true" pointerEvents="none">
          <Background
            mask={effects.mask}
            gradient={{ ...effects.gradient, opacity: effects.gradient.opacity as opacity }}
            dots={{
              ...effects.dots,
              opacity: effects.dots.opacity as opacity,
              size: effects.dots.size as SpacingToken,
            }}
            grid={{ ...effects.grid, opacity: effects.grid.opacity as opacity }}
            lines={{
              ...effects.lines,
              opacity: effects.lines.opacity as opacity,
              size: effects.lines.size as SpacingToken,
            }}
          />
        </Flex>
        <a className="skip-link" href="#main-content">
          {locale === "ko" ? "본문으로 바로가기" : "Skip to main content"}
        </a>
        <Header locale={locale} />
        <Flex
          as="main"
          id="main-content"
          tabIndex={-1}
          className="site-main"
          zIndex={1}
          fillWidth
          horizontal="center"
          flex={1}
        >
          {children}
        </Flex>
        <Footer locale={locale} />
      </Column>
      <script
        id="theme-init"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: This inline theme bootstrap is generated exclusively from trusted static configuration.
        dangerouslySetInnerHTML={{
          __html: `(function(){try{var r=document.documentElement;var saved=localStorage.getItem('data-theme');var theme=saved||(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');r.setAttribute('data-theme',theme);${Object.entries({
            brand: style.brand,
            accent: style.accent,
            neutral: style.neutral,
            solid: style.solid,
            "solid-style": style.solidStyle,
            border: style.border,
            surface: style.surface,
            transition: style.transition,
            scaling: style.scaling,
            "viz-style": dataStyle.variant,
          })
            .map(([key, value]) => `r.setAttribute('data-${key}','${value}');`)
            .join("")}}catch(e){document.documentElement.setAttribute('data-theme','dark')}})();`,
        }}
      />
    </Providers>
  );
}
