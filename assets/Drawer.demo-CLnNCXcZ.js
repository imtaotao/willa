import{aK as a,aB as ce,aJ as de,aI as e,R as ue,u as me,at as b,e as i,aG as pe,aL as fe,O as we,a7 as he,aj as ge,U as z,L as xe}from"./index-eiWCuPSu.js";import{g as L}from"./dom-DvRKQOia.js";import{F as P}from"./index-CONuq2Wo.js";/* empty css              *//* empty css              *//* empty css              */import{d as ye}from"./defineDoc-CLmIX3fo.js";function c(G){const{open:v,defaultOpen:K,trigger:s,title:p,description:f,children:$,footer:j,extra:D,placement:w="right",size:U="md",width:W,height:H,closeText:J="取消",confirmText:C,confirmDisabled:N=!1,confirmLoading:E=!1,ariaLabel:M,closeOnOverlayClick:q=!0,closeOnEscape:A=!0,showCloseButton:Q=!0,className:X,overlayClassName:Y,panelClassName:Z,onConfirm:d,onOpenChange:u}=G,B=v!==void 0,[ee,te]=a.useState(K??!1),[F,m]=a.useState(!1),o=v??ee,k=a.useId(),_=p?`${k}-title`:void 0,R=f?`${k}-description`:void 0,h=a.useRef(null),g=a.useRef(null),x=a.useCallback(t=>{B||te(t),u==null||u(t)},[B,u]),l=a.useCallback(()=>{x(!1)},[x]);a.useEffect(()=>{if(!o||typeof document>"u")return;const t=document.body.style.overflow;g.current=document.activeElement instanceof HTMLElement?document.activeElement:null,document.body.style.overflow="hidden";const n=window.setTimeout(()=>{const r=h.current;if(!r)return;(L(r)[0]??r).focus()},0);return()=>{var r;window.clearTimeout(n),document.body.style.overflow=t,(r=g.current)==null||r.focus(),g.current=null}},[o]),a.useEffect(()=>{o||m(!1)},[o]);const re=t=>{var n,r;(r=s==null?void 0:(n=s.props).onClick)==null||r.call(n,t),t.defaultPrevented||x(!0)},ae=t=>{!q||t.target!==t.currentTarget||l()},ne=t=>{if(t.key==="Escape"&&A){t.stopPropagation(),l();return}if(t.key!=="Tab")return;const n=h.current;if(!n)return;const r=L(n);if(r.length===0){t.preventDefault(),n.focus();return}const y=r[0],V=r[r.length-1],I=document.activeElement;if(t.shiftKey&&I===y){t.preventDefault(),V.focus();return}!t.shiftKey&&I===V&&(t.preventDefault(),y.focus())},ie=()=>{if(!(N||E||F))try{const t=d==null?void 0:d();if(pe(t)){m(!0),t.then(()=>{l()}).catch(()=>{m(!1)});return}l()}catch{m(!1)}},oe=a.isValidElement(s)?a.cloneElement(s,{"aria-expanded":o,"aria-haspopup":"dialog",onClick:re}):null,T=j??(j===void 0&&(C!==void 0||d)?e.jsxs(e.Fragment,{children:[e.jsx(i,{type:"button",variant:"ghost",onClick:l,children:J}),e.jsx(i,{type:"button",variant:"solid",loading:E||F,disabled:N,onClick:ie,children:C??"确认"})]}):null),O=w==="left"||w==="right"?W:H,le=O===void 0?void 0:{"--willa-drawer-size":ce(O)},se=o&&typeof document<"u"?de.createPortal(e.jsx("div",{className:b("willa-drawer",`willa-drawer--${w}`,Y),onClick:ae,children:e.jsxs("div",{className:b("willa-drawer__panel",`willa-drawer__panel--${U}`,Z),style:le,ref:h,role:"dialog","aria-modal":"true","aria-label":M,"aria-labelledby":_,"aria-describedby":R,tabIndex:-1,onKeyDown:ne,children:[e.jsxs("div",{className:"willa-drawer__header",children:[e.jsxs("div",{className:"willa-drawer__heading",children:[p?e.jsx("h2",{className:"willa-drawer__title",id:_,children:p}):null,f?e.jsx("p",{className:"willa-drawer__description",id:R,children:f}):null]}),D?e.jsx("div",{className:"willa-drawer__extra",children:D}):null,Q?e.jsx(ue,{ariaLabel:"关闭抽屉",icon:e.jsx(me,{}),variant:"ghost",size:"sm",onClick:l}):null]}),e.jsx("div",{className:"willa-drawer__body",children:$}),T?e.jsx("div",{className:"willa-drawer__footer",children:T}):null]})}),document.body):null;return e.jsxs(e.Fragment,{children:[oe,e.jsx("span",{className:b("willa-drawer-root",X),children:se})]})}const S=()=>e.jsxs(ge,{gap:"md",children:[e.jsx(P,{label:"任务名称",description:"用于侧边详情和编辑场景。",children:e.jsx(z,{defaultValue:"组件体验梳理"})}),e.jsx(P,{label:"负责人",children:e.jsx(z,{defaultValue:"Willa Team"})})]}),Fe=ye({id:"drawer",name:"Drawer",category:"content",packageName:"willa/Drawer",description:"用于侧边详情、配置编辑和移动端面板的抽屉组件。",imports:[{name:"Drawer",from:"willa/Drawer"}],css:"willa/Drawer.css",demo:{name:"Drawer",component:c,props:{title:"编辑任务",description:"抽屉适合保留当前页面上下文的侧边编辑。",trigger:e.jsx(i,{icon:e.jsx(xe,{}),children:"打开抽屉"}),confirmText:"保存",children:e.jsx(S,{})}},code:fe(`
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
      `,content:e.jsx(c,{title:"宽侧栏",description:"左右抽屉可以用 width 精确控制宽度。",width:"44rem",trigger:e.jsx(i,{variant:"soft",children:"打开宽抽屉"}),children:e.jsx(S,{})})},{title:"不同方向",code:`
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
      `,content:e.jsxs(we,{wrap:!0,children:[e.jsx(c,{placement:"left",title:"左侧详情",trigger:e.jsx(i,{variant:"outline",children:"左侧"}),children:"左侧抽屉适合导航、资源选择或辅助信息。"}),e.jsx(c,{placement:"bottom",title:"底部操作",size:"sm",trigger:e.jsx(i,{variant:"outline",children:"底部"}),children:"底部抽屉适合移动端操作面板。"})]})},{title:"附加操作",code:`
        <Drawer
          title="资料详情"
          extra={<Button size="sm" variant="ghost">查看文档</Button>}
          trigger={<Button>查看详情</Button>}
        >
          侧边详情内容
        </Drawer>
      `,content:e.jsx(c,{title:"资料详情",description:"标题区域可以放置额外操作。",extra:e.jsx(i,{size:"sm",variant:"ghost",icon:e.jsx(he,{}),children:"查看文档"}),trigger:e.jsx(i,{variant:"soft",children:"查看详情"}),children:"这里可以展示文件、指标、历史记录或编辑表单。"})}]});export{Fe as default};
