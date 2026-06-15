import { useState } from "react";
import { Badge } from "willa/Badge";
import { Button } from "willa/Button";
import { Stack } from "willa/Stack";
import { TagInput } from "willa/TagInput";
import "willa/Badge.css";
import "willa/Button.css";
import "willa/Stack.css";
import "willa/TagInput.css";

import { defineDoc } from "#example/catalog/defineDoc";

const tagSuggestions = [
  "AI 产品",
  "文档站",
  "表单",
  "移动端",
  "主题变量",
  "上传",
  "批量操作",
  "日历",
];

const ControlledTagInputDemo = () => {
  const [tags, setTags] = useState(["AI 产品", "主题变量"]);
  const isInvalid = tags.length === 0;

  return (
    <Stack gap="sm" style={{ width: "min(100%, 34rem)" }}>
      <TagInput
        value={tags}
        invalid={isInvalid}
        placeholder="至少添加一个标签"
        suggestions={tagSuggestions}
        onValueChange={setTags}
      />
      <Button size="sm" variant="soft" onClick={() => setTags(["移动端"])}>
        重置为移动端
      </Button>
    </Stack>
  );
};

export default defineDoc({
  id: "tag-input",
  name: "TagInput",
  category: "form",
  packageName: "willa/TagInput",
  description: "用于输入、编辑和提交多个文本标签的表单组件。",
  imports: [
    { name: "Badge", from: "willa/Badge" },
    { name: "Button", from: "willa/Button" },
    { name: "Stack", from: "willa/Stack" },
    { name: "TagInput", from: "willa/TagInput" },
  ],
  css: "willa/TagInput.css",
  demo: {
    name: "TagInput",
    component: TagInput,
    props: {
      defaultValue: ["AI 产品", "文档站"],
      suggestions: tagSuggestions,
      placeholder: "输入标签后按 Enter",
      width: "min(100%, 34rem)",
    },
  },
  code: `
    import { TagInput } from "willa/TagInput";
    import "willa/TagInput.css";

    <TagInput
      defaultValue={["AI 产品", "文档站"]}
      suggestions={["AI 产品", "文档站", "表单", "移动端"]}
      placeholder="输入标签后按 Enter"
      width="min(100%, 34rem)"
    />;
  `,
  sections: [
    {
      title: "建议项",
      code: `
        const suggestions = [
          "AI 产品",
          "文档站",
          "表单",
          "移动端",
          "主题变量",
        ];

        <TagInput
          defaultValue={["AI 产品"]}
          suggestions={suggestions}
          placeholder="搜索或新增标签"
          width="min(100%, 34rem)"
        />;
      `,
      content: (
        <TagInput
          defaultValue={["AI 产品"]}
          suggestions={tagSuggestions}
          placeholder="搜索或新增标签"
          width="min(100%, 34rem)"
        />
      ),
    },
    {
      title: "受控和校验",
      code: `
        import { useState } from "react";
        import { Button } from "willa/Button";
        import { Stack } from "willa/Stack";

        const suggestions = ["AI 产品", "主题变量", "移动端"];

        const Demo = () => {
          const [tags, setTags] = useState(["AI 产品", "主题变量"]);
          const isInvalid = tags.length === 0;

          return (
            <Stack gap="sm" style={{ width: "min(100%, 34rem)" }}>
              <TagInput
                value={tags}
                invalid={isInvalid}
                placeholder="至少添加一个标签"
                suggestions={suggestions}
                onValueChange={setTags}
              />
              <Button size="sm" variant="soft" onClick={() => setTags(["移动端"])}>
                重置为移动端
              </Button>
            </Stack>
          );
        };
      `,
      content: <ControlledTagInputDemo />,
    },
    {
      title: "分隔符和粘贴",
      code: `
        <TagInput
          defaultValue={["表单"]}
          separators={["Enter", ",", "，"]}
          placeholder="支持逗号、中文逗号和 Enter"
          width="min(100%, 34rem)"
        />;
      `,
      content: (
        <TagInput
          defaultValue={["表单"]}
          separators={["Enter", ",", "，"]}
          placeholder="支持逗号、中文逗号和 Enter"
          width="min(100%, 34rem)"
        />
      ),
    },
    {
      title: "数量限制",
      code: `
        const suggestions = ["AI 产品", "文档站", "表单", "移动端"];

        <TagInput
          defaultValue={["AI 产品", "文档站"]}
          maxTags={3}
          suggestions={suggestions}
          placeholder="最多 3 个标签"
          width="min(100%, 34rem)"
        />;
      `,
      content: (
        <TagInput
          defaultValue={["AI 产品", "文档站"]}
          maxTags={3}
          suggestions={tagSuggestions}
          placeholder="最多 3 个标签"
          width="min(100%, 34rem)"
        />
      ),
    },
    {
      title: "自定义标签",
      code: `
        <TagInput
          defaultValue={["稳定", "待复核", "内部文档"]}
          renderTag={(tag) => (
            <Badge tone={tag === "待复核" ? "warning" : "info"}>
              {tag}
            </Badge>
          )}
          width="min(100%, 34rem)"
        />;
      `,
      content: (
        <TagInput
          defaultValue={["稳定", "待复核", "内部文档"]}
          renderTag={(tag) => (
            <Badge tone={tag === "待复核" ? "warning" : "info"}>{tag}</Badge>
          )}
          width="min(100%, 34rem)"
        />
      ),
    },
    {
      title: "状态",
      code: `
        <Stack gap="sm" style={{ width: "min(100%, 34rem)" }}>
          <TagInput defaultValue={["只读"]} readOnly />
          <TagInput defaultValue={["不可编辑"]} disabled />
          <TagInput defaultValue={["错误标签"]} invalid />
        </Stack>;
      `,
      content: (
        <Stack gap="sm" style={{ width: "min(100%, 34rem)" }}>
          <TagInput defaultValue={["只读"]} readOnly />
          <TagInput defaultValue={["不可编辑"]} disabled />
          <TagInput defaultValue={["错误标签"]} invalid />
        </Stack>
      ),
    },
  ],
  props: [
    {
      name: "value",
      type: "Array<string>",
      description: "受控标签值。",
    },
    {
      name: "defaultValue",
      type: "Array<string>",
      defaultValue: "[]",
      description: "默认标签值。",
    },
    {
      name: "inputValue",
      type: "string",
      description: "受控输入框内容。",
    },
    {
      name: "defaultInputValue",
      type: "string",
      defaultValue: '""',
      description: "默认输入框内容。",
    },
    {
      name: "name",
      type: "string",
      description: "表单字段名。传入后会为每个标签渲染 hidden input。",
    },
    {
      name: "size",
      type: '"sm" | "md" | "lg"',
      defaultValue: '"md"',
      description: "组件尺寸。",
    },
    {
      name: "variant",
      type: '"outline" | "soft"',
      defaultValue: '"outline"',
      description: "视觉类型。",
    },
    {
      name: "width",
      type: "CSSProperties['width']",
      description: "组件宽度。",
    },
    {
      name: "placeholder",
      type: "string",
      defaultValue: '"输入后按 Enter 添加"',
      description: "空标签时的占位提示。",
    },
    {
      name: "disabled",
      type: "boolean",
      defaultValue: "false",
      description: "禁用组件。",
    },
    {
      name: "readOnly",
      type: "boolean",
      defaultValue: "false",
      description: "只读展示标签，不允许新增或删除。",
    },
    {
      name: "invalid",
      type: "boolean",
      defaultValue: "false",
      description: "错误状态。",
    },
    {
      name: "clearable",
      type: "boolean",
      defaultValue: "true",
      description: "是否展示清空按钮。",
    },
    {
      name: "maxTags",
      type: "number",
      description: "最多允许的标签数量。",
    },
    {
      name: "allowDuplicates",
      type: "boolean",
      defaultValue: "false",
      description: "是否允许重复标签。",
    },
    {
      name: "commitOnBlur",
      type: "boolean",
      defaultValue: "true",
      description: "失焦时是否提交当前输入内容。",
    },
    {
      name: "separators",
      type: "Array<string>",
      defaultValue: "defaultSeparators",
      description: "提交标签的按键或字符，默认 Enter 和英文逗号。",
    },
    {
      name: "suggestions",
      type: "Array<string>",
      defaultValue: "[]",
      description: "建议标签列表。",
    },
    {
      name: "maxSuggestions",
      type: "number",
      defaultValue: "8",
      description: "最多展示的建议项数量。",
    },
    {
      name: "emptySuggestion",
      type: "ReactNode",
      description: "没有建议项时展示的内容。",
    },
    {
      name: "renderTag",
      type: "(tag: string, context: TagInputRenderContext) => ReactNode",
      description: "自定义标签渲染。",
    },
    {
      name: "normalizeTag",
      type: "(tag: string) => string",
      defaultValue: "defaultNormalizeTag",
      description: "提交前规范化标签内容。",
    },
    {
      name: "validateTag",
      type: "(tag: string, tags: Array<string>) => boolean | string",
      description: "自定义标签校验。",
    },
    {
      name: "onValueChange",
      type: "(tags: Array<string>) => void",
      description: "标签变化回调。",
    },
    {
      name: "onInputValueChange",
      type: "(value: string) => void",
      description: "输入框内容变化回调。",
    },
    {
      name: "onTagReject",
      type: '(tag: string, reason: "empty" | "duplicate" | "max" | "invalid") => void',
      description: "标签被拒绝时触发。",
    },
  ],
});
