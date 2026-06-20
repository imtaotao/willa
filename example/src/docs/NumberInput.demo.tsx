import { useRef, useState } from "react";
import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";
import { Badge } from "willa/Badge";
import { Button } from "willa/Button";
import { NumberInput } from "willa/NumberInput";
import "willa/Badge.css";
import "willa/Button.css";
import "willa/NumberInput.css";

import { defineDoc } from "#example/catalog/defineDoc";

const stackStyle = {
  display: "grid",
  gap: "0.85rem",
  maxWidth: "34rem",
  marginInline: "auto",
} as const;

const rowStyle = {
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  gap: "0.75rem",
  maxWidth: "42rem",
  marginInline: "auto",
} as const;

const buttonRowStyle = {
  display: "flex",
  flexWrap: "wrap",
  gap: "0.55rem",
} as const;

const fullWidthStackStyle = {
  display: "grid",
  gap: "0.75rem",
  width: "min(100%, 34rem)",
  marginInline: "auto",
} as const;

const SegmentStepperPreview = () => {
  const [seatCount, setSeatCount] = useState<number | null>(6);
  const [guestCount, setGuestCount] = useState<number | null>(5);

  const updateSeatCount = (offset: number) => {
    setSeatCount((currentValue) => clampCount((currentValue ?? 0) + offset));
  };

  const updateGuestCount = (offset: number) => {
    setGuestCount((currentValue) => clampCount((currentValue ?? 0) + offset));
  };

  return (
    <div style={stackStyle}>
      <NumberInput
        value={seatCount}
        min={0}
        max={12}
        controls={false}
        addonBefore={
          <button
            className="willa-number-input-addon-action"
            type="button"
            aria-label="减少席位"
            onClick={() => updateSeatCount(-1)}
          >
            <MinusIcon />
          </button>
        }
        addonAfter={
          <button
            className="willa-number-input-addon-action"
            type="button"
            aria-label="增加席位"
            onClick={() => updateSeatCount(1)}
          >
            <PlusIcon />
          </button>
        }
        aria-label="席位数量"
      />
      <NumberInput
        value={guestCount}
        min={0}
        max={12}
        controls={false}
        addonBefore={
          <button
            className="willa-number-input-addon-action"
            type="button"
            aria-label="减少访客"
            onClick={() => updateGuestCount(-1)}
          >
            <MinusIcon />
          </button>
        }
        addonAfter={
          <button
            className="willa-number-input-addon-action"
            type="button"
            aria-label="增加访客"
            onClick={() => updateGuestCount(1)}
          >
            <PlusIcon />
          </button>
        }
        aria-label="访客数量"
      />
    </div>
  );
};

const ControlledNumberPreview = () => {
  const [temperature, setTemperature] = useState<number | null>(0.7);

  return (
    <div style={stackStyle}>
      <NumberInput
        value={temperature}
        min={0}
        max={2}
        step={0.1}
        precision={1}
        suffix="temp"
        aria-label="模型温度"
        onValueChange={setTemperature}
      />
      <Badge tone="info">
        当前温度：{temperature === null ? "未设置" : temperature.toFixed(1)}
      </Badge>
    </div>
  );
};

const FocusNumberPreview = () => {
  const numberInputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    numberInputRef.current?.focus();
  };

  const focusLast = () => {
    const input = numberInputRef.current;

    input?.focus();
    input?.setSelectionRange(input.value.length, input.value.length);
  };

  const selectInput = () => {
    numberInputRef.current?.select();
  };

  return (
    <div style={fullWidthStackStyle}>
      <div style={buttonRowStyle}>
        <Button variant="outline" onClick={focusInput}>
          Focus
        </Button>
        <Button variant="outline" onClick={focusLast}>
          Focus last
        </Button>
        <Button variant="outline" onClick={selectInput}>
          Select all
        </Button>
      </div>
      <NumberInput
        ref={numberInputRef}
        defaultValue={999}
        controls={false}
        aria-label="可编程聚焦数字"
      />
    </div>
  );
};

const clampCount = (value: number) => {
  return Math.min(12, Math.max(0, value));
};

export default defineDoc({
  id: "number-input",
  name: "NumberInput",
  displayName: "数字输入",
  category: "form",
  packageName: "willa/NumberInput",
  description: "用于价格、数量、比例和模型参数配置的数字输入框。",
  imports: [{ name: "NumberInput", from: "willa/NumberInput" }],
  css: "willa/NumberInput.css",
  demo: {
    name: "NumberInput",
    component: NumberInput,
    props: {
      defaultValue: 80,
      min: 0,
      max: 100,
      suffix: "%",
      width: "16rem",
      "aria-label": "完成度",
    },
  },
  code: `
    import { NumberInput } from "willa/NumberInput";
    import "willa/NumberInput.css";

    <NumberInput
      defaultValue={80}
      min={0}
      max={100}
      suffix="%"
      aria-label="完成度"
    />;
  `,
  sections: [
    {
      title: "基础用法",
      code: `
        <div style={rowStyle}>
          <NumberInput defaultValue={24} aria-label="数量" />
          <NumberInput
            defaultValue={80}
            min={0}
            max={100}
            suffix="%"
            aria-label="完成度"
          />
          <NumberInput
            defaultValue={1}
            step={0.5}
            precision={1}
            suffix="x"
            aria-label="倍率"
          />
          <NumberInput
            defaultValue={12800}
            prefix="￥"
            suffix="RMB"
            step={100}
            formatter={(value) =>
              value === null ? "" : value.toLocaleString("zh-CN")
            }
            parser={(value) => value.replace(/,/g, "")}
            aria-label="预算金额"
          />
        </div>;
      `,
      content: (
        <div style={rowStyle}>
          <NumberInput defaultValue={24} aria-label="数量" />
          <NumberInput
            defaultValue={80}
            min={0}
            max={100}
            suffix="%"
            aria-label="完成度"
          />
          <NumberInput
            defaultValue={1}
            step={0.5}
            precision={1}
            suffix="x"
            aria-label="倍率"
          />
          <NumberInput
            defaultValue={12800}
            prefix="￥"
            suffix="RMB"
            step={100}
            formatter={(value) =>
              value === null ? "" : value.toLocaleString("zh-CN")
            }
            parser={(value) => value.replace(/,/g, "")}
            aria-label="预算金额"
          />
        </div>
      ),
    },
    {
      title: "尺寸",
      code: `
        <div style={rowStyle}>
          <NumberInput
            size="sm"
            defaultValue={12}
            aria-label="小尺寸数字"
          />
          <NumberInput
            size="md"
            defaultValue={24}
            aria-label="默认尺寸数字"
          />
          <NumberInput
            size="lg"
            defaultValue={36}
            aria-label="大尺寸数字"
          />
        </div>;
      `,
      content: (
        <div style={rowStyle}>
          <NumberInput size="sm" defaultValue={12} aria-label="小尺寸数字" />
          <NumberInput size="md" defaultValue={24} aria-label="默认尺寸数字" />
          <NumberInput size="lg" defaultValue={36} aria-label="大尺寸数字" />
        </div>
      ),
    },
    {
      title: "前缀和后缀",
      code: `
        <div style={fullWidthStackStyle}>
          <NumberInput
            defaultValue={12800}
            min={0}
            step={100}
            addonBefore="￥"
            controls={false}
            formatter={(value) =>
              value === null ? "" : value.toLocaleString("zh-CN")
            }
            parser={(value) => value.replace(/,/g, "")}
            aria-label="预算金额"
          />
          <NumberInput
            defaultValue={12800}
            min={0}
            step={100}
            prefix="￥"
            suffix="RMB"
            controls={false}
            formatter={(value) =>
              value === null ? "" : value.toLocaleString("zh-CN")
            }
            parser={(value) => value.replace(/,/g, "")}
            aria-label="预算金额"
          />
          <NumberInput
            defaultValue={0.7}
            min={0}
            max={2}
            step={0.1}
            precision={1}
            suffix="temp"
            controls={false}
            aria-label="模型温度"
          />
        </div>;
      `,
      content: (
        <div style={fullWidthStackStyle}>
          <NumberInput
            defaultValue={12800}
            min={0}
            step={100}
            addonBefore="￥"
            controls={false}
            formatter={(value) =>
              value === null ? "" : value.toLocaleString("zh-CN")
            }
            parser={(value) => value.replace(/,/g, "")}
            aria-label="预算金额"
          />
          <NumberInput
            defaultValue={12800}
            min={0}
            step={100}
            prefix="￥"
            suffix="RMB"
            controls={false}
            formatter={(value) =>
              value === null ? "" : value.toLocaleString("zh-CN")
            }
            parser={(value) => value.replace(/,/g, "")}
            aria-label="预算金额"
          />
          <NumberInput
            defaultValue={0.7}
            min={0}
            max={2}
            step={0.1}
            precision={1}
            suffix="temp"
            controls={false}
            aria-label="模型温度"
          />
        </div>
      ),
    },
    {
      title: "形态和状态",
      code: `
        <div style={stackStyle}>
          <NumberInput
            size="sm"
            defaultValue={12}
            controls={false}
            aria-label="紧凑数字"
          />
          <NumberInput
            variant="filled"
            defaultValue={42}
            controls={false}
            aria-label="填充形态"
          />
          <NumberInput
            variant="underlined"
            defaultValue={64}
            controls={false}
            aria-label="下划线形态"
          />
          <NumberInput
            variant="borderless"
            defaultValue={128}
            controls={false}
            aria-label="无边框形态"
          />
          <NumberInput
            status="warning"
            defaultValue={88}
            controls={false}
            aria-label="警告数字"
          />
          <NumberInput
            status="error"
            defaultValue={108}
            controls={false}
            aria-label="错误数字"
          />
          <NumberInput
            size="lg"
            defaultValue={256}
            disabled
            controls={false}
            aria-label="禁用数字"
          />
        </div>;
      `,
      content: (
        <div style={stackStyle}>
          <NumberInput
            size="sm"
            defaultValue={12}
            controls={false}
            aria-label="紧凑数字"
          />
          <NumberInput
            variant="filled"
            defaultValue={42}
            controls={false}
            aria-label="填充形态"
          />
          <NumberInput
            variant="underlined"
            defaultValue={64}
            controls={false}
            aria-label="下划线形态"
          />
          <NumberInput
            variant="borderless"
            defaultValue={128}
            controls={false}
            aria-label="无边框形态"
          />
          <NumberInput
            status="warning"
            defaultValue={88}
            controls={false}
            aria-label="警告数字"
          />
          <NumberInput
            status="error"
            defaultValue={108}
            controls={false}
            aria-label="错误数字"
          />
          <NumberInput
            size="lg"
            defaultValue={256}
            disabled
            controls={false}
            aria-label="禁用数字"
          />
        </div>
      ),
    },
    {
      title: "分段按钮",
      code: `
        import { useState } from "react";
        import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";
        import { NumberInput } from "willa/NumberInput";
        import "willa/NumberInput.css";

        const Demo = () => {
          const [count, setCount] = useState<number | null>(6);

          return (
            <NumberInput
              value={count}
              min={0}
              max={12}
              controls={false}
              addonBefore={
                <button
                  className="willa-number-input-addon-action"
                  type="button"
                  aria-label="减少"
                  onClick={() =>
                    setCount((value) => Math.max(0, (value ?? 0) - 1))
                  }
                >
                  <MinusIcon />
                </button>
              }
              addonAfter={
                <button
                  className="willa-number-input-addon-action"
                  type="button"
                  aria-label="增加"
                  onClick={() =>
                    setCount((value) => Math.min(12, (value ?? 0) + 1))
                  }
                >
                  <PlusIcon />
                </button>
              }
              aria-label="数量"
            />
          );
        };
      `,
      content: <SegmentStepperPreview />,
    },
    {
      title: "格式化",
      code: `
        <div style={stackStyle}>
          <NumberInput
            defaultValue={12800}
            min={0}
            step={100}
            formatter={(value) =>
              value === null ? "" : \`\${value.toLocaleString("zh-CN")} 元\`
            }
            parser={(value) => value.replace(/[^\\d.-]/g, "")}
            aria-label="预算金额"
          />
          <NumberInput
            defaultValue={0.72}
            min={0}
            max={1}
            step={0.01}
            precision={2}
            formatter={(value) => (value === null ? "" : \`\${value * 100}%\`)}
            parser={(value) => String(Number(value.replace("%", "")) / 100)}
            aria-label="命中率"
          />
        </div>;
      `,
      content: (
        <div style={stackStyle}>
          <NumberInput
            defaultValue={12800}
            min={0}
            step={100}
            formatter={(value) =>
              value === null ? "" : `${value.toLocaleString("zh-CN")} 元`
            }
            parser={(value) => value.replace(/[^\d.-]/g, "")}
            aria-label="预算金额"
          />
          <NumberInput
            defaultValue={0.72}
            min={0}
            max={1}
            step={0.01}
            precision={2}
            formatter={(value) => (value === null ? "" : `${value * 100}%`)}
            parser={(value) => String(Number(value.replace("%", "")) / 100)}
            aria-label="命中率"
          />
        </div>
      ),
    },
    {
      title: "步进控制",
      code: `
        import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";
        import { NumberInput } from "willa/NumberInput";
        import "willa/NumberInput.css";

        <div style={stackStyle}>
          <NumberInput
            defaultValue={10}
            min={0}
            max={20}
            controls={{ upIcon: <PlusIcon />, downIcon: <MinusIcon /> }}
            aria-label="自定义步进图标"
          />
          <NumberInput
            defaultValue={12}
            controls={false}
            keyboard={false}
            aria-label="关闭步进和键盘快捷"
          />
        </div>;
      `,
      content: (
        <div style={stackStyle}>
          <NumberInput
            defaultValue={10}
            min={0}
            max={20}
            controls={{ upIcon: <PlusIcon />, downIcon: <MinusIcon /> }}
            aria-label="自定义步进图标"
          />
          <NumberInput
            defaultValue={12}
            controls={false}
            keyboard={false}
            aria-label="关闭步进和键盘快捷"
          />
        </div>
      ),
    },
    {
      title: "受控",
      code: `
        import { useState } from "react";
        import { Badge } from "willa/Badge";
        import { NumberInput } from "willa/NumberInput";
        import "willa/Badge.css";
        import "willa/NumberInput.css";

        const Demo = () => {
          const [temperature, setTemperature] = useState<number | null>(0.7);

          return (
            <div style={stackStyle}>
              <NumberInput
                value={temperature}
                min={0}
                max={2}
                step={0.1}
                precision={1}
                suffix="temp"
                aria-label="模型温度"
                onValueChange={setTemperature}
              />
              <Badge tone="info">
                当前温度：{temperature === null ? "未设置" : temperature.toFixed(1)}
              </Badge>
            </div>
          );
        };
      `,
      content: <ControlledNumberPreview />,
    },
    {
      title: "聚焦控制",
      code: `
        import { useRef } from "react";
        import { Button } from "willa/Button";
        import { NumberInput } from "willa/NumberInput";
        import "willa/Button.css";
        import "willa/NumberInput.css";

        const Demo = () => {
          const numberInputRef = useRef<HTMLInputElement>(null);

          return (
            <div style={fullWidthStackStyle}>
              <div style={buttonRowStyle}>
                <Button
                  variant="outline"
                  onClick={() => numberInputRef.current?.focus()}
                >
                  Focus
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    const input = numberInputRef.current;

                    input?.focus();
                    input?.setSelectionRange(input.value.length, input.value.length);
                  }}
                >
                  Focus last
                </Button>
                <Button
                  variant="outline"
                  onClick={() => numberInputRef.current?.select()}
                >
                  Select all
                </Button>
              </div>
              <NumberInput
                ref={numberInputRef}
                defaultValue={999}
                controls={false}
                aria-label="可编程聚焦数字"
              />
            </div>
          );
        };
      `,
      content: <FocusNumberPreview />,
    },
  ],
  props: [
    {
      name: "value",
      type: "number | null",
      description: "受控数字值，空输入对应 null。",
    },
    {
      name: "defaultValue",
      type: "number | null",
      defaultValue: "null",
      description: "非受控默认数字值。",
    },
    {
      name: "min",
      type: "number",
      description: "允许输入的最小值，也会作为 spinbutton 的 aria-valuemin。",
    },
    {
      name: "max",
      type: "number",
      description: "允许输入的最大值，也会作为 spinbutton 的 aria-valuemax。",
    },
    {
      name: "step",
      type: "number",
      defaultValue: "1",
      description: "点击步进按钮或按上下方向键时的增减步长。",
    },
    {
      name: "precision",
      type: "number",
      description: "提交数值时保留的小数位数。",
    },
    {
      name: "size",
      type: '"sm" | "md" | "lg"',
      defaultValue: '"md"',
      description: "输入框尺寸，继承 Input 的尺寸体系。",
    },
    {
      name: "width",
      type: "CSSProperties['width']",
      description: "自定义输入框宽度，继承 Input 的宽度设置。",
    },
    {
      name: "disabled",
      type: "boolean",
      defaultValue: "false",
      description: "是否禁用输入和步进操作。",
    },
    {
      name: "readOnly",
      type: "boolean",
      defaultValue: "false",
      description: "是否只读；只读时仍可聚焦，但不会响应步进操作。",
    },
    {
      name: "invalid",
      type: "boolean",
      defaultValue: "false",
      description: "是否展示错误状态，等价于 status 为 error 的视觉效果。",
    },
    {
      name: "changeOnBlur",
      type: "boolean",
      defaultValue: "true",
      description: "失焦时是否把数值约束到 min 和 max 范围内并更新值。",
    },
    {
      name: "controls",
      type: "boolean | { upIcon?: ReactNode; downIcon?: ReactNode }",
      defaultValue: "true",
      description: "是否展示右侧步进按钮，或自定义上下按钮图标。",
    },
    {
      name: "keyboard",
      type: "boolean",
      defaultValue: "true",
      description: "是否启用上下方向键、Home 和 End 的快捷调整。",
    },
    {
      name: "addonBefore",
      type: "ReactNode",
      description: "展示在输入框左侧的分段前缀，适合货币符号或操作按钮。",
    },
    {
      name: "addonAfter",
      type: "ReactNode",
      description: "展示在输入框右侧的分段后缀，适合单位、按钮或组合操作。",
    },
    {
      name: "prefix",
      type: "ReactNode",
      description: "展示在输入框左侧的前缀内容。",
    },
    {
      name: "suffix",
      type: "ReactNode",
      description: "展示在输入框右侧的单位或补充内容。",
    },
    {
      name: "status",
      type: '"error" | "warning"',
      description:
        "校验状态。error 会复用 Input 的错误态，warning 使用警告边框。",
    },
    {
      name: "variant",
      type: '"outline" | "soft" | "filled" | "borderless" | "underlined"',
      defaultValue: '"outline"',
      description:
        "视觉形态，filled 会复用柔和背景，borderless 和 underlined 用于紧凑表单。",
    },
    {
      name: "decimalSeparator",
      type: "string",
      description: "自定义小数分隔符，未传 parser 时会参与默认解析。",
    },
    {
      name: "incrementLabel",
      type: "string",
      defaultValue: '"增加数值"',
      description: "增加按钮的无障碍文案。",
    },
    {
      name: "decrementLabel",
      type: "string",
      defaultValue: '"减少数值"',
      description: "减少按钮的无障碍文案。",
    },
    {
      name: "formatter",
      type: "(value: number | null, info: { userTyping: boolean; input: string }) => string",
      description: "把数字值格式化为展示文本。",
    },
    {
      name: "parser",
      type: "(value: string) => string | number",
      description: "从展示文本中还原可解析的数字字符串。",
    },
    {
      name: "onValueChange",
      type: "(value: number | null) => void",
      description: "数字值变化时触发。",
    },
    {
      name: "onPressEnter",
      type: "(event: KeyboardEvent<HTMLInputElement>) => void",
      description: "按下 Enter 时触发。",
    },
    {
      name: "onStep",
      type: "(value: number, info: { offset: number; type: 'up' | 'down'; emitter: 'handler' | 'keyboard' }) => void",
      description: "点击步进按钮或使用键盘快捷调整数值时触发。",
    },
  ],
});
