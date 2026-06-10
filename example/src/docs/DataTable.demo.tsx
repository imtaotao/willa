import { useState } from "react";
import { Badge } from "willa/Badge";
import "willa/Badge.css";
import { Button } from "willa/Button";
import "willa/Button.css";
import { DataTable, type DataTableItem } from "willa/DataTable";
import "willa/DataTable.css";

import { defineDoc } from "#example/catalog/defineDoc";

const createReleaseItems = (onSelect?: (name: string) => void) => {
  return [
    {
      key: "prompt-input",
      cells: [
        {
          key: "name",
          label: "组件",
          value: "PromptInput",
          width: "12rem",
          sortable: true,
        },
        { key: "package", label: "包", value: "@willa-ui/ai", width: "12rem" },
        {
          key: "status",
          label: "状态",
          render: <Badge tone="success">已完成</Badge>,
        },
        { key: "owner", label: "负责人", value: "AI 产品" },
        { key: "updatedAt", label: "更新", value: "2026-06-10", align: "end" },
      ],
      expanded: "用于 AI 对话、智能搜索和生成任务的输入入口。",
      actions: (
        <Button size="sm" variant="ghost">
          详情
        </Button>
      ),
      onClick: () => onSelect?.("PromptInput"),
    },
    {
      key: "date-picker",
      cells: [
        {
          key: "name",
          label: "组件",
          value: "DatePicker",
          width: "12rem",
          sortable: true,
        },
        {
          key: "package",
          label: "包",
          value: "@willa-ui/form",
          width: "12rem",
        },
        {
          key: "status",
          label: "状态",
          render: <Badge tone="warning">评审中</Badge>,
        },
        { key: "owner", label: "负责人", value: "表单基础" },
        { key: "updatedAt", label: "更新", value: "2026-06-09", align: "end" },
      ],
      tone: "warning",
      expanded: "覆盖日、周、月、范围和滚动选择器场景。",
      actions: (
        <Button size="sm" variant="ghost">
          详情
        </Button>
      ),
      onClick: () => onSelect?.("DatePicker"),
    },
    {
      key: "tool-call-card",
      cells: [
        {
          key: "name",
          label: "组件",
          value: "ToolCallCard",
          width: "12rem",
          sortable: true,
        },
        { key: "package", label: "包", value: "@willa-ui/ai", width: "12rem" },
        {
          key: "status",
          label: "状态",
          render: <Badge tone="danger">阻塞</Badge>,
        },
        { key: "owner", label: "负责人", value: "Agent 场景" },
        { key: "updatedAt", label: "更新", value: "2026-06-08", align: "end" },
      ],
      disabled: true,
      actions: (
        <Button size="sm" variant="ghost">
          详情
        </Button>
      ),
      onClick: () => onSelect?.("ToolCallCard"),
    },
  ] satisfies Array<DataTableItem>;
};

const releaseItems = createReleaseItems();

const customCellItems: Array<DataTableItem> = [
  {
    key: "source-card",
    cells: [
      {
        key: "name",
        label: "组件",
        value: "SourceCard",
        width: "13rem",
        render: (
          <span
            style={{ display: "inline-flex", alignItems: "center", gap: 8 }}
          >
            <Badge tone="info">基础</Badge>
            <strong>SourceCard</strong>
          </span>
        ),
      },
      {
        key: "usage",
        label: "使用场景",
        value: "展示 AI 回复引用来源、知识库命中结果、网页证据和文档片段。",
        title: "展示 AI 回复引用来源、知识库命中结果、网页证据和文档片段。",
      },
      {
        key: "state",
        label: "状态",
        value: "可用",
        render: <Badge tone="success">可用</Badge>,
        align: "end",
      },
    ],
    actions: (
      <Button size="sm" variant="ghost">
        打开
      </Button>
    ),
  },
  {
    key: "citation",
    cells: [
      {
        key: "name",
        label: "组件",
        value: "Citation",
        width: "13rem",
        render: (
          <span
            style={{ display: "inline-flex", alignItems: "center", gap: 8 }}
          >
            <Badge tone="info">基础</Badge>
            <strong>Citation</strong>
          </span>
        ),
      },
      {
        key: "usage",
        label: "使用场景",
        value: "在正文、摘要和脚注附近展示轻量来源标记，并承载可信度状态。",
        title: "在正文、摘要和脚注附近展示轻量来源标记，并承载可信度状态。",
      },
      {
        key: "state",
        label: "状态",
        value: "可用",
        render: <Badge tone="success">可用</Badge>,
        align: "end",
      },
    ],
    actions: (
      <Button size="sm" variant="ghost">
        打开
      </Button>
    ),
  },
];

const DataTablePreview = () => {
  const [selected, setSelected] = useState("PromptInput");

  return (
    <div style={{ display: "grid", gap: "0.8rem" }}>
      <DataTable
        caption="组件发布状态"
        items={createReleaseItems(setSelected)}
        defaultExpandedKeys={["prompt-input"]}
        selectionMode="multiple"
        stickyActions
      />
      <span style={{ color: "var(--willa-text-soft)", fontSize: "0.88rem" }}>
        当前选中：{selected}
      </span>
    </div>
  );
};

export default defineDoc({
  id: "data-table",
  name: "DataTable",
  packageName: "willa/DataTable",
  description:
    "通过 items 渲染产品数据表格，适合管理后台、数据列表和 AI 产品状态面板。",
  imports: [{ name: "DataTable", from: "willa/DataTable" }],
  css: "willa/DataTable.css",
  demo: {
    name: "DataTable",
    component: DataTable,
    props: {
      items: releaseItems,
      stickyActions: true,
    },
  },
  code: `
    import { DataTable, type DataTableItem } from "willa/DataTable";
    import "willa/DataTable.css";

    const items: Array<DataTableItem> = [
      {
        key: "prompt-input",
        cells: [
          { label: "组件", value: "PromptInput" },
          { label: "包", value: "@willa-ui/ai" },
          { label: "状态", render: <Badge tone="success">已完成</Badge> },
        ],
        actions: <Button size="sm">详情</Button>,
      },
    ];

    <DataTable items={items} stickyActions />
  `,
  sections: [
    {
      title: "数据列表",
      content: <DataTablePreview />,
    },
    {
      title: "分页",
      content: (
        <DataTable
          items={releaseItems}
          pagination={{ pageSize: 2 }}
          stickyActions
        />
      ),
    },
    {
      title: "自定义单元格",
      content: (
        <DataTable
          caption="自定义渲染和溢出提示"
          items={customCellItems}
          stickyActions
        />
      ),
    },
    {
      title: "加载与空态",
      content: (
        <div style={{ display: "grid", gap: "1rem" }}>
          <DataTable items={[]} loading loadingText="正在同步组件状态..." />
          <DataTable items={[]} empty="没有匹配的组件" />
        </div>
      ),
    },
  ],
  props: [
    {
      name: "items",
      type: "Array<DataTableItem>",
      required: true,
      description: "表格行数据，包含 cells、actions 和行点击能力。",
    },
    {
      name: "caption",
      type: "ReactNode",
      description: "表格说明。",
    },
    {
      name: "size",
      type: '"sm" | "md" | "lg"',
      description: "表格密度。",
    },
    {
      name: "stickyHeader",
      type: "boolean",
      description: "表头是否在滚动容器内吸顶。",
    },
    {
      name: "stickyActions",
      type: "boolean",
      description: "操作列是否固定在表格最右侧。",
    },
    {
      name: "actionsWidth",
      type: "number | string",
      description: "操作列宽度。",
    },
    {
      name: "loading",
      type: "boolean",
      description: "是否展示加载态。",
    },
    {
      name: "loadingText",
      type: "ReactNode",
      description: "加载态内容。",
    },
    {
      name: "empty",
      type: "ReactNode",
      description: "空态内容。",
    },
    {
      name: "selectionMode",
      type: '"none" | "single" | "multiple"',
      description: "行选择模式。",
    },
    {
      name: "defaultSort",
      type: "DataTableSortState",
      description: "默认排序状态。",
    },
    {
      name: "pagination",
      type: "DataTablePagination",
      description: "分页配置。",
    },
    {
      name: "actionsLabel",
      type: "ReactNode",
      description: "操作列表头内容。",
    },
    {
      name: "tableClassName",
      type: "string",
      description: "传给内部 table 元素的 className。",
    },
    {
      name: "className",
      type: "string",
      description: "传给外层容器的 className。",
    },
    {
      name: "DataTableItem.key",
      type: "string | number",
      required: true,
      group: "DataTableItem",
      description: "行唯一标识。",
    },
    {
      name: "DataTableItem.cells",
      type: "Array<DataTableCell>",
      required: true,
      group: "DataTableItem",
      description: "当前行的单元格配置。",
    },
    {
      name: "DataTableItem.actions",
      type: "ReactNode",
      group: "DataTableItem",
      description: "当前行右侧操作区。",
    },
    {
      name: "DataTableItem.expanded",
      type: "ReactNode",
      group: "DataTableItem",
      description: "当前行展开后的详情内容。",
    },
    {
      name: "DataTableItem.disabled",
      type: "boolean",
      group: "DataTableItem",
      description: "是否禁用当前行交互。",
    },
    {
      name: "DataTableItem.tone",
      type: '"neutral" | "info" | "success" | "warning" | "danger"',
      group: "DataTableItem",
      description: "行状态色。",
    },
    {
      name: "DataTableItem.onClick",
      type: "() => void",
      group: "DataTableItem",
      description: "点击或键盘触发行时的回调。",
    },
    {
      name: "DataTableCell.key",
      type: "string",
      group: "DataTableCell",
      description: "列标识，用于排序状态和稳定渲染。",
    },
    {
      name: "DataTableCell.label",
      type: "ReactNode",
      required: true,
      group: "DataTableCell",
      description: "表头内容。",
    },
    {
      name: "DataTableCell.value",
      type: "ReactNode",
      group: "DataTableCell",
      description: "单元格内容。",
    },
    {
      name: "DataTableCell.render",
      type: "ReactNode",
      group: "DataTableCell",
      description: "自定义单元格内容，优先级高于 value。",
    },
    {
      name: "DataTableCell.sortable",
      type: "boolean",
      group: "DataTableCell",
      description: "当前列是否支持排序。",
    },
    {
      name: "DataTableCell.align",
      type: '"start" | "center" | "end"',
      group: "DataTableCell",
      description: "单元格和表头对齐方式。",
    },
    {
      name: "DataTableCell.width",
      type: "number | string",
      group: "DataTableCell",
      description: "列宽。",
    },
    {
      name: "DataTableCell.ellipsis",
      type: "boolean",
      group: "DataTableCell",
      description: "是否截断长文本并通过自定义悬浮提示展示完整内容，默认开启。",
    },
    {
      name: "DataTableCell.title",
      type: "string",
      group: "DataTableCell",
      description: "单元格截断时的自定义提示文本。",
    },
  ],
});
