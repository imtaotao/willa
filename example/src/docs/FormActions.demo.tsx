import {
  CheckIcon,
  Cross2Icon,
  DownloadIcon,
  ReloadIcon,
} from "@radix-ui/react-icons";
import { Button } from "willa/Button";
import { FormActions } from "willa/FormActions";
import { IconButton } from "willa/IconButton";
import "willa/Button.css";
import "willa/FormActions.css";
import "willa/IconButton.css";

import { defineDoc } from "#example/catalog/defineDoc";

const stackStyle = {
  display: "grid",
  gap: "1rem",
  maxWidth: "42rem",
} as const;

export default defineDoc({
  id: "form-actions",
  name: "FormActions",
  category: "form",
  packageName: "willa/FormActions",
  description: "用于表单底部提交、取消和辅助操作的布局组件。",
  imports: [{ name: "FormActions", from: "willa/FormActions" }],
  css: "willa/FormActions.css",
  demo: {
    name: "FormActions",
    component: FormActions,
    props: { gap: "md" },
    children: [
      {
        name: "Button",
        component: Button,
        props: { variant: "ghost" },
        children: "取消",
      },
      {
        name: "Button",
        component: Button,
        props: { type: "submit" },
        children: "保存",
      },
    ],
  },
  code: `
    import { Button } from "willa/Button";
    import { FormActions } from "willa/FormActions";
    import "willa/Button.css";
    import "willa/FormActions.css";

    <FormActions gap="md">
      <Button variant="ghost">取消</Button>
      <Button type="submit">保存</Button>
    </FormActions>;
  `,
  sections: [
    {
      title: "对齐方式",
      code: `
        <div style={stackStyle}>
          <FormActions align="start">
            <Button size="sm">保存</Button>
            <Button size="sm" variant="ghost">
              取消
            </Button>
          </FormActions>
          <FormActions align="between">
            <Button size="sm" variant="ghost">
              删除
            </Button>
            <Button size="sm">保存</Button>
          </FormActions>
        </div>;
      `,
      content: (
        <div style={stackStyle}>
          <FormActions align="start">
            <Button size="sm">保存</Button>
            <Button size="sm" variant="ghost">
              取消
            </Button>
          </FormActions>
          <FormActions align="between">
            <Button size="sm" variant="ghost">
              删除
            </Button>
            <Button size="sm">保存</Button>
          </FormActions>
        </div>
      ),
    },
    {
      title: "图标操作",
      code: `
        <FormActions align="start" gap="xs">
          <IconButton
            icon={<ReloadIcon />}
            ariaLabel="重新加载"
            size="sm"
            variant="ghost"
          />
          <IconButton
            icon={<DownloadIcon />}
            ariaLabel="下载"
            size="sm"
            variant="ghost"
          />
          <IconButton icon={<CheckIcon />} ariaLabel="确认" size="sm" variant="ghost" />
          <IconButton
            icon={<Cross2Icon />}
            ariaLabel="关闭"
            size="sm"
            variant="ghost"
          />
        </FormActions>;
      `,
      content: (
        <FormActions align="start" gap="xs">
          <IconButton
            icon={<ReloadIcon />}
            ariaLabel="重新加载"
            size="sm"
            variant="ghost"
          />
          <IconButton
            icon={<DownloadIcon />}
            ariaLabel="下载"
            size="sm"
            variant="ghost"
          />
          <IconButton
            icon={<CheckIcon />}
            ariaLabel="确认"
            size="sm"
            variant="ghost"
          />
          <IconButton
            icon={<Cross2Icon />}
            ariaLabel="关闭"
            size="sm"
            variant="ghost"
          />
        </FormActions>
      ),
    },
    {
      title: "纵向布局",
      code: `
        <FormActions direction="column">
          <Button>确认提交</Button>
          <Button variant="outline">稍后再说</Button>
        </FormActions>;
      `,
      content: (
        <FormActions direction="column">
          <Button>确认提交</Button>
          <Button variant="outline">稍后再说</Button>
        </FormActions>
      ),
    },
  ],
  props: [
    {
      name: "children",
      type: "ReactNode",
      required: true,
      description: "操作按钮或自定义操作内容。",
    },
    {
      name: "align",
      type: '"start" | "end" | "between"',
      description: "横向对齐方式。",
    },
    {
      name: "direction",
      type: '"row" | "column"',
      description: "排列方向。",
    },
    {
      name: "gap",
      type: '"xs" | "sm" | "md"',
      description: "操作项之间的间距。",
    },
    {
      name: "sticky",
      type: "boolean",
      description: "吸附在滚动容器底部。",
    },
  ],
});
