import{aC as l,aB as ne,aA as e,u as ae,ao as b,e as i,ay as re}from"./index-8h0iXH-K.js";/* empty css              */import{d as se}from"./defineDoc-WQsG9bI2.js";const ce=["a[href]","button:not([disabled])","textarea:not([disabled])","input:not([disabled])","select:not([disabled])","[tabindex]:not([tabindex='-1'])"].join(","),z=d=>Array.from(d.querySelectorAll(ce));function n(d){const{open:w,defaultOpen:$,onOpenChange:g,trigger:p,title:u,description:m,children:B,footer:C,closeText:A="取消",confirmText:T,confirmDisabled:E=!1,confirmLoading:S=!1,onConfirm:y,ariaLabel:q,size:H="md",tone:M="default",closeOnOverlayClick:U=!0,closeOnEscape:W=!0,showCloseButton:_=!0,className:G,overlayClassName:J,contentClassName:Q}=d,N=w!==void 0,[X,Y]=l.useState($??!1),[O,h]=l.useState(!1),s=w??X,k=l.useId(),L=u?`${k}-title`:void 0,R=m?`${k}-description`:void 0,x=l.useRef(null),v=l.useRef(null),j=l.useCallback(t=>{N||Y(t),g==null||g(t)},[N,g]),c=l.useCallback(()=>{j(!1)},[j]);l.useEffect(()=>{if(!s||typeof document>"u")return;const t=document.body.style.overflow;v.current=document.activeElement instanceof HTMLElement?document.activeElement:null,document.body.style.overflow="hidden";const r=window.setTimeout(()=>{const o=x.current;if(!o)return;(z(o)[0]??o).focus()},0);return()=>{var o;window.clearTimeout(r),document.body.style.overflow=t,(o=v.current)==null||o.focus(),v.current=null}},[s]),l.useEffect(()=>{s||h(!1)},[s]);const Z=t=>{var r,o;(o=p==null?void 0:(r=p.props).onClick)==null||o.call(r,t),t.defaultPrevented||j(!0)},ee=t=>{!U||t.target!==t.currentTarget||c()},te=t=>{if(t.key==="Escape"&&W){t.stopPropagation(),c();return}if(t.key!=="Tab")return;const r=x.current;if(!r)return;const o=z(r);if(o.length===0){t.preventDefault(),r.focus();return}const D=o[0],P=o[o.length-1],F=document.activeElement;if(t.shiftKey&&F===D){t.preventDefault(),P.focus();return}!t.shiftKey&&F===P&&(t.preventDefault(),D.focus())},ie=()=>{if(!(E||S||O))try{const t=y==null?void 0:y();if(re(t)){h(!0),t.then(()=>{c()}).catch(()=>{h(!1)});return}c()}catch{h(!1)}},oe=l.isValidElement(p)?l.cloneElement(p,{"aria-expanded":s,"aria-haspopup":"dialog",onClick:Z}):null,V=C??(C===void 0&&(T!==void 0||y)?e.jsxs(e.Fragment,{children:[e.jsx(i,{type:"button",variant:"ghost",onClick:c,children:A}),e.jsx(i,{type:"button",variant:"solid",className:`willa-dialog-confirm willa-dialog-confirm--${M}`,disabled:E,loading:S||O,onClick:ie,children:T??"确认"})]}):null),le=s&&typeof document<"u"?ne.createPortal(e.jsx("div",{className:b("willa-dialog",J),onClick:ee,children:e.jsxs("div",{ref:x,className:b("willa-dialog-panel",`willa-dialog-panel--${H}`,G),role:"dialog","aria-modal":"true","aria-label":u?void 0:q??"Dialog","aria-labelledby":L,"aria-describedby":R,tabIndex:-1,onKeyDown:te,children:[_?e.jsx("button",{type:"button",className:"willa-dialog-close",onClick:c,"aria-label":"关闭",children:e.jsx(ae,{})}):null,u||m?e.jsxs("header",{className:"willa-dialog-header",children:[u?e.jsx("h2",{id:L,className:"willa-dialog-title",children:u}):null,m?e.jsx("p",{id:R,className:"willa-dialog-description",children:m}):null]}):null,B?e.jsx("div",{className:b("willa-dialog-body",Q),children:B}):null,V?e.jsx("footer",{className:"willa-dialog-footer",children:V}):null]})}),document.body):null;return e.jsxs(e.Fragment,{children:[oe,le]})}const I={display:"grid",gap:"0.65rem"},a={margin:0,color:"var(--willa-text)"},K={margin:0,color:"var(--willa-text-soft)",fontSize:"0.88rem"},f={display:"flex",flexWrap:"wrap",justifyContent:"flex-end",gap:"0.55rem"},ge=se({id:"dialog",name:"Dialog",packageName:"willa/Dialog",description:"用于确认操作、补充信息和轻量表单的基础弹层。",imports:[{name:"Dialog",from:"willa/Dialog"}],css:"willa/Dialog.css",demo:{name:"Dialog",component:n,props:{trigger:e.jsx(i,{variant:"soft",children:"打开 Dialog"}),title:"发布前确认",description:"确认后内容会进入公开队列。",confirmText:"确认发布"},children:e.jsxs("div",{style:I,children:[e.jsx("p",{style:a,children:"这篇内容包含 3 张图片和 2 个代码片段。"}),e.jsx("p",{style:K,children:"发布后仍然可以继续编辑，但读者会看到最新版本。"})]})},code:`
    import { Dialog } from "willa/Dialog";
    import { Button } from "willa/Button";
    import "willa/Dialog.css";
    import "willa/Button.css";

    <Dialog
      trigger={<Button variant="soft">打开 Dialog</Button>}
      title="发布前确认"
      description="确认后内容会进入公开队列。"
      confirmText="确认发布"
    >
      <p>这篇内容包含 3 张图片和 2 个代码片段。</p>
    </Dialog>;
  `,sections:[{title:"确认操作",code:`
        <div style={footerStyle}>
          <Dialog
            trigger={<Button variant="soft">归档项目</Button>}
            title="归档这个项目？"
            description="归档后项目会从默认列表隐藏，但仍然可以在归档区恢复。"
            confirmText="确认归档"
            onConfirm={() => {
              console.log("archive project");
            }}
          >
            <p style={paragraphStyle}>相关成员仍然可以查看历史记录。</p>
          </Dialog>
          <Dialog
            trigger={<Button variant="outline">删除草稿</Button>}
            title="删除这份草稿？"
            description="删除后无法恢复，请确认不再需要这份内容。"
            confirmText="删除"
            tone="danger"
            onConfirm={() => {
              console.log("delete draft");
            }}
          >
            <p style={paragraphStyle}>草稿中的图片、附件和评论也会一起删除。</p>
          </Dialog>
        </div>;
      `,content:e.jsxs("div",{style:f,children:[e.jsx(n,{trigger:e.jsx(i,{variant:"soft",children:"归档项目"}),title:"归档这个项目？",description:"归档后项目会从默认列表隐藏，但仍然可以在归档区恢复。",confirmText:"确认归档",onConfirm:()=>{console.log("archive project")},children:e.jsx("p",{style:a,children:"相关成员仍然可以查看历史记录。"})}),e.jsx(n,{trigger:e.jsx(i,{variant:"outline",children:"删除草稿"}),title:"删除这份草稿？",description:"删除后无法恢复，请确认不再需要这份内容。",confirmText:"删除",tone:"danger",onConfirm:()=>{console.log("delete draft")},children:e.jsx("p",{style:a,children:"草稿中的图片、附件和评论也会一起删除。"})})]})},{title:"确认状态",code:`
        <div style={footerStyle}>
          <Dialog
            trigger={<Button variant="soft">异步保存</Button>}
            title="保存配置"
            description="确认后会模拟一次异步提交，完成后自动关闭。"
            confirmText="保存"
            onConfirm={() => {
              return new Promise<void>((resolve) => {
                window.setTimeout(resolve, 1200);
              });
            }}
          >
            <p style={paragraphStyle}>保存期间确认按钮会进入 loading 状态。</p>
          </Dialog>
          <Dialog
            trigger={<Button variant="outline">未满足条件</Button>}
            title="提交前检查"
            description="必填项未完成时可以禁用确认按钮。"
            confirmText="提交"
            confirmDisabled
          >
            <p style={paragraphStyle}>请先填写项目名称和默认模型。</p>
          </Dialog>
          <Dialog
            trigger={<Button variant="outline">加载中状态</Button>}
            title="正在提交"
            description="外部受控请求也可以直接传入 confirmLoading。"
            confirmText="提交中"
            confirmLoading
          >
            <p style={paragraphStyle}>适合由业务自己管理请求状态的场景。</p>
          </Dialog>
        </div>;
      `,content:e.jsxs("div",{style:f,children:[e.jsx(n,{trigger:e.jsx(i,{variant:"soft",children:"异步保存"}),title:"保存配置",description:"确认后会模拟一次异步提交，完成后自动关闭。",confirmText:"保存",onConfirm:()=>new Promise(d=>{window.setTimeout(d,1200)}),children:e.jsx("p",{style:a,children:"保存期间确认按钮会进入 loading 状态。"})}),e.jsx(n,{trigger:e.jsx(i,{variant:"outline",children:"未满足条件"}),title:"提交前检查",description:"必填项未完成时可以禁用确认按钮。",confirmText:"提交",confirmDisabled:!0,children:e.jsx("p",{style:a,children:"请先填写项目名称和默认模型。"})}),e.jsx(n,{trigger:e.jsx(i,{variant:"outline",children:"加载中状态"}),title:"正在提交",description:"外部受控请求也可以直接传入 confirmLoading。",confirmText:"提交中",confirmLoading:!0,children:e.jsx("p",{style:a,children:"适合由业务自己管理请求状态的场景。"})})]})},{title:"关闭策略",code:`
        <div style={footerStyle}>
          <Dialog
            trigger={<Button variant="soft">必须操作</Button>}
            title="确认离开编辑页？"
            description="这个弹层不会被遮罩点击或 Escape 关闭。"
            closeOnOverlayClick={false}
            closeOnEscape={false}
            showCloseButton={false}
            confirmText="离开"
          >
            <p style={paragraphStyle}>未保存的内容会保留在本地草稿中。</p>
          </Dialog>
          <Dialog
            trigger={<Button variant="outline">无标题弹层</Button>}
            ariaLabel="快捷操作"
            confirmText="知道了"
          >
            <p style={paragraphStyle}>没有 title 时，需要通过 ariaLabel 提供可访问名称。</p>
          </Dialog>
        </div>;
      `,content:e.jsxs("div",{style:f,children:[e.jsx(n,{trigger:e.jsx(i,{variant:"soft",children:"必须操作"}),title:"确认离开编辑页？",description:"这个弹层不会被遮罩点击或 Escape 关闭。",closeOnOverlayClick:!1,closeOnEscape:!1,showCloseButton:!1,confirmText:"离开",children:e.jsx("p",{style:a,children:"未保存的内容会保留在本地草稿中。"})}),e.jsx(n,{trigger:e.jsx(i,{variant:"outline",children:"无标题弹层"}),ariaLabel:"快捷操作",confirmText:"知道了",children:e.jsx("p",{style:a,children:"没有 title 时，需要通过 ariaLabel 提供可访问名称。"})})]})},{title:"自定义底部",code:`
        <Dialog
          trigger={<Button variant="outline">打开设置</Button>}
          title="阅读偏好"
          description="这些设置只会影响当前设备。"
          footer={
            <div style={footerStyle}>
              <Button variant="ghost">稍后再说</Button>
              <Button variant="solid">保存设置</Button>
            </div>
          }
        >
          <div style={contentStyle}>
            <p style={paragraphStyle}>可以在这里放入表单、说明或自定义组件。</p>
            <p style={noteStyle}>Dialog 只负责弹层结构，内容由业务自己组合。</p>
          </div>
        </Dialog>;
      `,content:e.jsx(n,{trigger:e.jsx(i,{variant:"outline",children:"打开设置"}),title:"阅读偏好",description:"这些设置只会影响当前设备。",footer:e.jsxs("div",{style:f,children:[e.jsx(i,{variant:"ghost",children:"稍后再说"}),e.jsx(i,{variant:"solid",children:"保存设置"})]}),children:e.jsxs("div",{style:I,children:[e.jsx("p",{style:a,children:"可以在这里放入表单、说明或自定义组件。"}),e.jsx("p",{style:K,children:"Dialog 只负责弹层结构，内容由业务自己组合。"})]})})},{title:"尺寸",code:`
        <div style={footerStyle}>
          <Dialog
            trigger={<Button variant="soft">小尺寸</Button>}
            title="小尺寸弹层"
            description="适合简短确认。"
            size="sm"
            confirmText="知道了"
          />
          <Dialog
            trigger={<Button variant="soft">大尺寸</Button>}
            title="大尺寸弹层"
            description="适合展示更多内容。"
            size="lg"
            confirmText="关闭"
          >
            <p style={paragraphStyle}>
              大尺寸会提供更宽的内容区域，但仍然会限制最大高度并允许内容滚动。
            </p>
          </Dialog>
        </div>;
      `,content:e.jsxs("div",{style:f,children:[e.jsx(n,{trigger:e.jsx(i,{variant:"soft",children:"小尺寸"}),title:"小尺寸弹层",description:"适合简短确认。",size:"sm",confirmText:"知道了"}),e.jsx(n,{trigger:e.jsx(i,{variant:"soft",children:"大尺寸"}),title:"大尺寸弹层",description:"适合展示更多内容。",size:"lg",confirmText:"关闭",children:e.jsx("p",{style:a,children:"大尺寸会提供更宽的内容区域，但仍然会限制最大高度并允许内容滚动。"})})]})}],props:[{name:"open",type:"boolean",description:"受控打开状态。"},{name:"defaultOpen",type:"boolean",defaultValue:"false",description:"非受控默认打开状态。"},{name:"onOpenChange",type:"(open: boolean) => void",description:"打开状态变化时触发。"},{name:"trigger",type:"ReactElement",description:"触发打开弹层的元素，会自动注入点击事件和 aria 状态。"},{name:"title",type:"ReactNode",description:"弹层标题。"},{name:"description",type:"ReactNode",description:"标题下方的补充说明。"},{name:"children",type:"ReactNode",description:"弹层主体内容。"},{name:"footer",type:"ReactNode",description:"自定义底部区域；传入后会替代默认操作按钮。"},{name:"confirmText",type:"ReactNode",defaultValue:'"确认"',description:"默认确认按钮文案；传入后会渲染默认底部。"},{name:"confirmDisabled",type:"boolean",defaultValue:"false",description:"默认确认按钮是否禁用。"},{name:"confirmLoading",type:"boolean",defaultValue:"false",description:"默认确认按钮是否展示加载状态。"},{name:"closeText",type:"ReactNode",defaultValue:'"取消"',description:"默认取消按钮文案。"},{name:"onConfirm",type:"() => void | Promise<void>",description:"点击默认确认按钮时触发；返回 Promise 时会在成功后关闭弹层。"},{name:"tone",type:'"default" | "danger"',defaultValue:'"default"',description:"默认确认按钮的语义色，危险操作使用 danger。"},{name:"size",type:'"sm" | "md" | "lg"',defaultValue:'"md"',description:"弹层宽度尺寸。"},{name:"closeOnOverlayClick",type:"boolean",defaultValue:"true",description:"点击遮罩时是否关闭，默认开启。"},{name:"closeOnEscape",type:"boolean",defaultValue:"true",description:"按 Escape 时是否关闭，默认开启。"},{name:"showCloseButton",type:"boolean",defaultValue:"true",description:"是否展示右上角关闭按钮，默认展示。"},{name:"ariaLabel",type:"string",defaultValue:'"Dialog"',description:"无标题弹层的可访问名称。"},{name:"className",type:"string",description:"传给弹层面板的类名。"},{name:"overlayClassName",type:"string",description:"传给遮罩层的类名。"},{name:"contentClassName",type:"string",description:"传给主体内容区域的类名。"}]});export{ge as default};
