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

## Packages

- `willa`: the public entry package for all exported components.
- `@willa-ui/layout`: layout primitives such as cards, groups, grids, panels,
  page headers, sidebars, split panes, and responsive containers.
- `@willa-ui/content`: product and content components such as buttons, code
  blocks, media, callouts, dialogs, tabs, tables, citations, and progress
  indicators.
- `@willa-ui/form`: form controls and form composition such as inputs,
  selectors, date pickers, uploads, search/filter controls, calendars, and form
  actions.
- `@willa-ui/ai`: AI product components such as prompt inputs, chat messages,
  attachments, tool calls, reasoning steps, generation cards, and agent status
  views.
- `@willa-ui/widgets`: integration-style components for GitHub, X/Twitter, web
  embeds, and other special content.
- `@willa-ui/shared`: shared utilities used by the package internals.

## Design Principles

- Components are designed for production-oriented use cases, not only minimal
  demos.
- APIs should stay small and expressive, while covering common composition,
  state, accessibility, theme, and responsive needs.
- Styling is flat and restrained. Theme values live in the owning package, and
  component CSS should avoid hard-coded colors.
- Example pages and documentation should use Willa's own layout primitives
  whenever that makes the composition clearer.

## Example

The `example` app demonstrates the public `willa` package and individual
component imports.

```bash
$ pnpm run build:packages

$ pnpm dev
```
