import{b7 as a,b3 as e,at as n}from"./index-BV4pINJl.js";import{E as t}from"./index-B4UNdcZ4.js";import{d as i}from"./defineDoc-XrY6kqJ7.js";const s=[{word:"component",phonetic:"/kəmˈpoʊnənt/",partOfSpeech:"noun",translation:"组件",explanation:"一个可复用的界面构建单元。",example:{text:"Each Willa component can be imported directly.",translation:"每个 Willa 组件都可以直接导入。"},tags:["ui","react"]},{word:"interface",phonetic:"/ˈɪntərfeɪs/",partOfSpeech:"noun",translation:"界面；接口",explanation:"连接用户、系统或模块的交互边界。",example:{text:"A clean interface makes product workflows easier to scan.",translation:"清晰的界面能让产品流程更容易扫读。"},tags:["product","design"]},{word:"context",phonetic:"/ˈkɑːntekst/",partOfSpeech:"noun",translation:"上下文",explanation:"帮助理解当前任务、内容或决策的相关信息。",example:{text:"The assistant needs enough context before generating an answer.",translation:"助手在生成答案前需要足够的上下文。"},tags:["ai","workflow"]}],o={width:"min(100%, 64rem)",margin:"0 auto"},r=()=>e.jsxs("div",{className:"docs-demo-stack",style:o,children:[e.jsxs("section",{className:"docs-demo-group",children:[e.jsx("div",{className:"docs-demo-title",children:"学习模式"}),e.jsx(t,{title:"词汇卡片",items:s})]}),e.jsx(n,{className:"docs-demo-separator",size:"sm"}),e.jsxs("section",{className:"docs-demo-group",children:[e.jsx("div",{className:"docs-demo-title",children:"练习模式"}),e.jsx(t,{title:"词汇练习",items:s,defaultMode:"practice"})]})]}),m=i({id:"english-cards",name:"EnglishCards",category:"widgets",packageName:"willa/EnglishCards",description:"展示翻译、例句和参考信息的单词卡片。",imports:[{name:"EnglishCards",from:"willa/EnglishCards"}],css:"willa/EnglishCards.css",demo:{name:"EnglishCardsPreview",component:r},code:a(`
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
  `),props:[{name:"items",type:"Array<EnglishCardItem>",description:"需要渲染的词汇条目。"},{name:"defaultMode",type:'"study" | "practice"',defaultValue:'"study"',description:"初始展示模式。"},{name:"title",type:"ReactNode",description:"可选的分区标题。"},{name:"className",type:"string",description:"可选的外层 className。"}]});export{m as default};
