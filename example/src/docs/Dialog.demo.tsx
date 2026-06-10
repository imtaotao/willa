import { Dialog } from "willa/Dialog";
import { Button } from "willa/Button";
import "willa/Dialog.css";
import "willa/Button.css";

import { defineDoc } from "#example/catalog/defineDoc";

const contentStyle = {
  display: "grid",
  gap: "0.65rem",
} as const;

const paragraphStyle = {
  margin: 0,
  color: "var(--willa-text)",
} as const;

const noteStyle = {
  margin: 0,
  color: "var(--willa-text-soft)",
  fontSize: "0.88rem",
} as const;

const footerStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "flex-end",
  gap: "0.55rem",
} as const;

export default defineDoc({
  id: "dialog",
  name: "Dialog",
  packageName: "willa/Dialog",
  description: "用于确认操作、补充信息和轻量表单的基础弹层。",
  imports: [{ name: "Dialog", from: "willa/Dialog" }],
  css: "willa/Dialog.css",
  demo: {
    name: "Dialog",
    component: Dialog,
    props: {
      trigger: <Button variant="soft">打开 Dialog</Button>,
      title: "发布前确认",
      description: "确认后内容会进入公开队列。",
      confirmText: "确认发布",
    },
    children: (
      <div style={contentStyle}>
        <p style={paragraphStyle}>这篇内容包含 3 张图片和 2 个代码片段。</p>
        <p style={noteStyle}>发布后仍然可以继续编辑，但读者会看到最新版本。</p>
      </div>
    ),
  },
  code: `
    import { Dialog } from "willa/Dialog";
    import { Button } from "willa/Button";
    import "willa/Dialog.css";
    import "willa/Button.css";

    <Dialog
      trigger={<Button variant="soft">打开 Dialog</Button>}
      title="发布前确认"
      description="确认后内容会进入公开队列。"
      confirmText="确认发布"
    >
      <p>这篇内容包含 3 张图片和 2 个代码片段。</p>
    </Dialog>;
  `,
  sections: [
    {
      title: "自定义底部",
      code: `
        <Dialog
          trigger={<Button variant="outline">打开设置</Button>}
          title="阅读偏好"
          description="这些设置只会影响当前设备。"
          footer={
            <div style={footerStyle}>
              <Button variant="ghost">稍后再说</Button>
              <Button variant="solid">保存设置</Button>
            </div>
          }
        >
          <div style={contentStyle}>
            <p style={paragraphStyle}>可以在这里放入表单、说明或自定义组件。</p>
            <p style={noteStyle}>Dialog 只负责弹层结构，内容由业务自己组合。</p>
          </div>
        </Dialog>;
      `,
      content: (
        <Dialog
          trigger={<Button variant="outline">打开设置</Button>}
          title="阅读偏好"
          description="这些设置只会影响当前设备。"
          footer={
            <div style={footerStyle}>
              <Button variant="ghost">稍后再说</Button>
              <Button variant="solid">保存设置</Button>
            </div>
          }
        >
          <div style={contentStyle}>
            <p style={paragraphStyle}>可以在这里放入表单、说明或自定义组件。</p>
            <p style={noteStyle}>Dialog 只负责弹层结构，内容由业务自己组合。</p>
          </div>
        </Dialog>
      ),
    },
    {
      title: "尺寸",
      code: `
        <div style={footerStyle}>
          <Dialog
            trigger={<Button variant="soft">小尺寸</Button>}
            title="小尺寸弹层"
            description="适合简短确认。"
            size="sm"
            confirmText="知道了"
          />
          <Dialog
            trigger={<Button variant="soft">大尺寸</Button>}
            title="大尺寸弹层"
            description="适合展示更多内容。"
            size="lg"
            confirmText="关闭"
          >
            <p style={paragraphStyle}>
              大尺寸会提供更宽的内容区域，但仍然会限制最大高度并允许内容滚动。
            </p>
          </Dialog>
        </div>;
      `,
      content: (
        <div style={footerStyle}>
          <Dialog
            trigger={<Button variant="soft">小尺寸</Button>}
            title="小尺寸弹层"
            description="适合简短确认。"
            size="sm"
            confirmText="知道了"
          />
          <Dialog
            trigger={<Button variant="soft">大尺寸</Button>}
            title="大尺寸弹层"
            description="适合展示更多内容。"
            size="lg"
            confirmText="关闭"
          >
            <p style={paragraphStyle}>
              大尺寸会提供更宽的内容区域，但仍然会限制最大高度并允许内容滚动。
            </p>
          </Dialog>
        </div>
      ),
    },
  ],
  props: [
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
      description: "打开状态变化时触发。",
    },
    {
      name: "trigger",
      type: "ReactElement",
      description: "触发打开弹层的元素，会自动注入点击事件和 aria 状态。",
    },
    {
      name: "title",
      type: "ReactNode",
      description: "弹层标题。",
    },
    {
      name: "description",
      type: "ReactNode",
      description: "标题下方的补充说明。",
    },
    {
      name: "children",
      type: "ReactNode",
      description: "弹层主体内容。",
    },
    {
      name: "footer",
      type: "ReactNode",
      description: "自定义底部区域；传入后会替代默认操作按钮。",
    },
    {
      name: "confirmText",
      type: "ReactNode",
      description: "默认确认按钮文案；传入后会渲染默认底部。",
    },
    {
      name: "closeText",
      type: "ReactNode",
      description: "默认取消按钮文案。",
    },
    {
      name: "onConfirm",
      type: "() => void",
      description: "点击默认确认按钮时触发，随后关闭弹层。",
    },
    {
      name: "size",
      type: '"sm" | "md" | "lg"',
      description: "弹层宽度尺寸。",
    },
    {
      name: "closeOnOverlayClick",
      type: "boolean",
      description: "点击遮罩时是否关闭，默认开启。",
    },
    {
      name: "closeOnEscape",
      type: "boolean",
      description: "按 Escape 时是否关闭，默认开启。",
    },
    {
      name: "showCloseButton",
      type: "boolean",
      description: "是否展示右上角关闭按钮，默认展示。",
    },
    {
      name: "ariaLabel",
      type: "string",
      description: "无标题弹层的可访问名称。",
    },
    {
      name: "className",
      type: "string",
      description: "传给弹层面板的类名。",
    },
    {
      name: "overlayClassName",
      type: "string",
      description: "传给遮罩层的类名。",
    },
    {
      name: "contentClassName",
      type: "string",
      description: "传给主体内容区域的类名。",
    },
  ],
});
