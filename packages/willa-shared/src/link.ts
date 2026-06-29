import type { ComponentPropsWithoutRef, ReactNode } from "react";

export type WillaRenderLinkProps = Omit<
  ComponentPropsWithoutRef<"a">,
  "children" | "href"
> & {
  href: string;
  children: ReactNode;
};

export type WillaRenderLink = (props: WillaRenderLinkProps) => ReactNode;
