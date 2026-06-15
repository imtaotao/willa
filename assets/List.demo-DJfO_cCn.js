import{aw as w,au as e,ak as N,aa as J,as as U,c as u,ac as O,P as y,B as h,g as S,m as M,a4 as K}from"./index-VEztyUnl.js";import{P as Q}from"./index-DcMO6r1Z.js";/* empty css              */import{d as V}from"./defineDoc-fv-G_8j9.js";function d(s){const{items:t,size:o="md",variant:a="panel",itemLayout:l="horizontal",split:c=!0,header:p,footer:m,loadMore:g,loading:x=!1,loadingLabel:R="正在加载",grid:n,empty:A="暂无内容",maxHeight:_,draggable:L=!1,infiniteScroll:P=!1,hasMore:D=!1,scrollThreshold:H=56,renderItem:C,onItemsChange:b,onLoadMore:k,onItemClick:T,onScroll:j,className:F,style:$,...W}=s,[I,f]=w.useState(),v=w.useRef(!1),E={...$,..._===void 0?void 0:{maxHeight:_},...(n==null?void 0:n.columns)===void 0?void 0:{"--willa-list-grid-columns":n.columns},...(n==null?void 0:n.minItemWidth)===void 0?void 0:{"--willa-list-grid-min-width":String(n.minItemWidth)},...(n==null?void 0:n.gap)===void 0?void 0:{"--willa-list-grid-gap":String(n.gap)}},q=i=>{if(j==null||j(i),!P||!D||x||!k||v.current)return;const r=i.currentTarget;if(r.scrollHeight-r.scrollTop-r.clientHeight>H)return;const B=k();U(B)&&(v.current=!0,B.finally(()=>{v.current=!1}))},G=(i,r)=>{if(r.preventDefault(),!I||I===i.id){f(void 0);return}b==null||b(Z(t,I,i.id)),f(void 0)};return e.jsxs("section",{...W,className:N("willa-list",`willa-list--${o}`,`willa-list--${a}`,`willa-list--${l}`,c&&"willa-list--split",n&&"willa-list--grid",L&&"willa-list--draggable",x&&"willa-list--loading",F),style:E,onScroll:q,children:[p?e.jsx("div",{className:"willa-list__slot",children:p}):null,t.length>0?e.jsx("ul",{className:"willa-list__items",children:t.map(i=>e.jsx("li",{className:N("willa-list__item",`willa-list__item--${i.tone??"neutral"}`,i.unread&&"willa-list__item--unread",i.selected&&"willa-list__item--selected",i.disabled&&"willa-list__item--disabled",I===i.id&&"willa-list__item--dragging"),draggable:L&&!i.disabled,onDragStart:r=>{!L||i.disabled||(r.dataTransfer.effectAllowed="move",r.dataTransfer.setData("text/plain",i.id),f(i.id))},onDragOver:r=>{!L||i.disabled||!I||(r.preventDefault(),r.dataTransfer.dropEffect="move")},onDrop:r=>G(i,r),onDragEnd:()=>f(void 0),children:C?C(i):e.jsx(X,{item:i,onItemClick:T})},i.id))}):e.jsx("div",{className:"willa-list__empty",children:A}),x?e.jsx("div",{className:"willa-list__loading",children:e.jsx(J,{size:"sm",label:R})}):null,g?e.jsx("div",{className:"willa-list__load-more",children:g}):null,m?e.jsx("div",{className:"willa-list__slot",children:m}):null]})}const X=s=>{const{item:t,onItemClick:o}=s,a=e.jsxs(e.Fragment,{children:[t.media?e.jsx("span",{className:"willa-list__media","aria-hidden":"true",children:t.media}):null,e.jsxs("span",{className:"willa-list__body",children:[e.jsxs("span",{className:"willa-list__header",children:[e.jsx("span",{className:"willa-list__title",children:t.title}),t.time?e.jsx("span",{className:"willa-list__time",children:t.time}):null]}),t.description?e.jsx("span",{className:"willa-list__description",children:t.description}):null,t.meta?e.jsx("span",{className:"willa-list__meta",children:t.meta}):null]}),t.extra?e.jsx("span",{className:"willa-list__extra",children:t.extra}):null]});return e.jsxs(e.Fragment,{children:[Y({item:t,mainContent:a,onItemClick:o}),t.actions?e.jsx("span",{className:"willa-list__actions",children:t.actions}):null,t.unread?e.jsx("span",{className:"willa-list__unread","aria-hidden":"true"}):null]})},Y=s=>{const{item:t,mainContent:o,onItemClick:a}=s;return t.href?e.jsx("a",{className:"willa-list__main",href:t.disabled?void 0:t.href,target:t.target,rel:t.target==="_blank"?"noreferrer":void 0,"aria-disabled":t.disabled||void 0,onClick:l=>{if(t.disabled){l.preventDefault();return}a==null||a(t,l)},children:o}):a?e.jsx("button",{className:"willa-list__main",type:"button",disabled:t.disabled,onClick:l=>a(t,l),children:o}):e.jsx("div",{className:"willa-list__main",children:o})},Z=(s,t,o)=>{const a=s.findIndex(m=>m.id===t),l=s.findIndex(m=>m.id===o);if(a<0||l<0)return s;const c=[...s],[p]=c.splice(a,1);return c.splice(l,0,p),c},ee=[{id:"one",title:"Racing car sprays burning fuel into crowd."},{id:"two",title:"Japanese princess to wed commoner."},{id:"three",title:"Australian walks 100km after outback crash."},{id:"four",title:"Man charged over missing wedding girl."},{id:"five",title:"Los Angeles battles huge wildfires."}],z=[{id:"review",title:"检查新增组件入口",description:"确认 content、willa 聚合包和 demo registry 都已经同步。",meta:e.jsx(h,{size:"sm",children:"组件"}),time:"刚刚",tone:"info",unread:!0,media:e.jsx(y,{}),actions:e.jsx(u,{size:"sm",variant:"ghost",children:"查看"})},{id:"styles",title:"整理列表类样式",description:"复用基础 List，避免通知和普通列表重复维护结构。",meta:e.jsx(h,{size:"sm",tone:"success",children:"已完成"}),time:"10:20",tone:"success",media:e.jsx(S,{})},{id:"build",title:"等待构建结果",description:"构建任务正在排队，完成后会同步状态。",meta:"CI 队列",time:"09:48",tone:"warning",media:e.jsx(M,{})}],te=[{id:"article-a",title:"组件体系整理完成",description:"把标准列表和通知场景拆清楚，普通数据展示优先使用 List。",meta:"Willa 设计系统",time:"2026-06-14",media:e.jsx(K,{}),extra:e.jsx("div",{style:{width:"9rem",height:"6.5rem",borderRadius:"0.7rem",background:"linear-gradient(135deg, rgb(228 235 255), rgb(245 246 250))"}}),actions:e.jsxs(e.Fragment,{children:[e.jsx(u,{size:"sm",variant:"ghost",children:"编辑"}),e.jsx(u,{size:"sm",variant:"ghost",children:"归档"})]})},{id:"article-b",title:"列表组件支持竖排布局",description:"竖排布局适合文章、活动、资源卡片这类需要额外图片区或操作区的内容。",meta:"产品日志",time:"2026-06-10",media:e.jsx(y,{}),extra:e.jsx("div",{style:{width:"9rem",height:"6.5rem",borderRadius:"0.7rem",background:"linear-gradient(135deg, rgb(232 248 240), rgb(247 247 244))"}}),actions:e.jsxs(e.Fragment,{children:[e.jsx(u,{size:"sm",variant:"ghost",children:"预览"}),e.jsx(u,{size:"sm",variant:"ghost",children:"发布"})]})}],ie=[{id:"prompt",title:"PromptInput",description:"AI 输入和提交入口。",meta:e.jsx(h,{size:"sm",children:"AI"})},{id:"upload",title:"Upload",description:"上传、预览和进度管理。",meta:e.jsx(h,{size:"sm",children:"Form"})},{id:"table",title:"Table",description:"数据展示、筛选和批量操作。",meta:e.jsx(h,{size:"sm",children:"Content"})},{id:"calendar",title:"Calendar",description:"日期选择和日程视图。",meta:e.jsx(h,{size:"sm",children:"Form"})}],se=[{id:"import",title:"导入数据",description:"先读取用户上传的反馈文档。",media:e.jsx(y,{})},{id:"analyse",title:"分析优先级",description:"按影响面、成本和风险输出排序。",media:e.jsx(M,{})},{id:"publish",title:"生成报告",description:"把结论整理成可以直接交付的版本。",media:e.jsx(S,{})}],ae=()=>{const[s,t]=w.useState(z),[o,a]=w.useState(!1),[l,c]=w.useState(!0),p=()=>(a(!0),new Promise(m=>{window.setTimeout(()=>{t(g=>[...g,{id:`more-${g.length}`,title:`滚动加载条目 ${g.length+1}`,description:"滚动接近底部时自动触发 onLoadMore。",meta:"自动加载",media:e.jsx(y,{})}]),c(s.length<7),a(!1),m()},500)}));return e.jsx(d,{items:s,maxHeight:"18rem",infiniteScroll:!0,hasMore:l,loading:o,loadingLabel:"加载更多内容",onLoadMore:p,style:{width:"min(100%, 42rem)"}})},ne=()=>{const[s,t]=w.useState(se);return e.jsx(d,{items:s,draggable:!0,onItemsChange:t,style:{width:"min(100%, 42rem)"}})},ce=V({id:"list",name:"List",packageName:"willa/List",description:"用于搭建任务、活动、文章、资源和通知等通用条目列表。",imports:[{name:"Badge",from:"willa/Badge"},{name:"Button",from:"willa/Button"},{name:"List",from:"willa/List"},{name:"Pagination",from:"willa/Pagination"},{name:"Stack",from:"willa/Stack"}],css:"willa/List.css",demo:{name:"List",component:d,props:{items:ee,header:"Header",footer:"Footer",style:{width:"min(100%, 40rem)"}}},code:`
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
  `,sections:[{title:"基础列表",code:`
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
      `,content:e.jsx(d,{items:z,style:{width:"min(100%, 44rem)"},onItemClick:()=>{}})},{title:"加载更多",code:`
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
      `,content:e.jsx(d,{items:[{id:"one",title:"已同步 12 个组件状态",description:"组件入口和 demo 已更新。"},{id:"two",title:"等待视觉验收",description:"确认列表、通知和表格组合效果。"}],loadMore:e.jsx(u,{size:"sm",children:"加载更多"}),style:{width:"min(100%, 40rem)"}})},{title:"竖排列表",code:`
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
      `,content:e.jsx(d,{itemLayout:"vertical",items:te,style:{width:"min(100%, 50rem)"}})},{title:"分页设置",code:`
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
      `,content:e.jsx(d,{items:[{id:"one",title:"组件文档",description:"列表、表格和表单组件。"},{id:"two",title:"AI 场景",description:"对话、输入和推理过程。"},{id:"three",title:"布局能力",description:"Stack、Grid 和 SplitPane。"}],footer:e.jsx(Q,{page:1,pageCount:5}),style:{width:"min(100%, 44rem)"}})},{title:"栅格列表",code:`
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
      `,content:e.jsx(d,{items:ie,grid:{minItemWidth:"13rem",gap:"0.8rem"},style:{width:"min(100%, 54rem)"}})},{title:"滚动加载",code:`
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
      `,content:e.jsx(ae,{})},{title:"拖拽排序",code:`
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
      `,content:e.jsx(ne,{})},{title:"自定义条目",code:`
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
      `,content:e.jsx(d,{items:[{id:"custom",title:"自定义条目",description:"保留 List 的容器和状态，自己控制条目内部布局。"}],renderItem:s=>e.jsxs(O,{gap:"xs",style:{padding:"0.9rem 1rem"},children:[e.jsx("strong",{children:s.title}),e.jsx("span",{children:s.description})]}),style:{width:"min(100%, 34rem)"}})}],props:[{name:"items",type:"Array<ListItem>",required:!0,description:"列表数据。"},{name:"size",type:'"sm" | "md" | "lg"',description:"列表尺寸。"},{name:"variant",type:'"panel" | "plain"',description:"列表视觉类型。"},{name:"itemLayout",type:'"horizontal" | "vertical"',description:"条目布局方向，竖排适合文章和资源类列表。"},{name:"split",type:"boolean",description:"是否展示分割线。"},{name:"header",type:"ReactNode",description:"列表头部内容。"},{name:"footer",type:"ReactNode",description:"列表底部内容，可放分页器等控件。"},{name:"loadMore",type:"ReactNode",description:"手动加载更多区域。"},{name:"loading",type:"boolean",description:"加载状态。"},{name:"loadingLabel",type:"ReactNode",description:"加载状态文案。"},{name:"grid",type:"ListGrid",description:"栅格配置，支持 columns、minItemWidth 和 gap。"},{name:"empty",type:"ReactNode",description:"空列表内容。"},{name:"maxHeight",type:"CSSProperties['maxHeight']",description:"列表最大高度，超出后内部滚动。"},{name:"draggable",type:"boolean",description:"是否开启拖拽排序。"},{name:"infiniteScroll",type:"boolean",description:"是否开启滚动到底部自动加载。"},{name:"hasMore",type:"boolean",description:"无限滚动是否还有更多数据。"},{name:"scrollThreshold",type:"number",description:"距离底部多少像素时触发 onLoadMore。"},{name:"renderItem",type:"(item: ListItem) => ReactNode",description:"完全自定义单条渲染。"},{name:"onItemsChange",type:"(items: Array<ListItem>) => void",description:"拖拽排序后的数据回调。"},{name:"onLoadMore",type:"() => void | Promise<void>",description:"无限滚动加载更多回调。"},{name:"onItemClick",type:"(item: ListItem, event: MouseEvent) => void",description:"点击条目主体时触发。"},{name:"ListItem.id",type:"string",required:!0,description:"条目唯一标识。"},{name:"ListItem.title",type:"ReactNode",required:!0,description:"条目标题。"},{name:"ListItem.description",type:"ReactNode",description:"条目说明。"},{name:"ListItem.meta",type:"ReactNode",description:"辅助信息或状态。"},{name:"ListItem.time",type:"ReactNode",description:"时间信息。"},{name:"ListItem.media",type:"ReactNode",description:"左侧图标或媒体内容，不传则不展示左侧区域。"},{name:"ListItem.extra",type:"ReactNode",description:"额外区域，常用于竖排列表的图片或摘要块。"},{name:"ListItem.actions",type:"ReactNode",description:"右侧或底部操作区。"},{name:"ListItem.tone",type:'"neutral" | "info" | "success" | "warning" | "danger"',description:"条目类型色。"},{name:"ListItem.unread",type:"boolean",description:"未读状态。"},{name:"ListItem.selected",type:"boolean",description:"选中状态。"},{name:"ListItem.disabled",type:"boolean",description:"禁用当前条目。"},{name:"ListItem.href",type:"string",description:"条目链接地址。"},{name:"ListItem.target",type:"HTMLAnchorElement['target']",description:"链接打开方式。"}]});export{ce as default};
