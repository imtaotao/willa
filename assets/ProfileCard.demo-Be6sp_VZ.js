import{l as e,p as t,u as n}from"./aidly.esm-bundler-DaTrP4tr.js";import{t as r}from"./Button-O1aY2iqB.js";import{t as i}from"./Group-C-JhzSsC.js";import"./style-B00R6KjV.js";import{t as a}from"./defineDoc-Cid5xIoZ.js";import"./style-D3eq1OTT.js";import{t as o}from"./Avatar-3sKWhOgv.js";var s=t(n()),c=e();function l(e){let{name:t,avatarSrc:n,avatarName:r,imageSrc:i,role:a,bio:l,meta:d,links:f,actions:p,href:m,className:h,...g}=e,_=(0,c.jsxs)(c.Fragment,{children:[i?(0,c.jsx)(`img`,{className:`willa-profile-card-image`,src:i,alt:``}):null,(0,c.jsxs)(`div`,{className:`willa-profile-card-main`,children:[(0,c.jsx)(o,{className:`willa-profile-card-avatar`,src:n,name:r??u(t),alt:u(t),size:`lg`}),(0,c.jsxs)(`div`,{className:`willa-profile-card-copy`,children:[(0,c.jsx)(`h3`,{className:`willa-profile-card-name`,children:t}),a?(0,c.jsx)(`p`,{className:`willa-profile-card-role`,children:a}):null,l?(0,c.jsx)(`p`,{className:`willa-profile-card-bio`,children:l}):null,d?(0,c.jsx)(`p`,{className:`willa-profile-card-meta`,children:d}):null]}),f?.length?(0,c.jsx)(`div`,{className:`willa-profile-card-links`,children:f.map((e,t)=>(0,c.jsx)(`a`,{href:e.href,target:e.target,rel:e.rel,children:e.label},`${e.href}-${t}`))}):null,p?(0,c.jsx)(`div`,{className:`willa-profile-card-actions`,children:p}):null]})]});return m?(0,c.jsx)(`a`,{...g,className:(0,s.default)(`willa-profile-card`,i&&`willa-profile-card--with-image`,`willa-profile-card--link`,h),href:m,children:_}):(0,c.jsx)(`article`,{...g,className:(0,s.default)(`willa-profile-card`,i&&`willa-profile-card--with-image`,h),children:_})}var u=e=>typeof e==`string`||typeof e==`number`?String(e):`Profile`;l.displayName=`ProfileCard`;var d=a({id:`profile-card`,name:`ProfileCard`,category:`widgets`,packageName:`willa/ProfileCard`,description:`用于展示作者、成员、讲师或产品角色信息的人物卡片。`,imports:[{name:`ProfileCard`,from:`willa/ProfileCard`},{name:`Button`,from:`willa/Button`},{name:`Group`,from:`willa/Group`}],css:`willa/ProfileCard.css`,demo:{name:`ProfileCard`,component:l,props:{name:`Tao`,avatarSrc:`https://github.com/imtaotao.png`,imageSrc:`https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80`,role:`Product Engineer`,bio:`关注 AI 产品、组件系统和内容平台体验。`,meta:`深圳 · 组件设计`,links:[{label:`GitHub`,href:`https://github.com/imtaotao`},{label:`Website`,href:`https://imtaotao.github.io/willa/`}]}},code:`
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
  `,sections:[{title:`带操作`,code:`
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
      `,content:(0,c.jsx)(l,{name:`Willa AI`,avatarName:`Willa AI`,role:`AI Assistant`,bio:`帮助团队整理上下文、生成内容和分析反馈。`,actions:(0,c.jsxs)(i,{gap:`sm`,children:[(0,c.jsx)(r,{size:`sm`,children:`查看资料`}),(0,c.jsx)(r,{size:`sm`,variant:`ghost`,children:`关注`})]})})}],props:[{name:`name`,type:`ReactNode`,required:!0,description:`人物名称。`},{name:`avatarSrc`,type:`string`,description:`头像图片地址。`},{name:`avatarName`,type:`string`,description:`头像文本回退名称，默认使用 name 的文本值。`},{name:`imageSrc`,type:`string`,description:`卡片顶部封面图片。`},{name:`role`,type:`ReactNode`,description:`职位、身份或角色说明。`},{name:`bio`,type:`ReactNode`,description:`简介内容。`},{name:`meta`,type:`ReactNode`,description:`地点、标签或补充信息。`},{name:`links`,type:`Array<ProfileCardLink>`,description:`外部链接列表。`},{name:`actions`,type:`ReactNode`,description:`自定义操作区。`},{name:`href`,type:`string`,description:`整张卡片的跳转地址。`},{name:`className`,type:`string`,description:`自定义 className。`}]});export{d as default};