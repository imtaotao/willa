import{l as e}from"./aidly.esm-bundler-DaTrP4tr.js";import{E as t,tt as n,u as r,x as i}from"./react-icons.esm-mVdwEXuX.js";import{t as a}from"./IconButton-ClvF4Rkx.js";import{t as o}from"./Button-O1aY2iqB.js";import"./index-B2UoUlCX.js";import"./style-B00R6KjV.js";import{t as s}from"./defineDoc-Cid5xIoZ.js";import{t as c}from"./style-C-Igh_7N.js";var l=e(),u=s({id:`form-actions`,name:`FormActions`,category:`form`,packageName:`willa/FormActions`,description:`用于表单底部提交、取消和辅助操作的布局组件。`,imports:[{name:`FormActions`,from:`willa/FormActions`}],css:`willa/FormActions.css`,demo:{name:`FormActions`,component:c,props:{gap:`md`},children:[{name:`Button`,component:o,props:{variant:`ghost`},children:`取消`},{name:`Button`,component:o,props:{type:`submit`},children:`保存`}]},code:`
    import { Button } from "willa/Button";
    import { FormActions } from "willa/FormActions";
    import "willa/Button.css";
    import "willa/FormActions.css";

    <FormActions gap="md">
      <Button variant="ghost">取消</Button>
      <Button type="submit">保存</Button>
    </FormActions>;
  `,sections:[{title:`对齐方式`,code:`
        <div style={stackStyle}>
          <FormActions align="start">
            <Button size="sm">保存</Button>
            <Button size="sm" variant="ghost">
              取消
            </Button>
          </FormActions>
          <FormActions align="between">
            <Button size="sm" variant="ghost">
              删除
            </Button>
            <Button size="sm">保存</Button>
          </FormActions>
        </div>;
      `,content:(0,l.jsxs)(`div`,{style:{display:`grid`,gap:`1rem`,maxWidth:`42rem`},children:[(0,l.jsxs)(c,{align:`start`,children:[(0,l.jsx)(o,{size:`sm`,children:`保存`}),(0,l.jsx)(o,{size:`sm`,variant:`ghost`,children:`取消`})]}),(0,l.jsxs)(c,{align:`between`,children:[(0,l.jsx)(o,{size:`sm`,variant:`ghost`,children:`删除`}),(0,l.jsx)(o,{size:`sm`,children:`保存`})]})]})},{title:`图标操作`,code:`
        <FormActions align="start" gap="xs">
          <IconButton
            icon={<ReloadIcon />}
            ariaLabel="重新加载"
            size="sm"
            variant="ghost"
          />
          <IconButton
            icon={<DownloadIcon />}
            ariaLabel="下载"
            size="sm"
            variant="ghost"
          />
          <IconButton icon={<CheckIcon />} ariaLabel="确认" size="sm" variant="ghost" />
          <IconButton
            icon={<Cross2Icon />}
            ariaLabel="关闭"
            size="sm"
            variant="ghost"
          />
        </FormActions>;
      `,content:(0,l.jsxs)(c,{align:`start`,gap:`xs`,children:[(0,l.jsx)(a,{icon:(0,l.jsx)(n,{}),ariaLabel:`重新加载`,size:`sm`,variant:`ghost`}),(0,l.jsx)(a,{icon:(0,l.jsx)(t,{}),ariaLabel:`下载`,size:`sm`,variant:`ghost`}),(0,l.jsx)(a,{icon:(0,l.jsx)(r,{}),ariaLabel:`确认`,size:`sm`,variant:`ghost`}),(0,l.jsx)(a,{icon:(0,l.jsx)(i,{}),ariaLabel:`关闭`,size:`sm`,variant:`ghost`})]})},{title:`纵向布局`,code:`
        <FormActions direction="column">
          <Button>确认提交</Button>
          <Button variant="outline">稍后再说</Button>
        </FormActions>;
      `,content:(0,l.jsxs)(c,{direction:`column`,children:[(0,l.jsx)(o,{children:`确认提交`}),(0,l.jsx)(o,{variant:`outline`,children:`稍后再说`})]})}],props:[{name:`children`,type:`ReactNode`,required:!0,description:`操作按钮或自定义操作内容。`},{name:`align`,type:`"start" | "end" | "between"`,defaultValue:`"end"`,description:`横向对齐方式。`},{name:`direction`,type:`"row" | "column"`,defaultValue:`"row"`,description:`排列方向。`},{name:`gap`,type:`"xs" | "sm" | "md"`,defaultValue:`"sm"`,description:`操作项之间的间距。`},{name:`sticky`,type:`boolean`,defaultValue:`false`,description:`吸附在滚动容器底部。`}]});export{u as default};