import type {
  AnchorHTMLAttributes,
  CSSProperties,
  HTMLAttributes,
  MouseEvent,
  ReactNode,
} from "react";

export type TypographyType = "secondary" | "success" | "warning" | "danger";
export type TypographyTitleLevel = 1 | 2 | 3 | 4 | 5;

export type TypographyCopyable =
  | boolean
  | {
      text?: string | (() => string | Promise<string>);
      copiedDuration?: number;
      icon?: ReactNode | [ReactNode, ReactNode];
      tooltips?: false | [ReactNode, ReactNode];
      tabIndex?: number;
      onCopy?: (text: string) => void;
    };

export type TypographyEditable =
  | boolean
  | {
      text?: string;
      editing?: boolean;
      defaultEditing?: boolean;
      maxLength?: number;
      autoSize?: boolean | { minRows?: number; maxRows?: number };
      icon?: ReactNode;
      tooltip?: ReactNode | false;
      triggerType?: Array<"icon" | "text">;
      enterIcon?: ReactNode | null;
      tabIndex?: number;
      onChange?: (value: string) => void;
      onCancel?: () => void;
      onStart?: () => void;
      onEnd?: () => void;
    };

export type TypographyEllipsis =
  | boolean
  | {
      rows?: number;
      expandable?: boolean | "collapsible";
      expanded?: boolean;
      defaultExpanded?: boolean;
      suffix?: ReactNode;
      symbol?: ReactNode | ((expanded: boolean) => ReactNode);
      tooltip?: ReactNode | boolean;
      onExpand?: (
        event: MouseEvent<HTMLButtonElement>,
        info: { expanded: boolean },
      ) => void;
      onEllipsis?: (ellipsis: boolean) => void;
    };

export type TypographyActions = {
  placement?: "start" | "end";
};

export type TypographySemanticDOM =
  | "root"
  | "content"
  | "actions"
  | "action"
  | "textarea";

export type TypographyClassNames = Partial<
  Record<TypographySemanticDOM, string>
>;

export type TypographyStyles = Partial<
  Record<TypographySemanticDOM, CSSProperties>
>;

export type TypographyProps = {
  children?: ReactNode;
  className?: string;
  classNames?: TypographyClassNames;
  styles?: TypographyStyles;
} & HTMLAttributes<HTMLDivElement>;

export type TypographyTextBaseProps = {
  children?: ReactNode;
  type?: TypographyType;
  strong?: boolean;
  italic?: boolean;
  underline?: boolean;
  delete?: boolean;
  code?: boolean;
  mark?: boolean;
  keyboard?: boolean;
  disabled?: boolean;
  copyable?: TypographyCopyable;
  editable?: TypographyEditable;
  ellipsis?: TypographyEllipsis;
  actions?: TypographyActions;
  className?: string;
  classNames?: TypographyClassNames;
  styles?: TypographyStyles;
};

export type TypographyTextProps = TypographyTextBaseProps &
  Omit<HTMLAttributes<HTMLSpanElement>, keyof TypographyTextBaseProps>;

export type TypographyParagraphProps = TypographyTextBaseProps &
  Omit<HTMLAttributes<HTMLParagraphElement>, keyof TypographyTextBaseProps>;

export type TypographyTitleProps = TypographyTextBaseProps & {
  level?: TypographyTitleLevel;
} & Omit<HTMLAttributes<HTMLHeadingElement>, keyof TypographyTextBaseProps>;

export type TypographyLinkProps = TypographyTextBaseProps &
  Omit<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    keyof TypographyTextBaseProps | "href"
  > & {
    href?: string;
  };

export type TypographyContentKind = "text" | "paragraph" | "title" | "link";
export type CopyStatus = "idle" | "copied" | "failed";

export type RenderTypographyContentOptions = TypographyTextBaseProps & {
  kind: TypographyContentKind;
  level?: TypographyTitleLevel;
  href?: string;
  target?: string;
  rel?: string;
  className?: string;
  classNames?: TypographyClassNames;
  styles?: TypographyStyles;
  style?: CSSProperties;
  rootProps:
    | Omit<HTMLAttributes<HTMLSpanElement>, keyof TypographyTextBaseProps>
    | Omit<HTMLAttributes<HTMLParagraphElement>, keyof TypographyTextBaseProps>
    | Omit<HTMLAttributes<HTMLHeadingElement>, keyof TypographyTextBaseProps>
    | Omit<
        AnchorHTMLAttributes<HTMLAnchorElement>,
        keyof TypographyTextBaseProps | "href"
      >;
};
