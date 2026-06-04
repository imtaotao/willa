import { useEffect, useSyncExternalStore, type ReactNode } from "react";
import { createRoot, type Root } from "react-dom/client";
import {
  CheckCircledIcon,
  Cross2Icon,
  CrossCircledIcon,
  ExclamationTriangleIcon,
  InfoCircledIcon,
} from "@radix-ui/react-icons";
import classNames from "classnames";

export type ToastTone = "info" | "success" | "warning" | "error";
export type ToastPlacement =
  | "top"
  | "bottom"
  | "top-left"
  | "top-center"
  | "top-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right";

export type ToastAction = {
  label: ReactNode;
  onClick: () => void;
};

export type ToastOptions = {
  title: ReactNode;
  id?: string;
  description?: ReactNode;
  tone?: ToastTone;
  duration?: number | false;
  action?: ToastAction;
};

export type ToastConfig = {
  placement?: ToastPlacement;
  duration?: number;
  maxToasts?: number;
  className?: string;
};

export type ToastApi = {
  show: (options: ToastOptions) => string;
  info: (
    title: ReactNode,
    options?: Omit<ToastOptions, "title" | "tone">,
  ) => string;
  success: (
    title: ReactNode,
    options?: Omit<ToastOptions, "title" | "tone">,
  ) => string;
  warning: (
    title: ReactNode,
    options?: Omit<ToastOptions, "title" | "tone">,
  ) => string;
  error: (
    title: ReactNode,
    options?: Omit<ToastOptions, "title" | "tone">,
  ) => string;
  dismiss: (id: string) => void;
  clear: () => void;
};

type ToastItem = Required<Pick<ToastOptions, "id" | "tone">> &
  Omit<ToastOptions, "id" | "tone">;

type ToastState = {
  toasts: Array<ToastItem>;
  config: Required<ToastConfig>;
};

const defaultToastConfig = {
  placement: "top-right",
  duration: 3000,
  maxToasts: 4,
  className: "",
} satisfies Required<ToastConfig>;

const toastIcons: Record<ToastTone, ReactNode> = {
  info: <InfoCircledIcon />,
  success: <CheckCircledIcon />,
  warning: <ExclamationTriangleIcon />,
  error: <CrossCircledIcon />,
};

export function createToast(config?: ToastConfig): ToastApi {
  let toastState: ToastState = {
    toasts: [],
    config: resolveToastConfig(config),
  };
  let toastRoot: Root | null = null;
  let toastId = 0;

  const listeners = new Set<() => void>();

  const subscribe = (listener: () => void) => {
    listeners.add(listener);

    return () => {
      listeners.delete(listener);
    };
  };

  const getSnapshot = () => toastState;

  const updateToastState = (nextState: ToastState) => {
    toastState = nextState;
    listeners.forEach((listener) => listener());
  };

  const dismissToast = (id: string) => {
    updateToastState({
      ...toastState,
      toasts: toastState.toasts.filter((item) => item.id !== id),
    });
  };

  const ensureToastRoot = () => {
    if (toastRoot || typeof document === "undefined") return;

    const toastHost = document.createElement("div");
    toastHost.setAttribute("data-willa-toast-root", "");
    document.body.appendChild(toastHost);
    toastRoot = createRoot(toastHost);
    toastRoot.render(
      <ToastViewport
        subscribe={subscribe}
        getSnapshot={getSnapshot}
        onDismiss={dismissToast}
      />,
    );
  };

  const addToast = (options: ToastOptions) => {
    const id = options.id ?? `willa-toast-${++toastId}`;
    const nextToast: ToastItem = {
      ...options,
      id,
      tone: options.tone ?? "info",
    };
    const withoutSameId = toastState.toasts.filter((item) => item.id !== id);

    ensureToastRoot();
    updateToastState({
      ...toastState,
      toasts: [nextToast, ...withoutSameId].slice(
        0,
        toastState.config.maxToasts,
      ),
    });

    return id;
  };

  return {
    show: (options) => addToast(options),
    info: (title, options) => addToast({ ...options, title, tone: "info" }),
    success: (title, options) =>
      addToast({ ...options, title, tone: "success" }),
    warning: (title, options) =>
      addToast({ ...options, title, tone: "warning" }),
    error: (title, options) => addToast({ ...options, title, tone: "error" }),
    dismiss: (id) => dismissToast(id),
    clear: () => updateToastState({ ...toastState, toasts: [] }),
  };
}

export const toast = createToast();

function resolveToastConfig(config?: ToastConfig): Required<ToastConfig> {
  return {
    placement: config?.placement ?? defaultToastConfig.placement,
    duration: config?.duration ?? defaultToastConfig.duration,
    maxToasts: config?.maxToasts ?? defaultToastConfig.maxToasts,
    className: config?.className ?? defaultToastConfig.className,
  };
}

const ToastViewport = (props: {
  subscribe: (listener: () => void) => () => void;
  getSnapshot: () => ToastState;
  onDismiss: (id: string) => void;
}) => {
  const state = useSyncExternalStore(
    props.subscribe,
    props.getSnapshot,
    props.getSnapshot,
  );

  if (state.toasts.length === 0) return null;

  return (
    <div
      className={classNames(
        "willa-toast-viewport",
        `willa-toast-viewport--${normalizePlacement(state.config.placement)}`,
        state.config.className,
      )}
      role="region"
      aria-label="通知"
    >
      {state.toasts.map((item) => (
        <ToastItemView
          key={item.id}
          toast={item}
          defaultDuration={state.config.duration}
          onDismiss={props.onDismiss}
        />
      ))}
    </div>
  );
};

const normalizePlacement = (placement: ToastPlacement) => {
  if (placement === "top") return "top-center";
  if (placement === "bottom") return "bottom-center";
  return placement;
};

const ToastItemView = (props: {
  toast: ToastItem;
  defaultDuration: number;
  onDismiss: (id: string) => void;
}) => {
  const { toast, defaultDuration, onDismiss } = props;
  const resolvedDuration = toast.duration ?? defaultDuration;

  useEffect(() => {
    if (resolvedDuration === false) return;

    const timer = window.setTimeout(() => {
      onDismiss(toast.id);
    }, resolvedDuration);

    return () => {
      window.clearTimeout(timer);
    };
  }, [onDismiss, resolvedDuration, toast.id]);

  const handleActionClick = () => {
    toast.action?.onClick();
    onDismiss(toast.id);
  };

  return (
    <div
      className={classNames("willa-toast", `willa-toast--${toast.tone}`)}
      role={toast.tone === "error" ? "alert" : "status"}
    >
      <span className="willa-toast-icon" aria-hidden="true">
        {toastIcons[toast.tone]}
      </span>
      <div className="willa-toast-content">
        <div className="willa-toast-title">{toast.title}</div>
        {toast.description ? (
          <div className="willa-toast-description">{toast.description}</div>
        ) : null}
      </div>
      {toast.action ? (
        <button
          type="button"
          className="willa-toast-action"
          onClick={handleActionClick}
        >
          {toast.action.label}
        </button>
      ) : null}
      <button
        type="button"
        className="willa-toast-close"
        aria-label="关闭通知"
        onClick={() => onDismiss(toast.id)}
      >
        <Cross2Icon />
      </button>
    </div>
  );
};
