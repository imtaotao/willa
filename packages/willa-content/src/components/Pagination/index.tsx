import { type MouseEvent, type ReactNode } from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
} from "@radix-ui/react-icons";
import classNames from "classnames";
import {
  clampNumber,
  createNumberRange,
  useControllableState,
  type WillaRenderLink,
  type WillaRenderLinkProps,
} from "@willa-ui/shared";

export type PaginationSize = "sm" | "md";

export type PaginationEllipsisContext = {
  direction: "start" | "end";
  startPage: number;
  endPage: number;
  currentPage: number;
  pageCount: number;
};

export type PaginationProps = {
  pageCount: number;
  page?: number;
  defaultPage?: number;
  siblingCount?: number;
  boundaryCount?: number;
  size?: PaginationSize;
  showFirstLast?: boolean;
  showPrevNext?: boolean;
  previousLabel?: ReactNode;
  nextLabel?: ReactNode;
  ariaLabel?: string;
  disabled?: boolean;
  className?: string;
  onPageChange?: (page: number) => void;
  getPageHref?: (page: number) => string;
  renderLink?: WillaRenderLink;
  getEllipsisPage?: (context: PaginationEllipsisContext) => number;
};

type PaginationItem =
  | number
  | {
      type: "ellipsis";
      key: "ellipsis-start" | "ellipsis-end";
      direction: "start" | "end";
      startPage: number;
      endPage: number;
    };

export function Pagination(props: PaginationProps) {
  const {
    page,
    defaultPage = 1,
    pageCount,
    onPageChange,
    siblingCount = 1,
    boundaryCount = 1,
    size = "md",
    showFirstLast = true,
    showPrevNext = true,
    getPageHref,
    previousLabel = "上一页",
    nextLabel = "下一页",
    ariaLabel = "分页导航",
    disabled = false,
    className,
    getEllipsisPage,
    renderLink,
  } = props;
  const normalizedPageCount = Math.max(0, Math.floor(pageCount));
  const [pageState, setCurrentPage] = useControllableState({
    value:
      page === undefined ? undefined : clampPage(page, normalizedPageCount),
    defaultValue: () => clampPage(defaultPage, normalizedPageCount),
    onChange: onPageChange,
  });
  const currentPage = clampPage(pageState, normalizedPageCount);

  if (normalizedPageCount <= 0) return null;

  const setPage = (nextPage: number) => {
    const resolvedPage = clampPage(nextPage, normalizedPageCount);
    if (resolvedPage === currentPage || disabled) return;

    setCurrentPage(resolvedPage);
  };
  const items = createPaginationItems({
    page: currentPage,
    pageCount: normalizedPageCount,
    siblingCount,
    boundaryCount,
  });

  return (
    <nav
      className={classNames(
        "willa-pagination",
        `willa-pagination--${size}`,
        disabled && "willa-pagination--disabled",
        className,
      )}
      aria-label={ariaLabel}
    >
      <ol className="willa-pagination-list">
        {showFirstLast ? (
          <li>
            <PaginationControl
              page={1}
              currentPage={currentPage}
              disabled={disabled || currentPage === 1}
              getPageHref={getPageHref}
              renderLink={renderLink}
              label="第一页"
              onPageChange={setPage}
            >
              <DoubleArrowLeftIcon />
            </PaginationControl>
          </li>
        ) : null}
        {showPrevNext ? (
          <li>
            <PaginationControl
              page={currentPage - 1}
              currentPage={currentPage}
              disabled={disabled || currentPage === 1}
              getPageHref={getPageHref}
              renderLink={renderLink}
              label={
                typeof previousLabel === "string" ? previousLabel : "上一页"
              }
              onPageChange={setPage}
            >
              <ChevronLeftIcon />
              <span className="willa-pagination-control-label">
                {previousLabel}
              </span>
            </PaginationControl>
          </li>
        ) : null}
        {items.map((item) => (
          <li key={typeof item === "number" ? item : item.key}>
            {typeof item === "number" ? (
              <PaginationControl
                page={item}
                currentPage={currentPage}
                disabled={disabled}
                getPageHref={getPageHref}
                renderLink={renderLink}
                label={`第 ${item} 页`}
                onPageChange={setPage}
              >
                {item}
              </PaginationControl>
            ) : (
              <PaginationEllipsis
                item={item}
                currentPage={currentPage}
                pageCount={normalizedPageCount}
                disabled={disabled}
                getPageHref={getPageHref}
                renderLink={renderLink}
                getEllipsisPage={getEllipsisPage}
                onPageChange={setPage}
              />
            )}
          </li>
        ))}
        {showPrevNext ? (
          <li>
            <PaginationControl
              page={currentPage + 1}
              currentPage={currentPage}
              disabled={disabled || currentPage === normalizedPageCount}
              getPageHref={getPageHref}
              renderLink={renderLink}
              label={typeof nextLabel === "string" ? nextLabel : "下一页"}
              onPageChange={setPage}
            >
              <span className="willa-pagination-control-label">
                {nextLabel}
              </span>
              <ChevronRightIcon />
            </PaginationControl>
          </li>
        ) : null}
        {showFirstLast ? (
          <li>
            <PaginationControl
              page={normalizedPageCount}
              currentPage={currentPage}
              disabled={disabled || currentPage === normalizedPageCount}
              getPageHref={getPageHref}
              renderLink={renderLink}
              label="最后一页"
              onPageChange={setPage}
            >
              <DoubleArrowRightIcon />
            </PaginationControl>
          </li>
        ) : null}
      </ol>
    </nav>
  );
}

const PaginationEllipsis = (props: {
  item: Extract<PaginationItem, { type: "ellipsis" }>;
  currentPage: number;
  pageCount: number;
  disabled: boolean;
  onPageChange: (page: number) => void;
  getPageHref?: (page: number) => string;
  renderLink?: WillaRenderLink;
  getEllipsisPage?: (context: PaginationEllipsisContext) => number;
}) => {
  const context: PaginationEllipsisContext = {
    direction: props.item.direction,
    startPage: props.item.startPage,
    endPage: props.item.endPage,
    currentPage: props.currentPage,
    pageCount: props.pageCount,
  };
  const targetPage = clampPage(
    props.getEllipsisPage?.(context) ??
      Math.round((props.item.startPage + props.item.endPage) / 2),
    props.pageCount,
  );

  if (props.item.startPage > props.item.endPage) {
    return (
      <span className="willa-pagination-ellipsis" aria-hidden="true">
        ...
      </span>
    );
  }

  return (
    <PaginationControl
      page={targetPage}
      currentPage={props.currentPage}
      disabled={props.disabled}
      getPageHref={props.getPageHref}
      renderLink={props.renderLink}
      label={`跳转到第 ${targetPage} 页`}
      onPageChange={props.onPageChange}
      className="willa-pagination-ellipsis"
    >
      <span aria-hidden="true">...</span>
    </PaginationControl>
  );
};

const PaginationControl = (props: {
  page: number;
  currentPage: number;
  disabled: boolean;
  label: string;
  children: ReactNode;
  className?: string;
  onPageChange: (page: number) => void;
  getPageHref?: (page: number) => string;
  renderLink?: WillaRenderLink;
}) => {
  const isCurrent = props.page === props.currentPage;
  const className = classNames(
    "willa-pagination-control",
    props.className,
    isCurrent && "willa-pagination-control--current",
  );
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    if (props.disabled || isCurrent) {
      event.preventDefault();
      return;
    }
    props.onPageChange(props.page);
  };

  if (props.getPageHref && !props.disabled && !isCurrent) {
    const linkProps = {
      className,
      href: props.getPageHref(props.page),
      "aria-label": props.label,
      onClick: handleClick,
      children: props.children,
    } satisfies WillaRenderLinkProps;

    if (props.renderLink) return props.renderLink(linkProps);
    return <a {...linkProps} />;
  }

  return (
    <button
      className={className}
      type="button"
      aria-current={isCurrent ? "page" : undefined}
      aria-label={props.label}
      disabled={props.disabled}
      onClick={handleClick}
    >
      {props.children}
    </button>
  );
};

const createPaginationItems = (options: {
  page: number;
  pageCount: number;
  siblingCount: number;
  boundaryCount: number;
}): Array<PaginationItem> => {
  const siblingCount = Math.max(0, Math.floor(options.siblingCount));
  const boundaryCount = Math.max(0, Math.floor(options.boundaryCount));
  const visibleSiblingStart = Math.max(
    options.page - siblingCount,
    boundaryCount + 1,
  );
  const visibleSiblingEnd = Math.min(
    options.page + siblingCount,
    options.pageCount - boundaryCount,
  );
  const items: Array<PaginationItem> = [];
  const startPages = createNumberRange(
    1,
    Math.min(boundaryCount, options.pageCount),
  );
  const endPages = createNumberRange(
    Math.max(options.pageCount - boundaryCount + 1, boundaryCount + 1),
    options.pageCount,
  );

  items.push(...startPages);

  if (visibleSiblingStart > boundaryCount + 2) {
    items.push({
      type: "ellipsis",
      key: "ellipsis-start",
      direction: "start",
      startPage: boundaryCount + 1,
      endPage: visibleSiblingStart - 1,
    });
  } else if (boundaryCount + 1 < visibleSiblingStart) {
    items.push(boundaryCount + 1);
  }

  items.push(...createNumberRange(visibleSiblingStart, visibleSiblingEnd));

  if (visibleSiblingEnd < options.pageCount - boundaryCount - 1) {
    items.push({
      type: "ellipsis",
      key: "ellipsis-end",
      direction: "end",
      startPage: visibleSiblingEnd + 1,
      endPage: options.pageCount - boundaryCount,
    });
  } else if (visibleSiblingEnd + 1 < options.pageCount - boundaryCount + 1) {
    items.push(visibleSiblingEnd + 1);
  }

  items.push(...endPages);

  return dedupePaginationItems(items);
};

const dedupePaginationItems = (items: Array<PaginationItem>) => {
  const usedPages = new Set<number>();
  return items.filter((item) => {
    if (typeof item !== "number") return true;
    if (usedPages.has(item)) return false;
    usedPages.add(item);
    return true;
  });
};

const clampPage = (page: number, pageCount: number) => {
  if (pageCount <= 0) return 1;
  return clampNumber(Math.floor(page), 1, pageCount);
};

Pagination.displayName = "Pagination";
