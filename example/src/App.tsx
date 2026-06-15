import {
  Cross2Icon,
  GitHubLogoIcon,
  MagnifyingGlassIcon,
  MoonIcon,
  SunIcon,
} from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import { Callout } from "willa/Callout";
import { IconButton } from "willa/IconButton";
import { Skeleton } from "willa/Skeleton";
import "willa/Callout.css";
import "willa/IconButton.css";
import "willa/Skeleton.css";

import {
  componentDocRegistry,
  loadComponentDoc,
} from "#example/catalog/registry";
import { DocView } from "#example/catalog/DocView";
import { UsageGuide } from "#example/UsageGuide";
import type { ComponentDoc, ComponentDocEntry } from "#example/catalog/types";

type Theme = "light" | "dark";

const usagePageId = "usage";

const docGroups: Array<{
  id: ComponentDocEntry["category"];
  label: string;
  description: string;
}> = [
  { id: "ai", label: "AI 组件", description: "对话、生成与 Agent 场景" },
  { id: "widgets", label: "场景组件", description: "内容嵌入和富媒体展示" },
  { id: "form", label: "表单组件", description: "输入、选择和数据录入" },
  { id: "layout", label: "布局组件", description: "页面结构和空间组织" },
  { id: "content", label: "基础组件", description: "通用交互和内容表达" },
];

const docChineseNames: Record<string, string> = {
  AppShell: "应用外壳",
  AttachmentList: "附件列表",
  AudioEmbed: "音频嵌入",
  AudioLink: "音频链接",
  Avatar: "头像",
  Badge: "徽标",
  Breadcrumb: "面包屑",
  Button: "按钮",
  Calendar: "日历",
  Callout: "提示块",
  Card: "卡片",
  ChatMessage: "聊天消息",
  ChatThread: "对话流",
  Checkbox: "复选框",
  Citation: "引用标记",
  CodeBlock: "代码块",
  CodeTabs: "代码标签页",
  Comment: "评论",
  CommentInput: "评论输入",
  CommentList: "评论列表",
  Composer: "组合输入器",
  ConfirmDialog: "确认弹窗",
  Container: "容器",
  DatePicker: "日期选择器",
  DescriptionList: "描述列表",
  DetailsBlock: "详情块",
  Dialog: "弹窗",
  Download: "下载",
  EmptyState: "空状态",
  EnglishCards: "英语卡片",
  FileCard: "文件卡片",
  FileTree: "文件树",
  FilterBar: "筛选栏",
  Form: "表单",
  FormActions: "表单操作",
  FormField: "表单字段",
  FormGroup: "表单分组",
  FormMessage: "表单消息",
  GenerationCard: "生成卡片",
  GitHubMention: "GitHub 提及",
  GitHubRepo: "GitHub 仓库",
  Grid: "网格",
  Group: "横向组合",
  IconButton: "图标按钮",
  Image: "图片",
  ImageGallery: "图片画廊",
  Input: "输入框",
  InputPanel: "输入面板",
  Kbd: "快捷键",
  Lightbox: "图片预览",
  List: "列表",
  Masonry: "瀑布流",
  Mdx: "MDX 渲染",
  Menu: "菜单",
  MessageActions: "消息操作",
  MessageList: "消息列表",
  NotFound: "404 页面",
  PageHeader: "页面头部",
  Pagination: "分页",
  Panel: "面板",
  Picker: "选择器",
  Poem: "诗歌",
  Popover: "浮层",
  Progress: "进度条",
  PromptInput: "提示词输入",
  QRCode: "二维码",
  Radio: "单选框",
  RangeInput: "范围输入",
  ReasoningSteps: "推理步骤",
  SearchInput: "搜索框",
  SectionHeader: "区块标题",
  Select: "选择框",
  SelectionBar: "选择操作条",
  Separator: "分隔线",
  SidebarLayout: "侧边布局",
  Skeleton: "骨架屏",
  SourceCard: "来源卡片",
  Spinner: "加载指示器",
  SplitPane: "分割面板",
  Stack: "堆叠布局",
  Steps: "步骤条",
  SuggestionChips: "建议标签",
  Switch: "开关",
  TagInput: "标签输入",
  Table: "表格",
  Tabs: "标签页",
  TextArea: "文本域",
  ThinkingIndicator: "思考状态",
  Timeline: "时间线",
  Toast: "轻提示",
  ToolCallCard: "工具调用卡片",
  Tooltip: "文字提示",
  TreeSelect: "树选择",
  Upload: "上传",
  VideoEmbed: "视频嵌入",
  VideoLink: "视频链接",
  WebEmbed: "网页嵌入",
  XPostEmbed: "X 内容嵌入",
};

const getDocChineseName = (doc: ComponentDocEntry) =>
  docChineseNames[doc.name] ?? doc.name;

const normalizeSearchText = (value: string) => value.trim().toLowerCase();

const getDocIdFromHash = () => {
  const hash = window.location.hash.replace(/^#\/?/, "");
  return hash ? decodeURIComponent(hash) : "";
};

const getInitialActiveId = () => {
  const hashId = getDocIdFromHash();
  if (hashId === usagePageId) return usagePageId;

  const hashDoc = componentDocRegistry.find((doc) => doc.id === hashId);
  return hashDoc?.id ?? usagePageId;
};

const updateDocHash = (id: string) => {
  const nextHash = `#/${encodeURIComponent(id)}`;
  if (window.location.hash === nextHash) return;
  window.history.pushState(null, "", nextHash);
};

export function App() {
  const [theme, setTheme] = useState<Theme>("light");
  const [activeId, setActiveId] = useState(getInitialActiveId);
  const [loadedDoc, setLoadedDoc] = useState<ComponentDoc | null>(null);
  const [isDocLoading, setIsDocLoading] = useState(false);
  const [docError, setDocError] = useState<string | null>(null);
  const [sidebarQuery, setSidebarQuery] = useState("");
  const activeEntry = componentDocRegistry.find((doc) => doc.id === activeId);
  const normalizedSidebarQuery = normalizeSearchText(sidebarQuery);
  const visibleDocGroups = docGroups
    .map((group) => {
      const docs = componentDocRegistry.filter((doc) => {
        if (doc.category !== group.id) return false;
        if (!normalizedSidebarQuery) return true;

        return normalizeSearchText(
          `${doc.name} ${getDocChineseName(doc)} ${doc.id} ${group.label} ${
            group.description
          }`,
        ).includes(normalizedSidebarQuery);
      });

      return { ...group, docs };
    })
    .filter((group) => group.docs.length > 0);
  const visibleDocCount = visibleDocGroups.reduce(
    (count, group) => count + group.docs.length,
    0,
  );

  useEffect(() => {
    document.documentElement.dataset.wkTheme =
      theme === "dark" ? "dark" : "light";
  }, [theme]);

  useEffect(() => {
    const syncActiveDocFromUrl = () => {
      const hashId = getDocIdFromHash();
      if (hashId === usagePageId) {
        setActiveId(usagePageId);
        return;
      }

      const hashDoc = componentDocRegistry.find((doc) => doc.id === hashId);
      setActiveId(hashDoc?.id ?? usagePageId);
    };

    window.addEventListener("hashchange", syncActiveDocFromUrl);
    window.addEventListener("popstate", syncActiveDocFromUrl);

    return () => {
      window.removeEventListener("hashchange", syncActiveDocFromUrl);
      window.removeEventListener("popstate", syncActiveDocFromUrl);
    };
  }, []);

  useEffect(() => {
    if (!activeEntry) {
      setLoadedDoc(null);
      setIsDocLoading(false);
      setDocError(null);
      return;
    }

    let disposed = false;
    setIsDocLoading(true);
    setLoadedDoc(null);
    setDocError(null);

    loadComponentDoc(activeEntry)
      .then((doc) => {
        if (disposed) return;
        setLoadedDoc(doc);
      })
      .catch((error: unknown) => {
        if (disposed) return;
        setDocError(error instanceof Error ? error.message : String(error));
      })
      .finally(() => {
        if (disposed) return;
        setIsDocLoading(false);
      });

    return () => {
      disposed = true;
    };
  }, [activeEntry]);

  return (
    <main className="docs-app">
      <aside className="docs-sidebar">
        <a className="docs-brand" href={`#/${usagePageId}`}>
          <span className="docs-brand-mark">W</span>
          <span className="docs-brand-copy">
            <span className="docs-brand-title">Willa</span>
            <span className="docs-brand-subtitle">Components</span>
          </span>
        </a>

        <label className="docs-sidebar-search">
          <MagnifyingGlassIcon aria-hidden="true" />
          <input
            type="search"
            value={sidebarQuery}
            placeholder="搜索组件"
            aria-label="搜索组件"
            onChange={(event) => setSidebarQuery(event.target.value)}
          />
          {sidebarQuery ? (
            <button
              type="button"
              aria-label="清空搜索"
              onClick={() => setSidebarQuery("")}
            >
              <Cross2Icon aria-hidden="true" />
            </button>
          ) : null}
        </label>

        <nav className="docs-nav" aria-label="组件列表">
          <div className="docs-nav-section">
            <div className="docs-nav-section-title">开始</div>
            <button
              type="button"
              className={`docs-nav-link${
                activeId === usagePageId ? " is-active" : ""
              }`}
              onClick={() => {
                setActiveId(usagePageId);
                updateDocHash(usagePageId);
              }}
            >
              <span>安装使用</span>
            </button>
          </div>

          <div className="docs-nav-components-head">
            <span>组件</span>
            <span>{componentDocRegistry.length}</span>
          </div>

          {visibleDocGroups.map((group) => (
            <section className="docs-nav-group" key={group.id}>
              <div className="docs-nav-title-row">
                <div>
                  <div className="docs-nav-title">{group.label}</div>
                  <p className="docs-nav-description">{group.description}</p>
                </div>
                <span className="docs-nav-count">{group.docs.length}</span>
              </div>
              <div className="docs-nav-list">
                {group.docs.map((doc) => (
                  <button
                    key={doc.id}
                    type="button"
                    className={`docs-nav-link${
                      doc.id === activeId ? " is-active" : ""
                    }`}
                    onClick={() => {
                      setActiveId(doc.id);
                      updateDocHash(doc.id);
                    }}
                  >
                    <span className="docs-nav-link-name">{doc.name}</span>
                    <span className="docs-nav-link-label">
                      {getDocChineseName(doc)}
                    </span>
                  </button>
                ))}
              </div>
            </section>
          ))}

          {normalizedSidebarQuery && visibleDocCount === 0 ? (
            <p className="docs-nav-empty">没有匹配的组件</p>
          ) : null}
        </nav>
      </aside>

      <div className="docs-main">
        <header className="docs-header">
          <div className="docs-header-title">
            <p className="docs-kicker">Willa Components</p>
            <p className="docs-header-subtitle">AI、场景与基础组件示例</p>
          </div>
          <nav className="docs-actions" aria-label="示例控制">
            <IconButton
              href="https://github.com/imtaotao/willa"
              target="_blank"
              variant="outline"
              size="md"
              ariaLabel="打开 GitHub 仓库"
              icon={<GitHubLogoIcon />}
            />
            <IconButton
              variant="outline"
              size="md"
              ariaLabel={theme === "dark" ? "切换到亮色主题" : "切换到暗色主题"}
              icon={theme === "dark" ? <SunIcon /> : <MoonIcon />}
              onClick={() =>
                setTheme((current) => (current === "dark" ? "light" : "dark"))
              }
            />
          </nav>
        </header>

        <div className="docs-content willa-shell">
          {activeId === usagePageId ? (
            <UsageGuide />
          ) : loadedDoc ? (
            <DocView doc={loadedDoc} />
          ) : docError ? (
            <Callout tone="error" title="组件加载失败">
              {docError}
            </Callout>
          ) : (
            <Skeleton
              loading={isDocLoading}
              className="docs-loading"
              lines={[
                { width: "min(220px, 52%)", height: 16 },
                { width: "min(520px, 100%)", height: 16 },
              ]}
              block
              blockHeight={220}
              label="加载组件文档"
            >
              <Callout title="暂无组件">当前没有可展示的组件。</Callout>
            </Skeleton>
          )}
        </div>
      </div>
    </main>
  );
}
