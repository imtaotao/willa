import { GitHubLogoIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import { Callout } from "willa/Callout";
import { IconButton } from "willa/IconButton";
import { Skeleton } from "willa/Skeleton";
import "willa/Callout.css";
import "willa/IconButton.css";
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
  const [docError, setDocError] = useState<string | null>(null);
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
      setDocError(null);
      return;
    }

    let disposed = false;
    setIsDocLoading(true);
    setLoadedDoc(null);
    setDocError(null);

    loadComponentDoc(activeEntry)
      .then((doc) => {
        if (disposed) return;
        setLoadedDoc(doc);
      })
      .catch((error: unknown) => {
        if (disposed) return;
        setDocError(error instanceof Error ? error.message : String(error));
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
            <IconButton
              href="https://github.com/imtaotao/willa"
              target="_blank"
              variant="outline"
              size="md"
              ariaLabel="打开 GitHub 仓库"
              icon={<GitHubLogoIcon />}
            />
            <IconButton
              variant="outline"
              size="md"
              ariaLabel={theme === "dark" ? "切换到亮色主题" : "切换到暗色主题"}
              icon={theme === "dark" ? <SunIcon /> : <MoonIcon />}
              onClick={() =>
                setTheme((current) => (current === "dark" ? "light" : "dark"))
              }
            />
          </nav>
        </header>

        <div className="docs-content willa-shell">
          {activeId === usagePageId ? (
            <UsageGuide />
          ) : loadedDoc ? (
            <DocView doc={loadedDoc} />
          ) : docError ? (
            <Callout tone="error" title="组件加载失败">
              {docError}
            </Callout>
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
              <Callout title="暂无组件">当前没有可展示的组件。</Callout>
            </Skeleton>
          )}
        </div>
      </div>
    </main>
  );
}
