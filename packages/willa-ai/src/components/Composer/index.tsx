import type { AriaRole, CSSProperties, ReactNode } from "react";
import classNames from "classnames";
import {
  AttachmentList,
  type AttachmentListItem,
  type AttachmentListProps,
} from "#ai/components/AttachmentList";
import { PromptInput, type PromptInputProps } from "#ai/components/PromptInput";

export type ComposerProps = Omit<
  PromptInputProps,
  "actions" | "className" | "footer" | "id" | "role" | "style"
> & {
  header?: ReactNode;
  model?: ReactNode;
  tools?: ReactNode;
  attachments?: Array<AttachmentListItem>;
  attachmentListProps?: Omit<AttachmentListProps, "items">;
  actions?: ReactNode;
  footer?: ReactNode;
  id?: string;
  role?: AriaRole;
  className?: string;
  style?: CSSProperties;
  inputClassName?: string;
  inputStyle?: CSSProperties;
};

export function Composer(props: ComposerProps) {
  const {
    header,
    model,
    tools,
    attachments,
    attachmentListProps,
    actions,
    footer,
    id,
    role,
    style,
    inputClassName,
    inputStyle,
    className,
    ...promptInputProps
  } = props;
  const hasHeader = isRenderable(header);
  const hasToolbar = isRenderable(model) || isRenderable(tools);
  const hasAttachments = attachments !== undefined && attachments.length > 0;

  return (
    <section
      id={id}
      className={classNames("willa-composer", className)}
      style={style}
      role={role}
    >
      {hasHeader || hasToolbar ? (
        <div className="willa-composer-header">
          {hasHeader || model ? (
            <div className="willa-composer-meta">
              {hasHeader ? (
                <div className="willa-composer-title">{header}</div>
              ) : null}
              {model ? (
                <div className="willa-composer-model">{model}</div>
              ) : null}
            </div>
          ) : null}
          {tools ? <div className="willa-composer-tools">{tools}</div> : null}
        </div>
      ) : null}
      {hasAttachments ? (
        <div className="willa-composer-attachments">
          <AttachmentList items={attachments} {...attachmentListProps} />
        </div>
      ) : null}
      <PromptInput
        {...promptInputProps}
        className={classNames("willa-composer-input", inputClassName)}
        style={inputStyle}
        actions={actions}
        footer={footer}
      />
    </section>
  );
}

const isRenderable = (value: ReactNode) => {
  return value !== undefined && value !== null && value !== false;
};

Composer.displayName = "Composer";
