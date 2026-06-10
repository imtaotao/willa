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
通用展示底座归 `@willa-ui/content`，通用表单底座归 `@willa-ui/form`。

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
  generating、working 状态文案、轻量形态、公开任务步骤和折叠状态详情。
- `SuggestionChips`：快捷提示词。已支持建议项、图标、描述、禁用、
  单选/多选选中态和点击回调，用于推荐问题、任务入口和轻量 prompt 建议。

### 结果与过程

- `SourceCard`：来源卡片。已支持标题、摘要、来源、路径、meta、选中态、
  紧凑尺寸和跳转入口；组件归 `@willa-ui/content`，AI 搜索、RAG 和
  文档问答中通过组合使用，也可用于文档站、内容平台和资源列表。
- `Citation`：行内引用。已支持标题、来源、序号、状态、语义色、选中态、
  摘要和跳转入口；组件归 `@willa-ui/content`，AI 回复中通过组合使用，
  也可用于博客、文档和 MDX 页面里的脚注、证据编号和来源标注。
- `ToolCallCard`：工具调用展示。已支持 pending、running、success、error
  状态、参数摘要、执行结果、操作区、meta 信息和折叠明细，用于搜索、
  读取文件、执行命令和查询数据库等过程。
- `AttachmentList`：上下文附件。已支持附件名称、状态、进度、下载链接、
  移除回调、操作区和横向/纵向布局；`Composer` 已组合使用它承载上下文附件。
- `ReasoningSteps`：处理步骤展示。已支持步骤标题、说明、meta、附加内容、
  自动 active/done/pending 推导、单节点状态覆盖、紧凑形态、点击查看详情和
  折叠过程；用于展示检索、读取、分析、生成等可公开的执行过程，不展示模型内部思维链。
- `GenerationCard`：生成结果卡片。已支持 pending、generating、completed、
  failed 状态、生成摘要、指标、结果预览、操作区、meta 信息和折叠结果；
  复制、插入、重试、采纳和编辑通过 `actions` 组合基础按钮承载。

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
- `Input`、`TextArea`、`RangeInput`、`DatePicker`、`Form`、`FormActions`、`FormField`、`FormGroup`、`FormMessage`、`Checkbox`、`Radio`、`Switch`、`Select` 可以支撑提示词输入、配置表单、筛选、日期选择、表单状态提示、布尔开关、单选下拉和提交操作区。
- `Menu`、`Tooltip`、`Popover` 可以支撑更多操作、解释提示和轻量详情浮层。
- `Avatar`、`Tabs`、`Progress`、`Dialog` 可以支撑对话身份、模型或模式切换、生成进度和确认流程。
- `EmptyState`、`Spinner`、`Group` 可以支撑空态、局部加载和操作区布局。
- `FileCard`、`FileTree`、`Upload`、`Download`、`Image`、`ImageGallery` 可以支撑文件上下文、附件上传、附件下载、附件预览、目录选择和多媒体回答。

基础组件后续仍需要补齐评论讨论能力。表单组件已具备轻量底座，表格组件已具备
基础展示和数据配置入口。这些组件不是 AI 专属，应按语义归属到
`@willa-ui/content` 或 `@willa-ui/form`，由 AI 包、文档站、博客、内容平台和
产品后台按场景组合使用。

从真实产品建设角度看，基础组件还需要覆盖页面结构、搜索过滤、详情展示、
时间线、可调整布局、资源选择和批量操作。优先级按能否立刻支撑 AI 产品、
文档产品和后台页面共同使用来判断。

| 优先级 | 能力       | 当前状态                                                                                                                                                      | 待补组件                                    |
| ------ | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| P0     | 表单       | 已有 `Input`、`TextArea`、`RangeInput`、`DatePicker`、`Form`、`FormActions`、`FormField`、`FormMessage`、`Checkbox`、`Radio`、`Switch`、`Select`、`FormGroup` | 按产品反馈补充组合能力                      |
| P0     | 表格       | 已有 `Table`、`DataTable`，支持排序、选择、分页、固定操作列、展开行和行状态                                                                                   | 按产品反馈评估更复杂的数据网格能力          |
| P0     | 评论讨论   | 暂无评论组件                                                                                                                                                  | `Comment`、`CommentList`、`CommentInput`    |
| P0     | 页面结构   | 已有 `Card`、`Group`，缺页面级结构                                                                                                                            | `PageHeader`、`SectionHeader`、`Breadcrumb` |
| P0     | 搜索过滤   | 已有 `Input`、`Menu`，缺组合入口                                                                                                                              | `SearchInput`、`FilterBar`                  |
| P0     | 详情展示   | 已有 `DetailsBlock`，偏内容块                                                                                                                                 | `DescriptionList`                           |
| P0     | 时间过程   | AI 有 `ReasoningSteps`，通用侧暂无                                                                                                                            | `Timeline`                                  |
| P1     | 可调整布局 | 暂无拖拽调整布局                                                                                                                                              | `SplitPane`、`ResizablePanel`               |
| P1     | 资源选择   | 已有 `FileTree`，缺通用选择器                                                                                                                                 | `Picker`、`TreeSelect`                      |
| P1     | 批量操作   | 暂无批量操作条                                                                                                                                                | `BulkActionBar`                             |
| P1     | 标签输入   | 暂无标签输入                                                                                                                                                  | `TagInput`                                  |
| P1     | 日期筛选   | 暂无日期组件                                                                                                                                                  | `DatePicker`、`TimeRangePicker`             |
| P1     | 确认操作   | 已有 `Dialog`，缺确认语义封装                                                                                                                                 | `ConfirmDialog`                             |
| P1     | 通知列表   | 已有 `Toast`，缺通知中心列表                                                                                                                                  | `NotificationList`                          |

### 表单能力

表单组件负责统一产品配置、筛选、提交和设置类交互。当前已有 `Input`、
`TextArea`、`RangeInput`、`DatePicker`、`Form`、`FormActions`、`FormField`、`FormGroup`、
`FormMessage`、`Checkbox`、`Radio`、`Switch` 和 `Select`，覆盖单行输入、
多行输入、范围输入、日期选择、表单容器、提交操作区、字段布局、表单消息、多选、
单选、开关和自绘单选下拉。
表单底座保持轻量，不内置完整表单状态管理和校验框架。

- `Form`：统一表单语义、表单级错误、提交中和整体禁用语义。
- `FormActions`：统一提交、取消和辅助操作的底部布局。
- `FormField`：统一 label、required、description、error 和控件布局。
- `FormMessage`：用于表单内的辅助提示、成功、警告和错误状态说明。
- `DatePicker`：用于单日期选择，支持自绘日历面板、表单提交和日期范围约束。
- `Checkbox`：用于多选、协议确认、布尔配置和列表选择。
- `Radio`：用于互斥选项和轻量配置选择。
- `Switch`：用于开关型配置，适合产品设置和模型能力启停。
- `Select`：用于单选下拉，语义上区别于通用操作菜单 `Menu`。
- `FormGroup`：用于字段分组、纵向间距和移动端表单布局。

### 表格能力

表格组件支撑数据分析结果、工具调用结果、日志、模型列表、文件列表和后台管理场景。
基础表格先保持纯展示和轻交互，避免过早演化成重型表格框架。

- `Table`：基于 items 的基础表格结构，支持 caption、尺寸、吸顶表头、
  横向滚动、自定义单元格、右侧操作区、排序、选择、分页、展开行、行状态和长文本截断。
- `DataTable`：基于同一套 items 协议的数据表格，支持加载态、空态、行点击、
  操作列固定、自定义单元格渲染、对齐和列宽；后续再评估列宽拖拽、复杂筛选和虚拟滚动。

### 评论与讨论能力

评论组件支撑博客评论、文档批注、审核意见、AI 回答反馈说明和人工 review 记录。
它应以单条评论和列表为基础，嵌套线程能力后置，避免一开始做成完整社区系统。

- `Comment`：单条评论，包含头像、作者、时间、内容、状态和操作区。
- `CommentList`：评论列表，包含空态、加载态和基础分隔。
- `CommentInput`：轻量评论输入，适合反馈、批注和回复。
- `CommentThread`：嵌套回复和讨论线程，等单条评论与列表能力稳定后再建设。

组件选型上，AI 产品对话流优先使用 `ChatLayout`、`MessageList` 和
`ChatMessage`。`ChatThread` 仍保留在 `@willa-ui/content`，用于博客、文档站和
MDX 页面里的轻量对话记录展示，不承载 AI 产品里的状态、操作、工具过程和自动滚动。

如果要系统性建设 AI 产品，当前已具备对话、输入、附件、工具过程、
处理步骤和生成结果的基础骨架。后续重点可以从单点组件继续推进到会话管理、
模型配置、反馈闭环和上下文面板：

- `PromptInput`：已作为 AI 包的输入底座，组合 `Button` 并保留原生
  textarea 的受控、非受控和输入事件语义。
- `ChatMessage`：已作为 AI 包的消息底座，组合 `Avatar`，并通过
  `children`、`actions`、`footer` 保留内容渲染和消息操作的扩展空间。
- `ChatLayout`：已作为 AI 包的对话页布局底座，组合 header、sidebar、
  children 主消息区、input 和 footer，支撑聊天、Agent 和智能搜索界面骨架。
- `MessageList`：已作为 AI 包的消息流容器，组合 `ChatMessage`，支持
  空态、加载提示、消息宽度和自动滚动到底部。
- `Composer`：已作为 AI 包的高阶输入组合，组合 `PromptInput`，支持
  模型、工具、附件、输入操作和底部辅助信息。
- `ContextPanel`：基于 `FileTree`、`FileCard`、`Tabs`、`EmptyState` 组合，展示当前上下文文件、引用和资料。
- `AttachmentList`：已作为 AI 包的附件列表，组合下载入口、上传状态、
  进度条和移除回调，并被 `Composer` 用于上下文附件。
- `ToolCallCard`：已作为 AI 包的工具调用卡片，展示工具状态、参数、
  结果和可折叠明细。
- `ReasoningSteps`：已作为 AI 包的公开过程步骤组件，展示可公开的检索、
  读取、分析和生成进度，不展示模型内部思维链。
- `GenerationCard`：已作为 AI 包的生成结果卡片，承载生成状态、结果预览、
  指标、操作区和可折叠结果。

建议优先顺序：

1. P0：`ConversationList`、`FeedbackBar`、`PromptTemplatePicker`、
   `ModelSelector`、`ContextPanel`。
2. P1：`ContextWindowMeter`、`DiffViewer`、`TableRenderer`、
   `ProgressSteps`、`AgentTimeline`。
3. P2：`TraceViewer`、`HumanApprovalCard`、`AgentStatus`、多模态输入和
   企业治理组件。

AI 包当前已经具备对话、消息、输入、附件、工具过程、公开处理步骤和生成结果的骨架。
后续缺口主要集中在会话管理、反馈闭环、模板选择、模型配置、上下文管理和复杂结果展示：

| 优先级 | 能力       | 待补组件               |
| ------ | ---------- | ---------------------- |
| P0     | 会话管理   | `ConversationList`     |
| P0     | 反馈闭环   | `FeedbackBar`          |
| P0     | 模板选择   | `PromptTemplatePicker` |
| P0     | 模型配置   | `ModelSelector`        |
| P0     | 上下文管理 | `ContextPanel`         |
| P1     | 上下文容量 | `ContextWindowMeter`   |
| P1     | 差异对比   | `DiffViewer`           |
| P1     | 表格结果   | `TableRenderer`        |
| P1     | 多阶段进度 | `ProgressSteps`        |
| P1     | Agent 轨迹 | `AgentTimeline`        |
