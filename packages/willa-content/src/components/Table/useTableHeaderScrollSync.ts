import { useEffect, type RefObject } from "react";

type UseTableHeaderScrollSyncOptions = {
  enabled: boolean;
  scrollContainerRef: RefObject<HTMLDivElement | null>;
  headerTableRef: RefObject<HTMLTableElement | null>;
  deps: Array<unknown>;
};

export function useTableHeaderScrollSync(
  options: UseTableHeaderScrollSyncOptions,
) {
  const { enabled, scrollContainerRef, headerTableRef, deps } = options;

  useEffect(() => {
    if (!enabled) return;

    const scrollElement = scrollContainerRef.current;
    const syncHeaderScroll = () => {
      if (!scrollElement || !headerTableRef.current) return;
      headerTableRef.current.style.transform = `translateX(-${scrollElement.scrollLeft}px)`;
    };

    syncHeaderScroll();
    scrollElement?.addEventListener("scroll", syncHeaderScroll, {
      passive: true,
    });

    return () => {
      scrollElement?.removeEventListener("scroll", syncHeaderScroll);
    };
  }, [enabled, scrollContainerRef, headerTableRef, ...deps]);
}
