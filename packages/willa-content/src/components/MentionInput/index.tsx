import {
  forwardRef,
  useImperativeHandle,
  useState,
  useMemo,
  useRef,
  useCallback,
  useEffect,
  type CSSProperties,
  type ButtonHTMLAttributes,
  type MouseEvent,
  type ReactNode,
  type TextareaHTMLAttributes,
  type ChangeEvent,
} from "react";
import { createPortal } from "react-dom";
import classNames from "classnames";
import { clampNumber, isMobileViewport } from "@willa-ui/shared";

import { Avatar } from "#content/components/Avatar";
import {
  InputPanel,
  type InputPanelSubmitEvent,
  type InputPanelSlotClassNames,
  type InputPanelSize,
  type InputPanelSubmitShortcut,
} from "#content/components/InputPanel";
import { List, type ListItem, type ListProps } from "#content/components/List";

export type MentionInputSubmitContext = {
  clear: () => void;
};

export type MentionInputMentionItem = {
  id?: string;
  label?: ReactNode;
  value: string;
  avatarSrc?: string;
  [key: string]: unknown;
};

export type MentionInputMentionListProps = Omit<
  ListProps,
  "items" | "children"
>;

export type MentionInputMentionContext = {
  trigger: string;
  query: string;
  start: number;
  end: number;
  replace: (value: string) => void;
};

export type MentionInputTriggerSource = {
  trigger: string;
  label: ReactNode;
  description?: string;
  items: Array<MentionInputMentionItem>;
};

type MentionState = Omit<MentionInputMentionContext, "replace">;
type MentionPanelPosition = {
  x: number;
  y: number;
  width?: number;
  placement: "top" | "bottom";
};

const getStringValue = (value: unknown): string | null => {
  if (typeof value === "string") {
    const normalized = value.trim();
    return normalized || null;
  }
  return null;
};

const getMentionItemMeta = (option: MentionInputMentionItem): string | null => {
  const rawOption = option as Record<string, unknown>;
  return (
    getStringValue(rawOption.role) ||
    getStringValue(rawOption.team) ||
    getStringValue(rawOption.description)
  );
};

const MENTION_INPUT_MENTION_VIRTUAL_SCROLL_ITEM_HEIGHT = 54;

const defaultMentionSources: Array<MentionInputTriggerSource> = [
  {
    trigger: "@",
    label: "@",
    description: "用户",
    items: [],
  },
  {
    trigger: "#",
    label: "#",
    description: "资源",
    items: [],
  },
  {
    trigger: "$",
    label: "$",
    description: "变量",
    items: [],
  },
];

const normalizeMentionValue = (trigger: string, value: string) => {
  const trimmedValue = value.trim();
  if (!trimmedValue) return "";
  const hasTrigger = trigger && trimmedValue.startsWith(trigger);
  const normalized = hasTrigger ? trimmedValue : `${trigger}${trimmedValue}`;
  return normalized.endsWith(" ") ? normalized : `${normalized} `;
};

const getMentionTriggers = (options: Array<MentionInputMentionItem>) => {
  const candidates = new Set<string>();

  for (const option of options) {
    const firstChar = option.value.trim().charAt(0);
    if (firstChar) {
      candidates.add(firstChar);
    }
  }
  return [...candidates];
};

const buildMentionSources = (props: {
  users: Array<MentionInputMentionItem>;
  resources: Array<MentionInputMentionItem>;
  variables: Array<MentionInputMentionItem>;
  mentionSources?: Array<MentionInputTriggerSource>;
}) => {
  if (props.mentionSources?.length) {
    return props.mentionSources;
  }

  const nextSources = [...defaultMentionSources];

  nextSources[0] = {
    ...nextSources[0],
    items: props.users,
  };
  nextSources[1] = {
    ...nextSources[1],
    items: props.resources,
  };
  nextSources[2] = {
    ...nextSources[2],
    items: props.variables,
  };

  return nextSources.filter((source) => source.items.length);
};

const getMentionOptionsFromSources = (
  sources: Array<MentionInputTriggerSource>,
) => {
  const nextOptions: Array<MentionInputMentionItem> = [];

  for (const source of sources) {
    for (const item of source.items) {
      const value = normalizeMentionValue(source.trigger, item.value);
      if (!value) continue;

      nextOptions.push({
        ...item,
        value,
        description: item.description ?? source.description,
      });
    }
  }
  return nextOptions;
};

export type MentionInputProps = {
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  submitLabel?: ReactNode;
  submitIcon?: ReactNode;
  submitShortcut?: InputPanelSubmitShortcut;
  size?: InputPanelSize;
  style?: CSSProperties;
  slotClassNames?: InputPanelSlotClassNames;
  maxRows?: number;
  allowEmptySubmit?: boolean;
  autoResize?: boolean;
  disabled?: boolean;
  loading?: boolean;
  minRows?: number;
  maxLength?: number;
  autoFocus?: boolean;
  mentionLabel?: ReactNode;
  mentionTriggers?: Array<string>;
  mentionOptions?: Array<MentionInputMentionItem>;
  mentionMaxSuggestions?: number;
  mentionListProps?: MentionInputMentionListProps;
  onValueChange?: (value: string) => void;
  onSubmit?: (value: string, context: MentionInputSubmitContext) => void;
  onMentionClick?: () => void;
  onMentionQuery?: (context: MentionInputMentionContext | null) => void;
  renderMentionOptions?: (
    context: MentionState,
    options: Array<MentionInputMentionItem>,
    onSelect: (item: MentionInputMentionItem) => void,
  ) => ReactNode;
  renderMentionItem?: (
    context: MentionState,
    item: MentionInputMentionItem,
    onSelect: (item: MentionInputMentionItem) => void,
  ) => ReactNode;
  actions?: ReactNode;
  footer?: ReactNode;
  beforeInput?: ReactNode;
  className?: string;
  users?: Array<MentionInputMentionItem>;
  resources?: Array<MentionInputMentionItem>;
  variables?: Array<MentionInputMentionItem>;
  mentionSources?: Array<MentionInputTriggerSource>;
  textareaProps?: Omit<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    | "autoFocus"
    | "children"
    | "className"
    | "defaultValue"
    | "disabled"
    | "maxLength"
    | "onChange"
    | "placeholder"
    | "rows"
    | "value"
  >;
};

export const MentionInput = forwardRef<HTMLTextAreaElement, MentionInputProps>(
  (props, forwardedRef) => {
    const {
      value,
      defaultValue = "",
      onValueChange,
      onSubmit,
      placeholder = "写下你的评论...",
      submitLabel = "发布",
      submitIcon,
      size = "md",
      disabled = false,
      loading = false,
      minRows = 3,
      maxRows = minRows,
      autoResize = false,
      maxLength,
      autoFocus = false,
      allowEmptySubmit = false,
      submitShortcut = "mod-enter",
      onMentionClick,
      mentionTriggers: customMentionTriggers,
      mentionOptions: customMentionOptions,
      mentionMaxSuggestions = 6,
      onMentionQuery,
      renderMentionOptions,
      mentionListProps,
      renderMentionItem,
      users = [],
      resources = [],
      variables = [],
      mentionSources,
      mentionLabel,
      actions,
      footer,
      beforeInput,
      className,
      textareaProps,
      style,
      slotClassNames,
    } = props;
    const isControlled = value !== undefined;
    const [innerValue, setInnerValue] = useState(defaultValue);
    const currentValue = isControlled ? value : innerValue;
    const trimmedValue = currentValue.trim();
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    useImperativeHandle(forwardedRef, () => textareaRef.current!);
    const [activeMention, setActiveMention] = useState<MentionState | null>(
      null,
    );
    const activeMentionRef = useRef<MentionState | null>(null);
    const [mentionAnchorPoint, setMentionAnchorPoint] = useState<null | {
      x: number;
      y: number;
    }>(null);
    const mentionPanelRef = useRef<HTMLDivElement>(null);
    const [mentionPanelPosition, setMentionPanelPosition] =
      useState<MentionPanelPosition | null>(null);

    const sources = useMemo(
      () =>
        buildMentionSources({
          users,
          resources,
          variables,
          mentionSources,
        }),
      [users, resources, variables, mentionSources],
    );

    const resolvedMentionOptions = useMemo(() => {
      if (customMentionOptions !== undefined) {
        return customMentionOptions;
      }

      return getMentionOptionsFromSources(sources);
    }, [customMentionOptions, sources]);

    const resolvedMentionTriggers = useMemo(() => {
      if (customMentionTriggers !== undefined) {
        return customMentionTriggers;
      }

      if (customMentionOptions !== undefined) {
        return getMentionTriggers(customMentionOptions);
      }

      return sources.map(({ trigger }) => trigger);
    }, [
      customMentionOptions,
      customMentionTriggers,
      sources,
      sources.length,
      mentionSources,
    ]);

    const resolvedMentionLabel =
      mentionLabel ??
      (resolvedMentionTriggers.length
        ? resolvedMentionTriggers[0]
        : (mentionSources?.[0]?.label ?? "@"));

    const normalizedMentions = useMemo(
      () => [...new Set(resolvedMentionTriggers.filter(Boolean))],
      [resolvedMentionTriggers],
    );

    const updateMentionAnchorPoint = useCallback(() => {
      const textarea = textareaRef.current;
      if (!textarea || !activeMentionRef.current) {
        setMentionAnchorPoint(null);
        return;
      }

      const nextPoint = getTextareaCaretPoint(textarea);
      if (!nextPoint) {
        setMentionAnchorPoint(null);
        return;
      }
      setMentionAnchorPoint(nextPoint);
    }, []);

    const closeMentionPanel = useCallback(() => {
      activeMentionRef.current = null;
      setActiveMention(null);
      setMentionAnchorPoint(null);
      setMentionPanelPosition(null);
      onMentionQuery?.(null);
    }, [onMentionQuery]);

    const updateMentionPanelPosition = useCallback(() => {
      if (!mentionAnchorPoint || !mentionPanelRef.current || !activeMention) {
        return;
      }

      const textarea = textareaRef.current;
      const textareaRect = textarea?.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const fallbackWidth = Math.max(viewportWidth - 16, 0);
      const viewportIsMobile = isMobileViewport(viewportWidth);
      const targetWidth = getMentionInputMentionPanelWidth({
        isMobile: viewportIsMobile,
        fallbackWidth,
        textareaWidth: textareaRect?.width ?? 0,
      });

      const panelRect = mentionPanelRef.current.getBoundingClientRect();
      const panelWidth = viewportIsMobile
        ? clampNumber(panelRect.width || targetWidth, targetWidth, targetWidth)
        : clampNumber(
            panelRect.width || targetWidth,
            12 * 16,
            Math.min(targetWidth, fallbackWidth),
          );
      const panelHeight = panelRect.height || 188;
      const leftLimitMin = textareaRect
        ? Math.max(8, textareaRect.left + 6)
        : 8;
      const leftLimitMax = textareaRect
        ? Math.max(
            8,
            Math.min(
              viewportWidth - panelWidth - 8,
              textareaRect.right - panelWidth - 8,
            ),
          )
        : Math.max(8, viewportWidth - panelWidth - 8);

      const left = viewportIsMobile
        ? clampNumber(
            textareaRect ? textareaRect.left + 6 : mentionAnchorPoint.x,
            leftLimitMin,
            leftLimitMax,
          )
        : clampNumber(mentionAnchorPoint.x, leftLimitMin, leftLimitMax);
      const cursorLineHeight = getTextareaLineHeight(textarea);
      const baseTop = mentionAnchorPoint.y + cursorLineHeight + 2;
      const hasBelowSpace = baseTop + panelHeight <= viewportHeight - 8;
      const fallbackTop = textareaRect
        ? textareaRect.top - panelHeight - 8
        : mentionAnchorPoint.y - panelHeight - 8;
      const top = hasBelowSpace
        ? baseTop
        : Math.min(Math.max(fallbackTop, 8), viewportHeight - panelHeight - 8);
      const placement = hasBelowSpace ? "bottom" : "top";
      const clampedTop = clampNumber(
        top,
        8,
        Math.max(8, viewportHeight - panelHeight - 8),
      );

      setMentionPanelPosition({
        x: left,
        y: clampedTop,
        width: panelWidth,
        placement,
      });
    }, [mentionAnchorPoint, activeMention]);

    useEffect(() => {
      if (!activeMention) return;

      const textarea = textareaRef.current;
      const refreshAnchor = () => {
        updateMentionAnchorPoint();
      };

      refreshAnchor();
      window.addEventListener("resize", refreshAnchor);
      window.addEventListener("scroll", refreshAnchor, true);
      textarea?.addEventListener("scroll", refreshAnchor);

      return () => {
        window.removeEventListener("resize", refreshAnchor);
        window.removeEventListener("scroll", refreshAnchor, true);
        textarea?.removeEventListener("scroll", refreshAnchor);
      };
    }, [activeMention, updateMentionAnchorPoint]);

    useEffect(() => {
      if (!activeMention) {
        setMentionPanelPosition(null);
        return;
      }

      const raf = window.requestAnimationFrame(() => {
        updateMentionPanelPosition();
      });

      const handleUpdate = () => {
        updateMentionPanelPosition();
      };
      const handleOutsidePointerDown = (event: PointerEvent) => {
        const target = event.target;
        if (!(target instanceof Node)) return;

        if (
          mentionPanelRef.current?.contains(target) ||
          textareaRef.current?.contains(target)
        ) {
          return;
        }

        closeMentionPanel();
      };

      const handleEscape = (event: KeyboardEvent) => {
        if (event.key !== "Escape") return;
        closeMentionPanel();
      };

      window.addEventListener("resize", handleUpdate);
      window.addEventListener("scroll", handleUpdate, true);
      textareaRef.current?.addEventListener("scroll", handleUpdate);
      textareaRef.current?.ownerDocument?.addEventListener(
        "pointerdown",
        handleOutsidePointerDown,
      );
      textareaRef.current?.ownerDocument?.addEventListener(
        "keydown",
        handleEscape,
      );

      return () => {
        window.cancelAnimationFrame(raf);
        window.removeEventListener("resize", handleUpdate);
        window.removeEventListener("scroll", handleUpdate, true);
        textareaRef.current?.removeEventListener("scroll", handleUpdate);
        textareaRef.current?.ownerDocument?.removeEventListener(
          "pointerdown",
          handleOutsidePointerDown,
        );
        textareaRef.current?.ownerDocument?.removeEventListener(
          "keydown",
          handleEscape,
        );
      };
    }, [activeMention, closeMentionPanel, updateMentionPanelPosition]);

    const updateValue = (nextValue: string) => {
      if (!isControlled) {
        setInnerValue(nextValue);
      }
      onValueChange?.(nextValue);
    };

    const clear = () => {
      updateValue("");
    };

    const applyMentionInsert = (
      replaceValue: string,
      context: MentionState,
    ) => {
      const normalizedReplaceKey = getMentionValueKey(replaceValue);
      const usedMentionKeys = getMentionKeysFromValue(
        textareaRef.current?.value ?? currentValue,
      );

      if (
        normalizedReplaceKey &&
        usedMentionKeys.has(`value:${normalizedReplaceKey}`)
      ) {
        return;
      }

      const targetValue = textareaRef.current?.value ?? currentValue;
      const nextValue =
        targetValue.slice(0, context.start) +
        replaceValue +
        targetValue.slice(context.end);

      updateValue(nextValue);
      setActiveMention(null);
      activeMentionRef.current = null;
      onMentionQuery?.(null);

      requestAnimationFrame(() => {
        const textarea = textareaRef.current;
        if (!textarea) return;

        const nextCursor = context.start + replaceValue.length;
        textarea.focus();
        textarea.setSelectionRange(nextCursor, nextCursor);
      });
    };

    const detectMention = (nextValue: string, caret: number) => {
      if (!normalizedMentions.length || caret <= 0) return null;

      let start = caret;
      while (start > 0 && !/\s/.test(nextValue[start - 1])) {
        start -= 1;
      }

      const token = nextValue.slice(start, caret);
      if (!token) return null;

      const match = normalizedMentions.find((trigger) =>
        token.startsWith(trigger),
      );
      if (!match) return null;

      return {
        trigger: match,
        query: token.slice(match.length),
        start,
        end: caret,
      };
    };

    const updateMentionContext = (nextValue: string, cursor: number) => {
      const match = detectMention(nextValue, cursor);
      const nextMention = match ? { ...match } : null;
      activeMentionRef.current = nextMention;
      setActiveMention(nextMention);

      requestAnimationFrame(() => {
        if (nextMention) {
          updateMentionAnchorPoint();
          return;
        }

        setMentionAnchorPoint(null);
      });

      onMentionQuery?.(
        nextMention
          ? {
              ...nextMention,
              replace: (insertValue) => {
                applyMentionInsert(insertValue, nextMention);
              },
            }
          : null,
      );
    };

    const handleValueChange = (
      nextValue: string,
      event?: ChangeEvent<HTMLTextAreaElement>,
    ) => {
      updateValue(nextValue);
      const cursor = event?.currentTarget.selectionStart ?? nextValue.length;
      updateMentionContext(nextValue, cursor);
    };

    const handleMentionSelect = (item: MentionInputMentionItem) => {
      const match = activeMentionRef.current;
      if (!match) return;
      applyMentionInsert(item.value, match);
    };

    const filteredMentions = useMemo(() => {
      if (!activeMention) return [];

      const options = resolvedMentionOptions;
      if (!options.length) return [];

      const normalizedQuery = activeMention.query.trim().toLowerCase();
      const usedMentionKeys = getMentionKeysFromValue(currentValue);
      const uniqueOptions = new Map<string, MentionInputMentionItem>();

      for (const option of options) {
        const key = getMentionOptionDedupKey(option);
        if (!key || uniqueOptions.has(key)) continue;

        uniqueOptions.set(key, option);
      }

      const hasQuery = Boolean(normalizedQuery);
      const dedupedOptions = Array.from(uniqueOptions.values());
      const matchedOptions = hasQuery
        ? dedupedOptions.filter((option) => {
            const text = String(option.label ?? option.value).toLowerCase();
            const key = getMentionOptionDedupKey(option);

            return (
              key !== null &&
              !usedMentionKeys.has(key) &&
              text.includes(normalizedQuery)
            );
          })
        : dedupedOptions.filter((option) => {
            const key = getMentionOptionDedupKey(option);
            return key !== null && !usedMentionKeys.has(key);
          });

      if (mentionMaxSuggestions <= 0) {
        return matchedOptions;
      }

      return matchedOptions.slice(0, mentionMaxSuggestions);
    }, [
      activeMention,
      mentionMaxSuggestions,
      resolvedMentionOptions,
      currentValue,
    ]);

    const openMentionPanel = () => {
      if (
        !resolvedMentionOptions.length ||
        !textareaRef.current ||
        disabled ||
        loading
      ) {
        return;
      }

      const cursor = textareaRef.current.selectionStart ?? currentValue.length;
      const trigger = resolvedMentionTriggers[0];
      if (!trigger) return;

      const nextMention = {
        trigger,
        query: "",
        start: cursor,
        end: cursor,
      };

      activeMentionRef.current = nextMention;
      setActiveMention(nextMention);
      onMentionQuery?.({
        ...nextMention,
        replace: (insertValue) => {
          applyMentionInsert(insertValue, nextMention);
        },
      });

      requestAnimationFrame(() => {
        textareaRef.current?.focus();
      });

      requestAnimationFrame(() => {
        updateMentionAnchorPoint();
      });
    };

    const showMentionPanel = Boolean(
      activeMention && mentionAnchorPoint && filteredMentions.length,
    );

    const mentionPanel = (() => {
      if (!activeMention) return null;
      if (!resolvedMentionOptions.length) return null;
      if (!filteredMentions.length) return null;
      if (!showMentionPanel) return null;

      const mentionPanelClassName = classNames(
        "willa-comment-input-mentions",
        "willa-comment-input-mention-panel",
      );
      const textareaStyle = textareaRef.current
        ? window.getComputedStyle(textareaRef.current)
        : null;
      const panelBackground =
        textareaStyle?.getPropertyValue("--willa-input-panel-bg")?.trim() ||
        textareaStyle?.getPropertyValue("--willa-comment-input-bg")?.trim() ||
        "#ffffff";
      const panelBorderColor =
        textareaStyle?.getPropertyValue("--willa-input-panel-border")?.trim() ??
        textareaStyle
          ?.getPropertyValue("--willa-comment-input-tool-border")
          ?.trim() ??
        "rgba(15, 23, 42, 0.12)";
      const panelShadow =
        textareaStyle?.getPropertyValue("--willa-comment-shadow")?.trim() ||
        "0 16px 42px rgba(15, 23, 42, 0.12)";
      const mentionAnchorFallback = mentionAnchorPoint ?? {
        x: 0,
        y: 0,
      };
      const panelStyle = {
        position: "fixed" as const,
        width:
          mentionPanelPosition?.width !== undefined
            ? `${mentionPanelPosition.width}px`
            : `${getMentionInputMentionPanelWidth({
                isMobile: isMobileViewport(window.innerWidth),
                fallbackWidth: Math.max(window.innerWidth - 16, 0),
                textareaWidth:
                  textareaRef.current?.getBoundingClientRect().width ?? 0,
              })}px`,
        left: `${mentionPanelPosition?.x ?? mentionAnchorFallback.x}px`,
        top: `${mentionPanelPosition?.y ?? mentionAnchorFallback.y + 10}px`,
        "--willa-input-panel-bg": panelBackground,
        "--willa-comment-input-tool-border": panelBorderColor,
        "--willa-comment-shadow": panelShadow,
        "--willa-comment-input-mention-item-bg-hover":
          textareaStyle
            ?.getPropertyValue("--willa-comment-input-mention-item-bg-hover")
            ?.trim() ||
          textareaStyle
            ?.getPropertyValue("--willa-list-item-bg-hover")
            ?.trim() ||
          "rgba(255, 255, 255, 0.08)",
        "--willa-comment-input-mention-item-border-hover":
          textareaStyle
            ?.getPropertyValue(
              "--willa-comment-input-mention-item-border-hover",
            )
            ?.trim() ||
          textareaStyle?.getPropertyValue("--willa-list-border")?.trim() ||
          "rgba(255, 255, 255, 0.16)",
        "--willa-comment-input-mention-item-text-hover":
          textareaStyle
            ?.getPropertyValue("--willa-comment-input-mention-item-text-hover")
            ?.trim() ||
          textareaStyle?.getPropertyValue("--willa-list-text")?.trim() ||
          "var(--willa-text)",
        "--willa-content-scrollbar-thumb":
          textareaStyle
            ?.getPropertyValue("--willa-content-scrollbar-thumb")
            ?.trim() ||
          textareaStyle?.getPropertyValue("--willa-scrollbar-thumb")?.trim() ||
          "color-mix(in srgb, var(--willa-text-soft) 56%, transparent)",
      } as CSSProperties & Record<string, string>;

      if (renderMentionOptions) {
        return createPortal(
          <div
            ref={mentionPanelRef}
            className="willa-comment-input-mention-layer"
            style={panelStyle}
          >
            <div className={mentionPanelClassName}>
              {renderMentionOptions(
                activeMention,
                filteredMentions,
                handleMentionSelect,
              )}
            </div>
          </div>,
          document.body,
        );
      }

      if (renderMentionItem) {
        return createPortal(
          <div
            ref={mentionPanelRef}
            className="willa-comment-input-mention-layer"
            style={panelStyle}
          >
            <div className={mentionPanelClassName}>
              {filteredMentions.map((option) => (
                <div key={option.id ?? option.value}>
                  {renderMentionItem(
                    activeMention,
                    option,
                    handleMentionSelect,
                  )}
                </div>
              ))}
            </div>
          </div>,
          document.body,
        );
      }

      const {
        onItemClick: externalOnItemClick,
        className: externalClassName,
        maxHeight,
        split,
        virtualScroll = true,
        ...restListProps
      } = mentionListProps ?? {};
      const shouldUseVirtualScroll = virtualScroll !== false;

      const listItems: Array<ListItem> = filteredMentions.map((option) => ({
        id: option.id ?? option.value,
        title: option.label ?? option.value,
        description: getMentionItemMeta(option) ?? undefined,
        media: option.avatarSrc ? (
          <Avatar
            name={String(option.label ?? option.value)}
            src={option.avatarSrc}
            size="sm"
          />
        ) : null,
      }));

      return createPortal(
        <div
          ref={mentionPanelRef}
          className="willa-comment-input-mention-layer"
          style={panelStyle}
        >
          <div className={classNames(mentionPanelClassName, externalClassName)}>
            <List
              {...restListProps}
              className={classNames(
                "willa-comment-input-mention-list",
                "willa-list--plain",
                "willa-list--sm",
                shouldUseVirtualScroll &&
                  "willa-comment-input-mention-list--virtual-scroll",
              )}
              size="sm"
              variant="plain"
              itemLayout="horizontal"
              split={split ?? true}
              virtualScroll={shouldUseVirtualScroll}
              virtualScrollItemHeight={
                MENTION_INPUT_MENTION_VIRTUAL_SCROLL_ITEM_HEIGHT
              }
              maxHeight={maxHeight ?? "11.8rem"}
              items={listItems}
              onItemClick={(
                item,
                event: MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
              ) => {
                const target = filteredMentions.find(
                  ({ id, value }) => (id ?? value) === item.id,
                );
                if (!target) return;
                handleMentionSelect(target);
                externalOnItemClick?.(item, event);
              }}
            />
          </div>
        </div>,
        document.body,
      );
    })();

    const handleSubmit = (
      _inputValue: string,
      _event: InputPanelSubmitEvent,
    ) => {
      if (!allowEmptySubmit && !trimmedValue) return;
      onSubmit?.(trimmedValue, { clear });
    };

    const showTools = Boolean(
      resolvedMentionOptions.length || onMentionClick || actions,
    );

    return (
      <InputPanel
        {...textareaProps}
        className={classNames(
          "willa-comment-input",
          "willa-mention-input",
          loading && "willa-comment-input--loading",
          className,
        )}
        slotClassNames={{
          actions: slotClassNames?.actions ?? "willa-comment-input-actions",
          control: slotClassNames?.control ?? "willa-comment-input-control",
          footer: slotClassNames?.footer ?? "willa-comment-input-footer",
          meta: slotClassNames?.meta ?? "willa-comment-input-extra",
          submit: slotClassNames?.submit ?? "willa-comment-input-submit",
        }}
        autoFocus={autoFocus}
        autoResize={autoResize}
        minRows={minRows}
        maxRows={maxRows}
        size={size}
        style={style}
        allowEmptySubmit={allowEmptySubmit}
        submitShortcut={submitShortcut}
        submitIcon={submitIcon}
        maxLength={maxLength}
        loading={loading}
        beforeInput={
          <>
            {beforeInput}
            {mentionPanel}
          </>
        }
        footer={
          footer ? (
            <span>{footer}</span>
          ) : maxLength ? (
            <span>
              {currentValue.length}/{maxLength}
            </span>
          ) : (
            <span>⌘ Enter 发布</span>
          )
        }
        actions={
          showTools ? (
            <>
              {onMentionClick ? (
                <MentionInputToolButton
                  aria-label="提及用户"
                  onClick={() => {
                    onMentionClick?.();
                    openMentionPanel();
                  }}
                  disabled={disabled || loading}
                >
                  {resolvedMentionLabel}
                </MentionInputToolButton>
              ) : null}
              {actions}
            </>
          ) : null
        }
        submitLabel={submitLabel}
        value={currentValue}
        placeholder={placeholder}
        disabled={disabled}
        onValueChange={handleValueChange}
        ref={textareaRef}
        onSubmit={handleSubmit}
      />
    );
  },
);

const MentionInputToolButton = (props: MentionInputToolButtonProps) => {
  const { className, type = "button", ...buttonProps } = props;
  return (
    <button
      {...buttonProps}
      type={type}
      className={classNames("willa-comment-input-tool", className)}
    />
  );
};

const getTextareaCaretPoint = (textarea: HTMLTextAreaElement) => {
  const { selectionStart } = textarea;
  if (selectionStart === null || selectionStart < 0) return null;

  const textareaRect = textarea.getBoundingClientRect();
  if (
    !Number.isFinite(textareaRect.left) ||
    !Number.isFinite(textareaRect.top)
  ) {
    return {
      x: textareaRect.left,
      y: textareaRect.top + Math.max(2, textareaRect.height / 3),
    };
  }

  const textareaStyle = window.getComputedStyle(textarea);
  const mirror = document.createElement("div");

  Object.assign(mirror.style, {
    position: "fixed",
    top: `${textareaRect.top}px`,
    left: `${textareaRect.left}px`,
    width: `${textarea.offsetWidth}px`,
    visibility: "hidden",
    whiteSpace: "pre-wrap",
    overflowWrap: "break-word",
    wordWrap: "break-word",
    border: "0",
    boxSizing: textareaStyle.boxSizing,
    padding: textareaStyle.padding,
    fontFamily: textareaStyle.fontFamily,
    fontSize: textareaStyle.fontSize,
    fontWeight: textareaStyle.fontWeight,
    fontStyle: textareaStyle.fontStyle,
    fontVariant: textareaStyle.fontVariant,
    letterSpacing: textareaStyle.letterSpacing,
    lineHeight: textareaStyle.lineHeight,
    textAlign: textareaStyle.textAlign,
    textTransform: textareaStyle.textTransform,
    textIndent: textareaStyle.textIndent,
    tabSize: textareaStyle.tabSize,
    direction: textareaStyle.direction,
    pointerEvents: "none",
  } as CSSProperties);

  mirror.textContent = textarea.value.slice(0, selectionStart);
  const pointer = document.createElement("span");
  pointer.textContent = "\u200b";
  mirror.appendChild(pointer);
  document.body.appendChild(mirror);

  const mirrorRect = mirror.getBoundingClientRect();
  const pointerRect = pointer.getBoundingClientRect();
  mirror.remove();

  if (!mirrorRect.width || !mirrorRect.height) {
    return {
      x: textareaRect.left + 8,
      y: textareaRect.top + 8,
    };
  }

  const offsetX = pointerRect.left - mirrorRect.left - textarea.scrollLeft;
  const offsetY = pointerRect.top - mirrorRect.top - textarea.scrollTop;
  const nextX = textareaRect.left + offsetX;
  const nextY = textareaRect.top + offsetY;

  const lineHeight = Number.parseFloat(textareaStyle.lineHeight);
  const fontSize = Number.parseFloat(textareaStyle.fontSize);
  const visibleLineHeight =
    Number.isFinite(lineHeight) && lineHeight > 0
      ? lineHeight
      : Number.isFinite(fontSize) && fontSize > 0
        ? fontSize
        : 18;
  const safeOffsetY = Math.min(
    Math.max(offsetY, visibleLineHeight * 0.2),
    Math.max(
      visibleLineHeight * 0.8,
      textareaRect.height - visibleLineHeight * 0.8,
    ),
  );
  const safeOffsetX = Math.min(
    Math.max(offsetX, 0),
    Math.max(8, textareaRect.width - 8),
  );

  if (
    !Number.isFinite(offsetX) ||
    !Number.isFinite(offsetY) ||
    !Number.isFinite(nextX) ||
    !Number.isFinite(nextY) ||
    offsetY < 0 ||
    offsetY > textareaRect.height
  ) {
    return {
      x: textareaRect.left + 8,
      y: textareaRect.top + Math.max(8, textareaRect.height / 2),
    };
  }

  return {
    x: textareaRect.left + safeOffsetX,
    y: textareaRect.top + safeOffsetY,
  };
};

const getTextareaLineHeight = (textarea: HTMLTextAreaElement | null) => {
  if (!textarea) {
    return 18;
  }

  const textareaStyle = window.getComputedStyle(textarea);
  const lineHeight = Number.parseFloat(textareaStyle.lineHeight);
  const fontSize = Number.parseFloat(textareaStyle.fontSize);

  if (Number.isFinite(lineHeight) && lineHeight > 0) {
    return lineHeight;
  }

  return Number.isFinite(fontSize) && fontSize > 0 ? fontSize : 18;
};

const getMentionOptionDedupKey = (option: MentionInputMentionItem) => {
  const normalizedValue = getMentionValueKey(option.value);
  if (normalizedValue) {
    return `value:${normalizedValue}`;
  }

  if (option.id) {
    return `id:${String(option.id).trim().toLowerCase()}`;
  }

  const normalizedLabel = getMentionValueKey(option.label);
  return normalizedLabel ? `label:${normalizedLabel}` : null;
};

const getMentionValueKey = (value: unknown) => {
  const text = String(value ?? "")
    .trim()
    .toLowerCase();
  if (!text) {
    return null;
  }

  return text
    .replace(/^@/, "")
    .replace(/[\s,.，。;；:：!！?？、）\]\[(){}<>]+$/, "");
};

const getMentionKeysFromValue = (value: string) => {
  const mentions = new Set<string>();
  const matcher = /@([^\s]+)/gu;

  for (const match of value.matchAll(matcher)) {
    const normalized = getMentionValueKey(match[1]);
    if (!normalized) continue;

    mentions.add(`value:${normalized}`);
  }

  return mentions;
};

const getMentionInputMentionPanelWidth = (options: {
  isMobile: boolean;
  fallbackWidth: number;
  textareaWidth: number;
}) => {
  const { isMobile, fallbackWidth, textareaWidth } = options;
  const rawWidth = Math.max(16, textareaWidth || fallbackWidth);
  const baseWidth = isMobile ? rawWidth * 0.95 : rawWidth * 0.78;
  const maxWidth = isMobile
    ? Math.max(fallbackWidth, 0)
    : Math.min(18 * 16, fallbackWidth);
  const minWidth = Math.min(12 * 16, maxWidth);
  const clampedMax = Math.max(maxWidth, minWidth);
  const width = clampNumber(baseWidth, minWidth, clampedMax);

  return Math.max(width, 0);
};

type MentionInputToolButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

MentionInput.displayName = "MentionInput";
