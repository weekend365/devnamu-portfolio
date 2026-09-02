"use client";

import { IconButton, Media, Row, Text } from "@once-ui-system/core";
import { type KeyboardEvent, type UIEvent, useCallback, useEffect, useRef, useState } from "react";
import { Tilt } from "@/components/motion/Tilt";
import { localize, type Locale, type ProjectImage } from "@/resources";

type ProjectScreenshotCarouselProps = {
  id: string;
  images: ProjectImage[];
  locale: Locale;
  projectTitle: string;
};

export function ProjectScreenshotCarousel({
  id,
  images,
  locale,
  projectTitle,
}: ProjectScreenshotCarouselProps) {
  const trackRef = useRef<HTMLOListElement>(null);
  const animationFrame = useRef<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const variant = images[0]?.variant ?? "desktop";
  const instructionsId = `${id}-carousel-instructions`;

  const copy =
    locale === "ko"
      ? {
          label: `${projectTitle} 실제 화면`,
          instruction:
            variant === "mobile"
              ? "좌우로 넘기거나 이전·다음 버튼으로 실제 앱 화면을 살펴보세요."
              : "좌우로 넘기거나 이전·다음 버튼으로 실제 시스템 화면을 살펴보세요.",
          previous: "이전 화면",
          next: "다음 화면",
          open: (index: number) => `${index + 1}번째 화면으로 이동`,
          slide: (index: number) => `${images.length}개 중 ${index + 1}번째 화면`,
        }
      : {
          label: `${projectTitle} screenshots`,
          instruction:
            variant === "mobile"
              ? "Swipe horizontally or use the previous and next buttons to explore the app."
              : "Scroll horizontally or use the previous and next buttons to explore the live interface.",
          previous: "Previous screen",
          next: "Next screen",
          open: (index: number) => `Go to screen ${index + 1}`,
          slide: (index: number) => `Screen ${index + 1} of ${images.length}`,
        };

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
    const left = slide.offsetLeft - (track.clientWidth - slide.offsetWidth) / 2;
    track.scrollTo({ left, behavior: reduceMotion ? "auto" : "smooth" });
    setActiveIndex(index);
  }, []);

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;

    event.preventDefault();
    goTo(
      event.key === "ArrowLeft"
        ? Math.max(0, activeIndex - 1)
        : Math.min(images.length - 1, activeIndex + 1),
    );
  };

  if (images.length === 0) return null;

  return (
    <section
      className={`screenshot-carousel screenshot-carousel-${variant}`}
      aria-label={copy.label}
      aria-roledescription="carousel"
      onKeyDown={handleKeyDown}
    >
      <Row
        fillWidth
        horizontal="between"
        vertical="center"
        gap="16"
        paddingX="8"
        s={{ direction: "column", vertical: "start" }}
      >
        <Text id={instructionsId} variant="body-default-s" onBackground="neutral-weak">
          {copy.instruction}
        </Text>
        <Row className="screenshot-controls" gap="8" vertical="center">
          <Text
            aria-live="polite"
            aria-atomic="true"
            variant="label-strong-s"
            onBackground="neutral-weak"
          >
            {activeIndex + 1} / {images.length}
          </Text>
          <IconButton
            icon="chevronLeft"
            variant="secondary"
            size="s"
            onClick={() => goTo(Math.max(0, activeIndex - 1))}
            disabled={activeIndex === 0}
            aria-label={copy.previous}
            tooltip={copy.previous}
          />
          <IconButton
            icon="chevronRight"
            variant="secondary"
            size="s"
            onClick={() => goTo(Math.min(images.length - 1, activeIndex + 1))}
            disabled={activeIndex === images.length - 1}
            aria-label={copy.next}
            tooltip={copy.next}
          />
        </Row>
      </Row>

      <ol
        ref={trackRef}
        className="screenshot-track"
        onScroll={handleScroll}
        aria-describedby={instructionsId}
      >
        {images.map((image, index) => (
          <li
            className={`screenshot-slide screenshot-slide-${image.variant}`}
            key={image.src}
            aria-label={copy.slide(index)}
          >
            <figure className="screenshot-figure">
              <Tilt className="screenshot-tilt" max={image.variant === "mobile" ? 7 : 5}>
                <Media
                  className={`screenshot-media screenshot-media-${image.variant}`}
                  src={image.src}
                  alt={localize(image.alt, locale)}
                  aspectRatio={
                    image.width && image.height
                      ? `${image.width} / ${image.height}`
                      : image.variant === "desktop"
                        ? "16 / 9"
                        : "1125 / 2436"
                  }
                  objectFit={image.variant === "mobile" ? "cover" : "contain"}
                  sizes={
                    image.variant === "mobile"
                      ? "(max-width: 480px) 78vw, (max-width: 1024px) 38vw, 288px"
                      : "(max-width: 768px) 88vw, 832px"
                  }
                  priority={index === 0}
                  radius={image.variant === "mobile" ? "xl" : "l"}
                />
              </Tilt>
              <Text
                as="figcaption"
                className="screenshot-caption"
                variant="label-default-s"
                onBackground="neutral-weak"
              >
                {localize(image.caption, locale)}
              </Text>
            </figure>
          </li>
        ))}
      </ol>

      <Row
        as="nav"
        className="screenshot-pagination"
        horizontal="center"
        gap="8"
        aria-label={copy.label}
      >
        {images.map((image, index) => (
          <button
            key={image.src}
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
