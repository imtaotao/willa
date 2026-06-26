import { EnglishCards } from "willa/EnglishCards";
import { Separator } from "willa/Separator";
import "willa/EnglishCards.css";
import "willa/Separator.css";
import { unindent } from "aidly";

import { defineDoc } from "#example/catalog/defineDoc";

const items = [
  {
    word: "component",
    phonetic: "/kəmˈpoʊnənt/",
    partOfSpeech: "noun",
    translation: "组件",
    explanation: "一个可复用的界面构建单元。",
    example: {
      text: "Each Willa component can be imported directly.",
      translation: "每个 Willa 组件都可以直接导入。",
    },
    tags: ["ui", "react"],
  },
  {
    word: "interface",
    phonetic: "/ˈɪntərfeɪs/",
    partOfSpeech: "noun",
    translation: "界面；接口",
    explanation: "连接用户、系统或模块的交互边界。",
    example: {
      text: "A clean interface makes product workflows easier to scan.",
      translation: "清晰的界面能让产品流程更容易扫读。",
    },
    tags: ["product", "design"],
  },
  {
    word: "context",
    phonetic: "/ˈkɑːntekst/",
    partOfSpeech: "noun",
    translation: "上下文",
    explanation: "帮助理解当前任务、内容或决策的相关信息。",
    example: {
      text: "The assistant needs enough context before generating an answer.",
      translation: "助手在生成答案前需要足够的上下文。",
    },
    tags: ["ai", "workflow"],
  },
];

const previewStyle = {
  width: "min(100%, 64rem)",
  margin: "0 auto",
} as const;

const EnglishCardsPreview = () => {
  return (
    <div className="docs-demo-stack" style={previewStyle}>
      <section className="docs-demo-group">
        <div className="docs-demo-title">学习模式</div>
        <EnglishCards title="词汇卡片" items={items} />
      </section>

      <Separator className="docs-demo-separator" size="sm" />

      <section className="docs-demo-group">
        <div className="docs-demo-title">练习模式</div>
        <EnglishCards title="词汇练习" items={items} defaultMode="practice" />
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
          <EnglishCards title="词汇卡片" items={items} />

          <EnglishCards title="词汇练习" items={items} defaultMode="practice" />
        </>
      );
    }
  `),
  props: [
    {
      name: "items",
      type: "Array<EnglishCardItem>",
      description: "需要渲染的词汇条目。",
    },
    {
      name: "defaultMode",
      type: '"study" | "practice"',
      defaultValue: '"study"',
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
