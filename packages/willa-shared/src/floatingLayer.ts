import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type RefObject,
} from "react";

import {
  getFloatingPanelPosition,
  type FloatingPanelAlign,
  type FloatingPanelPoint,
  type FloatingPanelPosition,
  type FloatingPanelRect,
  type FloatingPanelSide,
} from "#shared/floating";

export type FloatingLayerPosition = FloatingPanelPosition & {
  anchorRect?: FloatingPanelRect;
  width?: number;
};

export type UseFloatingLayerOptions = {
  open: boolean;
  triggerRef?: RefObject<HTMLElement | null>;
  floatingRef: RefObject<HTMLElement | null>;
  anchorRect?: FloatingPanelRect | null;
  anchorPoint?: FloatingPanelPoint | null;
  side?: FloatingPanelSide;
  align?: FloatingPanelAlign;
  offset?: number;
  viewportPadding?: number;
  minWidth?: number;
  fallbackWidth?: number;
  fallbackHeight?: number;
  matchAnchorWidth?: boolean;
  matchAnchorMinWidth?: boolean;
  fullWidthBelow?: number;
  applyResolvedWidth?: boolean;
  flipToFit?: boolean;
  outsideRefs?: Array<RefObject<HTMLElement | null>>;
  closeOnOutsidePointerDown?: boolean;
  restoreFocus?: boolean;
  onClose?: () => void;
  onOpenAutoFocus?: () => void;
  getAnchorRect?: () => FloatingPanelRect | null;
  getAnchorPoint?: () => FloatingPanelPoint | null;
};

export function useFloatingLayer(options: UseFloatingLayerOptions) {
  const {
    open,
    triggerRef,
    floatingRef,
    anchorRect,
    anchorPoint,
    getAnchorRect,
    getAnchorPoint,
    side = "bottom",
    align = "start",
    offset = 0,
    viewportPadding = 8,
    minWidth,
    fallbackWidth,
    fallbackHeight = 0,
    matchAnchorWidth = false,
    matchAnchorMinWidth = false,
    fullWidthBelow,
    applyResolvedWidth = false,
    flipToFit = false,
    outsideRefs,
    closeOnOutsidePointerDown = true,
    restoreFocus = false,
    onClose,
    onOpenAutoFocus,
  } = options;
  const [position, setPosition] = useState<FloatingLayerPosition>();
  const previousFocusRef = useRef<HTMLElement | null>(null);

  const updatePosition = useCallback(() => {
    const triggerElement = triggerRef?.current;
    const floatingElement = floatingRef.current;
    if (!floatingElement || typeof window === "undefined") return;

    const resolvedAnchorRect =
      getAnchorRect?.() ??
      anchorRect ??
      triggerElement?.getBoundingClientRect();
    const resolvedAnchorPoint = getAnchorPoint?.() ?? anchorPoint ?? null;
    const viewportWidth = window.innerWidth;
    const maxWidth = Math.max(0, viewportWidth - viewportPadding * 2);
    const rawFloatingWidth =
      floatingElement.offsetWidth ||
      resolvedAnchorRect?.width ||
      fallbackWidth ||
      0;
    const floatingHeight = floatingElement.offsetHeight || fallbackHeight;
    const resolvedSide =
      flipToFit && resolvedAnchorRect && !resolvedAnchorPoint
        ? getFloatingLayerFitSide({
            anchorRect: resolvedAnchorRect,
            floatingHeight,
            side,
            viewportHeight: window.innerHeight,
            viewportPadding,
          })
        : side;
    const floatingWidth = resolveFloatingLayerWidth({
      anchorWidth: resolvedAnchorRect?.width,
      floatingWidth: rawFloatingWidth,
      fullWidthBelow,
      matchAnchorWidth,
      maxWidth,
      minWidth,
      viewportWidth,
    });
    const nextPosition = getFloatingPanelPosition({
      anchorPoint: resolvedAnchorPoint ?? undefined,
      anchorRect: resolvedAnchorPoint ? undefined : resolvedAnchorRect,
      floatingRect: {
        width: floatingWidth,
        height: floatingHeight,
      },
      side: resolvedSide,
      align,
      offset,
      viewportPadding,
      matchAnchorMinWidth:
        matchAnchorMinWidth && !matchAnchorWidth && !resolvedAnchorPoint,
    });

    setPosition({
      ...nextPosition,
      anchorRect: resolvedAnchorRect ?? undefined,
      width:
        applyResolvedWidth || matchAnchorWidth || minWidth !== undefined
          ? floatingWidth
          : undefined,
    });
  }, [
    align,
    anchorRect,
    anchorPoint,
    fallbackHeight,
    fallbackWidth,
    flipToFit,
    floatingRef,
    fullWidthBelow,
    getAnchorRect,
    getAnchorPoint,
    matchAnchorMinWidth,
    matchAnchorWidth,
    minWidth,
    offset,
    applyResolvedWidth,
    side,
    triggerRef,
    viewportPadding,
  ]);

  useEffect(() => {
    if (!open || typeof window === "undefined") return;

    const ownerDocument =
      floatingRef.current?.ownerDocument ??
      triggerRef?.current?.ownerDocument ??
      document;
    if (restoreFocus) {
      previousFocusRef.current =
        ownerDocument.activeElement instanceof HTMLElement
          ? ownerDocument.activeElement
          : null;
    }

    updatePosition();

    const frame = window.requestAnimationFrame(updatePosition);
    const focusTimer =
      onOpenAutoFocus === undefined
        ? undefined
        : window.setTimeout(onOpenAutoFocus, 0);

    const handlePointerDown = (event: PointerEvent) => {
      if (!closeOnOutsidePointerDown) return;
      const target = event.target;
      if (!(target instanceof Node)) return;
      if (
        containsPointerTarget(target, [
          triggerRef,
          floatingRef,
          ...(outsideRefs ?? []),
        ])
      ) {
        return;
      }

      onClose?.();
    };

    const handleWindowUpdate = () => {
      updatePosition();
    };

    ownerDocument.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("resize", handleWindowUpdate);
    window.addEventListener("scroll", handleWindowUpdate, true);

    return () => {
      window.cancelAnimationFrame(frame);
      if (focusTimer !== undefined) {
        window.clearTimeout(focusTimer);
      }
      ownerDocument.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("resize", handleWindowUpdate);
      window.removeEventListener("scroll", handleWindowUpdate, true);

      if (restoreFocus) {
        previousFocusRef.current?.focus();
        previousFocusRef.current = null;
      }
    };
  }, [
    closeOnOutsidePointerDown,
    floatingRef,
    onClose,
    onOpenAutoFocus,
    open,
    outsideRefs,
    restoreFocus,
    triggerRef,
    updatePosition,
  ]);

  useEffect(() => {
    if (open) return;
    setPosition(undefined);
  }, [open]);

  return {
    position,
    updatePosition,
  };
}

const getFloatingLayerFitSide = (options: {
  anchorRect: FloatingPanelRect;
  floatingHeight: number;
  side: FloatingPanelSide;
  viewportHeight: number;
  viewportPadding: number;
}) => {
  const { anchorRect, floatingHeight, side, viewportHeight, viewportPadding } =
    options;

  if (side !== "top" && side !== "bottom") return side;

  const topSpace = anchorRect.top - viewportPadding;
  const bottomSpace = viewportHeight - anchorRect.bottom - viewportPadding;

  if (side === "top") {
    return topSpace >= floatingHeight || topSpace >= bottomSpace
      ? "top"
      : "bottom";
  }

  return bottomSpace >= floatingHeight || bottomSpace >= topSpace
    ? "bottom"
    : "top";
};

const resolveFloatingLayerWidth = (options: {
  anchorWidth?: number;
  floatingWidth: number;
  fullWidthBelow?: number;
  matchAnchorWidth: boolean;
  maxWidth: number;
  minWidth?: number;
  viewportWidth: number;
}) => {
  const {
    anchorWidth,
    floatingWidth,
    fullWidthBelow,
    matchAnchorWidth,
    maxWidth,
    minWidth,
    viewportWidth,
  } = options;

  if (fullWidthBelow !== undefined && viewportWidth <= fullWidthBelow) {
    return maxWidth;
  }

  if (matchAnchorWidth && anchorWidth !== undefined) {
    return Math.min(Math.max(anchorWidth, minWidth ?? anchorWidth), maxWidth);
  }

  if (minWidth !== undefined) {
    return Math.min(Math.max(floatingWidth, minWidth), maxWidth);
  }

  return floatingWidth;
};

const containsPointerTarget = (
  target: Node,
  refs: Array<RefObject<HTMLElement | null> | undefined>,
) => {
  return refs.some((ref) => ref?.current?.contains(target));
};
