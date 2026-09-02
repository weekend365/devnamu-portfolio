import { readFile, mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import React from "react";
import { ImageResponse } from "next/og.js";

const root = resolve(import.meta.dirname, "..");
const [screenshot, regularFont, boldFont] = await Promise.all([
  readFile(resolve(root, "public/images/projects/jango/01.png")),
  readFile(resolve(root, "src/resources/fonts/Pretendard-Regular.otf")),
  readFile(resolve(root, "src/resources/fonts/Pretendard-Bold.otf")),
]);
const screenshotData = `data:image/png;base64,${screenshot.toString("base64")}`;
const h = React.createElement;

const copy = {
  ko: {
    eyebrow: "검증된 제품 개발 경험",
    headline: ["출시와 납품으로", "증명한 제품 개발"],
    proofs: [
      ["2 STORES", "iOS·Android 정식 출시"],
      ["PUBLIC", "공공기관 납품"],
      ["885", "자동 테스트 통과"],
    ],
  },
  en: {
    eyebrow: "VERIFIED PRODUCT EXPERIENCE",
    headline: ["Product work proven", "by launch and delivery"],
    proofs: [
      ["2 STORES", "iOS and Android launched"],
      ["PUBLIC", "Public-sector delivery"],
      ["885", "Automated tests"],
    ],
  },
};

function socialImage(locale) {
  const content = copy[locale];
  return h(
    "section",
    {
      style: {
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "stretch",
        justifyContent: "space-between",
        overflow: "hidden",
        padding: "64px 76px",
        background:
          "radial-gradient(circle at 86% 18%, rgba(183,243,74,0.34), transparent 32%), linear-gradient(135deg, #fbfcf9 0%, #f5f8f1 58%, #edf5e5 100%)",
        color: "#10140d",
        fontFamily: "Pretendard",
      },
    },
    h(
      "section",
      {
        style: {
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: 724,
          padding: "16px 0 10px",
        },
      },
      h(
        "section",
        { style: { display: "flex", flexDirection: "column", gap: 20 } },
        h(
          "span",
          {
            style: {
              color: "#4d7000",
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: 1.5,
            },
          },
          "DEVNAMU · NAM WOO-HYUN",
        ),
        h(
          "section",
          {
            style: {
              display: "flex",
              flexDirection: "column",
              fontSize: locale === "ko" ? 62 : 58,
              fontWeight: 700,
              letterSpacing: locale === "ko" ? -4.4 : -3.2,
              lineHeight: 1.04,
            },
          },
          h("span", null, content.headline[0]),
          h("span", null, content.headline[1]),
        ),
      ),
      h(
        "section",
        { style: { display: "flex", flexDirection: "column", gap: 16 } },
        h(
          "section",
          { style: { display: "flex", gap: 12 } },
          ...content.proofs.map(([value, label]) =>
            h(
              "section",
              {
                key: value,
                style: {
                  display: "flex",
                  flexDirection: "column",
                  width: 208,
                  gap: 4,
                  padding: "14px 16px",
                  border: "1px solid #d8e2d0",
                  borderRadius: 15,
                  background: "rgba(255,255,255,0.76)",
                },
              },
              h(
                "span",
                { style: { color: "#4d7000", fontSize: 23, fontWeight: 700 } },
                value,
              ),
              h("span", { style: { color: "#5d6658", fontSize: 17 } }, label),
            ),
          ),
        ),
        h(
          "span",
          { style: { color: "#687064", fontSize: 20, letterSpacing: 0.2 } },
          "React · Next.js · React Native · NestJS",
        ),
      ),
    ),
    h(
      "section",
      {
        style: {
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          width: 304,
          height: 574,
          overflow: "hidden",
          border: "7px solid #10110f",
          borderRadius: 44,
          background: "#000",
          boxShadow: "0 32px 72px rgba(20,40,13,0.24)",
          transform: "rotate(1.5deg) translateY(32px)",
        },
      },
      h("img", {
        src: screenshotData,
        alt: "",
        width: 304,
        height: 658,
        style: { objectFit: "cover", objectPosition: "top" },
      }),
    ),
  );
}

for (const locale of ["ko", "en"]) {
  const response = new ImageResponse(socialImage(locale), {
    width: 1200,
    height: 630,
    fonts: [
      { name: "Pretendard", data: Uint8Array.from(regularFont).buffer, weight: 400 },
      { name: "Pretendard", data: Uint8Array.from(boldFont).buffer, weight: 700 },
    ],
  });
  const output = resolve(root, `public/images/og/portfolio-${locale}.png`);
  await mkdir(dirname(output), { recursive: true });
  await writeFile(output, Buffer.from(await response.arrayBuffer()));
}

console.log("Generated localized 1200×630 social images.");
