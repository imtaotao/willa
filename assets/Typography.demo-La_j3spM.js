import{aL as e,aN as l}from"./index-Dyu9wa1y.js";import{T as p}from"./index-B4w2AU_M.js";import{d as n}from"./defineDoc-gDFvY3Bj.js";import"./index-CA8_qk0y.js";const a={width:"100%"},r={width:"min(100%, 44rem)",justifySelf:"start"},o="这是一段较长的说明文本，用于展示多行省略和展开行为。排版组件经常出现在组件文档、产品说明、活动日志和系统提示中，也会出现在知识库、更新记录、任务详情和搜索结果摘要里。当容器宽度有限时，正文需要先保留稳定的阅读节奏，只展示关键信息，再通过展开操作让用户继续阅读完整内容。";function g(){const[t,y]=l.useState(!1);return e.jsx("div",{style:r,children:e.jsx(p.Paragraph,{ellipsis:{rows:2,expandable:"collapsible",expanded:t,tooltip:!0,suffix:"（摘要）",onExpand:(h,i)=>y(i.expanded)},children:o})})}function T(){return e.jsx("div",{style:a,children:e.jsxs(p,{children:[e.jsx(p.Title,{level:2,children:"内容发布规范"}),e.jsx(p.Paragraph,{children:"Typography 用于承载文章、说明、日志和产品提示里的文本层级。它提供标题、段落、行内文本和链接， 并能处理常见的强调、语义颜色、复制和省略。"}),e.jsxs(p.Paragraph,{children:["你可以使用 ",e.jsx(p.Text,{strong:!0,children:"加粗文本"}),"、",e.jsx(p.Text,{type:"secondary",children:"辅助文本"}),"、",e.jsx(p.Text,{mark:!0,children:"标记文本"})," 和"," ",e.jsx(p.Text,{code:!0,children:"inline code"})," 组合说明。"]})]})})}const u=n({id:"typography",name:"Typography",packageName:"willa/Typography",description:"用于标题、段落、行内文本、链接和常见文本操作的排版组件。",imports:[{name:"Typography",from:"willa/Typography"}],css:"willa/Typography.css",demo:{name:"TypographyPreview",component:T},code:`
    import { Typography } from "willa/Typography";
    import "willa/Typography.css";

    <Typography>
      <Typography.Title level={2}>内容发布规范</Typography.Title>
      <Typography.Paragraph>
        Typography 用于承载文章、说明、日志和产品提示里的文本层级。
      </Typography.Paragraph>
      <Typography.Paragraph>
        你可以使用 <Typography.Text strong>加粗文本</Typography.Text>、
        <Typography.Text type="secondary">辅助文本</Typography.Text> 和{" "}
        <Typography.Text code>inline code</Typography.Text> 组合说明。
      </Typography.Paragraph>
    </Typography>;
  `,sections:[{title:"标题层级",code:`
        <Typography>
          <Typography.Title level={1}>一级标题</Typography.Title>
          <Typography.Title level={2}>二级标题</Typography.Title>
          <Typography.Title level={3}>三级标题</Typography.Title>
          <Typography.Title level={4}>四级标题</Typography.Title>
          <Typography.Title level={5}>五级标题</Typography.Title>
        </Typography>;
      `,content:e.jsx("div",{style:a,children:e.jsxs(p,{children:[e.jsx(p.Title,{level:1,children:"一级标题"}),e.jsx(p.Title,{level:2,children:"二级标题"}),e.jsx(p.Title,{level:3,children:"三级标题"}),e.jsx(p.Title,{level:4,children:"四级标题"}),e.jsx(p.Title,{level:5,children:"五级标题"})]})})},{title:"文本样式",code:`
        <Typography>
          <Typography.Paragraph>
            <Typography.Text>默认文本</Typography.Text>{" "}
            <Typography.Text type="secondary">辅助文本</Typography.Text>{" "}
            <Typography.Text type="success">成功文本</Typography.Text>{" "}
            <Typography.Text type="warning">警告文本</Typography.Text>{" "}
            <Typography.Text type="danger">危险文本</Typography.Text>
          </Typography.Paragraph>
          <Typography.Paragraph>
            <Typography.Text strong>加粗</Typography.Text>{" "}
            <Typography.Text italic>斜体</Typography.Text>{" "}
            <Typography.Text underline>下划线</Typography.Text>{" "}
            <Typography.Text delete>删除线</Typography.Text>{" "}
            <Typography.Text mark>标记</Typography.Text>{" "}
            <Typography.Text code>code</Typography.Text>{" "}
            <Typography.Text keyboard>⌘K</Typography.Text>
          </Typography.Paragraph>
        </Typography>;
      `,content:e.jsx("div",{style:a,children:e.jsxs(p,{children:[e.jsxs(p.Paragraph,{children:[e.jsx(p.Text,{children:"默认文本"})," ",e.jsx(p.Text,{type:"secondary",children:"辅助文本"})," ",e.jsx(p.Text,{type:"success",children:"成功文本"})," ",e.jsx(p.Text,{type:"warning",children:"警告文本"})," ",e.jsx(p.Text,{type:"danger",children:"危险文本"})]}),e.jsxs(p.Paragraph,{children:[e.jsx(p.Text,{strong:!0,children:"加粗"})," ",e.jsx(p.Text,{italic:!0,children:"斜体"})," ",e.jsx(p.Text,{underline:!0,children:"下划线"})," ",e.jsx(p.Text,{delete:!0,children:"删除线"})," ",e.jsx(p.Text,{mark:!0,children:"标记"})," ",e.jsx(p.Text,{code:!0,children:"code"})," ",e.jsx(p.Text,{keyboard:!0,children:"⌘K"})]})]})})},{title:"链接与操作",code:`
        <Typography>
          <Typography.Paragraph>
            查看 <Typography.Link href="#typography">
              排版组件说明
            </Typography.Link>{" "}
            可以定位到当前文档中的组件说明。
          </Typography.Paragraph>
          <Typography.Paragraph>
            <Typography.Text
              copyable={{
                text: "release: typography-ready",
                tooltips: ["复制发布标记", "已复制发布标记"],
              }}
            >
              release: typography-ready
            </Typography.Text>
          </Typography.Paragraph>
        </Typography>;
      `,content:e.jsx("div",{style:a,children:e.jsxs(p,{children:[e.jsxs(p.Paragraph,{children:["查看"," ",e.jsx(p.Link,{href:"#typography",children:"排版组件说明"})," ","可以定位到当前文档中的组件说明。"]}),e.jsx(p.Paragraph,{children:e.jsx(p.Text,{copyable:{text:"release: typography-ready",tooltips:["复制发布标记","已复制发布标记"]},children:"release: typography-ready"})})]})})},{title:"可编辑",code:`
        <Typography.Paragraph
          editable={{
            triggerType: ["icon", "text"],
            autoSize: { minRows: 1, maxRows: 3 },
            onChange: (value) => console.log(value),
          }}
        >
          点击文本或编辑图标，可以快速修改这一段说明。
        </Typography.Paragraph>;
      `,content:e.jsx("div",{style:r,children:e.jsx(p.Paragraph,{editable:{triggerType:["icon","text"],autoSize:{minRows:1,maxRows:3}},children:"点击文本或编辑图标，可以快速修改这一段说明。"})})},{title:"子组件",code:`
        <Typography>
          <Typography.Title level={4}>Typography.Title</Typography.Title>
          <Typography.Paragraph>
            Typography.Paragraph 用于正文段落，Typography.Text 用于{" "}
            <Typography.Text strong>行内强调</Typography.Text>，
            Typography.Link 用于文档内跳转或外部链接。
          </Typography.Paragraph>
        </Typography>;
      `,content:e.jsx("div",{style:a,children:e.jsxs(p,{children:[e.jsx(p.Title,{level:4,children:"Typography.Title"}),e.jsxs(p.Paragraph,{children:["Typography.Paragraph 用于正文段落，Typography.Text 用于"," ",e.jsx(p.Text,{strong:!0,children:"行内强调"}),"， Typography.Link 用于文档内跳转或外部链接。"]})]})})},{title:"省略与展开",code:`
        <Typography.Paragraph
          ellipsis={{
            rows: 2,
            expandable: "collapsible",
            tooltip: true,
            suffix: "（摘要）",
          }}
        >
          ${o}
        </Typography.Paragraph>;
      `,content:e.jsx(g,{})}],props:[{name:"Typography.children",type:"ReactNode",group:"Typography",description:"排版内容容器，通常包裹 Title、Paragraph、Text 和 Link。"},{name:"Typography.className",type:"string",group:"Typography",description:"可选的外层 className。"},{name:"Text.children",type:"ReactNode",group:"Typography.Text / Paragraph 共享属性",description:"文本内容。"},{name:"Text.type",type:'"secondary" | "success" | "warning" | "danger"',group:"Typography.Text / Paragraph 共享属性",description:"文本语义色。"},{name:"Text.strong / italic / underline / delete",type:"boolean",defaultValue:"false",group:"Typography.Text / Paragraph 共享属性",description:"常见文本强调样式。"},{name:"Text.code / mark / keyboard",type:"boolean",defaultValue:"false",group:"Typography.Text / Paragraph 共享属性",description:"代码、标记和键盘输入样式；keyboard 内部复用 Kbd 的展示结构。"},{name:"Text.copyable",type:"boolean | TypographyCopyable",defaultValue:"false",group:"Typography.Text / Paragraph 共享属性",description:"展示复制操作；未传 text 时会复制 children 的纯文本。"},{name:"Text.editable",type:"boolean | TypographyEditable",defaultValue:"false",group:"Typography.Text / Paragraph 共享属性",description:"展示编辑操作，支持图标触发、文本触发、受控编辑态和编辑回调。"},{name:"Text.ellipsis",type:"boolean | TypographyEllipsis",defaultValue:"false",group:"Typography.Text / Paragraph 共享属性",description:"文本省略配置，支持多行和展开收起。"},{name:"Text.actions",type:'{ placement?: "start" | "end" }',defaultValue:'{ placement: "end" }',group:"Typography.Text / Paragraph 共享属性",description:"复制、编辑、省略展开等操作相对文本的位置。"},{name:"Text.disabled",type:"boolean",defaultValue:"false",group:"Typography.Text / Paragraph 共享属性",description:"禁用文本样式。"},{name:"Paragraph 共享文本属性",type:"TypographyTextProps & HTMLAttributes<HTMLParagraphElement>",group:"Typography.Text / Paragraph 共享属性",description:"Paragraph 复用 Text 的语义、强调、复制和省略属性，并渲染为段落。"},{name:"Title.level",type:"1 | 2 | 3 | 4 | 5",defaultValue:"1",group:"Typography.Title",description:"Typography.Title 的标题层级。"},{name:"Title 共享文本属性",type:"TypographyTextProps & HTMLAttributes<HTMLHeadingElement>",group:"Typography.Title",description:"Title 复用 Text 的语义、强调、复制和省略属性，并根据 level 渲染 h1 到 h5。"},{name:"Link.href",type:"string",group:"Typography.Link",description:"链接地址。"},{name:"Link 共享文本属性",type:"TypographyTextProps & AnchorHTMLAttributes<HTMLAnchorElement>",group:"Typography.Link",description:"Link 复用 Text 的语义、强调、复制和禁用属性，并额外支持 a 标签属性。"},{name:"copyable.text",type:"string | () => string | Promise<string>",group:"TypographyCopyable",description:"复制到剪贴板的文本；未设置时复制 children 的纯文本。"},{name:"copyable.icon",type:"ReactNode | [ReactNode, ReactNode]",group:"TypographyCopyable",description:"复制按钮图标；数组形式分别表示复制前和复制后。"},{name:"copyable.tooltips",type:"false | [ReactNode, ReactNode]",group:"TypographyCopyable",description:"复制按钮的提示文案；传 false 时不展示提示。"},{name:"copyable.copiedDuration",type:"number",defaultValue:"1200",group:"TypographyCopyable",description:"复制成功状态保持时间。"},{name:"copyable.onCopy",type:"(text: string) => void",group:"TypographyCopyable",description:"复制成功后的回调。"},{name:"editable.text",type:"string",group:"TypographyEditable",description:"进入编辑态时使用的文本；未设置时读取 children 的纯文本。"},{name:"editable.editing",type:"boolean",group:"TypographyEditable",description:"受控编辑态。"},{name:"editable.defaultEditing",type:"boolean",defaultValue:"false",group:"TypographyEditable",description:"默认是否进入编辑态。"},{name:"editable.triggerType",type:'Array<"icon" | "text">',defaultValue:'["icon"]',group:"TypographyEditable",description:"进入编辑态的触发方式。"},{name:"editable.autoSize",type:"boolean | { minRows?: number; maxRows?: number }",group:"TypographyEditable",description:"编辑文本域是否随内容自动调整高度。"},{name:"editable.maxLength",type:"number",group:"TypographyEditable",description:"编辑内容最大长度。"},{name:"editable.onChange / onCancel / onStart / onEnd",type:"function",group:"TypographyEditable",description:"编辑过程回调。"},{name:"ellipsis.rows",type:"number",defaultValue:"1",group:"TypographyEllipsis",description:"最多展示的行数。"},{name:"ellipsis.expandable",type:'boolean | "collapsible"',defaultValue:"false",group:"TypographyEllipsis",description:"是否展示展开操作；collapsible 支持展开后收起。"},{name:"ellipsis.expanded / defaultExpanded",type:"boolean",group:"TypographyEllipsis",description:"受控或非受控展开状态。"},{name:"ellipsis.suffix",type:"ReactNode",group:"TypographyEllipsis",description:"省略内容后缀。"},{name:"ellipsis.symbol",type:"ReactNode | ((expanded: boolean) => ReactNode)",group:"TypographyEllipsis",description:"自定义展开/收起文案。"},{name:"ellipsis.tooltip",type:"boolean | ReactNode",group:"TypographyEllipsis",description:"省略时展示完整内容提示；true 时使用纯文本内容。"},{name:"ellipsis.onEllipsis / onExpand",type:"function",group:"TypographyEllipsis",description:"省略状态变化和展开状态变化回调。"}]});export{u as default};
