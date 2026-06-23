import { useState } from "react";
import { Badge } from "willa/Badge";
import { Avatar } from "willa/Avatar";
import { Button } from "willa/Button";
import { CommentInput } from "willa/CommentInput";
import { List } from "willa/List";
import { Group } from "willa/Group";
import "willa/Badge.css";
import "willa/Avatar.css";
import "willa/Button.css";
import "willa/CommentInput.css";
import "willa/List.css";
import "willa/Group.css";

import { defineDoc } from "#example/catalog/defineDoc";

const inputFrameStyle = {
  display: "grid",
  gap: "0.85rem",
  width: "min(100%, 52rem)",
  margin: "0 auto",
} as const;

type CommentOption = {
  id: string;
  label: string;
  value: string;
  avatarSrc: string;
  team?: string;
  role?: string;
};

const mentionOptions: Array<CommentOption> = [
  {
    id: "tom",
    label: "Tom",
    value: "@tom ",
    avatarSrc: "https://i.pravatar.cc/64?img=11",
    team: "设计",
  },
  {
    id: "lucy",
    label: "Lucy",
    value: "@lucy ",
    avatarSrc: "https://i.pravatar.cc/64?img=47",
    team: "产品",
  },
  {
    id: "nate",
    label: "Nate",
    value: "@nate ",
    avatarSrc: "https://i.pravatar.cc/64?img=12",
  },
  {
    id: "willa",
    label: "Willa",
    value: "@willa ",
    avatarSrc: "https://i.pravatar.cc/64?img=50",
  },
  {
    id: "zoe",
    label: "Zoe",
    value: "@zoe ",
    avatarSrc: "https://i.pravatar.cc/64?img=33",
  },
  {
    id: "harry",
    label: "Harry",
    value: "@harry ",
    avatarSrc: "https://i.pravatar.cc/64?img=69",
  },
  {
    id: "luna",
    label: "Luna",
    value: "@luna ",
    avatarSrc: "https://i.pravatar.cc/64?img=63",
    role: "文案",
  },
  {
    id: "mona",
    label: "Mona",
    value: "@mona ",
    avatarSrc: "https://i.pravatar.cc/64?img=67",
  },
  {
    id: "neo",
    label: "Neo",
    value: "@neo ",
    avatarSrc: "https://i.pravatar.cc/64?img=69",
  },
  {
    id: "ava",
    label: "Ava",
    value: "@ava ",
    avatarSrc: "https://i.pravatar.cc/64?img=55",
  },
  {
    id: "finn",
    label: "Finn",
    value: "@finn ",
    avatarSrc: "https://i.pravatar.cc/64?img=53",
  },
  {
    id: "ivy",
    label: "Ivy",
    value: "@ivy ",
    avatarSrc: "https://i.pravatar.cc/64?img=48",
  },
  {
    id: "joel",
    label: "Joel",
    value: "@joel ",
    avatarSrc: "https://i.pravatar.cc/64?img=51",
  },
  {
    id: "kim",
    label: "Kim",
    value: "@kim ",
    avatarSrc: "https://i.pravatar.cc/64?img=56",
  },
  {
    id: "lara",
    label: "Lara",
    value: "@lara ",
    avatarSrc: "https://i.pravatar.cc/64?img=65",
  },
  {
    id: "mike",
    label: "Mike",
    value: "@mike ",
    avatarSrc: "https://i.pravatar.cc/64?img=57",
  },
  {
    id: "nina",
    label: "Nina",
    value: "@nina ",
    avatarSrc: "https://i.pravatar.cc/64?img=58",
    role: "前端",
  },
  {
    id: "owen",
    label: "Owen",
    value: "@owen ",
    avatarSrc: "https://i.pravatar.cc/64?img=60",
    team: "设计",
  },
  {
    id: "peter",
    label: "Peter",
    value: "@peter ",
    avatarSrc: "https://i.pravatar.cc/64?img=59",
    team: "产品",
  },
  {
    id: "quinn",
    label: "Quinn",
    value: "@quinn ",
    avatarSrc: "https://i.pravatar.cc/64?img=61",
    role: "运营",
  },
  {
    id: "rosie",
    label: "Rosie",
    value: "@rosie ",
    avatarSrc: "https://i.pravatar.cc/64?img=62",
    team: "测试",
  },
  {
    id: "simon",
    label: "Simon",
    value: "@simon ",
    avatarSrc: "https://i.pravatar.cc/64?img=64",
    team: "后端",
  },
  {
    id: "tracy",
    label: "Tracy",
    value: "@tracy ",
    avatarSrc: "https://i.pravatar.cc/64?img=66",
    role: "运营",
  },
  {
    id: "ursula",
    label: "Ursula",
    value: "@ursula ",
    avatarSrc: "https://i.pravatar.cc/64?img=68",
    team: "文案",
  },
  {
    id: "vincent",
    label: "Vincent",
    value: "@vincent ",
    avatarSrc: "https://i.pravatar.cc/64?img=70",
    role: "研发",
  },
  {
    id: "wren",
    label: "Wren",
    value: "@wren ",
    avatarSrc: "https://i.pravatar.cc/64?img=71",
    team: "支持",
  },
  {
    id: "yuki",
    label: "Yuki",
    value: "@yuki ",
    avatarSrc: "https://i.pravatar.cc/64?img=72",
    role: "前端",
  },
  {
    id: "zane",
    label: "Zane",
    value: "@zane ",
    avatarSrc: "https://i.pravatar.cc/64?img=73",
    team: "客服",
  },
] as const;

const mentionUserStyle = {
  display: "grid",
  gridTemplateColumns: "auto minmax(0, 1fr)",
  alignItems: "center",
  gap: "0.58rem",
  width: "100%",
  minHeight: "2.4rem",
  padding: "0.12rem 0.42rem",
  border: "0",
  borderRadius: "0.58rem",
  background: "transparent",
  color: "inherit",
  textAlign: "left",
  font: "inherit",
  cursor: "pointer",
  transition: "background-color 160ms ease",
} as const;

const mentionUserInfoStyle = {
  display: "grid",
  minWidth: 0,
  gap: "0.12rem",
} as const;

const mentionUserNameStyle = {
  overflow: "hidden",
  color: "var(--willa-comment-input-text)",
  fontSize: "0.87rem",
  fontWeight: 650,
  lineHeight: 1.35,
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
} as const;

const mentionUserMetaStyle = {
  overflow: "hidden",
  color: "var(--willa-comment-input-muted)",
  fontSize: "0.76rem",
  lineHeight: 1.35,
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
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

  return (
    <div style={inputFrameStyle}>
      <CommentInput
        placeholder="回复这条评论..."
        quote={{
          author: "产品设计",
          content: "这个输入区需要支持评论扩展能力。",
        }}
        onMentionClick={() => setHint("打开成员选择面板")}
        mentionListProps={{
          virtualScroll: true,
          onItemClick: (item) => {
            const target = mentionOptions.find(
              (option) => (option.id ?? option.value) === item.id,
            );

            if (!target) return;
            setMentionHint(`已插入 ${String(target.label ?? target.value)}`);
          },
        }}
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
        mentionMaxSuggestions={30}
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

const MentionRenderOptionsPreview = () => {
  const [hint, setHint] = useState("");

  return (
    <div style={inputFrameStyle}>
      <CommentInput
        placeholder="输入 @ 可以展示自定义候选项"
        quote={{
          author: "产品开发",
          content: "这个列表只负责演示 renderMentionOptions 自定义渲染。",
        }}
        onMentionClick={() => setHint("打开业务自己的成员弹窗")}
        renderMentionOptions={(context, options, onSelect) => {
          const optionById = new Map(
            options.map((option) => [option.id ?? option.value, option]),
          );

          return (
            <List
              size="sm"
              variant="plain"
              split={false}
              itemLayout="horizontal"
              maxHeight="13.8rem"
              renderItem={(item) => {
                const targetOption = optionById.get(item.id);
                if (!targetOption) return null;

                return (
                  <button
                    type="button"
                    style={mentionUserStyle}
                    onMouseDown={(event) => event.preventDefault()}
                    onClick={() => onSelect(targetOption)}
                  >
                    {targetOption.avatarSrc ? (
                      <Avatar
                        size="sm"
                        name={String(targetOption.label ?? targetOption.value)}
                        src={targetOption.avatarSrc}
                      />
                    ) : null}
                    <span style={mentionUserInfoStyle}>
                      <span style={mentionUserNameStyle}>
                        {targetOption.label}
                      </span>
                      <span style={mentionUserMetaStyle}>
                        {String(
                          targetOption.role ??
                            targetOption.team ??
                            `匹配: ${context.query || "全部"}`,
                        )}
                      </span>
                    </span>
                  </button>
                );
              }}
              items={options.map((option) => {
                const id = option.id ?? option.value;
                const label = String(option.label ?? option.value);

                return {
                  id,
                  title: label,
                  description: context.query
                    ? `${label} 包含 ${context.query}`
                    : label,
                };
              })}
            />
          );
        }}
        mentionOptions={Array.from(mentionOptions)}
        mentionMaxSuggestions={30}
        onMentionQuery={(context) => {
          if (!context) {
            setHint("");
            return;
          }

          setHint(
            `命中 ${context.trigger}，查询关键字：${context.query || "未输入"}`,
          );
        }}
        actions={
          <Button
            size="sm"
            variant="ghost"
            onClick={() => setHint("自定义成员选择弹层已触发")}
          >
            表情
          </Button>
        }
        footer={hint || "renderMentionOptions：支持全量接管弹层内容和交互"}
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
          mentionMaxSuggestions={30}
          onMentionQuery={(context) => {
            if (!context) {
              setMentionHint("");
              return;
            }

            setMentionHint(
              "正在匹配 " + context.trigger + " 开头的候选项",
            );
          }}
          footer={mentionHint || hint || "输入 @ 可弹出候选人，或点击 @ 图标触发外部面板"}
        />;
      `,
      content: <CommentExtensionPreview />,
    },
    {
      title: "renderMentionOptions 自定义提及弹层",
      code: `
        import { Avatar } from "willa/Avatar";
        import { Button } from "willa/Button";
        import { CommentInput } from "willa/CommentInput";
        import { List } from "willa/List";
        import "willa/Avatar.css";
        import "willa/Button.css";
        import "willa/List.css";
        import "willa/CommentInput.css";

        const mentionOptions = [
          { id: "tom", label: "Tom", value: "@tom ", avatarSrc: "https://i.pravatar.cc/64?img=11", role: "设计" },
          { id: "lucy", label: "Lucy", value: "@lucy ", avatarSrc: "https://i.pravatar.cc/64?img=47", team: "产品" },
        ];

        <CommentInput
          placeholder="输入 @ 可以展示自定义候选项"
          renderMentionOptions={(context, options, onSelect) => {
            const optionById = new Map(
              options.map((option) => [option.id ?? option.value, option]),
            );

            return (
              <List
                size="sm"
                variant="plain"
                split={false}
                itemLayout="horizontal"
                maxHeight="13.8rem"
                renderItem={(item) => {
                  const target = optionById.get(item.id);
                  if (!target) return null;

                  return (
                    <button
                      type="button"
                      style={{ display: "grid", gridTemplateColumns: "auto minmax(0, 1fr)", alignItems: "center", gap: "0.58rem", width: "100%", minHeight: "2.4rem", padding: "0.12rem 0.42rem", border: 0, borderRadius: "0.58rem", background: "transparent", textAlign: "left", font: "inherit", cursor: "pointer" }}
                      onMouseDown={(event) => event.preventDefault()}
                      onClick={() => onSelect(target)}
                    >
                      <Avatar size="sm" name={String(target.label ?? target.value)} src={target.avatarSrc} />
                      <span style={{ display: "grid", minWidth: 0, gap: "0.12rem" }}>
                        <span style={{ overflow: "hidden", color: "var(--willa-comment-input-text)", fontSize: "0.87rem", fontWeight: 650, lineHeight: 1.35, textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                          {target.label}
                        </span>
                        <span style={{ overflow: "hidden", color: "var(--willa-comment-input-muted)", fontSize: "0.76rem", lineHeight: 1.35, textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                          {String(
                            target.role ||
                              target.team ||
                              "匹配: " + (context.query || "全部"),
                          )}
                        </span>
                      </span>
                    </button>
                  );
                }}
                items={options.map((option) => ({
                  id: option.id ?? option.value,
                  title: String(option.label ?? option.value),
                  description: context.query
                    ? context.query + " 相关"
                    : undefined,
                }))}
              />
            );
          }}
          mentionOptions={mentionOptions}
          mentionMaxSuggestions={30}
          onMentionQuery={(context) => {
            if (!context) return;
            console.log(context.query);
          }}
          footer="renderMentionOptions 用于彻底接管候选弹层"
        />;
      `,
      content: <MentionRenderOptionsPreview />,
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
      name: "mentionListProps",
      type: "CommentInputMentionListProps",
      description:
        "默认提及列表复用 List 的参数，支持 virtualScroll、infiniteScroll、onItemsChange 等。",
    },
    {
      name: "renderMentionItem",
      type: "(context: { trigger: string; query: string; start: number; end: number }, item: CommentInputMentionItem, onSelect: (item: CommentInputMentionItem) => void) => ReactNode",
      description: "可选覆盖单个提及项渲染，适配头像/机构/分组等业务信息。",
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
