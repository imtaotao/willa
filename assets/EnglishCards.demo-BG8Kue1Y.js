import{aR as s,aO as e,ai as a}from"./index-DTuOqLCr.js";import{E as t}from"./index-CULRYbQf.js";import{d as n}from"./defineDoc-Dmmvr5l-.js";const i=[{word:"component",phonetic:"/kəmˈpoʊnənt/",partOfSpeech:"noun",translation:"组件",explanation:"一个可复用的界面构建单元。",example:{text:"Each Willa component can be imported directly.",translation:"每个 Willa 组件都可以直接导入。"},tags:["ui","react"]},{word:"interface",phonetic:"/ˈɪntərfeɪs/",partOfSpeech:"noun",translation:"界面；接口",explanation:"连接用户、系统或模块的交互边界。",example:{text:"A clean interface makes product workflows easier to scan.",translation:"清晰的界面能让产品流程更容易扫读。"},tags:["product","design"]},{word:"context",phonetic:"/ˈkɑːntekst/",partOfSpeech:"noun",translation:"上下文",explanation:"帮助理解当前任务、内容或决策的相关信息。",example:{text:"The assistant needs enough context before generating an answer.",translation:"助手在生成答案前需要足够的上下文。"},tags:["ai","workflow"]}],o=["architecture","component","pragmatic"],r={width:"min(100%, 64rem)",margin:"0 auto"},l=()=>e.jsxs("div",{className:"docs-demo-stack",style:r,children:[e.jsxs("section",{className:"docs-demo-group",children:[e.jsx("div",{className:"docs-demo-title",children:"静态词条"}),e.jsx(t,{title:"词汇卡片",openApi:!1,items:i})]}),e.jsx(a,{className:"docs-demo-separator",size:"sm"}),e.jsxs("section",{className:"docs-demo-group",children:[e.jsx("div",{className:"docs-demo-title",children:"词典 API 查询"}),e.jsx(t,{title:"OpenAPI 词汇卡片",words:o,openApi:!0})]})]}),m=n({id:"english-cards",name:"EnglishCards",category:"widgets",packageName:"willa/EnglishCards",description:"展示翻译、例句和参考信息的单词卡片。",imports:[{name:"EnglishCards",from:"willa/EnglishCards"}],css:"willa/EnglishCards.css",demo:{name:"EnglishCardsPreview",component:l},code:s(`
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
  `),props:[{name:"items",type:"Array<EnglishCardItem>",required:!0,description:"需要渲染的词汇条目。"},{name:"openApi",type:"boolean | EnglishCardsOpenApiConfig",description:"可选的词典 API 查询配置。"},{name:"words",type:"Array<string>",description:"需要通过词典 API 查询的单词列表。"},{name:"defaultMode",type:'"study" | "practice"',defaultValue:'"study"',description:"初始展示模式。"},{name:"title",type:"ReactNode",description:"可选的分区标题。"},{name:"className",type:"string",description:"可选的外层 className。"}]});export{m as default};
