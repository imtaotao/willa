import{aD as s,aB as t,aC as Y,ap as E,e as m,D,R as Z,a1 as A,y as ee,H as te,am as ne,L as ie,j as oe}from"./index-C1QWwz82.js";/* empty css              */import{d as re}from"./defineDoc-DiUWnIsG.js";function d(i){const{items:r,trigger:l,open:N,defaultOpen:P=!1,onOpenChange:w,onSelect:x,size:V="md",side:k="bottom",align:R="start",offset:h=8,closeOnSelect:W=!0,ariaLabel:O="Menu",className:K,contentClassName:$}=i,C=s.useId(),L=N!==void 0,[q,U]=s.useState(P),u=N??q,[F,z]=s.useState(),M=s.useRef(null),j=s.useRef(null),B=s.useRef(null),y=s.useRef([]),G=s.useMemo(()=>r.filter(se),[r]),b=s.useCallback(e=>{L||U(e),w==null||w(e)},[L,w]),v=s.useCallback(()=>{const e=M.current;if(!e||typeof window>"u")return;const o=e.getBoundingClientRect(),n=j.current,a=(n==null?void 0:n.offsetWidth)??o.width,c=(n==null?void 0:n.offsetHeight)??0,p=k==="bottom"?o.bottom+h:o.top-c-h,f=le(o,a,R);z({top:S(p,8,window.innerHeight-c-8),left:S(f,8,window.innerWidth-a-8),minWidth:Math.min(o.width,window.innerWidth-16)})},[R,h,k]),I=s.useCallback(()=>{b(!1)},[b]);s.useEffect(()=>{if(!u||typeof window>"u")return;B.current=document.activeElement instanceof HTMLElement?document.activeElement:null,v();const e=window.setTimeout(()=>{const a=H(y.current)[0];a==null||a.focus()},0),o=a=>{var p,f;const c=a.target;c instanceof Node&&((p=j.current)!=null&&p.contains(c)||(f=M.current)!=null&&f.contains(c)||I())},n=()=>v();return document.addEventListener("pointerdown",o),window.addEventListener("resize",n),window.addEventListener("scroll",n,!0),()=>{var a;window.clearTimeout(e),document.removeEventListener("pointerdown",o),window.removeEventListener("resize",n),window.removeEventListener("scroll",n,!0),(a=B.current)==null||a.focus(),B.current=null}},[I,u,v]),s.useEffect(()=>{u?v():z(void 0)},[u,v]);const _=e=>{var o,n;(n=(o=l.props).onClick)==null||n.call(o,e),e.defaultPrevented||b(!u)},J=e=>{var o,n;(n=(o=l.props).onKeyDown)==null||n.call(o,e),!e.defaultPrevented&&(e.key==="ArrowDown"||e.key==="Enter"||e.key===" ")&&(e.preventDefault(),b(!0))},Q=e=>{if(e.key==="Escape"){e.preventDefault(),I();return}const o=H(y.current);if(!o.length)return;const n=o.findIndex(f=>f===document.activeElement),a=o.length-1,c=n>=a?0:n+1,p=n<=0?a:n-1;e.key==="ArrowDown"&&(e.preventDefault(),o[c].focus()),e.key==="ArrowUp"&&(e.preventDefault(),o[p].focus()),e.key==="Home"&&(e.preventDefault(),o[0].focus()),e.key==="End"&&(e.preventDefault(),o[a].focus())},X=()=>{if(!s.isValidElement(l))return null;const e=l;return s.cloneElement(e,{ref:ce(e.props.ref,M),"aria-controls":u?C:void 0,"aria-expanded":u,"aria-haspopup":"menu",onClick:_,onKeyDown:J})};return y.current=[],t.jsxs("span",{className:E("willa-menu",K),children:[X(),u&&typeof document<"u"?Y.createPortal(t.jsxs("div",{ref:j,id:C,className:E("willa-menu-content",`willa-menu-content--${V}`,$),style:ue(F),role:"menu","aria-label":O,onKeyDown:Q,children:[r.map((e,o)=>e.type==="separator"?t.jsx("div",{className:"willa-menu-separator",role:"separator"},e.value??`separator-${o}`):t.jsxs("button",{ref:n=>{y.current[o]=n},className:E("willa-menu-item",e.danger&&"willa-menu-item--danger"),type:"button",role:"menuitem",disabled:e.disabled,onClick:()=>{var n;e.disabled||((n=e.onSelect)==null||n.call(e,e.value),x==null||x(e.value),W&&I())},children:[e.icon?t.jsx("span",{className:"willa-menu-item-icon","aria-hidden":"true",children:e.icon}):null,t.jsxs("span",{className:"willa-menu-item-content",children:[t.jsx("span",{className:"willa-menu-item-label",children:e.label}),e.description?t.jsx("span",{className:"willa-menu-item-description",children:e.description}):null]}),e.trailing?t.jsx("span",{className:"willa-menu-item-trailing",children:e.trailing}):null]},e.value)),G.length?null:t.jsx("div",{className:"willa-menu-empty",children:"暂无可选项"})]}),document.body):null]})}const ae=i=>i.type!=="separator",se=i=>ae(i)&&!i.disabled,H=i=>i.filter(r=>r!==null&&!r.disabled),le=(i,r,l)=>l==="center"?i.left+i.width/2-r/2:l==="end"?i.right-r:i.left,ue=i=>({top:i?`${i.top}px`:void 0,left:i?`${i.left}px`:void 0,minWidth:i?`${i.minWidth}px`:void 0,visibility:i?void 0:"hidden"}),S=(i,r,l)=>Math.min(Math.max(i,r),Math.max(r,l)),ce=(...i)=>r=>{i.forEach(l=>{if(l){if(typeof l=="function"){l(r);return}l.current=r}})},g=[{value:"edit",label:"编辑内容",icon:t.jsx(A,{})},{value:"export",label:"导出为 Markdown",icon:t.jsx(ee,{}),trailing:"⌘E"},{value:"open",label:"打开外部链接",icon:t.jsx(te,{})},{type:"separator"},{value:"delete",label:"删除记录",icon:t.jsx(ne,{}),danger:!0}],de=[{value:"draft",label:"生成草稿",description:"根据当前上下文补全文案。",icon:t.jsx(A,{})},{value:"settings",label:"调整生成参数",description:"切换模型、语气和输出长度。",icon:t.jsx(ie,{})},{value:"selected",label:"已选模式",description:"菜单项可以展示尾部状态。",trailing:t.jsx(oe,{})}],T={display:"flex",flexWrap:"wrap",gap:"0.75rem",alignItems:"center"},ge=re({id:"menu",name:"Menu",packageName:"willa/Menu",description:"用于更多操作、模式切换和 AI 产品中的轻量动作菜单。",imports:[{name:"Menu",from:"willa/Menu"},{name:"Button",from:"willa/Button"}],css:"willa/Menu.css",demo:{name:"Menu",component:d,props:{items:g,trigger:t.jsx(m,{variant:"outline",trailingIcon:t.jsx(D,{}),children:"更多操作"})}},code:`
    import {
      DotsHorizontalIcon,
      Pencil1Icon,
      TrashIcon,
    } from "@radix-ui/react-icons";
    import { Button } from "willa/Button";
    import { Menu } from "willa/Menu";
    import "willa/Button.css";
    import "willa/Menu.css";

    const items = [
      { value: "edit", label: "编辑内容", icon: <Pencil1Icon /> },
      { type: "separator" },
      { value: "delete", label: "删除记录", icon: <TrashIcon />, danger: true },
    ];

    <Menu
      items={items}
      trigger={
        <Button variant="outline" trailingIcon={<DotsHorizontalIcon />}>
          更多操作
        </Button>
      }
    />;
  `,sections:[{title:"基础菜单",code:`
        <div style={rowStyle}>
          <Menu
            items={basicItems}
            trigger={
              <Button variant="outline" trailingIcon={<DotsHorizontalIcon />}>
                更多操作
              </Button>
            }
          />
          <Menu
            items={basicItems}
            size="sm"
            trigger={
              <IconButton
                ariaLabel="打开操作菜单"
                icon={<DotsHorizontalIcon />}
                variant="outline"
              />
            }
          />
        </div>;
      `,content:t.jsxs("div",{style:T,children:[t.jsx(d,{items:g,trigger:t.jsx(m,{variant:"outline",trailingIcon:t.jsx(D,{}),children:"更多操作"})}),t.jsx(d,{items:g,size:"sm",trigger:t.jsx(Z,{ariaLabel:"打开操作菜单",icon:t.jsx(D,{}),variant:"outline"})})]})},{title:"描述和状态",code:`
        <Menu items={aiItems} trigger={<Button variant="soft">AI 生成模式</Button>} />;
      `,content:t.jsx(d,{items:de,trigger:t.jsx(m,{variant:"soft",children:"AI 生成模式"})})},{title:"对齐方式",code:`
        <div style={rowStyle}>
          <Menu
            align="start"
            items={basicItems}
            trigger={<Button variant="outline">左对齐</Button>}
          />
          <Menu
            align="center"
            items={basicItems}
            trigger={<Button variant="outline">居中</Button>}
          />
          <Menu
            align="end"
            items={basicItems}
            trigger={<Button variant="outline">右对齐</Button>}
          />
        </div>;
      `,content:t.jsxs("div",{style:T,children:[t.jsx(d,{align:"start",items:g,trigger:t.jsx(m,{variant:"outline",children:"左对齐"})}),t.jsx(d,{align:"center",items:g,trigger:t.jsx(m,{variant:"outline",children:"居中"})}),t.jsx(d,{align:"end",items:g,trigger:t.jsx(m,{variant:"outline",children:"右对齐"})})]})},{title:"禁用项",code:`
        <Menu
          items={[
            { value: "copy", label: "复制链接" },
            { value: "sync", label: "同步中", disabled: true },
            { value: "archive", label: "归档" },
          ]}
          trigger={<Button variant="outline">带禁用项</Button>}
        />;
      `,content:t.jsx(d,{items:[{value:"copy",label:"复制链接"},{value:"sync",label:"同步中",disabled:!0},{value:"archive",label:"归档"}],trigger:t.jsx(m,{variant:"outline",children:"带禁用项"})})}],props:[{name:"items",type:"Array<MenuItem>",required:!0,description:"菜单项列表。"},{name:"trigger",type:"ReactElement",required:!0,description:"触发菜单的元素，通常是 Button 或 IconButton。"},{name:"open",type:"boolean",description:"受控打开状态。"},{name:"defaultOpen",type:"boolean",defaultValue:"false",description:"非受控默认打开状态。"},{name:"onOpenChange",type:"(open: boolean) => void",description:"打开状态变化回调。"},{name:"onSelect",type:"(value: string) => void",description:"选择菜单项时触发。"},{name:"size",type:'"sm" | "md"',defaultValue:'"md"',description:"菜单尺寸。"},{name:"side",type:'"top" | "bottom"',defaultValue:'"bottom"',description:"菜单相对触发元素的展开方向。"},{name:"align",type:'"start" | "center" | "end"',defaultValue:'"start"',description:"菜单和触发元素的对齐方式。"},{name:"offset",type:"number",defaultValue:"8",description:"菜单与触发元素之间的距离。"},{name:"closeOnSelect",type:"boolean",defaultValue:"true",description:"选择菜单项后是否关闭菜单，默认为 true。"},{name:"ariaLabel",type:"string",defaultValue:'"Menu"',description:"菜单的可访问性名称。"},{name:"className",type:"string",description:"外层 className。"},{name:"contentClassName",type:"string",description:"菜单浮层 className。"},{name:"MenuItem.value",type:"string",required:!0,group:"MenuItem",description:"菜单项唯一值。"},{name:"MenuItem.label",type:"ReactNode",required:!0,group:"MenuItem",description:"菜单项主文案。"},{name:"MenuItem.description",type:"ReactNode",group:"MenuItem",description:"菜单项补充说明。"},{name:"MenuItem.icon",type:"ReactNode",group:"MenuItem",description:"菜单项左侧图标。"},{name:"MenuItem.trailing",type:"ReactNode",group:"MenuItem",description:"菜单项右侧内容。"},{name:"MenuItem.disabled",type:"boolean",group:"MenuItem",description:"是否禁用菜单项。"},{name:"MenuItem.danger",type:"boolean",group:"MenuItem",description:"是否展示为危险操作。"},{name:"MenuItem.onSelect",type:"(value: string) => void",group:"MenuItem",description:"单个菜单项的选择回调。"}]});export{ge as default};
