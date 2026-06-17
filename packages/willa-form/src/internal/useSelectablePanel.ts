import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";

import {
  focusSelectablePanelItem,
  type SelectablePanelFocusTarget,
} from "#form/internal/selectablePanelKeyboard";
import { useFloatingPanel } from "#form/internal/useFloatingPanel";

export type UseSelectablePanelOptions = {
  contentVersion: unknown;
  fallbackHeight: number;
  id?: string;
  minWidth: number;
  searchable: boolean;
};

type SelectablePanelPendingFocus = {
  selector: string;
  target: SelectablePanelFocusTarget;
};

export function useSelectablePanel(options: UseSelectablePanelOptions) {
  const { contentVersion, fallbackHeight, id, minWidth, searchable } = options;
  const generatedId = useId();
  const buttonId = id ?? generatedId;
  const panelId = `${buttonId}-panel`;
  const rootRef = useRef<HTMLSpanElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const listRef = useRef<HTMLDivElement | null>(null);
  const searchRef = useRef<HTMLInputElement | null>(null);
  const focusTargetRef = useRef<SelectablePanelPendingFocus | null>(null);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const closePanel = useCallback(() => setOpen(false), []);
  const { position, scrollable, updatePosition, updateScrollable } =
    useFloatingPanel({
      open,
      rootRef,
      triggerRef,
      panelRef,
      listRef,
      minWidth,
      fallbackHeight,
      onClose: closePanel,
    });

  const focusPanelItem = useCallback(
    (selector: string, target: SelectablePanelFocusTarget) => {
      window.setTimeout(() => {
        focusSelectablePanelItem(panelRef.current, selector, target);
      }, 0);
    },
    [],
  );

  useEffect(() => {
    if (open) {
      updatePosition();
      updateScrollable();
      const focusTarget = focusTargetRef.current;
      focusTargetRef.current = null;

      if (focusTarget) {
        focusPanelItem(focusTarget.selector, focusTarget.target);
      } else if (searchable) {
        window.setTimeout(() => searchRef.current?.focus(), 0);
      }
    } else {
      setQuery("");
    }
  }, [
    contentVersion,
    focusPanelItem,
    open,
    searchable,
    updatePosition,
    updateScrollable,
  ]);

  useEffect(() => {
    if (!open) return;

    updatePosition();
    updateScrollable();
  }, [contentVersion, open, query, updatePosition, updateScrollable]);

  const focusOrOpen = (
    selector: string,
    target: SelectablePanelFocusTarget,
  ) => {
    if (open) {
      focusPanelItem(selector, target);
      return;
    }

    focusTargetRef.current = { selector, target };
    setOpen(true);
  };

  const handleTriggerKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    options: {
      selector: string;
      onKeyDown?: (event: KeyboardEvent<HTMLButtonElement>) => void;
    },
  ) => {
    options.onKeyDown?.(event);
    if (event.defaultPrevented) return;

    if (event.key === "Escape") {
      setOpen(false);
      return;
    }

    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      focusOrOpen(options.selector, event.key === "ArrowUp" ? "last" : "first");
      return;
    }

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setOpen((currentOpen) => !currentOpen);
    }
  };

  return {
    buttonId,
    closePanel,
    listRef,
    open,
    panelId,
    panelRef,
    position,
    query,
    rootRef,
    scrollable,
    searchRef,
    setOpen,
    setQuery,
    triggerRef,
    handleTriggerKeyDown,
  };
}
