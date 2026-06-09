import { EnglishCards } from "willa/EnglishCards";
import { Separator } from "willa/Separator";
import "willa/EnglishCards.css";
import "willa/Separator.css";
import { unindent } from "aidly";

import { defineDoc } from "#example/catalog/defineDoc";

const items = [
  {
    word: "component",
    translation: "组件",
    explanation: "一个可复用的界面构建单元。",
    example: {
      text: "Each Willa component can be imported directly.",
      translation: "每个 Willa 组件都可以直接导入。",
    },
    tags: ["ui", "react"],
  },
];

const openApiWords = ["architecture", "component", "pragmatic"];

const EnglishCardsPreview = () => {
  return (
    <div className="docs-demo-stack">
      <section className="docs-demo-group">
        <div className="docs-demo-title">静态词条</div>
        <EnglishCards title="词汇卡片" openApi={false} items={items} />
      </section>

      <Separator className="docs-demo-separator" size="sm" />

      <section className="docs-demo-group">
        <div className="docs-demo-title">词典 API 查询</div>
        <EnglishCards title="OpenAPI 词汇卡片" words={openApiWords} openApi />
      </section>
    </div>
  );
};

export default defineDoc({
  id: "english-cards",
  name: "EnglishCards",
  category: "widgets",
  packageName: "willa/EnglishCards",
  description: "展示翻译、例句和参考信息的单词卡片。",
  imports: [{ name: "EnglishCards", from: "willa/EnglishCards" }],
  css: "willa/EnglishCards.css",
  demo: {
    name: "EnglishCardsPreview",
    component: EnglishCardsPreview,
  },
  code: unindent(`
    import { EnglishCards } from "willa/EnglishCards";
    import "willa/EnglishCards.css";

    const items = [
      {
        word: "component",
        translation: "组件",
        explanation: "一个可复用的界面构建单元。",
        example: {
          text: "Each Willa component can be imported directly.",
          translation: "每个 Willa 组件都可以直接导入。",
        },
        tags: ["ui", "react"],
      },
    ];

    export function Demo() {
      return (
        <>
          <EnglishCards title="词汇卡片" openApi={false} items={items} />

          <EnglishCards
            title="OpenAPI 词汇卡片"
            words={["architecture", "component", "pragmatic"]}
            openApi
          />
        </>
      );
    }
  `),
  props: [
    {
      name: "items",
      type: "Array<EnglishCardItem>",
      required: true,
      description: "需要渲染的词汇条目。",
    },
    {
      name: "openApi",
      type: "boolean | EnglishCardsOpenApiConfig",
      description: "可选的词典 API 查询配置。",
    },
    {
      name: "words",
      type: "Array<string>",
      description: "需要通过词典 API 查询的单词列表。",
    },
    {
      name: "defaultMode",
      type: '"study" | "practice"',
      description: "初始展示模式。",
    },
    {
      name: "title",
      type: "ReactNode",
      description: "可选的分区标题。",
    },
    {
      name: "className",
      type: "string",
      description: "可选的外层 className。",
    },
  ],
});
