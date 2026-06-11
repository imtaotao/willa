# Willa Component Guide

This document defines component file organization, exports, CSS integration,
example docs, and acceptance checks for Willa. Package responsibilities and
dependency relationships are documented in [Willa Architecture](./architecture.md).
Code style is documented in [Willa Style Guide](./style.md). CSS and theme
variables are documented in [Willa CSS Guide](./css.md).
Future component planning is tracked in
[Willa Component Roadmap](./component-roadmap.md).

## Package Ownership

Before adding a component, choose its package based on the architecture guide:

- `@willa-ui/layout`: layout primitives, such as card surfaces, separators,
  groups, stacks, grids, masonry flows, containers, panels, resizable panes,
  page headers, section headers, and page shells.
- `@willa-ui/content`: general content rendering, such as text, lists,
  callouts, code blocks, product primitives, and reusable rich content
  primitives.
- `@willa-ui/form`: form controls and form layout, such as input, textarea,
  select, checkbox, radio, switch, date picker, upload, form field, and form
  actions.
- `@willa-ui/ai`: AI product scenes and AI-specific composition, such as prompt
  inputs, chat messages, source citations, tool call displays, context panels,
  generation cards, and agent status views.
- `@willa-ui/widgets`: platform integrations, MDX composition, and more
  scenario-specific components, such as GitHub, X, web embeds, audio/video
  embeds, poems, and EnglishCards.
- `@willa-ui/shared`: cross-package utilities, types, text processing, node
  processing, clipboard helpers, and similar logic. It must not contain React
  components or component CSS.
- `willa`: the public aggregate package that exposes public components from
  layout, content, form, AI, and widgets.

Dependency direction is defined in [Willa Architecture](./architecture.md). A
component used only by AI or widgets is not automatically owned by that package;
first judge whether its meaning is general enough for content.

## File Organization

Component directories use the component name. layout, content, form, AI, and
widgets use the same shape:

```text
src/components/ComponentName/
  index.tsx
  index.css
```

The implementation lives in `index.tsx`. Structural component styles live in
the colocated `index.css`. If a component needs internal subcomponents, keep
them in the same component directory first. Move them up only when they are
shared by multiple components.

Component names should describe general meaning and should not carry historical
source prefixes. Unless a component is specifically MDX-related, do not prefix
it with `Mdx`. Do not name components after HTML wrapper tags, such as renaming
`CodeBlock` to `Pre`.

## Component Implementation

General implementation style is defined in [Willa Style Guide](./style.md).
This section only covers component-specific structure.

If a component needs an internal protocol marker, such as Lightbox identifying
`Image` and `ImageGallery` children, attach the marker to the component object
and add a comment explaining why it exists. Internal markers are not public API.

## Exports

When adding a content component, usually update:

- `packages/willa-content/src/components/ComponentName/index.tsx`
- `packages/willa-content/src/components/ComponentName/index.css`
- `packages/willa-content/src/index.ts`
- `packages/willa/src/ComponentName/index.tsx`
- `packages/willa-content/src/themes/light.css` and `dark.css`, if the
  component needs theme variables
- `example/src/docs/ComponentName.demo.tsx`
- `example/src/catalog/registry.ts`

When adding a layout component, replace `willa-content` with `willa-layout` and
make sure the willa aggregate package exports it.

When adding a form component, replace `willa-content` with `willa-form` and
make sure the willa aggregate package exports it.

When adding a widgets component, replace `willa-content` with `willa-widgets`
and make sure the willa aggregate package exports it.

When adding an AI component, usually update:

- `packages/willa-ai/src/components/ComponentName/index.tsx`
- `packages/willa-ai/src/components/ComponentName/index.css`
- `packages/willa-ai/src/index.ts`
- `packages/willa/src/ComponentName/index.tsx`
- `packages/willa-ai/src/themes/light.css` and `dark.css`, if the component
  needs AI-owned theme variables
- `example/src/docs/ComponentName.demo.tsx`
- `example/src/catalog/registry.ts`

Single-component entries must export both the component and its types:

```tsx
export { AudioLink } from "@willa-ui/widgets/components/AudioLink";
export type { AudioLinkProps } from "@willa-ui/widgets/components/AudioLink";
```

Shared types can live in `@willa-ui/shared`, but component entries should still
provide convenient type exports.

## CSS Integration

Every public component needs its own CSS file. Component CSS contains
structure, layout, state, and variable references. Theme colors, shadows,
backgrounds, and border colors belong in theme variables. See
[Willa CSS Guide](./css.md) for details.

New component themes should use subtle tints and neutral text instead of heavy
saturated fills. Blue can be used for default actions, while green should be
reserved for positive semantic states such as success or copied. Dark theme
values should follow the existing neutral surface style first and use color
accents sparingly. When a component introduces theme variables, define both
light and dark values in the owning package and check contrast, hover, focus,
disabled, and selected/copied states in both themes.

When adding a component, confirm:

- Structural styles live in the component directory's `index.css`.
- Theme variables live in the owning package's `src/themes/light.css` and
  `src/themes/dark.css`.
- content components that compose layout components express CSS dependencies
  through `styles.dependencies` in `auklet.config.mjs`; they do not copy layout
  CSS or theme variables.
- form, AI, and widgets components that compose layout or content components
  follow the same rule: reuse upstream CSS through `styles.dependencies`
  instead of copying upstream CSS or theme variables.
- Single-component CSS is available through `willa/ComponentName.css`.

## Example Docs

Every public component needs an example demo in
`example/src/docs/ComponentName.demo.tsx` and a registry entry in
`example/src/catalog/registry.ts`.

Demo docs are written primarily in Chinese. In development, example consumes
package source through tsconfig aliases. Component code and component CSS hot
reload in example; packages do not need to be built first.

Example documentation utilities live in `example/src/catalog`:

- `defineDoc.tsx`: converts demo descriptions into previews and code snippets.
- `DocView.tsx`: renders the documentation view.
- `registry.ts`: registers component documentation entries.
- `types.ts`: defines documentation types.

Demos should cover:

- The most common real usage.
- Main props and key states.
- Visual states driven by theme variables.
- Common composition with other components.
- Mobile rendering and interaction states for components with dense controls,
  long text, horizontal navigation, floating panels, portals, or media layouts.

Dense table-like components, such as schedule calendars, may keep horizontal
scrolling inside the component on mobile when compressing columns would make
content unreadable or hard to tap. The scroll must stay inside the component
container, must not create page-level horizontal overflow, and the demo should
state this behavior when it is part of the intended design.

Prefer a single data definition and let `defineDoc` generate both preview and
React example code. Complex scenarios can pass explicit `code` and use
`unindent` from `aidly` to keep indentation readable.

`registry.ts` should keep lightweight entries and must not synchronously import
`*.demo.tsx`. Each entry loads its demo through `load`, so component code and
CSS only enter the page when selected. Component lists use `sortStrings` from
`aidly` for alphabetical ordering.

Every demo should include:

- `id`: URL hash identifier so refreshes keep the current component.
- `name`: component name.
- `packageName`: display entry, such as `willa/CodeBlock`.
- `description`: Chinese description.
- `imports` and `css`: used to generate code blocks.
- `demo`: real rendering data.
- `props`: prop documentation, with required markers on prop names.

Component docs are grouped by category:

- layout: layout primitives and page structure components.
- content: base product/content components.
- form: form controls and form layout components.
- ai: AI product and AI interaction components.
- widgets: scenario components.

## Acceptance Checklist

After adding a public component, confirm:

- Package root import works from the owning package, such as
  `import { CodeBlock } from "@willa-ui/content"` or
  `import { Card } from "@willa-ui/layout"`.
- willa root import works, such as `import { CodeBlock } from "willa"`.
- willa single-component import works, such as `import { CodeBlock } from "willa/CodeBlock"`.
- Single-component CSS works, such as `import "willa/CodeBlock.css"`.
- The example demo renders correctly.
- Mobile layouts avoid horizontal page overflow, keep interactive targets usable,
  and handle hover-dependent behavior on touch devices.
- `pnpm run typecheck` passes.
- Relevant package builds pass; at minimum run `pnpm run build:packages`.

When migrating a component, also confirm:

- Old package exports, component directories, styles, and theme variables are
  removed.
- The new package theme files contain the variables the component needs.
- The willa aggregate package only updates exports and dependency config; it
  does not copy theme variables.
- Documentation and example `packageName`, imports, and CSS entries are updated.
