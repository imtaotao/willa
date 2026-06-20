import { MDXProvider } from "@mdx-js/react";
import classNames from "classnames";
import {
  useRef,
  useMemo,
  useCallback,
  createElement,
  type ReactNode,
  type ComponentProps,
  type ComponentType,
} from "react";
import {
  Badge,
  Callout,
  ChatThread,
  Citation,
  CodeBlock,
  DetailsBlock,
  DescriptionList,
  DiffViewer,
  Download,
  EmptyState,
  FileCard,
  FileTree,
  Image as WillaImage,
  ImageGallery as WillaImageGallery,
  Kbd,
  KbdShortcut,
  List,
  SourceCard,
  Step,
  Steps,
  Table,
  Timeline,
} from "@willa-ui/content";
import { Card, Panel, Separator } from "@willa-ui/layout";
import {
  createHeadingIdFactory,
  flattenText,
  isMediaOnlyParagraph,
} from "@willa-ui/shared";

import type { LightboxState, ResolveAssetUrl } from "@willa-ui/shared";
import type { ImageGalleryProps } from "@willa-ui/content";

import {
  AudioEmbed as WillaAudioEmbed,
  type AudioEmbedProps,
} from "#widgets/components/AudioEmbed";
import {
  AudioLink as WillaAudioLink,
  type AudioLinkProps,
} from "#widgets/components/AudioLink";
import { EnglishCards } from "#widgets/components/EnglishCards";
import { GitHubMention } from "#widgets/components/GitHubMention";
import { GitHubRepo } from "#widgets/components/GitHubRepo";
import { Poem } from "#widgets/components/Poem";
import {
  VideoEmbed as WillaVideoEmbed,
  type VideoEmbedProps,
} from "#widgets/components/VideoEmbed";
import {
  VideoLink as WillaVideoLink,
  type VideoLinkProps,
} from "#widgets/components/VideoLink";
import { WebEmbed } from "#widgets/components/WebEmbed";
import { XPostEmbed } from "#widgets/components/XPostEmbed";

export { extractHeadings } from "@willa-ui/shared";
export type { Heading } from "@willa-ui/shared";

export type MdxProps = {
  Content: ComponentType<Record<string, unknown>>;
  articleSourcePath: string;
  resolveAssetUrl: ResolveAssetUrl;
  openLightbox?: (state: LightboxState | null) => void;
};

const presetColors = [
  "gray",
  "blue",
  "green",
  "cyan",
  "orange",
  "red",
  "purple",
  "pink",
] as const;

type PresetColor = (typeof presetColors)[number];

type ColorTextProps = {
  color?: string;
  preset?: PresetColor;
  c?: PresetColor;
  className?: string;
  children?: ReactNode;
};

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type HeadingComponent = ((p: ComponentProps<"h1">) => ReactNode) & {
  mdxHeadingTag: HeadingTag;
};

export function Mdx(props: MdxProps) {
  const nextHeadingIdRef = useRef(createHeadingIdFactory());

  const openLightbox = useCallback(
    (state: LightboxState | null) => {
      if (!state || !state.images.length) return;
      props.openLightbox?.(state);
    },
    [props.openLightbox],
  );

  const isPresetColor = (value?: string): value is PresetColor =>
    presetColors.includes(value as PresetColor);

  const renderColorText = useCallback(
    ({ color, preset, c, className, children }: ColorTextProps) => {
      const resolvedPreset =
        c ?? preset ?? (isPresetColor(color) ? color : undefined);
      const resolvedColor = resolvedPreset
        ? `var(--willa-color-${resolvedPreset})`
        : color;

      return (
        <span
          className={classNames("willa-prose-color-text", className)}
          style={resolvedColor ? { color: resolvedColor } : undefined}
        >
          {children}
        </span>
      );
    },
    [],
  );

  const Image = useCallback(
    (p: ComponentProps<"img">) => (
      <WillaImage
        {...p}
        articleSourcePath={props.articleSourcePath}
        resolveAssetUrl={props.resolveAssetUrl}
        openLightbox={openLightbox}
      />
    ),
    [openLightbox, props.articleSourcePath, props.resolveAssetUrl],
  );
  const ImageGallery = useCallback(
    (p: ImageGalleryProps) => (
      <WillaImageGallery
        {...p}
        articleSourcePath={props.articleSourcePath}
        resolveAssetUrl={props.resolveAssetUrl}
        openLightbox={openLightbox}
      />
    ),
    [openLightbox, props.articleSourcePath, props.resolveAssetUrl],
  );
  const AudioEmbed = useCallback(
    (p: AudioEmbedProps) => (
      <WillaAudioEmbed
        {...p}
        articleSourcePath={props.articleSourcePath}
        resolveAssetUrl={props.resolveAssetUrl}
      />
    ),
    [props.articleSourcePath, props.resolveAssetUrl],
  );
  const VideoEmbed = useCallback(
    (p: VideoEmbedProps) => (
      <WillaVideoEmbed
        {...p}
        articleSourcePath={props.articleSourcePath}
        resolveAssetUrl={props.resolveAssetUrl}
      />
    ),
    [props.articleSourcePath, props.resolveAssetUrl],
  );
  const AudioLink = useCallback(
    (p: AudioLinkProps) => (
      <WillaAudioLink
        {...p}
        articleSourcePath={props.articleSourcePath}
        resolveAssetUrl={props.resolveAssetUrl}
      />
    ),
    [props.articleSourcePath, props.resolveAssetUrl],
  );
  const VideoLink = useCallback(
    (p: VideoLinkProps) => (
      <WillaVideoLink
        {...p}
        articleSourcePath={props.articleSourcePath}
        resolveAssetUrl={props.resolveAssetUrl}
      />
    ),
    [props.articleSourcePath, props.resolveAssetUrl],
  );

  const renderHeading = useCallback(
    (tag: HeadingTag, className: string, p: ComponentProps<"h1">) => {
      const text = flattenText(p.children);
      const id = nextHeadingIdRef.current(text);
      const label = text ? `定位到标题：${text}` : "定位到当前标题";

      return createElement(
        tag,
        { id, className },
        <a
          href={`#${id}`}
          className="willa-prose-heading-link"
          aria-label={label}
        >
          {p.children}
        </a>,
      );
    },
    [],
  );

  const components = useMemo(() => {
    const createHeadingComponent = (
      tag: HeadingTag,
      className: string,
    ): HeadingComponent => {
      const Heading = ((p: ComponentProps<"h1">) =>
        renderHeading(tag, className, p)) as unknown as HeadingComponent;
      Heading.mdxHeadingTag = tag;
      return Heading;
    };

    return {
      h1: createHeadingComponent("h1", "willa-prose-h1"),
      h2: createHeadingComponent("h2", "willa-prose-h2"),
      h3: createHeadingComponent("h3", "willa-prose-h3"),
      h4: createHeadingComponent("h4", "willa-prose-h4"),
      h5: createHeadingComponent("h5", "willa-prose-h5"),
      h6: createHeadingComponent("h6", "willa-prose-h6"),
      p: (p: ComponentProps<"p">) => {
        if (isMediaOnlyParagraph(p.children)) {
          return <div className="willa-prose-media-block">{p.children}</div>;
        }
        return <p className="willa-prose-p">{p.children}</p>;
      },
      blockquote: (p: ComponentProps<"blockquote">) => (
        <blockquote className="willa-prose-quote">{p.children}</blockquote>
      ),
      ul: (p: ComponentProps<"ul">) => (
        <ul className="willa-prose-ul">{p.children}</ul>
      ),
      ol: (p: ComponentProps<"ol">) => (
        <ol className="willa-prose-ol">{p.children}</ol>
      ),
      li: (p: ComponentProps<"li">) => (
        <li className="willa-prose-li">{p.children}</li>
      ),
      mark: (p: ComponentProps<"mark">) => {
        const { className, children, ...rest } = p;
        return (
          <mark className={classNames("willa-prose-mark", className)} {...rest}>
            {children}
          </mark>
        );
      },
      ColorText: renderColorText,
      Color: renderColorText,
      a: (p: ComponentProps<"a">) => {
        const { className, children, ...rest } = p;
        return (
          <a {...rest} className={classNames("willa-prose-link", className)}>
            {children}
          </a>
        );
      },
      img: Image,
      ImageGallery,
      AudioEmbed,
      VideoEmbed,
      Badge,
      Card,
      Citation,
      DescriptionList,
      DiffViewer,
      Download,
      EmptyState,
      FileCard,
      FileTree,
      Kbd,
      KbdShortcut,
      List,
      Panel,
      SourceCard,
      Table,
      Timeline,
      AudioLink,
      VideoLink,
      ChatThread,
      Callout,
      Step,
      Steps,
      DetailsBlock,
      Poem,
      GitHubMention,
      GitHubRepo,
      WebEmbed,
      XPostEmbed,
      EnglishCards,
      pre: CodeBlock,
      hr: () => <Separator className="willa-prose-separator" />,
      code: (p: ComponentProps<"code">) => {
        const isInline = !p.className;
        if (!isInline) return <code className={p.className}>{p.children}</code>;
        return <code className="willa-prose-inline-code">{p.children}</code>;
      },
    };
  }, [
    ImageGallery,
    AudioEmbed,
    VideoEmbed,
    AudioLink,
    VideoLink,
    Badge,
    Card,
    Image,
    ChatThread,
    Callout,
    DescriptionList,
    DetailsBlock,
    DiffViewer,
    Download,
    EmptyState,
    FileCard,
    FileTree,
    Kbd,
    KbdShortcut,
    List,
    Panel,
    Poem,
    Separator,
    SourceCard,
    Step,
    Steps,
    Table,
    Timeline,
    GitHubMention,
    GitHubRepo,
    WebEmbed,
    XPostEmbed,
    EnglishCards,
    Citation,
    renderColorText,
    renderHeading,
  ]);

  return (
    <MDXProvider components={components}>
      <props.Content components={components} />
    </MDXProvider>
  );
}

Mdx.displayName = "Mdx";
