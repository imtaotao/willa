import { GitHubLogoIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import { Skeleton } from "willa/Skeleton";
import "willa/Skeleton.css";

import {
  componentDocRegistry,
  loadComponentDoc,
} from "#example/catalog/registry";
import { DocView } from "#example/catalog/DocView";
import { UsageGuide } from "#example/UsageGuide";
import type { ComponentDoc, ComponentDocEntry } from "#example/catalog/types";

type Theme = "light" | "dark";

const usagePageId = "usage";

const docGroups: Array<{
  id: ComponentDocEntry["category"];
  label: string;
}> = [
  { id: "content", label: "内容组件" },
  { id: "widgets", label: "场景组件" },
];

const getDocIdFromHash = () => {
  const hash = window.location.hash.replace(/^#\/?/, "");
  return hash ? decodeURIComponent(hash) : "";
};

const getInitialActiveId = () => {
  const hashId = getDocIdFromHash();
  if (hashId === usagePageId) return usagePageId;

  const hashDoc = componentDocRegistry.find((doc) => doc.id === hashId);
  return hashDoc?.id ?? usagePageId;
};

const updateDocHash = (id: string) => {
  const nextHash = `#/${encodeURIComponent(id)}`;
  if (window.location.hash === nextHash) return;
  window.history.pushState(null, "", nextHash);
};

export function App() {
  const [theme, setTheme] = useState<Theme>("light");
  const [activeId, setActiveId] = useState(getInitialActiveId);
  const [loadedDoc, setLoadedDoc] = useState<ComponentDoc | null>(null);
  const [isDocLoading, setIsDocLoading] = useState(false);
  const activeEntry = componentDocRegistry.find((doc) => doc.id === activeId);

  useEffect(() => {
    document.documentElement.dataset.wkTheme =
      theme === "dark" ? "dark" : "light";
  }, [theme]);

  useEffect(() => {
    const syncActiveDocFromUrl = () => {
      const hashId = getDocIdFromHash();
      if (hashId === usagePageId) {
        setActiveId(usagePageId);
        return;
      }

      const hashDoc = componentDocRegistry.find((doc) => doc.id === hashId);
      setActiveId(hashDoc?.id ?? usagePageId);
    };

    window.addEventListener("hashchange", syncActiveDocFromUrl);
    window.addEventListener("popstate", syncActiveDocFromUrl);

    return () => {
      window.removeEventListener("hashchange", syncActiveDocFromUrl);
      window.removeEventListener("popstate", syncActiveDocFromUrl);
    };
  }, []);

  useEffect(() => {
    if (!activeEntry) {
      setLoadedDoc(null);
      setIsDocLoading(false);
      return;
    }

    let disposed = false;
    setIsDocLoading(true);
    setLoadedDoc(null);

    loadComponentDoc(activeEntry)
      .then((doc) => {
        if (disposed) return;
        setLoadedDoc(doc);
      })
      .finally(() => {
        if (disposed) return;
        setIsDocLoading(false);
      });

    return () => {
      disposed = true;
    };
  }, [activeEntry]);

  return (
    <main className="docs-app">
      <aside className="docs-sidebar">
        <a className="docs-brand" href="/">
          Willa
        </a>
        <nav className="docs-nav" aria-label="组件列表">
          <div className="docs-nav-group">
            <div className="docs-nav-title">开始</div>
            <button
              type="button"
              className={activeId === usagePageId ? "is-active" : undefined}
              onClick={() => {
                setActiveId(usagePageId);
                updateDocHash(usagePageId);
              }}
            >
              安装使用
            </button>
          </div>

          {docGroups.map((group) => {
            const docs = componentDocRegistry.filter(
              (doc) => doc.category === group.id,
            );
            if (!docs.length) return null;

            return (
              <div className="docs-nav-group" key={group.id}>
                <div className="docs-nav-title">{group.label}</div>
                {docs.map((doc) => (
                  <button
                    key={doc.id}
                    type="button"
                    className={doc.id === activeId ? "is-active" : undefined}
                    onClick={() => {
                      setActiveId(doc.id);
                      updateDocHash(doc.id);
                    }}
                  >
                    {doc.name}
                  </button>
                ))}
              </div>
            );
          })}
        </nav>
      </aside>

      <div className="docs-main">
        <header className="docs-header">
          <div className="docs-header-title">
            <p className="docs-kicker">Willa Components</p>
            <p className="docs-header-subtitle">内容组件与场景组件示例</p>
          </div>
          <nav className="docs-actions" aria-label="示例控制">
            <a
              className="docs-header-link"
              href="https://github.com/imtaotao/willa"
              target="_blank"
              rel="noreferrer"
              aria-label="打开 GitHub 仓库"
            >
              <GitHubLogoIcon className="docs-theme-icon" />
            </a>
            <button
              type="button"
              className="docs-theme-button"
              aria-label={
                theme === "dark" ? "切换到亮色主题" : "切换到暗色主题"
              }
              onClick={() =>
                setTheme((current) => (current === "dark" ? "light" : "dark"))
              }
            >
              {theme === "dark" ? (
                <SunIcon className="docs-theme-icon" />
              ) : (
                <MoonIcon className="docs-theme-icon" />
              )}
            </button>
          </nav>
        </header>

        <div className="docs-content willa-shell">
          {activeId === usagePageId ? (
            <UsageGuide />
          ) : loadedDoc ? (
            <DocView doc={loadedDoc} />
          ) : (
            <Skeleton
              loading={isDocLoading}
              className="docs-loading"
              lines={[
                { width: "min(220px, 52%)", height: 16 },
                { width: "min(520px, 100%)", height: 16 },
              ]}
              block
              blockHeight={220}
              label="加载组件文档"
            >
              <span className="docs-empty">暂无组件</span>
            </Skeleton>
          )}
        </div>
      </div>
    </main>
  );
}
