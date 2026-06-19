# @willa-ui/form

Form controls and form composition components for Willa UI.

Use this package for inputs, text areas, selectors, date pickers, color pickers,
uploads, rating controls, calendars, search/filter controls, and form layout
helpers.

## Import

Full styles:

```tsx
import { DatePicker, Input } from "@willa-ui/form";
import "@willa-ui/form/style.css";
```

Single-component styles:

```tsx
import "@willa-ui/form/external.css";
import "@willa-ui/form/themes/light.css";
import "@willa-ui/form/themes/dark.css";

import { DatePicker } from "@willa-ui/form/components/DatePicker";
import "@willa-ui/form/components/DatePicker.css";
```

## Boundaries

Form components can compose layout, content, and shared utilities. Layout and
content packages should not depend on form components or form-owned theme
variables.
