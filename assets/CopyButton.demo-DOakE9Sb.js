import{aW as t,T as e}from"./index-D6gpxGUM.js";import{C as o}from"./index-DY6RvAXd.js";/* empty css              */import{d as n}from"./defineDoc-B7YJrgpp.js";const d=n({id:"copy-button",name:"CopyButton",packageName:"willa/CopyButton",description:"用于复制命令、链接和代码片段，并内置复制成功与失败状态。",imports:[{name:"CopyButton",from:"willa/CopyButton"},{name:"Group",from:"willa/Group"}],css:"willa/CopyButton.css",demo:{name:"CopyButton",component:o,props:{text:"pnpm add willa"},children:"复制安装命令"},code:`
    import { CopyButton } from "willa/CopyButton";
    import "willa/CopyButton.css";

    <CopyButton text="pnpm add willa">复制安装命令</CopyButton>;
  `,sections:[{title:"基础复制",code:`
        <Group gap="md">
          <CopyButton text="pnpm add willa">复制安装命令</CopyButton>
          <CopyButton
            text="import { CopyButton } from 'willa/CopyButton';"
            variant="outline"
          >
            复制组件引入
          </CopyButton>
        </Group>;
      `,content:t.jsxs(e,{gap:"md",children:[t.jsx(o,{text:"pnpm add willa",children:"复制安装命令"}),t.jsx(o,{text:"import { CopyButton } from 'willa/CopyButton';",variant:"outline",children:"复制组件引入"})]})},{title:"反馈文案",code:`
        <Group gap="md">
          <CopyButton text="https://willa-ui.dev" copiedLabel="链接已复制">
            复制链接
          </CopyButton>
          <CopyButton
            text="const message = 'hello willa';"
            copiedDuration={1800}
            copiedLabel="代码已复制"
            failedLabel="请手动复制"
            variant="ghost"
          >
            复制代码
          </CopyButton>
        </Group>;
      `,content:t.jsxs(e,{gap:"md",children:[t.jsx(o,{text:"https://willa-ui.dev",copiedLabel:"链接已复制",children:"复制链接"}),t.jsx(o,{text:"const message = 'hello willa';",copiedDuration:1800,copiedLabel:"代码已复制",failedLabel:"请手动复制",variant:"ghost",children:"复制代码"})]})},{title:"尺寸",code:`
        <Group gap="md">
          <CopyButton text="small" size="sm">
            小尺寸
          </CopyButton>
          <CopyButton text="medium">默认尺寸</CopyButton>
          <CopyButton text="large" size="lg">
            大尺寸
          </CopyButton>
        </Group>;
      `,content:t.jsxs(e,{gap:"md",children:[t.jsx(o,{text:"small",size:"sm",children:"小尺寸"}),t.jsx(o,{text:"medium",children:"默认尺寸"}),t.jsx(o,{text:"large",size:"lg",children:"大尺寸"})]})}],propGroups:[{title:"属性",description:"CopyButton 是面向复制动作的原生 button 封装，复用 Button 的 variant、size 和颜色能力；不支持 href、loading 或 loadingText 等完整 ButtonProps。"}],props:[{name:"text *",type:"string",description:"要写入剪贴板的文本。"},{name:"variant",type:'"solid" | "soft" | "outline" | "ghost" | "link"',defaultValue:'"soft"',description:"按钮的视觉类型，沿用 Button 的 variant。"},{name:"size",type:'"sm" | "md" | "lg"',defaultValue:'"md"',description:"按钮尺寸，沿用 Button 的 size。"},{name:"copiedLabel",type:"ReactNode",defaultValue:'"已复制"',description:"复制成功后的临时文案。"},{name:"failedLabel",type:"ReactNode",defaultValue:'"复制失败"',description:"复制失败后的临时文案。"},{name:"copiedDuration",type:"number",defaultValue:"1200",description:"复制反馈持续时间，单位为毫秒。"},{name:"onCopyText",type:"(text: string) => void",description:"复制成功后的回调。"},{name:"children",type:"ReactNode",defaultValue:'"复制"',description:"默认状态的按钮文案。"}]});export{d as default};
