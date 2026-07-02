import{b3 as t,b7 as a,Y as l,j as r,aA as o,S as e,ao as s,T as d,k as p,e as c,f as m,B as u,ag as g}from"./index-CX7dlnN9.js";/* empty css              */import{d as f}from"./defineDoc-DzpR41Bj.js";const i={position:"relative",width:"min(100%, 56rem)",minHeight:"21rem",padding:"1.5rem 1.5rem 6rem",overflow:"hidden",background:"var(--willa-panel-surface-bg)",border:"1px solid var(--willa-panel-border)",borderRadius:"1.25rem"},x={width:"min(100%, 30rem)",padding:"1rem 1.05rem"},h=()=>t.jsxs("div",{"data-float-button-scroll":!0,style:{position:"relative",width:"min(100%, 56rem)",height:"22rem",overflow:"auto",padding:"1.5rem 1.5rem 6rem",background:"var(--willa-panel-surface-bg)",border:"1px solid var(--willa-panel-border)",borderRadius:"1.25rem"},children:[t.jsx(o,{gap:"md",children:Array.from({length:8}).map((v,n)=>t.jsx(r,{children:t.jsxs(o,{gap:"xs",children:[t.jsxs("strong",{children:["更新记录 ",n+1]}),t.jsx("p",{style:{margin:0,color:"var(--willa-text-soft)"},children:"用于演示滚动容器中的 backToTop 行为，悬浮按钮会在滚动后出现。"})]})},n))}),t.jsx(e,{backToTop:!0,variant:"ghost",hoverTextColor:"var(--willa-text-strong)",target:()=>document.querySelector("[data-float-button-scroll]")})]}),b=()=>t.jsxs("div",{style:i,children:[t.jsxs(o,{gap:"lg",children:[t.jsxs(l,{justify:"between",align:"start",children:[t.jsxs(o,{gap:"xs",children:[t.jsx("strong",{children:"产品反馈工作台"}),t.jsx("p",{style:{margin:0,color:"var(--willa-text-soft)"},children:"用于承接编辑、评论回复和回到顶部等高频页面动作。"})]}),t.jsx(u,{tone:"info",children:"内部预览"})]}),t.jsxs(l,{gap:"md",wrap:!0,align:"stretch",children:[t.jsx(r,{style:x,children:t.jsxs(o,{gap:"xs",children:[t.jsx("strong",{children:"当前工作项"}),t.jsx("p",{style:{margin:0,color:"var(--willa-text-soft)"},children:"本周需要同步评论体验、文件预览和 Tour 动画修复。"})]})}),t.jsx(r,{style:{width:"min(100%, 18rem)",padding:"1rem 1.05rem"},children:t.jsxs(o,{gap:"xs",children:[t.jsx("strong",{children:"待处理反馈"}),t.jsx("p",{style:{margin:0,color:"var(--willa-text-soft)"},children:"新增 12 条，建议优先处理移动端和导出问题。"})]})})]})]}),t.jsx(e,{fixed:!1,placement:"bottom-right",icon:t.jsx(g,{}),tooltip:"创建反馈",ariaLabel:"创建反馈"})]}),w=()=>t.jsxs("div",{style:i,children:[t.jsx(l,{gap:"md",wrap:!0,align:"stretch",children:t.jsx(r,{style:{width:"min(100%, 32rem)",padding:"1rem 1.05rem"},children:t.jsxs(o,{gap:"xs",children:[t.jsx("strong",{children:"内容评审面板"}),t.jsx("p",{style:{margin:0,color:"var(--willa-text-soft)"},children:"展示带文案的悬浮入口，适合需要明确语义的操作。"})]})})}),t.jsx(e,{fixed:!1,placement:"bottom-left",shape:"square",icon:t.jsx(s,{}),label:"发布检查",description:"进入预检流程",tooltip:"执行发布前检查",variant:"primary",badge:"3"})]}),y=()=>t.jsxs("div",{style:i,children:[t.jsx(o,{gap:"md",children:t.jsx(r,{style:{width:"min(100%, 32rem)",padding:"1rem 1.05rem"},children:t.jsxs(o,{gap:"xs",children:[t.jsx("strong",{children:"组合操作"}),t.jsx("p",{style:{margin:0,color:"var(--willa-text-soft)"},children:"多个高频操作可以折叠到一个主入口下，避免右下角堆太多按钮。"})]})})}),t.jsxs(d,{fixed:!1,placement:"bottom-left",triggerTooltip:"更多快捷操作",children:[t.jsx(e,{icon:t.jsx(p,{}),tooltip:"查看评论",ariaLabel:"查看评论"}),t.jsx(e,{icon:t.jsx(c,{}),tooltip:"查看通知",ariaLabel:"查看通知",badge:"2"}),t.jsx(e,{icon:t.jsx(m,{}),tooltip:"收藏当前页",ariaLabel:"收藏当前页"})]})]}),B=()=>t.jsxs("div",{style:i,children:[t.jsx(r,{style:{width:"min(100%, 32rem)",padding:"1rem 1.05rem"},children:t.jsxs(o,{gap:"xs",children:[t.jsx("strong",{children:"品牌快捷入口"}),t.jsx("p",{style:{margin:0,color:"var(--willa-text-soft)"},children:"可单独覆盖背景色和文字色，用于贴合品牌或模块语义。"})]})}),t.jsx(e,{fixed:!1,placement:"bottom-left",shape:"square",icon:t.jsx(s,{}),label:"上线中心",description:"查看待发布项",backgroundColor:"#1f2937",hoverBackgroundColor:"#111827",textColor:"#f8fafc",hoverTextColor:"#ffffff",badge:"2"})]}),C=f({id:"float-button",name:"FloatButton",category:"content",packageName:"willa/FloatButton",description:"用于页面固定入口、回到顶部和高频快捷操作的悬浮按钮组件。",imports:[{name:"FloatButton, FloatButtonGroup",from:"willa/FloatButton"}],css:"willa/FloatButton.css",demo:{name:"BasicPreview",component:b},code:a(`
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
  `),sections:[{title:"带文案",code:a(`
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
      `),content:t.jsx(w,{})},{title:"分组操作",code:a(`
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
      `),content:t.jsx(y,{})},{title:"自定义颜色",code:a(`
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
            hoverBackgroundColor="#111827"
            textColor="#f8fafc"
            hoverTextColor="#ffffff"
            badge="2"
          />
        </div>;
      `),content:t.jsx(B,{})},{title:"回到顶部",code:a(`
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
            variant="ghost"
            hoverTextColor="var(--willa-text-strong)"
            target={() => document.querySelector("[data-float-button-scroll]")}
          />
        </div>;
      `),content:t.jsx(h,{})}],props:[{name:"icon",type:"ReactNode",description:"按钮主图标。"},{name:"label",type:"ReactNode",description:"主文案。传入后默认会切换为 square 形态。"},{name:"description",type:"ReactNode",description:"辅助说明文案。"},{name:"tooltip",type:"ReactNode",description:"悬浮提示内容。"},{name:"badge",type:"ReactNode",description:"右上角徽标内容。"},{name:"backgroundColor",type:"string",description:"自定义按钮背景色。"},{name:"hoverBackgroundColor",type:"string",description:"自定义 hover 状态背景色。ghost 未传时保持透明。"},{name:"textColor",type:"string",description:"自定义按钮文字和图标颜色。"},{name:"hoverTextColor",type:"string",description:"自定义 hover 状态文字和图标颜色。"},{name:"variant",type:'"default" | "primary" | "ghost"',defaultValue:'"default"',description:"视觉变体。ghost 会隐藏背景、边框和阴影，只保留内容。"},{name:"shape",type:'"circle" | "square"',defaultValue:"backToTop 为圆形，否则为方形",description:"按钮形状。未传时普通悬浮按钮使用方形，回到顶部按钮使用圆形。"},{name:"size",type:'"md" | "lg"',defaultValue:'"md"',description:"按钮尺寸。"},{name:"placement",type:'"bottom-right" | "bottom-left" | "top-right" | "top-left"',defaultValue:'"bottom-right"',description:"固定模式下的停靠位置。"},{name:"fixed",type:"boolean",defaultValue:"true",description:"是否使用 fixed 固定到视口。"},{name:"offset",type:"readonly [number | string, number | string]",defaultValue:"[24, 24]",description:"距离视口或容器边缘的偏移量。"},{name:"zIndex",type:"number",description:"固定模式下的层级。"},{name:"ariaLabel",type:"string",description:"无文案时建议提供的无障碍标签。"},{name:"backToTop",type:"boolean",defaultValue:"false",description:"开启后切换为回到顶部按钮行为。"},{name:"visibilityHeight",type:"number",defaultValue:"320",description:"回到顶部按钮出现的滚动阈值。"},{name:"target",type:"Window | HTMLElement | null | (() => Window | HTMLElement | null)",description:"回到顶部行为和可见性监听使用的滚动容器。"},{name:"scrollBehavior",type:"ScrollBehavior",defaultValue:'"smooth"',description:"回到顶部时的滚动行为。"},{name:"className",type:"string",description:"根按钮或链接元素的 className。"},{name:"contentClassName",type:"string",description:"按钮内容区域的 className。"},{name:"href",type:"string",description:"传入后以链接按钮渲染。"},{name:"type",type:'"button" | "submit" | "reset"',description:"原生 button 类型，仅在非链接按钮时生效。"},{name:"FloatButtonGroup.children",group:"FloatButtonGroup",required:!0,type:"ReactNode",description:"分组内的悬浮按钮列表。"},{name:"FloatButtonGroup.open",group:"FloatButtonGroup",type:"boolean",description:"受控展开状态。"},{name:"FloatButtonGroup.defaultOpen",group:"FloatButtonGroup",type:"boolean",defaultValue:"false",description:"默认展开状态。"},{name:"FloatButtonGroup.onOpenChange",group:"FloatButtonGroup",type:"(open: boolean) => void",description:"展开状态变化回调。"},{name:"FloatButtonGroup.triggerIcon",group:"FloatButtonGroup",type:"ReactNode",defaultValue:"<PlusIcon />",description:"主触发按钮图标。"},{name:"FloatButtonGroup.triggerTooltip",group:"FloatButtonGroup",type:"ReactNode",description:"主触发按钮提示内容。"},{name:"FloatButtonGroup.triggerAriaLabel",group:"FloatButtonGroup",type:"string",defaultValue:'"打开悬浮操作"',description:"主触发按钮的无障碍标签。"},{name:"FloatButtonGroup.direction",group:"FloatButtonGroup",type:'"up" | "down" | "left" | "right"',defaultValue:'"up"',description:"分组按钮展开方向。"},{name:"FloatButtonGroup.placement",group:"FloatButtonGroup",type:'"bottom-right" | "bottom-left" | "top-right" | "top-left"',defaultValue:'"bottom-right"',description:"分组触发按钮的停靠位置。"},{name:"FloatButtonGroup.fixed",group:"FloatButtonGroup",type:"boolean",defaultValue:"true",description:"分组触发按钮是否使用 fixed 固定到视口。"},{name:"FloatButtonGroup.offset",group:"FloatButtonGroup",type:"readonly [number | string, number | string]",defaultValue:"[24, 24]",description:"分组触发按钮距离视口或容器边缘的偏移量。"},{name:"FloatButtonGroup.zIndex",group:"FloatButtonGroup",type:"number",description:"分组触发按钮固定模式下的层级。"},{name:"FloatButtonGroup.className",group:"FloatButtonGroup",type:"string",description:"分组根容器的 className。"},{name:"FloatButtonGroup.contentClassName",group:"FloatButtonGroup",type:"string",description:"分组展开内容区域的 className。"}]});export{C as default};
