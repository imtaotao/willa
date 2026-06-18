import{aQ as a,ay as T,aO as t,aP as Y,az as E,aC as Z,g as m,D as N,T as ee,a6 as S,E as te,J as ne,at as ie,N as oe,l as re}from"./index-DnGdOvog.js";/* empty css              */import{d as ae}from"./defineDoc-Bz2jd_Vg.js";function c(o){const{items:s,trigger:d,open:D,defaultOpen:A=!1,onOpenChange:w,onSelect:x,size:O="md",side:k="bottom",align:R="start",offset:h=8,closeOnSelect:V=!0,ariaLabel:W="Menu",className:K,contentClassName:$}=o,C=a.useId(),L=D!==void 0,[q,U]=a.useState(A),l=D??q,[F,z]=a.useState(),M=a.useRef(null),j=a.useRef(null),B=a.useRef(null),y=a.useRef([]),G=a.useMemo(()=>s.filter(le),[s]),b=a.useCallback(e=>{L||U(e),w==null||w(e)},[L,w]),v=a.useCallback(()=>{const e=M.current;if(!e||typeof window>"u")return;const i=e.getBoundingClientRect(),n=j.current,r=(n==null?void 0:n.offsetWidth)??i.width,u=(n==null?void 0:n.offsetHeight)??0,p=k==="bottom"?i.bottom+h:i.top-u-h,f=ue(i,r,R);z({top:T(p,8,Math.max(8,window.innerHeight-u-8)),left:T(f,8,Math.max(8,window.innerWidth-r-8)),minWidth:Math.min(i.width,window.innerWidth-16)})},[R,h,k]),I=a.useCallback(()=>{b(!1)},[b]);a.useEffect(()=>{if(!l||typeof window>"u")return;B.current=document.activeElement instanceof HTMLElement?document.activeElement:null,v();const e=window.setTimeout(()=>{const r=H(y.current)[0];r==null||r.focus()},0),i=r=>{var p,f;const u=r.target;u instanceof Node&&((p=j.current)!=null&&p.contains(u)||(f=M.current)!=null&&f.contains(u)||I())},n=()=>v();return document.addEventListener("pointerdown",i),window.addEventListener("resize",n),window.addEventListener("scroll",n,!0),()=>{var r;window.clearTimeout(e),document.removeEventListener("pointerdown",i),window.removeEventListener("resize",n),window.removeEventListener("scroll",n,!0),(r=B.current)==null||r.focus(),B.current=null}},[I,l,v]),a.useEffect(()=>{l?v():z(void 0)},[l,v]);const J=e=>{var i,n;(n=(i=d.props).onClick)==null||n.call(i,e),e.defaultPrevented||b(!l)},Q=e=>{var i,n;(n=(i=d.props).onKeyDown)==null||n.call(i,e),!e.defaultPrevented&&(e.key==="ArrowDown"||e.key==="Enter"||e.key===" ")&&(e.preventDefault(),b(!0))},_=e=>{if(e.key==="Escape"){e.preventDefault(),I();return}const i=H(y.current);if(!i.length)return;const n=i.findIndex(f=>f===document.activeElement),r=i.length-1,u=n>=r?0:n+1,p=n<=0?r:n-1;e.key==="ArrowDown"&&(e.preventDefault(),i[u].focus()),e.key==="ArrowUp"&&(e.preventDefault(),i[p].focus()),e.key==="Home"&&(e.preventDefault(),i[0].focus()),e.key==="End"&&(e.preventDefault(),i[r].focus())},X=()=>{if(!a.isValidElement(d))return null;const e=d;return a.cloneElement(e,{ref:Z(e.props.ref,M),"aria-controls":l?C:void 0,"aria-expanded":l,"aria-haspopup":"menu",onClick:J,onKeyDown:Q})};return y.current=[],t.jsxs("span",{className:E("willa-menu",K),children:[X(),l&&typeof document<"u"?Y.createPortal(t.jsxs("div",{ref:j,id:C,className:E("willa-menu-content",`willa-menu-content--${O}`,$),style:ce(F),role:"menu","aria-label":W,onKeyDown:_,children:[s.map((e,i)=>e.type==="separator"?t.jsx("div",{className:"willa-menu-separator",role:"separator"},e.value??`separator-${i}`):t.jsxs("button",{ref:n=>{y.current[i]=n},className:E("willa-menu-item",e.danger&&"willa-menu-item--danger"),type:"button",role:"menuitem",disabled:e.disabled,onClick:()=>{var n;e.disabled||((n=e.onSelect)==null||n.call(e,e.value),x==null||x(e.value),V&&I())},children:[e.icon?t.jsx("span",{className:"willa-menu-item-icon","aria-hidden":"true",children:e.icon}):null,t.jsxs("span",{className:"willa-menu-item-content",children:[t.jsx("span",{className:"willa-menu-item-label",children:e.label}),e.description?t.jsx("span",{className:"willa-menu-item-description",children:e.description}):null]}),e.trailing?t.jsx("span",{className:"willa-menu-item-trailing",children:e.trailing}):null]},e.value)),G.length?null:t.jsx("div",{className:"willa-menu-empty",children:"暂无可选项"})]}),document.body):null]})}const se=o=>o.type!=="separator",le=o=>se(o)&&!o.disabled,H=o=>o.filter(s=>s!==null&&!s.disabled),ue=(o,s,d)=>d==="center"?o.left+o.width/2-s/2:d==="end"?o.right-s:o.left,ce=o=>({top:o?`${o.top}px`:void 0,left:o?`${o.left}px`:void 0,minWidth:o?`${o.minWidth}px`:void 0,visibility:o?void 0:"hidden"}),g=[{value:"edit",label:"编辑内容",icon:t.jsx(S,{})},{value:"export",label:"导出为 Markdown",icon:t.jsx(te,{}),trailing:"⌘E"},{value:"open",label:"打开外部链接",icon:t.jsx(ne,{})},{type:"separator"},{value:"delete",label:"删除记录",icon:t.jsx(ie,{}),danger:!0}],de=[{value:"draft",label:"生成草稿",description:"根据当前上下文补全文案。",icon:t.jsx(S,{})},{value:"settings",label:"调整生成参数",description:"切换模型、语气和输出长度。",icon:t.jsx(oe,{})},{value:"selected",label:"已选模式",description:"菜单项可以展示尾部状态。",trailing:t.jsx(re,{})}],P={display:"flex",flexWrap:"wrap",gap:"0.75rem",alignItems:"center"},ge=ae({id:"menu",name:"Menu",packageName:"willa/Menu",description:"用于更多操作、模式切换和 AI 产品中的轻量动作菜单。",imports:[{name:"Menu",from:"willa/Menu"},{name:"Button",from:"willa/Button"}],css:"willa/Menu.css",demo:{name:"Menu",component:c,props:{items:g,trigger:t.jsx(m,{variant:"outline",trailingIcon:t.jsx(N,{}),children:"更多操作"})}},code:`
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
      `,content:t.jsxs("div",{style:P,children:[t.jsx(c,{items:g,trigger:t.jsx(m,{variant:"outline",trailingIcon:t.jsx(N,{}),children:"更多操作"})}),t.jsx(c,{items:g,size:"sm",trigger:t.jsx(ee,{ariaLabel:"打开操作菜单",icon:t.jsx(N,{}),variant:"outline"})})]})},{title:"描述和状态",code:`
        <Menu items={aiItems} trigger={<Button variant="soft">AI 生成模式</Button>} />;
      `,content:t.jsx(c,{items:de,trigger:t.jsx(m,{variant:"soft",children:"AI 生成模式"})})},{title:"对齐方式",code:`
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
      `,content:t.jsxs("div",{style:P,children:[t.jsx(c,{align:"start",items:g,trigger:t.jsx(m,{variant:"outline",children:"左对齐"})}),t.jsx(c,{align:"center",items:g,trigger:t.jsx(m,{variant:"outline",children:"居中"})}),t.jsx(c,{align:"end",items:g,trigger:t.jsx(m,{variant:"outline",children:"右对齐"})})]})},{title:"禁用项",code:`
        <Menu
          items={[
            { value: "copy", label: "复制链接" },
            { value: "sync", label: "同步中", disabled: true },
            { value: "archive", label: "归档" },
          ]}
          trigger={<Button variant="outline">带禁用项</Button>}
        />;
      `,content:t.jsx(c,{items:[{value:"copy",label:"复制链接"},{value:"sync",label:"同步中",disabled:!0},{value:"archive",label:"归档"}],trigger:t.jsx(m,{variant:"outline",children:"带禁用项"})})}],props:[{name:"items",type:"Array<MenuItem>",required:!0,description:"菜单项列表。"},{name:"trigger",type:"ReactElement",required:!0,description:"触发菜单的元素，通常是 Button 或 IconButton。"},{name:"open",type:"boolean",description:"受控打开状态。"},{name:"defaultOpen",type:"boolean",defaultValue:"false",description:"非受控默认打开状态。"},{name:"onOpenChange",type:"(open: boolean) => void",description:"打开状态变化回调。"},{name:"onSelect",type:"(value: string) => void",description:"选择菜单项时触发。"},{name:"size",type:'"sm" | "md"',defaultValue:'"md"',description:"菜单尺寸。"},{name:"side",type:'"top" | "bottom"',defaultValue:'"bottom"',description:"菜单相对触发元素的展开方向。"},{name:"align",type:'"start" | "center" | "end"',defaultValue:'"start"',description:"菜单和触发元素的对齐方式。"},{name:"offset",type:"number",defaultValue:"8",description:"菜单与触发元素之间的距离。"},{name:"closeOnSelect",type:"boolean",defaultValue:"true",description:"选择菜单项后是否关闭菜单，默认为 true。"},{name:"ariaLabel",type:"string",defaultValue:'"Menu"',description:"菜单的可访问性名称。"},{name:"className",type:"string",description:"外层 className。"},{name:"contentClassName",type:"string",description:"菜单浮层 className。"},{name:"MenuItem.value",type:"string",required:!0,group:"MenuItem",description:"菜单项唯一值。"},{name:"MenuItem.label",type:"ReactNode",required:!0,group:"MenuItem",description:"菜单项主文案。"},{name:"MenuItem.description",type:"ReactNode",group:"MenuItem",description:"菜单项补充说明。"},{name:"MenuItem.icon",type:"ReactNode",group:"MenuItem",description:"菜单项左侧图标。"},{name:"MenuItem.trailing",type:"ReactNode",group:"MenuItem",description:"菜单项右侧内容。"},{name:"MenuItem.disabled",type:"boolean",group:"MenuItem",description:"是否禁用菜单项。"},{name:"MenuItem.danger",type:"boolean",group:"MenuItem",description:"是否展示为危险操作。"},{name:"MenuItem.onSelect",type:"(value: string) => void",group:"MenuItem",description:"单个菜单项的选择回调。"}]});export{ge as default};
