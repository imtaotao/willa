# Willa 组件路线

这个文档记录后续可能补充的组件方向。Willa 后续定位为同时面向 AI 产品、博客、
文档站、内容平台、MDX 页面和富交互内容渲染的 React 组件库。AI 产品是新增主线，
不是替代原有博客和文档站目标；组件库需要保留富内容渲染能力，同时补齐产品交互和
AI 场景组件。具体组件创建、CSS、主题变量和示例文档规则仍以
[组件指南](./component.md)、[CSS 指南](./css.md) 和
[代码风格指南](./style.md) 为准。

## AI 产品组件

后续 AI 相关产品建设可以先围绕“输入、对话、过程、结果、反馈”拆组件，避免一开始做过重的一体化组件。
AI 场景组件归 `@willa-ui/ai`；能被博客、文档站、内容平台和非 AI 产品复用的
通用底座仍归 `@willa-ui/content`。

### 基础 AI 交互

- `PromptInput`：AI 输入入口。基础版支持多行输入、快捷提交、提交状态、
  禁用状态、自动高度、辅助信息和操作区；附件入口、模型或模式选择可以通过
  `actions` 组合扩展。
- `ChatMessage`：单条消息。支持 user、assistant、system 等角色，支持 Markdown、代码块、引用、复制、重新生成和反馈操作。
- `ChatThread`：对话列表。现有组件可以继续增强，补充流式输出、错误重试、消息操作区、空状态和加载骨架。
- `TypingIndicator`：生成状态提示。支持 thinking、searching、reading、generating 等状态文案。
- `SuggestionChips`：快捷提示词。用于推荐问题、任务入口和轻量 prompt 建议。

### 结果与过程

- `SourceCitation`：引用来源。用于 AI 搜索、RAG、文档问答，支持编号、标题、URL、片段和来源类型。
- `ToolCall`：工具调用展示。支持 pending、success、error 状态，用于搜索、读取文件、执行命令和查询数据库等过程。
- `ReasoningSteps`：处理步骤展示。用于展示检索、读取、分析、生成等可公开的执行过程，不展示模型内部思维链。
- `GenerationCard`：生成结果卡片。支持复制、插入、重试、采纳和编辑。

### 产品增强

- `PromptCard`：提示词模板卡片。用于 prompt 库、推荐任务和工作流入口。
- `ModelSelect`：模型选择器。显示模型名、能力标签、上下文长度、速度或质量倾向。
- `FeedbackBar`：反馈操作条。支持点赞、点踩、复制、重新生成、举报问题和补充反馈。
- `TokenUsage`：token 或费用展示。面向开发者工具、B 端控制台和 AI 调试场景。
- `ContextPanel`：上下文面板。展示当前 AI 使用的文件、网页、文档和知识库条目。
- `AgentStatus`：Agent 状态。展示排队、运行中、等待用户确认、失败和完成。

## 基础组件支撑情况

当前基础组件已经能支撑一部分 AI 高阶组件：

- `Button`、`IconButton`、`Badge`、`Toast` 可以支撑消息操作、复制、反馈、状态提示。
- `CodeBlock`、`CodeTabs` 可以支撑代码回答、工具调用结果和多语言示例。
- `Card`、`Callout`、`Separator`、`Skeleton` 可以支撑结果卡片、提示、分组和加载状态。
- `Input`、`TextArea`、`Menu`、`Tooltip`、`Popover` 可以支撑提示词输入、模型选择、更多操作和轻量详情浮层。
- `Avatar`、`Tabs`、`Progress`、`Dialog` 可以支撑对话身份、模型或模式切换、生成进度和确认流程。
- `EmptyState`、`Spinner`、`Group` 可以支撑空态、局部加载和操作区布局。
- `FileCard`、`FileTree`、`Image`、`ImageGallery` 可以支撑文件上下文、附件预览、目录选择和多媒体回答。

如果要系统性建设 AI 产品，后续重点可以从基础组件切到 AI 场景组件：

- `PromptInput`：已作为 AI 包的输入底座，组合 `Button` 并保留原生
  textarea 的受控、非受控和输入事件语义。
- `ChatMessage`：基于 `Avatar`、`CodeBlock`、`CodeTabs`、`Button`、`Tooltip` 组合，统一消息内容和操作区。
- `ContextPanel`：基于 `FileTree`、`FileCard`、`Tabs`、`EmptyState` 组合，展示当前上下文文件、引用和资料。
- `ToolCall`：基于 `Card`、`Badge`、`Progress`、`Spinner`、`CodeBlock` 组合，展示工具调用过程和结果。
- `SourceCitation`：基于 `Card`、`Badge`、`Popover`、`UrlLink` 组合，展示来源编号、摘要和跳转。

建议优先顺序：

1. 先做 `PromptInput`、`ChatMessage`、`TypingIndicator`、`SuggestionChips`。
2. 再补 `ContextPanel`、`SourceCitation`、`ToolCall`。
3. 最后做 `ReasoningSteps`、`GenerationCard`、`AgentStatus` 等更强场景组件。
