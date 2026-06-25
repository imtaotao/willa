import{a$ as e,R as i,b3 as n,b1 as o,Y as u,u as y}from"./index-UtuKQqEd.js";import{F as s}from"./index-D1WRkAuL.js";/* empty css              */import{d as g}from"./defineDoc-CkmLSGT-.js";import"./index-B6LIFdn0.js";const c=[{id:"agents",name:"AGENTS.md",meta:"仓库通用约定",selected:!0,icon:e.jsx(i,{})},{id:"services",name:"services",type:"folder",children:[{id:"payments",name:"payments",type:"folder",children:[{id:"payments-agents",name:"AGENTS.md",muted:!0,meta:"因为存在覆盖文件，所以会被忽略",icon:e.jsx(i,{})},{id:"payments-override",name:"AGENTS.override.md",selected:!0,meta:"payments 服务规则",icon:e.jsx(i,{})},{id:"payments-readme",name:"README.md",icon:e.jsx(i,{})},{id:"payments-long-report",name:"quarterly-payment-reconciliation-report-2026-final.md",meta:"finance / reconciliation / archived",icon:e.jsx(i,{})}]},{id:"search",name:"search",type:"folder",children:[{id:"search-readme",name:"README.md",icon:e.jsx(i,{})}]}]}],T=[{id:"prompts",name:"prompts",type:"folder",children:[{id:"system-prompt",name:"system.md",meta:"系统提示词"},{id:"rewrite-prompt",name:"rewrite.md",meta:"改写链路"}]},{id:"datasets",name:"datasets",type:"folder",children:[{id:"faq-dataset",name:"faq.jsonl",meta:"1.2 MB"},{id:"eval-dataset",name:"eval.csv",meta:"320 KB"}]},{id:"agent-config",name:"agent.config.ts",meta:"运行配置",selected:!0}],l=[{id:"agents",language:"md",code:n(`
      # AGENTS.md

      通用约定会作用于整个仓库。

      - 使用 pnpm workspace 管理包
      - 组件样式由 auklet 自动推导
      - 内容组件放在 @willa-ui/content
    `)},{id:"payments-override",language:"md",code:n(`
      # AGENTS.override.md

      payments 服务使用独立规则。

      - 优先保证支付链路可回滚
      - 接口变更需要补充兼容说明
    `)},{id:"payments-readme",language:"md",code:n(`
      # payments

      支付服务包含订单创建、支付确认和退款任务。
    `)},{id:"payments-long-report",language:"md",code:n(`
      # quarterly-payment-reconciliation-report-2026-final.md

      用于演示文件名和 meta 被截断时的完整提示。
    `)},{id:"search-readme",language:"md",code:n(`
      # search

      搜索服务负责索引构建、召回和排序配置。
    `)}],f={display:"grid",flex:"1 1 18rem",minWidth:0},F=()=>{const[r,a]=o.useState("agents"),t=o.useMemo(()=>p(c,r),[r]),m=l.find(d=>d.id===r)??l[0];return e.jsxs(u,{align:"stretch",gap:"0.85rem",style:{width:"100%"},children:[e.jsx(s,{items:t,collapsible:!0,resizable:!0,width:"min(100%, 16rem)",onFileClick:d=>{typeof d.id=="string"&&a(d.id)}}),e.jsx("div",{style:f,children:e.jsx(y,{children:e.jsx("code",{className:`language-${m.language}--meta-ln`,children:m.code})})})]})},p=(r,a)=>r.map(t=>t.children?{...t,selected:t.id===a,children:p(t.children,a)}:{...t,selected:t.id===a}),S=g({id:"file-tree",name:"FileTree",packageName:"willa/FileTree",description:"用于展示仓库目录、配置文件和资料层级的文件树组件。",imports:[{name:"FileTree",from:"willa/FileTree"}],css:"willa/FileTree.css",demo:{name:"FileTreeCodePreview",component:F},code:`
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
      `,content:e.jsx(s,{items:c,collapsible:!0,defaultExpandedIds:["services"]})},{title:"AI 项目资料",code:`
        <FileTree items={aiProjectItems} size="sm" collapsible />;
      `,content:e.jsx(s,{items:T,size:"sm",collapsible:!0})}],props:[{name:"items",type:"Array<FileTreeItem>",required:!0,description:"文件树数据。"},{name:"size",type:'"sm" | "md"',defaultValue:'"md"',description:"列表密度。"},{name:"width",type:"CSSProperties['width']",defaultValue:"240",description:"文件树根节点宽度，支持百分比、min()、clamp() 等响应式 CSS 宽度值。"},{name:"resizable",type:"boolean",defaultValue:"false",description:"是否允许拖拽右侧边缘调整文件树宽度。"},{name:"collapsible",type:"boolean",defaultValue:"false",description:"是否允许点击目录展开或收起。"},{name:"defaultExpandedIds",type:"Array<string>",defaultValue:"所有可展开节点",description:"非受控模式下默认展开的节点 id。"},{name:"expandedIds",type:"Array<string>",description:"受控模式下展开的节点 id。"},{name:"onExpandedChange",type:"(expandedIds: Array<string>) => void",description:"展开节点变化时触发。"},{name:"onFileClick",type:"(item: FileTreeItem) => void",description:"点击文件节点时触发，适合联动右侧代码、详情或预览区域。"},{name:"className",type:"string",description:"外层 className。"},{name:"style",type:"CSSProperties",description:"透传给外层容器的样式；常规宽度控制优先使用 width。"},{name:"FileTreeItem.name",type:"ReactNode",required:!0,group:"FileTreeItem",description:"文件或目录名称。"},{name:"FileTreeItem.id",type:"string",group:"FileTreeItem",description:"节点唯一标识，用于受控展开、选中态和点击回调。"},{name:"FileTreeItem.type",type:'"file" | "folder"',group:"FileTreeItem",description:"节点类型，不传时会根据 children 自动推断。"},{name:"FileTreeItem.children",type:"Array<FileTreeItem>",group:"FileTreeItem",description:"子级节点。"},{name:"FileTreeItem.meta",type:"ReactNode",group:"FileTreeItem",description:"右侧补充信息；字符串类型内容在 hover 时会展示完整提示。"},{name:"FileTreeItem.description",type:"ReactNode",group:"FileTreeItem",description:"名称下方的说明。"},{name:"FileTreeItem.icon",type:"ReactNode",group:"FileTreeItem",description:"自定义节点图标。"},{name:"FileTreeItem.href",type:"string",group:"FileTreeItem",description:"文件节点链接地址；目录节点使用 children，不同时传 href。"},{name:"FileTreeItem.selected",type:"boolean",group:"FileTreeItem",description:"是否为当前选中节点。"},{name:"FileTreeItem.muted",type:"boolean",group:"FileTreeItem",description:"是否弱化展示，适合忽略、覆盖或不可用节点。"}]});export{S as default};
