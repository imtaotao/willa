import{ak as t,B as i}from"./index-qn4eWa1o.js";import{B as n}from"./index-MediO1tK.js";import{G as e}from"./index-bBPgwtF0.js";/* empty css              */import{d as o}from"./defineDoc-BS0X7wWk.js";const m=o({id:"group",name:"Group",packageName:"willa/Group",description:"用于按钮组、标签组和工具栏等横向排列场景的轻量布局组件。",imports:[{name:"Group",from:"willa/Group"},{name:"Button",from:"willa/Button"}],css:"willa/Group.css",demo:{name:"Group",component:e,props:{gap:"sm"},children:[{name:"Button",component:n,props:{size:"sm",variant:"solid"},children:"返回首页"},{name:"Button",component:n,props:{size:"sm",variant:"ghost"},children:"查看文档"}]},code:`
    import { Button } from "willa/Button";
    import { Group } from "willa/Group";
    import "willa/Button.css";
    import "willa/Group.css";

    <Group gap="sm">
      <Button size="sm">返回首页</Button>
      <Button size="sm" variant="ghost">
        查看文档
      </Button>
    </Group>;
  `,sections:[{title:"操作按钮",code:`
        <Group gap="sm">
          <Button size="sm" variant="solid">
            保存
          </Button>
          <Button size="sm" variant="outline">
            预览
          </Button>
          <Button size="sm" variant="ghost">
            取消
          </Button>
        </Group>;
      `,content:t.jsxs(e,{gap:"sm",children:[t.jsx(n,{size:"sm",variant:"solid",children:"保存"}),t.jsx(n,{size:"sm",variant:"outline",children:"预览"}),t.jsx(n,{size:"sm",variant:"ghost",children:"取消"})]})},{title:"标签集合",code:`
        <Group gap="xs">
          <Badge tone="info">AI 产品</Badge>
          <Badge tone="success">已发布</Badge>
          <Badge tone="warning">需要审核</Badge>
          <Badge>文档站</Badge>
        </Group>;
      `,content:t.jsxs(e,{gap:"xs",children:[t.jsx(i,{tone:"info",children:"AI 产品"}),t.jsx(i,{tone:"success",children:"已发布"}),t.jsx(i,{tone:"warning",children:"需要审核"}),t.jsx(i,{children:"文档站"})]})},{title:"自定义间距",code:`
        <Group gap="14px">
          <Button size="sm" variant="solid">
            应用
          </Button>
          <Button size="sm" variant="outline">
            重置
          </Button>
        </Group>;
      `,content:t.jsxs(e,{gap:"14px",children:[t.jsx(n,{size:"sm",variant:"solid",children:"应用"}),t.jsx(n,{size:"sm",variant:"outline",children:"重置"})]})},{title:"竖向排列",code:`
        <Group direction="column" align="start" gap="sm">
          <Button size="sm" variant="solid">
            开始生成
          </Button>
          <Button size="sm" variant="outline">
            保存草稿
          </Button>
          <Button size="sm" variant="ghost">
            稍后处理
          </Button>
        </Group>;
      `,content:t.jsxs(e,{direction:"column",align:"start",gap:"sm",children:[t.jsx(n,{size:"sm",variant:"solid",children:"开始生成"}),t.jsx(n,{size:"sm",variant:"outline",children:"保存草稿"}),t.jsx(n,{size:"sm",variant:"ghost",children:"稍后处理"})]})},{title:"对齐方式",code:`
        <Group gap="sm" justify="end">
          <Button size="sm" variant="outline">
            取消
          </Button>
          <Button size="sm" variant="solid">
            保存
          </Button>
        </Group>;
      `,content:t.jsxs(e,{gap:"sm",justify:"end",children:[t.jsx(n,{size:"sm",variant:"outline",children:"取消"}),t.jsx(n,{size:"sm",variant:"solid",children:"保存"})]})}],props:[{name:"children",type:"ReactNode",description:"需要排列的内容。"},{name:"gap",type:'"none" | "xs" | "sm" | "md" | "lg" | "xl" | string',description:"子元素之间的间距，支持预设值或任意 CSS 间距值。"},{name:"align",type:'"start" | "center" | "end" | "stretch" | "baseline"',description:"交叉轴对齐方式。"},{name:"justify",type:'"start" | "center" | "end" | "between" | "around" | "evenly"',description:"主轴对齐方式。"},{name:"direction",type:'"row" | "column"',description:"排列方向，默认是横向排列。"},{name:"wrap",type:"boolean",description:"是否允许换行，默认开启。"},{name:"inline",type:"boolean",description:"是否使用 inline-flex。"},{name:"as",type:"ElementType",description:"自定义渲染标签或组件。"},{name:"className",type:"string",description:"外层 className。"}]});export{m as default};
