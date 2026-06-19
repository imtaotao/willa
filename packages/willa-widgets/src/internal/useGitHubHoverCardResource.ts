import { useEffect, useRef, useState } from "react";
import { isAbortError, requestJson } from "@willa-ui/shared";

export type GitHubHoverCardResourceOptions<T> = {
  resourceKey: string;
  cache: Map<string, T>;
  createUrl: (resourceKey: string) => string;
  createError: (status: number) => Error;
  closeDelay?: number;
};

type ResourceState<T> = {
  resourceKey: string;
  data: T;
};

export function useGitHubHoverCardResource<T>({
  resourceKey,
  cache,
  createUrl,
  createError,
  closeDelay = 300,
}: GitHubHoverCardResourceOptions<T>) {
  const [isOpen, setIsOpen] = useState(false);
  const [loadingKey, setLoadingKey] = useState<string | null>(null);
  const [loadErrorKey, setLoadErrorKey] = useState<string | null>(null);
  const [resourceState, setResourceState] = useState<ResourceState<T> | null>(
    null,
  );
  const closeTimerRef = useRef<number | null>(null);

  const remoteData =
    resourceState?.resourceKey === resourceKey ? resourceState.data : null;
  const isLoading = loadingKey === resourceKey;
  const loadError = loadErrorKey === resourceKey;

  const clearCloseTimer = () => {
    if (closeTimerRef.current == null) return;
    window.clearTimeout(closeTimerRef.current);
    closeTimerRef.current = null;
  };

  const openCard = () => {
    clearCloseTimer();
    setIsOpen(true);
  };

  const closeCard = () => {
    clearCloseTimer();
    setIsOpen(false);
  };

  const scheduleClose = () => {
    clearCloseTimer();
    closeTimerRef.current = window.setTimeout(() => {
      setIsOpen(false);
      closeTimerRef.current = null;
    }, closeDelay);
  };

  useEffect(() => {
    if (!resourceKey || !isOpen || remoteData || loadError) return;

    const cached = cache.get(resourceKey);
    if (cached) {
      setResourceState({ resourceKey, data: cached });
      return;
    }

    const controller = new AbortController();
    setLoadingKey(resourceKey);
    setLoadErrorKey(null);

    requestJson<T>(createUrl(resourceKey), {
      dedupeKey: `github-hover-card:${resourceKey}`,
      signal: controller.signal,
      createError: (response) => createError(response.status),
    })
      .then((data) => {
        cache.set(resourceKey, data);
        setResourceState({ resourceKey, data });
        setLoadErrorKey(null);
      })
      .catch((error: unknown) => {
        if (isAbortError(error)) return;
        setLoadErrorKey(resourceKey);
      })
      .finally(() => {
        setLoadingKey((currentKey) =>
          currentKey === resourceKey ? null : currentKey,
        );
      });

    return () => controller.abort();
  }, [
    cache,
    createError,
    createUrl,
    isOpen,
    loadError,
    remoteData,
    resourceKey,
  ]);

  useEffect(() => {
    return () => {
      clearCloseTimer();
    };
  }, []);

  return {
    isOpen,
    isLoading,
    loadError,
    remoteData,
    openCard,
    closeCard,
    scheduleClose,
  };
}
