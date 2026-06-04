# Willa Style Guide

This document defines TypeScript, React, and documentation code style for Willa.
Component file organization and export flow are documented in
[Willa Component Guide](./component.md). CSS and theme rules are documented in
[Willa CSS Guide](./css.md).

## Function Declarations

Exported functions must use function declarations:

```tsx
export function CodeBlock(props: CodeBlockProps) {
  return <pre />;
}
```

Non-exported helpers should use arrow functions by default:

```tsx
const resolveLabel = (value: string | undefined) => value?.trim() ?? "";
```

Avoid manually declaring return types when TypeScript can infer them. Add return
types only when inference causes errors, public API clarity needs it, or
inference is unstable.

## Component Exports

Components should export the component itself directly. Do not use `createXxx`
as a component export. `createXxx` is only appropriate for real factory
functions or utilities.

```tsx
export function AudioLink(props: AudioLinkProps) {
  return <a href={props.href}>{props.children}</a>;
}
```

Single-component entries must export both the component and its types:

```tsx
export { AudioLink } from "@willa-ui/content/components/AudioLink";
export type { AudioLinkProps } from "@willa-ui/content/components/AudioLink";
```

Shared types can live in `@willa-ui/shared`, but component entries should still
provide convenient type exports.

## Imports

When a module needs both React runtime values and React types, keep them in one
import statement with inline `type` specifiers:

```tsx
import { useEffect, useState, type MouseEvent, type ReactNode } from "react";
```

Do not split the same React module into adjacent value and type imports:

```tsx
import type { MouseEvent, ReactNode } from "react";
import { useState } from "react";
```

Pure type-only React imports are still fine when no runtime React value is
needed.

## Naming

Component names should describe general meaning and should not carry historical
source prefixes. Unless a component is specifically MDX-related, do not prefix
it with `Mdx`.

Do not name components after HTML wrapper tags, such as renaming `CodeBlock` to
`Pre`.

Internal helpers should describe business intent instead of implementation
details:

```ts
const normalizeLanguage = (language: string | undefined) =>
  language?.trim().toLowerCase() ?? "";
```

Do not sacrifice readability just to shorten names. Cross-package exported
types and functions should use complete semantic names.

## Types

Public component props use the `ComponentNameProps` naming pattern and should
live near the component definition.

```tsx
export interface ImageGalleryProps {
  images: ImageItem[];
  columns?: number;
}
```

Only types reused across packages, or public types unrelated to a specific
component, should move to `@willa-ui/shared`. Do not move component-private
types to shared just for uniformity.

Prefer `export type` for type exports. Keep runtime exports and type exports
separate so bundlers do not misread side effects.

## Comments

Do not add comments that merely explain what the code does. Add comments when:

- A component uses an internal protocol, such as a marker attached to a
  component object.
- Logic exists to handle external platform or browser behavior.
- A seemingly unnecessary guard protects a real boundary condition.
- A type shape works around tooling constraints or preserves public API
  stability.

Comments should explain why, not restate what.

## Example Code

Demo text is primarily Chinese, and example code should reflect realistic use.
Prefer `defineDoc` to generate previews and code. Use explicit `code` only for
complex scenarios.

Example code should be copyable:

- Import paths use public entries, such as `willa/CodeBlock`.
- CSS imports use public CSS entries, such as `willa/CodeBlock.css`.
- Example data must not depend on local development environments or private
  URLs.
- Required markers in prop docs belong on prop names.

## Maintenance Principles

Before adding a style rule, confirm it can be followed by existing code and
that it reduces real maintenance cost. Do not add rules that only express
personal preference.

When old code conflicts with this document, new code should follow this
document. Old code can be aligned while making related changes, but do not do
large style-only rewrites unless the task explicitly asks for that scope.
