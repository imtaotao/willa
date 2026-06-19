# @willa-ui/widgets

Integration-style and rich media widgets for Willa UI.

Use this package for MDX composition, GitHub and X/Twitter embeds, web embeds,
audio and video blocks, QR codes, poems, profile cards, logo walls, and other
specialized content widgets.

## Import

Full styles:

```tsx
import { Mdx, WebEmbed } from "@willa-ui/widgets";
import "@willa-ui/widgets/style.css";
```

Single-component styles:

```tsx
import "@willa-ui/widgets/external.css";
import "@willa-ui/widgets/themes/light.css";
import "@willa-ui/widgets/themes/dark.css";

import { WebEmbed } from "@willa-ui/widgets/components/WebEmbed";
import "@willa-ui/widgets/components/WebEmbed.css";
```

## Boundaries

Widgets can compose layout, content, form, and shared utilities. Lower-level
packages should not depend on widget components or widget-owned theme
variables.
