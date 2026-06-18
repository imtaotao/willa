import{aO as t,am as x,F as j,az as y,g as c,aQ as w}from"./index-BBFaZ_9o.js";import{C as d}from"./index-CSbAYsp1.js";/* empty css              */import{d as N}from"./defineDoc-CKMuNfEy.js";import"./index-RovElCmd.js";function a(i){const{items:e,children:o,title:m,description:s,empty:h,loading:l=!1,loadingLabel:u="正在加载评论",className:g,...C}=i,L=!!(e!=null&&e.length),v=!!o;return t.jsxs("section",{...C,className:y("willa-comment-list",g),children:[m||s?t.jsxs("header",{className:"willa-comment-list-header",children:[m?t.jsx("h3",{className:"willa-comment-list-title",children:m}):null,s?t.jsx("p",{className:"willa-comment-list-description",children:s}):null]}):null,l?t.jsx("div",{className:"willa-comment-list-loading",children:t.jsx(x,{size:"sm",label:u,labelPosition:"inline"})}):null,v||L?t.jsxs("div",{className:"willa-comment-list-items",children:[o,e==null?void 0:e.map(r=>t.jsx(d,{...r},r.id))]}):l?null:h??t.jsx(j,{size:"sm",variant:"plain",title:"暂无评论",description:"成为第一个参与讨论的人。"})]})}const p=[{id:"comment-1",author:"Tao Tao",avatarSrc:"https://github.com/imtaotao.png",avatarName:"Tao Tao",meta:"刚刚",children:t.jsx("p",{children:"这组组件可以先覆盖评论、批注和审核记录三个场景。"})},{id:"comment-2",author:"Willa AI",avatarSrc:"https://github.com/openai.png",avatarName:"Willa AI",meta:"1 分钟前",highlighted:!0,quote:{author:"Tao Tao",content:"这组组件可以先覆盖评论、批注和审核记录三个场景。"},children:t.jsx("p",{children:"已整理出评论组件的基础职责，嵌套线程可以后置。"})}],n={width:"min(100%, 52rem)",margin:"0 auto"},T=()=>t.jsx("div",{style:n,children:t.jsx(a,{title:"讨论",description:"用于文档批注、文章评论和审核记录。",items:p})}),f=()=>{const[i,e]=w.useState(!0);return t.jsxs("div",{style:n,children:[t.jsx(a,{loading:i,title:"加载状态",description:"列表可以展示历史评论加载状态。",items:i?void 0:p}),t.jsx("div",{style:{marginTop:"0.9rem"},children:t.jsx(c,{size:"sm",onClick:()=>e(o=>!o),children:i?"显示评论":"重新加载"})})]})},z=N({id:"comment-list",name:"CommentList",category:"content",packageName:"willa/CommentList",description:"用于组织评论、批注和审核意见列表，支持空态和加载态。",imports:[{name:"CommentList",from:"willa/CommentList"}],css:"willa/CommentList.css",demo:{name:"CommentListPreview",component:T},code:`
    import { CommentList, type CommentListItem } from "willa/CommentList";
    import "willa/CommentList.css";

    const comments: Array<CommentListItem> = [
      {
        id: "comment-1",
        author: "Tao Tao",
        avatarSrc: "https://github.com/imtaotao.png",
        avatarName: "Tao Tao",
        meta: "刚刚",
        children: <p>这组组件可以先覆盖评论、批注和审核记录三个场景。</p>,
      },
      {
        id: "comment-2",
        author: "Willa AI",
        avatarSrc: "https://github.com/openai.png",
        avatarName: "Willa AI",
        meta: "1 分钟前",
        highlighted: true,
        quote: {
          author: "Tao Tao",
          content: "这组组件可以先覆盖评论、批注和审核记录三个场景。",
        },
        children: <p>已整理出评论组件的基础职责，嵌套线程可以后置。</p>,
      },
    ];

    <CommentList
      title="讨论"
      description="用于文档批注、文章评论和审核记录。"
      items={comments}
    />;
  `,sections:[{title:"自定义子项",code:`
        <CommentList title="人工 Review">
          <Comment
            author="审核人"
            avatarName="审核人"
            meta="09:42"
            actions={
              <Button size="sm" variant="ghost">
                回复
              </Button>
            }
          >
            <p>建议把示例里的宽度控制放在 demo 容器里，不影响组件本身。</p>
          </Comment>
        </CommentList>;
      `,content:t.jsx("div",{style:n,children:t.jsx(a,{title:"人工 Review",children:t.jsx(d,{author:"审核人",avatarName:"审核人",meta:"09:42",actions:t.jsx(c,{size:"sm",variant:"ghost",children:"回复"}),children:t.jsx("p",{children:"建议把示例里的宽度控制放在 demo 容器里，不影响组件本身。"})})})})},{title:"加载与空态",code:`
        import { useState } from "react";
        import { Button } from "willa/Button";
        import { CommentList, type CommentListItem } from "willa/CommentList";
        import "willa/Button.css";
        import "willa/CommentList.css";

        const comments: Array<CommentListItem> = [
          {
            id: "comment-1",
            author: "Tao Tao",
            avatarSrc: "https://github.com/imtaotao.png",
            avatarName: "Tao Tao",
            meta: "刚刚",
            children: <p>这组组件可以先覆盖评论、批注和审核记录三个场景。</p>,
          },
        ];

        const Demo = () => {
          const [loading, setLoading] = useState(true);

          return (
            <>
              <CommentList
                loading={loading}
                title="加载状态"
                description="列表可以展示历史评论加载状态。"
                items={loading ? undefined : comments}
              />
              <Button size="sm" onClick={() => setLoading((value) => !value)}>
                {loading ? "显示评论" : "重新加载"}
              </Button>
            </>
          );
        };
      `,content:t.jsx(f,{})},{title:"空列表",code:`
        <CommentList
          title="评论"
          description="还没有人参与讨论。"
          items={[]}
        />;
      `,content:t.jsx("div",{style:n,children:t.jsx(a,{title:"评论",description:"还没有人参与讨论。",items:[]})})}],props:[{name:"items",type:"Array<CommentListItem>",description:"评论数据列表。"},{name:"children",type:"ReactNode",description:"自定义评论节点。"},{name:"title",type:"ReactNode",description:"列表标题。"},{name:"description",type:"ReactNode",description:"列表说明。"},{name:"empty",type:"ReactNode",description:"自定义空态。"},{name:"loading",type:"boolean",defaultValue:"false",description:"是否展示加载状态。"},{name:"loadingLabel",type:"ReactNode",defaultValue:'"正在加载评论"',description:"加载状态文案。"},{name:"id",type:"string",required:!0,group:"CommentListItem",description:"评论唯一标识。"}]});export{z as default};
