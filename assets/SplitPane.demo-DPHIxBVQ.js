import{d as e,l as t,p as n}from"./aidly.esm-bundler-DaTrP4tr.js";import{t as r}from"./Group-C-JhzSsC.js";import{n as i,t as a}from"./SplitPane-Cu5eCijP.js";import{t as o}from"./Stack-DwlHdG-i.js";import{a as s}from"./index-y4TTR3pk.js";import{t as c}from"./defineDoc-Cid5xIoZ.js";import"./style-D3eq1OTT.js";var l=n(e(),1),u=t(),d={width:`min(100%, 62rem)`,height:`22rem`,border:`1px solid var(--willa-panel-border)`,borderRadius:`0.85rem`,overflow:`hidden`,background:`var(--willa-panel-surface-bg)`},f={width:`min(100%, 56rem)`,height:`18rem`,border:`1px solid var(--willa-panel-border)`,borderRadius:`0.85rem`,overflow:`hidden`,background:`var(--willa-panel-surface-bg)`},p={height:`100%`,padding:`1.05rem`,overflow:`auto`},m={...p,background:`var(--willa-surface-soft)`},h={...p,background:`var(--willa-panel-surface-bg)`},g={...p,background:`var(--willa-surface-tint)`},_={display:`grid`,gap:`0.18rem`,padding:`0.62rem 0.7rem`,borderRadius:`0.55rem`,background:`var(--willa-panel-surface-bg)`,color:`var(--willa-text)`},v={..._,background:`rgba(37, 99, 235, 0.09)`},y={display:`grid`,gap:`0.55rem`,padding:`0.9rem`,border:`1px solid var(--willa-panel-border)`,borderRadius:`0.7rem`,background:`var(--willa-surface-tint)`},b={display:`grid`,gap:`0.15rem`,padding:`0.7rem`,borderRadius:`0.6rem`,background:`var(--willa-surface-soft)`},x={color:`var(--willa-text-faint)`,fontSize:`0.78rem`},S=({title:e,meta:t})=>(0,u.jsxs)(o,{gap:`xs`,children:[(0,u.jsx)(`strong`,{children:e}),(0,u.jsx)(`span`,{style:x,children:t})]}),C=()=>(0,u.jsxs)(o,{gap:`xs`,children:[(0,u.jsx)(S,{title:`资源库`,meta:`拖动分割线调整导航宽度`}),(0,u.jsxs)(`div`,{style:v,children:[(0,u.jsx)(`strong`,{children:`产品文档`}),(0,u.jsx)(`span`,{style:x,children:`12 个文件`})]}),(0,u.jsxs)(`div`,{style:_,children:[(0,u.jsx)(`strong`,{children:`用户反馈`}),(0,u.jsx)(`span`,{style:x,children:`36 条记录`})]}),(0,u.jsxs)(`div`,{style:_,children:[(0,u.jsx)(`strong`,{children:`发布计划`}),(0,u.jsx)(`span`,{style:x,children:`4 个里程碑`})]})]}),w=()=>(0,u.jsxs)(o,{gap:`sm`,children:[(0,u.jsxs)(r,{justify:`between`,align:`center`,children:[(0,u.jsx)(S,{title:`产品反馈摘要`,meta:`从上下文中整理可执行结论`}),(0,u.jsx)(s,{tone:`success`,children:`已生成`})]}),(0,u.jsxs)(`div`,{style:y,children:[(0,u.jsx)(`strong`,{children:`优先处理登录失败与移动端表单校验。`}),(0,u.jsx)(`span`,{style:x,children:`共命中 128 条反馈，影响付费转化、客服工单和批量导出流程。`})]}),(0,u.jsxs)(r,{gap:`sm`,children:[(0,u.jsxs)(`div`,{style:b,children:[(0,u.jsx)(`strong`,{children:`128`}),(0,u.jsx)(`span`,{style:x,children:`来源`})]}),(0,u.jsxs)(`div`,{style:b,children:[(0,u.jsx)(`strong`,{children:`4.2s`}),(0,u.jsx)(`span`,{style:x,children:`耗时`})]}),(0,u.jsxs)(`div`,{style:b,children:[(0,u.jsx)(`strong`,{children:`高`}),(0,u.jsx)(`span`,{style:x,children:`置信度`})]})]})]}),T=()=>(0,u.jsxs)(o,{gap:`sm`,children:[(0,u.jsx)(S,{title:`属性`,meta:`选择内容后展示详情`}),(0,u.jsxs)(`div`,{style:y,children:[(0,u.jsx)(`span`,{style:x,children:`状态`}),(0,u.jsx)(`strong`,{children:`等待人工确认`})]}),(0,u.jsxs)(`div`,{style:y,children:[(0,u.jsx)(`span`,{style:x,children:`负责人`}),(0,u.jsx)(`strong`,{children:`产品团队`})]})]}),E=()=>{let[e,t]=(0,l.useState)([28,44,28]);return(0,u.jsxs)(o,{gap:`sm`,width:`min(100%, 56rem)`,children:[(0,u.jsx)(r,{gap:`xs`,children:e.map((e,t)=>(0,u.jsxs)(s,{children:[Math.round(e),`%`]},t))}),(0,u.jsxs)(i,{sizes:e,onSizesChange:t,style:f,children:[(0,u.jsx)(a,{minSize:16,maxSize:45,children:(0,u.jsx)(`div`,{style:m,children:(0,u.jsx)(C,{})})}),(0,u.jsx)(a,{minSize:24,children:(0,u.jsx)(`div`,{style:h,children:(0,u.jsx)(w,{})})}),(0,u.jsx)(a,{minSize:16,maxSize:40,children:(0,u.jsx)(`div`,{style:g,children:(0,u.jsx)(T,{})})})]})]})},D=c({id:`split-pane`,name:`SplitPane`,category:`layout`,packageName:`willa/SplitPane`,description:`用于可拖拽、可键盘调整和可持久化的产品级分栏布局。`,imports:[{name:`SplitPane`,from:`willa/SplitPane`},{name:`ResizablePanel`,from:`willa/SplitPane`},{name:`Stack`,from:`willa/Stack`},{name:`Group`,from:`willa/Group`},{name:`Badge`,from:`willa/Badge`}],css:`willa/SplitPane.css`,demo:{name:`SplitPane`,component:i,props:{defaultSizes:[32,68],style:d},children:(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(a,{minSize:20,collapsible:!0,children:(0,u.jsx)(`div`,{style:m,children:(0,u.jsx)(C,{})})}),(0,u.jsx)(a,{minSize:35,children:(0,u.jsx)(`div`,{style:h,children:(0,u.jsx)(w,{})})})]})},code:`
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
  `,sections:[{title:`三栏工作台`,code:`
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
      `,content:(0,u.jsxs)(i,{defaultSizes:[24,52,24],storageKey:`willa-demo-workspace-split`,style:{...d,width:`min(100%, 62rem)`,height:`22rem`},children:[(0,u.jsx)(a,{minSize:16,maxSize:36,collapsible:!0,children:(0,u.jsx)(`div`,{style:m,children:(0,u.jsx)(C,{})})}),(0,u.jsx)(a,{minSize:30,children:(0,u.jsx)(`div`,{style:h,children:(0,u.jsx)(w,{})})}),(0,u.jsx)(a,{minSize:16,maxSize:36,collapsible:!0,children:(0,u.jsx)(`div`,{style:g,children:(0,u.jsx)(T,{})})})]})},{title:`纵向分割`,code:`
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
      `,content:(0,u.jsxs)(i,{orientation:`vertical`,defaultSizes:[58,42],style:{width:`min(100%, 56rem)`,height:`18rem`,border:`1px solid var(--willa-panel-border)`,borderRadius:`0.85rem`,overflow:`hidden`,background:`var(--willa-panel-surface-bg)`},children:[(0,u.jsx)(a,{minSize:30,children:(0,u.jsx)(`div`,{style:h,children:(0,u.jsxs)(o,{gap:`sm`,children:[(0,u.jsx)(S,{title:`页面预览`,meta:`上方面板适合预览、画布和编辑区`}),(0,u.jsx)(`div`,{style:y,children:`当前页面包含 4 个模块，正在等待发布。`})]})})}),(0,u.jsx)(a,{minSize:22,collapsible:!0,children:(0,u.jsx)(`div`,{style:m,children:(0,u.jsxs)(o,{gap:`xs`,children:[(0,u.jsx)(S,{title:`构建日志`,meta:`下方面板适合输出和诊断信息`}),(0,u.jsx)(`span`,{children:`10:42 编译完成`}),(0,u.jsx)(`span`,{children:`10:43 CSS 依赖已同步`})]})})})]})},{title:`受控尺寸`,code:`
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
      `,content:(0,u.jsx)(E,{})}],props:[{name:`children`,type:`ReactNode`,required:!0,description:`由 ResizablePanel 组成的面板列表。`},{name:`className`,type:`string`,description:`根容器的 className。`},{name:`orientation`,type:`"horizontal" | "vertical"`,defaultValue:`"horizontal"`,description:`分割方向。`},{name:`sizes`,type:`Array<number>`,description:`受控尺寸，按百分比表示。`},{name:`defaultSizes`,type:`Array<number>`,description:`默认尺寸，按百分比表示。`},{name:`storageKey`,type:`string`,description:`本地持久化尺寸的 localStorage key。`},{name:`resizeStep`,type:`number`,defaultValue:`1`,description:`拖拽调整步进，单位是百分比。`},{name:`keyboardStep`,type:`number`,defaultValue:`5`,description:`键盘方向键调整步进，单位是百分比。`},{name:`disabled`,type:`boolean`,defaultValue:`false`,description:`是否禁用拖拽和键盘调整。`},{name:`onSizesChange`,type:`(sizes: Array<number>) => void`,description:`尺寸变化回调。`},{name:`onResizeStart`,type:`(event: SplitPaneResizeEvent) => void`,description:`开始调整尺寸时触发。`},{name:`onResizeEnd`,type:`(event: SplitPaneResizeEvent) => void`,description:`结束调整尺寸时触发。`},{name:`ResizablePanel.defaultSize`,type:`number`,group:`ResizablePanel`,description:`单个面板默认尺寸。`},{name:`ResizablePanel.id`,type:`string`,group:`ResizablePanel`,description:`单个面板根元素的 id。`},{name:`ResizablePanel.minSize`,type:`number`,group:`ResizablePanel`,defaultValue:`8`,description:`单个面板最小尺寸。`},{name:`ResizablePanel.maxSize`,type:`number`,group:`ResizablePanel`,defaultValue:`92`,description:`单个面板最大尺寸。`},{name:`ResizablePanel.collapsible`,type:`boolean`,group:`ResizablePanel`,description:`是否允许通过双击分割线折叠。`},{name:`ResizablePanel.collapsedSize`,type:`number`,group:`ResizablePanel`,defaultValue:`0`,description:`折叠后的尺寸。`},{name:`ResizablePanel.className`,type:`string`,group:`ResizablePanel`,description:`单个面板根元素的 className。`},{name:`ResizablePanel.children`,type:`ReactNode`,group:`ResizablePanel`,description:`单个面板内容。`}]});export{D as default};