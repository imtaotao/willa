# willa

Public aggregate package for Willa UI.

Use this package when an app wants one public entry for Willa's layout,
content, form, AI, and widget components.

## Import

Full styles:

```tsx
import { Button, Card, PromptInput } from "willa";
import "willa/style.css";
```

Single-component styles:

```tsx
import "willa/external.css";
import "willa/themes/light.css";
import "willa/themes/dark.css";

import { Button } from "willa/Button";
import "willa/Button.css";
```

## Theme Scope

Wrap Willa components with `.willa-shell`. Set `data-wk-theme` on the document
root when switching themes:

```tsx
<html data-wk-theme="light">
  <body>
    <div className="willa-shell">
      <App />
    </div>
  </body>
</html>
```

## Package Scope

`willa` re-exports public components from the scoped packages. Component
implementations, package-specific theme variables, and shared utilities remain
owned by their source packages.
