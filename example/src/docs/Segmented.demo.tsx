import { useState } from "react";
import {
  CodeIcon,
  Component1Icon,
  GearIcon,
  LightningBoltIcon,
} from "@radix-ui/react-icons";
import { Badge } from "willa/Badge";
import { Group } from "willa/Group";
import { Segmented } from "willa/Segmented";
import { Stack } from "willa/Stack";
import "willa/Badge.css";
import "willa/Group.css";
import "willa/Segmented.css";
import "willa/Stack.css";

import { defineDoc } from "#example/catalog/defineDoc";

const viewOptions = [
  { value: "list", label: "列表" },
  { value: "board", label: "看板" },
  { value: "timeline", label: "时间线" },
];

const iconOptions = [
  {
    value: "summary",
    label: "摘要",
    icon: <Component1Icon />,
  },
  {
    value: "code",
    label: "代码",
    icon: <CodeIcon />,
  },
  {
    value: "agent",
    label: "自动化",
    icon: <LightningBoltIcon />,
  },
  {
    value: "settings",
    label: "配置",
    icon: <GearIcon />,
    disabled: true,
  },
];

const densityOptions = [
  { value: "compact", label: "紧凑" },
  { value: "default", label: "默认" },
  { value: "relaxed", label: "宽松" },
];

const reviewItems = [
  {
    title: "同步设计稿",
    owner: "Lina",
    status: "今天",
  },
  {
    title: "补齐验收用例",
    owner: "Grace",
    status: "明天",
  },
  {
    title: "整理发布说明",
    owner: "Kai",
    status: "周五",
  },
];

const ViewModeExample = () => {
  const [value, setValue] = useState("list");
  const currentViewLabel =
    viewOptions.find((option) => option.value === value)?.label ?? value;

  return (
    <Stack gap="md" style={{ width: "min(100%, 38rem)" }}>
      <Group gap="sm" align="center" wrap>
        <Segmented
          ariaLabel="任务视图"
          value={value}
          onValueChange={setValue}
          options={viewOptions}
        />
        <Badge tone="info">当前呈现：{currentViewLabel}</Badge>
      </Group>
      <div
        style={{
          border: "1px solid var(--willa-border)",
          borderRadius: "0.75rem",
          padding: "1rem",
          background: "var(--willa-panel-soft-bg)",
        }}
      >
        <p
          style={{
            margin: "0 0 0.75rem",
            color: "var(--willa-content-muted)",
          }}
        >
          同一组任务数据不会切换面板，只根据当前值改变呈现方式。
        </p>
        {value === "list" ? (
          <Stack gap="sm">
            {reviewItems.map((item) => (
              <div
                key={item.title}
                style={{
                  display: "grid",
                  gridTemplateColumns: "minmax(0, 1fr) auto",
                  gap: "0.75rem",
                  alignItems: "center",
                  padding: "0.75rem",
                  borderRadius: "0.5rem",
                  background: "var(--willa-panel-bg)",
                }}
              >
                <strong>{item.title}</strong>
                <Badge tone="neutral">{item.status}</Badge>
                <span style={{ color: "var(--willa-content-muted)" }}>
                  负责人：{item.owner}
                </span>
              </div>
            ))}
          </Stack>
        ) : null}
        {value === "board" ? (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(8rem, 1fr))",
              gap: "0.75rem",
            }}
          >
            {reviewItems.map((item) => (
              <div
                key={item.title}
                style={{
                  minHeight: "7rem",
                  padding: "0.75rem",
                  border: "1px solid var(--willa-border)",
                  borderRadius: "0.5rem",
                }}
              >
                <strong>{item.title}</strong>
                <p
                  style={{
                    margin: "0.5rem 0 0",
                    color: "var(--willa-content-muted)",
                  }}
                >
                  {item.owner} · {item.status}
                </p>
              </div>
            ))}
          </div>
        ) : null}
        {value === "timeline" ? (
          <Stack gap="sm">
            {reviewItems.map((item) => (
              <div
                key={item.title}
                style={{
                  display: "grid",
                  gridTemplateColumns: "4rem minmax(0, 1fr)",
                  gap: "0.75rem",
                  alignItems: "center",
                }}
              >
                <Badge tone="info">{item.status}</Badge>
                <span>
                  <strong>{item.title}</strong>
                  <span style={{ color: "var(--willa-content-muted)" }}>
                    {" "}
                    / {item.owner}
                  </span>
                </span>
              </div>
            ))}
          </Stack>
        ) : null}
      </div>
    </Stack>
  );
};

const ControlledSegmentedExample = () => {
  const [value, setValue] = useState("balanced");

  return (
    <Stack gap="sm" style={{ maxWidth: "28rem" }}>
      <Segmented
        ariaLabel="模型输出模式"
        value={value}
        onValueChange={setValue}
        options={[
          { value: "fast", label: "快速" },
          { value: "balanced", label: "均衡" },
          { value: "precise", label: "精确" },
        ]}
      />
      <Badge tone="info">当前模式：{value}</Badge>
    </Stack>
  );
};

const MultiSegmentedExample = () => {
  const [values, setValues] = useState(["comments", "changes"]);
  const visibleValues = new Set(values);

  return (
    <Stack gap="md" style={{ width: "min(100%, 36rem)" }}>
      <Segmented
        selectionMode="multiple"
        ariaLabel="审核信息显示"
        values={values}
        onValuesChange={setValues}
        options={[
          { value: "comments", label: "评论" },
          { value: "changes", label: "变更" },
          { value: "timeline", label: "时间线" },
        ]}
      />
      <div
        style={{
          display: "grid",
          gap: "0.75rem",
          border: "1px solid var(--willa-border)",
          borderRadius: "0.75rem",
          padding: "1rem",
        }}
      >
        <strong>组件发布 Review</strong>
        {visibleValues.has("comments") ? (
          <div style={{ color: "var(--willa-content-muted)" }}>
            评论：需要补一条移动端验证截图。
          </div>
        ) : null}
        {visibleValues.has("changes") ? (
          <div style={{ color: "var(--willa-content-muted)" }}>
            变更：新增 Segmented、补充 demo、更新 Tabs 边界。
          </div>
        ) : null}
        {visibleValues.has("timeline") ? (
          <div style={{ color: "var(--willa-content-muted)" }}>
            时间线：草稿 → Review → 合并。
          </div>
        ) : null}
        {!values.length ? <Badge tone="neutral">暂无可见信息块</Badge> : null}
      </div>
    </Stack>
  );
};

export default defineDoc({
  id: "segmented",
  name: "Segmented",
  packageName: "willa/Segmented",
  description:
    "用于在同一上下文中切换单选或多选的视图、模式和筛选维度；不负责渲染内容面板。",
  imports: [
    { name: "Badge", from: "willa/Badge" },
    { name: "Segmented", from: "willa/Segmented" },
    { name: "Group", from: "willa/Group" },
    { name: "Stack", from: "willa/Stack" },
  ],
  css: "willa/Segmented.css",
  demo: {
    name: "Segmented",
    component: Segmented,
    props: {
      ariaLabel: "视图模式",
      options: viewOptions,
    },
  },
  code: `
    import { Segmented } from "willa/Segmented";
    import "willa/Segmented.css";

    <Segmented
      ariaLabel="视图模式"
      options={[
        { value: "list", label: "列表" },
        { value: "board", label: "看板" },
        { value: "timeline", label: "时间线" },
      ]}
    />;
  `,
  sections: [
    {
      title: "基础用法",
      code: `
        import { useState } from "react";
        import { Segmented } from "willa/Segmented";
        import "willa/Segmented.css";

        const Demo = () => {
          const [view, setView] = useState("list");

          return (
            <>
              <Segmented
                ariaLabel="任务视图"
                value={view}
                onValueChange={setView}
                options={[
                  { value: "list", label: "列表" },
                  { value: "board", label: "看板" },
                  { value: "timeline", label: "时间线" },
                ]}
              />
              {/* 同一组任务根据 view 切换呈现方式。 */}
            </>
          );
        };
      `,
      content: <ViewModeExample />,
    },
    {
      title: "图标和禁用",
      code: `
        import {
          CodeIcon,
          Component1Icon,
          GearIcon,
          LightningBoltIcon,
        } from "@radix-ui/react-icons";

        <Segmented
          ariaLabel="输出类型"
          defaultValue="code"
          options={[
            { value: "summary", label: "摘要", icon: <Component1Icon /> },
            { value: "code", label: "代码", icon: <CodeIcon /> },
            { value: "agent", label: "自动化", icon: <LightningBoltIcon /> },
            { value: "settings", label: "配置", icon: <GearIcon />, disabled: true },
          ]}
        />;
      `,
      content: (
        <Segmented
          ariaLabel="输出类型"
          defaultValue="code"
          options={iconOptions}
        />
      ),
    },
    {
      title: "尺寸",
      code: `
        <Stack gap="sm">
          <Segmented size="sm" ariaLabel="小尺寸密度" options={densityOptions} />
          <Segmented ariaLabel="默认密度" options={densityOptions} />
          <Segmented size="lg" ariaLabel="大尺寸密度" options={densityOptions} />
        </Stack>;
      `,
      content: (
        <Stack gap="sm">
          <Segmented
            size="sm"
            ariaLabel="小尺寸密度"
            options={densityOptions}
          />
          <Segmented ariaLabel="默认密度" options={densityOptions} />
          <Segmented
            size="lg"
            ariaLabel="大尺寸密度"
            options={densityOptions}
          />
        </Stack>
      ),
    },
    {
      title: "块级铺满",
      code: `
        <Segmented
          block
          ariaLabel="报告范围"
          options={[
            { value: "daily", label: "日报" },
            { value: "weekly", label: "周报" },
            { value: "monthly", label: "月报" },
          ]}
        />;
      `,
      content: (
        <div style={{ width: "min(100%, 32rem)" }}>
          <Segmented
            block
            ariaLabel="报告范围"
            options={[
              { value: "daily", label: "日报" },
              { value: "weekly", label: "周报" },
              { value: "monthly", label: "月报" },
            ]}
          />
        </div>
      ),
    },
    {
      title: "受控模式",
      code: `
        import { useState } from "react";
        import { Badge } from "willa/Badge";
        import { Segmented } from "willa/Segmented";
        import { Stack } from "willa/Stack";
        import "willa/Badge.css";
        import "willa/Segmented.css";
        import "willa/Stack.css";

        const Demo = () => {
          const [value, setValue] = useState("balanced");

          return (
            <Stack gap="sm">
              <Segmented
                ariaLabel="模型输出模式"
                value={value}
                onValueChange={setValue}
                options={[
                  { value: "fast", label: "快速" },
                  { value: "balanced", label: "均衡" },
                  { value: "precise", label: "精确" },
                ]}
              />
              <Badge tone="info">当前模式：{value}</Badge>
            </Stack>
          );
        };
      `,
      content: <ControlledSegmentedExample />,
    },
    {
      title: "多选模式",
      code: `
        import { useState } from "react";
        import { Segmented } from "willa/Segmented";
        import { Stack } from "willa/Stack";
        import "willa/Segmented.css";
        import "willa/Stack.css";

        const Demo = () => {
          const [values, setValues] = useState(["comments", "changes"]);

          return (
            <Stack gap="sm">
              <Segmented
                selectionMode="multiple"
                ariaLabel="面板可见性"
                values={values}
                onValuesChange={setValues}
                options={[
                  { value: "comments", label: "评论" },
                  { value: "changes", label: "变更" },
                  { value: "timeline", label: "时间线" },
                ]}
              />
              {/* 同一个 Review 卡片根据 values 显示或隐藏信息块。 */}
            </Stack>
          );
        };
      `,
      content: <MultiSegmentedExample />,
    },
    {
      title: "使用边界",
      code: `
        <Group gap="sm" wrap>
          <Badge tone="info">Segmented：切换当前值</Badge>
          <Badge tone="neutral">Tabs：切换内容面板</Badge>
        </Group>;
      `,
      content: (
        <Stack gap="sm">
          <Group gap="sm" wrap>
            <Badge tone="info">
              Segmented：单选或多选的视图、模式、密度、筛选维度
            </Badge>
            <Badge tone="neutral">Tabs：内容分组、示例代码、文档面板</Badge>
          </Group>
          <p style={{ margin: 0, color: "var(--willa-content-muted)" }}>
            当切换结果只改变一个业务值时使用
            Segmented；当每个选项背后都有独立内容区域时使用 Tabs。
          </p>
        </Stack>
      ),
    },
  ],
  props: [
    {
      name: "selectionMode",
      type: '"single" | "multiple"',
      defaultValue: '"single"',
      description: "选择模式。单选用于互斥值，多选用于开关一组并列能力。",
    },
    {
      name: "options",
      type: "Array<SegmentedOption>",
      required: true,
      description: "分段选项列表。",
    },
    {
      name: "value",
      type: "string",
      description: "当前选中的值，传入后组件进入受控模式。",
    },
    {
      name: "defaultValue",
      type: "string",
      defaultValue: "第一个可用项",
      description: "非受控模式下的默认选中值。",
    },
    {
      name: "onValueChange",
      type: "(value: string) => void",
      description: "单选模式下选中值变化时触发。",
    },
    {
      name: "values",
      type: "Array<string>",
      description: "多选模式下当前选中的值列表，传入后组件进入受控模式。",
    },
    {
      name: "defaultValues",
      type: "Array<string>",
      defaultValue: "[]",
      description: "多选模式下非受控默认选中值列表。",
    },
    {
      name: "onValuesChange",
      type: "(values: Array<string>) => void",
      description: "多选模式下选中值列表变化时触发。",
    },
    {
      name: "size",
      type: '"sm" | "md" | "lg"',
      defaultValue: '"md"',
      description: "分段控件尺寸。",
    },
    {
      name: "block",
      type: "boolean",
      defaultValue: "false",
      description: "是否铺满父容器宽度。",
    },
    {
      name: "disabled",
      type: "boolean",
      defaultValue: "false",
      description: "是否禁用整个控件。",
    },
    {
      name: "ariaLabel",
      type: "string",
      description: "无可见标题时提供控件名称。",
    },
    {
      name: "ariaLabelledBy",
      type: "string",
      description: "关联外部标题元素作为控件名称。",
    },
    {
      name: "SegmentedOption.value",
      type: "string",
      required: true,
      description: "选项值。",
    },
    {
      name: "SegmentedOption.label",
      type: "ReactNode",
      required: true,
      description: "选项展示内容。",
    },
    {
      name: "SegmentedOption.icon",
      type: "ReactNode",
      description: "展示在文案前的图标。",
    },
    {
      name: "SegmentedOption.disabled",
      type: "boolean",
      defaultValue: "false",
      description: "是否禁用当前选项。",
    },
    {
      name: "SegmentedOption.ariaLabel",
      type: "string",
      description: "选项仅用图标或文案不够明确时提供无障碍名称。",
    },
  ],
});
