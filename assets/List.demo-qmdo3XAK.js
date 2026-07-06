import{d as e,l as t,p as n}from"./aidly.esm-bundler-DaTrP4tr.js";import{_ as r,l as i,nt as a,z as o}from"./react-icons.esm-mVdwEXuX.js";import{t as s}from"./Button-O1aY2iqB.js";import{t as c}from"./Stack-DwlHdG-i.js";import{a as l}from"./index-Do4z6LCr.js";import"./style-B00R6KjV.js";import{t as u}from"./defineDoc-Cid5xIoZ.js";import{t as d}from"./List-CKoCxChV.js";import"./style-Bd5UDEOd.js";import{t as f}from"./Pagination-CK1zKSR1.js";import"./style--7ZygRad.js";var p=n(e(),1),m=t(),h=[{id:`one`,title:`Racing car sprays burning fuel into crowd.`},{id:`two`,title:`Japanese princess to wed commoner.`},{id:`three`,title:`Australian walks 100km after outback crash.`},{id:`four`,title:`Man charged over missing wedding girl.`},{id:`five`,title:`Los Angeles battles huge wildfires.`}],g=[{id:`review`,title:`检查新增组件入口`,description:`确认 content、willa 聚合包和 demo registry 都已经同步。`,meta:(0,m.jsx)(l,{size:`sm`,children:`组件`}),time:`刚刚`,tone:`info`,unread:!0,media:(0,m.jsx)(o,{}),actions:(0,m.jsx)(s,{size:`sm`,variant:`ghost`,children:`查看`})},{id:`styles`,title:`整理列表类样式`,description:`复用基础 List，避免通知和普通列表重复维护结构。`,meta:(0,m.jsx)(l,{size:`sm`,tone:`success`,children:`已完成`}),time:`10:20`,tone:`success`,media:(0,m.jsx)(i,{})},{id:`build`,title:`等待构建结果`,description:`构建任务正在排队，完成后会同步状态。`,meta:`CI 队列`,time:`09:48`,tone:`warning`,media:(0,m.jsx)(r,{})}],_=[{id:`article-a`,title:`组件体系整理完成`,description:`把标准列表和通知场景拆清楚，普通数据展示优先使用 List。`,meta:`Willa 设计系统`,time:`2026-06-14`,media:(0,m.jsx)(a,{}),extra:(0,m.jsx)(`div`,{style:{width:`9rem`,height:`6.5rem`,borderRadius:`0.7rem`,background:`linear-gradient(135deg, rgb(228 235 255), rgb(245 246 250))`}}),actions:(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(s,{size:`sm`,variant:`ghost`,children:`编辑`}),(0,m.jsx)(s,{size:`sm`,variant:`ghost`,children:`归档`})]})},{id:`article-b`,title:`列表组件支持竖排布局`,description:`竖排布局适合文章、活动、资源卡片这类需要额外图片区或操作区的内容。`,meta:`产品日志`,time:`2026-06-10`,media:(0,m.jsx)(o,{}),extra:(0,m.jsx)(`div`,{style:{width:`9rem`,height:`6.5rem`,borderRadius:`0.7rem`,background:`linear-gradient(135deg, rgb(232 248 240), rgb(247 247 244))`}}),actions:(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(s,{size:`sm`,variant:`ghost`,children:`预览`}),(0,m.jsx)(s,{size:`sm`,variant:`ghost`,children:`发布`})]})}],v=[{id:`prompt`,title:`PromptInput`,description:`AI 输入和提交入口。`,meta:(0,m.jsx)(l,{size:`sm`,children:`AI`})},{id:`upload`,title:`Upload`,description:`上传、预览和进度管理。`,meta:(0,m.jsx)(l,{size:`sm`,children:`Form`})},{id:`table`,title:`Table`,description:`数据展示、筛选和批量操作。`,meta:(0,m.jsx)(l,{size:`sm`,children:`Content`})},{id:`calendar`,title:`Calendar`,description:`日期选择和日程视图。`,meta:(0,m.jsx)(l,{size:`sm`,children:`Form`})}],y=[{id:`import`,title:`导入数据`,description:`先读取用户上传的反馈文档。`,media:(0,m.jsx)(o,{})},{id:`analyse`,title:`分析优先级`,description:`按影响面、成本和风险输出排序。`,media:(0,m.jsx)(r,{})},{id:`publish`,title:`生成报告`,description:`把结论整理成可以直接交付的版本。`,media:(0,m.jsx)(i,{})}],b=Array.from({length:120},(e,t)=>({id:`virtual-${t+1}`,title:`虚拟条目 ${t+1}`,description:`开启 virtualScroll 后，列表只渲染当前可视区附近的条目，长列表滚动时更稳定。`,meta:t%2==0?`任务`:`内容`,time:`09:${String(t%60).padStart(2,`0`)}`,tone:t%3==0?`info`:t%3==1?`success`:`warning`})),x=u({id:`list`,name:`List`,packageName:`willa/List`,description:`用于搭建任务、活动、文章、资源和通知等通用条目列表。`,imports:[{name:`Badge`,from:`willa/Badge`},{name:`Button`,from:`willa/Button`},{name:`List`,from:`willa/List`},{name:`Pagination`,from:`willa/Pagination`},{name:`Stack`,from:`willa/Stack`}],css:`willa/List.css`,demo:{name:`List`,component:d,props:{items:h,header:`Header`,footer:`Footer`,style:{width:`min(100%, 40rem)`}}},code:`
    import { List, type ListItem } from "willa/List";
    import "willa/List.css";

    const items: Array<ListItem> = [
      { id: "one", title: "Racing car sprays burning fuel into crowd." },
      { id: "two", title: "Japanese princess to wed commoner." },
      { id: "three", title: "Australian walks 100km after outback crash." },
      { id: "four", title: "Man charged over missing wedding girl." },
      { id: "five", title: "Los Angeles battles huge wildfires." },
    ];

    <List
      items={items}
      header="Header"
      footer="Footer"
      style={{ width: "min(100%, 40rem)" }}
    />;
  `,sections:[{title:`基础列表`,code:`
        import { CheckCircledIcon, ClockIcon, InfoCircledIcon } from "@radix-ui/react-icons";
        import { Badge } from "willa/Badge";
        import { Button } from "willa/Button";
        import { List, type ListItem } from "willa/List";
        import "willa/Badge.css";
        import "willa/Button.css";
        import "willa/List.css";

        const items: Array<ListItem> = [
          {
            id: "review",
            title: "检查新增组件入口",
            description: "确认 content、willa 聚合包和 demo registry 都已经同步。",
            meta: <Badge size="sm">组件</Badge>,
            time: "刚刚",
            tone: "info",
            unread: true,
            media: <InfoCircledIcon />,
            actions: <Button size="sm" variant="ghost">查看</Button>,
          },
          {
            id: "styles",
            title: "整理列表类样式",
            description: "复用基础 List，避免通知和普通列表重复维护结构。",
            meta: <Badge size="sm" tone="success">已完成</Badge>,
            time: "10:20",
            tone: "success",
            media: <CheckCircledIcon />,
          },
          {
            id: "build",
            title: "等待构建结果",
            description: "构建任务正在排队，完成后会同步状态。",
            meta: "CI 队列",
            time: "09:48",
            tone: "warning",
            media: <ClockIcon />,
          },
        ];

        <List
          items={items}
          style={{ width: "min(100%, 44rem)" }}
          onItemClick={() => undefined}
        />;
      `,content:(0,m.jsx)(d,{items:g,style:{width:`min(100%, 44rem)`},onItemClick:()=>void 0})},{title:`加载更多`,code:`
        import { Button } from "willa/Button";
        import { List, type ListItem } from "willa/List";
        import "willa/Button.css";
        import "willa/List.css";

        const items: Array<ListItem> = [
          { id: "one", title: "已同步 12 个组件状态", description: "组件入口和 demo 已更新。" },
          { id: "two", title: "等待视觉验收", description: "确认列表、通知和表格组合效果。" },
        ];

        <List
          items={items}
          loadMore={<Button size="sm">加载更多</Button>}
          style={{ width: "min(100%, 40rem)" }}
        />;
      `,content:(0,m.jsx)(d,{items:[{id:`one`,title:`已同步 12 个组件状态`,description:`组件入口和 demo 已更新。`},{id:`two`,title:`等待视觉验收`,description:`确认列表、通知和表格组合效果。`}],loadMore:(0,m.jsx)(s,{size:`sm`,children:`加载更多`}),style:{width:`min(100%, 40rem)`}})},{title:`竖排列表`,code:`
        import { InfoCircledIcon, RocketIcon } from "@radix-ui/react-icons";
        import { Button } from "willa/Button";
        import { List, type ListItem } from "willa/List";
        import "willa/Button.css";
        import "willa/List.css";

        const items: Array<ListItem> = [
          {
            id: "article-a",
            title: "组件体系整理完成",
            description: "把标准列表和通知场景拆清楚。",
            meta: "Willa 设计系统",
            time: "2026-06-14",
            media: <RocketIcon />,
            extra: <div style={{ width: "9rem", height: "6.5rem", borderRadius: "0.7rem", background: "linear-gradient(135deg, rgb(228 235 255), rgb(245 246 250))" }} />,
            actions: (
              <>
                <Button size="sm" variant="ghost">编辑</Button>
                <Button size="sm" variant="ghost">归档</Button>
              </>
            ),
          },
          {
            id: "article-b",
            title: "列表组件支持竖排布局",
            description: "竖排布局适合文章、活动、资源卡片这类内容。",
            meta: "产品日志",
            time: "2026-06-10",
            media: <InfoCircledIcon />,
            extra: <div style={{ width: "9rem", height: "6.5rem", borderRadius: "0.7rem", background: "linear-gradient(135deg, rgb(232 248 240), rgb(247 247 244))" }} />,
          },
        ];

        <List
          itemLayout="vertical"
          items={items}
          style={{ width: "min(100%, 50rem)" }}
        />;
      `,content:(0,m.jsx)(d,{itemLayout:`vertical`,items:_,style:{width:`min(100%, 50rem)`}})},{title:`分页设置`,code:`
        import { List, type ListItem } from "willa/List";
        import { Pagination } from "willa/Pagination";
        import "willa/List.css";
        import "willa/Pagination.css";

        const items: Array<ListItem> = [
          { id: "one", title: "组件文档", description: "列表、表格和表单组件。" },
          { id: "two", title: "AI 场景", description: "对话、输入和推理过程。" },
          { id: "three", title: "布局能力", description: "Stack、Grid 和 SplitPane。" },
        ];

        <List
          items={items}
          footer={<Pagination page={1} pageCount={5} />}
          style={{ width: "min(100%, 44rem)" }}
        />;
      `,content:(0,m.jsx)(d,{items:[{id:`one`,title:`组件文档`,description:`列表、表格和表单组件。`},{id:`two`,title:`AI 场景`,description:`对话、输入和推理过程。`},{id:`three`,title:`布局能力`,description:`Stack、Grid 和 SplitPane。`}],footer:(0,m.jsx)(f,{page:1,pageCount:5}),style:{width:`min(100%, 44rem)`}})},{title:`栅格列表`,code:`
        import { Badge } from "willa/Badge";
        import { List, type ListItem } from "willa/List";
        import "willa/Badge.css";
        import "willa/List.css";

        const items: Array<ListItem> = [
          { id: "prompt", title: "PromptInput", description: "AI 输入和提交入口。", meta: <Badge size="sm">AI</Badge> },
          { id: "upload", title: "Upload", description: "上传、预览和进度管理。", meta: <Badge size="sm">Form</Badge> },
          { id: "table", title: "Table", description: "数据展示、筛选和批量操作。", meta: <Badge size="sm">Content</Badge> },
          { id: "calendar", title: "Calendar", description: "日期选择和日程视图。", meta: <Badge size="sm">Form</Badge> },
        ];

        <List
          items={items}
          grid={{ minItemWidth: "13rem", gap: "0.8rem" }}
          style={{ width: "min(100%, 54rem)" }}
        />;
      `,content:(0,m.jsx)(d,{items:v,grid:{minItemWidth:`13rem`,gap:`0.8rem`},style:{width:`min(100%, 54rem)`}})},{title:`虚拟滚动`,code:`
        import { List, type ListItem } from "willa/List";
        import "willa/List.css";

        const items: Array<ListItem> = Array.from({ length: 120 }, (_, index) => ({
          id: \`virtual-\${index + 1}\`,
          title: \`虚拟条目 \${index + 1}\`,
          description: "开启 virtualScroll 后，长列表只渲染可视区附近的条目。",
          meta: index % 2 === 0 ? "任务" : "内容",
          time: \`09:\${String(index % 60).padStart(2, "0")}\`,
        }));

        <List
          items={items}
          maxHeight="18rem"
          virtualScroll
          style={{ width: "min(100%, 44rem)" }}
        />;
      `,content:(0,m.jsx)(()=>(0,m.jsx)(d,{items:b,maxHeight:`18rem`,virtualScroll:!0,style:{width:`min(100%, 44rem)`}}),{})},{title:`虚拟滚动 + 无限加载`,code:`
        import { useState } from "react";
        import { List, type ListItem } from "willa/List";
        import "willa/List.css";

        const Demo = () => {
          const [items, setItems] = useState<Array<ListItem>>(
            Array.from({ length: 80 }, (_, index) => ({
              id: \`stream-\${index + 1}\`,
              title: \`流式条目 \${index + 1}\`,
              description: "接近底部时会自动加载下一批数据。",
            })),
          );

          const [loading, setLoading] = useState(false);
          const [hasMore] = useState(true);

          const loadMore = () => {
            if (loading || !hasMore) {
              return;
            }

            setLoading(true);

            return new Promise<void>((resolve) => {
              window.setTimeout(() => {
                setItems((currentItems) => [
                  ...currentItems,
                  ...Array.from({ length: 40 }, (_, offset) => ({
                    id: \`stream-\${currentItems.length + offset + 1}\`,
                    title: \`流式条目 \${currentItems.length + offset + 1}\`,
                    description: "接近底部时会自动加载下一批数据。",
                  })),
                ]);
                setLoading(false);
                resolve();
              }, 450);
            });
          };

          return (
            <List
              items={items}
              maxHeight="18rem"
              virtualScroll
              infiniteScroll
              loading={loading}
              loadingLabel="正在加载更多"
              hasMore={hasMore}
              scrollThreshold={120}
              onLoadMore={loadMore}
              style={{ width: "min(100%, 44rem)" }}
            />
          );
        };
      `,content:(0,m.jsx)(()=>{let[e,t]=(0,p.useState)(Array.from({length:80},(e,t)=>({id:`stream-${t+1}`,title:`流式条目 ${t+1}`,description:`接近底部时会自动加载下一批数据，配合 virtualScroll 保持滚动稳定。`,meta:t%2==0?`实时`:`批次`,time:`10:${String(t%60).padStart(2,`0`)}`,tone:t%3==0?`info`:t%3==1?`success`:`warning`}))),[n,r]=(0,p.useState)(!1);return(0,m.jsx)(d,{items:e,maxHeight:`18rem`,virtualScroll:!0,infiniteScroll:!0,loading:n,loadingLabel:`正在加载更多`,hasMore:!0,scrollThreshold:120,onLoadMore:()=>{if(!n)return r(!0),new Promise(e=>{window.setTimeout(()=>{t(e=>{let t=e.length+1,n=Array.from({length:40},(e,n)=>{let r=t+n;return{id:`stream-${r}`,title:`流式条目 ${r}`,description:`接近底部时会自动加载下一批数据。`,meta:r%2==0?`实时`:`批次`,time:`10:${String(r%60).padStart(2,`0`)}`,tone:r%3==0?`info`:r%3==1?`success`:`warning`}});return[...e,...n]}),r(!1),e()},450)})},style:{width:`min(100%, 44rem)`}})},{})},{title:`滚动加载`,code:`
        import { useState } from "react";
        import { InfoCircledIcon } from "@radix-ui/react-icons";
        import { List, type ListItem } from "willa/List";
        import "willa/List.css";

        const initialItems: Array<ListItem> = [
          { id: "one", title: "检查新增组件入口", description: "确认导出和 demo registry。", media: <InfoCircledIcon /> },
          { id: "two", title: "整理列表类样式", description: "复用基础 List。", media: <InfoCircledIcon /> },
        ];

        const Demo = () => {
          const [items, setItems] = useState(initialItems);
          const [loading, setLoading] = useState(false);
          const [hasMore, setHasMore] = useState(true);

          const loadMore = () => {
            setLoading(true);

            return new Promise<void>((resolve) => {
              window.setTimeout(() => {
                setItems((currentItems) => [
                  ...currentItems,
                  {
                    id: \`more-\${currentItems.length}\`,
                    title: \`滚动加载条目 \${currentItems.length + 1}\`,
                    description: "滚动接近底部时自动触发 onLoadMore。",
                    media: <InfoCircledIcon />,
                  },
                ]);
                setHasMore(items.length < 7);
                setLoading(false);
                resolve();
              }, 500);
            });
          };

          return (
            <List
              items={items}
              maxHeight="18rem"
              infiniteScroll
              hasMore={hasMore}
              loading={loading}
              loadingLabel="加载更多内容"
              onLoadMore={loadMore}
              style={{ width: "min(100%, 42rem)" }}
            />
          );
        };
      `,content:(0,m.jsx)(()=>{let[e,t]=(0,p.useState)(g),[n,r]=(0,p.useState)(!1),[i,a]=(0,p.useState)(!0);return(0,m.jsx)(d,{items:e,maxHeight:`18rem`,infiniteScroll:!0,hasMore:i,loading:n,loadingLabel:`加载更多内容`,onLoadMore:()=>(r(!0),new Promise(n=>{window.setTimeout(()=>{t(e=>[...e,{id:`more-${e.length}`,title:`滚动加载条目 ${e.length+1}`,description:`滚动接近底部时自动触发 onLoadMore。`,meta:`自动加载`,media:(0,m.jsx)(o,{})}]),a(e.length<7),r(!1),n()},500)})),style:{width:`min(100%, 42rem)`}})},{})},{title:`拖拽排序`,code:`
        import { useState } from "react";
        import { CheckCircledIcon, ClockIcon, InfoCircledIcon } from "@radix-ui/react-icons";
        import { List, type ListItem } from "willa/List";
        import "willa/List.css";

        const initialItems: Array<ListItem> = [
          { id: "import", title: "导入数据", description: "先读取用户上传的反馈文档。", media: <InfoCircledIcon /> },
          { id: "analyse", title: "分析优先级", description: "按影响面、成本和风险输出排序。", media: <ClockIcon /> },
          { id: "publish", title: "生成报告", description: "把结论整理成可以直接交付的版本。", media: <CheckCircledIcon /> },
        ];

        const Demo = () => {
          const [items, setItems] = useState(initialItems);

          return (
            <List
              items={items}
              draggable
              onItemsChange={setItems}
              style={{ width: "min(100%, 42rem)" }}
            />
          );
        };
      `,content:(0,m.jsx)(()=>{let[e,t]=(0,p.useState)(y);return(0,m.jsx)(d,{items:e,draggable:!0,onItemsChange:t,style:{width:`min(100%, 42rem)`}})},{})},{title:`自定义条目`,code:`
        import { List, type ListItem } from "willa/List";
        import { Stack } from "willa/Stack";
        import "willa/List.css";
        import "willa/Stack.css";

        const items: Array<ListItem> = [
          {
            id: "custom",
            title: "自定义条目",
            description: "保留 List 的容器和状态，自己控制条目内部布局。",
          },
        ];

        <List
          items={items}
          renderItem={(item) => (
            <Stack gap="xs" style={{ padding: "0.9rem 1rem" }}>
              <strong>{item.title}</strong>
              <span>{item.description}</span>
            </Stack>
          )}
          style={{ width: "min(100%, 34rem)" }}
        />;
      `,content:(0,m.jsx)(d,{items:[{id:`custom`,title:`自定义条目`,description:`保留 List 的容器和状态，自己控制条目内部布局。`}],renderItem:e=>(0,m.jsxs)(c,{gap:`xs`,style:{padding:`0.9rem 1rem`},children:[(0,m.jsx)(`strong`,{children:e.title}),(0,m.jsx)(`span`,{children:e.description})]}),style:{width:`min(100%, 34rem)`}})}],props:[{name:`items`,type:`Array<ListItem>`,required:!0,description:`列表数据。`},{name:`size`,type:`"sm" | "md" | "lg"`,defaultValue:`"md"`,description:`列表尺寸。`},{name:`variant`,type:`"panel" | "plain" | "menu"`,defaultValue:`"panel"`,description:`列表视觉类型，menu 适合浮层候选项列表。`},{name:`itemLayout`,type:`"horizontal" | "vertical"`,defaultValue:`"horizontal"`,description:`条目布局方向，竖排适合文章和资源类列表。`},{name:`split`,type:`boolean`,defaultValue:`true`,description:`是否展示分割线。`},{name:`header`,type:`ReactNode`,description:`列表头部内容。`},{name:`footer`,type:`ReactNode`,description:`列表底部内容，可放分页器等控件。`},{name:`loadMore`,type:`ReactNode`,description:`手动加载更多区域。`},{name:`loading`,type:`boolean`,defaultValue:`false`,description:`加载状态。`},{name:`loadingLabel`,type:`ReactNode`,defaultValue:`"正在加载"`,description:`加载状态文案。`},{name:`grid`,type:`ListGrid`,description:`栅格配置，支持 columns、minItemWidth 和 gap。`},{name:`empty`,type:`ReactNode`,defaultValue:`"暂无内容"`,description:`空列表内容。`},{name:`maxHeight`,type:`CSSProperties['maxHeight']`,description:`列表最大高度，超出后内部滚动。`},{name:`virtualScroll`,type:`boolean`,defaultValue:`false`,description:`是否开启虚拟滚动，只渲染当前可视区附近的条目。`},{name:`virtualScrollOverscan`,type:`number`,defaultValue:`4`,description:`虚拟滚动预渲染的额外条目数量。`},{name:`draggable`,type:`boolean`,defaultValue:`false`,description:`是否开启拖拽排序。`},{name:`infiniteScroll`,type:`boolean`,defaultValue:`false`,description:`是否开启滚动到底部自动加载。`},{name:`hasMore`,type:`boolean`,defaultValue:`false`,description:`无限滚动是否还有更多数据。`},{name:`scrollThreshold`,type:`number`,defaultValue:`56`,description:`距离底部多少像素时触发 onLoadMore。`},{name:`renderItem`,type:`(item: ListItem) => ReactNode`,description:`完全自定义单条渲染。`},{name:`renderLink`,type:`(props: WillaRenderLinkProps) => ReactNode`,description:`自定义条目链接渲染，可接入客户端路由；仅在条目有 href 且未禁用时调用。`},{name:`onItemsChange`,type:`(items: Array<ListItem>) => void`,description:`拖拽排序后的数据回调。`},{name:`onLoadMore`,type:`() => void | Promise<void>`,description:`无限滚动加载更多回调。`},{name:`onItemClick`,type:`(item: ListItem, event: MouseEvent) => void`,description:`点击条目主体时触发。`},{name:`ListItem.id`,type:`string`,required:!0,description:`条目唯一标识。`},{name:`ListItem.title`,type:`ReactNode`,required:!0,description:`条目标题。`},{name:`ListItem.description`,type:`ReactNode`,description:`条目说明。`},{name:`ListItem.meta`,type:`ReactNode`,description:`辅助信息或状态。`},{name:`ListItem.time`,type:`ReactNode`,description:`时间信息。`},{name:`ListItem.media`,type:`ReactNode`,description:`左侧图标或媒体内容，不传则不展示左侧区域。`},{name:`ListItem.extra`,type:`ReactNode`,description:`额外区域，常用于竖排列表的图片或摘要块。`},{name:`ListItem.actions`,type:`ReactNode`,description:`右侧或底部操作区。`},{name:`ListItem.tone`,type:`"neutral" | "info" | "success" | "warning" | "danger"`,defaultValue:`"neutral"`,description:`条目类型色。`},{name:`ListItem.unread`,type:`boolean`,description:`未读状态。`},{name:`ListItem.selected`,type:`boolean`,description:`选中状态。`},{name:`ListItem.disabled`,type:`boolean`,description:`禁用当前条目。`},{name:`ListItem.href`,type:`string`,description:`条目链接地址。`},{name:`ListItem.target`,type:`HTMLAnchorElement['target']`,description:`链接打开方式。`},{name:`ListItem.rel`,type:`HTMLAnchorElement['rel']`,description:`链接 rel 属性；target 为 _blank 且未传 rel 时默认使用 noreferrer。`},{name:`virtualScrollItemHeight`,type:`number`,description:`虚拟滚动项高度。`}]});export{x as default};