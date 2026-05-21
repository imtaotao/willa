<div align="center">
<h2>willa</h2>

[![NPM version](https://img.shields.io/npm/v/willa.svg?style=flat-square)](https://www.npmjs.com/package/willa)

</div>

Willa UI is a React component library extracted from blog content rendering work.
It contains reusable content components, small widget integrations, and shared
utilities for building rich article-like pages.

This repository uses a monorepo structure and builds packages with `auklet`.

**Online docs**: https://imtaotao.github.io/willa/

**Contributor guide**: [CONTRIBUTING.md](./CONTRIBUTING.md)

**CSS guide**: [docs/css-guidelines.md](./docs/css-guidelines.md)

## Packages

- `willa`: the public entry package for all exported components.
- `@willa-ui/content`: content components such as code blocks, media, callouts,
  steps, poems, and cards.
- `@willa-ui/widgets`: integration-style components for GitHub, X/Twitter, web
  embeds, and other special content.
- `@willa-ui/shared`: shared utilities used by the package internals.

## Example

The `example` app demonstrates the public `willa` package and individual
component imports.

```bash
pnpm dev
```
