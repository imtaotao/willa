import{b3 as t,h as o,Y as c}from"./index-BFdlIxUH.js";import{t as a,c as s}from"./index-8FxQqQE6.js";/* empty css              *//* empty css              */import{d as m}from"./defineDoc-CmN89srR.js";let n,e,i,r;const l=()=>(n??(n=s({placement:"top",duration:1600,maxToasts:2})),n),p=()=>(e??(e=s({placement:"bottom"})),e),u=()=>(i??(i=s({placement:"bottom-right"})),i),T=()=>(r??(r=s({placement:"top",theme:"dark"})),r),d=()=>t.jsxs(c,{gap:"md",children:[t.jsx(o,{variant:"solid",onClick:()=>{a.success("发布成功",{description:"内容已经进入公开队列。"})},children:"成功提示"}),t.jsx(o,{variant:"soft",onClick:()=>{l().info("顶部配置",{description:"由 createToast 创建的实例触发。"})},children:"配置实例"})]}),f=()=>t.jsx(o,{variant:"soft",onClick:()=>{a.info("草稿已归档",{action:{label:"撤销",onClick:()=>a.success("已撤销归档")}})},children:"显示操作"}),g=()=>t.jsx(o,{variant:"outline",onClick:()=>{a.warning("同步仍在进行",{description:"这个提示不会自动关闭。",duration:!1})},children:"常驻提示"}),B=()=>t.jsxs(c,{gap:"md",children:[t.jsx(o,{variant:"soft",onClick:()=>{l().info("顶部居中",{description:"这个提示会更快关闭。"})},children:"顶部配置"}),t.jsx(o,{variant:"outline",onClick:()=>{u().success("右下角提示")},children:"右下角配置"})]}),w=()=>t.jsx(o,{variant:"soft",onClick:()=>{T().success("深色主题提示",{description:"这个实例会固定使用 dark 主题。"})},children:"深色 Toast"}),v=m({id:"toast",name:"Toast",packageName:"willa/Toast",description:"用于操作反馈、状态变化和轻量通知的浮层提示。",imports:[{name:"toast",from:"willa/Toast"},{name:"createToast",from:"willa/Toast"},{name:"Button",from:"willa/Button"},{name:"Group",from:"willa/Group"}],css:"willa/Toast.css",demo:{name:"ToastPreview",component:d},code:`
    import { Button } from "willa/Button";
    import { createToast, toast } from "willa/Toast";
    import "willa/Button.css";
    import "willa/Toast.css";

    const compactToast = createToast({
      placement: "top-right",
      duration: 3000,
      maxToasts: 4,
    });

    <>
      <Button onClick={() => toast.success("默认提示")}>默认实例</Button>
      <Button onClick={() => compactToast.info("配置后的提示")}>配置实例</Button>
    </>;
  `,sections:[{title:"带操作",code:`
        import { Button } from "willa/Button";
        import { toast } from "willa/Toast";
        import "willa/Button.css";
        import "willa/Toast.css";

        <Button
          variant="soft"
          onClick={() => {
            toast.info("草稿已归档", {
              action: {
                label: "撤销",
                onClick: () => toast.success("已撤销归档"),
              },
            });
          }}
        >
          显示操作
        </Button>;
      `,content:t.jsx(f,{})},{title:"常驻提示",code:`
        import { Button } from "willa/Button";
        import { toast } from "willa/Toast";
        import "willa/Button.css";
        import "willa/Toast.css";

        <Button
          variant="outline"
          onClick={() => {
            toast.warning("同步仍在进行", {
              description: "这个提示不会自动关闭。",
              duration: false,
            });
          }}
        >
          常驻提示
        </Button>;
      `,content:t.jsx(g,{})},{title:"配置 ToastConfig",code:`
        import { Button } from "willa/Button";
        import { createToast } from "willa/Toast";
        import "willa/Button.css";
        import "willa/Toast.css";

        const topToast = createToast({
          placement: "top",
          duration: 1600,
          maxToasts: 2,
        });

        const bottomRightToast = createToast({
          placement: "bottom-right",
        });

        <>
          <Button
            variant="soft"
            onClick={() => {
              topToast.info("顶部居中", {
                description: "这个提示会更快关闭。",
              });
            }}
          >
            顶部配置
          </Button>
          <Button
            variant="outline"
            onClick={() => {
              bottomRightToast.success("右下角提示");
            }}
          >
            右下角配置
          </Button>
        </>;
      `,content:t.jsx(B,{})},{title:"强制主题",code:`
        import { Button } from "willa/Button";
        import { createToast } from "willa/Toast";
        import "willa/Button.css";
        import "willa/Toast.css";

        const darkToast = createToast({
          placement: "top",
          theme: "dark",
        });

        <Button
          variant="soft"
          onClick={() => {
            darkToast.success("深色主题提示", {
              description: "这个实例会固定使用 dark 主题。",
            });
          }}
        >
          深色 Toast
        </Button>;
      `,content:t.jsx(w,{})},{title:"底部展示",code:`
        import { Button } from "willa/Button";
        import { createToast } from "willa/Toast";
        import "willa/Button.css";
        import "willa/Toast.css";

        const bottomToast = createToast({
          placement: "bottom",
        });

        <Button
          variant="soft"
          onClick={() => {
            bottomToast.info("会从底部出现");
          }}
        >
          底部提示
        </Button>;
      `,content:t.jsx(o,{variant:"soft",onClick:()=>{p().info("会从底部出现")},children:"底部提示"})}],props:[{name:"title",type:"ReactNode",required:!0,group:"ToastOptions",description:"提示主文案。"},{name:"description",type:"ReactNode",group:"ToastOptions",description:"提示补充说明。"},{name:"tone",type:'"info" | "success" | "warning" | "error"',group:"ToastOptions",defaultValue:'"info"',description:"提示类型，默认是 info。"},{name:"duration",type:"number | false",group:"ToastOptions",defaultValue:"ToastConfig.duration",description:"单条提示的自动关闭时间；传 false 时不会自动关闭。"},{name:"action",type:"{ label: ReactNode; onClick: () => void }",group:"ToastOptions",description:"提示右侧的可选操作。"},{name:"id",type:"string",group:"ToastOptions",defaultValue:"自动生成",description:"自定义提示 ID；相同 ID 会替换已有提示。"},{name:"placement",type:'"top-right" | "top" | "bottom" | "top-left" | "bottom-right" | "bottom-left" | "top-center" | "bottom-center"',group:"ToastConfig",defaultValue:'"top-right"',description:"提示出现的位置，默认是右上角；top 和 bottom 分别表示顶部/底部居中。"},{name:"duration",type:"number",group:"ToastConfig",defaultValue:"3000",description:"默认自动关闭时间，单位毫秒，默认 3000。"},{name:"maxToasts",type:"number",group:"ToastConfig",defaultValue:"4",description:"最多同时展示的提示数量，默认 4。"},{name:"className",type:"string",group:"ToastConfig",defaultValue:'""',description:"传给浮层容器的类名。"},{name:"theme",type:'"light" | "dark"',group:"ToastConfig",description:"强制 Toast 实例使用指定主题；不传时跟随文档主题。Toast 是全局实例，不会自动继承局部 WillaShell 主题。"}]});export{v as default};
