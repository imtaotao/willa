import{b3 as t,Y as v,h as d,b5 as u,B as y}from"./index-CAvvNH4Y.js";import{A as h}from"./index-bzKXW94X.js";import{C as s}from"./index-DpXYJmqV.js";import{L as S}from"./index-zj66hcMn.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import{d as b}from"./defineDoc-Dq0MLT71.js";import"./index-DBRoduTj.js";import"./index-CZKW_Dp_.js";const c={display:"grid",gap:"0.85rem",width:"min(100%, 52rem)",margin:"0 auto"},g=[{id:"tom",label:"Tom",value:"@tom ",avatarSrc:"https://i.pravatar.cc/64?img=11",team:"设计"},{id:"lucy",label:"Lucy",value:"@lucy ",avatarSrc:"https://i.pravatar.cc/64?img=47",team:"产品"},{id:"nate",label:"Nate",value:"@nate ",avatarSrc:"https://i.pravatar.cc/64?img=12"},{id:"willa",label:"Willa",value:"@willa ",avatarSrc:"https://i.pravatar.cc/64?img=50"},{id:"zoe",label:"Zoe",value:"@zoe ",avatarSrc:"https://i.pravatar.cc/64?img=33"},{id:"harry",label:"Harry",value:"@harry ",avatarSrc:"https://i.pravatar.cc/64?img=69"},{id:"luna",label:"Luna",value:"@luna ",avatarSrc:"https://i.pravatar.cc/64?img=63",role:"文案"},{id:"mona",label:"Mona",value:"@mona ",avatarSrc:"https://i.pravatar.cc/64?img=67"},{id:"neo",label:"Neo",value:"@neo ",avatarSrc:"https://i.pravatar.cc/64?img=69"},{id:"ava",label:"Ava",value:"@ava ",avatarSrc:"https://i.pravatar.cc/64?img=55"},{id:"finn",label:"Finn",value:"@finn ",avatarSrc:"https://i.pravatar.cc/64?img=53"},{id:"ivy",label:"Ivy",value:"@ivy ",avatarSrc:"https://i.pravatar.cc/64?img=48"},{id:"joel",label:"Joel",value:"@joel ",avatarSrc:"https://i.pravatar.cc/64?img=51"},{id:"kim",label:"Kim",value:"@kim ",avatarSrc:"https://i.pravatar.cc/64?img=56"},{id:"lara",label:"Lara",value:"@lara ",avatarSrc:"https://i.pravatar.cc/64?img=65"},{id:"mike",label:"Mike",value:"@mike ",avatarSrc:"https://i.pravatar.cc/64?img=57"},{id:"nina",label:"Nina",value:"@nina ",avatarSrc:"https://i.pravatar.cc/64?img=58",role:"前端"},{id:"owen",label:"Owen",value:"@owen ",avatarSrc:"https://i.pravatar.cc/64?img=60",team:"设计"},{id:"peter",label:"Peter",value:"@peter ",avatarSrc:"https://i.pravatar.cc/64?img=59",team:"产品"},{id:"quinn",label:"Quinn",value:"@quinn ",avatarSrc:"https://i.pravatar.cc/64?img=61",role:"运营"},{id:"rosie",label:"Rosie",value:"@rosie ",avatarSrc:"https://i.pravatar.cc/64?img=62",team:"测试"},{id:"simon",label:"Simon",value:"@simon ",avatarSrc:"https://i.pravatar.cc/64?img=64",team:"后端"},{id:"tracy",label:"Tracy",value:"@tracy ",avatarSrc:"https://i.pravatar.cc/64?img=66",role:"运营"},{id:"ursula",label:"Ursula",value:"@ursula ",avatarSrc:"https://i.pravatar.cc/64?img=68",team:"文案"},{id:"vincent",label:"Vincent",value:"@vincent ",avatarSrc:"https://i.pravatar.cc/64?img=70",role:"研发"},{id:"wren",label:"Wren",value:"@wren ",avatarSrc:"https://i.pravatar.cc/64?img=71",team:"支持"},{id:"yuki",label:"Yuki",value:"@yuki ",avatarSrc:"https://i.pravatar.cc/64?img=72",role:"前端"},{id:"zane",label:"Zane",value:"@zane ",avatarSrc:"https://i.pravatar.cc/64?img=73",team:"客服"}],f={display:"grid",gridTemplateColumns:"auto minmax(0, 1fr)",alignItems:"center",gap:"0.58rem",width:"100%",minHeight:"2.4rem",padding:"0.12rem 0.42rem",border:"0",borderRadius:"0.58rem",background:"transparent",color:"inherit",textAlign:"left",font:"inherit",cursor:"pointer",transition:"background-color 160ms ease"},x={display:"grid",minWidth:0,gap:"0.12rem"},I={overflow:"hidden",color:"var(--willa-comment-input-text)",fontSize:"0.87rem",fontWeight:650,lineHeight:1.35,textOverflow:"ellipsis",whiteSpace:"nowrap"},C={overflow:"hidden",color:"var(--willa-comment-input-muted)",fontSize:"0.76rem",lineHeight:1.35,textOverflow:"ellipsis",whiteSpace:"nowrap"},M=()=>{const[p,i]=u.useState(""),[n,r]=u.useState("");return t.jsxs("div",{style:c,children:[t.jsx(s,{value:p,onValueChange:i,maxLength:180,onSubmit:(o,l)=>{r(o),l.clear()}}),n?t.jsxs(y,{tone:"success",children:["已发布：",n]}):null]})},w=()=>{const[p,i]=u.useState(""),[n,r]=u.useState("");return t.jsx("div",{style:c,children:t.jsx(s,{placeholder:"回复这条评论...",quote:{author:"产品设计",content:"这个输入区需要支持评论扩展能力。"},onMentionClick:()=>i("打开成员选择面板"),mentionListProps:{virtualScroll:!0,onItemClick:o=>{const l=g.find(e=>(e.id??e.value)===o.id);l&&r(`已插入 ${String(l.label??l.value)}`)}},actions:t.jsx(d,{size:"sm",variant:"ghost",onClick:()=>i("打开业务自己的表情包面板"),children:"表情"}),mentionOptions:g,mentionMaxSuggestions:30,onMentionQuery:o=>{if(!o){r("");return}r(`正在匹配 ${o.trigger} 开头的候选项`)},footer:n||p||"输入 @ 可弹出候选人，或点击 @ 图标触发外部面板"})})},j=()=>{const[p,i]=u.useState("");return t.jsx("div",{style:c,children:t.jsx(s,{placeholder:"输入 @ 可以展示自定义候选项",quote:{author:"产品开发",content:"这个列表只负责演示 renderMentionOptions 自定义渲染。"},onMentionClick:()=>i("打开业务自己的成员弹窗"),renderMentionOptions:(n,r,o)=>{const l=new Map(r.map(e=>[e.id??e.value,e]));return t.jsx(S,{size:"sm",variant:"plain",split:!1,itemLayout:"horizontal",maxHeight:"13.8rem",renderItem:e=>{const a=l.get(e.id);return a?t.jsxs("button",{type:"button",style:f,onMouseDown:m=>m.preventDefault(),onClick:()=>o(a),children:[a.avatarSrc?t.jsx(h,{size:"sm",name:String(a.label??a.value),src:a.avatarSrc}):null,t.jsxs("span",{style:x,children:[t.jsx("span",{style:I,children:a.label}),t.jsx("span",{style:C,children:String(a.role??a.team??`匹配: ${n.query||"全部"}`)})]})]}):null},items:r.map(e=>{const a=e.id??e.value,m=String(e.label??e.value);return{id:a,title:m,description:n.query?`${m} 包含 ${n.query}`:m}})})},mentionOptions:Array.from(g),mentionMaxSuggestions:30,onMentionQuery:n=>{if(!n){i("");return}i(`命中 ${n.trigger}，查询关键字：${n.query||"未输入"}`)},actions:t.jsx(d,{size:"sm",variant:"ghost",onClick:()=>i("自定义成员选择弹层已触发"),children:"表情"}),footer:p||"renderMentionOptions：支持全量接管弹层内容和交互"})})},P=b({id:"comment-input",name:"CommentInput",category:"content",packageName:"willa/CommentInput",description:"用于评论、批注和反馈场景的轻量输入组件。",imports:[{name:"CommentInput",from:"willa/CommentInput"}],css:"willa/CommentInput.css",demo:{name:"CommentInputPreview",component:M},code:`
    import { useState } from "react";
        import { CommentInput } from "willa/CommentInput";
        import "willa/CommentInput.css";

    const Demo = () => {
      const [value, setValue] = useState("");

      return (
        <CommentInput
          value={value}
          onValueChange={setValue}
          maxLength={180}
          onSubmit={(nextValue, context) => {
            console.log(nextValue);
            context.clear();
          }}
        />
      );
    };
  `,sections:[{title:"附加操作",code:`
        <CommentInput
          placeholder="写下批注意见..."
          actions={
            <Group gap="xs">
              <Button size="sm" variant="ghost">
                引用段落
              </Button>
              <Button size="sm" variant="ghost">
                添加截图
              </Button>
            </Group>
          }
          footer="支持 ⌘ Enter 快捷发布"
        />;
      `,content:t.jsx("div",{style:c,children:t.jsx(s,{placeholder:"写下批注意见...",actions:t.jsxs(v,{gap:"xs",children:[t.jsx(d,{size:"sm",variant:"ghost",children:"引用段落"}),t.jsx(d,{size:"sm",variant:"ghost",children:"添加截图"})]}),footer:"支持 ⌘ Enter 快捷发布"})})},{title:"提及、表情和引用",code:`
        const [hint, setHint] = useState("");
        const [mentionHint, setMentionHint] = useState("");

        <CommentInput
          placeholder="回复这条评论..."
          quote={{
            author: "产品设计",
            content: "这个输入区需要支持评论扩展能力。",
          }}
          onMentionClick={() => setHint("打开成员选择面板")}
          actions={
            <Button
              size="sm"
              variant="ghost"
              onClick={() => setHint("打开业务自己的表情包面板")}
            >
              表情
            </Button>
          }
          mentionOptions={mentionOptions}
          mentionMaxSuggestions={30}
          onMentionQuery={(context) => {
            if (!context) {
              setMentionHint("");
              return;
            }

            setMentionHint(
              "正在匹配 " + context.trigger + " 开头的候选项",
            );
          }}
          footer={mentionHint || hint || "输入 @ 可弹出候选人，或点击 @ 图标触发外部面板"}
        />;
      `,content:t.jsx(w,{})},{title:"renderMentionOptions 自定义提及弹层",code:`
        import { Avatar } from "willa/Avatar";
        import { Button } from "willa/Button";
        import { CommentInput } from "willa/CommentInput";
        import { List } from "willa/List";
        import "willa/Avatar.css";
        import "willa/Button.css";
        import "willa/List.css";
        import "willa/CommentInput.css";

        const mentionOptions = [
          { id: "tom", label: "Tom", value: "@tom ", avatarSrc: "https://i.pravatar.cc/64?img=11", role: "设计" },
          { id: "lucy", label: "Lucy", value: "@lucy ", avatarSrc: "https://i.pravatar.cc/64?img=47", team: "产品" },
        ];

        <CommentInput
          placeholder="输入 @ 可以展示自定义候选项"
          renderMentionOptions={(context, options, onSelect) => {
            const optionById = new Map(
              options.map((option) => [option.id ?? option.value, option]),
            );

            return (
              <List
                size="sm"
                variant="plain"
                split={false}
                itemLayout="horizontal"
                maxHeight="13.8rem"
                renderItem={(item) => {
                  const target = optionById.get(item.id);
                  if (!target) return null;

                  return (
                    <button
                      type="button"
                      style={{ display: "grid", gridTemplateColumns: "auto minmax(0, 1fr)", alignItems: "center", gap: "0.58rem", width: "100%", minHeight: "2.4rem", padding: "0.12rem 0.42rem", border: 0, borderRadius: "0.58rem", background: "transparent", textAlign: "left", font: "inherit", cursor: "pointer" }}
                      onMouseDown={(event) => event.preventDefault()}
                      onClick={() => onSelect(target)}
                    >
                      <Avatar size="sm" name={String(target.label ?? target.value)} src={target.avatarSrc} />
                      <span style={{ display: "grid", minWidth: 0, gap: "0.12rem" }}>
                        <span style={{ overflow: "hidden", color: "var(--willa-comment-input-text)", fontSize: "0.87rem", fontWeight: 650, lineHeight: 1.35, textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                          {target.label}
                        </span>
                        <span style={{ overflow: "hidden", color: "var(--willa-comment-input-muted)", fontSize: "0.76rem", lineHeight: 1.35, textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                          {String(
                            target.role ||
                              target.team ||
                              "匹配: " + (context.query || "全部"),
                          )}
                        </span>
                      </span>
                    </button>
                  );
                }}
                items={options.map((option) => ({
                  id: option.id ?? option.value,
                  title: String(option.label ?? option.value),
                  description: context.query
                    ? context.query + " 相关"
                    : undefined,
                }))}
              />
            );
          }}
          mentionOptions={mentionOptions}
          mentionMaxSuggestions={30}
          onMentionQuery={(context) => {
            if (!context) return;
            console.log(context.query);
          }}
          footer="renderMentionOptions 用于彻底接管候选弹层"
        />;
      `,content:t.jsx(j,{})},{title:"提交状态",code:`
        <div style={inputFrameStyle}>
          <CommentInput
            loading
            defaultValue="正在提交这条评论..."
          />
          <CommentInput
            disabled
            placeholder="当前内容已锁定，不能继续评论。"
          />
        </div>;
      `,content:t.jsxs("div",{style:c,children:[t.jsx(s,{loading:!0,defaultValue:"正在提交这条评论..."}),t.jsx(s,{disabled:!0,placeholder:"当前内容已锁定，不能继续评论。"})]})}],propGroups:[{title:"基础能力",description:"CommentInput 的评论场景能力。包含输入、提交、引用、附加操作等行为。"},{title:"提及能力（透传至 MentionInput）",description:"以下属性来自 MentionInput。CommentInput 本身会 Omit 掉 beforeInput 与 mentionSources，仅复用其余提及能力。"}],props:[{name:"value",type:"string",group:"基础能力",description:"受控输入值。"},{name:"defaultValue",type:"string",defaultValue:'""',group:"基础能力",description:"非受控默认值。"},{name:"onValueChange",type:"(value: string) => void",group:"基础能力",description:"输入值变化回调。"},{name:"onSubmit",type:"(value: string, context: CommentInputSubmitContext) => void",group:"基础能力",description:"提交回调，context.clear 可清空输入。"},{name:"placeholder",type:"string",defaultValue:'"写下你的评论..."',group:"基础能力",description:"占位文案。"},{name:"submitLabel",type:"ReactNode",defaultValue:'"发布"',group:"基础能力",description:"提交按钮文案。"},{name:"submitIcon",type:"ReactNode",group:"基础能力",description:"提交按钮图标。"},{name:"submitShortcut",type:'"enter" | "mod-enter" | "none"',defaultValue:'"mod-enter"',group:"基础能力",description:"提交快捷键，默认使用 Cmd/Ctrl + Enter。"},{name:"allowEmptySubmit",type:"boolean",defaultValue:"false",group:"基础能力",description:"是否允许提交空内容。"},{name:"disabled",type:"boolean",defaultValue:"false",group:"基础能力",description:"是否禁用。"},{name:"loading",type:"boolean",defaultValue:"false",group:"基础能力",description:"是否处于提交中。"},{name:"minRows",type:"number",defaultValue:"3",group:"基础能力",description:"输入框最小行数，默认 3。"},{name:"maxRows",type:"number",group:"基础能力",description:"输入框最大行数。"},{name:"autoResize",type:"boolean",group:"基础能力",description:"是否按内容自动调整高度。"},{name:"size",type:'"md" | "lg"',group:"基础能力",description:"输入区域尺寸。"},{name:"maxLength",type:"number",group:"基础能力",description:"最大输入长度。"},{name:"autoFocus",type:"boolean",defaultValue:"false",group:"基础能力",description:"是否自动聚焦。"},{name:"avatarSrc",type:"string",group:"基础能力",description:"输入者头像地址。"},{name:"quote",type:"CommentInputQuote",group:"基础能力",description:"引用内容，包含被引用作者和正文内容。"},{name:"actions",type:"ReactNode",group:"基础能力",description:"输入区附加操作，适合接入业务自己的表情、附件或快捷操作。"},{name:"footer",type:"ReactNode",group:"基础能力",description:"底部说明。"},{name:"className",type:"string",group:"基础能力",description:"透传到根容器的 className。"},{name:"style",type:"CSSProperties",group:"基础能力",description:"透传给根容器的内联样式。"},{name:"slotClassNames",type:"InputPanelSlotClassNames",group:"基础能力",description:"传给输入面板内部插槽的 className 配置。"},{name:"textareaProps",type:"TextareaHTMLAttributes<HTMLTextAreaElement>",group:"基础能力",description:"透传到底层 textarea 的属性。"},{name:"mentionLabel",type:"ReactNode",defaultValue:'"@"',group:"提及能力（透传至 MentionInput）",description:"@ 提及入口的展示内容，默认 @。"},{name:"mentionTriggers",type:"Array<string>",defaultValue:'["@","#","$"]',group:"提及能力（透传至 MentionInput）",description:"提及触发字符集合，默认支持 @ / # / $。"},{name:"users",type:"Array<CommentInputMentionItem>",group:"提及能力（透传至 MentionInput）",description:"@ 提及入口的候选数据，默认来源之一。"},{name:"resources",type:"Array<CommentInputMentionItem>",group:"提及能力（透传至 MentionInput）",description:"# 提及入口的候选数据。"},{name:"variables",type:"Array<CommentInputMentionItem>",group:"提及能力（透传至 MentionInput）",description:"$ 提及入口的候选数据。"},{name:"mentionMaxSuggestions",type:"number",defaultValue:"6",group:"提及能力（透传至 MentionInput）",description:"候选项展示上限。"},{name:"mentionOptions",type:"Array<CommentInputMentionItem>",group:"提及能力（透传至 MentionInput）",description:"自定义提及候选项，优先级高于 users/resources/variables。"},{name:"onMentionQuery",type:"(context: CommentInputMentionContext | null) => void",group:"提及能力（透传至 MentionInput）",description:"每次提及输入变化回调，context 为空表示退出提及态。"},{name:"renderMentionOptions",type:"(context: { trigger: string; query: string; start: number; end: number }, options: Array<CommentInputMentionItem>, onSelect: (item: CommentInputMentionItem) => void) => ReactNode",group:"提及能力（透传至 MentionInput）",description:"可选覆盖默认提及候选展示，适配业务自己的弹层样式。"},{name:"mentionListProps",type:"CommentInputMentionListProps",group:"提及能力（透传至 MentionInput）",description:"默认提及列表复用 List 的参数，支持 virtualScroll、infiniteScroll、onItemsChange 等。"},{name:"renderMentionItem",type:"(context: { trigger: string; query: string; start: number; end: number }, item: CommentInputMentionItem, onSelect: (item: CommentInputMentionItem) => void) => ReactNode",group:"提及能力（透传至 MentionInput）",description:"可选覆盖单个提及项渲染，适配头像/机构/分组等业务信息。"},{name:"onMentionClick",type:"() => void",group:"提及能力（透传至 MentionInput）",description:"点击提及入口时触发，用于打开外部成员/资源选择器。"}]});export{P as default};
