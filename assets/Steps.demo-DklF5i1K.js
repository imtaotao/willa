import{S as e,a as t}from"./index-BlMY-XV_.js";import{d as p}from"./defineDoc-BYfb4gho.js";import"./index-CQ5SwHlJ.js";const o=[{name:"Step",component:e,props:{title:"安装"},children:"使用 pnpm 安装依赖。"},{name:"Step",component:e,props:{title:"构建"},children:"发布前先构建所有包。"},{name:"Step",component:e,props:{title:"运行"},children:"启动示例应用。"}],n=p({id:"steps",name:"Steps",packageName:"willa/Steps",description:"带连续标记的步骤说明组件。",imports:[{name:"Step",from:"willa/Step"},{name:"Steps",from:"willa/Steps"}],css:"willa/Steps.css",demo:{name:"Steps",component:t,props:{title:"项目准备",markerColor:"#2563eb"},children:o},code:`
    import { Step } from "willa/Step";
    import { Steps } from "willa/Steps";
    import "willa/Steps.css";

    <Steps title="项目准备" markerColor="#2563eb">
      <Step title="安装">使用 pnpm 安装依赖。</Step>
      <Step title="构建">发布前先构建所有包。</Step>
      <Step title="运行">启动示例应用。</Step>
    </Steps>;
  `,props:[{name:"title",type:"ReactNode",description:"整组步骤或单个步骤的可选标题。"},{name:"markerColor",type:"string",description:"步骤标记的强调色。"},{name:"markerTextColor",type:"string",description:"步骤标记的文字颜色。"},{name:"direction",type:'"vertical" | "horizontal"',description:"步骤排列方向。"},{name:"className",type:"string",description:"可选的外层 className。"},{name:"children",type:"ReactNode",required:!0,description:"步骤内容。"}]});export{n as default};
