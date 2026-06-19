import type { ReactNode } from "react";

export type PropRow = {
  name: string;
  type: string;
  defaultValue?: string;
  required?: boolean;
  group?: string;
  description: string;
};

export type ComponentDoc = {
  id: string;
  name: string;
  displayName?: string;
  category: "content" | "form" | "layout" | "ai" | "widgets";
  packageName: string;
  description: string;
  preview: ReactNode;
  code: string;
  props: Array<PropRow>;
  propGroups?: Array<{
    title: string;
    description: string;
  }>;
  sections?: Array<{
    title: string;
    code: string;
    content: ReactNode;
  }>;
};

export type ComponentDocEntry = Pick<
  ComponentDoc,
  "id" | "name" | "category"
> & {
  load: () => Promise<ComponentDoc>;
};
