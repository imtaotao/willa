import {
  ChevronDownIcon,
  GitHubLogoIcon,
  MoonIcon,
  SunIcon,
} from "@radix-ui/react-icons";
import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type MouseEvent,
} from "react";
import { AppShell } from "willa/AppShell";
import { Anchor, type AnchorItem } from "willa/Anchor";
import { Callout } from "willa/Callout";
import { FloatButton } from "willa/FloatButton";
import { IconButton } from "willa/IconButton";
import { PageHeader } from "willa/PageHeader";
import { Typography } from "willa/Typography";
import { SearchInput } from "willa/SearchInput";
import { Skeleton } from "willa/Skeleton";
import "willa/AppShell.css";
import "willa/Anchor.css";
import "willa/Callout.css";
import "willa/FloatButton.css";
import "willa/IconButton.css";
import "willa/PageHeader.css";
import "willa/SearchInput.css";
import "willa/Skeleton.css";
import "willa/Typography.css";

import {
  componentDocRegistry,
  loadComponentDoc,
} from "#example/catalog/registry";
import { DocView } from "#example/catalog/DocView";
import { UsageGuide } from "#example/UsageGuide";
import type { ComponentDoc, ComponentDocEntry } from "#example/catalog/types";

type Theme = "light" | "dark";

const usagePageId = "usage";
const themeStorageKey = "willa-docs-theme";
const sidebarQueryStorageKey = "willa-docs-sidebar-query";
const sidebarCompactQuery = "(max-width: 1040px)";

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
  Alert: "警告提示",
  Anchor: "锚点导航",
  AttachmentList: "附件列表",
  AudioEmbed: "音频嵌入",
  AudioLink: "音频链接",
  Avatar: "头像",
  Badge: "徽标",
  Breadcrumb: "面包屑",
  BorderBeam: "边框流光",
  Button: "按钮",
  Calendar: "日历",
  Callout: "提示块",
  Carousel: "轮播",
  Card: "卡片",
  ChatMessage: "聊天消息",
  ChatThread: "对话流",
  Checkbox: "复选框",
  ColorPicker: "颜色选择器",
  Citation: "引用标记",
  CodeBlock: "代码块",
  CodeTabs: "代码标签页",
  Comment: "评论",
  CommentInput: "评论输入",
  CommentList: "评论列表",
  CopyButton: "复制按钮",
  Composer: "组合输入器",
  Container: "容器",
  ContextPanel: "上下文面板",
  ContextWindowMeter: "上下文容量",
  ConversationList: "会话列表",
  DatePicker: "日期选择器",
  TimePicker: "时间选择器",
  DescriptionList: "描述列表",
  Collapse: "折叠块",
  DiffViewer: "差异对比",
  Dialog: "弹窗",
  Download: "下载",
  Drawer: "抽屉",
  EmptyState: "空状态",
  EnglishCards: "英语卡片",
  FeedbackBar: "回答反馈",
  FileCard: "文件卡片",
  FilePreview: "文件预览",
  FileTree: "文件树",
  FloatButton: "悬浮按钮",
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
  HumanApprovalCard: "人工确认卡片",
  IconButton: "图标按钮",
  Image: "图片",
  ImageGallery: "图片画廊",
  Input: "输入框",
  InputPanel: "输入面板",
  Kbd: "快捷键",
  Lightbox: "图片预览",
  List: "列表",
  LogoWall: "标识墙",
  Masonry: "瀑布流",
  MathExpression: "数学公式",
  Mdx: "MDX 渲染",
  Menu: "菜单",
  MessageActions: "消息操作",
  MessageList: "消息列表",
  ModelSelector: "模型选择器",
  NumberInput: "数字输入",
  MentionInput: "提及输入",
  PageHeader: "页面头部",
  Pagination: "分页",
  Panel: "面板",
  Picker: "选择器",
  Poem: "诗歌",
  Popover: "浮层",
  Progress: "进度条",
  ProfileCard: "人物卡片",
  PromptInput: "提示词输入",
  PromptTemplatePicker: "提示词模板选择器",
  QRCode: "二维码",
  Radio: "单选框",
  Rate: "评分",
  RangeInput: "范围输入",
  ReasoningSteps: "推理步骤",
  Result: "结果",
  SearchInput: "搜索框",
  ScheduleCalendar: "排期日历",
  SectionHeader: "区块标题",
  Select: "选择框",
  SelectionBar: "选择操作条",
  Segmented: "分段控制",
  Separator: "分隔线",
  SidebarLayout: "侧边布局",
  SiteFooter: "站点页脚",
  SiteNav: "站点导航",
  Skeleton: "骨架屏",
  SourceCard: "来源卡片",
  Spinner: "加载指示器",
  SplitPane: "分割面板",
  Stack: "堆叠布局",
  Statistic: "统计数值",
  Steps: "步骤条",
  SuggestionChips: "建议标签",
  Switch: "开关",
  Tag: "标签",
  TagInput: "标签输入",
  Table: "表格",
  Tabs: "标签页",
  TextArea: "文本域",
  ThinkingIndicator: "思考状态",
  Timeline: "时间线",
  Toast: "轻提示",
  ToolCallCard: "工具调用卡片",
  TraceViewer: "链路追踪",
  Toolbar: "工具栏",
  Tooltip: "文字提示",
  Tour: "漫游引导",
  Tree: "树",
  TreeSelect: "树选择",
  Typography: "排版",
  Upload: "上传",
  VideoEmbed: "视频嵌入",
  VideoLink: "视频链接",
  Watermark: "水印",
  WebEmbed: "网页嵌入",
  XPostEmbed: "X 内容嵌入",
};

const getDocChineseName = (doc: ComponentDocEntry) =>
  docChineseNames[doc.name] ?? doc.name;

const toDocAnchorItem = (doc: ComponentDocEntry): AnchorItem => ({
  id: doc.id,
  title: doc.name,
  meta: getDocChineseName(doc),
  href: `#/${doc.id}`,
});

const normalizeSearchText = (value: string) => value.trim().toLowerCase();

const isTheme = (value: string | null): value is Theme =>
  value === "light" || value === "dark";

const getIsCompactSidebar = () => {
  if (typeof window === "undefined") return false;
  return window.matchMedia(sidebarCompactQuery).matches;
};

const getDefaultTheme = (): Theme => (getIsCompactSidebar() ? "dark" : "light");

const getDefaultExpandedDocGroups = (isExpanded: boolean) => {
  return docGroups.reduce(
    (groups, group) => ({ ...groups, [group.id]: isExpanded }),
    {} as Record<ComponentDocEntry["category"], boolean>,
  );
};

const getInitialTheme = () => {
  try {
    const storedTheme = window.localStorage.getItem(themeStorageKey);
    return isTheme(storedTheme) ? storedTheme : getDefaultTheme();
  } catch {
    return getDefaultTheme();
  }
};

const persistTheme = (theme: Theme) => {
  try {
    window.localStorage.setItem(themeStorageKey, theme);
  } catch {
    // Ignore storage failures so theme switching still works in memory.
  }
};

const getInitialSidebarQuery = () => {
  try {
    return window.localStorage.getItem(sidebarQueryStorageKey) ?? "";
  } catch {
    return "";
  }
};

const persistSidebarQuery = (query: string) => {
  try {
    if (query) {
      window.localStorage.setItem(sidebarQueryStorageKey, query);
      return;
    }
    window.localStorage.removeItem(sidebarQueryStorageKey);
  } catch {
    // Ignore storage failures so component search still works in memory.
  }
};

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

const scrollDocumentToTop = () => {
  window.requestAnimationFrame(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
};

export function App() {
  const docsMainRef = useRef<HTMLDivElement>(null);
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const [activeId, setActiveId] = useState(getInitialActiveId);
  const [loadedDoc, setLoadedDoc] = useState<ComponentDoc | null>(null);
  const [isDocLoading, setIsDocLoading] = useState(false);
  const [docError, setDocError] = useState<string | null>(null);
  const [sidebarQuery, setSidebarQuery] = useState(getInitialSidebarQuery);
  const [expandedDocGroups, setExpandedDocGroups] = useState(() =>
    getDefaultExpandedDocGroups(!getIsCompactSidebar()),
  );
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

  const startAnchorItems: Array<AnchorItem> = [
    {
      id: usagePageId,
      title: "安装使用",
      href: `#/${usagePageId}`,
    },
  ];

  const navAnchorClassNames = {
    link: "docs-nav-anchor-link",
    title: "docs-nav-anchor-title",
    meta: "docs-nav-anchor-meta",
  };

  const scrollAfterNavigation = (id: string) => {
    if (id !== usagePageId && getIsCompactSidebar()) {
      window.requestAnimationFrame(() => {
        docsMainRef.current?.scrollIntoView({
          block: "start",
          behavior: "smooth",
        });
      });
      return;
    }

    scrollDocumentToTop();
  };

  const handleDocAnchorClick = (
    item: AnchorItem,
    event: MouseEvent<HTMLAnchorElement>,
  ) => {
    event.preventDefault();
    setActiveId(item.id);
    updateDocHash(item.id);
    scrollAfterNavigation(item.id);
  };

  const toggleDocGroup = (groupId: ComponentDocEntry["category"]) => {
    setExpandedDocGroups((groups) => ({
      ...groups,
      [groupId]: !(groups[groupId] ?? true),
    }));
  };

  const renderDocsActions = (className = "docs-actions") => (
    <nav className={className} aria-label="示例控制">
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
  );

  const sidebar = (
    <div className="docs-sidebar willa-shell">
      <div className="docs-sidebar-top">
        <a className="docs-brand" href={`#/${usagePageId}`}>
          <span className="docs-brand-mark">W</span>
          <span className="docs-brand-copy">
            <span className="docs-brand-title">Willa</span>
            <span className="docs-brand-subtitle">Components</span>
          </span>
        </a>

        {renderDocsActions("docs-actions docs-sidebar-actions")}
      </div>

      <SearchInput
        className="docs-sidebar-search"
        value={sidebarQuery}
        placeholder="搜索组件"
        aria-label="搜索组件"
        width="calc(100% - 12px)"
        onValueChange={setSidebarQuery}
      />

      <nav className="docs-nav" aria-label="组件列表">
        <div className="docs-nav-section">
          <div className="docs-nav-section-title">开始</div>
          <Anchor
            className="docs-nav-anchor"
            classNames={navAnchorClassNames}
            items={startAnchorItems}
            activeId={activeId}
            size="md"
            variant="navigation"
            showMarker={false}
            onItemClick={handleDocAnchorClick}
          />
        </div>

        <div className="docs-nav-components-head">
          <span>组件</span>
          <span>{componentDocRegistry.length}</span>
        </div>

        {visibleDocGroups.map((group) => (
          <section className="docs-nav-group" key={group.id}>
            <button
              className="docs-nav-title-row"
              type="button"
              aria-expanded={
                normalizedSidebarQuery
                  ? true
                  : (expandedDocGroups[group.id] ?? true)
              }
              aria-controls={`docs-nav-group-${group.id}`}
              onClick={() => toggleDocGroup(group.id)}
            >
              <span className="docs-nav-title-copy">
                <span className="docs-nav-title">{group.label}</span>
                <span className="docs-nav-description">
                  {group.description}
                </span>
              </span>
              <span className="docs-nav-title-action">
                <span className="docs-nav-count">{group.docs.length}</span>
                <ChevronDownIcon className="docs-nav-toggle-icon" />
              </span>
            </button>
            <div
              id={`docs-nav-group-${group.id}`}
              hidden={
                !normalizedSidebarQuery &&
                !(expandedDocGroups[group.id] ?? true)
              }
            >
              <Anchor
                className="docs-nav-anchor"
                classNames={navAnchorClassNames}
                items={group.docs.map(toDocAnchorItem)}
                activeId={activeId}
                size="md"
                variant="navigation"
                showMarker={false}
                onItemClick={handleDocAnchorClick}
              />
            </div>
          </section>
        ))}

        {normalizedSidebarQuery && visibleDocCount === 0 ? (
          <Typography.Paragraph className="docs-nav-empty">
            没有匹配的组件
          </Typography.Paragraph>
        ) : null}
      </nav>
    </div>
  );

  useLayoutEffect(() => {
    document.documentElement.dataset.wkTheme =
      theme === "dark" ? "dark" : "light";
    persistTheme(theme);
  }, [theme]);

  useEffect(() => {
    persistSidebarQuery(sidebarQuery);
  }, [sidebarQuery]);

  useEffect(() => {
    const media = window.matchMedia(sidebarCompactQuery);
    const updateExpandedGroups = () => {
      setExpandedDocGroups(getDefaultExpandedDocGroups(!media.matches));
    };

    media.addEventListener("change", updateExpandedGroups);

    return () => {
      media.removeEventListener("change", updateExpandedGroups);
    };
  }, []);

  useEffect(() => {
    document.title =
      activeId === usagePageId
        ? "安装使用 - Willa"
        : `${activeEntry?.name ?? "组件"} - Willa`;
  }, [activeEntry?.name, activeId]);

  useEffect(() => {
    const syncActiveDocFromUrl = () => {
      const hashId = getDocIdFromHash();
      if (hashId === usagePageId) {
        setActiveId(usagePageId);
        scrollAfterNavigation(usagePageId);
        return;
      }

      const hashDoc = componentDocRegistry.find((doc) => doc.id === hashId);
      const nextId = hashDoc?.id ?? usagePageId;
      setActiveId(nextId);
      scrollAfterNavigation(nextId);
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
    <>
      <AppShell className="docs-app" sidebar={sidebar} sidebarWidth="324px">
        <div className="docs-main" ref={docsMainRef}>
          <PageHeader
            className="docs-header"
            eyebrow="Willa Components"
            title="AI、场景与基础组件示例"
            actions={renderDocsActions("docs-actions docs-header-actions")}
          />

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
      </AppShell>
      <FloatButton backToTop ariaLabel="回到顶部" tooltip="回到顶部" />
    </>
  );
}
