import{b0 as c,a_ as s,m as Me,aL as $,aJ as Ne}from"./index-_gykcPGm.js";import{T as Re}from"./index-1C4Hs8kL.js";import{a as Ae}from"./floatingPanelParts-CXcTzFfN.js";import{u as De,a as Ke,b as Le,C as Oe,h as ze}from"./useComboboxState-FqwWX9yA.js";import{d as Be}from"./defineDoc-CJOxaJUt.js";import"./useFloatingPanel-DoFbsJdM.js";const P=".willa-tree-select-tree .willa-tree-node",o=c.forwardRef(function(a,l){const{items:n,mode:t="single",size:d="md",variant:g="outline",width:w,invalid:u=!1,searchable:M=!0,clearable:H=!1,placeholder:Q="请选择",searchPlaceholder:W="搜索节点",emptyText:J="暂无节点",leafOnly:S=!1,showPath:N=!1,name:q,value:G,defaultValue:U,defaultExpandedValues:X=[],renderValue:x,onValueChange:Y,onExpandedChange:b,className:Z,disabled:v,style:ee,id:le,onBlur:te,onClick:T,onKeyDown:ae,...E}=a,[I,se]=c.useState(X),re=c.useMemo(()=>He(n),[n]),R=c.useMemo(()=>F(n,{leafOnly:S}),[n,S]),A=c.useMemo(()=>We(n),[n]),ne=c.useMemo(()=>{if(x)return x;if(N)return r=>Je(r,A,t)},[t,A,x,N]),de=c.useMemo(()=>({expandedValues:I,items:n}),[I,n]),{clearValue:oe,commitItem:ie,displayValue:ce,hasValue:D,hiddenValue:ue,buttonId:pe,closePanel:K,listRef:me,open:y,panelId:j,panelRef:L,position:he,query:k,rootRef:we,scrollable:fe,searchRef:ge,setOpen:O,setQuery:ye,triggerRef:V,handleTriggerKeyDown:ke,selectedValues:Ve}=De({defaultValue:U,items:$e(n),mode:t,onValueChange:Y,placeholder:Q,renderValue:ne,value:G,contentVersion:de,fallbackHeight:340,id:le,minWidth:300,searchable:M}),Se=k.trim()!=="",C=c.useMemo(()=>Fe(R,k),[R,k]),xe=c.useMemo(()=>_e(C),[C]),be=Se?xe:I,ve=Qe({width:w,style:ee}),z=u||E["aria-invalid"]===!0||E["aria-invalid"]==="true",B=H&&D&&!v,Te=r=>{V.current=r,Ne(l,r)},Ee=r=>{se(r),b==null||b(r)},Ie=r=>{var p;if(r.key==="Escape"){K(),(p=V.current)==null||p.focus();return}r.target instanceof HTMLElement&&r.target.closest(P)!==null||ze(r,{panel:L.current,selector:P,onClose:K,trigger:V.current})},je=r=>{const f=r.map(p=>String(p));Ee(f)},Ce=(r,f)=>{const p=re.get(String(f.key));if(!p)return;ie(p)&&t==="single"&&O(!1)},Pe=s.jsx(Ke,{open:y,children:s.jsxs(Ae,{panelRef:L,id:j,className:"willa-tree-select-panel",role:"presentation",position:he,onKeyDown:Ie,children:[M?s.jsx(Le,{className:"willa-tree-select-search",inputRef:ge,value:k,placeholder:W,onChange:r=>ye(r.currentTarget.value)}):null,s.jsx("div",{ref:me,className:$("willa-tree-select-list",fe&&"willa-tree-select-list--scrollable"),children:s.jsx(Re,{className:"willa-tree-select-tree",items:C,size:d,selectedKeys:Ve,expandedKeys:be,selectionMode:t,selectable:!0,expandOnClick:S,emptyText:J,renderExtra:({selected:r})=>r?s.jsx(Me,{"aria-hidden":"true"}):null,onExpandedChange:je,onSelectedChange:Ce})})]})});return s.jsx(Oe,{rootRef:we,className:$("willa-tree-select",`willa-tree-select--${d}`,`willa-tree-select--${g}`,y&&"willa-tree-select--open",z&&"willa-tree-select--invalid",B&&"willa-tree-select--has-clear",v&&"willa-tree-select--disabled",Z),style:ve,triggerProps:E,buttonRef:Te,buttonId:pe,panelId:j,popupRole:"tree",expanded:y,hasValue:D,invalid:z,disabled:v,controls:y?j:void 0,displayValue:ce,placeholderClassName:"willa-tree-select-value--placeholder",triggerClassName:"willa-tree-select-trigger",valueClassName:"willa-tree-select-value",iconClassName:"willa-tree-select-icon",hasClear:B,clearClassName:"willa-tree-select-clear",clearLabel:"清空选择",triggerRef:V,hiddenName:q,hiddenValue:ue,onClear:oe,onTriggerBlur:te,onTriggerClick:r=>{T==null||T(r),r.defaultPrevented||O(f=>!f)},onTriggerKeyDown:r=>ke(r,{selector:P,onKeyDown:ae}),children:Pe})});o.displayName="TreeSelect";const $e=e=>{const a=[],l=n=>{n.forEach(t=>{a.push(t),t.children&&l(t.children)})};return l(e),a},F=(e,a)=>e.map(l=>{var t,d;const n=!!((t=l.children)!=null&&t.length);return{key:l.value,title:l.label,description:l.description,disabled:l.disabled,selectable:a.leafOnly&&n?!1:void 0,children:(d=l.children)!=null&&d.length?F(l.children,a):void 0}}),Fe=(e,a)=>{const l=a.trim().toLowerCase();return l?(t=>t.flatMap(d=>{var u;const g=h(d.title).toLowerCase().includes(l)||h(d.description).toLowerCase().includes(l),w=(u=d.children)!=null&&u.length?_(d.children,l):!1;return!g&&!w?[]:[d]}))(e):e},_=(e,a)=>e.some(l=>h(l.title).toLowerCase().includes(a)||h(l.description).toLowerCase().includes(a)||_(l.children??[],a)),_e=e=>{const a=[],l=n=>{n.forEach(t=>{var d;(d=t.children)!=null&&d.length&&(a.push(String(t.key)),l(t.children))})};return l(e),a},He=e=>{const a=new Map,l=n=>{n.forEach(t=>{var d;a.set(t.value,t),(d=t.children)!=null&&d.length&&l(t.children)})};return l(e),a},h=e=>e==null||typeof e=="boolean"?"":typeof e=="string"||typeof e=="number"?String(e):Array.isArray(e)?e.map(h).join(" "):"",Qe=({width:e,style:a})=>e===void 0?a:{...a,width:e},We=e=>{const a=new Map,l=(n,t)=>{n.forEach(d=>{var u;const g=h(d.label)||d.value,w=[...t,g];a.set(d.value,w.join(" / ")),(u=d.children)!=null&&u.length&&l(d.children,w)})};return l(e,[]),a},Je=(e,a,l)=>{if(e.length===0)return"";const n=e.map(t=>a.get(t.value)??h(t.label)??t.value);return l==="single"?n[0]??"":n.join("，")},i=[{value:"workspace",label:"工作区",description:"团队共享资源",children:[{value:"workspace-docs",label:"产品文档",description:"PRD、设计稿和上线记录"},{value:"workspace-data",label:"数据报表",description:"用户反馈、埋点和业务指标"}]},{value:"knowledge",label:"知识库",description:"AI 可检索资料",children:[{value:"knowledge-component",label:"组件规范",description:"Willa 组件设计和 API 约定"},{value:"knowledge-style",label:"样式规则",description:"主题变量、CSS 和移动端规则"}]}],qe=[{value:"docs",label:"文档中心",description:"面向产品、设计和研发的内容入口",children:[{value:"docs-guides",label:"指南",description:"安装、迁移和接入说明",children:[{value:"docs-guides-install",label:"安装与使用",description:"项目接入和运行时说明"},{value:"docs-guides-migration",label:"迁移清单",description:"替换旧组件时的检查项"}]},{value:"docs-releases",label:"发布记录",description:"版本、变更和发布时间线"}]},{value:"assets",label:"资源库",description:"可复用的素材与附件",children:[{value:"assets-images",label:"图片",description:"截图、插图和封面"},{value:"assets-files",label:"文件",description:"PDF、CSV 和文档附件"}]}],Ge={display:"grid",gap:"0.8rem",width:"min(100%, 30rem)"},m={display:"grid",justifyItems:"center",gap:"0.9rem"},Ue={display:"grid",gap:"0.8rem",width:"min(100%, 30rem)"},sl=Be({id:"tree-select",name:"TreeSelect",category:"form",packageName:"willa/TreeSelect",description:"用于从层级数据中选择目录、组织、分类或知识库节点；需要级联式路径展示时可配合 leafOnly 和 showPath。",imports:[{name:"TreeSelect",from:"willa/TreeSelect"}],css:"willa/TreeSelect.css",demo:{name:"TreeSelect",component:o,props:{items:i,defaultExpandedValues:["workspace","knowledge"],defaultValue:"knowledge-component",width:"min(100%, 30rem)"}},code:`
    import { TreeSelect, type TreeSelectItem } from "willa/TreeSelect";
    import "willa/TreeSelect.css";

    const items: Array<TreeSelectItem> = [
      {
        value: "knowledge",
        label: "知识库",
        children: [
          { value: "component", label: "组件规范" },
          { value: "style", label: "样式规则" },
        ],
      },
    ];

    <TreeSelect
      items={items}
      defaultExpandedValues={["knowledge"]}
      defaultValue="component"
    />;
  `,sections:[{title:"基础示例",code:`
        <TreeSelect
          items={treeItems}
          defaultExpandedValues={["workspace", "knowledge"]}
          defaultValue="knowledge-component"
          width="min(100%, 30rem)"
        />;
      `,content:s.jsx("div",{style:m,children:s.jsx(o,{items:i,defaultExpandedValues:["workspace","knowledge"],defaultValue:"knowledge-component",width:"min(100%, 30rem)"})})},{title:"三层级缩进",code:`
        <TreeSelect
          items={treeItemsDeep}
          showPath
          defaultExpandedValues={["docs", "docs-guides", "assets"]}
          defaultValue="docs-guides-install"
          width="min(100%, 30rem)"
        />;
      `,content:s.jsx("div",{style:m,children:s.jsx(o,{items:qe,showPath:!0,defaultExpandedValues:["docs","docs-guides","assets"],defaultValue:"docs-guides-install",width:"min(100%, 30rem)"})})},{title:"多选目录",code:`
        <TreeSelect
          clearable
          mode="multiple"
          items={treeItems}
          defaultExpandedValues={["workspace", "knowledge"]}
          defaultValue={["workspace-docs", "knowledge-style"]}
          width="min(100%, 30rem)"
        />;
      `,content:s.jsx("div",{style:m,children:s.jsx(o,{clearable:!0,mode:"multiple",items:i,defaultExpandedValues:["workspace","knowledge"],defaultValue:["workspace-docs","knowledge-style"],width:"min(100%, 30rem)"})})},{title:"尺寸与外观",code:`
        <div style={treeSelectPreviewStyle}>
          <TreeSelect
            size="sm"
            items={treeItems}
            defaultExpandedValues={["workspace", "knowledge"]}
            defaultValue="workspace-docs"
            width="100%"
          />
          <TreeSelect
            items={treeItems}
            defaultExpandedValues={["workspace", "knowledge"]}
            defaultValue="knowledge-component"
            width="100%"
          />
          <TreeSelect
            size="lg"
            variant="soft"
            items={treeItems}
            defaultExpandedValues={["workspace", "knowledge"]}
            defaultValue="workspace-data"
            width="100%"
          />
        </div>;
      `,content:s.jsx("div",{style:m,children:s.jsxs("div",{style:Ge,children:[s.jsx(o,{size:"sm",items:i,defaultExpandedValues:["workspace","knowledge"],defaultValue:"workspace-docs",width:"100%"}),s.jsx(o,{items:i,defaultExpandedValues:["workspace","knowledge"],defaultValue:"knowledge-component",width:"100%"}),s.jsx(o,{size:"lg",variant:"soft",items:i,defaultExpandedValues:["workspace","knowledge"],defaultValue:"workspace-data",width:"100%"})]})})},{title:"级联分类",code:`
        <TreeSelect
          items={treeItems}
          leafOnly
          showPath
          defaultExpandedValues={["workspace", "knowledge"]}
          defaultValue="knowledge-component"
          width="min(100%, 30rem)"
        />;
      `,content:s.jsx("div",{style:m,children:s.jsx(o,{items:i,leafOnly:!0,showPath:!0,defaultExpandedValues:["workspace","knowledge"],defaultValue:"knowledge-component",width:"min(100%, 30rem)"})})},{title:"自定义值展示",code:`
        <TreeSelect
          mode="multiple"
          items={treeItems}
          defaultExpandedValues={["workspace", "knowledge"]}
          defaultValue={["workspace-docs", "knowledge-component"]}
          renderValue={(items) => \`已选择 \${items.length} 个节点\`}
          width="min(100%, 30rem)"
        />;
      `,content:s.jsx("div",{style:m,children:s.jsx(o,{mode:"multiple",items:i,defaultExpandedValues:["workspace","knowledge"],defaultValue:["workspace-docs","knowledge-component"],renderValue:e=>`已选择 ${e.length} 个节点`,width:"min(100%, 30rem)"})})},{title:"状态",code:`
        <div style={stackStyle}>
          <TreeSelect items={treeItems} placeholder="选择资料范围" width="100%" />
          <TreeSelect
            invalid
            items={treeItems}
            placeholder="请选择必填项"
            width="100%"
          />
          <TreeSelect disabled items={treeItems} defaultValue="workspace" width="100%" />
        </div>;
      `,content:s.jsx("div",{style:m,children:s.jsxs("div",{style:Ue,children:[s.jsx(o,{items:i,placeholder:"选择资料范围",width:"100%"}),s.jsx(o,{invalid:!0,items:i,placeholder:"请选择必填项",width:"100%"}),s.jsx(o,{disabled:!0,items:i,defaultValue:"workspace",width:"100%"})]})})}],props:[{name:"items",type:"Array<TreeSelectItem>",required:!0,description:"树形节点列表，节点可包含 children。"},{name:"mode",type:'"single" | "multiple"',defaultValue:'"single"',description:"选择模式，默认单选。"},{name:"size",type:'"sm" | "md" | "lg"',defaultValue:'"md"',description:"选择器尺寸。"},{name:"variant",type:'"outline" | "soft"',defaultValue:'"outline"',description:"选择器外观变体。"},{name:"searchable",type:"boolean",defaultValue:"true",description:"是否展示搜索输入框，默认开启。"},{name:"leafOnly",type:"boolean",defaultValue:"false",description:"是否只允许选择叶子节点，非叶子节点点击时仅展开/收起。"},{name:"showPath",type:"boolean",defaultValue:"false",description:"是否在触发器中显示完整路径。"},{name:"clearable",type:"boolean",defaultValue:"false",description:"是否允许清空当前选择。"},{name:"defaultExpandedValues",type:"Array<string>",defaultValue:"[]",description:"默认展开的节点 value。"},{name:"value",type:"string | Array<string>",description:"受控选中值。"},{name:"defaultValue",type:"string | Array<string>",defaultValue:'mode === "multiple" ? [] : ""',description:"默认选中值。"},{name:"width",type:"CSSProperties['width']",description:"自定义选择器宽度。"},{name:"renderValue",type:"(items: Array<TreeSelectItem>) => ReactNode",description:"自定义触发器里的选中值展示。"},{name:"onValueChange",type:"(value: string | Array<string>, items: Array<TreeSelectItem>) => void",description:"选择变化时触发。"}]});export{sl as default};
