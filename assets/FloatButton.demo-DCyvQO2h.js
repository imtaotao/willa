import{aN as f,aL as e,aq as D,a7 as M,aw as I,aE as E,d as Y,aO as C,i as L,am as g,ad as W,j as Q,e as X,f as J,Q as K,B as Z,a5 as tt}from"./index-ByRG9JfA.js";/* empty css              */import{d as et}from"./defineDoc-CVYFOnv2.js";const G=[24,24],z=320;function h(t){const{icon:l,label:r,description:a,tooltip:c,badge:v,variant:y="default",shape:N,size:b="md",placement:B="bottom-right",fixed:d=!0,offset:j=G,zIndex:k,ariaLabel:F,backToTop:i=!1,visibilityHeight:w=z,target:p,scrollBehavior:_="smooth",className:u,contentClassName:x}=t,[n,o]=f.useState(!i),m=N??(r||a?"square":"circle"),s=l??(i?e.jsx(Y,{}):null),T=F??rt(r),P=f.useMemo(()=>$({fixed:d,placement:B,offset:j,zIndex:k}),[d,j,B,k]);f.useEffect(()=>{if(!i||typeof window>"u")return;const S=q(p);if(!S)return;const R=()=>{o(nt(S)>=w)};return R(),S.addEventListener("scroll",R,{passive:!0}),()=>{S.removeEventListener("scroll",R)}},[i,p,w]);const U=f.useCallback(()=>{!i||typeof window>"u"||st(q(p),_)},[i,_,p]),H=it(t)?e.jsx(ot,{props:t,className:A({variant:y,shape:m,size:b,fixed:d,visible:n,className:u}),style:P,ariaLabel:T,icon:s,label:r,description:a,badge:v,contentClassName:x}):e.jsx(lt,{props:t,className:A({variant:y,shape:m,size:b,fixed:d,visible:n,className:u}),style:P,ariaLabel:T,icon:s,label:r,description:a,badge:v,contentClassName:x,onBackToTop:U});return c?e.jsx(D,{content:c,children:H}):H}function at(t){const{children:l,open:r,defaultOpen:a=!1,onOpenChange:c,triggerIcon:v=e.jsx(M,{}),triggerTooltip:y,triggerAriaLabel:N="打开悬浮操作",placement:b="bottom-right",direction:B="up",fixed:d=!0,offset:j=G,zIndex:k,className:F,contentClassName:i}=t,w=r!==void 0,[p,_]=f.useState(a),u=r??p,x=f.useRef(null),n=f.useCallback(o=>{w||_(o),c==null||c(o)},[w,c]);return f.useEffect(()=>{if(!u||typeof document>"u")return;const o=m=>{var T;const s=m.target;s instanceof Node&&((T=x.current)!=null&&T.contains(s)||n(!1))};return document.addEventListener("pointerdown",o),()=>{document.removeEventListener("pointerdown",o)}},[u,n]),e.jsxs("div",{ref:x,className:I("willa-float-button-group",`willa-float-button-group--${b}`,`willa-float-button-group--${B}`,d&&"willa-float-button-group--fixed",u&&"willa-float-button-group--open",F),style:$({fixed:d,placement:b,offset:j,zIndex:k}),children:[e.jsx("div",{className:I("willa-float-button-group__items",i),children:l}),e.jsx(h,{icon:v,ariaLabel:N,tooltip:y,variant:"primary",fixed:!1,className:"willa-float-button-group__trigger",onClick:()=>n(!u)})]})}const O=t=>e.jsxs(e.Fragment,{children:[t.badge?e.jsx("span",{className:"willa-float-button__badge",children:t.badge}):null,e.jsxs("span",{className:I("willa-float-button__content",t.className),children:[t.icon?e.jsx("span",{className:"willa-float-button__icon","aria-hidden":"true",children:t.icon}):null,t.label||t.description?e.jsxs("span",{className:"willa-float-button__copy",children:[t.label?e.jsx("span",{className:"willa-float-button__label",children:t.label}):null,t.description?e.jsx("span",{className:"willa-float-button__description",children:t.description}):null]}):null]})]}),ot=t=>{const{icon:l,label:r,description:a,tooltip:c,badge:v,variant:y="default",shape:N,size:b="md",placement:B="bottom-right",fixed:d=!0,offset:j=G,zIndex:k,ariaLabel:F,backToTop:i=!1,visibilityHeight:w=z,target:p,scrollBehavior:_="smooth",className:u,contentClassName:x,href:n,onClick:o,...m}=t.props;return e.jsx("a",{...m,href:n,className:t.className,style:t.style,"aria-label":t.ariaLabel,onClick:s=>{o==null||o(s)},children:e.jsx(O,{icon:t.icon,label:t.label,description:t.description,badge:t.badge,className:t.contentClassName})})},lt=t=>{const{icon:l,label:r,description:a,tooltip:c,badge:v,variant:y="default",shape:N,size:b="md",placement:B="bottom-right",fixed:d=!0,offset:j=G,zIndex:k,ariaLabel:F,backToTop:i=!1,visibilityHeight:w=z,target:p,scrollBehavior:_="smooth",className:u,contentClassName:x,type:n,onClick:o,...m}=t.props;return e.jsx("button",{...m,type:n??"button",className:t.className,style:t.style,"aria-label":t.ariaLabel,onClick:s=>{o==null||o(s),s.defaultPrevented||t.onBackToTop()},children:e.jsx(O,{icon:t.icon,label:t.label,description:t.description,badge:t.badge,className:t.contentClassName})})},A=t=>I("willa-float-button",`willa-float-button--${t.variant}`,`willa-float-button--${t.shape}`,`willa-float-button--${t.size}`,t.fixed&&"willa-float-button--fixed",!t.visible&&"willa-float-button--hidden",t.className),$=t=>{const[l,r]=t.offset,a={"--willa-float-button-offset-x":E(l),"--willa-float-button-offset-y":E(r)};return t.zIndex!==void 0&&(a["--willa-float-button-z-index"]=String(t.zIndex)),t.fixed&&(t.placement.includes("bottom")?a.bottom="var(--willa-float-button-offset-y)":a.top="var(--willa-float-button-offset-y)",t.placement.includes("right")?a.right="var(--willa-float-button-offset-x)":a.left="var(--willa-float-button-offset-x)"),a},rt=t=>typeof t=="string"?t:"悬浮操作按钮",it=t=>typeof t.href=="string",q=t=>typeof window>"u"?null:typeof t=="function"?t()??window:t??window,nt=t=>!t||typeof window>"u"?0:"scrollY"in t?window.scrollY||document.documentElement.scrollTop||0:t.scrollTop,st=(t,l)=>{if(!(!t||typeof window>"u")){if(t===window){window.scrollTo({top:0,behavior:l});return}t.scrollTo({top:0,behavior:l})}},V={position:"relative",width:"min(100%, 50rem)",minHeight:"19rem",padding:"1.25rem",overflow:"hidden",background:"var(--willa-panel-surface-bg)",border:"1px solid var(--willa-panel-border)",borderRadius:"1rem"},ct={width:"min(100%, 26rem)",padding:"1rem"},dt=()=>e.jsxs("div",{"data-float-button-scroll":!0,style:{position:"relative",width:"min(100%, 50rem)",height:"22rem",overflow:"auto",padding:"1.25rem",background:"var(--willa-panel-surface-bg)",border:"1px solid var(--willa-panel-border)",borderRadius:"1rem"},children:[e.jsx(g,{gap:"md",children:Array.from({length:8}).map((t,l)=>e.jsx(L,{children:e.jsxs(g,{gap:"xs",children:[e.jsxs("strong",{children:["更新记录 ",l+1]}),e.jsx("p",{style:{margin:0,color:"var(--willa-text-soft)"},children:"用于演示滚动容器中的 backToTop 行为，悬浮按钮会在滚动后出现。"})]})},l))}),e.jsx(h,{backToTop:!0,target:()=>document.querySelector("[data-float-button-scroll]")})]}),ut=()=>e.jsxs("div",{style:V,children:[e.jsxs(g,{gap:"lg",children:[e.jsxs(K,{justify:"between",align:"start",children:[e.jsxs(g,{gap:"xs",children:[e.jsx("strong",{children:"产品反馈工作台"}),e.jsx("p",{style:{margin:0,color:"var(--willa-text-soft)"},children:"快速进入编辑、消息和回到顶部等高频操作。"})]}),e.jsx(Z,{tone:"info",children:"内部预览"})]}),e.jsx(L,{style:ct,children:e.jsxs(g,{gap:"xs",children:[e.jsx("strong",{children:"当前工作项"}),e.jsx("p",{style:{margin:0,color:"var(--willa-text-soft)"},children:"本周需要同步评论体验、文件预览和 Tour 动画修复。"})]})})]}),e.jsx(h,{fixed:!1,icon:e.jsx(tt,{}),tooltip:"创建反馈",ariaLabel:"创建反馈"})]}),pt=()=>e.jsxs("div",{style:V,children:[e.jsx(L,{style:{width:"min(100%, 30rem)",padding:"1rem"},children:e.jsxs(g,{gap:"xs",children:[e.jsx("strong",{children:"内容评审面板"}),e.jsx("p",{style:{margin:0,color:"var(--willa-text-soft)"},children:"展示带文案的悬浮入口，适合需要明确语义的操作。"})]})}),e.jsx(h,{fixed:!1,shape:"square",icon:e.jsx(W,{}),label:"发布检查",description:"进入预检流程",tooltip:"执行发布前检查",variant:"primary",badge:"3"})]}),mt=()=>e.jsxs("div",{style:V,children:[e.jsx(g,{gap:"md",children:e.jsx(L,{style:{width:"min(100%, 30rem)",padding:"1rem"},children:e.jsxs(g,{gap:"xs",children:[e.jsx("strong",{children:"组合操作"}),e.jsx("p",{style:{margin:0,color:"var(--willa-text-soft)"},children:"多个高频操作可以折叠到一个主入口下，避免右下角堆太多按钮。"})]})})}),e.jsxs(at,{fixed:!1,defaultOpen:!0,triggerTooltip:"更多快捷操作",children:[e.jsx(h,{icon:e.jsx(Q,{}),tooltip:"查看评论",ariaLabel:"查看评论"}),e.jsx(h,{icon:e.jsx(X,{}),tooltip:"查看通知",ariaLabel:"查看通知",badge:"2"}),e.jsx(h,{icon:e.jsx(J,{}),tooltip:"收藏当前页",ariaLabel:"收藏当前页"})]})]}),wt=et({id:"float-button",name:"FloatButton",category:"content",packageName:"willa/FloatButton",description:"用于页面固定入口、回到顶部和高频快捷操作的悬浮按钮组件。",imports:[{name:"FloatButton, FloatButtonGroup",from:"willa/FloatButton"}],css:"willa/FloatButton.css",demo:{name:"BasicPreview",component:ut},code:C(`
    import { Pencil2Icon } from "@radix-ui/react-icons";
    import { Badge } from "willa/Badge";
    import { Card } from "willa/Card";
    import { FloatButton } from "willa/FloatButton";
    import { Group } from "willa/Group";
    import { Stack } from "willa/Stack";
    import "willa/Badge.css";
    import "willa/Card.css";
    import "willa/FloatButton.css";
    import "willa/Group.css";
    import "willa/Stack.css";

    <div
      style={{
        position: "relative",
        width: "min(100%, 50rem)",
        minHeight: "19rem",
        padding: "1.25rem",
        overflow: "hidden",
        background: "var(--willa-panel-surface-bg)",
        border: "1px solid var(--willa-panel-border)",
        borderRadius: "1rem",
      }}
    >
      <Stack gap="lg">
        <Group justify="between" align="start">
          <Stack gap="xs">
            <strong>产品反馈工作台</strong>
            <p style={{ margin: 0, color: "var(--willa-text-soft)" }}>
              快速进入编辑、消息和回到顶部等高频操作。
            </p>
          </Stack>
          <Badge tone="info">内部预览</Badge>
        </Group>
        <Card style={{ width: "min(100%, 26rem)", padding: "1rem" }}>
          <Stack gap="xs">
            <strong>当前工作项</strong>
            <p style={{ margin: 0, color: "var(--willa-text-soft)" }}>
              本周需要同步评论体验、文件预览和 Tour 动画修复。
            </p>
          </Stack>
        </Card>
      </Stack>
      <FloatButton
        fixed={false}
        icon={<Pencil2Icon />}
        tooltip="创建反馈"
        ariaLabel="创建反馈"
      />
    </div>;
  `),sections:[{title:"带文案",code:C(`
        import { RocketIcon } from "@radix-ui/react-icons";
        import { Card } from "willa/Card";
        import { FloatButton } from "willa/FloatButton";
        import { Stack } from "willa/Stack";
        import "willa/Card.css";
        import "willa/FloatButton.css";
        import "willa/Stack.css";

        <div
          style={{
            position: "relative",
            width: "min(100%, 50rem)",
            minHeight: "19rem",
            padding: "1.25rem",
            overflow: "hidden",
            background: "var(--willa-panel-surface-bg)",
            border: "1px solid var(--willa-panel-border)",
            borderRadius: "1rem",
          }}
        >
          <Card style={{ width: "min(100%, 30rem)", padding: "1rem" }}>
            <Stack gap="xs">
              <strong>内容评审面板</strong>
              <p style={{ margin: 0, color: "var(--willa-text-soft)" }}>
                展示带文案的悬浮入口，适合需要明确语义的操作。
              </p>
            </Stack>
          </Card>
          <FloatButton
            fixed={false}
            shape="square"
            icon={<RocketIcon />}
            label="发布检查"
            description="进入预检流程"
            tooltip="执行发布前检查"
            variant="primary"
            badge="3"
          />
        </div>;
      `),content:e.jsx(pt,{})},{title:"分组操作",code:C(`
        import {
          BellIcon,
          BookmarkIcon,
          ChatBubbleIcon,
        } from "@radix-ui/react-icons";
        import { Card } from "willa/Card";
        import { FloatButton, FloatButtonGroup } from "willa/FloatButton";
        import { Stack } from "willa/Stack";
        import "willa/Card.css";
        import "willa/FloatButton.css";
        import "willa/Stack.css";

        <div
          style={{
            position: "relative",
            width: "min(100%, 50rem)",
            minHeight: "19rem",
            padding: "1.25rem",
            overflow: "hidden",
            background: "var(--willa-panel-surface-bg)",
            border: "1px solid var(--willa-panel-border)",
            borderRadius: "1rem",
          }}
        >
          <Stack gap="md">
            <Card style={{ width: "min(100%, 30rem)", padding: "1rem" }}>
              <Stack gap="xs">
                <strong>组合操作</strong>
                <p style={{ margin: 0, color: "var(--willa-text-soft)" }}>
                  多个高频操作可以折叠到一个主入口下，避免右下角堆太多按钮。
                </p>
              </Stack>
            </Card>
          </Stack>
          <FloatButtonGroup
            fixed={false}
            defaultOpen
            triggerTooltip="更多快捷操作"
          >
            <FloatButton
              icon={<ChatBubbleIcon />}
              tooltip="查看评论"
              ariaLabel="查看评论"
            />
            <FloatButton
              icon={<BellIcon />}
              tooltip="查看通知"
              ariaLabel="查看通知"
              badge="2"
            />
            <FloatButton
              icon={<BookmarkIcon />}
              tooltip="收藏当前页"
              ariaLabel="收藏当前页"
            />
          </FloatButtonGroup>
        </div>;
      `),content:e.jsx(mt,{})},{title:"回到顶部",code:C(`
        import { ArrowUpIcon } from "@radix-ui/react-icons";
        import { Card } from "willa/Card";
        import { FloatButton } from "willa/FloatButton";
        import { Stack } from "willa/Stack";
        import "willa/Card.css";
        import "willa/FloatButton.css";
        import "willa/Stack.css";

        <div
          data-float-button-scroll
          style={{
            position: "relative",
            width: "min(100%, 50rem)",
            height: "22rem",
            overflow: "auto",
            padding: "1.25rem",
            background: "var(--willa-panel-surface-bg)",
            border: "1px solid var(--willa-panel-border)",
            borderRadius: "1rem",
          }}
        >
          <Stack gap="md">
            {Array.from({ length: 8 }).map((_, index) => (
              <Card key={index}>
                <Stack gap="xs">
                  <strong>更新记录 {index + 1}</strong>
                  <p style={{ margin: 0, color: "var(--willa-text-soft)" }}>
                    用于演示滚动容器中的 backToTop 行为，悬浮按钮会在滚动后出现。
                  </p>
                </Stack>
              </Card>
            ))}
          </Stack>
          <FloatButton
            icon={<ArrowUpIcon />}
            backToTop
            target={() => document.querySelector("[data-float-button-scroll]")}
          />
        </div>;
      `),content:e.jsx(dt,{})}],props:[{name:"icon",type:"ReactNode",description:"按钮主图标。"},{name:"label",type:"ReactNode",description:"主文案。传入后默认会切换为 square 形态。"},{name:"description",type:"ReactNode",description:"辅助说明文案。"},{name:"tooltip",type:"ReactNode",description:"悬浮提示内容。"},{name:"badge",type:"ReactNode",description:"右上角徽标内容。"},{name:"variant",type:'"default" | "primary"',defaultValue:'"default"',description:"视觉变体。"},{name:"shape",type:'"circle" | "square"',defaultValue:"内容按钮自动推导",description:"按钮形状。未传时会根据是否有文字自动推导。"},{name:"size",type:'"md" | "lg"',defaultValue:'"md"',description:"按钮尺寸。"},{name:"placement",type:'"bottom-right" | "bottom-left" | "top-right" | "top-left"',defaultValue:'"bottom-right"',description:"固定模式下的停靠位置。"},{name:"fixed",type:"boolean",defaultValue:"true",description:"是否使用 fixed 固定到视口。"},{name:"offset",type:"readonly [number | string, number | string]",defaultValue:"[24, 24]",description:"距离视口或容器边缘的偏移量。"},{name:"zIndex",type:"number",description:"固定模式下的层级。"},{name:"ariaLabel",type:"string",description:"无文案时建议提供的无障碍标签。"},{name:"backToTop",type:"boolean",defaultValue:"false",description:"开启后切换为回到顶部按钮行为。"},{name:"visibilityHeight",type:"number",defaultValue:"320",description:"回到顶部按钮出现的滚动阈值。"},{name:"target",type:"Window | HTMLElement | null | (() => Window | HTMLElement | null)",description:"回到顶部行为和可见性监听使用的滚动容器。"},{name:"scrollBehavior",type:"ScrollBehavior",defaultValue:'"smooth"',description:"回到顶部时的滚动行为。"},{name:"href",type:"string",description:"传入后以链接按钮渲染。"},{name:"children",group:"FloatButtonGroup",required:!0,type:"ReactNode",description:"分组内的悬浮按钮列表。"},{name:"open",group:"FloatButtonGroup",type:"boolean",description:"受控展开状态。"},{name:"defaultOpen",group:"FloatButtonGroup",type:"boolean",defaultValue:"false",description:"默认展开状态。"},{name:"onOpenChange",group:"FloatButtonGroup",type:"(open: boolean) => void",description:"展开状态变化回调。"},{name:"triggerIcon",group:"FloatButtonGroup",type:"ReactNode",defaultValue:"<PlusIcon />",description:"主触发按钮图标。"},{name:"triggerTooltip",group:"FloatButtonGroup",type:"ReactNode",description:"主触发按钮提示内容。"},{name:"triggerAriaLabel",group:"FloatButtonGroup",type:"string",defaultValue:'"打开悬浮操作"',description:"主触发按钮的无障碍标签。"},{name:"direction",group:"FloatButtonGroup",type:'"up" | "down" | "left" | "right"',defaultValue:'"up"',description:"分组按钮展开方向。"}]});export{wt as default};
