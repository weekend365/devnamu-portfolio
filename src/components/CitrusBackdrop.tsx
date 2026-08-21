import type { CSSProperties } from "react";
import Image from "next/image";

const fruitSize = {
  lime: { width: 612, height: 408 },
  lemon: { width: 612, height: 408 },
  lemon2: { width: 612, height: 408 },
  lemon3: { width: 500, height: 500 },
  lemon4: { width: 500, height: 500 },
  leaf: { width: 577, height: 433 },
  leaf2: { width: 500, height: 500 },
  leaf3: { width: 500, height: 499 },
} as const;

const pieces = [
  { kind: "fruit", src: "lime", tone: "lime", depth: "front", top: "-2%", left: "-4%", rotate: 247 },
  { kind: "logo", tone: "lemon", depth: "mid", top: "0%", left: "22%", rotate: 12, desktopOnly: true },
  { kind: "fruit", src: "lemon", tone: "lemon", depth: "back", top: "-1%", left: "48%", rotate: 163 },
  { kind: "fruit", src: "lemon4", tone: "lemon", depth: "mid", top: "1%", left: "74%", rotate: 301, desktopOnly: true },
  { kind: "fruit", src: "lemon2", tone: "lemon", depth: "mid", top: "18%", left: "8%", rotate: 128, desktopOnly: true },
  { kind: "fruit", src: "leaf2", tone: "lime", depth: "front", top: "17%", left: "34%", rotate: 41 },
  { kind: "logo", tone: "lime", depth: "back", top: "19%", left: "60%", rotate: 355, desktopOnly: true },
  { kind: "fruit", src: "leaf", tone: "lime", depth: "front", top: "16%", left: "86%", rotate: 74 },
  { kind: "fruit", src: "lemon3", tone: "lemon", depth: "mid", top: "38%", left: "-4%", rotate: 276 },
  { kind: "fruit", src: "leaf3", tone: "lime", depth: "back", top: "40%", left: "22%", rotate: 198, desktopOnly: true },
  { kind: "logo", tone: "lime", depth: "front", top: "37%", left: "48%", rotate: 14 },
  { kind: "fruit", src: "lime", tone: "lime", depth: "back", top: "39%", left: "74%", rotate: 91, desktopOnly: true },
  { kind: "fruit", src: "lemon", tone: "lemon", depth: "front", top: "58%", left: "8%", rotate: 332, desktopOnly: true },
  { kind: "fruit", src: "lemon2", tone: "lemon", depth: "back", top: "57%", left: "34%", rotate: 241 },
  { kind: "fruit", src: "leaf", tone: "lime", depth: "mid", top: "59%", left: "60%", rotate: 67, desktopOnly: true },
  { kind: "fruit", src: "lemon4", tone: "lemon", depth: "front", top: "56%", left: "86%", rotate: 52 },
  { kind: "fruit", src: "leaf3", tone: "lime", depth: "mid", top: "78%", left: "-4%", rotate: 318 },
  { kind: "fruit", src: "lemon3", tone: "lemon", depth: "back", top: "80%", left: "22%", rotate: 157, desktopOnly: true },
  { kind: "logo", tone: "lemon", depth: "mid", top: "77%", left: "48%", rotate: 229 },
  { kind: "fruit", src: "leaf2", tone: "lime", depth: "front", top: "79%", left: "74%", rotate: 86, desktopOnly: true },
] as const;

export function CitrusBackdrop() {
  return (
    <>
      <div className="citrus-wash" aria-hidden="true" />
      <div className="citrus-backdrop" aria-hidden="true">
        {pieces.map((piece, index) => (
          <div
            key={`${piece.kind}-${piece.tone}-${index}`}
            className={`citrus-piece citrus-${piece.kind} citrus-${piece.tone} citrus-depth-${piece.depth}${"desktopOnly" in piece && piece.desktopOnly ? " citrus-desktop-only" : ""}`}
            style={{
              top: piece.top,
              left: piece.left,
              "--citrus-rotation": `${piece.rotate}deg`,
              animationDelay: `${80 + index * 28}ms`,
            } as CSSProperties}
          >
            {piece.kind === "fruit" ? (
              <Image
                src={`/images/citrus/${piece.src}.png`}
                alt=""
                width={fruitSize[piece.src].width}
                height={fruitSize[piece.src].height}
                sizes="(max-width: 768px) 140px, 240px"
              />
            ) : (
              <span>DEVNAMU</span>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
