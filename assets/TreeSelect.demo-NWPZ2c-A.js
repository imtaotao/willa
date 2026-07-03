import{d as e,l as t,p as n,u as r}from"./aidly.esm-bundler-DaTrP4tr.js";import{u as i}from"./react-icons.esm-mVdwEXuX.js";import{C as a}from"./src-D2lZkBJ2.js";import{t as o}from"./defineDoc-Cid5xIoZ.js";import{n as s}from"./floatingPanelParts-CvYlqcGS.js";import{t as ee}from"./Tree-Ddp4tRwF.js";import{a as c,i as l,n as te,s as ne,t as re}from"./useComboboxState-Hn087woB.js";var u=n(e()),d=n(r()),f=t(),p=`.willa-tree-select-tree .willa-tree-node`,m=(0,u.forwardRef)(function(e,t){let{items:n,mode:r=`single`,size:o=`md`,variant:m=`outline`,width:_,invalid:v=!1,searchable:y=!0,clearable:b=!1,placeholder:x=`请选择`,searchPlaceholder:S=`搜索节点`,emptyText:C=`暂无节点`,leafOnly:w=!1,showPath:T=!1,name:ue,value:de,defaultValue:fe,defaultExpandedValues:pe=[],renderValue:E,onValueChange:D,onExpandedChange:O,className:k,disabled:A,style:j,id:M,onBlur:N,onClick:P,onKeyDown:F,...I}=e,[L,R]=(0,u.useState)(pe),z=(0,u.useMemo)(()=>oe(n),[n]),B=(0,u.useMemo)(()=>g(n,{leafOnly:w}),[n,w]),V=(0,u.useMemo)(()=>ce(n),[n]),me=(0,u.useMemo)(()=>{if(E)return E;if(T)return e=>le(e,V,r)},[r,V,E,T]),he=(0,u.useMemo)(()=>({expandedValues:L,items:n}),[L,n]),{clearValue:ge,commitItem:_e,displayValue:ve,hasValue:H,hiddenValue:ye,buttonId:be,closePanel:U,listRef:xe,open:W,panelId:G,panelRef:K,position:Se,query:q,rootRef:Ce,scrollable:we,searchRef:Te,setOpen:J,setQuery:Ee,triggerRef:Y,handleTriggerKeyDown:De,selectedValues:Oe}=re({defaultValue:fe,items:h(n),mode:r,onValueChange:D,placeholder:x,renderValue:me,value:de,contentVersion:he,fallbackHeight:340,id:M,minWidth:300,searchable:y}),ke=q.trim()!==``,X=(0,u.useMemo)(()=>ie(B,q),[B,q]),Ae=(0,u.useMemo)(()=>ae(X),[X]),je=ke?Ae:L,Me=se({width:_,style:j}),Z=v||I[`aria-invalid`]===!0||I[`aria-invalid`]===`true`,Q=b&&H&&!A,Ne=e=>{Y.current=e,a(t,e)},Pe=e=>{R(e),O?.(e)},$=(0,f.jsx)(l,{open:W,children:(0,f.jsxs)(s,{panelRef:K,id:G,className:`willa-tree-select-panel`,role:`presentation`,position:Se,onKeyDown:e=>{if(e.key===`Escape`){U(),Y.current?.focus();return}e.target instanceof HTMLElement&&e.target.closest(p)!==null||ne(e,{panel:K.current,selector:p,onClose:U,trigger:Y.current})},children:[y?(0,f.jsx)(c,{className:`willa-tree-select-search`,inputRef:Te,value:q,placeholder:S,onChange:e=>Ee(e.currentTarget.value)}):null,(0,f.jsx)(`div`,{ref:xe,className:(0,d.default)(`willa-tree-select-list`,we&&`willa-tree-select-list--scrollable`),children:(0,f.jsx)(ee,{className:`willa-tree-select-tree`,items:X,size:o,selectedKeys:Oe,expandedKeys:je,selectionMode:r,selectable:!0,expandOnClick:w,emptyText:C,renderExtra:({selected:e})=>e?(0,f.jsx)(i,{"aria-hidden":`true`}):null,onExpandedChange:e=>{let t=e.map(e=>String(e));Pe(t)},onSelectedChange:(e,t)=>{let n=z.get(String(t.key));n&&_e(n)&&r===`single`&&J(!1)}})})]})});return(0,f.jsx)(te,{rootRef:Ce,className:(0,d.default)(`willa-tree-select`,`willa-tree-select--${o}`,`willa-tree-select--${m}`,W&&`willa-tree-select--open`,Z&&`willa-tree-select--invalid`,Q&&`willa-tree-select--has-clear`,A&&`willa-tree-select--disabled`,k),style:Me,triggerProps:I,buttonRef:Ne,buttonId:be,panelId:G,popupRole:`tree`,expanded:W,hasValue:H,invalid:Z,disabled:A,controls:W?G:void 0,displayValue:ve,placeholderClassName:`willa-tree-select-value--placeholder`,triggerClassName:`willa-tree-select-trigger`,valueClassName:`willa-tree-select-value`,iconClassName:`willa-tree-select-icon`,hasClear:Q,clearClassName:`willa-tree-select-clear`,clearLabel:`清空选择`,triggerRef:Y,hiddenName:ue,hiddenValue:ye,onClear:ge,onTriggerBlur:N,onTriggerClick:e=>{P?.(e),e.defaultPrevented||J(e=>!e)},onTriggerKeyDown:e=>De(e,{selector:p,onKeyDown:F}),children:$})});m.displayName=`TreeSelect`;var h=e=>{let t=[],n=e=>{e.forEach(e=>{t.push(e),e.children&&n(e.children)})};return n(e),t},g=(e,t)=>e.map(e=>{let n=!!e.children?.length;return{key:e.value,title:e.label,description:e.description,disabled:e.disabled,selectable:t.leafOnly&&n?!1:void 0,children:e.children?.length?g(e.children,t):void 0}}),ie=(e,t)=>{let n=t.trim().toLowerCase();return n?(e=>e.flatMap(e=>{let t=v(e.title).toLowerCase().includes(n)||v(e.description).toLowerCase().includes(n),r=e.children?.length?_(e.children,n):!1;return!t&&!r?[]:[e]}))(e):e},_=(e,t)=>e.some(e=>v(e.title).toLowerCase().includes(t)||v(e.description).toLowerCase().includes(t)||_(e.children??[],t)),ae=e=>{let t=[],n=e=>{e.forEach(e=>{e.children?.length&&(t.push(String(e.key)),n(e.children))})};return n(e),t},oe=e=>{let t=new Map,n=e=>{e.forEach(e=>{t.set(e.value,e),e.children?.length&&n(e.children)})};return n(e),t},v=e=>e==null||typeof e==`boolean`?``:typeof e==`string`||typeof e==`number`?String(e):Array.isArray(e)?e.map(v).join(` `):``,se=({width:e,style:t})=>e===void 0?t:{...t,width:e},ce=e=>{let t=new Map,n=(e,r)=>{e.forEach(e=>{let i=v(e.label)||e.value,a=[...r,i];t.set(e.value,a.join(` / `)),e.children?.length&&n(e.children,a)})};return n(e,[]),t},le=(e,t,n)=>{if(e.length===0)return``;let r=e.map(e=>t.get(e.value)??v(e.label)??e.value);return n===`single`?r[0]??``:r.join(`，`)},y=[{value:`workspace`,label:`工作区`,description:`团队共享资源`,children:[{value:`workspace-docs`,label:`产品文档`,description:`PRD、设计稿和上线记录`},{value:`workspace-data`,label:`数据报表`,description:`用户反馈、埋点和业务指标`}]},{value:`knowledge`,label:`知识库`,description:`AI 可检索资料`,children:[{value:`knowledge-component`,label:`组件规范`,description:`Willa 组件设计和 API 约定`},{value:`knowledge-style`,label:`样式规则`,description:`主题变量、CSS 和移动端规则`}]}],b=[{value:`docs`,label:`文档中心`,description:`面向产品、设计和研发的内容入口`,children:[{value:`docs-guides`,label:`指南`,description:`安装、迁移和接入说明`,children:[{value:`docs-guides-install`,label:`安装与使用`,description:`项目接入和运行时说明`},{value:`docs-guides-migration`,label:`迁移清单`,description:`替换旧组件时的检查项`}]},{value:`docs-releases`,label:`发布记录`,description:`版本、变更和发布时间线`}]},{value:`assets`,label:`资源库`,description:`可复用的素材与附件`,children:[{value:`assets-images`,label:`图片`,description:`截图、插图和封面`},{value:`assets-files`,label:`文件`,description:`PDF、CSV 和文档附件`}]}],x={display:`grid`,gap:`0.8rem`,width:`min(100%, 30rem)`},S={display:`grid`,justifyItems:`center`,gap:`0.9rem`},C=o({id:`tree-select`,name:`TreeSelect`,category:`form`,packageName:`willa/TreeSelect`,description:`用于从层级数据中选择目录、组织、分类或知识库节点；需要级联式路径展示时可配合 leafOnly 和 showPath。`,imports:[{name:`TreeSelect`,from:`willa/TreeSelect`}],css:`willa/TreeSelect.css`,demo:{name:`TreeSelect`,component:m,props:{items:y,defaultExpandedValues:[`workspace`,`knowledge`],defaultValue:`knowledge-component`,width:`min(100%, 30rem)`}},code:`
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
  `,sections:[{title:`基础示例`,code:`
        <TreeSelect
          items={treeItems}
          defaultExpandedValues={["workspace", "knowledge"]}
          defaultValue="knowledge-component"
          width="min(100%, 30rem)"
        />;
      `,content:(0,f.jsx)(`div`,{style:S,children:(0,f.jsx)(m,{items:y,defaultExpandedValues:[`workspace`,`knowledge`],defaultValue:`knowledge-component`,width:`min(100%, 30rem)`})})},{title:`三层级缩进`,code:`
        <TreeSelect
          items={treeItemsDeep}
          showPath
          defaultExpandedValues={["docs", "docs-guides", "assets"]}
          defaultValue="docs-guides-install"
          width="min(100%, 30rem)"
        />;
      `,content:(0,f.jsx)(`div`,{style:S,children:(0,f.jsx)(m,{items:b,showPath:!0,defaultExpandedValues:[`docs`,`docs-guides`,`assets`],defaultValue:`docs-guides-install`,width:`min(100%, 30rem)`})})},{title:`多选目录`,code:`
        <TreeSelect
          clearable
          mode="multiple"
          items={treeItems}
          defaultExpandedValues={["workspace", "knowledge"]}
          defaultValue={["workspace-docs", "knowledge-style"]}
          width="min(100%, 30rem)"
        />;
      `,content:(0,f.jsx)(`div`,{style:S,children:(0,f.jsx)(m,{clearable:!0,mode:`multiple`,items:y,defaultExpandedValues:[`workspace`,`knowledge`],defaultValue:[`workspace-docs`,`knowledge-style`],width:`min(100%, 30rem)`})})},{title:`尺寸与外观`,code:`
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
      `,content:(0,f.jsx)(`div`,{style:S,children:(0,f.jsxs)(`div`,{style:x,children:[(0,f.jsx)(m,{size:`sm`,items:y,defaultExpandedValues:[`workspace`,`knowledge`],defaultValue:`workspace-docs`,width:`100%`}),(0,f.jsx)(m,{items:y,defaultExpandedValues:[`workspace`,`knowledge`],defaultValue:`knowledge-component`,width:`100%`}),(0,f.jsx)(m,{size:`lg`,variant:`soft`,items:y,defaultExpandedValues:[`workspace`,`knowledge`],defaultValue:`workspace-data`,width:`100%`})]})})},{title:`级联分类`,code:`
        <TreeSelect
          items={treeItems}
          leafOnly
          showPath
          defaultExpandedValues={["workspace", "knowledge"]}
          defaultValue="knowledge-component"
          width="min(100%, 30rem)"
        />;
      `,content:(0,f.jsx)(`div`,{style:S,children:(0,f.jsx)(m,{items:y,leafOnly:!0,showPath:!0,defaultExpandedValues:[`workspace`,`knowledge`],defaultValue:`knowledge-component`,width:`min(100%, 30rem)`})})},{title:`自定义值展示`,code:`
        <TreeSelect
          mode="multiple"
          items={treeItems}
          defaultExpandedValues={["workspace", "knowledge"]}
          defaultValue={["workspace-docs", "knowledge-component"]}
          renderValue={(items) => \`已选择 \${items.length} 个节点\`}
          width="min(100%, 30rem)"
        />;
      `,content:(0,f.jsx)(`div`,{style:S,children:(0,f.jsx)(m,{mode:`multiple`,items:y,defaultExpandedValues:[`workspace`,`knowledge`],defaultValue:[`workspace-docs`,`knowledge-component`],renderValue:e=>`已选择 ${e.length} 个节点`,width:`min(100%, 30rem)`})})},{title:`状态`,code:`
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
      `,content:(0,f.jsx)(`div`,{style:S,children:(0,f.jsxs)(`div`,{style:{display:`grid`,gap:`0.8rem`,width:`min(100%, 30rem)`},children:[(0,f.jsx)(m,{items:y,placeholder:`选择资料范围`,width:`100%`}),(0,f.jsx)(m,{invalid:!0,items:y,placeholder:`请选择必填项`,width:`100%`}),(0,f.jsx)(m,{disabled:!0,items:y,defaultValue:`workspace`,width:`100%`})]})})}],props:[{name:`items`,type:`Array<TreeSelectItem>`,required:!0,description:`树形节点列表，节点可包含 children。`},{name:`mode`,type:`"single" | "multiple"`,defaultValue:`"single"`,description:`选择模式，默认单选。`},{name:`size`,type:`"sm" | "md" | "lg"`,defaultValue:`"md"`,description:`选择器尺寸。`},{name:`variant`,type:`"outline" | "soft"`,defaultValue:`"outline"`,description:`选择器外观变体。`},{name:`searchable`,type:`boolean`,defaultValue:`true`,description:`是否展示搜索输入框，默认开启。`},{name:`leafOnly`,type:`boolean`,defaultValue:`false`,description:`是否只允许选择叶子节点，非叶子节点点击时仅展开/收起。`},{name:`showPath`,type:`boolean`,defaultValue:`false`,description:`是否在触发器中显示完整路径。`},{name:`clearable`,type:`boolean`,defaultValue:`false`,description:`是否允许清空当前选择。`},{name:`defaultExpandedValues`,type:`Array<string>`,defaultValue:`[]`,description:`默认展开的节点 value。`},{name:`value`,type:`string | Array<string>`,description:`受控选中值。`},{name:`defaultValue`,type:`string | Array<string>`,defaultValue:`mode === "multiple" ? [] : ""`,description:`默认选中值。`},{name:`width`,type:`CSSProperties['width']`,description:`自定义选择器宽度。`},{name:`renderValue`,type:`(items: Array<TreeSelectItem>) => ReactNode`,description:`自定义触发器里的选中值展示。`},{name:`onValueChange`,type:`(value: string | Array<string>, items: Array<TreeSelectItem>) => void`,description:`选择变化时触发。`},{name:`emptyText`,type:`ReactNode`,description:`空态文案。`},{name:`invalid`,type:`boolean`,description:`是否无效状态。`},{name:`name`,type:`string`,description:`字段名。`},{name:`onExpandedChange`,type:`((values: Array<string>) => void)`,description:`对应事件回调。`},{name:`placeholder`,type:`string`,description:`占位文本。`},{name:`searchPlaceholder`,type:`string`,description:`搜索输入占位文本。`}]});export{C as default};