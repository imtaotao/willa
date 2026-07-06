import{l as e}from"./aidly.esm-bundler-DaTrP4tr.js";import{_ as t,k as n,l as r,nt as i}from"./react-icons.esm-mVdwEXuX.js";import{t as a}from"./Group-C-JhzSsC.js";import{a as o}from"./index-Coe6wwj0.js";import{t as s}from"./defineDoc-Cid5xIoZ.js";import"./style-D3eq1OTT.js";var c=e(),l=s({id:`badge`,name:`Badge`,packageName:`willa/Badge`,description:`用于文章、文档和 MDX 内容中的分类、版本、状态和轻量标记。`,imports:[{name:`Badge`,from:`willa/Badge`},{name:`Group`,from:`willa/Group`}],css:`willa/Badge.css`,demo:{name:`Badge`,component:o,props:{tone:`info`,icon:(0,c.jsx)(i,{})},children:`新功能`},code:`
    import { RocketIcon } from "@radix-ui/react-icons";
    import { Badge } from "willa/Badge";
    import "willa/Badge.css";

    <Badge tone="info" icon={<RocketIcon />}>
      新功能
    </Badge>;
  `,sections:[{title:`语义类型`,code:`
        <Group gap="sm">
          <Badge>默认</Badge>
          <Badge tone="info">文档</Badge>
          <Badge tone="success">已发布</Badge>
          <Badge tone="warning">实验性</Badge>
          <Badge tone="danger">已废弃</Badge>
        </Group>;
      `,content:(0,c.jsxs)(a,{gap:`sm`,children:[(0,c.jsx)(o,{children:`默认`}),(0,c.jsx)(o,{tone:`info`,children:`文档`}),(0,c.jsx)(o,{tone:`success`,children:`已发布`}),(0,c.jsx)(o,{tone:`warning`,children:`实验性`}),(0,c.jsx)(o,{tone:`danger`,children:`已废弃`})]})},{title:`视觉类型`,code:`
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
      `,content:(0,c.jsxs)(a,{gap:`sm`,children:[(0,c.jsx)(o,{tone:`info`,variant:`soft`,children:`Soft`}),(0,c.jsx)(o,{tone:`info`,variant:`outline`,children:`Outline`}),(0,c.jsx)(o,{tone:`info`,variant:`solid`,children:`Solid`})]})},{title:`尺寸和图标`,code:`
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
      `,content:(0,c.jsxs)(a,{gap:`sm`,children:[(0,c.jsx)(o,{size:`sm`,tone:`success`,icon:(0,c.jsx)(r,{}),children:`稳定`}),(0,c.jsx)(o,{size:`md`,tone:`warning`,icon:(0,c.jsx)(n,{}),children:`Beta`}),(0,c.jsx)(o,{tone:`neutral`,trailingIcon:(0,c.jsx)(t,{}),children:`3 分钟阅读`})]})},{title:`常见组合`,code:`
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
      `,content:(0,c.jsxs)(a,{gap:`sm`,children:[(0,c.jsx)(o,{tone:`info`,children:`v0.3`}),(0,c.jsx)(o,{tone:`success`,children:`推荐`}),(0,c.jsx)(o,{tone:`warning`,variant:`outline`,children:`Preview`}),(0,c.jsx)(o,{tone:`danger`,variant:`soft`,children:`Breaking`})]})}],props:[{name:`variant`,type:`"soft" | "outline" | "solid"`,defaultValue:`"soft"`,description:`徽标的视觉类型。`},{name:`tone`,type:`"neutral" | "info" | "success" | "warning" | "danger"`,defaultValue:`"neutral"`,description:`徽标的语义颜色。`},{name:`size`,type:`"sm" | "md"`,defaultValue:`"md"`,description:`徽标尺寸。`},{name:`icon`,type:`ReactNode`,description:`展示在文字前的图标。`},{name:`trailingIcon`,type:`ReactNode`,description:`展示在文字后的图标。`},{name:`className`,type:`string`,description:`可选的外层 className。`},{name:`children`,type:`ReactNode`,description:`徽标内容。`}]});export{l as default};