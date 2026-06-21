import{aZ as e,h,ao as t,B as a,a$ as s}from"./index-D1WL8Azw.js";import{F as r}from"./index-BkzO2IdB.js";import{S as u}from"./index-3KlnyicR.js";/* empty css              */import{d as B}from"./defineDoc-D4e1n7NZ.js";import"./index-CET-7Ney.js";import"./useSelectablePanel-Bgg8uvgM.js";import"./floatingPanelParts-Ccd0Ae9g.js";import"./useFloatingPanel-CWrVKE6Y.js";const i={display:"grid",gap:"0.85rem",width:"min(100%, 70rem)",marginInline:"auto"},y=[{value:"all",label:"全部状态"},{value:"open",label:"进行中"},{value:"done",label:"已完成"}],S=[{value:"all",label:"全部负责人"},{value:"design",label:"设计组"},{value:"engineering",label:"工程组"}],F=()=>{const[o,n]=s.useState(""),[c,m]=s.useState("all"),[d,p]=s.useState("all"),l=!!(o||c!=="all"||d!=="all"),w=[{id:"status",width:"10rem",control:e.jsx(u,{value:c,options:y,width:"100%",onValueChange:m})},{id:"owner",width:"11rem",control:e.jsx(u,{value:d,options:S,width:"100%",onValueChange:p})}];return e.jsxs("div",{style:i,children:[e.jsx(r,{search:e.jsx(t,{value:o,onValueChange:n,placeholder:"搜索任务、文档或负责人",width:"100%"}),items:w,actions:e.jsx(h,{variant:"ghost",size:"sm",onClick:()=>{n(""),m("all"),p("all")},children:"重置"}),summary:l?e.jsx("span",{children:"已应用筛选条件，列表将按当前条件刷新。"}):e.jsx("span",{children:"未应用筛选条件。"})}),e.jsx(a,{tone:l?"info":"neutral",children:l?"筛选中":"全部结果"})]})},V=B({id:"filter-bar",name:"FilterBar",category:"form",packageName:"willa/FilterBar",description:"用于列表、表格和搜索页顶部的搜索、筛选和操作区域。",imports:[{name:"FilterBar",from:"willa/FilterBar"}],css:"willa/FilterBar.css",demo:{name:"FilterBar",component:r,props:{search:e.jsx(t,{placeholder:"搜索任务",width:"100%"}),summary:"未应用筛选条件。"}},code:`
    import { FilterBar } from "willa/FilterBar";
    import { SearchInput } from "willa/SearchInput";
    import "willa/FilterBar.css";
    import "willa/SearchInput.css";

    <FilterBar
      search={<SearchInput placeholder="搜索任务" width="100%" />}
      summary="未应用筛选条件。"
    />;
  `,sections:[{title:"完整筛选",code:`
        import { useState } from "react";
        import { Badge } from "willa/Badge";
        import { Button } from "willa/Button";
        import { FilterBar, type FilterBarItem } from "willa/FilterBar";
        import { SearchInput } from "willa/SearchInput";
        import { Select } from "willa/Select";
        import "willa/Badge.css";
        import "willa/Button.css";
        import "willa/FilterBar.css";
        import "willa/SearchInput.css";
        import "willa/Select.css";

        const Demo = () => {
          const [keyword, setKeyword] = useState("");
          const [status, setStatus] = useState("all");
          const hasFilter = Boolean(keyword || status !== "all");
          const items: Array<FilterBarItem> = [
            {
              id: "status",
              width: "10rem",
              control: (
                <Select
                  value={status}
                  options={[
                    { value: "all", label: "全部状态" },
                    { value: "open", label: "进行中" },
                    { value: "done", label: "已完成" },
                  ]}
                  width="100%"
                  onValueChange={setStatus}
                />
              ),
            },
          ];

          return (
            <FilterBar
              search={
                <SearchInput
                  value={keyword}
                  onValueChange={setKeyword}
                  placeholder="搜索任务、文档或负责人"
                  width="100%"
                />
              }
              items={items}
              actions={
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setKeyword("");
                    setStatus("all");
                  }}
                >
                  重置
                </Button>
              }
              summary={hasFilter ? "已应用筛选条件。" : "未应用筛选条件。"}
            />
          );
        };
      `,content:e.jsx(F,{})},{title:"紧凑布局",code:`
        <FilterBar
          density="compact"
          search={<SearchInput size="sm" placeholder="搜索文档" width="100%" />}
          actions={<Button size="sm">新增</Button>}
          summary="适合表格工具栏和窄区域。"
        />;
      `,content:e.jsx("div",{style:i,children:e.jsx(r,{density:"compact",search:e.jsx(t,{size:"sm",placeholder:"搜索文档",width:"100%"}),actions:e.jsx(h,{size:"sm",children:"新增"}),summary:"适合表格工具栏和窄区域。"})})},{title:"自定义筛选项",code:`
        <FilterBar
          search={<SearchInput placeholder="搜索资源" width="100%" />}
          summary="children 可以承载标签、开关或自定义控件。"
        >
          <Badge tone="info">AI 产品</Badge>
          <Badge tone="success">已发布</Badge>
          <Badge tone="neutral">内部文档</Badge>
        </FilterBar>;
      `,content:e.jsx("div",{style:i,children:e.jsxs(r,{search:e.jsx(t,{placeholder:"搜索资源",width:"100%"}),summary:"children 可以承载标签、开关或自定义控件。",children:[e.jsx(a,{tone:"info",children:"AI 产品"}),e.jsx(a,{tone:"success",children:"已发布"}),e.jsx(a,{tone:"neutral",children:"内部文档"})]})})}],props:[{name:"search",type:"ReactNode",description:"搜索区域，通常放 SearchInput。"},{name:"items",type:"Array<FilterBarItem>",description:"结构化筛选项列表。"},{name:"actions",type:"ReactNode",description:"右侧操作区域，例如重置、新建或导出按钮。"},{name:"summary",type:"ReactNode",description:"筛选结果说明或当前筛选摘要。"},{name:"density",type:'"compact" | "normal"',defaultValue:'"normal"',description:"筛选条密度。"},{name:"align",type:'"start" | "end" | "stretch"',defaultValue:'"start"',description:"主区域垂直对齐方式。"},{name:"children",type:"ReactNode",description:"自定义筛选内容，会和 items 一起进入筛选项区域。"}]});export{V as default};
