import {
  CheckCircledIcon,
  ClockIcon,
  CrossCircledIcon,
  FileTextIcon,
  LightningBoltIcon,
} from "@radix-ui/react-icons";
import { Badge } from "willa/Badge";
import { Button } from "willa/Button";
import { Timeline, type TimelineItem } from "willa/Timeline";
import "willa/Badge.css";
import "willa/Button.css";
import "willa/Timeline.css";

import { defineDoc } from "#example/catalog/defineDoc";

const previewStyle = {
  width: "min(100%, 48rem)",
  marginInline: "auto",
} as const;

const actionStyle = {
  display: "flex",
  flexWrap: "wrap",
  gap: "0.45rem",
} as const;

const baseItems: Array<TimelineItem> = [
  {
    id: "created",
    title: "创建项目",
    time: "09:12",
    description: "项目初始化完成，已生成默认目录和组件配置。",
    tone: "success",
    icon: <CheckCircledIcon />,
    meta: (
      <>
        <Badge size="sm" tone="success">
          已完成
        </Badge>
        <span>由 Willa Bot 执行</span>
      </>
    ),
  },
  {
    id: "review",
    title: "等待内容审核",
    time: "10:04",
    description: "审核通过后会进入发布队列。",
    tone: "warning",
    icon: <ClockIcon />,
    meta: (
      <Badge size="sm" tone="warning">
        待处理
      </Badge>
    ),
  },
  {
    id: "published",
    title: "发布到文档站",
    time: "11:30",
    description: "本次发布包含 6 个组件页面和 2 个示例修复。",
    tone: "info",
    icon: <FileTextIcon />,
  },
];

const operationItems: Array<TimelineItem> = [
  {
    id: "sync",
    title: "同步组件状态",
    time: "刚刚",
    description: "已读取 packages、docs 和 example 的组件注册信息。",
    tone: "success",
    icon: <CheckCircledIcon />,
    action: (
      <Button size="sm" variant="ghost">
        查看详情
      </Button>
    ),
  },
  {
    id: "build",
    title: "构建校验失败",
    time: "2 分钟前",
    description: "Dialog.demo.tsx 存在未处理的异步示例类型错误。",
    tone: "danger",
    icon: <CrossCircledIcon />,
    action: (
      <div style={actionStyle}>
        <Button size="sm" variant="soft">
          重试
        </Button>
        <Button size="sm" variant="ghost">
          查看日志
        </Button>
      </div>
    ),
  },
  {
    id: "deploy",
    title: "等待部署",
    time: "5 分钟前",
    description: "预览环境将在构建通过后自动更新。",
    icon: <LightningBoltIcon />,
  },
];

const compactItems: Array<TimelineItem> = [
  {
    id: "draft",
    title: "保存草稿",
    time: "昨天 18:20",
    description: "更新了组件 API 说明和可访问性备注。",
  },
  {
    id: "comment",
    title: "新增评审意见",
    time: "今天 09:18",
    description: "建议补充移动端折叠状态。",
    tone: "info",
  },
  {
    id: "done",
    title: "完成修复",
    time: "今天 10:02",
    description: "已同步 demo 和 props 文档。",
    tone: "success",
  },
];

export default defineDoc({
  id: "timeline",
  name: "Timeline",
  packageName: "willa/Timeline",
  description: "用于展示事件流、操作记录、发布过程和审核轨迹。",
  imports: [{ name: "Timeline", from: "willa/Timeline" }],
  css: "willa/Timeline.css",
  demo: {
    name: "Timeline",
    component: Timeline,
    props: {
      title: "项目动态",
      description: "按时间顺序展示关键事件和当前状态。",
      items: baseItems,
      style: previewStyle,
    },
  },
  code: `
    import { Timeline, type TimelineItem } from "willa/Timeline";
    import "willa/Timeline.css";

    const items: Array<TimelineItem> = [
      {
        id: "created",
        title: "创建项目",
        time: "09:12",
        description: "项目初始化完成，已生成默认目录和组件配置。",
        tone: "success",
      },
      {
        id: "review",
        title: "等待内容审核",
        time: "10:04",
        description: "审核通过后会进入发布队列。",
        tone: "warning",
      },
      {
        id: "published",
        title: "发布到文档站",
        time: "11:30",
        description: "本次发布包含 6 个组件页面和 2 个示例修复。",
        tone: "info",
      },
    ];

    <Timeline
      title="项目动态"
      description="按时间顺序展示关键事件和当前状态。"
      items={items}
    />;
  `,
  sections: [
    {
      title: "操作记录",
      code: `
        <Timeline
          items={operationItems}
          title="构建过程"
          description="每个节点都可以带图标、操作按钮和状态色。"
        />;
      `,
      content: (
        <div style={previewStyle}>
          <Timeline
            items={operationItems}
            title="构建过程"
            description="每个节点都可以带图标、操作按钮和状态色。"
          />
        </div>
      ),
    },
    {
      title: "紧凑列表",
      code: `
        <Timeline
          items={compactItems}
          variant="compact"
          size="sm"
        />;
      `,
      content: (
        <div style={previewStyle}>
          <Timeline items={compactItems} variant="compact" size="sm" />
        </div>
      ),
    },
  ],
  props: [
    {
      name: "title",
      type: "ReactNode",
      description: "时间线标题。",
    },
    {
      name: "description",
      type: "ReactNode",
      description: "标题下方的说明。",
    },
    {
      name: "size",
      type: '"sm" | "md"',
      defaultValue: '"md"',
      description: "节点和内容密度，默认 md。",
    },
    {
      name: "variant",
      type: '"default" | "compact"',
      defaultValue: '"default"',
      description: "默认卡片式时间线或轻量紧凑时间线。",
    },
    {
      name: "className",
      type: "string",
      description: "传给根节点的类名。",
    },
    {
      name: "TimelineItem.id",
      type: "string | number",
      description: "节点稳定标识，未传时使用数组下标。",
    },
    {
      name: "TimelineItem.title",
      type: "ReactNode",
      required: true,
      description: "节点标题。",
    },
    {
      name: "TimelineItem.time",
      type: "ReactNode",
      description: "节点时间或阶段信息。",
    },
    {
      name: "TimelineItem.description",
      type: "ReactNode",
      description: "节点简短说明。",
    },
    {
      name: "TimelineItem.content",
      type: "ReactNode",
      description: "节点的扩展内容区域。",
    },
    {
      name: "TimelineItem.meta",
      type: "ReactNode",
      description: "标签、来源、执行人等辅助信息。",
    },
    {
      name: "TimelineItem.icon",
      type: "ReactNode",
      description: "自定义节点图标。",
    },
    {
      name: "TimelineItem.action",
      type: "ReactNode",
      description: "节点右侧操作区。",
    },
    {
      name: "TimelineItem.onClick",
      type: "(event: MouseEvent | KeyboardEvent) => void",
      description: "点击或键盘激活节点时触发。",
    },
    {
      name: "TimelineItem.tone",
      type: '"default" | "info" | "success" | "warning" | "danger"',
      defaultValue: '"default"',
      description: "节点状态色。",
    },
    {
      name: "TimelineItem.className",
      type: "string",
      description: "节点根元素 className。",
    },
    {
      name: "items",
      type: "Array<TimelineItem>",
      required: true,
      description: "数据项。",
    },
  ],
});
