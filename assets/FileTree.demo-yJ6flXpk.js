import{aA as p,ay as s,am as R,A as ee,H as y,G as te,aB as w,L as re,o as ne}from"./index-vVHMmPWZ.js";import{T as ie}from"./index-BDT5FI18.js";/* empty css              */import{d as se}from"./defineDoc-CK669M_K.js";function E(n){const{items:t,size:r="md",width:e,resizable:a=!1,collapsible:l=!1,defaultExpandedIds:c,expandedIds:o,onExpandedChange:u,onFileClick:m,className:F,style:I,...T}=n,g=p.useRef(null),[v,S]=p.useState(),D=p.useMemo(()=>new Set(c??M(t)),[c,t]),[L,W]=p.useState(D),q=o?new Set(o):L,K=p.useMemo(()=>G(t,m),[t,m]),V=p.useMemo(()=>B(t),[t]),X=p.useMemo(()=>z(t),[t]),U=d=>{o||W(d),u==null||u([...d])},_=d=>{U(new Set(d.map(String)))},H=d=>{var h;const i=g.current,f=((h=i==null?void 0:i.parentElement)==null?void 0:h.getBoundingClientRect().width)??(i==null?void 0:i.getBoundingClientRect().width)??d;S(k(d,160,f))},O=d=>{var N;if(!a)return;d.preventDefault(),d.stopPropagation();const i=g.current;if(!i||typeof window>"u")return;const f=d.clientX,h=i.getBoundingClientRect().width,Y=((N=i.parentElement)==null?void 0:N.getBoundingClientRect().width)??h,j=Z=>{S(k(h+Z.clientX-f,160,Y))},A=()=>{window.removeEventListener("pointermove",j),window.removeEventListener("pointerup",A)};window.addEventListener("pointermove",j),window.addEventListener("pointerup",A)},J=d=>{var f;if(!a||d.key!=="ArrowLeft"&&d.key!=="ArrowRight")return;d.preventDefault();const i=v??((f=g.current)==null?void 0:f.getBoundingClientRect().width)??240;H(d.key==="ArrowLeft"?i-16:i+16)},Q={...I,...e===void 0?null:{width:e},...v===void 0?null:{width:`${v}px`}};return s.jsxs("div",{...T,ref:g,style:Q,className:R("willa-file-tree",`willa-file-tree--${r}`,a&&"willa-file-tree--resizable",F),children:[s.jsx(ie,{className:"willa-file-tree-list",items:K,size:r,showLine:!0,selectable:!1,expandOnClick:l,defaultExpandAll:!l,expandedKeys:l?[...q]:void 0,selectedKeys:X,onExpandedChange:l?_:void 0,onItemClick:d=>{var h;const i=V.get(String(d.key)),f=(i==null?void 0:i.type)??((h=i==null?void 0:i.children)!=null&&h.length?"folder":"file");i&&f==="file"&&(m==null||m(i))}}),a?s.jsx("div",{"aria-label":"调整文件树宽度","aria-orientation":"vertical",className:"willa-file-tree-resizer",onKeyDown:J,onPointerDown:O,role:"separator",tabIndex:0}):null]})}const M=(n,t="")=>n.flatMap((r,e)=>{var l;const a=t?`${t}-${r.id??e}`:String(r.id??e);return(l=r.children)!=null&&l.length?[x(r,a),...M(r.children,a)]:[]}),x=(n,t)=>n.id??t,G=(n,t,r="")=>n.map((e,a)=>{var I,T;const l=r?`${r}-${e.id??a}`:String(e.id??a),c=!!((I=e.children)!=null&&I.length),o=e.type??(c?"folder":"file"),u=b(e.name),m=b(e.meta),F=e.href?s.jsx("a",{className:"willa-file-tree-link",href:e.href,title:u,...de(e.href),onClick:g=>{g.stopPropagation(),t==null||t(e)},children:e.name}):s.jsx("span",{title:u,children:e.name});return{key:x(e,l),title:F,description:e.description,meta:e.meta?s.jsx("span",{title:m,children:e.meta}):void 0,icon:e.icon??ae(o,e.name),selected:e.selected,muted:e.muted,selectable:!1,className:R("willa-file-tree-node",`willa-file-tree-node--${o}`,o==="file"&&t&&"willa-file-tree-node--clickable"),children:(T=e.children)!=null&&T.length?G(e.children,t,l):void 0}}),B=(n,t="")=>{const r=new Map;return n.forEach((e,a)=>{var o;const l=t?`${t}-${e.id??a}`:String(e.id??a),c=x(e,l);r.set(c,e),(o=e.children)!=null&&o.length&&B(e.children,l).forEach((u,m)=>r.set(m,u))}),r},z=(n,t="")=>n.flatMap((r,e)=>{var o;const a=t?`${t}-${r.id??e}`:String(r.id??e),l=x(r,a),c=(o=r.children)!=null&&o.length?z(r.children,a):[];return r.selected?[l,...c]:c}),b=n=>typeof n=="string"?n:void 0,k=(n,t,r)=>Math.min(Math.max(n,t),Math.max(t,r)),ae=(n,t)=>n==="folder"?s.jsx(ee,{}):typeof t=="string"&&t.toLowerCase().endsWith(".md")?s.jsx(y,{}):s.jsx(te,{}),de=n=>/^https?:\/\//.test(n)?{target:"_blank",rel:"noreferrer"}:{},P=[{id:"agents",name:"AGENTS.md",meta:"仓库通用约定",selected:!0,icon:s.jsx(y,{})},{id:"services",name:"services",type:"folder",children:[{id:"payments",name:"payments",type:"folder",children:[{id:"payments-agents",name:"AGENTS.md",muted:!0,meta:"因为存在覆盖文件，所以会被忽略",icon:s.jsx(y,{})},{id:"payments-override",name:"AGENTS.override.md",selected:!0,meta:"payments 服务规则",icon:s.jsx(y,{})},{id:"payments-readme",name:"README.md",icon:s.jsx(y,{})},{id:"payments-long-report",name:"quarterly-payment-reconciliation-report-2026-final.md",meta:"finance / reconciliation / archived",icon:s.jsx(y,{})}]},{id:"search",name:"search",type:"folder",children:[{id:"search-readme",name:"README.md",icon:s.jsx(y,{})}]}]}],le=[{id:"prompts",name:"prompts",type:"folder",children:[{id:"system-prompt",name:"system.md",meta:"系统提示词"},{id:"rewrite-prompt",name:"rewrite.md",meta:"改写链路"}]},{id:"datasets",name:"datasets",type:"folder",children:[{id:"faq-dataset",name:"faq.jsonl",meta:"1.2 MB"},{id:"eval-dataset",name:"eval.csv",meta:"320 KB"}]},{id:"agent-config",name:"agent.config.ts",meta:"运行配置",selected:!0}],C=[{id:"agents",language:"md",code:w(`
      # AGENTS.md

      通用约定会作用于整个仓库。

      - 使用 pnpm workspace 管理包
      - 组件样式由 auklet 自动推导
      - 内容组件放在 @willa-ui/content
    `)},{id:"payments-override",language:"md",code:w(`
      # AGENTS.override.md

      payments 服务使用独立规则。

      - 优先保证支付链路可回滚
      - 接口变更需要补充兼容说明
    `)},{id:"payments-readme",language:"md",code:w(`
      # payments

      支付服务包含订单创建、支付确认和退款任务。
    `)},{id:"payments-long-report",language:"md",code:w(`
      # quarterly-payment-reconciliation-report-2026-final.md

      用于演示文件名和 meta 被截断时的完整提示。
    `)},{id:"search-readme",language:"md",code:w(`
      # search

      搜索服务负责索引构建、召回和排序配置。
    `)}],oe={display:"grid",flex:"1 1 18rem",minWidth:0},ce=()=>{const[n,t]=p.useState("agents"),r=p.useMemo(()=>$(P,n),[n]),e=C.find(a=>a.id===n)??C[0];return s.jsxs(re,{align:"stretch",gap:"0.85rem",style:{width:"100%"},children:[s.jsx(E,{items:r,collapsible:!0,resizable:!0,width:"min(100%, 16rem)",onFileClick:a=>{typeof a.id=="string"&&t(a.id)}}),s.jsx("div",{style:oe,children:s.jsx(ne,{children:s.jsx("code",{className:`language-${e.language}--meta-ln`,children:e.code})})})]})},$=(n,t)=>n.map(r=>r.children?{...r,selected:r.id===t,children:$(r.children,t)}:{...r,selected:r.id===t}),he=se({id:"file-tree",name:"FileTree",packageName:"willa/FileTree",description:"用于展示仓库目录、配置文件和资料层级的文件树组件。",imports:[{name:"FileTree",from:"willa/FileTree"}],css:"willa/FileTree.css",demo:{name:"FileTreeCodePreview",component:ce},code:`
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
      `,content:s.jsx(E,{items:P,collapsible:!0,defaultExpandedIds:["services"]})},{title:"AI 项目资料",code:`
        <FileTree items={aiProjectItems} size="sm" collapsible />;
      `,content:s.jsx(E,{items:le,size:"sm",collapsible:!0})}],props:[{name:"items",type:"Array<FileTreeItem>",required:!0,description:"文件树数据。"},{name:"size",type:'"sm" | "md"',defaultValue:'"md"',description:"列表密度。"},{name:"width",type:"CSSProperties['width']",defaultValue:"240",description:"文件树根节点宽度，支持百分比、min()、clamp() 等响应式 CSS 宽度值。"},{name:"resizable",type:"boolean",defaultValue:"false",description:"是否允许拖拽右侧边缘调整文件树宽度。"},{name:"collapsible",type:"boolean",defaultValue:"false",description:"是否允许点击目录展开或收起。"},{name:"defaultExpandedIds",type:"Array<string>",defaultValue:"所有可展开节点",description:"非受控模式下默认展开的节点 id。"},{name:"expandedIds",type:"Array<string>",description:"受控模式下展开的节点 id。"},{name:"onExpandedChange",type:"(expandedIds: Array<string>) => void",description:"展开节点变化时触发。"},{name:"onFileClick",type:"(item: FileTreeItem) => void",description:"点击文件节点时触发，适合联动右侧代码、详情或预览区域。"},{name:"className",type:"string",description:"外层 className。"},{name:"style",type:"CSSProperties",description:"透传给外层容器的样式；常规宽度控制优先使用 width。"},{name:"FileTreeItem.name",type:"ReactNode",required:!0,group:"FileTreeItem",description:"文件或目录名称。"},{name:"FileTreeItem.id",type:"string",group:"FileTreeItem",description:"节点唯一标识，用于受控展开、选中态和点击回调。"},{name:"FileTreeItem.type",type:'"file" | "folder"',group:"FileTreeItem",description:"节点类型，不传时会根据 children 自动推断。"},{name:"FileTreeItem.children",type:"Array<FileTreeItem>",group:"FileTreeItem",description:"子级节点。"},{name:"FileTreeItem.meta",type:"ReactNode",group:"FileTreeItem",description:"右侧补充信息；字符串类型内容在 hover 时会展示完整提示。"},{name:"FileTreeItem.description",type:"ReactNode",group:"FileTreeItem",description:"名称下方的说明。"},{name:"FileTreeItem.icon",type:"ReactNode",group:"FileTreeItem",description:"自定义节点图标。"},{name:"FileTreeItem.href",type:"string",group:"FileTreeItem",description:"文件节点链接地址；目录节点使用 children，不同时传 href。"},{name:"FileTreeItem.selected",type:"boolean",group:"FileTreeItem",description:"是否为当前选中节点。"},{name:"FileTreeItem.muted",type:"boolean",group:"FileTreeItem",description:"是否弱化展示，适合忽略、覆盖或不可用节点。"}]});export{he as default};
