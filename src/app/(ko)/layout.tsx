import "@once-ui-system/core/css/styles.css";
import "@once-ui-system/core/css/tokens.css";
import "@/resources/custom.css";
import type { Metadata } from "next";
import { PortfolioShell } from "@/components/PortfolioShell";
import { baseURL } from "@/resources";
import { pretendard } from "@/resources/fonts";

export const metadata: Metadata = { metadataBase: new URL(baseURL) };

export default function KoreanLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={pretendard.variable} suppressHydrationWarning>
      <body>
        <PortfolioShell locale="ko">{children}</PortfolioShell>
      </body>
    </html>
  );
}
