import{aZ as e,B as a,h as t,a0 as i,T as l,a5 as p}from"./index-CdU5fkcW.js";import{P as o}from"./index-Lk1aC7r7.js";/* empty css              *//* empty css              */import{d}from"./defineDoc-HVk_Iz0R.js";import"./dom-DvRKQOia.js";const c={display:"flex",flexWrap:"wrap",gap:"0.75rem",alignItems:"center"},n={display:"grid",gap:"0.7rem"},r={display:"grid",gap:"0.35rem"},s={color:"var(--willa-text-soft)",fontSize:"0.82rem"},h=d({id:"popover",name:"Popover",packageName:"willa/Popover",description:"用于承载可交互内容的轻量浮层，适合设置面板、筛选器和上下文信息。",imports:[{name:"Popover",from:"willa/Popover"},{name:"Button",from:"willa/Button"}],css:"willa/Popover.css",demo:{name:"Popover",component:o,props:{title:"生成设置",description:"调整回复长度和输出语气。",trigger:e.jsx(t,{icon:e.jsx(p,{}),variant:"outline",children:"打开设置"}),children:e.jsxs("div",{style:n,children:[e.jsxs("div",{style:r,children:[e.jsx("span",{style:s,children:"模型"}),e.jsx(i,{defaultValue:"willa-ai-default",size:"sm"})]}),e.jsx(a,{tone:"info",children:"已启用上下文增强"})]})}},code:`
    import { Button } from "willa/Button";
    import { Popover } from "willa/Popover";
    import "willa/Button.css";
    import "willa/Popover.css";

    <Popover
      title="生成设置"
      description="调整回复长度和输出语气。"
      trigger={<Button variant="outline">打开设置</Button>}
    >
      <div>这里放表单、操作按钮或说明内容。</div>
    </Popover>;
  `,sections:[{title:"基础浮层",code:`
        <Popover
          title="内容策略"
          description="适合放少量说明和一组轻量操作，不适合承载完整流程。"
          trigger={<Button variant="outline">查看策略</Button>}
        >
          <div style={stackStyle}>
            <Badge tone="info">轻量交互</Badge>
            <span>点击外部区域或按 Escape 可以关闭浮层。</span>
          </div>
        </Popover>;
      `,content:e.jsx(o,{title:"内容策略",description:"适合放少量说明和一组轻量操作，不适合承载完整流程。",trigger:e.jsx(t,{variant:"outline",children:"查看策略"}),children:e.jsxs("div",{style:n,children:[e.jsx(a,{tone:"info",children:"轻量交互"}),e.jsx("span",{children:"点击外部区域或按 Escape 可以关闭浮层。"})]})})},{title:"表单内容",code:`
        <Popover
          title="快速配置"
          description="Popover 可以承载输入框和按钮。"
          trigger={
            <Button icon={<GearIcon />} variant="soft">
              配置参数
            </Button>
          }
          footer={
            <>
              <Button size="sm" variant="ghost">
                重置
              </Button>
              <Button size="sm" variant="solid">
                应用
              </Button>
            </>
          }
        >
          <div style={stackStyle}>
            <div style={fieldStyle}>
              <span style={labelStyle}>提示词前缀</span>
              <Input defaultValue="请给出结构化回答" size="sm" />
            </div>
            <div style={fieldStyle}>
              <span style={labelStyle}>温度</span>
              <Input defaultValue="0.7" size="sm" />
            </div>
          </div>
        </Popover>;
      `,content:e.jsx(o,{title:"快速配置",description:"Popover 可以承载输入框和按钮。",trigger:e.jsx(t,{icon:e.jsx(l,{}),variant:"soft",children:"配置参数"}),footer:e.jsxs(e.Fragment,{children:[e.jsx(t,{size:"sm",variant:"ghost",children:"重置"}),e.jsx(t,{size:"sm",variant:"solid",children:"应用"})]}),children:e.jsxs("div",{style:n,children:[e.jsxs("div",{style:r,children:[e.jsx("span",{style:s,children:"提示词前缀"}),e.jsx(i,{defaultValue:"请给出结构化回答",size:"sm"})]}),e.jsxs("div",{style:r,children:[e.jsx("span",{style:s,children:"温度"}),e.jsx(i,{defaultValue:"0.7",size:"sm"})]})]})})},{title:"方向和对齐",code:`
        <div style={rowStyle}>
          <Popover
            title="上方"
            side="top"
            trigger={<Button variant="outline">Top</Button>}
          >
            <span>从上方展开。</span>
          </Popover>
          <Popover
            title="右侧"
            side="right"
            align="center"
            trigger={<Button variant="outline">Right</Button>}
          >
            <span>从右侧展开。</span>
          </Popover>
          <Popover
            title="下方末端对齐"
            align="end"
            trigger={<Button variant="outline">End</Button>}
          >
            <span>和触发器右侧对齐。</span>
          </Popover>
        </div>;
      `,content:e.jsxs("div",{style:c,children:[e.jsx(o,{title:"上方",side:"top",trigger:e.jsx(t,{variant:"outline",children:"Top"}),children:e.jsx("span",{children:"从上方展开。"})}),e.jsx(o,{title:"右侧",side:"right",align:"center",trigger:e.jsx(t,{variant:"outline",children:"Right"}),children:e.jsx("span",{children:"从右侧展开。"})}),e.jsx(o,{title:"下方末端对齐",align:"end",trigger:e.jsx(t,{variant:"outline",children:"End"}),children:e.jsx("span",{children:"和触发器右侧对齐。"})})]})},{title:"受控状态",code:`
        <Popover
          title="受控 Popover"
          open
          trigger={<Button variant="soft">保持展开</Button>}
        >
          <span>适合和外部状态、快捷键或引导流程配合。</span>
        </Popover>;
      `,content:e.jsx(o,{title:"受控 Popover",open:!0,trigger:e.jsx(t,{variant:"soft",children:"保持展开"}),children:e.jsx("span",{children:"适合和外部状态、快捷键或引导流程配合。"})})}],props:[{name:"trigger",type:"ReactElement",required:!0,description:"触发 Popover 的元素。"},{name:"children",type:"ReactNode",description:"Popover 主体内容。"},{name:"title",type:"ReactNode",description:"浮层标题。"},{name:"description",type:"ReactNode",description:"浮层说明。"},{name:"footer",type:"ReactNode",description:"底部操作区。"},{name:"open",type:"boolean",description:"受控打开状态。"},{name:"defaultOpen",type:"boolean",defaultValue:"false",description:"非受控默认打开状态。"},{name:"onOpenChange",type:"(open: boolean) => void",description:"打开状态变化回调。"},{name:"side",type:'"top" | "right" | "bottom" | "left"',defaultValue:'"bottom"',description:"Popover 相对触发元素的展示方向。"},{name:"align",type:'"start" | "center" | "end"',defaultValue:'"start"',description:"Popover 与触发元素的对齐方式。"},{name:"offset",type:"number",defaultValue:"10",description:"Popover 与触发元素之间的距离。"},{name:"size",type:'"sm" | "md" | "lg"',defaultValue:'"md"',description:"浮层尺寸。"},{name:"autoFocus",type:"boolean",defaultValue:"true",description:"打开后是否自动聚焦浮层内第一个可聚焦元素。"},{name:"closeOnOutsidePointerDown",type:"boolean",defaultValue:"true",description:"点击外部区域时是否关闭。"},{name:"closeOnEscape",type:"boolean",defaultValue:"true",description:"按 Escape 时是否关闭。"},{name:"showArrow",type:"boolean",defaultValue:"true",description:"是否显示指向触发元素的箭头。"},{name:"ariaLabel",type:"string",defaultValue:'"Popover"',description:"没有 title 时的无障碍名称。"},{name:"className",type:"string",description:"外层 className。"},{name:"contentClassName",type:"string",description:"Popover 浮层 className。"}]});export{h as default};
