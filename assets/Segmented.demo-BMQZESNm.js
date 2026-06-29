import{b2 as e,ar as t,aA as n,Y as p,B as i,b4 as c,x as g,v as b,a4 as v,U as x}from"./index-np_LpDYz.js";/* empty css              */import{d as S}from"./defineDoc-CVPycvmb.js";const m=[{value:"list",label:"列表"},{value:"board",label:"看板"},{value:"timeline",label:"时间线"}],h=[{value:"summary",label:"摘要",icon:e.jsx(g,{})},{value:"code",label:"代码",icon:e.jsx(b,{})},{value:"agent",label:"自动化",icon:e.jsx(v,{})},{value:"settings",label:"配置",icon:e.jsx(x,{}),disabled:!0}],r=[{value:"compact",label:"紧凑"},{value:"default",label:"默认"},{value:"relaxed",label:"宽松"}],d=[{title:"同步设计稿",owner:"Lina",status:"今天"},{title:"补齐验收用例",owner:"Grace",status:"明天"},{title:"整理发布说明",owner:"Kai",status:"周五"}],w=()=>{var u;const[l,s]=c.useState("list"),o=((u=m.find(a=>a.value===l))==null?void 0:u.label)??l;return e.jsxs(n,{gap:"md",style:{width:"min(100%, 38rem)"},children:[e.jsxs(p,{gap:"sm",align:"center",wrap:!0,children:[e.jsx(t,{ariaLabel:"任务视图",value:l,onValueChange:s,options:m}),e.jsxs(i,{tone:"info",children:["当前呈现：",o]})]}),e.jsxs("div",{style:{border:"1px solid var(--willa-border)",borderRadius:"0.75rem",padding:"1rem",background:"var(--willa-panel-soft-bg)"},children:[e.jsx("p",{style:{margin:"0 0 0.75rem",color:"var(--willa-content-muted)"},children:"同一组任务数据不会切换面板，只根据当前值改变呈现方式。"}),l==="list"?e.jsx(n,{gap:"sm",children:d.map(a=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"minmax(0, 1fr) auto",gap:"0.75rem",alignItems:"center",padding:"0.75rem",borderRadius:"0.5rem",background:"var(--willa-panel-bg)"},children:[e.jsx("strong",{children:a.title}),e.jsx(i,{tone:"neutral",children:a.status}),e.jsxs("span",{style:{color:"var(--willa-content-muted)"},children:["负责人：",a.owner]})]},a.title))}):null,l==="board"?e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(8rem, 1fr))",gap:"0.75rem"},children:d.map(a=>e.jsxs("div",{style:{minHeight:"7rem",padding:"0.75rem",border:"1px solid var(--willa-border)",borderRadius:"0.5rem"},children:[e.jsx("strong",{children:a.title}),e.jsxs("p",{style:{margin:"0.5rem 0 0",color:"var(--willa-content-muted)"},children:[a.owner," · ",a.status]})]},a.title))}):null,l==="timeline"?e.jsx(n,{gap:"sm",children:d.map(a=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"4rem minmax(0, 1fr)",gap:"0.75rem",alignItems:"center"},children:[e.jsx(i,{tone:"info",children:a.status}),e.jsxs("span",{children:[e.jsx("strong",{children:a.title}),e.jsxs("span",{style:{color:"var(--willa-content-muted)"},children:[" ","/ ",a.owner]})]})]},a.title))}):null]})]})},y=()=>{const[l,s]=c.useState("balanced");return e.jsxs(n,{gap:"sm",style:{maxWidth:"28rem"},children:[e.jsx(t,{ariaLabel:"模型输出模式",value:l,onValueChange:s,options:[{value:"fast",label:"快速"},{value:"balanced",label:"均衡"},{value:"precise",label:"精确"}]}),e.jsxs(i,{tone:"info",children:["当前模式：",l]})]})},j=()=>{const[l,s]=c.useState(["comments","changes"]),o=new Set(l);return e.jsxs(n,{gap:"md",style:{width:"min(100%, 36rem)"},children:[e.jsx(t,{selectionMode:"multiple",ariaLabel:"审核信息显示",values:l,onValuesChange:s,options:[{value:"comments",label:"评论"},{value:"changes",label:"变更"},{value:"timeline",label:"时间线"}]}),e.jsxs("div",{style:{display:"grid",gap:"0.75rem",border:"1px solid var(--willa-border)",borderRadius:"0.75rem",padding:"1rem"},children:[e.jsx("strong",{children:"组件发布 Review"}),o.has("comments")?e.jsx("div",{style:{color:"var(--willa-content-muted)"},children:"评论：需要补一条移动端验证截图。"}):null,o.has("changes")?e.jsx("div",{style:{color:"var(--willa-content-muted)"},children:"变更：新增 Segmented、补充 demo、更新 Tabs 边界。"}):null,o.has("timeline")?e.jsx("div",{style:{color:"var(--willa-content-muted)"},children:"时间线：草稿 → Review → 合并。"}):null,l.length?null:e.jsx(i,{tone:"neutral",children:"暂无可见信息块"})]})]})},k=S({id:"segmented",name:"Segmented",packageName:"willa/Segmented",description:"用于在同一上下文中切换单选或多选的视图、模式和筛选维度；不负责渲染内容面板。",imports:[{name:"Badge",from:"willa/Badge"},{name:"Segmented",from:"willa/Segmented"},{name:"Group",from:"willa/Group"},{name:"Stack",from:"willa/Stack"}],css:"willa/Segmented.css",demo:{name:"Segmented",component:t,props:{ariaLabel:"视图模式",options:m}},code:`
    import { Segmented } from "willa/Segmented";
    import "willa/Segmented.css";

    <Segmented
      ariaLabel="视图模式"
      options={[
        { value: "list", label: "列表" },
        { value: "board", label: "看板" },
        { value: "timeline", label: "时间线" },
      ]}
    />;
  `,sections:[{title:"基础用法",code:`
        import { useState } from "react";
        import { Segmented } from "willa/Segmented";
        import "willa/Segmented.css";

        const Demo = () => {
          const [view, setView] = useState("list");

          return (
            <>
              <Segmented
                ariaLabel="任务视图"
                value={view}
                onValueChange={setView}
                options={[
                  { value: "list", label: "列表" },
                  { value: "board", label: "看板" },
                  { value: "timeline", label: "时间线" },
                ]}
              />
              {/* 同一组任务根据 view 切换呈现方式。 */}
            </>
          );
        };
      `,content:e.jsx(w,{})},{title:"图标和禁用",code:`
        import {
          CodeIcon,
          Component1Icon,
          GearIcon,
          LightningBoltIcon,
        } from "@radix-ui/react-icons";

        <Segmented
          ariaLabel="输出类型"
          defaultValue="code"
          options={[
            { value: "summary", label: "摘要", icon: <Component1Icon /> },
            { value: "code", label: "代码", icon: <CodeIcon /> },
            { value: "agent", label: "自动化", icon: <LightningBoltIcon /> },
            { value: "settings", label: "配置", icon: <GearIcon />, disabled: true },
          ]}
        />;
      `,content:e.jsx(t,{ariaLabel:"输出类型",defaultValue:"code",options:h})},{title:"尺寸",code:`
        <Stack gap="sm">
          <Segmented size="sm" ariaLabel="小尺寸密度" options={densityOptions} />
          <Segmented ariaLabel="默认密度" options={densityOptions} />
          <Segmented size="lg" ariaLabel="大尺寸密度" options={densityOptions} />
        </Stack>;
      `,content:e.jsxs(n,{gap:"sm",children:[e.jsx(t,{size:"sm",ariaLabel:"小尺寸密度",options:r}),e.jsx(t,{ariaLabel:"默认密度",options:r}),e.jsx(t,{size:"lg",ariaLabel:"大尺寸密度",options:r})]})},{title:"块级铺满",code:`
        <Segmented
          block
          ariaLabel="报告范围"
          options={[
            { value: "daily", label: "日报" },
            { value: "weekly", label: "周报" },
            { value: "monthly", label: "月报" },
          ]}
        />;
      `,content:e.jsx("div",{style:{width:"min(100%, 32rem)"},children:e.jsx(t,{block:!0,ariaLabel:"报告范围",options:[{value:"daily",label:"日报"},{value:"weekly",label:"周报"},{value:"monthly",label:"月报"}]})})},{title:"受控模式",code:`
        import { useState } from "react";
        import { Badge } from "willa/Badge";
        import { Segmented } from "willa/Segmented";
        import { Stack } from "willa/Stack";
        import "willa/Badge.css";
        import "willa/Segmented.css";
        import "willa/Stack.css";

        const Demo = () => {
          const [value, setValue] = useState("balanced");

          return (
            <Stack gap="sm">
              <Segmented
                ariaLabel="模型输出模式"
                value={value}
                onValueChange={setValue}
                options={[
                  { value: "fast", label: "快速" },
                  { value: "balanced", label: "均衡" },
                  { value: "precise", label: "精确" },
                ]}
              />
              <Badge tone="info">当前模式：{value}</Badge>
            </Stack>
          );
        };
      `,content:e.jsx(y,{})},{title:"多选模式",code:`
        import { useState } from "react";
        import { Segmented } from "willa/Segmented";
        import { Stack } from "willa/Stack";
        import "willa/Segmented.css";
        import "willa/Stack.css";

        const Demo = () => {
          const [values, setValues] = useState(["comments", "changes"]);

          return (
            <Stack gap="sm">
              <Segmented
                selectionMode="multiple"
                ariaLabel="面板可见性"
                values={values}
                onValuesChange={setValues}
                options={[
                  { value: "comments", label: "评论" },
                  { value: "changes", label: "变更" },
                  { value: "timeline", label: "时间线" },
                ]}
              />
              {/* 同一个 Review 卡片根据 values 显示或隐藏信息块。 */}
            </Stack>
          );
        };
      `,content:e.jsx(j,{})},{title:"使用边界",code:`
        <Group gap="sm" wrap>
          <Badge tone="info">Segmented：切换当前值</Badge>
          <Badge tone="neutral">Tabs：切换内容面板</Badge>
        </Group>;
      `,content:e.jsxs(n,{gap:"sm",children:[e.jsxs(p,{gap:"sm",wrap:!0,children:[e.jsx(i,{tone:"info",children:"Segmented：单选或多选的视图、模式、密度、筛选维度"}),e.jsx(i,{tone:"neutral",children:"Tabs：内容分组、示例代码、文档面板"})]}),e.jsx("p",{style:{margin:0,color:"var(--willa-content-muted)"},children:"当切换结果只改变一个业务值时使用 Segmented；当每个选项背后都有独立内容区域时使用 Tabs。"})]})}],props:[{name:"selectionMode",type:'"single" | "multiple"',defaultValue:'"single"',description:"选择模式。单选用于互斥值，多选用于开关一组并列能力。"},{name:"options",type:"Array<SegmentedOption>",required:!0,description:"分段选项列表。"},{name:"value",type:"string",description:"当前选中的值，传入后组件进入受控模式。"},{name:"defaultValue",type:"string",defaultValue:"第一个可用项",description:"非受控模式下的默认选中值。"},{name:"onValueChange",type:"(value: string) => void",description:"单选模式下选中值变化时触发。"},{name:"values",type:"Array<string>",description:"多选模式下当前选中的值列表，传入后组件进入受控模式。"},{name:"defaultValues",type:"Array<string>",defaultValue:"[]",description:"多选模式下非受控默认选中值列表。"},{name:"onValuesChange",type:"(values: Array<string>) => void",description:"多选模式下选中值列表变化时触发。"},{name:"size",type:'"sm" | "md" | "lg"',defaultValue:'"md"',description:"分段控件尺寸。"},{name:"block",type:"boolean",defaultValue:"false",description:"是否铺满父容器宽度。"},{name:"disabled",type:"boolean",defaultValue:"false",description:"是否禁用整个控件。"},{name:"ariaLabel",type:"string",description:"无可见标题时提供控件名称。"},{name:"ariaLabelledBy",type:"string",description:"关联外部标题元素作为控件名称。"},{name:"SegmentedOption.value",type:"string",required:!0,description:"选项值。"},{name:"SegmentedOption.label",type:"ReactNode",required:!0,description:"选项展示内容。"},{name:"SegmentedOption.icon",type:"ReactNode",description:"展示在文案前的图标。"},{name:"SegmentedOption.disabled",type:"boolean",defaultValue:"false",description:"是否禁用当前选项。"},{name:"SegmentedOption.ariaLabel",type:"string",description:"选项仅用图标或文案不够明确时提供无障碍名称。"},{name:"className",type:"string",description:"自定义 className。"}]});export{k as default};
