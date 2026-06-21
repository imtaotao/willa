import{aZ as t,h as m,a$ as r}from"./index-D-LV62RM.js";import{C as c}from"./index-BnDEGO6y.js";import{C as e}from"./index-BczB8cee.js";/* empty css              *//* empty css              */import{d as l}from"./defineDoc-CMyXJ6JB.js";import"./index-DYwJ0_Lj.js";const a=[{id:"comment-1",author:"Tao Tao",avatarSrc:"https://github.com/imtaotao.png",avatarName:"Tao Tao",meta:"刚刚",children:t.jsx("p",{children:"这组组件可以先覆盖评论、批注和审核记录三个场景。"})},{id:"comment-2",author:"Willa AI",avatarSrc:"https://github.com/openai.png",avatarName:"Willa AI",meta:"1 分钟前",highlighted:!0,quote:{author:"Tao Tao",content:"这组组件可以先覆盖评论、批注和审核记录三个场景。"},children:t.jsx("p",{children:"已整理出评论组件的基础职责，嵌套线程可以后置。"})}],o={width:"min(100%, 52rem)",margin:"0 auto"},d=()=>t.jsx("div",{style:o,children:t.jsx(e,{title:"讨论",description:"用于文档批注、文章评论和审核记录。",items:a})}),p=()=>{const[i,n]=r.useState(!0);return t.jsxs("div",{style:o,children:[t.jsx(e,{loading:i,title:"加载状态",description:"列表可以展示历史评论加载状态。",items:i?void 0:a}),t.jsx("div",{style:{marginTop:"0.9rem"},children:t.jsx(m,{size:"sm",onClick:()=>n(s=>!s),children:i?"显示评论":"重新加载"})})]})},x=l({id:"comment-list",name:"CommentList",category:"content",packageName:"willa/CommentList",description:"用于组织评论、批注和审核意见列表，支持空态和加载态。",imports:[{name:"CommentList",from:"willa/CommentList"}],css:"willa/CommentList.css",demo:{name:"CommentListPreview",component:d},code:`
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
      `,content:t.jsx("div",{style:o,children:t.jsx(e,{title:"人工 Review",children:t.jsx(c,{author:"审核人",avatarName:"审核人",meta:"09:42",actions:t.jsx(m,{size:"sm",variant:"ghost",children:"回复"}),children:t.jsx("p",{children:"建议把示例里的宽度控制放在 demo 容器里，不影响组件本身。"})})})})},{title:"加载与空态",code:`
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
      `,content:t.jsx(p,{})},{title:"空列表",code:`
        <CommentList
          title="评论"
          description="还没有人参与讨论。"
          items={[]}
        />;
      `,content:t.jsx("div",{style:o,children:t.jsx(e,{title:"评论",description:"还没有人参与讨论。",items:[]})})}],props:[{name:"items",type:"Array<CommentListItem>",description:"评论数据列表。"},{name:"children",type:"ReactNode",description:"自定义评论节点。"},{name:"title",type:"ReactNode",description:"列表标题。"},{name:"description",type:"ReactNode",description:"列表说明。"},{name:"empty",type:"ReactNode",description:"自定义空态。"},{name:"loading",type:"boolean",defaultValue:"false",description:"是否展示加载状态。"},{name:"loadingLabel",type:"ReactNode",defaultValue:'"正在加载评论"',description:"加载状态文案。"},{name:"id",type:"string",required:!0,group:"CommentListItem",description:"评论唯一标识。"}]});export{x as default};
