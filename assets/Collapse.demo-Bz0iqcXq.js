import{b3 as e,a0 as o,h as s,aA as a,a5 as n,b5 as p,Y as r}from"./index-C0ExXCbR.js";import{C as t}from"./index-BCO1zczz.js";/* empty css              *//* empty css              */import{d as c}from"./defineDoc-BFfDgh6T.js";function m(){const[i,l]=p.useState(!1);return e.jsx("div",{style:{width:"100%",maxWidth:"24rem"},children:e.jsxs(a,{gap:"sm",children:[e.jsxs(r,{gap:"sm",children:[e.jsx(s,{variant:"ghost",size:"sm",style:{width:"4.5rem"},onClick:()=>l(!0),children:"展开"}),e.jsx(s,{variant:"ghost",size:"sm",style:{width:"4.5rem"},onClick:()=>l(!1),children:"收起"})]}),e.jsx(t,{title:"受控面板",hint:"外部状态控制折叠开关",icon:e.jsx(o,{}),open:i,onOpenChange:l,children:"这种写法适合需要和表单、同步按钮或路由状态联动的内容面板。"})]})})}const g=c({id:"collapse",name:"Collapse",packageName:"willa/Collapse",description:"用于 FAQ、配置面板和文档内容分组的折叠块；支持受控/非受控开关、提示信息、自定义头部图标和操作区。",imports:[{name:"Button",from:"willa/Button"},{name:"Collapse",from:"willa/Collapse"},{name:"Group",from:"willa/Group"},{name:"Stack",from:"willa/Stack"},{name:"InfoCircledIcon, LockClosedIcon",from:"@radix-ui/react-icons"}],css:"willa/Collapse.css",demo:{name:"Collapse",component:t,props:{title:"实现说明",hint:"默认展开 / 可收起",defaultOpen:!0},children:"把补充细节收起来，不打断主要阅读流程。"},code:`
    import { Collapse } from "willa/Collapse";
    import "willa/Collapse.css";

    <Collapse title="实现说明" hint="默认展开 / 可收起" defaultOpen>
      把补充细节收起来，不打断主要阅读流程。
    </Collapse>;
  `,sections:[{title:"自定义头部",code:`
        <Collapse
          title="发布前检查"
          hint="包含图标和受限状态"
          icon={<InfoCircledIcon />}
        >
          <p style={{ margin: 0 }}>适合放在 FAQ、配置说明、补充解释里。</p>
        </Collapse>;
      `,content:e.jsx(t,{title:"发布前检查",hint:"包含图标和受限状态",icon:e.jsx(o,{}),children:e.jsx("p",{style:{margin:0},children:"适合放在 FAQ、配置说明、补充解释里。"})})},{title:"带操作区",code:`
        <Collapse
          title="发布前检查"
          hint="右侧可以放额外操作"
          extra={<Button variant="ghost" size="sm">复制内容</Button>}
        >
          <p style={{ margin: 0 }}>
            当折叠块需要和跳转、复制、编辑等操作并列时，直接放在头部右侧。
          </p>
        </Collapse>;
      `,content:e.jsx(t,{title:"发布前检查",hint:"右侧可以放额外操作",extra:e.jsx(s,{variant:"ghost",size:"sm",children:"复制内容"}),children:e.jsx("p",{style:{margin:0},children:"当折叠块需要和跳转、复制、编辑等操作并列时，直接放在头部右侧。"})})},{title:"不同尺寸",code:`
        <Stack gap="sm">
          <Collapse title="紧凑折叠块" size="sm" defaultOpen>
            <p style={{ margin: 0 }}>适合放在聊天、列表卡片或侧栏说明里。</p>
          </Collapse>
          <Collapse title="标准折叠块" size="md" defaultOpen>
            <p style={{ margin: 0 }}>适合放在正文、配置面板和详情页里。</p>
          </Collapse>
          <Collapse title="强调折叠块" size="lg" defaultOpen>
            <p style={{ margin: 0 }}>适合承载更重要的说明或操作分组。</p>
          </Collapse>
        </Stack>;
      `,content:e.jsxs(a,{gap:"sm",children:[e.jsx(t,{title:"紧凑折叠块",size:"sm",defaultOpen:!0,children:e.jsx("p",{style:{margin:0},children:"适合放在聊天、列表卡片或侧栏说明里。"})}),e.jsx(t,{title:"标准折叠块",size:"md",defaultOpen:!0,children:e.jsx("p",{style:{margin:0},children:"适合放在正文、配置面板和详情页里。"})}),e.jsx(t,{title:"强调折叠块",size:"lg",defaultOpen:!0,children:e.jsx("p",{style:{margin:0},children:"适合承载更重要的说明或操作分组。"})})]})},{title:"受控状态",code:`
        import { useState } from "react";
        import { Button } from "willa/Button";
        import { Collapse } from "willa/Collapse";
        import { Group } from "willa/Group";
        import { Stack } from "willa/Stack";

        const Demo = () => {
          const [open, setOpen] = useState(false);

          return (
            <Stack gap="sm">
              <Group gap="sm">
                <Button variant="ghost" size="sm" onClick={() => setOpen(true)}>
                  展开
                </Button>
                <Button variant="ghost" size="sm" onClick={() => setOpen(false)}>
                  收起
                </Button>
              </Group>
              <Collapse title="受控面板" size="sm" open={open} onOpenChange={setOpen}>
                这种写法适合需要和表单、同步按钮或路由状态联动的内容面板。
              </Collapse>
            </Stack>
          );
        };
      `,content:e.jsx(m,{})},{title:"默认收起",code:`
        <Collapse
          title="默认收起"
          hint="第一次进入时保持折叠"
        >
          默认关闭时，适合让正文先保持轻量，再按需展开补充说明。
        </Collapse>;
      `,content:e.jsx(t,{title:"默认收起",hint:"第一次进入时保持折叠",children:"默认关闭时，适合让正文先保持轻量，再按需展开补充说明。"})},{title:"禁用状态",code:`
        <Collapse
          title="只读说明"
          hint="禁用后不可展开"
          icon={<LockClosedIcon />}
          disabled
        >
          这是一个只读信息块。
        </Collapse>;
      `,content:e.jsx(t,{title:"只读说明",hint:"禁用后不可展开",icon:e.jsx(n,{}),disabled:!0,children:"这是一个只读信息块。"})}],props:[{name:"title",type:"ReactNode",required:!0,description:"折叠块的主标题。"},{name:"hint",type:"ReactNode",description:"标题下方的辅助说明。"},{name:"size",type:'"sm" | "md" | "lg"',defaultValue:'"md"',description:"折叠块的视觉尺寸。"},{name:"icon",type:"ReactNode",description:"标题左侧的装饰图标，未传时不显示。"},{name:"extra",type:"ReactNode",description:"标题行右侧的附加操作区。"},{name:"open",type:"boolean",description:"受控展开状态。"},{name:"defaultOpen",type:"boolean",defaultValue:"false",description:"非受控模式下的初始展开状态。"},{name:"disabled",type:"boolean",defaultValue:"false",description:"是否禁用折叠交互。"},{name:"onOpenChange",type:"(open: boolean) => void",description:"展开状态变化时触发。"},{name:"triggerClassName",type:"string",description:"触发按钮的 className。"},{name:"bodyClassName",type:"string",description:"内容区域的 className。"},{name:"className",type:"string",description:"外层容器的 className。"},{name:"children",type:"ReactNode",description:"折叠内容。"}]});export{g as default};
