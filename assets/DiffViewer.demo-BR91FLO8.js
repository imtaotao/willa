import{aA as _,ay as r,h as M,m as R,ap as q,am as N,at as W,aB as j}from"./index-vVHMmPWZ.js";import{d as z}from"./defineDoc-CK669M_K.js";class B{diff(e,n,t={}){let o;typeof t=="function"?(o=t,t={}):"callback"in t&&(o=t.callback);const s=this.castInput(e,t),a=this.castInput(n,t),f=this.removeEmpty(this.tokenize(s,t)),d=this.removeEmpty(this.tokenize(a,t));return this.diffWithOptionsObj(f,d,t,o)}diffWithOptionsObj(e,n,t,o){var s;const a=u=>{if(u=this.postProcess(u,t),o){setTimeout(function(){o(u)},0);return}else return u},f=n.length,d=e.length;let l=1,c=f+d;t.maxEditLength!=null&&(c=Math.min(c,t.maxEditLength));const w=(s=t.timeout)!==null&&s!==void 0?s:1/0,y=Date.now()+w,p=[{oldPos:-1,lastComponent:void 0}];let h=this.extractCommon(p[0],n,e,0,t);if(p[0].oldPos+1>=d&&h+1>=f)return a(this.buildValues(p[0].lastComponent,n,e));let g=-1/0,C=1/0;const x=()=>{for(let u=Math.max(g,-l);u<=Math.min(C,l);u+=2){let v;const L=p[u-1],m=p[u+1];L&&(p[u-1]=void 0);let b=!1;if(m){const P=m.oldPos-u;b=m&&0<=P&&P<f}const D=L&&L.oldPos+1<d;if(!b&&!D){p[u]=void 0;continue}if(!D||b&&L.oldPos<m.oldPos?v=this.addToPath(m,!0,!1,0,t):v=this.addToPath(L,!1,!0,1,t),h=this.extractCommon(v,n,e,u,t),v.oldPos+1>=d&&h+1>=f)return a(this.buildValues(v.lastComponent,n,e))||!0;p[u]=v,v.oldPos+1>=d&&(C=Math.min(C,u-1)),h+1>=f&&(g=Math.max(g,u+1))}l++};if(o)(function u(){setTimeout(function(){if(l>c||Date.now()>y)return o(void 0);x()||u()},0)})();else for(;l<=c&&Date.now()<=y;){const u=x();if(u)return u}}addToPath(e,n,t,o,s){const a=e.lastComponent;return a&&!s.oneChangePerToken&&a.added===n&&a.removed===t?{oldPos:e.oldPos+o,lastComponent:{count:a.count+1,added:n,removed:t,previousComponent:a.previousComponent}}:{oldPos:e.oldPos+o,lastComponent:{count:1,added:n,removed:t,previousComponent:a}}}extractCommon(e,n,t,o,s){const a=n.length,f=t.length;let d=e.oldPos,l=d-o,c=0;for(;l+1<a&&d+1<f&&this.equals(t[d+1],n[l+1],s);)l++,d++,c++,s.oneChangePerToken&&(e.lastComponent={count:1,previousComponent:e.lastComponent,added:!1,removed:!1});return c&&!s.oneChangePerToken&&(e.lastComponent={count:c,previousComponent:e.lastComponent,added:!1,removed:!1}),e.oldPos=d,l}equals(e,n,t){return t.comparator?t.comparator(e,n):e===n||!!t.ignoreCase&&e.toLowerCase()===n.toLowerCase()}removeEmpty(e){const n=[];for(let t=0;t<e.length;t++)e[t]&&n.push(e[t]);return n}castInput(e,n){return e}tokenize(e,n){return Array.from(e)}join(e){return e.join("")}postProcess(e,n){return e}get useLongestToken(){return!1}buildValues(e,n,t){const o=[];let s;for(;e;)o.push(e),s=e.previousComponent,delete e.previousComponent,e=s;o.reverse();const a=o.length;let f=0,d=0,l=0;for(;f<a;f++){const c=o[f];if(c.removed)c.value=this.join(t.slice(l,l+c.count)),l+=c.count;else{if(!c.added&&this.useLongestToken){let w=n.slice(d,d+c.count);w=w.map(function(y,p){const h=t[l+p];return h.length>y.length?h:y}),c.value=this.join(w)}else c.value=this.join(n.slice(d,d+c.count));d+=c.count,c.added||(l+=c.count)}}return o}}class O extends B{constructor(){super(...arguments),this.tokenize=H}equals(e,n,t){return t.ignoreWhitespace?((!t.newlineIsToken||!e.includes(`
`))&&(e=e.trim()),(!t.newlineIsToken||!n.includes(`
`))&&(n=n.trim())):t.ignoreNewlineAtEof&&!t.newlineIsToken&&(e.endsWith(`
`)&&(e=e.slice(0,-1)),n.endsWith(`
`)&&(n=n.slice(0,-1))),super.equals(e,n,t)}}const F=new O;function $(i,e,n){return F.diff(i,e,n)}function H(i,e){e.stripTrailingCr&&(i=i.replace(/\r\n/g,`
`));const n=[],t=i.split(/(\n|\r\n)/);t[t.length-1]||t.pop();for(let o=0;o<t.length;o++){const s=t[o];o%2&&!e.newlineIsToken?n[n.length-1]+=s:n.push(s)}return n}function k(i){const{before:e,after:n,language:t="text",title:o,beforeLabel:s="Before",afterLabel:a="After",variant:f="unified",showLineNumbers:d=!0,contextLines:l,copyable:c=!0,copiedDuration:w=300,className:y,style:p,...h}=i,[g,C]=_.useState("idle"),x=_.useMemo(()=>J(e,n),[n,e]),u=_.useMemo(()=>Q(x),[x]),v=_.useMemo(()=>X(x,l),[l,x]),L=_.useMemo(()=>Y(x,l),[l,x]);return _.useEffect(()=>{if(g==="idle")return;const m=window.setTimeout(()=>C("idle"),w);return()=>window.clearTimeout(m)},[w,g]),r.jsxs("div",{...h,className:N("willa-diff-viewer",`willa-diff-viewer--${f}`,!d&&"willa-diff-viewer--no-line-numbers",y),style:p,children:[r.jsxs("div",{className:"willa-diff-viewer__header",children:[r.jsxs("div",{className:"willa-diff-viewer__heading",children:[o?r.jsx("div",{className:"willa-diff-viewer__title",children:o}):null,r.jsxs("div",{className:"willa-diff-viewer__meta",children:[r.jsxs("span",{className:"willa-diff-viewer__stat willa-diff-viewer__stat--insert",children:["+",u.insertions]}),r.jsxs("span",{className:"willa-diff-viewer__stat willa-diff-viewer__stat--delete",children:["-",u.deletions]}),r.jsx("span",{className:"willa-diff-viewer__language",children:t.toLowerCase()})]})]}),c?r.jsxs("button",{type:"button",className:N("willa-diff-viewer__copy",g==="copied"&&"willa-diff-viewer__copy--copied"),onClick:m=>{m.detail>0&&m.currentTarget.blur(),(async()=>{C("idle");const b=await q(n);C(b?"copied":"failed")})()},children:[g==="copied"?r.jsx(M,{}):r.jsx(R,{}),r.jsx("span",{children:g==="copied"?"已复制":"复制新版"})]}):null]}),f==="split"?r.jsxs("div",{className:"willa-diff-viewer__split-labels",children:[r.jsx("div",{children:s}),r.jsx("div",{children:a})]}):null,r.jsx("div",{className:"willa-diff-viewer__body",role:"table",children:f==="split"?L.map((m,b)=>r.jsx(G,{row:m,language:t,showLineNumbers:d},b)):v.map((m,b)=>r.jsx(U,{row:m,language:t,showLineNumbers:d},b))})]})}const U=i=>{if(i.row.type==="omitted")return r.jsx(T,{count:i.row.count});const{line:e}=i.row,n=e.type==="insert"?"+":e.type==="delete"?"-":" ";return r.jsxs("div",{className:N("willa-diff-viewer__row",`willa-diff-viewer__row--${e.type}`),role:"row",children:[i.showLineNumbers?r.jsx("span",{className:"willa-diff-viewer__line-number",children:e.oldLine??""}):null,i.showLineNumbers?r.jsx("span",{className:"willa-diff-viewer__line-number",children:e.newLine??""}):null,r.jsx("span",{className:"willa-diff-viewer__marker",children:n}),r.jsx(A,{text:e.text,language:i.language})]})},G=i=>i.row.type==="omitted"?r.jsx(T,{count:i.row.count}):r.jsxs("div",{className:"willa-diff-viewer__split-row",role:"row",children:[r.jsx(V,{side:i.row.oldSide,language:i.language,showLineNumbers:i.showLineNumbers}),r.jsx(V,{side:i.row.newSide,language:i.language,showLineNumbers:i.showLineNumbers})]}),V=i=>{const e=i.side.type==="insert"?"+":i.side.type==="delete"?"-":" ";return r.jsxs("div",{className:N("willa-diff-viewer__split-cell",`willa-diff-viewer__split-cell--${i.side.type}`),role:"cell",children:[i.showLineNumbers?r.jsx("span",{className:"willa-diff-viewer__line-number",children:i.side.line??""}):null,r.jsx("span",{className:"willa-diff-viewer__marker",children:e}),r.jsx(A,{text:i.side.text,language:i.language})]})},T=i=>r.jsx("div",{className:"willa-diff-viewer__omitted",role:"row",children:r.jsxs("span",{children:["省略 ",i.count," 行未变化内容"]})}),A=i=>{const{html:e}=W(i.text||" ",i.language);return r.jsx("code",{className:"willa-diff-viewer__code hljs",dangerouslySetInnerHTML:{__html:e||" "}})},J=(i,e)=>{const n=$(i,e),t=[];let o=1,s=1;if(n.length===0)return[{type:"equal",text:"",oldLine:o,newLine:s}];for(const a of n){const f=a.added?"insert":a.removed?"delete":"equal";for(const d of K(a.value)){if(f==="insert"){t.push({type:f,text:d,newLine:s}),s+=1;continue}if(f==="delete"){t.push({type:f,text:d,oldLine:o}),o+=1;continue}t.push({type:f,text:d,oldLine:o,newLine:s}),o+=1,s+=1}}return t},K=i=>i?(i.endsWith(`
`)?i.slice(0,-1):i).split(`
`):[],Q=i=>i.reduce((e,n)=>(n.type==="insert"&&(e.insertions+=1),n.type==="delete"&&(e.deletions+=1),e),{deletions:0,insertions:0}),X=(i,e)=>E(i,e).map(n=>"count"in n?{type:"omitted",count:n.count}:{type:"line",line:n}),Y=(i,e)=>{const n=E(i,e),t=[];let o=0;for(;o<n.length;){const s=n[o];if("count"in s){t.push({type:"omitted",count:s.count}),o+=1;continue}if(s.type==="equal"){t.push({type:"line",oldSide:{type:"equal",text:s.text,line:s.oldLine},newSide:{type:"equal",text:s.text,line:s.newLine}}),o+=1;continue}const a=[],f=[];for(;o<n.length;){const l=n[o];if("count"in l||l.type==="equal")break;l.type==="delete"?a.push(l):f.push(l),o+=1}const d=Math.max(a.length,f.length);for(let l=0;l<d;l+=1){const c=a[l],w=f[l];t.push({type:"line",oldSide:c?{type:"delete",text:c.text,line:c.oldLine}:{type:"empty",text:""},newSide:w?{type:"insert",text:w.text,line:w.newLine}:{type:"empty",text:""}})}}return t},E=(i,e)=>{if(e===void 0||e<0)return i;const n=i.map((a,f)=>a.type==="equal"?-1:f).filter(a=>a>=0);if(n.length===0)return i;const t=new Set;for(const a of n){const f=Math.max(0,a-e),d=Math.min(i.length-1,a+e);for(let l=f;l<=d;l+=1)t.add(l)}const o=[];let s=0;return i.forEach((a,f)=>{if(!t.has(f)){s+=1;return}s>0&&(o.push({count:s}),s=0),o.push(a)}),s>0&&o.push({count:s}),o},I=j(`
  export function resolveStatus(task: Task) {
    if (task.error) {
      return "failed";
    }

    if (task.done) {
      return "done";
    }

    return "pending";
  }
`),S=j(`
  export function resolveStatus(task: Task) {
    if (task.blocked) {
      return "blocked";
    }

    if (task.error) {
      return "failed";
    }

    if (task.done) {
      return "completed";
    }

    return "running";
  }
`),Z=j(`
  export const navigation = {
    compact: false,
    groups: ["AI", "Content", "Form"],
    showCounts: false,
  };
`),ee=j(`
  export const navigation = {
    compact: true,
    groups: ["AI", "Content", "Form", "Layout"],
    showCounts: true,
    showLocalName: true,
  };
`),ie=z({id:"diff-viewer",name:"DiffViewer",packageName:"willa/DiffViewer",description:"用于展示代码、配置或文本变更的差异视图。",imports:[{name:"DiffViewer",from:"willa/DiffViewer"}],css:"willa/DiffViewer.css",demo:{name:"DiffViewer",component:k,props:{title:"状态解析逻辑",before:I,after:S,language:"ts",contextLines:2}},code:j(`
    import { DiffViewer } from "willa/DiffViewer";
    import "willa/DiffViewer.css";

    const beforeCode = \`
      export function resolveStatus(task: Task) {
        if (task.error) {
          return "failed";
        }

        if (task.done) {
          return "done";
        }

        return "pending";
      }
    \`;

    const afterCode = \`
      export function resolveStatus(task: Task) {
        if (task.blocked) {
          return "blocked";
        }

        if (task.error) {
          return "failed";
        }

        if (task.done) {
          return "completed";
        }

        return "running";
      }
    \`;

    <DiffViewer
      title="状态解析逻辑"
      before={beforeCode}
      after={afterCode}
      language="ts"
      contextLines={2}
    />
  `),props:[{name:"before *",type:"string",description:"变更前的文本内容。"},{name:"after *",type:"string",description:"变更后的文本内容。"},{name:"language",type:"string",defaultValue:'"text"',description:"代码语言，用于语法高亮和语言标记。"},{name:"title",type:"ReactNode",description:"差异视图标题。"},{name:"beforeLabel",type:"ReactNode",defaultValue:'"Before"',description:"左右对比模式下左侧标题。"},{name:"afterLabel",type:"ReactNode",defaultValue:'"After"',description:"左右对比模式下右侧标题。"},{name:"variant",type:'"unified" | "split"',defaultValue:'"unified"',description:"差异展示方式。"},{name:"showLineNumbers",type:"boolean",defaultValue:"true",description:"是否显示新旧行号。"},{name:"contextLines",type:"number",description:"每个变更周围保留的上下文行数。不传时展示全部未变化内容。"},{name:"copyable",type:"boolean",defaultValue:"true",description:"是否显示复制新版内容的按钮。"},{name:"copiedDuration",type:"number",defaultValue:"300",description:"复制成功反馈持续时间，单位为毫秒。"},{name:"...rootProps",type:"ComponentPropsWithoutRef<'div'>",description:"透传给外层容器的原生属性，例如 className、id、style。"}],sections:[{title:"左右对比",code:`
        const configBefore = \`
          export const navigation = {
            compact: false,
            groups: ["AI", "Content", "Form"],
            showCounts: false,
          };
        \`;

        const configAfter = \`
          export const navigation = {
            compact: true,
            groups: ["AI", "Content", "Form", "Layout"],
            showCounts: true,
            showLocalName: true,
          };
        \`;

        <DiffViewer
          title="导航配置"
          beforeLabel="当前配置"
          afterLabel="调整后"
          before={configBefore}
          after={configAfter}
          language="ts"
          variant="split"
        />
      `,content:r.jsx(k,{title:"导航配置",beforeLabel:"当前配置",afterLabel:"调整后",before:Z,after:ee,language:"ts",variant:"split"})},{title:"折叠上下文",code:`
        const beforeCode = \`
          export function resolveStatus(task: Task) {
            if (task.error) {
              return "failed";
            }

            if (task.done) {
              return "done";
            }

            return "pending";
          }
        \`;

        const afterCode = \`
          export function resolveStatus(task: Task) {
            if (task.blocked) {
              return "blocked";
            }

            if (task.error) {
              return "failed";
            }

            if (task.done) {
              return "completed";
            }

            return "running";
          }
        \`;

        <DiffViewer
          title="只保留变更附近内容"
          before={beforeCode}
          after={afterCode}
          language="ts"
          contextLines={1}
        />
      `,content:r.jsx(k,{title:"只保留变更附近内容",before:I,after:S,language:"ts",contextLines:1})},{title:"无行号",code:`
        <DiffViewer
          title="文案调整"
          before="AI 正在处理你的任务。"
          after="Willa AI 正在整理上下文并生成建议。"
          showLineNumbers={false}
          copyable={false}
        />
      `,content:r.jsx(k,{title:"文案调整",before:"AI 正在处理你的任务。",after:"Willa AI 正在整理上下文并生成建议。",showLineNumbers:!1,copyable:!1})}]});export{ie as default};
