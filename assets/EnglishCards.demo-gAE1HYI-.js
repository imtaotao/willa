import{ak as a,ah as e,a0 as i}from"./index-Bdj8Q3L_.js";import{E as s}from"./index-C1VM85be.js";import{d as t}from"./defineDoc-ClbrtoXF.js";const n=[{word:"component",translation:"组件",explanation:"一个可复用的界面构建单元。",example:{text:"Each Willa component can be imported directly.",translation:"每个 Willa 组件都可以直接导入。"},tags:["ui","react"]}],o=["architecture","component","pragmatic"],r=()=>e.jsxs("div",{className:"docs-demo-stack",children:[e.jsxs("section",{className:"docs-demo-group",children:[e.jsx("div",{className:"docs-demo-title",children:"静态词条"}),e.jsx(s,{title:"词汇卡片",openApi:!1,items:n})]}),e.jsx(i,{className:"docs-demo-separator",size:"sm"}),e.jsxs("section",{className:"docs-demo-group",children:[e.jsx("div",{className:"docs-demo-title",children:"词典 API 查询"}),e.jsx(s,{title:"OpenAPI 词汇卡片",words:o,openApi:!0})]})]}),p=t({id:"english-cards",name:"EnglishCards",category:"widgets",packageName:"willa/EnglishCards",description:"展示翻译、例句和参考信息的单词卡片。",imports:[{name:"EnglishCards",from:"willa/EnglishCards"}],css:"willa/EnglishCards.css",demo:{name:"EnglishCardsPreview",component:r},code:a(`
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
  `),props:[{name:"items",type:"Array<EnglishCardItem>",required:!0,description:"需要渲染的词汇条目。"},{name:"openApi",type:"boolean | EnglishCardsOpenApiConfig",description:"可选的词典 API 查询配置。"},{name:"words",type:"Array<string>",description:"需要通过词典 API 查询的单词列表。"},{name:"defaultMode",type:'"study" | "practice"',description:"初始展示模式。"},{name:"title",type:"ReactNode",description:"可选的分区标题。"},{name:"className",type:"string",description:"可选的外层 className。"}]});export{p as default};
