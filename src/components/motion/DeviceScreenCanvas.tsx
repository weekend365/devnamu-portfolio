"use client";

import {
  useEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
  type ReactNode,
} from "react";
import { useReducedMotion } from "motion/react";
import {
  isHtmlInCanvasSupported,
  type Canvas2DWithElementImage,
  type CanvasElementWithSubtree,
  type HtmlInCanvasMode,
} from "@/lib/html-in-canvas";

const MAX_DISPLACE_PX = 8;
const LERP = 0.18;

function paintSource(
  ctx: Canvas2DWithElementImage,
  source: HTMLElement,
  image: HTMLImageElement,
  width: number,
  height: number,
) {
  if (typeof ctx.drawElementImage === "function") {
    try {
      return ctx.drawElementImage(source, 0, 0, width, height);
    } catch {
      // Snapshot may not be ready; use the decoded bitmap instead.
    }
  }
  ctx.drawImage(image, 0, 0, width, height);
  return null;
}

export function DeviceScreenCanvas({
  children,
  className,
  src,
  alt,
}: {
  children: ReactNode;
  className?: string;
  src: string;
  alt: string;
}) {
  const reduced = useReducedMotion();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sourceRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const pointerRef = useRef({ x: 0.5, y: 0.5, s: 0, tx: 0.5, ty: 0.5, ts: 0 });
  const startTickRef = useRef<() => void>(() => {});
  const [mode, setMode] = useState<HtmlInCanvasMode>("pending");
  const [finePointer, setFinePointer] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setFinePointer(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (reduced) {
      setMode("fallback");
      return;
    }
    setMode(isHtmlInCanvasSupported() ? "supported" : "fallback");
  }, [reduced]);

  useEffect(() => {
    const canvas = canvasRef.current as CanvasElementWithSubtree | null;
    const source = sourceRef.current;
    const image = imageRef.current;
    if (mode !== "supported" || !canvas || !source || !image) {
      return;
    }

    canvas.layoutSubtree = true;
    const ctx = canvas.getContext("2d") as Canvas2DWithElementImage | null;
    if (!ctx) {
      setMode("fallback");
      return;
    }

    const pointer = pointerRef.current;
    let frame = 0;

    const paint = () => {
      const width = canvas.width;
      const height = canvas.height;
      if (!width || !height || !image.naturalWidth) {
        return;
      }
      if (typeof ctx.reset === "function") {
        ctx.reset();
      } else {
        ctx.clearRect(0, 0, width, height);
      }
      const transform = paintSource(ctx, source, image, width, height);
      if (transform) {
        source.style.transform = transform.toString();
      }
      if (pointer.s < 0.01) {
        return;
      }
      const px = pointer.x * width;
      const py = pointer.y * height;
      const radius = Math.min(width, height) * 0.32;
      ctx.save();
      ctx.beginPath();
      ctx.arc(px, py, radius, 0, Math.PI * 2);
      ctx.clip();
      const scale = 1 + (MAX_DISPLACE_PX * pointer.s) / Math.max(radius, 1);
      ctx.translate(px, py);
      ctx.scale(scale, scale);
      ctx.translate(-px, -py);
      paintSource(ctx, source, image, width, height);
      ctx.restore();
    };

    const tick = () => {
      pointer.x += (pointer.tx - pointer.x) * LERP;
      pointer.y += (pointer.ty - pointer.y) * LERP;
      pointer.s += (pointer.ts - pointer.s) * LERP;
      canvas.requestPaint?.();
      paint();
      if (Math.abs(pointer.ts - pointer.s) > 0.002 || pointer.s > 0.002) {
        frame = window.requestAnimationFrame(tick);
      } else {
        pointer.s = 0;
        frame = 0;
        canvas.requestPaint?.();
        paint();
      }
    };

    const startTick = () => {
      if (!frame) {
        frame = window.requestAnimationFrame(tick);
      }
    };
    startTickRef.current = startTick;

    const resize = (entry: ResizeObserverEntry) => {
      const dprBox = entry.devicePixelContentBoxSize?.[0];
      if (dprBox) {
        canvas.width = dprBox.inlineSize;
        canvas.height = dprBox.blockSize;
      } else {
        const box = entry.contentBoxSize?.[0];
        const dpr = window.devicePixelRatio || 1;
        canvas.width = Math.round((box?.inlineSize ?? entry.contentRect.width) * dpr);
        canvas.height = Math.round((box?.blockSize ?? entry.contentRect.height) * dpr);
      }
      canvas.requestPaint?.();
      paint();
    };

    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (entry) {
        resize(entry);
      }
    });
    try {
      observer.observe(canvas, { box: "device-pixel-content-box" });
    } catch {
      observer.observe(canvas);
    }

    canvas.addEventListener("paint", paint);
    const onSourceReady = () => {
      canvas.requestPaint?.();
      paint();
    };
    if (image.complete && image.naturalWidth > 0) {
      onSourceReady();
    } else {
      image.addEventListener("load", onSourceReady);
    }

    return () => {
      startTickRef.current = () => {};
      window.cancelAnimationFrame(frame);
      image.removeEventListener("load", onSourceReady);
      canvas.removeEventListener("paint", paint);
      observer.disconnect();
    };
  }, [mode]);

  const onPointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!finePointer || mode !== "supported") {
      return;
    }
    const bounds = event.currentTarget.getBoundingClientRect();
    const pointer = pointerRef.current;
    pointer.tx = Math.min(1, Math.max(0, (event.clientX - bounds.left) / Math.max(bounds.width, 1)));
    pointer.ty = Math.min(1, Math.max(0, (event.clientY - bounds.top) / Math.max(bounds.height, 1)));
    pointer.ts = 1;
    startTickRef.current();
  };

  const onPointerLeave = () => {
    const pointer = pointerRef.current;
    pointer.ts = 0;
    startTickRef.current();
  };

  if (mode !== "supported") {
    return (
      <div
        className={["device-screen-canvas", className].filter(Boolean).join(" ")}
        data-html-in-canvas={mode}
      >
        {children}
      </div>
    );
  }

  return (
    <div
      className={["device-screen-canvas", className].filter(Boolean).join(" ")}
      data-html-in-canvas={mode}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
    >
      <div className="device-screen-canvas-fallback" aria-hidden="true">
        {children}
      </div>
      <canvas
        ref={canvasRef}
        className="featured-app-screen device-screen-canvas-surface"
        {...{ layoutsubtree: "" }}
      >
        <div ref={sourceRef} className="device-screen-canvas-source-wrap">
          <img
            ref={imageRef}
            className="device-screen-canvas-source"
            src={src}
            alt={alt}
            draggable={false}
          />
        </div>
      </canvas>
    </div>
  );
}
