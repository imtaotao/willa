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
        constraints={{ min: 0, max: 12 }}
        stepper={{ controls: false }}
        slots={{
          addonBefore: (
            <button
              className="willa-number-input-addon-action"
              type="button"
              aria-label="减少席位"
              onClick={() => updateSeatCount(-1)}
            >
              <MinusIcon />
            </button>
          ),
          addonAfter: (
            <button
              className="willa-number-input-addon-action"
              type="button"
              aria-label="增加席位"
              onClick={() => updateSeatCount(1)}
            >
              <PlusIcon />
            </button>
          ),
        }}
        aria-label="席位数量"
      />
      <NumberInput
        value={guestCount}
        constraints={{ min: 0, max: 12 }}
        stepper={{ controls: false }}
        slots={{
          addonBefore: (
            <button
              className="willa-number-input-addon-action"
              type="button"
              aria-label="减少访客"
              onClick={() => updateGuestCount(-1)}
            >
              <MinusIcon />
            </button>
          ),
          addonAfter: (
            <button
              className="willa-number-input-addon-action"
              type="button"
              aria-label="增加访客"
              onClick={() => updateGuestCount(1)}
            >
              <PlusIcon />
            </button>
          ),
        }}
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
        constraints={{ min: 0, max: 2, precision: 1 }}
        stepper={{ step: 0.1 }}
        slots={{ suffix: "temp" }}
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
        stepper={{ controls: false }}
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
      constraints: { min: 0, max: 100 },
      slots: { suffix: "%" },
      width: "16rem",
      "aria-label": "完成度",
    },
  },
  code: `
    import { NumberInput } from "willa/NumberInput";
    import "willa/NumberInput.css";

    <NumberInput
      defaultValue={80}
      constraints={{ min: 0, max: 100 }}
      slots={{ suffix: "%" }}
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
            constraints={{ min: 0, max: 100 }}
            slots={{ suffix: "%" }}
            aria-label="完成度"
          />
          <NumberInput
            defaultValue={1}
            constraints={{ precision: 1 }}
            stepper={{ step: 0.5 }}
            slots={{ suffix: "x" }}
            aria-label="倍率"
          />
          <NumberInput
            defaultValue={12800}
            stepper={{ step: 100 }}
            slots={{ prefix: "￥", suffix: "RMB" }}
            format={{
              formatter: (value) =>
                value === null ? "" : value.toLocaleString("zh-CN"),
              parser: (value) => value.replace(/,/g, ""),
            }}
            aria-label="预算金额"
          />
        </div>;
      `,
      content: (
        <div style={rowStyle}>
          <NumberInput defaultValue={24} aria-label="数量" />
          <NumberInput
            defaultValue={80}
            constraints={{ min: 0, max: 100 }}
            slots={{ suffix: "%" }}
            aria-label="完成度"
          />
          <NumberInput
            defaultValue={1}
            constraints={{ precision: 1 }}
            stepper={{ step: 0.5 }}
            slots={{ suffix: "x" }}
            aria-label="倍率"
          />
          <NumberInput
            defaultValue={12800}
            stepper={{ step: 100 }}
            slots={{ prefix: "￥", suffix: "RMB" }}
            format={{
              formatter: (value) =>
                value === null ? "" : value.toLocaleString("zh-CN"),
              parser: (value) => value.replace(/,/g, ""),
            }}
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
            constraints={{ min: 0 }}
            stepper={{ step: 100, controls: false }}
            slots={{ addonBefore: "￥" }}
            format={{
              formatter: (value) =>
                value === null ? "" : value.toLocaleString("zh-CN"),
              parser: (value) => value.replace(/,/g, ""),
            }}
            aria-label="预算金额"
          />
          <NumberInput
            defaultValue={12800}
            constraints={{ min: 0 }}
            stepper={{ step: 100, controls: false }}
            slots={{ prefix: "￥", suffix: "RMB" }}
            format={{
              formatter: (value) =>
                value === null ? "" : value.toLocaleString("zh-CN"),
              parser: (value) => value.replace(/,/g, ""),
            }}
            aria-label="预算金额"
          />
          <NumberInput
            defaultValue={0.7}
            constraints={{ min: 0, max: 2, precision: 1 }}
            stepper={{ step: 0.1, controls: false }}
            slots={{ suffix: "temp" }}
            aria-label="模型温度"
          />
        </div>;
      `,
      content: (
        <div style={fullWidthStackStyle}>
          <NumberInput
            defaultValue={12800}
            constraints={{ min: 0 }}
            stepper={{ step: 100, controls: false }}
            slots={{ addonBefore: "￥" }}
            format={{
              formatter: (value) =>
                value === null ? "" : value.toLocaleString("zh-CN"),
              parser: (value) => value.replace(/,/g, ""),
            }}
            aria-label="预算金额"
          />
          <NumberInput
            defaultValue={12800}
            constraints={{ min: 0 }}
            stepper={{ step: 100, controls: false }}
            slots={{ prefix: "￥", suffix: "RMB" }}
            format={{
              formatter: (value) =>
                value === null ? "" : value.toLocaleString("zh-CN"),
              parser: (value) => value.replace(/,/g, ""),
            }}
            aria-label="预算金额"
          />
          <NumberInput
            defaultValue={0.7}
            constraints={{ min: 0, max: 2, precision: 1 }}
            stepper={{ step: 0.1, controls: false }}
            slots={{ suffix: "temp" }}
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
              stepper={{ controls: false }}
              aria-label="紧凑数字"
            />
            <NumberInput
              variant="filled"
              defaultValue={42}
              stepper={{ controls: false }}
              aria-label="填充形态"
            />
            <NumberInput
              variant="underlined"
              defaultValue={64}
              stepper={{ controls: false }}
              aria-label="下划线形态"
            />
            <NumberInput
              variant="borderless"
              defaultValue={128}
              stepper={{ controls: false }}
              aria-label="无边框形态"
            />
            <NumberInput
              status="warning"
              defaultValue={88}
              stepper={{ controls: false }}
              aria-label="警告数字"
            />
            <NumberInput
              status="error"
              defaultValue={108}
              stepper={{ controls: false }}
              aria-label="错误数字"
            />
            <NumberInput
              size="lg"
              defaultValue={256}
              disabled
              stepper={{ controls: false }}
              aria-label="禁用数字"
            />
        </div>;
      `,
      content: (
        <div style={stackStyle}>
          <NumberInput
            size="sm"
            defaultValue={12}
            stepper={{ controls: false }}
            aria-label="紧凑数字"
          />
          <NumberInput
            variant="filled"
            defaultValue={42}
            stepper={{ controls: false }}
            aria-label="填充形态"
          />
          <NumberInput
            variant="underlined"
            defaultValue={64}
            stepper={{ controls: false }}
            aria-label="下划线形态"
          />
          <NumberInput
            variant="borderless"
            defaultValue={128}
            stepper={{ controls: false }}
            aria-label="无边框形态"
          />
          <NumberInput
            status="warning"
            defaultValue={88}
            stepper={{ controls: false }}
            aria-label="警告数字"
          />
          <NumberInput
            status="error"
            defaultValue={108}
            stepper={{ controls: false }}
            aria-label="错误数字"
          />
          <NumberInput
            size="lg"
            defaultValue={256}
            disabled
            stepper={{ controls: false }}
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
              constraints={{ min: 0, max: 12 }}
              stepper={{ controls: false }}
              slots={{
                addonBefore: (
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
                ),
                addonAfter: (
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
                ),
              }}
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
            constraints={{ min: 0 }}
            stepper={{ step: 100 }}
            format={{
              formatter: (value) =>
                value === null ? "" : \`\${value.toLocaleString("zh-CN")} 元\`,
              parser: (value) => value.replace(/[^\\d.-]/g, ""),
            }}
            aria-label="预算金额"
          />
          <NumberInput
            defaultValue={0.72}
            constraints={{ min: 0, max: 1, precision: 2 }}
            stepper={{ step: 0.01 }}
            format={{
              formatter: (value) =>
                value === null ? "" : \`\${value * 100}%\`,
              parser: (value) => String(Number(value.replace("%", "")) / 100),
            }}
            aria-label="命中率"
          />
        </div>;
      `,
      content: (
        <div style={stackStyle}>
          <NumberInput
            defaultValue={12800}
            constraints={{ min: 0 }}
            stepper={{ step: 100 }}
            format={{
              formatter: (value) =>
                value === null ? "" : `${value.toLocaleString("zh-CN")} 元`,
              parser: (value) => value.replace(/[^\d.-]/g, ""),
            }}
            aria-label="预算金额"
          />
          <NumberInput
            defaultValue={0.72}
            constraints={{ min: 0, max: 1, precision: 2 }}
            stepper={{ step: 0.01 }}
            format={{
              formatter: (value) => (value === null ? "" : `${value * 100}%`),
              parser: (value) => String(Number(value.replace("%", "")) / 100),
            }}
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
            constraints={{ min: 0, max: 20 }}
            stepper={{
              controls: { upIcon: <PlusIcon />, downIcon: <MinusIcon /> },
            }}
            aria-label="自定义步进图标"
          />
          <NumberInput
            defaultValue={12}
            stepper={{ controls: false }}
            behavior={{ keyboard: false }}
            aria-label="关闭步进和键盘快捷"
          />
        </div>;
      `,
      content: (
        <div style={stackStyle}>
          <NumberInput
            defaultValue={10}
            constraints={{ min: 0, max: 20 }}
            stepper={{
              controls: { upIcon: <PlusIcon />, downIcon: <MinusIcon /> },
            }}
            aria-label="自定义步进图标"
          />
          <NumberInput
            defaultValue={12}
            stepper={{ controls: false }}
            behavior={{ keyboard: false }}
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
                constraints={{ min: 0, max: 2, precision: 1 }}
                stepper={{ step: 0.1 }}
                slots={{ suffix: "temp" }}
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
                stepper={{ controls: false }}
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
      name: "constraints",
      type: "{ min?: number; max?: number; precision?: number }",
      description:
        "数值约束。min 和 max 同时作为 spinbutton 的 aria-valuemin / aria-valuemax；precision 控制提交时保留的小数位数。",
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
      name: "stepper",
      type: "{ step?: number; controls?: boolean | { upIcon?: ReactNode; downIcon?: ReactNode; incrementLabel?: string; decrementLabel?: string }; onStep?: (value: number, info: NumberInputStepInfo) => void }",
      description:
        "步进配置。step 控制增减步长；controls 控制右侧步进按钮和图标；onStep 在按钮或键盘步进时触发。",
    },
    {
      name: "behavior",
      type: "{ changeOnBlur?: boolean; keyboard?: boolean; onPressEnter?: (event: KeyboardEvent<HTMLInputElement>) => void }",
      description:
        "交互行为。changeOnBlur 控制失焦时是否夹取到 min/max；keyboard 控制方向键、Home 和 End；onPressEnter 处理 Enter。",
    },
    {
      name: "format",
      type: "{ decimalSeparator?: string; formatter?: (value: number | null) => string; parser?: (value: string) => string | number }",
      description:
        "格式化配置。formatter 把数字转为展示文本，parser 从展示文本还原数字，小数分隔符在默认解析时生效。",
    },
    {
      name: "slots",
      type: "{ addonBefore?: ReactNode; addonAfter?: ReactNode; prefix?: ReactNode; suffix?: ReactNode }",
      description:
        "输入框周边内容。addonBefore / addonAfter 用于分段区域，prefix / suffix 用于内联前后缀。",
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
      name: "onValueChange",
      type: "(value: number | null) => void",
      description: "数字值变化时触发。",
    },
  ],
});
