import { Button } from "willa/Button";
import { createToast, toast } from "willa/Toast";
import "willa/Button.css";
import "willa/Toast.css";

import { defineDoc } from "#example/catalog/defineDoc";

const rowStyle = {
  display: "flex",
  flexWrap: "wrap",
  gap: "0.65rem",
  alignItems: "center",
} as const;

let topToast: ReturnType<typeof createToast> | undefined;
let bottomToast: ReturnType<typeof createToast> | undefined;
let bottomRightToast: ReturnType<typeof createToast> | undefined;

const getTopToast = () => {
  topToast ??= createToast({
    placement: "top",
    duration: 1600,
    maxToasts: 2,
  });

  return topToast;
};

const getBottomToast = () => {
  bottomToast ??= createToast({
    placement: "bottom",
  });

  return bottomToast;
};

const getBottomRightToast = () => {
  bottomRightToast ??= createToast({
    placement: "bottom-right",
  });

  return bottomRightToast;
};

const ToastPreview = () => {
  return (
    <div style={rowStyle}>
      <Button
        variant="solid"
        onClick={() => {
          toast.success("发布成功", {
            description: "内容已经进入公开队列。",
          });
        }}
      >
        成功提示
      </Button>
      <Button
        variant="soft"
        onClick={() => {
          getTopToast().info("顶部配置", {
            description: "由 createToast 创建的实例触发。",
          });
        }}
      >
        配置实例
      </Button>
    </div>
  );
};

const ActionToastDemo = () => {
  return (
    <Button
      variant="soft"
      onClick={() => {
        toast.info("草稿已归档", {
          action: {
            label: "撤销",
            onClick: () => toast.success("已撤销归档"),
          },
        });
      }}
    >
      显示操作
    </Button>
  );
};

const PersistentToastDemo = () => {
  return (
    <Button
      variant="outline"
      onClick={() => {
        toast.warning("同步仍在进行", {
          description: "这个提示不会自动关闭。",
          duration: false,
        });
      }}
    >
      常驻提示
    </Button>
  );
};

const ToastConfigDemo = () => {
  return (
    <div style={rowStyle}>
      <Button
        variant="soft"
        onClick={() => {
          getTopToast().info("顶部居中", {
            description: "这个提示会更快关闭。",
          });
        }}
      >
        顶部配置
      </Button>
      <Button
        variant="outline"
        onClick={() => {
          getBottomRightToast().success("右下角提示");
        }}
      >
        右下角配置
      </Button>
    </div>
  );
};

export default defineDoc({
  id: "toast",
  name: "Toast",
  packageName: "willa/Toast",
  description: "用于操作反馈、状态变化和轻量通知的浮层提示。",
  imports: [
    { name: "toast", from: "willa/Toast" },
    { name: "createToast", from: "willa/Toast" },
  ],
  css: "willa/Toast.css",
  demo: {
    name: "ToastPreview",
    component: ToastPreview,
  },
  code: `
    import { Button } from "willa/Button";
    import { createToast, toast } from "willa/Toast";
    import "willa/Button.css";
    import "willa/Toast.css";

    const compactToast = createToast({
      placement: "top-right",
      duration: 3000,
      maxToasts: 4,
    });

    <>
      <Button onClick={() => toast.success("默认提示")}>默认实例</Button>
      <Button onClick={() => compactToast.info("配置后的提示")}>配置实例</Button>
    </>;
  `,
  sections: [
    {
      title: "带操作",
      code: `
        import { Button } from "willa/Button";
        import { toast } from "willa/Toast";
        import "willa/Button.css";
        import "willa/Toast.css";

        <Button
          variant="soft"
          onClick={() => {
            toast.info("草稿已归档", {
              action: {
                label: "撤销",
                onClick: () => toast.success("已撤销归档"),
              },
            });
          }}
        >
          显示操作
        </Button>;
      `,
      content: <ActionToastDemo />,
    },
    {
      title: "常驻提示",
      code: `
        import { Button } from "willa/Button";
        import { toast } from "willa/Toast";
        import "willa/Button.css";
        import "willa/Toast.css";

        <Button
          variant="outline"
          onClick={() => {
            toast.warning("同步仍在进行", {
              description: "这个提示不会自动关闭。",
              duration: false,
            });
          }}
        >
          常驻提示
        </Button>;
      `,
      content: <PersistentToastDemo />,
    },
    {
      title: "配置 ToastConfig",
      code: `
        import { Button } from "willa/Button";
        import { createToast } from "willa/Toast";
        import "willa/Button.css";
        import "willa/Toast.css";

        const topToast = createToast({
          placement: "top",
          duration: 1600,
          maxToasts: 2,
        });

        const bottomRightToast = createToast({
          placement: "bottom-right",
        });

        <>
          <Button
            variant="soft"
            onClick={() => {
              topToast.info("顶部居中", {
                description: "这个提示会更快关闭。",
              });
            }}
          >
            顶部配置
          </Button>
          <Button
            variant="outline"
            onClick={() => {
              bottomRightToast.success("右下角提示");
            }}
          >
            右下角配置
          </Button>
        </>;
      `,
      content: <ToastConfigDemo />,
    },
    {
      title: "底部展示",
      code: `
        import { Button } from "willa/Button";
        import { createToast } from "willa/Toast";
        import "willa/Button.css";
        import "willa/Toast.css";

        const bottomToast = createToast({
          placement: "bottom",
        });

        <Button
          variant="soft"
          onClick={() => {
            bottomToast.info("会从底部出现");
          }}
        >
          底部提示
        </Button>;
      `,
      content: (
        <Button
          variant="soft"
          onClick={() => {
            getBottomToast().info("会从底部出现");
          }}
        >
          底部提示
        </Button>
      ),
    },
  ],
  props: [
    {
      name: "title",
      type: "ReactNode",
      required: true,
      group: "ToastOptions",
      description: "提示主文案。",
    },
    {
      name: "description",
      type: "ReactNode",
      group: "ToastOptions",
      description: "提示补充说明。",
    },
    {
      name: "tone",
      type: '"info" | "success" | "warning" | "error"',
      group: "ToastOptions",
      description: "提示类型，默认是 info。",
    },
    {
      name: "duration",
      type: "number | false",
      group: "ToastOptions",
      description: "单条提示的自动关闭时间；传 false 时不会自动关闭。",
    },
    {
      name: "action",
      type: "{ label: ReactNode; onClick: () => void }",
      group: "ToastOptions",
      description: "提示右侧的可选操作。",
    },
    {
      name: "id",
      type: "string",
      group: "ToastOptions",
      description: "自定义提示 ID；相同 ID 会替换已有提示。",
    },
    {
      name: "placement",
      type: '"top-right" | "top" | "bottom" | "top-left" | "bottom-right" | "bottom-left" | "top-center" | "bottom-center"',
      group: "ToastConfig",
      description:
        "提示出现的位置，默认是右上角；top 和 bottom 分别表示顶部/底部居中。",
    },
    {
      name: "duration",
      type: "number",
      group: "ToastConfig",
      description: "默认自动关闭时间，单位毫秒，默认 3000。",
    },
    {
      name: "maxToasts",
      type: "number",
      group: "ToastConfig",
      description: "最多同时展示的提示数量，默认 4。",
    },
    {
      name: "className",
      type: "string",
      group: "ToastConfig",
      description: "传给浮层容器的类名。",
    },
  ],
});
