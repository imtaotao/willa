import { useRef, useState } from "react";
import { Button } from "willa/Button";
import { Group } from "willa/Group";
import { Rate, type RateRef } from "willa/Rate";
import { Stack } from "willa/Stack";
import "willa/Button.css";
import "willa/Group.css";
import "willa/Rate.css";
import "willa/Stack.css";

import { defineDoc } from "#example/catalog/defineDoc";

const qualityTooltips = ["很差", "一般", "还行", "满意", "推荐"];

const summaryStyle = {
  display: "grid",
  gap: "0.35rem",
  minWidth: "10rem",
  padding: "0.85rem",
  border: "1px solid var(--willa-panel-border)",
  borderRadius: "0.75rem",
  background: "var(--willa-panel-bg)",
} as const;

const metaStyle = {
  color: "var(--willa-text-soft)",
  fontSize: "0.88rem",
  lineHeight: 1.55,
} as const;

const RatePreview = () => {
  const [value, setValue] = useState(3);

  return (
    <Group align="center" gap="lg" wrap>
      <Rate value={value} tooltips={qualityTooltips} onChange={setValue} />
      <div style={summaryStyle}>
        <strong>服务体验</strong>
        <span style={metaStyle}>
          当前 {value} 分，{qualityTooltips[value - 1] ?? "尚未评分"}。
        </span>
      </div>
    </Group>
  );
};

const HalfPreview = () => {
  return (
    <Stack gap="md">
      <Rate allowHalf defaultValue={3.5} />
      <Rate allowHalf defaultValue={2.5} count={7} size="lg" />
    </Stack>
  );
};

const TooltipPreview = () => {
  const [value, setValue] = useState(4);

  return (
    <Group align="center" gap="md" wrap>
      <Rate value={value} tooltips={qualityTooltips} onChange={setValue} />
      <span style={metaStyle}>{qualityTooltips[value - 1]}</span>
    </Group>
  );
};

const ControlledPreview = () => {
  const [value, setValue] = useState(2);

  return (
    <Stack gap="sm">
      <Rate value={value} allowClear onChange={setValue} />
      <Group gap="sm" wrap>
        <Button variant="outline" onClick={() => setValue(0)}>
          清空
        </Button>
        <Button variant="outline" onClick={() => setValue(5)}>
          满分
        </Button>
      </Group>
    </Stack>
  );
};

const CustomCharacterPreview = () => {
  return (
    <Stack gap="md">
      <Rate defaultValue={4} character="赞" />
      <Rate
        allowHalf
        defaultValue={3.5}
        character={({ index }) => <span>{index}</span>}
      />
    </Stack>
  );
};

const DisabledPreview = () => {
  return (
    <Stack gap="md">
      <Rate defaultValue={4} disabled />
      <Rate allowHalf defaultValue={3.5} disabled />
    </Stack>
  );
};

const KeyboardPreview = () => {
  const rateRef = useRef<RateRef>(null);
  const [value, setValue] = useState(3);

  return (
    <Stack gap="sm">
      <Rate ref={rateRef} allowHalf value={value} onChange={setValue} />
      <Group gap="sm" wrap>
        <Button variant="outline" onClick={() => rateRef.current?.focus()}>
          聚焦
        </Button>
        <Button variant="outline" onClick={() => rateRef.current?.blur()}>
          失焦
        </Button>
      </Group>
      <span style={metaStyle}>聚焦后可用方向键、Home 和 End 调整评分。</span>
    </Stack>
  );
};

export default defineDoc({
  id: "rate",
  name: "Rate",
  displayName: "Rate 评分",
  category: "form",
  packageName: "willa/Rate",
  description: "用于评价、满意度和偏好强度选择的评分控件。",
  imports: [{ name: "Rate, type RateRef", from: "willa/Rate" }],
  css: "willa/Rate.css",
  demo: {
    name: "RatePreview",
    component: RatePreview,
  },
  code: `
    import { useState } from "react";

    const qualityTooltips = ["很差", "一般", "还行", "满意", "推荐"];

    const Demo = () => {
      const [value, setValue] = useState(3);

      return (
        <Group align="center" gap="lg" wrap>
          <Rate value={value} tooltips={qualityTooltips} onChange={setValue} />
          <div
            style={{
              display: "grid",
              gap: "0.35rem",
              minWidth: "10rem",
              padding: "0.85rem",
              border: "1px solid var(--willa-panel-border)",
              borderRadius: "0.75rem",
              background: "var(--willa-panel-bg)",
            }}
          >
            <strong>服务体验</strong>
            <span
              style={{
                color: "var(--willa-text-soft)",
                fontSize: "0.88rem",
                lineHeight: 1.55,
              }}
            >
              当前 {value} 分，{qualityTooltips[value - 1] ?? "尚未评分"}。
            </span>
          </div>
        </Group>
      );
    };

    <Demo />;
  `,
  sections: [
    {
      title: "半星与数量",
      content: <HalfPreview />,
      code: `
        <Stack gap="md">
          <Rate allowHalf defaultValue={3.5} />
          <Rate allowHalf defaultValue={2.5} count={7} size="lg" />
        </Stack>;
      `,
    },
    {
      title: "文案提示",
      content: <TooltipPreview />,
      code: `
        const qualityTooltips = ["很差", "一般", "还行", "满意", "推荐"];
        const [value, setValue] = useState(4);

        <Group align="center" gap="md" wrap>
          <Rate value={value} tooltips={qualityTooltips} onChange={setValue} />
          <span>{qualityTooltips[value - 1]}</span>
        </Group>;
      `,
    },
    {
      title: "受控与清除",
      content: <ControlledPreview />,
      code: `
        const [value, setValue] = useState(2);

        <Stack gap="sm">
          <Rate value={value} allowClear onChange={setValue} />
          <Group gap="sm" wrap>
            <Button variant="outline" onClick={() => setValue(0)}>
              清空
            </Button>
            <Button variant="outline" onClick={() => setValue(5)}>
              满分
            </Button>
          </Group>
        </Stack>;
      `,
    },
    {
      title: "自定义字符",
      content: <CustomCharacterPreview />,
      code: `
        <Stack gap="md">
          <Rate defaultValue={4} character="赞" />
          <Rate
            allowHalf
            defaultValue={3.5}
            character={({ index }) => <span>{index}</span>}
          />
        </Stack>;
      `,
    },
    {
      title: "只读状态",
      content: <DisabledPreview />,
      code: `
        <Stack gap="md">
          <Rate defaultValue={4} disabled />
          <Rate allowHalf defaultValue={3.5} disabled />
        </Stack>;
      `,
    },
    {
      title: "键盘与方法",
      content: <KeyboardPreview />,
      code: `
        const rateRef = useRef<RateRef>(null);
        const [value, setValue] = useState(3);

        <Stack gap="sm">
          <Rate ref={rateRef} allowHalf value={value} onChange={setValue} />
          <Group gap="sm" wrap>
            <Button variant="outline" onClick={() => rateRef.current?.focus()}>
              聚焦
            </Button>
            <Button variant="outline" onClick={() => rateRef.current?.blur()}>
              失焦
            </Button>
          </Group>
        </Stack>;
      `,
    },
  ],
  propGroups: [
    {
      title: "值",
      description: "控制评分数值、默认值和表单提交。",
    },
    {
      title: "交互",
      description: "控制清除、半星、键盘、禁用和回调。",
    },
    {
      title: "展示",
      description: "控制图标数量、尺寸、字符和提示文案。",
    },
  ],
  props: [
    {
      name: "value",
      type: "number",
      group: "值",
      description: "受控评分值。",
    },
    {
      name: "defaultValue",
      type: "number",
      defaultValue: "0",
      group: "值",
      description: "非受控默认评分值。",
    },
    {
      name: "name",
      type: "string",
      group: "值",
      description: "表单提交时使用的隐藏 input 名称。",
    },
    {
      name: "allowClear",
      type: "boolean",
      defaultValue: "true",
      group: "交互",
      description: "再次点击当前评分时是否清空。",
    },
    {
      name: "allowHalf",
      type: "boolean",
      defaultValue: "false",
      group: "交互",
      description: "是否允许选择半星。",
    },
    {
      name: "autoFocus",
      type: "boolean",
      defaultValue: "false",
      group: "交互",
      description: "是否自动聚焦。",
    },
    {
      name: "disabled",
      type: "boolean",
      defaultValue: "false",
      group: "交互",
      description: "是否禁用交互。",
    },
    {
      name: "keyboard",
      type: "boolean",
      defaultValue: "true",
      group: "交互",
      description: "是否允许键盘调整评分。",
    },
    {
      name: "onChange",
      type: "(value: number) => void",
      group: "交互",
      description: "评分变化时触发。",
    },
    {
      name: "onHoverChange",
      type: "(value: number) => void",
      group: "交互",
      description: "鼠标悬停评分变化时触发，离开时回传 0。",
    },
    {
      name: "onFocus / onBlur / onKeyDown",
      type: "function",
      group: "交互",
      description: "焦点和键盘事件回调。",
    },
    {
      name: "count",
      type: "number",
      defaultValue: "5",
      group: "展示",
      description: "评分字符数量。",
    },
    {
      name: "size",
      type: '"sm" | "md" | "lg"',
      defaultValue: '"md"',
      group: "展示",
      description: "评分字符尺寸。",
    },
    {
      name: "character",
      type: "ReactNode | ((context: RateCharacterRenderContext) => ReactNode)",
      group: "展示",
      description: "自定义评分字符，函数模式会收到当前项索引和激活状态。",
    },
    {
      name: "tooltips",
      type: "Array<string>",
      group: "展示",
      description: "每一项评分对应的提示文案，同时用于可访问性文案。",
    },
  ],
});
