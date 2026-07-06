import{l as e}from"./aidly.esm-bundler-DaTrP4tr.js";import{t}from"./Button-O1aY2iqB.js";import{t as n}from"./Group-C-JhzSsC.js";import{t as r}from"./SectionHeader-Pf9JYOPa.js";import{a as i}from"./index-Coe6wwj0.js";import"./style-B00R6KjV.js";import{t as a}from"./defineDoc-Cid5xIoZ.js";import"./style-D3eq1OTT.js";var o=e(),s={width:`min(100%, 58rem)`,marginInline:`auto`},c=a({id:`section-header`,name:`SectionHeader`,category:`layout`,packageName:`willa/SectionHeader`,description:`用于页面区块、卡片区和详情段落的标题与操作区。`,imports:[{name:`SectionHeader`,from:`willa/SectionHeader`}],css:`willa/SectionHeader.css`,demo:{name:`SectionHeader`,component:r,props:{style:s,title:`来源证据`,description:`展示本次生成使用的文档、链接和引用状态。`,meta:(0,o.jsx)(i,{tone:`info`,children:`12 条`}),actions:(0,o.jsxs)(n,{gap:`sm`,children:[(0,o.jsx)(t,{size:`sm`,variant:`ghost`,children:`查看全部`}),(0,o.jsx)(t,{size:`sm`,children:`添加来源`})]})}},code:`
    import { Badge } from "willa/Badge";
    import { Button } from "willa/Button";
    import { Group } from "willa/Group";
    import { SectionHeader } from "willa/SectionHeader";
    import "willa/Badge.css";
    import "willa/Button.css";
    import "willa/Group.css";
    import "willa/SectionHeader.css";

    <SectionHeader
      title="来源证据"
      description="展示本次生成使用的文档、链接和引用状态。"
      meta={<Badge tone="info">12 条</Badge>}
      actions={
        <Group gap="sm">
          <Button size="sm" variant="ghost">
            查看全部
          </Button>
          <Button size="sm">添加来源</Button>
        </Group>
      }
    />;
  `,sections:[{title:`带分隔线`,code:`
        <SectionHeader
          divided
          eyebrow="Activity"
          title="最近操作"
          description="区块之间需要清晰分隔时，可以开启 divided。"
          actions={<Button size="sm" variant="outline">刷新</Button>}
        />;
      `,content:(0,o.jsx)(`div`,{style:s,children:(0,o.jsx)(r,{divided:!0,eyebrow:`Activity`,title:`最近操作`,description:`区块之间需要清晰分隔时，可以开启 divided。`,actions:(0,o.jsx)(t,{size:`sm`,variant:`outline`,children:`刷新`})})})},{title:`紧凑标题`,code:`
        <SectionHeader
          size="sm"
          title="任务摘要"
          meta="刚刚更新"
          actions={<Button size="sm" variant="ghost">编辑</Button>}
        />;
      `,content:(0,o.jsx)(`div`,{style:s,children:(0,o.jsx)(r,{size:`sm`,title:`任务摘要`,meta:`刚刚更新`,actions:(0,o.jsx)(t,{size:`sm`,variant:`ghost`,children:`编辑`})})})},{title:`居中标题`,code:`
        <SectionHeader
          align="center"
          title="选择一个模板开始"
          description="适合空状态、模板选择和引导型区块。"
        />;
      `,content:(0,o.jsx)(`div`,{style:s,children:(0,o.jsx)(r,{align:`center`,title:`选择一个模板开始`,description:`适合空状态、模板选择和引导型区块。`})})},{title:`线中标题`,code:`
        <SectionHeader
          variant="centered-line"
          size="sm"
          title="工作经历"
        />;
      `,content:(0,o.jsx)(`div`,{style:s,children:(0,o.jsx)(r,{variant:`centered-line`,size:`sm`,title:`工作经历`})})}],props:[{name:`title`,type:`ReactNode`,required:!0,description:`区块标题。`},{name:`description`,type:`ReactNode`,description:`标题下方说明。`},{name:`eyebrow`,type:`ReactNode`,description:`标题上方的短标签或分组名。`},{name:`meta`,type:`ReactNode`,description:`标题旁边的状态、数量或时间。`},{name:`actions`,type:`ReactNode`,description:`右侧或下方操作区。`},{name:`align`,type:`"start" | "center"`,defaultValue:`"start"`,description:`对齐方式，默认 start。`},{name:`variant`,type:`"default" | "centered-line"`,defaultValue:`"default"`,description:`标题布局变体，centered-line 会将标题居中夹在横线中。`},{name:`size`,type:`"sm" | "md"`,defaultValue:`"md"`,description:`尺寸，默认 md。`},{name:`divided`,type:`boolean`,defaultValue:`false`,description:`是否展示底部分隔线，默认 false。`}]});export{c as default};