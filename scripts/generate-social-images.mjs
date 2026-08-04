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
  ko: ["화면부터 운영까지,", "제품의 흐름을 만듭니다."],
  en: ["I build the product,", "not just the interface."],
};

function socialImage(locale) {
  const headline = copy[locale];
  return h(
    "section",
    {
      style: {
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        overflow: "hidden",
        padding: "76px 86px",
        background: "linear-gradient(135deg, #07110b 0%, #0d1b12 54%, #12351f 100%)",
        color: "#f7fbfa",
        fontFamily: "Pretendard",
      },
    },
    h(
      "section",
      { style: { display: "flex", flexDirection: "column", width: 700, gap: 22 } },
      h(
        "span",
        { style: { color: "#4ade80", fontSize: 24, fontWeight: 600, letterSpacing: 2 } },
        "DEVNAMU · NAM WOO-HYUN",
      ),
      h(
        "section",
        {
          style: {
            display: "flex",
            flexDirection: "column",
            fontSize: locale === "ko" ? 54 : 58,
            fontWeight: 700,
            letterSpacing: -3.5,
            lineHeight: 1.08,
          },
        },
        h("span", null, headline[0]),
        h("span", null, headline[1]),
      ),
      h(
        "span",
        { style: { color: "#9db0a2", fontSize: 28, lineHeight: 1.4 } },
        "React · Next.js · React Native · NestJS",
      ),
    ),
    h(
      "section",
      {
        style: {
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          width: 292,
          height: 560,
          overflow: "hidden",
          border: "1px solid rgba(255,255,255,0.18)",
          borderRadius: 42,
          background: "#000",
          boxShadow: "0 36px 90px rgba(0,0,0,0.42)",
          transform: "rotate(2deg) translateY(34px)",
        },
      },
      h("img", {
        src: screenshotData,
        alt: "",
        width: 292,
        height: 632,
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
