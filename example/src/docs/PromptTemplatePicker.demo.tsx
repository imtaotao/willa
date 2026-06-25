import { useState } from "react";
import { HeartIcon } from "@radix-ui/react-icons";

import { Button } from "willa/Button";
import {
  PromptTemplatePicker,
  type PromptTemplate,
} from "willa/PromptTemplatePicker";
import "willa/Button.css";
import "willa/PromptTemplatePicker.css";

import { defineDoc } from "#example/catalog/defineDoc";

const frameStyle = {
  display: "grid",
  gap: "1rem",
  width: "min(100%, 58rem)",
} as const;

const statusStyle = {
  width: "max-content",
  maxWidth: "100%",
  border: "1px solid var(--willa-line)",
  borderRadius: "0.62rem",
  background: "var(--willa-panel-bg)",
  color: "var(--willa-text-soft)",
  fontSize: "0.86rem",
  fontWeight: 520,
  lineHeight: 1.45,
  padding: "0.48rem 0.62rem",
} as const;

const templateCategories = [
  { id: "writing", label: "写作" },
  { id: "analysis", label: "分析" },
  { id: "coding", label: "研发" },
];

const templates: Array<PromptTemplate> = [
  {
    id: "daily-summary",
    categoryId: "writing",
    title: "会议纪要提炼",
    description: "抽取决议、风险与行动项，生成可直接同步到任务系统的摘要。",
    content: "请将以下内容整理为：目标、背景、关键决议、下一步行动。",
    tags: ["总结", "中文", "简报"],
  },
  {
    id: "feature-brief",
    categoryId: "writing",
    title: "PRD 提示词",
    description: "生成含验收标准和边界条件的功能说明。",
    content: "请按【问题-方案-验证】结构写出一版 PRD 草稿。",
    tags: ["产品", "PRD"],
  },
  {
    id: "user-complaint",
    categoryId: "analysis",
    title: "用户投诉聚类",
    description: "对多条反馈做聚类并输出前 3 个共性问题。",
    content: "请将反馈内容按问题主题聚类并给出优先级建议。",
    tags: ["反馈", "聚类", "客服"],
  },
  {
    id: "bug-investigation",
    categoryId: "analysis",
    title: "故障根因排查",
    description: "结合日志与复现步骤输出可执行的排查清单。",
    content: "请基于异常现象给出根因分析与修复建议。",
    tags: ["运维", "排障", "日志"],
  },
  {
    id: "code-review",
    categoryId: "coding",
    title: "代码评审指引",
    description: "输出可复用的代码评审清单与改进建议。",
    content: "请对以下变更输出安全、性能和兼容性维度的 review 建议。",
    tags: ["前端", "质量", "检查清单"],
  },
];

const PromptTemplatePickerPreview = () => {
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null);
  const [selectedTemplateId, setSelectedTemplateId] = useState<string>("");
  const [favorites, setFavorites] = useState([
    "feature-brief",
    "daily-summary",
  ]);
  const [recentTemplateIds, setRecentTemplateIds] = useState([
    "user-complaint",
  ]);
  const [searchValue, setSearchValue] = useState("");

  return (
    <div style={frameStyle}>
      <PromptTemplatePicker
        templates={templates}
        categories={templateCategories}
        activeCategoryId={activeCategoryId}
        onCategoryChange={setActiveCategoryId}
        searchValue={searchValue}
        onSearchChange={setSearchValue}
        value={selectedTemplateId}
        onSelect={(id) => {
          setSelectedTemplateId(id);
          setRecentTemplateIds((prev) => {
            const next = [...new Set([id, ...prev])];
            return next.slice(0, 5);
          });
        }}
        recentTemplateIds={recentTemplateIds}
        favorites={favorites}
        onToggleFavorite={(id) => {
          setFavorites((prev) => {
            const existed = prev.includes(id);
            return existed
              ? prev.filter((itemId) => itemId !== id)
              : [...prev, id];
          });
        }}
        showTagFilter
      />
      <div style={statusStyle}>
        当前选中：{selectedTemplateId ? selectedTemplateId : "未选择"}
      </div>
    </div>
  );
};

const PromptTemplatePickerLoading = () => (
  <div style={frameStyle}>
    <PromptTemplatePicker
      templates={[]}
      loading
      onSelect={() => {
        return;
      }}
    />
  </div>
);

const PromptTemplatePickerDisabled = () => {
  const [searchValue, setSearchValue] = useState("code");

  return (
    <div style={frameStyle}>
      <PromptTemplatePicker
        templates={templates}
        searchValue={searchValue}
        onSearchChange={setSearchValue}
        onSelect={() => {}}
        disabled
      />
      <Button icon={<HeartIcon />} size="sm" disabled>
        已禁用场景按钮
      </Button>
    </div>
  );
};

export default defineDoc({
  id: "prompt-template-picker",
  name: "PromptTemplatePicker",
  displayName: "提示词模板选择器",
  category: "ai",
  packageName: "willa/PromptTemplatePicker",
  description: "AI 提示词模板选择器，支持分类筛选、搜索、收藏和最近使用。",
  imports: [
    { name: "PromptTemplatePicker", from: "willa/PromptTemplatePicker" },
  ],
  css: "willa/PromptTemplatePicker.css",
  demo: {
    name: "PromptTemplatePickerPreview",
    component: PromptTemplatePickerPreview,
  },
  code: `
    import { useState } from "react";
    import { PromptTemplatePicker } from "willa/PromptTemplatePicker";
    import "willa/PromptTemplatePicker.css";

    const templates = [
      {
        id: "daily-summary",
        title: "会议纪要提炼",
        description: "抽取决议、风险与行动项，生成可同步到任务系统的摘要。",
        content: "请将以下内容整理为：目标、背景、关键决议、下一步行动。",
      },
    ];

    const Demo = () => {
      const [selectedTemplateId, setSelectedTemplateId] = useState("");

      return (
        <PromptTemplatePicker
          templates={templates}
          value={selectedTemplateId}
          onSelect={setSelectedTemplateId}
          onSearchChange={() => {}}
        />
      );
    };
  `,
  sections: [
    {
      title: "主链路（搜索 + 分类 + 收藏）",
      code: `
        <PromptTemplatePicker
          templates={templates}
          categories={[
            { id: "writing", label: "写作" },
            { id: "analysis", label: "分析" },
            { id: "coding", label: "研发" },
          ]}
          searchValue={searchValue}
          onSearchChange={setSearchValue}
          value={selectedTemplateId}
          onSelect={(id) => setSelectedTemplateId(id)}
          recentTemplateIds={recentTemplateIds}
          favorites={favorites}
          onToggleFavorite={(id) => {
            setFavorites((prev) =>
              prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id],
            );
          }}
        />;
      `,
      content: <PromptTemplatePickerPreview />,
    },
    {
      title: "边界（空态）",
      code: `
        <PromptTemplatePicker
          templates={[]}
          loading
          onSelect={() => {}}
        />;
      `,
      content: <PromptTemplatePickerLoading />,
    },
    {
      title: "边界（禁用）",
      code: `
        <PromptTemplatePicker
          templates={templates}
          searchValue="code"
          onSearchChange={() => {}}
          onSelect={() => {}}
          disabled
        />;
      `,
      content: <PromptTemplatePickerDisabled />,
    },
  ],
  props: [
    {
      name: "templates",
      type: "Array<PromptTemplate>",
      required: true,
      description: "可选择的 Prompt 模板列表。",
    },
    {
      name: "value",
      type: "string",
      description: "受控选中的模板 ID。",
    },
    {
      name: "defaultValue",
      type: "string",
      description: "非受控默认选中的模板 ID。",
    },
    {
      name: "onSelect",
      type: "(id: string) => void",
      required: true,
      description: "选择模板或点击回填时触发。",
    },
    {
      name: "recentTemplateIds",
      type: "Array<string>",
      defaultValue: "[]",
      description: "最近使用模板 ID，用于排序和标记。",
    },
    {
      name: "favorites",
      type: "Array<string>",
      defaultValue: "[]",
      description: "收藏模板 ID，用于排序和标记。",
    },
    {
      name: "onToggleFavorite",
      type: "(id: string) => void",
      description: "点击收藏或取消收藏时触发。",
    },
    {
      name: "searchValue",
      type: "string",
      description: "受控搜索关键词。",
    },
    {
      name: "onSearchChange",
      type: "(value: string) => void",
      description: "搜索关键词变化时触发。",
    },
    {
      name: "categories",
      type: "Array<PromptTemplateCategory>",
      description: "模板分类列表。",
    },
    {
      name: "activeCategoryId",
      type: "string | null",
      description: "受控的当前分类 ID；null 表示全部。",
    },
    {
      name: "onCategoryChange",
      type: "(categoryId: string | null) => void",
      description: "分类变化时触发。",
    },
    {
      name: "disabled",
      type: "boolean",
      defaultValue: "false",
      description: "是否禁用选择、搜索和收藏操作。",
    },
    {
      name: "loading",
      type: "boolean",
      defaultValue: "false",
      description: "是否展示模板列表加载态。",
    },
    {
      name: "emptyText",
      type: "string",
      defaultValue: '"未找到可用模板"',
      description: "模板列表为空时的描述文案。",
    },
    {
      name: "showTagFilter",
      type: "boolean",
      defaultValue: "true",
      description: "是否在列表项中展示模板 tags。",
    },
  ],
});
