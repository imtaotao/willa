# @willa-ui/content

Product and rich-content components for Willa UI.

Use this package for reusable content primitives such as buttons, code blocks,
media previews, callouts, dialogs, tabs, tables, citations, progress views, and
other product feedback or navigation components.

## Import

Full styles:

```tsx
import { Button, CodeBlock, CopyButton } from "@willa-ui/content";
import "@willa-ui/content/style.css";
```

Single-component styles:

```tsx
import "@willa-ui/content/external.css";
import "@willa-ui/content/themes/light.css";
import "@willa-ui/content/themes/dark.css";

import { CodeBlock } from "@willa-ui/content/components/CodeBlock";
import "@willa-ui/content/components/CodeBlock.css";
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

## Boundaries

Content components can depend on layout and shared utilities. They should not
depend on form, AI, or widgets components.
