import{ai as x,ag as e,a8 as W,h as O,j as J,A as Q,y,F as V,aj as E,m as Y}from"./index-BkrGUlgT.js";import{G as Z}from"./index-CD96Wn8H.js";import{d as ee}from"./defineDoc-CmhGL0pl.js";function R(n){const{items:t,size:a="md",width:r,resizable:l=!1,collapsible:c=!1,defaultExpandedIds:p,expandedIds:f,onExpandedChange:u,onFileClick:o,className:I,style:P,...h}=n,m=x.useRef(null),[T,v]=x.useState(),g=x.useMemo(()=>new Set(p??K(t)),[p,t]),[F,k]=x.useState(g),N=f?new Set(f):F,A=s=>{f||k(s),u==null||u([...s])},b=s=>{var j;const d=m.current,w=((j=d==null?void 0:d.parentElement)==null?void 0:j.getBoundingClientRect().width)??(d==null?void 0:d.getBoundingClientRect().width)??s;v(L(s,160,w))},C=s=>{var B;if(!l)return;s.preventDefault(),s.stopPropagation();const d=m.current;if(!d||typeof window>"u")return;const w=s.clientX,j=d.getBoundingClientRect().width,_=((B=d.parentElement)==null?void 0:B.getBoundingClientRect().width)??j,G=H=>{v(L(j+H.clientX-w,160,_))},z=()=>{window.removeEventListener("pointermove",G),window.removeEventListener("pointerup",z)};window.addEventListener("pointermove",G),window.addEventListener("pointerup",z)},S=s=>{var w;if(!l||s.key!=="ArrowLeft"&&s.key!=="ArrowRight")return;s.preventDefault();const d=T??((w=m.current)==null?void 0:w.getBoundingClientRect().width)??240;b(s.key==="ArrowLeft"?d-16:d+16)},i={...P,...r===void 0?null:{width:r},...T===void 0?null:{width:`${T}px`}};return e.jsxs("div",{...h,ref:m,style:i,className:W("willa-file-tree",`willa-file-tree--${a}`,l&&"willa-file-tree--resizable",I),children:[e.jsx("div",{className:"willa-file-tree-list",role:"tree",children:t.map((s,d)=>q({collapsible:c,expandedIds:N,item:s,onExpandedChange:A,onFileClick:o,depth:0,keyPath:String(s.id??d),expandedId:D(s,String(d))}))}),l?e.jsx("div",{"aria-label":"调整文件树宽度","aria-orientation":"vertical",className:"willa-file-tree-resizer",onKeyDown:S,onPointerDown:C,role:"separator",tabIndex:0}):null]})}const q=n=>{var S;const{collapsible:t,expandedIds:a,item:r,onExpandedChange:l,onFileClick:c,depth:p,keyPath:f,expandedId:u}=n,o=!!((S=r.children)!=null&&S.length),I=r.type??(o?"folder":"file"),h=I==="file"&&!!c,m=!t||!o||a.has(u),T=M(r.name),v=M(r.meta),g=()=>{if(!t||!o)return;const i=new Set(a);i.has(u)?i.delete(u):i.add(u),l(i)},F=()=>{h&&(c==null||c(r))},k=i=>{if(i.key==="ArrowDown"||i.key==="ArrowUp"){i.preventDefault(),te(i.currentTarget,i.key==="ArrowDown");return}if(i.key==="ArrowRight"){t&&o&&!m&&(i.preventDefault(),g());return}if(i.key==="ArrowLeft"){t&&o&&m&&(i.preventDefault(),g());return}if(!(i.key!=="Enter"&&i.key!==" ")){if(i.preventDefault(),t&&o&&!r.href){g();return}if(h){F();return}i.currentTarget instanceof HTMLAnchorElement&&i.currentTarget.click()}},N=e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"willa-file-tree-indent","aria-hidden":"true",children:Array.from({length:p}).map((i,s)=>e.jsx("span",{className:"willa-file-tree-guide"},s))}),e.jsx("span",{className:"willa-file-tree-toggle","aria-hidden":"true",children:o?m?e.jsx(O,{}):e.jsx(J,{}):null}),e.jsx("span",{className:"willa-file-tree-icon","aria-hidden":"true",children:r.icon??re(I,r.name)}),e.jsxs("span",{className:"willa-file-tree-content",children:[e.jsx("span",{className:"willa-file-tree-name",title:T,children:r.name}),r.description?e.jsx("span",{className:"willa-file-tree-description",children:r.description}):null]}),r.meta?e.jsx("span",{className:"willa-file-tree-meta",title:v,children:r.meta}):null]}),A=W("willa-file-tree-row",`willa-file-tree-row--${I}`,r.selected&&"willa-file-tree-row--selected",r.muted&&"willa-file-tree-row--muted",t&&o&&"willa-file-tree-row--collapsible",h&&"willa-file-tree-row--clickable"),b={onClick:t&&o?g:h?F:void 0},C={"aria-expanded":t&&o?m:void 0,"aria-level":p+1,role:"treeitem",tabIndex:0};return e.jsxs("div",{className:"willa-file-tree-item",children:[r.href?e.jsx("a",{...C,className:A,href:r.href,...ie(r.href),onKeyDown:k,onClick:h?F:void 0,children:N}):e.jsx("div",{...C,className:A,onKeyDown:k,...b,children:N}),o&&m?e.jsx("div",{className:"willa-file-tree-children",role:"group",children:r.children.map((i,s)=>q({collapsible:t,expandedIds:a,item:i,onExpandedChange:l,onFileClick:c,depth:p+1,keyPath:`${f}-${i.id??s}`,expandedId:D(i,`${f}-${s}`)}))}):null]},f)},te=(n,t)=>{var p;const a=n.closest('[role="tree"]');if(!a)return;const r=Array.from(a.querySelectorAll('[role="treeitem"]')),l=r.indexOf(n);if(l<0)return;const c=t?l+1:l-1;(p=r[c])==null||p.focus()},K=(n,t="")=>n.flatMap((a,r)=>{var c;const l=t?`${t}-${a.id??r}`:String(a.id??r);return(c=a.children)!=null&&c.length?[D(a,l),...K(a.children,l)]:[]}),D=(n,t)=>n.id??t,M=n=>typeof n=="string"?n:void 0,L=(n,t,a)=>Math.min(Math.max(n,t),Math.max(t,a)),re=(n,t)=>n==="folder"?e.jsx(Q,{}):typeof t=="string"&&t.toLowerCase().endsWith(".md")?e.jsx(y,{}):e.jsx(V,{}),ie=n=>/^https?:\/\//.test(n)?{target:"_blank",rel:"noreferrer"}:{},U=[{id:"agents",name:"AGENTS.md",meta:"仓库通用约定",selected:!0,icon:e.jsx(y,{})},{id:"services",name:"services",type:"folder",children:[{id:"payments",name:"payments",type:"folder",children:[{id:"payments-agents",name:"AGENTS.md",muted:!0,meta:"因为存在覆盖文件，所以会被忽略",icon:e.jsx(y,{})},{id:"payments-override",name:"AGENTS.override.md",selected:!0,meta:"payments 服务规则",icon:e.jsx(y,{})},{id:"payments-readme",name:"README.md",icon:e.jsx(y,{})},{id:"payments-long-report",name:"quarterly-payment-reconciliation-report-2026-final.md",meta:"finance / reconciliation / archived",icon:e.jsx(y,{})}]},{id:"search",name:"search",type:"folder",children:[{id:"search-readme",name:"README.md",icon:e.jsx(y,{})}]}]}],ne=[{id:"prompts",name:"prompts",type:"folder",children:[{id:"system-prompt",name:"system.md",meta:"系统提示词"},{id:"rewrite-prompt",name:"rewrite.md",meta:"改写链路"}]},{id:"datasets",name:"datasets",type:"folder",children:[{id:"faq-dataset",name:"faq.jsonl",meta:"1.2 MB"},{id:"eval-dataset",name:"eval.csv",meta:"320 KB"}]},{id:"agent-config",name:"agent.config.ts",meta:"运行配置",selected:!0}],$=[{id:"agents",language:"md",code:E(`
      # AGENTS.md

      通用约定会作用于整个仓库。

      - 使用 pnpm workspace 管理包
      - 组件样式由 auklet 自动推导
      - 内容组件放在 @willa-ui/content
    `)},{id:"payments-override",language:"md",code:E(`
      # AGENTS.override.md

      payments 服务使用独立规则。

      - 优先保证支付链路可回滚
      - 接口变更需要补充兼容说明
    `)},{id:"payments-readme",language:"md",code:E(`
      # payments

      支付服务包含订单创建、支付确认和退款任务。
    `)},{id:"payments-long-report",language:"md",code:E(`
      # quarterly-payment-reconciliation-report-2026-final.md

      用于演示文件名和 meta 被截断时的完整提示。
    `)},{id:"search-readme",language:"md",code:E(`
      # search

      搜索服务负责索引构建、召回和排序配置。
    `)}],ae={display:"grid",flex:"1 1 18rem",minWidth:0},se=()=>{const[n,t]=x.useState("agents"),a=x.useMemo(()=>X(U,n),[n]),r=$.find(l=>l.id===n)??$[0];return e.jsxs(Z,{align:"stretch",gap:"0.85rem",style:{width:"100%"},children:[e.jsx(R,{items:a,collapsible:!0,resizable:!0,width:"min(100%, 16rem)",onFileClick:l=>{typeof l.id=="string"&&t(l.id)}}),e.jsx("div",{style:ae,children:e.jsx(Y,{children:e.jsx("code",{className:`language-${r.language}--meta-ln`,children:r.code})})})]})},X=(n,t)=>n.map(a=>a.children?{...a,selected:a.id===t,children:X(a.children,t)}:{...a,selected:a.id===t}),ce=ee({id:"file-tree",name:"FileTree",packageName:"willa/FileTree",description:"用于展示仓库目录、配置文件和资料层级的文件树组件。",imports:[{name:"FileTree",from:"willa/FileTree"}],css:"willa/FileTree.css",demo:{name:"FileTreeCodePreview",component:se},code:`
    import { useMemo, useState } from "react";
    import { CodeBlock } from "willa/CodeBlock";
    import { FileTree } from "willa/FileTree";
    import { Group } from "willa/Group";
    import "willa/CodeBlock.css";
    import "willa/FileTree.css";
    import "willa/Group.css";

    const items = [
      {
        id: "agents",
        name: "AGENTS.md",
        meta: "仓库通用约定",
        selected: true,
      },
      {
        id: "services",
        name: "services",
        type: "folder",
        children: [
          {
            name: "payments",
            type: "folder",
            children: [
              { id: "payments-agents", name: "AGENTS.md", muted: true },
              { id: "payments-override", name: "AGENTS.override.md" },
              { id: "payments-readme", name: "README.md" },
            ],
          },
        ],
      },
    ];

    const files = {
      agents: "# AGENTS.md\\n\\n通用约定会作用于整个仓库。",
      "payments-override": "# AGENTS.override.md\\n\\npayments 服务使用独立规则。",
    };

    function Example() {
      const [currentId, setCurrentId] = useState("agents");
      const selectedItems = useMemo(
        () => markSelectedFile(items, currentId),
        [currentId],
      );

      return (
        <Group align="stretch" gap="0.85rem">
          <FileTree
            items={selectedItems}
            collapsible
            resizable
            width="min(100%, 16rem)"
            onFileClick={(item) => {
              if (item.id) setCurrentId(item.id);
            }}
          />
          <CodeBlock>
            <code className="language-md--meta-ln">{files[currentId]}</code>
          </CodeBlock>
        </Group>
      );
    }
  `,sections:[{title:"默认收起",code:`
        <FileTree
          items={repositoryItems}
          collapsible
          defaultExpandedIds={["services"]}
        />;
      `,content:e.jsx(R,{items:U,collapsible:!0,defaultExpandedIds:["services"]})},{title:"AI 项目资料",code:`
        <FileTree items={aiProjectItems} size="sm" collapsible />;
      `,content:e.jsx(R,{items:ne,size:"sm",collapsible:!0})}],props:[{name:"items",type:"Array<FileTreeItem>",required:!0,description:"文件树数据。"},{name:"size",type:'"sm" | "md"',description:"列表密度。"},{name:"width",type:"CSSProperties['width']",description:"文件树根节点宽度，支持百分比、min()、clamp() 等响应式 CSS 宽度值。"},{name:"resizable",type:"boolean",description:"是否允许拖拽右侧边缘调整文件树宽度。"},{name:"collapsible",type:"boolean",description:"是否允许点击目录展开或收起。"},{name:"defaultExpandedIds",type:"Array<string>",description:"非受控模式下默认展开的节点 id。"},{name:"expandedIds",type:"Array<string>",description:"受控模式下展开的节点 id。"},{name:"onExpandedChange",type:"(expandedIds: Array<string>) => void",description:"展开节点变化时触发。"},{name:"onFileClick",type:"(item: FileTreeItem) => void",description:"点击文件节点时触发，适合联动右侧代码、详情或预览区域。"},{name:"className",type:"string",description:"外层 className。"},{name:"style",type:"CSSProperties",description:"透传给外层容器的样式；常规宽度控制优先使用 width。"},{name:"FileTreeItem.name",type:"ReactNode",required:!0,group:"FileTreeItem",description:"文件或目录名称。"},{name:"FileTreeItem.id",type:"string",group:"FileTreeItem",description:"节点唯一标识，用于受控展开、选中态和点击回调。"},{name:"FileTreeItem.type",type:'"file" | "folder"',group:"FileTreeItem",description:"节点类型，不传时会根据 children 自动推断。"},{name:"FileTreeItem.children",type:"Array<FileTreeItem>",group:"FileTreeItem",description:"子级节点。"},{name:"FileTreeItem.meta",type:"ReactNode",group:"FileTreeItem",description:"右侧补充信息；字符串类型内容在 hover 时会展示完整提示。"},{name:"FileTreeItem.description",type:"ReactNode",group:"FileTreeItem",description:"名称下方的说明。"},{name:"FileTreeItem.icon",type:"ReactNode",group:"FileTreeItem",description:"自定义节点图标。"},{name:"FileTreeItem.href",type:"string",group:"FileTreeItem",description:"文件节点链接地址；目录节点使用 children，不同时传 href。"},{name:"FileTreeItem.selected",type:"boolean",group:"FileTreeItem",description:"是否为当前选中节点。"},{name:"FileTreeItem.muted",type:"boolean",group:"FileTreeItem",description:"是否弱化展示，适合忽略、覆盖或不可用节点。"}]});export{ce as default};
