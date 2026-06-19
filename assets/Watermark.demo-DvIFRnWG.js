import{aX as t,j as r,av as e,T as i,B as o}from"./index-CMTLjcZC.js";import{W as a}from"./index-BFbKOVr0.js";/* empty css              */import{d as l}from"./defineDoc-mP-k1rVE.js";import"./media-Ddx5iB57.js";const s='data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect x="4" y="4" width="56" height="56" rx="18" fill="%2382A3EC"/><path d="M20 18h9.4l7.1 19.8L43.6 18H52l-12.6 28h-6.6L20 18Z" fill="white"/></svg>',m={width:"min(100%, 56rem)",minHeight:"18rem"},n={width:"min(100%, 44rem)",minHeight:"14rem"},c={width:"min(100%, 56rem)",minHeight:"22rem",padding:"1.75rem"},w=l({id:"watermark",name:"Watermark",category:"content",packageName:"willa/Watermark",description:"用于页面、卡片、预览区和导出区域的文本或图片水印覆盖层。",imports:[{name:"Watermark",from:"willa/Watermark"}],css:"willa/Watermark.css",demo:{name:"Watermark",component:a,props:{content:["Willa Components","Internal Preview"],gap:[88,72],offset:[16,20],children:t.jsx(r,{variant:"outline",style:m,children:t.jsxs(e,{gap:"sm",children:[t.jsxs(i,{justify:"between",align:"center",children:[t.jsxs(e,{gap:"xs",children:[t.jsx("strong",{children:"组件预览草稿"}),t.jsx("span",{style:{color:"var(--willa-text-soft)",fontSize:"0.92rem"},children:"当前页面包含未发布的布局和样式调整。"})]}),t.jsx(o,{tone:"info",children:"仅内部可见"})]}),t.jsx("p",{style:{margin:0,color:"var(--willa-text)"},children:"这里适合放卡片、表格、文章内容或图片预览区。"})]})})}},code:`
    import { Badge } from "willa/Badge";
    import { Card } from "willa/Card";
    import { Group } from "willa/Group";
    import { Stack } from "willa/Stack";
    import { Watermark } from "willa/Watermark";
    import "willa/Badge.css";
    import "willa/Card.css";
    import "willa/Group.css";
    import "willa/Stack.css";
    import "willa/Watermark.css";

    <Watermark content={["Willa Components", "Internal Preview"]} gap={[88, 72]} offset={[16, 20]}>
      <Card style={{ width: "min(100%, 56rem)", minHeight: "18rem" }}>
        <Stack gap="sm">
          <Group justify="between" align="center">
            <Stack gap="xs">
              <strong>组件预览草稿</strong>
              <span style={{ color: "var(--willa-text-soft)", fontSize: "0.92rem" }}>
                当前页面包含未发布的布局和样式调整。
              </span>
            </Stack>
            <Badge tone="info">仅内部可见</Badge>
          </Group>
          <p style={{ margin: 0, color: "var(--willa-text)" }}>
            这里适合放卡片、表格、文章内容或图片预览区。
          </p>
        </Stack>
      </Card>
    </Watermark>;
  `,sections:[{title:"文字样式与密度",code:`
        <Watermark
          content={["Design Review", "Preview Only"]}
          width={184}
          height={96}
          gap={[56, 48]}
          rotate={-16}
          font={{
            color: "rgba(79, 117, 214, 0.18)",
            fontSize: 17,
            fontWeight: 640,
            letterSpacing: 1,
          }}
        >
          <Card variant="outline" style={{ width: "min(100%, 44rem)", minHeight: "14rem" }}>
            <Stack gap="xs">
              <strong>更高密度的审批面板</strong>
              <span style={{ color: "var(--willa-text-soft)", fontSize: "0.9rem" }}>
                适合评审区、导出预览区和二次确认面板。
              </span>
            </Stack>
          </Card>
        </Watermark>;
      `,content:t.jsx(a,{content:["Design Review","Preview Only"],width:184,height:96,gap:[56,48],rotate:-16,font:{color:"rgba(79, 117, 214, 0.18)",fontSize:17,fontWeight:640,letterSpacing:1},children:t.jsx(r,{variant:"outline",style:n,children:t.jsxs(e,{gap:"xs",children:[t.jsx("strong",{children:"更高密度的审批面板"}),t.jsx("span",{style:{color:"var(--willa-text-soft)",fontSize:"0.9rem"},children:"适合评审区、导出预览区和二次确认面板。"})]})})})},{title:"自定义字体颜色",code:`
        <Watermark
          content={["Internal", "Only"]}
          width={168}
          height={92}
          gap={[72, 60]}
          rotate={-18}
          font={{
            color: "rgba(34, 197, 94, 0.18)",
            fontSize: 16,
            fontWeight: 620,
            letterSpacing: 0.8,
          }}
        >
          <Card style={{ width: "min(100%, 44rem)", minHeight: "14rem" }}>
            <Stack gap="xs">
              <strong>可调色的文字水印</strong>
              <span style={{ color: "var(--willa-text-soft)", fontSize: "0.9rem" }}>
                适合内部预览、评审稿和半透明提示层。
              </span>
            </Stack>
          </Card>
        </Watermark>;
      `,content:t.jsx(a,{content:["Internal","Only"],width:168,height:92,gap:[72,60],rotate:-18,font:{color:"rgba(34, 197, 94, 0.18)",fontSize:16,fontWeight:620,letterSpacing:.8},children:t.jsx(r,{variant:"outline",style:n,children:t.jsxs(e,{gap:"xs",children:[t.jsx("strong",{children:"可调色的文字水印"}),t.jsx("span",{style:{color:"var(--willa-text-soft)",fontSize:"0.9rem"},children:"适合内部预览、评审稿和半透明提示层。"})]})})})},{title:"图片水印",code:`
        const brandMark =
          'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect x="4" y="4" width="56" height="56" rx="18" fill="%2382A3EC"/><path d="M20 18h9.4l7.1 19.8L43.6 18H52l-12.6 28h-6.6L20 18Z" fill="white"/></svg>';

        <Watermark
          image={brandMark}
          content="Willa Brand"
          width={180}
          height={104}
          gap={[64, 52]}
          font={{ color: "rgba(15, 23, 42, 0.14)", fontSize: 15, fontWeight: 620 }}
        >
          <Card style={{ width: "min(100%, 56rem)", minHeight: "22rem", padding: "1.75rem" }}>
            <Stack gap="sm">
              <strong>图片或品牌型水印</strong>
              <span style={{ color: "var(--willa-text-soft)", fontSize: "0.92rem" }}>
                适合媒体资产、截图、分享面板和品牌物料区。
              </span>
            </Stack>
          </Card>
        </Watermark>;
      `,content:t.jsx(a,{image:s,content:"Willa Brand",width:180,height:104,gap:[64,52],font:{color:"rgba(15, 23, 42, 0.14)",fontSize:15,fontWeight:620},children:t.jsx(r,{variant:"outline",style:c,children:t.jsxs(e,{gap:"sm",children:[t.jsx("strong",{children:"图片或品牌型水印"}),t.jsx("span",{style:{color:"var(--willa-text-soft)",fontSize:"0.92rem"},children:"适合媒体资产、截图、分享面板和品牌物料区。"})]})})})}],props:[{name:"children",type:"ReactNode",description:"作为水印底层内容区域渲染的子节点。"},{name:"content",type:"string | Array<string>",description:"水印文字内容。传数组时会按多行渲染。"},{name:"image",type:"string",description:"水印图片地址，适合品牌标识或图形水印。"},{name:"width",type:"number",defaultValue:"152",description:"单个水印块的宽度，单位为 px。"},{name:"height",type:"number",defaultValue:"84",description:"单个水印块的高度，单位为 px。"},{name:"gap",type:"[number, number]",defaultValue:"[96, 88]",description:"水印块横向和纵向的重复间距。"},{name:"offset",type:"[number, number]",defaultValue:"[24, 12]",description:"水印背景起始偏移，用于微调排布位置。"},{name:"rotate",type:"number",defaultValue:"-22",description:"单个水印块的旋转角度。"},{name:"opacity",type:"number",defaultValue:"1",description:"整个水印层的透明度。"},{name:"zIndex",type:"number",defaultValue:"1",description:"水印层相对内容区域的层级。"},{name:"fixed",type:"boolean",defaultValue:"false",description:"是否以 fixed 形式覆盖当前视口。"},{name:"font",type:"WatermarkFont",description:"文字水印的颜色、字号、字重和字距配置。"},{name:"className",type:"string",description:"根节点自定义类名。"},{name:"style",type:"CSSProperties",description:"根节点自定义样式。"}]});export{w as default};
