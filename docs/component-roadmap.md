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

AI 组件建设优先补“能快速搭出 AI 产品骨架”的组合层，不直接照搬平台级大而全清单。
对话、输入、状态反馈、工具过程和来源引用是当前主线；工作流编排、多模态编辑和企业治理组件属于后续增强。

### 基础 AI 交互

- `PromptInput`：AI 输入入口。基础版支持多行输入、快捷提交、提交状态、
  禁用状态、自动高度、辅助信息和操作区；附件入口、模型或模式选择可以通过
  `actions` 组合扩展。
- `ChatMessage`：单条消息。已支持 user、assistant、system、developer、tool
  角色、默认对齐、头像、状态、操作区和 footer；Markdown、代码块、引用、
  复制、重新生成和反馈可以通过 `children` 与 `actions` 组合扩展。
- `ChatLayout`：AI 对话页骨架。支持 header、消息区、输入区和可选侧边栏，
  用于快速搭建聊天、Agent 和智能搜索界面。
- `MessageList`：消息列表容器。承载 `ChatMessage`，支持自动滚动到底部、
  空态、加载历史，后续可增强虚拟滚动。
- `Composer`：高阶输入组合。组合 `PromptInput`、附件、工具入口、模型入口和发送按钮，
  避免把 `PromptInput` 做成过重组件。
- `MessageActions`：消息操作区。已支持统一动作项、icon、文字标签、状态、
  语义色和统一点击回调，通过 `ChatMessage.actions` 组合使用。
- `ThinkingIndicator`：生成和任务状态提示。已支持 thinking、searching、reading、
  generating、working 状态文案、轻量形态和公开任务步骤。
- `SuggestionChips`：快捷提示词。已支持建议项、图标、描述、禁用、
  单选/多选选中态和点击回调，用于推荐问题、任务入口和轻量 prompt 建议。

### 结果与过程

- `SourceCard`：来源卡片。已支持标题、摘要、来源、路径、meta、选中态、
  紧凑尺寸和跳转入口，用于 AI 搜索、RAG 和文档问答。
- `Citation`：行内引用。用于 AI 回复中的脚注、证据编号和来源悬浮说明。
- `ToolCallCard`：工具调用展示。支持 pending、success、error 状态，
  用于搜索、读取文件、执行命令和查询数据库等过程。
- `AttachmentList`：上下文附件。短期可以先用 `Upload`、`Download`、
  `FileCard`、`Image`、`UrlLink` 覆盖上传、下载和预览；当 Composer 附件区、
  上下文面板和消息附件出现重复组合时，再抽统一的附件列表组件。
- `ReasoningSteps`：处理步骤展示。用于展示检索、读取、分析、生成等可公开的执行过程，不展示模型内部思维链。
- `GenerationCard`：生成结果卡片。支持复制、插入、重试、采纳和编辑。

### 产品增强

- `PromptCard`：提示词模板卡片。用于 prompt 库、推荐任务和工作流入口。
- `PromptTemplatePicker`：Prompt 模板选择器。支持最近使用、收藏模板和分类筛选。
- `ModelSelector`：模型选择器。显示模型名、能力标签、上下文长度、速度或质量倾向。
- `FeedbackBar`：反馈操作条。支持点赞、点踩、复制、重新生成、举报问题和补充反馈。
- `TokenUsage`：token 或费用展示。面向开发者工具、B 端控制台和 AI 调试场景。
- `ContextWindowMeter`：上下文窗口占用展示。用于提示当前 token、文件或上下文容量。
- `ContextPanel`：上下文面板。展示当前 AI 使用的文件、网页、文档和知识库条目。
- `ConversationList`：会话列表。支持分组、搜索、重命名、删除和归档。
- `DiffViewer`：差异查看。用于代码、文档和结构化内容修改前后对比。
- `TableRenderer`：表格渲染。用于 AI 生成的 Markdown 表格、复制和导出 CSV。
- `AgentStatus`：Agent 状态。展示排队、运行中、等待用户确认、失败和完成。

### 暂缓建设

以下组件更偏平台级能力，当前不作为第一阶段重点：

- 工作流编排：`WorkflowCanvas`、`NodeCard`、`EdgeConnector`。这类组件容易演化成完整工作流编辑器，需等 Agent 产品形态稳定后再定接口。
- 多模态编辑：`AudioRecorder`、`VoiceInput`、`VideoPreview`、`BoundingBoxOverlay`。可规划，但优先级低于文本对话、上下文附件和工具过程。
- 企业治理：`PermissionMatrix`、`AuditLogViewer`、`QuotaUsage`、`CostEstimator`。更偏 B 端后台和管理台，不是通用 AI UI 的第一阶段核心。
- 独立 `MarkdownRenderer`：现阶段先评估复用 `Mdx`、`CodeBlock`、`CodeTabs` 和现有内容组件，避免重复建设渲染管线。

## 基础组件支撑情况

当前基础组件已经能支撑一部分 AI 高阶组件：

- `Button`、`IconButton`、`Badge`、`Toast` 可以支撑消息操作、复制、反馈、状态提示。
- `CodeBlock`、`CodeTabs` 可以支撑代码回答、工具调用结果和多语言示例。
- `Card`、`Callout`、`Separator`、`Skeleton` 可以支撑结果卡片、提示、分组和加载状态。
- `Input`、`TextArea`、`Menu`、`Tooltip`、`Popover` 可以支撑提示词输入、模型选择、更多操作和轻量详情浮层。
- `Avatar`、`Tabs`、`Progress`、`Dialog` 可以支撑对话身份、模型或模式切换、生成进度和确认流程。
- `EmptyState`、`Spinner`、`Group` 可以支撑空态、局部加载和操作区布局。
- `FileCard`、`FileTree`、`Upload`、`Download`、`Image`、`ImageGallery` 可以支撑文件上下文、附件上传、附件下载、附件预览、目录选择和多媒体回答。

组件选型上，AI 产品对话流优先使用 `ChatLayout`、`MessageList` 和
`ChatMessage`。`ChatThread` 仍保留在 `@willa-ui/content`，用于博客、文档站和
MDX 页面里的轻量对话记录展示，不承载 AI 产品里的状态、操作、工具过程和自动滚动。

如果要系统性建设 AI 产品，后续重点可以从基础组件切到 AI 场景组件：

- `PromptInput`：已作为 AI 包的输入底座，组合 `Button` 并保留原生
  textarea 的受控、非受控和输入事件语义。
- `ChatMessage`：已作为 AI 包的消息底座，组合 `Avatar`，并通过
  `children`、`actions`、`footer` 保留内容渲染和消息操作的扩展空间。
- `ChatLayout`：已作为 AI 包的对话页布局底座，组合 header、sidebar、
  messages、input 和 footer，支撑聊天、Agent 和智能搜索界面骨架。
- `MessageList`：已作为 AI 包的消息流容器，组合 `ChatMessage`，支持
  空态、加载提示、消息宽度和自动滚动到底部。
- `Composer`：已作为 AI 包的高阶输入组合，组合 `PromptInput`，支持
  模型、工具、附件、输入操作和底部辅助信息。
- `ContextPanel`：基于 `FileTree`、`FileCard`、`Tabs`、`EmptyState` 组合，展示当前上下文文件、引用和资料。
- `ToolCall`：基于 `Card`、`Badge`、`Progress`、`Spinner`、`CodeBlock` 组合，展示工具调用过程和结果。
- `SourceCitation`：基于 `Card`、`Badge`、`Popover`、`UrlLink` 组合，展示来源编号、摘要和跳转。

建议优先顺序：

1. P0：`ToolCallCard`、`AttachmentList`。
2. P1：`ConversationList`、`ProgressSteps`、`PromptTemplatePicker`、
   `ModelSelector`、`ContextWindowMeter`、`FeedbackBar`、`DiffViewer`、
   `TableRenderer`、`ContextPanel`。
3. P2：`AgentTimeline`、`TraceViewer`、`HumanApprovalCard`、`GenerationCard`、
   `AgentStatus`、多模态输入和企业治理组件。
