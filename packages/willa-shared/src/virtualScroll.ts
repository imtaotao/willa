import { useEffect, useMemo, useState } from "react";
import { clampNumber } from "#shared/number";

export type VirtualScrollWindow = {
  startIndex: number;
  endIndex: number;
  paddingTop: number;
  paddingBottom: number;
  totalHeight: number;
};

export type VirtualScrollOptions = {
  enabled?: boolean;
  itemCount: number;
  itemHeight: number;
  overscan?: number;
  container: HTMLElement | null;
};

export const getVirtualScrollWindow = (options: {
  itemCount: number;
  itemHeight: number;
  overscan: number;
  scrollTop: number;
  viewportHeight: number;
}) => {
  const { itemCount, itemHeight, overscan, scrollTop, viewportHeight } =
    options;

  if (itemCount <= 0) {
    return {
      startIndex: 0,
      endIndex: 0,
      paddingTop: 0,
      paddingBottom: 0,
      totalHeight: 0,
    };
  }

  const safeItemHeight = Math.max(1, itemHeight);
  const safeViewportHeight = Math.max(0, viewportHeight);
  const visibleCount = Math.ceil(safeViewportHeight / safeItemHeight);
  const startIndex = clampNumber(
    Math.floor(scrollTop / safeItemHeight) - overscan,
    0,
    Math.max(itemCount - 1, 0),
  );
  const endIndex = clampNumber(
    startIndex + visibleCount + overscan * 2,
    0,
    itemCount,
  );

  return {
    startIndex,
    endIndex,
    paddingTop: startIndex * safeItemHeight,
    paddingBottom: Math.max(0, itemCount - endIndex) * safeItemHeight,
    totalHeight: itemCount * safeItemHeight,
  };
};

export const useVirtualScrollWindow = (options: VirtualScrollOptions) => {
  const {
    enabled = false,
    itemCount,
    itemHeight,
    overscan = 4,
    container,
  } = options;
  const [metrics, setMetrics] = useState({
    scrollTop: 0,
    viewportHeight: 0,
  });

  useEffect(() => {
    if (!enabled || !container) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      setMetrics({
        scrollTop: container.scrollTop,
        viewportHeight: container.clientHeight,
      });
    };
    const schedule = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    container.addEventListener("scroll", schedule, { passive: true });

    const resizeObserver =
      typeof ResizeObserver === "undefined"
        ? undefined
        : new ResizeObserver(schedule);
    resizeObserver?.observe(container);

    window.addEventListener("resize", schedule);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      container.removeEventListener("scroll", schedule);
      resizeObserver?.disconnect();
      window.removeEventListener("resize", schedule);
    };
  }, [container, enabled]);

  return useMemo(() => {
    if (!enabled) {
      return {
        startIndex: 0,
        endIndex: itemCount,
        paddingTop: 0,
        paddingBottom: 0,
        totalHeight: itemCount * itemHeight,
      } satisfies VirtualScrollWindow;
    }

    return getVirtualScrollWindow({
      itemCount,
      itemHeight,
      overscan,
      scrollTop: metrics.scrollTop,
      viewportHeight: metrics.viewportHeight,
    });
  }, [
    enabled,
    itemCount,
    itemHeight,
    metrics.scrollTop,
    metrics.viewportHeight,
    overscan,
  ]);
};
