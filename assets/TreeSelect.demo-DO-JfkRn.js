import{b0 as f,a_ as t,p as Ce,aL as K,m as Pe,aJ as Ee}from"./index-CbNsWwWA.js";import{u as Re,a as Ae,c as Me,b as De,S as Le,C as Ke,h as Oe}from"./useComboboxState-BQ8cBUmX.js";import{d as Be}from"./defineDoc-CYRy-ddK.js";import"./floatingPanelParts-DOwqf7Zo.js";import"./useFloatingPanel-DcU9vq0U.js";const O=".willa-tree-select-node",w=f.forwardRef((l,a)=>{const{items:s,mode:r="single",size:n="md",variant:c="outline",width:y,invalid:b=!1,searchable:p=!0,clearable:m=!1,placeholder:x="请选择",searchPlaceholder:j="搜索节点",emptyText:I="暂无节点",leafOnly:B=!1,showPath:v=!1,name:X,value:Y,defaultValue:Z,defaultExpandedValues:q=[],renderValue:N,onValueChange:ee,onExpandedChange:C,className:le,disabled:P,style:te,id:ae,onBlur:se,onClick:E,onKeyDown:re,...R}=l,[i,ne]=f.useState(q),ie=f.useMemo(()=>Qe(s),[s]),Q=f.useMemo(()=>We(s),[s]),oe=f.useMemo(()=>{if(N)return N;if(v)return e=>_e(e,Q,r)},[r,Q,N,v]),ce=f.useMemo(()=>({expandedValues:i,items:s}),[i,s]),{clearValue:de,commitItem:ue,displayValue:pe,hasValue:z,hiddenValue:me,buttonId:H,closePanel:he,listRef:we,open:V,panelId:A,panelRef:W,position:fe,query:S,rootRef:ge,scrollable:ye,searchRef:be,setOpen:_,setQuery:xe,triggerRef:M,handleTriggerKeyDown:ve,selectedValues:Se}=Re({defaultValue:Z,items:ie,mode:r,onValueChange:ee,placeholder:x,renderValue:oe,value:Y,contentVersion:ce,fallbackHeight:340,id:ae,minWidth:300,searchable:p}),D=f.useMemo(()=>ze(s,i,S),[s,i,S]),ke=He({width:y,style:te}),$=b||R["aria-invalid"]===!0||R["aria-invalid"]==="true",F=m&&z&&!P,Ve=e=>{M.current=e,Ee(a,e)},L=e=>{ne(e),C==null||C(e)},J=e=>{const d=i.includes(e.value)?i.filter(o=>o!==e.value):[...i,e.value];L(d)},Te=e=>{var o;if(B&&((o=e.children)!=null&&o.length)){J(e);return}ue(e)&&r==="single"&&_(!1)},je=e=>{const d=e.target instanceof HTMLElement?e.target.closest(O):null;if(d&&S.trim()===""&&(e.key==="ArrowRight"||e.key==="ArrowLeft")){const o=d.dataset.value,u=D.find(({item:h})=>h.value===o);if(u!=null&&u.hasChildren){const h=i.includes(u.item.value);if(e.key==="ArrowRight"&&!h){e.preventDefault(),L([...i,u.item.value]);return}if(e.key==="ArrowLeft"&&h){e.preventDefault(),L(i.filter(Ne=>Ne!==u.item.value));return}}}Oe(e,{panel:W.current,selector:O,onClose:he,trigger:M.current})},Ie=t.jsx(Ae,{open:V,children:t.jsxs(Me,{panelRef:W,id:A,className:"willa-tree-select-panel",role:"tree",multiselectable:r==="multiple",labelledBy:H,position:fe,onKeyDown:je,children:[p?t.jsx(De,{className:"willa-tree-select-search",inputRef:be,value:S,placeholder:j,onChange:e=>xe(e.currentTarget.value)}):null,t.jsx(Le,{listRef:we,className:"willa-tree-select-list",scrollableClassName:"willa-tree-select-list--scrollable",scrollable:ye,children:D.length>0?D.map(({item:e,level:d,hasChildren:o})=>{const u=Se.includes(e.value),h=S.trim()!==""||i.includes(e.value);return t.jsxs("div",{className:"willa-tree-select-row",style:{"--willa-tree-select-level":d},children:[t.jsx("button",{type:"button",className:"willa-tree-select-expand","aria-label":h?"收起节点":"展开节点","aria-hidden":!o,tabIndex:o?0:-1,onClick:()=>J(e),children:o?t.jsx(Ce,{className:K(h&&"willa-tree-select-expand-icon--open")}):null}),t.jsxs("button",{type:"button",className:K("willa-tree-select-node",u&&"willa-tree-select-node--selected"),role:"treeitem","data-value":e.value,"aria-selected":u,"aria-level":d+1,"aria-expanded":o?h:void 0,disabled:e.disabled,onClick:()=>Te(e),children:[t.jsxs("span",{className:"willa-tree-select-node-main",children:[t.jsx("span",{className:"willa-tree-select-node-label",children:e.label}),e.description?t.jsx("span",{className:"willa-tree-select-node-description",children:e.description}):null]}),t.jsx("span",{className:"willa-tree-select-node-check","aria-hidden":"true",children:u?t.jsx(Pe,{}):null})]})]},e.value)}):t.jsx("div",{className:"willa-tree-select-empty",children:I})})]})});return t.jsx(Ke,{rootRef:ge,className:K("willa-tree-select",`willa-tree-select--${n}`,`willa-tree-select--${c}`,V&&"willa-tree-select--open",$&&"willa-tree-select--invalid",F&&"willa-tree-select--has-clear",P&&"willa-tree-select--disabled",le),style:ke,triggerProps:R,buttonRef:Ve,buttonId:H,panelId:A,popupRole:"tree",expanded:V,hasValue:z,invalid:$,disabled:P,controls:V?A:void 0,displayValue:pe,placeholderClassName:"willa-tree-select-value--placeholder",triggerClassName:"willa-tree-select-trigger",valueClassName:"willa-tree-select-value",iconClassName:"willa-tree-select-icon",hasClear:F,clearClassName:"willa-tree-select-clear",clearLabel:"清空选择",triggerRef:M,hiddenName:X,hiddenValue:me,onClear:de,onTriggerBlur:se,onTriggerClick:e=>{E==null||E(e),e.defaultPrevented||_(d=>!d)},onTriggerKeyDown:e=>ve(e,{selector:O,onKeyDown:re}),children:Ie})});w.displayName="TreeSelect";const Qe=l=>{const a=[],s=r=>{r.forEach(n=>{a.push(n),n.children&&s(n.children)})};return s(l),a},ze=(l,a,s)=>{const r=[],n=s.trim().toLowerCase(),c=n!=="",y=(b,p)=>{b.forEach(m=>{var v;const x=!!((v=m.children)!=null&&v.length),j=U(m,n),I=x?G(m.children??[],n):!1;(!c||j||I)&&(r.push({item:m,level:p,hasChildren:x}),x&&(c||a.includes(m.value))&&y(m.children??[],p+1))})};return y(l,0),r},G=(l,a)=>l.some(s=>U(s,a)||G(s.children??[],a)),U=(l,a)=>a?k(l.label).toLowerCase().includes(a)||k(l.description).toLowerCase().includes(a):!0,k=l=>l==null||typeof l=="boolean"?"":typeof l=="string"||typeof l=="number"?String(l):Array.isArray(l)?l.map(k).join(" "):"",He=({width:l,style:a})=>l===void 0?a:{...a,width:l},We=l=>{const a=new Map,s=(r,n)=>{r.forEach(c=>{var p;const y=k(c.label)||c.value,b=[...n,y];a.set(c.value,b.join(" / ")),(p=c.children)!=null&&p.length&&s(c.children,b)})};return s(l,[]),a},_e=(l,a,s)=>{if(l.length===0)return"";const r=l.map(n=>a.get(n.value)??k(n.label)??n.value);return s==="single"?r[0]??"":r.join("，")},g=[{value:"workspace",label:"工作区",description:"团队共享资源",children:[{value:"workspace-docs",label:"产品文档",description:"PRD、设计稿和上线记录"},{value:"workspace-data",label:"数据报表",description:"用户反馈、埋点和业务指标"}]},{value:"knowledge",label:"知识库",description:"AI 可检索资料",children:[{value:"knowledge-component",label:"组件规范",description:"Willa 组件设计和 API 约定"},{value:"knowledge-style",label:"样式规则",description:"主题变量、CSS 和移动端规则"}]}],T={display:"grid",justifyItems:"center",gap:"0.9rem"},$e={display:"grid",gap:"0.8rem",width:"min(100%, 30rem)"},Ye=Be({id:"tree-select",name:"TreeSelect",category:"form",packageName:"willa/TreeSelect",description:"用于从层级数据中选择目录、组织、分类或知识库节点；需要级联式路径展示时可配合 leafOnly 和 showPath。",imports:[{name:"TreeSelect",from:"willa/TreeSelect"}],css:"willa/TreeSelect.css",demo:{name:"TreeSelect",component:w,props:{items:g,defaultExpandedValues:["workspace","knowledge"],defaultValue:"knowledge-component",width:"min(100%, 30rem)"}},code:`
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
      `,content:t.jsx("div",{style:T,children:t.jsx(w,{items:g,defaultExpandedValues:["workspace","knowledge"],defaultValue:"knowledge-component",width:"min(100%, 30rem)"})})},{title:"多选目录",code:`
        <TreeSelect
          clearable
          mode="multiple"
          items={treeItems}
          defaultExpandedValues={["workspace", "knowledge"]}
          defaultValue={["workspace-docs", "knowledge-style"]}
          width="min(100%, 30rem)"
        />;
      `,content:t.jsx("div",{style:T,children:t.jsx(w,{clearable:!0,mode:"multiple",items:g,defaultExpandedValues:["workspace","knowledge"],defaultValue:["workspace-docs","knowledge-style"],width:"min(100%, 30rem)"})})},{title:"级联分类",code:`
        <TreeSelect
          items={treeItems}
          leafOnly
          showPath
          defaultExpandedValues={["workspace", "knowledge"]}
          defaultValue="knowledge-component"
          width="min(100%, 30rem)"
        />;
      `,content:t.jsx("div",{style:T,children:t.jsx(w,{items:g,leafOnly:!0,showPath:!0,defaultExpandedValues:["workspace","knowledge"],defaultValue:"knowledge-component",width:"min(100%, 30rem)"})})},{title:"状态",code:`
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
      `,content:t.jsx("div",{style:T,children:t.jsxs("div",{style:$e,children:[t.jsx(w,{items:g,placeholder:"选择资料范围",width:"100%"}),t.jsx(w,{invalid:!0,items:g,placeholder:"请选择必填项",width:"100%"}),t.jsx(w,{disabled:!0,items:g,defaultValue:"workspace",width:"100%"})]})})}],props:[{name:"items",type:"Array<TreeSelectItem>",required:!0,description:"树形节点列表，节点可包含 children。"},{name:"mode",type:'"single" | "multiple"',defaultValue:'"single"',description:"选择模式，默认单选。"},{name:"searchable",type:"boolean",defaultValue:"true",description:"是否展示搜索输入框，默认开启。"},{name:"leafOnly",type:"boolean",defaultValue:"false",description:"是否只允许选择叶子节点，非叶子节点点击时仅展开/收起。"},{name:"showPath",type:"boolean",defaultValue:"false",description:"是否在触发器中显示完整路径。"},{name:"clearable",type:"boolean",defaultValue:"false",description:"是否允许清空当前选择。"},{name:"defaultExpandedValues",type:"Array<string>",defaultValue:"[]",description:"默认展开的节点 value。"},{name:"value",type:"string | Array<string>",description:"受控选中值。"},{name:"defaultValue",type:"string | Array<string>",defaultValue:'mode === "multiple" ? [] : ""',description:"默认选中值。"},{name:"width",type:"CSSProperties['width']",description:"自定义选择器宽度。"},{name:"renderValue",type:"(items: Array<TreeSelectItem>) => ReactNode",description:"自定义触发器里的选中值展示。"},{name:"onValueChange",type:"(value: string | Array<string>, items: Array<TreeSelectItem>) => void",description:"选择变化时触发。"}]});export{Ye as default};
