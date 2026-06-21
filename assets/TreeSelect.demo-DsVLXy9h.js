import{a$ as y,aZ as l,p as Te,aK as E,m as je,aI as Ie}from"./index-D1WL8Azw.js";import{g as Ne,u as Ce,c as Pe,e as Ae,d as Re,b as Ee,f as De,S as Le,a as Ke,h as Me}from"./useSelectablePanel-Bgg8uvgM.js";import{d as Be}from"./defineDoc-D4e1n7NZ.js";import"./floatingPanelParts-Ccd0Ae9g.js";import"./useFloatingPanel-CWrVKE6Y.js";const D=".willa-tree-select-node",m=y.forwardRef((t,a)=>{const{items:s,mode:o="single",size:c="md",variant:b="outline",width:S,invalid:k=!1,searchable:h=!0,clearable:d=!1,placeholder:f="请选择",searchPlaceholder:V="搜索节点",emptyText:T="暂无节点",name:M,value:x,defaultValue:F,defaultExpandedValues:G=[],renderValue:J,onValueChange:U,onExpandedChange:j,className:X,disabled:I,style:Y,id:q,onBlur:ee,onClick:N,onKeyDown:le,...C}=t,[r,te]=y.useState(G),ae=y.useMemo(()=>He(s),[s]),{clearValue:se,commitItem:re,displayValue:ne,hasValue:B,hiddenValue:ie,selectedValues:ce}=Ne({defaultValue:F,items:ae,mode:o,onValueChange:U,placeholder:f,renderValue:J,value:x}),oe=y.useMemo(()=>({expandedValues:r,items:s}),[r,s]),{buttonId:H,closePanel:de,listRef:ue,open:v,panelId:Q,panelRef:$,position:pe,query:g,rootRef:me,scrollable:we,searchRef:he,setOpen:z,setQuery:fe,triggerRef:P,handleTriggerKeyDown:ge}=Ce({contentVersion:oe,fallbackHeight:340,id:q,minWidth:300,searchable:h}),A=y.useMemo(()=>Qe(s,r,g),[s,r,g]),ye=$e({width:S,style:Y}),W=k||C["aria-invalid"]===!0||C["aria-invalid"]==="true",O=d&&B&&!I,be=e=>{P.current=e,Ie(a,e)},R=e=>{te(e),j==null||j(e)},Se=e=>{const n=r.includes(e.value)?r.filter(u=>u!==e.value):[...r,e.value];R(n)},xe=e=>{re(e)&&o==="single"&&z(!1)},ve=e=>{const n=e.target instanceof HTMLElement?e.target.closest(D):null;if(n&&g.trim()===""&&(e.key==="ArrowRight"||e.key==="ArrowLeft")){const u=n.dataset.value,i=A.find(({item:p})=>p.value===u);if(i!=null&&i.hasChildren){const p=r.includes(i.item.value);if(e.key==="ArrowRight"&&!p){e.preventDefault(),R([...r,i.item.value]);return}if(e.key==="ArrowLeft"&&p){e.preventDefault(),R(r.filter(Ve=>Ve!==i.item.value));return}}}Me(e,{panel:$.current,selector:D,onClose:de,trigger:P.current})},ke=l.jsx(Pe,{open:v,children:l.jsxs(Ae,{panelRef:$,id:Q,className:"willa-tree-select-panel",role:"tree",multiselectable:o==="multiple",labelledBy:H,position:pe,onKeyDown:ve,children:[h?l.jsx(Re,{className:"willa-tree-select-search",inputRef:he,value:g,placeholder:V,onChange:e=>fe(e.currentTarget.value)}):null,l.jsx(Ee,{listRef:ue,className:"willa-tree-select-list",scrollableClassName:"willa-tree-select-list--scrollable",scrollable:we,children:A.length>0?A.map(({item:e,level:n,hasChildren:u})=>{const i=ce.includes(e.value),p=g.trim()!==""||r.includes(e.value);return l.jsxs("div",{className:"willa-tree-select-row",style:{"--willa-tree-select-level":n},children:[l.jsx("button",{type:"button",className:"willa-tree-select-expand","aria-label":p?"收起节点":"展开节点","aria-hidden":!u,tabIndex:u?0:-1,onClick:()=>Se(e),children:u?l.jsx(Te,{className:E(p&&"willa-tree-select-expand-icon--open")}):null}),l.jsxs("button",{type:"button",className:E("willa-tree-select-node",i&&"willa-tree-select-node--selected"),role:"treeitem","data-value":e.value,"aria-selected":i,"aria-level":n+1,"aria-expanded":u?p:void 0,disabled:e.disabled,onClick:()=>xe(e),children:[l.jsxs("span",{className:"willa-tree-select-node-main",children:[l.jsx("span",{className:"willa-tree-select-node-label",children:e.label}),e.description?l.jsx("span",{className:"willa-tree-select-node-description",children:e.description}):null]}),l.jsx("span",{className:"willa-tree-select-node-check","aria-hidden":"true",children:i?l.jsx(je,{}):null})]})]},e.value)}):l.jsx("div",{className:"willa-tree-select-empty",children:T})})]})});return l.jsxs("span",{ref:me,className:E("willa-tree-select",`willa-tree-select--${c}`,`willa-tree-select--${b}`,v&&"willa-tree-select--open",W&&"willa-tree-select--invalid",O&&"willa-tree-select--has-clear",I&&"willa-tree-select--disabled",X),style:ye,children:[l.jsx(De,{...C,buttonRef:be,id:H,triggerClassName:"willa-tree-select-trigger",valueClassName:"willa-tree-select-value",placeholderClassName:"willa-tree-select-value--placeholder",iconClassName:"willa-tree-select-icon",disabled:I,popupRole:"tree",expanded:v,controls:v?Q:void 0,invalid:W,hasValue:B,displayValue:ne,onBlur:ee,onClick:e=>{N==null||N(e),e.defaultPrevented||z(n=>!n)},onKeyDown:e=>ge(e,{selector:D,onKeyDown:le})}),O?l.jsx(Le,{className:"willa-tree-select-clear",ariaLabel:"清空选择",onClear:se,triggerRef:P}):null,l.jsx(Ke,{name:M,value:ie}),ke]})});m.displayName="TreeSelect";const He=t=>{const a=[],s=o=>{o.forEach(c=>{a.push(c),c.children&&s(c.children)})};return s(t),a},Qe=(t,a,s)=>{const o=[],c=s.trim().toLowerCase(),b=c!=="",S=(k,h)=>{k.forEach(d=>{var x;const f=!!((x=d.children)!=null&&x.length),V=_(d,c),T=f?Z(d.children??[],c):!1;(!b||V||T)&&(o.push({item:d,level:h,hasChildren:f}),f&&(b||a.includes(d.value))&&S(d.children??[],h+1))})};return S(t,0),o},Z=(t,a)=>t.some(s=>_(s,a)||Z(s.children??[],a)),_=(t,a)=>a?K(t.label).toLowerCase().includes(a)||K(t.description).toLowerCase().includes(a):!0,K=t=>t==null||typeof t=="boolean"?"":typeof t=="string"||typeof t=="number"?String(t):Array.isArray(t)?t.map(K).join(" "):"",$e=({width:t,style:a})=>t===void 0?a:{...a,width:t},w=[{value:"workspace",label:"工作区",description:"团队共享资源",children:[{value:"workspace-docs",label:"产品文档",description:"PRD、设计稿和上线记录"},{value:"workspace-data",label:"数据报表",description:"用户反馈、埋点和业务指标"}]},{value:"knowledge",label:"知识库",description:"AI 可检索资料",children:[{value:"knowledge-component",label:"组件规范",description:"Willa 组件设计和 API 约定"},{value:"knowledge-style",label:"样式规则",description:"主题变量、CSS 和移动端规则"}]}],L={display:"grid",justifyItems:"center",gap:"0.9rem"},ze={display:"grid",gap:"0.8rem",width:"min(100%, 30rem)"},Ge=Be({id:"tree-select",name:"TreeSelect",category:"form",packageName:"willa/TreeSelect",description:"用于从层级数据中选择目录、组织、分类或知识库节点。",imports:[{name:"TreeSelect",from:"willa/TreeSelect"}],css:"willa/TreeSelect.css",demo:{name:"TreeSelect",component:m,props:{items:w,defaultExpandedValues:["workspace","knowledge"],defaultValue:"knowledge-component",width:"min(100%, 30rem)"}},code:`
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
      `,content:l.jsx("div",{style:L,children:l.jsx(m,{items:w,defaultExpandedValues:["workspace","knowledge"],defaultValue:"knowledge-component",width:"min(100%, 30rem)"})})},{title:"多选目录",code:`
        <TreeSelect
          clearable
          mode="multiple"
          items={treeItems}
          defaultExpandedValues={["workspace", "knowledge"]}
          defaultValue={["workspace-docs", "knowledge-style"]}
          width="min(100%, 30rem)"
        />;
      `,content:l.jsx("div",{style:L,children:l.jsx(m,{clearable:!0,mode:"multiple",items:w,defaultExpandedValues:["workspace","knowledge"],defaultValue:["workspace-docs","knowledge-style"],width:"min(100%, 30rem)"})})},{title:"状态",code:`
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
      `,content:l.jsx("div",{style:L,children:l.jsxs("div",{style:ze,children:[l.jsx(m,{items:w,placeholder:"选择资料范围",width:"100%"}),l.jsx(m,{invalid:!0,items:w,placeholder:"请选择必填项",width:"100%"}),l.jsx(m,{disabled:!0,items:w,defaultValue:"workspace",width:"100%"})]})})}],props:[{name:"items",type:"Array<TreeSelectItem>",required:!0,description:"树形节点列表，节点可包含 children。"},{name:"mode",type:'"single" | "multiple"',defaultValue:'"single"',description:"选择模式，默认单选。"},{name:"searchable",type:"boolean",defaultValue:"true",description:"是否展示搜索输入框，默认开启。"},{name:"clearable",type:"boolean",defaultValue:"false",description:"是否允许清空当前选择。"},{name:"defaultExpandedValues",type:"Array<string>",defaultValue:"[]",description:"默认展开的节点 value。"},{name:"value",type:"string | Array<string>",description:"受控选中值。"},{name:"defaultValue",type:"string | Array<string>",defaultValue:'mode === "multiple" ? [] : ""',description:"默认选中值。"},{name:"width",type:"CSSProperties['width']",description:"自定义选择器宽度。"},{name:"renderValue",type:"(items: Array<TreeSelectItem>) => ReactNode",description:"自定义触发器里的选中值展示。"},{name:"onValueChange",type:"(value: string | Array<string>, items: Array<TreeSelectItem>) => void",description:"选择变化时触发。"}]});export{Ge as default};
