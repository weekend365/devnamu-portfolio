import localFont from "next/font/local";

export const pretendard = localFont({
  src: [
    { path: "./fonts/Pretendard-Regular.otf", weight: "400", style: "normal" },
    { path: "./fonts/Pretendard-SemiBold.otf", weight: "600", style: "normal" },
    { path: "./fonts/Pretendard-Bold.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-pretendard",
  display: "swap",
});

