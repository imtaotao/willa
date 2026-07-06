import{l as e}from"./aidly.esm-bundler-DaTrP4tr.js";import{A as t,C as n,E as r,P as i,Y as a,lt as o,u as s}from"./react-icons.esm-mVdwEXuX.js";import{t as c}from"./IconButton-ClvF4Rkx.js";import{t as l}from"./Button-O1aY2iqB.js";import"./index-Do4z6LCr.js";import"./style-B00R6KjV.js";import{t as u}from"./defineDoc-Cid5xIoZ.js";import{t as d}from"./Menu-Clv36v7b.js";var f=e(),p=[{value:`edit`,label:`编辑内容`,icon:(0,f.jsx)(a,{})},{value:`export`,label:`导出为 Markdown`,icon:(0,f.jsx)(r,{}),trailing:`⌘E`},{value:`open`,label:`打开外部链接`,icon:(0,f.jsx)(t,{})},{type:`separator`},{value:`delete`,label:`删除记录`,icon:(0,f.jsx)(o,{}),danger:!0}],m=[{value:`draft`,label:`生成草稿`,description:`根据当前上下文补全文案。`,icon:(0,f.jsx)(a,{})},{value:`settings`,label:`调整生成参数`,description:`切换模型、语气和输出长度。`,icon:(0,f.jsx)(i,{})},{value:`selected`,label:`已选模式`,description:`菜单项可以展示尾部状态。`,trailing:(0,f.jsx)(s,{})}],h={display:`flex`,flexWrap:`wrap`,gap:`0.75rem`,alignItems:`center`},g=u({id:`menu`,name:`Menu`,packageName:`willa/Menu`,description:`用于更多操作、模式切换和 AI 产品中的轻量动作菜单。`,imports:[{name:`Menu`,from:`willa/Menu`},{name:`Button`,from:`willa/Button`}],css:`willa/Menu.css`,demo:{name:`Menu`,component:d,props:{items:p,trigger:(0,f.jsx)(l,{variant:`outline`,trailingIcon:(0,f.jsx)(n,{}),children:`更多操作`})}},code:`
    import {
      DotsHorizontalIcon,
      Pencil1Icon,
      TrashIcon,
    } from "@radix-ui/react-icons";
    import { Button } from "willa/Button";
    import { Menu } from "willa/Menu";
    import "willa/Button.css";
    import "willa/Menu.css";

    const items = [
      { value: "edit", label: "编辑内容", icon: <Pencil1Icon /> },
      { type: "separator" },
      { value: "delete", label: "删除记录", icon: <TrashIcon />, danger: true },
    ];

    <Menu
      items={items}
      trigger={
        <Button variant="outline" trailingIcon={<DotsHorizontalIcon />}>
          更多操作
        </Button>
      }
    />;
  `,sections:[{title:`基础菜单`,code:`
        <div style={rowStyle}>
          <Menu
            items={basicItems}
            trigger={
              <Button variant="outline" trailingIcon={<DotsHorizontalIcon />}>
                更多操作
              </Button>
            }
          />
          <Menu
            items={basicItems}
            size="sm"
            trigger={
              <IconButton
                ariaLabel="打开操作菜单"
                icon={<DotsHorizontalIcon />}
                variant="outline"
              />
            }
          />
        </div>;
      `,content:(0,f.jsxs)(`div`,{style:h,children:[(0,f.jsx)(d,{items:p,trigger:(0,f.jsx)(l,{variant:`outline`,trailingIcon:(0,f.jsx)(n,{}),children:`更多操作`})}),(0,f.jsx)(d,{items:p,size:`sm`,trigger:(0,f.jsx)(c,{ariaLabel:`打开操作菜单`,icon:(0,f.jsx)(n,{}),variant:`outline`})})]})},{title:`描述和状态`,code:`
        <Menu items={aiItems} trigger={<Button variant="soft">AI 生成模式</Button>} />;
      `,content:(0,f.jsx)(d,{items:m,trigger:(0,f.jsx)(l,{variant:`soft`,children:`AI 生成模式`})})},{title:`右键菜单`,code:`
        <Menu
          triggerType="contextmenu"
          items={basicItems}
          trigger={
            <div role="button" tabIndex={0} style={contextAreaStyle}>
              在此区域右键，或聚焦后按 Shift + F10
            </div>
          }
        />;
      `,content:(0,f.jsx)(d,{triggerType:`contextmenu`,items:p,trigger:(0,f.jsx)(`div`,{role:`button`,tabIndex:0,style:{display:`grid`,minHeight:`8.5rem`,placeItems:`center`,padding:`1.25rem`,border:`1px dashed var(--willa-menu-border)`,borderRadius:`0.8rem`,background:`var(--willa-menu-item-bg-hover)`,color:`var(--willa-menu-muted)`,fontWeight:700,textAlign:`center`},children:`在此区域右键，或聚焦后按 Shift + F10`})})},{title:`对齐方式`,code:`
        <div style={rowStyle}>
          <Menu
            align="start"
            items={basicItems}
            trigger={<Button variant="outline">左对齐</Button>}
          />
          <Menu
            align="center"
            items={basicItems}
            trigger={<Button variant="outline">居中</Button>}
          />
          <Menu
            align="end"
            items={basicItems}
            trigger={<Button variant="outline">右对齐</Button>}
          />
        </div>;
      `,content:(0,f.jsxs)(`div`,{style:h,children:[(0,f.jsx)(d,{align:`start`,items:p,trigger:(0,f.jsx)(l,{variant:`outline`,children:`左对齐`})}),(0,f.jsx)(d,{align:`center`,items:p,trigger:(0,f.jsx)(l,{variant:`outline`,children:`居中`})}),(0,f.jsx)(d,{align:`end`,items:p,trigger:(0,f.jsx)(l,{variant:`outline`,children:`右对齐`})})]})},{title:`禁用项`,code:`
        <Menu
          items={[
            { value: "copy", label: "复制链接" },
            { value: "sync", label: "同步中", disabled: true },
            { value: "archive", label: "归档" },
          ]}
          trigger={<Button variant="outline">带禁用项</Button>}
        />;
      `,content:(0,f.jsx)(d,{items:[{value:`copy`,label:`复制链接`},{value:`sync`,label:`同步中`,disabled:!0},{value:`archive`,label:`归档`}],trigger:(0,f.jsx)(l,{variant:`outline`,children:`带禁用项`})})}],props:[{name:`items`,type:`Array<MenuItem>`,required:!0,description:`菜单项列表。`},{name:`trigger`,type:`ReactElement`,required:!0,description:`触发菜单的元素，通常是 Button 或 IconButton。`},{name:`open`,type:`boolean`,description:`受控打开状态。`},{name:`defaultOpen`,type:`boolean`,defaultValue:`false`,description:`非受控默认打开状态。`},{name:`onOpenChange`,type:`(open: boolean) => void`,description:`打开状态变化回调。`},{name:`onSelect`,type:`(value: string) => void`,description:`选择菜单项时触发。`},{name:`size`,type:`"sm" | "md"`,defaultValue:`"md"`,description:`菜单尺寸。`},{name:`side`,type:`"top" | "bottom"`,defaultValue:`"bottom"`,description:`菜单相对触发元素的展开方向。`},{name:`align`,type:`"start" | "center" | "end"`,defaultValue:`"start"`,description:`菜单和触发元素的对齐方式。`},{name:`triggerType`,type:`"click" | "contextmenu"`,defaultValue:`"click"`,description:`菜单触发方式。contextmenu 会按右键位置定位，键盘打开时仍按触发元素定位。`},{name:`offset`,type:`number`,defaultValue:`8`,description:`菜单与触发元素之间的距离。`},{name:`closeOnSelect`,type:`boolean`,defaultValue:`true`,description:`选择菜单项后是否关闭菜单，默认为 true。`},{name:`ariaLabel`,type:`string`,defaultValue:`"Menu"`,description:`菜单的可访问性名称。`},{name:`className`,type:`string`,description:`外层 className。`},{name:`contentClassName`,type:`string`,description:`菜单浮层 className。`},{name:`MenuItem.value`,type:`string`,required:!0,group:`MenuItem`,description:`菜单项唯一值。`},{name:`MenuItem.type`,type:`"item" | "separator"`,group:`MenuItem`,description:`菜单项类型；separator 用于分隔线。`},{name:`MenuItem.label`,type:`ReactNode`,required:!0,group:`MenuItem`,description:`菜单项主文案。`},{name:`MenuItem.description`,type:`ReactNode`,group:`MenuItem`,description:`菜单项补充说明。`},{name:`MenuItem.icon`,type:`ReactNode`,group:`MenuItem`,description:`菜单项左侧图标。`},{name:`MenuItem.trailing`,type:`ReactNode`,group:`MenuItem`,description:`菜单项右侧内容。`},{name:`MenuItem.disabled`,type:`boolean`,group:`MenuItem`,description:`是否禁用菜单项。`},{name:`MenuItem.danger`,type:`boolean`,group:`MenuItem`,description:`是否展示为危险操作。`},{name:`MenuItem.onSelect`,type:`(value: string) => void`,group:`MenuItem`,description:`单个菜单项的选择回调。`}]});export{g as default};