import{aD as e,aF as o,B as s}from"./index-D5uFLOdF.js";import{P as a}from"./index-DliIU90Q.js";import{d as g}from"./defineDoc-Bhi9w6ym.js";const l={display:"grid",gap:"0.75rem",justifyItems:"center"},p={display:"flex",flexWrap:"wrap",gap:"0.75rem",alignItems:"center"},r=()=>{const[t,n]=o.useState(4);return e.jsxs("div",{style:l,children:[e.jsxs(s,{tone:"info",children:["当前页：",t]}),e.jsx(a,{page:t,pageCount:12,onPageChange:n})]})},c=g({id:"pagination",name:"Pagination",packageName:"willa/Pagination",description:"用于文章列表、评论列表和搜索结果等分页内容的页码导航。",imports:[{name:"Pagination",from:"willa/Pagination"}],css:"willa/Pagination.css",demo:{name:"Pagination",component:a,props:{defaultPage:6,pageCount:20}},code:`
    import { Pagination } from "willa/Pagination";
    import "willa/Pagination.css";

    <Pagination defaultPage={6} pageCount={20} />;
  `,sections:[{title:"受控状态",code:`
        import { useState } from "react";
        import { Badge } from "willa/Badge";
        import { Pagination } from "willa/Pagination";
        import "willa/Badge.css";
        import "willa/Pagination.css";

        const Demo = () => {
          const [page, setPage] = useState(4);

          return (
            <div
              style={{
                display: "grid",
                gap: "0.75rem",
                justifyItems: "center",
              }}
            >
              <Badge tone="info">当前页：{page}</Badge>
              <Pagination page={page} pageCount={12} onPageChange={setPage} />
            </div>
          );
        };
      `,content:e.jsx(r,{})},{title:"分页链接",code:`
        <Pagination
          defaultPage={3}
          pageCount={9}
          getPageHref={(page) => \`#/posts/page-\${page}\`}
        />
      `,content:e.jsx(a,{defaultPage:3,pageCount:9,getPageHref:t=>`#/posts/page-${t}`})},{title:"自定义省略号跳转",code:`
        <Pagination
          defaultPage={7}
          pageCount={30}
          getEllipsisPage={({ direction, startPage, endPage }) =>
            direction === "end" ? endPage : startPage
          }
        />;
      `,content:e.jsx(a,{defaultPage:7,pageCount:30,getEllipsisPage:({direction:t,startPage:n,endPage:i})=>t==="end"?i:n})},{title:"紧凑展示",code:`
        <div style={rowStyle}>
          <Pagination defaultPage={5} pageCount={10} size="sm" showFirstLast={false} />
          <Pagination
            defaultPage={1}
            pageCount={6}
            size="sm"
            siblingCount={0}
            boundaryCount={1}
            showPrevNext={false}
          />
        </div>;
      `,content:e.jsxs("div",{style:p,children:[e.jsx(a,{defaultPage:5,pageCount:10,size:"sm",showFirstLast:!1}),e.jsx(a,{defaultPage:1,pageCount:6,size:"sm",siblingCount:0,boundaryCount:1,showPrevNext:!1})]})},{title:"禁用",code:`
        <Pagination page={2} pageCount={6} disabled />;
      `,content:e.jsx(a,{page:2,pageCount:6,disabled:!0})}],props:[{name:"pageCount",type:"number",required:!0,description:"总页数。"},{name:"page",type:"number",description:"当前页，传入后组件进入受控模式。"},{name:"defaultPage",type:"number",defaultValue:"1",description:"非受控模式下的默认页码。"},{name:"onPageChange",type:"(page: number) => void",description:"页码变化时触发。"},{name:"siblingCount",type:"number",defaultValue:"1",description:"当前页左右各展示多少个邻近页码。"},{name:"boundaryCount",type:"number",defaultValue:"1",description:"首尾各展示多少个固定页码。"},{name:"size",type:'"sm" | "md"',defaultValue:'"md"',description:"分页按钮尺寸。"},{name:"showFirstLast",type:"boolean",defaultValue:"true",description:"是否展示第一页和最后一页按钮，默认展示。"},{name:"showPrevNext",type:"boolean",defaultValue:"true",description:"是否展示上一页和下一页按钮，默认展示。"},{name:"getPageHref",type:"(page: number) => string",description:"返回页码链接地址；适合文章列表、搜索结果等需要真实 URL 的分页。"},{name:"getEllipsisPage",type:"(context: PaginationEllipsisContext) => number",description:"自定义点击省略号时跳转的页码，默认跳到被折叠区间的中间页。"},{name:"previousLabel",type:"ReactNode",defaultValue:'"上一页"',description:"上一页按钮文案。"},{name:"nextLabel",type:"ReactNode",defaultValue:'"下一页"',description:"下一页按钮文案。"},{name:"ariaLabel",type:"string",defaultValue:'"分页导航"',description:"分页导航的无障碍名称。"},{name:"disabled",type:"boolean",defaultValue:"false",description:"禁用整组分页。"},{name:"className",type:"string",description:"可选的外层 className。"}]});export{c as default};
