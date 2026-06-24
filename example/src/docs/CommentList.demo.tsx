import { useState } from "react";
import { Button } from "willa/Button";
import { Comment } from "willa/Comment";
import { CommentList, type CommentListItem } from "willa/CommentList";
import "willa/Button.css";
import "willa/Comment.css";
import "willa/CommentList.css";

import { defineDoc } from "#example/catalog/defineDoc";

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

const listFrameStyle = {
  width: "min(100%, 52rem)",
  margin: "0 auto",
} as const;

const CommentListPreview = () => {
  return (
    <div style={listFrameStyle}>
      <CommentList
        title="讨论"
        description="用于文档批注、文章评论和审核记录。"
        items={comments}
      />
    </div>
  );
};

const LoadingCommentListPreview = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div style={listFrameStyle}>
      <CommentList
        loading={loading}
        title="加载状态"
        description="列表可以展示历史评论加载状态。"
        items={loading ? undefined : comments}
      />
      <div style={{ marginTop: "0.9rem" }}>
        <Button size="sm" onClick={() => setLoading((value) => !value)}>
          {loading ? "显示评论" : "重新加载"}
        </Button>
      </div>
    </div>
  );
};

export default defineDoc({
  id: "comment-list",
  name: "CommentList",
  category: "content",
  packageName: "willa/CommentList",
  description: "用于组织评论、批注和审核意见列表，支持空态和加载态。",
  imports: [{ name: "CommentList", from: "willa/CommentList" }],
  css: "willa/CommentList.css",
  demo: {
    name: "CommentListPreview",
    component: CommentListPreview,
  },
  code: `
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
  `,
  sections: [
    {
      title: "自定义子项",
      code: `
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
      `,
      content: (
        <div style={listFrameStyle}>
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
          </CommentList>
        </div>
      ),
    },
    {
      title: "加载与空态",
      code: `
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
      `,
      content: <LoadingCommentListPreview />,
    },
    {
      title: "空列表",
      code: `
        <CommentList
          title="评论"
          description="还没有人参与讨论。"
          items={[]}
        />;
      `,
      content: (
        <div style={listFrameStyle}>
          <CommentList
            title="评论"
            description="还没有人参与讨论。"
            items={[]}
          />
        </div>
      ),
    },
  ],
  props: [
    {
      name: "items",
      type: "Array<CommentListItem>",
      description: "评论数据列表。",
    },
    {
      name: "children",
      type: "ReactNode",
      description: "自定义评论节点。",
    },
    {
      name: "title",
      type: "ReactNode",
      description: "列表标题。",
    },
    {
      name: "description",
      type: "ReactNode",
      description: "列表说明。",
    },
    {
      name: "empty",
      type: "ReactNode",
      description: "自定义空态。",
    },
    {
      name: "loading",
      type: "boolean",
      defaultValue: "false",
      description: "是否展示加载状态。",
    },
    {
      name: "loadingLabel",
      type: "ReactNode",
      defaultValue: '"正在加载评论"',
      description: "加载状态文案。",
    },
    {
      name: "id",
      type: "string",
      required: true,
      group: "CommentListItem",
      description: "评论唯一标识。",
    },
    {
      name: "className",
      type: "string",
      description: "自定义 className。",
    },
  ],
});
