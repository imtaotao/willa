import { useEffect, type RefObject } from "react";

type UseTableInfiniteScrollOptions = {
  enabled: boolean;
  loading: boolean;
  hasMore: boolean;
  scrollThreshold: number;
  containerRef: RefObject<HTMLDivElement | null>;
  onLoadMore?: () => void | Promise<void>;
};

export function useTableInfiniteScroll(options: UseTableInfiniteScrollOptions) {
  const {
    enabled,
    loading,
    hasMore,
    onLoadMore,
    scrollThreshold,
    containerRef,
  } = options;

  useEffect(() => {
    if (
      !enabled ||
      !hasMore ||
      !onLoadMore ||
      loading ||
      !containerRef.current
    ) {
      return;
    }

    const bodyScrollContainer = containerRef.current;
    let infiniteLoadArmed = true;
    let infiniteLoadPending = false;

    const maybeLoadMore = () => {
      if (infiniteLoadPending) return;

      const remaining =
        bodyScrollContainer.scrollHeight -
        bodyScrollContainer.scrollTop -
        bodyScrollContainer.clientHeight;

      if (remaining > scrollThreshold * 1.5) {
        infiniteLoadArmed = true;
      }

      if (!infiniteLoadArmed) return;
      if (remaining > scrollThreshold) return;

      infiniteLoadArmed = false;
      const loadResult = onLoadMore();

      if (
        loadResult &&
        typeof loadResult === "object" &&
        "finally" in loadResult
      ) {
        infiniteLoadPending = true;
        (loadResult as Promise<void>).finally(() => {
          infiniteLoadPending = false;
        });
      }
    };

    bodyScrollContainer.addEventListener("scroll", maybeLoadMore, {
      passive: true,
    });

    maybeLoadMore();

    return () => {
      bodyScrollContainer.removeEventListener("scroll", maybeLoadMore);
    };
  }, [enabled, hasMore, loading, onLoadMore, scrollThreshold, containerRef]);
}
