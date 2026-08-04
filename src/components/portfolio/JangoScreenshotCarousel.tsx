"use client";

import { IconButton, Media, Row, Text } from "@once-ui-system/core";
import {
  type UIEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import type { Locale } from "@/resources";

const screenshotDescriptions = {
  ko: [
    "홈에서 오늘 만료되는 재료와 유통기한 현황, AI 추천 요리를 확인하는 화면",
    "보관 중인 재료를 유통기한 순서로 조회하고 관리하는 보관함 화면",
    "남은 재료를 우선 활용해 오늘의 AI 추천 요리를 확인하는 화면",
    "카메라로 상품 바코드와 유통기한을 인식하는 스캔 화면",
    "보관 위치와 유통기한을 단계별로 확인해 재료 등록을 완료하는 화면",
    "초대 코드로 가족이나 동료와 여러 냉장고를 공유하는 화면",
  ],
  en: [
    "Home dashboard showing ingredients expiring today, expiry status, and an AI recipe suggestion",
    "Inventory screen for browsing and managing stored ingredients by expiry date",
    "AI recipe recommendations prioritizing ingredients already in the refrigerator",
    "Camera scanner recognizing a product barcode and its expiry date",
    "Guided ingredient registration flow confirming storage location and expiry date",
    "Shared refrigerator screen for managing multiple spaces with family or colleagues",
  ],
} as const;

export function JangoScreenshotCarousel({ images, locale }: { images: string[]; locale: Locale }) {
  const trackRef = useRef<HTMLOListElement>(null);
  const animationFrame = useRef<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const updateActiveIndex = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const slides = Array.from(track.children) as HTMLElement[];
    const viewportCenter = track.scrollLeft + track.clientWidth / 2;
    const nearestIndex = slides.reduce((nearest, slide, index) => {
      const nearestSlide = slides[nearest];
      const nearestDistance = Math.abs(
        nearestSlide.offsetLeft + nearestSlide.offsetWidth / 2 - viewportCenter,
      );
      const distance = Math.abs(slide.offsetLeft + slide.offsetWidth / 2 - viewportCenter);
      return distance < nearestDistance ? index : nearest;
    }, 0);

    setActiveIndex((current) => (current === nearestIndex ? current : nearestIndex));
  }, []);

  useEffect(
    () => () => {
      if (animationFrame.current) cancelAnimationFrame(animationFrame.current);
    },
    [],
  );

  const handleScroll = (_event: UIEvent<HTMLOListElement>) => {
    if (animationFrame.current) cancelAnimationFrame(animationFrame.current);
    animationFrame.current = requestAnimationFrame(updateActiveIndex);
  };

  const goTo = useCallback((index: number) => {
    const track = trackRef.current;
    const slide = track?.children.item(index) as HTMLElement | null;
    if (!track || !slide) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    track.scrollTo({ left: slide.offsetLeft, behavior: reduceMotion ? "auto" : "smooth" });
    setActiveIndex(index);
  }, []);

  const copy =
    locale === "ko"
      ? {
          label: "장고야 부탁해 앱 화면",
          instruction: "좌우로 넘기거나 이전·다음 버튼으로 실제 앱 화면을 살펴보세요.",
          previous: "이전 앱 화면",
          next: "다음 앱 화면",
          open: (index: number) => `${index + 1}번째 앱 화면으로 이동`,
        }
      : {
          label: "Jango app screenshots",
          instruction: "Swipe horizontally or use the previous and next buttons to explore the app screens.",
          previous: "Previous app screen",
          next: "Next app screen",
          open: (index: number) => `Go to app screen ${index + 1}`,
        };

  return (
    <section className="screenshot-carousel" aria-label={copy.label}>
      <Row
        fillWidth
        horizontal="between"
        vertical="center"
        gap="16"
        paddingX="8"
        s={{ direction: "column", vertical: "start" }}
      >
        <Text id="jango-carousel-instructions" variant="body-default-s" onBackground="neutral-weak">
          {copy.instruction}
        </Text>
        <Row className="screenshot-controls" gap="8" vertical="center">
          <Text aria-live="polite" variant="label-strong-s" onBackground="neutral-weak">
            {activeIndex + 1} / {images.length}
          </Text>
          <IconButton
            icon="chevronLeft"
            variant="secondary"
            size="s"
            onClick={() => goTo(Math.max(0, activeIndex - 1))}
            disabled={activeIndex === 0}
            aria-label={copy.previous}
          />
          <IconButton
            icon="chevronRight"
            variant="secondary"
            size="s"
            onClick={() => goTo(Math.min(images.length - 1, activeIndex + 1))}
            disabled={activeIndex === images.length - 1}
            aria-label={copy.next}
          />
        </Row>
      </Row>

      <ol
        ref={trackRef}
        className="screenshot-track"
        onScroll={handleScroll}
        aria-describedby="jango-carousel-instructions"
      >
        {images.map((image, index) => (
          <li className="screenshot-slide" key={image} aria-label={`${index + 1} / ${images.length}`}>
            <Media
              className="screenshot-media"
              src={image}
              alt={screenshotDescriptions[locale][index] ?? `${copy.label} ${index + 1}`}
              aspectRatio="1125 / 2436"
              objectFit="cover"
              sizes="(max-width: 480px) 78vw, (max-width: 1024px) 38vw, 288px"
              priority={index === 0}
              radius="xl"
            />
          </li>
        ))}
      </ol>

      <Row as="nav" className="screenshot-pagination" horizontal="center" gap="8" aria-label={copy.label}>
        {images.map((image, index) => (
          <button
            key={image}
            className="screenshot-dot"
            type="button"
            aria-label={copy.open(index)}
            aria-current={activeIndex === index ? "true" : undefined}
            onClick={() => goTo(index)}
          />
        ))}
      </Row>
    </section>
  );
}
