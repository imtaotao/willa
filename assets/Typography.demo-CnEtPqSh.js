import{a_ as e,aG as a,aB as g,b0 as n}from"./index-B3pVmlUa.js";import{S as T}from"./index-BHZ0-M7W.js";import{d}from"./defineDoc-_c-0B-WB.js";const p={width:"100%",maxWidth:"46rem",marginInline:"auto",display:"grid",gap:"0.85rem"},s={display:"grid",gap:"0.45rem",width:"100%"},c={width:"min(100%, 42rem)",marginInline:"auto",display:"grid",gap:"0.85rem"},x={width:"100%",display:"grid",gap:"0.85rem"},u={display:"flex",alignItems:"center",justifyContent:"space-between",gap:"1rem"},h="这是一段较长的说明文本，用于展示多行省略和展开行为。排版组件经常出现在组件文档、产品说明、活动日志和系统提示中，也会出现在知识库、更新记录、任务详情和搜索结果摘要里。当容器宽度有限时，正文需要先保留稳定的阅读节奏，只展示关键信息，再通过展开操作让用户继续阅读完整内容。",m={display:"flex",flexWrap:"wrap",gap:"0.38rem 0.75rem",color:"var(--willa-text-soft)",fontSize:"0.84rem",lineHeight:1.45},b={display:"grid",gap:"0.3rem",width:"100%",maxWidth:"46rem",marginInline:"auto"},j={display:"grid",gap:"0.45rem",width:"100%",maxWidth:"46rem",marginInline:"auto",padding:"0.9rem 1rem",border:"1px solid var(--willa-line)",borderRadius:"0.55rem",background:"var(--willa-surface-tint)"},P={margin:0,lineHeight:1.45},r={margin:0,lineHeight:1.85},f=[{key:"heading",cells:[{key:"scene",label:"场景",value:"标题层级",width:"11rem",render:e.jsx(a.Text,{strong:!0,children:"标题层级"})},{key:"usage",label:"推荐写法",value:"Typography.Title level={2}",render:e.jsxs(a.Text,{code:!0,children:["Typography.Title level=",2]})},{key:"note",label:"说明",value:"适合章节标题和文档页主标题。",render:e.jsx(a.Paragraph,{style:r,children:"适合章节标题和文档页主标题。"})}]},{key:"body",cells:[{key:"scene",label:"场景",value:"正文说明",render:e.jsx(a.Text,{strong:!0,children:"正文说明"})},{key:"usage",label:"推荐写法",value:"Typography.Paragraph + Typography.Text",render:e.jsx(a.Text,{code:!0,children:"Typography.Paragraph + Typography.Text"})},{key:"note",label:"说明",value:"适合把段落、强调、链接和辅助信息放在一行里。",render:e.jsx(a.Paragraph,{style:r,children:"适合把段落、强调、链接和辅助信息放在一行里。"})}]},{key:"state",cells:[{key:"scene",label:"场景",value:"状态提示",render:e.jsx(a.Text,{strong:!0,children:"状态提示"})},{key:"usage",label:"推荐写法",value:'Typography.Text type="warning"',render:e.jsx(a.Text,{code:!0,children:'Typography.Text type="warning"'})},{key:"note",label:"说明",value:"适合校验结果、风险提示和轻量说明。",render:e.jsx(a.Paragraph,{style:r,children:"适合校验结果、风险提示和轻量说明。"})}]}],v=()=>{const[o,t]=n.useState(!1);return e.jsxs("div",{style:c,children:[e.jsxs("div",{style:m,children:[e.jsx("span",{children:"知识库摘要"}),e.jsx("span",{children:"2026-06-17"}),e.jsx("span",{children:"阅读约 3 分钟"})]}),e.jsx(a.Paragraph,{ellipsis:{rows:2,expandable:"collapsible",expanded:o,tooltip:!0,suffix:"（摘要）",onExpand:(y,i)=>t(i.expanded)},children:h})]})},k=()=>{const[o,t]=n.useState(!0),[y,i]=n.useState("This is a design language for internal applications. It aims to keep interface details consistent across products and reduce unnecessary implementation differences.");return e.jsxs("div",{style:x,children:[e.jsx("div",{style:u,children:e.jsx(T,{checked:o,label:"编辑中",size:"sm",onChange:l=>t(l.currentTarget.checked)})}),e.jsx(a.Paragraph,{copyable:{text:y,tooltips:["复制文案","已复制文案"]},editable:{editing:o,text:y,triggerType:["icon","text"],autoSize:{minRows:2,maxRows:5},maxLength:180,onStart:()=>t(!0),onChange:l=>i(l),onCancel:()=>t(!1),onEnd:()=>t(!1)},children:y})]})},w=()=>e.jsx("div",{style:p,children:e.jsxs(a,{children:[e.jsx(a.Title,{level:2,children:"基础正文"}),e.jsxs(a.Paragraph,{children:["普通段落、",e.jsx(a.Text,{code:!0,children:"inline code"}),"、",e.jsx(a.Link,{href:"https://imtaotao.me/blog/demo",target:"_blank",children:"站外链接"})," ","都应该自然工作。 加粗字体应该正常显示，不要让读者感觉像是在看一套拼装出来的系统文案。"]}),e.jsxs(a.Paragraph,{children:["推荐用更短的写法：",e.jsx(a.Text,{type:"success",children:"这是一段绿色文字"}),"， 正文里直接用预设颜色名就行。",e.jsx(a.Text,{type:"secondary",children:"辅助说明可以更轻一点"}),"，但不要弱到看不清。"]}),e.jsxs(a.Paragraph,{style:s,children:[e.jsx(a.Text,{strong:!0,children:"基础正文"}),"各部分应该保持自然，不要一眼看出是不同系统拼起来的。"]}),e.jsxs(a.Paragraph,{style:s,children:[e.jsx(a.Text,{strong:!0,children:"1.1 颜色示例"}),"推荐用短句承接语义色，避免大段说明把颜色本身的作用冲淡。"]})]})}),R=d({id:"typography",name:"Typography",packageName:"willa/Typography",description:"用于标题、段落、行内文本、链接和常见文本操作的排版组件。",imports:[{name:"Typography",from:"willa/Typography"}],css:"willa/Typography.css",demo:{name:"TypographyPreview",component:w},code:`
    import { Typography } from "willa/Typography";
    import "willa/Typography.css";

    <Typography>
      <Typography.Title level={2}>基础正文</Typography.Title>
      <Typography.Paragraph>
        普通段落、<Typography.Text code>inline code</Typography.Text>、
        <Typography.Link href="https://imtaotao.me/blog/demo" target="_blank">
          站外链接
        </Typography.Link>{" "}
        都应该自然工作。
      </Typography.Paragraph>
      <Typography.Paragraph>
        推荐用更短的写法：<Typography.Text type="success">这是一段绿色文字</Typography.Text>，
        正文里直接用预设颜色名就行。
      </Typography.Paragraph>
    </Typography>;
  `,propGroups:[{title:"Typography",description:"外层排版容器，用于统一正文、标题、段落和链接的阅读节奏，并提供 root/content/actions/action/textarea 语义槽位。"},{title:"Semantic DOM",description:"Typography.classNames 和 Typography.styles 支持 root、content、actions、action 和 textarea，用来按语义槽位定制样式。"},{title:"Typography.Text / Typography.Paragraph",description:"Text 和 Paragraph 共享文本语义、强调、复制、编辑和省略能力；Paragraph 渲染为段落，Text 用于行内内容。"},{title:"Typography.Title",description:"标题子组件复用文本能力，并通过 level 控制 h1 到 h5 的层级。"},{title:"Typography.Link",description:"链接子组件复用文本能力，同时支持 href、target、rel 等链接属性。"},{title:"Typography.copyable",description:"copyable 是 Text、Paragraph、Title 和 Link 的复制配置对象，用于自定义复制文本、图标、提示和回调。"},{title:"Typography.editable",description:"editable 是文本编辑配置对象，用于控制触发方式、编辑态、自动高度、长度限制和编辑回调。"},{title:"Typography.ellipsis",description:"ellipsis 是省略配置对象，用于多行截断、展开收起、后缀、提示和省略状态回调。"}],sections:[{title:"标题层级",code:`
        <Typography>
          <Typography.Title level={1}>一级标题</Typography.Title>
          <Typography.Title level={2}>二级标题</Typography.Title>
          <Typography.Title level={3}>三级标题</Typography.Title>
          <Typography.Title level={4}>四级标题</Typography.Title>
          <Typography.Title level={5}>五级标题</Typography.Title>
        </Typography>;
      `,content:e.jsx("div",{style:p,children:e.jsxs(a,{children:[e.jsx(a.Title,{level:1,children:"一级标题"}),e.jsx(a.Paragraph,{type:"secondary",children:"适合页面主标题或长文档入口，用于建立清晰的信息层级。"}),e.jsx(a.Title,{level:2,children:"二级标题"}),e.jsx(a.Paragraph,{type:"secondary",children:"适合主要章节标题，通常承接一组内容区域。"}),e.jsx(a.Title,{level:3,children:"三级标题"}),e.jsx(a.Title,{level:4,children:"四级标题"}),e.jsx(a.Title,{level:5,children:"五级标题"})]})})},{title:"文本样式",code:`
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
      `,content:e.jsx("div",{style:p,children:e.jsxs(a,{children:[e.jsxs(a.Paragraph,{children:[e.jsx(a.Text,{children:"默认文本"})," ",e.jsx(a.Text,{type:"secondary",children:"辅助文本"})," ",e.jsx(a.Text,{type:"success",children:"成功文本"})," ",e.jsx(a.Text,{type:"warning",children:"警告文本"})," ",e.jsx(a.Text,{type:"danger",children:"危险文本"})]}),e.jsxs(a.Paragraph,{children:[e.jsx(a.Text,{strong:!0,children:"加粗"})," ",e.jsx(a.Text,{italic:!0,children:"斜体"})," ",e.jsx(a.Text,{underline:!0,children:"下划线"})," ",e.jsx(a.Text,{delete:!0,children:"删除线"})," ",e.jsx(a.Text,{mark:!0,children:"标记"})," ",e.jsx(a.Text,{code:!0,children:"code"})," ",e.jsx(a.Text,{keyboard:!0,children:"⌘K"})]}),e.jsx(a.Paragraph,{type:"secondary",children:"这些样式更适合嵌入正文，而不是单独放进展示卡里。"})]})})},{title:"语义颜色",code:`
        <Typography>
          <Typography.Paragraph>
            <Typography.Text>默认文本</Typography.Text>{" "}
            <Typography.Text type="secondary">辅助文本</Typography.Text>{" "}
            <Typography.Text type="success">成功文本</Typography.Text>{" "}
            <Typography.Text type="warning">警告文本</Typography.Text>{" "}
            <Typography.Text type="danger">危险文本</Typography.Text>
          </Typography.Paragraph>
          <Typography.Paragraph>
            发布状态、校验提示和系统反馈都可以直接复用这些语义色。
          </Typography.Paragraph>
        </Typography>;
      `,content:e.jsx("div",{style:p,children:e.jsxs(a,{children:[e.jsx(a.Title,{level:2,children:"语义颜色"}),e.jsx(a.Paragraph,{type:"secondary",children:"这一组颜色更像你博客正文里的状态说明，而不是单纯的色块展示。 它们负责把信息权重、语气和操作风险讲清楚。"}),e.jsxs(a.Paragraph,{style:r,children:[e.jsx(a.Text,{strong:!0,children:"默认文本："}),"正文是主要信息载体， 应该保持稳定、克制和可长时间阅读。"]}),e.jsxs(a.Paragraph,{style:r,children:[e.jsx(a.Text,{strong:!0,children:"辅助文本："}),"适合元信息、说明和次级标签， 用来承接不需要抢视线的内容。"]}),e.jsxs(a.Paragraph,{style:r,children:[e.jsx(a.Text,{type:"success",children:"发布成功"}),"，文档已同步到线上站点并可立即访问。"]}),e.jsxs(a.Paragraph,{style:r,children:[e.jsx(a.Text,{type:"warning",children:"内容待确认"}),"，这类提示需要读者注意， 但通常还不需要中断流程。"]}),e.jsxs(a.Paragraph,{style:r,children:[e.jsx(a.Text,{type:"danger",children:"删除不可恢复"}),"，需要把后果讲清楚， 再让用户继续下一步操作。"]})]})})},{title:"表格中的排版",code:`
        import { Typography } from "willa/Typography";
        import { Table } from "willa/Table";
        import "willa/Typography.css";
        import "willa/Table.css";

        <Table
          caption="Typography 在表格中的用法"
          items={[
            {
              key: "heading",
              cells: [
                {
                  label: "场景",
                  value: "标题层级",
                  render: <Typography.Text strong>标题层级</Typography.Text>,
                },
                {
                  label: "推荐写法",
                  value: "Typography.Title level={2}",
                  render: (
                    <Typography.Text code>
                      Typography.Title level={2}
                    </Typography.Text>
                  ),
                },
              ],
            },
          ]}
        />;
      `,content:e.jsxs("div",{style:p,children:[e.jsxs(a,{children:[e.jsx(a.Title,{level:2,children:"表格中的排版"}),e.jsx(a.Paragraph,{type:"secondary",children:"结构化信息更适合放在表格里展示，Typography 负责把标题、正文和说明文案维持在同一套阅读节奏里。"})]}),e.jsx(g,{caption:"Typography 在表格中的用法",footer:"表格单元格里也可以继续复用 Typography 来保持正文、代码和提示的统一风格。",items:f})]})},{title:"链接与操作",code:`
        import { Typography } from "willa/Typography";
        import "willa/Typography.css";

        <Typography>
          <Typography.Paragraph>
            查看 <Typography.Link href="#typography">排版组件说明</Typography.Link>{" "}
            可以定位到当前文档中的组件说明。
          </Typography.Paragraph>
          <Typography.Text
            code
            copyable={{
              text: "release: typography-ready",
              tooltips: ["复制发布标记", "已复制发布标记"],
            }}
          >
            release: typography-ready
          </Typography.Text>
        </Typography>;
      `,content:e.jsx("div",{style:p,children:e.jsxs(a,{children:[e.jsxs(a.Paragraph,{children:["查看"," ",e.jsx(a.Link,{href:"#typography",children:"排版组件说明"})," ","可以定位到当前文档中的组件说明。"]}),e.jsxs("div",{style:j,children:[e.jsx(a.Text,{code:!0,copyable:{text:"release: typography-ready",tooltips:["复制发布标记","已复制发布标记"]},style:P,children:"release: typography-ready"}),e.jsxs(a.Paragraph,{type:"secondary",children:["复制操作直接复用"," ",e.jsx(a.Text,{code:!0,children:"Typography.Text"})," 的"," ",e.jsx(a.Text,{code:!0,children:"copyable"}),"，内部动作层 统一使用 ",e.jsx(a.Text,{code:!0,children:"IconButton"})," 和"," ",e.jsx(a.Text,{code:!0,children:"Tooltip"}),"。"]})]})]})})},{title:"可编辑",code:`
        import { useState } from "react";
        import { Switch } from "willa/Switch";

        const [editing, setEditing] = useState(true);
        const [value, setValue] = useState("This is a design language ...");

        <Switch checked={editing} label="Editing" size="sm" />
        <Typography.Paragraph
          copyable={{
            text: value,
            tooltips: ["复制文案", "已复制文案"],
          }}
          editable={{
            editing,
            text: value,
            triggerType: ["icon", "text"],
            autoSize: { minRows: 2, maxRows: 5 },
            maxLength: 180,
            onStart: () => setEditing(true),
            onChange: (nextValue) => setValue(nextValue),
            onCancel: () => setEditing(false),
            onEnd: () => setEditing(false),
          }}
        >
          {value}
        </Typography.Paragraph>;
      `,content:e.jsxs("div",{style:b,children:[e.jsx(a.Paragraph,{type:"secondary",children:"点击文本或编辑图标可以进入编辑态；右上角的开关用于演示受控编辑状态。"}),e.jsx(k,{})]})},{title:"子组件",code:`
        <Typography>
          <Typography.Title level={4}>
            <Typography.Text>Typography.Title</Typography.Text>
          </Typography.Title>
          <Typography.Paragraph>
            <Typography.Text code>Typography.Paragraph</Typography.Text> 用于正文段落，
            <Typography.Text code>Typography.Text</Typography.Text> 用于{" "}
            <Typography.Text strong>行内强调</Typography.Text>，
            <Typography.Text code>Typography.Link</Typography.Text> 用于文档内跳转或外部链接。
          </Typography.Paragraph>
        </Typography>;
      `,content:e.jsx("div",{style:p,children:e.jsxs(a,{children:[e.jsx(a.Title,{level:4,children:e.jsx(a.Text,{children:"Typography.Title"})}),e.jsxs(a.Paragraph,{children:[e.jsx(a.Text,{code:!0,children:"Typography.Paragraph"})," ","用于正文段落，",e.jsx(a.Text,{code:!0,children:"Typography.Text"})," 用于"," ",e.jsx(a.Text,{strong:!0,children:"行内强调"}),"，",e.jsx(a.Text,{code:!0,children:"Typography.Link"})," ","用于文档内跳转或外部链接。"]})]})})},{title:"省略与展开",code:`
        <Typography.Paragraph
          ellipsis={{
            rows: 2,
            expandable: "collapsible",
            tooltip: true,
            suffix: "（摘要）",
          }}
        >
          ${h}
        </Typography.Paragraph>;
      `,content:e.jsx(v,{})}],props:[{name:"Typography.children",type:"ReactNode",group:"Typography",description:"排版内容容器，通常包裹 Title、Paragraph、Text 和 Link。"},{name:"Typography.className",type:"string",group:"Typography",description:"可选的外层 className。"},{name:"Typography.classNames",type:'Partial<Record<"root" | "content" | "actions" | "action" | "textarea", string>>',group:"Typography",description:"语义化 className 槽位，用于精确定制根节点、内容区、操作区、操作按钮和编辑文本域。"},{name:"Typography.styles",type:'Partial<Record<"root" | "content" | "actions" | "action" | "textarea", CSSProperties>>',group:"Typography",description:"语义化 style 槽位，用于按区域覆盖样式。"},{name:"Typography.Text.children",type:"ReactNode",group:"Typography.Text / Typography.Paragraph",description:"文本内容。"},{name:"Typography.Text.type",type:'"secondary" | "success" | "warning" | "danger"',group:"Typography.Text / Typography.Paragraph",description:"文本语义色。"},{name:"Typography.Text.strong / italic / underline / delete",type:"boolean",defaultValue:"false",group:"Typography.Text / Typography.Paragraph",description:"常见文本强调样式。"},{name:"Typography.Text.code / mark / keyboard",type:"boolean",defaultValue:"false",group:"Typography.Text / Typography.Paragraph",description:"代码、标记和键盘输入样式；keyboard 内部复用 Kbd 的展示结构。"},{name:"Typography.Text.copyable",type:"boolean | TypographyCopyable",defaultValue:"false",group:"Typography.Text / Typography.Paragraph",description:"展示复制操作；未传 text 时会复制 children 的纯文本。"},{name:"Typography.Text.editable",type:"boolean | TypographyEditable",defaultValue:"false",group:"Typography.Text / Typography.Paragraph",description:"展示编辑操作，支持图标触发、文本触发、受控编辑态和编辑回调。"},{name:"Typography.Text.ellipsis",type:"boolean | TypographyEllipsis",defaultValue:"false",group:"Typography.Text / Typography.Paragraph",description:"文本省略配置，支持多行和展开收起。"},{name:"Typography.Text.actions",type:'{ placement?: "start" | "end" }',defaultValue:'{ placement: "end" }',group:"Typography.Text / Typography.Paragraph",description:"复制、编辑、省略展开等操作相对文本的位置。"},{name:"Typography.Text.disabled",type:"boolean",defaultValue:"false",group:"Typography.Text / Typography.Paragraph",description:"禁用文本样式。"},{name:"Typography.Text.classNames",type:'Partial<Record<"root" | "content" | "actions" | "action" | "textarea", string>>',group:"Typography.Text / Typography.Paragraph",description:"语义化 className 槽位，适用于 Text、Paragraph、Title 和 Link。"},{name:"Typography.Text.styles",type:'Partial<Record<"root" | "content" | "actions" | "action" | "textarea", CSSProperties>>',group:"Typography.Text / Typography.Paragraph",description:"语义化 style 槽位，适用于 Text、Paragraph、Title 和 Link。"},{name:"Typography.Paragraph",type:"TypographyTextProps & HTMLAttributes<HTMLParagraphElement>",group:"Typography.Text / Typography.Paragraph",description:"Paragraph 复用 Text 的语义、强调、复制和省略属性，并渲染为段落。"},{name:"Typography.Title.level",type:"1 | 2 | 3 | 4 | 5",defaultValue:"1",group:"Typography.Title",description:"Typography.Title 的标题层级。"},{name:"Typography.Title",type:"TypographyTextProps & HTMLAttributes<HTMLHeadingElement>",group:"Typography.Title",description:"Title 复用 Text 的语义、强调、复制和省略属性，并根据 level 渲染 h1 到 h5。"},{name:"Typography.Link.href",type:"string",group:"Typography.Link",description:"链接地址。"},{name:"Typography.Link",type:"TypographyTextProps & AnchorHTMLAttributes<HTMLAnchorElement>",group:"Typography.Link",description:"Link 复用 Text 的语义、强调、复制和禁用属性，并额外支持 a 标签属性。"},{name:"copyable.text",type:"string | () => string | Promise<string>",group:"Typography.copyable",description:"复制到剪贴板的文本；未设置时复制 children 的纯文本。"},{name:"copyable.icon",type:"ReactNode | [ReactNode, ReactNode]",group:"Typography.copyable",description:"复制按钮图标；数组形式分别表示复制前和复制后。"},{name:"copyable.tooltips",type:"false | [ReactNode, ReactNode]",group:"Typography.copyable",description:"复制按钮的提示文案；传 false 时不展示提示。"},{name:"copyable.copiedDuration",type:"number",defaultValue:"1200",group:"Typography.copyable",description:"复制成功状态保持时间。"},{name:"copyable.onCopy",type:"(text: string) => void",group:"Typography.copyable",description:"复制成功后的回调。"},{name:"editable.text",type:"string",group:"Typography.editable",description:"进入编辑态时使用的文本；未设置时读取 children 的纯文本。"},{name:"editable.editing",type:"boolean",group:"Typography.editable",description:"受控编辑态。"},{name:"editable.defaultEditing",type:"boolean",defaultValue:"false",group:"Typography.editable",description:"默认是否进入编辑态。"},{name:"editable.triggerType",type:'Array<"icon" | "text">',defaultValue:'["icon"]',group:"Typography.editable",description:"进入编辑态的触发方式。"},{name:"editable.autoSize",type:"boolean | { minRows?: number; maxRows?: number }",group:"Typography.editable",description:"编辑文本域是否随内容自动调整高度。"},{name:"editable.maxLength",type:"number",group:"Typography.editable",description:"编辑内容最大长度。"},{name:"editable.onChange / onCancel / onStart / onEnd",type:"function",group:"Typography.editable",description:"编辑过程回调。"},{name:"ellipsis.rows",type:"number",defaultValue:"1",group:"Typography.ellipsis",description:"最多展示的行数。"},{name:"ellipsis.expandable",type:'boolean | "collapsible"',defaultValue:"false",group:"Typography.ellipsis",description:"是否展示展开操作；collapsible 支持展开后收起。"},{name:"ellipsis.expanded / defaultExpanded",type:"boolean",group:"Typography.ellipsis",description:"受控或非受控展开状态。"},{name:"ellipsis.suffix",type:"ReactNode",group:"Typography.ellipsis",description:"省略内容后缀。"},{name:"ellipsis.symbol",type:"ReactNode | ((expanded: boolean) => ReactNode)",group:"Typography.ellipsis",description:"自定义展开/收起文案。"},{name:"ellipsis.tooltip",type:"boolean | ReactNode",group:"Typography.ellipsis",description:"省略时展示完整内容提示；true 时使用纯文本内容。"},{name:"ellipsis.onEllipsis / onExpand",type:"function",group:"Typography.ellipsis",description:"省略状态变化和展开状态变化回调。"}]});export{R as default};
