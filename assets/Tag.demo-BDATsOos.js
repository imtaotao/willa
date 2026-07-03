import{d as e,l as t,p as n}from"./aidly.esm-bundler-DaTrP4tr.js";import{et as r,l as i,y as a}from"./react-icons.esm-mVdwEXuX.js";import{t as o}from"./Group-C-JhzSsC.js";import{t as s}from"./Stack-DwlHdG-i.js";import"./index-B2UoUlCX.js";import{t as c}from"./defineDoc-Cid5xIoZ.js";import"./style-D3eq1OTT.js";import{t as l}from"./Tag-R3pz2yYt.js";import"./style-aOUeSybD.js";var u=n(e(),1),d=t(),f=c({id:`tag`,name:`Tag`,packageName:`willa/Tag`,description:`用于内容分类、筛选条件和可移除标签；状态反馈优先使用 Badge，表单录入使用 TagInput。`,imports:[{name:`Tag`,from:`willa/Tag`},{name:`Group`,from:`willa/Group`},{name:`Stack`,from:`willa/Stack`}],css:`willa/Tag.css`,demo:{name:`Tag`,component:l,props:{tone:`info`,shape:`pill`},children:`文档`},code:`
    import { Tag } from "willa/Tag";
    import "willa/Tag.css";

    <Tag tone="info" shape="pill">
      文档
    </Tag>;
  `,sections:[{title:`基础用法`,code:`
        <Group gap="sm" wrap>
          <Tag>默认</Tag>
          <Tag tone="info">文档</Tag>
          <Tag tone="success">生产可用</Tag>
          <Tag tone="warning">需复核</Tag>
          <Tag tone="danger">高风险</Tag>
        </Group>;
      `,content:(0,d.jsxs)(o,{gap:`sm`,wrap:!0,children:[(0,d.jsx)(l,{children:`默认`}),(0,d.jsx)(l,{tone:`info`,children:`文档`}),(0,d.jsx)(l,{tone:`success`,children:`生产可用`}),(0,d.jsx)(l,{tone:`warning`,children:`需复核`}),(0,d.jsx)(l,{tone:`danger`,children:`高风险`})]})},{title:`视觉类型`,code:`
        <Stack gap="sm">
          <Group gap="sm" wrap>
            <Tag tone="info" variant="soft">
              Soft
            </Tag>
            <Tag tone="info" variant="outline">
              Outline
            </Tag>
            <Tag tone="info" variant="solid">
              Solid
            </Tag>
          </Group>
          <Group gap="sm" wrap>
            <Tag shape="rounded">圆角</Tag>
            <Tag shape="pill">胶囊</Tag>
            <Tag size="sm">小尺寸</Tag>
            <Tag size="md">中尺寸</Tag>
          </Group>
        </Stack>;
      `,content:(0,d.jsxs)(s,{gap:`sm`,children:[(0,d.jsxs)(o,{gap:`sm`,wrap:!0,children:[(0,d.jsx)(l,{tone:`info`,variant:`soft`,children:`Soft`}),(0,d.jsx)(l,{tone:`info`,variant:`outline`,children:`Outline`}),(0,d.jsx)(l,{tone:`info`,variant:`solid`,children:`Solid`})]}),(0,d.jsxs)(o,{gap:`sm`,wrap:!0,children:[(0,d.jsx)(l,{shape:`rounded`,children:`圆角`}),(0,d.jsx)(l,{shape:`pill`,children:`胶囊`}),(0,d.jsx)(l,{size:`sm`,children:`小尺寸`}),(0,d.jsx)(l,{size:`md`,children:`中尺寸`})]})]})},{title:`图标和选中态`,code:`
        import {
          CheckCircledIcon,
          Component1Icon,
          ReaderIcon,
        } from "@radix-ui/react-icons";

        <Group gap="sm" wrap>
          <Tag tone="info" icon={<ReaderIcon />}>
            文档
          </Tag>
          <Tag tone="success" icon={<CheckCircledIcon />}>
            已采纳
          </Tag>
          <Tag tone="neutral" trailingIcon={<Component1Icon />}>
            组件库
          </Tag>
          <Tag tone="info" selected>
            当前筛选
          </Tag>
        </Group>;
      `,content:(0,d.jsxs)(o,{gap:`sm`,wrap:!0,children:[(0,d.jsx)(l,{tone:`info`,icon:(0,d.jsx)(r,{}),children:`文档`}),(0,d.jsx)(l,{tone:`success`,icon:(0,d.jsx)(i,{}),children:`已采纳`}),(0,d.jsx)(l,{tone:`neutral`,trailingIcon:(0,d.jsx)(a,{}),children:`组件库`}),(0,d.jsx)(l,{tone:`info`,selected:!0,children:`当前筛选`})]})},{title:`可移除标签`,code:`
        const [tags, setTags] = useState(["React", "MDX", "AI 内容"]);

        <Group gap="sm" wrap>
          {tags.map((tag) => (
            <Tag
              key={tag}
              tone="info"
              shape="pill"
              close={{
                ariaLabel: \`移除 \${tag}\`,
                onClose: () =>
                  setTags((currentTags) =>
                    currentTags.filter((currentTag) => currentTag !== tag),
                  ),
              }}
            >
              {tag}
            </Tag>
          ))}
        </Group>;
      `,content:(0,d.jsx)(()=>{let[e,t]=(0,u.useState)([`React`,`MDX`,`AI 内容`]);return(0,d.jsxs)(o,{gap:`sm`,wrap:!0,children:[e.map(e=>(0,d.jsx)(l,{tone:`info`,shape:`pill`,close:{ariaLabel:`移除 ${e}`,onClose:()=>t(t=>t.filter(t=>t!==e))},children:e},e)),e.length===0?(0,d.jsx)(l,{tone:`neutral`,children:`暂无标签`}):null]})},{})}],props:[{name:`variant`,type:`"soft" | "outline" | "solid"`,defaultValue:`"soft"`,description:`标签的视觉类型。`},{name:`tone`,type:`"neutral" | "info" | "success" | "warning" | "danger"`,defaultValue:`"neutral"`,description:`标签的语义颜色。`},{name:`size`,type:`"sm" | "md"`,defaultValue:`"md"`,description:`标签尺寸。`},{name:`shape`,type:`"rounded" | "pill"`,defaultValue:`"rounded"`,description:`标签圆角形态。`},{name:`icon`,type:`ReactNode`,description:`展示在文字前的图标。`},{name:`trailingIcon`,type:`ReactNode`,description:`展示在文字后的图标。`},{name:`selected`,type:`boolean`,defaultValue:`false`,description:`是否展示选中态，用于筛选条件或当前分类。`},{name:`close`,type:`boolean | { ariaLabel?: string; disabled?: boolean; onClose?: (event: MouseEvent<HTMLButtonElement>) => void }`,defaultValue:`false`,description:`是否显示移除按钮，传入对象时可配置关闭行为。`},{name:`className`,type:`string`,description:`可选的外层 className。`},{name:`children`,type:`ReactNode`,description:`标签内容。`}]});export{f as default};