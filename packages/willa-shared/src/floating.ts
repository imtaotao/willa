import { clampNumber } from "#shared/number";

export type FloatingPanelSide = "top" | "right" | "bottom" | "left";
export type FloatingPanelAlign = "start" | "center" | "end";

export type FloatingPanelRect = {
  top: number;
  right: number;
  bottom: number;
  left: number;
  width: number;
  height: number;
};

export type FloatingPanelPoint = {
  x: number;
  y: number;
};

export type FloatingPanelPosition = {
  top: number;
  left: number;
  minWidth?: number;
};

export type FloatingPanelPositionOptions = {
  anchorRect?: FloatingPanelRect;
  anchorPoint?: FloatingPanelPoint;
  floatingRect: Pick<FloatingPanelRect, "width" | "height">;
  side?: FloatingPanelSide;
  align?: FloatingPanelAlign;
  offset?: number;
  viewportWidth?: number;
  viewportHeight?: number;
  viewportPadding?: number;
  matchAnchorMinWidth?: boolean;
};

export function getFloatingPanelPosition(
  options: FloatingPanelPositionOptions,
) {
  const {
    anchorRect,
    anchorPoint,
    floatingRect,
    side = "bottom",
    align = "start",
    offset = 0,
    viewportWidth,
    viewportHeight,
    viewportPadding = 8,
    matchAnchorMinWidth = false,
  } = options;
  const resolvedViewportWidth =
    viewportWidth ?? (typeof window === "undefined" ? 0 : window.innerWidth);
  const resolvedViewportHeight =
    viewportHeight ?? (typeof window === "undefined" ? 0 : window.innerHeight);
  const floatingWidth = floatingRect.width;
  const floatingHeight = floatingRect.height;
  const basePosition = anchorPoint
    ? {
        top: anchorPoint.y,
        left: anchorPoint.x,
      }
    : getAnchoredPanelPosition({
        anchorRect: anchorRect ?? createPointRect({ x: 0, y: 0 }),
        floatingRect,
        side,
        align,
        offset,
      });
  const maxLeft = Math.max(
    viewportPadding,
    resolvedViewportWidth - floatingWidth - viewportPadding,
  );
  const maxTop = Math.max(
    viewportPadding,
    resolvedViewportHeight - floatingHeight - viewportPadding,
  );
  const position: FloatingPanelPosition = {
    top: clampNumber(basePosition.top, viewportPadding, maxTop),
    left: clampNumber(basePosition.left, viewportPadding, maxLeft),
  };

  if (anchorRect && matchAnchorMinWidth) {
    position.minWidth = Math.min(
      anchorRect.width,
      resolvedViewportWidth - viewportPadding * 2,
    );
  }

  return position;
}

const getAnchoredPanelPosition = (options: {
  anchorRect: FloatingPanelRect;
  floatingRect: Pick<FloatingPanelRect, "width" | "height">;
  side: FloatingPanelSide;
  align: FloatingPanelAlign;
  offset: number;
}) => {
  const { anchorRect, floatingRect, side, align, offset } = options;
  const centerLeft =
    anchorRect.left + anchorRect.width / 2 - floatingRect.width / 2;
  const centerTop =
    anchorRect.top + anchorRect.height / 2 - floatingRect.height / 2;

  if (side === "top" || side === "bottom") {
    const top =
      side === "top"
        ? anchorRect.top - floatingRect.height - offset
        : anchorRect.bottom + offset;
    const left = getAlignedPosition({
      start: anchorRect.left,
      end: anchorRect.right,
      size: floatingRect.width,
      center: centerLeft,
      align,
    });

    return { top, left };
  }

  const top = getAlignedPosition({
    start: anchorRect.top,
    end: anchorRect.bottom,
    size: floatingRect.height,
    center: centerTop,
    align,
  });
  const left =
    side === "left"
      ? anchorRect.left - floatingRect.width - offset
      : anchorRect.right + offset;

  return { top, left };
};

const getAlignedPosition = (options: {
  start: number;
  end: number;
  size: number;
  center: number;
  align: FloatingPanelAlign;
}) => {
  const { start, end, size, center, align } = options;

  if (align === "start") return start;
  if (align === "end") return end - size;
  return center;
};

const createPointRect = (point: FloatingPanelPoint): FloatingPanelRect => ({
  top: point.y,
  right: point.x,
  bottom: point.y,
  left: point.x,
  width: 0,
  height: 0,
});
