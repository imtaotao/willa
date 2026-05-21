# Willa 贡献者指南

这份文档面向后续维护者和协作 AI，用来沉淀 Willa 的包结构、代码风格、组件组织、样式与主题约定。改动前请先读完本文，再对照现有组件实现。

## 项目定位

Willa 是从博客内容渲染体系中拆出的 React 组件库。组件要能独立用于文章、文档、MDX 页面和富内容展示场景，同时保持单组件引入、单组件 CSS 引入和主题 CSS 可组合。

仓库使用 pnpm workspace 的 monorepo 结构，构建工具是 `auklet`。

## 包结构

- `packages/willa`：公开主包，包名是 `willa`。它负责导出所有对外组件，不导出 `@willa-ui/shared`。
- `packages/willa-content`：基础内容组件包，包名是 `@willa-ui/content`。放通用内容组件，例如 `CodeBlock`、`Callout`、`Image`、`AudioEmbed`、`VideoEmbed`、`Steps`。
- `packages/willa-widgets`：场景组件包，包名是 `@willa-ui/widgets`。放带外部平台、特殊业务或组合渲染语义的组件，例如 `Mdx`、`GitHubRepo`、`XPostEmbed`、`WebEmbed`、`EnglishCards`。
- `packages/willa-shared`：公共工具包，包名是 `@willa-ui/shared`。放跨包复用的类型、文本处理、节点处理、剪贴板等工具。
- `example`：组件演示和文档站，默认端口是 `2333`。

依赖方向应保持单向：

- `shared` 不依赖 `content` / `widgets`。
- `content` 可以依赖 `shared`。
- `widgets` 可以依赖 `shared` 和 `content`，因为 MDX 等场景组件会组合基础内容组件。
- `willa` 可以依赖并导出 `content` 和 `widgets`。

不要让 `content` 反向依赖 `widgets`，也不要把 widgets 专属变量、样式或组件放回 content。

## 路径和 tsconfig

子包不维护自己的 `tsconfig.json`，统一使用根目录 `tsconfig.json`。

内部源码优先使用别名，避免深层相对路径：

- `#content/*` 指向 `packages/willa-content/src/*`
- `#widgets/*` 指向 `packages/willa-widgets/src/*`
- `#shared/*` 指向 `packages/willa-shared/src/*`
- `#example/*` 指向 `example/src/*`
- `@willa-ui/*` 指向子包源码根目录

如果新增路径规则，优先保持通配符形式，避免为每个文件手写路径。

## 构建约定

每个发布包使用 `auklet.config.ts`。

- `modules: true` 用于生成单组件入口，支持 `willa/CodeBlock`、`@willa-ui/content/components/CodeBlock` 这类引入。
- `styles.themes` 声明当前包自己的主题 CSS。
- `styles.dependencies` 声明样式依赖包，例如 widgets 依赖 content 的组件 CSS 和主题 CSS，willa 依赖 content 与 widgets。
- 外部 CSS 依赖放在 `styles.dependencies`，例如 content 里的 `katex`。

组件新增后要确认三个层面都能产出：

- 包根入口，例如 `@willa-ui/content`。
- 单组件入口，例如 `willa/CodeBlock`。
- 单组件 CSS，例如 `willa/CodeBlock.css`。

## 代码风格

导出的函数必须使用 function 声明：

```tsx
export function CodeBlock(props: CodeBlockProps) {
  return <pre />;
}
```

非导出函数默认使用箭头函数：

```tsx
const resolveLabel = (value: string | undefined) => value?.trim() ?? "";
```

函数尽可能不要手动声明返回值类型，优先交给 TypeScript 推断；只有省略后导致类型错误、公开 API 不清晰，或 TypeScript 推断不稳定时才补充。

组件应直接导出组件本身，不要用 `createXxx` 作为组件出口。`createXxx` 只适合真正的工厂函数或工具函数。

类型导出尽量靠近组件入口。单组件入口需要同时导出组件和组件类型：

```tsx
export { AudioLink } from "@willa-ui/content/components/AudioLink";
export type { AudioLinkProps } from "@willa-ui/content/components/AudioLink";
```

公共类型可以从 `@willa-ui/shared` 维护，但组件入口仍应提供方便的类型出口。

## 组件编写

组件目录使用组件名：

```text
src/components/ComponentName/
  index.tsx
  index.css
```

新增基础组件时通常需要修改：

- `packages/willa-content/src/components/ComponentName/index.tsx`
- `packages/willa-content/src/components/ComponentName/index.css`
- `packages/willa-content/src/index.ts`
- `packages/willa/src/ComponentName/index.tsx`
- `packages/willa/auklet.config.ts` 如组件扫描配置发生变化
- `example/src/docs/ComponentName.demo.tsx`
- `example/src/catalog/registry.ts`

新增场景组件时把 `willa-content` 替换为 `willa-widgets`，并确认 `willa` 主包同步导出。

组件名保持通用语义，不要带历史来源前缀。除非组件本身就是 MDX 相关能力，否则不要以 `Mdx` 开头。`CodeBlock` 不要改成 `Pre` 这类 HTML 标签名包装。

如果组件需要标记特殊行为，可以给组件对象挂内部标记，但必须写注释解释用途。例如 Lightbox 识别 `Image`、`ImageGallery` 子元素时，标记是内部协议，不是公开 API。

## 样式组织

详细规则见 [Willa CSS 指导文档](./docs/css-guidelines.md)。`CONTRIBUTING.md` 只保留方向性约定，CSS 细则以该文档为准。

- 每个组件都要有独立 CSS 文件，组件样式放在组件目录的 `index.css`。
- 组件 CSS 只写结构、布局、状态和变量引用；主题色、阴影、背景色、边框色等放到主题变量里。
- 主题变量放在组件所属包的 `src/themes/light.css` 和 `src/themes/dark.css`。
- widgets 依赖 content 的 CSS 和主题时，通过 `auklet.config.ts` 的 `styles.dependencies` 表达，不复制 content 变量。
- 单组件 CSS 要提供组件结构样式，主题 CSS 提供变量。

## Example 文档

演示文档以中文为主，放在 `example/src/docs`，每个组件一个 `ComponentName.demo.tsx`。

example 在开发模式下通过 tsconfig alias 直接依赖各子包源码。修改组件代码或组件 CSS 后，Vite 会在 example 中热更新，不需要刷新页面，也不需要先打包 packages。

文档基础能力放在 `example/src/catalog`：

- `defineDoc.tsx`：把 demo 描述转换成预览和代码。
- `DocView.tsx`：文档展示视图。
- `registry.ts`：组件文档注册列表。
- `types.ts`：文档类型。

demo 优先只写一份数据，由 `defineDoc` 同时生成预览和 React 示例代码。复杂场景可以显式传 `code`，并用 `aidly` 的 `unindent` 保持缩进可读。

`registry.ts` 只维护轻量文档入口，不要同步 import `*.demo.tsx`。每个入口通过 `load` 动态加载对应 demo，让组件代码和组件 CSS 只在选中该组件时进入页面。组件列表使用 `aidly` 的 `sortStrings` 按组件名排序。

每个 demo 应包含：

- `id`：用于 URL hash，刷新后能固定到当前组件。
- `name`：组件名。
- `packageName`：展示入口，例如 `willa/CodeBlock`。
- `description`：中文说明。
- `imports` 和 `css`：用于生成代码块。
- `demo`：真实渲染数据。
- `props`：属性说明，必填标记放在属性名后。

组件文档按类别展示：

- content：内置组件 / 基础内容组件。
- widgets：场景组件。

## 提交前检查

常用命令：

```bash
pnpm run format
pnpm run typecheck
pnpm --stream --filter @willa-ui/content --filter @willa-ui/widgets --filter willa run build
pnpm run build
```

如果只改 example，可以跑：

```bash
pnpm dev
pnpm run build
```

提交时会通过 lint-staged 格式化已暂存文件。新增依赖时先说明用途，由维护者执行安装。

## 维护原则

- 保持包职责清晰，组件迁移后要把旧包里残留的导出、样式和主题变量清理掉。
- 保持单组件引入可用，新增组件不能只在包根入口可用。
- 保持样式可组合，组件 CSS 不直接承载主题。
- 保持 example 覆盖所有公开组件，尤其是 widgets 和 Mdx 这类组合场景。
- 避免无关重命名和 package 配置 churn，除非它们是当前需求的一部分。
