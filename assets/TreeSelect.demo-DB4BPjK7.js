import{b0 as y,a_ as l,p as Te,aL as D,m as je,aJ as Ie}from"./index-Bo8PUlF-.js";import{u as Ne,a as Ce,c as Ae,b as Re,S as Ee,C as Pe,h as De}from"./useComboboxState-CEnZQeuH.js";import{d as Le}from"./defineDoc-B4fQnlag.js";import"./floatingPanelParts-CluSa0RS.js";import"./useFloatingPanel-Kbff_vET.js";const L=".willa-tree-select-node",m=y.forwardRef((t,a)=>{const{items:s,mode:o="single",size:c="md",variant:b="outline",width:x,invalid:k=!1,searchable:h=!0,clearable:d=!1,placeholder:f="请选择",searchPlaceholder:V="搜索节点",emptyText:T="暂无节点",name:B,value:S,defaultValue:O,defaultExpandedValues:G=[],renderValue:U,onValueChange:X,onExpandedChange:j,className:Y,disabled:I,style:Z,id:q,onBlur:ee,onClick:N,onKeyDown:le,...C}=t,[r,te]=y.useState(G),ae=y.useMemo(()=>Ke(s),[s]),se=y.useMemo(()=>({expandedValues:r,items:s}),[r,s]),{clearValue:re,commitItem:ne,displayValue:ie,hasValue:Q,hiddenValue:ce,buttonId:z,closePanel:oe,listRef:de,open:v,panelId:A,panelRef:H,position:ue,query:g,rootRef:pe,scrollable:me,searchRef:we,setOpen:W,setQuery:he,triggerRef:R,handleTriggerKeyDown:fe,selectedValues:ge}=Ne({defaultValue:O,items:ae,mode:o,onValueChange:X,placeholder:f,renderValue:U,value:S,contentVersion:se,fallbackHeight:340,id:q,minWidth:300,searchable:h}),E=y.useMemo(()=>Me(s,r,g),[s,r,g]),ye=Be({width:x,style:Z}),_=k||C["aria-invalid"]===!0||C["aria-invalid"]==="true",$=d&&Q&&!I,be=e=>{R.current=e,Ie(a,e)},P=e=>{te(e),j==null||j(e)},xe=e=>{const n=r.includes(e.value)?r.filter(u=>u!==e.value):[...r,e.value];P(n)},Se=e=>{ne(e)&&o==="single"&&W(!1)},ve=e=>{const n=e.target instanceof HTMLElement?e.target.closest(L):null;if(n&&g.trim()===""&&(e.key==="ArrowRight"||e.key==="ArrowLeft")){const u=n.dataset.value,i=E.find(({item:p})=>p.value===u);if(i!=null&&i.hasChildren){const p=r.includes(i.item.value);if(e.key==="ArrowRight"&&!p){e.preventDefault(),P([...r,i.item.value]);return}if(e.key==="ArrowLeft"&&p){e.preventDefault(),P(r.filter(Ve=>Ve!==i.item.value));return}}}De(e,{panel:H.current,selector:L,onClose:oe,trigger:R.current})},ke=l.jsx(Ce,{open:v,children:l.jsxs(Ae,{panelRef:H,id:A,className:"willa-tree-select-panel",role:"tree",multiselectable:o==="multiple",labelledBy:z,position:ue,onKeyDown:ve,children:[h?l.jsx(Re,{className:"willa-tree-select-search",inputRef:we,value:g,placeholder:V,onChange:e=>he(e.currentTarget.value)}):null,l.jsx(Ee,{listRef:de,className:"willa-tree-select-list",scrollableClassName:"willa-tree-select-list--scrollable",scrollable:me,children:E.length>0?E.map(({item:e,level:n,hasChildren:u})=>{const i=ge.includes(e.value),p=g.trim()!==""||r.includes(e.value);return l.jsxs("div",{className:"willa-tree-select-row",style:{"--willa-tree-select-level":n},children:[l.jsx("button",{type:"button",className:"willa-tree-select-expand","aria-label":p?"收起节点":"展开节点","aria-hidden":!u,tabIndex:u?0:-1,onClick:()=>xe(e),children:u?l.jsx(Te,{className:D(p&&"willa-tree-select-expand-icon--open")}):null}),l.jsxs("button",{type:"button",className:D("willa-tree-select-node",i&&"willa-tree-select-node--selected"),role:"treeitem","data-value":e.value,"aria-selected":i,"aria-level":n+1,"aria-expanded":u?p:void 0,disabled:e.disabled,onClick:()=>Se(e),children:[l.jsxs("span",{className:"willa-tree-select-node-main",children:[l.jsx("span",{className:"willa-tree-select-node-label",children:e.label}),e.description?l.jsx("span",{className:"willa-tree-select-node-description",children:e.description}):null]}),l.jsx("span",{className:"willa-tree-select-node-check","aria-hidden":"true",children:i?l.jsx(je,{}):null})]})]},e.value)}):l.jsx("div",{className:"willa-tree-select-empty",children:T})})]})});return l.jsx(Pe,{rootRef:pe,className:D("willa-tree-select",`willa-tree-select--${c}`,`willa-tree-select--${b}`,v&&"willa-tree-select--open",_&&"willa-tree-select--invalid",$&&"willa-tree-select--has-clear",I&&"willa-tree-select--disabled",Y),style:ye,triggerProps:C,buttonRef:be,buttonId:z,panelId:A,popupRole:"tree",expanded:v,hasValue:Q,invalid:_,disabled:I,controls:v?A:void 0,displayValue:ie,placeholderClassName:"willa-tree-select-value--placeholder",triggerClassName:"willa-tree-select-trigger",valueClassName:"willa-tree-select-value",iconClassName:"willa-tree-select-icon",hasClear:$,clearClassName:"willa-tree-select-clear",clearLabel:"清空选择",triggerRef:R,hiddenName:B,hiddenValue:ce,onClear:re,onTriggerBlur:ee,onTriggerClick:e=>{N==null||N(e),e.defaultPrevented||W(n=>!n)},onTriggerKeyDown:e=>fe(e,{selector:L,onKeyDown:le}),children:ke})});m.displayName="TreeSelect";const Ke=t=>{const a=[],s=o=>{o.forEach(c=>{a.push(c),c.children&&s(c.children)})};return s(t),a},Me=(t,a,s)=>{const o=[],c=s.trim().toLowerCase(),b=c!=="",x=(k,h)=>{k.forEach(d=>{var S;const f=!!((S=d.children)!=null&&S.length),V=J(d,c),T=f?F(d.children??[],c):!1;(!b||V||T)&&(o.push({item:d,level:h,hasChildren:f}),f&&(b||a.includes(d.value))&&x(d.children??[],h+1))})};return x(t,0),o},F=(t,a)=>t.some(s=>J(s,a)||F(s.children??[],a)),J=(t,a)=>a?M(t.label).toLowerCase().includes(a)||M(t.description).toLowerCase().includes(a):!0,M=t=>t==null||typeof t=="boolean"?"":typeof t=="string"||typeof t=="number"?String(t):Array.isArray(t)?t.map(M).join(" "):"",Be=({width:t,style:a})=>t===void 0?a:{...a,width:t},w=[{value:"workspace",label:"工作区",description:"团队共享资源",children:[{value:"workspace-docs",label:"产品文档",description:"PRD、设计稿和上线记录"},{value:"workspace-data",label:"数据报表",description:"用户反馈、埋点和业务指标"}]},{value:"knowledge",label:"知识库",description:"AI 可检索资料",children:[{value:"knowledge-component",label:"组件规范",description:"Willa 组件设计和 API 约定"},{value:"knowledge-style",label:"样式规则",description:"主题变量、CSS 和移动端规则"}]}],K={display:"grid",justifyItems:"center",gap:"0.9rem"},Qe={display:"grid",gap:"0.8rem",width:"min(100%, 30rem)"},Fe=Le({id:"tree-select",name:"TreeSelect",category:"form",packageName:"willa/TreeSelect",description:"用于从层级数据中选择目录、组织、分类或知识库节点。",imports:[{name:"TreeSelect",from:"willa/TreeSelect"}],css:"willa/TreeSelect.css",demo:{name:"TreeSelect",component:m,props:{items:w,defaultExpandedValues:["workspace","knowledge"],defaultValue:"knowledge-component",width:"min(100%, 30rem)"}},code:`
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
      `,content:l.jsx("div",{style:K,children:l.jsx(m,{items:w,defaultExpandedValues:["workspace","knowledge"],defaultValue:"knowledge-component",width:"min(100%, 30rem)"})})},{title:"多选目录",code:`
        <TreeSelect
          clearable
          mode="multiple"
          items={treeItems}
          defaultExpandedValues={["workspace", "knowledge"]}
          defaultValue={["workspace-docs", "knowledge-style"]}
          width="min(100%, 30rem)"
        />;
      `,content:l.jsx("div",{style:K,children:l.jsx(m,{clearable:!0,mode:"multiple",items:w,defaultExpandedValues:["workspace","knowledge"],defaultValue:["workspace-docs","knowledge-style"],width:"min(100%, 30rem)"})})},{title:"状态",code:`
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
      `,content:l.jsx("div",{style:K,children:l.jsxs("div",{style:Qe,children:[l.jsx(m,{items:w,placeholder:"选择资料范围",width:"100%"}),l.jsx(m,{invalid:!0,items:w,placeholder:"请选择必填项",width:"100%"}),l.jsx(m,{disabled:!0,items:w,defaultValue:"workspace",width:"100%"})]})})}],props:[{name:"items",type:"Array<TreeSelectItem>",required:!0,description:"树形节点列表，节点可包含 children。"},{name:"mode",type:'"single" | "multiple"',defaultValue:'"single"',description:"选择模式，默认单选。"},{name:"searchable",type:"boolean",defaultValue:"true",description:"是否展示搜索输入框，默认开启。"},{name:"clearable",type:"boolean",defaultValue:"false",description:"是否允许清空当前选择。"},{name:"defaultExpandedValues",type:"Array<string>",defaultValue:"[]",description:"默认展开的节点 value。"},{name:"value",type:"string | Array<string>",description:"受控选中值。"},{name:"defaultValue",type:"string | Array<string>",defaultValue:'mode === "multiple" ? [] : ""',description:"默认选中值。"},{name:"width",type:"CSSProperties['width']",description:"自定义选择器宽度。"},{name:"renderValue",type:"(items: Array<TreeSelectItem>) => ReactNode",description:"自定义触发器里的选中值展示。"},{name:"onValueChange",type:"(value: string | Array<string>, items: Array<TreeSelectItem>) => void",description:"选择变化时触发。"}]});export{Fe as default};
