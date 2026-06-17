import { useRef, useState, type ReactNode } from "react";
import { MagicWandIcon, RocketIcon } from "@radix-ui/react-icons";
import { unindent } from "aidly";
import { Badge } from "willa/Badge";
import { Button } from "willa/Button";
import { Group } from "willa/Group";
import { Stack } from "willa/Stack";
import { Tour, type TourStep } from "willa/Tour";
import "willa/Badge.css";
import "willa/Button.css";
import "willa/Group.css";
import "willa/Stack.css";
import "willa/Tour.css";

import { defineDoc } from "#example/catalog/defineDoc";

const previewShellStyle = {
  width: "min(100%, 46rem)",
  padding: "1.25rem",
  color: "var(--willa-text)",
  background: "var(--willa-panel-surface-bg)",
  border: "1px solid var(--willa-panel-border)",
  borderRadius: "0.9rem",
} as const;

const productPanelStyle = {
  display: "grid",
  gap: "0.9rem",
  padding: "1rem",
  background: "var(--willa-surface-soft)",
  border: "1px solid var(--willa-panel-border)",
  borderRadius: "0.75rem",
} as const;

const cardStyle = {
  display: "grid",
  gap: "0.45rem",
  padding: "0.9rem",
  background: "var(--willa-panel-bg)",
  border: "1px solid var(--willa-panel-border)",
  borderRadius: "0.65rem",
} as const;

const paragraphStyle = {
  margin: 0,
  color: "var(--willa-text-soft)",
  fontSize: "0.9rem",
  lineHeight: 1.6,
} as const;

const DemoFrame = (props: { children: ReactNode }) => {
  return (
    <Stack align="center" width="100%">
      {props.children}
    </Stack>
  );
};

const TourPreview = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const actionRef = useRef<HTMLDivElement>(null);
  const insightRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(0);
  const steps: Array<TourStep> = [
    {
      target: () => titleRef.current,
      title: "确认任务上下文",
      description: "先让用户知道当前页面正在处理什么任务，避免引导脱离场景。",
      placement: "bottom-start",
    },
    {
      target: () => insightRef.current,
      title: "解释核心区域",
      description: "高亮用户需要优先关注的数据卡片、表格或操作区域。",
      placement: "right",
    },
    {
      target: () => actionRef.current,
      title: "落到下一步操作",
      description: "最后把用户带到可以继续推进流程的按钮上。",
      placement: "top-end",
    },
  ];

  return (
    <DemoFrame>
      <div style={previewShellStyle}>
        <Stack gap="lg">
          <Group justify="between" gap="md">
            <div ref={titleRef}>
              <strong>产品反馈工作台</strong>
              <p style={paragraphStyle}>汇总反馈、优先级和后续动作。</p>
            </div>
            <div ref={actionRef}>
              <Button
                icon={<RocketIcon />}
                onClick={() => {
                  setCurrent(0);
                  setOpen(true);
                }}
              >
                开始引导
              </Button>
            </div>
          </Group>
          <div style={productPanelStyle}>
            <Group gap="sm">
              <Badge tone="info">128 条反馈</Badge>
              <Badge tone="warning">3 个风险</Badge>
              <Badge tone="success">已生成摘要</Badge>
            </Group>
            <div ref={insightRef} style={cardStyle}>
              <strong>本周优先处理</strong>
              <p style={paragraphStyle}>
                登录失败、批量导出超时和移动端表单校验异常。
              </p>
            </div>
          </div>
        </Stack>
      </div>
      <Tour
        open={open}
        current={current}
        steps={steps}
        onChange={setCurrent}
        onOpenChange={setOpen}
      />
    </DemoFrame>
  );
};

const CenterTourPreview = () => {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(0);
  const steps: Array<TourStep> = [
    {
      title: "欢迎使用 Willa",
      description:
        "没有 target 的步骤会在视口中央展示，适合首屏欢迎和流程说明。",
      type: "primary",
    },
    {
      title: "保持简洁",
      description: "Tour 应该只解释关键路径，不要替代完整帮助文档。",
    },
  ];

  return (
    <DemoFrame>
      <Group justify="center">
        <Button
          icon={<MagicWandIcon />}
          onClick={() => {
            setCurrent(0);
            setOpen(true);
          }}
        >
          打开居中引导
        </Button>
      </Group>
      <Tour
        open={open}
        current={current}
        steps={steps}
        onChange={setCurrent}
        onOpenChange={(nextOpen) => {
          setOpen(nextOpen);
          if (!nextOpen) {
            setCurrent(0);
          }
        }}
      />
    </DemoFrame>
  );
};

const CustomActionsPreview = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const steps: Array<TourStep> = [
    {
      target: () => targetRef.current,
      title: "可定制底部操作",
      description:
        "actionsRender 可以替换默认按钮，适合接入跳过、查看帮助等业务动作。",
      placement: "bottom",
    },
  ];

  return (
    <DemoFrame>
      <div style={previewShellStyle}>
        <Stack gap="md">
          <div ref={targetRef} style={cardStyle}>
            <strong>发布检查</strong>
            <p style={paragraphStyle}>确认文档、示例和样式都已经准备好。</p>
          </div>
          <Button variant="outline" onClick={() => setOpen(true)}>
            查看引导
          </Button>
        </Stack>
      </div>
      <Tour
        open={open}
        steps={steps}
        onOpenChange={setOpen}
        actionsRender={(originNode) => (
          <Group gap="xs">
            <Button size="sm" variant="ghost" onClick={() => setOpen(false)}>
              跳过
            </Button>
            {originNode}
          </Group>
        )}
      />
    </DemoFrame>
  );
};

export default defineDoc({
  id: "tour",
  name: "Tour",
  packageName: "willa/Tour",
  description: "用于新功能介绍、关键路径说明和产品操作引导的漫游组件。",
  imports: [
    { name: "Tour", from: "willa/Tour" },
    { name: "Button", from: "willa/Button" },
  ],
  css: "willa/Tour.css",
  demo: {
    name: "TourPreview",
    component: TourPreview,
  },
  code: unindent(`
    import { useRef, useState } from "react";
    import { RocketIcon } from "@radix-ui/react-icons";
    import { Button } from "willa/Button";
    import { Tour, type TourStep } from "willa/Tour";
    import "willa/Button.css";
    import "willa/Tour.css";

    const Demo = () => {
      const titleRef = useRef<HTMLDivElement>(null);
      const actionRef = useRef<HTMLDivElement>(null);
      const [open, setOpen] = useState(false);
      const [current, setCurrent] = useState(0);
      const steps: Array<TourStep> = [
        {
          target: () => titleRef.current,
          title: "确认任务上下文",
          description: "先让用户知道当前页面正在处理什么任务。",
          placement: "bottom-start",
        },
        {
          target: () => actionRef.current,
          title: "落到下一步操作",
          description: "最后把用户带到可以继续推进流程的按钮上。",
          placement: "top-end",
        },
      ];

      return (
        <>
          <div ref={titleRef}>产品反馈工作台</div>
          <div ref={actionRef}>
            <Button icon={<RocketIcon />} onClick={() => setOpen(true)}>
              开始引导
            </Button>
          </div>
          <Tour
            open={open}
            current={current}
            steps={steps}
            onChange={setCurrent}
            onOpenChange={setOpen}
          />
        </>
      );
    };
  `),
  sections: [
    {
      title: "居中引导",
      code: unindent(`
        import { useState } from "react";
        import { Button } from "willa/Button";
        import { Tour, type TourStep } from "willa/Tour";
        import "willa/Button.css";
        import "willa/Tour.css";

        const Demo = () => {
          const [open, setOpen] = useState(false);
          const steps: Array<TourStep> = [
            {
              title: "欢迎使用 Willa",
              description: "没有 target 的步骤会在视口中央展示。",
              type: "primary",
            },
          ];

          return (
            <>
              <Button onClick={() => setOpen(true)}>打开居中引导</Button>
              <Tour open={open} steps={steps} onOpenChange={setOpen} />
            </>
          );
        };
      `),
      content: <CenterTourPreview />,
    },
    {
      title: "自定义操作",
      code: unindent(`
        <Tour
          open={open}
          steps={steps}
          onOpenChange={setOpen}
          actionsRender={(originNode) => (
            <>
              <Button size="sm" variant="ghost" onClick={() => setOpen(false)}>
                跳过
              </Button>
              {originNode}
            </>
          )}
        />;
      `),
      content: <CustomActionsPreview />,
    },
  ],
  props: [
    {
      name: "steps",
      type: "Array<TourStep>",
      required: true,
      description: "引导步骤列表。",
    },
    {
      name: "open",
      type: "boolean",
      description: "受控打开状态。",
    },
    {
      name: "defaultOpen",
      type: "boolean",
      defaultValue: "false",
      description: "非受控默认打开状态。",
    },
    {
      name: "current",
      type: "number",
      description: "受控当前步骤下标。",
    },
    {
      name: "defaultCurrent",
      type: "number",
      defaultValue: "0",
      description: "非受控默认步骤下标。",
    },
    {
      name: "placement",
      type: 'TourPlacement | "center"',
      defaultValue: '"bottom"',
      description: "默认浮层位置，步骤内 placement 优先级更高。",
    },
    {
      name: "type",
      type: '"default" | "primary"',
      defaultValue: '"default"',
      description: "默认引导面板风格，步骤内 type 优先级更高。",
    },
    {
      name: "mask",
      type: "boolean",
      defaultValue: "true",
      description: "是否显示遮罩，步骤内 mask 优先级更高。",
    },
    {
      name: "arrow",
      type: "boolean",
      defaultValue: "true",
      description: "是否显示指向箭头，步骤内 arrow 优先级更高。",
    },
    {
      name: "gap",
      type: "number | { offset?: number | [number, number]; radius?: number }",
      defaultValue: "{ offset: 8, radius: 10 }",
      description: "高亮区域和目标元素之间的间距及圆角。",
    },
    {
      name: "keyboard",
      type: "boolean",
      defaultValue: "true",
      description: "是否启用 Escape、方向键等键盘操作。",
    },
    {
      name: "disabledInteraction",
      type: "boolean",
      defaultValue: "false",
      description: "是否禁止用户直接操作被高亮的目标元素。",
    },
    {
      name: "scrollIntoView",
      type: "boolean | ScrollIntoViewOptions",
      defaultValue: "true",
      description: "切换步骤时是否自动滚动目标元素到视口内。",
    },
    {
      name: "indicatorsRender",
      type: "(current: number, total: number) => ReactNode",
      description: "自定义步骤指示器。",
    },
    {
      name: "actionsRender",
      type: "(originNode: ReactNode, info: TourActionRenderInfo) => ReactNode",
      description: "自定义底部操作区。",
    },
    {
      name: "onChange",
      type: "(current: number) => void",
      description: "当前步骤变化回调。",
    },
    {
      name: "onOpenChange",
      type: "(open: boolean) => void",
      description: "打开状态变化回调。",
    },
    {
      name: "onClose",
      type: "() => void",
      description: "关闭引导回调。",
    },
    {
      name: "onFinish",
      type: "() => void",
      description: "完成引导回调。",
    },
  ],
});
