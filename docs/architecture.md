# Willa Architecture

This document records Willa's repository structure, module responsibilities,
dependency relationships, build flow, and common pitfalls. For new components,
see [Willa Component Guide](./component.md). For CSS and theme rules, see
[Willa CSS Guide](./css.md). For code style, see
[Willa Style Guide](./style.md).

## Project Scope

Willa is a React component library for AI products, blogs, documentation sites,
content platforms, MDX pages, and rich interactive content rendering. The core
requirements are:

- Components can be imported from package root entries.
- Components can be imported from single-component entries.
- Component CSS can be composed per component.
- Light and dark theme CSS can be composed across packages.
- Product interaction components and content rendering components can be
  combined without crossing package ownership boundaries.
- The example app can consume source code directly for development and docs.

The repository is a pnpm workspace monorepo. Packages are built with `auklet`.

## File Organization

```text
.
  package.json
  pnpm-workspace.yaml
  tsconfig.json
  CONTRIBUTING.md
  docs/
    architecture.md
    component.md
    css.md
    style.md
  example/
    src/
      catalog/
      docs/
  packages/
    willa/
      src/
      auklet.config.mjs
    willa-content/
      src/
        components/
        themes/
      auklet.config.mjs
    willa-widgets/
      src/
        components/
        themes/
      auklet.config.mjs
    willa-shared/
      src/
      auklet.config.mjs
```

The root directory contains workspace configuration, shared TypeScript
configuration, repository documentation, and development commands. Packages do
not maintain their own `tsconfig.json`; they use the root `tsconfig.json`.

`docs` contains focused maintenance documents:

- `architecture.md`: overall structure, module relationships, build flow, and
  pitfalls.
- `component-roadmap.md`: component roadmap and future AI product component
  planning.
- `component.md`: component creation, migration, exports, and example rules.
- `css.md`: CSS, theme variables, and cross-package style dependency rules.
- `style.md`: TypeScript, React, and documentation code style.

## Module Responsibilities

`packages/willa` is the public aggregate package, published as `willa`. It
exports all public components and does not export `@willa-ui/shared`. It usually
does not own component implementations or theme variables; it combines content
and widgets outputs.

`packages/willa-content` is the base product and content component package,
published as `@willa-ui/content`. It contains general product and content
components such as `Button`, `Card`, `CodeBlock`, `Callout`, `Image`,
`AudioEmbed`, `VideoEmbed`, `Tabs`, `Dialog`, and `Steps`. It also provides
shared theme tokens.

`packages/willa-widgets` is the scenario component package, published as
`@willa-ui/widgets`. It contains platform integrations, MDX composition,
external embeds, and more domain-specific components such as `Mdx`,
`GitHubRepo`, `XPostEmbed`, `WebEmbed`, and `EnglishCards`.

`packages/willa-shared` is the shared utility package, published as
`@willa-ui/shared`. It contains cross-package types, text utilities, node
utilities, clipboard helpers, and similar logic. It does not contain React
components or component CSS.

`example` is the component demo and documentation app. In development, it
consumes package source through tsconfig aliases. The default port is `2333`.

## Dependency Relationships

Dependencies must remain one-way:

- shared does not depend on content or widgets.
- content can depend on shared.
- widgets can depend on shared and content.
- willa can depend on and export content and widgets.
- example can depend on all public packages and source aliases.

Do not make content depend on widgets. Do not move widget-specific variables,
styles, or components back into content.

```mermaid
flowchart LR
  shared["@willa-ui/shared"]
  content["@willa-ui/content"]
  widgets["@willa-ui/widgets"]
  willa["willa"]
  example["example"]

  content --> shared
  widgets --> shared
  widgets --> content
  willa --> content
  willa --> widgets
  example --> willa
  example --> content
  example --> widgets
  example --> shared
```

## Path Aliases

Prefer source aliases over deep relative paths:

- `#content/*` points to `packages/willa-content/src/*`
- `#widgets/*` points to `packages/willa-widgets/src/*`
- `#shared/*` points to `packages/willa-shared/src/*`
- `#example/*` points to `example/src/*`
- `@willa-ui/*` points to package source roots

`willa/*` maps to single-component entries under `packages/willa/src/*`. When
adding path rules, prefer wildcard mappings instead of one-off file mappings.

## Build Relationships

Every publishable package uses `auklet.config.mjs`. `modules: true` generates
single-component entries. `styles.themes` declares the package's own theme CSS.
`styles.dependencies` declares cross-package CSS dependencies.

Core build outputs include:

- Package root entries, such as `@willa-ui/content`.
- Single-component entries, such as `willa/CodeBlock`.
- Package root CSS, such as `willa/style.css`.
- Single-component CSS, such as `willa/CodeBlock.css`.
- Theme CSS, such as `willa/themes/light.css` and `willa/themes/dark.css`.

```mermaid
flowchart TB
  source["src components and themes"]
  auklet["auklet build"]
  js["JS entries"]
  css["CSS entries"]
  root["package root export"]
  modules["single component exports"]
  themes["theme css"]

  source --> auklet
  auklet --> js
  auklet --> css
  js --> root
  js --> modules
  css --> themes
  css --> modules
```

## CSS Composition Flow

CSS composition is driven by `styles.dependencies` in `auklet.config.mjs`.
widgets depends on content component CSS and theme CSS. willa depends on both
content and widgets.

```mermaid
flowchart LR
  contentCss["content CSS and themes"]
  widgetsOwn["widgets own CSS and themes"]
  widgetsCss["widgets output CSS"]
  willaCss["willa output CSS"]

  contentCss --> widgetsCss
  widgetsOwn --> widgetsCss
  contentCss --> willaCss
  widgetsCss --> willaCss
```

This means widgets can reference generic tokens from content, but must not copy
content variable definitions. willa only composes CSS and does not own component
theme variables.

## Example Documentation Flow

Example documentation data lives in `example/src/docs`. The registry lives in
`example/src/catalog/registry.ts`. `registry.ts` keeps lightweight entries and
loads demos dynamically through `load`, so component code and CSS do not all
enter the initial page.

```mermaid
flowchart LR
  registry["catalog registry"]
  doc["ComponentName.demo.tsx"]
  defineDoc["defineDoc"]
  view["DocView"]
  preview["live preview"]
  code["generated code"]

  registry --> doc
  doc --> defineDoc
  defineDoc --> view
  view --> preview
  view --> code
```

## Pitfalls

- Do not make content depend on widgets. content is the base layer and widgets
  is the scenario layer; reversing this makes the base package heavier and
  breaks single-component CSS composition.
- Do not copy content variables into widgets themes. widgets already depends on
  content CSS and themes through `styles.dependencies`; duplicate definitions
  make theme sources inconsistent.
- Do not add component theme variables to the willa aggregate package. willa
  only combines content and widgets CSS; component variables should follow the
  package that owns the component source.
- Do not add per-package `tsconfig.json` files. Current aliases, strict checks,
  and example source consumption depend on the root TypeScript config.
- Do not change `auklet.config.mjs` back to TypeScript. The current auklet
  version does not support `auklet.config.ts`; use `.mjs` and `defineConfig`.
- Do not validate only package root entries. New public components must verify
  package root imports, willa root imports, willa single-component imports, and
  single-component CSS imports.
- Do not make `registry.ts` statically import demos. Example demos should load
  only when selected.
- Portal component theme variables cannot live only on `.willa-shell`. For
  example, `Lightbox` renders into `document.body`, so the variable scope must
  also cover the component root.
