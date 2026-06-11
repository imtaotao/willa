import { useState } from "react";
import { FileTextIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";

import { ChatMessage } from "willa/ChatMessage";
import { ReasoningSteps, type ReasoningStepItem } from "willa/ReasoningSteps";
import "willa/ChatMessage.css";
import "willa/ReasoningSteps.css";

import { defineDoc } from "#example/catalog/defineDoc";

const assistantAvatarSrc = "https://github.com/openai.png";

const frameStyle = {
  display: "grid",
  gap: "1rem",
  width: "min(100%, 58rem)",
} as const;

const detailStyle = {
  border: "1px solid var(--willa-line)",
  borderRadius: "0.8rem",
  background: "var(--willa-panel-bg)",
  color: "var(--willa-text)",
  fontSize: "0.86rem",
  lineHeight: 1.55,
  padding: "0.72rem 0.82rem",
} as const;

const reasoningSteps = [
  {
    id: "parse",
    title: "理解用户问题",
    description: "识别目标、约束和需要核对的上下文。",
    meta: "已完成",
  },
  {
    id: "search",
    title: "检索相关资料",
    description: "读取 architecture.md、component.md 和最近新增组件。",
    meta: "进行中",
    icon: <MagnifyingGlassIcon />,
  },
  {
    id: "draft",
    title: "整理回答",
    description: "把证据、判断和建议合并成可执行结论。",
    meta: "等待中",
  },
];

const ReasoningStepsPreview = () => {
  const [selectedStep, setSelectedStep] = useState<ReasoningStepItem>(
    reasoningSteps[1],
  );

  return (
    <div style={frameStyle}>
      <ChatMessage
        role="assistant"
        name="Willa AI"
        avatarSrc={assistantAvatarSrc}
        meta="推理中"
      >
        <ReasoningSteps
          collapsible
          defaultCollapsed
          steps={reasoningSteps}
          activeStep={1}
          summary="AI 正在检索组件文档和主题规则。"
          onStepClick={({ step }) => setSelectedStep(step)}
        />
      </ChatMessage>
      <div style={detailStyle}>
        当前查看：{selectedStep.title} · {selectedStep.meta}
      </div>
      <ReasoningSteps
        compact
        size="sm"
        activeStep={2}
        steps={[
          {
            id: "read",
            title: "读取文件",
            description: "确认组件入口和主题变量位置。",
            icon: <FileTextIcon />,
            meta: "已完成",
          },
          {
            id: "compare",
            title: "比对实现",
            description: "检查 demo、props 和构建入口是否一致。",
            meta: "已完成",
          },
          {
            id: "failed",
            title: "构建校验",
            description: "发现缺少单组件 CSS 入口，需要修正后重跑。",
            status: "error",
            meta: "失败",
          },
        ]}
      />
    </div>
  );
};

const InteractiveReasoningSteps = () => {
  const [selectedStep, setSelectedStep] = useState<ReasoningStepItem>(
    reasoningSteps[0],
  );

  return (
    <div style={frameStyle}>
      <ReasoningSteps
        steps={reasoningSteps}
        activeStep={1}
        onStepClick={({ step }) => setSelectedStep(step)}
      />
      <div style={detailStyle}>
        <strong>{selectedStep.title}</strong>
        <br />
        {selectedStep.description}
      </div>
    </div>
  );
};

export default defineDoc({
  id: "reasoning-steps",
  name: "ReasoningSteps",
  category: "ai",
  packageName: "willa/ReasoningSteps",
  description: "用于展示 AI 推理、检索和执行过程的分步轨迹。",
  imports: [{ name: "ReasoningSteps", from: "willa/ReasoningSteps" }],
  css: "willa/ReasoningSteps.css",
  demo: {
    name: "ReasoningStepsPreview",
    component: ReasoningStepsPreview,
  },
  code: `
    import { useState } from "react";
    import { ReasoningSteps } from "willa/ReasoningSteps";
    import "willa/ReasoningSteps.css";

    const Demo = () => {
      const [selectedStep, setSelectedStep] = useState("search");

      return (
        <>
          <ReasoningSteps
            activeStep={1}
            steps={[
              {
                id: "parse",
                title: "理解用户问题",
                description: "识别目标、约束和需要核对的上下文。",
                meta: "已完成",
              },
              {
                id: "search",
                title: "检索相关资料",
                description: "读取文档和最近新增组件。",
                meta: "进行中",
              },
              {
                id: "draft",
                title: "整理回答",
                description: "把证据、判断和建议合并成结论。",
                meta: "等待中",
              },
            ]}
            collapsible
            defaultCollapsed
            summary="AI 正在检索组件文档和最近新增组件。"
            onStepClick={({ step }) => {
              setSelectedStep(step.id);
            }}
          />
          <div>当前查看：{selectedStep}</div>
        </>
      );
    };
  `,
  sections: [
    {
      title: "折叠过程",
      code: `
        <ReasoningSteps
          collapsible
          defaultCollapsed
          activeStep={1}
          summary="默认隐藏 AI 的中间处理过程，用户需要时再展开。"
          steps={reasoningSteps}
        />;
      `,
      content: (
        <ReasoningSteps
          collapsible
          defaultCollapsed
          activeStep={1}
          summary="默认隐藏 AI 的中间处理过程，用户需要时再展开。"
          steps={reasoningSteps}
        />
      ),
    },
    {
      title: "点击查看详情",
      code: `
        import { useState } from "react";
        import {
          ReasoningSteps,
          type ReasoningStepItem,
        } from "willa/ReasoningSteps";
        import "willa/ReasoningSteps.css";

        const steps: Array<ReasoningStepItem> = [
          {
            id: "parse",
            title: "理解用户问题",
            description: "识别目标、约束和需要核对的上下文。",
            meta: "已完成",
          },
          {
            id: "search",
            title: "检索相关资料",
            description: "读取 architecture.md、component.md 和最近新增组件。",
            meta: "进行中",
          },
          {
            id: "draft",
            title: "整理回答",
            description: "把证据、判断和建议合并成可执行结论。",
            meta: "等待中",
          },
        ];

        const Demo = () => {
          const [selectedStep, setSelectedStep] = useState(steps[0]);

          return (
            <div style={{ display: "grid", gap: "1rem" }}>
              <ReasoningSteps
                steps={steps}
                activeStep={1}
                onStepClick={({ step }) => setSelectedStep(step)}
              />
              <div>
                <strong>{selectedStep.title}</strong>
                <br />
                {selectedStep.description}
              </div>
            </div>
          );
        };
      `,
      content: <InteractiveReasoningSteps />,
    },
    {
      title: "错误节点",
      code: `
        <ReasoningSteps
          activeStep={1}
          steps={[
            {
              id: "load",
              title: "加载上下文",
              description: "已读取相关组件和文档。",
              meta: "已完成",
            },
            {
              id: "build",
              title: "运行构建",
              description: "构建失败时可以单独标记错误节点。",
              status: "error",
              meta: "需要处理",
            },
            {
              id: "retry",
              title: "重试验证",
              description: "等待修复后继续。",
              meta: "等待中",
            },
          ]}
        />;
      `,
      content: (
        <ReasoningSteps
          activeStep={1}
          steps={[
            {
              id: "load",
              title: "加载上下文",
              description: "已读取相关组件和文档。",
              meta: "已完成",
            },
            {
              id: "build",
              title: "运行构建",
              description: "构建失败时可以单独标记错误节点。",
              status: "error",
              meta: "需要处理",
            },
            {
              id: "retry",
              title: "重试验证",
              description: "等待修复后继续。",
              meta: "等待中",
            },
          ]}
        />
      ),
    },
    {
      title: "附加内容",
      code: `
        <ReasoningSteps
          activeStep={2}
          steps={[
            {
              id: "intent",
              title: "识别意图",
              description: "判断用户需要的是组件实现，而不是方案讨论。",
              meta: "已完成",
            },
            {
              id: "evidence",
              title: "核对证据",
              content: "确认 AI 包边界、导出入口、CSS 变量和 demo 注册。",
              meta: "已完成",
            },
            {
              id: "deliver",
              title: "交付结果",
              description: "完成实现并跑最小验证。",
              meta: "进行中",
            },
          ]}
        />;
      `,
      content: (
        <ReasoningSteps
          activeStep={2}
          steps={[
            {
              id: "intent",
              title: "识别意图",
              description: "判断用户需要的是组件实现，而不是方案讨论。",
              meta: "已完成",
            },
            {
              id: "evidence",
              title: "核对证据",
              content: "确认 AI 包边界、导出入口、CSS 变量和 demo 注册。",
              meta: "已完成",
            },
            {
              id: "deliver",
              title: "交付结果",
              description: "完成实现并跑最小验证。",
              meta: "进行中",
            },
          ]}
        />
      ),
    },
  ],
  props: [
    {
      name: "steps",
      type: "Array<ReasoningStepItem>",
      required: true,
      description: "推理步骤列表。",
    },
    {
      name: "activeStep",
      type: "number",
      description: "当前步骤下标。未显式传 status 的节点会自动推导状态。",
    },
    {
      name: "size",
      type: '"sm" | "md"',
      description: "尺寸，默认 md。",
    },
    {
      name: "compact",
      type: "boolean",
      description: "是否使用紧凑样式。",
    },
    {
      name: "collapsible",
      type: "boolean",
      description: "是否允许折叠步骤列表，默认 false。",
    },
    {
      name: "collapsed",
      type: "boolean",
      description: "受控折叠状态。",
    },
    {
      name: "defaultCollapsed",
      type: "boolean",
      description: "非受控模式下的默认折叠状态。",
    },
    {
      name: "summary",
      type: "ReactNode",
      description: "折叠栏摘要；未传时使用当前步骤标题。",
    },
    {
      name: "onStepClick",
      type: "(event: ReasoningStepClickEvent) => void",
      description: "点击步骤时触发，可用于打开详情、切换右侧预览或定位上下文。",
    },
    {
      name: "onCollapsedChange",
      type: "(collapsed: boolean) => void",
      description: "折叠状态变化时触发。",
    },
    {
      name: "ReasoningStepItem.id",
      type: "string",
      required: true,
      group: "ReasoningStepItem",
      description: "步骤唯一标识。",
    },
    {
      name: "ReasoningStepItem.title",
      type: "ReactNode",
      required: true,
      group: "ReasoningStepItem",
      description: "步骤标题。",
    },
    {
      name: "ReasoningStepItem.description",
      type: "ReactNode",
      group: "ReasoningStepItem",
      description: "步骤说明。",
    },
    {
      name: "ReasoningStepItem.meta",
      type: "ReactNode",
      group: "ReasoningStepItem",
      description: "右侧辅助信息。",
    },
    {
      name: "ReasoningStepItem.content",
      type: "ReactNode",
      group: "ReasoningStepItem",
      description: "步骤下方的补充内容。",
    },
    {
      name: "ReasoningStepItem.icon",
      type: "ReactNode",
      group: "ReasoningStepItem",
      description: "自定义步骤图标。",
    },
    {
      name: "ReasoningStepItem.status",
      type: '"pending" | "active" | "done" | "error"',
      group: "ReasoningStepItem",
      description: "覆盖单个步骤状态。",
    },
  ],
});
