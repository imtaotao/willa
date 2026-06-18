import{aQ as h,aO as t,o as je,az as M,l as Ie,ax as Ne}from"./index-Du-UG09k.js";import{u as Ae,c as Pe,e as Ce,d as Re,b as Ee,f as De,S as Le,a as Be,h as Ke}from"./useSelectablePanel-BbiJJ5O-.js";import{d as Me}from"./defineDoc-Bhl3-tLk.js";import"./useFloatingPanel-BVYuWssH.js";const z=".willa-tree-select-node",m=h.forwardRef((l,a)=>{const{items:s,mode:n="single",size:u="md",variant:S="outline",width:v,invalid:T=!1,searchable:g=!0,clearable:p=!1,placeholder:b="请选择",searchPlaceholder:j="搜索节点",emptyText:I="暂无节点",name:O,value:f,defaultValue:q,defaultExpandedValues:ee=[],renderValue:N,onValueChange:w,onExpandedChange:A,className:le,disabled:P,style:te,id:ae,onBlur:se,onClick:C,onKeyDown:re,...R}=l,[c,ne]=h.useState(ee),[ie,W]=h.useState(q??(n==="multiple"?[]:"")),V=ze(f??ie,n),$=h.useMemo(()=>He(s),[s]),E=$.filter(e=>V.includes(e.value)),ce=h.useMemo(()=>({expandedValues:c,items:s}),[c,s]),{buttonId:_,closePanel:oe,listRef:de,open:k,panelId:F,panelRef:G,position:ue,query:x,rootRef:pe,scrollable:me,searchRef:fe,setOpen:J,setQuery:we,triggerRef:D,handleTriggerKeyDown:he}=Ae({contentVersion:ce,fallbackHeight:340,id:ae,minWidth:300,searchable:g}),L=h.useMemo(()=>Oe(s,c,x),[s,c,x]),ye=We({width:v,style:te}),U=T||R["aria-invalid"]===!0||R["aria-invalid"]==="true",B=E.length>0,X=p&&B&&!P,ge=B?(N==null?void 0:N(E))??E.map(e=>e.label).join("、"):b,be=e=>{D.current=e,Ne(a,e)},K=e=>{ne(e),A==null||A(e)},xe=e=>{const r=c.includes(e.value)?c.filter(o=>o!==e.value):[...c,e.value];K(r)},Se=e=>{if(e.disabled)return;const r=n==="multiple"?Qe(V,e.value):[e.value],o=n==="multiple"?r:r[0]??"",i=$.filter(d=>r.includes(d.value));f===void 0&&W(o),w==null||w(o,i),n==="single"&&J(!1)},ve=()=>{const e=n==="multiple"?[]:"";f===void 0&&W(e),w==null||w(e,[])},Ve=e=>{const r=e.target instanceof HTMLElement?e.target.closest(z):null;if(r&&x.trim()===""&&(e.key==="ArrowRight"||e.key==="ArrowLeft")){const o=r.dataset.value,i=L.find(({item:d})=>d.value===o);if(i!=null&&i.hasChildren){const d=c.includes(i.item.value);if(e.key==="ArrowRight"&&!d){e.preventDefault(),K([...c,i.item.value]);return}if(e.key==="ArrowLeft"&&d){e.preventDefault(),K(c.filter(Te=>Te!==i.item.value));return}}}Ke(e,{panel:G.current,selector:z,onClose:oe,trigger:D.current})},ke=t.jsx(Pe,{open:k,children:t.jsxs(Ce,{panelRef:G,id:F,className:"willa-tree-select-panel",role:"tree",multiselectable:n==="multiple",labelledBy:_,position:ue,onKeyDown:Ve,children:[g?t.jsx(Re,{className:"willa-tree-select-search",inputRef:fe,value:x,placeholder:j,onChange:e=>we(e.currentTarget.value)}):null,t.jsx(Ee,{listRef:de,className:"willa-tree-select-list",scrollableClassName:"willa-tree-select-list--scrollable",scrollable:me,children:L.length>0?L.map(({item:e,level:r,hasChildren:o})=>{const i=V.includes(e.value),d=x.trim()!==""||c.includes(e.value);return t.jsxs("div",{className:"willa-tree-select-row",style:{"--willa-tree-select-level":r},children:[t.jsx("button",{type:"button",className:"willa-tree-select-expand","aria-label":d?"收起节点":"展开节点","aria-hidden":!o,tabIndex:o?0:-1,onClick:()=>xe(e),children:o?t.jsx(je,{className:M(d&&"willa-tree-select-expand-icon--open")}):null}),t.jsxs("button",{type:"button",className:M("willa-tree-select-node",i&&"willa-tree-select-node--selected"),role:"treeitem","data-value":e.value,"aria-selected":i,"aria-level":r+1,"aria-expanded":o?d:void 0,disabled:e.disabled,onClick:()=>Se(e),children:[t.jsxs("span",{className:"willa-tree-select-node-main",children:[t.jsx("span",{className:"willa-tree-select-node-label",children:e.label}),e.description?t.jsx("span",{className:"willa-tree-select-node-description",children:e.description}):null]}),t.jsx("span",{className:"willa-tree-select-node-check","aria-hidden":"true",children:i?t.jsx(Ie,{}):null})]})]},e.value)}):t.jsx("div",{className:"willa-tree-select-empty",children:I})})]})});return t.jsxs("span",{ref:pe,className:M("willa-tree-select",`willa-tree-select--${u}`,`willa-tree-select--${S}`,k&&"willa-tree-select--open",U&&"willa-tree-select--invalid",X&&"willa-tree-select--has-clear",P&&"willa-tree-select--disabled",le),style:ye,children:[t.jsx(De,{...R,buttonRef:be,id:_,triggerClassName:"willa-tree-select-trigger",valueClassName:"willa-tree-select-value",placeholderClassName:"willa-tree-select-value--placeholder",iconClassName:"willa-tree-select-icon",disabled:P,popupRole:"tree",expanded:k,controls:k?F:void 0,invalid:U,hasValue:B,displayValue:ge,onBlur:se,onClick:e=>{C==null||C(e),e.defaultPrevented||J(r=>!r)},onKeyDown:e=>he(e,{selector:z,onKeyDown:re})}),X?t.jsx(Le,{className:"willa-tree-select-clear",ariaLabel:"清空选择",onClear:ve,triggerRef:D}):null,t.jsx(Be,{name:O,value:V.join(",")}),ke]})});m.displayName="TreeSelect";const ze=(l,a)=>Array.isArray(l)?l:l?a==="multiple"?l.split(",").filter(Boolean):[l]:[],Qe=(l,a)=>l.includes(a)?l.filter(s=>s!==a):[...l,a],He=l=>{const a=[],s=n=>{n.forEach(u=>{a.push(u),u.children&&s(u.children)})};return s(l),a},Oe=(l,a,s)=>{const n=[],u=s.trim().toLowerCase(),S=u!=="",v=(T,g)=>{T.forEach(p=>{var f;const b=!!((f=p.children)!=null&&f.length),j=Z(p,u),I=b?Y(p.children??[],u):!1;(!S||j||I)&&(n.push({item:p,level:g,hasChildren:b}),b&&(S||a.includes(p.value))&&v(p.children??[],g+1))})};return v(l,0),n},Y=(l,a)=>l.some(s=>Z(s,a)||Y(s.children??[],a)),Z=(l,a)=>a?H(l.label).toLowerCase().includes(a)||H(l.description).toLowerCase().includes(a):!0,H=l=>l==null||typeof l=="boolean"?"":typeof l=="string"||typeof l=="number"?String(l):Array.isArray(l)?l.map(H).join(" "):"",We=({width:l,style:a})=>l===void 0?a:{...a,width:l},y=[{value:"workspace",label:"工作区",description:"团队共享资源",children:[{value:"workspace-docs",label:"产品文档",description:"PRD、设计稿和上线记录"},{value:"workspace-data",label:"数据报表",description:"用户反馈、埋点和业务指标"}]},{value:"knowledge",label:"知识库",description:"AI 可检索资料",children:[{value:"knowledge-component",label:"组件规范",description:"Willa 组件设计和 API 约定"},{value:"knowledge-style",label:"样式规则",description:"主题变量、CSS 和移动端规则"}]}],Q={display:"grid",justifyItems:"center",gap:"0.9rem"},$e={display:"grid",gap:"0.8rem",width:"min(100%, 30rem)"},Xe=Me({id:"tree-select",name:"TreeSelect",category:"form",packageName:"willa/TreeSelect",description:"用于从层级数据中选择目录、组织、分类或知识库节点。",imports:[{name:"TreeSelect",from:"willa/TreeSelect"}],css:"willa/TreeSelect.css",demo:{name:"TreeSelect",component:m,props:{items:y,defaultExpandedValues:["workspace","knowledge"],defaultValue:"knowledge-component",width:"min(100%, 30rem)"}},code:`
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
      `,content:t.jsx("div",{style:Q,children:t.jsx(m,{items:y,defaultExpandedValues:["workspace","knowledge"],defaultValue:"knowledge-component",width:"min(100%, 30rem)"})})},{title:"多选目录",code:`
        <TreeSelect
          clearable
          mode="multiple"
          items={treeItems}
          defaultExpandedValues={["workspace", "knowledge"]}
          defaultValue={["workspace-docs", "knowledge-style"]}
          width="min(100%, 30rem)"
        />;
      `,content:t.jsx("div",{style:Q,children:t.jsx(m,{clearable:!0,mode:"multiple",items:y,defaultExpandedValues:["workspace","knowledge"],defaultValue:["workspace-docs","knowledge-style"],width:"min(100%, 30rem)"})})},{title:"状态",code:`
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
      `,content:t.jsx("div",{style:Q,children:t.jsxs("div",{style:$e,children:[t.jsx(m,{items:y,placeholder:"选择资料范围",width:"100%"}),t.jsx(m,{invalid:!0,items:y,placeholder:"请选择必填项",width:"100%"}),t.jsx(m,{disabled:!0,items:y,defaultValue:"workspace",width:"100%"})]})})}],props:[{name:"items",type:"Array<TreeSelectItem>",required:!0,description:"树形节点列表，节点可包含 children。"},{name:"mode",type:'"single" | "multiple"',defaultValue:'"single"',description:"选择模式，默认单选。"},{name:"searchable",type:"boolean",defaultValue:"true",description:"是否展示搜索输入框，默认开启。"},{name:"clearable",type:"boolean",defaultValue:"false",description:"是否允许清空当前选择。"},{name:"defaultExpandedValues",type:"Array<string>",defaultValue:"[]",description:"默认展开的节点 value。"},{name:"value",type:"string | Array<string>",description:"受控选中值。"},{name:"defaultValue",type:"string | Array<string>",defaultValue:'mode === "multiple" ? [] : ""',description:"默认选中值。"},{name:"width",type:"CSSProperties['width']",description:"自定义选择器宽度。"},{name:"renderValue",type:"(items: Array<TreeSelectItem>) => ReactNode",description:"自定义触发器里的选中值展示。"},{name:"onValueChange",type:"(value: string | Array<string>, items: Array<TreeSelectItem>) => void",description:"选择变化时触发。"}]});export{Xe as default};
