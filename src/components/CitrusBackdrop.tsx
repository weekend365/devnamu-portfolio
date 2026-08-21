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
  { kind: "fruit", src: "lime", tone: "lime", depth: "front", top: "1%", left: "-2%", rotate: 247 },
  { kind: "logo", tone: "lemon", depth: "mid", top: "4%", left: "18%", rotate: 12, desktopOnly: true },
  { kind: "fruit", src: "lemon", tone: "lemon", depth: "back", top: "2%", left: "39%", rotate: 163 },
  { kind: "fruit", src: "lemon4", tone: "lemon", depth: "mid", top: "5%", left: "60%", rotate: 301, desktopOnly: true },
  { kind: "fruit", src: "leaf", tone: "lime", depth: "front", top: "0%", left: "81%", rotate: 74 },
  { kind: "fruit", src: "lemon2", tone: "lemon", depth: "mid", top: "26%", left: "-1%", rotate: 128, desktopOnly: true },
  { kind: "fruit", src: "leaf2", tone: "lime", depth: "front", top: "28%", left: "18%", rotate: 41 },
  { kind: "logo", tone: "lime", depth: "back", top: "25%", left: "39%", rotate: 355, desktopOnly: true },
  { kind: "fruit", src: "lemon3", tone: "lemon", depth: "mid", top: "29%", left: "60%", rotate: 276 },
  { kind: "fruit", src: "leaf3", tone: "lime", depth: "back", top: "27%", left: "81%", rotate: 198, desktopOnly: true },
  { kind: "fruit", src: "leaf", tone: "lime", depth: "mid", top: "54%", left: "-2%", rotate: 67, desktopOnly: true },
  { kind: "fruit", src: "lime", tone: "lime", depth: "back", top: "55%", left: "18%", rotate: 91, desktopOnly: true },
  { kind: "logo", tone: "lime", depth: "front", top: "52%", left: "39%", rotate: 14 },
  { kind: "fruit", src: "lemon", tone: "lemon", depth: "front", top: "51%", left: "60%", rotate: 332, desktopOnly: true },
  { kind: "fruit", src: "lemon2", tone: "lemon", depth: "back", top: "50%", left: "81%", rotate: 241 },
  { kind: "fruit", src: "lemon4", tone: "lemon", depth: "front", top: "77%", left: "-1%", rotate: 52 },
  { kind: "fruit", src: "leaf3", tone: "lime", depth: "mid", top: "80%", left: "18%", rotate: 318 },
  { kind: "fruit", src: "lemon3", tone: "lemon", depth: "back", top: "76%", left: "39%", rotate: 157, desktopOnly: true },
  { kind: "logo", tone: "lemon", depth: "mid", top: "81%", left: "60%", rotate: 229 },
  { kind: "fruit", src: "leaf2", tone: "lime", depth: "front", top: "78%", left: "81%", rotate: 86, desktopOnly: true },
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
