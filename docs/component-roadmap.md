# 基础组件规划

本文记录 Willa 后续可能补充的基础组件方向。它是讨论草案，不代表已经确定的
公开 API。正式实现组件时，仍以
[组件指南](./component.md)、[架构文档](./architecture.md) 和
[CSS 指南](./css.md) 为准。

## 组件定位

Willa 的基础组件应服务于博客、社区内容、文章页、文档页、MDX 页面和富内容
渲染，不应扩展成完整的通用应用 UI 套件。

优先选择这些类型的组件：

- 内容表达中高频出现的元素。
- 能被文章、文档和 MDX 场景自然复用的组件。
- 能统一主题、间距、状态和交互语义的小型基础组件。
- 能与现有 `CodeBlock`、`Callout`、`Image`、`Mdx` 等组件组合的组件。

暂时避免这些方向：

- 完整表单系统，例如 `Input`、`Select`、`Textarea`、`Form`。
- 复杂应用交互，例如 `DropdownMenu`、通用 `Dialog`、业务导航菜单。
- 需要大量业务约定的页面级组件。

## 第一优先级

这些组件最符合当前 Willa 的内容组件定位，适合作为第一批讨论和实现对象。

### Button

用于文章和文档里的 CTA、下载、跳转、复制、继续阅读等动作。

候选能力：

- `variant`: `solid`、`soft`、`outline`、`ghost`、`link`。
- `size`: 常规尺寸和紧凑尺寸。
- 支持图标前后缀。
- 支持链接语义，例如 `href`，或通过组合能力支持自定义元素。
- 明确 disabled、focus、loading 等状态是否进入首版范围。

建议归属：`@willa-ui/content`。

### Badge

用于标签、分类、状态、版本号、推荐、实验性标记等轻量信息。

候选能力：

- `variant`: `solid`、`soft`、`outline`。
- `tone`: 默认、强调、成功、警告、危险等语义色。
- 支持和链接、卡片、列表组合使用。

建议归属：`@willa-ui/content`。

### Card

用于普通内容卡片、资源卡片、文章摘要、链接入口和组合式内容块。

候选能力：

- 标题、描述、媒体或图标、页脚动作区。
- 支持可点击整卡，但保持清晰的链接语义。
- 与 `Button`、`Badge`、`Image` 组合。

注意：现有 `SummaryCards` 更偏特定展示组件，`Card` 应保持更基础。

建议归属：`@willa-ui/content`。

### Tabs

用于文档页和 MDX 页面中的多视图内容切换，例如不同包管理器、框架、语言或
代码示例。

候选能力：

- 受控和非受控状态是否都支持。
- 键盘导航和可访问性。
- 与 `CodeBlock` 组合展示多语言或多安装方式示例。

建议归属：优先考虑 `@willa-ui/content`。如果后续演变成强 MDX 场景组件，
再评估是否需要在 `@willa-ui/widgets` 中提供更高阶组合。

## 第二优先级

这些组件也常见，但可以在第一批基础组件稳定后再推进。

### Separator

用于内容区块分隔。组件很轻，价值主要在统一主题变量、间距和语义。

建议归属：`@willa-ui/content`。

### Kbd

用于展示快捷键和键盘输入，例如 `Ctrl C`、`Command K`。

建议归属：`@willa-ui/content`。

### IconButton

用于只有图标的紧凑动作按钮，例如复制、关闭、展开、跳转。

注意：需要明确 `aria-label`、尺寸、focus 和 disabled 状态。可以先让
`Button` 支持图标，再决定是否拆出独立组件。

建议归属：`@willa-ui/content`。

### Avatar

用于作者、评论、社区内容和引用来源展示。

候选能力：

- 图片、fallback 文本、尺寸。
- 后续再考虑 `AvatarGroup`。

建议归属：`@willa-ui/content`。

### CodeTabs

用于多段代码示例切换，例如 npm/pnpm/yarn 或 React/Vue/Svelte。

注意：如果 `Tabs + CodeBlock` 足够表达，先不要新增专门组件。只有当文档场景
重复度很高时，再考虑作为高阶组合。

建议归属：待定。若强依赖 MDX 或示例生成场景，可考虑 `@willa-ui/widgets`。

## 暂缓组件

这些组件目前不建议作为近期基础组件推进。

### Dialog

当前已有 `Lightbox` 处理图片预览。通用弹窗更偏应用 UI，暂缓。

### DropdownMenu

交互和可访问性成本较高，内容页高频需求不明显，暂缓。

### Form、Input、Textarea、Select

会明显把 Willa 带向应用 UI 组件库，暂缓。

### Table

文档页确实常见，但当前更适合先完善 MDX prose table 样式，而不是新增复杂
React 表格组件。除非未来需要交互式数据表，再重新评估。

### Pagination

博客列表页可能有用，但 Willa 当前重点仍是文章正文和富内容渲染，暂缓。

## 初步推进顺序

建议第一批先讨论并实现：

1. `Button`
2. `Badge`
3. `Card`
4. `Tabs`

这四个组件覆盖动作、标签、内容容器和多视图内容，是后续构建更复杂内容组件的
基础。
