import{aZ as e,g as r,ab as a,W as n,B as o,h as i,j as t}from"./index-D4zCy2Nt.js";/* empty css              *//* empty css              */import{d}from"./defineDoc-CxmfMy1b.js";const p=d({id:"border-beam",name:"BorderBeam",displayName:"边框流光",category:"layout",packageName:"willa/BorderBeam",description:"为任意容器增加持续流动的装饰性边框高亮，适合强调重点卡片、AI 模块和行动区。",imports:[{name:"BorderBeam",from:"willa/BorderBeam"},{name:"Card",from:"willa/Card"},{name:"Panel",from:"willa/Panel"},{name:"Group",from:"willa/Group"},{name:"Button",from:"willa/Button"},{name:"Badge",from:"willa/Badge"}],css:"willa/BorderBeam.css",demo:{name:"BorderBeam",component:r,props:{radius:8},children:[{name:"Card",component:t,props:{title:"智能分析完成",description:"流光边框用于提升视觉关注度，不承载业务状态语义。"},children:"已生成 12 条质量建议，可进入报告查看详情。"}]},code:`
    import { BorderBeam } from "willa/BorderBeam";
    import { Card } from "willa/Card";
    import "willa/BorderBeam.css";
    import "willa/Card.css";

    <BorderBeam radius={8}>
      <Card
        title="智能分析完成"
        description="流光边框用于提升视觉关注度，不承载业务状态语义。"
      >
        已生成 12 条质量建议，可进入报告查看详情。
      </Card>
    </BorderBeam>;
  `,sections:[{title:"基础用法",code:`
        <BorderBeam>
          <Panel
            title="重点工作区"
            description="适合用于登录面板、AI 摘要、推荐卡片或主要 CTA 区域。"
            actions={<Button size="sm">查看</Button>}
          >
            <Group gap="xs">
              <Badge tone="info">AI</Badge>
              <Badge tone="success">已同步</Badge>
              <Badge>核心区域</Badge>
            </Group>
          </Panel>
        </BorderBeam>;
      `,content:e.jsx(r,{children:e.jsx(a,{title:"重点工作区",description:"适合用于登录面板、AI 摘要、推荐卡片或主要 CTA 区域。",actions:e.jsx(i,{size:"sm",children:"查看"}),children:e.jsxs(n,{gap:"xs",children:[e.jsx(o,{tone:"info",children:"AI"}),e.jsx(o,{tone:"success",children:"已同步"}),e.jsx(o,{children:"核心区域"})]})})})},{title:"渐变色",code:`
        <Group direction="column" align="stretch" gap="md">
          <BorderBeam
            color={[
              { color: "#2563eb", percent: 0 },
              { color: "#06b6d4", percent: 52 },
              { color: "#22c55e", percent: 100 },
            ]}
            duration={4.2}
          >
            <Card title="Ocean" description="蓝绿渐变适合数据面板和云工具。">
              percent 使用 0 到 100 的输入范围。
            </Card>
          </BorderBeam>

          <BorderBeam
            color={[
              { color: "#8b5cf6", percent: 0 },
              { color: "#ec4899", percent: 48 },
              { color: "#f59e0b", percent: 100 },
            ]}
            duration={5}
          >
            <Card title="Sunset" description="暖色渐变适合活动入口和推荐卡片。">
              流光是装饰效果，不替代业务状态或校验边框。
            </Card>
          </BorderBeam>
        </Group>;
      `,content:e.jsxs(n,{direction:"column",align:"stretch",gap:"md",children:[e.jsx(r,{color:[{color:"#2563eb",percent:0},{color:"#06b6d4",percent:52},{color:"#22c55e",percent:100}],duration:4.2,children:e.jsx(t,{title:"Ocean",description:"蓝绿渐变适合数据面板和云工具。",children:"percent 使用 0 到 100 的输入范围。"})}),e.jsx(r,{color:[{color:"#8b5cf6",percent:0},{color:"#ec4899",percent:48},{color:"#f59e0b",percent:100}],duration:5,children:e.jsx(t,{title:"Sunset",description:"暖色渐变适合活动入口和推荐卡片。",children:"流光是装饰效果，不替代业务状态或校验边框。"})})]})},{title:"外扩和宽度",code:`
        <BorderBeam width={2} outset={3} radius={10} duration={3}>
          <Panel variant="soft" title="贴近容器圆角">
            可以通过 radius 和 outset 对齐实际容器的圆角与边缘位置。
          </Panel>
        </BorderBeam>;
      `,content:e.jsx(r,{width:2,outset:3,radius:10,duration:3,children:e.jsx(a,{variant:"soft",title:"贴近容器圆角",children:"可以通过 radius 和 outset 对齐实际容器的圆角与边缘位置。"})})},{title:"禁用效果",code:`
        <BorderBeam disabled>
          <Card title="静态内容" description="需要降低视觉干扰时可以关闭流光。">
            用户开启减少动态效果时，组件也会自动隐藏流光层。
          </Card>
        </BorderBeam>;
      `,content:e.jsx(r,{disabled:!0,children:e.jsx(t,{title:"静态内容",description:"需要降低视觉干扰时可以关闭流光。",children:"用户开启减少动态效果时，组件也会自动隐藏流光层。"})})}],props:[{name:"children",type:"ReactNode",description:"被装饰的内容，通常是 Card、Panel 或其它容器组件。"},{name:"as",type:"ElementType",defaultValue:'"div"',description:"根节点元素的轻量 escape hatch。组件属性仍按 div 透传，不提供完整多态组件类型收敛。"},{name:"color",type:"string | Array<{ color: string; percent: number }>",description:"流光颜色。传数组时 percent 使用 0 到 100 的输入范围。"},{name:"width",type:"number | string",defaultValue:"1",description:"流光边框宽度。number 按 px 处理。"},{name:"outset",type:"number | string",defaultValue:"0",description:"流光层相对容器边缘的外扩距离。number 按 px 处理。"},{name:"radius",type:"number | string",defaultValue:"8",description:"流光层圆角。number 按 px 处理。"},{name:"duration",type:"number | string",defaultValue:"5",description:"动画周期。number 按秒处理。"},{name:"delay",type:"number | string",defaultValue:"0",description:"动画延迟。number 按秒处理。"},{name:"disabled",type:"boolean",defaultValue:"false",description:"是否关闭流光效果。"}]});export{p as default};
