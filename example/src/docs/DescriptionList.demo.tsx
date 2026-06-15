import { Badge } from "willa/Badge";
import { Button } from "willa/Button";
import {
  DescriptionList,
  type DescriptionListItem,
} from "willa/DescriptionList";
import "willa/Badge.css";
import "willa/Button.css";
import "willa/DescriptionList.css";

import { defineDoc } from "#example/catalog/defineDoc";

const basicItems: Array<DescriptionListItem> = [
  {
    label: "项目名称",
    value: "Willa AI Console",
    description: "用于管理 AI 组件、文档和示例站点。",
  },
  {
    label: "当前状态",
    value: <Badge tone="success">运行中</Badge>,
  },
  {
    label: "负责人",
    value: "Design Platform",
  },
  {
    label: "更新时间",
    value: "2026-06-11 09:30",
  },
];

const modelItems: Array<DescriptionListItem> = [
  { label: "模型", value: "willa-ai-default" },
  { label: "上下文", value: "64K" },
  { label: "温度", value: "0.7" },
  { label: "最大输出", value: "4096 tokens" },
  { label: "工具调用", value: "已启用" },
  { label: "安全策略", value: "企业默认策略" },
];

const actionItems: Array<DescriptionListItem> = [
  {
    label: "数据源",
    value: "feedback.csv",
    description: "包含最近 7 天的用户反馈。",
    action: (
      <Button size="sm" variant="ghost">
        查看
      </Button>
    ),
  },
  {
    label: "生成结果",
    value: "产品反馈摘要",
    description: "已生成可直接进入周报的摘要。",
    action: (
      <Button size="sm" variant="ghost">
        复制
      </Button>
    ),
  },
];

const previewStyle = {
  width: "min(100%, 58rem)",
  marginInline: "auto",
} as const;

export default defineDoc({
  id: "description-list",
  name: "DescriptionList",
  packageName: "willa/DescriptionList",
  description: "用于展示详情页、配置摘要和结果元信息的键值说明列表。",
  imports: [{ name: "DescriptionList", from: "willa/DescriptionList" }],
  css: "willa/DescriptionList.css",
  demo: {
    name: "DescriptionList",
    component: DescriptionList,
    props: {
      style: previewStyle,
      title: "项目概览",
      description: "把核心状态、归属和更新时间收拢到一个紧凑区域。",
      items: basicItems,
    },
  },
  code: `
    import {
      DescriptionList,
      type DescriptionListItem,
    } from "willa/DescriptionList";
    import "willa/DescriptionList.css";

    const items: Array<DescriptionListItem> = [
      {
        label: "项目名称",
        value: "Willa AI Console",
        description: "用于管理 AI 组件、文档和示例站点。",
      },
      { label: "当前状态", value: "运行中" },
      { label: "负责人", value: "Design Platform" },
    ];

    <DescriptionList
      title="项目概览"
      description="把核心状态、归属和更新时间收拢到一个紧凑区域。"
      items={items}
    />;
  `,
  sections: [
    {
      title: "多列布局",
      code: `
        const items = [
          { label: "模型", value: "willa-ai-default" },
          { label: "上下文", value: "64K" },
          { label: "温度", value: "0.7" },
          { label: "最大输出", value: "4096 tokens" },
          { label: "工具调用", value: "已启用" },
          { label: "安全策略", value: "企业默认策略" },
        ];

        <DescriptionList
          title="模型配置"
          items={items}
          columns={3}
          size="sm"
        />;
      `,
      content: (
        <div style={previewStyle}>
          <DescriptionList
            title="模型配置"
            items={modelItems}
            columns={3}
            size="sm"
          />
        </div>
      ),
    },
    {
      title: "带操作",
      code: `
        const items = [
          {
            label: "数据源",
            value: "feedback.csv",
            description: "包含最近 7 天的用户反馈。",
            action: (
              <Button size="sm" variant="ghost">
                查看
              </Button>
            ),
          },
        ];

        <DescriptionList title="任务产物" items={items} />;
      `,
      content: (
        <div style={previewStyle}>
          <DescriptionList title="任务产物" items={actionItems} />
        </div>
      ),
    },
    {
      title: "轻量列表",
      code: `
        <DescriptionList
          variant="plain"
          items={[
            { label: "请求 ID", value: "req_6a4c89" },
            { label: "耗时", value: "1.28s" },
            { label: "命中来源", value: "12 条" },
          ]}
        />;
      `,
      content: (
        <div style={previewStyle}>
          <DescriptionList
            variant="plain"
            items={[
              { label: "请求 ID", value: "req_6a4c89" },
              { label: "耗时", value: "1.28s" },
              { label: "命中来源", value: "12 条" },
            ]}
          />
        </div>
      ),
    },
  ],
  props: [
    {
      name: "items",
      type: "Array<DescriptionListItem>",
      required: true,
      description: "说明项列表。",
    },
    {
      name: "title",
      type: "ReactNode",
      description: "列表标题。",
    },
    {
      name: "description",
      type: "ReactNode",
      description: "列表补充说明。",
    },
    {
      name: "columns",
      type: "1 | 2 | 3",
      defaultValue: "1",
      description: "桌面端列数，移动端会自动收敛为单列。",
    },
    {
      name: "size",
      type: '"sm" | "md"',
      defaultValue: '"md"',
      description: "列表密度。",
    },
    {
      name: "variant",
      type: '"default" | "plain"',
      defaultValue: '"default"',
      description: "展示形态，plain 适合嵌入已有卡片或面板。",
    },
    {
      name: "DescriptionListItem.id",
      type: "string | number",
      group: "DescriptionListItem",
      description: "说明项稳定标识，未传时使用数组下标。",
    },
    {
      name: "DescriptionListItem.label",
      type: "ReactNode",
      required: true,
      group: "DescriptionListItem",
      description: "说明项名称。",
    },
    {
      name: "DescriptionListItem.value",
      type: "ReactNode",
      required: true,
      group: "DescriptionListItem",
      description: "说明项内容。",
    },
    {
      name: "DescriptionListItem.description",
      type: "ReactNode",
      group: "DescriptionListItem",
      description: "说明项补充描述。",
    },
    {
      name: "DescriptionListItem.action",
      type: "ReactNode",
      group: "DescriptionListItem",
      description: "说明项右侧操作。",
    },
  ],
});
