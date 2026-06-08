import {
  InfoCircledIcon,
  QuestionMarkCircledIcon,
} from "@radix-ui/react-icons";
import { Button } from "willa/Button";
import { IconButton } from "willa/IconButton";
import { Tooltip } from "willa/Tooltip";
import "willa/Button.css";
import "willa/IconButton.css";
import "willa/Tooltip.css";

import { defineDoc } from "#example/catalog/defineDoc";

const rowStyle = {
  display: "flex",
  flexWrap: "wrap",
  gap: "0.75rem",
  alignItems: "center",
} as const;

export default defineDoc({
  id: "tooltip",
  name: "Tooltip",
  packageName: "willa/Tooltip",
  description: "用于解释图标按钮、字段含义和轻量操作提示的说明气泡。",
  imports: [
    { name: "Tooltip", from: "willa/Tooltip" },
    { name: "IconButton", from: "willa/IconButton" },
  ],
  css: "willa/Tooltip.css",
  demo: {
    name: "Tooltip",
    component: Tooltip,
    props: {
      content: "更多设置",
      children: (
        <IconButton
          ariaLabel="更多设置"
          icon={<QuestionMarkCircledIcon />}
          variant="outline"
        />
      ),
    },
  },
  code: `
    import { QuestionMarkCircledIcon } from "@radix-ui/react-icons";
    import { IconButton } from "willa/IconButton";
    import { Tooltip } from "willa/Tooltip";
    import "willa/IconButton.css";
    import "willa/Tooltip.css";

    <Tooltip content="更多设置">
      <IconButton
        ariaLabel="更多设置"
        icon={<QuestionMarkCircledIcon />}
        variant="outline"
      />
    </Tooltip>
  `,
  sections: [
    {
      title: "基础提示",
      content: (
        <div style={rowStyle}>
          <Tooltip content="复制当前链接">
            <Button variant="outline">复制</Button>
          </Tooltip>
          <Tooltip content="这里会影响 AI 生成结果的长度">
            <IconButton
              ariaLabel="查看说明"
              icon={<InfoCircledIcon />}
              variant="soft"
            />
          </Tooltip>
        </div>
      ),
    },
    {
      title: "展开方向",
      content: (
        <div style={rowStyle}>
          <Tooltip content="上方提示" side="top" delay={0}>
            <Button variant="outline">Top</Button>
          </Tooltip>
          <Tooltip content="右侧提示" side="right" delay={0}>
            <Button variant="outline">Right</Button>
          </Tooltip>
          <Tooltip content="下方提示" side="bottom" delay={0}>
            <Button variant="outline">Bottom</Button>
          </Tooltip>
          <Tooltip content="左侧提示" side="left" delay={0}>
            <Button variant="outline">Left</Button>
          </Tooltip>
        </div>
      ),
    },
    {
      title: "尺寸和对齐",
      content: (
        <div style={rowStyle}>
          <Tooltip content="小尺寸说明" size="sm" delay={0}>
            <Button size="sm" variant="outline">
              Small
            </Button>
          </Tooltip>
          <Tooltip content="和触发元素左侧对齐" align="start" delay={0}>
            <Button variant="outline">Start</Button>
          </Tooltip>
          <Tooltip content="和触发元素右侧对齐" align="end" delay={0}>
            <Button variant="outline">End</Button>
          </Tooltip>
        </div>
      ),
    },
    {
      title: "受控状态",
      content: (
        <Tooltip content="一直展示的受控 Tooltip" open>
          <Button variant="soft">受控展示</Button>
        </Tooltip>
      ),
    },
  ],
  props: [
    {
      name: "content",
      type: "ReactNode",
      required: true,
      description: "Tooltip 展示内容。",
    },
    {
      name: "children",
      type: "ReactElement",
      required: true,
      description: "触发 Tooltip 的元素。",
    },
    {
      name: "open",
      type: "boolean",
      description: "受控打开状态。",
    },
    {
      name: "defaultOpen",
      type: "boolean",
      description: "非受控默认打开状态。",
    },
    {
      name: "onOpenChange",
      type: "(open: boolean) => void",
      description: "打开状态变化回调。",
    },
    {
      name: "side",
      type: '"top" | "right" | "bottom" | "left"',
      description: "Tooltip 相对触发元素的展示方向。",
    },
    {
      name: "align",
      type: '"start" | "center" | "end"',
      description: "Tooltip 和触发元素的对齐方式。",
    },
    {
      name: "offset",
      type: "number",
      description: "Tooltip 与触发元素之间的距离。",
    },
    {
      name: "delay",
      type: "number",
      description: "延迟展示时间，单位为毫秒，默认为 450。",
    },
    {
      name: "disabled",
      type: "boolean",
      description: "禁用 Tooltip。",
    },
    {
      name: "size",
      type: '"sm" | "md"',
      description: "Tooltip 尺寸。",
    },
    {
      name: "className",
      type: "string",
      description: "外层 className。",
    },
    {
      name: "contentClassName",
      type: "string",
      description: "Tooltip 浮层 className。",
    },
  ],
});
