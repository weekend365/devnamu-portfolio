import type { MetadataRoute } from "next";
import { person } from "@/resources";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${person.brand} · ${person.name.ko} 포트폴리오`,
    short_name: person.brand,
    description: `React와 Next.js로 제품의 화면부터 운영까지 만드는 ${person.brand} ${person.name.ko}의 포트폴리오`,
    lang: "ko-KR",
    start_url: "/",
    display: "standalone",
    background_color: "#07110b",
    theme_color: "#166534",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
