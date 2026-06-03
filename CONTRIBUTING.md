# Willa Contributor Guide

This document is the top-level maintenance entry point for Willa. Detailed
architecture, component, CSS, and code style rules live in `docs/`. Read the
relevant documents before making changes, then compare your work with the
existing implementation patterns.

## Project Scope

Willa is a React component library for blogs, community content platforms,
article pages, documentation, MDX pages, and rich content rendering. Components
should work independently while preserving single-component imports,
single-component CSS imports, and composable theme CSS.

The repository is a pnpm workspace monorepo. Packages are built with `auklet`.
Package structure, path aliases, build outputs, and module relationships are
documented in [Willa Architecture](./docs/architecture.md).

## Guide Map

Architecture, file organization, module relationships, build flow, and known
pitfalls: [Willa Architecture](./docs/architecture.md).

Component creation, migration, exports, example docs, and acceptance checks:
[Willa Component Guide](./docs/component.md).

CSS rules, theme variable ownership, cross-package variable reuse, and style
dependencies: [Willa CSS Guide](./docs/css.md).

TypeScript, React, and documentation code style:
[Willa Style Guide](./docs/style.md).

`CONTRIBUTING.md` should stay as a project-level overview. For architecture,
component, CSS, or code style changes, treat the focused documents in `docs/`
as the source of truth.

## Pre-Submit Checks

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

Commits run lint-staged formatting on staged files. When adding a dependency,
explain its purpose before installation.

## Publishing

Willa publishes prerelease versions to npm before stable releases. Publish from
the workspace root so auklet can resolve all workspace packages and sort them by
internal dependencies.

Run with `--dry-run` first:

```bash
pnpm run publish:alpha -- --dry-run
```

Then publish the chosen version type with an npm 2FA code when required:

```bash
pnpm run publish:alpha -- --otp <code>
pnpm run publish:beta -- --otp <code>
pnpm run publish:patch -- --otp <code>
pnpm run publish:minor -- --otp <code>
pnpm run publish:major -- --otp <code>
```

For local token-based publishing, create `.env.local` in the workspace root:

```ini
NPM_TOKEN=<npm-token>
```

The publish scripts pass `--token env:NPM_TOKEN` to auklet, so the normal publish
commands read the token from `.env.local`. You can still override the token value
directly when needed:

```bash
pnpm run publish:alpha -- --token <npm-token>
```

The root `.npmrc` only declares the npm registry auth placeholder required by
npm publish. Keep real npm tokens in `.env.local`, the shell, CI secrets, or a
local user-level npm config.

The publish scripts use auklet workspace publishing. Auklet skips private
workspace packages, validates internal `workspace:*` dependencies, runs package
builds, and publishes in dependency order.

## Commit Messages

Use conventional commit prefixes:

- `feat:` for new user-facing features.
- `fix:` for bug fixes.
- `docs:` for documentation-only changes.
- `chore:` for maintenance changes that do not affect runtime behavior.
- `refactor:` for code changes that preserve behavior.
- `test:` for test-only changes.

Keep the subject concise and imperative:

```text
docs: add architecture guide
fix: preserve theme variables in widgets
```

## Maintenance Principles

- Keep package responsibilities clear. When migrating components, remove old
  exports, styles, and theme variables from the previous package.
- Keep single-component imports working. New components must not be available
  only from package root exports.
- Keep styles composable. Component CSS should not carry theme values directly.
- Keep example coverage for all public components, especially widgets and
  combined scenarios such as Mdx.
- Avoid unrelated renames and package configuration churn unless they are part
  of the current task.
