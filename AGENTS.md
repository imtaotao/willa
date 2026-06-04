# AGENTS.md

This file is the entry point for AI coding agents working in this repository.
Read it before making changes, then follow the linked project documents for
details.

## Project Context

Willa is a React component library for AI products, blogs, documentation sites,
content platforms, MDX pages, and rich interactive content rendering.

The repository is a pnpm workspace monorepo. Packages are built with `auklet`.

## Document Map

- [CONTRIBUTING.md](./CONTRIBUTING.md): contributor overview and common checks.

- [docs/architecture.md](./docs/architecture.md): repository structure, module
  responsibilities, dependency flow, build flow, and known pitfalls.

- [docs/component.md](./docs/component.md): component creation, migration,
  exports, example docs, and acceptance checklist.

- [docs/css.md](./docs/css.md): CSS rules, theme variable ownership, cross-package
  style dependencies, and CSS pitfalls.
- [docs/style.md](./docs/style.md): TypeScript, React, naming, comments, and demo
  code style.

## Task Routing

Read only the documents needed for the change, then follow links if the change
crosses boundaries.

- Architecture, package boundaries, build output, path aliases, or dependency
  direction: read `docs/architecture.md`.
- Before changing package boundaries, build config, CSS dependency config, or
  component ownership, review the pitfalls in `docs/architecture.md`.
- New component, component migration, exports, example docs, or public entry
  changes: read `docs/component.md`.
- Component CSS, theme variables, cross-package CSS dependencies, or portal
  styling: read `docs/css.md`.
- TypeScript, React implementation style, naming, comments, or demo code style:
  read `docs/style.md`.
- Contribution workflow, common checks, or commit message format: read
  `CONTRIBUTING.md`.
- README changes: keep README user-facing; move internal maintenance details to
  `CONTRIBUTING.md` or `docs/`.

## Working Rules

- Keep package responsibilities clear. Do not make content depend on widgets.
- Do not copy content theme variables into widgets.
- Do not add component theme variables to the `willa` aggregate package.
- Do not add per-package `tsconfig.json` files; use the root `tsconfig.json`.
- Use `auklet.config.mjs` with `defineConfig`; do not use
  `auklet.config.ts`.
- Keep README user-facing. Internal maintenance details belong in
  `CONTRIBUTING.md` or `docs/`.
- Prefer focused changes. Avoid unrelated refactors and package metadata churn
  unless the task explicitly asks for a style or consistency pass in a defined
  scope.
- Do not copy the same rule into multiple documents. Prefer linking to the
  source-of-truth document.
- Do not include generated build output in commits unless explicitly requested.

## Change Checklists

For new public components:

- Confirm the package choice in `docs/architecture.md` and `docs/component.md`.
- Add package root exports and `willa` aggregate exports.
- Add component CSS and theme variables in the owning package when needed.
- Add or update example docs and registry entries.
- Verify package root import, `willa` root import, single-component import, and
  single-component CSS import.

For component migrations:

- Remove stale exports, component files, CSS, and theme variables from the old
  package.
- Move theme variables with the component's owning package.
- Keep `willa` as an aggregate layer; do not duplicate component theme variables
  there.
- Update example docs, package names, imports, and CSS entries.

For CSS or theme changes:

- Keep structural CSS in component `index.css`.
- Put theme values in the owning package's theme files.
- Reuse upstream variables through declared CSS dependencies; do not copy them.
- Check portal components have variable scope where they actually render.

For documentation changes:

- Keep README focused on external users.
- Keep `CONTRIBUTING.md` as the overview and workflow entry point.
- Put detailed rules in one focused document under `docs/`.
- Update cross-links when renaming or moving documents.

## Verification

Use the narrowest check that covers the change, then broaden when shared
behavior is affected.

Common commands:

```bash
pnpm run format
pnpm run typecheck
pnpm run build:packages
pnpm run build
```

For example-only changes:

```bash
pnpm dev
pnpm run build
```

## Commits

Follow the commit message format in [CONTRIBUTING.md](./CONTRIBUTING.md).
