import { GitHubMention } from "willa/GitHubMention";
import type { ReactNode } from "react";
import "willa/GitHubMention.css";

import { defineDoc } from "#example/catalog/defineDoc";

const GitHubPreview = (props: { children: ReactNode }) => (
  <div className="docs-github-preview">{props.children}</div>
);

export default defineDoc({
  id: "github-mention",
  name: "GitHubMention",
  category: "widgets",
  packageName: "willa/GitHubMention",
  description: "带头像和个人主页链接的 GitHub 用户提及。",
  imports: [{ name: "GitHubMention", from: "willa/GitHubMention" }],
  css: "willa/GitHubMention.css",
  demo: {
    name: "GitHubPreview",
    component: GitHubPreview,
    children: (
      <GitHubMention
        username="imtaotao"
        name="Tao"
        avatarUrl="https://github.com/imtaotao.png"
      />
    ),
  },
  code: `
    import { GitHubMention } from "willa/GitHubMention";
    import "willa/GitHubMention.css";

    <GitHubMention
      username="imtaotao"
      name="Tao"
      avatarUrl="https://github.com/imtaotao.png"
    />;
  `,
  props: [
    {
      name: "username",
      type: "string",
      required: true,
      description: "GitHub 用户名。",
    },
    {
      name: "name",
      type: "string",
      description: "可选的展示名称。",
    },
    {
      name: "href",
      type: "string",
      description: "自定义用户主页链接，未传时使用 GitHub 主页。",
    },
    {
      name: "avatarUrl",
      type: "string",
      description: "可选的头像图片地址。",
    },
    {
      name: "bio",
      type: "string",
      description: "悬浮卡片中的个人简介，未传时尝试从 GitHub API 获取。",
    },
    {
      name: "followers",
      type: "string | number",
      description: "悬浮卡片中的关注者数量。",
    },
    {
      name: "repositories",
      type: "string | number",
      description: "悬浮卡片中的仓库数量。",
    },
  ],
});
