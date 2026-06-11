import { useCallback, useEffect, useState, type RefObject } from "react";

export type FloatingPanelPosition = {
  left: number;
  top: number;
  width?: number;
};

export type UseFloatingPanelOptions = {
  open: boolean;
  rootRef: RefObject<HTMLElement | null>;
  triggerRef: RefObject<HTMLElement | null>;
  panelRef: RefObject<HTMLElement | null>;
  listRef?: RefObject<HTMLElement | null>;
  minWidth?: number;
  matchTriggerWidth?: boolean;
  fullWidthBelow?: number;
  fallbackHeight?: number;
  gap?: number;
  viewportPadding?: number;
  onClose: () => void;
};

export const useFloatingPanel = ({
  open,
  rootRef,
  triggerRef,
  panelRef,
  listRef,
  minWidth,
  matchTriggerWidth = true,
  fullWidthBelow,
  fallbackHeight = 320,
  gap = 6,
  viewportPadding = 8,
  onClose,
}: UseFloatingPanelOptions) => {
  const [position, setPosition] = useState<FloatingPanelPosition | null>(null);
  const [scrollable, setScrollable] = useState(false);

  const updatePosition = useCallback(() => {
    if (!triggerRef.current) return;

    const rect = triggerRef.current.getBoundingClientRect();
    const panelHeight = panelRef.current?.offsetHeight ?? fallbackHeight;
    const panelWidth = panelRef.current?.offsetWidth;
    const viewportWidth = window.innerWidth;
    const maxWidth = viewportWidth - viewportPadding * 2;
    const baseMinWidth = minWidth ?? rect.width;
    const nextWidth =
      fullWidthBelow !== undefined && viewportWidth <= fullWidthBelow
        ? maxWidth
        : matchTriggerWidth
          ? Math.min(Math.max(rect.width, baseMinWidth), maxWidth)
          : Math.min(
              Math.max(panelWidth ?? rect.width, baseMinWidth),
              maxWidth,
            );
    const left = clamp(
      rect.left,
      viewportPadding,
      viewportWidth - viewportPadding - nextWidth,
    );
    const belowTop = rect.bottom + gap;
    const aboveTop = rect.top - gap - panelHeight;
    const hasBottomSpace =
      window.innerHeight - rect.bottom - viewportPadding >= panelHeight;
    const top = hasBottomSpace ? belowTop : Math.max(viewportPadding, aboveTop);

    setPosition({ left, top, width: nextWidth });
  }, [
    fallbackHeight,
    fullWidthBelow,
    gap,
    matchTriggerWidth,
    minWidth,
    panelRef,
    triggerRef,
    viewportPadding,
  ]);

  const updateScrollable = useCallback(() => {
    const list = listRef?.current;

    if (!list) {
      setScrollable(false);
      return;
    }

    window.requestAnimationFrame(() => {
      setScrollable(list.scrollHeight > list.clientHeight + 1);
    });
  }, [listRef]);

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as Node;

      if (
        !rootRef.current?.contains(target) &&
        !panelRef.current?.contains(target)
      ) {
        onClose();
      }
    };
    const handleViewportChange = () => {
      updatePosition();
      updateScrollable();
    };

    updatePosition();
    updateScrollable();
    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("resize", handleViewportChange);
    window.addEventListener("scroll", handleViewportChange, true);

    return () => {
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("resize", handleViewportChange);
      window.removeEventListener("scroll", handleViewportChange, true);
    };
  }, [open, onClose, panelRef, rootRef, updatePosition, updateScrollable]);

  useEffect(() => {
    if (open) return;

    setPosition(null);
    setScrollable(false);
  }, [open]);

  return {
    position,
    scrollable,
    updatePosition,
    updateScrollable,
  };
};

const clamp = (value: number, min: number, max: number) => {
  return Math.min(Math.max(value, min), max);
};
