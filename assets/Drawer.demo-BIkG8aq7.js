import{aF as n,aE as ce,aD as e,R as de,u as ue,ar as j,e as o,aB as me,aG as pe,O as fe,a7 as we,aj as he,U as S,L as xe}from"./index-D5uFLOdF.js";import{F as P}from"./index-CGTevsGU.js";/* empty css              *//* empty css              *//* empty css              */import{d as ge}from"./defineDoc-Bhi9w6ym.js";const be=["a[href]","button:not([disabled])","textarea:not([disabled])","input:not([disabled])","select:not([disabled])","[tabindex]:not([tabindex='-1'])"].join(",");function d(i){const{open:v,defaultOpen:$,trigger:c,title:f,description:w,children:K,footer:D,extra:C,placement:h="right",size:A="md",width:U,height:W,closeText:q="取消",confirmText:E,confirmDisabled:N=!1,confirmLoading:F=!1,ariaLabel:H,closeOnOverlayClick:M=!0,closeOnEscape:J=!0,showCloseButton:Q=!0,className:X,overlayClassName:Y,panelClassName:Z,onConfirm:u,onOpenChange:m}=i,B=v!==void 0,[ee,te]=n.useState($??!1),[k,p]=n.useState(!1),l=v??ee,_=n.useId(),R=f?`${_}-title`:void 0,T=w?`${_}-description`:void 0,x=n.useRef(null),g=n.useRef(null),b=n.useCallback(t=>{B||te(t),m==null||m(t)},[B,m]),s=n.useCallback(()=>{b(!1)},[b]);n.useEffect(()=>{if(!l||typeof document>"u")return;const t=document.body.style.overflow;g.current=document.activeElement instanceof HTMLElement?document.activeElement:null,document.body.style.overflow="hidden";const a=window.setTimeout(()=>{const r=x.current;if(!r)return;(L(r)[0]??r).focus()},0);return()=>{var r;window.clearTimeout(a),document.body.style.overflow=t,(r=g.current)==null||r.focus(),g.current=null}},[l]),n.useEffect(()=>{l||p(!1)},[l]);const re=t=>{var a,r;(r=c==null?void 0:(a=c.props).onClick)==null||r.call(a,t),t.defaultPrevented||b(!0)},ne=t=>{!M||t.target!==t.currentTarget||s()},ae=t=>{if(t.key==="Escape"&&J){t.stopPropagation(),s();return}if(t.key!=="Tab")return;const a=x.current;if(!a)return;const r=L(a);if(r.length===0){t.preventDefault(),a.focus();return}const y=r[0],I=r[r.length-1],z=document.activeElement;if(t.shiftKey&&z===y){t.preventDefault(),I.focus();return}!t.shiftKey&&z===I&&(t.preventDefault(),y.focus())},oe=()=>{if(!(N||F||k))try{const t=u==null?void 0:u();if(me(t)){p(!0),t.then(()=>{s()}).catch(()=>{p(!1)});return}s()}catch{p(!1)}},ie=n.isValidElement(c)?n.cloneElement(c,{"aria-expanded":l,"aria-haspopup":"dialog",onClick:re}):null,O=D??(D===void 0&&(E!==void 0||u)?e.jsxs(e.Fragment,{children:[e.jsx(o,{type:"button",variant:"ghost",onClick:s,children:q}),e.jsx(o,{type:"button",variant:"solid",loading:F||k,disabled:N,onClick:oe,children:E??"确认"})]}):null),V=h==="left"||h==="right"?U:W,le=V===void 0?void 0:{"--willa-drawer-size":ye(V)},se=l&&typeof document<"u"?ce.createPortal(e.jsx("div",{className:j("willa-drawer",`willa-drawer--${h}`,Y),onClick:ne,children:e.jsxs("div",{className:j("willa-drawer__panel",`willa-drawer__panel--${A}`,Z),style:le,ref:x,role:"dialog","aria-modal":"true","aria-label":H,"aria-labelledby":R,"aria-describedby":T,tabIndex:-1,onKeyDown:ae,children:[e.jsxs("div",{className:"willa-drawer__header",children:[e.jsxs("div",{className:"willa-drawer__heading",children:[f?e.jsx("h2",{className:"willa-drawer__title",id:R,children:f}):null,w?e.jsx("p",{className:"willa-drawer__description",id:T,children:w}):null]}),C?e.jsx("div",{className:"willa-drawer__extra",children:C}):null,Q?e.jsx(de,{ariaLabel:"关闭抽屉",icon:e.jsx(ue,{}),variant:"ghost",size:"sm",onClick:s}):null]}),e.jsx("div",{className:"willa-drawer__body",children:K}),O?e.jsx("div",{className:"willa-drawer__footer",children:O}):null]})}),document.body):null;return e.jsxs(e.Fragment,{children:[ie,e.jsx("span",{className:j("willa-drawer-root",X),children:se})]})}const L=i=>Array.from(i.querySelectorAll(be)),ye=i=>typeof i=="number"?`${i}px`:i,G=()=>e.jsxs(he,{gap:"md",children:[e.jsx(P,{label:"任务名称",description:"用于侧边详情和编辑场景。",children:e.jsx(S,{defaultValue:"组件体验梳理"})}),e.jsx(P,{label:"负责人",children:e.jsx(S,{defaultValue:"Willa Team"})})]}),Be=ge({id:"drawer",name:"Drawer",category:"content",packageName:"willa/Drawer",description:"用于侧边详情、配置编辑和移动端面板的抽屉组件。",imports:[{name:"Drawer",from:"willa/Drawer"}],css:"willa/Drawer.css",demo:{name:"Drawer",component:d,props:{title:"编辑任务",description:"抽屉适合保留当前页面上下文的侧边编辑。",trigger:e.jsx(o,{icon:e.jsx(xe,{}),children:"打开抽屉"}),confirmText:"保存",children:e.jsx(G,{})}},code:pe(`
    import { Button } from "willa/Button";
    import { Drawer } from "willa/Drawer";
    import "willa/Button.css";
    import "willa/Drawer.css";

    <Drawer
      title="编辑任务"
      description="抽屉适合保留当前页面上下文的侧边编辑。"
      trigger={<Button>打开抽屉</Button>}
      confirmText="保存"
    >
      表单或详情内容
    </Drawer>
  `),props:[{name:"open",type:"boolean",description:"受控打开状态。"},{name:"defaultOpen",type:"boolean",defaultValue:"false",description:"非受控初始打开状态。"},{name:"trigger",type:"ReactElement",description:"触发打开抽屉的元素。"},{name:"title",type:"ReactNode",description:"抽屉标题。"},{name:"description",type:"ReactNode",description:"标题下方的说明。"},{name:"children",type:"ReactNode",description:"抽屉主体内容。"},{name:"footer",type:"ReactNode",description:"自定义底部。未传且配置 confirmText 或 onConfirm 时渲染默认操作区。"},{name:"extra",type:"ReactNode",description:"标题右侧附加区域。"},{name:"placement",type:'"left" | "right" | "top" | "bottom"',defaultValue:'"right"',description:"抽屉打开方向。"},{name:"size",type:'"sm" | "md" | "lg" | "full"',defaultValue:'"md"',description:"抽屉尺寸。"},{name:"width",type:"number | string",description:"左右抽屉的自定义宽度。number 会按 px 处理。"},{name:"height",type:"number | string",description:"上下抽屉的自定义高度。number 会按 px 处理。"},{name:"confirmText",type:"ReactNode",description:"默认确认按钮文案。"},{name:"confirmDisabled",type:"boolean",defaultValue:"false",description:"是否禁用默认确认按钮。"},{name:"confirmLoading",type:"boolean",defaultValue:"false",description:"是否展示默认确认按钮加载态。"},{name:"closeText",type:"ReactNode",defaultValue:'"取消"',description:"默认取消按钮文案。"},{name:"ariaLabel",type:"string",description:"无标题时的无障碍名称。"},{name:"closeOnOverlayClick",type:"boolean",defaultValue:"true",description:"点击遮罩是否关闭。"},{name:"closeOnEscape",type:"boolean",defaultValue:"true",description:"按 Escape 是否关闭。"},{name:"showCloseButton",type:"boolean",defaultValue:"true",description:"是否展示右上角关闭按钮。"},{name:"onConfirm",type:"() => void | Promise<void>",description:"默认确认按钮点击回调。返回 Promise 时会进入等待态并成功后关闭。"},{name:"onOpenChange",type:"(open: boolean) => void",description:"打开状态变化回调。"}],sections:[{title:"自定义宽度",code:`
        <Drawer
          title="宽侧栏"
          description="左右抽屉可以用 width 精确控制宽度。"
          width="44rem"
          trigger={<Button variant="soft">打开宽抽屉</Button>}
        >
          <Stack gap="md">
            <FormField label="任务名称" description="用于侧边详情和编辑场景。">
              <Input defaultValue="组件体验梳理" />
            </FormField>
            <FormField label="负责人">
              <Input defaultValue="Willa Team" />
            </FormField>
          </Stack>
        </Drawer>
      `,content:e.jsx(d,{title:"宽侧栏",description:"左右抽屉可以用 width 精确控制宽度。",width:"44rem",trigger:e.jsx(o,{variant:"soft",children:"打开宽抽屉"}),children:e.jsx(G,{})})},{title:"不同方向",code:`
        <Group wrap>
          <Drawer
            placement="left"
            title="左侧详情"
            trigger={<Button variant="outline">左侧</Button>}
          >
            左侧抽屉适合导航、资源选择或辅助信息。
          </Drawer>
          <Drawer
            placement="bottom"
            title="底部操作"
            size="sm"
            trigger={<Button variant="outline">底部</Button>}
          >
            底部抽屉适合移动端操作面板。
          </Drawer>
        </Group>
      `,content:e.jsxs(fe,{wrap:!0,children:[e.jsx(d,{placement:"left",title:"左侧详情",trigger:e.jsx(o,{variant:"outline",children:"左侧"}),children:"左侧抽屉适合导航、资源选择或辅助信息。"}),e.jsx(d,{placement:"bottom",title:"底部操作",size:"sm",trigger:e.jsx(o,{variant:"outline",children:"底部"}),children:"底部抽屉适合移动端操作面板。"})]})},{title:"附加操作",code:`
        <Drawer
          title="资料详情"
          extra={<Button size="sm" variant="ghost">查看文档</Button>}
          trigger={<Button>查看详情</Button>}
        >
          侧边详情内容
        </Drawer>
      `,content:e.jsx(d,{title:"资料详情",description:"标题区域可以放置额外操作。",extra:e.jsx(o,{size:"sm",variant:"ghost",icon:e.jsx(we,{}),children:"查看文档"}),trigger:e.jsx(o,{variant:"soft",children:"查看详情"}),children:"这里可以展示文件、指标、历史记录或编辑表单。"})}]});export{Be as default};
