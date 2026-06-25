import{a$ as a,aM as u,Y as x,h as g}from"./index-D5aNn3Bg.js";import{A as j}from"./index-F0rdVhnS.js";/* empty css              *//* empty css              */import{d as v}from"./defineDoc-BtQ_Wzfn.js";function o(e){const{name:l,avatarSrc:b,avatarName:N,imageSrc:i,role:s,bio:c,meta:m,links:t,actions:n,href:p,className:d,...f}=e,h=a.jsxs(a.Fragment,{children:[i?a.jsx("img",{className:"willa-profile-card-image",src:i,alt:""}):null,a.jsxs("div",{className:"willa-profile-card-main",children:[a.jsx(j,{className:"willa-profile-card-avatar",src:b,name:N??w(l),alt:w(l),size:"lg"}),a.jsxs("div",{className:"willa-profile-card-copy",children:[a.jsx("h3",{className:"willa-profile-card-name",children:l}),s?a.jsx("p",{className:"willa-profile-card-role",children:s}):null,c?a.jsx("p",{className:"willa-profile-card-bio",children:c}):null,m?a.jsx("p",{className:"willa-profile-card-meta",children:m}):null]}),t!=null&&t.length?a.jsx("div",{className:"willa-profile-card-links",children:t.map((r,P)=>a.jsx("a",{href:r.href,target:r.target,rel:r.rel,children:r.label},`${r.href}-${P}`))}):null,n?a.jsx("div",{className:"willa-profile-card-actions",children:n}):null]})]});return p?a.jsx("a",{...f,className:u("willa-profile-card",i&&"willa-profile-card--with-image","willa-profile-card--link",d),href:p,children:h}):a.jsx("article",{...f,className:u("willa-profile-card",i&&"willa-profile-card--with-image",d),children:h})}const w=e=>typeof e=="string"||typeof e=="number"?String(e):"Profile";o.displayName="ProfileCard";const y="https://github.com/imtaotao.png",C="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",R=v({id:"profile-card",name:"ProfileCard",category:"widgets",packageName:"willa/ProfileCard",description:"用于展示作者、成员、讲师或产品角色信息的人物卡片。",imports:[{name:"ProfileCard",from:"willa/ProfileCard"},{name:"Button",from:"willa/Button"},{name:"Group",from:"willa/Group"}],css:"willa/ProfileCard.css",demo:{name:"ProfileCard",component:o,props:{name:"Tao",avatarSrc:y,imageSrc:C,role:"Product Engineer",bio:"关注 AI 产品、组件系统和内容平台体验。",meta:"深圳 · 组件设计",links:[{label:"GitHub",href:"https://github.com/imtaotao"},{label:"Website",href:"https://imtaotao.github.io/willa/"}]}},code:`
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
  `,sections:[{title:"带操作",code:`
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
      `,content:a.jsx(o,{name:"Willa AI",avatarName:"Willa AI",role:"AI Assistant",bio:"帮助团队整理上下文、生成内容和分析反馈。",actions:a.jsxs(x,{gap:"sm",children:[a.jsx(g,{size:"sm",children:"查看资料"}),a.jsx(g,{size:"sm",variant:"ghost",children:"关注"})]})})}],props:[{name:"name",type:"ReactNode",required:!0,description:"人物名称。"},{name:"avatarSrc",type:"string",description:"头像图片地址。"},{name:"avatarName",type:"string",description:"头像文本回退名称，默认使用 name 的文本值。"},{name:"imageSrc",type:"string",description:"卡片顶部封面图片。"},{name:"role",type:"ReactNode",description:"职位、身份或角色说明。"},{name:"bio",type:"ReactNode",description:"简介内容。"},{name:"meta",type:"ReactNode",description:"地点、标签或补充信息。"},{name:"links",type:"Array<ProfileCardLink>",description:"外部链接列表。"},{name:"actions",type:"ReactNode",description:"自定义操作区。"},{name:"href",type:"string",description:"整张卡片的跳转地址。"},{name:"className",type:"string",description:"自定义 className。"}]});export{R as default};
