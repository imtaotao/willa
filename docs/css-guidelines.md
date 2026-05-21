# Willa CSS 指导文档

这份文档规定 Willa 各包之间的 CSS 职责、主题变量归属和组件样式写法。新增组件、迁移组件或调整主题时，先按这里的规则判断变量应该放在哪里。

## 总原则

- 组件 CSS 负责结构、布局、交互状态和变量引用。
- 主题 CSS 负责颜色、背景、边框色、阴影、强调色等视觉 token。
- 变量只在组件所属包的主题里定义，避免跨包复制。
- 聚合包只组合 CSS，不重新定义具体组件变量。
- 单组件 CSS 要能独立提供组件结构样式，但不内置主题色。

## 包职责

`@willa-ui/content` 负责基础内容组件和基础主题 token，例如：

- `CodeBlock`
- `Image`
- `ImageGallery`
- `Lightbox`
- `AudioEmbed`
- `VideoEmbed`
- `Callout`
- `ChatThread`
- `Steps`
- `Poem`
- `SummaryCards`

`@willa-ui/widgets` 负责场景组件和集成组件，例如：

- `Mdx`
- `GitHubRepo`
- `GitHubMention`
- `XPostEmbed`
- `WebEmbed`
- `EnglishCards`

`willa` 是聚合包，只通过 `auklet.config.ts` 组合 content 和 widgets 的 CSS，不维护自己的主题变量。

## 主题变量归属

变量放在组件所属包的主题文件里：

- content 组件变量放在 `packages/willa-content/src/themes/light.css` 和 `packages/willa-content/src/themes/dark.css`。
- widgets 组件变量放在 `packages/willa-widgets/src/themes/light.css` 和 `packages/willa-widgets/src/themes/dark.css`。
- `Mdx` 的 prose、heading、inline-code 等变量属于 widgets。
- `Lightbox` 即使通过 portal 渲染到 `document.body`，变量仍属于 content。

不要把 content 变量复制到 widgets 主题里。widgets 已经通过 `styles.dependencies` 依赖 content 的 CSS 和主题，应该复用 content 的变量来源。

新增或迁移组件时，先按组件源码所在包判断变量归属，不按“哪个包会使用这个组件”判断。比如 `Mdx` 会渲染 `Image`、`Callout`、`CodeBlock`，但这些变量仍属于 content；`Mdx` 自己的 prose 和 heading 变量才属于 widgets。

## 组件 CSS

组件目录下的 `index.css` 可以写：

- display、position、grid、flex、gap、padding、margin。
- width、height、border-radius、z-index、overflow。
- animation、transition、transform。
- `transparent`、`currentColor`、`inherit`。
- 组件内部局部变量，例如根据 props 注入的 `--willa-skeleton-line-width`。

组件目录下的 `index.css` 不应该写：

- 主题色值，例如 `#fff`、`#111827`、`rgba(...)`。
- 主题阴影值。
- light/dark 主题选择器。
- 其他包组件的变量定义。

组件 CSS 应该引用变量：

```css
.willa-lightbox {
  background: var(--willa-lightbox-bg);
}
```

主题 CSS 应该定义变量：

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

## Portal 组件

如果组件会通过 portal 渲染到 `.willa-shell` 外面，例如 `Lightbox`，主题变量不能只挂在 `.willa-shell` 上。

做法是让组件根节点也进入主题变量作用域：

```css
.willa-shell,
.willa-lightbox {
  --willa-lightbox-bg: rgba(248, 250, 252, 0.68);
}
```

暗色主题同理：

```css
:root[data-wk-theme="dark"] .willa-shell,
:root[data-wk-theme="dark"] .willa-lightbox {
  --willa-lightbox-bg: rgba(17, 19, 23, 0.68);
}
```

不要为了 portal 组件把变量复制到其他包的主题文件里。

Portal 组件还要注意不要让子元素背景覆盖整层 backdrop。比如图片预览组件可以让 overlay 使用 `--willa-lightbox-bg`，但图片本身不应该用一个铺满视口的背景色挡住半透明效果。

## 跨包 CSS 依赖

跨包 CSS 依赖通过 `auklet.config.ts` 表达。

`@willa-ui/widgets` 依赖 content：

```ts
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

这表示 widgets 可以使用 content 提供的基础 token 和 content 组件样式。widgets 主题只补充 widgets 自己的变量。

如果 widgets 的组件直接 import 了 content 组件，也应该在 CSS 依赖里声明 content，而不是复制 content 的样式或主题变量。这样单独构建 widgets、构建聚合包 willa、以及按单组件入口使用时，CSS 来源都是一致的。

`willa` 聚合包同时依赖 content 和 widgets。它负责把两个包的 CSS 组合为公开入口，例如：

- `willa/style.css`
- `willa/themes/light.css`
- `willa/themes/dark.css`
- `willa/ComponentName.css`

## 命名规则

变量名应该跟组件语义对应：

- `Lightbox` 使用 `--willa-lightbox-*`。
- `WebEmbed` 使用 `--willa-web-embed-*`。
- `EnglishCards` 使用 `--willa-english-*`。
- `GitHubRepo` 和 `GitHubMention` 可以共享 `--willa-github-*`。

不要让一个组件复用另一个不相关组件的变量名。例如 `UrlLink` 不应该使用 `--willa-github-pill-bg`。

通用 token 可以使用短名称：

- `--willa-text`
- `--willa-text-strong`
- `--willa-line`
- `--willa-focus-ring`
- `--willa-panel-bg`

通用 token 由 content 主题提供，widgets 可以引用但不要重复定义。

## CSS 引入约定

常规使用聚合包时：

```tsx
import "willa/external.css";
import "willa/themes/light.css";
import "willa/themes/dark.css";
```

单组件使用时：

```tsx
import { Lightbox } from "willa/Lightbox";
import "willa/Lightbox.css";
```

不要要求使用者为了单组件结构样式引入总的 `style.css`。组件结构样式应随单组件 CSS 提供，主题变量由主题 CSS 提供。

## 新增组件流程

新增 content 组件时：

1. 在 `packages/willa-content/src/components/ComponentName/index.css` 写组件结构样式。
2. 在 `packages/willa-content/src/themes/light.css` 和 `dark.css` 增加该组件需要的主题变量。
3. 确认 `packages/willa-content/src/index.ts` 和 `packages/willa/src/ComponentName/index.tsx` 导出组件。
4. 确认单组件 CSS 能通过 `willa/ComponentName.css` 使用。

新增 widgets 组件时：

1. 在 `packages/willa-widgets/src/components/ComponentName/index.css` 写组件结构样式。
2. 在 `packages/willa-widgets/src/themes/light.css` 和 `dark.css` 增加该组件自己的主题变量。
3. 如果它组合 content 组件，复用 content 主题变量，不复制。
4. 确认 `packages/willa-widgets/src/index.ts` 和 `packages/willa/src/ComponentName/index.tsx` 导出组件。

迁移组件时：

- 组件移到哪个包，组件变量就跟着移到哪个包的主题里。
- 旧包主题里的残留变量要删掉。
- 聚合包 `willa` 不新增重复变量，只调整导出或依赖配置。

## 局部变量

有些 CSS 变量不是主题变量，而是组件内部局部变量。这类变量可以定义在组件 CSS 或通过 React inline style 注入。

例如 `Skeleton`：

```css
.willa-prose-skeleton-line {
  width: var(--willa-skeleton-line-width, 100%);
  height: var(--willa-skeleton-line-height, 0.9rem);
}
```

这里 `--willa-skeleton-line-width` 和 `--willa-skeleton-line-height` 来自 props，不需要放到主题文件里。

判断标准：

- 影响主题视觉的变量放主题文件。
- 由组件 props、布局状态或组件内部计算产生的变量留在组件内部。
- 组件内部变量必须有合理 fallback，避免未注入时样式失效。

## 常见问题

如果某个 widgets 组件需要 content 的基础 token，应该怎么办？

直接引用 content 主题提供的变量，例如 `--willa-text-strong`、`--willa-line`、`--willa-focus-ring`。不要在 widgets 主题里重复定义这些基础 token。

如果 widgets 组件组合了 content 组件，是否需要把 content 变量复制到 widgets？

不需要。通过 `auklet.config.ts` 的 `styles.dependencies` 声明依赖，让构建产物组合 content CSS。

如果组件 CSS 里需要一个特殊颜色，能不能直接写 `rgba(...)`？

如果它是视觉主题的一部分，不能直接写在组件 CSS 里，应提取成主题变量。如果它只是动画遮罩、透明结构或和主题无关的技术值，才可以保留在组件 CSS 中。

如果变量只在一个组件里用，也要放主题吗？

只要它表达主题视觉，就放主题。变量是否复用不是判断标准，是否属于主题视觉才是判断标准。

## 检查清单

新增或修改 CSS 前确认：

- 变量定义在组件所属包的主题里。
- 组件 CSS 没有硬编码主题色。
- widgets 没有复制 content 的变量。
- portal 组件的变量作用域覆盖了实际 DOM 位置。
- `willa` 聚合包通过 `styles.dependencies` 组合 CSS，而不是手写重复变量。
- `pnpm typecheck`、`pnpm build:packages`、`pnpm build` 能通过。
