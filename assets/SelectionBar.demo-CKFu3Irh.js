import{aY as e,ap as o,i as t,ax as c,a_ as l,I as i,c as r,aD as d}from"./index-BQag47pT.js";/* empty css              */import{d as u}from"./defineDoc-E_6xywpe.js";const m=()=>{const[s,n]=l.useState(3),a=18;return e.jsx(o,{selectedCount:s,totalCount:a,description:"当前筛选结果中还有未选中的文件。",onSelectAll:()=>n(a),onClear:()=>n(0),actions:e.jsxs(e.Fragment,{children:[e.jsx(t,{size:"sm",variant:"soft",icon:e.jsx(i,{}),children:"下载"}),e.jsx(t,{size:"sm",variant:"outline",icon:e.jsx(r,{}),children:"归档"})]})})},S=u({id:"selection-bar",name:"SelectionBar",packageName:"willa/SelectionBar",description:"用于列表、表格、文件和卡片多选后的批量操作反馈。",imports:[{name:"Button",from:"willa/Button"},{name:"SelectionBar",from:"willa/SelectionBar"},{name:"Stack",from:"willa/Stack"}],css:"willa/SelectionBar.css",demo:{name:"SelectionBar",component:o,props:{selectedCount:3,totalCount:24,description:"已选项目会参与接下来的批量操作。",actions:e.jsxs(e.Fragment,{children:[e.jsx(t,{size:"sm",variant:"soft",icon:e.jsx(i,{}),children:"下载"}),e.jsx(t,{size:"sm",variant:"outline",icon:e.jsx(d,{}),children:"删除"})]}),onClear:()=>{}}},code:`
    import { DownloadIcon, TrashIcon } from "@radix-ui/react-icons";
    import { Button } from "willa/Button";
    import { SelectionBar } from "willa/SelectionBar";
    import "willa/Button.css";
    import "willa/SelectionBar.css";

    <SelectionBar
      selectedCount={3}
      totalCount={24}
      description="已选项目会参与接下来的批量操作。"
      actions={
        <>
          <Button size="sm" variant="soft" icon={<DownloadIcon />}>
            下载
          </Button>
          <Button size="sm" variant="outline" icon={<TrashIcon />}>
            删除
          </Button>
        </>
      }
      onClear={() => undefined}
    />;
  `,sections:[{title:"全选和清空",code:`
        import { useState } from "react";
        import { ArchiveIcon, DownloadIcon } from "@radix-ui/react-icons";

        const Demo = () => {
          const [selectedCount, setSelectedCount] = useState(3);
          const totalCount = 18;

          return (
            <SelectionBar
              selectedCount={selectedCount}
              totalCount={totalCount}
              description="当前筛选结果中还有未选中的文件。"
              onSelectAll={() => setSelectedCount(totalCount)}
              onClear={() => setSelectedCount(0)}
              actions={
                <>
                  <Button size="sm" variant="soft" icon={<DownloadIcon />}>
                    下载
                  </Button>
                  <Button size="sm" variant="outline" icon={<ArchiveIcon />}>
                    归档
                  </Button>
                </>
              }
            />
          );
        };
      `,content:e.jsx(m,{})},{title:"紧凑模式",code:`
        <SelectionBar
          compact
          selectedCount={2}
          label="已选中 2 条评论"
          actions={
            <Button size="sm" variant="soft">
              标记已读
            </Button>
          }
          onClear={() => undefined}
        />;
      `,content:e.jsx(o,{compact:!0,selectedCount:2,label:"已选中 2 条评论",actions:e.jsx(t,{size:"sm",variant:"soft",children:"标记已读"}),onClear:()=>{}})},{title:"粘性操作区",code:`
        <SelectionBar
          sticky
          selectedCount={6}
          totalCount={42}
          description="适合表格顶部、文件列表顶部和卡片墙顶部。"
          actions={
            <>
              <Button size="sm" variant="soft">
                移动到分组
              </Button>
              <Button size="sm" variant="outline">
                批量设置标签
              </Button>
            </>
          }
          onSelectAll={() => undefined}
          onClear={() => undefined}
        />;
      `,content:e.jsx(o,{sticky:!0,selectedCount:6,totalCount:42,description:"适合表格顶部、文件列表顶部和卡片墙顶部。",actions:e.jsxs(e.Fragment,{children:[e.jsx(t,{size:"sm",variant:"soft",children:"移动到分组"}),e.jsx(t,{size:"sm",variant:"outline",children:"批量设置标签"})]}),onSelectAll:()=>{},onClear:()=>{}})},{title:"不同对齐方式",code:`
        <Stack gap="sm">
          <SelectionBar
            align="start"
            selectedCount={1}
            label="已选中当前文档"
            actions={<Button size="sm">打开</Button>}
          />
          <SelectionBar
            align="end"
            selectedCount={4}
            label="批量处理 4 个任务"
            actions={<Button size="sm">执行</Button>}
          />
        </Stack>;
      `,content:e.jsxs(c,{gap:"sm",children:[e.jsx(o,{align:"start",selectedCount:1,label:"已选中当前文档",actions:e.jsx(t,{size:"sm",children:"打开"})}),e.jsx(o,{align:"end",selectedCount:4,label:"批量处理 4 个任务",actions:e.jsx(t,{size:"sm",children:"执行"})})]})}],props:[{name:"selectedCount",type:"number",required:!0,description:"当前选中的项目数量。"},{name:"totalCount",type:"number",description:"当前集合或筛选结果的总数量，用于展示选择进度。"},{name:"label",type:"ReactNode",defaultValue:"根据 selectedCount 和 totalCount 生成",description:"自定义摘要文案。未传时根据 selectedCount 和 totalCount 生成。"},{name:"description",type:"ReactNode",description:"展示在摘要下方的辅助说明。"},{name:"actions",type:"ReactNode",description:"主操作区，通常放批量下载、移动、归档、删除等按钮。"},{name:"secondaryActions",type:"ReactNode",description:"辅助操作区，展示在内置全选和清空按钮前。"},{name:"onSelectAll",type:"() => void",description:"点击全选按钮时触发。传入后展示全选按钮。"},{name:"onClear",type:"() => void",description:"点击清空按钮时触发。传入后展示清空按钮。"},{name:"selectAllLabel",type:"ReactNode",defaultValue:'"选择全部"',description:"自定义全选按钮文案。"},{name:"clearLabel",type:"ReactNode",defaultValue:'"取消选择"',description:"自定义清空按钮文案。"},{name:"sticky",type:"boolean",defaultValue:"false",description:"是否启用粘性定位，适合长列表顶部的批量操作区。"},{name:"compact",type:"boolean",defaultValue:"false",description:"是否使用紧凑尺寸。"},{name:"align",type:'"start" | "between" | "end"',defaultValue:'"between"',description:"摘要和操作区的横向分布方式，默认 between。"},{name:"loading",type:"boolean",defaultValue:"false",description:"批量操作执行中时禁用内置全选和清空按钮。"}]});export{S as default};
