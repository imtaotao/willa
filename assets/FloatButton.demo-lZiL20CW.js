import{aQ as u,aO as e,as as W,a9 as X,az as L,aH as O,d as J,aR as T,Q as P,i as F,ao as c,af as D,j as K,e as Z,f as tt,B as et,a7 as at}from"./index-BZo2zb5Z.js";/* empty css              */import{d as ot}from"./defineDoc-CYk1gPEt.js";const R=[24,24],V=320;function f(t){const{icon:l,label:r,description:a,tooltip:d,badge:h,backgroundColor:v,textColor:y,variant:g="default",shape:S,size:b="md",placement:j="bottom-right",fixed:w=!0,offset:k=R,zIndex:B,ariaLabel:C,backToTop:n=!1,visibilityHeight:_=V,target:i,scrollBehavior:x="smooth",className:s,contentClassName:o}=t,[p,m]=u.useState(!n),N=S??(r||a?"square":"circle"),H=l??(n?e.jsx(J,{}):null),A=C??nt(r),E=u.useMemo(()=>Y({placement:j,offset:k,zIndex:B,backgroundColor:v,textColor:y}),[v,w,k,j,y,B]);u.useEffect(()=>{if(!n||typeof window>"u")return;const I=U(i);if(!I)return;const z=()=>{m(ct(I)>=_)};return z(),I.addEventListener("scroll",z,{passive:!0}),()=>{I.removeEventListener("scroll",z)}},[n,i,_]);const Q=u.useCallback(()=>{!n||typeof window>"u"||dt(U(i),x)},[n,x,i]),q=st(t)?e.jsx(rt,{props:t,className:$({variant:g,shape:N,size:b,fixed:w,visible:p,className:s}),style:E,ariaLabel:A,icon:H,label:r,description:a,badge:h,contentClassName:o}):e.jsx(it,{props:t,className:$({variant:g,shape:N,size:b,fixed:w,visible:p,className:s}),style:E,ariaLabel:A,icon:H,label:r,description:a,badge:h,contentClassName:o,onBackToTop:Q});return d?e.jsx(W,{content:d,children:q}):q}function lt(t){const{children:l,open:r,defaultOpen:a=!1,onOpenChange:d,triggerIcon:h=e.jsx(X,{}),triggerTooltip:v,triggerAriaLabel:y="打开悬浮操作",placement:g="bottom-right",direction:S="up",fixed:b=!0,offset:j=R,zIndex:w,className:k,contentClassName:B}=t,C=r!==void 0,[n,_]=u.useState(a),i=r??n,x=u.useRef(null),s=u.useCallback(o=>{C||_(o),d==null||d(o)},[C,d]);return u.useEffect(()=>{if(!i||typeof document>"u")return;const o=p=>{var N;const m=p.target;m instanceof Node&&((N=x.current)!=null&&N.contains(m)||s(!1))};return document.addEventListener("pointerdown",o),()=>{document.removeEventListener("pointerdown",o)}},[i,s]),e.jsxs("div",{ref:x,className:L("willa-float-button-group",`willa-float-button-group--${g}`,`willa-float-button-group--${S}`,b&&"willa-float-button-group--fixed",!b&&"willa-float-button-group--anchored",i&&"willa-float-button-group--open",k),style:Y({placement:g,offset:j,zIndex:w}),children:[e.jsx("div",{className:L("willa-float-button-group__items",B),children:l}),e.jsx(f,{icon:h,ariaLabel:y,tooltip:v,variant:"primary",fixed:!1,className:"willa-float-button-group__trigger",onClick:()=>s(!i)})]})}const M=t=>e.jsxs(e.Fragment,{children:[t.badge?e.jsx("span",{className:"willa-float-button__badge",children:t.badge}):null,e.jsxs("span",{className:L("willa-float-button__content",t.className),children:[t.icon?e.jsx("span",{className:"willa-float-button__icon","aria-hidden":"true",children:t.icon}):null,t.label||t.description?e.jsxs("span",{className:"willa-float-button__copy",children:[t.label?e.jsx("span",{className:"willa-float-button__label",children:t.label}):null,t.description?e.jsx("span",{className:"willa-float-button__description",children:t.description}):null]}):null]})]}),rt=t=>{const{icon:l,label:r,description:a,tooltip:d,badge:h,variant:v="default",shape:y,size:g="md",placement:S="bottom-right",fixed:b=!0,offset:j=R,zIndex:w,ariaLabel:k,backToTop:B=!1,visibilityHeight:C=V,target:n,scrollBehavior:_="smooth",className:i,contentClassName:x,href:s,onClick:o,...p}=t.props;return e.jsx("a",{...p,href:s,className:t.className,style:t.style,"aria-label":t.ariaLabel,onClick:m=>{o==null||o(m)},children:e.jsx(M,{icon:t.icon,label:t.label,description:t.description,badge:t.badge,className:t.contentClassName})})},it=t=>{const{icon:l,label:r,description:a,tooltip:d,badge:h,variant:v="default",shape:y,size:g="md",placement:S="bottom-right",fixed:b=!0,offset:j=R,zIndex:w,ariaLabel:k,backToTop:B=!1,visibilityHeight:C=V,target:n,scrollBehavior:_="smooth",className:i,contentClassName:x,type:s,onClick:o,...p}=t.props;return e.jsx("button",{...p,type:s??"button",className:t.className,style:t.style,"aria-label":t.ariaLabel,onClick:m=>{o==null||o(m),m.defaultPrevented||t.onBackToTop()},children:e.jsx(M,{icon:t.icon,label:t.label,description:t.description,badge:t.badge,className:t.contentClassName})})},$=t=>L("willa-float-button",`willa-float-button--${t.variant}`,`willa-float-button--${t.shape}`,`willa-float-button--${t.size}`,t.fixed&&"willa-float-button--fixed",!t.fixed&&"willa-float-button--anchored",!t.visible&&"willa-float-button--hidden",t.className),Y=t=>{const[l,r]=t.offset,a={"--willa-float-button-offset-x":O(l),"--willa-float-button-offset-y":O(r)};return t.backgroundColor&&(a["--willa-float-button-custom-bg"]=t.backgroundColor,a["--willa-float-button-custom-bg-hover"]=t.backgroundColor),t.textColor&&(a["--willa-float-button-custom-text"]=t.textColor,a["--willa-float-button-custom-muted"]=t.textColor,a["--willa-float-button-description-opacity"]="0.74"),t.zIndex!==void 0&&(a["--willa-float-button-z-index"]=String(t.zIndex)),t.placement.includes("bottom")?a.bottom="var(--willa-float-button-offset-y)":a.top="var(--willa-float-button-offset-y)",t.placement.includes("right")?a.right="var(--willa-float-button-offset-x)":a.left="var(--willa-float-button-offset-x)",a},nt=t=>typeof t=="string"?t:"悬浮操作按钮",st=t=>typeof t.href=="string",U=t=>typeof window>"u"?null:typeof t=="function"?t()??window:t??window,ct=t=>!t||typeof window>"u"?0:"scrollY"in t?window.scrollY||document.documentElement.scrollTop||0:t.scrollTop,dt=(t,l)=>{if(!(!t||typeof window>"u")){if(t===window){window.scrollTo({top:0,behavior:l});return}t.scrollTo({top:0,behavior:l})}},G={position:"relative",width:"min(100%, 56rem)",minHeight:"21rem",padding:"1.5rem 1.5rem 6rem",overflow:"hidden",background:"var(--willa-panel-surface-bg)",border:"1px solid var(--willa-panel-border)",borderRadius:"1.25rem"},mt={width:"min(100%, 30rem)",padding:"1rem 1.05rem"},pt=()=>e.jsxs("div",{"data-float-button-scroll":!0,style:{position:"relative",width:"min(100%, 56rem)",height:"22rem",overflow:"auto",padding:"1.5rem 1.5rem 6rem",background:"var(--willa-panel-surface-bg)",border:"1px solid var(--willa-panel-border)",borderRadius:"1.25rem"},children:[e.jsx(c,{gap:"md",children:Array.from({length:8}).map((t,l)=>e.jsx(F,{children:e.jsxs(c,{gap:"xs",children:[e.jsxs("strong",{children:["更新记录 ",l+1]}),e.jsx("p",{style:{margin:0,color:"var(--willa-text-soft)"},children:"用于演示滚动容器中的 backToTop 行为，悬浮按钮会在滚动后出现。"})]})},l))}),e.jsx(f,{backToTop:!0,target:()=>document.querySelector("[data-float-button-scroll]")})]}),ut=()=>e.jsxs("div",{style:G,children:[e.jsxs(c,{gap:"lg",children:[e.jsxs(P,{justify:"between",align:"start",children:[e.jsxs(c,{gap:"xs",children:[e.jsx("strong",{children:"产品反馈工作台"}),e.jsx("p",{style:{margin:0,color:"var(--willa-text-soft)"},children:"用于承接编辑、评论回复和回到顶部等高频页面动作。"})]}),e.jsx(et,{tone:"info",children:"内部预览"})]}),e.jsxs(P,{gap:"md",wrap:!0,align:"stretch",children:[e.jsx(F,{style:mt,children:e.jsxs(c,{gap:"xs",children:[e.jsx("strong",{children:"当前工作项"}),e.jsx("p",{style:{margin:0,color:"var(--willa-text-soft)"},children:"本周需要同步评论体验、文件预览和 Tour 动画修复。"})]})}),e.jsx(F,{style:{width:"min(100%, 18rem)",padding:"1rem 1.05rem"},children:e.jsxs(c,{gap:"xs",children:[e.jsx("strong",{children:"待处理反馈"}),e.jsx("p",{style:{margin:0,color:"var(--willa-text-soft)"},children:"新增 12 条，建议优先处理移动端和导出问题。"})]})})]})]}),e.jsx(f,{fixed:!1,placement:"bottom-right",icon:e.jsx(at,{}),tooltip:"创建反馈",ariaLabel:"创建反馈"})]}),ft=()=>e.jsxs("div",{style:G,children:[e.jsx(P,{gap:"md",wrap:!0,align:"stretch",children:e.jsx(F,{style:{width:"min(100%, 32rem)",padding:"1rem 1.05rem"},children:e.jsxs(c,{gap:"xs",children:[e.jsx("strong",{children:"内容评审面板"}),e.jsx("p",{style:{margin:0,color:"var(--willa-text-soft)"},children:"展示带文案的悬浮入口，适合需要明确语义的操作。"})]})})}),e.jsx(f,{fixed:!1,placement:"bottom-left",shape:"square",icon:e.jsx(D,{}),label:"发布检查",description:"进入预检流程",tooltip:"执行发布前检查",variant:"primary",badge:"3"})]}),gt=()=>e.jsxs("div",{style:G,children:[e.jsx(c,{gap:"md",children:e.jsx(F,{style:{width:"min(100%, 32rem)",padding:"1rem 1.05rem"},children:e.jsxs(c,{gap:"xs",children:[e.jsx("strong",{children:"组合操作"}),e.jsx("p",{style:{margin:0,color:"var(--willa-text-soft)"},children:"多个高频操作可以折叠到一个主入口下，避免右下角堆太多按钮。"})]})})}),e.jsxs(lt,{fixed:!1,placement:"bottom-left",triggerTooltip:"更多快捷操作",children:[e.jsx(f,{icon:e.jsx(K,{}),tooltip:"查看评论",ariaLabel:"查看评论"}),e.jsx(f,{icon:e.jsx(Z,{}),tooltip:"查看通知",ariaLabel:"查看通知",badge:"2"}),e.jsx(f,{icon:e.jsx(tt,{}),tooltip:"收藏当前页",ariaLabel:"收藏当前页"})]})]}),bt=()=>e.jsxs("div",{style:G,children:[e.jsx(F,{style:{width:"min(100%, 32rem)",padding:"1rem 1.05rem"},children:e.jsxs(c,{gap:"xs",children:[e.jsx("strong",{children:"品牌快捷入口"}),e.jsx("p",{style:{margin:0,color:"var(--willa-text-soft)"},children:"可单独覆盖背景色和文字色，用于贴合品牌或模块语义。"})]})}),e.jsx(f,{fixed:!1,placement:"bottom-left",shape:"square",icon:e.jsx(D,{}),label:"上线中心",description:"查看待发布项",backgroundColor:"#1f2937",textColor:"#f8fafc",badge:"2"})]}),vt=ot({id:"float-button",name:"FloatButton",category:"content",packageName:"willa/FloatButton",description:"用于页面固定入口、回到顶部和高频快捷操作的悬浮按钮组件。",imports:[{name:"FloatButton, FloatButtonGroup",from:"willa/FloatButton"}],css:"willa/FloatButton.css",demo:{name:"BasicPreview",component:ut},code:T(`
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
        width: "min(100%, 56rem)",
        minHeight: "21rem",
        padding: "1.5rem 1.5rem 6rem",
        overflow: "hidden",
        background: "var(--willa-panel-surface-bg)",
        border: "1px solid var(--willa-panel-border)",
        borderRadius: "1.25rem",
      }}
    >
      <Stack gap="lg">
        <Group justify="between" align="start">
          <Stack gap="xs">
            <strong>产品反馈工作台</strong>
            <p style={{ margin: 0, color: "var(--willa-text-soft)" }}>
              用于承接编辑、评论回复和回到顶部等高频页面动作。
            </p>
          </Stack>
          <Badge tone="info">内部预览</Badge>
        </Group>
        <Group gap="md" wrap align="stretch">
          <Card style={{ width: "min(100%, 30rem)", padding: "1rem 1.05rem" }}>
            <Stack gap="xs">
              <strong>当前工作项</strong>
              <p style={{ margin: 0, color: "var(--willa-text-soft)" }}>
                本周需要同步评论体验、文件预览和 Tour 动画修复。
              </p>
            </Stack>
          </Card>
          <Card
            style={{
              width: "min(100%, 18rem)",
              padding: "1rem 1.05rem",
            }}
          >
            <Stack gap="xs">
              <strong>待处理反馈</strong>
              <p style={{ margin: 0, color: "var(--willa-text-soft)" }}>
                新增 12 条，建议优先处理移动端和导出问题。
              </p>
            </Stack>
          </Card>
        </Group>
      </Stack>
      <FloatButton
        fixed={false}
        placement="bottom-right"
        icon={<Pencil2Icon />}
        tooltip="创建反馈"
        ariaLabel="创建反馈"
      />
    </div>;
  `),sections:[{title:"带文案",code:T(`
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
            width: "min(100%, 56rem)",
            minHeight: "21rem",
            padding: "1.5rem 1.5rem 6rem",
            overflow: "hidden",
            background: "var(--willa-panel-surface-bg)",
            border: "1px solid var(--willa-panel-border)",
            borderRadius: "1.25rem",
          }}
        >
          <Card style={{ width: "min(100%, 32rem)", padding: "1rem 1.05rem" }}>
            <Stack gap="xs">
              <strong>内容评审面板</strong>
              <p style={{ margin: 0, color: "var(--willa-text-soft)" }}>
                展示带文案的悬浮入口，适合需要明确语义的操作。
              </p>
            </Stack>
          </Card>
          <FloatButton
            fixed={false}
            placement="bottom-left"
            shape="square"
            icon={<RocketIcon />}
            label="发布检查"
            description="进入预检流程"
            tooltip="执行发布前检查"
            variant="primary"
            badge="3"
          />
        </div>;
      `),content:e.jsx(ft,{})},{title:"分组操作",code:T(`
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
            width: "min(100%, 56rem)",
            minHeight: "21rem",
            padding: "1.5rem 1.5rem 6rem",
            overflow: "hidden",
            background: "var(--willa-panel-surface-bg)",
            border: "1px solid var(--willa-panel-border)",
            borderRadius: "1.25rem",
          }}
        >
          <Stack gap="md">
            <Card style={{ width: "min(100%, 32rem)", padding: "1rem 1.05rem" }}>
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
            placement="bottom-left"
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
      `),content:e.jsx(gt,{})},{title:"自定义颜色",code:T(`
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
            width: "min(100%, 56rem)",
            minHeight: "21rem",
            padding: "1.5rem 1.5rem 6rem",
            overflow: "hidden",
            background: "var(--willa-panel-surface-bg)",
            border: "1px solid var(--willa-panel-border)",
            borderRadius: "1.25rem",
          }}
        >
          <Card style={{ width: "min(100%, 32rem)", padding: "1rem 1.05rem" }}>
            <Stack gap="xs">
              <strong>品牌快捷入口</strong>
              <p style={{ margin: 0, color: "var(--willa-text-soft)" }}>
                可单独覆盖背景色和文字色，用于贴合品牌或模块语义。
              </p>
            </Stack>
          </Card>
          <FloatButton
            fixed={false}
            placement="bottom-left"
            shape="square"
            icon={<RocketIcon />}
            label="上线中心"
            description="查看待发布项"
            backgroundColor="#1f2937"
            textColor="#f8fafc"
            badge="2"
          />
        </div>;
      `),content:e.jsx(bt,{})},{title:"回到顶部",code:T(`
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
            width: "min(100%, 56rem)",
            height: "22rem",
            overflow: "auto",
            padding: "1.5rem 1.5rem 6rem",
            background: "var(--willa-panel-surface-bg)",
            border: "1px solid var(--willa-panel-border)",
            borderRadius: "1.25rem",
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
      `),content:e.jsx(pt,{})}],props:[{name:"icon",type:"ReactNode",description:"按钮主图标。"},{name:"label",type:"ReactNode",description:"主文案。传入后默认会切换为 square 形态。"},{name:"description",type:"ReactNode",description:"辅助说明文案。"},{name:"tooltip",type:"ReactNode",description:"悬浮提示内容。"},{name:"badge",type:"ReactNode",description:"右上角徽标内容。"},{name:"backgroundColor",type:"string",description:"自定义按钮背景色。"},{name:"textColor",type:"string",description:"自定义按钮文字和图标颜色。"},{name:"variant",type:'"default" | "primary"',defaultValue:'"default"',description:"视觉变体。"},{name:"shape",type:'"circle" | "square"',defaultValue:"内容按钮自动推导",description:"按钮形状。未传时会根据是否有文字自动推导。"},{name:"size",type:'"md" | "lg"',defaultValue:'"md"',description:"按钮尺寸。"},{name:"placement",type:'"bottom-right" | "bottom-left" | "top-right" | "top-left"',defaultValue:'"bottom-right"',description:"固定模式下的停靠位置。"},{name:"fixed",type:"boolean",defaultValue:"true",description:"是否使用 fixed 固定到视口。"},{name:"offset",type:"readonly [number | string, number | string]",defaultValue:"[24, 24]",description:"距离视口或容器边缘的偏移量。"},{name:"zIndex",type:"number",description:"固定模式下的层级。"},{name:"ariaLabel",type:"string",description:"无文案时建议提供的无障碍标签。"},{name:"backToTop",type:"boolean",defaultValue:"false",description:"开启后切换为回到顶部按钮行为。"},{name:"visibilityHeight",type:"number",defaultValue:"320",description:"回到顶部按钮出现的滚动阈值。"},{name:"target",type:"Window | HTMLElement | null | (() => Window | HTMLElement | null)",description:"回到顶部行为和可见性监听使用的滚动容器。"},{name:"scrollBehavior",type:"ScrollBehavior",defaultValue:'"smooth"',description:"回到顶部时的滚动行为。"},{name:"href",type:"string",description:"传入后以链接按钮渲染。"},{name:"children",group:"FloatButtonGroup",required:!0,type:"ReactNode",description:"分组内的悬浮按钮列表。"},{name:"open",group:"FloatButtonGroup",type:"boolean",description:"受控展开状态。"},{name:"defaultOpen",group:"FloatButtonGroup",type:"boolean",defaultValue:"false",description:"默认展开状态。"},{name:"onOpenChange",group:"FloatButtonGroup",type:"(open: boolean) => void",description:"展开状态变化回调。"},{name:"triggerIcon",group:"FloatButtonGroup",type:"ReactNode",defaultValue:"<PlusIcon />",description:"主触发按钮图标。"},{name:"triggerTooltip",group:"FloatButtonGroup",type:"ReactNode",description:"主触发按钮提示内容。"},{name:"triggerAriaLabel",group:"FloatButtonGroup",type:"string",defaultValue:'"打开悬浮操作"',description:"主触发按钮的无障碍标签。"},{name:"direction",group:"FloatButtonGroup",type:'"up" | "down" | "left" | "right"',defaultValue:'"up"',description:"分组按钮展开方向。"}]});export{vt as default};
