import{d as e,l as t,p as n}from"./aidly.esm-bundler-DaTrP4tr.js";import{t as r}from"./Button-O1aY2iqB.js";import{s as i}from"./index-B2UoUlCX.js";import"./style-B00R6KjV.js";import{t as a}from"./defineDoc-Cid5xIoZ.js";import{t as o}from"./Tag-R3pz2yYt.js";import{t as s}from"./style-AzntBF2t.js";import{t as c}from"./style-CMEqrC15.js";import"./style-aOUeSybD.js";var l=n(e(),1),u=t(),d={display:`grid`,gap:`0.85rem`,width:`min(100%, 70rem)`,marginInline:`auto`},f=[{value:`all`,label:`全部状态`},{value:`open`,label:`进行中`},{value:`done`,label:`已完成`}],p=[{value:`all`,label:`全部负责人`},{value:`design`,label:`设计组`},{value:`engineering`,label:`工程组`}],m=a({id:`filter-bar`,name:`FilterBar`,category:`form`,packageName:`willa/FilterBar`,description:`用于列表、表格和搜索页顶部的搜索、筛选和操作区域。`,imports:[{name:`FilterBar`,from:`willa/FilterBar`}],css:`willa/FilterBar.css`,demo:{name:`FilterBar`,component:s,props:{search:(0,u.jsx)(i,{placeholder:`搜索任务`,width:`100%`}),summary:`未应用筛选条件。`}},code:`
    import { FilterBar } from "willa/FilterBar";
    import { SearchInput } from "willa/SearchInput";
    import "willa/FilterBar.css";
    import "willa/SearchInput.css";

    <FilterBar
      search={<SearchInput placeholder="搜索任务" width="100%" />}
      summary="未应用筛选条件。"
    />;
  `,sections:[{title:`完整筛选`,code:`
        import { useState } from "react";
        import { Button } from "willa/Button";
        import { FilterBar, type FilterBarItem } from "willa/FilterBar";
        import { SearchInput } from "willa/SearchInput";
        import { Select } from "willa/Select";
        import { Tag } from "willa/Tag";
        import "willa/Button.css";
        import "willa/FilterBar.css";
        import "willa/SearchInput.css";
        import "willa/Select.css";
        import "willa/Tag.css";

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
      `,content:(0,u.jsx)(()=>{let[e,t]=(0,l.useState)(``),[n,a]=(0,l.useState)(`all`),[m,h]=(0,l.useState)(`all`),g=!!(e||n!==`all`||m!==`all`);return(0,u.jsxs)(`div`,{style:d,children:[(0,u.jsx)(s,{search:(0,u.jsx)(i,{value:e,onValueChange:t,placeholder:`搜索任务、文档或负责人`,width:`100%`}),items:[{id:`status`,width:`10rem`,control:(0,u.jsx)(c,{value:n,options:f,width:`100%`,onValueChange:a})},{id:`owner`,width:`11rem`,control:(0,u.jsx)(c,{value:m,options:p,width:`100%`,onValueChange:h})}],actions:(0,u.jsx)(r,{variant:`ghost`,size:`sm`,onClick:()=>{t(``),a(`all`),h(`all`)},children:`重置`}),summary:g?(0,u.jsx)(`span`,{children:`已应用筛选条件，列表将按当前条件刷新。`}):(0,u.jsx)(`span`,{children:`未应用筛选条件。`})}),(0,u.jsx)(o,{tone:g?`info`:`neutral`,selected:g,children:g?`筛选中`:`全部结果`})]})},{})},{title:`紧凑布局`,code:`
        <FilterBar
          density="compact"
          search={<SearchInput size="sm" placeholder="搜索文档" width="100%" />}
          actions={<Button size="sm">新增</Button>}
          summary="适合表格工具栏和窄区域。"
        />;
      `,content:(0,u.jsx)(`div`,{style:d,children:(0,u.jsx)(s,{density:`compact`,search:(0,u.jsx)(i,{size:`sm`,placeholder:`搜索文档`,width:`100%`}),actions:(0,u.jsx)(r,{size:`sm`,children:`新增`}),summary:`适合表格工具栏和窄区域。`})})},{title:`自定义筛选项`,code:`
        <FilterBar
          search={<SearchInput placeholder="搜索资源" width="100%" />}
          summary="children 可以承载标签、开关或自定义控件。"
        >
          <Tag tone="info">AI 产品</Tag>
          <Tag tone="success">已发布</Tag>
          <Tag tone="neutral">内部文档</Tag>
        </FilterBar>;
      `,content:(0,u.jsx)(`div`,{style:d,children:(0,u.jsxs)(s,{search:(0,u.jsx)(i,{placeholder:`搜索资源`,width:`100%`}),summary:`children 可以承载标签、开关或自定义控件。`,children:[(0,u.jsx)(o,{tone:`info`,children:`AI 产品`}),(0,u.jsx)(o,{tone:`success`,children:`已发布`}),(0,u.jsx)(o,{tone:`neutral`,children:`内部文档`})]})})}],props:[{name:`search`,type:`ReactNode`,description:`搜索区域，通常放 SearchInput。`},{name:`items`,type:`Array<FilterBarItem>`,description:`结构化筛选项列表。`},{name:`actions`,type:`ReactNode`,description:`右侧操作区域，例如重置、新建或导出按钮。`},{name:`summary`,type:`ReactNode`,description:`筛选结果说明或当前筛选摘要。`},{name:`density`,type:`"compact" | "normal"`,defaultValue:`"normal"`,description:`筛选条密度。`},{name:`align`,type:`"start" | "end" | "stretch"`,defaultValue:`"start"`,description:`主区域垂直对齐方式。`},{name:`children`,type:`ReactNode`,description:`自定义筛选内容，会和 items 一起进入筛选项区域。`}]});export{m as default};