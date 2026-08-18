import{l as e}from"./aidly.esm-bundler-DaTrP4tr.js";import{o as t,r as n}from"./react-icons.esm-mVdwEXuX.js";import{t as r}from"./Button-O1aY2iqB.js";import{t as i}from"./Card-Dw_2SqSh.js";import{a}from"./index-y4TTR3pk.js";import"./style-B00R6KjV.js";import{t as o}from"./defineDoc-Cid5xIoZ.js";var s=e(),c={display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(14rem, 1fr))`,gap:`0.9rem`,width:`min(100%, 56rem)`},l=o({id:`card`,name:`Card`,category:`layout`,packageName:`willa/Card`,description:`用于资源入口、文章摘要、链接推荐和组合式内容块。`,imports:[{name:`Card`,from:`willa/Card`}],css:`willa/Card.css`,demo:{name:`Card`,component:i,props:{eyebrow:`指南`,title:`构建内容组件`,description:`用统一的结构和主题变量组织文章页里的推荐资源。`}},code:`
    import { Card } from "willa/Card";
    import "willa/Card.css";

    <Card
      eyebrow="指南"
      title="构建内容组件"
      description="用统一的结构和主题变量组织文章页里的推荐资源。"
    />;
  `,sections:[{title:`基础用法`,code:`
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(14rem, 1fr))",
            gap: "0.9rem",
          }}
        >
          <Card
            eyebrow="指南"
            title="内容组件边界"
            description="把文章、文档和 MDX 页面中高频出现的结构沉淀成可复用组件。"
            footer={<Badge tone="info">Docs</Badge>}
          />
          <Card
            eyebrow="资源"
            title="组件主题变量"
            description="主题值集中在所属包里维护，结构样式保持可组合。"
            footer="5 分钟阅读"
          />
        </div>;
      `,content:(0,s.jsxs)(`div`,{style:c,children:[(0,s.jsx)(i,{eyebrow:`指南`,title:`内容组件边界`,description:`把文章、文档和 MDX 页面中高频出现的结构沉淀成可复用组件。`,footer:(0,s.jsx)(a,{tone:`info`,children:`Docs`})}),(0,s.jsx)(i,{eyebrow:`资源`,title:`组件主题变量`,description:`主题值集中在所属包里维护，结构样式保持可组合。`,footer:`5 分钟阅读`})]})},{title:`可点击卡片`,code:`
        <Card
          href="https://github.com"
          target="_blank"
          eyebrow={<Badge tone="success">推荐</Badge>}
          title="查看项目仓库"
          description="把整张卡片作为明确的链接入口。"
        />;
      `,content:(0,s.jsx)(i,{href:`https://github.com`,target:`_blank`,eyebrow:(0,s.jsx)(a,{tone:`success`,children:`推荐`}),title:`查看项目仓库`,description:`把整张卡片作为明确的链接入口，适合资源推荐和文章延伸阅读。`,actions:(0,s.jsx)(n,{})})},{title:`视觉类型`,code:`
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(14rem, 1fr))",
            gap: "0.9rem",
          }}
        >
          <Card
            variant="surface"
            title="Surface"
            description="带边框和轻阴影的默认卡片。"
          />
          <Card
            variant="soft"
            title="Soft"
            description="更轻的色块卡片，适合嵌在正文中。"
          />
          <Card
            variant="outline"
            title="Outline"
            description="只保留边框，适合密集列表。"
          />
        </div>;
      `,content:(0,s.jsxs)(`div`,{style:c,children:[(0,s.jsx)(i,{variant:`surface`,title:`Surface`,description:`带边框和轻阴影的默认卡片。`}),(0,s.jsx)(i,{variant:`soft`,title:`Soft`,description:`更轻的色块卡片，适合嵌在正文中。`}),(0,s.jsx)(i,{variant:`outline`,title:`Outline`,description:`只保留边框，适合密集列表。`})]})},{title:`组合内容`,code:`
        <Card
          padding="lg"
          eyebrow={<Badge tone="warning">Preview</Badge>}
          title="面向内容页的组合卡片"
          description="Card 可以和 Badge、Button、媒体区域组合。"
          footer="更新于今天"
          actions={
            <Button size="sm" variant="outline">
              收藏
            </Button>
          }
        />;
      `,content:(0,s.jsx)(i,{padding:`lg`,media:(0,s.jsx)(`div`,{style:{aspectRatio:`16 / 9`,background:`linear-gradient(135deg, rgba(37, 99, 235, 0.18), rgba(5, 150, 105, 0.12))`}}),eyebrow:(0,s.jsx)(a,{tone:`warning`,children:`Preview`}),title:`面向内容页的组合卡片`,description:`Card 可以和 Badge、Button、媒体区域组合，用来承载更完整的资源信息。`,footer:`更新于今天`,actions:(0,s.jsx)(r,{size:`sm`,variant:`outline`,trailingIcon:(0,s.jsx)(t,{}),children:`收藏`})})}],props:[{name:`variant`,type:`"surface" | "soft" | "outline"`,defaultValue:`"surface"`,description:`卡片的视觉类型。`},{name:`padding`,type:`"sm" | "md" | "lg"`,defaultValue:`"md"`,description:`卡片内边距。`},{name:`href`,type:`string`,description:`传入后渲染为可点击链接卡片。`},{name:`eyebrow`,type:`ReactNode`,description:`标题上方的辅助信息，可组合 Badge。`},{name:`title`,type:`ReactNode`,description:`卡片标题。`},{name:`description`,type:`ReactNode`,description:`卡片描述。`},{name:`media`,type:`ReactNode`,description:`卡片顶部媒体区域。`},{name:`footer`,type:`ReactNode`,description:`卡片底部辅助信息。`},{name:`actions`,type:`ReactNode`,description:`卡片底部右侧操作区。`},{name:`className`,type:`string`,description:`可选的外层 className。`},{name:`children`,type:`ReactNode`,description:`自定义正文内容。`}]});export{l as default};