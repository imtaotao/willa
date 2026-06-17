import{aL as e}from"./index-DNQF9iNw.js";import{T as p}from"./index-ZW7WPTOM.js";import{d as r}from"./defineDoc-zHnHUJEc.js";function a(){return e.jsxs(p,{children:[e.jsx(p.Title,{level:2,children:"内容发布规范"}),e.jsx(p.Paragraph,{children:"Typography 用于承载文章、说明、日志和产品提示里的文本层级。它提供标题、段落、行内文本和链接， 并能处理常见的强调、语义颜色、复制和省略。"}),e.jsxs(p.Paragraph,{children:["你可以使用 ",e.jsx(p.Text,{strong:!0,children:"加粗文本"}),"、",e.jsx(p.Text,{type:"secondary",children:"辅助文本"}),"、",e.jsx(p.Text,{mark:!0,children:"标记文本"})," 和"," ",e.jsx(p.Text,{code:!0,children:"inline code"})," 组合说明。"]})]})}const l=r({id:"typography",name:"Typography",packageName:"willa/Typography",description:"用于标题、段落、行内文本、链接和常见文本操作的排版组件。",imports:[{name:"Typography",from:"willa/Typography"}],css:"willa/Typography.css",demo:{name:"TypographyPreview",component:a},code:`
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
      `,content:e.jsxs(p,{children:[e.jsxs(p.Paragraph,{children:["查看"," ",e.jsx(p.Link,{href:"#typography",children:"排版组件说明"})," ","可以定位到当前文档中的组件说明。"]}),e.jsx(p.Text,{copyable:{text:"release: typography-ready"},children:"release: typography-ready"})]})},{title:"省略与展开",code:`
        <Typography.Paragraph
          ellipsis={{
            rows: 2,
            expandable: true,
            suffix: " 继续阅读",
          }}
        >
          这是一段较长的说明文本，用于展示多行省略和展开行为。排版组件经常出现在组件文档、
          产品说明、活动日志和系统提示中，因此需要在有限空间里保留稳定的阅读节奏。
        </Typography.Paragraph>;
      `,content:e.jsx(p.Paragraph,{ellipsis:{rows:2,expandable:!0,suffix:" 继续阅读"},children:"这是一段较长的说明文本，用于展示多行省略和展开行为。排版组件经常出现在组件文档、 产品说明、活动日志和系统提示中，因此需要在有限空间里保留稳定的阅读节奏。"})}],props:[{name:"level",type:"1 | 2 | 3 | 4 | 5",defaultValue:"1",description:"Typography.Title 的标题层级。"},{name:"type",type:'"secondary" | "success" | "warning" | "danger"',description:"文本语义色。"},{name:"strong / italic / underline / delete",type:"boolean",defaultValue:"false",description:"常见文本强调样式。"},{name:"code / mark / keyboard",type:"boolean",defaultValue:"false",description:"代码、标记和键盘输入样式。"},{name:"copyable",type:"boolean | { text?: string; copiedDuration?: number; onCopy?: (text: string) => void }",defaultValue:"false",description:"展示复制操作；未传 text 时会复制 children 的纯文本。"},{name:"ellipsis",type:"boolean | { rows?: number; expandable?: boolean; expanded?: boolean; defaultExpanded?: boolean; suffix?: ReactNode; symbol?: ReactNode | ((expanded: boolean) => ReactNode); onExpand?: (event, info) => void }",defaultValue:"false",description:"文本省略配置，支持多行和展开收起。"},{name:"disabled",type:"boolean",defaultValue:"false",description:"禁用文本或链接。"},{name:"children",type:"ReactNode",description:"排版内容。"}]});export{l as default};
