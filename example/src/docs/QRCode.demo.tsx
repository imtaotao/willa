import { ReloadIcon } from "@radix-ui/react-icons";
import { QRCode } from "willa/QRCode";
import "willa/QRCode.css";

import { defineDoc } from "#example/catalog/defineDoc";

const demoValue = "https://imtaotao.github.io/willa/#/qr-code";
const logoUrl = "https://github.com/imtaotao.png";

const demoGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(11rem, max-content))",
  justifyContent: "center",
  alignItems: "start",
  gap: "1rem",
} as const;

const demoStackStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "1rem",
} as const;

const statusRender = ({ onRefresh }: { onRefresh?: () => void }) => (
  <div
    style={{
      display: "grid",
      justifyItems: "center",
      gap: "0.45rem",
      fontSize: "0.82rem",
      fontWeight: 650,
    }}
  >
    <span>访问码已失效</span>
    <button
      type="button"
      onClick={onRefresh}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.3rem",
        border: 0,
        borderRadius: "0.45rem",
        padding: "0.28rem 0.46rem",
        background: "var(--willa-qr-code-action-bg)",
        color: "var(--willa-qr-code-accent)",
        font: "inherit",
        cursor: "pointer",
      }}
    >
      <ReloadIcon />
      重新生成
    </button>
  </div>
);

export default defineDoc({
  id: "qr-code",
  name: "QRCode",
  category: "widgets",
  packageName: "willa/QRCode",
  description: "用于分享链接、访问码和移动端扫码入口的二维码组件。",
  imports: [{ name: "QRCode", from: "willa/QRCode" }],
  css: "willa/QRCode.css",
  demo: {
    name: "QRCode",
    component: QRCode,
    props: {
      value: demoValue,
      description: "扫码查看 Willa 组件文档",
      downloadable: true,
    },
  },
  code: `
    import { QRCode } from "willa/QRCode";
    import "willa/QRCode.css";

    <QRCode
      value="https://imtaotao.github.io/willa/#/qr-code"
      description="扫码查看 Willa 组件文档"
      downloadable
    />;
  `,
  sections: [
    {
      title: "不同状态",
      code: `
        const value = "https://imtaotao.github.io/willa/#/qr-code";
        const gridStyle = {
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(11rem, max-content))",
          justifyContent: "center",
          alignItems: "start",
          gap: "1rem",
        };

        <div style={gridStyle}>
          <QRCode value={value} status="active" description="可扫码" />
          <QRCode value={value} status="loading" description="生成中" />
          <QRCode
            value={value}
            status="expired"
            description="需要刷新"
            onRefresh={() => console.log("refresh")}
          />
          <QRCode value={value} status="scanned" description="已扫码" />
        </div>;
      `,
      content: (
        <div style={demoGridStyle}>
          <QRCode value={demoValue} status="active" description="可扫码" />
          <QRCode value={demoValue} status="loading" description="生成中" />
          <QRCode
            value={demoValue}
            status="expired"
            description="需要刷新"
            onRefresh={() => console.log("refresh")}
          />
          <QRCode value={demoValue} status="scanned" description="已扫码" />
        </div>
      ),
    },
    {
      title: "Logo 与颜色",
      code: `
        const value = "https://imtaotao.github.io/willa/#/qr-code";
        const stackStyle = {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
        };

        <div style={stackStyle}>
          <QRCode
            value={value}
            icon="https://github.com/imtaotao.png"
            iconSize={42}
            errorLevel="H"
            description="中间带品牌头像"
          />
          <QRCode
            value={value}
            color="#315f9d"
            bgColor="#f8fbff"
            description="自定义二维码颜色"
          />
        </div>;
      `,
      content: (
        <div style={demoStackStyle}>
          <QRCode
            value={demoValue}
            icon={logoUrl}
            iconSize={42}
            errorLevel="H"
            description="中间带品牌头像"
          />
          <QRCode
            value={demoValue}
            color="#315f9d"
            bgColor="#f8fbff"
            description="自定义二维码颜色"
          />
        </div>
      ),
    },
    {
      title: "Canvas 与下载",
      code: `
        const value = "https://imtaotao.github.io/willa/#/qr-code";

        <QRCode
          value={value}
          type="canvas"
          size={188}
          downloadable
          downloadFileName="willa-docs-qrcode.png"
          description="适合导出 PNG"
        />;
      `,
      content: (
        <QRCode
          value={demoValue}
          type="canvas"
          size={188}
          downloadable
          downloadFileName="willa-docs-qrcode.png"
          description="适合导出 PNG"
        />
      ),
    },
    {
      title: "自定义状态层",
      code: `
        const statusRender = ({ onRefresh }) => (
          <div
            style={{
              display: "grid",
              justifyItems: "center",
              gap: "0.45rem",
              fontSize: "0.82rem",
              fontWeight: 650,
            }}
          >
            <span>访问码已失效</span>
            <button type="button" onClick={onRefresh}>
              重新生成
            </button>
          </div>
        );

        const value = "https://imtaotao.github.io/willa/#/qr-code";

        <QRCode
          value={value}
          status="expired"
          statusRender={statusRender}
          onRefresh={() => console.log("refresh")}
        />;
      `,
      content: (
        <QRCode
          value={demoValue}
          status="expired"
          statusRender={statusRender}
          onRefresh={() => console.log("refresh")}
        />
      ),
    },
  ],
  props: [
    {
      name: "value",
      type: "string | Array<string>",
      required: true,
      description: "二维码编码内容。",
    },
    {
      name: "type",
      type: '"svg" | "canvas"',
      defaultValue: '"svg"',
      description: "渲染类型，默认 svg。",
    },
    {
      name: "size",
      type: "number",
      defaultValue: "168",
      description: "二维码尺寸，默认 168。",
    },
    {
      name: "color",
      type: "string",
      defaultValue: '"#111827"',
      description: "二维码前景色，默认深色。",
    },
    {
      name: "bgColor",
      type: "string",
      defaultValue: '"#ffffff"',
      description: "二维码背景色，默认白色。",
    },
    {
      name: "icon",
      type: "string",
      description: "二维码中间的图片地址。",
    },
    {
      name: "iconSize",
      type: "number | { width: number; height: number }",
      description: "中间图片尺寸，默认 36。",
    },
    {
      name: "iconCrossOrigin",
      type: '"anonymous" | "use-credentials" | ""',
      description: "中间图片的跨域设置，导出 canvas 时可用于避免污染画布。",
    },
    {
      name: "errorLevel",
      type: '"L" | "M" | "Q" | "H"',
      defaultValue: '"M"',
      description: "纠错等级，默认 M；带 icon 时建议使用 H。",
    },
    {
      name: "marginSize",
      type: "number",
      defaultValue: "2",
      description: "二维码内部留白模块数，默认 2。",
    },
    {
      name: "minVersion",
      type: "number",
      description: "二维码最低版本，适合需要固定复杂度的场景。",
    },
    {
      name: "boostLevel",
      type: "boolean",
      description: "是否允许在不增加版本的情况下自动提高纠错等级。",
    },
    {
      name: "status",
      type: '"active" | "expired" | "loading" | "scanned"',
      defaultValue: '"active"',
      description: "二维码状态，默认 active。",
    },
    {
      name: "statusRender",
      type: "(info: QRCodeStatusRenderInfo) => ReactNode",
      description: "自定义状态层渲染。",
    },
    {
      name: "onRefresh",
      type: "() => void",
      description: "过期状态点击刷新时触发。",
    },
    {
      name: "description",
      type: "ReactNode",
      description: "二维码下方说明。",
    },
    {
      name: "bordered",
      type: "boolean",
      defaultValue: "true",
      description: "是否展示外层边框，默认 true。",
    },
    {
      name: "downloadable",
      type: "boolean",
      defaultValue: "false",
      description: "是否展示下载入口。",
    },
    {
      name: "downloadFileName",
      type: "string",
      description:
        "下载文件名，svg 默认 willa-qrcode.svg，canvas 默认 willa-qrcode.png。",
    },
    {
      name: "downloadLabel",
      type: "string",
      defaultValue: '"下载二维码"',
      description: "下载按钮文案。",
    },
    {
      name: "title",
      type: "string",
      description: "二维码无障碍标题。",
    },
    {
      name: "className",
      type: "string",
      description: "外层类名。",
    },
    {
      name: "style",
      type: "CSSProperties",
      description: "外层样式。",
    },
  ],
});
