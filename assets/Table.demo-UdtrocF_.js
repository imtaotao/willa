import{aO as e,aq as i,g as n,ao as p,aQ as d,ag as I,B as o,Q as w}from"./index-frW7qygp.js";/* empty css              */import{F as S}from"./index-DzLC-Oos.js";/* empty css              */import{S as f}from"./index-ey3KGIbT.js";/* empty css              */import{S as C}from"./index-CQINYQ2h.js";import{d as B}from"./defineDoc-xJr95xcI.js";import"./index-rYbDHERU.js";import"./useSelectablePanel-CtCfDn3K.js";import"./useFloatingPanel-DIp7Rpu8.js";const u=[{key:"prompt-input",cells:[{key:"name",label:"组件",value:"PromptInput",width:"12rem",sortable:!0},{key:"owner",label:"归属",value:"AI"},{key:"status",label:"状态",value:"stable",render:e.jsx(o,{tone:"success",children:"稳定"})},{key:"coverage",label:"覆盖能力",value:"输入、提交、禁用、自动高度和辅助信息"}],expanded:"PromptInput 适合作为 AI 对话、智能搜索和生成任务的输入入口。",actions:e.jsx(n,{size:"sm",variant:"ghost",children:"查看"})},{key:"upload",tone:"warning",cells:[{key:"name",label:"组件",value:"Upload",width:"12rem",sortable:!0},{key:"owner",label:"归属",value:"Form"},{key:"status",label:"状态",value:"wip",render:e.jsx(o,{tone:"warning",children:"完善中"})},{key:"coverage",label:"覆盖能力",value:"拖拽、预览、上传进度和下载回退"}],expanded:"Upload 可以接入用户自己的上传逻辑，并展示上传进度。",actions:e.jsx(n,{size:"sm",variant:"ghost",children:"查看"})},{key:"code-block",selected:!0,cells:[{key:"name",label:"组件",value:"CodeBlock",width:"12rem",sortable:!0},{key:"owner",label:"归属",value:"Content"},{key:"status",label:"状态",value:"stable",render:e.jsx(o,{tone:"success",children:"稳定"})},{key:"coverage",label:"覆盖能力",value:"高亮、行号、复制、文件名和语言提示"}],expanded:"CodeBlock 是内容渲染和 AI 代码结果的基础展示组件。",actions:e.jsx(n,{size:"sm",variant:"ghost",children:"查看"})}],j=[{key:"mobile",cells:[{key:"task",label:"任务",value:"移动端校验"},{key:"owner",label:"负责人",value:"Design"},{key:"progress",label:"进度",value:"82%",align:"end"}]},{key:"theme",cells:[{key:"task",label:"任务",value:"主题变量整理"},{key:"owner",label:"负责人",value:"Frontend"},{key:"progress",label:"进度",value:"96%",align:"end"}]}],A=[{key:"feedback-summary",cells:[{key:"task",label:"任务",value:"产品反馈摘要生成",width:"12rem",render:e.jsxs(w,{as:"span",gap:"xs",inline:!0,wrap:!1,children:[e.jsx(o,{tone:"info",children:"AI"}),e.jsx("strong",{children:"产品反馈摘要生成"})]})},{key:"detail",label:"说明",value:"从近 128 条用户反馈中提取高频问题、风险提示和下一步可执行建议。",title:"从近 128 条用户反馈中提取高频问题、风险提示和下一步可执行建议。"},{key:"result",label:"结果",value:"已生成",render:e.jsx(o,{tone:"success",children:"已生成"}),align:"end"}],actions:e.jsx(n,{size:"sm",variant:"ghost",children:"复制"})},{key:"risk-check",cells:[{key:"task",label:"任务",value:"风险校验",width:"12rem",render:e.jsxs(w,{as:"span",gap:"xs",inline:!0,wrap:!1,children:[e.jsx(o,{tone:"warning",children:"审核"}),e.jsx("strong",{children:"风险校验"})]})},{key:"detail",label:"说明",value:"检查生成内容里是否包含敏感信息、缺少来源引用或需要人工确认的结论。",title:"检查生成内容里是否包含敏感信息、缺少来源引用或需要人工确认的结论。"},{key:"result",label:"结果",value:"需要复核",render:e.jsx(o,{tone:"warning",children:"需要复核"}),align:"end"}],actions:e.jsx(n,{size:"sm",variant:"ghost",children:"查看"})}],z=[{key:"prompt-config",cells:[{key:"name",label:"组件",value:"PromptInput",width:168,sortable:!0},{key:"scene",label:"场景",value:"AI 对话、信息检索、批量生成和任务录入"},{key:"detail",label:"说明",value:"支持自动高度、提交快捷键、辅助动作、loading 状态和多种输入约束。"},{key:"owner",label:"归属",value:"AI",align:"center"}],actions:e.jsx(n,{size:"sm",variant:"ghost",children:"查看"})},{key:"markdown-preview",cells:[{key:"name",label:"组件",value:"CodeBlock",width:168,sortable:!0},{key:"scene",label:"场景",value:"长文本预览、代码片段展示和复制"},{key:"detail",label:"说明",value:"适合在内容页、文档页和示例页里承载长描述，拖宽后能更完整地看到上下文。"},{key:"owner",label:"归属",value:"Content",align:"center"}],actions:e.jsx(n,{size:"sm",variant:"ghost",children:"查看"})},{key:"table-preview",cells:[{key:"name",label:"组件",value:"Table",width:168,sortable:!0},{key:"scene",label:"场景",value:"数据管理、结果列表、审阅队列和批量操作"},{key:"detail",label:"说明",value:"列宽可以通过拖拽手动调整，双击拖拽柄后会自动扩到当前内容所需宽度。"},{key:"owner",label:"归属",value:"Content",align:"center"}],actions:e.jsx(n,{size:"sm",variant:"ghost",children:"查看"})}],R=Array.from({length:16},(a,t)=>({key:`method-${t+1}`,cells:[{key:"name",label:"组件",value:["Table","FilterBar","SelectionBar","Tooltip"][t%4],width:160,fixed:"left"},{key:"owner",label:"归属",value:["Content","Form","Content","Content","AI","Widgets"][t%6],width:120},{key:"scene",label:"场景",value:["内容列表、批量管理和审阅队列","知识库索引和检索结果","图文素材管理和发布审核","生成结果回看和修订"][t%4],width:220},{key:"desc",label:"说明",value:"这是一段较长的说明文本，用来演示 Table 内部滚动容器的实例方法、横向滚动位置控制和列宽变化后的布局表现。",width:320},{key:"status",label:"状态",value:t%2===0?"stable":"wip",render:t%2===0?e.jsx(o,{tone:"success",children:"稳定"}):e.jsx(o,{tone:"warning",children:"完善中"}),align:"end",width:120},{key:"updated",label:"更新时间",value:`2026-06-${String(10+t).padStart(2,"0")}`,width:140,fixed:"right"}],actions:e.jsx(n,{size:"sm",variant:"ghost",children:"查看"})})),v=Array.from({length:120},(a,t)=>({key:`virtual-${t+1}`,cells:[{key:"name",label:"组件",value:["Table","FilterBar","SelectionBar","Tooltip"][t%4],width:160,fixed:"left"},{key:"owner",label:"归属",value:["Content","Form","Content","Content","AI","Widgets"][t%6],width:120},{key:"scene",label:"场景",value:["内容列表、批量管理和审阅队列","知识库索引和检索结果","图文素材管理和发布审核","生成结果回看和修订"][t%4],width:220},{key:"desc",label:"说明",value:"虚拟滚动只渲染当前可视区附近的数据，适合条目很多且需要持续滚动的长表。",width:320},{key:"status",label:"状态",value:t%2===0?"stable":"wip",render:t%2===0?e.jsx(o,{tone:"success",children:"稳定"}):e.jsx(o,{tone:"warning",children:"完善中"}),align:"end",width:120},{key:"updated",label:"更新时间",value:`2026-06-${String(t%28+1).padStart(2,"0")}`,width:140,fixed:"right"}],actions:e.jsx(n,{size:"sm",variant:"ghost",children:"查看"})})),N=()=>e.jsx(p,{width:"100%",children:e.jsx(i,{caption:"拖拽表头右侧把手调整列宽，双击后自动适配内容宽度",items:z,resizableColumns:!0,stickyActions:!0,actionsWidth:"5.6rem"})}),V=()=>{const a=d.useRef(null),[t,s]=d.useState(!0);return e.jsxs(p,{gap:"md",width:"100%",children:[e.jsx(C,{checked:t,label:"固定表头",onChange:l=>s(l.currentTarget.checked)}),e.jsxs(w,{gap:"sm",wrap:!0,children:[e.jsx(n,{size:"sm",variant:"ghost",onClick:()=>{var l;return(l=a.current)==null?void 0:l.scrollToLeft("smooth")},children:"滚到最左"}),e.jsx(n,{size:"sm",variant:"ghost",onClick:()=>{var l;return(l=a.current)==null?void 0:l.scrollTo({left:760,behavior:"smooth"})},children:"滚到右侧"}),e.jsx(n,{size:"sm",variant:"ghost",onClick:()=>{var l;return(l=a.current)==null?void 0:l.scrollToTop("smooth")},children:"回到顶部"}),e.jsx(n,{size:"sm",variant:"ghost",onClick:()=>{var l;return(l=a.current)==null?void 0:l.scrollToBottom("smooth")},children:"到底部"})]}),e.jsx(i,{ref:a,caption:"固定列、操作列和实例方法控制内部滚动容器",items:R,resizableColumns:!0,stickyHeader:t,stickyActions:!0,actionsWidth:"5.6rem",style:{maxHeight:"20rem"}})]})},F=()=>e.jsx(p,{width:"100%",children:e.jsx(i,{caption:"虚拟滚动只渲染当前可视区附近的行，长表滚动更稳定",items:v,resizableColumns:!0,stickyHeader:!0,stickyActions:!0,virtualScroll:!0,actionsWidth:"5.6rem",style:{maxHeight:"20rem"}})}),P=()=>{const[a,t]=d.useState(v.slice(0,80));return d.useEffect(()=>{let s=!1,l=0;const r=()=>{l=window.setTimeout(()=>{s||(t(c=>{const m=c.length+1,g=Array.from({length:40},(h,x)=>{const k=m+x,T=v[k%v.length];return{...T,key:`stream-${k}`,cells:T.cells.map(y=>y.key==="name"?{...y,value:["Table","FilterBar","SelectionBar","Tooltip"][k%4]}:y.key==="updated"?{...y,value:`2026-07-${String(k%28+1).padStart(2,"0")}`}:y)}});return[...c,...g]}),s||r())},700)};return r(),()=>{s=!0,window.clearTimeout(l)}},[]),e.jsx(p,{width:"100%",children:e.jsx(i,{caption:"虚拟滚动 + 自动加载，数据会按节奏持续追加",items:a,resizableColumns:!0,stickyHeader:!0,stickyActions:!0,virtualScroll:!0,actionsWidth:"5.6rem",style:{maxHeight:"20rem"}})})},$=[{value:"all",label:"全部归属"},{value:"AI",label:"AI"},{value:"Form",label:"Form"},{value:"Content",label:"Content"}],H=[{value:"all",label:"全部状态"},{value:"stable",label:"稳定"},{value:"wip",label:"完善中"}],W=()=>{const[a,t]=d.useState(""),[s,l]=d.useState("all"),[r,c]=d.useState("all"),m=O(u,{keyword:a,owner:s,status:r}),b=[{id:"owner",width:"10rem",control:e.jsx(f,{value:s,options:$,width:"100%",onValueChange:l})},{id:"status",width:"10rem",control:e.jsx(f,{value:r,options:H,width:"100%",onValueChange:c})}];return e.jsx(p,{gap:"md",width:"min(100%, 72rem)",style:{marginInline:"auto"},children:e.jsx(i,{header:e.jsx(S,{search:e.jsx(I,{value:a,onValueChange:t,placeholder:"搜索组件、归属或能力",width:"100%"}),items:b,actions:e.jsx(n,{size:"sm",variant:"ghost",onClick:()=>{t(""),l("all"),c("all")},children:"重置"}),summary:`匹配 ${m.length} 个组件。`}),caption:"组件筛选结果",items:m,empty:"没有匹配的组件",stickyActions:!0,footer:`当前展示 ${m.length} / ${u.length} 个组件。`})})},O=(a,t)=>{const s=t.keyword.trim().toLowerCase();return a.filter(l=>{var b,g;const r=l.cells.map(K).join(" ").toLowerCase(),c=String(((b=l.cells.find(h=>h.key==="owner"))==null?void 0:b.value)??""),m=String(((g=l.cells.find(h=>h.key==="status"))==null?void 0:g.value)??"");return(!s||r.includes(s))&&(t.owner==="all"||c===t.owner)&&(t.status==="all"||m===t.status)})},K=a=>typeof a.value=="string"||typeof a.value=="number"?String(a.value):"",Y=B({id:"table",name:"Table",packageName:"willa/Table",description:"通过 items 渲染表格和产品数据列表，支持自定义单元格、排序、选择、分页、展开行、右侧操作区、列宽调整和滚动控制。",imports:[{name:"Table",from:"willa/Table"},{name:"Stack",from:"willa/Stack"},{name:"Group",from:"willa/Group"}],css:"willa/Table.css",demo:{name:"Table",component:i,props:{caption:"组件能力覆盖表",items:u}},code:`
    import { Table, type TableItem } from "willa/Table";
    import "willa/Table.css";

    const items: Array<TableItem> = [
      {
        key: "prompt-input",
        cells: [
          { label: "组件", value: "PromptInput" },
          { label: "归属", value: "AI" },
          { label: "状态", render: <Badge tone="success">稳定</Badge> },
        ],
        actions: <Button size="sm">查看</Button>,
      },
    ];

    <Table caption="组件能力覆盖表" items={items} stickyActions />;
  `,sections:[{title:"搜索与筛选",code:`
        import { useState } from "react";
        import { Button } from "willa/Button";
        import { FilterBar, type FilterBarItem } from "willa/FilterBar";
        import { SearchInput } from "willa/SearchInput";
        import { Select } from "willa/Select";
        import { Table, type TableItem } from "willa/Table";
        import "willa/Button.css";
        import "willa/FilterBar.css";
        import "willa/SearchInput.css";
        import "willa/Select.css";
        import "willa/Table.css";

        const Demo = () => {
          const [keyword, setKeyword] = useState("");
          const [owner, setOwner] = useState("all");
          const filteredItems = items.filter((item) => {
            const text = item.cells.map((cell) => cell.value ?? "").join(" ");
            const itemOwner = item.cells.find((cell) => cell.key === "owner")?.value;

            return (
              text.toLowerCase().includes(keyword.toLowerCase()) &&
              (owner === "all" || itemOwner === owner)
            );
          });
          const filters: Array<FilterBarItem> = [
            {
              id: "owner",
              width: "10rem",
              control: (
                <Select
                  value={owner}
                  options={[
                    { value: "all", label: "全部归属" },
                    { value: "AI", label: "AI" },
                    { value: "Form", label: "Form" },
                    { value: "Content", label: "Content" },
                  ]}
                  width="100%"
                  onValueChange={setOwner}
                />
              ),
            },
          ];

          return (
            <Stack width="min(100%, 72rem)" style={{ marginInline: "auto" }}>
              <Table
                header={
                  <FilterBar
                    search={
                      <SearchInput
                        value={keyword}
                        onValueChange={setKeyword}
                        placeholder="搜索组件、归属或能力"
                        width="100%"
                      />
                    }
                    items={filters}
                    actions={
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => {
                          setKeyword("");
                          setOwner("all");
                        }}
                      >
                        重置
                      </Button>
                    }
                    summary={\`匹配 \${filteredItems.length} 个组件。\`}
                  />
                }
                caption="组件筛选结果"
                items={filteredItems}
                empty="没有匹配的组件"
                stickyActions
                footer={\`当前展示 \${filteredItems.length} 个组件。\`}
              />
            </Stack>
          );
        };
      `,content:e.jsx(W,{})},{title:"基础表格",code:`
        const items = [
          {
            key: "prompt-input",
            cells: [
              { key: "name", label: "组件", value: "PromptInput", sortable: true },
              { key: "owner", label: "归属", value: "AI" },
              {
                key: "status",
                label: "状态",
                render: <Badge tone="success">稳定</Badge>,
              },
              {
                key: "coverage",
                label: "覆盖能力",
                value: "输入、提交、禁用、自动高度和辅助信息",
              },
            ],
            actions: (
              <Button size="sm" variant="ghost">
                查看
              </Button>
            ),
          },
        ];

        <Table
          caption="组件能力覆盖表"
          items={items}
          defaultSort={{ key: "name", direction: "asc" }}
        />;
      `,content:e.jsx(i,{caption:"组件能力覆盖表",items:u,defaultSort:{key:"name",direction:"asc"}})},{title:"选择与固定操作列",code:`
        const items = [
          {
            key: "prompt-input",
            cells: [
              { key: "name", label: "组件", value: "PromptInput" },
              { key: "owner", label: "归属", value: "AI" },
              {
                key: "coverage",
                label: "覆盖能力",
                value: "输入、提交、禁用、自动高度和辅助信息",
              },
            ],
            actions: (
              <Button size="sm" variant="ghost">
                查看
              </Button>
            ),
          },
        ];

        <Table
          caption="横向滚动时保留操作入口"
          items={items}
          selectionMode="multiple"
          selectionBar
          selectionBarDescription="可以对当前筛选结果执行批量操作。"
          selectionBarActions={
            <Button size="sm" variant="soft">
              批量导出
            </Button>
          }
          stickyActions
          actionsWidth="5.6rem"
        />;
      `,content:e.jsx(i,{caption:"横向滚动时保留操作入口",items:u,selectionMode:"multiple",selectionBar:!0,selectionBarDescription:"可以对当前筛选结果执行批量操作。",selectionBarActions:e.jsx(n,{size:"sm",variant:"soft",children:"批量导出"}),stickyActions:!0,actionsWidth:"5.6rem"})},{title:"列宽调整",code:`
        const items = [
          {
            key: "prompt-config",
            cells: [
              { key: "name", label: "组件", value: "PromptInput", width: 168 },
              { key: "scene", label: "场景", value: "AI 对话、信息检索、批量生成和任务录入" },
              {
                key: "detail",
                label: "说明",
                value: "支持自动高度、提交快捷键、辅助动作、loading 状态和多种输入约束。",
              },
              { key: "owner", label: "归属", value: "AI", align: "center" },
            ],
          },
        ];

        <Table
          caption="拖拽表头右侧把手调整列宽，双击后自动适配内容宽度"
          items={items}
          resizableColumns
          stickyActions
        />;
      `,content:e.jsx(N,{})},{title:"虚拟滚动",code:`
        const items = Array.from({ length: 120 }, (_, index) => ({
          key: \`virtual-\${index + 1}\`,
          cells: [
            { key: "name", label: "组件", value: ["Table", "FilterBar", "SelectionBar", "Tooltip"][index % 4], width: 160, fixed: "left" },
            { key: "owner", label: "归属", value: ["Content", "Form", "Content", "Content", "AI", "Widgets"][index % 6], width: 120 },
            { key: "scene", label: "场景", value: "内容列表、批量管理和审阅队列", width: 220 },
            { key: "detail", label: "说明", value: "虚拟滚动只渲染当前可视区附近的行，适合条目很多且需要持续滚动的长表。", width: 320 },
            { key: "status", label: "状态", value: index % 2 === 0 ? "stable" : "wip", align: "end", width: 120 },
            { key: "updated", label: "更新时间", value: \`2026-06-\${String((index % 28) + 1).padStart(2, "0")}\`, width: 140, fixed: "right" },
          ],
          actions: <Button size="sm" variant="ghost">查看</Button>,
        }));

        <Table
          caption="虚拟滚动只渲染当前可视区附近的行，长表滚动更稳定"
          items={items}
          resizableColumns
          stickyHeader
          stickyActions
          virtualScroll
          actionsWidth="5.6rem"
          style={{ maxHeight: "20rem" }}
        />;
      `,content:e.jsx(F,{})},{title:"虚拟滚动 + 自动加载",code:`
        import { useEffect, useState } from "react";
        import { Table, type TableItem } from "willa/Table";

        const Demo = () => {
          const [items, setItems] = useState<Array<TableItem>>(virtualTableItems.slice(0, 80));

          useEffect(() => {
            let cancelled = false;
            let timer = 0;

            const appendNextBatch = () => {
              timer = window.setTimeout(() => {
                if (cancelled) return;

                setItems((currentItems) => [
                  ...currentItems,
                  ...virtualTableItems.slice(0, 40).map((item, offset) => {
                    const index = currentItems.length + offset + 1;
                    return {
                      ...item,
                      key: \`stream-\${index}\`,
                      cells: item.cells.map((cell) =>
                        cell.key === "updated"
                          ? {
                              ...cell,
                              value: \`2026-07-\${String((index % 28) + 1).padStart(2, "0")}\`,
                            }
                          : cell,
                      ),
                    };
                  }),
                ]);

                appendNextBatch();
              }, 700);
            };

            appendNextBatch();

            return () => {
              cancelled = true;
              window.clearTimeout(timer);
            };
          }, []);

          return (
            <Table
              caption="虚拟滚动 + 自动加载，数据会按节奏持续追加"
              items={items}
              resizableColumns
              stickyHeader
              stickyActions
              virtualScroll
              actionsWidth="5.6rem"
              style={{ maxHeight: "20rem" }}
            />
          );
        };
      `,content:e.jsx(P,{})},{title:"固定列与实例方法",code:`
        import { useRef } from "react";
        import { Table, type TableRef } from "willa/Table";

        const tableRef = useRef<TableRef>(null);

        <Table ref={tableRef} items={items} resizableColumns />;
      `,content:e.jsx(V,{})},{title:"分页与展开",code:`
        const items = [
          {
            key: "prompt-input",
            cells: [
              { key: "name", label: "组件", value: "PromptInput" },
              { key: "owner", label: "归属", value: "AI" },
            ],
            expanded: "PromptInput 适合作为 AI 对话、智能搜索和生成任务的输入入口。",
          },
          {
            key: "upload",
            cells: [
              { key: "name", label: "组件", value: "Upload" },
              { key: "owner", label: "归属", value: "Form" },
            ],
          },
        ];

        <Table
          caption="分页后仍可展开查看详情"
          items={items}
          defaultExpandedKeys={["prompt-input"]}
          pagination={{ pageSize: 2 }}
        />;
      `,content:e.jsx(i,{caption:"分页后仍可展开查看详情",items:u,defaultExpandedKeys:["prompt-input"],pagination:{pageSize:2}})},{title:"自定义单元格",code:`
        const items = [
          {
            key: "feedback-summary",
            cells: [
              {
                key: "task",
                label: "任务",
                value: "产品反馈摘要生成",
                render: (
                  <Group as="span" gap="xs" inline wrap={false}>
                    <Badge tone="info">AI</Badge>
                    <strong>产品反馈摘要生成</strong>
                  </Group>
                ),
              },
              {
                key: "detail",
                label: "说明",
                value:
                  "从近 128 条用户反馈中提取高频问题、风险提示和下一步可执行建议。",
                title:
                  "从近 128 条用户反馈中提取高频问题、风险提示和下一步可执行建议。",
              },
              {
                key: "result",
                label: "结果",
                value: "已生成",
                render: <Badge tone="success">已生成</Badge>,
                align: "end",
              },
            ],
          },
        ];

        <Table caption="自定义渲染和溢出提示" items={items} stickyActions />;
      `,content:e.jsx(i,{caption:"自定义渲染和溢出提示",items:A,stickyActions:!0})},{title:"加载与空态",code:`
        <Stack gap="lg">
          <Table items={[]} loading loadingText="正在同步组件状态..." />
          <Table items={[]} empty="没有匹配的组件" />
        </Stack>;
      `,content:e.jsxs(p,{gap:"lg",children:[e.jsx(i,{items:[],loading:!0,loadingText:"正在同步组件状态..."}),e.jsx(i,{items:[],empty:"没有匹配的组件"})]})},{title:"紧凑尺寸",code:`
        const items = [
          {
            key: "mobile",
            cells: [
              { key: "task", label: "任务", value: "移动端校验" },
              { key: "owner", label: "负责人", value: "Design" },
              { key: "progress", label: "进度", value: "82%", align: "end" },
            ],
          },
        ];

        <Table size="sm" items={items} />;
      `,content:e.jsx(i,{size:"sm",items:j})}],props:[{name:"items",type:"Array<TableItem>",required:!0,description:"表格行数据，包含 cells、actions 和行点击能力。"},{name:"caption",type:"ReactNode",description:"表格说明，渲染为 caption。"},{name:"header",type:"ReactNode",description:"表格头部自定义区域，适合放搜索、筛选、批量操作和工具栏。"},{name:"footer",type:"ReactNode",description:"表格底部自定义区域，适合放统计说明、状态提示或补充操作。"},{name:"size",type:'"sm" | "md" | "lg"',defaultValue:'"md"',description:"表格密度。"},{name:"stickyHeader",type:"boolean",defaultValue:"false",description:"表头是否在滚动容器内吸顶。"},{name:"stickyActions",type:"boolean",defaultValue:"false",description:"操作列是否固定在表格最右侧。"},{name:"actionsWidth",type:"number | string",description:"操作列宽度。"},{name:"resizableColumns",type:"boolean",defaultValue:"false",description:"是否允许表头列宽拖拽和双击自适应。"},{name:"virtualScroll",type:"boolean",defaultValue:"false",description:"是否开启虚拟滚动，只渲染当前可视区附近的行。"},{name:"virtualScrollOverscan",type:"number",defaultValue:"4",description:"虚拟滚动预渲染的额外行数。"},{name:"infiniteScroll",type:"boolean",defaultValue:"false",description:"是否开启滚动到底部自动加载更多行。"},{name:"hasMore",type:"boolean",defaultValue:"false",description:"无限滚动是否还有更多数据。"},{name:"scrollThreshold",type:"number",defaultValue:"56",description:"距离底部多少像素时触发 onLoadMore。"},{name:"onLoadMore",type:"() => void | Promise<void>",description:"无限滚动加载更多回调。"},{name:"loading",type:"boolean",defaultValue:"false",description:"是否展示加载态。"},{name:"loadingText",type:"ReactNode",defaultValue:'"加载中"',description:"加载态内容。"},{name:"empty",type:"ReactNode",defaultValue:'"暂无数据"',description:"空态内容。"},{name:"actionsLabel",type:"ReactNode",defaultValue:'"操作"',description:"操作列表头内容。"},{name:"sort",type:"TableSortState",description:"受控排序状态。"},{name:"defaultSort",type:"TableSortState",description:"默认排序状态。"},{name:"onSortChange",type:"(sort: TableSortState) => void",description:"排序变化回调。"},{name:"selectionMode",type:'"none" | "single" | "multiple"',defaultValue:'"none"',description:"行选择模式。"},{name:"selectedKeys",type:"Array<string | number>",description:"受控选中行 key。"},{name:"defaultSelectedKeys",type:"Array<string | number>",defaultValue:"[]",description:"默认选中行 key。"},{name:"onSelectionChange",type:"(keys: Array<string | number>) => void",description:"行选择变化回调。"},{name:"selectionBar",type:"boolean | ReactNode | ((context: TableSelectionBarContext) => ReactNode)",defaultValue:"false",description:"多选后展示的选择操作条。传 true 时使用内置 SelectionBar，也可以传入自定义节点或渲染函数。"},{name:"selectionBarActions",type:"ReactNode | ((context: TableSelectionBarContext) => ReactNode)",description:"传给内置 SelectionBar 的批量操作区。"},{name:"selectionBarDescription",type:"ReactNode | ((context: TableSelectionBarContext) => ReactNode)",description:"传给内置 SelectionBar 的辅助说明。"},{name:"selectionBarSticky",type:"boolean",defaultValue:"false",description:"是否让内置 SelectionBar 使用粘性定位。"},{name:"expandedKeys",type:"Array<string | number>",description:"受控展开行 key。"},{name:"defaultExpandedKeys",type:"Array<string | number>",defaultValue:"[]",description:"默认展开行 key。"},{name:"onExpandedChange",type:"(keys: Array<string | number>) => void",description:"展开行变化回调。"},{name:"pagination",type:"TablePagination",description:"分页配置，传入 pageSize 后启用分页。"},{name:"tableClassName",type:"string",description:"传给内部 table 元素的 className。"},{name:"className",type:"string",description:"传给外层容器的 className。"},{name:"TableItem.key",type:"string | number",required:!0,group:"TableItem",description:"行唯一标识。"},{name:"TableItem.cells",type:"Array<TableCell>",required:!0,group:"TableItem",description:"当前行的单元格配置。"},{name:"TableItem.actions",type:"ReactNode",group:"TableItem",description:"当前行右侧操作区。"},{name:"TableItem.expanded",type:"ReactNode",group:"TableItem",description:"当前行展开后的详情内容。"},{name:"TableItem.selected",type:"boolean",group:"TableItem",description:"是否以选中态展示当前行。"},{name:"TableItem.disabled",type:"boolean",group:"TableItem",description:"是否禁用当前行交互。"},{name:"TableItem.tone",type:'"neutral" | "info" | "success" | "warning" | "danger"',group:"TableItem",description:"行状态色。"},{name:"TableItem.onClick",type:"() => void",group:"TableItem",description:"点击或键盘触发行时的回调。"},{name:"TableCell.key",type:"string",group:"TableCell",description:"列标识，用于排序状态和稳定渲染。"},{name:"TableCell.label",type:"ReactNode",required:!0,group:"TableCell",description:"表头内容。"},{name:"TableCell.value",type:"ReactNode",group:"TableCell",description:"单元格内容。"},{name:"TableCell.render",type:"ReactNode",group:"TableCell",description:"自定义单元格内容，优先级高于 value。"},{name:"TableCell.sortValue",type:"string | number",group:"TableCell",description:"排序时使用的值。"},{name:"TableCell.sortable",type:"boolean",group:"TableCell",description:"当前列是否支持排序。"},{name:"TableCell.compare",type:"(a: TableCell, b: TableCell, aItem: TableItem, bItem: TableItem) => number",group:"TableCell",description:"自定义排序函数。"},{name:"TableCell.align",type:'"start" | "center" | "end"',group:"TableCell",description:"单元格和表头对齐方式。"},{name:"TableCell.fixed",type:'"left" | "right"',group:"TableCell",description:"是否固定到左侧或右侧。"},{name:"TableCell.width",type:"number | string",group:"TableCell",description:"列宽。"},{name:"TableCell.hidden",type:"boolean",group:"TableCell",description:"是否隐藏当前列。"},{name:"TableCell.ellipsis",type:"boolean",group:"TableCell",description:"是否截断长文本并通过自定义悬浮提示展示完整内容，默认开启。"},{name:"TableCell.title",type:"string",group:"TableCell",description:"单元格截断时的自定义提示文本。"},{name:"TableRef.scrollTo",type:"(options?: ScrollToOptions) => void",group:"TableRef",description:"滚动表格内部滚动容器到指定位置。"},{name:"TableRef.scrollToTop",type:"(behavior?: ScrollBehavior) => void",group:"TableRef",description:"滚动到表格顶部。"},{name:"TableRef.scrollToLeft",type:"(behavior?: ScrollBehavior) => void",group:"TableRef",description:"滚动到表格左侧。"},{name:"TableRef.scrollToBottom",type:"(behavior?: ScrollBehavior) => void",group:"TableRef",description:"滚动到表格底部。"}]});export{Y as default};
