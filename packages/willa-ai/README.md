# @willa-ui/ai

AI product components for Willa UI.

Use this package for AI-oriented scene components such as prompt inputs, chat
messages, attachments, tool call cards, reasoning steps, generation summaries,
and assistant status views.

## Import

Full styles:

```tsx
import { ChatMessage, PromptInput } from "@willa-ui/ai";
import "@willa-ui/ai/style.css";
```

Single-component styles:

```tsx
import "@willa-ui/ai/external.css";
import "@willa-ui/ai/themes/light.css";
import "@willa-ui/ai/themes/dark.css";

import { ChatMessage } from "@willa-ui/ai/components/ChatMessage";
import "@willa-ui/ai/components/ChatMessage.css";
```

## Boundaries

AI components can compose layout, content, and form components. Lower-level
packages should not depend on AI components or AI-owned theme variables.
