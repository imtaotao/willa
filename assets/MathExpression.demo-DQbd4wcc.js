import{a_ as e}from"./index-CC59UgBO.js";import{M as a}from"./index-B8QL87gh.js";import{d as s}from"./defineDoc-CD9LX1OM.js";const i={display:"grid",gap:"1rem",maxWidth:"42rem"},t={display:"grid",gap:"0.75rem",width:"min(100%, 38rem)"};function l(){return e.jsxs("div",{style:i,children:[e.jsxs("p",{children:["内联公式 ",e.jsx(a,{value:"E = mc^2"})," 可以直接嵌入正文。"]}),e.jsx(a,{display:"block",value:"\\\\int_0^1 x^2\\\\,dx = \\\\frac{1}{3}"})]})}const r=s({id:"math-expression",name:"MathExpression",packageName:"willa/MathExpression",description:"用于在文档、说明和富文本内容中渲染 KaTeX 数学公式。",imports:[{name:"MathExpression",from:"willa/MathExpression"}],css:"willa/MathExpression.css",demo:{name:"MathExpressionPreview",component:l},code:`
    import { MathExpression } from "willa/MathExpression";
    import "willa/MathExpression.css";

    <div style={{ display: "grid", gap: "1rem" }}>
      <p>
        内联公式 <MathExpression value="E = mc^2" /> 可以直接嵌入正文。
      </p>
      <MathExpression
        display="block"
        value="\\\\int_0^1 x^2\\\\,dx = \\\\frac{1}{3}"
      />
    </div>;
  `,sections:[{title:"内联公式",code:`
        <p>
          当 <MathExpression value="a^2 + b^2 = c^2" /> 成立时，可以继续推导。
        </p>;
      `,content:e.jsxs("p",{children:["当 ",e.jsx(a,{value:"a^2 + b^2 = c^2"})," 成立时，可以继续推导。"]})},{title:"块级公式",code:`
        <MathExpression
          display="block"
          value="\\\\sum_{i=1}^{n} i = \\\\frac{n(n+1)}{2}"
        />;
      `,content:e.jsx(a,{display:"block",value:"\\\\sum_{i=1}^{n} i = \\\\frac{n(n+1)}{2}"})},{title:"KaTeX 配置",code:`
        <MathExpression
          display="block"
          value="f: \\\\RR \\\\to \\\\RR"
          options={{
            macros: {
              "\\\\RR": "\\\\mathbb{R}",
            },
          }}
        />;
      `,content:e.jsx(a,{display:"block",value:"f: \\\\RR \\\\to \\\\RR",options:{macros:{"\\RR":"\\mathbb{R}"}}})},{title:"错误回退",code:`
        <div style={{ display: "grid", gap: "0.75rem", width: "min(100%, 38rem)" }}>
          <MathExpression value="\\\\frac{1" fallback="公式解析失败" />
          <MathExpression display="block" value="\\\\sqrt{" fallback="块级公式解析失败" />
        </div>;
      `,content:e.jsxs("div",{style:t,children:[e.jsx(a,{value:"\\\\frac{1",fallback:"公式解析失败"}),e.jsx(a,{display:"block",value:"\\\\sqrt{",fallback:"块级公式解析失败"})]})}],props:[{name:"value",type:"string",description:"要渲染的 KaTeX 表达式，优先级高于 children。"},{name:"children",type:"ReactNode",description:"未传 value 时使用的表达式内容，适合简单字符串或数字。"},{name:"display",type:'"inline" | "block"',defaultValue:'"inline"',description:"公式展示模式，block 会使用 KaTeX 的 displayMode。"},{name:"options",type:"Omit<KatexOptions, 'displayMode'>",description:"透传给 KaTeX 的渲染配置，displayMode 由 display 控制。"},{name:"fallback",type:"ReactNode",description:"公式解析失败时展示的回退内容。"},{name:"className",type:"string",description:"可选的外层 className。"}]});export{r as default};
