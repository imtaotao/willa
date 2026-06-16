import{aB as t,al as o,e,R as i,T as l,a4 as a}from"./index-D5IYuN_l.js";/* empty css              */import{d as r}from"./defineDoc-DEnQ702g.js";const n={display:"flex",flexWrap:"wrap",gap:"0.75rem",alignItems:"center"},d=r({id:"tooltip",name:"Tooltip",packageName:"willa/Tooltip",description:"用于解释图标按钮、字段含义和轻量操作提示的说明气泡。",imports:[{name:"Tooltip",from:"willa/Tooltip"},{name:"IconButton",from:"willa/IconButton"}],css:"willa/Tooltip.css",demo:{name:"Tooltip",component:o,props:{content:"更多设置"},children:t.jsx(i,{ariaLabel:"更多设置",icon:t.jsx(a,{}),variant:"outline"})},code:`
    import { QuestionMarkCircledIcon } from "@radix-ui/react-icons";
    import { IconButton } from "willa/IconButton";
    import { Tooltip } from "willa/Tooltip";
    import "willa/IconButton.css";
    import "willa/Tooltip.css";

    <Tooltip content="更多设置">
      <IconButton
        ariaLabel="更多设置"
        icon={<QuestionMarkCircledIcon />}
        variant="outline"
      />
    </Tooltip>;
  `,sections:[{title:"基础提示",code:`
        import { InfoCircledIcon } from "@radix-ui/react-icons";
        import { Button } from "willa/Button";
        import { IconButton } from "willa/IconButton";
        import { Tooltip } from "willa/Tooltip";
        import "willa/Button.css";
        import "willa/IconButton.css";
        import "willa/Tooltip.css";

        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
          <Tooltip content="复制当前链接">
            <Button variant="outline">复制</Button>
          </Tooltip>
          <Tooltip content="这里会影响 AI 生成结果的长度">
            <IconButton
              ariaLabel="查看说明"
              icon={<InfoCircledIcon />}
              variant="soft"
            />
          </Tooltip>
        </div>;
      `,content:t.jsxs("div",{style:n,children:[t.jsx(o,{content:"复制当前链接",children:t.jsx(e,{variant:"outline",children:"复制"})}),t.jsx(o,{content:"这里会影响 AI 生成结果的长度",children:t.jsx(i,{ariaLabel:"查看说明",icon:t.jsx(l,{}),variant:"soft"})})]})},{title:"展开方向",code:`
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
          <Tooltip content="上方提示" side="top" delay={0}>
            <Button variant="outline">Top</Button>
          </Tooltip>
          <Tooltip content="右侧提示" side="right" delay={0}>
            <Button variant="outline">Right</Button>
          </Tooltip>
          <Tooltip content="下方提示" side="bottom" delay={0}>
            <Button variant="outline">Bottom</Button>
          </Tooltip>
          <Tooltip content="左侧提示" side="left" delay={0}>
            <Button variant="outline">Left</Button>
          </Tooltip>
        </div>;
      `,content:t.jsxs("div",{style:n,children:[t.jsx(o,{content:"上方提示",side:"top",delay:0,children:t.jsx(e,{variant:"outline",children:"Top"})}),t.jsx(o,{content:"右侧提示",side:"right",delay:0,children:t.jsx(e,{variant:"outline",children:"Right"})}),t.jsx(o,{content:"下方提示",side:"bottom",delay:0,children:t.jsx(e,{variant:"outline",children:"Bottom"})}),t.jsx(o,{content:"左侧提示",side:"left",delay:0,children:t.jsx(e,{variant:"outline",children:"Left"})})]})},{title:"尺寸和对齐",code:`
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
          <Tooltip content="小尺寸说明" size="sm" delay={0}>
            <Button size="sm" variant="outline">
              Small
            </Button>
          </Tooltip>
          <Tooltip content="和触发元素左侧对齐" align="start" delay={0}>
            <Button variant="outline">Start</Button>
          </Tooltip>
          <Tooltip content="和触发元素右侧对齐" align="end" delay={0}>
            <Button variant="outline">End</Button>
          </Tooltip>
        </div>;
      `,content:t.jsxs("div",{style:n,children:[t.jsx(o,{content:"小尺寸说明",size:"sm",delay:0,children:t.jsx(e,{size:"sm",variant:"outline",children:"Small"})}),t.jsx(o,{content:"和触发元素左侧对齐",align:"start",delay:0,children:t.jsx(e,{variant:"outline",children:"Start"})}),t.jsx(o,{content:"和触发元素右侧对齐",align:"end",delay:0,children:t.jsx(e,{variant:"outline",children:"End"})})]})},{title:"受控状态",code:`
        <Tooltip content="一直展示的受控 Tooltip" open>
          <Button variant="soft">受控展示</Button>
        </Tooltip>;
      `,content:t.jsx(o,{content:"一直展示的受控 Tooltip",open:!0,children:t.jsx(e,{variant:"soft",children:"受控展示"})})},{title:"触屏边界",code:`
        <p>
          Tooltip 在触屏设备上支持点击触发和外部点击关闭。需要承载操作说明、
          确认或交互内容时，使用 Popover 或 Menu。
        </p>;
      `,content:t.jsx("p",{style:{margin:0,color:"var(--docs-text-muted)"},children:"Tooltip 在触屏设备上支持点击触发和外部点击关闭，适合展示解释性提示；需要承载操作说明、确认或交互内容时，使用 Popover 或 Menu。"})}],props:[{name:"content",type:"ReactNode",required:!0,description:"Tooltip 展示内容。"},{name:"children",type:"ReactElement",required:!0,description:"触发 Tooltip 的元素。"},{name:"open",type:"boolean",description:"受控打开状态。"},{name:"defaultOpen",type:"boolean",defaultValue:"false",description:"非受控默认打开状态。"},{name:"onOpenChange",type:"(open: boolean) => void",description:"打开状态变化回调。"},{name:"side",type:'"top" | "right" | "bottom" | "left"',defaultValue:'"top"',description:"Tooltip 相对触发元素的展示方向。"},{name:"align",type:'"start" | "center" | "end"',defaultValue:'"center"',description:"Tooltip 和触发元素的对齐方式。"},{name:"offset",type:"number",defaultValue:"8",description:"Tooltip 与触发元素之间的距离。"},{name:"delay",type:"number",defaultValue:"450",description:"延迟展示时间，单位为毫秒，默认为 450。"},{name:"disabled",type:"boolean",defaultValue:"false",description:"禁用 Tooltip。"},{name:"size",type:'"sm" | "md"',defaultValue:'"md"',description:"Tooltip 尺寸。"},{name:"className",type:"string",description:"外层 className。"},{name:"contentClassName",type:"string",description:"Tooltip 浮层 className。"}]});export{d as default};
