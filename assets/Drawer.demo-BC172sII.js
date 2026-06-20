import{a$ as o,aX as e,h as t,U as l,ai as s,aw as d,_ as i,Q as c}from"./index-DtcdKHQp.js";import{D as r}from"./index-DQeyzCid.js";import{F as a}from"./index-BdH1-zJ8.js";/* empty css              *//* empty css              *//* empty css              */import{d as p}from"./defineDoc-_AEIlrqt.js";import"./dom-DvRKQOia.js";const n=()=>e.jsxs(d,{gap:"md",children:[e.jsx(a,{label:"任务名称",description:"用于侧边详情和编辑场景。",children:e.jsx(i,{defaultValue:"组件体验梳理"})}),e.jsx(a,{label:"负责人",children:e.jsx(i,{defaultValue:"Willa Team"})})]}),y=p({id:"drawer",name:"Drawer",category:"content",packageName:"willa/Drawer",description:"用于侧边详情、配置编辑和移动端面板的抽屉组件。",imports:[{name:"Drawer",from:"willa/Drawer"}],css:"willa/Drawer.css",demo:{name:"Drawer",component:r,props:{title:"编辑任务",description:"抽屉适合保留当前页面上下文的侧边编辑。",trigger:e.jsx(t,{icon:e.jsx(c,{}),children:"打开抽屉"}),confirmText:"保存",children:e.jsx(n,{})}},code:o(`
    import { Button } from "willa/Button";
    import { Drawer } from "willa/Drawer";
    import "willa/Button.css";
    import "willa/Drawer.css";

    <Drawer
      title="编辑任务"
      description="抽屉适合保留当前页面上下文的侧边编辑。"
      trigger={<Button>打开抽屉</Button>}
      confirmText="保存"
    >
      表单或详情内容
    </Drawer>
  `),props:[{name:"open",type:"boolean",description:"受控打开状态。"},{name:"defaultOpen",type:"boolean",defaultValue:"false",description:"非受控初始打开状态。"},{name:"trigger",type:"ReactElement",description:"触发打开抽屉的元素。"},{name:"title",type:"ReactNode",description:"抽屉标题。"},{name:"description",type:"ReactNode",description:"标题下方的说明。"},{name:"children",type:"ReactNode",description:"抽屉主体内容。"},{name:"footer",type:"ReactNode",description:"自定义底部。未传且配置 confirmText 或 onConfirm 时渲染默认操作区。"},{name:"extra",type:"ReactNode",description:"标题右侧附加区域。"},{name:"placement",type:'"left" | "right" | "top" | "bottom"',defaultValue:'"right"',description:"抽屉打开方向。"},{name:"size",type:'"sm" | "md" | "lg" | "full"',defaultValue:'"md"',description:"抽屉尺寸。"},{name:"width",type:"number | string",description:"左右抽屉的自定义宽度。number 会按 px 处理。"},{name:"height",type:"number | string",description:"上下抽屉的自定义高度。number 会按 px 处理。"},{name:"confirmText",type:"ReactNode",description:"默认确认按钮文案。"},{name:"confirmDisabled",type:"boolean",defaultValue:"false",description:"是否禁用默认确认按钮。"},{name:"confirmLoading",type:"boolean",defaultValue:"false",description:"是否展示默认确认按钮加载态。"},{name:"closeText",type:"ReactNode",defaultValue:'"取消"',description:"默认取消按钮文案。"},{name:"ariaLabel",type:"string",description:"无标题时的无障碍名称。"},{name:"closeOnOverlayClick",type:"boolean",defaultValue:"true",description:"点击遮罩是否关闭。"},{name:"closeOnEscape",type:"boolean",defaultValue:"true",description:"按 Escape 是否关闭。"},{name:"showCloseButton",type:"boolean",defaultValue:"true",description:"是否展示右上角关闭按钮。"},{name:"onConfirm",type:"() => void | Promise<void>",description:"默认确认按钮点击回调。返回 Promise 时会进入等待态并成功后关闭。"},{name:"onOpenChange",type:"(open: boolean) => void",description:"打开状态变化回调。"}],sections:[{title:"自定义宽度",code:`
        <Drawer
          title="宽侧栏"
          description="左右抽屉可以用 width 精确控制宽度。"
          width="44rem"
          trigger={<Button variant="soft">打开宽抽屉</Button>}
        >
          <Stack gap="md">
            <FormField label="任务名称" description="用于侧边详情和编辑场景。">
              <Input defaultValue="组件体验梳理" />
            </FormField>
            <FormField label="负责人">
              <Input defaultValue="Willa Team" />
            </FormField>
          </Stack>
        </Drawer>
      `,content:e.jsx(r,{title:"宽侧栏",description:"左右抽屉可以用 width 精确控制宽度。",width:"44rem",trigger:e.jsx(t,{variant:"soft",children:"打开宽抽屉"}),children:e.jsx(n,{})})},{title:"不同方向",code:`
        <Group wrap>
          <Drawer
            placement="left"
            title="左侧详情"
            trigger={<Button variant="outline">左侧</Button>}
          >
            左侧抽屉适合导航、资源选择或辅助信息。
          </Drawer>
          <Drawer
            placement="bottom"
            title="底部操作"
            size="sm"
            trigger={<Button variant="outline">底部</Button>}
          >
            底部抽屉适合移动端操作面板。
          </Drawer>
        </Group>
      `,content:e.jsxs(l,{wrap:!0,children:[e.jsx(r,{placement:"left",title:"左侧详情",trigger:e.jsx(t,{variant:"outline",children:"左侧"}),children:"左侧抽屉适合导航、资源选择或辅助信息。"}),e.jsx(r,{placement:"bottom",title:"底部操作",size:"sm",trigger:e.jsx(t,{variant:"outline",children:"底部"}),children:"底部抽屉适合移动端操作面板。"})]})},{title:"附加操作",code:`
        <Drawer
          title="资料详情"
          extra={<Button size="sm" variant="ghost">查看文档</Button>}
          trigger={<Button>查看详情</Button>}
        >
          侧边详情内容
        </Drawer>
      `,content:e.jsx(r,{title:"资料详情",description:"标题区域可以放置额外操作。",extra:e.jsx(t,{size:"sm",variant:"ghost",icon:e.jsx(s,{}),children:"查看文档"}),trigger:e.jsx(t,{variant:"soft",children:"查看详情"}),children:"这里可以展示文件、指标、历史记录或编辑表单。"})}]});export{y as default};
