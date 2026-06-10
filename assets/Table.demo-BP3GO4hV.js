import{aj as u,ah as t,a9 as N,B as h}from"./index-C2E4XHzt.js";import{B as f}from"./index-3DZYmbrW.js";/* empty css              */import{E as Q}from"./index-LBU_xAJC.js";import{S as Ae}from"./index-DwctlMz6.js";import{d as ze}from"./defineDoc-5r0NM0Fx.js";import"./heading-BzvB6qDP.js";function y(l){var O;const{items:n,caption:d,size:m="md",stickyHeader:c=!1,stickyActions:g=!1,actionsWidth:T,loading:K=!1,loadingText:te="加载中",empty:w="暂无数据",actionsLabel:le="操作",sort:H,defaultSort:ae,onSortChange:B,selectionMode:k="none",selectedKeys:L,defaultSelectedKeys:ne,onSelectionChange:E,expandedKeys:U,defaultExpandedKeys:se,onExpandedChange:P,pagination:i,tableClassName:ie,className:oe,...re}=l,[ce,de]=u.useState(ae),[pe,ue]=u.useState(ne??[]),[me,be]=u.useState(se??[]),[ye,ge]=u.useState((i==null?void 0:i.defaultPage)??1),[C,$]=u.useState(null),ke=u.useId(),p=H??ce,x=L??pe,j=U??me,v=u.useMemo(()=>new Set(x),[x]),_=u.useMemo(()=>new Set(j),[j]),M=X(((O=n[0])==null?void 0:O.cells)??[]),R=n.some(e=>e.actions),V=n.some(e=>e.expanded),D=k!=="none",W=u.useMemo(()=>Ee(n,p),[n,p]),o=Me({itemCount:W.length,page:(i==null?void 0:i.page)??ye,pageSize:i==null?void 0:i.pageSize,total:i==null?void 0:i.total}),G=o?W.slice(o.startIndex,o.endIndex):W,I=G.filter(e=>!e.disabled),q=I.length>0&&I.every(e=>v.has(e.key)),he=I.some(e=>v.has(e.key))&&!q,F=Math.max(M.length+(D?1:0)+(V?1:0)+(R?1:0),1),xe=e=>{H||de(e),B==null||B(e)},S=e=>{L||ue(e),E==null||E(e)},ve=e=>{U||be(e),P==null||P(e)},J=e=>{var s;(i==null?void 0:i.page)===void 0&&ge(e),(s=i==null?void 0:i.onPageChange)==null||s.call(i,e)},Te=(e,s)=>{if(!e.sortable)return;const r=z(e,s),a=(p==null?void 0:p.key)===r&&p.direction==="asc"?"desc":"asc";xe({key:r,direction:a})},fe=e=>{if(!e.disabled){if(k==="single"){S(v.has(e.key)?[]:[e.key]);return}k==="multiple"&&S(v.has(e.key)?x.filter(s=>s!==e.key):[...x,e.key])}},we=()=>{if(k!=="multiple")return;const e=I.map(s=>s.key);if(q){S(x.filter(s=>!e.includes(s)));return}S(Array.from(new Set([...x,...e])))},Ce=e=>{e.expanded&&ve(_.has(e.key)?j.filter(s=>s!==e.key):[...j,e.key])},je=(e,s)=>{const r=Y(s);if(!r)return;const a=e.currentTarget;if(a.scrollWidth<=a.clientWidth+1)return;const b=a.getBoundingClientRect();$({text:r,x:b.left+b.width/2,y:b.top-8})},Ie=()=>$(null),Se=()=>typeof w=="string"||typeof w=="number"?t.jsx(Q,{title:w,variant:"plain",size:"sm",compact:!0}):t.jsx(Q,{title:"暂无数据",variant:"plain",size:"sm",compact:!0,children:w}),Ne=e=>{const s=e.render??e.value;if(e.ellipsis===!1)return s;const r=Y(e);return t.jsx("span",{className:"willa-table-cell-content","aria-label":r,onMouseEnter:a=>je(a,e),onMouseLeave:Ie,children:s})};return t.jsxs("div",{...re,className:N("willa-table",`willa-table--${m}`,c&&"willa-table--sticky-header",g&&"willa-table--sticky-actions",oe),children:[t.jsx("div",{className:"willa-table-scroll",children:t.jsxs("table",{className:N("willa-table-element",ie),children:[d?t.jsx("caption",{className:"willa-table-caption",children:d}):null,M.length>0?t.jsx("thead",{children:t.jsxs("tr",{children:[D?t.jsx("th",{className:"willa-table-selection-header",scope:"col",children:k==="multiple"?t.jsx("input",{className:"willa-table-selection-control",type:"checkbox","aria-label":"选择当前页",checked:q,ref:e=>{e&&(e.indeterminate=he)},onChange:we}):null}):null,V?t.jsx("th",{className:"willa-table-expand-header",scope:"col"}):null,M.map((e,s)=>{const r=z(e,s),a=(p==null?void 0:p.key)===r?p.direction:void 0;return t.jsx("th",{className:e.headerClassName,"data-align":e.align,"data-sort-direction":a,"aria-sort":Ke(a),style:Be(e),scope:"col",children:e.sortable?t.jsxs("button",{className:"willa-table-sort-button",type:"button",onClick:()=>Te(e,s),children:[t.jsx("span",{children:e.label}),t.jsx("span",{className:"willa-table-sort-indicator","aria-hidden":"true"})]}):e.label},r)}),R?t.jsx("th",{className:"willa-table-actions-header","data-align":"end",style:Z(T),scope:"col",children:le}):null]})}):null,t.jsxs("tbody",{children:[K?t.jsx("tr",{children:t.jsx("td",{className:"willa-table-state",colSpan:F,children:t.jsx(Ae,{label:te,size:"sm"})})}):null,!K&&n.length===0?t.jsx("tr",{children:t.jsx("td",{className:"willa-table-state",colSpan:F,children:Se()})}):null,K?null:G.map(e=>{const s=_.has(e.key),r=v.has(e.key)||e.selected;return t.jsxs(u.Fragment,{children:[t.jsxs("tr",{className:N(e.onClick&&!e.disabled&&"willa-table-row--interactive",r&&"willa-table-row--selected",e.disabled&&"willa-table-row--disabled",e.tone&&`willa-table-row--${e.tone}`,e.className),tabIndex:e.onClick&&!e.disabled?0:void 0,onClick:()=>{var a;e.disabled||(a=e.onClick)==null||a.call(e)},onKeyDown:a=>{var b;e.disabled||a.key!=="Enter"&&a.key!==" "||(a.preventDefault(),(b=e.onClick)==null||b.call(e))},children:[D?t.jsx("td",{className:"willa-table-selection-cell",children:t.jsx("input",{className:"willa-table-selection-control",type:k==="single"?"radio":"checkbox",name:k==="single"?ke:void 0,"aria-label":"选择行",checked:v.has(e.key),disabled:e.disabled,onClick:a=>a.stopPropagation(),onChange:()=>fe(e)})}):null,V?t.jsx("td",{className:"willa-table-expand-cell",children:e.expanded?t.jsx("button",{className:"willa-table-expand-button",type:"button","aria-expanded":s,onClick:a=>{a.stopPropagation(),Ce(e)},children:t.jsx("span",{"aria-hidden":"true",children:s?"-":"+"})}):null}):null,X(e.cells).map((a,b)=>t.jsx("td",{className:N(a.ellipsis!==!1&&"willa-table-cell--ellipsis",a.className),"data-align":a.align,children:Ne(a)},z(a,b))),R?t.jsx("td",{className:"willa-table-actions-cell","data-align":"end",style:Z(T),onClick:a=>a.stopPropagation(),children:e.actions}):null]}),e.expanded&&s?t.jsx("tr",{className:"willa-table-expanded-row",children:t.jsx("td",{className:"willa-table-expanded-cell",colSpan:F,children:e.expanded})}):null]},e.key)})]})]})}),o?t.jsxs("div",{className:"willa-table-pagination",children:[t.jsxs("span",{className:"willa-table-pagination-info",children:[o.startIndex+1," - ",o.endIndex," /"," ",o.total]}),t.jsxs("div",{className:"willa-table-pagination-actions",children:[t.jsx("button",{className:"willa-table-pagination-button",type:"button",disabled:o.page<=1,onClick:()=>J(o.page-1),children:"上一页"}),t.jsxs("span",{className:"willa-table-pagination-current",children:[o.page," / ",o.pageCount]}),t.jsx("button",{className:"willa-table-pagination-button",type:"button",disabled:o.page>=o.pageCount,onClick:()=>J(o.page+1),children:"下一页"})]})]}):null,C?t.jsx("div",{className:"willa-table-cell-tooltip",role:"tooltip",style:{left:C.x,top:C.y},children:C.text}):null]})}const X=l=>l.filter(n=>!n.hidden),z=(l,n)=>l.key??String(n),Y=l=>{if(l.title)return l.title;if(typeof l.value=="string"||typeof l.value=="number")return String(l.value)},Ke=l=>{if(l==="asc")return"ascending";if(l==="desc")return"descending"},Be=l=>{if(l.width)return{width:l.width}},Z=l=>{if(l)return{width:l}},Ee=(l,n)=>n?[...l].sort((d,m)=>{const c=ee(d,n.key),g=ee(m,n.key);if(!c||!g)return 0;const T=c.compare?c.compare(c,g,d,m):Pe(c.sortValue??c.value,g.sortValue??g.value);return n.direction==="asc"?T:-T}):l,ee=(l,n)=>l.cells.find((d,m)=>z(d,m)===n),Pe=(l,n)=>typeof l=="number"&&typeof n=="number"?l-n:String(l??"").localeCompare(String(n??""),"zh-Hans-CN",{numeric:!0}),Me=l=>{if(!l.pageSize||l.pageSize<=0)return null;const n=l.total??l.itemCount,d=Math.max(Math.ceil(n/l.pageSize),1),m=Math.min(Math.max(l.page,1),d),c=(m-1)*l.pageSize;return{endIndex:Math.min(c+l.pageSize,l.itemCount),page:m,pageCount:d,startIndex:c,total:n}},A=[{key:"prompt-input",cells:[{key:"name",label:"组件",value:"PromptInput",width:"12rem",sortable:!0},{key:"owner",label:"归属",value:"AI"},{key:"status",label:"状态",render:t.jsx(h,{tone:"success",children:"稳定"})},{key:"coverage",label:"覆盖能力",value:"输入、提交、禁用、自动高度和辅助信息"}],expanded:"PromptInput 适合作为 AI 对话、智能搜索和生成任务的输入入口。",actions:t.jsx(f,{size:"sm",variant:"ghost",children:"查看"})},{key:"upload",tone:"warning",cells:[{key:"name",label:"组件",value:"Upload",width:"12rem",sortable:!0},{key:"owner",label:"归属",value:"Form"},{key:"status",label:"状态",render:t.jsx(h,{tone:"warning",children:"完善中"})},{key:"coverage",label:"覆盖能力",value:"拖拽、预览、上传进度和下载回退"}],expanded:"Upload 可以接入用户自己的上传逻辑，并展示上传进度。",actions:t.jsx(f,{size:"sm",variant:"ghost",children:"查看"})},{key:"code-block",selected:!0,cells:[{key:"name",label:"组件",value:"CodeBlock",width:"12rem",sortable:!0},{key:"owner",label:"归属",value:"Content"},{key:"status",label:"状态",render:t.jsx(h,{tone:"success",children:"稳定"})},{key:"coverage",label:"覆盖能力",value:"高亮、行号、复制、文件名和语言提示"}],expanded:"CodeBlock 是内容渲染和 AI 代码结果的基础展示组件。",actions:t.jsx(f,{size:"sm",variant:"ghost",children:"查看"})}],Re=[{key:"mobile",cells:[{key:"task",label:"任务",value:"移动端校验"},{key:"owner",label:"负责人",value:"Design"},{key:"progress",label:"进度",value:"82%",align:"end"}]},{key:"theme",cells:[{key:"task",label:"任务",value:"主题变量整理"},{key:"owner",label:"负责人",value:"Frontend"},{key:"progress",label:"进度",value:"96%",align:"end"}]}],Ve=[{key:"feedback-summary",cells:[{key:"task",label:"任务",value:"产品反馈摘要生成",width:"12rem",render:t.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:8},children:[t.jsx(h,{tone:"info",children:"AI"}),t.jsx("strong",{children:"产品反馈摘要生成"})]})},{key:"detail",label:"说明",value:"从近 128 条用户反馈中提取高频问题、风险提示和下一步可执行建议。",title:"从近 128 条用户反馈中提取高频问题、风险提示和下一步可执行建议。"},{key:"result",label:"结果",value:"已生成",render:t.jsx(h,{tone:"success",children:"已生成"}),align:"end"}],actions:t.jsx(f,{size:"sm",variant:"ghost",children:"复制"})},{key:"risk-check",cells:[{key:"task",label:"任务",value:"风险校验",width:"12rem",render:t.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:8},children:[t.jsx(h,{tone:"warning",children:"审核"}),t.jsx("strong",{children:"风险校验"})]})},{key:"detail",label:"说明",value:"检查生成内容里是否包含敏感信息、缺少来源引用或需要人工确认的结论。",title:"检查生成内容里是否包含敏感信息、缺少来源引用或需要人工确认的结论。"},{key:"result",label:"结果",value:"需要复核",render:t.jsx(h,{tone:"warning",children:"需要复核"}),align:"end"}],actions:t.jsx(f,{size:"sm",variant:"ghost",children:"查看"})}],$e=ze({id:"table",name:"Table",packageName:"willa/Table",description:"通过 items 渲染表格和产品数据列表，支持自定义单元格、排序、选择、分页、展开行和右侧操作区。",imports:[{name:"Table",from:"willa/Table"}],css:"willa/Table.css",demo:{name:"Table",component:y,props:{caption:"组件能力覆盖表",items:A}},code:`
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
  `,sections:[{title:"基础表格",code:`
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
      `,content:t.jsx(y,{caption:"组件能力覆盖表",items:A,defaultSort:{key:"name",direction:"asc"}})},{title:"选择与固定操作列",code:`
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
          stickyActions
          actionsWidth="5.6rem"
        />;
      `,content:t.jsx(y,{caption:"横向滚动时保留操作入口",items:A,selectionMode:"multiple",stickyActions:!0,actionsWidth:"5.6rem"})},{title:"分页与展开",code:`
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
      `,content:t.jsx(y,{caption:"分页后仍可展开查看详情",items:A,defaultExpandedKeys:["prompt-input"],pagination:{pageSize:2}})},{title:"自定义单元格",code:`
        const items = [
          {
            key: "feedback-summary",
            cells: [
              {
                key: "task",
                label: "任务",
                value: "产品反馈摘要生成",
                render: (
                  <span
                    style={{ display: "inline-flex", alignItems: "center", gap: 8 }}
                  >
                    <Badge tone="info">AI</Badge>
                    <strong>产品反馈摘要生成</strong>
                  </span>
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
      `,content:t.jsx(y,{caption:"自定义渲染和溢出提示",items:Ve,stickyActions:!0})},{title:"加载与空态",code:`
        <div style={{ display: "grid", gap: "1rem" }}>
          <Table items={[]} loading loadingText="正在同步组件状态..." />
          <Table items={[]} empty="没有匹配的组件" />
        </div>;
      `,content:t.jsxs("div",{style:{display:"grid",gap:"1rem"},children:[t.jsx(y,{items:[],loading:!0,loadingText:"正在同步组件状态..."}),t.jsx(y,{items:[],empty:"没有匹配的组件"})]})},{title:"紧凑尺寸",code:`
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
      `,content:t.jsx(y,{size:"sm",items:Re})}],props:[{name:"items",type:"Array<TableItem>",required:!0,description:"表格行数据，包含 cells、actions 和行点击能力。"},{name:"caption",type:"ReactNode",description:"表格说明，渲染为 caption。"},{name:"size",type:'"sm" | "md" | "lg"',description:"表格密度。"},{name:"stickyHeader",type:"boolean",description:"表头是否在滚动容器内吸顶。"},{name:"stickyActions",type:"boolean",description:"操作列是否固定在表格最右侧。"},{name:"actionsWidth",type:"number | string",description:"操作列宽度。"},{name:"loading",type:"boolean",description:"是否展示加载态。"},{name:"loadingText",type:"ReactNode",description:"加载态内容。"},{name:"empty",type:"ReactNode",description:"空态内容。"},{name:"actionsLabel",type:"ReactNode",description:"操作列表头内容。"},{name:"sort",type:"TableSortState",description:"受控排序状态。"},{name:"defaultSort",type:"TableSortState",description:"默认排序状态。"},{name:"onSortChange",type:"(sort: TableSortState) => void",description:"排序变化回调。"},{name:"selectionMode",type:'"none" | "single" | "multiple"',description:"行选择模式。"},{name:"selectedKeys",type:"Array<string | number>",description:"受控选中行 key。"},{name:"defaultSelectedKeys",type:"Array<string | number>",description:"默认选中行 key。"},{name:"onSelectionChange",type:"(keys: Array<string | number>) => void",description:"行选择变化回调。"},{name:"expandedKeys",type:"Array<string | number>",description:"受控展开行 key。"},{name:"defaultExpandedKeys",type:"Array<string | number>",description:"默认展开行 key。"},{name:"onExpandedChange",type:"(keys: Array<string | number>) => void",description:"展开行变化回调。"},{name:"pagination",type:"TablePagination",description:"分页配置，传入 pageSize 后启用分页。"},{name:"tableClassName",type:"string",description:"传给内部 table 元素的 className。"},{name:"className",type:"string",description:"传给外层容器的 className。"},{name:"TableItem.key",type:"string | number",required:!0,group:"TableItem",description:"行唯一标识。"},{name:"TableItem.cells",type:"Array<TableCell>",required:!0,group:"TableItem",description:"当前行的单元格配置。"},{name:"TableItem.actions",type:"ReactNode",group:"TableItem",description:"当前行右侧操作区。"},{name:"TableItem.expanded",type:"ReactNode",group:"TableItem",description:"当前行展开后的详情内容。"},{name:"TableItem.selected",type:"boolean",group:"TableItem",description:"是否以选中态展示当前行。"},{name:"TableItem.disabled",type:"boolean",group:"TableItem",description:"是否禁用当前行交互。"},{name:"TableItem.tone",type:'"neutral" | "info" | "success" | "warning" | "danger"',group:"TableItem",description:"行状态色。"},{name:"TableItem.onClick",type:"() => void",group:"TableItem",description:"点击或键盘触发行时的回调。"},{name:"TableCell.key",type:"string",group:"TableCell",description:"列标识，用于排序状态和稳定渲染。"},{name:"TableCell.label",type:"ReactNode",required:!0,group:"TableCell",description:"表头内容。"},{name:"TableCell.value",type:"ReactNode",group:"TableCell",description:"单元格内容。"},{name:"TableCell.render",type:"ReactNode",group:"TableCell",description:"自定义单元格内容，优先级高于 value。"},{name:"TableCell.sortValue",type:"string | number",group:"TableCell",description:"排序时使用的值。"},{name:"TableCell.sortable",type:"boolean",group:"TableCell",description:"当前列是否支持排序。"},{name:"TableCell.compare",type:"(a: TableCell, b: TableCell, aItem: TableItem, bItem: TableItem) => number",group:"TableCell",description:"自定义排序函数。"},{name:"TableCell.align",type:'"start" | "center" | "end"',group:"TableCell",description:"单元格和表头对齐方式。"},{name:"TableCell.width",type:"number | string",group:"TableCell",description:"列宽。"},{name:"TableCell.hidden",type:"boolean",group:"TableCell",description:"是否隐藏当前列。"},{name:"TableCell.ellipsis",type:"boolean",group:"TableCell",description:"是否截断长文本并通过自定义悬浮提示展示完整内容，默认开启。"},{name:"TableCell.title",type:"string",group:"TableCell",description:"单元格截断时的自定义提示文本。"}]});export{$e as default};
