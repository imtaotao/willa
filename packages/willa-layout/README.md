# @willa-ui/layout

Layout primitives and base visual tokens for Willa UI.

Use this package for page shells, responsive containers, groups, stacks, grids,
cards, panels, section headers, separators, masonry layouts, and split panes.
The layout theme also owns shared visual tokens such as fonts, text colors,
line colors, surfaces, and focus rings.

## Import

Full styles:

```tsx
import { Card, Stack } from "@willa-ui/layout";
import "@willa-ui/layout/style.css";
```

Single-component styles:

```tsx
import "@willa-ui/layout/external.css";
import "@willa-ui/layout/themes/light.css";
import "@willa-ui/layout/themes/dark.css";

import { Card } from "@willa-ui/layout/components/Card";
import "@willa-ui/layout/components/Card.css";
```

## Boundaries

Layout components can use shared utilities. They should not depend on content,
form, AI, or widgets components.
