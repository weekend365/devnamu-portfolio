export type HtmlInCanvasMode = "pending" | "supported" | "fallback";

type Canvas2DWithElementImage = CanvasRenderingContext2D & {
  drawElementImage?: (
    element: Element,
    dx: number,
    dy: number,
    dwidth?: number,
    dheight?: number,
  ) => DOMMatrix;
};

type CanvasElementWithSubtree = HTMLCanvasElement & {
  layoutSubtree?: boolean;
  requestPaint?: () => void;
  getElementTransform?: (element: Element, drawTransform?: DOMMatrix) => DOMMatrix;
};

type WebGLWithElementImage = WebGLRenderingContext & {
  texElementImage2D?: (
    target: GLenum,
    level: GLint,
    internalformat: GLint,
    format: GLenum,
    type: GLenum,
    source: Element,
  ) => void;
};

export function isHtmlInCanvasSupported(): boolean {
  if (typeof HTMLCanvasElement === "undefined" || typeof document === "undefined") {
    return false;
  }

  const canvasProto = HTMLCanvasElement.prototype as CanvasElementWithSubtree;
  if (!("layoutSubtree" in canvasProto) || typeof canvasProto.requestPaint !== "function") {
    return false;
  }

  const probe = document.createElement("canvas");
  const context = probe.getContext("2d") as Canvas2DWithElementImage | null;
  return typeof context?.drawElementImage === "function";
}

export function isHtmlInCanvasWebGLSupported(): boolean {
  if (!isHtmlInCanvasSupported()) {
    return false;
  }

  const probe = document.createElement("canvas");
  const gl = probe.getContext("webgl") as WebGLWithElementImage | null;
  return typeof gl?.texElementImage2D === "function";
}

export type { Canvas2DWithElementImage, CanvasElementWithSubtree, WebGLWithElementImage };
