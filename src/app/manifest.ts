import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "남우현 · Nam Woo-hyun",
    short_name: "Nam Woo-hyun",
    description: "React와 Next.js로 제품의 화면부터 운영까지 만드는 개발자 남우현의 포트폴리오",
    lang: "ko-KR",
    start_url: "/",
    display: "standalone",
    background_color: "#0b0d0e",
    theme_color: "#20a97a",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
