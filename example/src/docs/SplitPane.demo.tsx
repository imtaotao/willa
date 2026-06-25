import { useState } from "react";
import { Badge } from "willa/Badge";
import { Group } from "willa/Group";
import { ResizablePanel, SplitPane } from "willa/SplitPane";
import { Stack } from "willa/Stack";
import "willa/Badge.css";
import "willa/Group.css";
import "willa/SplitPane.css";
import "willa/Stack.css";

import { defineDoc } from "#example/catalog/defineDoc";

const splitPaneFrameStyle = {
  width: "min(100%, 62rem)",
  height: "22rem",
  border: "1px solid var(--willa-panel-border)",
  borderRadius: "0.85rem",
  overflow: "hidden",
  background: "var(--willa-panel-surface-bg)",
} as const;

const compactFrameStyle = {
  width: "min(100%, 56rem)",
  height: "18rem",
  border: "1px solid var(--willa-panel-border)",
  borderRadius: "0.85rem",
  overflow: "hidden",
  background: "var(--willa-panel-surface-bg)",
} as const;

const paneBaseStyle = {
  height: "100%",
  padding: "1.05rem",
  overflow: "auto",
} as const;

const sidebarStyle = {
  ...paneBaseStyle,
  background: "var(--willa-surface-soft)",
} as const;

const mainPaneStyle = {
  ...paneBaseStyle,
  background: "var(--willa-panel-surface-bg)",
} as const;

const inspectorStyle = {
  ...paneBaseStyle,
  background: "var(--willa-surface-tint)",
} as const;

const navItemStyle = {
  display: "grid",
  gap: "0.18rem",
  padding: "0.62rem 0.7rem",
  borderRadius: "0.55rem",
  background: "var(--willa-panel-surface-bg)",
  color: "var(--willa-text)",
} as const;

const activeNavItemStyle = {
  ...navItemStyle,
  background: "rgba(37, 99, 235, 0.09)",
} as const;

const cardStyle = {
  display: "grid",
  gap: "0.55rem",
  padding: "0.9rem",
  border: "1px solid var(--willa-panel-border)",
  borderRadius: "0.7rem",
  background: "var(--willa-surface-tint)",
} as const;

const metricStyle = {
  display: "grid",
  gap: "0.15rem",
  padding: "0.7rem",
  borderRadius: "0.6rem",
  background: "var(--willa-surface-soft)",
} as const;

const labelStyle = {
  color: "var(--willa-text-faint)",
  fontSize: "0.78rem",
} as const;

const DemoHeading = ({ title, meta }: { title: string; meta: string }) => (
  <Stack gap="xs">
    <strong>{title}</strong>
    <span style={labelStyle}>{meta}</span>
  </Stack>
);

const ResourceList = () => (
  <Stack gap="xs">
    <DemoHeading title="资源库" meta="拖动分割线调整导航宽度" />
    <div style={activeNavItemStyle}>
      <strong>产品文档</strong>
      <span style={labelStyle}>12 个文件</span>
    </div>
    <div style={navItemStyle}>
      <strong>用户反馈</strong>
      <span style={labelStyle}>36 条记录</span>
    </div>
    <div style={navItemStyle}>
      <strong>发布计划</strong>
      <span style={labelStyle}>4 个里程碑</span>
    </div>
  </Stack>
);

const ContentPreview = () => (
  <Stack gap="sm">
    <Group justify="between" align="center">
      <DemoHeading title="产品反馈摘要" meta="从上下文中整理可执行结论" />
      <Badge tone="success">已生成</Badge>
    </Group>
    <div style={cardStyle}>
      <strong>优先处理登录失败与移动端表单校验。</strong>
      <span style={labelStyle}>
        共命中 128 条反馈，影响付费转化、客服工单和批量导出流程。
      </span>
    </div>
    <Group gap="sm">
      <div style={metricStyle}>
        <strong>128</strong>
        <span style={labelStyle}>来源</span>
      </div>
      <div style={metricStyle}>
        <strong>4.2s</strong>
        <span style={labelStyle}>耗时</span>
      </div>
      <div style={metricStyle}>
        <strong>高</strong>
        <span style={labelStyle}>置信度</span>
      </div>
    </Group>
  </Stack>
);

const InspectorPane = () => (
  <Stack gap="sm">
    <DemoHeading title="属性" meta="选择内容后展示详情" />
    <div style={cardStyle}>
      <span style={labelStyle}>状态</span>
      <strong>等待人工确认</strong>
    </div>
    <div style={cardStyle}>
      <span style={labelStyle}>负责人</span>
      <strong>产品团队</strong>
    </div>
  </Stack>
);

const ControlledSplitPaneDemo = () => {
  const [sizes, setSizes] = useState<Array<number>>([28, 44, 28]);

  return (
    <Stack gap="sm" width="min(100%, 56rem)">
      <Group gap="xs">
        {sizes.map((size, index) => (
          <Badge key={index}>{Math.round(size)}%</Badge>
        ))}
      </Group>
      <SplitPane
        sizes={sizes}
        onSizesChange={setSizes}
        style={compactFrameStyle}
      >
        <ResizablePanel minSize={16} maxSize={45}>
          <div style={sidebarStyle}>
            <ResourceList />
          </div>
        </ResizablePanel>
        <ResizablePanel minSize={24}>
          <div style={mainPaneStyle}>
            <ContentPreview />
          </div>
        </ResizablePanel>
        <ResizablePanel minSize={16} maxSize={40}>
          <div style={inspectorStyle}>
            <InspectorPane />
          </div>
        </ResizablePanel>
      </SplitPane>
    </Stack>
  );
};

export default defineDoc({
  id: "split-pane",
  name: "SplitPane",
  category: "layout",
  packageName: "willa/SplitPane",
  description: "用于可拖拽、可键盘调整和可持久化的产品级分栏布局。",
  imports: [
    { name: "SplitPane", from: "willa/SplitPane" },
    { name: "ResizablePanel", from: "willa/SplitPane" },
    { name: "Stack", from: "willa/Stack" },
    { name: "Group", from: "willa/Group" },
    { name: "Badge", from: "willa/Badge" },
  ],
  css: "willa/SplitPane.css",
  demo: {
    name: "SplitPane",
    component: SplitPane,
    props: {
      defaultSizes: [32, 68],
      style: splitPaneFrameStyle,
    },
    children: (
      <>
        <ResizablePanel minSize={20} collapsible>
          <div style={sidebarStyle}>
            <ResourceList />
          </div>
        </ResizablePanel>
        <ResizablePanel minSize={35}>
          <div style={mainPaneStyle}>
            <ContentPreview />
          </div>
        </ResizablePanel>
      </>
    ),
  },
  code: `
    import { ResizablePanel, SplitPane } from "willa/SplitPane";
    import "willa/SplitPane.css";

    <SplitPane
      defaultSizes={[32, 68]}
      style={{
        width: "min(100%, 62rem)",
        height: "22rem",
        border: "1px solid var(--willa-panel-border)",
        borderRadius: "0.85rem",
        overflow: "hidden",
        background: "var(--willa-panel-surface-bg)",
      }}
    >
      <ResizablePanel minSize={20} collapsible>
        <div style={{ height: "100%", padding: "1.05rem", background: "var(--willa-surface-soft)" }}>
          <strong>资源库</strong>
        </div>
      </ResizablePanel>
      <ResizablePanel minSize={35}>
        <div style={{ height: "100%", padding: "1.05rem" }}>
          <strong>产品反馈摘要</strong>
        </div>
      </ResizablePanel>
    </SplitPane>;
  `,
  sections: [
    {
      title: "三栏工作台",
      code: `
        <SplitPane
          defaultSizes={[24, 52, 24]}
          storageKey="willa-demo-workspace-split"
          style={{
            width: "min(100%, 62rem)",
            height: "22rem",
            border: "1px solid var(--willa-panel-border)",
            borderRadius: "0.85rem",
            overflow: "hidden",
            background: "var(--willa-panel-surface-bg)",
          }}
        >
          <ResizablePanel minSize={16} maxSize={36} collapsible>
            <div style={{ height: "100%", padding: "1.05rem", background: "var(--willa-surface-soft)" }}>
              <strong>资源库</strong>
            </div>
          </ResizablePanel>
          <ResizablePanel minSize={30}>
            <div style={{ height: "100%", padding: "1.05rem" }}>
              <strong>产品反馈摘要</strong>
            </div>
          </ResizablePanel>
          <ResizablePanel minSize={16} maxSize={36} collapsible>
            <div style={{ height: "100%", padding: "1.05rem", background: "var(--willa-surface-tint)" }}>
              <strong>属性</strong>
            </div>
          </ResizablePanel>
        </SplitPane>;
      `,
      content: (
        <SplitPane
          defaultSizes={[24, 52, 24]}
          storageKey="willa-demo-workspace-split"
          style={{
            ...splitPaneFrameStyle,
            width: "min(100%, 62rem)",
            height: "22rem",
          }}
        >
          <ResizablePanel minSize={16} maxSize={36} collapsible>
            <div style={sidebarStyle}>
              <ResourceList />
            </div>
          </ResizablePanel>
          <ResizablePanel minSize={30}>
            <div style={mainPaneStyle}>
              <ContentPreview />
            </div>
          </ResizablePanel>
          <ResizablePanel minSize={16} maxSize={36} collapsible>
            <div style={inspectorStyle}>
              <InspectorPane />
            </div>
          </ResizablePanel>
        </SplitPane>
      ),
    },
    {
      title: "纵向分割",
      code: `
        <SplitPane
          orientation="vertical"
          defaultSizes={[58, 42]}
          style={{
            width: "min(100%, 56rem)",
            height: "18rem",
            border: "1px solid var(--willa-panel-border)",
            borderRadius: "0.85rem",
            overflow: "hidden",
            background: "var(--willa-panel-surface-bg)",
          }}
        >
          <ResizablePanel minSize={30}>
            <div style={{ height: "100%", padding: "1.05rem" }}>
              <strong>页面预览</strong>
            </div>
          </ResizablePanel>
          <ResizablePanel minSize={22} collapsible>
            <div style={{ height: "100%", padding: "1.05rem", background: "var(--willa-surface-soft)" }}>
              <strong>构建日志</strong>
            </div>
          </ResizablePanel>
        </SplitPane>;
      `,
      content: (
        <SplitPane
          orientation="vertical"
          defaultSizes={[58, 42]}
          style={{
            width: "min(100%, 56rem)",
            height: "18rem",
            border: "1px solid var(--willa-panel-border)",
            borderRadius: "0.85rem",
            overflow: "hidden",
            background: "var(--willa-panel-surface-bg)",
          }}
        >
          <ResizablePanel minSize={30}>
            <div style={mainPaneStyle}>
              <Stack gap="sm">
                <DemoHeading
                  title="页面预览"
                  meta="上方面板适合预览、画布和编辑区"
                />
                <div style={cardStyle}>
                  当前页面包含 4 个模块，正在等待发布。
                </div>
              </Stack>
            </div>
          </ResizablePanel>
          <ResizablePanel minSize={22} collapsible>
            <div style={sidebarStyle}>
              <Stack gap="xs">
                <DemoHeading
                  title="构建日志"
                  meta="下方面板适合输出和诊断信息"
                />
                <span>10:42 编译完成</span>
                <span>10:43 CSS 依赖已同步</span>
              </Stack>
            </div>
          </ResizablePanel>
        </SplitPane>
      ),
    },
    {
      title: "受控尺寸",
      code: `
        import { useState } from "react";
        import { Badge } from "willa/Badge";
        import { ResizablePanel, SplitPane } from "willa/SplitPane";
        import { Stack } from "willa/Stack";
        import "willa/Badge.css";
        import "willa/SplitPane.css";
        import "willa/Stack.css";

        const Demo = () => {
          const [sizes, setSizes] = useState<Array<number>>([28, 44, 28]);

          return (
            <Stack gap="sm" width="min(100%, 56rem)">
              <Group gap="xs">
                {sizes.map((size, index) => (
                  <Badge key={index}>{Math.round(size)}%</Badge>
                ))}
              </Group>
              <SplitPane
                sizes={sizes}
                onSizesChange={setSizes}
                style={{
                  height: "16rem",
                  border: "1px solid var(--willa-panel-border)",
                  borderRadius: "0.85rem",
                  overflow: "hidden",
                  background: "var(--willa-panel-surface-bg)",
                }}
              >
                <ResizablePanel minSize={16} maxSize={45}>资源库</ResizablePanel>
                <ResizablePanel minSize={24}>内容区</ResizablePanel>
                <ResizablePanel minSize={16} maxSize={40}>属性</ResizablePanel>
              </SplitPane>
            </Stack>
          );
        };
      `,
      content: <ControlledSplitPaneDemo />,
    },
  ],
  props: [
    {
      name: "children",
      type: "ReactNode",
      required: true,
      description: "由 ResizablePanel 组成的面板列表。",
    },
    {
      name: "className",
      type: "string",
      description: "根容器的 className。",
    },
    {
      name: "orientation",
      type: '"horizontal" | "vertical"',
      defaultValue: '"horizontal"',
      description: "分割方向。",
    },
    {
      name: "sizes",
      type: "Array<number>",
      description: "受控尺寸，按百分比表示。",
    },
    {
      name: "defaultSizes",
      type: "Array<number>",
      description: "默认尺寸，按百分比表示。",
    },
    {
      name: "storageKey",
      type: "string",
      description: "本地持久化尺寸的 localStorage key。",
    },
    {
      name: "resizeStep",
      type: "number",
      defaultValue: "1",
      description: "拖拽调整步进，单位是百分比。",
    },
    {
      name: "keyboardStep",
      type: "number",
      defaultValue: "5",
      description: "键盘方向键调整步进，单位是百分比。",
    },
    {
      name: "disabled",
      type: "boolean",
      defaultValue: "false",
      description: "是否禁用拖拽和键盘调整。",
    },
    {
      name: "onSizesChange",
      type: "(sizes: Array<number>) => void",
      description: "尺寸变化回调。",
    },
    {
      name: "onResizeStart",
      type: "(event: SplitPaneResizeEvent) => void",
      description: "开始调整尺寸时触发。",
    },
    {
      name: "onResizeEnd",
      type: "(event: SplitPaneResizeEvent) => void",
      description: "结束调整尺寸时触发。",
    },
    {
      name: "ResizablePanel.defaultSize",
      type: "number",
      group: "ResizablePanel",
      description: "单个面板默认尺寸。",
    },
    {
      name: "ResizablePanel.id",
      type: "string",
      group: "ResizablePanel",
      description: "单个面板根元素的 id。",
    },
    {
      name: "ResizablePanel.minSize",
      type: "number",
      group: "ResizablePanel",
      defaultValue: "8",
      description: "单个面板最小尺寸。",
    },
    {
      name: "ResizablePanel.maxSize",
      type: "number",
      group: "ResizablePanel",
      defaultValue: "92",
      description: "单个面板最大尺寸。",
    },
    {
      name: "ResizablePanel.collapsible",
      type: "boolean",
      group: "ResizablePanel",
      description: "是否允许通过双击分割线折叠。",
    },
    {
      name: "ResizablePanel.collapsedSize",
      type: "number",
      group: "ResizablePanel",
      defaultValue: "0",
      description: "折叠后的尺寸。",
    },
    {
      name: "ResizablePanel.className",
      type: "string",
      group: "ResizablePanel",
      description: "单个面板根元素的 className。",
    },
    {
      name: "ResizablePanel.children",
      type: "ReactNode",
      group: "ResizablePanel",
      description: "单个面板内容。",
    },
  ],
});
