# Willa CSS Guide

This document defines CSS responsibilities, theme variable ownership, and
component styling rules across Willa packages. When adding a component,
migrating a component, or changing themes, use this document to decide where
variables should live. Overall module relationships are documented in
[Willa Architecture](./architecture.md). Component file organization, exports,
and example docs are documented in [Willa Component Guide](./component.md).

## Principles

- Component CSS owns structure, layout, interaction states, and variable
  references.
- Theme CSS owns colors, backgrounds, border colors, shadows, accents, and
  other visual tokens.
- Variables are defined only in the package that owns the component.
- Aggregate packages only compose CSS; they do not redefine concrete component
  variables.
- Single-component CSS must provide component structure, but must not embed
  theme colors.

## Theme Variable Ownership

Variables live in the theme files of the package that owns the component:

- content component variables live in
  `packages/willa-content/src/themes/light.css` and
  `packages/willa-content/src/themes/dark.css`.
- AI component variables live in `packages/willa-ai/src/themes/light.css` and
  `packages/willa-ai/src/themes/dark.css`.
- widgets component variables live in
  `packages/willa-widgets/src/themes/light.css` and
  `packages/willa-widgets/src/themes/dark.css`.
- `Mdx` prose, heading, and inline-code variables belong to widgets.
- `Lightbox` variables still belong to content, even though Lightbox renders
  through a portal into `document.body`.

Do not copy content variables into AI or widgets themes. AI and widgets already
depend on content CSS and themes through `styles.dependencies`, so they should
reuse content as the variable source.

When adding or migrating a component, decide ownership by where the component
source lives, not by which package uses the component. For example, `Mdx`
renders `Image`, `Callout`, and `CodeBlock`, but those variables still belong
to content; only `Mdx`'s own prose and heading variables belong to widgets.
Likewise, an AI component that renders `Button`, `CodeBlock`, or `FileCard`
should reuse those content variables instead of redefining them.

## Component CSS

Component `index.css` files can contain:

- display, position, grid, flex, gap, padding, and margin.
- width, height, border-radius, z-index, and overflow.
- animation, transition, and transform.
- `transparent`, `currentColor`, and `inherit`.
- Component-local variables, such as `--willa-skeleton-line-width` injected from
  props.

Component `index.css` files should not contain:

- Theme color values, such as `#fff`, `#111827`, or `rgba(...)`.
- Theme shadow values.
- Light/dark theme selectors.
- Variables for components owned by other packages.

Component CSS should reference variables:

```css
.willa-lightbox {
  background: var(--willa-lightbox-bg);
}
```

Theme CSS should define variables:

```css
.willa-shell,
.willa-lightbox {
  --willa-lightbox-bg: rgba(248, 250, 252, 0.68);
  --willa-lightbox-solid-bg: #f8fafc;
}

:root[data-wk-theme="dark"] .willa-shell,
:root[data-wk-theme="dark"] .willa-lightbox {
  --willa-lightbox-bg: rgba(17, 19, 23, 0.68);
  --willa-lightbox-solid-bg: #111317;
}
```

## Portal Components

If a component renders outside `.willa-shell` through a portal, such as
`Lightbox`, theme variables cannot live only on `.willa-shell`.

Include the component root selector in the variable scope:

```css
.willa-shell,
.willa-lightbox {
  --willa-lightbox-bg: rgba(248, 250, 252, 0.68);
}
```

The dark theme should do the same:

```css
:root[data-wk-theme="dark"] .willa-shell,
:root[data-wk-theme="dark"] .willa-lightbox {
  --willa-lightbox-bg: rgba(17, 19, 23, 0.68);
}
```

Do not copy variables into another package theme just to support a portal
component.

Portal components also need to avoid covering the whole backdrop with child
backgrounds. For example, an image preview can use `--willa-lightbox-bg` on the
overlay, but the image itself should not use a viewport-sized background that
blocks the translucent backdrop.

## Cross-Package CSS Dependencies

Cross-package CSS dependencies are declared through `auklet.config.mjs`.

`@willa-ui/ai` and `@willa-ui/widgets` depend on content:

```js
styles: {
  dependencies: {
    "@willa-ui/content": {
      entry: "/style.css",
      components: "/components/**.css",
      themes: {
        dark: "/themes/dark.css",
        light: "/themes/light.css",
      },
    },
  },
}
```

This means AI and widgets can use base tokens and component styles provided by
content. Their themes should only add variables owned by their own package.

If an AI or widgets component directly imports a content component, it should
also declare the content CSS dependency instead of copying content styles or
theme variables. This keeps CSS sources consistent when building that package
alone, building the willa aggregate package, and using single-component
entries.

The `willa` aggregate package composes public package CSS into entries such as:

- `willa/style.css`
- `willa/themes/light.css`
- `willa/themes/dark.css`
- `willa/ComponentName.css`

## Naming

Variable names should follow component meaning:

- `Lightbox` uses `--willa-lightbox-*`.
- `WebEmbed` uses `--willa-web-embed-*`.
- `EnglishCards` uses `--willa-english-*`.
- `GitHubRepo` and `GitHubMention` can share `--willa-github-*`.

Do not make unrelated components reuse another component's variable names. For
example, `UrlLink` should not use `--willa-github-pill-bg`.

Generic tokens can use short names:

- `--willa-text`
- `--willa-text-strong`
- `--willa-line`
- `--willa-focus-ring`
- `--willa-panel-bg`

Generic tokens are provided by the content theme. AI and widgets can reference
them but must not redefine them.

## CSS Imports

For aggregate package usage:

```tsx
import "willa/external.css";
import "willa/themes/light.css";
import "willa/themes/dark.css";
```

For single-component usage:

```tsx
import { Lightbox } from "willa/Lightbox";
import "willa/Lightbox.css";
```

Do not require users to import the full `style.css` just to get
single-component structure styles. Component structure should be available
through single-component CSS, while theme variables come from theme CSS.

## CSS Checklist for New Components

When adding a content component:

1. Write structural styles in
   `packages/willa-content/src/components/ComponentName/index.css`.
2. Add theme variables in `packages/willa-content/src/themes/light.css` and
   `dark.css` when needed.
3. Confirm `packages/willa-content/src/index.ts` and
   `packages/willa/src/ComponentName/index.tsx` export the component.
4. Confirm single-component CSS works through `willa/ComponentName.css`.

When adding a widgets component:

1. Write structural styles in
   `packages/willa-widgets/src/components/ComponentName/index.css`.
2. Add widgets-owned theme variables in
   `packages/willa-widgets/src/themes/light.css` and `dark.css`.
3. If it composes content components, reuse content theme variables instead of
   copying them.
4. Confirm `packages/willa-widgets/src/index.ts` and
   `packages/willa/src/ComponentName/index.tsx` export the component.

When adding an AI component:

1. Write structural styles in
   `packages/willa-ai/src/components/ComponentName/index.css`.
2. Add AI-owned theme variables in `packages/willa-ai/src/themes/light.css` and
   `dark.css`.
3. If it composes content components, reuse content theme variables instead of
   copying them.
4. Confirm `packages/willa-ai/src/index.ts` exports the component and update
   `packages/willa/src/ComponentName/index.tsx` if it should be exposed through
   the aggregate package.

When migrating a component:

- Variables move with the package that owns the component.
- Remove stale variables from the old package theme.
- Do not add duplicate variables to the `willa` aggregate package; update only
  exports or dependency configuration.

## Local Variables

Some CSS variables are not theme variables. They are component-local variables,
defined in component CSS or injected through React inline styles.

For example, `Skeleton`:

```css
.willa-prose-skeleton-line {
  width: var(--willa-skeleton-line-width, 100%);
  height: var(--willa-skeleton-line-height, 0.9rem);
}
```

`--willa-skeleton-line-width` and `--willa-skeleton-line-height` come from props
and do not need to live in theme files.

Use this rule:

- Variables that affect theme visuals belong in theme files.
- Variables produced by props, layout state, or component-local calculations can
  stay local.
- Component-local variables must have reasonable fallbacks.

## FAQ

What should an AI or widgets component do if it needs content base tokens?

Reference variables provided by the content theme, such as
`--willa-text-strong`, `--willa-line`, and `--willa-focus-ring`. Do not redefine
these base tokens in AI or widgets themes.

Should AI or widgets copy content variables when composing content components?

No. Declare the dependency through `styles.dependencies` in `auklet.config.mjs`
so the build output combines content CSS.

Can component CSS contain a special color such as `rgba(...)`?

If the value is part of the visual theme, no. Extract it into a theme variable.
Only keep it in component CSS when it is a technical value for animation,
masking, transparency, or structure that is not theme-specific.

Should a variable live in theme files even if only one component uses it?

Yes, if it represents theme visuals. Reuse is not the deciding factor; theme
ownership is.

## Checklist

Before adding or changing CSS, confirm:

- Variables are defined in the package that owns the component.
- Component CSS does not hardcode theme colors.
- AI and widgets do not copy content variables.
- Portal component variable scope covers the actual DOM location.
- The `willa` aggregate package composes CSS through `styles.dependencies`
  instead of hand-writing duplicate variables.
- `pnpm typecheck`, `pnpm build:packages`, and `pnpm build` pass.
