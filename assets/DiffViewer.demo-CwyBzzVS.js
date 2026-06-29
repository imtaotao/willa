import{b6 as e,b2 as r}from"./index-np_LpDYz.js";import{D as t}from"./index-D9EPs5_M.js";import{d as a}from"./defineDoc-CVPycvmb.js";const o=e(`
  export function resolveStatus(task: Task) {
    if (task.error) {
      return "failed";
    }

    if (task.done) {
      return "done";
    }

    return "pending";
  }
`),n=e(`
  export function resolveStatus(task: Task) {
    if (task.blocked) {
      return "blocked";
    }

    if (task.error) {
      return "failed";
    }

    if (task.done) {
      return "completed";
    }

    return "running";
  }
`),i=e(`
  export const navigation = {
    compact: false,
    groups: ["AI", "Content", "Form"],
    showCounts: false,
  };
`),s=e(`
  export const navigation = {
    compact: true,
    groups: ["AI", "Content", "Form", "Layout"],
    showCounts: true,
    showLocalName: true,
  };
`),c=a({id:"diff-viewer",name:"DiffViewer",packageName:"willa/DiffViewer",description:"用于展示代码、配置或文本变更的差异视图。",imports:[{name:"DiffViewer",from:"willa/DiffViewer"}],css:"willa/DiffViewer.css",demo:{name:"DiffViewer",component:t,props:{title:"状态解析逻辑",before:o,after:n,language:"ts",contextLines:2}},code:e(`
    import { DiffViewer } from "willa/DiffViewer";
    import "willa/DiffViewer.css";

    const beforeCode = \`
      export function resolveStatus(task: Task) {
        if (task.error) {
          return "failed";
        }

        if (task.done) {
          return "done";
        }

        return "pending";
      }
    \`;

    const afterCode = \`
      export function resolveStatus(task: Task) {
        if (task.blocked) {
          return "blocked";
        }

        if (task.error) {
          return "failed";
        }

        if (task.done) {
          return "completed";
        }

        return "running";
      }
    \`;

    <DiffViewer
      title="状态解析逻辑"
      before={beforeCode}
      after={afterCode}
      language="ts"
      contextLines={2}
    />
  `),props:[{name:"before",type:"string",required:!0,description:"变更前的文本内容。"},{name:"after",type:"string",required:!0,description:"变更后的文本内容。"},{name:"language",type:"string",defaultValue:'"text"',description:"代码语言，用于语法高亮和语言标记。"},{name:"title",type:"ReactNode",description:"差异视图标题。"},{name:"beforeLabel",type:"ReactNode",defaultValue:'"Before"',description:"左右对比模式下左侧标题。"},{name:"afterLabel",type:"ReactNode",defaultValue:'"After"',description:"左右对比模式下右侧标题。"},{name:"variant",type:'"unified" | "split"',defaultValue:'"unified"',description:"差异展示方式。"},{name:"showLineNumbers",type:"boolean",defaultValue:"true",description:"是否显示新旧行号。"},{name:"contextLines",type:"number",description:"每个变更周围保留的上下文行数。不传时展示全部未变化内容。"},{name:"copyable",type:"boolean",defaultValue:"true",description:"是否显示复制新版内容的按钮。"},{name:"copiedDuration",type:"number",defaultValue:"300",description:"复制成功反馈持续时间，单位为毫秒。"},{name:"...rootProps",type:"ComponentPropsWithoutRef<'div'>",description:"透传给外层容器的原生属性，例如 className、id、style。"}],sections:[{title:"左右对比",code:`
        const configBefore = \`
          export const navigation = {
            compact: false,
            groups: ["AI", "Content", "Form"],
            showCounts: false,
          };
        \`;

        const configAfter = \`
          export const navigation = {
            compact: true,
            groups: ["AI", "Content", "Form", "Layout"],
            showCounts: true,
            showLocalName: true,
          };
        \`;

        <DiffViewer
          title="导航配置"
          beforeLabel="当前配置"
          afterLabel="调整后"
          before={configBefore}
          after={configAfter}
          language="ts"
          variant="split"
        />
      `,content:r.jsx(t,{title:"导航配置",beforeLabel:"当前配置",afterLabel:"调整后",before:i,after:s,language:"ts",variant:"split"})},{title:"折叠上下文",code:`
        const beforeCode = \`
          export function resolveStatus(task: Task) {
            if (task.error) {
              return "failed";
            }

            if (task.done) {
              return "done";
            }

            return "pending";
          }
        \`;

        const afterCode = \`
          export function resolveStatus(task: Task) {
            if (task.blocked) {
              return "blocked";
            }

            if (task.error) {
              return "failed";
            }

            if (task.done) {
              return "completed";
            }

            return "running";
          }
        \`;

        <DiffViewer
          title="只保留变更附近内容"
          before={beforeCode}
          after={afterCode}
          language="ts"
          contextLines={1}
        />
      `,content:r.jsx(t,{title:"只保留变更附近内容",before:o,after:n,language:"ts",contextLines:1})},{title:"无行号",code:`
        <DiffViewer
          title="文案调整"
          before="AI 正在处理你的任务。"
          after="Willa AI 正在整理上下文并生成建议。"
          showLineNumbers={false}
          copyable={false}
        />
      `,content:r.jsx(t,{title:"文案调整",before:"AI 正在处理你的任务。",after:"Willa AI 正在整理上下文并生成建议。",showLineNumbers:!1,copyable:!1})}]});export{c as default};
