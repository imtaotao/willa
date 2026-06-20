import { useState } from "react";
import { RangeInput } from "willa/RangeInput";
import "willa/RangeInput.css";

import { defineDoc } from "#example/catalog/defineDoc";

const stackStyle = {
  display: "grid",
  gap: "0.85rem",
  width: "min(100%, 28rem)",
} as const;

const compactRowStyle = {
  display: "flex",
  alignItems: "center",
  gap: "0.72rem",
} as const;

const RangeInputPreview = () => {
  const [strength, setStrength] = useState(60);
  const [temperature, setTemperature] = useState(0.7);

  return (
    <div style={stackStyle}>
      <RangeInput
        min={0}
        max={100}
        step={1}
        value={strength}
        width="18rem"
        height="0.5rem"
        color="#3b82f6"
        trackColor="rgba(59, 130, 246, 0.18)"
        showValue
        formatValue={(value) => `${value}%`}
        aria-label="生成强度"
        onChange={(event) => setStrength(Number(event.currentTarget.value))}
      />
      <RangeInput
        min={0}
        max={1}
        step={0.1}
        value={temperature}
        color="#14b8a6"
        thumbBorderColor="#0f766e"
        thumbColor="#ecfeff"
        thumbSize="1.2rem"
        trackColor="rgba(20, 184, 166, 0.18)"
        showValue
        formatValue={(value) => value.toFixed(1)}
        marks={[
          { value: 0, label: "保守" },
          { value: 0.5, label: "均衡" },
          { value: 1, label: "发散" },
        ]}
        aria-label="温度"
        onChange={(event) => setTemperature(Number(event.currentTarget.value))}
      />
    </div>
  );
};

export default defineDoc({
  id: "range-input",
  name: "RangeInput",
  category: "form",
  packageName: "willa/RangeInput",
  description: "用于模型参数、音视频进度和数值配置的范围输入。",
  imports: [{ name: "RangeInput", from: "willa/RangeInput" }],
  css: "willa/RangeInput.css",
  demo: {
    name: "RangeInputPreview",
    component: RangeInputPreview,
  },
  code: `
    import { RangeInput } from "willa/RangeInput";
    import "willa/RangeInput.css";

    <RangeInput
      min={0}
      max={100}
      step={1}
      defaultValue={60}
      showValue
      formatValue={(value) => \`\${value}%\`}
      aria-label="生成强度"
    />;
  `,
  sections: [
    {
      title: "尺寸",
      code: `
        <div style={stackStyle}>
          <RangeInput size="sm" defaultValue={35} showValue aria-label="小尺寸" />
          <RangeInput size="md" defaultValue={50} showValue aria-label="中尺寸" />
          <RangeInput size="lg" defaultValue={72} showValue aria-label="大尺寸" />
        </div>;
      `,
      content: (
        <div style={stackStyle}>
          <RangeInput
            size="sm"
            defaultValue={35}
            showValue
            aria-label="小尺寸"
          />
          <RangeInput
            size="md"
            defaultValue={50}
            showValue
            aria-label="中尺寸"
          />
          <RangeInput
            size="lg"
            defaultValue={72}
            showValue
            aria-label="大尺寸"
          />
        </div>
      ),
    },
    {
      title: "值展示和格式化",
      code: `
        <div style={stackStyle}>
          <RangeInput
            defaultValue={72}
            showValue
            formatValue={(value) => \`\${value}%\`}
            aria-label="完成度"
          />
          <RangeInput
            min={0}
            max={2}
            step={0.1}
            defaultValue={0.8}
            showValue
            formatValue={(value) => \`温度 \${value.toFixed(1)}\`}
            color="#0f766e"
            aria-label="温度"
          />
        </div>;
      `,
      content: (
        <div style={stackStyle}>
          <RangeInput
            defaultValue={72}
            showValue
            formatValue={(value) => `${value}%`}
            aria-label="完成度"
          />
          <RangeInput
            min={0}
            max={2}
            step={0.1}
            defaultValue={0.8}
            showValue
            formatValue={(value) => `温度 ${value.toFixed(1)}`}
            color="#0f766e"
            aria-label="温度"
          />
        </div>
      ),
    },
    {
      title: "刻度",
      code: `
        <RangeInput
          min={0}
          max={100}
          step={5}
          defaultValue={50}
          showValue
          marks={[
            { value: 0, label: "低" },
            { value: 50, label: "中" },
            { value: 100, label: "高" },
          ]}
          aria-label="风险等级"
        />;
      `,
      content: (
        <RangeInput
          min={0}
          max={100}
          step={5}
          defaultValue={50}
          showValue
          marks={[
            { value: 0, label: "低" },
            { value: 50, label: "中" },
            { value: 100, label: "高" },
          ]}
          aria-label="风险等级"
        />
      ),
    },
    {
      title: "宽高与颜色",
      code: `
        <div style={stackStyle}>
          <RangeInput
            defaultValue={35}
            width="100%"
            height="0.42rem"
            color="#2563eb"
            aria-label="蓝色滑块"
          />
          <RangeInput
            defaultValue={72}
            height="0.5rem"
            color="#0f766e"
            thumbBorderColor="#0f766e"
            thumbColor="#ecfeff"
            thumbSize="1.2rem"
            trackColor="rgba(15, 118, 110, 0.16)"
            aria-label="自定义滑块"
          />
          <RangeInput
            defaultValue={58}
            height="0.46rem"
            color="#ffffff"
            thumbBorderColor="#64748b"
            thumbColor="#ffffff"
            thumbSize="1.15rem"
            trackColor="linear-gradient(90deg, #ef4444, #f97316, #eab308, #22c55e, #06b6d4, #2563eb, #7c3aed)"
            aria-label="渐变轨道"
          />
          <div style={compactRowStyle}>
            <span>紧凑宽度</span>
            <RangeInput
              defaultValue={44}
              width="7rem"
              minWidth={0}
              height="0.42rem"
              color="#7c3aed"
              aria-label="紧凑滑块"
            />
          </div>
        </div>;
      `,
      content: (
        <div style={stackStyle}>
          <RangeInput
            defaultValue={35}
            width="100%"
            height="0.42rem"
            color="#2563eb"
            aria-label="蓝色滑块"
          />
          <RangeInput
            defaultValue={72}
            height="0.5rem"
            color="#0f766e"
            thumbBorderColor="#0f766e"
            thumbColor="#ecfeff"
            thumbSize="1.2rem"
            trackColor="rgba(15, 118, 110, 0.16)"
            aria-label="自定义滑块"
          />
          <RangeInput
            defaultValue={58}
            height="0.46rem"
            color="#ffffff"
            thumbBorderColor="#64748b"
            thumbColor="#ffffff"
            thumbSize="1.15rem"
            trackColor="linear-gradient(90deg, #ef4444, #f97316, #eab308, #22c55e, #06b6d4, #2563eb, #7c3aed)"
            aria-label="渐变轨道"
          />
          <div style={compactRowStyle}>
            <span>紧凑宽度</span>
            <RangeInput
              defaultValue={44}
              width="7rem"
              minWidth={0}
              height="0.42rem"
              color="#7c3aed"
              aria-label="紧凑滑块"
            />
          </div>
        </div>
      ),
    },
    {
      title: "状态",
      code: `
        <div style={stackStyle}>
          <RangeInput defaultValue={45} aria-label="默认滑块" />
          <RangeInput disabled defaultValue={45} aria-label="禁用滑块" />
        </div>;
      `,
      content: (
        <div style={stackStyle}>
          <RangeInput defaultValue={45} aria-label="默认滑块" />
          <RangeInput disabled defaultValue={45} aria-label="禁用滑块" />
        </div>
      ),
    },
  ],
  props: [
    {
      name: "value",
      type: "number | string | ReadonlyArray<string>",
      description: "受控值，沿用原生 input range 语义。",
    },
    {
      name: "defaultValue",
      type: "number | string | ReadonlyArray<string>",
      description: "非受控默认值。",
    },
    {
      name: "min",
      type: "number | string",
      description: "最小值。",
    },
    {
      name: "max",
      type: "number | string",
      description: "最大值。",
    },
    {
      name: "step",
      type: "number | string",
      description: "步进值。",
    },
    {
      name: "size",
      type: "'sm' | 'md' | 'lg'",
      defaultValue: "'md'",
      description: "尺寸，控制默认轨道高度和展示值徽标尺寸。",
    },
    {
      name: "width",
      type: "CSSProperties['width']",
      description: "滑块宽度，默认占满父容器。",
    },
    {
      name: "height",
      type: "CSSProperties['height']",
      description: "轨道高度，滑块尺寸会随高度自动调整。",
    },
    {
      name: "minWidth",
      type: "CSSProperties['minWidth']",
      description: "滑块最小宽度，适合嵌入紧凑容器时覆盖默认宽度。",
    },
    {
      name: "color",
      type: "string",
      description: "主色，影响滑块边框和浏览器强调色。",
    },
    {
      name: "showValue",
      type: "boolean",
      defaultValue: "false",
      description: "是否在滑块右侧展示当前值。",
    },
    {
      name: "formatValue",
      type: "(value: number) => ReactNode",
      description: "格式化展示值，适合补充百分号、单位或固定小数位。",
    },
    {
      name: "marks",
      type: "Array<number | { value: number; label?: ReactNode }>",
      description: "轻量刻度标记，用于展示范围端点或关键值。",
    },
    {
      name: "thumbColor",
      type: "string",
      description: "滑块圆点背景色。",
    },
    {
      name: "thumbBorderColor",
      type: "string",
      description: "滑块圆点边框色。",
    },
    {
      name: "thumbSize",
      type: "CSSProperties['width']",
      description: "滑块圆点尺寸。",
    },
    {
      name: "trackColor",
      type: "string",
      description: "轨道背景色，支持渐变背景值。",
    },
    {
      name: "onChange",
      type: "ChangeEventHandler<HTMLInputElement>",
      description: "值变化后的回调，沿用原生 input 事件。",
    },
    {
      name: "onInput",
      type: "FormEventHandler<HTMLInputElement>",
      description: "拖拽过程中的原生 input 事件回调。",
    },
    {
      name: "disabled",
      type: "boolean",
      description: "是否禁用。",
    },
  ],
});
