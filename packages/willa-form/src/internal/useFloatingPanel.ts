import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type RefObject,
} from "react";
import { useFloatingLayer } from "@willa-ui/shared";

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
  const [scrollable, setScrollable] = useState(false);
  const outsideRefs = useMemo(() => [rootRef], [rootRef]);
  const { position: layerPosition, updatePosition } = useFloatingLayer({
    open,
    triggerRef,
    floatingRef: panelRef,
    minWidth,
    matchAnchorWidth: matchTriggerWidth,
    fallbackHeight,
    fullWidthBelow,
    applyResolvedWidth: true,
    flipToFit: true,
    side: "bottom",
    align: "start",
    offset: gap,
    viewportPadding,
    outsideRefs,
    onClose,
  });
  const position: FloatingPanelPosition | null = layerPosition
    ? {
        left: layerPosition.left,
        top: layerPosition.top,
        width: layerPosition.width,
      }
    : null;

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

    const handleViewportChange = () => {
      updateScrollable();
    };

    updateScrollable();
    window.addEventListener("resize", handleViewportChange);
    window.addEventListener("scroll", handleViewportChange, true);

    return () => {
      window.removeEventListener("resize", handleViewportChange);
      window.removeEventListener("scroll", handleViewportChange, true);
    };
  }, [open, updateScrollable]);

  useEffect(() => {
    if (open) return;

    setScrollable(false);
  }, [open]);

  return {
    position,
    scrollable,
    updatePosition,
    updateScrollable,
  };
};
