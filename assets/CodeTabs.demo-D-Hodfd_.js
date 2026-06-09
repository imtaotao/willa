import{af as a,n as t,ai as e}from"./index-N444S8s-.js";import{d as o}from"./defineDoc-BEY_f65q.js";const s=[{label:"pnpm",language:"bash",code:"pnpm add willa"},{label:"npm",language:"bash",code:"npm install willa"},{label:"yarn",language:"bash",code:"yarn add willa"}],n=[{label:"ShareButton.tsx",language:"tsx",code:e(`
      import { useState } from "react";
      import { Button } from "willa/Button";
      import "willa/Button.css";

      type ShareButtonProps = {
        url: string;
      };

      export function ShareButton(props: ShareButtonProps) {
        const [copied, setCopied] = useState(false);

        return (
          <Button
            copyText={props.url}
            variant={copied ? "solid" : "soft"}
            onClick={() => setCopied(true)}
          >
            {copied ? "已复制" : "复制链接"}
          </Button>
        );
      }
    `),highlightLines:[5,[12,16]]},{label:"theme.css",language:"css",code:e(`
      .share-button {
        display: flex;
        gap: 0.75rem;
        align-items: center;
      }
    `)}],i=[{label:"C++",language:"c++",code:e(`
      #include <iostream>

      int main() {
        std::cout << "Hello Willa";
      }
    `)},{label:"Rust",language:"rust",code:e(`
      fn main() {
        println!("Hello Willa");
      }
    `)},{label:"Go",language:"go",code:e(`
      package main

      import "fmt"

      func main() {
        fmt.Println("Hello Willa")
      }
    `)},{label:"HTML",language:"html",code:e(`
      <article class="willa-card">
        <h2>Hello Willa</h2>
      </article>
    `)}],m=o({id:"code-tabs",name:"CodeTabs",packageName:"willa/CodeTabs",description:"用于在一组相关代码片段之间切换，例如安装命令、多框架示例和配置片段。",imports:[{name:"CodeTabs",from:"willa/CodeTabs"}],css:"willa/CodeTabs.css",demo:{name:"CodeTabs",component:t,props:{items:n,showLineNumbers:!0}},code:`
    import { CodeTabs } from "willa/CodeTabs";
    import "willa/CodeTabs.css";

    const items = [
      {
        label: "ShareButton.tsx",
        language: "tsx",
        code: "export function ShareButton() { ... }",
        highlightLines: [5, [12, 16]],
      },
      {
        label: "theme.css",
        language: "css",
        code: ".share-button { ... }",
      },
    ];

    <CodeTabs items={items} showLineNumbers />
  `,sections:[{title:"多语言高亮",content:a.jsx(t,{items:i})},{title:"尺寸",content:a.jsx(t,{items:s,size:"sm"})},{title:"禁用标签",content:a.jsx(t,{items:[...s,{label:"bun",language:"bash",code:"bun add willa",disabled:!0}]})}],props:[{name:"items",type:"Array<CodeTabsItem>",required:!0,description:"代码标签列表。"},{name:"size",type:'"sm" | "md"',description:"标签按钮尺寸。"},{name:"showLineNumbers",type:"boolean",description:"是否展示行号；单个 item 可通过 showLineNumbers 覆盖。"},{name:"copiedDuration",type:"number",description:"复制成功反馈持续时间，单位为毫秒，默认 300。"},{name:"className",type:"string",description:"可选的外层 className。"},{name:"CodeTabsItem.label",type:"ReactNode",required:!0,group:"CodeTabsItem",description:"标签上展示的内容。"},{name:"CodeTabsItem.code",type:"string",required:!0,group:"CodeTabsItem",description:"代码内容。"},{name:"CodeTabsItem.language",type:"string",group:"CodeTabsItem",description:"代码语言，用于语法高亮和右上角语言标记。"},{name:"CodeTabsItem.disabled",type:"boolean",group:"CodeTabsItem",description:"禁用当前代码标签。"},{name:"CodeTabsItem.highlightLines",type:"Array<number | [number, number]>",group:"CodeTabsItem",description:"需要高亮的代码行，支持单行或区间。"},{name:"CodeTabsItem.showLineNumbers",type:"boolean",group:"CodeTabsItem",description:"覆盖当前代码项是否展示行号。"}]});export{m as default};
