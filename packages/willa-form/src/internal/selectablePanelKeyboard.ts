import type { KeyboardEvent } from "react";

export type SelectablePanelFocusTarget = "first" | "last";

export function focusSelectablePanelItem(
  panel: HTMLElement | null,
  selector: string,
  target: SelectablePanelFocusTarget,
) {
  const items = getSelectablePanelItems(panel, selector);
  const item = target === "last" ? items[items.length - 1] : items[0];

  item?.focus();
}

export function handleSelectablePanelKeyDown(
  event: KeyboardEvent<HTMLElement>,
  options: {
    panel: HTMLElement | null;
    selector: string;
    onClose: () => void;
    trigger: HTMLElement | null;
  },
) {
  if (event.key === "Escape") {
    event.preventDefault();
    options.onClose();
    options.trigger?.focus();
    return;
  }

  if (!isSelectablePanelMoveKey(event.key)) return;

  if (
    isTextInputTarget(event) &&
    (event.key === "Home" || event.key === "End")
  ) {
    return;
  }

  event.preventDefault();

  const items = getSelectablePanelItems(options.panel, options.selector);
  if (items.length === 0) return;

  const currentItem =
    event.target instanceof HTMLElement
      ? event.target.closest<HTMLElement>(options.selector)
      : null;
  const currentIndex = currentItem ? items.indexOf(currentItem) : -1;
  let nextIndex = currentIndex;

  if (event.key === "Home") {
    nextIndex = 0;
  } else if (event.key === "End") {
    nextIndex = items.length - 1;
  } else if (event.key === "ArrowDown") {
    nextIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
  } else if (event.key === "ArrowUp") {
    nextIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
  }

  items[nextIndex]?.focus();
}

const isSelectablePanelMoveKey = (key: string) => {
  return (
    key === "ArrowDown" || key === "ArrowUp" || key === "Home" || key === "End"
  );
};

const isTextInputTarget = (event: KeyboardEvent<HTMLElement>) => {
  const target = event.target;

  return (
    target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement
  );
};

const getSelectablePanelItems = (
  panel: HTMLElement | null,
  selector: string,
) => {
  const elements = Array.from(
    panel?.querySelectorAll<HTMLElement>(selector) ?? [],
  );

  return elements.filter((element) => {
    if (element.getAttribute("aria-hidden") === "true") return false;
    if ("disabled" in element && element.disabled === true) return false;
    return element.tabIndex >= 0;
  });
};
