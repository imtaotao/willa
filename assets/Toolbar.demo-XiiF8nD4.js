import{aY as o,Y as a,ak as s,R as l,i as e,I as i,aq as c,a_ as d,O as b,w as v}from"./index-CQgt5noN.js";import{T as t}from"./index-CWek6vFU.js";/* empty css              *//* empty css              */import{d as h}from"./defineDoc-DyTufkKG.js";const z={display:"grid",gap:"1rem",width:"min(100%, 42rem)",marginInline:"auto"},I={display:"grid",gap:"0.85rem",width:"min(100%, 38rem)",marginInline:"auto",color:"var(--willa-text)"},g=()=>{const[m,p]=d.useState(!0),[n,u]=d.useState(!1);return o.jsxs("div",{style:I,children:[o.jsxs(t,{ariaLabel:"编辑器工具",size:"sm",separator:o.jsx(c,{orientation:"vertical",size:"sm"}),children:[o.jsx(a,{ariaLabel:"预览",icon:o.jsx(b,{}),pressed:m,size:"sm",variant:"ghost",onClick:()=>p(r=>!r)}),o.jsx(a,{ariaLabel:"源码模式",icon:o.jsx(v,{}),pressed:n,size:"sm",variant:"ghost",onClick:()=>u(r=>!r)}),o.jsx(e,{icon:o.jsx(i,{}),pressed:n,size:"sm",variant:"ghost",children:"导出"})]}),o.jsxs("p",{style:{margin:0},children:["当前模式：",m?"预览开启":"预览关闭","，",n?"源码视图":"富文本视图"]})]})},f=h({id:"toolbar",name:"Toolbar",displayName:"工具栏",packageName:"willa/Toolbar",description:"为表格、代码块、编辑器和内容操作区提供稳定的工具栏语义和编排模式。",imports:[{name:"Button",from:"willa/Button"},{name:"IconButton",from:"willa/IconButton"},{name:"Separator",from:"willa/Separator"},{name:"Toolbar",from:"willa/Toolbar"},{name:"DownloadIcon, GearIcon, ReloadIcon",from:"@radix-ui/react-icons"}],css:"willa/Toolbar.css",demo:{name:"Toolbar",component:t,props:{ariaLabel:"表格操作",size:"sm",separator:o.jsx(c,{orientation:"vertical",size:"sm"})},children:[{name:"IconButton",component:a,props:{ariaLabel:"刷新",icon:o.jsx(s,{}),size:"sm",variant:"ghost"}},{name:"IconButton",component:a,props:{ariaLabel:"列设置",icon:o.jsx(l,{}),size:"sm",variant:"ghost"}},{name:"Button",component:e,props:{icon:o.jsx(i,{}),size:"sm",variant:"ghost"},children:"导出"}]},code:`
    import { DownloadIcon, GearIcon, ReloadIcon } from "@radix-ui/react-icons";
    import { Button } from "willa/Button";
    import { IconButton } from "willa/IconButton";
    import { Separator } from "willa/Separator";
    import { Toolbar } from "willa/Toolbar";
    import "willa/Button.css";
    import "willa/IconButton.css";
    import "willa/Separator.css";
    import "willa/Toolbar.css";

    <Toolbar
      ariaLabel="表格操作"
      size="sm"
      separator={<Separator orientation="vertical" size="sm" />}
    >
      <IconButton ariaLabel="刷新" icon={<ReloadIcon />} size="sm" variant="ghost" />
      <IconButton ariaLabel="列设置" icon={<GearIcon />} size="sm" variant="ghost" />
      <Button icon={<DownloadIcon />} size="sm" variant="ghost">
        导出
      </Button>
    </Toolbar>;
  `,sections:[{title:"基础编排",code:`
        <Toolbar
          ariaLabel="表格操作"
          size="sm"
          separator={<Separator orientation="vertical" size="sm" />}
        >
          <IconButton ariaLabel="刷新" icon={<ReloadIcon />} size="sm" variant="ghost" />
          <IconButton ariaLabel="列设置" icon={<GearIcon />} size="sm" variant="ghost" />
          <Button icon={<DownloadIcon />} size="sm" variant="ghost">
            导出
          </Button>
        </Toolbar>;
      `,content:o.jsxs(t,{ariaLabel:"表格操作",size:"sm",separator:o.jsx(c,{orientation:"vertical",size:"sm"}),children:[o.jsx(a,{ariaLabel:"刷新",icon:o.jsx(s,{}),size:"sm",variant:"ghost"}),o.jsx(a,{ariaLabel:"列设置",icon:o.jsx(l,{}),size:"sm",variant:"ghost"}),o.jsx(e,{icon:o.jsx(i,{}),size:"sm",variant:"ghost",children:"导出"})]})},{title:"开关型工具",code:`
        import { useState } from "react";
        import { CodeIcon, DownloadIcon, EyeOpenIcon } from "@radix-ui/react-icons";

        const Demo = () => {
          const [preview, setPreview] = useState(true);
          const [codeMode, setCodeMode] = useState(false);

          return (
            <Toolbar
              ariaLabel="编辑器工具"
              size="sm"
              separator={<Separator orientation="vertical" size="sm" />}
            >
              <IconButton
                ariaLabel="预览"
                icon={<EyeOpenIcon />}
                pressed={preview}
                size="sm"
                variant="ghost"
                onClick={() => setPreview((value) => !value)}
              />
              <IconButton
                ariaLabel="源码模式"
                icon={<CodeIcon />}
                pressed={codeMode}
                size="sm"
                variant="ghost"
                onClick={() => setCodeMode((value) => !value)}
              />
              <Button
                icon={<DownloadIcon />}
                pressed={codeMode}
                size="sm"
                variant="ghost"
              >
                导出
              </Button>
            </Toolbar>
          );
        };
      `,content:o.jsx(g,{})},{title:"竖向工具栏",code:`
        <Toolbar ariaLabel="画布工具" orientation="vertical" size="sm">
          <IconButton ariaLabel="刷新画布" icon={<ReloadIcon />} size="sm" variant="ghost" />
          <IconButton ariaLabel="配置画布" icon={<GearIcon />} size="sm" variant="ghost" />
          <IconButton ariaLabel="导出画布" icon={<DownloadIcon />} size="sm" variant="ghost" />
        </Toolbar>;
      `,content:o.jsxs(t,{ariaLabel:"画布工具",orientation:"vertical",size:"sm",children:[o.jsx(a,{ariaLabel:"刷新画布",icon:o.jsx(s,{}),size:"sm",variant:"ghost"}),o.jsx(a,{ariaLabel:"配置画布",icon:o.jsx(l,{}),size:"sm",variant:"ghost"}),o.jsx(a,{ariaLabel:"导出画布",icon:o.jsx(i,{}),size:"sm",variant:"ghost"})]})},{title:"换行工具栏",code:`
        <Toolbar ariaLabel="内容操作" wrap>
          <Button size="sm" variant="ghost">复制链接</Button>
          <Button size="sm" variant="ghost">生成摘要</Button>
          <Button size="sm" variant="ghost">添加到收藏</Button>
          <Button size="sm" variant="ghost">导出 Markdown</Button>
        </Toolbar>;
      `,content:o.jsx("div",{style:z,children:o.jsxs(t,{ariaLabel:"内容操作",wrap:!0,children:[o.jsx(e,{size:"sm",variant:"ghost",children:"复制链接"}),o.jsx(e,{size:"sm",variant:"ghost",children:"生成摘要"}),o.jsx(e,{size:"sm",variant:"ghost",children:"添加到收藏"}),o.jsx(e,{size:"sm",variant:"ghost",children:"导出 Markdown"})]})})}],props:[{name:"ariaLabel",type:"string",description:"无可见标题时提供工具栏名称，对应 aria-label。"},{name:"ariaLabelledBy",type:"string",description:"有外部标题时关联标题元素，对应 aria-labelledby。"},{name:"orientation",type:'"horizontal" | "vertical"',defaultValue:'"horizontal"',description:"工具栏方向，同时设置 aria-orientation。"},{name:"size",type:'"sm" | "md"',defaultValue:'"md"',description:"控制工具栏容器的 padding，不修改内部按钮尺寸。"},{name:"gap",type:"GroupGap",defaultValue:'"xs"',description:"透传给内部 Group 的间距。"},{name:"align",type:"GroupAlign",defaultValue:'"center"',description:"透传给内部 Group 的交叉轴对齐方式。"},{name:"justify",type:"GroupJustify",defaultValue:'"start"',description:"透传给内部 Group 的主轴对齐方式。"},{name:"wrap",type:"boolean",defaultValue:"false",description:"是否允许工具项换行。"},{name:"separator",type:"ReactNode",description:"透传给内部 Group 的分隔元素，常配合 Separator 使用。"},{name:"children",type:"ReactNode",description:"放置 Button、IconButton、Menu、Popover 等操作组件。"}]});export{f as default};
