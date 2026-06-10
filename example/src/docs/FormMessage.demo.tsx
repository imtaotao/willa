import {
  CheckCircledIcon,
  ExclamationTriangleIcon,
  InfoCircledIcon,
} from "@radix-ui/react-icons";
import { Button } from "willa/Button";
import { Form } from "willa/Form";
import { FormActions } from "willa/FormActions";
import { FormField } from "willa/FormField";
import { FormGroup } from "willa/FormGroup";
import { FormMessage } from "willa/FormMessage";
import { Input } from "willa/Input";
import "willa/Button.css";
import "willa/Form.css";
import "willa/FormActions.css";
import "willa/FormField.css";
import "willa/FormGroup.css";
import "willa/FormMessage.css";
import "willa/Input.css";

import { defineDoc } from "#example/catalog/defineDoc";

const stackStyle = {
  display: "grid",
  gap: "0.85rem",
  maxWidth: "42rem",
} as const;

export default defineDoc({
  id: "form-message",
  name: "FormMessage",
  category: "form",
  packageName: "willa/FormMessage",
  description: "用于表单中的辅助提示、状态反馈和提交结果说明。",
  imports: [{ name: "FormMessage", from: "willa/FormMessage" }],
  css: "willa/FormMessage.css",
  demo: {
    name: "FormMessage",
    component: FormMessage,
    props: {
      tone: "info",
      icon: <InfoCircledIcon />,
    },
    children: "保存后会立即同步到当前工作区。",
  },
  code: `
    import { InfoCircledIcon } from "@radix-ui/react-icons";
    import { FormMessage } from "willa/FormMessage";
    import "willa/FormMessage.css";

    <FormMessage tone="info" icon={<InfoCircledIcon />}>
      保存后会立即同步到当前工作区。
    </FormMessage>;
  `,
  sections: [
    {
      title: "表单内使用",
      code: `
        <Form
          actions={
            <FormActions>
              <Button variant="ghost">取消</Button>
              <Button type="submit">保存</Button>
            </FormActions>
          }
        >
          <FormGroup title="发布配置" description="适合展示提交前后的状态信息。">
            <FormField label="配置名称" required>
              <Input defaultValue="模型发布策略" width="100%" />
            </FormField>
            <FormMessage tone="warning" icon={<ExclamationTriangleIcon />}>
              当前配置会影响线上模型，请确认灰度范围。
            </FormMessage>
          </FormGroup>
        </Form>;
      `,
      content: (
        <Form
          actions={
            <FormActions>
              <Button variant="ghost">取消</Button>
              <Button type="submit">保存</Button>
            </FormActions>
          }
        >
          <FormGroup
            title="发布配置"
            description="适合展示提交前后的状态信息。"
          >
            <FormField label="配置名称" required>
              <Input defaultValue="模型发布策略" width="100%" />
            </FormField>
            <FormMessage tone="warning" icon={<ExclamationTriangleIcon />}>
              当前配置会影响线上模型，请确认灰度范围。
            </FormMessage>
          </FormGroup>
        </Form>
      ),
    },
    {
      title: "状态类型",
      code: `
        <div style={stackStyle}>
          <FormMessage tone="info" icon={<InfoCircledIcon />}>
            保存后会立即同步到当前工作区。
          </FormMessage>
          <FormMessage tone="success" icon={<CheckCircledIcon />}>
            配置已保存，可以继续发布。
          </FormMessage>
          <FormMessage tone="warning" icon={<ExclamationTriangleIcon />}>
            当前配置会影响线上模型，请确认灰度范围。
          </FormMessage>
          <FormMessage tone="error">提交失败，请检查必填字段。</FormMessage>
        </div>;
      `,
      content: (
        <div style={stackStyle}>
          <FormMessage tone="info" icon={<InfoCircledIcon />}>
            保存后会立即同步到当前工作区。
          </FormMessage>
          <FormMessage tone="success" icon={<CheckCircledIcon />}>
            配置已保存，可以继续发布。
          </FormMessage>
          <FormMessage tone="warning" icon={<ExclamationTriangleIcon />}>
            当前配置会影响线上模型，请确认灰度范围。
          </FormMessage>
          <FormMessage tone="error">提交失败，请检查必填字段。</FormMessage>
        </div>
      ),
    },
  ],
  props: [
    {
      name: "children",
      type: "ReactNode",
      required: true,
      description: "消息内容。",
    },
    {
      name: "tone",
      type: '"info" | "success" | "warning" | "error"',
      description: "消息语义类型。",
    },
    {
      name: "icon",
      type: "ReactNode",
      description: "消息前置图标。",
    },
    {
      name: "role",
      type: "AriaRole",
      description: "自定义可访问性角色；错误态默认 alert，其余默认 status。",
    },
  ],
});
