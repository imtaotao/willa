import{P as e}from"./index-DG0MuD8a.js";import{d as r}from"./defineDoc-BM8EvMRd.js";import"./index-C-tGzq2u.js";const t=[["明月几时有？把酒问青天。","不知天上宫阙，今夕是何年。","我欲乘风归去，又恐琼楼玉宇，高处不胜寒。","起舞弄清影，何似在人间。"],["转朱阁，低绮户，照无眠。","不应有恨，何事长向别时圆？","人有悲欢离合，月有阴晴圆缺，此事古难全。","但愿人长久，千里共婵娟。"]],m=r({id:"poem",name:"Poem",packageName:"willa/Poem",description:"带标题、署名、可选序言和分节正文的诗歌块。",imports:[{name:"Poem",from:"willa/Poem"}],css:"willa/Poem.css",demo:{name:"Poem",component:e,props:{title:"水调歌头·明月几时有",dynasty:"宋",author:"苏轼",preface:"丙辰中秋，欢饮达旦，大醉，作此篇，兼怀子由。",lines:t,width:"36rem"}},code:`
    import { Poem } from "willa/Poem";
    import "willa/Poem.css";

    const lines = [
      ["明月几时有？把酒问青天。", "不知天上宫阙，今夕是何年。"],
      ["人有悲欢离合，月有阴晴圆缺，此事古难全。", "但愿人长久，千里共婵娟。"],
    ];

    <Poem
      title="水调歌头·明月几时有"
      dynasty="宋"
      author="苏轼"
      preface="丙辰中秋，欢饮达旦，大醉，作此篇，兼怀子由。"
      lines={lines}
      width="36rem"
    />;
  `,props:[{name:"title",type:"string",required:!0,description:"诗歌标题。"},{name:"author",type:"string",required:!0,description:"作者名称。"},{name:"dynasty",type:"string",description:"作者朝代，会展示在作者名前。"},{name:"preface",type:"string | Array<string>",description:"正文前的小序或序言。"},{name:"lines",type:"Array<string | Array<string>>",required:!0,description:"按节分组的诗歌文本。"},{name:"width",type:"number | string",description:"诗歌块宽度，数字会按 px 处理，默认 40rem。"},{name:"className",type:"string",description:"可选的外层 className。"}]});export{m as default};
