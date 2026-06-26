import{b0 as e,az as r,an as i,aA as l,Y as m,B as z,b2 as P}from"./index-BXsQUvzN.js";/* empty css              */import{d as w}from"./defineDoc-DlZvCPX0.js";const u={width:"min(100%, 62rem)",height:"22rem",border:"1px solid var(--willa-panel-border)",borderRadius:"0.85rem",overflow:"hidden",background:"var(--willa-panel-surface-bg)"},f={width:"min(100%, 56rem)",height:"18rem",border:"1px solid var(--willa-panel-border)",borderRadius:"0.85rem",overflow:"hidden",background:"var(--willa-panel-surface-bg)"},x={height:"100%",padding:"1.05rem",overflow:"auto"},t={...x,background:"var(--willa-surface-soft)"},d={...x,background:"var(--willa-panel-surface-bg)"},S={...x,background:"var(--willa-surface-tint)"},g={display:"grid",gap:"0.18rem",padding:"0.62rem 0.7rem",borderRadius:"0.55rem",background:"var(--willa-panel-surface-bg)",color:"var(--willa-text)"},R={...g,background:"rgba(37, 99, 235, 0.09)"},o={display:"grid",gap:"0.55rem",padding:"0.9rem",border:"1px solid var(--willa-panel-border)",borderRadius:"0.7rem",background:"var(--willa-surface-tint)"},p={display:"grid",gap:"0.15rem",padding:"0.7rem",borderRadius:"0.6rem",background:"var(--willa-surface-soft)"},a={color:"var(--willa-text-faint)",fontSize:"0.78rem"},s=({title:n,meta:c})=>e.jsxs(l,{gap:"xs",children:[e.jsx("strong",{children:n}),e.jsx("span",{style:a,children:c})]}),h=()=>e.jsxs(l,{gap:"xs",children:[e.jsx(s,{title:"资源库",meta:"拖动分割线调整导航宽度"}),e.jsxs("div",{style:R,children:[e.jsx("strong",{children:"产品文档"}),e.jsx("span",{style:a,children:"12 个文件"})]}),e.jsxs("div",{style:g,children:[e.jsx("strong",{children:"用户反馈"}),e.jsx("span",{style:a,children:"36 条记录"})]}),e.jsxs("div",{style:g,children:[e.jsx("strong",{children:"发布计划"}),e.jsx("span",{style:a,children:"4 个里程碑"})]})]}),b=()=>e.jsxs(l,{gap:"sm",children:[e.jsxs(m,{justify:"between",align:"center",children:[e.jsx(s,{title:"产品反馈摘要",meta:"从上下文中整理可执行结论"}),e.jsx(z,{tone:"success",children:"已生成"})]}),e.jsxs("div",{style:o,children:[e.jsx("strong",{children:"优先处理登录失败与移动端表单校验。"}),e.jsx("span",{style:a,children:"共命中 128 条反馈，影响付费转化、客服工单和批量导出流程。"})]}),e.jsxs(m,{gap:"sm",children:[e.jsxs("div",{style:p,children:[e.jsx("strong",{children:"128"}),e.jsx("span",{style:a,children:"来源"})]}),e.jsxs("div",{style:p,children:[e.jsx("strong",{children:"4.2s"}),e.jsx("span",{style:a,children:"耗时"})]}),e.jsxs("div",{style:p,children:[e.jsx("strong",{children:"高"}),e.jsx("span",{style:a,children:"置信度"})]})]})]}),y=()=>e.jsxs(l,{gap:"sm",children:[e.jsx(s,{title:"属性",meta:"选择内容后展示详情"}),e.jsxs("div",{style:o,children:[e.jsx("span",{style:a,children:"状态"}),e.jsx("strong",{children:"等待人工确认"})]}),e.jsxs("div",{style:o,children:[e.jsx("span",{style:a,children:"负责人"}),e.jsx("strong",{children:"产品团队"})]})]}),k=()=>{const[n,c]=P.useState([28,44,28]);return e.jsxs(l,{gap:"sm",width:"min(100%, 56rem)",children:[e.jsx(m,{gap:"xs",children:n.map((j,v)=>e.jsxs(z,{children:[Math.round(j),"%"]},v))}),e.jsxs(r,{sizes:n,onSizesChange:c,style:f,children:[e.jsx(i,{minSize:16,maxSize:45,children:e.jsx("div",{style:t,children:e.jsx(h,{})})}),e.jsx(i,{minSize:24,children:e.jsx("div",{style:d,children:e.jsx(b,{})})}),e.jsx(i,{minSize:16,maxSize:40,children:e.jsx("div",{style:S,children:e.jsx(y,{})})})]})]})},C=w({id:"split-pane",name:"SplitPane",category:"layout",packageName:"willa/SplitPane",description:"用于可拖拽、可键盘调整和可持久化的产品级分栏布局。",imports:[{name:"SplitPane",from:"willa/SplitPane"},{name:"ResizablePanel",from:"willa/SplitPane"},{name:"Stack",from:"willa/Stack"},{name:"Group",from:"willa/Group"},{name:"Badge",from:"willa/Badge"}],css:"willa/SplitPane.css",demo:{name:"SplitPane",component:r,props:{defaultSizes:[32,68],style:u},children:e.jsxs(e.Fragment,{children:[e.jsx(i,{minSize:20,collapsible:!0,children:e.jsx("div",{style:t,children:e.jsx(h,{})})}),e.jsx(i,{minSize:35,children:e.jsx("div",{style:d,children:e.jsx(b,{})})})]})},code:`
    import { ResizablePanel, SplitPane } from "willa/SplitPane";
    import "willa/SplitPane.css";

    <SplitPane
      defaultSizes={[32, 68]}
      style={{
        width: "min(100%, 62rem)",
        height: "22rem",
        border: "1px solid var(--willa-panel-border)",
        borderRadius: "0.85rem",
        overflow: "hidden",
        background: "var(--willa-panel-surface-bg)",
      }}
    >
      <ResizablePanel minSize={20} collapsible>
        <div style={{ height: "100%", padding: "1.05rem", background: "var(--willa-surface-soft)" }}>
          <strong>资源库</strong>
        </div>
      </ResizablePanel>
      <ResizablePanel minSize={35}>
        <div style={{ height: "100%", padding: "1.05rem" }}>
          <strong>产品反馈摘要</strong>
        </div>
      </ResizablePanel>
    </SplitPane>;
  `,sections:[{title:"三栏工作台",code:`
        <SplitPane
          defaultSizes={[24, 52, 24]}
          storageKey="willa-demo-workspace-split"
          style={{
            width: "min(100%, 62rem)",
            height: "22rem",
            border: "1px solid var(--willa-panel-border)",
            borderRadius: "0.85rem",
            overflow: "hidden",
            background: "var(--willa-panel-surface-bg)",
          }}
        >
          <ResizablePanel minSize={16} maxSize={36} collapsible>
            <div style={{ height: "100%", padding: "1.05rem", background: "var(--willa-surface-soft)" }}>
              <strong>资源库</strong>
            </div>
          </ResizablePanel>
          <ResizablePanel minSize={30}>
            <div style={{ height: "100%", padding: "1.05rem" }}>
              <strong>产品反馈摘要</strong>
            </div>
          </ResizablePanel>
          <ResizablePanel minSize={16} maxSize={36} collapsible>
            <div style={{ height: "100%", padding: "1.05rem", background: "var(--willa-surface-tint)" }}>
              <strong>属性</strong>
            </div>
          </ResizablePanel>
        </SplitPane>;
      `,content:e.jsxs(r,{defaultSizes:[24,52,24],storageKey:"willa-demo-workspace-split",style:{...u,width:"min(100%, 62rem)",height:"22rem"},children:[e.jsx(i,{minSize:16,maxSize:36,collapsible:!0,children:e.jsx("div",{style:t,children:e.jsx(h,{})})}),e.jsx(i,{minSize:30,children:e.jsx("div",{style:d,children:e.jsx(b,{})})}),e.jsx(i,{minSize:16,maxSize:36,collapsible:!0,children:e.jsx("div",{style:S,children:e.jsx(y,{})})})]})},{title:"纵向分割",code:`
        <SplitPane
          orientation="vertical"
          defaultSizes={[58, 42]}
          style={{
            width: "min(100%, 56rem)",
            height: "18rem",
            border: "1px solid var(--willa-panel-border)",
            borderRadius: "0.85rem",
            overflow: "hidden",
            background: "var(--willa-panel-surface-bg)",
          }}
        >
          <ResizablePanel minSize={30}>
            <div style={{ height: "100%", padding: "1.05rem" }}>
              <strong>页面预览</strong>
            </div>
          </ResizablePanel>
          <ResizablePanel minSize={22} collapsible>
            <div style={{ height: "100%", padding: "1.05rem", background: "var(--willa-surface-soft)" }}>
              <strong>构建日志</strong>
            </div>
          </ResizablePanel>
        </SplitPane>;
      `,content:e.jsxs(r,{orientation:"vertical",defaultSizes:[58,42],style:{width:"min(100%, 56rem)",height:"18rem",border:"1px solid var(--willa-panel-border)",borderRadius:"0.85rem",overflow:"hidden",background:"var(--willa-panel-surface-bg)"},children:[e.jsx(i,{minSize:30,children:e.jsx("div",{style:d,children:e.jsxs(l,{gap:"sm",children:[e.jsx(s,{title:"页面预览",meta:"上方面板适合预览、画布和编辑区"}),e.jsx("div",{style:o,children:"当前页面包含 4 个模块，正在等待发布。"})]})})}),e.jsx(i,{minSize:22,collapsible:!0,children:e.jsx("div",{style:t,children:e.jsxs(l,{gap:"xs",children:[e.jsx(s,{title:"构建日志",meta:"下方面板适合输出和诊断信息"}),e.jsx("span",{children:"10:42 编译完成"}),e.jsx("span",{children:"10:43 CSS 依赖已同步"})]})})})]})},{title:"受控尺寸",code:`
        import { useState } from "react";
        import { Badge } from "willa/Badge";
        import { ResizablePanel, SplitPane } from "willa/SplitPane";
        import { Stack } from "willa/Stack";
        import "willa/Badge.css";
        import "willa/SplitPane.css";
        import "willa/Stack.css";

        const Demo = () => {
          const [sizes, setSizes] = useState<Array<number>>([28, 44, 28]);

          return (
            <Stack gap="sm" width="min(100%, 56rem)">
              <Group gap="xs">
                {sizes.map((size, index) => (
                  <Badge key={index}>{Math.round(size)}%</Badge>
                ))}
              </Group>
              <SplitPane
                sizes={sizes}
                onSizesChange={setSizes}
                style={{
                  height: "16rem",
                  border: "1px solid var(--willa-panel-border)",
                  borderRadius: "0.85rem",
                  overflow: "hidden",
                  background: "var(--willa-panel-surface-bg)",
                }}
              >
                <ResizablePanel minSize={16} maxSize={45}>资源库</ResizablePanel>
                <ResizablePanel minSize={24}>内容区</ResizablePanel>
                <ResizablePanel minSize={16} maxSize={40}>属性</ResizablePanel>
              </SplitPane>
            </Stack>
          );
        };
      `,content:e.jsx(k,{})}],props:[{name:"children",type:"ReactNode",required:!0,description:"由 ResizablePanel 组成的面板列表。"},{name:"className",type:"string",description:"根容器的 className。"},{name:"orientation",type:'"horizontal" | "vertical"',defaultValue:'"horizontal"',description:"分割方向。"},{name:"sizes",type:"Array<number>",description:"受控尺寸，按百分比表示。"},{name:"defaultSizes",type:"Array<number>",description:"默认尺寸，按百分比表示。"},{name:"storageKey",type:"string",description:"本地持久化尺寸的 localStorage key。"},{name:"resizeStep",type:"number",defaultValue:"1",description:"拖拽调整步进，单位是百分比。"},{name:"keyboardStep",type:"number",defaultValue:"5",description:"键盘方向键调整步进，单位是百分比。"},{name:"disabled",type:"boolean",defaultValue:"false",description:"是否禁用拖拽和键盘调整。"},{name:"onSizesChange",type:"(sizes: Array<number>) => void",description:"尺寸变化回调。"},{name:"onResizeStart",type:"(event: SplitPaneResizeEvent) => void",description:"开始调整尺寸时触发。"},{name:"onResizeEnd",type:"(event: SplitPaneResizeEvent) => void",description:"结束调整尺寸时触发。"},{name:"ResizablePanel.defaultSize",type:"number",group:"ResizablePanel",description:"单个面板默认尺寸。"},{name:"ResizablePanel.id",type:"string",group:"ResizablePanel",description:"单个面板根元素的 id。"},{name:"ResizablePanel.minSize",type:"number",group:"ResizablePanel",defaultValue:"8",description:"单个面板最小尺寸。"},{name:"ResizablePanel.maxSize",type:"number",group:"ResizablePanel",defaultValue:"92",description:"单个面板最大尺寸。"},{name:"ResizablePanel.collapsible",type:"boolean",group:"ResizablePanel",description:"是否允许通过双击分割线折叠。"},{name:"ResizablePanel.collapsedSize",type:"number",group:"ResizablePanel",defaultValue:"0",description:"折叠后的尺寸。"},{name:"ResizablePanel.className",type:"string",group:"ResizablePanel",description:"单个面板根元素的 className。"},{name:"ResizablePanel.children",type:"ReactNode",group:"ResizablePanel",description:"单个面板内容。"}]});export{C as default};
