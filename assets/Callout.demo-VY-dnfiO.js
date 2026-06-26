import{b0 as t,i as e}from"./index-MvDtKvGL.js";import{d as l}from"./defineDoc-BE2V2Usy.js";const o={display:"grid",gap:"0.85rem"},i={display:"grid",gap:"0.75rem",maxWidth:"720px"},s=l({id:"callout",name:"Callout",packageName:"willa/Callout",description:"用于文档、MDX 和文章正文中的语义提示块，适合承载解释、建议、注意事项和长文本说明；页面操作反馈优先使用 Alert。",imports:[{name:"Callout",from:"willa/Callout"}],css:"willa/Callout.css",demo:{name:"Callout",component:e,props:{tone:"tip",title:"阅读建议"},children:"这类内容会跟随正文长期存在，用来补充上下文，而不是反馈一次操作结果。"},code:`
    import { Callout } from "willa/Callout";
    import "willa/Callout.css";

    <Callout tone="tip" title="阅读建议">
      这类内容会跟随正文长期存在，用来补充上下文，而不是反馈一次操作结果。
    </Callout>;
  `,sections:[{title:"内容边界",code:`
        <div style={{ display: "grid", gap: "0.75rem", maxWidth: "720px" }}>
          <Callout tone="warning" title="迁移前确认">
            <p>Callout 适合出现在文档正文里，用来承载会长期保留的解释性内容。</p>
            <p>如果内容表示一次保存、发布、提交或异步任务的结果，应使用 Alert。</p>
          </Callout>
          <Callout tone="note" title="正文语境">
            这类提示会跟随文章、教程或 MDX 页面长期展示，不提供关闭按钮、操作区和 live region。
          </Callout>
        </div>;
      `,content:t.jsxs("div",{style:i,children:[t.jsxs(e,{tone:"warning",title:"迁移前确认",children:[t.jsx("p",{children:"Callout 适合出现在文档正文里，用来承载会长期保留的解释性内容。"}),t.jsx("p",{children:"如果内容表示一次保存、发布、提交或异步任务的结果，应使用 Alert。"})]}),t.jsx(e,{tone:"note",title:"正文语境",children:"这类提示会跟随文章、教程或 MDX 页面长期展示，不提供关闭按钮、操作区和 live region。"})]})},{title:"语义类型",code:`
        <div style={{ display: "grid", gap: "0.85rem" }}>
          <Callout tone="note" title="说明">
            在组件文档、迁移说明或教程正文中补充背景和定义。
          </Callout>
          <Callout tone="tip" title="提示">
            给读者一个更推荐的写法、捷径或实践建议。
          </Callout>
          <Callout tone="warning" title="注意">
            标记会影响理解或使用结果的前置条件。
          </Callout>
          <Callout tone="success" title="完成">
            在教程步骤里说明某个阶段应达到的稳定结果。
          </Callout>
          <Callout tone="error" title="错误">
            解释常见失败原因和读者需要检查的上下文。
          </Callout>
        </div>;
      `,content:t.jsxs("div",{style:o,children:[t.jsx(e,{tone:"note",title:"说明",children:"在组件文档、迁移说明或教程正文中补充背景和定义。"}),t.jsx(e,{tone:"tip",title:"提示",children:"给读者一个更推荐的写法、捷径或实践建议。"}),t.jsx(e,{tone:"warning",title:"注意",children:"标记会影响理解或使用结果的前置条件。"}),t.jsx(e,{tone:"success",title:"完成",children:"在教程步骤里说明某个阶段应达到的稳定结果。"}),t.jsx(e,{tone:"error",title:"错误",children:"解释常见失败原因和读者需要检查的上下文。"})]})}],props:[{name:"tone",type:'"note" | "tip" | "warning" | "success" | "error"',defaultValue:'"note"',description:"信息块的视觉语义。"},{name:"title",type:"ReactNode",defaultValue:"由 tone 决定",description:"展示在正文上方的可选标题。"},{name:"icon",type:"ReactNode",defaultValue:"由 tone 决定",description:"自定义左侧图标，未传时按 tone 使用默认图标。"},{name:"className",type:"string",description:"可选的外层 className。"},{name:"children",type:"ReactNode",description:"信息块的主要内容。"}]});export{s as default};
