import { useState } from "react";
import { MagicWandIcon, MixIcon, ReaderIcon } from "@radix-ui/react-icons";
import { Badge } from "willa/Badge";
import { Button } from "willa/Button";
import { Composer } from "willa/Composer";
import { Group } from "willa/Group";
import { SuggestionChips } from "willa/SuggestionChips";
import "willa/Badge.css";
import "willa/Button.css";
import "willa/PromptInput.css";
import "willa/Composer.css";
import "willa/Group.css";
import "willa/SuggestionChips.css";

import { defineDoc } from "#example/catalog/defineDoc";

const stackStyle = {
  display: "grid",
  gap: "0.85rem",
  width: "min(100%, 56rem)",
} as const;

const outputStyle = {
  color: "var(--willa-text-soft)",
  fontSize: "0.84rem",
  lineHeight: 1.45,
} as const;

const headerStyle = {
  display: "grid",
  gap: "0.16rem",
} as const;

const headerTextStyle = {
  color: "var(--willa-text-soft)",
  fontSize: "0.78rem",
  fontWeight: 400,
  lineHeight: 1.4,
} as const;

const stateGridStyle = {
  display: "grid",
  gap: "0.85rem",
  width: "min(100%, 56rem)",
} as const;

const ComposerPreview = () => {
  const [value, setValue] = useState("");
  const [lastPrompt, setLastPrompt] = useState("暂无提交内容");

  return (
    <div style={stackStyle}>
      <SuggestionChips
        size="sm"
        items={[
          { id: "priority", label: "整理优先级" },
          { id: "risk", label: "提取风险" },
          { id: "summary", label: "生成摘要" },
        ]}
        onSelect={(item) => setValue(String(item.label))}
      />
      <Composer
        value={value}
        header={
          <span style={headerStyle}>
            <span>产品反馈分析</span>
            <span style={headerTextStyle}>从用户反馈中提取优先级和风险</span>
          </span>
        }
        model={<Badge tone="info">Willa AI Pro</Badge>}
        tools={
          <Group gap="xs">
            <Button size="sm" variant="ghost" icon={<ReaderIcon />}>
              阅读
            </Button>
            <Button size="sm" variant="ghost" icon={<MixIcon />}>
              推理
            </Button>
          </Group>
        }
        attachments={[
          {
            id: "feedback",
            name: "feedback.csv",
            meta: "12 KB",
            href: "data:text/csv;charset=utf-8,id,feedback%0A1,%E5%B8%8C%E6%9C%9B%E8%A1%A8%E6%A0%BC%E5%AF%BC%E5%87%BA%E6%9B%B4%E5%BF%AB",
            downloadName: "feedback.csv",
          },
          {
            id: "roadmap",
            name: "roadmap.md",
            meta: "8 KB",
            href: "data:text/markdown;charset=utf-8,%23%20Roadmap%0A%0A- AI%20Composer%0A- Message%20actions",
            downloadName: "roadmap.md",
          },
        ]}
        actions={
          <Button size="sm" variant="ghost" icon={<MagicWandIcon />}>
            优化
          </Button>
        }
        footer="已连接 2 个上下文，Enter 发送"
        minRows={3}
        placeholder="让 AI 帮我分析这些反馈的优先级..."
        onChange={(event) => setValue(event.currentTarget.value)}
        onSubmit={(prompt) => {
          setLastPrompt(prompt);
          setValue("");
        }}
      />
      <div style={outputStyle}>{lastPrompt}</div>
    </div>
  );
};

export default defineDoc({
  id: "composer",
  name: "Composer",
  category: "ai",
  packageName: "willa/Composer",
  description:
    "用于 AI 对话和任务执行的高阶输入组合，承载模型、工具、附件和 PromptInput。",
  imports: [{ name: "Composer", from: "willa/Composer" }],
  css: "willa/Composer.css",
  demo: {
    name: "ComposerPreview",
    component: ComposerPreview,
  },
  code: `
    import { Composer } from "willa/Composer";
    import { SuggestionChips } from "willa/SuggestionChips";
    import "willa/Composer.css";
    import "willa/SuggestionChips.css";

    <>
      <SuggestionChips
        items={[
          { id: "priority", label: "整理优先级" },
          { id: "risk", label: "提取风险" },
        ]}
      />
      <Composer
        header="产品分析助手"
        model="Willa AI Pro"
        attachments={[
          { id: "feedback", name: "feedback.csv", href: "/feedback.csv" },
        ]}
        footer="已连接 2 个上下文，Enter 发送"
        placeholder="让 AI 帮我分析这些反馈的优先级..."
        onSubmit={(prompt) => console.log(prompt)}
      />
    </>;
  `,
  sections: [
    {
      title: "紧凑输入",
      code: `
        <div style={stackStyle}>
          <Composer
            footer="适合只需要输入和提交的场景"
            actions={
              <Button size="sm" variant="ghost" icon={<MagicWandIcon />}>
                优化
              </Button>
            }
            placeholder="输入任务目标..."
          />
        </div>;
      `,
      content: (
        <div style={stackStyle}>
          <Composer
            footer="适合只需要输入和提交的场景"
            actions={
              <Button size="sm" variant="ghost" icon={<MagicWandIcon />}>
                优化
              </Button>
            }
            placeholder="输入任务目标..."
          />
        </div>
      ),
    },
    {
      title: "提交状态",
      code: `
        <div style={stateGridStyle}>
          <Composer
            loading
            defaultValue="分析最近 7 天用户反馈里的高频问题。"
            footer="正在发送请求"
            minRows={2}
          />
          <Composer disabled minRows={2} placeholder="当前会话不可输入" />
        </div>;
      `,
      content: (
        <div style={stateGridStyle}>
          <Composer
            loading
            defaultValue="分析最近 7 天用户反馈里的高频问题。"
            footer="正在发送请求"
            minRows={2}
          />
          <Composer disabled minRows={2} placeholder="当前会话不可输入" />
        </div>
      ),
    },
  ],
  props: [
    {
      name: "header",
      type: "ReactNode",
      description: "输入台顶部标题或说明。",
    },
    {
      name: "model",
      type: "ReactNode",
      description: "模型、模式或知识库选择区域。",
    },
    {
      name: "tools",
      type: "ReactNode",
      description: "工具入口，例如搜索、读取文件、推理模式等。",
    },
    {
      name: "attachments",
      type: "ReactNode",
      description:
        "上下文附件数据。Composer 会通过 AttachmentList 渲染附件区域。",
    },
    {
      name: "attachmentListProps",
      type: 'Omit<AttachmentListProps, "items">',
      description: "传给内部 AttachmentList 的配置。",
    },
    {
      name: "actions",
      type: "ReactNode",
      description: "输入框内提交按钮前的操作区。",
    },
    {
      name: "footer",
      type: "ReactNode",
      description: "输入框底部辅助信息。",
    },
    {
      name: "value",
      type: "string",
      description: "受控输入值，继承 PromptInput 语义。",
    },
    {
      name: "defaultValue",
      type: "string",
      defaultValue: '""',
      description: "非受控默认输入值。",
    },
    {
      name: "onSubmit",
      type: "(value: string, event: PromptInputSubmitEvent) => void",
      description: "提交提示词时触发。",
    },
    {
      name: "inputClassName",
      type: "string",
      description: "传给内部 PromptInput 的 className。",
    },
    {
      name: "allowEmptySubmit",
      type: "boolean",
      description: "是否允许空内容提交。",
    },
    {
      name: "autoResize",
      type: "boolean",
      description: "是否自动高度。",
    },
    {
      name: "beforeInput",
      type: "ReactNode",
      description: "输入前回调。",
    },
    {
      name: "className",
      type: "string",
      description: "自定义 className。",
    },
    {
      name: "id",
      type: "string",
      description: "元素 id。",
    },
    {
      name: "inputStyle",
      type: "CSSProperties",
      description: "输入区域样式。",
    },
    {
      name: "loading",
      type: "boolean",
      description: "是否展示加载态。",
    },
    {
      name: "maxRows",
      type: "number",
      description: "行数限制。",
    },
    {
      name: "minRows",
      type: "number",
      description: "行数限制。",
    },
    {
      name: "onValueChange",
      type: "((value: string, event?: ChangeEvent<HTMLTextAreaElement>) => void)",
      description: "对应事件回调。",
    },
    {
      name: "role",
      type: "AriaRole",
      description: "无障碍角色。",
    },
    {
      name: "size",
      type: "PromptInputSize",
      description: "尺寸。",
    },
    {
      name: "slotClassNames",
      type: "InputPanelSlotClassNames",
      description: "插槽样式。",
    },
    {
      name: "style",
      type: "CSSProperties",
      description: "自定义内联样式。",
    },
    {
      name: "submitButton",
      type: "ReactNode",
      description: "提交按钮。",
    },
    {
      name: "submitIcon",
      type: "ReactNode",
      description: "提交图标。",
    },
    {
      name: "submitLabel",
      type: "ReactNode",
      description: "文案标签。",
    },
    {
      name: "submitOnEnter",
      type: "boolean",
      description: "回车时提交。",
    },
  ],
});
