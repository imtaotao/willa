import {
  BellIcon,
  BookmarkIcon,
  ChatBubbleIcon,
  Pencil2Icon,
  RocketIcon,
} from "@radix-ui/react-icons";
import { unindent } from "aidly";
import { Badge } from "willa/Badge";
import { Card } from "willa/Card";
import { FloatButton, FloatButtonGroup } from "willa/FloatButton";
import { Group } from "willa/Group";
import { Stack } from "willa/Stack";
import "willa/Badge.css";
import "willa/Card.css";
import "willa/FloatButton.css";
import "willa/Group.css";
import "willa/Stack.css";

import { defineDoc } from "#example/catalog/defineDoc";

const previewFrameStyle = {
  position: "relative",
  width: "min(100%, 50rem)",
  minHeight: "19rem",
  padding: "1.25rem",
  overflow: "hidden",
  background: "var(--willa-panel-surface-bg)",
  border: "1px solid var(--willa-panel-border)",
  borderRadius: "1rem",
} as const;

const contentCardStyle = {
  width: "min(100%, 26rem)",
  padding: "1rem",
} as const;

const BackToTopPreview = () => {
  return (
    <div
      data-float-button-scroll
      style={{
        position: "relative",
        width: "min(100%, 50rem)",
        height: "22rem",
        overflow: "auto",
        padding: "1.25rem",
        background: "var(--willa-panel-surface-bg)",
        border: "1px solid var(--willa-panel-border)",
        borderRadius: "1rem",
      }}
    >
      <Stack gap="md">
        {Array.from({ length: 8 }).map((_, index) => (
          <Card key={index}>
            <Stack gap="xs">
              <strong>更新记录 {index + 1}</strong>
              <p style={{ margin: 0, color: "var(--willa-text-soft)" }}>
                用于演示滚动容器中的 backToTop 行为，悬浮按钮会在滚动后出现。
              </p>
            </Stack>
          </Card>
        ))}
      </Stack>
      <FloatButton
        backToTop
        target={() => document.querySelector("[data-float-button-scroll]")}
      />
    </div>
  );
};

const BasicPreview = () => {
  return (
    <div style={previewFrameStyle}>
      <Stack gap="lg">
        <Group justify="between" align="start">
          <Stack gap="xs">
            <strong>产品反馈工作台</strong>
            <p style={{ margin: 0, color: "var(--willa-text-soft)" }}>
              快速进入编辑、消息和回到顶部等高频操作。
            </p>
          </Stack>
          <Badge tone="info">内部预览</Badge>
        </Group>
        <Card style={contentCardStyle}>
          <Stack gap="xs">
            <strong>当前工作项</strong>
            <p style={{ margin: 0, color: "var(--willa-text-soft)" }}>
              本周需要同步评论体验、文件预览和 Tour 动画修复。
            </p>
          </Stack>
        </Card>
      </Stack>
      <FloatButton
        fixed={false}
        icon={<Pencil2Icon />}
        tooltip="创建反馈"
        ariaLabel="创建反馈"
      />
    </div>
  );
};

const LabeledPreview = () => {
  return (
    <div style={previewFrameStyle}>
      <Card style={{ width: "min(100%, 30rem)", padding: "1rem" }}>
        <Stack gap="xs">
          <strong>内容评审面板</strong>
          <p style={{ margin: 0, color: "var(--willa-text-soft)" }}>
            展示带文案的悬浮入口，适合需要明确语义的操作。
          </p>
        </Stack>
      </Card>
      <FloatButton
        fixed={false}
        shape="square"
        icon={<RocketIcon />}
        label="发布检查"
        description="进入预检流程"
        tooltip="执行发布前检查"
        variant="primary"
        badge="3"
      />
    </div>
  );
};

const GroupPreview = () => {
  return (
    <div style={previewFrameStyle}>
      <Stack gap="md">
        <Card style={{ width: "min(100%, 30rem)", padding: "1rem" }}>
          <Stack gap="xs">
            <strong>组合操作</strong>
            <p style={{ margin: 0, color: "var(--willa-text-soft)" }}>
              多个高频操作可以折叠到一个主入口下，避免右下角堆太多按钮。
            </p>
          </Stack>
        </Card>
      </Stack>
      <FloatButtonGroup fixed={false} defaultOpen triggerTooltip="更多快捷操作">
        <FloatButton
          icon={<ChatBubbleIcon />}
          tooltip="查看评论"
          ariaLabel="查看评论"
        />
        <FloatButton
          icon={<BellIcon />}
          tooltip="查看通知"
          ariaLabel="查看通知"
          badge="2"
        />
        <FloatButton
          icon={<BookmarkIcon />}
          tooltip="收藏当前页"
          ariaLabel="收藏当前页"
        />
      </FloatButtonGroup>
    </div>
  );
};

export default defineDoc({
  id: "float-button",
  name: "FloatButton",
  category: "content",
  packageName: "willa/FloatButton",
  description: "用于页面固定入口、回到顶部和高频快捷操作的悬浮按钮组件。",
  imports: [
    { name: "FloatButton, FloatButtonGroup", from: "willa/FloatButton" },
  ],
  css: "willa/FloatButton.css",
  demo: {
    name: "BasicPreview",
    component: BasicPreview,
  },
  code: unindent(`
    import { Pencil2Icon } from "@radix-ui/react-icons";
    import { Badge } from "willa/Badge";
    import { Card } from "willa/Card";
    import { FloatButton } from "willa/FloatButton";
    import { Group } from "willa/Group";
    import { Stack } from "willa/Stack";
    import "willa/Badge.css";
    import "willa/Card.css";
    import "willa/FloatButton.css";
    import "willa/Group.css";
    import "willa/Stack.css";

    <div
      style={{
        position: "relative",
        width: "min(100%, 50rem)",
        minHeight: "19rem",
        padding: "1.25rem",
        overflow: "hidden",
        background: "var(--willa-panel-surface-bg)",
        border: "1px solid var(--willa-panel-border)",
        borderRadius: "1rem",
      }}
    >
      <Stack gap="lg">
        <Group justify="between" align="start">
          <Stack gap="xs">
            <strong>产品反馈工作台</strong>
            <p style={{ margin: 0, color: "var(--willa-text-soft)" }}>
              快速进入编辑、消息和回到顶部等高频操作。
            </p>
          </Stack>
          <Badge tone="info">内部预览</Badge>
        </Group>
        <Card style={{ width: "min(100%, 26rem)", padding: "1rem" }}>
          <Stack gap="xs">
            <strong>当前工作项</strong>
            <p style={{ margin: 0, color: "var(--willa-text-soft)" }}>
              本周需要同步评论体验、文件预览和 Tour 动画修复。
            </p>
          </Stack>
        </Card>
      </Stack>
      <FloatButton
        fixed={false}
        icon={<Pencil2Icon />}
        tooltip="创建反馈"
        ariaLabel="创建反馈"
      />
    </div>;
  `),
  sections: [
    {
      title: "带文案",
      code: unindent(`
        import { RocketIcon } from "@radix-ui/react-icons";
        import { Card } from "willa/Card";
        import { FloatButton } from "willa/FloatButton";
        import { Stack } from "willa/Stack";
        import "willa/Card.css";
        import "willa/FloatButton.css";
        import "willa/Stack.css";

        <div
          style={{
            position: "relative",
            width: "min(100%, 50rem)",
            minHeight: "19rem",
            padding: "1.25rem",
            overflow: "hidden",
            background: "var(--willa-panel-surface-bg)",
            border: "1px solid var(--willa-panel-border)",
            borderRadius: "1rem",
          }}
        >
          <Card style={{ width: "min(100%, 30rem)", padding: "1rem" }}>
            <Stack gap="xs">
              <strong>内容评审面板</strong>
              <p style={{ margin: 0, color: "var(--willa-text-soft)" }}>
                展示带文案的悬浮入口，适合需要明确语义的操作。
              </p>
            </Stack>
          </Card>
          <FloatButton
            fixed={false}
            shape="square"
            icon={<RocketIcon />}
            label="发布检查"
            description="进入预检流程"
            tooltip="执行发布前检查"
            variant="primary"
            badge="3"
          />
        </div>;
      `),
      content: <LabeledPreview />,
    },
    {
      title: "分组操作",
      code: unindent(`
        import {
          BellIcon,
          BookmarkIcon,
          ChatBubbleIcon,
        } from "@radix-ui/react-icons";
        import { Card } from "willa/Card";
        import { FloatButton, FloatButtonGroup } from "willa/FloatButton";
        import { Stack } from "willa/Stack";
        import "willa/Card.css";
        import "willa/FloatButton.css";
        import "willa/Stack.css";

        <div
          style={{
            position: "relative",
            width: "min(100%, 50rem)",
            minHeight: "19rem",
            padding: "1.25rem",
            overflow: "hidden",
            background: "var(--willa-panel-surface-bg)",
            border: "1px solid var(--willa-panel-border)",
            borderRadius: "1rem",
          }}
        >
          <Stack gap="md">
            <Card style={{ width: "min(100%, 30rem)", padding: "1rem" }}>
              <Stack gap="xs">
                <strong>组合操作</strong>
                <p style={{ margin: 0, color: "var(--willa-text-soft)" }}>
                  多个高频操作可以折叠到一个主入口下，避免右下角堆太多按钮。
                </p>
              </Stack>
            </Card>
          </Stack>
          <FloatButtonGroup
            fixed={false}
            defaultOpen
            triggerTooltip="更多快捷操作"
          >
            <FloatButton
              icon={<ChatBubbleIcon />}
              tooltip="查看评论"
              ariaLabel="查看评论"
            />
            <FloatButton
              icon={<BellIcon />}
              tooltip="查看通知"
              ariaLabel="查看通知"
              badge="2"
            />
            <FloatButton
              icon={<BookmarkIcon />}
              tooltip="收藏当前页"
              ariaLabel="收藏当前页"
            />
          </FloatButtonGroup>
        </div>;
      `),
      content: <GroupPreview />,
    },
    {
      title: "回到顶部",
      code: unindent(`
        import { ArrowUpIcon } from "@radix-ui/react-icons";
        import { Card } from "willa/Card";
        import { FloatButton } from "willa/FloatButton";
        import { Stack } from "willa/Stack";
        import "willa/Card.css";
        import "willa/FloatButton.css";
        import "willa/Stack.css";

        <div
          data-float-button-scroll
          style={{
            position: "relative",
            width: "min(100%, 50rem)",
            height: "22rem",
            overflow: "auto",
            padding: "1.25rem",
            background: "var(--willa-panel-surface-bg)",
            border: "1px solid var(--willa-panel-border)",
            borderRadius: "1rem",
          }}
        >
          <Stack gap="md">
            {Array.from({ length: 8 }).map((_, index) => (
              <Card key={index}>
                <Stack gap="xs">
                  <strong>更新记录 {index + 1}</strong>
                  <p style={{ margin: 0, color: "var(--willa-text-soft)" }}>
                    用于演示滚动容器中的 backToTop 行为，悬浮按钮会在滚动后出现。
                  </p>
                </Stack>
              </Card>
            ))}
          </Stack>
          <FloatButton
            icon={<ArrowUpIcon />}
            backToTop
            target={() => document.querySelector("[data-float-button-scroll]")}
          />
        </div>;
      `),
      content: <BackToTopPreview />,
    },
  ],
  props: [
    {
      name: "icon",
      type: "ReactNode",
      description: "按钮主图标。",
    },
    {
      name: "label",
      type: "ReactNode",
      description: "主文案。传入后默认会切换为 square 形态。",
    },
    {
      name: "description",
      type: "ReactNode",
      description: "辅助说明文案。",
    },
    {
      name: "tooltip",
      type: "ReactNode",
      description: "悬浮提示内容。",
    },
    {
      name: "badge",
      type: "ReactNode",
      description: "右上角徽标内容。",
    },
    {
      name: "variant",
      type: '"default" | "primary"',
      defaultValue: '"default"',
      description: "视觉变体。",
    },
    {
      name: "shape",
      type: '"circle" | "square"',
      defaultValue: "内容按钮自动推导",
      description: "按钮形状。未传时会根据是否有文字自动推导。",
    },
    {
      name: "size",
      type: '"md" | "lg"',
      defaultValue: '"md"',
      description: "按钮尺寸。",
    },
    {
      name: "placement",
      type: '"bottom-right" | "bottom-left" | "top-right" | "top-left"',
      defaultValue: '"bottom-right"',
      description: "固定模式下的停靠位置。",
    },
    {
      name: "fixed",
      type: "boolean",
      defaultValue: "true",
      description: "是否使用 fixed 固定到视口。",
    },
    {
      name: "offset",
      type: "readonly [number | string, number | string]",
      defaultValue: "[24, 24]",
      description: "距离视口或容器边缘的偏移量。",
    },
    {
      name: "zIndex",
      type: "number",
      description: "固定模式下的层级。",
    },
    {
      name: "ariaLabel",
      type: "string",
      description: "无文案时建议提供的无障碍标签。",
    },
    {
      name: "backToTop",
      type: "boolean",
      defaultValue: "false",
      description: "开启后切换为回到顶部按钮行为。",
    },
    {
      name: "visibilityHeight",
      type: "number",
      defaultValue: "320",
      description: "回到顶部按钮出现的滚动阈值。",
    },
    {
      name: "target",
      type: "Window | HTMLElement | null | (() => Window | HTMLElement | null)",
      description: "回到顶部行为和可见性监听使用的滚动容器。",
    },
    {
      name: "scrollBehavior",
      type: "ScrollBehavior",
      defaultValue: '"smooth"',
      description: "回到顶部时的滚动行为。",
    },
    {
      name: "href",
      type: "string",
      description: "传入后以链接按钮渲染。",
    },
    {
      name: "children",
      group: "FloatButtonGroup",
      required: true,
      type: "ReactNode",
      description: "分组内的悬浮按钮列表。",
    },
    {
      name: "open",
      group: "FloatButtonGroup",
      type: "boolean",
      description: "受控展开状态。",
    },
    {
      name: "defaultOpen",
      group: "FloatButtonGroup",
      type: "boolean",
      defaultValue: "false",
      description: "默认展开状态。",
    },
    {
      name: "onOpenChange",
      group: "FloatButtonGroup",
      type: "(open: boolean) => void",
      description: "展开状态变化回调。",
    },
    {
      name: "triggerIcon",
      group: "FloatButtonGroup",
      type: "ReactNode",
      defaultValue: "<PlusIcon />",
      description: "主触发按钮图标。",
    },
    {
      name: "triggerTooltip",
      group: "FloatButtonGroup",
      type: "ReactNode",
      description: "主触发按钮提示内容。",
    },
    {
      name: "triggerAriaLabel",
      group: "FloatButtonGroup",
      type: "string",
      defaultValue: '"打开悬浮操作"',
      description: "主触发按钮的无障碍标签。",
    },
    {
      name: "direction",
      group: "FloatButtonGroup",
      type: '"up" | "down" | "left" | "right"',
      defaultValue: '"up"',
      description: "分组按钮展开方向。",
    },
  ],
});
