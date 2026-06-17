import{aL as e}from"./index-DGCLQz7t.js";import{T as p}from"./index-i90GkiR6.js";import{d as r}from"./defineDoc-BlznOeEL.js";import"./index-CoV2t_6d.js";function a(){return e.jsxs(p,{children:[e.jsx(p.Title,{level:2,children:"内容发布规范"}),e.jsx(p.Paragraph,{children:"Typography 用于承载文章、说明、日志和产品提示里的文本层级。它提供标题、段落、行内文本和链接， 并能处理常见的强调、语义颜色、复制和省略。"}),e.jsxs(p.Paragraph,{children:["你可以使用 ",e.jsx(p.Text,{strong:!0,children:"加粗文本"}),"、",e.jsx(p.Text,{type:"secondary",children:"辅助文本"}),"、",e.jsx(p.Text,{mark:!0,children:"标记文本"})," 和"," ",e.jsx(p.Text,{code:!0,children:"inline code"})," 组合说明。"]})]})}const h=r({id:"typography",name:"Typography",packageName:"willa/Typography",description:"用于标题、段落、行内文本、链接和常见文本操作的排版组件。",imports:[{name:"Typography",from:"willa/Typography"}],css:"willa/Typography.css",demo:{name:"TypographyPreview",component:a},code:`
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
      `,content:e.jsxs(p,{children:[e.jsx(p.Title,{level:1,children:"一级标题"}),e.jsx(p.Title,{level:2,children:"二级标题"}),e.jsx(p.Title,{level:3,children:"三级标题"}),e.jsx(p.Title,{level:4,children:"四级标题"}),e.jsx(p.Title,{level:5,children:"五级标题"})]})},{title:"文本样式",code:`
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
      `,content:e.jsxs(p,{children:[e.jsxs(p.Paragraph,{children:[e.jsx(p.Text,{children:"默认文本"})," ",e.jsx(p.Text,{type:"secondary",children:"辅助文本"})," ",e.jsx(p.Text,{type:"success",children:"成功文本"})," ",e.jsx(p.Text,{type:"warning",children:"警告文本"})," ",e.jsx(p.Text,{type:"danger",children:"危险文本"})]}),e.jsxs(p.Paragraph,{children:[e.jsx(p.Text,{strong:!0,children:"加粗"})," ",e.jsx(p.Text,{italic:!0,children:"斜体"})," ",e.jsx(p.Text,{underline:!0,children:"下划线"})," ",e.jsx(p.Text,{delete:!0,children:"删除线"})," ",e.jsx(p.Text,{mark:!0,children:"标记"})," ",e.jsx(p.Text,{code:!0,children:"code"})," ",e.jsx(p.Text,{keyboard:!0,children:"⌘K"})]})]})},{title:"链接与复制",code:`
        <Typography>
          <Typography.Paragraph>
            查看 <Typography.Link href="#typography">
              排版组件说明
            </Typography.Link>{" "}
            可以定位到当前文档中的组件说明。
          </Typography.Paragraph>
          <Typography.Text copyable={{ text: "release: typography-ready" }}>
            release: typography-ready
          </Typography.Text>
        </Typography>;
      `,content:e.jsxs(p,{children:[e.jsxs(p.Paragraph,{children:["查看"," ",e.jsx(p.Link,{href:"#typography",children:"排版组件说明"})," ","可以定位到当前文档中的组件说明。"]}),e.jsx(p.Text,{copyable:{text:"release: typography-ready"},children:"release: typography-ready"})]})},{title:"子组件",code:`
        <Typography>
          <Typography.Title level={4}>Typography.Title</Typography.Title>
          <Typography.Paragraph>
            Typography.Paragraph 用于正文段落，Typography.Text 用于{" "}
            <Typography.Text strong>行内强调</Typography.Text>，
            Typography.Link 用于文档内跳转或外部链接。
          </Typography.Paragraph>
        </Typography>;
      `,content:e.jsxs(p,{children:[e.jsx(p.Title,{level:4,children:"Typography.Title"}),e.jsxs(p.Paragraph,{children:["Typography.Paragraph 用于正文段落，Typography.Text 用于"," ",e.jsx(p.Text,{strong:!0,children:"行内强调"}),"， Typography.Link 用于文档内跳转或外部链接。"]})]})},{title:"省略与展开",code:`
        <Typography.Paragraph
          ellipsis={{
            rows: 2,
            expandable: true,
          }}
        >
          这是一段较长的说明文本，用于展示多行省略和展开行为。排版组件经常出现在组件文档、
          产品说明、活动日志和系统提示中，也会出现在知识库、更新记录、任务详情和搜索结果摘要里。
          当容器宽度有限时，正文需要先保留稳定的阅读节奏，只展示关键信息，再通过展开操作让用户继续阅读完整内容。
          这种场景下，省略按钮应该贴近文本尾部，并且不能挤压正文、换成竖排或破坏段落的基线。
        </Typography.Paragraph>;
      `,content:e.jsx(p.Paragraph,{ellipsis:{rows:2,expandable:!0},children:"这是一段较长的说明文本，用于展示多行省略和展开行为。排版组件经常出现在组件文档、 产品说明、活动日志和系统提示中，也会出现在知识库、更新记录、任务详情和搜索结果摘要里。 当容器宽度有限时，正文需要先保留稳定的阅读节奏，只展示关键信息，再通过展开操作让用户继续阅读完整内容。 这种场景下，省略按钮应该贴近文本尾部，并且不能挤压正文、换成竖排或破坏段落的基线。"})}],props:[{name:"Typography.children",type:"ReactNode",group:"Typography",description:"排版内容容器，通常包裹 Title、Paragraph、Text 和 Link。"},{name:"Typography.className",type:"string",group:"Typography",description:"可选的外层 className。"},{name:"Text.children",type:"ReactNode",group:"Typography.Text / Paragraph 共享属性",description:"文本内容。"},{name:"Text.type",type:'"secondary" | "success" | "warning" | "danger"',group:"Typography.Text / Paragraph 共享属性",description:"文本语义色。"},{name:"Text.strong / italic / underline / delete",type:"boolean",defaultValue:"false",group:"Typography.Text / Paragraph 共享属性",description:"常见文本强调样式。"},{name:"Text.code / mark / keyboard",type:"boolean",defaultValue:"false",group:"Typography.Text / Paragraph 共享属性",description:"代码、标记和键盘输入样式；keyboard 内部复用 Kbd 的展示结构。"},{name:"Text.copyable",type:"boolean | { text?: string; copiedDuration?: number; onCopy?: (text: string) => void }",defaultValue:"false",group:"Typography.Text / Paragraph 共享属性",description:"展示复制操作；未传 text 时会复制 children 的纯文本。"},{name:"Text.ellipsis",type:"boolean | { rows?: number; expandable?: boolean; expanded?: boolean; defaultExpanded?: boolean; suffix?: ReactNode; symbol?: ReactNode | ((expanded: boolean) => ReactNode); onExpand?: (event, info) => void }",defaultValue:"false",group:"Typography.Text / Paragraph 共享属性",description:"文本省略配置，支持多行和展开收起。"},{name:"Text.disabled",type:"boolean",defaultValue:"false",group:"Typography.Text / Paragraph 共享属性",description:"禁用文本样式。"},{name:"Paragraph 共享文本属性",type:"TypographyTextProps & HTMLAttributes<HTMLParagraphElement>",group:"Typography.Text / Paragraph 共享属性",description:"Paragraph 复用 Text 的语义、强调、复制和省略属性，并渲染为段落。"},{name:"Title.level",type:"1 | 2 | 3 | 4 | 5",defaultValue:"1",group:"Typography.Title",description:"Typography.Title 的标题层级。"},{name:"Title 共享文本属性",type:"TypographyTextProps & HTMLAttributes<HTMLHeadingElement>",group:"Typography.Title",description:"Title 复用 Text 的语义、强调、复制和省略属性，并根据 level 渲染 h1 到 h5。"},{name:"Link.href",type:"string",group:"Typography.Link",description:"链接地址。"},{name:"Link 共享文本属性",type:"TypographyTextProps & AnchorHTMLAttributes<HTMLAnchorElement>",group:"Typography.Link",description:"Link 复用 Text 的语义、强调、复制和禁用属性，并额外支持 a 标签属性。"}]});export{h as default};
