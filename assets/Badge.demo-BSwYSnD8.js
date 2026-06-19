import{aX as e,T as a,B as n,l as o,K as i,s as t,ak as s}from"./index-BbKyouyj.js";/* empty css              */import{d}from"./defineDoc-DTfHMO5s.js";const g=d({id:"badge",name:"Badge",packageName:"willa/Badge",description:"用于文章、文档和 MDX 内容中的分类、版本、状态和轻量标记。",imports:[{name:"Badge",from:"willa/Badge"},{name:"Group",from:"willa/Group"}],css:"willa/Badge.css",demo:{name:"Badge",component:n,props:{tone:"info",icon:e.jsx(s,{})},children:"新功能"},code:`
    import { RocketIcon } from "@radix-ui/react-icons";
    import { Badge } from "willa/Badge";
    import "willa/Badge.css";

    <Badge tone="info" icon={<RocketIcon />}>
      新功能
    </Badge>;
  `,sections:[{title:"语义类型",code:`
        <Group gap="sm">
          <Badge>默认</Badge>
          <Badge tone="info">文档</Badge>
          <Badge tone="success">已发布</Badge>
          <Badge tone="warning">实验性</Badge>
          <Badge tone="danger">已废弃</Badge>
        </Group>;
      `,content:e.jsxs(a,{gap:"sm",children:[e.jsx(n,{children:"默认"}),e.jsx(n,{tone:"info",children:"文档"}),e.jsx(n,{tone:"success",children:"已发布"}),e.jsx(n,{tone:"warning",children:"实验性"}),e.jsx(n,{tone:"danger",children:"已废弃"})]})},{title:"视觉类型",code:`
        <Group gap="sm">
          <Badge tone="info" variant="soft">
            Soft
          </Badge>
          <Badge tone="info" variant="outline">
            Outline
          </Badge>
          <Badge tone="info" variant="solid">
            Solid
          </Badge>
        </Group>;
      `,content:e.jsxs(a,{gap:"sm",children:[e.jsx(n,{tone:"info",variant:"soft",children:"Soft"}),e.jsx(n,{tone:"info",variant:"outline",children:"Outline"}),e.jsx(n,{tone:"info",variant:"solid",children:"Solid"})]})},{title:"尺寸和图标",code:`
        import {
          CheckCircledIcon,
          ClockIcon,
          ExclamationTriangleIcon,
        } from "@radix-ui/react-icons";

        <Group gap="sm">
          <Badge size="sm" tone="success" icon={<CheckCircledIcon />}>
            稳定
          </Badge>
          <Badge size="md" tone="warning" icon={<ExclamationTriangleIcon />}>
            Beta
          </Badge>
          <Badge tone="neutral" trailingIcon={<ClockIcon />}>
            3 分钟阅读
          </Badge>
        </Group>;
      `,content:e.jsxs(a,{gap:"sm",children:[e.jsx(n,{size:"sm",tone:"success",icon:e.jsx(o,{}),children:"稳定"}),e.jsx(n,{size:"md",tone:"warning",icon:e.jsx(i,{}),children:"Beta"}),e.jsx(n,{tone:"neutral",trailingIcon:e.jsx(t,{}),children:"3 分钟阅读"})]})},{title:"常见组合",code:`
        <Group gap="sm">
          <Badge tone="info">v0.3</Badge>
          <Badge tone="success">推荐</Badge>
          <Badge tone="warning" variant="outline">
            Preview
          </Badge>
          <Badge tone="danger" variant="soft">
            Breaking
          </Badge>
        </Group>;
      `,content:e.jsxs(a,{gap:"sm",children:[e.jsx(n,{tone:"info",children:"v0.3"}),e.jsx(n,{tone:"success",children:"推荐"}),e.jsx(n,{tone:"warning",variant:"outline",children:"Preview"}),e.jsx(n,{tone:"danger",variant:"soft",children:"Breaking"})]})}],props:[{name:"variant",type:'"soft" | "outline" | "solid"',defaultValue:'"soft"',description:"徽标的视觉类型。"},{name:"tone",type:'"neutral" | "info" | "success" | "warning" | "danger"',defaultValue:'"neutral"',description:"徽标的语义颜色。"},{name:"size",type:'"sm" | "md"',defaultValue:'"md"',description:"徽标尺寸。"},{name:"icon",type:"ReactNode",description:"展示在文字前的图标。"},{name:"trailingIcon",type:"ReactNode",description:"展示在文字后的图标。"},{name:"className",type:"string",description:"可选的外层 className。"},{name:"children",type:"ReactNode",description:"徽标内容。"}]});export{g as default};
