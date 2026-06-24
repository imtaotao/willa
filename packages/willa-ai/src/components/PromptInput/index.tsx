import { forwardRef, type ChangeEvent } from "react";
import classNames from "classnames";
import { PaperPlaneIcon } from "@radix-ui/react-icons";
import {
  MentionInput,
  type MentionInputProps,
  type MentionInputSubmitContext,
} from "@willa-ui/content/components/MentionInput";
import {
  InputPanel,
  type InputPanelProps,
  type InputPanelSubmitEvent,
} from "@willa-ui/content/components/InputPanel";

export type PromptInputSize = "md" | "lg";
export type PromptInputSubmitEvent =
  | InputPanelSubmitEvent
  | MentionInputSubmitContext;

type PromptMentionProps = Pick<
  MentionInputProps,
  | "mentionLabel"
  | "mentionTriggers"
  | "mentionOptions"
  | "mentionMaxSuggestions"
  | "mentionListProps"
  | "onMentionQuery"
  | "renderMentionOptions"
  | "renderMentionItem"
  | "onMentionClick"
  | "users"
  | "resources"
  | "variables"
  | "mentionSources"
  | "submitShortcut"
  | "size"
  | "autoResize"
  | "maxRows"
  | "allowEmptySubmit"
>;

export type PromptInputProps = Omit<
  InputPanelProps,
  "children" | "onSubmit" | "size" | "submitShortcut" | "value" | "defaultValue"
> &
  Pick<MentionInputProps, "value" | "defaultValue"> &
  PromptMentionProps & {
    size?: PromptInputSize;
    submitOnEnter?: boolean;
    onSubmit?: (value: string, event: PromptInputSubmitEvent) => void;
  };

export const PromptInput = forwardRef<HTMLTextAreaElement, PromptInputProps>(
  (props, forwardedRef) => {
    const {
      size = "md",
      autoResize = true,
      minRows = 3,
      maxRows = 8,
      submitOnEnter = true,
      allowEmptySubmit = false,
      loading = false,
      footer,
      actions,
      submitLabel = "发送",
      submitIcon = <PaperPlaneIcon />,
      value,
      defaultValue,
      placeholder = "输入提示词、问题或操作指令",
      disabled = false,
      className,
      style,
      onChange,
      onKeyDown,
      onSubmit,
      users,
      resources,
      variables,
      mentionSources,
      mentionTriggers,
      mentionOptions,
      mentionMaxSuggestions,
      mentionListProps,
      onMentionQuery,
      renderMentionOptions,
      renderMentionItem,
      onMentionClick,
      mentionLabel,
      submitShortcut,
      onValueChange,
      slotClassNames,
      ...textAreaProps
    } = props;

    const resolvedSubmitShortcut =
      submitShortcut ?? (submitOnEnter ? "enter" : "none");

    const hasMentionCapability = Boolean(
      users?.length ||
      resources?.length ||
      variables?.length ||
      mentionSources?.length ||
      mentionTriggers?.length ||
      mentionOptions?.length ||
      mentionMaxSuggestions !== undefined ||
      mentionListProps ||
      mentionLabel ||
      onMentionQuery ||
      renderMentionOptions ||
      renderMentionItem ||
      onMentionClick,
    );

    if (hasMentionCapability) {
      return (
        <MentionInput
          {...textAreaProps}
          onValueChange={(
            inputValue,
            event?: ChangeEvent<HTMLTextAreaElement>,
          ) => {
            onValueChange?.(inputValue, event);
            onChange?.(event ?? buildSyntheticChangeEvent(inputValue));
          }}
          ref={forwardedRef}
          className={classNames(
            "willa-prompt-input",
            `willa-prompt-input--${size}`,
            disabled && "willa-prompt-input--disabled",
            className,
          )}
          size={size}
          autoResize={autoResize}
          minRows={minRows}
          maxRows={maxRows}
          submitShortcut={resolvedSubmitShortcut}
          allowEmptySubmit={allowEmptySubmit}
          footer={footer}
          actions={actions}
          submitLabel={submitLabel}
          submitIcon={submitIcon}
          value={value}
          defaultValue={defaultValue}
          placeholder={placeholder}
          disabled={disabled}
          loading={loading}
          onSubmit={onSubmit}
          textareaProps={{
            ...textAreaProps,
            onKeyDown,
          }}
          users={users}
          resources={resources}
          variables={variables}
          mentionSources={mentionSources}
          mentionTriggers={mentionTriggers}
          mentionOptions={mentionOptions}
          mentionMaxSuggestions={mentionMaxSuggestions}
          mentionListProps={mentionListProps}
          onMentionQuery={onMentionQuery}
          renderMentionOptions={renderMentionOptions}
          renderMentionItem={renderMentionItem}
          onMentionClick={onMentionClick}
          mentionLabel={mentionLabel}
          style={style}
          slotClassNames={slotClassNames}
        />
      );
    }

    return (
      <InputPanel
        {...textAreaProps}
        ref={forwardedRef}
        className={classNames(
          "willa-prompt-input",
          `willa-prompt-input--${size}`,
          disabled && "willa-prompt-input--disabled",
          className,
        )}
        slotClassNames={{
          actions: "willa-prompt-input-actions",
          control: "willa-prompt-input-control",
          footer: "willa-prompt-input-footer",
          meta: "willa-prompt-input-meta",
          submit: "willa-prompt-input-submit",
          ...slotClassNames,
        }}
        style={style}
        size={size}
        autoResize={autoResize}
        minRows={minRows}
        maxRows={maxRows}
        submitShortcut={resolvedSubmitShortcut}
        allowEmptySubmit={allowEmptySubmit}
        loading={loading}
        footer={footer}
        actions={actions}
        submitLabel={submitLabel}
        submitIcon={submitIcon}
        value={value}
        defaultValue={defaultValue}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
        onKeyDown={onKeyDown}
        onSubmit={onSubmit}
      />
    );
  },
);

PromptInput.displayName = "PromptInput";

const buildSyntheticChangeEvent = (value: string) => {
  const target = {
    value,
  };

  return {
    target,
    currentTarget: target,
    nativeEvent: new Event("change"),
    preventDefault: () => {},
    stopPropagation: () => {},
    isDefaultPrevented: () => false,
    isPropagationStopped: () => false,
    persist: () => {},
  } as ChangeEvent<HTMLTextAreaElement>;
};
