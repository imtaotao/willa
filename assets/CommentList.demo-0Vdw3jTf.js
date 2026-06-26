import{b0 as t,h as i,b2 as r}from"./index-DCMaJUkT.js";import{C as c}from"./index-D85XBGpg.js";import{C as e}from"./index-CiNIH6EH.js";/* empty css              *//* empty css              */import{d}from"./defineDoc-DjMM6lLu.js";import"./index-CLDy-21g.js";const n=[{id:"comment-1",author:"Tao Tao",avatarSrc:"https://github.com/imtaotao.png",avatarName:"Tao Tao",meta:"刚刚",children:t.jsx("p",{children:"这组组件可以先覆盖评论、批注和审核记录三个场景。"})},{id:"comment-2",author:"Willa AI",avatarSrc:"https://github.com/openai.png",avatarName:"Willa AI",meta:"1 分钟前",highlighted:!0,quote:{author:"Tao Tao",content:"这组组件可以先覆盖评论、批注和审核记录三个场景。"},children:t.jsx("p",{children:"已整理出评论组件的基础职责，嵌套线程可以后置。"})}],m={width:"min(100%, 52rem)",margin:"0 auto"},p=()=>t.jsx("div",{style:m,children:t.jsx(e,{title:"讨论",description:"用于文档批注、文章评论和审核记录。",items:n})}),l=()=>{const[o,a]=r.useState(!0);return t.jsxs("div",{style:m,children:[t.jsx(e,{loading:o,title:"加载状态",description:"列表可以展示历史评论加载状态。",items:o?void 0:n}),t.jsx("div",{style:{marginTop:"0.9rem"},children:t.jsx(i,{size:"sm",onClick:()=>a(s=>!s),children:o?"显示评论":"重新加载"})})]})},v=d({id:"comment-list",name:"CommentList",category:"content",packageName:"willa/CommentList",description:"用于组织评论、批注和审核意见列表，支持空态和加载态。",imports:[{name:"CommentList",from:"willa/CommentList"}],css:"willa/CommentList.css",demo:{name:"CommentListPreview",component:p},code:`
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
      `,content:t.jsx("div",{style:m,children:t.jsx(e,{title:"人工 Review",children:t.jsx(c,{author:"审核人",avatarName:"审核人",meta:"09:42",actions:t.jsx(i,{size:"sm",variant:"ghost",children:"回复"}),children:t.jsx("p",{children:"建议把示例里的宽度控制放在 demo 容器里，不影响组件本身。"})})})})},{title:"加载与空态",code:`
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
      `,content:t.jsx(l,{})},{title:"空列表",code:`
        <CommentList
          title="评论"
          description="还没有人参与讨论。"
          items={[]}
        />;
      `,content:t.jsx("div",{style:m,children:t.jsx(e,{title:"评论",description:"还没有人参与讨论。",items:[]})})}],props:[{name:"items",type:"Array<CommentListItem>",description:"评论数据列表。"},{name:"children",type:"ReactNode",description:"自定义评论节点。"},{name:"title",type:"ReactNode",description:"列表标题。"},{name:"description",type:"ReactNode",description:"列表说明。"},{name:"empty",type:"ReactNode",description:"自定义空态。"},{name:"loading",type:"boolean",defaultValue:"false",description:"是否展示加载状态。"},{name:"loadingLabel",type:"ReactNode",defaultValue:'"正在加载评论"',description:"加载状态文案。"},{name:"CommentListItem.id",type:"string",required:!0,group:"CommentListItem",description:"评论唯一标识。"},{name:"CommentListItem.author",type:"ReactNode",required:!0,group:"CommentListItem",description:"评论作者。"},{name:"CommentListItem.children",type:"ReactNode",required:!0,group:"CommentListItem",description:"评论正文内容。"},{name:"CommentListItem.avatarSrc",type:"string",group:"CommentListItem",description:"评论作者头像地址。"},{name:"CommentListItem.avatarName",type:"string",group:"CommentListItem",description:"评论作者头像备用名称。"},{name:"CommentListItem.avatar",type:"ReactNode",group:"CommentListItem",description:"自定义评论作者头像节点。"},{name:"CommentListItem.meta",type:"ReactNode",group:"CommentListItem",description:"评论元信息。"},{name:"CommentListItem.quote",type:"CommentQuote",group:"CommentListItem",description:"评论引用内容。"},{name:"CommentListItem.actions",type:"ReactNode",group:"CommentListItem",description:"评论操作区。"},{name:"CommentListItem.footer",type:"ReactNode",group:"CommentListItem",description:"评论底部内容。"},{name:"CommentListItem.size",type:'"sm" | "md"',group:"CommentListItem",defaultValue:'"md"',description:"评论尺寸。"},{name:"CommentListItem.variant",type:'"card" | "feed"',group:"CommentListItem",defaultValue:'"card"',description:"评论展示形态。"},{name:"CommentListItem.highlighted",type:"boolean",group:"CommentListItem",defaultValue:"false",description:"是否高亮评论。"},{name:"className",type:"string",description:"自定义 className。"}]});export{v as default};
