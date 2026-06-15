import{aw as h,au as t,k as je,ak as M,h as Ie}from"./index-VEztyUnl.js";import{u as Ne,c as Ae,e as Pe,d as Ce,b as Re,f as Ee,S as De,a as Le,h as Be}from"./useSelectablePanel-ClOFijx2.js";import{d as Ke}from"./defineDoc-fv-G_8j9.js";import"./useFloatingPanel-CvJH9GCR.js";const z=".willa-tree-select-node",m=h.forwardRef((l,a)=>{const{items:s,mode:n="single",size:u="md",variant:x="outline",width:v,invalid:V=!1,searchable:g=!0,clearable:p=!1,placeholder:b="请选择",searchPlaceholder:j="搜索节点",emptyText:I="暂无节点",name:W,value:w,defaultValue:q,defaultExpandedValues:ee=[],renderValue:N,onValueChange:f,onExpandedChange:A,className:le,disabled:P,style:te,id:ae,onBlur:se,onClick:C,onKeyDown:re,...R}=l,[c,ne]=h.useState(ee),[ie,$]=h.useState(q??(n==="multiple"?[]:"")),k=Me(w??ie,n),F=h.useMemo(()=>He(s),[s]),E=F.filter(e=>k.includes(e.value)),ce=h.useMemo(()=>({expandedValues:c,items:s}),[c,s]),{buttonId:O,closePanel:oe,listRef:de,open:T,panelId:_,panelRef:G,position:ue,query:S,rootRef:pe,scrollable:me,searchRef:we,setOpen:J,setQuery:fe,triggerRef:D,handleTriggerKeyDown:he}=Ne({contentVersion:ce,fallbackHeight:340,id:ae,minWidth:300,searchable:g}),L=h.useMemo(()=>Qe(s,c,S),[s,c,S]),ye=We({width:v,style:te}),U=V||R["aria-invalid"]===!0||R["aria-invalid"]==="true",B=E.length>0,X=p&&B&&!P,ge=B?(N==null?void 0:N(E))??E.map(e=>e.label).join("、"):b,be=e=>{D.current=e,$e(a,e)},K=e=>{ne(e),A==null||A(e)},Se=e=>{const r=c.includes(e.value)?c.filter(o=>o!==e.value):[...c,e.value];K(r)},xe=e=>{if(e.disabled)return;const r=n==="multiple"?ze(k,e.value):[e.value],o=n==="multiple"?r:r[0]??"",i=F.filter(d=>r.includes(d.value));w===void 0&&$(o),f==null||f(o,i),n==="single"&&J(!1)},ve=()=>{const e=n==="multiple"?[]:"";w===void 0&&$(e),f==null||f(e,[])},ke=e=>{const r=e.target instanceof HTMLElement?e.target.closest(z):null;if(r&&S.trim()===""&&(e.key==="ArrowRight"||e.key==="ArrowLeft")){const o=r.dataset.value,i=L.find(({item:d})=>d.value===o);if(i!=null&&i.hasChildren){const d=c.includes(i.item.value);if(e.key==="ArrowRight"&&!d){e.preventDefault(),K([...c,i.item.value]);return}if(e.key==="ArrowLeft"&&d){e.preventDefault(),K(c.filter(Ve=>Ve!==i.item.value));return}}}Be(e,{panel:G.current,selector:z,onClose:oe,trigger:D.current})},Te=t.jsx(Ae,{open:T,children:t.jsxs(Pe,{panelRef:G,id:_,className:"willa-tree-select-panel",role:"tree",multiselectable:n==="multiple",labelledBy:O,position:ue,onKeyDown:ke,children:[g?t.jsx(Ce,{className:"willa-tree-select-search",inputRef:we,value:S,placeholder:j,onChange:e=>fe(e.currentTarget.value)}):null,t.jsx(Re,{listRef:de,className:"willa-tree-select-list",scrollableClassName:"willa-tree-select-list--scrollable",scrollable:me,children:L.length>0?L.map(({item:e,level:r,hasChildren:o})=>{const i=k.includes(e.value),d=S.trim()!==""||c.includes(e.value);return t.jsxs("div",{className:"willa-tree-select-row",style:{"--willa-tree-select-level":r},children:[t.jsx("button",{type:"button",className:"willa-tree-select-expand","aria-label":d?"收起节点":"展开节点","aria-hidden":!o,tabIndex:o?0:-1,onClick:()=>Se(e),children:o?t.jsx(je,{className:M(d&&"willa-tree-select-expand-icon--open")}):null}),t.jsxs("button",{type:"button",className:M("willa-tree-select-node",i&&"willa-tree-select-node--selected"),role:"treeitem","data-value":e.value,"aria-selected":i,"aria-level":r+1,"aria-expanded":o?d:void 0,disabled:e.disabled,onClick:()=>xe(e),children:[t.jsxs("span",{className:"willa-tree-select-node-main",children:[t.jsx("span",{className:"willa-tree-select-node-label",children:e.label}),e.description?t.jsx("span",{className:"willa-tree-select-node-description",children:e.description}):null]}),t.jsx("span",{className:"willa-tree-select-node-check","aria-hidden":"true",children:i?t.jsx(Ie,{}):null})]})]},e.value)}):t.jsx("div",{className:"willa-tree-select-empty",children:I})})]})});return t.jsxs("span",{ref:pe,className:M("willa-tree-select",`willa-tree-select--${u}`,`willa-tree-select--${x}`,T&&"willa-tree-select--open",U&&"willa-tree-select--invalid",X&&"willa-tree-select--has-clear",P&&"willa-tree-select--disabled",le),style:ye,children:[t.jsx(Ee,{...R,buttonRef:be,id:O,triggerClassName:"willa-tree-select-trigger",valueClassName:"willa-tree-select-value",placeholderClassName:"willa-tree-select-value--placeholder",iconClassName:"willa-tree-select-icon",disabled:P,popupRole:"tree",expanded:T,controls:T?_:void 0,invalid:U,hasValue:B,displayValue:ge,onBlur:se,onClick:e=>{C==null||C(e),e.defaultPrevented||J(r=>!r)},onKeyDown:e=>he(e,{selector:z,onKeyDown:re})}),X?t.jsx(De,{className:"willa-tree-select-clear",ariaLabel:"清空选择",onClear:ve,triggerRef:D}):null,t.jsx(Le,{name:W,value:k.join(",")}),Te]})});m.displayName="TreeSelect";const Me=(l,a)=>Array.isArray(l)?l:l?a==="multiple"?l.split(",").filter(Boolean):[l]:[],ze=(l,a)=>l.includes(a)?l.filter(s=>s!==a):[...l,a],He=l=>{const a=[],s=n=>{n.forEach(u=>{a.push(u),u.children&&s(u.children)})};return s(l),a},Qe=(l,a,s)=>{const n=[],u=s.trim().toLowerCase(),x=u!=="",v=(V,g)=>{V.forEach(p=>{var w;const b=!!((w=p.children)!=null&&w.length),j=Z(p,u),I=b?Y(p.children??[],u):!1;(!x||j||I)&&(n.push({item:p,level:g,hasChildren:b}),b&&(x||a.includes(p.value))&&v(p.children??[],g+1))})};return v(l,0),n},Y=(l,a)=>l.some(s=>Z(s,a)||Y(s.children??[],a)),Z=(l,a)=>a?Q(l.label).toLowerCase().includes(a)||Q(l.description).toLowerCase().includes(a):!0,Q=l=>l==null||typeof l=="boolean"?"":typeof l=="string"||typeof l=="number"?String(l):Array.isArray(l)?l.map(Q).join(" "):"",We=({width:l,style:a})=>l===void 0?a:{...a,width:l},$e=(l,a)=>{if(typeof l=="function"){l(a);return}l&&(l.current=a)},y=[{value:"workspace",label:"工作区",description:"团队共享资源",children:[{value:"workspace-docs",label:"产品文档",description:"PRD、设计稿和上线记录"},{value:"workspace-data",label:"数据报表",description:"用户反馈、埋点和业务指标"}]},{value:"knowledge",label:"知识库",description:"AI 可检索资料",children:[{value:"knowledge-component",label:"组件规范",description:"Willa 组件设计和 API 约定"},{value:"knowledge-style",label:"样式规则",description:"主题变量、CSS 和移动端规则"}]}],H={display:"grid",justifyItems:"center",gap:"0.9rem"},Fe={display:"grid",gap:"0.8rem",width:"min(100%, 30rem)"},Xe=Ke({id:"tree-select",name:"TreeSelect",category:"form",packageName:"willa/TreeSelect",description:"用于从层级数据中选择目录、组织、分类或知识库节点。",imports:[{name:"TreeSelect",from:"willa/TreeSelect"}],css:"willa/TreeSelect.css",demo:{name:"TreeSelect",component:m,props:{items:y,defaultExpandedValues:["workspace","knowledge"],defaultValue:"knowledge-component",width:"min(100%, 30rem)"}},code:`
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
      `,content:t.jsx("div",{style:H,children:t.jsx(m,{items:y,defaultExpandedValues:["workspace","knowledge"],defaultValue:"knowledge-component",width:"min(100%, 30rem)"})})},{title:"多选目录",code:`
        <TreeSelect
          clearable
          mode="multiple"
          items={treeItems}
          defaultExpandedValues={["workspace", "knowledge"]}
          defaultValue={["workspace-docs", "knowledge-style"]}
          width="min(100%, 30rem)"
        />;
      `,content:t.jsx("div",{style:H,children:t.jsx(m,{clearable:!0,mode:"multiple",items:y,defaultExpandedValues:["workspace","knowledge"],defaultValue:["workspace-docs","knowledge-style"],width:"min(100%, 30rem)"})})},{title:"状态",code:`
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
      `,content:t.jsx("div",{style:H,children:t.jsxs("div",{style:Fe,children:[t.jsx(m,{items:y,placeholder:"选择资料范围",width:"100%"}),t.jsx(m,{invalid:!0,items:y,placeholder:"请选择必填项",width:"100%"}),t.jsx(m,{disabled:!0,items:y,defaultValue:"workspace",width:"100%"})]})})}],props:[{name:"items",type:"Array<TreeSelectItem>",required:!0,description:"树形节点列表，节点可包含 children。"},{name:"mode",type:'"single" | "multiple"',description:"选择模式，默认单选。"},{name:"searchable",type:"boolean",description:"是否展示搜索输入框，默认开启。"},{name:"clearable",type:"boolean",description:"是否允许清空当前选择。"},{name:"defaultExpandedValues",type:"Array<string>",description:"默认展开的节点 value。"},{name:"value",type:"string | Array<string>",description:"受控选中值。"},{name:"defaultValue",type:"string | Array<string>",description:"默认选中值。"},{name:"width",type:"CSSProperties['width']",description:"自定义选择器宽度。"},{name:"renderValue",type:"(items: Array<TreeSelectItem>) => ReactNode",description:"自定义触发器里的选中值展示。"},{name:"onValueChange",type:"(value: string | Array<string>, items: Array<TreeSelectItem>) => void",description:"选择变化时触发。"}]});export{Xe as default};
