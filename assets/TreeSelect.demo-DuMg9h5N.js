import{am as a,al as Te,ak as t,j as Ve,ac as k,g as Ie,q as Ne,h as Ee}from"./index-qn4eWa1o.js";import{u as Re}from"./useFloatingPanel-CP_gjnYk.js";import{d as Ae}from"./defineDoc-BS0X7wWk.js";const p=a.forwardRef((l,s)=>{const{items:r,mode:n="single",size:c="md",variant:j="outline",width:T,invalid:R=!1,searchable:m=!0,clearable:u=!1,placeholder:x="请选择",searchPlaceholder:A="搜索节点",emptyText:P="暂无节点",name:C,value:f,defaultValue:ae,defaultExpandedValues:re=[],renderValue:D,onValueChange:w,onExpandedChange:B,className:ne,disabled:M,style:ie,id:ce,onBlur:oe,onClick:z,onKeyDown:L,...Q}=l,de=a.useId(),$=ce??de,_=`${$}-panel`,q=a.useRef(null),G=a.useRef(null),J=a.useRef(null),U=a.useRef(null),X=a.useRef(null),[o,b]=a.useState(!1),[g,Y]=a.useState(""),[h,ue]=a.useState(re),[pe,Z]=a.useState(ae??(n==="multiple"?[]:"")),me=f??pe,fe=a.useCallback(()=>b(!1),[]),{position:V,scrollable:we,updatePosition:I,updateScrollable:N}=Re({open:o,rootRef:q,triggerRef:G,panelRef:J,listRef:U,minWidth:300,fallbackHeight:340,onClose:fe}),E=Pe(me,n),ee=a.useMemo(()=>De(r),[r]),F=ee.filter(e=>E.includes(e.value)),O=a.useMemo(()=>Be(r,h,g),[r,h,g]),he=Me({width:T,style:ie}),le=R||Q["aria-invalid"]===!0||Q["aria-invalid"]==="true",W=F.length>0,ye=W?(D==null?void 0:D(F))??F.map(e=>e.label).join("、"):x,xe=e=>{G.current=e,ze(s,e)};a.useEffect(()=>{o?(I(),N(),m&&window.setTimeout(()=>{var e;return(e=X.current)==null?void 0:e.focus()},0)):Y("")},[o,m,r,I,N]),a.useEffect(()=>{o&&(I(),N())},[o,g,O,I,N]);const be=e=>{ue(e),B==null||B(e)},ge=e=>{const i=h.includes(e.value)?h.filter(d=>d!==e.value):[...h,e.value];be(i)},ve=e=>{if(e.disabled)return;const i=n==="multiple"?Ce(E,e.value):[e.value],d=n==="multiple"?i:i[0]??"",v=ee.filter(S=>i.includes(S.value));f===void 0&&Z(d),w==null||w(d,v),n==="single"&&b(!1)},Se=()=>{const e=n==="multiple"?[]:"";f===void 0&&Z(e),w==null||w(e,[])},ke=e=>{if(L==null||L(e),!e.defaultPrevented){if(e.key==="Escape"){b(!1);return}(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),b(i=>!i))}},je=o&&typeof document<"u"?Te.createPortal(t.jsxs("div",{ref:J,id:_,className:"willa-tree-select-panel",role:"tree","aria-multiselectable":n==="multiple"?!0:void 0,"aria-labelledby":$,style:V?{left:V.left,top:V.top,width:V.width}:{left:0,top:0,visibility:"hidden"},children:[m?t.jsx("div",{className:"willa-tree-select-search",children:t.jsx("input",{ref:X,value:g,placeholder:A,onChange:e=>Y(e.currentTarget.value)})}):null,t.jsx("div",{ref:U,className:k("willa-tree-select-list",we&&"willa-tree-select-list--scrollable"),children:O.length>0?O.map(({item:e,level:i,hasChildren:d})=>{const v=E.includes(e.value),S=g.trim()!==""||h.includes(e.value);return t.jsxs("div",{className:"willa-tree-select-row",style:{"--willa-tree-select-level":i},children:[t.jsx("button",{type:"button",className:"willa-tree-select-expand","aria-label":S?"收起节点":"展开节点","aria-hidden":!d,tabIndex:d?0:-1,onClick:()=>ge(e),children:d?t.jsx(Ve,{className:k(S&&"willa-tree-select-expand-icon--open")}):null}),t.jsxs("button",{type:"button",className:k("willa-tree-select-node",v&&"willa-tree-select-node--selected"),role:"treeitem","aria-selected":v,"aria-level":i+1,"aria-expanded":d?S:void 0,disabled:e.disabled,onClick:()=>ve(e),children:[t.jsxs("span",{className:"willa-tree-select-node-main",children:[t.jsx("span",{className:"willa-tree-select-node-label",children:e.label}),e.description?t.jsx("span",{className:"willa-tree-select-node-description",children:e.description}):null]}),t.jsx("span",{className:"willa-tree-select-node-check","aria-hidden":"true",children:v?t.jsx(Ie,{}):null})]})]},e.value)}):t.jsx("div",{className:"willa-tree-select-empty",children:P})})]}),document.body):null;return t.jsxs("span",{ref:q,className:k("willa-tree-select",`willa-tree-select--${c}`,`willa-tree-select--${j}`,o&&"willa-tree-select--open",le&&"willa-tree-select--invalid",M&&"willa-tree-select--disabled",ne),style:he,children:[t.jsxs("button",{...Q,ref:xe,id:$,type:"button",className:"willa-tree-select-trigger",disabled:M,"aria-haspopup":"tree","aria-expanded":o,"aria-controls":o?_:void 0,"aria-invalid":le||void 0,onBlur:oe,onClick:e=>{z==null||z(e),e.defaultPrevented||b(i=>!i)},onKeyDown:ke,children:[t.jsx("span",{className:k("willa-tree-select-value",!W&&"willa-tree-select-value--placeholder"),children:ye}),u&&W&&!M?t.jsx("span",{className:"willa-tree-select-clear",role:"button",tabIndex:-1,"aria-label":"清空选择",onClick:e=>{e.stopPropagation(),Se()},children:t.jsx(Ne,{})}):null,t.jsx(Ee,{className:"willa-tree-select-icon","aria-hidden":"true"})]}),C?t.jsx("input",{type:"hidden",name:C,value:E.join(","),readOnly:!0}):null,je]})});p.displayName="TreeSelect";const Pe=(l,s)=>Array.isArray(l)?l:l?s==="multiple"?l.split(",").filter(Boolean):[l]:[],Ce=(l,s)=>l.includes(s)?l.filter(r=>r!==s):[...l,s],De=l=>{const s=[],r=n=>{n.forEach(c=>{s.push(c),c.children&&r(c.children)})};return r(l),s},Be=(l,s,r)=>{const n=[],c=r.trim().toLowerCase(),j=c!=="",T=(R,m)=>{R.forEach(u=>{var f;const x=!!((f=u.children)!=null&&f.length),A=se(u,c),P=x?te(u.children??[],c):!1;(!j||A||P)&&(n.push({item:u,level:m,hasChildren:x}),x&&(j||s.includes(u.value))&&T(u.children??[],m+1))})};return T(l,0),n},te=(l,s)=>l.some(r=>se(r,s)||te(r.children??[],s)),se=(l,s)=>s?K(l.label).toLowerCase().includes(s)||K(l.description).toLowerCase().includes(s):!0,K=l=>l==null||typeof l=="boolean"?"":typeof l=="string"||typeof l=="number"?String(l):Array.isArray(l)?l.map(K).join(" "):"",Me=({width:l,style:s})=>l===void 0?s:{...s,width:l},ze=(l,s)=>{if(typeof l=="function"){l(s);return}l&&(l.current=s)},y=[{value:"workspace",label:"工作区",description:"团队共享资源",children:[{value:"workspace-docs",label:"产品文档",description:"PRD、设计稿和上线记录"},{value:"workspace-data",label:"数据报表",description:"用户反馈、埋点和业务指标"}]},{value:"knowledge",label:"知识库",description:"AI 可检索资料",children:[{value:"knowledge-component",label:"组件规范",description:"Willa 组件设计和 API 约定"},{value:"knowledge-style",label:"样式规则",description:"主题变量、CSS 和移动端规则"}]}],H={display:"grid",justifyItems:"center",gap:"0.9rem"},Le={display:"grid",gap:"0.8rem",width:"min(100%, 30rem)"},Oe=Ae({id:"tree-select",name:"TreeSelect",category:"form",packageName:"willa/TreeSelect",description:"用于从层级数据中选择目录、组织、分类或知识库节点。",imports:[{name:"TreeSelect",from:"willa/TreeSelect"}],css:"willa/TreeSelect.css",demo:{name:"TreeSelect",component:p,props:{items:y,defaultExpandedValues:["workspace","knowledge"],defaultValue:"knowledge-component",width:"min(100%, 30rem)"}},code:`
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
      `,content:t.jsx("div",{style:H,children:t.jsx(p,{items:y,defaultExpandedValues:["workspace","knowledge"],defaultValue:"knowledge-component",width:"min(100%, 30rem)"})})},{title:"多选目录",code:`
        <TreeSelect
          clearable
          mode="multiple"
          items={treeItems}
          defaultExpandedValues={["workspace", "knowledge"]}
          defaultValue={["workspace-docs", "knowledge-style"]}
          width="min(100%, 30rem)"
        />;
      `,content:t.jsx("div",{style:H,children:t.jsx(p,{clearable:!0,mode:"multiple",items:y,defaultExpandedValues:["workspace","knowledge"],defaultValue:["workspace-docs","knowledge-style"],width:"min(100%, 30rem)"})})},{title:"状态",code:`
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
      `,content:t.jsx("div",{style:H,children:t.jsxs("div",{style:Le,children:[t.jsx(p,{items:y,placeholder:"选择资料范围",width:"100%"}),t.jsx(p,{invalid:!0,items:y,placeholder:"请选择必填项",width:"100%"}),t.jsx(p,{disabled:!0,items:y,defaultValue:"workspace",width:"100%"})]})})}],props:[{name:"items",type:"Array<TreeSelectItem>",required:!0,description:"树形节点列表，节点可包含 children。"},{name:"mode",type:'"single" | "multiple"',description:"选择模式，默认单选。"},{name:"searchable",type:"boolean",description:"是否展示搜索输入框，默认开启。"},{name:"clearable",type:"boolean",description:"是否允许清空当前选择。"},{name:"defaultExpandedValues",type:"Array<string>",description:"默认展开的节点 value。"},{name:"value",type:"string | Array<string>",description:"受控选中值。"},{name:"defaultValue",type:"string | Array<string>",description:"默认选中值。"},{name:"width",type:"CSSProperties['width']",description:"自定义选择器宽度。"},{name:"renderValue",type:"(items: Array<TreeSelectItem>) => ReactNode",description:"自定义触发器里的选中值展示。"},{name:"onValueChange",type:"(value: string | Array<string>, items: Array<TreeSelectItem>) => void",description:"选择变化时触发。"}]});export{Oe as default};
