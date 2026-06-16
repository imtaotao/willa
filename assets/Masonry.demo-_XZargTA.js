import{aB as t,ap as M,_ as n}from"./index-D5IYuN_l.js";import{d as P}from"./defineDoc-DEnQ702g.js";function m(e){const{as:i="div",columns:o,columnWidth:h,gap:l="md",width:c,className:p,children:d,style:y,...g}=e,u={columnCount:o,columnWidth:h,columnGap:a(l),"--willa-masonry-item-gap":a(l),width:c,...y};return t.jsx(i,{...g,style:u,className:M("willa-masonry",p),children:d})}const r={none:"0",xs:"0.35rem",sm:"0.55rem",md:"0.75rem",lg:"1rem",xl:"1.25rem"},w=e=>e in r,a=e=>w(e)?r[e]:e,s=[{title:"产品反馈",height:"7rem"},{title:"发布记录",height:"10rem"},{title:"设计笔记",height:"8rem"},{title:"用户访谈",height:"12rem"},{title:"数据摘要",height:"7.5rem"},{title:"文档片段",height:"9rem"}],H=P({id:"masonry",name:"Masonry",category:"layout",packageName:"willa/Masonry",description:"用于高度不一致的卡片流、图片流和内容集合的瀑布流布局。",imports:[{name:"Masonry",from:"willa/Masonry"},{name:"Panel",from:"willa/Panel"}],css:"willa/Masonry.css",demo:{name:"Masonry",component:m,props:{columns:3,gap:"md",width:"min(100%, 42rem)"},children:s.slice(0,3).map(e=>({name:"Panel",component:n,props:{title:e.title,style:{minHeight:e.height}},children:"内容高度可以不同。"}))},code:`
    import { Masonry } from "willa/Masonry";
    import { Panel } from "willa/Panel";
    import "willa/Masonry.css";
    import "willa/Panel.css";

    <Masonry columns={3} gap="md" width="min(100%, 42rem)">
      <Panel title="产品反馈" style={{ minHeight: "7rem" }}>
        内容高度可以不同。
      </Panel>
      <Panel title="发布记录" style={{ minHeight: "10rem" }}>
        内容高度可以不同。
      </Panel>
      <Panel title="设计笔记" style={{ minHeight: "8rem" }}>
        内容高度可以不同。
      </Panel>
    </Masonry>;
  `,sections:[{title:"内容卡片流",code:`
        <Masonry columns={3} gap="lg" width="min(100%, 52rem)">
          {[
            { title: "产品反馈", height: "7rem" },
            { title: "发布记录", height: "10rem" },
            { title: "设计笔记", height: "8rem" },
            { title: "用户访谈", height: "12rem" },
            { title: "数据摘要", height: "7.5rem" },
            { title: "文档片段", height: "9rem" },
          ].map((item) => (
            <Panel key={item.title} title={item.title} style={{ minHeight: item.height }}>
              内容高度可以不同，布局会按列自然填充。
            </Panel>
          ))}
        </Masonry>;
      `,content:t.jsx(m,{columns:3,gap:"lg",width:"min(100%, 52rem)",children:s.map(e=>t.jsx(n,{title:e.title,style:{minHeight:e.height},children:"内容高度可以不同，布局会按列自然填充。"},e.title))})},{title:"自适应列宽",code:`
        <Masonry columnWidth="13rem" gap="md" width="min(100%, 52rem)">
          {[
            "知识库",
            "任务模板",
            "生成结果",
            "素材库",
            "数据洞察",
          ].map((title, index) => (
            <Panel
              key={title}
              title={title}
              style={{ minHeight: \`\${7 + index * 1.2}rem\` }}
            >
              根据可用宽度自动决定列数。
            </Panel>
          ))}
        </Masonry>;
      `,content:t.jsx(m,{columnWidth:"13rem",gap:"md",width:"min(100%, 52rem)",children:["知识库","任务模板","生成结果","素材库","数据洞察"].map((e,i)=>t.jsx(n,{title:e,style:{minHeight:`${7+i*1.2}rem`},children:"根据可用宽度自动决定列数。"},e))})}],props:[{name:"children",type:"ReactNode",description:"瀑布流内容。"},{name:"columns",type:"number",description:"固定列数。"},{name:"columnWidth",type:"string",description:"期望列宽，浏览器会根据容器宽度自动计算列数。"},{name:"gap",type:'"none" | "xs" | "sm" | "md" | "lg" | "xl" | string',defaultValue:'"md"',description:"列间距和项间距。"},{name:"width",type:"string",description:"外层宽度。"},{name:"as",type:"ElementType",defaultValue:'"div"',description:"自定义渲染标签或组件。"}]});export{H as default};
