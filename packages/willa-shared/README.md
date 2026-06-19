# @willa-ui/shared

Shared utilities and types for Willa UI packages.

Use this package for cross-package helpers such as controlled state, clipboard
access, copy feedback state, CSS size formatting, code highlighting, DOM focus
utilities, ref composition, number ranges, media helpers, request helpers,
heading extraction, and virtual scroll state.

## Import

```ts
import {
  copyToClipboard,
  formatCssSize,
  useControllableState,
  useCopyToClipboard,
} from "@willa-ui/shared";
```

## Boundaries

Shared does not contain React components or component CSS. It should not depend
on layout, content, form, AI, or widgets packages.
