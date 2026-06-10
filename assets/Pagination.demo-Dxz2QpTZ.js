import{aj as v,ah as a,s as z,i as B,j as R,t as D,a9 as N,B as $}from"./index-C2E4XHzt.js";import{d as F}from"./defineDoc-5r0NM0Fx.js";function c(e){const{page:t,defaultPage:n=1,pageCount:i,onPageChange:l,siblingCount:o=1,boundaryCount:h=1,size:f="md",showFirstLast:j=!0,showPrevNext:w=!0,getPageHref:u,previousLabel:b="上一页",nextLabel:C="下一页",ariaLabel:M="分页导航",disabled:d=!1,className:L,getEllipsisPage:E}=e,r=Math.max(0,Math.floor(i)),[S,I]=v.useState(()=>p(n,r)),s=p(t??S,r),k=t!==void 0;if(r<=0)return null;const P=g=>{const x=p(g,r);x===s||d||(k||I(x),l==null||l(x))},H=U({page:s,pageCount:r,siblingCount:o,boundaryCount:h});return a.jsx("nav",{className:N("willa-pagination",`willa-pagination--${f}`,d&&"willa-pagination--disabled",L),"aria-label":M,children:a.jsxs("ol",{className:"willa-pagination-list",children:[j?a.jsx("li",{children:a.jsx(m,{page:1,currentPage:s,disabled:d||s===1,getPageHref:u,label:"第一页",onPageChange:P,children:a.jsx(z,{})})}):null,w?a.jsx("li",{children:a.jsxs(m,{page:s-1,currentPage:s,disabled:d||s===1,getPageHref:u,label:typeof b=="string"?b:"上一页",onPageChange:P,children:[a.jsx(B,{}),a.jsx("span",{className:"willa-pagination-control-label",children:b})]})}):null,H.map(g=>a.jsx("li",{children:typeof g=="number"?a.jsx(m,{page:g,currentPage:s,disabled:d,getPageHref:u,label:`第 ${g} 页`,onPageChange:P,children:g}):a.jsx(A,{item:g,currentPage:s,pageCount:r,disabled:d,getPageHref:u,getEllipsisPage:E,onPageChange:P})},typeof g=="number"?g:g.key)),w?a.jsx("li",{children:a.jsxs(m,{page:s+1,currentPage:s,disabled:d||s===r,getPageHref:u,label:typeof C=="string"?C:"下一页",onPageChange:P,children:[a.jsx("span",{className:"willa-pagination-control-label",children:C}),a.jsx(R,{})]})}):null,j?a.jsx("li",{children:a.jsx(m,{page:r,currentPage:s,disabled:d||s===r,getPageHref:u,label:"最后一页",onPageChange:P,children:a.jsx(D,{})})}):null]})})}const A=e=>{var i;const t={direction:e.item.direction,startPage:e.item.startPage,endPage:e.item.endPage,currentPage:e.currentPage,pageCount:e.pageCount},n=p(((i=e.getEllipsisPage)==null?void 0:i.call(e,t))??Math.round((e.item.startPage+e.item.endPage)/2),e.pageCount);return e.item.startPage>e.item.endPage?a.jsx("span",{className:"willa-pagination-ellipsis","aria-hidden":"true",children:"..."}):a.jsx(m,{page:n,currentPage:e.currentPage,disabled:e.disabled,getPageHref:e.getPageHref,label:`跳转到第 ${n} 页`,onPageChange:e.onPageChange,className:"willa-pagination-ellipsis",children:a.jsx("span",{"aria-hidden":"true",children:"..."})})},m=e=>{const t=e.page===e.currentPage,n=N("willa-pagination-control",e.className,t&&"willa-pagination-control--current"),i=l=>{if(e.disabled||t){l.preventDefault();return}e.onPageChange(e.page)};return e.getPageHref&&!e.disabled&&!t?a.jsx("a",{className:n,href:e.getPageHref(e.page),"aria-label":e.label,onClick:i,children:e.children}):a.jsx("button",{className:n,type:"button","aria-current":t?"page":void 0,"aria-label":e.label,disabled:e.disabled,onClick:i,children:e.children})},U=e=>{const t=Math.max(0,Math.floor(e.siblingCount)),n=Math.max(0,Math.floor(e.boundaryCount)),i=Math.max(e.page-t,n+1),l=Math.min(e.page+t,e.pageCount-n),o=[],h=y(1,Math.min(n,e.pageCount)),f=y(Math.max(e.pageCount-n+1,n+1),e.pageCount);return o.push(...h),i>n+2?o.push({type:"ellipsis",key:"ellipsis-start",direction:"start",startPage:n+1,endPage:i-1}):n+1<i&&o.push(n+1),o.push(...y(i,l)),l<e.pageCount-n-1?o.push({type:"ellipsis",key:"ellipsis-end",direction:"end",startPage:l+1,endPage:e.pageCount-n}):l+1<e.pageCount-n+1&&o.push(l+1),o.push(...f),_(o)},_=e=>{const t=new Set;return e.filter(n=>typeof n!="number"?!0:t.has(n)?!1:(t.add(n),!0))},y=(e,t)=>t<e?[]:Array.from({length:t-e+1},(n,i)=>e+i),p=(e,t)=>t<=0?1:Math.min(Math.max(1,Math.floor(e)),t),q={display:"grid",gap:"0.75rem",justifyItems:"center"},W={display:"flex",flexWrap:"wrap",gap:"0.75rem",alignItems:"center"},G=()=>{const[e,t]=v.useState(4);return a.jsxs("div",{style:q,children:[a.jsxs($,{tone:"info",children:["当前页：",e]}),a.jsx(c,{page:e,pageCount:12,onPageChange:t})]})},O=F({id:"pagination",name:"Pagination",packageName:"willa/Pagination",description:"用于文章列表、评论列表和搜索结果等分页内容的页码导航。",imports:[{name:"Pagination",from:"willa/Pagination"}],css:"willa/Pagination.css",demo:{name:"Pagination",component:c,props:{defaultPage:6,pageCount:20}},code:`
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
      `,content:a.jsx(G,{})},{title:"分页链接",code:`
        <Pagination
          defaultPage={3}
          pageCount={9}
          getPageHref={(page) => \`#/posts/page-\${page}\`}
        />
      `,content:a.jsx(c,{defaultPage:3,pageCount:9,getPageHref:e=>`#/posts/page-${e}`})},{title:"自定义省略号跳转",code:`
        <Pagination
          defaultPage={7}
          pageCount={30}
          getEllipsisPage={({ direction, startPage, endPage }) =>
            direction === "end" ? endPage : startPage
          }
        />;
      `,content:a.jsx(c,{defaultPage:7,pageCount:30,getEllipsisPage:({direction:e,startPage:t,endPage:n})=>e==="end"?n:t})},{title:"紧凑展示",code:`
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
      `,content:a.jsxs("div",{style:W,children:[a.jsx(c,{defaultPage:5,pageCount:10,size:"sm",showFirstLast:!1}),a.jsx(c,{defaultPage:1,pageCount:6,size:"sm",siblingCount:0,boundaryCount:1,showPrevNext:!1})]})},{title:"禁用",code:`
        <Pagination page={2} pageCount={6} disabled />;
      `,content:a.jsx(c,{page:2,pageCount:6,disabled:!0})}],props:[{name:"pageCount",type:"number",required:!0,description:"总页数。"},{name:"page",type:"number",description:"当前页，传入后组件进入受控模式。"},{name:"defaultPage",type:"number",description:"非受控模式下的默认页码。"},{name:"onPageChange",type:"(page: number) => void",description:"页码变化时触发。"},{name:"siblingCount",type:"number",description:"当前页左右各展示多少个邻近页码。"},{name:"boundaryCount",type:"number",description:"首尾各展示多少个固定页码。"},{name:"size",type:'"sm" | "md"',description:"分页按钮尺寸。"},{name:"showFirstLast",type:"boolean",description:"是否展示第一页和最后一页按钮，默认展示。"},{name:"showPrevNext",type:"boolean",description:"是否展示上一页和下一页按钮，默认展示。"},{name:"getPageHref",type:"(page: number) => string",description:"返回页码链接地址；适合文章列表、搜索结果等需要真实 URL 的分页。"},{name:"getEllipsisPage",type:"(context: PaginationEllipsisContext) => number",description:"自定义点击省略号时跳转的页码，默认跳到被折叠区间的中间页。"},{name:"previousLabel",type:"ReactNode",description:"上一页按钮文案。"},{name:"nextLabel",type:"ReactNode",description:"下一页按钮文案。"},{name:"ariaLabel",type:"string",description:"分页导航的无障碍名称。"},{name:"disabled",type:"boolean",description:"禁用整组分页。"},{name:"className",type:"string",description:"可选的外层 className。"}]});export{O as default};
