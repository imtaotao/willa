import {
  useMemo,
  useRef,
  useState,
  type AnchorHTMLAttributes,
  type CSSProperties,
  type HTMLAttributes,
  type KeyboardEvent,
  type PointerEvent,
  type ReactNode,
} from "react";
import classNames from "classnames";
import {
  ArchiveIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  FileIcon,
  FileTextIcon,
} from "@radix-ui/react-icons";

export type FileTreeItemType = "file" | "folder";
export type FileTreeSize = "sm" | "md";

export type FileTreeItemBase = {
  name: ReactNode;
  type?: FileTreeItemType;
  id?: string;
  meta?: ReactNode;
  description?: ReactNode;
  icon?: ReactNode;
  selected?: boolean;
  muted?: boolean;
};

export type FileTreeFileItem = FileTreeItemBase & {
  type?: "file";
  href?: string;
  children?: never;
};

export type FileTreeFolderItem = FileTreeItemBase & {
  type?: "folder";
  href?: never;
  children?: Array<FileTreeItem>;
};

export type FileTreeItem = FileTreeFileItem | FileTreeFolderItem;

export type FileTreeProps = {
  items: Array<FileTreeItem>;
  size?: FileTreeSize;
  width?: CSSProperties["width"];
  resizable?: boolean;
  collapsible?: boolean;
  defaultExpandedIds?: Array<string>;
  expandedIds?: Array<string>;
  onExpandedChange?: (expandedIds: Array<string>) => void;
  onFileClick?: (item: FileTreeItem) => void;
  className?: string;
} & Omit<HTMLAttributes<HTMLDivElement>, "children">;

export function FileTree(props: FileTreeProps) {
  const {
    items,
    size = "md",
    width,
    resizable = false,
    collapsible = false,
    defaultExpandedIds,
    expandedIds,
    onExpandedChange,
    onFileClick,
    className,
    style,
    ...treeProps
  } = props;
  const rootRef = useRef<HTMLDivElement>(null);
  const [resizedWidth, setResizedWidth] = useState<number>();
  const initialExpandedIds = useMemo(() => {
    return new Set(defaultExpandedIds ?? collectExpandableIds(items));
  }, [defaultExpandedIds, items]);
  const [uncontrolledExpandedIds, setUncontrolledExpandedIds] =
    useState(initialExpandedIds);
  const resolvedExpandedIds = expandedIds
    ? new Set(expandedIds)
    : uncontrolledExpandedIds;
  const updateExpandedIds = (nextExpandedIds: Set<string>) => {
    if (!expandedIds) {
      setUncontrolledExpandedIds(nextExpandedIds);
    }

    onExpandedChange?.([...nextExpandedIds]);
  };
  const updateResizedWidth = (nextWidth: number) => {
    const rootElement = rootRef.current;
    const maxWidth =
      rootElement?.parentElement?.getBoundingClientRect().width ??
      rootElement?.getBoundingClientRect().width ??
      nextWidth;

    setResizedWidth(clampWidth(nextWidth, 160, maxWidth));
  };
  const handleResizePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (!resizable) return;

    event.preventDefault();
    event.stopPropagation();

    const rootElement = rootRef.current;
    if (!rootElement || typeof window === "undefined") return;

    const startX = event.clientX;
    const startWidth = rootElement.getBoundingClientRect().width;
    const parentWidth =
      rootElement.parentElement?.getBoundingClientRect().width ?? startWidth;
    const handlePointerMove = (moveEvent: globalThis.PointerEvent) => {
      setResizedWidth(
        clampWidth(startWidth + moveEvent.clientX - startX, 160, parentWidth),
      );
    };
    const handlePointerUp = () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);
  };
  const handleResizeKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (!resizable) return;

    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;

    event.preventDefault();
    const currentWidth =
      resizedWidth ?? rootRef.current?.getBoundingClientRect().width ?? 240;
    updateResizedWidth(
      event.key === "ArrowLeft" ? currentWidth - 16 : currentWidth + 16,
    );
  };
  const resolvedStyle = {
    ...style,
    ...(width === undefined ? null : { width }),
    ...(resizedWidth === undefined ? null : { width: `${resizedWidth}px` }),
  };

  return (
    <div
      {...treeProps}
      ref={rootRef}
      style={resolvedStyle}
      className={classNames(
        "willa-file-tree",
        `willa-file-tree--${size}`,
        resizable && "willa-file-tree--resizable",
        className,
      )}
    >
      <div className="willa-file-tree-list" role="tree">
        {items.map((item, index) =>
          renderFileTreeItem({
            collapsible,
            expandedIds: resolvedExpandedIds,
            item,
            onExpandedChange: updateExpandedIds,
            onFileClick,
            depth: 0,
            keyPath: String(item.id ?? index),
            expandedId: getFileTreeItemExpandedId(item, String(index)),
          }),
        )}
      </div>
      {resizable ? (
        <div
          aria-label="调整文件树宽度"
          aria-orientation="vertical"
          className="willa-file-tree-resizer"
          onKeyDown={handleResizeKeyDown}
          onPointerDown={handleResizePointerDown}
          role="separator"
          tabIndex={0}
        />
      ) : null}
    </div>
  );
}

const renderFileTreeItem = (options: {
  collapsible: boolean;
  expandedIds: Set<string>;
  item: FileTreeItem;
  onExpandedChange: (expandedIds: Set<string>) => void;
  onFileClick?: (item: FileTreeItem) => void;
  depth: number;
  keyPath: string;
  expandedId: string;
}) => {
  const {
    collapsible,
    expandedIds,
    item,
    onExpandedChange,
    onFileClick,
    depth,
    keyPath,
    expandedId,
  } = options;
  const hasChildren = Boolean(item.children?.length);
  const type = item.type ?? (hasChildren ? "folder" : "file");
  const isFile = type === "file";
  const isClickableFile = isFile && Boolean(onFileClick);
  const isExpanded =
    !collapsible || !hasChildren || expandedIds.has(expandedId);
  const nameTitle = getFileTreeItemTextTitle(item.name);
  const metaTitle = getFileTreeItemTextTitle(item.meta);
  const toggleExpanded = () => {
    if (!collapsible || !hasChildren) return;

    const nextExpandedIds = new Set(expandedIds);
    if (nextExpandedIds.has(expandedId)) {
      nextExpandedIds.delete(expandedId);
    } else {
      nextExpandedIds.add(expandedId);
    }

    onExpandedChange(nextExpandedIds);
  };
  const handleFileClick = () => {
    if (!isClickableFile) return;
    onFileClick?.(item);
  };
  const handleRowKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      focusAdjacentTreeItem(event.currentTarget, event.key === "ArrowDown");
      return;
    }

    if (event.key === "ArrowRight") {
      if (collapsible && hasChildren && !isExpanded) {
        event.preventDefault();
        toggleExpanded();
      }
      return;
    }

    if (event.key === "ArrowLeft") {
      if (collapsible && hasChildren && isExpanded) {
        event.preventDefault();
        toggleExpanded();
      }
      return;
    }

    if (event.key !== "Enter" && event.key !== " ") return;

    event.preventDefault();
    if (collapsible && hasChildren && !item.href) {
      toggleExpanded();
      return;
    }

    if (isClickableFile) {
      handleFileClick();
      return;
    }

    if (event.currentTarget instanceof HTMLAnchorElement) {
      event.currentTarget.click();
    }
  };
  const content = (
    <>
      <span className="willa-file-tree-indent" aria-hidden="true">
        {Array.from({ length: depth }).map((_, index) => (
          <span key={index} className="willa-file-tree-guide" />
        ))}
      </span>
      <span className="willa-file-tree-toggle" aria-hidden="true">
        {hasChildren ? (
          isExpanded ? (
            <ChevronDownIcon />
          ) : (
            <ChevronRightIcon />
          )
        ) : null}
      </span>
      <span className="willa-file-tree-icon" aria-hidden="true">
        {item.icon ?? getDefaultIcon(type, item.name)}
      </span>
      <span className="willa-file-tree-content">
        <span className="willa-file-tree-name" title={nameTitle}>
          {item.name}
        </span>
        {item.description ? (
          <span className="willa-file-tree-description">
            {item.description}
          </span>
        ) : null}
      </span>
      {item.meta ? (
        <span className="willa-file-tree-meta" title={metaTitle}>
          {item.meta}
        </span>
      ) : null}
    </>
  );
  const className = classNames(
    "willa-file-tree-row",
    `willa-file-tree-row--${type}`,
    item.selected && "willa-file-tree-row--selected",
    item.muted && "willa-file-tree-row--muted",
    collapsible && hasChildren && "willa-file-tree-row--collapsible",
    isClickableFile && "willa-file-tree-row--clickable",
  );
  const rowProps = {
    onClick:
      collapsible && hasChildren
        ? toggleExpanded
        : isClickableFile
          ? handleFileClick
          : undefined,
  };

  const treeItemProps = {
    "aria-expanded": collapsible && hasChildren ? isExpanded : undefined,
    "aria-level": depth + 1,
    role: "treeitem",
    tabIndex: 0,
  } as const;

  return (
    <div key={keyPath} className="willa-file-tree-item">
      {item.href ? (
        <a
          {...treeItemProps}
          className={className}
          href={item.href}
          {...getLinkProps(item.href)}
          onKeyDown={handleRowKeyDown}
          onClick={isClickableFile ? handleFileClick : undefined}
        >
          {content}
        </a>
      ) : (
        <div
          {...treeItemProps}
          className={className}
          onKeyDown={handleRowKeyDown}
          {...rowProps}
        >
          {content}
        </div>
      )}
      {hasChildren && isExpanded ? (
        <div className="willa-file-tree-children" role="group">
          {item.children!.map((child, index) =>
            renderFileTreeItem({
              collapsible,
              expandedIds,
              item: child,
              onExpandedChange,
              onFileClick,
              depth: depth + 1,
              keyPath: `${keyPath}-${child.id ?? index}`,
              expandedId: getFileTreeItemExpandedId(
                child,
                `${keyPath}-${index}`,
              ),
            }),
          )}
        </div>
      ) : null}
    </div>
  );
};

const focusAdjacentTreeItem = (currentItem: HTMLElement, forward: boolean) => {
  const tree = currentItem.closest('[role="tree"]');
  if (!tree) return;

  const items = Array.from(
    tree.querySelectorAll<HTMLElement>('[role="treeitem"]'),
  );
  const currentIndex = items.indexOf(currentItem);
  if (currentIndex < 0) return;

  const nextIndex = forward ? currentIndex + 1 : currentIndex - 1;
  items[nextIndex]?.focus();
};

const collectExpandableIds = (
  items: Array<FileTreeItem>,
  parentKeyPath = "",
): Array<string> => {
  return items.flatMap((item, index) => {
    const keyPath = parentKeyPath
      ? `${parentKeyPath}-${item.id ?? index}`
      : String(item.id ?? index);

    if (!item.children?.length) return [];

    return [
      getFileTreeItemExpandedId(item, keyPath),
      ...collectExpandableIds(item.children, keyPath),
    ];
  });
};

const getFileTreeItemExpandedId = (
  item: FileTreeItem,
  fallbackKeyPath: string,
) => {
  return item.id ?? fallbackKeyPath;
};

const getFileTreeItemTextTitle = (value: ReactNode) => {
  return typeof value === "string" ? value : undefined;
};

const clampWidth = (value: number, min: number, max: number) => {
  return Math.min(Math.max(value, min), Math.max(min, max));
};

const getDefaultIcon = (type: FileTreeItemType, name: ReactNode) => {
  if (type === "folder") return <ArchiveIcon />;
  if (typeof name === "string" && name.toLowerCase().endsWith(".md")) {
    return <FileTextIcon />;
  }

  return <FileIcon />;
};

const getLinkProps = (
  href: string,
): Pick<AnchorHTMLAttributes<HTMLAnchorElement>, "target" | "rel"> => {
  if (!/^https?:\/\//.test(href)) return {};

  return {
    target: "_blank",
    rel: "noreferrer",
  };
};
