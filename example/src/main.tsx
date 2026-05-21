import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { App } from "#example/App";
import "willa/external.css";
import "willa/themes/light.css";
import "willa/themes/dark.css";
import "./styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
