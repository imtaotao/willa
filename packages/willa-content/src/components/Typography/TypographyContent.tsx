import {
  useEffect,
  useRef,
  useState,
  type AnchorHTMLAttributes,
  type ChangeEvent,
  type HTMLAttributes,
  type KeyboardEvent,
  type MouseEvent,
} from "react";
import { flattenText, useCopyToClipboard } from "@willa-ui/shared";
import classNames from "classnames";

import { Kbd } from "#content/components/Kbd";

import { TypographyActionsView } from "#content/components/Typography/TypographyActions";
import {
  resizeEditTextArea,
  TypographyEdit,
} from "#content/components/Typography/TypographyEdit";
import type { RenderTypographyContentOptions } from "#content/components/Typography/types";
import {
  getDefaultExpanded,
  getTypographyContentStyle,
  getTypographyTag,
  normalizeEditable,
  normalizeEllipsis,
  renderTooltip,
  resolveCopyText,
  resolveEditableText,
  updateEllipsized,
} from "#content/components/Typography/utils";

export function TypographyContent(options: RenderTypographyContentOptions) {
  const {
    kind,
    level = 1,
    href,
    target,
    rel,
    className,
    classNames: typographyClassNames,
    styles: typographyStyles,
    style,
    rootProps,
    children,
    type,
    strong,
    italic,
    underline,
    delete: deleted,
    code,
    mark,
    keyboard,
    disabled,
    copyable,
    editable,
    ellipsis,
    actions,
  } = options;
  const { status: copied, copy } = useCopyToClipboard();
  const [uncontrolledExpanded, setUncontrolledExpanded] = useState(
    getDefaultExpanded(ellipsis),
  );
  const editableConfig = normalizeEditable(editable);
  const isEditingControlled = editableConfig?.editing !== undefined;
  const [uncontrolledEditing, setUncontrolledEditing] = useState(
    editableConfig?.defaultEditing ?? false,
  );
  const editing = editableConfig?.editing ?? uncontrolledEditing;
  const initialText = resolveEditableText(editableConfig, children);
  const [editedText, setEditedText] = useState(initialText);
  const [displayText, setDisplayText] = useState(initialText);
  const [ellipsized, setEllipsized] = useState(false);
  const ellipsisConfig = normalizeEllipsis(ellipsis);
  const expanded = ellipsisConfig?.expanded ?? uncontrolledExpanded;
  const Tag =
    editing && kind !== "text" && kind !== "link"
      ? "div"
      : getTypographyTag(kind, level);
  const contentStyle = getTypographyContentStyle(ellipsisConfig, expanded);
  const contentRef = useRef<HTMLSpanElement | null>(null);
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);
  const lastEllipsizedRef = useRef<boolean | undefined>(undefined);
  const actionPlacement = actions?.placement ?? "end";
  const copyText = resolveCopyText(copyable, displayText, children);
  const canCopy = Boolean(copyText);
  const canEdit = Boolean(editableConfig) && !disabled;
  const canEditByIcon =
    canEdit && Boolean(editableConfig?.triggerType.includes("icon"));
  const canEditByText =
    canEdit && Boolean(editableConfig?.triggerType.includes("text"));
  const isInlineCopyableCode =
    kind === "text" && code && canCopy && !editableConfig && !ellipsisConfig;
  const displayChildren = editableConfig ? displayText : children;
  const resolvedChildren = keyboard ? (
    <Kbd className="willa-typography-kbd" size="sm">
      {displayText || flattenText(children).trim()}
    </Kbd>
  ) : (
    displayChildren
  );

  useEffect(() => {
    if (!editing) return;
    setEditedText(resolveEditableText(editableConfig, children));
  }, [children, editableConfig?.text, editing]);

  useEffect(() => {
    if (!editableConfig || editing) return;
    setDisplayText(resolveEditableText(editableConfig, children));
  }, [children, editableConfig?.text, editing]);

  useEffect(() => {
    if (!editing || !textAreaRef.current) return;
    resizeEditTextArea(textAreaRef.current, editableConfig?.autoSize);
    textAreaRef.current.focus();
    textAreaRef.current.select();
  }, [editableConfig?.autoSize, editing, editedText]);

  useEffect(() => {
    if (!ellipsisConfig || expanded) {
      updateEllipsized(false, ellipsisConfig, setEllipsized, lastEllipsizedRef);
      return;
    }

    const frame = window.requestAnimationFrame(() => {
      const node = contentRef.current;
      if (!node) return;

      const nextEllipsized =
        node.scrollHeight > node.clientHeight + 1 ||
        node.scrollWidth > node.clientWidth + 1;
      updateEllipsized(
        nextEllipsized,
        ellipsisConfig,
        setEllipsized,
        lastEllipsizedRef,
      );
    });

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, [displayText, ellipsisConfig, expanded]);

  const handleCopy = () => {
    if (!copyText) return;

    void (async () => {
      const text = await copyText();
      if (!text) return;

      const copiedDuration =
        typeof copyable === "object" ? copyable.copiedDuration : undefined;
      await copy(text, {
        resetDuration: copiedDuration ?? 1200,
        onCopy: typeof copyable === "object" ? copyable.onCopy : undefined,
      });
    })();
  };

  const handleExpand = (event: MouseEvent<HTMLButtonElement>) => {
    const nextExpanded = !expanded;

    if (ellipsisConfig?.expanded === undefined) {
      setUncontrolledExpanded(nextExpanded);
    }

    ellipsisConfig?.onExpand?.(event, { expanded: nextExpanded });
  };

  const updateEditing = (nextEditing: boolean) => {
    if (!isEditingControlled) {
      setUncontrolledEditing(nextEditing);
    }
  };

  const handleEditStart = () => {
    if (!canEdit) return;
    setEditedText(displayText);
    updateEditing(true);
    editableConfig?.onStart?.();
  };

  const handleEditCancel = () => {
    setEditedText(displayText);
    updateEditing(false);
    editableConfig?.onCancel?.();
  };

  const handleEditEnd = () => {
    const nextText = editedText.trimEnd();

    setDisplayText(nextText);
    updateEditing(false);
    editableConfig?.onChange?.(nextText);
    editableConfig?.onEnd?.();
  };

  const handleEditChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setEditedText(event.target.value);
  };

  const handleEditKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Escape") {
      event.preventDefault();
      handleEditCancel();
      return;
    }

    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleEditEnd();
    }
  };

  const actionNodes = (
    <TypographyActionsView
      classNames={typographyClassNames}
      canCopy={canCopy}
      canEditByIcon={canEditByIcon}
      copied={copied}
      copyable={copyable}
      editableConfig={editableConfig}
      ellipsisConfig={ellipsisConfig}
      expanded={expanded}
      styles={typographyStyles}
      onCopy={handleCopy}
      onEditStart={handleEditStart}
      onExpand={handleExpand}
    />
  );

  const editContent = (
    <TypographyEdit
      classNames={typographyClassNames}
      editableConfig={editableConfig}
      editedText={editedText}
      textAreaRef={textAreaRef}
      styles={typographyStyles}
      onCancel={handleEditCancel}
      onChange={handleEditChange}
      onEnd={handleEditEnd}
      onKeyDown={handleEditKeyDown}
    />
  );

  const contentNode = (
    <span
      ref={contentRef}
      className={classNames(
        typographyClassNames?.content ?? "willa-typography-content",
        canEditByText && "willa-typography-content--editable",
      )}
      style={{ ...typographyStyles?.content, ...contentStyle }}
      role={canEditByText ? "button" : undefined}
      tabIndex={canEditByText ? 0 : undefined}
      onClick={canEditByText ? handleEditStart : undefined}
      onKeyDown={
        canEditByText
          ? (event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                handleEditStart();
              }
            }
          : undefined
      }
    >
      {resolvedChildren}
      {ellipsisConfig?.suffix ? (
        <span className="willa-typography-suffix">{ellipsisConfig.suffix}</span>
      ) : null}
    </span>
  );

  const maybeTooltipContent =
    ellipsisConfig?.tooltip && ellipsized
      ? ellipsisConfig.tooltip === true
        ? displayText
        : ellipsisConfig.tooltip
      : undefined;

  const domRootProps = stripTypographyProps(rootProps);

  const content = editing ? (
    editContent
  ) : isInlineCopyableCode ? (
    <>
      {renderTooltip(
        maybeTooltipContent,
        <span className="willa-typography-code-surface">{contentNode}</span>,
      )}
      {actionNodes}
    </>
  ) : (
    <>
      {actionPlacement === "start" ? actionNodes : null}
      {renderTooltip(maybeTooltipContent, contentNode)}
      {actionPlacement === "end" ? actionNodes : null}
    </>
  );

  const typographyClassName = classNames(
    "willa-typography-node",
    `willa-typography-node--${kind}`,
    kind === "title" && `willa-typography-title--${level}`,
    type && `willa-typography-node--${type}`,
    strong && "willa-typography-node--strong",
    italic && "willa-typography-node--italic",
    underline && "willa-typography-node--underline",
    deleted && "willa-typography-node--delete",
    code && !isInlineCopyableCode && "willa-typography-node--code",
    mark && "willa-typography-node--mark",
    disabled && "willa-typography-node--disabled",
    canCopy && "willa-typography-node--copyable",
    canEdit && "willa-typography-node--editable",
    ellipsisConfig && "willa-typography-node--ellipsis",
    ellipsisConfig?.expandable && "willa-typography-node--expandable",
    (canCopy || canEditByIcon || ellipsisConfig?.expandable) &&
      !isInlineCopyableCode &&
      "willa-typography-node--has-actions",
    className,
    typographyClassNames?.root,
  );

  if (kind === "link") {
    if (editing) {
      return (
        <span
          className={typographyClassName}
          style={{ ...typographyStyles?.root, ...style }}
          aria-disabled={disabled || undefined}
        >
          {content}
        </span>
      );
    }

    return (
      <a
        {...(domRootProps as AnchorHTMLAttributes<HTMLAnchorElement>)}
        className={typographyClassName}
        style={{ ...typographyStyles?.root, ...style }}
        href={disabled ? undefined : href}
        target={target}
        rel={rel}
        aria-disabled={disabled || undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <Tag
      {...(domRootProps as HTMLAttributes<HTMLElement>)}
      className={typographyClassName}
      style={{
        ...typographyStyles?.root,
        ...style,
        ...(isInlineCopyableCode
          ? {
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              width: "fit-content",
              justifySelf: "start",
              verticalAlign: "middle",
            }
          : {}),
      }}
      aria-disabled={disabled || undefined}
    >
      {content}
    </Tag>
  );
}

const stripTypographyProps = (
  props: RenderTypographyContentOptions["rootProps"],
) => {
  const {
    type: _type,
    strong: _strong,
    italic: _italic,
    underline: _underline,
    delete: _delete,
    code: _code,
    mark: _mark,
    keyboard: _keyboard,
    disabled: _disabled,
    copyable: _copyable,
    editable: _editable,
    ellipsis: _ellipsis,
    actions: _actions,
    className: _className,
    classNames: _classNames,
    styles: _styles,
    ...domProps
  } = props as RenderTypographyContentOptions["rootProps"] &
    Partial<Record<string, unknown>>;

  return domProps;
};

TypographyContent.displayName = "TypographyContent";
