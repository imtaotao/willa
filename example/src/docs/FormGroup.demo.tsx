import { Checkbox } from "willa/Checkbox";
import { Button } from "willa/Button";
import { Form } from "willa/Form";
import { FormActions } from "willa/FormActions";
import { FormField } from "willa/FormField";
import { FormGroup } from "willa/FormGroup";
import { Input } from "willa/Input";
import { Select } from "willa/Select";
import "willa/Button.css";
import "willa/Checkbox.css";
import "willa/Form.css";
import "willa/FormActions.css";
import "willa/FormField.css";
import "willa/FormGroup.css";
import "willa/Input.css";
import "willa/Select.css";

import { defineDoc } from "#example/catalog/defineDoc";

const modelOptions = [
  { value: "fast", label: "快速模型" },
  { value: "balanced", label: "均衡模型" },
  { value: "quality", label: "高质量模型" },
];

export default defineDoc({
  id: "form-group",
  name: "FormGroup",
  category: "form",
  packageName: "willa/FormGroup",
  description: "用于表单分组、字段间距和移动端自适应布局。",
  imports: [{ name: "FormGroup", from: "willa/FormGroup" }],
  css: "willa/FormGroup.css",
  demo: {
    name: "FormGroup",
    component: FormGroup,
    props: {
      title: "基础配置",
      description: "把相关字段收拢在同一组里。",
    },
    children: [
      {
        name: "FormField",
        component: FormField,
        props: {
          label: "工作区名称",
        },
        children: [
          {
            name: "Input",
            component: Input,
            props: { defaultValue: "Willa AI" },
          },
        ],
      },
    ],
  },
  code: `
    import { FormField } from "willa/FormField";
    import { FormGroup } from "willa/FormGroup";
    import { Input } from "willa/Input";
    import "willa/FormField.css";
    import "willa/FormGroup.css";
    import "willa/Input.css";

    <FormGroup title="基础配置" description="把相关字段收拢在同一组里。">
      <FormField label="工作区名称">
        <Input defaultValue="Willa AI" />
      </FormField>
    </FormGroup>;
  `,
  sections: [
    {
      title: "完整表单",
      code: `
        <Form
          actions={
            <FormActions>
              <Button variant="ghost">取消</Button>
              <Button type="submit">保存</Button>
            </FormActions>
          }
        >
          <FormGroup
            title="模型配置"
            description="适合产品设置、AI 参数和后台筛选场景。"
          >
            <FormField label="配置名称" required>
              <Input defaultValue="内容生成助手" width="100%" />
            </FormField>
            <FormField label="默认模型">
              <Select defaultValue="balanced" options={modelOptions} width="100%" />
            </FormField>
            <Checkbox
              defaultChecked
              label="允许联网检索"
              description="启用后会在回答前检索公开资料。"
            />
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
            title="模型配置"
            description="适合产品设置、AI 参数和后台筛选场景。"
          >
            <FormField label="配置名称" required>
              <Input defaultValue="内容生成助手" width="100%" />
            </FormField>
            <FormField label="默认模型">
              <Select
                defaultValue="balanced"
                options={modelOptions}
                width="100%"
              />
            </FormField>
            <Checkbox
              defaultChecked
              label="允许联网检索"
              description="启用后会在回答前检索公开资料。"
            />
          </FormGroup>
        </Form>
      ),
    },
    {
      title: "双列布局",
      code: `
        <FormGroup title="基础信息" columns={2}>
          <FormField label="项目名">
            <Input placeholder="项目名" width="100%" />
          </FormField>
          <FormField label="负责人">
            <Input placeholder="负责人" width="100%" />
          </FormField>
        </FormGroup>;
      `,
      content: (
        <FormGroup title="基础信息" columns={2}>
          <FormField label="项目名">
            <Input placeholder="项目名" width="100%" />
          </FormField>
          <FormField label="负责人">
            <Input placeholder="负责人" width="100%" />
          </FormField>
        </FormGroup>
      ),
    },
  ],
  props: [
    {
      name: "children",
      type: "ReactNode",
      required: true,
      description: "分组内的字段内容。",
    },
    {
      name: "title",
      type: "ReactNode",
      description: "分组标题。",
    },
    {
      name: "description",
      type: "ReactNode",
      description: "分组说明。",
    },
    {
      name: "gap",
      type: '"sm" | "md" | "lg"',
      defaultValue: '"md"',
      description: "字段间距。",
    },
    {
      name: "columns",
      type: "1 | 2",
      defaultValue: "1",
      description: "字段列数；移动端自动回到单列。",
    },
  ],
});
