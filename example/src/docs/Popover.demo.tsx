import { GearIcon, MagicWandIcon } from "@radix-ui/react-icons";
import { Badge } from "willa/Badge";
import { Button } from "willa/Button";
import { Input } from "willa/Input";
import { Popover } from "willa/Popover";
import "willa/Badge.css";
import "willa/Button.css";
import "willa/Input.css";
import "willa/Popover.css";

import { defineDoc } from "#example/catalog/defineDoc";

const rowStyle = {
  display: "flex",
  flexWrap: "wrap",
  gap: "0.75rem",
  alignItems: "center",
} as const;

const stackStyle = {
  display: "grid",
  gap: "0.7rem",
} as const;

const fieldStyle = {
  display: "grid",
  gap: "0.35rem",
} as const;

const labelStyle = {
  color: "var(--willa-text-soft)",
  fontSize: "0.82rem",
} as const;

export default defineDoc({
  id: "popover",
  name: "Popover",
  packageName: "willa/Popover",
  description:
    "用于承载可交互内容的轻量浮层，适合设置面板、筛选器和上下文信息。",
  imports: [
    { name: "Popover", from: "willa/Popover" },
    { name: "Button", from: "willa/Button" },
  ],
  css: "willa/Popover.css",
  demo: {
    name: "Popover",
    component: Popover,
    props: {
      title: "生成设置",
      description: "调整回复长度和输出语气。",
      trigger: (
        <Button icon={<MagicWandIcon />} variant="outline">
          打开设置
        </Button>
      ),
      children: (
        <div style={stackStyle}>
          <div style={fieldStyle}>
            <span style={labelStyle}>模型</span>
            <Input defaultValue="willa-ai-default" size="sm" />
          </div>
          <Badge tone="info">已启用上下文增强</Badge>
        </div>
      ),
    },
  },
  code: `
    import { Button } from "willa/Button";
    import { Popover } from "willa/Popover";
    import "willa/Button.css";
    import "willa/Popover.css";

    <Popover
      title="生成设置"
      description="调整回复长度和输出语气。"
      trigger={<Button variant="outline">打开设置</Button>}
    >
      <div>这里放表单、操作按钮或说明内容。</div>
    </Popover>;
  `,
  sections: [
    {
      title: "基础浮层",
      code: `
        <Popover
          title="内容策略"
          description="适合放少量说明和一组轻量操作，不适合承载完整流程。"
          trigger={<Button variant="outline">查看策略</Button>}
        >
          <div style={stackStyle}>
            <Badge tone="info">轻量交互</Badge>
            <span>点击外部区域或按 Escape 可以关闭浮层。</span>
          </div>
        </Popover>;
      `,
      content: (
        <Popover
          title="内容策略"
          description="适合放少量说明和一组轻量操作，不适合承载完整流程。"
          trigger={<Button variant="outline">查看策略</Button>}
        >
          <div style={stackStyle}>
            <Badge tone="info">轻量交互</Badge>
            <span>点击外部区域或按 Escape 可以关闭浮层。</span>
          </div>
        </Popover>
      ),
    },
    {
      title: "表单内容",
      code: `
        <Popover
          title="快速配置"
          description="Popover 可以承载输入框和按钮。"
          trigger={
            <Button icon={<GearIcon />} variant="soft">
              配置参数
            </Button>
          }
          footer={
            <>
              <Button size="sm" variant="ghost">
                重置
              </Button>
              <Button size="sm" variant="solid">
                应用
              </Button>
            </>
          }
        >
          <div style={stackStyle}>
            <div style={fieldStyle}>
              <span style={labelStyle}>提示词前缀</span>
              <Input defaultValue="请给出结构化回答" size="sm" />
            </div>
            <div style={fieldStyle}>
              <span style={labelStyle}>温度</span>
              <Input defaultValue="0.7" size="sm" />
            </div>
          </div>
        </Popover>;
      `,
      content: (
        <Popover
          title="快速配置"
          description="Popover 可以承载输入框和按钮。"
          trigger={
            <Button icon={<GearIcon />} variant="soft">
              配置参数
            </Button>
          }
          footer={
            <>
              <Button size="sm" variant="ghost">
                重置
              </Button>
              <Button size="sm" variant="solid">
                应用
              </Button>
            </>
          }
        >
          <div style={stackStyle}>
            <div style={fieldStyle}>
              <span style={labelStyle}>提示词前缀</span>
              <Input defaultValue="请给出结构化回答" size="sm" />
            </div>
            <div style={fieldStyle}>
              <span style={labelStyle}>温度</span>
              <Input defaultValue="0.7" size="sm" />
            </div>
          </div>
        </Popover>
      ),
    },
    {
      title: "方向和对齐",
      code: `
        <div style={rowStyle}>
          <Popover
            title="上方"
            side="top"
            trigger={<Button variant="outline">Top</Button>}
          >
            <span>从上方展开。</span>
          </Popover>
          <Popover
            title="右侧"
            side="right"
            align="center"
            trigger={<Button variant="outline">Right</Button>}
          >
            <span>从右侧展开。</span>
          </Popover>
          <Popover
            title="下方末端对齐"
            align="end"
            trigger={<Button variant="outline">End</Button>}
          >
            <span>和触发器右侧对齐。</span>
          </Popover>
        </div>;
      `,
      content: (
        <div style={rowStyle}>
          <Popover
            title="上方"
            side="top"
            trigger={<Button variant="outline">Top</Button>}
          >
            <span>从上方展开。</span>
          </Popover>
          <Popover
            title="右侧"
            side="right"
            align="center"
            trigger={<Button variant="outline">Right</Button>}
          >
            <span>从右侧展开。</span>
          </Popover>
          <Popover
            title="下方末端对齐"
            align="end"
            trigger={<Button variant="outline">End</Button>}
          >
            <span>和触发器右侧对齐。</span>
          </Popover>
        </div>
      ),
    },
    {
      title: "受控状态",
      code: `
        <Popover
          title="受控 Popover"
          open
          trigger={<Button variant="soft">保持展开</Button>}
        >
          <span>适合和外部状态、快捷键或引导流程配合。</span>
        </Popover>;
      `,
      content: (
        <Popover
          title="受控 Popover"
          open
          trigger={<Button variant="soft">保持展开</Button>}
        >
          <span>适合和外部状态、快捷键或引导流程配合。</span>
        </Popover>
      ),
    },
  ],
  props: [
    {
      name: "trigger",
      type: "ReactElement",
      required: true,
      description: "触发 Popover 的元素。",
    },
    {
      name: "children",
      type: "ReactNode",
      description: "Popover 主体内容。",
    },
    {
      name: "title",
      type: "ReactNode",
      description: "浮层标题。",
    },
    {
      name: "description",
      type: "ReactNode",
      description: "浮层说明。",
    },
    {
      name: "footer",
      type: "ReactNode",
      description: "底部操作区。",
    },
    {
      name: "open",
      type: "boolean",
      description: "受控打开状态。",
    },
    {
      name: "defaultOpen",
      type: "boolean",
      description: "非受控默认打开状态。",
    },
    {
      name: "onOpenChange",
      type: "(open: boolean) => void",
      description: "打开状态变化回调。",
    },
    {
      name: "side",
      type: '"top" | "right" | "bottom" | "left"',
      description: "Popover 相对触发元素的展示方向。",
    },
    {
      name: "align",
      type: '"start" | "center" | "end"',
      description: "Popover 与触发元素的对齐方式。",
    },
    {
      name: "offset",
      type: "number",
      description: "Popover 与触发元素之间的距离。",
    },
    {
      name: "size",
      type: '"sm" | "md" | "lg"',
      description: "浮层尺寸。",
    },
    {
      name: "autoFocus",
      type: "boolean",
      description: "打开后是否自动聚焦浮层内第一个可聚焦元素。",
    },
    {
      name: "closeOnOutsidePointerDown",
      type: "boolean",
      description: "点击外部区域时是否关闭。",
    },
    {
      name: "closeOnEscape",
      type: "boolean",
      description: "按 Escape 时是否关闭。",
    },
    {
      name: "showArrow",
      type: "boolean",
      description: "是否显示指向触发元素的箭头。",
    },
    {
      name: "ariaLabel",
      type: "string",
      description: "没有 title 时的无障碍名称。",
    },
    {
      name: "className",
      type: "string",
      description: "外层 className。",
    },
    {
      name: "contentClassName",
      type: "string",
      description: "Popover 浮层 className。",
    },
  ],
});
