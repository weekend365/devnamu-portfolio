"use client";

import { useReducedMotion } from "motion/react";
import { usePathname } from "next/navigation";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react";
import type { Locale } from "@/resources";
import { characterVideos, type BuddyState } from "./characterVideos";

const POSITION_KEY = "character-buddy-position";
const DRAG_THRESHOLD_PX = 8;
const SPEAK_DURATION_MS = 10000;
const INTRO_DURATION_MS = 7000;

type BuddyPosition = { left: number; top: number };

const POSE_SRC: Record<BuddyState, string> = {
  intro: characterVideos.intro.poster,
  idle: characterVideos.idle.poster,
  speak: characterVideos.speak.poster,
};

function readStoredPosition(): BuddyPosition | null {
  try {
    const raw = window.localStorage.getItem(POSITION_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<BuddyPosition>;
    if (typeof parsed.left !== "number" || typeof parsed.top !== "number") return null;
    if (!Number.isFinite(parsed.left) || !Number.isFinite(parsed.top)) return null;
    return { left: parsed.left, top: parsed.top };
  } catch {
    return null;
  }
}

function storePosition(position: BuddyPosition) {
  try {
    window.localStorage.setItem(POSITION_KEY, JSON.stringify(position));
  } catch {
    // Ignore quota / private-mode failures.
  }
}

function clampBuddyPosition(
  left: number,
  top: number,
  width: number,
  height: number,
): BuddyPosition {
  const maxLeft = Math.max(0, window.innerWidth - width);
  const maxTop = Math.max(0, window.innerHeight - height);
  return {
    left: Math.min(Math.max(0, left), maxLeft),
    top: Math.min(Math.max(0, top), maxTop),
  };
}

export function CharacterBuddy({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const homePath = locale === "en" ? "/en" : "/";

  return pathname === homePath ? <CharacterBuddyContent locale={locale} /> : null;
}

function CharacterBuddyContent({ locale }: { locale: Locale }) {
  const reduced = useReducedMotion();
  const rootRef = useRef<HTMLDivElement>(null);
  const poseTimerRef = useRef<number | null>(null);
  const dragRef = useRef({
    pointerId: -1,
    tracking: false,
    moved: false,
    offsetX: 0,
    offsetY: 0,
    startX: 0,
    startY: 0,
  });
  const positionRef = useRef<BuddyPosition | null>(null);
  const [position, setPosition] = useState<BuddyPosition | null>(null);
  const [dragging, setDragging] = useState(false);
  const [pose, setPose] = useState<BuddyState>(reduced ? "idle" : "intro");

  const labels =
    locale === "ko"
      ? {
          name: "장고",
          click: "드래그해서 옮기거나, 클릭하면 자기소개를 들을 수 있어요",
          close: "말풍선을 닫으려면 다시 클릭하세요",
          states: {
            intro: "환영 중",
            idle: "대기 중",
            speak: "자기소개 중",
          } satisfies Record<BuddyState, string>,
          welcome: [
            "안녕하세요! 저는 장고예요.",
            "데브나무의 포트폴리오에 오신 걸 환영해요.",
            "편하게 둘러보세요~!",
          ],
          introLines: [
            "저는 ‘장고야 부탁해’의 마스코트 장고예요.",
            "냉장고를 지키는 꼬마 셰프랍니다.",
            "앱스토어나 플레이스토어에서 만나요~!",
          ],
        }
      : {
          name: "Jango",
          click: "Drag to move, or click to hear my intro",
          close: "Click again to close the speech bubble",
          states: {
            intro: "welcoming",
            idle: "idle",
            speak: "introducing myself",
          } satisfies Record<BuddyState, string>,
          welcome: ["Hello! I'm Jango.", "Welcome to the portfolio!", "Feel free to look around~"],
          introLines: [
            "Hello, I'm Jango!",
            "I'm the mascot of Jango — 장고야 부탁해.",
            "I'm a little chef who looks after the fridge.",
            "See you on the App Store and Play Store!",
          ],
        };

  const bubbleLines = pose === "intro" ? labels.welcome : labels.introLines;
  const showBubble = !dragging && (pose === "intro" || pose === "speak");

  const clearPoseTimer = useCallback(() => {
    if (poseTimerRef.current === null) return;
    window.clearTimeout(poseTimerRef.current);
    poseTimerRef.current = null;
  }, []);

  const applyPosition = useCallback((next: BuddyPosition) => {
    const node = rootRef.current;
    const width = node?.offsetWidth ?? 0;
    const height = node?.offsetHeight ?? 0;
    const clamped = clampBuddyPosition(next.left, next.top, width, height);
    positionRef.current = clamped;
    setPosition(clamped);
    return clamped;
  }, []);

  const goIdle = useCallback(() => {
    clearPoseTimer();
    setPose("idle");
  }, [clearPoseTimer]);

  const openSpeak = useCallback(() => {
    clearPoseTimer();
    setPose("speak");
    poseTimerRef.current = window.setTimeout(() => {
      poseTimerRef.current = null;
      setPose("idle");
    }, SPEAK_DURATION_MS);
  }, [clearPoseTimer]);

  const toggleSpeak = useCallback(() => {
    if (pose === "intro" || pose === "speak") {
      goIdle();
      return;
    }
    openSpeak();
  }, [goIdle, openSpeak, pose]);

  useLayoutEffect(() => {
    const saved = readStoredPosition();
    if (!saved) return;
    applyPosition(saved);
  }, [applyPosition]);

  useEffect(() => {
    const onResize = () => {
      if (!positionRef.current) return;
      applyPosition(positionRef.current);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [applyPosition]);

  useEffect(() => {
    if (reduced) {
      setPose("idle");
      return;
    }

    setPose("intro");
    poseTimerRef.current = window.setTimeout(() => {
      poseTimerRef.current = null;
      setPose("idle");
    }, INTRO_DURATION_MS);

    return () => clearPoseTimer();
  }, [clearPoseTimer, reduced]);

  useEffect(() => () => clearPoseTimer(), [clearPoseTimer]);

  const onPointerDown = useCallback((event: ReactPointerEvent<HTMLButtonElement>) => {
    if (event.button !== 0) return;
    const node = rootRef.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    dragRef.current = {
      pointerId: event.pointerId,
      tracking: true,
      moved: false,
      offsetX: event.clientX - rect.left,
      offsetY: event.clientY - rect.top,
      startX: event.clientX,
      startY: event.clientY,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
  }, []);

  const onPointerMove = useCallback(
    (event: ReactPointerEvent<HTMLButtonElement>) => {
      const drag = dragRef.current;
      if (!drag.tracking || drag.pointerId !== event.pointerId) return;

      const distance = Math.hypot(event.clientX - drag.startX, event.clientY - drag.startY);
      if (!drag.moved && distance < DRAG_THRESHOLD_PX) return;

      drag.moved = true;
      setDragging(true);
      applyPosition({
        left: event.clientX - drag.offsetX,
        top: event.clientY - drag.offsetY,
      });
    },
    [applyPosition],
  );

  const endPointer = useCallback(
    (event: ReactPointerEvent<HTMLButtonElement>) => {
      const drag = dragRef.current;
      if (!drag.tracking || drag.pointerId !== event.pointerId) return;

      const wasDrag = drag.moved;
      drag.tracking = false;
      setDragging(false);

      if (event.currentTarget.hasPointerCapture(event.pointerId)) {
        event.currentTarget.releasePointerCapture(event.pointerId);
      }

      if (wasDrag) {
        const node = rootRef.current;
        if (node) {
          const rect = node.getBoundingClientRect();
          storePosition(applyPosition({ left: rect.left, top: rect.top }));
        }
        goIdle();
        return;
      }

      toggleSpeak();
    },
    [applyPosition, goIdle, toggleSpeak],
  );

  const buddyWidth = rootRef.current?.offsetWidth ?? 0;
  const bubbleSide: "left" | "right" =
    position &&
    position.left + buddyWidth / 2 <= (typeof window === "undefined" ? 0 : window.innerWidth / 2)
      ? "right"
      : "left";

  return (
    <div
      ref={rootRef}
      className={[
        "character-buddy",
        "no-print",
        position ? "is-placed" : "",
        dragging ? "is-dragging" : "",
        pose === "speak" || pose === "intro" ? "is-speaking" : "",
      ]
        .filter(Boolean)
        .join(" ")}
      style={position ? { left: position.left, top: position.top } : undefined}
    >
      <div className="character-buddy-stage">
        <button
          type="button"
          className="character-buddy-hit"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endPointer}
          onPointerCancel={endPointer}
          aria-expanded={showBubble}
          aria-label={`${labels.name}, ${labels.states[pose]}. ${
            showBubble ? labels.close : labels.click
          }`}
        >
          <img
            className="character-buddy-poster is-active"
            src={POSE_SRC[pose]}
            alt=""
            draggable={false}
          />
        </button>
      </div>
      {showBubble ? (
        <output className={`character-buddy-bubble is-${bubbleSide}`}>
          {bubbleLines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </output>
      ) : null}
    </div>
  );
}
