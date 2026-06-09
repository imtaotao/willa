import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { App } from "#example/App";
import "willa/external.css";
import "willa/themes/light.css";
import "willa/themes/dark.css";
import "./styles.css";

type VitePreloadErrorEvent = Event & {
  payload?: unknown;
};

const preloadReloadKey = "willa:preload-reload-at";
const preloadReloadWindow = 30_000;

window.addEventListener("vite:preloadError", (event: VitePreloadErrorEvent) => {
  event.preventDefault();

  const lastReloadAt = Number(sessionStorage.getItem(preloadReloadKey));
  if (
    Number.isFinite(lastReloadAt) &&
    Date.now() - lastReloadAt < preloadReloadWindow
  ) {
    throw event.payload;
  }

  sessionStorage.setItem(preloadReloadKey, String(Date.now()));
  window.location.reload();
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
