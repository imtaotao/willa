import { Button } from "willa/Button";
import { Group } from "willa/Group";
import { ProfileCard } from "willa/ProfileCard";
import "willa/Button.css";
import "willa/Group.css";
import "willa/ProfileCard.css";

import { defineDoc } from "#example/catalog/defineDoc";

const avatarUrl = "https://github.com/imtaotao.png";
const coverUrl =
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80";

export default defineDoc({
  id: "profile-card",
  name: "ProfileCard",
  category: "widgets",
  packageName: "willa/ProfileCard",
  description: "用于展示作者、成员、讲师或产品角色信息的人物卡片。",
  imports: [
    { name: "ProfileCard", from: "willa/ProfileCard" },
    { name: "Button", from: "willa/Button" },
    { name: "Group", from: "willa/Group" },
  ],
  css: "willa/ProfileCard.css",
  demo: {
    name: "ProfileCard",
    component: ProfileCard,
    props: {
      name: "Tao",
      avatarSrc: avatarUrl,
      imageSrc: coverUrl,
      role: "Product Engineer",
      bio: "关注 AI 产品、组件系统和内容平台体验。",
      meta: "深圳 · 组件设计",
      links: [
        { label: "GitHub", href: "https://github.com/imtaotao" },
        { label: "Website", href: "https://imtaotao.github.io/willa/" },
      ],
    },
  },
  code: `
    import { ProfileCard } from "willa/ProfileCard";
    import "willa/ProfileCard.css";

    <ProfileCard
      name="Tao"
      avatarSrc="https://github.com/imtaotao.png"
      imageSrc="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80"
      role="Product Engineer"
      bio="关注 AI 产品、组件系统和内容平台体验。"
      meta="深圳 · 组件设计"
      links={[
        { label: "GitHub", href: "https://github.com/imtaotao" },
        { label: "Website", href: "https://imtaotao.github.io/willa/" },
      ]}
    />;
  `,
  sections: [
    {
      title: "带操作",
      code: `
        import { Button } from "willa/Button";
        import { Group } from "willa/Group";
        import { ProfileCard } from "willa/ProfileCard";
        import "willa/Button.css";
        import "willa/Group.css";
        import "willa/ProfileCard.css";

        <ProfileCard
          name="Willa AI"
          avatarName="Willa AI"
          role="AI Assistant"
          bio="帮助团队整理上下文、生成内容和分析反馈。"
          actions={
            <Group gap="sm">
              <Button size="sm">查看资料</Button>
              <Button size="sm" variant="ghost">
                关注
              </Button>
            </Group>
          }
        />;
      `,
      content: (
        <ProfileCard
          name="Willa AI"
          avatarName="Willa AI"
          role="AI Assistant"
          bio="帮助团队整理上下文、生成内容和分析反馈。"
          actions={
            <Group gap="sm">
              <Button size="sm">查看资料</Button>
              <Button size="sm" variant="ghost">
                关注
              </Button>
            </Group>
          }
        />
      ),
    },
  ],
  props: [
    {
      name: "name",
      type: "ReactNode",
      required: true,
      description: "人物名称。",
    },
    {
      name: "avatarSrc",
      type: "string",
      description: "头像图片地址。",
    },
    {
      name: "avatarName",
      type: "string",
      description: "头像文本回退名称，默认使用 name 的文本值。",
    },
    {
      name: "imageSrc",
      type: "string",
      description: "卡片顶部封面图片。",
    },
    {
      name: "role",
      type: "ReactNode",
      description: "职位、身份或角色说明。",
    },
    {
      name: "bio",
      type: "ReactNode",
      description: "简介内容。",
    },
    {
      name: "meta",
      type: "ReactNode",
      description: "地点、标签或补充信息。",
    },
    {
      name: "links",
      type: "Array<ProfileCardLink>",
      description: "外部链接列表。",
    },
    {
      name: "actions",
      type: "ReactNode",
      description: "自定义操作区。",
    },
    {
      name: "href",
      type: "string",
      description: "整张卡片的跳转地址。",
    },
  ],
});
