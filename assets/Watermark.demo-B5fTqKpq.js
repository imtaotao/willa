import{aQ as b,aO as t,az as _,i as L,ao as j,Q as D,B as I}from"./index-DV7y9v_t.js";import{r as R}from"./media-B-X7Ur_P.js";/* empty css              */import{d as O}from"./defineDoc-CnG-0Gd0.js";const G=152,P=84,U=[96,88],V=[24,12],N=-22,Y=1,M="rgba(15, 23, 42, 0.12)",K="rgba(255, 255, 255, 0.12)";function E(a){const{articleSourcePath:i,resolveAssetUrl:o,children:l,content:c,image:g,width:s=G,height:r=P,gap:n=U,offset:d=V,rotate:p=N,opacity:x=Y,zIndex:m=1,fixed:w=!1,font:e,className:A,style:z,...H}=a,y=b.useRef(null),[h,k]=b.useState(M),f=R({articleSourcePath:i,resolveAssetUrl:o},g),S=X(c),u=b.useMemo(()=>Q({lines:S,image:f,width:s,height:r,gap:n,rotate:p,font:{color:(e==null?void 0:e.color)??h,fontFamily:e==null?void 0:e.fontFamily,fontSize:e==null?void 0:e.fontSize,fontStyle:e==null?void 0:e.fontStyle,fontWeight:e==null?void 0:e.fontWeight,letterSpacing:e==null?void 0:e.letterSpacing,lineHeight:e==null?void 0:e.lineHeight}}),[S,f,s,r,n,p,e==null?void 0:e.color,e==null?void 0:e.fontFamily,e==null?void 0:e.fontSize,e==null?void 0:e.fontStyle,e==null?void 0:e.fontWeight,e==null?void 0:e.letterSpacing,e==null?void 0:e.lineHeight,h]);b.useEffect(()=>{const v=y.current;if(!v)return;const W=()=>{const C=getComputedStyle(v).getPropertyValue("--willa-watermark-ink").trim();if(C){k(C);return}const F=document.documentElement.getAttribute("data-wk-theme");k(F==="dark"?K:M)};W();const $=new MutationObserver(W);return $.observe(document.documentElement,{attributes:!0,attributeFilter:["data-wk-theme","class"]}),()=>$.disconnect()},[]);const B={...z,"--willa-watermark-image":u?`url("${u}")`:"none","--willa-watermark-size":`${s+n[0]}px ${r+n[1]}px`,"--willa-watermark-position":`${d[0]}px ${d[1]}px`,"--willa-watermark-opacity":`${x}`,"--willa-watermark-z-index":`${m}`};return t.jsxs("div",{...H,ref:y,className:_("willa-watermark",w&&"willa-watermark--fixed",A),style:B,children:[t.jsx("div",{className:"willa-watermark__overlay","aria-hidden":"true"}),l?t.jsx("div",{className:"willa-watermark__content",children:l}):null]})}const X=a=>a?(Array.isArray(a)?a:[a]).map(i=>i.trim()).filter(Boolean):new Array,T=a=>a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"),Q=a=>{const{lines:i,image:o,width:l,height:c,gap:g,rotate:s,font:r}=a;if(!o&&i.length===0)return"";const n=l+g[0],d=c+g[1],p=n/2,x=d/2,m=r.fontSize??15,w=r.lineHeight??m*1.45,e=r.letterSpacing??.6,A=r.fontWeight??560,z=r.fontFamily??"Inter, ui-sans-serif, system-ui, sans-serif",H=r.fontStyle??"normal",y=r.color??M,h=o?Math.min(c*.34,34):0,k=i.length?w*i.length-(w-m):0,f=o&&i.length?Math.max(c*.08,6):0,S=h+f+k,u=x-S/2,B=o?Z({image:o,centerX:p,startY:u,width:l,imageBlockHeight:h}):"",v=i.map(($,C)=>{const F=u+h+f+m+w*C-m*.16;return`<text x="${p}" y="${F}" text-anchor="middle" fill="${y}" font-size="${m}" font-weight="${A}" font-family="${z}" font-style="${H}" letter-spacing="${e}">${T($)}</text>`}).join(""),W=`
    <svg xmlns="http://www.w3.org/2000/svg" width="${n}" height="${d}" viewBox="0 0 ${n} ${d}">
      <g transform="rotate(${s} ${p} ${x})">
        ${B}
        ${v}
      </g>
    </svg>
  `;return`data:image/svg+xml;charset=utf-8,${encodeURIComponent(W)}`},Z=a=>{const{image:i,centerX:o,startY:l,width:c,imageBlockHeight:g}=a,s=Math.min(c*.36,52),r=o-s/2,n=l;return`<image href="${T(i)}" x="${r}" y="${n}" width="${s}" height="${g}" preserveAspectRatio="xMidYMid meet" opacity="0.96" />`},q='data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect x="4" y="4" width="56" height="56" rx="18" fill="%2382A3EC"/><path d="M20 18h9.4l7.1 19.8L43.6 18H52l-12.6 28h-6.6L20 18Z" fill="white"/></svg>',J={width:"min(100%, 56rem)",minHeight:"18rem"},ee={width:"min(100%, 44rem)",minHeight:"14rem"},te={width:"min(100%, 56rem)",minHeight:"22rem",padding:"1.75rem"},oe=O({id:"watermark",name:"Watermark",category:"content",packageName:"willa/Watermark",description:"用于页面、卡片、预览区和导出区域的文本或图片水印覆盖层。",imports:[{name:"Watermark",from:"willa/Watermark"}],css:"willa/Watermark.css",demo:{name:"Watermark",component:E,props:{content:["Willa Components","Internal Preview"],gap:[88,72],offset:[16,20],children:t.jsx(L,{style:J,children:t.jsxs(j,{gap:"sm",children:[t.jsxs(D,{justify:"between",align:"center",children:[t.jsxs(j,{gap:"xs",children:[t.jsx("strong",{children:"组件预览草稿"}),t.jsx("span",{style:{color:"var(--willa-text-soft)",fontSize:"0.92rem"},children:"当前页面包含未发布的布局和样式调整。"})]}),t.jsx(I,{tone:"info",children:"仅内部可见"})]}),t.jsx("p",{style:{margin:0,color:"var(--willa-text)"},children:"这里适合放卡片、表格、文章内容或图片预览区。"})]})})}},code:`
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
          <Card style={{ width: "min(100%, 44rem)", minHeight: "14rem" }}>
            <Stack gap="xs">
              <strong>更高密度的审批面板</strong>
              <span style={{ color: "var(--willa-text-soft)", fontSize: "0.9rem" }}>
                适合评审区、导出预览区和二次确认面板。
              </span>
            </Stack>
          </Card>
        </Watermark>;
      `,content:t.jsx(E,{content:["Design Review","Preview Only"],width:184,height:96,gap:[56,48],rotate:-16,font:{color:"rgba(79, 117, 214, 0.18)",fontSize:17,fontWeight:640,letterSpacing:1},children:t.jsx(L,{style:ee,children:t.jsxs(j,{gap:"xs",children:[t.jsx("strong",{children:"更高密度的审批面板"}),t.jsx("span",{style:{color:"var(--willa-text-soft)",fontSize:"0.9rem"},children:"适合评审区、导出预览区和二次确认面板。"})]})})})},{title:"图片水印",code:`
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
      `,content:t.jsx(E,{image:q,content:"Willa Brand",width:180,height:104,gap:[64,52],font:{color:"rgba(15, 23, 42, 0.14)",fontSize:15,fontWeight:620},children:t.jsx(L,{style:te,children:t.jsxs(j,{gap:"sm",children:[t.jsx("strong",{children:"图片或品牌型水印"}),t.jsx("span",{style:{color:"var(--willa-text-soft)",fontSize:"0.92rem"},children:"适合媒体资产、截图、分享面板和品牌物料区。"})]})})})}],props:[{name:"children",type:"ReactNode",description:"作为水印底层内容区域渲染的子节点。"},{name:"content",type:"string | Array<string>",description:"水印文字内容。传数组时会按多行渲染。"},{name:"image",type:"string",description:"水印图片地址，适合品牌标识或图形水印。"},{name:"width",type:"number",defaultValue:"152",description:"单个水印块的宽度，单位为 px。"},{name:"height",type:"number",defaultValue:"84",description:"单个水印块的高度，单位为 px。"},{name:"gap",type:"[number, number]",defaultValue:"[96, 88]",description:"水印块横向和纵向的重复间距。"},{name:"offset",type:"[number, number]",defaultValue:"[24, 12]",description:"水印背景起始偏移，用于微调排布位置。"},{name:"rotate",type:"number",defaultValue:"-22",description:"单个水印块的旋转角度。"},{name:"opacity",type:"number",defaultValue:"1",description:"整个水印层的透明度。"},{name:"zIndex",type:"number",defaultValue:"1",description:"水印层相对内容区域的层级。"},{name:"fixed",type:"boolean",defaultValue:"false",description:"是否以 fixed 形式覆盖当前视口。"},{name:"font",type:"WatermarkFont",description:"文字水印的颜色、字号、字重和字距配置。"},{name:"className",type:"string",description:"根节点自定义类名。"},{name:"style",type:"CSSProperties",description:"根节点自定义样式。"}]});export{oe as default};
