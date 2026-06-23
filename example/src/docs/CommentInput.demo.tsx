import { useState } from "react";
import { Badge } from "willa/Badge";
import { Button } from "willa/Button";
import { CommentInput } from "willa/CommentInput";
import { Group } from "willa/Group";
import "willa/Badge.css";
import "willa/Button.css";
import "willa/CommentInput.css";
import "willa/Group.css";

import { defineDoc } from "#example/catalog/defineDoc";

const inputFrameStyle = {
  display: "grid",
  gap: "0.85rem",
  width: "min(100%, 52rem)",
  margin: "0 auto",
} as const;

const CommentInputPreview = () => {
  const [value, setValue] = useState("");
  const [submitted, setSubmitted] = useState("");

  return (
    <div style={inputFrameStyle}>
      <CommentInput
        value={value}
        onValueChange={setValue}
        maxLength={180}
        onSubmit={(nextValue, context) => {
          setSubmitted(nextValue);
          context.clear();
        }}
      />
      {submitted ? <Badge tone="success">已发布：{submitted}</Badge> : null}
    </div>
  );
};

const CommentExtensionPreview = () => {
  const [hint, setHint] = useState("");
  const [mentionHint, setMentionHint] = useState("");

  const mentionOptions = [
    { id: "tom", label: "Tom", value: "@tom " },
    { id: "lucy", label: "Lucy", value: "@lucy " },
    { id: "nate", label: "Nate", value: "@nate " },
    { id: "willa", label: "Willa", value: "@willa " },
  ];

  return (
    <div style={inputFrameStyle}>
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
        mentionMaxSuggestions={4}
        renderMentionOptions={(_context, options, onSelect) => {
          return (
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
              {options.map((item) => (
                <Button
                  key={item.id}
                  size="sm"
                  variant="ghost"
                  onClick={() => {
                    onSelect(item);
                    setMentionHint(`已插入 ${String(item.label)}`);
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </div>
          );
        }}
        onMentionQuery={(context) => {
          if (!context) {
            setMentionHint("");
            return;
          }

          setMentionHint(`正在匹配 ${context.trigger} 开头的候选项`);
        }}
        footer={
          mentionHint ||
          hint ||
          "输入 @ 可弹出候选人，或点击 @ 图标触发外部面板"
        }
      />
    </div>
  );
};

export default defineDoc({
  id: "comment-input",
  name: "CommentInput",
  category: "content",
  packageName: "willa/CommentInput",
  description: "用于评论、批注和反馈场景的轻量输入组件。",
  imports: [{ name: "CommentInput", from: "willa/CommentInput" }],
  css: "willa/CommentInput.css",
  demo: {
    name: "CommentInputPreview",
    component: CommentInputPreview,
  },
  code: `
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
  `,
  sections: [
    {
      title: "附加操作",
      code: `
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
      `,
      content: (
        <div style={inputFrameStyle}>
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
          />
        </div>
      ),
    },
    {
      title: "提及、表情和引用",
      code: `
        const mentionOptions = [
          { id: "tom", label: "Tom", value: "@tom " },
          { id: "lucy", label: "Lucy", value: "@lucy " },
          { id: "nate", label: "Nate", value: "@nate " },
          { id: "willa", label: "Willa", value: "@willa " },
        ];

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
          mentionMaxSuggestions={4}
          onMentionQuery={(context) => {
            if (!context) {
              setMentionHint("");
              return;
            }

            setMentionHint(
              "正在匹配 " + context.trigger + " 开头的候选项",
            );
          }}
          renderMentionOptions={(_context, options, onSelect) => {
            return (
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {options.map((item) => {
                  return (
            <Button
              key={item.id}
              size="sm"
              variant="ghost"
              onClick={() => onSelect(item)}
            >
                      {item.label}
                    </Button>
                  );
                })}
              </div>
            );
          }}
          footer={mentionHint || hint || "输入 @ 可弹出候选人，或点击 @ 图标触发外部面板"}
        />;
      `,
      content: <CommentExtensionPreview />,
    },
    {
      title: "提交状态",
      code: `
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
      `,
      content: (
        <div style={inputFrameStyle}>
          <CommentInput loading defaultValue="正在提交这条评论..." />
          <CommentInput disabled placeholder="当前内容已锁定，不能继续评论。" />
        </div>
      ),
    },
  ],
  props: [
    {
      name: "value",
      type: "string",
      description: "受控输入值。",
    },
    {
      name: "defaultValue",
      type: "string",
      defaultValue: '""',
      description: "非受控默认值。",
    },
    {
      name: "onValueChange",
      type: "(value: string) => void",
      description: "输入值变化回调。",
    },
    {
      name: "onSubmit",
      type: "(value: string, context: CommentInputSubmitContext) => void",
      description: "提交回调，context.clear 可清空输入。",
    },
    {
      name: "placeholder",
      type: "string",
      defaultValue: '"写下你的评论..."',
      description: "占位文案。",
    },
    {
      name: "submitLabel",
      type: "ReactNode",
      defaultValue: '"发布"',
      description: "提交按钮文案。",
    },
    {
      name: "disabled",
      type: "boolean",
      defaultValue: "false",
      description: "是否禁用。",
    },
    {
      name: "loading",
      type: "boolean",
      defaultValue: "false",
      description: "是否处于提交中。",
    },
    {
      name: "minRows",
      type: "number",
      defaultValue: "3",
      description: "输入框最小行数，默认 3。",
    },
    {
      name: "maxLength",
      type: "number",
      description: "最大输入长度。",
    },
    {
      name: "autoFocus",
      type: "boolean",
      defaultValue: "false",
      description: "是否自动聚焦。",
    },
    {
      name: "avatarSrc",
      type: "string",
      description: "输入者头像地址。",
    },
    {
      name: "avatarName",
      type: "string",
      defaultValue: '"Comment Author"',
      description: "输入者头像名称。",
    },
    {
      name: "quote",
      type: "CommentInputQuote",
      description: "引用内容，包含被引用作者和正文内容。",
    },
    {
      name: "mentionLabel",
      type: "ReactNode",
      defaultValue: '"@"',
      description: "@ 提及入口的展示内容，默认 @。",
    },
    {
      name: "mentionTriggers",
      type: "Array<string> | undefined",
      defaultValue: '["@"]',
      description: "提及触发字符集合，默认只处理 @。",
    },
    {
      name: "mentionOptions",
      type: "Array<CommentInputMentionItem>",
      description: "输入 @ 时要展示的候选数据。",
    },
    {
      name: "mentionMaxSuggestions",
      type: "number",
      defaultValue: "6",
      description: "候选项展示上限。",
    },
    {
      name: "onMentionQuery",
      type: "(context: CommentInputMentionContext | null) => void",
      description: "每次提及输入变化回调，context 为空表示退出提及态。",
    },
    {
      name: "renderMentionOptions",
      type: "(context: { trigger: string; query: string; start: number; end: number }, options: Array<CommentInputMentionItem>, onSelect: (item: CommentInputMentionItem) => void) => ReactNode",
      description: "可选覆盖默认提及候选展示，适配业务自己的弹层样式。",
    },
    {
      name: "onMentionClick",
      type: "() => void",
      description: "点击 @ 提及入口时触发，用于打开成员选择面板。",
    },
    {
      name: "actions",
      type: "ReactNode",
      description: "输入区附加操作，适合接入业务自己的表情、附件或快捷操作。",
    },
    {
      name: "footer",
      type: "ReactNode",
      description: "底部说明。",
    },
    {
      name: "textareaProps",
      type: "TextareaHTMLAttributes<HTMLTextAreaElement>",
      description: "透传到底层 textarea 的属性。",
    },
  ],
});
