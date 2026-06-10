import { useState } from "react";

import { Upload, type UploadItem } from "willa/Upload";
import "willa/Upload.css";

import { defineDoc } from "#example/catalog/defineDoc";

const UploadPreview = () => {
  const [summary, setSummary] = useState("暂无已选文件");

  return (
    <div style={{ display: "grid", gap: "0.75rem", minWidth: 0 }}>
      <Upload
        multiple
        maxFiles={6}
        label="上传上下文文件"
        description="支持点击选择，也可以把文件拖拽进来。图片、音频和视频会直接预览。"
        onFilesChange={(files) => setSummary(resolveSummary(files))}
        onUploadStart={(files) => setSummary(`开始上传 ${files.length} 个文件`)}
        onUpload={async (_files, _allFiles, reportProgress) => {
          for (const progress of [20, 48, 76, 100]) {
            await new Promise((resolve) => window.setTimeout(resolve, 220));
            reportProgress(progress);
          }
        }}
        onUploadComplete={(files) =>
          setSummary(`已完成 ${files.length} 个文件`)
        }
      />
      <span style={{ color: "var(--willa-text-soft)", fontSize: "0.84rem" }}>
        {summary}
      </span>
    </div>
  );
};

const resolveSummary = (files: Array<UploadItem>) => {
  if (files.length === 0) {
    return "暂无已选文件";
  }

  return `已选择 ${files.length} 个文件`;
};

export default defineDoc({
  id: "upload",
  name: "Upload",
  category: "form",
  packageName: "willa/Upload",
  description:
    "用于任意文件上传，支持点击选择和拖拽上传；图片、音频、视频可预览，其他文件通过下载入口查看。",
  imports: [{ name: "Upload", from: "willa/Upload" }],
  css: "willa/Upload.css",
  demo: {
    name: "UploadPreview",
    component: UploadPreview,
  },
  code: `
    import { Upload } from "willa/Upload";
    import "willa/Upload.css";

    <Upload
      multiple
      maxFiles={6}
      label="上传上下文文件"
      description="支持点击选择，也可以把文件拖拽进来。"
      onUpload={async (files, _allFiles, reportProgress) => {
        reportProgress(20);
        await uploadFiles(files);
        reportProgress(100);
      }}
      onUploadStart={(files) => console.log("start", files)}
      onUploadComplete={(files) => console.log("done", files)}
    />
  `,
  sections: [
    {
      title: "任意文件",
      content: (
        <Upload
          multiple
          maxFiles={4}
          label="上传资料"
          description="选择图片、音频、视频或文档。非媒体文件会以下载入口展示。"
        />
      ),
    },
    {
      title: "仅媒体文件",
      content: (
        <Upload
          accept="image/*,audio/*,video/*"
          multiple
          maxFiles={3}
          label="上传媒体"
          description="限制选择图片、音频和视频，适合多模态输入。"
          actionLabel="选择媒体"
        />
      ),
    },
    {
      title: "单文件",
      content: (
        <Upload
          label="上传头像或附件"
          description="未开启 multiple 时，每次选择会替换当前文件。"
        />
      ),
    },
    {
      title: "禁用状态",
      content: (
        <Upload
          disabled
          label="上传已关闭"
          description="当前任务不允许继续添加文件。"
        />
      ),
    },
    {
      title: "上传中",
      content: (
        <Upload
          loading
          progress={64}
          label="正在上传"
          description="业务侧可以通过 loading 接管上传状态。"
          loadingLabel="处理中"
        />
      ),
    },
  ],
  props: [
    {
      name: "accept",
      type: "string",
      description: "原生文件选择器 accept 规则。",
    },
    {
      name: "multiple",
      type: "boolean",
      description: "是否允许多文件选择和拖拽，默认 false。",
    },
    {
      name: "maxFiles",
      type: "number",
      description: "最多保留的文件数量；超出后保留最新文件。",
    },
    {
      name: "disabled",
      type: "boolean",
      description: "禁用选择、拖拽和移除操作。",
    },
    {
      name: "loading",
      type: "boolean",
      description: "受控上传中状态；传入后由业务侧接管 loading。",
    },
    {
      name: "progress",
      type: "number",
      description:
        "受控上传进度，范围 0-100；未传时异步上传会展示内部进度或不确定进度条。",
    },
    {
      name: "label",
      type: "ReactNode",
      description: "上传区域主文案。",
    },
    {
      name: "description",
      type: "ReactNode",
      description: "上传区域辅助说明。",
    },
    {
      name: "actionLabel",
      type: "ReactNode",
      description: "选择文件按钮文案。",
    },
    {
      name: "loadingLabel",
      type: "ReactNode",
      description: "上传中按钮文案。",
    },
    {
      name: "emptyLabel",
      type: "ReactNode",
      description: "没有文件时的提示文案。",
    },
    {
      name: "size",
      type: '"sm" | "md"',
      description: "上传区域尺寸，默认 md。",
    },
    {
      name: "onFilesChange",
      type: "(files: Array<UploadItem>) => void",
      description: "文件列表变化回调。",
    },
    {
      name: "onUpload",
      type: "(files: Array<UploadItem>, allFiles: Array<UploadItem>, reportProgress: (progress: number) => void) => void | Promise<void>",
      description:
        "实际上传逻辑。返回 Promise 时组件会自动展示内部 loading；调用 reportProgress 可更新内部进度。",
    },
    {
      name: "onUploadStart",
      type: "(files: Array<UploadItem>, allFiles: Array<UploadItem>) => void",
      description: "文件进入上传流程时触发。",
    },
    {
      name: "onUploadComplete",
      type: "(files: Array<UploadItem>, allFiles: Array<UploadItem>) => void",
      description:
        "上传 Promise 成功完成后触发；未传 onUpload 时会紧随 start 触发。",
    },
    {
      name: "onUploadError",
      type: "(error: unknown, files: Array<UploadItem>, allFiles: Array<UploadItem>) => void",
      description: "上传 Promise 失败或同步抛错时触发。",
    },
    {
      name: "onFileRemove",
      type: "(file: UploadItem) => void",
      description: "移除单个文件时触发。",
    },
  ],
});
