import { cloneElement, isValidElement, useState, type ReactNode } from "react";
import { ColorPicker, type ColorPickerColor } from "willa/ColorPicker";
import { Button } from "willa/Button";
import { Group } from "willa/Group";
import { Stack } from "willa/Stack";
import "willa/ColorPicker.css";
import "willa/Button.css";
import "willa/Group.css";
import "willa/Stack.css";

import { defineDoc } from "#example/catalog/defineDoc";

const brandPresets = [
  {
    label: "品牌色",
    colors: ["#2563eb", "#14b8a6", "#f97316", "#dc2626", "#7c3aed"],
  },
  {
    label: "中性色",
    colors: ["#111827", "#475569", "#94a3b8", "#e5e7eb", "#ffffff"],
  },
];

const panelStyle = {
  display: "grid",
  gap: "0.85rem",
  width: "min(100%, 34rem)",
} as const;

const previewBoxStyle = {
  display: "grid",
  gap: "0.35rem",
  padding: "1rem",
  border: "1px solid var(--willa-panel-border)",
  borderRadius: "0.75rem",
  background: "var(--willa-panel-bg)",
} as const;

const metaStyle = {
  color: "var(--willa-text-soft)",
  fontSize: "0.86rem",
  lineHeight: 1.55,
} as const;

const swatchCardStyle = {
  display: "grid",
  gap: "0.55rem",
  minWidth: 0,
} as const;

const ColorOutput = (props: { value: string; color?: ColorPickerColor }) => {
  return (
    <div style={previewBoxStyle}>
      <strong style={{ color: props.value || "var(--willa-text-strong)" }}>
        当前颜色
      </strong>
      <span style={metaStyle}>{props.value || "未选择颜色"}</span>
      {props.color ? (
        <span style={metaStyle}>{props.color.toRgbString()}</span>
      ) : null}
    </div>
  );
};

const DemoGrid = (props: { children: ReactNode }) => {
  return (
    <Group align="start" gap="lg" wrap>
      {props.children}
    </Group>
  );
};

const ColorPickerPreview = () => {
  const [value, setValue] = useState("#2563eb");
  const [color, setColor] = useState<ColorPickerColor>();

  return (
    <DemoGrid>
      <Stack gap="sm" style={swatchCardStyle}>
        <ColorPicker
          value={value}
          showText
          presets={brandPresets}
          onValueChange={(nextValue, nextColor) => {
            setValue(nextValue);
            setColor(nextColor);
          }}
        />
        <ColorPicker
          defaultValue="rgba(20, 184, 166, 0.68)"
          format="rgb"
          showText
        />
      </Stack>
      <ColorOutput value={value} color={color} />
    </DemoGrid>
  );
};

const FormatPreview = () => {
  return (
    <DemoGrid>
      <ColorPicker defaultValue="#7c3aed" format="hex" showText />
      <ColorPicker
        defaultValue="rgba(249, 115, 22, 0.72)"
        format="rgb"
        showText
      />
      <ColorPicker defaultValue="#14b8a6" format="hsb" showText />
      <ColorPicker defaultValue="#dc2626" disabledAlpha showText />
    </DemoGrid>
  );
};

const ClearPreview = () => {
  const [value, setValue] = useState<string | null>("#0f766e");

  return (
    <Stack gap="sm" style={panelStyle}>
      <ColorPicker
        value={value}
        allowClear
        showText={(nextValue) => nextValue || "未选择"}
        presets={brandPresets}
        onValueChange={(nextValue) => setValue(nextValue || null)}
      />
      <span style={metaStyle}>
        适合可选颜色字段，清空后表单值会变为空字符串。
      </span>
    </Stack>
  );
};

const ControlledPreview = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("#f97316");

  return (
    <Stack gap="md" style={panelStyle}>
      <Group gap="sm">
        <Button onClick={() => setOpen((current) => !current)}>
          {open ? "关闭面板" : "打开面板"}
        </Button>
        <ColorPicker
          open={open}
          value={value}
          trigger="click"
          showText
          onOpenChange={setOpen}
          onValueChange={setValue}
        />
      </Group>
      <span style={metaStyle}>
        open 和 onOpenChange 可以把浮层状态交给外层业务控制。
      </span>
    </Stack>
  );
};

const CustomTriggerPreview = () => {
  const [value, setValue] = useState("#111827");

  return (
    <ColorPicker value={value} onValueChange={setValue} presets={brandPresets}>
      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.55rem",
          padding: "0.58rem 0.72rem",
          border: "1px solid var(--willa-panel-border)",
          borderRadius: "0.72rem",
          background: "var(--willa-panel-bg)",
          color: "var(--willa-text-strong)",
        }}
      >
        <span
          style={{
            width: "1.35rem",
            height: "1.35rem",
            borderRadius: "0.42rem",
            background: value,
          }}
        />
        自定义触发器
      </span>
    </ColorPicker>
  );
};

const getPanelChildren = (panel: ReactNode) => {
  return isValidElement<{ children?: ReactNode }>(panel)
    ? panel.props.children
    : null;
};

const PanelRenderPreview = () => {
  return (
    <ColorPicker
      defaultValue="#2563eb"
      showText
      panelRender={(panel, info) =>
        isValidElement(panel)
          ? cloneElement(
              panel,
              undefined,
              <>
                {getPanelChildren(panel)}
                <div className="willa-color-picker-panel-extra" key="extra">
                  <strong>品牌检查</strong>
                  <span>
                    当前 {info.value}，可在这里接入色板校验或设计 token 映射。
                  </span>
                </div>
              </>,
            )
          : panel
      }
    />
  );
};

const PanelRenderCode = `
  <ColorPicker
    defaultValue="#2563eb"
    showText
    panelRender={(panel, info) =>
      isValidElement(panel) ? (
        cloneElement(panel, undefined, <>
          {panel.props.children}
          <div className="willa-color-picker-panel-extra" key="extra">
            <strong>品牌检查</strong>
            <span>
              当前 {info.value}，可在这里接入色板校验或设计 token 映射。
            </span>
          </div>
        </>)
      ) : (
        panel
      )
    }
  />;
`;

export default defineDoc({
  id: "color-picker",
  name: "ColorPicker",
  category: "form",
  packageName: "willa/ColorPicker",
  description: "用于选择颜色、透明度和预设色的表单控件。",
  imports: [{ name: "ColorPicker", from: "willa/ColorPicker" }],
  css: "willa/ColorPicker.css",
  demo: {
    name: "ColorPickerPreview",
    component: ColorPickerPreview,
  },
  code: `
    import { ColorPicker } from "willa/ColorPicker";
    import "willa/ColorPicker.css";

    <ColorPicker
      defaultValue="#2563eb"
      showText
      presets={[
        {
          label: "品牌色",
          colors: ["#2563eb", "#14b8a6", "#f97316"],
        },
      ]}
    />;
  `,
  sections: [
    {
      title: "格式与透明度",
      content: <FormatPreview />,
      code: `
        <Group gap="lg" wrap>
          <ColorPicker defaultValue="#7c3aed" format="hex" showText />
          <ColorPicker
            defaultValue="rgba(249, 115, 22, 0.72)"
            format="rgb"
            showText
          />
          <ColorPicker defaultValue="#14b8a6" format="hsb" showText />
          <ColorPicker defaultValue="#dc2626" disabledAlpha showText />
        </Group>;
      `,
    },
    {
      title: "预设与清除",
      content: <ClearPreview />,
      code: `
        const [value, setValue] = useState<string | null>("#0f766e");

        <ColorPicker
          value={value}
          allowClear
          showText={(nextValue) => nextValue || "未选择"}
          presets={brandPresets}
          onValueChange={(nextValue) => setValue(nextValue || null)}
        />;
      `,
    },
    {
      title: "受控浮层",
      content: <ControlledPreview />,
      code: `
        const [open, setOpen] = useState(false);
        const [value, setValue] = useState("#f97316");

        <Group gap="sm">
          <Button onClick={() => setOpen((current) => !current)}>
            {open ? "关闭面板" : "打开面板"}
          </Button>
          <ColorPicker
            open={open}
            value={value}
            showText
            onOpenChange={setOpen}
            onValueChange={setValue}
          />
        </Group>;
      `,
    },
    {
      title: "自定义触发器",
      content: <CustomTriggerPreview />,
      code: `
        <ColorPicker value={value} onValueChange={setValue}>
          <span style={triggerStyle}>
            <span style={{ ...swatchStyle, background: value }} />
            自定义触发器
          </span>
        </ColorPicker>;
      `,
    },
    {
      title: "扩展面板",
      content: <PanelRenderPreview />,
      code: PanelRenderCode,
    },
  ],
  propGroups: [
    {
      title: "值与格式",
      description:
        "控制颜色值、输出格式和透明度；面板内颜色值支持手动输入和复制。",
    },
    {
      title: "交互",
      description: "控制触发方式、浮层状态、禁用和清除行为。",
    },
    {
      title: "面板",
      description: "用于配置预设色和面板扩展能力。",
    },
  ],
  props: [
    {
      name: "value",
      type: "string | null",
      group: "值与格式",
      description:
        "受控颜色值，支持 hex、rgb、rgba、hsb、hsba 字符串；null 表示未选择。",
    },
    {
      name: "defaultValue",
      type: "string",
      defaultValue: "#1677ff",
      group: "值与格式",
      description: "非受控默认颜色。",
    },
    {
      name: "format",
      type: '"hex" | "rgb" | "hsb"',
      defaultValue: '"hex"',
      group: "值与格式",
      description:
        "触发器文案、面板输入框和 onValueChange 的输出格式；输入框可手动修改和复制颜色值。",
    },
    {
      name: "disabledAlpha",
      type: "boolean",
      defaultValue: "false",
      group: "值与格式",
      description: "是否禁用透明度滑块。",
    },
    {
      name: "showText",
      type: "boolean | ((value: string, color: ColorPickerColor) => ReactNode)",
      defaultValue: "false",
      group: "值与格式",
      description: "是否在触发器中展示当前颜色文案，支持自定义渲染。",
    },
    {
      name: "onValueChange",
      type: "(value: string, color: ColorPickerColor) => void",
      group: "值与格式",
      description: "颜色变化时触发。",
    },
    {
      name: "onChangeComplete",
      type: "(value: string, color: ColorPickerColor) => void",
      group: "值与格式",
      description: "选择完成时触发，适合保存历史或触发较重逻辑。",
    },
    {
      name: "size",
      type: '"sm" | "md" | "lg"',
      defaultValue: '"md"',
      group: "交互",
      description: "触发器尺寸。",
    },
    {
      name: "trigger",
      type: '"click" | "hover"',
      defaultValue: '"click"',
      group: "交互",
      description: "打开面板的触发方式。",
    },
    {
      name: "open",
      type: "boolean",
      group: "交互",
      description: "受控打开状态。",
    },
    {
      name: "defaultOpen",
      type: "boolean",
      defaultValue: "false",
      group: "交互",
      description: "非受控默认打开状态。",
    },
    {
      name: "onOpenChange",
      type: "(open: boolean) => void",
      group: "交互",
      description: "浮层打开状态变化时触发。",
    },
    {
      name: "allowClear",
      type: "boolean",
      defaultValue: "false",
      group: "交互",
      description: "是否展示清除颜色按钮。",
    },
    {
      name: "disabled",
      type: "boolean",
      group: "交互",
      description: "禁用触发器和颜色面板。",
    },
    {
      name: "invalid",
      type: "boolean",
      defaultValue: "false",
      group: "交互",
      description: "展示错误态边框。",
    },
    {
      name: "width",
      type: "CSSProperties['width']",
      group: "交互",
      description: "触发器宽度。",
    },
    {
      name: "name",
      type: "string",
      group: "交互",
      description: "表单提交时使用的隐藏 input 名称。",
    },
    {
      name: "presets",
      type: "Array<{ label?: ReactNode; colors: Array<string> }>",
      group: "面板",
      description: "预设色分组。",
    },
    {
      name: "panelRender",
      type: "(panel: ReactNode, info: ColorPickerPanelRenderInfo) => ReactNode",
      group: "面板",
      description: "自定义面板内容，可在默认面板外增加业务校验或 token 映射。",
    },
    {
      name: "children",
      type: "ReactNode",
      group: "面板",
      description: "自定义触发器内容。",
    },
  ],
});
