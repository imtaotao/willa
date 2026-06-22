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
import { ArchiveIcon, FileIcon, FileTextIcon } from "@radix-ui/react-icons";
import { clampNumber } from "@willa-ui/shared";

import {
  Tree,
  type TreeItem,
  type TreeKey,
} from "@willa-ui/content/components/Tree";

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
  const treeItems = useMemo(() => {
    return toTreeItems(items, onFileClick);
  }, [items, onFileClick]);
  const itemByKey = useMemo(() => createFileTreeItemMap(items), [items]);
  const selectedKeys = useMemo(() => collectSelectedKeys(items), [items]);
  const updateExpandedIds = (nextExpandedIds: Set<string>) => {
    if (!expandedIds) {
      setUncontrolledExpandedIds(nextExpandedIds);
    }

    onExpandedChange?.([...nextExpandedIds]);
  };
  const handleExpandedChange = (nextKeys: Array<TreeKey>) => {
    updateExpandedIds(new Set(nextKeys.map(String)));
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
      <Tree
        className="willa-file-tree-list"
        items={treeItems}
        size={size}
        showLine
        selectable={false}
        expandOnClick={collapsible}
        defaultExpandAll={!collapsible}
        expandedKeys={collapsible ? [...resolvedExpandedIds] : undefined}
        selectedKeys={selectedKeys}
        onExpandedChange={collapsible ? handleExpandedChange : undefined}
        onItemClick={(info) => {
          const item = itemByKey.get(String(info.key));
          const type =
            item?.type ?? (item?.children?.length ? "folder" : "file");
          if (item && type === "file") {
            onFileClick?.(item);
          }
        }}
      />
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

const toTreeItems = (
  items: Array<FileTreeItem>,
  onFileClick?: (item: FileTreeItem) => void,
  parentKeyPath = "",
): Array<TreeItem> => {
  return items.map((item, index) => {
    const keyPath = parentKeyPath
      ? `${parentKeyPath}-${item.id ?? index}`
      : String(item.id ?? index);
    const hasChildren = Boolean(item.children?.length);
    const type = item.type ?? (hasChildren ? "folder" : "file");
    const nameTitle = getFileTreeItemTextTitle(item.name);
    const metaTitle = getFileTreeItemTextTitle(item.meta);
    const title = item.href ? (
      <a
        className="willa-file-tree-link"
        href={item.href}
        title={nameTitle}
        {...getLinkProps(item.href)}
        onClick={(event) => {
          event.stopPropagation();
          onFileClick?.(item);
        }}
      >
        {item.name}
      </a>
    ) : (
      <span title={nameTitle}>{item.name}</span>
    );

    return {
      key: getFileTreeItemExpandedId(item, keyPath),
      title,
      description: item.description,
      meta: item.meta ? <span title={metaTitle}>{item.meta}</span> : undefined,
      icon: item.icon ?? getDefaultIcon(type, item.name),
      selected: item.selected,
      muted: item.muted,
      selectable: false,
      className: classNames(
        "willa-file-tree-node",
        `willa-file-tree-node--${type}`,
        type === "file" && onFileClick && "willa-file-tree-node--clickable",
      ),
      children: item.children?.length
        ? toTreeItems(item.children, onFileClick, keyPath)
        : undefined,
    };
  });
};

const createFileTreeItemMap = (
  items: Array<FileTreeItem>,
  parentKeyPath = "",
) => {
  const result = new Map<string, FileTreeItem>();

  items.forEach((item, index) => {
    const keyPath = parentKeyPath
      ? `${parentKeyPath}-${item.id ?? index}`
      : String(item.id ?? index);
    const key = getFileTreeItemExpandedId(item, keyPath);

    result.set(key, item);

    if (item.children?.length) {
      createFileTreeItemMap(item.children, keyPath).forEach((child, childKey) =>
        result.set(childKey, child),
      );
    }
  });

  return result;
};

const collectSelectedKeys = (
  items: Array<FileTreeItem>,
  parentKeyPath = "",
): Array<string> => {
  return items.flatMap((item, index) => {
    const keyPath = parentKeyPath
      ? `${parentKeyPath}-${item.id ?? index}`
      : String(item.id ?? index);
    const currentKey = getFileTreeItemExpandedId(item, keyPath);
    const childKeys = item.children?.length
      ? collectSelectedKeys(item.children, keyPath)
      : [];
    return item.selected ? [currentKey, ...childKeys] : childKeys;
  });
};

const getFileTreeItemTextTitle = (value: ReactNode) => {
  return typeof value === "string" ? value : undefined;
};

const clampWidth = (value: number, min: number, max: number) => {
  return clampNumber(value, min, max);
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

FileTree.displayName = "FileTree";
