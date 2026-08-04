import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "DEVNAMU",
    short_name: "DEVNAMU",
    description: "React와 Next.js로 제품의 화면부터 운영까지 만드는 DEVNAMU의 포트폴리오",
    lang: "ko-KR",
    start_url: "/",
    display: "standalone",
    background_color: "#0b0d0e",
    theme_color: "#20a97a",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
