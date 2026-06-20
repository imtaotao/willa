import { useMemo, useRef, useState } from "react";
import { Badge } from "willa/Badge";
import "willa/Badge.css";
import { Button } from "willa/Button";
import "willa/Button.css";
import { Group } from "willa/Group";
import "willa/Group.css";
import { Stack } from "willa/Stack";
import "willa/Stack.css";
import { Tabs } from "willa/Tabs";
import "willa/Tabs.css";
import { Toolbar } from "willa/Toolbar";
import "willa/Toolbar.css";
import { Switch } from "willa/Switch";
import "willa/Switch.css";
import {
  Table,
  useTableColumnState,
  type TableItem,
  type TableRef,
} from "willa/Table";
import "willa/Table.css";
import { FilterBar, type FilterBarItem } from "willa/FilterBar";
import "willa/FilterBar.css";
import { SearchInput } from "willa/SearchInput";
import "willa/SearchInput.css";
import { Select } from "willa/Select";
import "willa/Select.css";

import { defineDoc } from "#example/catalog/defineDoc";

const tablePersonalizationColumnStateKey = "table-capability-personalization";

const componentItems: Array<TableItem> = [
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
      { key: "owner", label: "归属", value: "AI" },
      {
        key: "status",
        label: "状态",
        value: "stable",
        render: <Badge tone="success">稳定</Badge>,
      },
      {
        key: "coverage",
        label: "覆盖能力",
        value: "输入、提交、禁用、自动高度和辅助信息",
      },
    ],
    expanded: "PromptInput 适合作为 AI 对话、智能搜索和生成任务的输入入口。",
    actions: (
      <Button size="sm" variant="ghost">
        查看
      </Button>
    ),
  },
  {
    key: "upload",
    tone: "warning",
    cells: [
      {
        key: "name",
        label: "组件",
        value: "Upload",
        width: "12rem",
        sortable: true,
      },
      { key: "owner", label: "归属", value: "Form" },
      {
        key: "status",
        label: "状态",
        value: "wip",
        render: <Badge tone="warning">完善中</Badge>,
      },
      {
        key: "coverage",
        label: "覆盖能力",
        value: "拖拽、预览、上传进度和下载回退",
      },
    ],
    expanded: "Upload 可以接入用户自己的上传逻辑，并展示上传进度。",
    actions: (
      <Button size="sm" variant="ghost">
        查看
      </Button>
    ),
  },
  {
    key: "code-block",
    selected: true,
    cells: [
      {
        key: "name",
        label: "组件",
        value: "CodeBlock",
        width: "12rem",
        sortable: true,
      },
      { key: "owner", label: "归属", value: "Content" },
      {
        key: "status",
        label: "状态",
        value: "stable",
        render: <Badge tone="success">稳定</Badge>,
      },
      {
        key: "coverage",
        label: "覆盖能力",
        value: "高亮、行号、复制、文件名和语言提示",
      },
    ],
    expanded: "CodeBlock 是内容渲染和 AI 代码结果的基础展示组件。",
    actions: (
      <Button size="sm" variant="ghost">
        查看
      </Button>
    ),
  },
];

const compactItems: Array<TableItem> = [
  {
    key: "mobile",
    cells: [
      { key: "task", label: "任务", value: "移动端校验" },
      { key: "owner", label: "负责人", value: "Design" },
      { key: "progress", label: "进度", value: "82%", align: "end" },
    ],
  },
  {
    key: "theme",
    cells: [
      { key: "task", label: "任务", value: "主题变量整理" },
      { key: "owner", label: "负责人", value: "Frontend" },
      { key: "progress", label: "进度", value: "96%", align: "end" },
    ],
  },
];

const customRenderItems: Array<TableItem> = [
  {
    key: "feedback-summary",
    cells: [
      {
        key: "task",
        label: "任务",
        value: "产品反馈摘要生成",
        width: "12rem",
        render: (
          <Group as="span" gap="xs" inline wrap={false}>
            <Badge tone="info">AI</Badge>
            <strong>产品反馈摘要生成</strong>
          </Group>
        ),
      },
      {
        key: "detail",
        label: "说明",
        value:
          "从近 128 条用户反馈中提取高频问题、风险提示和下一步可执行建议。",
        title:
          "从近 128 条用户反馈中提取高频问题、风险提示和下一步可执行建议。",
      },
      {
        key: "result",
        label: "结果",
        value: "已生成",
        render: <Badge tone="success">已生成</Badge>,
        align: "end",
      },
    ],
    actions: (
      <Button size="sm" variant="ghost">
        复制
      </Button>
    ),
  },
  {
    key: "risk-check",
    cells: [
      {
        key: "task",
        label: "任务",
        value: "风险校验",
        width: "12rem",
        render: (
          <Group as="span" gap="xs" inline wrap={false}>
            <Badge tone="warning">审核</Badge>
            <strong>风险校验</strong>
          </Group>
        ),
      },
      {
        key: "detail",
        label: "说明",
        value:
          "检查生成内容里是否包含敏感信息、缺少来源引用或需要人工确认的结论。",
        title:
          "检查生成内容里是否包含敏感信息、缺少来源引用或需要人工确认的结论。",
      },
      {
        key: "result",
        label: "结果",
        value: "需要复核",
        render: <Badge tone="warning">需要复核</Badge>,
        align: "end",
      },
    ],
    actions: (
      <Button size="sm" variant="ghost">
        查看
      </Button>
    ),
  },
];

const resizeItems: Array<TableItem> = [
  {
    key: "prompt-config",
    cells: [
      {
        key: "name",
        label: "组件",
        value: "PromptInput",
        width: 168,
        sortable: true,
      },
      {
        key: "scene",
        label: "场景",
        value: "AI 对话、信息检索、批量生成和任务录入",
      },
      {
        key: "detail",
        label: "说明",
        value:
          "支持自动高度、提交快捷键、辅助动作、loading 状态和多种输入约束。",
      },
      {
        key: "owner",
        label: "归属",
        value: "AI",
        align: "center",
      },
    ],
    actions: (
      <Button size="sm" variant="ghost">
        查看
      </Button>
    ),
  },
  {
    key: "markdown-preview",
    cells: [
      {
        key: "name",
        label: "组件",
        value: "CodeBlock",
        width: 168,
        sortable: true,
      },
      {
        key: "scene",
        label: "场景",
        value: "长文本预览、代码片段展示和复制",
      },
      {
        key: "detail",
        label: "说明",
        value:
          "适合在内容页、文档页和示例页里承载长描述，拖宽后能更完整地看到上下文。",
      },
      {
        key: "owner",
        label: "归属",
        value: "Content",
        align: "center",
      },
    ],
    actions: (
      <Button size="sm" variant="ghost">
        查看
      </Button>
    ),
  },
  {
    key: "table-preview",
    cells: [
      {
        key: "name",
        label: "组件",
        value: "Table",
        width: 168,
        sortable: true,
      },
      {
        key: "scene",
        label: "场景",
        value: "数据管理、结果列表、审阅队列和批量操作",
      },
      {
        key: "detail",
        label: "说明",
        value:
          "列宽可以通过拖拽手动调整，双击拖拽柄后会自动扩到当前内容所需宽度。",
      },
      {
        key: "owner",
        label: "归属",
        value: "Content",
        align: "center",
      },
    ],
    actions: (
      <Button size="sm" variant="ghost">
        查看
      </Button>
    ),
  },
];

const methodsItems: Array<TableItem> = Array.from(
  { length: 16 },
  (_, index) => ({
    key: `method-${index + 1}`,
    cells: [
      {
        key: "name",
        label: "组件",
        value: ["Table", "FilterBar", "SelectionBar", "Tooltip"][index % 4],
        width: 160,
        fixed: "left",
      },
      {
        key: "owner",
        label: "归属",
        value: ["Content", "Form", "Content", "Content", "AI", "Widgets"][
          index % 6
        ],
        width: 120,
      },
      {
        key: "scene",
        label: "场景",
        value: [
          "内容列表、批量管理和审阅队列",
          "知识库索引和检索结果",
          "图文素材管理和发布审核",
          "生成结果回看和修订",
        ][index % 4],
        width: 220,
      },
      {
        key: "desc",
        label: "说明",
        value:
          "这是一段较长的说明文本，用来演示 Table 内部滚动容器的实例方法、横向滚动位置控制和列宽变化后的布局表现。",
        width: 320,
      },
      {
        key: "status",
        label: "状态",
        value: index % 2 === 0 ? "stable" : "wip",
        render:
          index % 2 === 0 ? (
            <Badge tone="success">稳定</Badge>
          ) : (
            <Badge tone="warning">完善中</Badge>
          ),
        align: "end",
        width: 120,
      },
      {
        key: "updated",
        label: "更新时间",
        value: `2026-06-${String(10 + index).padStart(2, "0")}`,
        width: 140,
        fixed: "right",
      },
    ],
    actions: (
      <Button size="sm" variant="ghost">
        查看
      </Button>
    ),
  }),
);

const virtualTableItems: Array<TableItem> = Array.from(
  { length: 120 },
  (_, index) => ({
    key: `virtual-${index + 1}`,
    cells: [
      {
        key: "name",
        label: "组件",
        value: ["Table", "FilterBar", "SelectionBar", "Tooltip"][index % 4],
        width: 160,
        fixed: "left",
      },
      {
        key: "owner",
        label: "归属",
        value: ["Content", "Form", "Content", "Content", "AI", "Widgets"][
          index % 6
        ],
        width: 120,
      },
      {
        key: "scene",
        label: "场景",
        value: [
          "内容列表、批量管理和审阅队列",
          "知识库索引和检索结果",
          "图文素材管理和发布审核",
          "生成结果回看和修订",
        ][index % 4],
        width: 220,
      },
      {
        key: "desc",
        label: "说明",
        value:
          "虚拟滚动只渲染当前可视区附近的数据，适合条目很多且需要持续滚动的长表。",
        width: 320,
      },
      {
        key: "status",
        label: "状态",
        value: index % 2 === 0 ? "stable" : "wip",
        render:
          index % 2 === 0 ? (
            <Badge tone="success">稳定</Badge>
          ) : (
            <Badge tone="warning">完善中</Badge>
          ),
        align: "end",
        width: 120,
      },
      {
        key: "updated",
        label: "更新时间",
        value: `2026-06-${String((index % 28) + 1).padStart(2, "0")}`,
        width: 140,
        fixed: "right",
      },
    ],
    actions: (
      <Button size="sm" variant="ghost">
        查看
      </Button>
    ),
  }),
);

const buildVirtualInfiniteTableItems = (count: number, startIndex = 1) =>
  Array.from({ length: count }, (_, offset) => {
    const index = startIndex + offset;
    const template = virtualTableItems[(index - 1) % virtualTableItems.length];

    return {
      ...template,
      key: `stream-${index}`,
      cells: [
        {
          key: "sequence",
          label: "序号",
          value: index,
          width: 88,
          align: "end" as const,
        },
        ...template.cells.map((cell) => {
          if (cell.key === "name") {
            return {
              ...cell,
              value: ["Table", "FilterBar", "SelectionBar", "Tooltip"][
                index % 4
              ],
            };
          }

          if (cell.key === "updated") {
            return {
              ...cell,
              value: `2026-07-${String((index % 28) + 1).padStart(2, "0")}`,
            };
          }

          return cell;
        }),
      ],
    };
  });

const virtualTreeTableItems: Array<TableItem> = Array.from(
  { length: 24 },
  (_, groupIndex) => {
    const groupKey = `virtual-tree-group-${groupIndex + 1}`;
    const owner = ["Content", "Form", "AI", "Widgets"][groupIndex % 4];

    return {
      key: groupKey,
      cells: [
        {
          key: "name",
          label: "名称",
          value: `模块分组 ${groupIndex + 1}`,
          width: 180,
          fixed: "left",
        },
        { key: "type", label: "类型", value: "目录", width: 110 },
        { key: "owner", label: "归属", value: owner, width: 130 },
        {
          key: "status",
          label: "状态",
          value: "stable",
          render: <Badge tone="success">稳定</Badge>,
          align: "center",
          width: 120,
        },
        {
          key: "updated",
          label: "更新时间",
          value: `2026-06-${String((groupIndex % 28) + 1).padStart(2, "0")}`,
          width: 140,
          fixed: "right",
        },
      ],
      children: Array.from({ length: 12 }, (_, childIndex) => ({
        key: `${groupKey}-child-${childIndex + 1}`,
        cells: [
          {
            key: "name",
            label: "名称",
            value: `组件 ${groupIndex + 1}-${childIndex + 1}`,
            width: 180,
            fixed: "left",
          },
          { key: "type", label: "类型", value: "组件", width: 110 },
          { key: "owner", label: "归属", value: owner, width: 130 },
          {
            key: "status",
            label: "状态",
            value: childIndex % 2 === 0 ? "stable" : "wip",
            render:
              childIndex % 2 === 0 ? (
                <Badge tone="success">稳定</Badge>
              ) : (
                <Badge tone="warning">完善中</Badge>
              ),
            align: "center",
            width: 120,
          },
          {
            key: "updated",
            label: "更新时间",
            value: `2026-06-${String(((groupIndex + childIndex) % 28) + 1).padStart(2, "0")}`,
            width: 140,
            fixed: "right",
          },
        ],
        actions: (
          <Button size="sm" variant="ghost">
            查看
          </Button>
        ),
      })),
    };
  },
);

const defaultVirtualTreeExpandedKeys = virtualTreeTableItems
  .slice(0, 8)
  .map((item) => item.key);

const ownerOptions = [
  { value: "all", label: "全部归属" },
  { value: "AI", label: "AI" },
  { value: "Form", label: "Form" },
  { value: "Content", label: "Content" },
];

const statusOptions = [
  { value: "all", label: "全部状态" },
  { value: "stable", label: "稳定" },
  { value: "wip", label: "完善中" },
];

const filterTableItems = (
  items: Array<TableItem>,
  filters: { keyword: string; owner: string; status: string },
) => {
  const keyword = filters.keyword.trim().toLowerCase();

  return items.filter((item) => {
    const cellText = item.cells.map(getTableCellText).join(" ").toLowerCase();
    const owner = String(
      item.cells.find((cell) => cell.key === "owner")?.value ?? "",
    );
    const status = String(
      item.cells.find((cell) => cell.key === "status")?.value ?? "",
    );

    return (
      (!keyword || cellText.includes(keyword)) &&
      (filters.owner === "all" || owner === filters.owner) &&
      (filters.status === "all" || status === filters.status)
    );
  });
};

const getTableCellText = (cell: TableItem["cells"][number]) => {
  if (typeof cell.value === "string" || typeof cell.value === "number") {
    return String(cell.value);
  }

  return "";
};

const personalizationItems: Array<TableItem> = [
  {
    key: "prompt-input",
    cells: [
      { key: "name", label: "组件", value: "PromptInput", width: 160 },
      { key: "owner", label: "归属", value: "AI", width: 110 },
      {
        key: "scene",
        label: "场景",
        value: "对话输入、信息检索、批量生成",
        width: 220,
      },
      {
        key: "status",
        label: "状态",
        value: "stable",
        render: <Badge tone="success">稳定</Badge>,
        align: "center",
        width: 120,
      },
      {
        key: "updated",
        label: "更新时间",
        value: "2026-06-18",
        width: 140,
      },
    ],
    actions: (
      <Button size="sm" variant="ghost">
        查看
      </Button>
    ),
  },
  {
    key: "upload",
    cells: [
      { key: "name", label: "组件", value: "Upload", width: 160 },
      { key: "owner", label: "归属", value: "Form", width: 110 },
      {
        key: "scene",
        label: "场景",
        value: "文件选择、拖拽上传、进度追踪",
        width: 220,
      },
      {
        key: "status",
        label: "状态",
        value: "wip",
        render: <Badge tone="warning">完善中</Badge>,
        align: "center",
        width: 120,
      },
      {
        key: "updated",
        label: "更新时间",
        value: "2026-06-16",
        width: 140,
      },
    ],
    actions: (
      <Button size="sm" variant="ghost">
        查看
      </Button>
    ),
  },
  {
    key: "table",
    cells: [
      { key: "name", label: "组件", value: "Table", width: 160 },
      { key: "owner", label: "归属", value: "Content", width: 110 },
      {
        key: "scene",
        label: "场景",
        value: "数据管理、结果列表、审阅队列",
        width: 220,
      },
      {
        key: "status",
        label: "状态",
        value: "stable",
        render: <Badge tone="success">稳定</Badge>,
        align: "center",
        width: 120,
      },
      {
        key: "updated",
        label: "更新时间",
        value: "2026-06-15",
        width: 140,
      },
    ],
    actions: (
      <Button size="sm" variant="ghost">
        查看
      </Button>
    ),
  },
];

const treeTableItems: Array<TableItem> = [
  {
    key: "platform",
    cells: [
      { key: "name", label: "名称", value: "平台组件", width: 180 },
      { key: "type", label: "类型", value: "目录", width: 100 },
      { key: "owner", label: "归属", value: "Content", width: 120 },
      {
        key: "updated",
        label: "更新时间",
        value: "2026-06-18",
        width: 140,
      },
    ],
    children: [
      {
        key: "platform-table",
        cells: [
          { key: "name", label: "名称", value: "Table", width: 180 },
          { key: "type", label: "类型", value: "组件", width: 100 },
          { key: "owner", label: "归属", value: "Content", width: 120 },
          {
            key: "updated",
            label: "更新时间",
            value: "2026-06-18",
            width: 140,
          },
        ],
      },
      {
        key: "platform-list",
        cells: [
          { key: "name", label: "名称", value: "List", width: 180 },
          { key: "type", label: "类型", value: "组件", width: 100 },
          { key: "owner", label: "归属", value: "Content", width: 120 },
          {
            key: "updated",
            label: "更新时间",
            value: "2026-06-17",
            width: 140,
          },
        ],
      },
    ],
  },
  {
    key: "form",
    cells: [
      { key: "name", label: "名称", value: "表单组件", width: 180 },
      { key: "type", label: "类型", value: "目录", width: 100 },
      { key: "owner", label: "归属", value: "Form", width: 120 },
      {
        key: "updated",
        label: "更新时间",
        value: "2026-06-18",
        width: 140,
      },
    ],
    children: [
      {
        key: "form-input",
        cells: [
          { key: "name", label: "名称", value: "Input", width: 180 },
          { key: "type", label: "类型", value: "组件", width: 100 },
          { key: "owner", label: "归属", value: "Form", width: 120 },
          {
            key: "updated",
            label: "更新时间",
            value: "2026-06-14",
            width: 140,
          },
        ],
      },
    ],
  },
];

const mergeTableItems: Array<TableItem> = [
  {
    key: "merged-a",
    cells: [
      {
        key: "module",
        label: "模块",
        value: "搜索区",
        rowSpan: 2,
        width: 120,
      },
      {
        key: "scene",
        label: "场景",
        value: "筛选条件与操作入口",
        width: 180,
      },
      {
        key: "note",
        label: "说明",
        value: "用于承载查询条件和快捷操作。",
        colSpan: 2,
      },
      {
        key: "updated",
        label: "更新时间",
        value: "2026-06-18",
        width: 140,
      },
    ],
  },
  {
    key: "merged-b",
    cells: [
      {
        key: "scene",
        label: "场景",
        value: "分页、导出和批量操作",
        width: 180,
      },
      {
        key: "note",
        label: "说明",
        value: "这里展示行合并后的连续布局。",
      },
      {
        key: "status",
        label: "状态",
        value: "stable",
        render: <Badge tone="success">稳定</Badge>,
        align: "center",
        width: 120,
      },
      {
        key: "updated",
        label: "更新时间",
        value: "2026-06-17",
        width: 140,
      },
    ],
  },
  {
    key: "merged-c",
    cells: [
      { key: "module", label: "模块", value: "结果区", width: 120 },
      {
        key: "scene",
        label: "场景",
        value: "结果展示与二次操作",
        width: 180,
      },
      {
        key: "note",
        label: "说明",
        value: "支持跨列合并，突出说明区域。",
        colSpan: 2,
      },
      {
        key: "updated",
        label: "更新时间",
        value: "2026-06-16",
        width: 140,
      },
    ],
  },
];

const TableCapabilityPreview = () => {
  const {
    columnOrder,
    columnWidths,
    hiddenColumns,
    resetColumnState,
    setColumnOrder,
    setColumnWidths,
    setHiddenColumns,
  } = useTableColumnState({
    columnStateKey: tablePersonalizationColumnStateKey,
  });

  const columnHiddenState = useMemo(
    () => ({
      owner: hiddenColumns.includes("owner"),
      status: hiddenColumns.includes("status"),
    }),
    [hiddenColumns],
  );

  return (
    <Tabs
      size="sm"
      defaultValue="personalization"
      items={[
        {
          value: "personalization",
          label: "列拖拽与个性化",
          children: (
            <Stack gap="md" width="100%">
              <Toolbar ariaLabel="列配置操作" size="sm" wrap>
                <Switch
                  checked={!columnHiddenState.owner}
                  label="显示归属"
                  onChange={(event) => {
                    const checked = event.currentTarget.checked;
                    setHiddenColumns(
                      checked
                        ? hiddenColumns.filter((key) => key !== "owner")
                        : Array.from(new Set([...hiddenColumns, "owner"])),
                    );
                  }}
                />
                <Switch
                  checked={!columnHiddenState.status}
                  label="显示状态"
                  onChange={(event) => {
                    const checked = event.currentTarget.checked;
                    setHiddenColumns(
                      checked
                        ? hiddenColumns.filter((key) => key !== "status")
                        : Array.from(new Set([...hiddenColumns, "status"])),
                    );
                  }}
                />
                <Button size="sm" variant="ghost" onClick={resetColumnState}>
                  重置配置
                </Button>
              </Toolbar>
              <Table
                caption="拖拽列头即可调整顺序，列宽调整后会保留在本地状态里。"
                items={personalizationItems}
                columnDraggable
                resizableColumns
                stickyHeader
                stickyActions
                columnOrder={columnOrder}
                hiddenColumns={hiddenColumns}
                columnWidths={columnWidths}
                onColumnOrderChange={setColumnOrder}
                onColumnWidthsChange={setColumnWidths}
                onHiddenColumnsChange={setHiddenColumns}
                actionsWidth="5.6rem"
                style={{ maxHeight: "18rem" }}
              />
            </Stack>
          ),
        },
        {
          value: "tree",
          label: "树形表格",
          children: (
            <Table
              caption="树形表格支持展开层级结构，适合目录、组织和分组数据。"
              items={treeTableItems}
              treeMode
              defaultExpandedKeys={["platform"]}
              stickyHeader
              style={{ maxHeight: "18rem" }}
            />
          ),
        },
        {
          value: "merge",
          label: "合并单元格",
          children: (
            <Table
              caption="支持 rowSpan / colSpan 的合并单元格展示。"
              items={mergeTableItems}
              stickyHeader
              style={{ maxHeight: "18rem" }}
            />
          ),
        },
        {
          value: "group",
          label: "分组与聚合",
          children: (
            <Table
              caption="按归属分组后展示组头和汇总摘要，适合目录和统计视图。"
              items={personalizationItems}
              groupBy="owner"
              groupSummary={(context) => `共 ${context.count} 项`}
              stickyHeader
              style={{ maxHeight: "18rem" }}
            />
          ),
        },
      ]}
    />
  );
};

const TableDemoGallery = () => {
  const tableRef = useRef<TableRef>(null);
  const [stickyHeader, setStickyHeader] = useState(true);
  const [virtualInfiniteItems, setVirtualInfiniteItems] = useState<
    Array<TableItem>
  >(buildVirtualInfiniteTableItems(80));
  const [virtualInfiniteLoading, setVirtualInfiniteLoading] = useState(false);

  const loadMoreVirtualInfinite = () => {
    if (virtualInfiniteLoading) return;

    setVirtualInfiniteLoading(true);
    return new Promise<void>((resolve) => {
      window.setTimeout(() => {
        setVirtualInfiniteItems((currentItems) => [
          ...currentItems,
          ...buildVirtualInfiniteTableItems(40, currentItems.length + 1),
        ]);
        setVirtualInfiniteLoading(false);
        resolve();
      }, 450);
    });
  };

  return (
    <Tabs
      size="sm"
      defaultValue="filter"
      items={[
        {
          value: "filter",
          label: "搜索与筛选",
          children: <FilterableTablePreview />,
        },
        {
          value: "custom",
          label: "自定义单元格",
          children: (
            <Table
              caption="自定义渲染和溢出提示"
              items={customRenderItems}
              stickyActions
            />
          ),
        },
        {
          value: "resize",
          label: "列宽调整",
          children: (
            <Table
              caption="鼠标或触屏拖动表头右侧把手调整列宽；聚焦把手后可用左右方向键调整，双击后自动适配内容宽度。"
              items={resizeItems}
              resizableColumns
              stickyActions
              actionsWidth="5.6rem"
              style={{ maxHeight: "20rem" }}
            />
          ),
        },
        {
          value: "methods",
          label: "列宽与方法",
          children: (
            <Stack gap="md" width="100%">
              <Switch
                checked={stickyHeader}
                label="固定表头"
                onChange={(event) =>
                  setStickyHeader(event.currentTarget.checked)
                }
              />
              <Toolbar ariaLabel="表格滚动操作" size="sm" wrap>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => tableRef.current?.scrollToLeft("smooth")}
                >
                  滚到最左
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() =>
                    tableRef.current?.scrollTo({
                      left: 760,
                      behavior: "smooth",
                    })
                  }
                >
                  滚到右侧
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => tableRef.current?.scrollToTop("smooth")}
                >
                  回到顶部
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => tableRef.current?.scrollToBottom("smooth")}
                >
                  到底部
                </Button>
              </Toolbar>
              <Table
                ref={tableRef}
                caption="固定列、操作列和实例方法控制内部滚动容器"
                items={methodsItems}
                resizableColumns
                stickyHeader={stickyHeader}
                stickyActions
                actionsWidth="5.6rem"
                style={{ maxHeight: "20rem" }}
              />
            </Stack>
          ),
        },
        {
          value: "virtual",
          label: "虚拟滚动",
          children: (
            <Table
              caption="虚拟滚动只渲染当前可视区附近的行，长表滚动更稳定"
              items={virtualTableItems}
              resizableColumns
              stickyHeader
              stickyActions
              virtualScroll
              actionsWidth="5.6rem"
              style={{ maxHeight: "20rem" }}
            />
          ),
        },
        {
          value: "virtual-tree",
          label: "树形 + 虚拟",
          children: (
            <Table
              caption="树形表格展开后会先计算可见层级，再只渲染滚动视区附近的行。"
              items={virtualTreeTableItems}
              treeMode
              defaultExpandedKeys={defaultVirtualTreeExpandedKeys}
              resizableColumns
              stickyHeader
              stickyActions
              virtualScroll
              virtualScrollOverscan={6}
              actionsWidth="5.6rem"
              style={{ maxHeight: "20rem" }}
            />
          ),
        },
        {
          value: "infinite",
          label: "无限加载",
          children: (
            <Table
              caption="虚拟滚动 + 无限加载，接近底部时会继续追加数据，序号保持连续"
              items={virtualInfiniteItems}
              loading={virtualInfiniteLoading}
              loadingText="正在加载更多"
              resizableColumns
              stickyHeader
              stickyActions
              virtualScroll
              infiniteScroll
              hasMore
              scrollThreshold={120}
              onLoadMore={loadMoreVirtualInfinite}
              actionsWidth="5.6rem"
              style={{ maxHeight: "20rem" }}
            />
          ),
        },
        {
          value: "compact",
          label: "紧凑尺寸",
          children: <Table size="sm" items={compactItems} />,
        },
        {
          value: "personalization",
          label: "拖拽与个性化",
          children: <TableCapabilityPreview />,
        },
        {
          value: "tree",
          label: "树形表格",
          children: (
            <Table
              caption="树形表格支持展开层级结构，适合目录、组织和分组数据。"
              items={treeTableItems}
              treeMode
              defaultExpandedKeys={["platform"]}
              stickyHeader
              style={{ maxHeight: "18rem" }}
            />
          ),
        },
        {
          value: "merge",
          label: "合并单元格",
          children: (
            <Table
              caption="支持 rowSpan / colSpan 的合并单元格展示。"
              items={mergeTableItems}
              stickyHeader
              style={{ maxHeight: "18rem" }}
            />
          ),
        },
      ]}
    />
  );
};

const FilterableTablePreview = () => {
  const [keyword, setKeyword] = useState("");
  const [owner, setOwner] = useState("all");
  const [status, setStatus] = useState("all");
  const filteredItems = filterTableItems(componentItems, {
    keyword,
    owner,
    status,
  });
  const filterItems: Array<FilterBarItem> = [
    {
      id: "owner",
      width: "10rem",
      control: (
        <Select
          value={owner}
          options={ownerOptions}
          width="100%"
          onValueChange={setOwner}
        />
      ),
    },
    {
      id: "status",
      width: "10rem",
      control: (
        <Select
          value={status}
          options={statusOptions}
          width="100%"
          onValueChange={setStatus}
        />
      ),
    },
  ];

  return (
    <Stack gap="md" width="min(100%, 72rem)" style={{ marginInline: "auto" }}>
      <Table
        header={
          <FilterBar
            search={
              <SearchInput
                value={keyword}
                onValueChange={setKeyword}
                placeholder="搜索组件、归属或能力"
                width="100%"
              />
            }
            items={filterItems}
            actions={
              <Button
                size="sm"
                variant="ghost"
                onClick={() => {
                  setKeyword("");
                  setOwner("all");
                  setStatus("all");
                }}
              >
                重置
              </Button>
            }
            summary={`匹配 ${filteredItems.length} 个组件。`}
          />
        }
        caption="组件筛选结果"
        items={filteredItems}
        empty="没有匹配的组件"
        stickyActions
        footer={`当前展示 ${filteredItems.length} / ${componentItems.length} 个组件。`}
      />
    </Stack>
  );
};

export default defineDoc({
  id: "table",
  name: "Table",
  packageName: "willa/Table",
  description:
    "通过 items 渲染表格和产品数据列表，支持自定义单元格、排序、选择、分页、展开行、右侧操作区、列宽调整和滚动控制。",
  imports: [
    { name: "Table", from: "willa/Table" },
    { name: "useTableColumnState", from: "willa/Table" },
    { name: "Stack", from: "willa/Stack" },
    { name: "Group", from: "willa/Group" },
    { name: "Toolbar", from: "willa/Toolbar" },
  ],
  css: "willa/Table.css",
  demo: {
    name: "Table",
    component: Table,
    props: {
      caption: "组件能力覆盖表",
      items: componentItems,
    },
  },
  code: `
    import { Table, type TableItem } from "willa/Table";
    import "willa/Table.css";

    const items: Array<TableItem> = [
      {
        key: "prompt-input",
        cells: [
          { label: "组件", value: "PromptInput" },
          { label: "归属", value: "AI" },
          { label: "状态", render: <Badge tone="success">稳定</Badge> },
        ],
        actions: <Button size="sm">查看</Button>,
      },
    ];

    <Table caption="组件能力覆盖表" items={items} stickyActions />;
  `,
  sections: [
    {
      title: "能力总览",
      code: `
        const columnState = useTableColumnState({
          columnStateKey: "table-capability-personalization",
        });

        <Tabs
          items={[
            { value: "filter", label: "搜索与筛选", children: <Table ... /> },
            { value: "virtual", label: "虚拟滚动", children: <Table ... virtualScroll /> },
            { value: "virtual-tree", label: "树形 + 虚拟", children: <Table ... treeMode virtualScroll /> },
            {
              value: "personalization",
              label: "拖拽与个性化",
              children: (
                <Table
                  ...
                  columnOrder={columnState.columnOrder}
                  hiddenColumns={columnState.hiddenColumns}
                  columnWidths={columnState.columnWidths}
                  onColumnOrderChange={columnState.setColumnOrder}
                  onHiddenColumnsChange={columnState.setHiddenColumns}
                  onColumnWidthsChange={columnState.setColumnWidths}
                />
              ),
            },
          ]}
        />
      `,
      content: <TableDemoGallery />,
    },
  ],
  props: [
    {
      name: "items",
      type: "Array<TableItem>",
      required: true,
      description: "表格行数据，包含 cells、actions 和行点击能力。",
    },
    {
      name: "caption",
      type: "ReactNode",
      description: "表格说明，渲染为 caption。",
    },
    {
      name: "header",
      type: "ReactNode",
      description: "表格头部自定义区域，适合放搜索、筛选、批量操作和工具栏。",
    },
    {
      name: "footer",
      type: "ReactNode",
      description: "表格底部自定义区域，适合放统计说明、状态提示或补充操作。",
    },
    {
      name: "size",
      type: '"sm" | "md" | "lg"',
      defaultValue: '"md"',
      description: "表格密度。",
    },
    {
      name: "stickyHeader",
      type: "boolean",
      defaultValue: "false",
      description: "表头是否在滚动容器内吸顶。",
    },
    {
      name: "stickyActions",
      type: "boolean",
      defaultValue: "false",
      description: "操作列是否固定在表格最右侧。",
    },
    {
      name: "actionsWidth",
      type: "number | string",
      description: "操作列宽度。",
    },
    {
      name: "resizableColumns",
      type: "boolean",
      defaultValue: "false",
      description: "是否允许表头列宽拖动、键盘调整和双击自适应。",
    },
    {
      name: "virtualScroll",
      type: "boolean",
      defaultValue: "false",
      description:
        "是否开启虚拟滚动，只渲染当前可视区附近的行。和 treeMode 组合时会对展开后的可见树行生效。",
    },
    {
      name: "virtualScrollOverscan",
      type: "number",
      defaultValue: "4",
      description: "虚拟滚动预渲染的额外行数。",
    },
    {
      name: "infiniteScroll",
      type: "boolean",
      defaultValue: "false",
      description: "是否开启滚动到底部自动加载更多行。",
    },
    {
      name: "hasMore",
      type: "boolean",
      defaultValue: "false",
      description: "无限滚动是否还有更多数据。",
    },
    {
      name: "scrollThreshold",
      type: "number",
      defaultValue: "56",
      description: "距离底部多少像素时触发 onLoadMore。",
    },
    {
      name: "onLoadMore",
      type: "() => void | Promise<void>",
      description: "无限滚动加载更多回调。",
    },
    {
      name: "loading",
      type: "boolean",
      defaultValue: "false",
      description: "是否展示加载态。",
    },
    {
      name: "loadingText",
      type: "ReactNode",
      defaultValue: '"加载中"',
      description: "加载态内容。",
    },
    {
      name: "empty",
      type: "ReactNode",
      defaultValue: '"暂无数据"',
      description: "空态内容。",
    },
    {
      name: "actionsLabel",
      type: "ReactNode",
      defaultValue: '"操作"',
      description: "操作列表头内容。",
    },
    {
      name: "sort",
      type: "TableSortState",
      description: "受控排序状态。",
    },
    {
      name: "defaultSort",
      type: "TableSortState",
      description: "默认排序状态。",
    },
    {
      name: "onSortChange",
      type: "(sort: TableSortState) => void",
      description: "排序变化回调。",
    },
    {
      name: "selectionMode",
      type: '"none" | "single" | "multiple"',
      defaultValue: '"none"',
      description: "行选择模式。",
    },
    {
      name: "selectedKeys",
      type: "Array<string | number>",
      description: "受控选中行 key。",
    },
    {
      name: "defaultSelectedKeys",
      type: "Array<string | number>",
      defaultValue: "[]",
      description: "默认选中行 key。",
    },
    {
      name: "onSelectionChange",
      type: "(keys: Array<string | number>) => void",
      description: "行选择变化回调。",
    },
    {
      name: "selectionBar",
      type: "boolean | ReactNode | ((context: TableSelectionBarContext) => ReactNode)",
      defaultValue: "false",
      description:
        "多选后展示的选择操作条。传 true 时使用内置 SelectionBar，也可以传入自定义节点或渲染函数。",
    },
    {
      name: "selectionBarActions",
      type: "ReactNode | ((context: TableSelectionBarContext) => ReactNode)",
      description: "传给内置 SelectionBar 的批量操作区。",
    },
    {
      name: "selectionBarDescription",
      type: "ReactNode | ((context: TableSelectionBarContext) => ReactNode)",
      description: "传给内置 SelectionBar 的辅助说明。",
    },
    {
      name: "selectionBarSticky",
      type: "boolean",
      defaultValue: "false",
      description: "是否让内置 SelectionBar 使用粘性定位。",
    },
    {
      name: "expandedKeys",
      type: "Array<string | number>",
      description: "受控展开行 key。",
    },
    {
      name: "defaultExpandedKeys",
      type: "Array<string | number>",
      defaultValue: "[]",
      description: "默认展开行 key。",
    },
    {
      name: "onExpandedChange",
      type: "(keys: Array<string | number>) => void",
      description: "展开行变化回调。",
    },
    {
      name: "pagination",
      type: "TablePagination",
      description: "分页配置，传入 pageSize 后启用分页。",
    },
    {
      name: "columnDraggable",
      type: "boolean",
      defaultValue: "false",
      description: "是否允许拖拽表头调整列顺序。",
    },
    {
      name: "columnOrder",
      type: "Array<string>",
      description: "受控列顺序。",
    },
    {
      name: "defaultColumnOrder",
      type: "Array<string>",
      defaultValue: "[]",
      description: "默认列顺序。",
    },
    {
      name: "hiddenColumns",
      type: "Array<string>",
      description: "受控隐藏列 key。",
    },
    {
      name: "defaultHiddenColumns",
      type: "Array<string>",
      defaultValue: "[]",
      description: "默认隐藏列 key。",
    },
    {
      name: "columnWidths",
      type: "Record<string, number>",
      description: "受控列宽记忆状态。",
    },
    {
      name: "onColumnOrderChange",
      type: "(order: Array<string>) => void",
      description: "列顺序变化回调。",
    },
    {
      name: "onColumnWidthsChange",
      type: "(widths: Record<string, number>) => void",
      description: "列宽变化回调。",
    },
    {
      name: "onHiddenColumnsChange",
      type: "(hiddenColumns: Array<string>) => void",
      description: "隐藏列变化回调。",
    },
    {
      name: "defaultColumnWidths",
      type: "Record<string, number>",
      defaultValue: "{}",
      description: "默认列宽记忆状态。",
    },
    {
      name: "columnStateKey",
      type: "string",
      description:
        "列顺序、隐藏和列宽的本地记忆 key。非受控列状态可直接由 Table 读写；受控列状态建议配合 useTableColumnState 使用。",
    },
    {
      name: "useTableColumnState",
      type: "(options: UseTableColumnStateOptions) => ReturnType<typeof useTableColumnState>",
      group: "Hook",
      description:
        "管理列顺序、隐藏列和列宽，并按 columnStateKey 读写本地记忆，适合外部控件和 Table 共用同一份列配置。",
    },
    {
      name: "columnState.columnOrder",
      type: "Array<string>",
      group: "Hook",
      description: "当前列顺序，可传给 Table.columnOrder。",
    },
    {
      name: "columnState.hiddenColumns",
      type: "Array<string>",
      group: "Hook",
      description: "当前隐藏列 key，可传给 Table.hiddenColumns。",
    },
    {
      name: "columnState.columnWidths",
      type: "Record<string, number>",
      group: "Hook",
      description: "当前列宽状态，可传给 Table.columnWidths。",
    },
    {
      name: "columnState.setColumnOrder / setHiddenColumns / setColumnWidths",
      type: "function",
      group: "Hook",
      description:
        "列状态更新函数，可分别传给 Table 的列顺序、隐藏列和列宽变化回调。",
    },
    {
      name: "columnState.resetColumnState",
      type: "() => void",
      group: "Hook",
      description: "重置列顺序、隐藏列和列宽到默认状态。",
    },
    {
      name: "groupBy",
      type: "string | ((item: TableItem) => string | number | undefined)",
      description: "按指定字段或回调对当前页数据分组。",
    },
    {
      name: "groupLabel",
      type: "ReactNode | ((context: TableGroupContext) => ReactNode)",
      description: "分组标题的自定义渲染。",
    },
    {
      name: "groupSummary",
      type: "(context: TableGroupContext) => ReactNode",
      description: "分组标题右侧的聚合摘要渲染。",
    },
    {
      name: "treeMode",
      type: "boolean",
      defaultValue: "false",
      description: "是否按树形结构渲染行并显示展开控制。",
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
      name: "TableItem.key",
      type: "string | number",
      required: true,
      group: "TableItem",
      description: "行唯一标识。",
    },
    {
      name: "TableItem.cells",
      type: "Array<TableCell>",
      required: true,
      group: "TableItem",
      description: "当前行的单元格配置。",
    },
    {
      name: "TableItem.children",
      type: "Array<TableItem>",
      group: "TableItem",
      description: "树形表格的子行数据。",
    },
    {
      name: "TableItem.actions",
      type: "ReactNode",
      group: "TableItem",
      description: "当前行右侧操作区。",
    },
    {
      name: "TableItem.expanded",
      type: "ReactNode",
      group: "TableItem",
      description: "当前行展开后的详情内容。",
    },
    {
      name: "TableItem.selected",
      type: "boolean",
      group: "TableItem",
      description: "是否以选中态展示当前行。",
    },
    {
      name: "TableItem.disabled",
      type: "boolean",
      group: "TableItem",
      description: "是否禁用当前行交互。",
    },
    {
      name: "TableItem.tone",
      type: '"neutral" | "info" | "success" | "warning" | "danger"',
      group: "TableItem",
      description: "行状态色。",
    },
    {
      name: "TableItem.onClick",
      type: "() => void",
      group: "TableItem",
      description: "点击或键盘触发行时的回调。",
    },
    {
      name: "TableCell.key",
      type: "string",
      group: "TableCell",
      description: "列标识，用于排序状态和稳定渲染。",
    },
    {
      name: "TableCell.label",
      type: "ReactNode",
      required: true,
      group: "TableCell",
      description: "表头内容。",
    },
    {
      name: "TableCell.value",
      type: "ReactNode",
      group: "TableCell",
      description: "单元格内容。",
    },
    {
      name: "TableCell.render",
      type: "ReactNode",
      group: "TableCell",
      description: "自定义单元格内容，优先级高于 value。",
    },
    {
      name: "TableCell.sortValue",
      type: "string | number",
      group: "TableCell",
      description: "排序时使用的值。",
    },
    {
      name: "TableCell.sortable",
      type: "boolean",
      group: "TableCell",
      description: "当前列是否支持排序。",
    },
    {
      name: "TableCell.compare",
      type: "(a: TableCell, b: TableCell, aItem: TableItem, bItem: TableItem) => number",
      group: "TableCell",
      description: "自定义排序函数。",
    },
    {
      name: "TableCell.align",
      type: '"start" | "center" | "end"',
      group: "TableCell",
      description: "单元格和表头对齐方式。",
    },
    {
      name: "TableCell.fixed",
      type: '"left" | "right"',
      group: "TableCell",
      description: "是否固定到左侧或右侧。",
    },
    {
      name: "TableCell.width",
      type: "number | string",
      group: "TableCell",
      description: "列宽。",
    },
    {
      name: "TableCell.rowSpan",
      type: "number",
      group: "TableCell",
      description: "单元格跨行合并数量。",
    },
    {
      name: "TableCell.colSpan",
      type: "number",
      group: "TableCell",
      description: "单元格跨列合并数量。",
    },
    {
      name: "TableCell.hidden",
      type: "boolean",
      group: "TableCell",
      description: "是否隐藏当前列。",
    },
    {
      name: "TableCell.ellipsis",
      type: "boolean",
      group: "TableCell",
      description: "是否截断长文本并通过自定义悬浮提示展示完整内容，默认开启。",
    },
    {
      name: "TableCell.title",
      type: "string",
      group: "TableCell",
      description: "单元格截断时的自定义提示文本。",
    },
    {
      name: "TableRef.scrollTo",
      type: "(options?: ScrollToOptions) => void",
      group: "TableRef",
      description: "滚动表格内部滚动容器到指定位置。",
    },
    {
      name: "TableRef.scrollToTop",
      type: "(behavior?: ScrollBehavior) => void",
      group: "TableRef",
      description: "滚动到表格顶部。",
    },
    {
      name: "TableRef.scrollToLeft",
      type: "(behavior?: ScrollBehavior) => void",
      group: "TableRef",
      description: "滚动到表格左侧。",
    },
    {
      name: "TableRef.scrollToBottom",
      type: "(behavior?: ScrollBehavior) => void",
      group: "TableRef",
      description: "滚动到表格底部。",
    },
  ],
});
