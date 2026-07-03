import{l as e}from"./aidly.esm-bundler-DaTrP4tr.js";import{A as t,E as n,r}from"./react-icons.esm-mVdwEXuX.js";import{t as i}from"./Button-O1aY2iqB.js";import{t as a}from"./Group-C-JhzSsC.js";import"./style-B00R6KjV.js";import{t as o}from"./defineDoc-Cid5xIoZ.js";import"./style-D3eq1OTT.js";var s=e(),c=o({id:`button`,name:`Button`,packageName:`willa/Button`,description:`用于文章、文档和 MDX 内容中的跳转、下载、复制和 CTA 操作。`,imports:[{name:`Button`,from:`willa/Button`},{name:`Group`,from:`willa/Group`}],css:`willa/Button.css`,demo:{name:`Button`,component:i,props:{href:`https://github.com`,target:`_blank`,trailingIcon:(0,s.jsx)(r,{})},children:`阅读原文`},code:`
    import { ArrowRightIcon } from "@radix-ui/react-icons";
    import { Button } from "willa/Button";
    import "willa/Button.css";

    <Button
      href="https://github.com"
      target="_blank"
      trailingIcon={<ArrowRightIcon />}
    >
      阅读原文
    </Button>;
  `,sections:[{title:`视觉类型`,code:`
        <Group gap="md">
          <Button>主要操作</Button>
          <Button variant="soft">柔和操作</Button>
          <Button variant="outline">次要操作</Button>
          <Button variant="ghost">轻量操作</Button>
          <Button variant="link">文本链接</Button>
        </Group>;
      `,content:(0,s.jsxs)(a,{gap:`md`,children:[(0,s.jsx)(i,{children:`主要操作`}),(0,s.jsx)(i,{variant:`soft`,children:`柔和操作`}),(0,s.jsx)(i,{variant:`outline`,children:`次要操作`}),(0,s.jsx)(i,{variant:`ghost`,children:`轻量操作`}),(0,s.jsx)(i,{variant:`link`,trailingIcon:(0,s.jsx)(t,{}),children:`文本链接`})]})},{title:`尺寸和图标`,code:`
        import { ArrowRightIcon, DownloadIcon } from "@radix-ui/react-icons";

        <Group gap="md">
          <Button size="sm" icon={<DownloadIcon />}>
            下载
          </Button>
          <Button size="md" trailingIcon={<ArrowRightIcon />}>
            查看详情
          </Button>
          <Button size="lg">开始阅读</Button>
        </Group>;
      `,content:(0,s.jsxs)(a,{gap:`md`,children:[(0,s.jsx)(i,{size:`sm`,icon:(0,s.jsx)(n,{}),children:`下载`}),(0,s.jsx)(i,{size:`md`,trailingIcon:(0,s.jsx)(r,{}),children:`查看详情`}),(0,s.jsx)(i,{size:`lg`,children:`开始阅读`})]})},{title:`禁用状态`,code:`
        <Group gap="md">
          <Button disabled>不可点击</Button>
          <Button href="https://github.com" disabled variant="outline">
            禁用链接
          </Button>
        </Group>;
      `,content:(0,s.jsxs)(a,{gap:`md`,children:[(0,s.jsx)(i,{disabled:!0,children:`不可点击`}),(0,s.jsx)(i,{href:`https://github.com`,disabled:!0,variant:`outline`,children:`禁用链接`})]})},{title:`加载状态`,code:`
        <Group gap="md">
          <Button loading>保存中</Button>
          <Button loading loadingText="提交中" variant="outline">
            提交
          </Button>
        </Group>;
      `,content:(0,s.jsxs)(a,{gap:`md`,children:[(0,s.jsx)(i,{loading:!0,children:`保存中`}),(0,s.jsx)(i,{loading:!0,loadingText:`提交中`,variant:`outline`,children:`提交`}),(0,s.jsx)(i,{href:`https://github.com`,loading:!0,variant:`soft`,children:`跳转中`})]})},{title:`按下态`,code:`
        <Group gap="md">
          <Button pressed variant="ghost">
            自动换行
          </Button>
          <Button pressed variant="outline">
            预览模式
          </Button>
        </Group>;
      `,content:(0,s.jsxs)(a,{gap:`md`,children:[(0,s.jsx)(i,{pressed:!0,variant:`ghost`,children:`自动换行`}),(0,s.jsx)(i,{pressed:!0,variant:`outline`,children:`预览模式`})]})},{title:`点击复制`,code:`
        <Group gap="md">
          <Button copyText variant="soft">
            pnpm add willa
          </Button>
          <Button copyText="import { Button } from 'willa/Button';">
            复制组件引入
          </Button>
        </Group>;
      `,content:(0,s.jsxs)(a,{gap:`md`,children:[(0,s.jsx)(i,{copyText:!0,variant:`soft`,children:`pnpm add willa`}),(0,s.jsx)(i,{copyText:`import { Button } from 'willa/Button';`,children:`复制组件引入`}),(0,s.jsx)(i,{copyText:`pnpm add willa`,variant:`outline`,children:`复制安装命令`})]})},{title:`自定义颜色`,code:`
        <Group gap="md">
          <Button backgroundColor="#f6e7c8" textColor="#3f2a12">
            暖色按钮
          </Button>
          <Button variant="outline" backgroundColor="rgba(96, 165, 250, 0.12)">
            自定义背景
          </Button>
        </Group>;
      `,content:(0,s.jsxs)(a,{gap:`md`,children:[(0,s.jsx)(i,{backgroundColor:`#f6e7c8`,textColor:`#3f2a12`,children:`暖色按钮`}),(0,s.jsx)(i,{variant:`outline`,backgroundColor:`rgba(96, 165, 250, 0.12)`,children:`自定义背景`})]})}],props:[{name:`variant`,type:`"solid" | "soft" | "outline" | "ghost" | "link"`,defaultValue:`"solid"`,description:`按钮的视觉类型。`},{name:`size`,type:`"sm" | "md" | "lg"`,defaultValue:`"md"`,description:`按钮尺寸。`},{name:`href`,type:`string`,description:`传入后渲染为链接按钮。`},{name:`renderLink`,type:`(props: WillaRenderLinkProps) => ReactNode`,description:`自定义链接渲染。传入 href 时可接入客户端路由，未传时渲染原生 a 标签；disabled 或 loading 时不会调用。`},{name:`icon`,type:`ReactNode`,description:`展示在文字前的图标。`},{name:`trailingIcon`,type:`ReactNode`,description:`展示在文字后的图标。`},{name:`disabled`,type:`boolean`,defaultValue:`false`,description:`禁用按钮或链接按钮。`},{name:`loading`,type:`boolean`,defaultValue:`false`,description:`展示加载状态，并阻止点击、复制和链接跳转。`},{name:`loadingText`,type:`ReactNode`,description:`加载时展示的替代文案，未传时保留原文案。`},{name:`pressed`,type:`boolean`,description:`按钮是否处于按下态；传入后会同步 aria-pressed 语义。`},{name:`backgroundColor`,type:`string`,description:`自定义按钮背景颜色，支持 CSS 颜色值。`},{name:`textColor`,type:`string`,description:`自定义按钮文字颜色，支持 CSS 颜色值。`},{name:`copyText`,type:`boolean | string`,description:`点击复制能力。传 true 时复制按钮文本，传字符串时复制指定文本，未传时不启用。`},{name:`copiedDuration`,type:`number`,defaultValue:`300`,description:`复制成功后的视觉反馈持续时间，单位为毫秒，默认为 300。`},{name:`onCopyText`,type:`(text: string) => void`,description:`复制成功后的回调。`},{name:`className`,type:`string`,description:`可选的外层 className。`},{name:`children`,type:`ReactNode`,description:`按钮内容。`},{name:`type`,type:`string`,description:`组件类型。`}]});export{c as default};