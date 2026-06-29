import{b2 as e,b4 as o,B as v,h as g}from"./index-BNqLp1iH.js";import{M as l}from"./index-Dk3ZGQ_4.js";/* empty css              */import{d as b}from"./defineDoc-Bvvk0NBK.js";import"./index-BlLO5iMy.js";import"./index-BTAbogly.js";import"./index-jNHtWt9X.js";const c={display:"grid",gap:"0.85rem",width:"min(100%, 52rem)",margin:"0 auto"},f={display:"grid",gap:"0.65rem",fontSize:"0.84rem",color:"var(--willa-text-soft)"},M={padding:"0.55rem 0.7rem",borderRadius:"0.6rem",background:"color-mix(in srgb, var(--willa-surface-bg) 86%, transparent)",border:"1px solid var(--willa-list-border)",lineHeight:1.5},u=[{id:"tom",label:"Tom",value:"tom",description:"成员",avatarSrc:"https://i.pravatar.cc/64?img=11"},{id:"lucy",label:"Lucy",value:"lucy",description:"成员",avatarSrc:"https://i.pravatar.cc/64?img=47"},{id:"nate",label:"Nate",value:"nate",description:"成员",avatarSrc:"https://i.pravatar.cc/64?img=12"}],p=[{id:"file-001",label:"prd-briefing-v2",value:"prd-briefing-v2",description:"资源"},{id:"file-002",label:"qa-反馈清单",value:"qa-feedback",description:"资源"},{id:"file-003",label:"release-note",value:"release-note",description:"资源"}],d=[{id:"var-user",label:"currentUser",value:"currentUser",description:"当前登录用户"},{id:"var-date",label:"todayDate",value:"todayDate",description:"当天日期"},{id:"var-time",label:"currentTime",value:"currentTime",description:"当前时间"}],I=[{trigger:"@",label:"@",description:"成员",items:u},{trigger:"#",label:"#",description:"文件",items:p},{trigger:"$",label:"$",description:"变量",items:d}],m=()=>{const[r,n]=o.useState(""),[t,a]=o.useState("");return e.jsxs("div",{style:c,children:[e.jsx(l,{value:r,onValueChange:n,users:u,resources:p,variables:d,placeholder:"输入 @ / # / $ 可快速提及相关实体",footer:"输入 @、#、$ 分别表示用户、资源、变量",onSubmit:(s,i)=>{a(s),i.clear()}}),t?e.jsxs(v,{tone:"success",children:["已提交：",t]}):null]})},x=()=>{const[r,n]=o.useState("");return e.jsx("div",{style:c,children:e.jsx(l,{placeholder:"你也可以自定义提及源触发符",mentionSources:[...I],mentionLabel:"插入",onMentionQuery:t=>{if(!t){n("");return}n(`当前触发 ${t.trigger}，关键字 ${t.query||"未输入"}`)},footer:r||"点击左侧按钮可打开外部选择器",actions:e.jsx(g,{size:"sm",children:"打开资源面板"})})})},S=()=>{const[r,n]=o.useState("在 @Tom 的评论里，顺带提到 #prd-briefing-v2 和 $todayDate。"),[t,a]=o.useState(""),s=()=>a("当前未触发提及");return e.jsxs("div",{style:c,children:[e.jsx(l,{value:r,onValueChange:n,users:u,resources:p,variables:d,onMentionQuery:i=>{if(!i){s();return}const y={"@":"用户","#":"资源",$:"变量"}[i.trigger]??"自定义";a(`当前触发：${i.trigger}（${y}）｜关键词：${i.query||"未输入"}`)},footer:t||"在同一条输入中，分别用 @、#、$ 触发不同提及源",mentionLabel:"插入"}),e.jsxs("div",{style:f,children:[e.jsx(v,{tone:"neutral",children:"同一句可混合 @/#/$ 多源提及"}),e.jsx("div",{style:M,children:'说明：候选项根据输入的触发符自动按源过滤；如在 "@Tom" 后只搜成员，在 "#release-note" 后只搜资源，在 "$todayDate" 后只搜变量。'})]})]})},R=b({id:"mention-input",name:"MentionInput",category:"content",packageName:"willa/MentionInput",description:"支持多触发符提及能力的输入组件，适合提及用户、资源、变量等场景。",imports:[{name:"MentionInput",from:"willa/MentionInput"}],css:"willa/MentionInput.css",demo:{name:"MentionInputPreview",component:m},code:`
    import { useState } from "react";
    import { MentionInput } from "willa/MentionInput";
    import "willa/MentionInput.css";

    const users = [
      { id: "tom", label: "Tom", value: "@tom", avatarSrc: "https://i.pravatar.cc/64?img=11" },
      { id: "lucy", label: "Lucy", value: "@lucy", avatarSrc: "https://i.pravatar.cc/64?img=47" },
    ];
    const resources = [
      { id: "file-001", label: "prd-briefing-v2", value: "#prd-briefing-v2" },
    ];
    const variables = [
      { id: "var-user", label: "currentUser", value: "$currentUser", description: "当前用户" },
    ];

    const Demo = () => {
      const [value, setValue] = useState("");

      return (
        <MentionInput
          value={value}
          onValueChange={setValue}
          users={users}
          resources={resources}
          variables={variables}
          placeholder="输入 @、#、$ 进行快速提及"
          onSubmit={(nextValue, context) => {
            console.log(nextValue);
            context.clear();
          }}
        />
      );
    };
  `,sections:[{title:"多源提及",code:`
        <MentionInput
          users={[
            { id: "tom", label: "Tom", value: "tom", avatarSrc: "https://i.pravatar.cc/64?img=11" },
            { id: "lucy", label: "Lucy", value: "lucy", avatarSrc: "https://i.pravatar.cc/64?img=47" },
          ]}
          resources={[
            { id: "file-001", label: "prd-briefing-v2", value: "prd-briefing-v2" },
          ]}
          variables={[
            { id: "var-date", label: "todayDate", value: "todayDate", description: "当前日期" },
          ]}
          footer="按 @、#、$ 分别表示不同类型"
        />;
      `,content:e.jsx(m,{})},{title:"同一句混合提及",code:`
        import { useState } from "react";
        import { MentionInput } from "willa/MentionInput";
        import "willa/MentionInput.css";

        const [activeHint, setActiveHint] = useState("当前未触发提及");

        const mentionTrace = {
          "@": "用户",
          "#": "资源",
          "$": "变量",
        };

        const updateTrace = (context) => {
          if (!context) {
            setActiveHint("当前未触发提及");
            return;
          }

          setActiveHint(
            \`当前触发：\${context.trigger}（\${mentionTrace[context.trigger] || "自定义"}）｜关键词：\${context.query || "未输入"}\`,
          );
        };

        <MentionInput
          value="在 @Tom 的备注里，顺便引用 #prd-briefing-v2 和 $todayDate。"
          users={users}
          resources={resources}
          variables={variables}
          onMentionQuery={updateTrace}
          mentionLabel="插入"
          footer={activeHint}
        />;
      `,content:e.jsx(S,{})},{title:"自定义提及源",code:`
        const mentionSources = [
          { trigger: "@", label: "@", description: "成员", items: users },
          { trigger: "#", label: "#", description: "文件", items: resources },
          { trigger: "$", label: "$", description: "变量", items: variables },
        ];

        <MentionInput
          mentionSources={mentionSources}
          mentionLabel="插入"
          onMentionQuery={(context) => {
            if (!context) return;
            console.log(context.trigger, context.query);
          }}
          footer="触发符与来源可按业务配置"
        />;
      `,content:e.jsx(x,{})}],props:[{name:"value",type:"string",description:"受控输入值。"},{name:"defaultValue",type:"string",defaultValue:'""',description:"非受控默认值。"},{name:"onValueChange",type:"(value: string) => void",description:"输入值变化回调。"},{name:"onSubmit",type:"(value: string, context: MentionInputSubmitContext) => void",description:"提交回调，context.clear 可清空输入。"},{name:"placeholder",type:"string",defaultValue:'"写下你的评论..."',description:"输入框占位文案。"},{name:"submitLabel",type:"ReactNode",defaultValue:'"发布"',description:"提交按钮文案。"},{name:"size",type:'"md" | "lg"',defaultValue:'"md"',description:"输入区域尺寸。"},{name:"disabled",type:"boolean",defaultValue:"false",description:"是否禁用输入和提交。"},{name:"loading",type:"boolean",defaultValue:"false",description:"是否处于提交中。"},{name:"minRows",type:"number",defaultValue:"3",description:"输入框最小行数。"},{name:"maxLength",type:"number",description:"最大输入长度。"},{name:"autoResize",type:"boolean",defaultValue:"false",description:"是否根据内容自动调整高度，默认关闭。"},{name:"maxRows",type:"number",defaultValue:"3",description:"自动高度时的最大行数，默认与 minRows 一致。"},{name:"submitShortcut",type:'"enter" | "mod-enter" | "none"',defaultValue:'"mod-enter"',description:"提交快捷键，默认使用 ⌘/Ctrl + Enter。"},{name:"submitIcon",type:"ReactNode",description:"提交按钮图标。"},{name:"allowEmptySubmit",type:"boolean",defaultValue:"false",description:"是否允许提交空内容。"},{name:"autoFocus",type:"boolean",defaultValue:"false",description:"是否自动聚焦。"},{name:"users",type:"Array<MentionInputMentionItem>",description:"@ 触发提及时的用户候选列表。"},{name:"resources",type:"Array<MentionInputMentionItem>",description:"# 触发提及时的资源候选列表。"},{name:"variables",type:"Array<MentionInputMentionItem>",description:"$ 触发提及时的变量候选列表。"},{name:"mentionSources",type:"Array<MentionInputTriggerSource>",description:"用于完全自定义触发符、来源文案与候选项。"},{name:"mentionTriggers",type:"Array<string>",defaultValue:'["@","#","$"]',description:"默认支持 @ / # / $；在未传 mentionOptions 时按内置 source 推断。"},{name:"mentionOptions",type:"Array<MentionInputMentionItem>",description:"自定义的提及候选项，优先级高于 users/resources/variables。"},{name:"onMentionQuery",type:"(context: MentionInputMentionContext | null) => void",description:"触发符与关键词变化回调，离开提及态时回调 null。"},{name:"mentionListProps",type:"MentionInputMentionListProps",description:"默认提及列表透传到 List 的参数，支持 virtualScroll、infiniteScroll、onItemsChange。"},{name:"renderMentionOptions",type:"(context: { trigger: string; query: string; start: number; end: number }, options: Array<MentionInputMentionItem>, onSelect: (item: MentionInputMentionItem) => void) => ReactNode",description:"可选覆盖默认提及弹层，适配复杂面板样式与交互。"},{name:"renderMentionItem",type:"(context: { trigger: string; query: string; start: number; end: number }, item: MentionInputMentionItem, onSelect: (item: MentionInputMentionItem) => void) => ReactNode",description:"可选覆盖单个候选项渲染。"},{name:"mentionLabel",type:"ReactNode",defaultValue:'"@"',description:"提及触发入口展示文案。"},{name:"mentionMaxSuggestions",type:"number",defaultValue:"6",description:"提及候选项展示上限。"},{name:"onMentionClick",type:"() => void",description:"点击提及入口按钮时触发，用于唤起外部选择器。"},{name:"actions",type:"ReactNode",description:"输入区右侧附加操作区。"},{name:"footer",type:"ReactNode",description:"输入区底部说明文案。"},{name:"beforeInput",type:"ReactNode",description:"输入框顶部注入区域，通常用于评论引用、头像等上下文。"},{name:"style",type:"CSSProperties",description:"透传给根容器的内联样式。"},{name:"slotClassNames",type:"InputPanelSlotClassNames",description:"透传给 InputPanel 的插槽样式。"},{name:"className",type:"string",description:"透传到根容器的 className。"},{name:"textareaProps",type:"TextareaHTMLAttributes<HTMLTextAreaElement>",description:"透传到底层 textarea 的属性（会排除 key 生命周期控制属性）。"}]});export{R as default};
