# @willa-ui/ai

AI product components for Willa.

This package owns AI-oriented scene components such as prompt inputs, chat
messages, source citations, tool call displays, generation cards, context
panels, and agent status views.

Keep general product primitives, such as buttons, cards, tabs, dialogs,
tooltips, popovers, inputs, and loading indicators, in `@willa-ui/content` when
they are useful outside AI products. `@willa-ui/ai` can compose content
components and reuse content CSS through auklet style dependencies, but it
should not copy content styles or theme variables.
