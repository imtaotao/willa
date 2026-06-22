<div align="center">
<h2>willa</h2>

[![NPM version](https://img.shields.io/npm/v/willa.svg?style=flat-square)](https://www.npmjs.com/package/willa)

</div>

Willa UI is a React component library for AI products, blogs, documentation
sites, content platforms, MDX pages, and rich interactive content rendering.
It provides layout primitives, form controls, product and content components,
AI-oriented interaction patterns, small widget integrations, and shared
utilities for building composable product and content experiences.

**Online docs**: https://imtaotao.github.io/willa/

## Design Principles

- Components are designed for production-oriented use cases, not only minimal
  demos.
- APIs should stay small and expressive, while covering common composition,
  state, accessibility, theme, and responsive needs.
- Styling is flat and restrained. Theme values live in the owning package, and
  component CSS should avoid hard-coded colors.
- Example pages and documentation should use Willa's own layout primitives
  whenever that makes the composition clearer.

## Development

The `example` app demonstrates the public `willa` package and individual
component imports.

```bash
# first time setup
$ pnpm run build:packages
```

```bash
$ pnpm dev
```
