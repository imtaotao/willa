import { useState } from "react";
import { Badge } from "willa/Badge";
import "willa/Badge.css";
import { Button } from "willa/Button";
import "willa/Button.css";
import { FilterBar, type FilterBarItem } from "willa/FilterBar";
import "willa/FilterBar.css";
import { Group } from "willa/Group";
import "willa/Group.css";
import { SearchInput } from "willa/SearchInput";
import "willa/SearchInput.css";
import { Select } from "willa/Select";
import "willa/Select.css";
import { Stack } from "willa/Stack";
import "willa/Stack.css";
import { Table, type TableItem } from "willa/Table";
import "willa/Table.css";

import { defineDoc } from "#example/catalog/defineDoc";

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

export default defineDoc({
  id: "table",
  name: "Table",
  packageName: "willa/Table",
  description:
    "通过 items 渲染表格和产品数据列表，支持自定义单元格、排序、选择、分页、展开行和右侧操作区。",
  imports: [
    { name: "Table", from: "willa/Table" },
    { name: "Stack", from: "willa/Stack" },
    { name: "Group", from: "willa/Group" },
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
      title: "搜索与筛选",
      code: `
        import { useState } from "react";
        import { Button } from "willa/Button";
        import { FilterBar, type FilterBarItem } from "willa/FilterBar";
        import { SearchInput } from "willa/SearchInput";
        import { Select } from "willa/Select";
        import { Table, type TableItem } from "willa/Table";
        import "willa/Button.css";
        import "willa/FilterBar.css";
        import "willa/SearchInput.css";
        import "willa/Select.css";
        import "willa/Table.css";

        const Demo = () => {
          const [keyword, setKeyword] = useState("");
          const [owner, setOwner] = useState("all");
          const filteredItems = items.filter((item) => {
            const text = item.cells.map((cell) => cell.value ?? "").join(" ");
            const itemOwner = item.cells.find((cell) => cell.key === "owner")?.value;

            return (
              text.toLowerCase().includes(keyword.toLowerCase()) &&
              (owner === "all" || itemOwner === owner)
            );
          });
          const filters: Array<FilterBarItem> = [
            {
              id: "owner",
              width: "10rem",
              control: (
                <Select
                  value={owner}
                  options={[
                    { value: "all", label: "全部归属" },
                    { value: "AI", label: "AI" },
                    { value: "Form", label: "Form" },
                    { value: "Content", label: "Content" },
                  ]}
                  width="100%"
                  onValueChange={setOwner}
                />
              ),
            },
          ];

          return (
            <Stack width="min(100%, 72rem)" style={{ marginInline: "auto" }}>
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
                    items={filters}
                    actions={
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => {
                          setKeyword("");
                          setOwner("all");
                        }}
                      >
                        重置
                      </Button>
                    }
                    summary={\`匹配 \${filteredItems.length} 个组件。\`}
                  />
                }
                caption="组件筛选结果"
                items={filteredItems}
                empty="没有匹配的组件"
                stickyActions
                footer={\`当前展示 \${filteredItems.length} 个组件。\`}
              />
            </Stack>
          );
        };
      `,
      content: <FilterableTablePreview />,
    },
    {
      title: "基础表格",
      code: `
        const items = [
          {
            key: "prompt-input",
            cells: [
              { key: "name", label: "组件", value: "PromptInput", sortable: true },
              { key: "owner", label: "归属", value: "AI" },
              {
                key: "status",
                label: "状态",
                render: <Badge tone="success">稳定</Badge>,
              },
              {
                key: "coverage",
                label: "覆盖能力",
                value: "输入、提交、禁用、自动高度和辅助信息",
              },
            ],
            actions: (
              <Button size="sm" variant="ghost">
                查看
              </Button>
            ),
          },
        ];

        <Table
          caption="组件能力覆盖表"
          items={items}
          defaultSort={{ key: "name", direction: "asc" }}
        />;
      `,
      content: (
        <Table
          caption="组件能力覆盖表"
          items={componentItems}
          defaultSort={{ key: "name", direction: "asc" }}
        />
      ),
    },
    {
      title: "选择与固定操作列",
      code: `
        const items = [
          {
            key: "prompt-input",
            cells: [
              { key: "name", label: "组件", value: "PromptInput" },
              { key: "owner", label: "归属", value: "AI" },
              {
                key: "coverage",
                label: "覆盖能力",
                value: "输入、提交、禁用、自动高度和辅助信息",
              },
            ],
            actions: (
              <Button size="sm" variant="ghost">
                查看
              </Button>
            ),
          },
        ];

        <Table
          caption="横向滚动时保留操作入口"
          items={items}
          selectionMode="multiple"
          stickyActions
          actionsWidth="5.6rem"
        />;
      `,
      content: (
        <Table
          caption="横向滚动时保留操作入口"
          items={componentItems}
          selectionMode="multiple"
          stickyActions
          actionsWidth="5.6rem"
        />
      ),
    },
    {
      title: "分页与展开",
      code: `
        const items = [
          {
            key: "prompt-input",
            cells: [
              { key: "name", label: "组件", value: "PromptInput" },
              { key: "owner", label: "归属", value: "AI" },
            ],
            expanded: "PromptInput 适合作为 AI 对话、智能搜索和生成任务的输入入口。",
          },
          {
            key: "upload",
            cells: [
              { key: "name", label: "组件", value: "Upload" },
              { key: "owner", label: "归属", value: "Form" },
            ],
          },
        ];

        <Table
          caption="分页后仍可展开查看详情"
          items={items}
          defaultExpandedKeys={["prompt-input"]}
          pagination={{ pageSize: 2 }}
        />;
      `,
      content: (
        <Table
          caption="分页后仍可展开查看详情"
          items={componentItems}
          defaultExpandedKeys={["prompt-input"]}
          pagination={{ pageSize: 2 }}
        />
      ),
    },
    {
      title: "自定义单元格",
      code: `
        const items = [
          {
            key: "feedback-summary",
            cells: [
              {
                key: "task",
                label: "任务",
                value: "产品反馈摘要生成",
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
          },
        ];

        <Table caption="自定义渲染和溢出提示" items={items} stickyActions />;
      `,
      content: (
        <Table
          caption="自定义渲染和溢出提示"
          items={customRenderItems}
          stickyActions
        />
      ),
    },
    {
      title: "加载与空态",
      code: `
        <Stack gap="lg">
          <Table items={[]} loading loadingText="正在同步组件状态..." />
          <Table items={[]} empty="没有匹配的组件" />
        </Stack>;
      `,
      content: (
        <Stack gap="lg">
          <Table items={[]} loading loadingText="正在同步组件状态..." />
          <Table items={[]} empty="没有匹配的组件" />
        </Stack>
      ),
    },
    {
      title: "紧凑尺寸",
      code: `
        const items = [
          {
            key: "mobile",
            cells: [
              { key: "task", label: "任务", value: "移动端校验" },
              { key: "owner", label: "负责人", value: "Design" },
              { key: "progress", label: "进度", value: "82%", align: "end" },
            ],
          },
        ];

        <Table size="sm" items={items} />;
      `,
      content: <Table size="sm" items={compactItems} />,
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
      name: "actionsLabel",
      type: "ReactNode",
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
      description: "默认选中行 key。",
    },
    {
      name: "onSelectionChange",
      type: "(keys: Array<string | number>) => void",
      description: "行选择变化回调。",
    },
    {
      name: "expandedKeys",
      type: "Array<string | number>",
      description: "受控展开行 key。",
    },
    {
      name: "defaultExpandedKeys",
      type: "Array<string | number>",
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
      name: "TableCell.width",
      type: "number | string",
      group: "TableCell",
      description: "列宽。",
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
  ],
});
