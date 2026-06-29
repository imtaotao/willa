import {
  type AriaRole,
  type KeyboardEventHandler,
  type ReactNode,
  type Ref,
} from "react";
import { createPortal } from "react-dom";
import { useWillaThemeScopeProps } from "@willa-ui/shared";

import type { FloatingPanelPosition } from "#form/internal/useFloatingPanel";

export type FloatingPanelPortalProps = {
  children: ReactNode;
  open: boolean;
};

export function FloatingPanelPortal(props: FloatingPanelPortalProps) {
  if (!props.open || typeof document === "undefined") return null;
  return createPortal(props.children, document.body);
}

export type FloatingPanelShellProps = {
  children: ReactNode;
  className: string;
  id: string;
  panelRef: Ref<HTMLDivElement>;
  position: FloatingPanelPosition | null;
  role: AriaRole;
  ariaDescribedBy?: string;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  ariaModal?: boolean;
  ariaMultiselectable?: boolean;
  onKeyDown?: KeyboardEventHandler<HTMLDivElement>;
};

export function FloatingPanelShell(props: FloatingPanelShellProps) {
  const {
    ariaDescribedBy,
    ariaLabel,
    ariaLabelledBy,
    ariaModal,
    ariaMultiselectable,
    children,
    className,
    id,
    panelRef,
    position,
    role,
    onKeyDown,
  } = props;
  const themeScopeProps = useWillaThemeScopeProps();

  return (
    <div
      {...themeScopeProps}
      ref={panelRef}
      id={id}
      className={className}
      role={role}
      aria-describedby={ariaDescribedBy}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      aria-modal={ariaModal ? true : undefined}
      aria-multiselectable={ariaMultiselectable ? true : undefined}
      onKeyDown={onKeyDown}
      style={getFloatingPanelStyle(position)}
    >
      {children}
    </div>
  );
}

const getFloatingPanelStyle = (position: FloatingPanelPosition | null) => {
  if (!position) {
    return { left: 0, top: 0, visibility: "hidden" as const };
  }
  return {
    left: position.left,
    top: position.top,
    width: position.width,
  };
};
