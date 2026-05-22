import{w as d,u as p,v as l}from"./index-BqG3myEA.js";function D(n){return{id:n.id,name:n.name,category:n.category??"content",packageName:n.packageName,description:n.description,preview:g(n.demo),code:n.code?d(n.code):h(n),props:n.props,sections:n.sections}}const g=n=>{const r=Array.isArray(n.children)?n.children.map((t,e)=>p.jsx(A,{element:t},`${t.name}-${e}`)):n.children;return l.createElement(n.component,n.props,r)},A=({element:n})=>p.jsx(p.Fragment,{children:g(n)}),h=n=>{const r=n.imports.map(t=>`import { ${t.name} } from "${t.from}";`).join(`
`);return d([r,`import "${n.css}";`,"",j(n.demo,0)].join(`
`))},j=(n,r)=>{const t="  ".repeat(r),e="  ".repeat(r+1),o=Object.entries(n.props??{}).map(([c,m])=>x(c,m,r+1)),s=n.children;if(!s||Array.isArray(s)&&s.length===0)return o.length===0?`${t}<${n.name} />`:[`${t}<${n.name}`,...o,`${t}/>`].join(`
`);const a=o.length===0?`${t}<${n.name}>`:[`${t}<${n.name}`,...o,`${t}>`].join(`
`),i=Array.isArray(s)?s.map(c=>j(c,r+1)).join(`
`):`${e}${String(s)}`;return[a,i,`${t}</${n.name}>`].join(`
`)},x=(n,r,t)=>{const e="  ".repeat(t);if(typeof r=="string")return`${e}${n}="${L(r)}"`;if(typeof r=="boolean")return r?`${e}${n}`:`${e}${n}={false}`;if(typeof r=="number")return`${e}${n}={${r}}`;const o=O(r,t);return`${e}${n}={${o}}`},O=(n,r)=>f(n,r),f=(n,r)=>{if(Array.isArray(n)){if(n.length===0)return"[]";const e="  ".repeat(r),o="  ".repeat(r+1);return["[",...n.map(a=>{const i=f(a,r+1);return E(i,o)}),`${e}]`].join(`
`)}if(S(n)){const e=Object.entries(n);if(e.length===0)return"{}";const o="  ".repeat(r),s="  ".repeat(r+1);return["{",...e.map(([i,c])=>{const m=f(c,r+1),[y,...b]=m.split(`
`),$=[`${s}${i}: ${y}`,...b];return $[$.length-1]+=",",$.join(`
`)}),`${o}}`].join(`
`)}if(typeof n=="string")return JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean"||n==null)return String(n);const t=JSON.stringify(n);return t||String(n)},E=(n,r,t)=>{const e=n.split(`
`);return e[0]=`${r}${e[0]}`,e[e.length-1]+=",",e.join(`
`)},S=n=>typeof n=="object"&&n!==null&&Object.getPrototypeOf(n)===Object.prototype,L=n=>n.replace(/&/g,"&amp;").replace(/"/g,"&quot;");export{D as d};
