import { Picker, type PickerItem } from "willa/Picker";
import "willa/Picker.css";

import { defineDoc } from "#example/catalog/defineDoc";

const pickerItems: Array<PickerItem> = [
  {
    value: "summary",
    label: "生成摘要",
    description: "快速归纳长文档中的关键结论",
    group: "内容处理",
  },
  {
    value: "risk",
    label: "提取风险",
    description: "识别合同、需求和日志中的异常点",
    group: "内容处理",
  },
  {
    value: "translate",
    label: "翻译成英文",
    description: "保持术语一致并保留段落结构",
    group: "语言任务",
  },
  {
    value: "polish",
    label: "润色文案",
    description: "让文本更适合产品公告和文档",
    group: "语言任务",
  },
];

const centerStyle = {
  display: "grid",
  justifyItems: "center",
  gap: "0.9rem",
} as const;

const stackStyle = {
  display: "grid",
  gap: "0.8rem",
  width: "min(100%, 28rem)",
} as const;

export default defineDoc({
  id: "picker",
  name: "Picker",
  category: "form",
  packageName: "willa/Picker",
  description: "用于富选项、分组、多选和可搜索选择场景。",
  imports: [{ name: "Picker", from: "willa/Picker" }],
  css: "willa/Picker.css",
  demo: {
    name: "Picker",
    component: Picker,
    props: {
      items: pickerItems,
      defaultValue: "summary",
      searchable: true,
      width: "min(100%, 28rem)",
    },
  },
  code: `
    import { Picker, type PickerItem } from "willa/Picker";
    import "willa/Picker.css";

    const items: Array<PickerItem> = [
      {
        value: "summary",
        label: "生成摘要",
        description: "快速归纳长文档中的关键结论",
        group: "内容处理",
      },
      {
        value: "risk",
        label: "提取风险",
        description: "识别合同、需求和日志中的异常点",
        group: "内容处理",
      },
    ];

    <Picker items={items} defaultValue="summary" searchable />;
  `,
  sections: [
    {
      title: "分组选项",
      code: `
        <Picker
          items={pickerItems}
          defaultValue="summary"
          searchable
          width="min(100%, 28rem)"
        />;
      `,
      content: (
        <div style={centerStyle}>
          <Picker
            items={pickerItems}
            defaultValue="summary"
            searchable
            width="min(100%, 28rem)"
          />
        </div>
      ),
    },
    {
      title: "多选",
      code: `
        <Picker
          clearable
          mode="multiple"
          items={pickerItems}
          defaultValue={["summary", "risk"]}
          searchable
          width="min(100%, 28rem)"
        />;
      `,
      content: (
        <div style={centerStyle}>
          <Picker
            clearable
            mode="multiple"
            items={pickerItems}
            defaultValue={["summary", "risk"]}
            searchable
            width="min(100%, 28rem)"
          />
        </div>
      ),
    },
    {
      title: "状态",
      code: `
        <div style={stackStyle}>
          <Picker items={pickerItems} placeholder="选择处理方式" width="100%" />
          <Picker
            invalid
            items={pickerItems}
            placeholder="请选择必填项"
            width="100%"
          />
          <Picker disabled items={pickerItems} defaultValue="summary" width="100%" />
        </div>;
      `,
      content: (
        <div style={centerStyle}>
          <div style={stackStyle}>
            <Picker
              items={pickerItems}
              placeholder="选择处理方式"
              width="100%"
            />
            <Picker
              invalid
              items={pickerItems}
              placeholder="请选择必填项"
              width="100%"
            />
            <Picker
              disabled
              items={pickerItems}
              defaultValue="summary"
              width="100%"
            />
          </div>
        </div>
      ),
    },
  ],
  props: [
    {
      name: "items",
      type: "Array<PickerItem>",
      required: true,
      description: "可选项列表，支持 label、description、group 和 disabled。",
    },
    {
      name: "mode",
      type: '"single" | "multiple"',
      defaultValue: '"single"',
      description: "选择模式，默认单选。",
    },
    {
      name: "searchable",
      type: "boolean",
      defaultValue: "false",
      description: "是否展示搜索输入框。",
    },
    {
      name: "clearable",
      type: "boolean",
      defaultValue: "false",
      description: "是否允许清空当前选择。",
    },
    {
      name: "value",
      type: "string | Array<string>",
      description: "受控选中值。",
    },
    {
      name: "defaultValue",
      type: "string | Array<string>",
      defaultValue: 'mode === "multiple" ? [] : ""',
      description: "默认选中值。",
    },
    {
      name: "width",
      type: "CSSProperties['width']",
      description: "自定义选择器宽度。",
    },
    {
      name: "renderValue",
      type: "(items: Array<PickerItem>) => ReactNode",
      description: "自定义触发器里的选中值展示。",
    },
    {
      name: "onValueChange",
      type: "(value: string | Array<string>, items: Array<PickerItem>) => void",
      description: "选择变化时触发。",
    },
  ],
});
