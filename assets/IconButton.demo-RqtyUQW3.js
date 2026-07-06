import{l as e}from"./aidly.esm-bundler-DaTrP4tr.js";import{A as t,E as n,L as r,U as i,h as a,o,r as s,rt as c,u as l}from"./react-icons.esm-mVdwEXuX.js";import{t as u}from"./IconButton-ClvF4Rkx.js";import"./index-Coe6wwj0.js";import{t as d}from"./defineDoc-Cid5xIoZ.js";var f=e(),p={display:`flex`,flexWrap:`wrap`,gap:`0.75rem`,alignItems:`center`},m=d({id:`icon-button`,name:`IconButton`,packageName:`willa/IconButton`,description:`用于工具栏、卡片操作区和内联内容中的纯图标按钮。`,imports:[{name:`IconButton`,from:`willa/IconButton`}],css:`willa/IconButton.css`,demo:{name:`IconButton`,component:u,props:{ariaLabel:`分享文章`,icon:(0,f.jsx)(c,{})}},code:`
    import { Share2Icon } from "@radix-ui/react-icons";
    import { IconButton } from "willa/IconButton";
    import "willa/IconButton.css";

    <IconButton ariaLabel="分享文章" icon={<Share2Icon />} />;
  `,sections:[{title:`视觉类型`,code:`
        <div style={iconButtonRowStyle}>
          <IconButton ariaLabel="收藏" icon={<BookmarkIcon />} variant="solid" />
          <IconButton ariaLabel="喜欢" icon={<HeartIcon />} variant="soft" />
          <IconButton ariaLabel="下载" icon={<DownloadIcon />} variant="outline" />
          <IconButton ariaLabel="搜索" icon={<MagnifyingGlassIcon />} variant="ghost" />
        </div>;
      `,content:(0,f.jsxs)(`div`,{style:p,children:[(0,f.jsx)(u,{ariaLabel:`收藏`,icon:(0,f.jsx)(o,{}),variant:`solid`}),(0,f.jsx)(u,{ariaLabel:`喜欢`,icon:(0,f.jsx)(r,{}),variant:`soft`}),(0,f.jsx)(u,{ariaLabel:`下载`,icon:(0,f.jsx)(n,{}),variant:`outline`}),(0,f.jsx)(u,{ariaLabel:`搜索`,icon:(0,f.jsx)(i,{}),variant:`ghost`})]})},{title:`尺寸和形状`,code:`
        <div style={iconButtonRowStyle}>
          <IconButton ariaLabel="上一步" icon={<ArrowRightIcon />} size="sm" />
          <IconButton ariaLabel="外部链接" icon={<ExternalLinkIcon />} shape="circle" />
          <IconButton
            ariaLabel="确认"
            icon={<CheckIcon />}
            shape="circle"
            size="lg"
            variant="outline"
          />
        </div>;
      `,content:(0,f.jsxs)(`div`,{style:p,children:[(0,f.jsx)(u,{ariaLabel:`上一步`,icon:(0,f.jsx)(s,{}),size:`sm`}),(0,f.jsx)(u,{ariaLabel:`外部链接`,icon:(0,f.jsx)(t,{}),shape:`circle`}),(0,f.jsx)(u,{ariaLabel:`确认`,icon:(0,f.jsx)(l,{}),shape:`circle`,size:`lg`,variant:`outline`})]})},{title:`链接、禁用和加载`,code:`
        <div style={iconButtonRowStyle}>
          <IconButton
            ariaLabel="打开 GitHub"
            href="https://github.com"
            icon={<ExternalLinkIcon />}
            target="_blank"
            variant="outline"
          />
          <IconButton ariaLabel="不可点击" disabled icon={<BookmarkIcon />} />
          <IconButton
            ariaLabel="保存"
            icon={<CheckIcon />}
            loading
            loadingLabel="保存中"
            variant="soft"
          />
        </div>;
      `,content:(0,f.jsxs)(`div`,{style:p,children:[(0,f.jsx)(u,{ariaLabel:`打开 GitHub`,href:`https://github.com`,icon:(0,f.jsx)(t,{}),target:`_blank`,variant:`outline`}),(0,f.jsx)(u,{ariaLabel:`不可点击`,disabled:!0,icon:(0,f.jsx)(o,{})}),(0,f.jsx)(u,{ariaLabel:`保存`,icon:(0,f.jsx)(l,{}),loading:!0,loadingLabel:`保存中`,variant:`soft`})]})},{title:`按下态`,code:`
        <div style={iconButtonRowStyle}>
          <IconButton
            ariaLabel="收藏"
            icon={<BookmarkIcon />}
            pressed
            variant="ghost"
          />
          <IconButton
            ariaLabel="确认选择"
            icon={<CheckIcon />}
            pressed
            variant="outline"
          />
        </div>;
      `,content:(0,f.jsxs)(`div`,{style:p,children:[(0,f.jsx)(u,{ariaLabel:`收藏`,icon:(0,f.jsx)(o,{}),pressed:!0,variant:`ghost`}),(0,f.jsx)(u,{ariaLabel:`确认选择`,icon:(0,f.jsx)(l,{}),pressed:!0,variant:`outline`})]})},{title:`点击复制`,code:`
        <div style={iconButtonRowStyle}>
          <IconButton
            ariaLabel="复制安装命令"
            copyText="pnpm add willa"
            icon={<ClipboardCopyIcon />}
          />
          <IconButton
            ariaLabel="复制组件引入"
            copyText="import { IconButton } from 'willa/IconButton';"
            icon={<ClipboardCopyIcon />}
            variant="outline"
          />
        </div>;
      `,content:(0,f.jsxs)(`div`,{style:p,children:[(0,f.jsx)(u,{ariaLabel:`复制安装命令`,copyText:`pnpm add willa`,icon:(0,f.jsx)(a,{})}),(0,f.jsx)(u,{ariaLabel:`复制组件引入`,copyText:`import { IconButton } from 'willa/IconButton';`,icon:(0,f.jsx)(a,{}),variant:`outline`})]})},{title:`自定义颜色`,code:`
        <div style={iconButtonRowStyle}>
          <IconButton
            ariaLabel="暖色收藏"
            backgroundColor="#f6e7c8"
            icon={<BookmarkIcon />}
            textColor="#3f2a12"
          />
          <IconButton
            ariaLabel="蓝色搜索"
            backgroundColor="rgba(96, 165, 250, 0.14)"
            icon={<MagnifyingGlassIcon />}
            textColor="currentColor"
            variant="outline"
          />
        </div>;
      `,content:(0,f.jsxs)(`div`,{style:p,children:[(0,f.jsx)(u,{ariaLabel:`暖色收藏`,backgroundColor:`#f6e7c8`,icon:(0,f.jsx)(o,{}),textColor:`#3f2a12`}),(0,f.jsx)(u,{ariaLabel:`蓝色搜索`,backgroundColor:`rgba(96, 165, 250, 0.14)`,icon:(0,f.jsx)(i,{}),textColor:`currentColor`,variant:`outline`})]})}],props:[{name:`ariaLabel`,type:`string`,required:!0,description:`无可见文字时提供给辅助技术的按钮名称。`},{name:`icon`,type:`ReactNode`,required:!0,description:`按钮内展示的图标。`},{name:`variant`,type:`"solid" | "soft" | "outline" | "ghost"`,defaultValue:`"soft"`,description:`按钮的视觉类型。`},{name:`size`,type:`"sm" | "md" | "lg"`,defaultValue:`"md"`,description:`按钮尺寸。`},{name:`shape`,type:`"square" | "circle"`,defaultValue:`"square"`,description:`按钮外形。`},{name:`href`,type:`string`,description:`传入后渲染为链接按钮。`},{name:`disabled`,type:`boolean`,defaultValue:`false`,description:`禁用按钮或链接按钮。`},{name:`loading`,type:`boolean`,defaultValue:`false`,description:`展示加载状态，并阻止点击、复制和链接跳转。`},{name:`loadingLabel`,type:`string`,description:`加载时替换 ariaLabel 的辅助技术文案。`},{name:`pressed`,type:`boolean`,description:`按钮是否处于按下态；传入后会同步 aria-pressed 语义。`},{name:`backgroundColor`,type:`string`,description:`自定义按钮背景颜色，支持 CSS 颜色值。`},{name:`textColor`,type:`string`,description:`自定义图标颜色，支持 CSS 颜色值。`},{name:`copyText`,type:`boolean | string`,description:`启用复制能力；传 true 时复制 ariaLabel，传字符串时复制该字符串。`},{name:`copiedDuration`,type:`number`,defaultValue:`300`,description:`复制成功反馈持续时间，默认 300ms。`},{name:`onCopyText`,type:`(text: string) => void`,description:`复制成功后的回调。`},{name:`className`,type:`string`,description:`自定义 className。`},{name:`type`,type:`string`,description:`组件类型。`}]});export{m as default};