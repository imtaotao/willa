import type { ReactNode } from "react";
import classNames from "classnames";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

import {
  EmptyState,
  type EmptyStateAlign,
  type EmptyStateSize,
  type EmptyStateVariant,
} from "#content/components/EmptyState";

export type NotFoundProps = {
  title?: ReactNode;
  description?: ReactNode;
  icon?: ReactNode;
  image?: ReactNode;
  actions?: ReactNode;
  footer?: ReactNode;
  variant?: EmptyStateVariant;
  size?: EmptyStateSize;
  align?: EmptyStateAlign;
  className?: string;
  children?: ReactNode;
};

export function NotFound(props: NotFoundProps) {
  const {
    title = "404 页面不存在",
    description = "你访问的内容可能已被移动、删除，或暂时不可用。",
    icon = <NotFoundIllustration />,
    image,
    actions,
    footer,
    variant = "soft",
    size = "lg",
    align = "center",
    className,
    children,
  } = props;

  return (
    <EmptyState
      className={classNames("willa-not-found", className)}
      icon={image ? undefined : icon}
      image={image}
      title={title}
      description={description}
      actions={actions}
      footer={footer}
      variant={variant}
      size={size}
      align={align}
    >
      {children}
    </EmptyState>
  );
}

function NotFoundIllustration() {
  return (
    <span className="willa-not-found-badge" aria-hidden="true">
      <span className="willa-not-found-badge-icon">
        <MagnifyingGlassIcon />
      </span>
      <span className="willa-not-found-badge-code">404</span>
    </span>
  );
}
