import { useCallback, useEffect, useRef, useState } from "react";

import { copyToClipboard } from "#shared/clipboard";

export type CopyStatus = "idle" | "copied" | "failed";

export type CopyToClipboardOptions = {
  resetDuration?: number;
  onCopy?: (text: string) => void;
};

export type CopyToClipboardActionOptions = {
  resetDuration?: number;
  onCopy?: (text: string) => void;
};

export function useCopyToClipboard(options: CopyToClipboardOptions = {}) {
  const { resetDuration = 1200, onCopy } = options;
  const [status, setStatus] = useState<CopyStatus>("idle");
  const timerRef = useRef<number | null>(null);

  const clearTimer = useCallback(() => {
    if (timerRef.current === null) return;
    window.clearTimeout(timerRef.current);
    timerRef.current = null;
  }, []);

  const startFeedback = useCallback(
    (nextStatus: CopyStatus, duration = resetDuration) => {
      clearTimer();
      setStatus(nextStatus);

      if (nextStatus === "idle" || duration <= 0) return;

      timerRef.current = window.setTimeout(() => {
        setStatus("idle");
        timerRef.current = null;
      }, duration);
    },
    [clearTimer, resetDuration],
  );

  const reset = useCallback(() => {
    startFeedback("idle", 0);
  }, [startFeedback]);

  const copy = useCallback(
    async (text: string, actionOptions: CopyToClipboardActionOptions = {}) => {
      startFeedback("idle", 0);

      const ok = await copyToClipboard(text);
      const nextStatus: CopyStatus = ok ? "copied" : "failed";

      startFeedback(nextStatus, actionOptions.resetDuration);

      if (ok) {
        onCopy?.(text);
        actionOptions.onCopy?.(text);
      }

      return ok;
    },
    [onCopy, startFeedback],
  );

  useEffect(() => {
    return () => {
      clearTimer();
    };
  }, [clearTimer]);

  return {
    status,
    copied: status === "copied",
    failed: status === "failed",
    copy,
    reset,
  } as const;
}
