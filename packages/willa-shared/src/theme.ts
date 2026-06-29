import { useSyncExternalStore } from "react";

export type WillaTheme = "light" | "dark";

export const getWillaDocumentTheme = (): WillaTheme => {
  if (typeof document === "undefined") return "light";
  return document.documentElement.getAttribute("data-wk-theme") === "dark"
    ? "dark"
    : "light";
};

const subscribeWillaDocumentTheme = (onStoreChange: () => void) => {
  if (
    typeof document === "undefined" ||
    typeof MutationObserver === "undefined"
  ) {
    return () => {};
  }

  const observer = new MutationObserver(onStoreChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-wk-theme", "class"],
  });

  return () => observer.disconnect();
};

export const useWillaDocumentTheme = () =>
  useSyncExternalStore(
    subscribeWillaDocumentTheme,
    getWillaDocumentTheme,
    () => "light",
  );
