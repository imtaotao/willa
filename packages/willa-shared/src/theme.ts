import {
  createContext,
  createElement,
  useContext,
  useSyncExternalStore,
  type ReactNode,
} from "react";

export type WillaTheme = "light" | "dark";

const WillaThemeContext = createContext<WillaTheme | null>(null);

export function WillaThemeProvider(props: {
  children: ReactNode;
  theme: WillaTheme;
}) {
  return createElement(
    WillaThemeContext.Provider,
    { value: props.theme },
    props.children,
  );
}

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

export function useWillaThemeOverride() {
  return useContext(WillaThemeContext);
}

export function useWillaTheme() {
  const scopedTheme = useWillaThemeOverride();
  const documentTheme = useWillaDocumentTheme();

  return scopedTheme ?? documentTheme;
}

export function getWillaThemeScopeProps(theme: WillaTheme | null) {
  return theme ? { "data-willa-theme": theme } : {};
}

export function useWillaThemeScopeProps() {
  return getWillaThemeScopeProps(useWillaThemeOverride());
}
