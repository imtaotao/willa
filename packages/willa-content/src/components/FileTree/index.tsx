import {
  useMemo,
  useState,
  type AnchorHTMLAttributes,
  type CSSProperties,
  type HTMLAttributes,
  type KeyboardEvent,
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

export type FileTreeItem = {
  name: ReactNode;
  type?: FileTreeItemType;
  id?: string;
  href?: string;
  meta?: ReactNode;
  description?: ReactNode;
  icon?: ReactNode;
  selected?: boolean;
  muted?: boolean;
  children?: Array<FileTreeItem>;
};

export type FileTreeProps = {
  items: Array<FileTreeItem>;
  size?: FileTreeSize;
  width?: CSSProperties["width"];
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
    collapsible = false,
    defaultExpandedIds,
    expandedIds,
    onExpandedChange,
    onFileClick,
    className,
    style,
    ...treeProps
  } = props;
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

  return (
    <div
      {...treeProps}
      style={width === undefined ? style : { ...style, width }}
      className={classNames(
        "willa-file-tree",
        `willa-file-tree--${size}`,
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
          }),
        )}
      </div>
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
}) => {
  const {
    collapsible,
    expandedIds,
    item,
    onExpandedChange,
    onFileClick,
    depth,
    keyPath,
  } = options;
  const hasChildren = Boolean(item.children?.length);
  const type = item.type ?? (hasChildren ? "folder" : "file");
  const isFile = type === "file";
  const isClickableFile = isFile && Boolean(onFileClick);
  const isExpanded = !collapsible || !hasChildren || expandedIds.has(keyPath);
  const toggleExpanded = () => {
    if (!collapsible || !hasChildren) return;

    const nextExpandedIds = new Set(expandedIds);
    if (nextExpandedIds.has(keyPath)) {
      nextExpandedIds.delete(keyPath);
    } else {
      nextExpandedIds.add(keyPath);
    }

    onExpandedChange(nextExpandedIds);
  };
  const handleFileClick = () => {
    if (!isClickableFile) return;
    onFileClick?.(item);
  };
  const handleFileKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (!isClickableFile) return;
    if (event.key !== "Enter" && event.key !== " ") return;

    event.preventDefault();
    handleFileClick();
  };
  const content = (
    <>
      <span className="willa-file-tree-indent" aria-hidden="true">
        {Array.from({ length: depth }).map((_, index) => (
          <span key={index} className="willa-file-tree-guide" />
        ))}
      </span>
      {collapsible && hasChildren ? (
        <button
          className="willa-file-tree-toggle"
          type="button"
          aria-label={isExpanded ? "收起目录" : "展开目录"}
          aria-expanded={isExpanded}
          onClick={(event) => {
            event.stopPropagation();
            toggleExpanded();
          }}
        >
          {isExpanded ? <ChevronDownIcon /> : <ChevronRightIcon />}
        </button>
      ) : (
        <span className="willa-file-tree-toggle" aria-hidden="true">
          {hasChildren && isExpanded ? (
            <ChevronDownIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </span>
      )}
      <span className="willa-file-tree-icon" aria-hidden="true">
        {item.icon ?? getDefaultIcon(type, item.name)}
      </span>
      <span className="willa-file-tree-content">
        <span className="willa-file-tree-name">{item.name}</span>
        {item.description ? (
          <span className="willa-file-tree-description">
            {item.description}
          </span>
        ) : null}
      </span>
      {item.meta ? (
        <span className="willa-file-tree-meta">{item.meta}</span>
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
      collapsible && hasChildren && !item.href
        ? toggleExpanded
        : isClickableFile
          ? handleFileClick
          : undefined,
  };

  return (
    <div key={keyPath} className="willa-file-tree-item" role="treeitem">
      {item.href ? (
        <a
          className={className}
          href={item.href}
          {...getLinkProps(item.href)}
          aria-expanded={collapsible && hasChildren ? isExpanded : undefined}
          onClick={isClickableFile ? handleFileClick : undefined}
        >
          {content}
        </a>
      ) : (
        <div
          className={className}
          aria-expanded={collapsible && hasChildren ? isExpanded : undefined}
          role={isClickableFile ? "button" : undefined}
          tabIndex={isClickableFile ? 0 : undefined}
          onKeyDown={isClickableFile ? handleFileKeyDown : undefined}
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
            }),
          )}
        </div>
      ) : null}
    </div>
  );
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

    return [keyPath, ...collectExpandableIds(item.children, keyPath)];
  });
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
